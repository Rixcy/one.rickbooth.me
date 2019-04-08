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
    <div className="flex my-8 justify-center">
      <div className="bg-brand-1 p-4 text-white">
        Brand 1
      </div>
      <div className="bg-brand-2 p-4 text-white">
        Brand 2
      </div>
      <div className="bg-brand-3 p-4 text-white">
        Brand 3
      </div>
      <div className="bg-brand-4 p-4 text-white">
        Brand 4
      </div>
      <div className="bg-brand-5 p-4 text-white">
        Brand 5
      </div>
    </div>
  </Layout>
)

export default IndexPage
