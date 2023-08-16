import * as React from 'react'
import { graphql } from "gatsby";
import Layout from '../../components/layout'
import { Seo } from "../../components/seo";

const BlogPost = ({data, children}) => {
  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <p>{data.mdx.frontmatter.date}</p>
      <span>{data.mdx.fields.timeToRead.text}</span>
      {children}
    </Layout>
  )
}

export const query = graphql`
  query ($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title
        description
        tags
        date(formatString: "MMMM D, YYYY")
      }
      fields{
        timeToRead {
          minutes
          text
          time
          words
        }
      }
    }
  }
`

export const Head = ({data}) => (
  <Seo 
    title= {data.mdx.frontmatter.title}
    description= {data.mdx.frontmatter.description }
  />
)

export default BlogPost

