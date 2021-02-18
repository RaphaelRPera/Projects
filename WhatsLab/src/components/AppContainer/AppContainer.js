import React from 'react';
import { MainContainer } from './style'
import { Formulario } from '../Formulario/Formulario';
import { MsgContainer } from '../MsgContainer/MsgContainer';
import { Header } from '../Header/Header';
import { useSelector } from 'react-redux';


export const AppContainer = () => {
    const darkMode = useSelector(state => state.darkMode)
    return (
        <MainContainer darkMode={darkMode} >
            <Header/>
            <MsgContainer/>
            <Formulario/>
        </MainContainer>
    )
}
