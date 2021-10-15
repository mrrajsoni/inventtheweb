import * as React from "react"
import { useStaticQuery, graphql } from 'gatsby'

const Header = () =>{
    const queryData = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
        }
      }
    }`
    )

    return(
        <header>
            <h3>{queryData.site.siteMeta.title}</h3>
        </header>
    )
}


export default Header