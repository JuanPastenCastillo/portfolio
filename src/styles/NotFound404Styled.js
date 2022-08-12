import styled from 'styled-components'
import { NotFound404Icon } from "../utils/iconsIndex"

export const WrapAll = styled.div`
text-align: center;
font-size: calc(1rem + 1vw);
`

export const Img = styled(NotFound404Icon)`
 height:200px;
 width:100%;
 max-width:400px;
 fill: hsla(332, 62.2%, 40.7%, 1);
`