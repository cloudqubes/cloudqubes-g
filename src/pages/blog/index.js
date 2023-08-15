import * as React from "react"
import Layout from "../../components/layout";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Link, graphql } from "gatsby";
import { Seo } from "../../components/seo";
import BlogArticle from "../../components/blog-article";
import { blogArticleList,
         container,
         insideContainer,
} from "./index.module.css";

const BlogPage = ({data}) => {
  return (
    <Layout>
      <div>
        <section className={container}>
          <div className={insideContainer}>
            <h1>Blog</h1>
            <p>Articles on cloud and DevOps</p>
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
    allMdx(sort: { frontmatter: { date: DESC }}) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
          slug
          description
          cover_image_alt
          cover_image {
            childImageSharp {
              gatsbyImageData(width: 400)
            }
          }
        }
        id
      }
    }
  }
`

export const Head = () => (
  <Seo 
    title= "Cloudqubes blog"
  />
)

export default BlogPage

