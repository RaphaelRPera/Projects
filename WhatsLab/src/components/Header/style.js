import styled from 'styled-components'


export const HeaderContainer = styled.header`
    /* background-color: #00BFA5; */
    background-color: #40c351;
    background-color: ${props => props.darkMode && '#056162'};
    height: 50px;
    max-width: 100%;
    display: flex;
    justify-content: stretch;
    justify-content: space-between;
    padding: 0 10px;
    border-radius: 5px 5px 0 0;
    box-shadow: 0 1px 1px rgba(150,150,150, 0.25);
    z-index: 10;
`

export const BrightButton = styled.img`
    cursor: pointer;
    height: 60%;
    padding: 4px;
    border-radius: 100%;
    :active{background-color: #108575;};
    align-self: center;
`