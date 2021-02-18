import styled from 'styled-components'
import backImageWhite from '../../img/y-so-serious-white.png'
import backImageBlack from '../../img/y-so-serious.png'

export const MainContainer = styled.div`
    border: thin solid rgba(100,100,100,0.3);
    border-top: none;
    background-image: url(${props => props.darkMode ? backImageBlack : backImageWhite});
    border-radius: 5px;
    margin: 0 auto;
    width: 500px;
    max-width: 100%;
    min-width: 360px;
    height: 100vh;
    max-height: 100%;

    display: grid;
    grid-template-rows: 1fr auto;
`