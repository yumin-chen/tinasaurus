import React from "react";
import Layout from "@theme/Layout";
import Heading from "@theme/Heading"; // Ensure Heading is a valid React component
import Link from "@docusaurus/Link";
import { Blocks } from "../components/Blocks";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { css } from "../../@chen/styled-system/css";
import { center } from "../../@chen/styled-system/patterns";

const pageData = require("../../config/homepage/index.json");

function HomepageHeroHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header
      className={css({
        bg: "red.500",
        padding: { base: "2rem", lg: "4rem 0" },
        textAlign: "center",
        pos: "relative",
        overflow: "hidden",
      })}
    >
      <div className="container">
        <Heading
          as="h1"
          className={css({
            textStyle: "4xl!",
          })}
        >
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={center()}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro"
          >
            Docusaurus Tutorial - 5min ⏱️
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title={pageData && pageData.title ? pageData.title : siteConfig.title}
      description={
        pageData && pageData.description
          ? pageData.description
          : siteConfig.tagline
      }
    >
      <>
        <HomepageHeroHeader />
        {pageData && pageData.blocks ? (
          <Blocks blocks={pageData.blocks} />
        ) : null}
      </>
    </Layout>
  );
}
