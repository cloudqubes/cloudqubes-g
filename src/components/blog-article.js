import * as React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import { blogArticleItem, title, tagLink } from "./blog-article.module.css";

const BlogArticle = ({node}) =>{
  const tag = node.frontmatter.tags[0]
  return(
    <article key={node.id} className={blogArticleItem}>
      <div>
        <Link to={`/blog/${tag}`} className={tagLink}>{tag}</Link>
      </div>
      <div>
        {node.frontmatter.wordTime}
      </div>
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