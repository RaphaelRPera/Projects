import React from 'react'
import { SocialMenu } from '../Social/Social'
import { TopLeftPanel } from '../TopLeftPanel/TopLeftPanel'
import { HeaderContainer, ImageFilter, SocialContainer } from './style'

export const Header = () => {
    return (
        <HeaderContainer>
            <TopLeftPanel/>
            <ImageFilter/>
            <SocialContainer>
                <SocialMenu direction={'ver'}/>
            </SocialContainer>
        </HeaderContainer>
    )
}
