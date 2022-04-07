import { StaticImage } from "gatsby-plugin-image"
import * as React from "react"
import mmode from "../images/mmode.gif"
const Maintenance = () => {
  return (
    <section>
      <div>
        <StaticImage
          width={200}
          src="../images/InventTheWeb.png"
          alt="invent-the-web-logo"
        />
      </div>
      <img className="maintenanceGif" src={mmode} alt="maintenance-mode-gif" />
      <h1>Revamping the site from scratch.</h1>
      <p>
        Reach me at&nbsp;
        <a href="mailto:raj@inventtheweb.com">raj@inventtheweb.com</a>
      </p>
    </section>
  )
}

export default Maintenance
