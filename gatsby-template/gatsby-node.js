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
            date
            desiredSlug
            featuredImage {
              node {
                sourceUrl
                title
                altText
              }
            }
            isFrontPage
            isPostsPage
            link
            slug
            status
            template {
              templateName
            }
            title
            uri
            seo {
              fullHead
            }
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