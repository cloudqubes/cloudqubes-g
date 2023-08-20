import * as React from "react"
import { Link } from "gatsby";
import Layout from "../components/layout";
import ContactText from "../../pages/contat.mdx";
import { container, insideContainer } from "./about.module.css";


const AboutPage = () => {
  return(
    <Layout>

      <section className={container}>
        <div className={insideContainer}>
          <h1>About</h1>
          <ContactText/>
        </div>

      </section>

    </Layout>
  )
}

export default AboutPage