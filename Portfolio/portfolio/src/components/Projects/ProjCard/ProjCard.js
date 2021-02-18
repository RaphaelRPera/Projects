import React from 'react'
import { Img, CardContainer, GitButton, ImgContainer, Subtitle, CardText, Title, TitleContainer} from './style'


export const ProjCard = (props) => {
    const {direction, project} = props
    const {title, subtitle, description, image, gitUrl, url} = project

    return (
        <CardContainer direction={direction} >
            <ImgContainer href={url} target='_blank' direction={direction} >
                <Img src={image}/>
            </ImgContainer>

            <TitleContainer>
                <Title href={url} target='_blank' > {title} </Title>
                <Subtitle direction={direction} > {subtitle} </Subtitle>
            </TitleContainer>

            <CardText direction={direction} > {description} </CardText>

            <GitButton href={gitUrl} target='_blank' direction={direction} >
                ver no GitHub
            </GitButton>
        </CardContainer>
    )
}