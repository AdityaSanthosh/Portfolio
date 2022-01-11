import React from 'react'
import {Link,graphql,useStaticQuery} from 'gatsby'
import * as FooterStyles from './footer.module.scss'

const Footer = () => {
    const data = useStaticQuery(graphql`
    query {
        allSitePage {
            totalCount
        }
        site {
            siteMetadata {
                author
            }
        }
    }
    `)
    return (
        <div>
            <>A <Link className={FooterStyles.author} to='/about/'>{data.site.siteMetadata.author}</Link> Production © 2021.
            &nbsp;Total {data.allSitePage.totalCount} Pages in this Website.</>
        </div>
    )
}
export default Footer