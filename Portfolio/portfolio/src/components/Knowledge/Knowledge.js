import React from 'react'
import { KnowCard, KnowCardContainer, KnowCardText, KnowCardTitle, KnowContainer, KnowTitle } from './style'
import data from '../../data/data'


export const Knowledge = () => {
    const {knowledge} = data

    const cards = knowledge.map((item, index) => {
        return (
            <KnowCard key={index}>
                <KnowCardTitle> {item.title} </KnowCardTitle>
                <KnowCardText> {item.description} </KnowCardText>
            </KnowCard>
        )
    })

    return (
        <KnowContainer id='knowledge' >
            <KnowTitle> Meus conhecimentos </KnowTitle>
            <KnowCardContainer> {cards} </KnowCardContainer>
        </KnowContainer>
    )
}
