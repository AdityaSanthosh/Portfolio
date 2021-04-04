import React from 'react'
import {Link,graphql,useStaticQuery} from 'gatsby'
import * as headerStyles from './header.module.scss'

const Header = () => {
    const data = useStaticQuery(graphql`
    query {
        site {
            siteMetadata {
                title
            }
        }
    }
    `)
    return (
            <header className={headerStyles.header}>
                <h1>
                    <Link to="/" className={headerStyles.title}>
                        {data.site.siteMetadata.title}
                    </Link>
                </h1>
            <nav>
                <ul className={headerStyles.navList}>
                    <li><Link className={headerStyles.navItem} activeClassName={headerStyles.navActiveItem} to='/'>Home</Link></li>
                    <li><Link className={headerStyles.navItem} activeClassName={headerStyles.navActiveItem} to='/blog/'>Blog</Link></li>
                    <li><Link className={headerStyles.navItem} activeClassName={headerStyles.navActiveItem} to='/about/'>About</Link></li>
                    <li><Link className={headerStyles.navItem} activeClassName={headerStyles.navActiveItem} to='/contact/'>Contact</Link></li>
                </ul>
            </nav>
            </header>
    )
}

export default Header
