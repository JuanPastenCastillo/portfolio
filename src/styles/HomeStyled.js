import styled from "styled-components"
import { DiscoverWorkIcon } from "../utils/iconsIndex"

export const HomeStyled = styled.div`
  text-align: center;
  vertical-align: middle;
  height: 100%;

  span {
    white-space: nowrap;
    display: block;
  }
`

export const WrapAll = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  font-size: calc(0.8rem + 0.9vw);

  a {
    color: snow;
    text-decoration: none;
  }

  a:hover,
  a:hover > svg {
    color: hsla(186.9, 100%, 40.7%, 1);
    fill: hsla(332, 62.2%, 50.7%, 1);
  }
`
export const SpanStyled = styled.span`
  color: ${(x) =>
    x.first
      ? "hsla(332, 62.2%, 50.7%, 1)"
      : x.second
      ? "hsla(186.9, 100%, 40.7%, 1)"
      : "snow"};
  
`
export const DiscoverWorkIconStyled = styled(DiscoverWorkIcon)`
  fill: snow;
  cursor: pointer;
  font-size: 5rem;
  
`

export const Image = styled.img`
  position: absolute;
  z-index: -1;
  bottom: 1px;
  right: 1px;
  height: auto;
  width: 100%;
  max-width: calc(340px + 15vw);
  
  @media (max-width: 800px)  {
    left:auto;
    right:auto;
    
  }
`
