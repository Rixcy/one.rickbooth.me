import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import IntroBlock from "../components/intro_block"
import Experience from "../components/experience"
// import BrandColours from "../components/brand_colours"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[
      `gatsby`,
      `application`,
      `react`,
      `portfolio`,
      `Rick Booth`,
      `Richard Booth`,
      `Rick`,
      `Richard`,
      `Web Developer`,
      `Software Developer`,
      `Front End Developer`,
      `Back End Developer`,
      `Full Stack Developer`
    ]} />
    <IntroBlock />
    {/* <BrandColours /> */}
    <Experience />
  </Layout>
)

export default IndexPage
