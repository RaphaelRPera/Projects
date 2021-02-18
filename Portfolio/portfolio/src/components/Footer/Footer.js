import React from 'react'
import { FooterContainer } from './style'
import data from '../../data/data'


export const Footer = () => {
    const {footer} = data
    return (
        <FooterContainer>
            {footer}
        </FooterContainer>
    )
}
