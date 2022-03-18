import * as React from "react"
import "../styles/global.scss"
import "../styles/index.scss"
import Header from "../components/Header/header"
import Button from "../components/Button"
import CaseStudy from "../components/Case-Studies/Case-studies"
import Footer from "../components/Footer/Footer"
import "../scripts/scroll.js"

const IndexPage = () => {
  return (
    <>
      <Header />
      <section className={`homepage-banner cd-section visible`}>
        <div
          className={`homepage-banner-left flex flex-col justify-center items-start `}
        >
          <h1
            title="Superfast E-commerce Website Development"
            className={`homepage-banner-title`}
          >
            Superfast <br />
            E-commerce Website Development
          </h1>
          <p className={`homepage-banner-subtitle`}>
            WordPress, Shopify e-commerce website that generate sales with
            conversion optimized development.
          </p>
          <Button link="mailto:raj@inventtheweb.com" name={`Say hi 👋`} />
        </div>
        <div className={`homepage-banner-right`}></div>
      </section>
      <section className={`case-study cd-section`}>
        <div className={`margin-container`}>
          <span className={`section-mini-subtitle`}>WORK</span>
          <h2 className={`section-title`}>
            Clients who are rocking the internet world
          </h2>
          <CaseStudy />
        </div>
      </section>
      <Footer />
    </>
  )
}

export default IndexPage
