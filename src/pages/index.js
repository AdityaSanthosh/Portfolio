import * as React from "react"
import Layout from './../components/layout'
import Head from './head'
import * as IndexStyles from '../styles/index.module.scss'

const IndexPage = () => {
  return(
    <div>
      <Layout>
        <Head title="Home"/>
        <h2>This is the index Page</h2>
        <p>Hello, If you are seeing this website, I may have sent you the link. So we must be friends or Acquintances. So I wish you all the best. I am still figuring out what to fill the page with. Maybe I will put a few pictures.</p>
        <p><em>Please explore the rest of the site by using the navigation Bar</em></p>
      </Layout>
    </div>
  )
}

export default IndexPage
