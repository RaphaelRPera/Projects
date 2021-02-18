import styled from 'styled-components'


export const FormContainer = styled.div`
    height: 55px;
    display: grid;
    grid-template-columns: 1fr auto;
    align-content: stretch;
    column-gap: 10px;
    padding: 5px 10px 10px 10px;
    /* border-radius: 0 0 8px 8px; */
`

export const FormMsg = styled.input`
    padding: 0 5px 0 10px;
    background-color: rgb(252,252,252);
    background-color: ${props => props.darkMode && 'rgb(50,55,57)'};
    border: 1px solid rgba(100,100,100, 0.15);
    outline: none;
    border-radius: 25px;
    word-wrap: break-word;
    color: ${props => props.darkMode && 'whitesmoke'};
    ::placeholder{ color: ${props => props.darkMode && 'whitesmoke'} }
`


export const SendButton = styled.div`
    cursor: pointer;
    width: 40px;
    height: 40px;
    /* background-color: #00BFA5; */
    background-color: #40c351;
    background-color: ${props => props.darkMode && '#056162'};
    border-radius: 100%;
    padding: 0 7px 0 12px;

    display: grid;
    place-items: center;

    :active{ background-color: #108575; }
`

export const SendImg = styled.img`
    width: 100%;
`
