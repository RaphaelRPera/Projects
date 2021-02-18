import React from 'react'
import { AvatarContainer, Image, Name } from './style'
import contactImage from '../../../img/foto_raphael.jpeg'

export const Avatar = () => {
    return(
        <AvatarContainer>
            <Image src={contactImage} />
            <Name> Raphael Ribeiro </Name>
        </AvatarContainer>
    )
}