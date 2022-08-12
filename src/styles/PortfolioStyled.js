import styled from "styled-components"
import { GoToTopArrow } from "../utils/iconsIndex"

export const PortfolioStyled = styled.div`
  margin: 5px;
`
export const FinishPage = styled.div`
  /* margin: auto; */
  box-sizing: content-box;
  width: 192px;
  height: 92px;
  background-color: snow;
  border-color: black;
  border-style: solid;
  border-width: 4px 4px 100px 4px;
  border-radius: 100%;
  position: relative;
  margin-bottom: 10px;
  margin-left: auto;
  margin-right: auto;
  margin-top: -45px;

  &:before {
    content: "";
    position: absolute;
    top: 50%;
    left: 0%;
    background-color: snow;
    border: 36px solid black;
    border-radius: 100%;
    width: 24px;
    height: 24px;
    box-sizing: content-box;
  }
  &:after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    background-color: black;
    border: 36px solid snow;
    border-radius: 100%;
    width: 24px;
    height: 24px;
    box-sizing: content-box;
  }
`


export const ButtonToTop = styled(GoToTopArrow)`
  position:fixed;
  bottom: 20px;
  right: 20px;
  font-size: calc(4rem + 3vw);
  fill: hsla(186.9, 100%, 20.7%, 1);
  cursor: pointer;
  &:hover {
    fill: hsla(186.9, 100%, 35.7%, 1);
  }
`
