import React from 'react'
import { SocialMenu } from '../Social/Social'
import { HireContainer, HireText, HireTitle } from './style'


export const HireMe = () => {
    return (
        <HireContainer id='contact' >
            <HireTitle> Contrate-me </HireTitle>
            <HireText>
                Procuro oportunidade de trabalho onde eu possa aprender, me desenvolver e evoluir na minha carreira profissional
            </HireText>
            <HireText>
                E-mail: raphael.r.pera@gmail.com <br/>
                Celular: (11) 97153-3068
            </HireText>
            <br/>
            <SocialMenu direction={'hor'} />
        </HireContainer>
    )
}
