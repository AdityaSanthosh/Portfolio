import * as React from "react"
import Layout from './../components/layout'
import Head from './head'

const AboutPage = () => {
    return (
        <div>
            <Layout>
                <Head title="About"/>
                <header>About Me!</header>
                <p>Hello, Aditya here. I am an ECE graduate who likes to watch Movies and daydream. I also try to write short stories sometimes when I am in the mood.I equipped my skillset with Web Development right now, though I would like to delve into many more interesting areas in the future.</p>
            </Layout>
        </div>
    )
}

export default AboutPage