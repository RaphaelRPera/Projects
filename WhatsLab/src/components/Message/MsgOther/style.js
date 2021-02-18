import styled from 'styled-components'

export const Container = styled.div`
    border-radius: 10px;
    max-width: 80%;
    padding: 8px;
    background-color: rgb(252,252,252);
    /* background-color: ${props => props.darkMode && '#262D31'}; */
    background-color: ${props => props.darkMode && '#32373a'};
    border: 1px solid rgba(100,100,100, 0.1);
    box-shadow: -1px 1px 1px rgba(200,200,200, 0.5);
    box-shadow: ${props => props.darkMode && 'none'};
    color: ${props => props.darkMode && 'whitesmoke'};
    display: grid;
    /* grid-template-rows: auto auto; */
    grid-template-rows: ${props => props.url ? 'auto auto auto' : 'auto auto'};
    grid-template-columns: 100%;
    row-gap: 5px;
    align-self: flex-start;
    /* margin-bottom: 15px; */
    margin-top: ${props => props.prevEqual ? '5px' : '15px'};
`

export const Text = styled.p`
    margin: 0;
    text-align: left;
    word-wrap: break-word;
`

export const User = styled.p`
    margin: 0;
    font-weight: bold;
    text-align: left;
    font-size: 12px;
`

export const Link = styled.a`
    text-align: left;
    margin: 0;
    padding: 0;
    color: ${props => props.darkMode && '#239EE4'};
`