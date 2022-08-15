import React, {useState, useEffect} from "react"
import { PortfolioStyled } from "../styles/PortfolioStyled.js"
import LayoutSingleProjectPortfolio from "./PortfolioComponents/LayoutSingleProjectPortfolio.js"
import { FinishPage, ButtonToTop } from "../styles/PortfolioStyled.js"
import pomodoro from "../images/pomodoro.webp"
import calculator from "../images/calculator.webp"
import markdownPreviewer from "../images/markdownPreviewer.webp"
import randomQuote from "../images/randomQuote.webp"
import personalPortfoliov1 from "../images/personalPortfoliov1.webp"

const firstProject = {
  title: "Pomodoro",
  whenWasMade: "Aug—2022",
  description: [
    {
      users: [
        "Pomodoro to make sessions and breaks. By default are 25 minutes for session and 5 minutes for break. This values are customizable.",
        "The user can use a value from break and sessions from 1 to infinite.",
        "The user can see the current state and time left in the tab of the browser.",
        "Exist a button to start the application",
        "Existe a button to reset the application to his default values.",
        "When the application start the button for change values for break and session are disabled.",
      ]
    },
    {
      code: [
        "Library «moment» was used for formatted the number.",
        "Audio tag was used to retrieve información of sound from internet."
      ]
    }
  ],
  technoligiesUsed: [
    "HTML",
    "CSS",
    "Javascript",
    "React",
    "Git",
    "Github",
    "Vercel"
  ],
  imageOfProject: { pomodoro },
  url: "https://pomodoro-react-hazel.vercel.app/"
}
const secondProject = {
  title: "Calculator",
  whenWasMade: "Aug—2022",
  description: [
    {
      users: [
        "This calculator make the calculation of sum, rest, multilpy, divide, delete one value typed, delete all value, add dot notation and result number.",
        "The numbers are displayed in a nice look way, adding commas where is required.",
        "Can be used tab key to move around the buttons"
      ]
    },
    {
      code: [
        "Styled components used in separate files",
        "High use of useReducer."
      ]
    }
  ],
  technoligiesUsed: [
    "HTML",
    "CSS",
    "Javascript",
    "React",
    "Git",
    "Github",
    "Vercel"
  ],
  imageOfProject: { calculator },
  url: "https://calculator-react-nine.vercel.app/"
}
const thirdProject = {
  title: "Markdown live previewer",
  whenWasMade: "Aug—2022",
  description: [
    {
      users: [
        "Can write markdown and immediately see a preview of the that.",
        "The previewer of the text shows the transformation of the markdown inmediately.",
        "The previewer and the markdown input box can be maximized with toggle buttons.",

      ]
    },
    {
      code: [
        "Used global styles without styled components.",
        "Used svg icons in react components.",
        "Used «react-markdown» library to make the logic behhind the transformation from user input to the markdown preview.",
        "Used «react-syntax-highlighter» library to highlight parts of the markdown preview that are code.",
        "Use styled components with props.",
        
      ]
    }
  ],
  technoligiesUsed: [
    "HTML",
    "CSS",
    "Javascript",
    "React",
    "Git",
    "Github",
    "Vercel"
  ],
  imageOfProject: { markdownPreviewer },
  url: "https://markdown-live-previewer-two.vercel.app/"
}
const fourProject = {
  title: "Random quote generator",
  whenWasMade: "Aug—2022",
  description: [
    {
      users: [
        "Display one random quote first time user the app and when click in the button «new quote».",
        "Have a social media button to share the quote. In this case was used twitter and tumblr.",
        "Color of some components change when the button is clicked. All are equal.",
      ]
    },
    {
      code: [
        "Was used localStorage to store the data of the api.",
        "Was used svg icons in components of react to re use it.",
        "Was passed props from children to parents (for the color change of differents components).",
        "Was used global styles of styled components.",
        "Was used «window.open» in the svg component to redirect with click to the desired page and making the desired text."
      ]
    }
  ],
  technoligiesUsed: [
    "HTML",
    "CSS",
    "Javascript",
    "React",
    "Git",
    "Github",
    "Vercel"
  ],
  imageOfProject: { randomQuote },
  url: "https://random-quote-chi.vercel.app/"
}
const fifthProject = {
  title: "Personal portfolio 1.0",
  whenWasMade: "Oct—2020",
  description: [
    {
      users: [
        "This webpage show all the project done only with HTML, CSS, Javascript, GIt and Github",
      ]
    },
    {
      code: [
        "All donde with HTML, CSS and Javascript vanilla"
      ]
    }
  ],
  technoligiesUsed: [
    "HTML",
    "CSS",
    "Javascript",
    "Git",
    "Github",
  ],
  imageOfProject: { personalPortfoliov1 },
  url: "https://juanpastencastillo.github.io/Personal-Portfolio/"
}


const Portfolio = () => {
  const [showButton, setShowButton] = useState(false)

  useEffect(() => {
    let toggleShowButton = () => {
      if (window.scrollY > 300) {
        setShowButton(true)
      } else {
        setShowButton(false)
      }
    }
    window.addEventListener("scroll", toggleShowButton)
    return () => window.removeEventListener("scroll", toggleShowButton)
  }, [])
  
  const scrollToTop = () => {
    window.scrollTo({
      top:0,
      // behavior:"smooth"
    })
  }
  
  return (
    <>
      <PortfolioStyled id="portfolio">
        <LayoutSingleProjectPortfolio allProps={firstProject} />
        <LayoutSingleProjectPortfolio allProps={secondProject} />
        <LayoutSingleProjectPortfolio allProps={thirdProject} />
        <LayoutSingleProjectPortfolio allProps={fourProject} />
        <LayoutSingleProjectPortfolio allProps={fifthProject} />
      </PortfolioStyled>
      <FinishPage></FinishPage>
      
      {showButton && (
        
        <ButtonToTop onClick={scrollToTop} ></ButtonToTop>
      )}
      
    </>
  )
}

export default Portfolio
