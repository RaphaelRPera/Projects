import React from 'react'
import { Avatar } from './Avatar/Avatar'
import { HeaderContainer, BrightButton } from './style'
import brightIcon from '../../img/icons8-brightness-100.png'
import { useDispatch, useSelector } from 'react-redux'
import { setDarkMode } from '../../store/DarkMode/DarkMode.actions'


export const Header = () => {
    const dispatch = useDispatch()
    const darkMode = useSelector(state => state.darkMode)

    return (
        <HeaderContainer darkMode={darkMode} >
            <Avatar/>
            <BrightButton
                src={brightIcon}
                onClick={() => {dispatch(setDarkMode(!darkMode))}}
            />
        </HeaderContainer>
    )
}
