import styled from 'styled-components'


export const HireContainer = styled.div`
    /* background-color: #5b83a6; */
    /* background-color: whitesmoke; */
    background-color: #4ea4d9;
    color: #012940;
    color: whitesmoke;
    display: flex;
    flex-direction: column;
    align-items: center;
    /* height: 98vh; */
    padding-bottom: 30px;
`


export const HireTitle = styled.div`
    /* background-color: lightcoral; */
    text-align: center;
    padding: 35px 0 42px 0;
    font-size: calc(20px + 0.42vw);
    /* font-size: 25px; */
    font-weight: bold;
`

export const HireText = styled.div`
    /* background-color: lightcoral; */
    padding: 0 20px 20px 20px;
    font-size: calc(16px + 0.25vw);
    /* font-size: 18px; */
    max-width: 320px;
    text-align: center;
    @media screen and (min-width: 630px) {
        max-width: 600px;
    };
`