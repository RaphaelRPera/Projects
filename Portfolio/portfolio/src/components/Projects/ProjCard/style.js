import styled from 'styled-components'


export const CardContainer = styled.div`
    display: grid;
    grid-template-columns: auto auto;
    grid-template-rows: repeat(4, auto);
    grid-column-gap: 30px;
    grid-row-gap: calc(10px);
    align-items: start;
    justify-items: stretch;
    justify-items: ${props => props.direction === 'imgRight' && 'end'};

    @media screen and (min-width: 630px) {
        align-items: center;
        grid-column-gap: calc(20px + 2vw);
    }

    max-width: 900px;
    padding-bottom: calc(30px + 5.5vh);   // 50px
`


export const TitleContainer = styled.div`

`

export const Title = styled.a`
    text-decoration: none;
    color: black;
    font-size: calc(22px + 1vw);  // 26px
    font-weight: bold;
    text-align: left;
    grid-column: 2/3;
    grid-row: 1/2;
    width: 100%;

    letter-spacing: 0.05em;
    position: relative;

    ::after{
        /* background: none repeat scroll 0 0 transparent; */
        bottom: 0;
        content: "";
        height: 3px;
        left: 50%;
        position: absolute;
        background: black;
        transition: width 0.3s ease 0s, left 0.3s ease 0s;
        width: 0;
    };

    :hover::after{
        width: 97%; 
        left: 0; 
    };
`

export const Subtitle = styled.div`
    font-size: calc(16px + 0.5vw);  //21px
    margin-top: 3px;
    text-align: ${props => props.direction === 'imgRight' && 'right'};
`

export const CardText = styled.div`
    font-size: calc(14px + 0.3vw);
    grid-column: 1/3;
    grid-row: 3/5;

    @media screen and (min-width: 630px) {
        grid-column: 2/3;
        grid-column: ${props => props.direction === 'imgRight' && '1/2'};
        grid-row: 2/4;
        align-self: stretch;
    };
`

export const GitButton = styled.a`
    text-decoration: none;
    background-color: #4eaccf;
    color: whitesmoke;
    padding: 5px 15px;
    text-align: center;
    font-size: calc(14px + 0.25vw); // 16px
    border-radius: 6px;
    box-shadow: -1px 2px 2px rgba(180,180,180,0.8);
    margin-top: 10px;
    cursor: pointer;
    user-select: none;
    grid-column: 2/3;
    grid-column: ${props => props.direction === 'imgRight' && '1/2'};
    grid-row: 2/3;
    justify-self: start;
    justify-self: ${props => props.direction === 'imgRight' && 'end'};
    align-self: end;

    @media screen and (min-width: 630px) {
        padding: 7px 20px;
        /* grid-column: 2/3;
        grid-column: ${props => props.direction === 'imgRight' && '1/2'}; */
        grid-row: 4/5;
    };

    :active{
        background-color: #5b83a6;
    };
`

export const ImgContainer = styled.a`
    border-radius: 6px;
    box-shadow: -1px 2px 2px rgba(200,200,200,0.7);

    transition: 0.3s;
    :hover{
        box-shadow: -1px 1px 12px rgba(150,150,150,1);
    };

    width: 100%;
    min-width: 100px;
    max-height: 340px;

    grid-column: 1/2;
    grid-column: ${props => props.direction === 'imgRight' && '2/3'};
    grid-row: 1/3;

    @media screen and (min-width: 630px) {
        /* grid-column: 1/2; */
        grid-row: 1/5;
    };
`

export const Img = styled.img`
    border-radius: 6px;
    width: 100%;
    max-height: 340px;

`


