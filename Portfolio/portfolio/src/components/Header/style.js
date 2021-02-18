import styled from 'styled-components'
import image1 from '../../img/pexels-lukas-574070.jpg'


export const HeaderContainer = styled.div`
    background-image: url(${image1});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    width: 100%;
    min-height: 560px;
    max-height: 98vh;
    display: flex;
`

export const ImageFilter = styled.div`
    background-color: rgba(0, 67, 108, 0.3);
    width: 100%;
    display: none;
    @media screen and (min-width: 500px) {display: block}
`

export const SocialContainer = styled.div`
    position: absolute;
    right: calc(20px + 4vw);
    top: 80px;
`
