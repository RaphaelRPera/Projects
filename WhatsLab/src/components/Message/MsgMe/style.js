import styled from 'styled-components'


export const Container = styled.div`
    border-radius: 10px;
    max-width: 80%;
    padding: 8px;
    /* background-color: rgb(220,248,198); */
    background-color: #DCF8C6;
    background-color: ${props => props.darkMode && '#056162'};
    color: ${props => props.darkMode && 'whitesmoke'};
    border: 1px solid rgba(100,100,100, 0.1);
    box-shadow: ${props => !props.darkMode && '1px 1px 1px rgba(200,200,200, 0.6)'};
    align-self: flex-end;
    /* margin-bottom: 15px; */
    margin-top: 15px;
    //#056162
`

export const Text = styled.p`
    margin: 0;
    text-align: left;
    word-wrap: break-word;
`
