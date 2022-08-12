import { Route, Routes } from "react-router-dom"
import { AllContainer, Nav, NavLinkStyled } from "./styles/AppStyled.js"
import About from "./components/About.js"
import Contact from "./components/Contact.js"
import Home from "./components/Home.js"
import Portfolio from "./components/Portfolio.js"
import NotFound404 from "./components/NotFound404.js"


function App() {
  return (
    <>
      <AllContainer>
        <Nav>

          <NavLinkStyled to="/">
            <span>Home</span>
          </NavLinkStyled>

          <NavLinkStyled to="/portfolio">
            <span>Portfolio </span>
          </NavLinkStyled>

          <NavLinkStyled to="/about">
            <span>About</span>
          </NavLinkStyled>

          <NavLinkStyled to="/contact">
            <span>Contact</span>
          </NavLinkStyled>

        </Nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound404 />} />
        </Routes>
      </AllContainer>
    </>
  )
}

export default App
