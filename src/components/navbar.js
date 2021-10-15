import * as React from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import "./navbar.module.css"
import { StaticImage } from "gatsby-plugin-image"

const NavBar = ({ children }) => {
  const queryData = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `)
  return (
    <header>
      <div className="logo">
        <StaticImage
          className="logo-img"
          src="../images/Inventtheweb-logo-black.webp"
          alt="Invent the web black logo"
        ></StaticImage>
      </div>
      <h3>{queryData.site.siteMetadata.title}</h3>
      <nav className="nav-bar">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
        </ul>
      </nav>
      <main>{children}</main>
    </header>
  )
}

export default NavBar
