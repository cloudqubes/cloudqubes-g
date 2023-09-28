import * as React from 'react'
import { graphql } from "gatsby";
import { getSrc } from "gatsby-plugin-image";
// import { DiscussionEmbed } from "disqus-react"
import { Disqus, CommentCount } from 'gatsby-plugin-disqus'
import { useSiteMetadata } from "../../hooks/use-site-metadata";
import Layout from '../../components/layout'
import { Seo } from "../../components/seo";
import { outerContainer, container, articleTitle, postMeta, metaContainer } from "./article.module.css";
import "./article.css";

const BlogPost = ({data, children}) => {
  // const disqusConfig = {
  //   shortname: "cloudqubes",
  //   config: { identifier: data.mdx.frontmatter.slug},
  // }
  const {siteUrl} = useSiteMetadata()
  let disqusConfig = {
    url: `${siteUrl}/blog/${data.mdx.frontmatter.slug}`,
    identifier: data.mdx.frontmatter.slug,
    title: data.mdx.frontmatter.title,
  }
  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <div className={outerContainer}>
        <article className={container}>
          <h1 className={articleTitle}>{data.mdx.frontmatter.title}</h1>
          <div className={metaContainer}>
            <span className={postMeta}>{data.mdx.frontmatter.date} - </span>
            <span className={postMeta}>{data.mdx.fields.timeToRead.text}</span>
          </div>
          {children}
        </article>
      </div>
      <div className={outerContainer}>
        <div className={container}>
          <CommentCount config={disqusConfig} placeholder={'...'} />
          <Disqus config={disqusConfig} />
        </div>
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
        slug
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
    }
  }
`

export const Head = ({data}) => {
  let imageUrl = null
  if (data.mdx.frontmatter.cover_image) {
    imageUrl = getSrc(data.mdx.frontmatter.cover_image.childImageSharp.gatsbyImageData)
  }

  return (
    <Seo 
    title= {data.mdx.frontmatter.title}
    description= {data.mdx.frontmatter.description }
    image= {imageUrl}
  />
  )
}


export default BlogPost

