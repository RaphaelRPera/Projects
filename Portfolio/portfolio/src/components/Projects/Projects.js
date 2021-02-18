import React from 'react'
import { ProjContainer, ProjTitle } from './style'
import data from '../../data/data'
import { ProjCard } from './ProjCard/ProjCard'


export const Projects = () => {
    const {projects} = data

    const cards = projects.map((item, index) => 
        <ProjCard
            key={index}
            project={item}
            direction={index % 2 === 0 ? 'imgLeft' : 'imgRight'}
        />
    )

    return (
        <ProjContainer id='projects' >
            <ProjTitle> Meus projetos </ProjTitle>
            {cards}
        </ProjContainer>
    )
}
