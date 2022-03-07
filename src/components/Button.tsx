import * as React from "react"

const Button = ({ name, link }: { name: string, link: string }) => {

  const onButtonClick = () => {
    window.location.href = link
  }
  return (
    <button onClick={onButtonClick}>
      <span className={`button-span`}>{name}</span>
    </button>
  )
}

export default Button
