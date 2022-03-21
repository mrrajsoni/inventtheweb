import * as React from "react"

interface ButtonProps {
  name: string,
  link: string,
  newTab?: boolean
}

const Button = (props: ButtonProps) => {

  const { name, link, newTab } = props;
  const onButtonClick = () => {
    newTab ? window.open(link, "_blank") : window.location.href = link
  }
  return (
    <button onClick={onButtonClick}>
      <span className={`button-span`}>{name}</span>
    </button>
  )
}

export default Button
