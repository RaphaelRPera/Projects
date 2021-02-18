import React from 'react'
import { MainContainer } from './style'
import { BrowserRouter } from 'react-router-dom'
import { Router } from '../router/Router'



export const AppContainer = () => {
    return (
        <BrowserRouter>
            <MainContainer>
                <Router/>
            </MainContainer>
        </BrowserRouter>
    )
}