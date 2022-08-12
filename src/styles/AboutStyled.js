import styled from "styled-components"
import fight from "../images/aboutme.webp"

export const WrapAll = styled.div`
`

export const Description = styled.div`

  margin: 20px;
  font-size: calc(0.8rem + 0.9vw);

  h2 {
    text-align: center;
    vertical-align: middle;
  }

  p {
    text-align: justify;
    margin: auto calc(1.8rem + 0.1vw);
  }
`

export const SpanStyled = styled.span`
  color: ${(x) =>
    x.red
      ? "hsla(332, 62.2%, 50.7%, 1)"
      : x.blue
        ? "hsla(186.9, 100%, 40.7%, 1)"
        : "snow"};
  white-space: ${(x) => (x.nowrap ? "nowrap" : "normal")};
  display: ${(x) => (x.nowrap ? "block" : "inline")};
  font-style: ${(x) => (x.highlight ? "italic" : "none")};
  font-weight: ${(x) => (x.highlight ? " bold" : "none")};
`

export const FightContainer = styled.div`
  background-image: url(${fight});
  background-repeat: no-repeat;
  background-size: contain;
  width: 200px;
  height: 70px;
  margin-left:auto;
  margin-top: 50px;
  margin-right: 20px;
`

