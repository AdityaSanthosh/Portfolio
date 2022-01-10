const path = require('path')

module.exports.createPages = async({graphql,actions}) => {
    const {createPage} = actions
    const blogTemplate = path.resolve('./src/templates/blog.js')
    const thoughtsTemplate = path.resolve('./src/templates/thoughts.js')
    const res = await graphql(`
    query {
        allContentfulBlogPost {
            edges {
              node {
                title
                slug
                publishedDate
              }
            }
        }
        allContentfulThoughts {
            totalCount
            edges {
              node {
                title
                slug
              }
            }
        }
    }
    `)
    
    res.data.allContentfulBlogPost.edges.forEach((edge)=> {
        createPage({
            component: blogTemplate,
            path: `/blog/${edge.node.slug}`, 
            context: {
                slug: edge.node.slug
            }
        })
    })

    res.data.allContentfulThoughts.edges.forEach((edge)=> {
        createPage({
            component: thoughtsTemplate,
            path: `/thoughts/${edge.node.slug}`, 
            context: {
                slug: edge.node.slug
            }
        })
    })
}