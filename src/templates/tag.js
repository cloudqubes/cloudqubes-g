import React from "react"
import { graphql } from "gatsby"
import BlogArticle from "../components/blog-article";
import Layout from "../components/layout";
import { blogArticleList,
  container,
  insideContainer,
  title,
} from "./tag.module.css";

export default function Tag({pageContext, data}) {
  const { tag } = pageContext
  return(
    <Layout>
      <div>
        <section className={container}>
          <div className={insideContainer}>
            <h1 className={title}>Articles on {tag}</h1>
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
query ($tag: String) {
  allMdx(
    sort: { frontmatter: { date: DESC }}
    filter: {frontmatter: {tags: {eq: $tag}}}
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