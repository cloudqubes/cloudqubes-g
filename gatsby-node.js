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
