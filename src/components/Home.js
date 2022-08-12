import { Link } from "react-router-dom"
import HomeImage from "../images/laptop.webp"
import {
  HomeStyled,
  WrapAll,
  SpanStyled,
  DiscoverWorkIconStyled,
  Image
} from "../styles/HomeStyled.js"

const Home = () => {
  return (
    <HomeStyled>
      <WrapAll>
        <h1>
          Hi!, i'm <SpanStyled first>Juan Pastén Castillo</SpanStyled> a{" "}
          <SpanStyled second>Frontend Developer.</SpanStyled>
        </h1>
        <Link to="/portfolio">
          <p>Discover my work clicking here</p>
          <DiscoverWorkIconStyled />
        </Link>
        <Image src={HomeImage} />
      </WrapAll>
    </HomeStyled>
  )
}

export default Home
