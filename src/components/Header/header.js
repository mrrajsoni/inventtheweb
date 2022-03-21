import * as React from "react"
import Menu from "./Menu/menu"
import logo from "../../images/Inventtheweb-logo-black.webp"

const Header = () => {
  return (
    <header>
      <img className={`logo`} src={logo} alt="Invent the Web logo" />
      {/* <Menu /> */}
    </header>
  )
}

export default Header
