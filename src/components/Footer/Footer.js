import * as React from "react"
import "../../styles/footer.scss"
import Github from "../../images/svg/github.svg"
import Linkedin from "../../images/svg/linkedin.svg"
import { Link } from "gatsby"
import Lottie from "lottie-web"

const Footer = () => {
  let animationContainer = React.createRef()
  React.useEffect(() => {
    const anim = Lottie.loadAnimation({
      container: animationContainer.current, // the dom element that will contain the animation
      renderer: "svg",
      loop: true,
      autoplay: true,
      path: "../../images/animations/github.json",
    })

    return anim.destroy()
  }, [])

  const getYear = () => {
    const d = new Date()
    const currentYear = d.getFullYear()
    return currentYear
  }

  const SocialIcons = () => {
    return (
      <section className="social-icons-container">
        <Link to="https://github.com/mrrajsoni">
          <span ref={animationContainer}></span>
        </Link>
        <Link to="https://github.com/mrrajsoni">
          <img src={Linkedin} alt="LinkedIn icon" />
        </Link>
      </section>
    )
  }

  const EmailInfo = () => {
    return <Link to="mailto:raj@inventtheweb.com">raj@inventtheweb.com</Link>
  }

  const ContactInfo = () => {
    return <Link to="tel:+91-8097753677">+91-8097753677</Link>
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
      <section className={`footer-container flex justify-around items-center `}>
        <EmailInfo />
        <SocialIcons />
        <ContactInfo />
      </section>
      <Copyright />
    </footer>
  )
}

export default Footer
