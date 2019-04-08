import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Experience from "../components/experience"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[
      `gatsby`,
      `application`,
      `react`,
      `portfolio`,
      `Rick Booth`
    ]} />
    <Experience />
  </Layout>
)

export default IndexPage
