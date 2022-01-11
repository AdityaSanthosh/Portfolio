import * as React from "react"
import Layout from "../components/layout"
import {Link,graphql,useStaticQuery} from 'gatsby'
import { Router } from "@reach/router";
import * as ThoughtsStyles from './thoughts.module.scss'
import Head from "./head"

const ThoughtsPage = () => {
    const thoughts = useStaticQuery(graphql`
    query {
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
    return (
        <div>
            <Layout>
                <Head title="Thoughts" />
                <h1>Thoughts, Quotes, Opinions</h1>
                <p className="style:italic">#{thoughts.allContentfulThoughts.totalCount} quotes written</p>
                <ol>
                    {thoughts.allContentfulThoughts.edges.map((edge)=>{
                        return (
                            <li>
                                <Link to={`/thoughts/${edge.node.slug}`}>
                                <h3>{edge.node.title}</h3><br />
                                </Link>
                            </li>     
                        )
                    })}
                </ol>
            </Layout>
        </div>
    )
}

export default ThoughtsPage