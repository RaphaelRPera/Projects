import React from 'react'
import { useSelector } from 'react-redux'
import { Container, Text } from './style'

export const MsgMe = (props) => {
    const{msg, id, index} = props
    const darkMode = useSelector(state => state.darkMode)

    return (
        <Container id={id} darkMode={darkMode} >
            <Text> {msg.msg} </Text>
        </Container>
    )
}
