import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import "./navbar.module.css"

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
    <nav className="nav-bar">
      <button
        onClick={event => event.currentTarget.classList.toggle("is-active")}
        className={`hamburger hamburger--spin`}
        type="button"
      >
        <span className="hamburger-box">
          <span className="hamburger-inner"></span>
        </span>
      </button>

      <ul>
        <li></li>
      </ul>
    </nav>
  )
}

export default NavBar
