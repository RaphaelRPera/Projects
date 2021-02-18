import React from 'react'
import { LeftPanelContainer, TitleContainer, Title, Subtitle, Description, TagContainer, Tag, TagDetail, CVButton } from './style'
import data from '../../data/data'


export const TopLeftPanel = () => {
    const {myName, pageTitle, pageSubtitle, myDescription, tags} = data

    const newTags = tags.map((tag, index) =>
        <Tag key={index} > <TagDetail>|</TagDetail> {tag} </Tag>
    )

    return (
        <LeftPanelContainer>
            <TitleContainer>
                <Title> {pageTitle} <br/> {myName} </Title>
                <Subtitle> {pageSubtitle} </Subtitle>
            </TitleContainer>

            <Description> {myDescription} </Description>

            <TagContainer> {newTags} </TagContainer>

            <CVButton> CV em PDF </CVButton>
        </LeftPanelContainer>
    )
}
