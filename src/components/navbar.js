import * as React from "react"
import { Link } from "gatsby"
import { links } from "./navbar.module.css"
import { StaticImage } from "gatsby-plugin-image"

const NavBar = ({ children }) => {
  return (
    <header>
      <div className="logo">
        <StaticImage className="logo-img"
          src="../images/Inventtheweb-logo-black.webp"
          alt="Invent the web black logo"
        ></StaticImage>
      </div>
      <nav className="nav-bar">
        <ul>
          <li>
            <Link className={links} to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className={links} to="/about">
              About
            </Link>
          </li>
        </ul>
      </nav>
      <main>{children}</main>
    </header>
  )
}

export default NavBar
