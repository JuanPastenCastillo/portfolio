import React from "react"
import { WrapAll, Description,SpanStyled,  FightContainer } from "../styles/AboutStyled.js"

const About = () => {
  return (
    <WrapAll>
      <Description keyThis>
        <h2>
          My name is <SpanStyled red nowrap>Juan Pastén Castillo</SpanStyled> i'm a{" "}
          <SpanStyled blue nowrap>Frontend web developer</SpanStyled> with knowledge in:{" "}
          <SpanStyled blue>HTML, CSS, Javascript, Git, Github and React.</SpanStyled>
        </h2>{" "}
        <p>
          I character myself for have a <SpanStyled highlight>continuously learning habit</SpanStyled>, improve my <SpanStyled highlight>communication</SpanStyled> and the <SpanStyled highlight>time managment</SpanStyled>. My background is the psychology (was my first career) and now i want to get into the technology industry to give value in the web. Other interests i have are: the meaning of things, human biology as good physical health, breathing techniques, physical exercise, meditation and inversion.
        </p>
      </Description>
      <FightContainer>
      </FightContainer>
    </WrapAll>
  )
}

export default About
