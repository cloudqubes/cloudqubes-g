import * as React from "react"
import Layout from "../components/layout";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Link, graphql } from "gatsby";
import { Seo } from "../components/seo";
import BlogArticle from "../components/blog-article";
import { blogArticleList,
         container,
         insideContainer,
         newsletterContainer,
         newsletterOuterContainer,
         sectionTitle,
         substackStyle,
} from "./index.module.css";

const IndexPage = ({data}) => {
  return (
    <Layout>
      <div>
        <section className={newsletterOuterContainer}>
          <div className={insideContainer}>
            <div className={newsletterContainer}>
              <div>
                <h1>Cloud insights for DevOps</h1>
                <p>delivered weekly to your inbox</p>

              </div>
              <div>
                {/* <iframe src="https://cloudqubes.substack.com/embed" width="480" height="320" style={{border:`1px solid #EEE`, background:`#C5CAE9`}} frameborder="0"></iframe> */}

              </div>
            </div>

          </div>

        </section>

        <section className={container}>
          <div className={insideContainer}>
            <h1 className={sectionTitle}>New posts</h1>
            <div className={blogArticleList}>
              {
                data.allMdx.nodes.map((node) => (
                  <BlogArticle node={node}>

                  </BlogArticle>
                ))
              }  
            </div>
          </div>

        
        </section>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMdx(
      sort: { frontmatter: { date: DESC }}
      limit: 6
      ) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
          slug
          tags
          description
          cover_image_alt
          cover_image {
            childImageSharp {
              gatsbyImageData(width: 400)
            }
          }
        }
        fields{
          timeToRead {
            minutes
            text
            time
            words
          }
        }
        id
      }
    }
  }
`

export const Head = () => (
  <Seo 
    title= "Cloudqubes - Learn Cloud computing and DevOps"
  />
)

export default IndexPage

