import styled from "styled-components"

export const WrapAll = styled.div`
  display: grid;
  grid-template-columns: 5% 90%;
  font-size: calc(1.5rem + 0.9vw);
  position: relative;

  grid-template-areas:
    "wasMade title"
    "wasMade img"
    "wasMade descriptionAndTechnologies";
    
    
    
`

export const Url = styled.a`
  color: snow;
  outline: none;
  text-decoration: none;

  &:visited {
    color: hsla(332, 62.2%, 50.7%, 1);
  }
`

export const Title = styled.h2`
  grid-area: title;
  text-align: center;
  padding: 5px;
  width: 100vw;
  margin-top: 0;

  &:hover {
    color: hsla(186.9, 100%, 40.7%, 1);
    text-decoration: hsla(186.9, 100%, 40.7%, 1) underline;
  }
`
export const WasMade = styled.div`
  grid-area: wasMade;
  width: 600px;
  text-align: center;
  position: absolute;
  transform: translateX(-100%) rotate(-90deg);
  transform-origin: right;
  left: 15px;
  top: 650px;
  font-size: calc(0.9rem + 0.9vw);
`

export const Img = styled.div`
  grid-area: img;
  background-image: ${(x) => {
    const getSrc = Object.values(x.src)
    return `url(${getSrc})`

  }};
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;

  width: 100%;
  max-width: 400px;
  height: 200px;
  margin: auto;
`

export const DescriptionAndTechnologies = styled.div`
  grid-area: descriptionAndTechnologies;

  h3 {
    text-align: center;
    margin-bottom: 0;
  }

  ul {
    margin-top: 0;
    margin: 15px;
  }

  li {
    list-style: upper-roman;
    margin-bottom: 10px;
  }
`
export const FinishDescription = styled.div`
/* border:1px white solid; */
  border-bottom: 1px hsla(186.9, 100%, 35.7%, 1) solid;
  margin-top: 80px;
  margin-bottom: 80px;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    height: 15px;
    width: 30px;
    border-top-left-radius: 150px;
    border-top-right-radius: 150px;
    background-color: hsla(186.9, 100%, 29.7%, 1);
    top: -14px;
    left: 0px;
  }

  &::before {
    content: "";
    position: absolute;
    height: 15px;
    width: 30px;
    border-bottom-left-radius: 150px;
    border-bottom-right-radius: 150px;
    background-color: hsla(186.9, 100%, 29.7%, 1);
    top: 0px;
    right: 0px;
  }
  
  
`

export const Description = styled.div`
`

export const Technologies = styled.div`
`

