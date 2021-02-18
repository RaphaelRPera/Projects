import styled from 'styled-components'


export const LeftPanelContainer = styled.div`
    /* background-color: rgba(0, 67, 108, 0.24); */
    background-color: rgba(0, 67, 108, 0.40);
    color: whitesmoke;
    width: 100%;
    min-width: 360px;
    /* padding: 20px calc(20px + 4vw) 30px calc(20px + 4vw); */
    /* padding: 60px calc(20px + 4vw) 30px calc(20px + 4vw); */
    /* padding: 70px calc(20px + 4vw) 30px calc(20px + 4vw); */
    padding: 80px calc(20px + 4vw) 30px calc(20px + 4vw);

    display: grid;
    grid-template-rows: auto minmax(100px, auto) auto auto;
    /* grid-template-rows: auto 1fr auto auto; */
    justify-items: start;
    align-content: center;
    align-items: center;
    row-gap: calc(10px + 1vh);

    @media screen and (min-width: 500px) {
        min-width: 500px;
        max-width: 100%;
        background-color: rgba(0, 67, 108, 0.6);
        /* padding: 70px calc(20px + 4vw) 30px calc(20px + 4vw); */
    };
`

export const TitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
`

export const Title = styled.div`
    font-size: calc(20px + 1vw);
    font-weight: bold;
`

export const Subtitle = styled.div`
    font-size: calc(14px + 0.4vw);
    padding: 5px 0 10px 0;
`

export const Description = styled.div`
    padding: 5px 0 10px 0;
    font-size: calc(14px + 0.3vw);
`

export const TagContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 5px 0 10px 0;
    column-gap: calc(15px + 1vw);   // 30px
`

export const Tag = styled.div`
    display: flex;
    padding: 5px 0 0 0;
    font-size: calc(14px + 0.3vw);
`

export const TagDetail = styled.div`
    font-weight: bold;
    margin-right: 3px;
`

export const CVButton = styled.div`
    background-color: #012940;
    background-color: #4eaccf;
    padding: 5px 15px;
    border-radius: 6px;
    cursor: pointer;
    user-select: none;
    color: white;
    text-align: center;
    align-self: flex-start;
    :active{ background-color: rgb(42, 150, 189); };
`
