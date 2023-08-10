import * as React from "react"
import Layout from "../components/layout";

const IndexPage = () => {
  return (
    <Layout>
      <div>
        <section>
          <h1>Newsletter</h1>
          <h2>Get weekly insights on cloud and DevOps</h2>

        </section>

        <section>
          <h1>Blog</h1>
          <h2>Articles on cloud and DevOps</h2>
        </section>
      </div>
    </Layout>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
