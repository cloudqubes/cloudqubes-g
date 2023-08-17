import * as React from 'react'
import { graphql } from "gatsby";
import Layout from '../../components/layout'
import { Seo } from "../../components/seo";
import { outerContainer, container, title, postMeta } from "./article.module.css";
import "./article.css";

const BlogPost = ({data, children}) => {
  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <div className={outerContainer}>
        <article className={container}>
          <div>
          <span className={postMeta}>{data.mdx.frontmatter.date} - </span>
          <span className={postMeta}>{data.mdx.fields.timeToRead.text}</span>
          </div>
          <h1 className={title}>{data.mdx.frontmatter.title}</h1>
          {children}
        </article>
      </div>


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

