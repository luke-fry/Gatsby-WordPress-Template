const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const pageTemplate = path.resolve(`src/templates/page.js`)

  return graphql(`
    {
      allWpPage {
        edges {
          node {
            content
            title
            template {
              templateName
            }
            slug
            isFrontPage
            uri
            status
            date(formatString: "Do MMMM YYYY")
            databaseId
          }
        }
      }
    }  
  `)
  .then(result => {
    if (result.errors) {
      throw result.errors
    }

    result.data.allWpPage.edges.forEach(edge => {
      let pagePath = `${edge.node.uri}`

      if(edge.node.isFrontPage) {
        pagePath = '/'
      }
      
      console.log(`create page: ${edge.node.uri}`)

      createPage({
        path: pagePath,
        component: pageTemplate,
        context: edge.node
      })
    })
  })
}