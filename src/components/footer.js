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
        <div className="text-center">
            A <Link className={FooterStyles.author} to='/about/'>{data.site.siteMetadata.author}</Link> Production © 2022. <br />
            Total {data.allSitePage.totalCount} Pages in this Website.  
        </div>
    )
}
export default Footer