import React from 'react'
import Layout from '../components/layout'
import {graphql} from 'gatsby'

export const query = graphql`
    query ($slug: String!) {
        contentfulThoughts(slug:{eq:$slug}) {
            title
        }
    }
`

const Thoughts = (props) => {
    const options = {
        renderNode: {
            "embedded-asset-block": (node) => {
                const alt= node.data.target.fields.title('en-US')
                const url= node.data.target.fields.file('en-US').url
                return <img alt={alt} src={url} />
            }
        }
    }
    return(
        <Layout>
            <h1>{props.data.contentfulThoughts.title}</h1>
        </Layout>
    )
}

export default Thoughts