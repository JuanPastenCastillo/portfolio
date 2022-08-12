import React from 'react'
import {WrapAll, Img } from '../styles/NotFound404Styled'




const NotFound404 = () => {
  return (
    <WrapAll>
      <h2>The page you enter don't exist here.</h2>
      <Img />
      <p>Click in the buttons on the top to navigate to other sections of this website.</p>
    </WrapAll>
  )
}

export default NotFound404