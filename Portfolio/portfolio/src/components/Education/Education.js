import React from 'react'
import { EduCard, EduCardContainer, EduCardSubtitle, EduCardText, EduCardTitle, EduContainer, EduTitle, List } from './style'
import data from '../../data/data'


export const Education = () => {
    const {education} = data

    const cards = education.map((item, index) => {
        const description = item.description
        const text = typeof(description) === 'object' ?
            <List> {description.map((desc,index) => <li key={index} >{`. ${desc}`}</li> )} </List>
            :
            description

        return (
            <EduCard key={index} >
                <EduCardTitle> {item.title} </EduCardTitle>
                <EduCardSubtitle> {item.subtitle} </EduCardSubtitle>
                <EduCardText> {text} </EduCardText>
            </EduCard>
        )
    })


    return (
        <EduContainer id='education' >
            {/* <EduTitle> Educação </EduTitle> */}
            <EduTitle> Formação </EduTitle>
            <EduCardContainer> {cards} </EduCardContainer>
        </EduContainer>
    )
}
