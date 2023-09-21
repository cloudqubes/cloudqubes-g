import * as React from "react"
import Layout from "../components/layout";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Link, graphql } from "gatsby";
import { Seo } from "../components/seo";
import BlogArticle from "../components/blog-article";
import { mainTitle, mainTitleContainer, featuredPostContainer,
          featuredPostTitle, featuredPostTitleContainer, featuredPostCoverImage,
          featuredTag, readMoreButton, readMoreButtonContainer,
          blogArticleList, readAllButtonContainer, mainCTA,
          container,
          insideContainer,
          sectionTitle,
} from "./index.module.css";

const IndexPage = ({location, data}) => {
  const featuredPost = data.featured.nodes[0]
  return (
    <Layout showNewsletter={true}>
      <div>
        <section>
          <div className={mainTitleContainer}>
            <h1 className={mainTitle}>Learn cloud computing and DevOps</h1>
          </div>
          <div className={mainTitleContainer}>
            <Link to="/blog" className={mainCTA}>
              Read the blog
            </Link>
          </div>
          <div className={container}>
            <article className={featuredPostContainer}>

              <div className={featuredPostTitleContainer}>

                <span className={featuredTag}>Featured story</span>
              </div>
              <GatsbyImage
                image={getImage(featuredPost.frontmatter.cover_image)}
                alt={featuredPost.frontmatter.cover_image_alt}
                className={featuredPostCoverImage}
              />
                <h2 className={featuredPostTitle}>{featuredPost.frontmatter.title}</h2>

              <p>{featuredPost.frontmatter.description}</p>
              <div className={readMoreButtonContainer}>

                <Link to={`/blog/${featuredPost.frontmatter.slug}`} className={readMoreButton}>
                    Read more
                </Link>
              </div>
            </article>
          </div>

        </section>

        <section className={container}>
          <div className={insideContainer}>
            <h1 className={sectionTitle}>Recent posts</h1>
            <div className={blogArticleList}>
              {
                data.recentPosts.nodes.map((node) => (
                  <BlogArticle node={node}>

                  </BlogArticle>
                ))
              }  
            </div>
            <div className={readAllButtonContainer}>
              <Link to="/blog" className={readMoreButton}>
                Read all posts
              </Link>              
            </div>
          </div>

        
        </section>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    recentPosts: allMdx(
      sort: { frontmatter: { date: DESC }}
      filter: {frontmatter: {tags: {ne: null}}}
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

    featured: allMdx(
      sort: { frontmatter: { date: DESC }}
      filter: {frontmatter: {categories: {in: "Featured"}}}
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
                gatsbyImageData(width: 1000)
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

