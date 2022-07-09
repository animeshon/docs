---
title: Overview
description: Image API
---

# Image API

## Service: image.animeapis.com

The Service name `image.animeapis.com` is needed to create RPC client stubs.

## [animeshon.image.v1alpha1.Image](/image/docs/reference/rpc/animeshon.image.v1alpha1#animeshon.image.v1alpha1.Image)

| Method Name | Description |
| ----------- | ------------|
| [UploadImage](/image/docs/reference/rpc/animeshon.image.v1alpha1#animeshon.image.v1alpha1.Image.UploadImage) | Uploads an image through the request HttpBody. |
| [ImportImage](/image/docs/reference/rpc/animeshon.image.v1alpha1#animeshon.image.v1alpha1.Image.ImportImage) | Imports an image from a remote web address. |
| [GetImage](/image/docs/reference/rpc/animeshon.image.v1alpha1#animeshon.image.v1alpha1.Image.GetImage) | Gets an image in binary representation with the format and size requested. |
| [GetAlbum](/image/docs/reference/rpc/animeshon.image.v1alpha1#animeshon.image.v1alpha1.Image.GetAlbum) | Gets an image album. |
| [ListAlbums](/image/docs/reference/rpc/animeshon.image.v1alpha1#animeshon.image.v1alpha1.Image.ListAlbums) | Lists image albums with pagination. |
| [CreateAlbum](/image/docs/reference/rpc/animeshon.image.v1alpha1#animeshon.image.v1alpha1.Image.CreateAlbum) | Creates a new image album. |
| [DeleteAlbum](/image/docs/reference/rpc/animeshon.image.v1alpha1#animeshon.image.v1alpha1.Image.DeleteAlbum) | Deletes an existing image album. |
| [GetAlbumSettings](/image/docs/reference/rpc/animeshon.image.v1alpha1#animeshon.image.v1alpha1.Image.GetAlbumSettings) | Gets the settings of an image album. |
| [UpdateAlbumSettings](/image/docs/reference/rpc/animeshon.image.v1alpha1#animeshon.image.v1alpha1.Image.UpdateAlbumSettings) | Updates the settings of an image album. |


<a name="animeshon.image.v1alpha1.ImageRouter"></a>

## [animeshon.image.v1alpha1.ImageRouter](/image/docs/reference/rpc/animeshon.image.v1alpha1#animeshon.image.v1alpha1.ImageRouter)

| Methods | Description |
| ----------- | ------------|
| [GetImageRoute](/image/docs/reference/rpc/animeshon.image.v1alpha1#animeshon.image.v1alpha1.ImageRouter.GetImageRoute) | Gets the image public link address that is used to fetch images via CDN. |
| [RouteImage](/image/docs/reference/rpc/animeshon.image.v1alpha1#animeshon.image.v1alpha1.ImageRouter.RouteImage) | Routes a raw request received by a CDN host to its target image. |
