import React from "react";
import { useSiteMetadata } from "../hooks/use-site-metadata";

export const Seo = ({ title, description, image, pathname, children }) => {
  const {title: defaultTitle, description: defaultDescription, image: defaultImage, siteUrl, twitterUsername} = useSiteMetadata()
  
  // if (image) {
  //   imageUrl = getSrc(image.childImageSharp.gatsbyImageData)
  // }

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${defaultImage}`,
    twitterImage: `${siteUrl}${image || defaultImage}`,
    url: `${siteUrl}${pathname || ''}`,
    twitterUsername,
  }

  return (
    <>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description}/>
      <meta name="image" content={seo.image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:url" content={seo.url} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.twitterImage} />
      <meta name="twitter:creator" content={seo.twitterUsername} />
      <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='0.9em' font-size='90'>👤</text></svg>" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
      {children}

    </>
  )
}
