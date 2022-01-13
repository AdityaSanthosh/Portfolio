import * as React from "react"
import Layout from './../components/layout'
import Head from './head'

const AboutPage = () => {
    return (
        <div>
            <Layout>
                <Head title="About"/>
                <header>About Me!</header>
                <p>Hello, Aditya here. I am a Programmer, Art lover, free thinker. I write short stories sometimes when I am in the mood.I like to delve into many more interesting areas in the future.</p>
                <ul>
                    <li>I like to learn things the hard way</li>
                    <li>I am a hacker. I like to build things</li>
                    <li>I love artistic movies. My top 3 favourite movies are
                    <ul>
                        <li>Blade Runner 2049</li>
                        <li>The Social Network</li>
                        <li>2001: A Space Odessey</li>
                    </ul></li>
                    <li>I am an avid Reader of Paul Graham Essays and Hacker News</li>
                </ul>
            </Layout>
        </div>
    )
}

export default AboutPage