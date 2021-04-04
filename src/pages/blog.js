import * as React from "react"
import {Link,graphql,useStaticQuery} from 'gatsby'
import Layout from "../components/layout"
import * as BlogStyles from './blog.module.scss'
import Head from "./head"

const BlogPage = () => {
    const posts = useStaticQuery(graphql`
    query {
        allContentfulBlogPost(sort:{fields:publishedDate, order:DESC}) {
            totalCount
          edges {
            node {
              title
              slug
              publishedDate(formatString: "MMMM Do,YYYY")
            }
          }
        }
      }
    `)
    return (
        <div>
            <Layout>
                <Head title="Blog" />
                <h1>Blog Page</h1>
                <p className="style:italic">Total blog posts: {posts.allContentfulBlogPost.totalCount}</p>
                <ol className={BlogStyles.posts}>
                    {posts.allContentfulBlogPost.edges.map((edge)=>{
                        return (
                            <li>
                                <Link className={BlogStyles.post} to={`/blog/${edge.node.slug}`}>
                                <h3>{edge.node.title}</h3>
                                <p>{edge.node.publishedDate}</p>
                                </Link>
                            </li>     
                        )
                    })}
                </ol>
            </Layout>
        </div>
    )
}

export default BlogPage