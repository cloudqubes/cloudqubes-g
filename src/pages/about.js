import * as React from "react"
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import Layout from "../components/layout";
import { container, insideContainer, 
          mainCTA, mainCTAWrapper, title, subHeading, zeroGap,
        } from "./about.module.css";


const AboutPage = () => {
  return(
    <Layout>

      <section className={container}>
        <div className={insideContainer}>
          <h1 className={title}>About cloudqubes</h1>
          {/* <StaticImage 
            alt="A Macbook, a vase, and two books on a white surface."
            src="../images/continuous-learning-for-devops.jpg"
          />
          <div className={imageCredit}>

            Photo by&nbsp;
            <Link to="https://www.pexels.com/photo/macbook-pro-laptop-on-white-able-8534179/">
              Anna Nekrashevich
            </Link> 


          </div> */}
          <div>
            <p>
              Hi, I am&nbsp;
              <a href="https://twitter.com/indikaimk">
                Indika.
              </a>
              
            </p>
            <p>
              I write cloudqubes, a blog on&nbsp;
              <Link to="/tag/kubernetes" >
                #Kubernetes,&nbsp;
              </Link>
              <Link to="/tag/kubernetes">
                #CICD,&nbsp;
              </Link>
              <Link to="/tag/linux">
                #Linux,&nbsp;
              </Link>
              and&nbsp;
              <Link to="/tag/dev-ops">
                #DevOps.
              </Link>
            </p>
            <div className={mainCTAWrapper}>
              <Link to="/blog" className={mainCTA}>
                Read the blog
              </Link>
            </div>

          </div>
          <div>
            <h2>Get weekly updates delivered to your inbox.</h2>
            <iframe src="https://cloudqubes.substack.com/embed" width="480" height="320" style={{border:`1px solid #EEE`, background:`#C5CAE9`}} frameborder="0"></iframe>
          </div>

          <div>
            <h2 className={subHeading} id="contact">How to contact me</h2>
            <p className={zeroGap}>Write to &nbsp;
              <a href="mailto:indikaimk@gmail.com">
                indikaimk@gmail.com
              </a>
            </p>
            <p>DM &nbsp;
              <a href="https://twitter.com/indikaimk">
                  @indikaimk
              </a>
            </p>
          </div>
        </div>

      </section>

    </Layout>
  )
}

export const Head = () => (
  <Seo 
    title= "Watching videos does not build cloud and DevOps skills … Work hands-on"
  />
)

export default AboutPage