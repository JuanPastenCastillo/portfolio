import React from "react"
import {
  WrapAll,
  WasMade,
  Title,
  Img,
  Description,
  Technologies,
  Url,
  DescriptionAndTechnologies,
  FinishDescription,
} from "../../styles/PortfolioComponent/LayoutSingleProjectPortfolioStyled.js"

const DisplayFeatures = ({ userAndCodeFeatures }) => {
  return (
    <>
      <h3>User features</h3>
      <ul>
        {userAndCodeFeatures[0].users.map((x, i) => (
          <li key={i}>{x}</li>
        ))}
      </ul>

      <h3>Code features</h3>
      <ul>
        {userAndCodeFeatures[1].code.map((x, i) => (
          <li key={i}>{x}</li>
        ))}
      </ul>
    </>
  )
}

const DisplayTechnologies = ({ technologiesUsed }) => {
  return (
    <>
      <h3>Technologies used:</h3>
      <ul>
        <li>{new Intl.ListFormat("en").format(technologiesUsed)}.</li>
      </ul>
    </>
  )
}

const LayoutSingleProjectPortfolio = ({ allProps }) => {
  const {
    title,
    whenWasMade,
    description,
    technoligiesUsed,
    imageOfProject,
    url
  } = allProps
  return (
    <WrapAll>
      <Url href={url} target="_blank">
        <Title>«{title}»</Title>
      </Url>
      <WasMade>{whenWasMade}</WasMade>
      <Img src={imageOfProject} />

      <DescriptionAndTechnologies>
        <Description>
          <DisplayFeatures userAndCodeFeatures={description} />{" "}
        </Description>
        <Technologies>
          <DisplayTechnologies technologiesUsed={technoligiesUsed} />
        </Technologies>
        <FinishDescription ></FinishDescription>
      </DescriptionAndTechnologies>
    </WrapAll>
  )
}

export default LayoutSingleProjectPortfolio
