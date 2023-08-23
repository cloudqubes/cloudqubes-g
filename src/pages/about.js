import * as React from "react"
import { Link } from "gatsby";
import Layout from "../components/layout";
import { container, insideContainer } from "./about.module.css";


const AboutPage = () => {
  return(
    <Layout>

      <section className={container}>
        <div className={insideContainer}>
          <h1>About</h1>
          <div>
            <p>
              Cloudqubes is a blog and a newsletter for Cloud and DevOps practitioners.
            </p>
          </div>
          <div>
            <h2>Subscribe to get weekly insights</h2>
            <iframe src="https://cloudqubes.substack.com/embed" width="480" height="320" style={{border:`1px solid #EEE`, background:`#C5CAE9`}} frameborder="0"></iframe>

          </div>
        </div>

      </section>

    </Layout>
  )
}

export default AboutPage