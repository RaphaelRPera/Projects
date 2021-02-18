import React from 'react'
import { AppBar } from '../components/AppBar/AppBar'
import { Education } from '../components/Education/Education'
import { Footer } from '../components/Footer/Footer'
import { Header } from '../components/Header/Header'
import { HireMe } from '../components/HireMe/HireMe'
import { Knowledge } from '../components/Knowledge/Knowledge'
import { Projects } from '../components/Projects/Projects'
import { HomeContainer } from './style'


export const Home = () => {
    return (
        <HomeContainer>
            <AppBar/>
            <Header/>
            <Knowledge/>
            <Education/>
            <Projects/>
            <HireMe/>
            <Footer/>
        </HomeContainer>
    )
}