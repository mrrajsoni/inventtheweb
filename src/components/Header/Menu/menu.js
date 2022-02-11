import { Link } from "gatsby"
import * as React from "react"
import { useState } from "react"
import "../../../styles/menu.scss"

const Menu = () => {
  const [isMenuOpen, setisMenuOpen] = useState(false)

  const menuOpen = () => {
    setisMenuOpen(prevState => !prevState)
  }
  return (
    <nav className="nav-bar">
      <button
        onClick={event => {
          event.currentTarget.classList.toggle("is-active")
          menuOpen()
        }}
        className={`hamburger hamburger--spin`}
        type="button"
      >
        <span className="hamburger-box">
          <span className="hamburger-inner"></span>
        </span>
      </button>
      <div className={`menu-container ${isMenuOpen ? "is-open" : ""}`}>
        <ul>
          <li className={`menu-li`}>
            <Link to="#">Projects</Link>
          </li>
          <li className={`menu-li`}>
            <Link to="/blog">Blogs</Link>
          </li>
          <li className={`menu-li`}>
            <Link to="/about">About</Link>
          </li>
          <li className={`menu-li`}>
            <Link to="#">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Menu
