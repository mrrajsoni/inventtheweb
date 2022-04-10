import * as React from "react"
import "../styles/index.scss"
import Header from "../components/Header/header"
import Button from "../components/Button"
import CaseStudy from "../components/Case-Studies/Case-studies"
import Footer from "../components/Footer/Footer"
import { StaticImage } from "gatsby-plugin-image"
import SEO from "../components/Seo"

const IndexPage = () => {
  const DevelopmentLogos = () => {
    return (
      <>
        <StaticImage
          className="logo-development"
          src="../images/WordPress-logo.png"
          loading="eager"
          alt="WordPress-logo"
        />
        <StaticImage
          className="logo-development"
          src="../images/Shopify-logo.png"
          loading="eager"
          alt="Shopify-logo"
        />
        <StaticImage
          className="logo-development"
          src="../images/Gatsby-logo.png"
          loading="eager"
          alt="Gatsby-logo"
        />
      </>
    )
  }
  return (
    <>
      <SEO />
      <Header />
      <section className="homepage-banner-container">
        <div className={`homepage-banner text-center cd-section visible`}>
          <div className={`homepage-banner-left flex flex-col items-center `}>
            <h1
              title="E-commerce Website Developer in Mumbai"
              className={`homepage-banner-title`}
            >
              E-commerce Website Developer in Mumbai
            </h1>
            <p className={`homepage-banner-subtitle`}>
              WordPress, Shopify or Headless E-commerce website development that
              keenly focuses on blazing-fast sites which in turn is responsible
              for generating sales.
            </p>
            <Button link="mailto:raj@inventtheweb.com" name={`Hire me`} />
          </div>
          <div className={`homepage-banner-right flex mt-10 `}>
            <DevelopmentLogos />
          </div>
        </div>
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
