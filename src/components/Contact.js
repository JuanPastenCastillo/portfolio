import React from "react"
import {
  ContactStyled,
  Img,
  SocialMedia,
  GitHubIconStyled,
  LinkedinIconStyled
} from "../styles/ContactStyled.js"

const Contact = () => {

  return (
    <ContactStyled>
      <h2>
        Let's talk <Img />
      </h2>
      <SocialMedia>
        <a
          href="https://github.com/JuanPastenCastillo"
          target="blank"
          rel="noreferrer"
        >
          <GitHubIconStyled />
        </a>{" "}
        <a
          href="https://www.linkedin.com/in/juanpastencastillo/"
          target="blank"
          rel="noreferrer"
        >
          <LinkedinIconStyled />
        </a>
      </SocialMedia>
    </ContactStyled>
  )
}

export default Contact
