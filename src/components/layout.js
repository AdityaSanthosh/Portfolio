import * as React from "react"
import Footer from './footer'
import Header from './header'
import * as LayoutStyles from './layout.module.scss'

const Layout = (props) => {
    return (
        <div className={LayoutStyles.container}>
            <div className={LayoutStyles.content}>
                <Header />
                <div className={LayoutStyles.dynamicContent}></div>
                {props.children}
            </div>
            <Footer />
        </div>
    )
}

export default Layout