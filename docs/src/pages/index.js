import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        {/*<div className={styles.buttons}>*/}
        {/*  <Link*/}
        {/*    className="button button--secondary button--lg"*/}
        {/*    to="/docs/intro">*/}
        {/*    Docusaurus Tutorial - 5min ⏱️*/}
        {/*  </Link>*/}
        {/*</div>*/}
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        {/*<HomepageFeatures />*/}
          <div style={{display: "flex", flexDirection: "column", alignItems:"center"}}>
              <img src="https://cdn.tgdd.vn//GameApp/1360462//logohdbank-800x425.jpg" alt="hd-bank"/>
              <p style={{fontSize:"25px", padding:"0 5rem"}}><strong>Bộ phận đổi mới và sáng tạo :</strong> tập trung các công nghệ mới là AI , và số hoá các quy trình cho cả khách hàng và nội bộ. Tìm các công nghệ mới nhất để tối đa hoá năng suất của nhân viên.</p>
          </div>
      </main>
    </Layout>
  );
}
