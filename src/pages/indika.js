import * as React from "react"
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import Layout from "../components/layout";
import { container, insideContainer, myImage,
          zeroGap, title
        } from "./about.module.css";

const AuthorPage = () => {
  return(
    <Layout>

      <section className={container}>
        <div className={insideContainer}>
          <h1 className={title}>Hi,</h1>
          <div className={myImage}>
            <StaticImage 
              alt="Indika, with his son.."
              src="../images/indika.jpg"
            />
          </div>
          <p>I am Indika. DevOps Engineer and Writer.</p>
          <p className={zeroGap}>I love learning-by-doing and eating cookies.</p>
          <p>I work on and write about Kubernetes, CI/CD, Linux, and DevOps.</p>
          <p  className={zeroGap}>Say Hi&nbsp;
            <a href="https://twitter.com/indikaimk">
              @indikaimk
            </a>
          </p>
          <p>Or drop a line&nbsp;
            <a href="mailto:indikaimk@gmail.com">
              indikaimk@gmail.com
            </a>
          </p>
          <p>I reply personally. No Bots. Bots are not good at maintaining human relationships.</p>
        </div>

      </section>

    </Layout>
  )
}

export default AuthorPage