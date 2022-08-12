import styled from "styled-components"
// import contactme from "../images/contactme.avif"
import { ContactMe, GitHubIcon, LinkedinIcon } from "../utils/iconsIndex"

export const ContactStyled = styled.div`
  /* border: 1px white solid; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: calc(2.1rem + 1vw);
  height: 80vh;
  /* background-color: blanchedalmond; */
  /* color: black; */
  /* border: 35px darkgrey solid; */
  /* height:100vh; */
  
  h2{
    margin: 0;
    white-space: nowrap;
  }
`

export const Img = styled(ContactMe)`
  fill: hsla(332, 62.2%, 40.7%, 1);
  max-width:400px;
`

export const SocialMedia = styled.div`
/* border: 1px royalblue solid; */
/* height:100%; */
width:100%;
display: flex;
justify-content: center;
align-items: center;
font-size: calc(8rem + 3vw);
svg{
  width:100%;
  height:100%;
  fill:hsla(186.9, 100%, 30.7%, 1);
}

svg:hover{
  fill:hsla(186.9, 100%, 45.7%, 1);
 }
 
 svg:active{
  fill:hsla(332, 62.2%, 40.7%, 1);
 }
 
 
 

`

export const GitHubIconStyled = styled(GitHubIcon)`
 
`

export const LinkedinIconStyled = styled(LinkedinIcon)``
