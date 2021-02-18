import styled from 'styled-components'


export const AppBarContainer = styled.header`
    background-color: rgba(0, 67, 108, 0.20);
    display: flex;
    justify-content: space-between;
    align-items: stretch;

    height: 60px;
    padding: 0 calc(20px + 0.5vw);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1;

    @media screen and (min-width: 500px) {
        background-color: transparent;
    }
`

export const Logo = styled.div`
    display: none;

    @media screen and (min-width: 500px) {
        display: flex;
        align-items: center;
        font-size: calc(16px + 0.35vw);
        font-weight: bold;
        cursor: pointer;
        user-select: none;
        color: whitesmoke;
    }
`

export const Menu = styled.nav`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    column-gap: calc(12px + 0.5vw); // 20px

    @media screen and (min-width: 500px) {
        justify-content: flex-end;
    };
`

// export const MenuButton = styled.a`
//     text-decoration: none;
//     cursor: pointer;
//     user-select: none;
//     /* color: black; */
//     /* color: goldenrod; */
//     /* color: gold; */
//     /* color: whitesmoke; */
//     color: white;
//     font-size: calc(14px + 0.35vw);
//     :hover{color: gold};
//     text-shadow: 0 2px 2px rgba(50,50,50,0.9);
// `

export const MenuButton = styled.div`
    text-decoration: none;
    cursor: pointer;
    user-select: none;
    /* color: black; */
    /* color: goldenrod; */
    /* color: gold; */
    /* color: whitesmoke; */
    color: white;
    font-size: calc(14px + 0.35vw);
    :hover{color: gold};
    text-shadow: 0 2px 2px rgba(50,50,50,0.9);
`
