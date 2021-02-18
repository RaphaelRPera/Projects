import React from 'react'
import linkedinIcon from '../../img/linkedin.svg'
import whatsappIcon from '../../img/whatsapp.svg'
import githubIcon from '../../img/github.svg'
import { Icon, IconGroup } from './style'



export const SocialMenu = (props) => {
    return (
        <IconGroup direction={props.direction} >
            <LinkedinIcon/>
            <WhatsappIcon/>
            <GitHubIcon/>
        </IconGroup>
    )
}



export const LinkedinIcon = () =>
    <Icon href='https://www.linkedin.com/in/raphael-ribeiro-pera/' target='_blank' image={linkedinIcon} />


export const WhatsappIcon = () => 
    <Icon href={`https://api.whatsapp.com/send?phone=5511971533068&text=Olá%20Raphael!`} target='_blank' image={whatsappIcon} />


export const GitHubIcon = () =>
    <Icon href='https://github.com/RaphaelRPera/Projects/' target='_blank' image={githubIcon} />

