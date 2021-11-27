import * as React from "react"
import { useState } from "react"
import Footer from './footer'
import Header from './header'
import * as LayoutStyles from './layout.module.scss'

const Layout = (props) => {
    const [togglebtn, setTogglebtn] = useState('Dark');
    // When the user changes the theme, we need to save the new value on local storage
    const toggleTheme = () => {
        const htmlEl = document.getElementsByTagName('html')[0];
        const currentTheme = localStorage.getItem('theme');
        if (currentTheme!='dark') {
            htmlEl.dataset.theme = 'dark';
            localStorage.setItem('theme', 'dark');
            setTogglebtn('Light');
        }
        else {
            htmlEl.dataset.theme = 'light';
            localStorage.setItem('theme', 'light');
            setTogglebtn('Dark');
        }
    }  
    return (
        <div className={LayoutStyles.container}>
            <div className={LayoutStyles.content}>
                <Header />
                <br />
                <button onClick={toggleTheme} id="togglebtn" className="btn-xs btn-dark">{togglebtn} Mode</button>
                <div className={LayoutStyles.dynamicContent}></div>
                {props.children}
            </div>
            <Footer />
        </div>
    )
}

export default Layout