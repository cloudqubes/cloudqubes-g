/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `cloudqubes`,
    description: `Cloudqubes is a blog on Cloud computing, Kubernetes, DevOps, CI/CD, Linux, and Cloud security.`,
    twitterUsername: '@cloudqubes',
    image: '/logo_v1.png',
    siteUrl: `https://cloudqubes.com`,
  },
  plugins: [
  {
    resolve: "gatsby-plugin-google-gtag", 
    options: {
      // You can add multiple tracking ids and a pageview event will be fired for all of them.
      trackingIds: [
        "G-NSEVGKVG1W", // Google Analytics / GA
        // "AW-CONVERSION_ID", // Google Ads / Adwords / AW
        // "DC-FLOODIGHT_ID", // Marketing Platform advertising products (Display & Video 360, Search Ads 360, and Campaign Manager)
      ],
      // This object gets passed directly to the gtag config command
      // This config will be shared across all trackingIds
      gtagConfig: {
        optimize_id: "OPT_CONTAINER_ID",
        anonymize_ip: true,
        cookie_expires: 0,
      },
      // This object is used for configuration specific to this plugin
      pluginConfig: {
        // Puts tracking script in the head instead of the body
        head: false,
        // Setting this parameter is also optional
        respectDNT: true,
        // Avoids sending pageview hits from custom paths
        exclude: ["/preview/**", "/do-not-track/me/too/"],
        // Defaults to https://www.googletagmanager.com
        origin: "YOUR_SELF_HOSTED_ORIGIN",
        // Delays processing pageview events on route update (in milliseconds)
        delayOnRouteUpdate: 0,
      },
    },
  }, 
  "gatsby-plugin-image", "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  }, {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "pages",
      "path": "./src/pages/"
    },
    __key: "pages"
  }, {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "blog",
      "path": `${__dirname}/blog`
    },    
  }, {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "tags",
      "path": `${__dirname}/data/tags`
    }    
  }, {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "content",
      "path": `${__dirname}/pages`   
    } 
  }, {
    resolve: `gatsby-transformer-remark`,
    options: {
      plugins: [
        {
          resolve: `gatsby-remark-images`,
          options: {
            maxWidth: 800,
          },
        },
        {
          resolve: `gatsby-remark-prismjs`,
          // options: {
          //   classPrefix: "language-",
          //   inlineCodeMarker: null,
          //   aliases: {},
          //   showLineNumbers: false,
          //   noInlineHighlight: false,
          // }
        },
        {
          resolve: `gatsby-transformer-yaml`,
          options: {
            // Conditionally set the typeName so that we both use a lowercased and capitalized type name
            typeName: ({ node }) => {
              const name = node.sourceInstanceName
              if (name === `tags`) {
                return `Tag`
              }
              return name
            },
          },
        }
      ],
    },
  },{
    resolve: `gatsby-plugin-mdx`,
    options: {
      gatsbyRemarkPlugins: [
        {
          resolve: `gatsby-remark-images`,
          options: {
            maxWidth: 1200,
          },
        },
      ],
    },
  },{
    resolve: `gatsby-omni-font-loader`,
    options: {
      enableListener: true,
      preconnect: [`https://fonts.googleapis.com`, `https://fonts.gstatic.com`],
      web: [
        {
          name: `Open Sans`,
          file: `https://fonts.googleapis.com/css2?family=Poppins&family=Raleway:wght@400;700&family=Titillium+Web:wght@400;700&display=swap`,
          // file: `https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,400;0,700;1,400&family=Titillium+Web:ital,wght@0,400;0,600;0,700;1,400&family=Poppins&display=swap`,
        },
      ],
    },
  }, {
    resolve: `gatsby-plugin-disqus`,
    options: {
      shortname: `cloudqubes`
    }
  }, {
    resolve: `gatsby-plugin-manifest`,
    options: {
      name: `cloudqubes`,
      short_name: `cloudqubes`,
      start_url: `/`,
      background_color: `#f7f0eb`,
      theme_color: `#a2466c`,
      display: `standalone`,
      icon: `src/images/icon.png`, // This path is relative to the root of the site.
      // icons: [
      //   {
      //     src: `/favicons/android-chrome-192x192.png`,
      //     sizes: `192x192`,
      //     type: `image/png`,
      //   },
      //   {
      //     src: `/favicons/android-chrome-512x512.png`,
      //     sizes: `512x512`,
      //     type: `image/png`,
      //   },
      //   {
      //     src: `/favicons/apple-touch-icon.png`,
      //     sizes: `180x180`,
      //     type: `image/png`,
      //   },
      //   {
      //     src: `/favicons/favicon-32x32.png`,
      //     sizes: `32x32`,
      //     type: `image/png`,
      //   },
      // ]
      
    },
  }]
};


