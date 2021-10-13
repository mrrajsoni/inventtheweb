import * as React from "react"
import { Link } from "gatsby"
import { links } from "./navbar.module.css"

const NavBar = ({ pageTitle, children }) => {
  return (
    <header>
      <title>{pageTitle}</title>
      <nav>
        <ul>
          <li>
            <Link className={links} to="/">Home</Link>
          </li>
          <li>
            <Link className={links} to="/about">About</Link>
          </li>
        </ul>
      </nav>
      <main>
        <h3>{pageTitle}</h3>
        {children}
      </main>
    </header>
  )
}

export default NavBar
