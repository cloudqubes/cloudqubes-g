const readingTime = require(`reading-time`)
// const fs = require("fs")
// const yaml = require("js-yaml")

exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `Mdx`) {
    createNodeField({
      node,
      name: `timeToRead`,
      value: readingTime(node.body)
    })
  }
}

exports.createPages = async function ({ actions, graphql }) {
  const { data } = await graphql(`
    query  {
      allTag {
        edges {
          node {
            id
            name
            slug
          }
        }
      }
    }
  `)
  data.allTag.edges.forEach(edge => {
    const tag = edge.node.name
    actions.createPage({
      path: `/tag/${edge.node.slug}`,
      component: require.resolve(`./src/templates/tag.js`),
      context: { tag: tag },
    })
  })
}

// @todo: create the link between yaml and the mdx
// exports.createSchemaCustomization = ({ actions }) => {
//   const { createTypes } = actions
//   const typeDefs = `
//   type MarkdownRemark implements Node {
//     frontmatter: Frontmatter
//   }
//   type Frontmatter {
//     tags: [Tag] @link(by: "name")
//   }
//   `
//   createTypes(typeDefs)
// }

// exports.createPages = ({ actions }) =>{
//   const { createPage } = actions
//   const ymlTags = yaml.load(fs.readFileSync("./data/tags.yaml", "utf-8"))
//   ymlDoc.forEach(element => {
//     createPage({
//       path: element.path,
//       component: require.resolve("./src/templates/tag.js"),
//       context: {
//         pageContent: element.content,

//       },
//     })
//   })
// }
