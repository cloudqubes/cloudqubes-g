import * as React from "react"
import { graphql } from "gatsby"
import BlogArticle from "../../components/blog-article";
// import ProductView from "../../views/product-view"

function Tag({data}) {
  // const { tag } = props.data
  return(
    <div>
            <div>
              {
                data.allMdx.nodes.map((node) => (
                  <BlogArticle node={node}>

                  </BlogArticle>
                ))
              }  
            </div>
    </div>
  )
}

export default Tag

export const query = graphql`
  query ($id: String) {
    allMdx(
      sort: { frontmatter: { date: DESC }}
      filter: {frontmatter: {tags: {eq: $id}}}
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