import * as React from "react"
import Layout from "../../components/layout";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Link, graphql } from "gatsby";

const BlogPage = ({data}) => {
  const image = getImage(data.mdx.frontmatter.cover_image)
  return (
    <Layout>
      <div>
        <section>
          <h1>Blog</h1>
          <p>Articles on cloud and DevOps</p>
          {
            data.allMdx.nodes.map((node) => (
              <article key={node.id}>
                <GatsbyImage
                  image={image}
                  alt={data.mdx.frontmatter.cover_image_alt}
                />
                <h2>
                  <Link to={`/blog/${node.frontmatter.slug}`}>
                    {node.frontmatter.title}
                  </Link>
                </h2>
                <p>{node.frontmatter.description}</p>
              </article>
            ))
          }
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
              gatsbyImageData
            }
          }
        }
        id
      }
    }
  }
`

export default BlogPage

export const Head = () => <title>Home Page</title>
