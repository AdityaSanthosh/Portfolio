import * as React from "react"
import Layout from './../components/layout'
import * as ContactStyles from '../styles/contact.module.scss'
import Head from './head'

const ContactPage = () => {
    return (
        <div>
            <Layout>
            <Head title="Home"/>
            <h2>Contact</h2>
            <div className={ContactStyles.links}>
                Name: Aditya
                <a href="mailto:pssanthoshaditya2000@gmail.com">e-mail</a>
                <a href="tel:+919553683745">Phone</a>
                <a href="https://www.linkedin.com/in/aditya-palepu-ab6aa1152/" target="_blank">Linkedin</a>
                <a href="https://github.com/AdityaSanthosh" target="_blank">Github</a> 
            </div>
            </Layout>
        </div>
    )
}

export default ContactPage