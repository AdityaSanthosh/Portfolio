import * as React from "react"
import Layout from './../components/layout'
import Head from './head'
import * as IndexStyles from '../styles/index.module.scss'

const IndexPage = () => {
  return(
    <div>
      <Layout>
        <Head title="Home"/>
        <h2>Welcome User</h2>
        <p>Thanks for Visiting this. Check out the Bio, Blog. I am still figuring out what to publish. If you have any ideas or suggestions, send them to my mail</p>
        <p><a href="mailto:pssanthoshaditya2000@gmail.com">Suggest your Ideas here.</a></p>
        <h6>Have a nice day</h6>
        <p><em>Please explore the rest of the site by using the navigation Bar</em></p>
      </Layout>
    </div>
  )
}

export default IndexPage
