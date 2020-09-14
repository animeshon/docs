import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';
import Lottie from 'react-lottie';

const features = [
  {
    title: <>Open to Contribution</>,
    animation: require('../../static/lotties/use'),
    description: (
      <>
        Animeshon was designed to provide core tools and services. 
        Help us improve the industry through an open collaboration and contribution to Animeshon products.
      </>
    ),
  },
  {
    title: <>Integrate with Animeshon</>,
    animation: require('../../static/lotties/integrate'),
    description: (
      <>
        All of our components were designed to be easily integrated by third-party applications. 
        Focus on your idea and leave the rest to Animeshon.
      </>
    ),
  },
  {
    title: <>Evolve the Ecosystem</>,
    animation: require('../../static/lotties/easy'),
    description: (
      <>
        Reinvent the way you consume, organize, search, and discover the Japanese Multimedia Culture.
        Let's create together a new Ecosystem powered by a direct interaction between the content creators and the users.
      </>
    ),
  },
];

function Feature({imageUrl, title, description, animation}) {
  const imgUrl = useBaseUrl(imageUrl);
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animation,
    rendererSettings: {
      //hideOnTransparent:true,
      preserveAspectRatio: "YMidxMid meet"
    }
  };

  return (
    <div className={clsx('col col--4', styles.feature)}>
      {animation && (
          <div className="text--center">
            <Lottie  
            options={defaultOptions}
            title={title}
            height={200}
            />
        </div>
      )}

      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;

  return (
    <Layout
      title={`Animeshon Docs`}
      description="Description will go into a meta tag in <head />">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/')}>
              Get Started
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
