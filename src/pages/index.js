import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[
      `gatsby`,
      `application`,
      `react`,
      `portfolio`,
      `Rick Booth`
    ]} />
    <h1 className="text-4xl">Hi people</h1>
    <p className="text-2xl text-center mb-8 bg-brand-2 py-8 mt-4">Welcome to your new Gatsby site.</p>
    <button className="border-black p-4 m-4 border rounded-full hover:bg-brand-2">Click here</button>
    <p>Now go build something <span className="text-3xl text-brand-1">great.</span></p>
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
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
  </Layout>
)

export default IndexPage
