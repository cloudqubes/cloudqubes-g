import * as React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Link, graphql } from "gatsby";
import { blogArticleItem, title } from "./blog-article.module.css";

const BlogArticle = ({node}) =>{

  return(
    <article key={node.id} className={blogArticleItem}>
      <GatsbyImage
        image={getImage(node.frontmatter.cover_image)}
        alt={node.frontmatter.cover_image_alt}
      />
      <h2>
        <Link to={`/blog/${node.frontmatter.slug}`} className={title}>
          {node.frontmatter.title}
        </Link>
      </h2>
      <p>{node.frontmatter.description}</p>
    </article>
  )
}

export default BlogArticle;