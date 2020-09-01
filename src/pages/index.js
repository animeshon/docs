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
    title: <>Easy to Use</>,
    animation: require('../../static/lotties/use'),
    description: (
      <>
        Animeshon was designed to provide foundation tools and services. 
        Simple but essentials functionalities to spend less time searching and more enjoying the Japanese Multmedia Culture.
      </>
    ),
  },
  {
    title: <>Easy to Integrate</>,
    animation: require('../../static/lotties/integrate'),
    description: (
      <>
        All our components are designed to be easily integrated by third-party systems. 
        Focus on your idea an leave the rest to Animeshon.
      </>
    ),
  },
  {
    title: <>Easy</>,
    animation: require('../../static/lotties/easy'),
    description: (
      <>
        Reinvent the way of consume, organize, syncronize, search, play and discover the Japanese Mulltimedia Culture.
        Let's create togheter a new Ecosystem powered by direct interaction with the content and with other enthusiasts.
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
