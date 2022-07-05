locals {
  project         = data.terraform_remote_state.general.outputs.project_id
  service_account = data.terraform_remote_state.general.outputs.google_compute_default_service_account_email
}

resource "google_cloud_run_service" "docs" {
  project  = local.project
  location = "us-central1"
  name     = "docs-animeshon-com"

  template {
    metadata {
      annotations = {
        "autoscaling.knative.dev/maxScale" = "5"
        "run.googleapis.com/client-name"   = "cloud-console"
      }
    }

    spec {
      container_concurrency = 80
      service_account_name  = local.service_account

      containers {
        image = format("gcr.io/gcp-animeshon-general/docs:%s", var.image_tag)

        env {
          name  = "HOST"
          value = "docs.animeshon.com"
        }

        resources {
          limits = {
            cpu    = "1000m"
            memory = "256Mi"
          }
        }
      }
    }
  }

  traffic {
    percent         = 100
    latest_revision = true
  }

  autogenerate_revision_name = true
}

# Configure the domain name mapping for the instance to docs.animeshon.com.
resource "google_cloud_run_domain_mapping" "docs" {
  project  = google_cloud_run_service.docs.project
  location = google_cloud_run_service.docs.location
  name     = "docs.animeshon.com"

  metadata {
    namespace = local.project
  }

  spec {
    route_name = google_cloud_run_service.docs.name
  }
}

# Allow everyone to access this instance from docs.animeshon.com.
data "google_iam_policy" "noauth" {
  binding {
    role = "roles/run.invoker"
    members = [
      "allUsers",
    ]
  }
}

resource "google_cloud_run_service_iam_policy" "docs" {
  project  = google_cloud_run_service.docs.project
  location = google_cloud_run_service.docs.location
  service  = google_cloud_run_service.docs.name

  policy_data = data.google_iam_policy.noauth.policy_data
}
