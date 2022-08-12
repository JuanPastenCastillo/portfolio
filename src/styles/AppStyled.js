import styled from "styled-components"
import { NavLink } from "react-router-dom"

export let AllContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100%+17px);
`

export let Nav = styled.nav`
  width: 100%;
  margin-top: 5px;
  margin-bottom: 5px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;

  a {
    text-decoration: none;
    color: snow;
    border: 1px transparent solid;
    padding: 1rem;
    min-width: 20%;
    text-align: center;
  }

  a:hover {
    color: hsla(186.9, 100%, 40.7%, 1);
    border: 1px hsla(186.9, 100%, 40.7%, 1) solid;
  }
`

export const NavLinkStyled = styled(NavLink)`
  span {
    text-decoration: underline;
  }

  &.active {
    border: 1px hsla(332, 62.2%, 50.7%, 1) solid;
    color: hsla(332, 62.2%, 50.7%, 1);
    position: relative;
    outline: none;

    span {
      text-decoration: none;
    }
  }

  &.active::after {
    content: "";
    position: absolute;
    min-width: 41%;
    height: 5px;
    top: 93%;
    right: 4px;
    background-color: hsl(212.7, 66.3%, 16.3%);
    z-index: 1;
  }
  &.active::before {
    content: "";
    position: absolute;
    min-width: 41%;
    height: 10px;
    left: 4px;
    bottom: 92%;
    background-color: hsl(212.7, 66.3%, 16.3%);
    z-index: 1;
  }
`
