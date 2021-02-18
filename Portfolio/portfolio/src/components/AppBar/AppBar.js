import React from 'react'
import { AppBarContainer, Logo, Menu, MenuButton } from './style'


export const AppBar = () => {

    const handleClick = (id) => {
        const section = document.getElementById(id)
        section.scrollIntoView({behavior: 'smooth'})
        console.log(id)
    }

    return (
        <AppBarContainer>
            <Logo> Raphael </Logo>
            <Menu>
                <MenuButton onClick={() => {handleClick('knowledge')}} > conhecimentos </MenuButton>
                <MenuButton onClick={() => {handleClick('education')}} > formação </MenuButton>
                <MenuButton onClick={() => {handleClick('projects')}} > projetos </MenuButton>
                <MenuButton onClick={() => {handleClick('contact')}} > contato </MenuButton>
            </Menu>
        </AppBarContainer>
    )
}