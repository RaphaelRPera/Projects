import styled from 'styled-components'


export const EduContainer = styled.div`
    background-color: #5b83a6;
    color: white;

    display: flex;
    flex-direction: column;
    align-items: stretch;

    /* height: 98vh; */
    /* padding-bottom: 80px; */
    padding: 0 calc(20px + 4vw) 50px calc(20px + 4vw);
`

export const EduTitle = styled.div`
    /* background-color: lightcoral; */
    /* grid-column: 1 / 3; */
    text-align: center;
    padding: 35px 0 42px 0;
    font-size: calc(20px + 0.4vw);
`

export const EduCardContainer = styled.div`
    /* background-color: lightblue; */
    min-width: 60vw;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: flex-start;
    row-gap: 50px;

    @media screen and (min-width: 630px) {
        flex-direction: row;
        column-gap: 50px;
    };
`

export const EduCard = styled.div`
    /* background-color: lightblue; */
    /* max-width: 286px; */
    /* :first-child{ margin-right: calc(55px + 2vw); }; */
    /* @media screen and (min-width: 630px) {
        max-width: 75px;
    } */
`

export const EduCardTitle = styled.div`
    /* font-size: 26px; */
    font-size: calc(18px + 0.5vw);
    font-weight: bold;
`

export const EduCardSubtitle = styled.div`
    font-size: 14px;
    font-size: calc(14px + 0.1vw);
    margin-top: 6px;
`

export const EduCardText = styled.div`
    color: whitesmoke;
    margin-top: 20px;
    font-size: calc(14px + 0.3vw);
`

export const List = styled.ul`
    margin: 0;
    padding: 0 0 0 0;
    list-style: none;
`
