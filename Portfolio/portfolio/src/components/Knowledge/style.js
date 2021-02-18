import styled from 'styled-components'


export const KnowContainer = styled.div`
    background-color: #012940;
    color: white;

    display: flex;
    flex-direction: column;
    align-items: stretch;

    /* height: 98vh; */
    /* padding-bottom: 30px; */
    padding: 0 calc(20px + 4vw) 50px calc(20px + 4vw);
`

export const KnowTitle = styled.div`
    /* background-color: lightcoral; */
    /* grid-column: 1 / 3; */
    text-align: center;
    padding: 35px 0 42px 0;
    font-size: calc(20px + 0.4vw);
`

export const KnowCardContainer = styled.div`
    /* background-color: lightblue; */
    min-width: 60vw;

    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    row-gap: 50px;

    @media screen and (min-width: 610px) {
        flex-direction: row;
        column-gap: 50px;
    };
`

export const KnowCard = styled.div`
    /* background-color: lightblue; */
    /* max-width: 286px; */
    /* :first-child{ margin-right: calc(55px + 2vw); }; */
    @media screen and (min-width: 610px) {
        max-width: 310px;
    }
`

export const KnowCardTitle = styled.div`
    font-size: 56px;
    font-size: calc(24px + 2.59vw);
    font-weight: bold;
    margin-bottom: 20px;
`

export const KnowCardText = styled.div`
    color: whitesmoke;
    font-size: calc(14px + 0.3vw);
`

