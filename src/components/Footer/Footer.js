import * as React from "react"
import "../../styles/footer.scss"

const Footer = () => {
  const getYear = () => {
    const d = new Date()
    const currentYear = d.getFullYear()
    return currentYear
  }

  const SocialIcons = () => {
    return (
      <section className="social-icons-container flex flex-col gap-5 items-end">
        <a href="https://github.com/mrrajsoni" target="_blank" rel="noreferrer">
          Github
        </a>
        <a
          href="https://www.linkedin.com/in/raj-soni1996/"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
      </section>
    )
  }

  const EmailInfo = () => {
    return <a href="mailto:raj@inventtheweb.com">raj@inventtheweb.com</a>
  }

  const ContactInfo = () => {
    return <a href="tel:+91-8097753677">+91-8097753677</a>
  }
  const Copyright = () => {
    return (
      <section className="copyright-container">
        © {getYear()}. All rights and wrongs reserved.
      </section>
    )
  }
  return (
    <footer>
      <section
        className={`footer-container margin-container flex justify-around flex-col md:items-center md:flex-row `}
      >
        <div className="flex flex-col gap-5 mb-5 md:mb-0 items-start border-right">
          <EmailInfo />
          <ContactInfo />
        </div>
        <div className="">
          <SocialIcons />
        </div>
      </section>
      <Copyright />
    </footer>
  )
}

export default Footer
