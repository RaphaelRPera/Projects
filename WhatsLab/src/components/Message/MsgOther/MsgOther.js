import React from 'react'
import { useSelector } from 'react-redux'
import { Container, Link, Text, User } from './style'

export const MsgOther = (props) => {
    const darkMode = useSelector(state => state.darkMode)
    const{msg, id, index} = props
    const user = msg.user
    const url = msg.url

    const messages = useSelector(state => state.messages)
    const prevMsg = messages[index - 1]
    const prevUser = prevMsg.user
    return (
        <Container id={id}  url={url} prevEqual={prevUser === user} darkMode={darkMode} >
            {prevUser !== user && <User> Raphael Ribeiro </User>}
            <Text> {msg.msg} </Text>
            {msg.url && <Link href={url} target='_blank' darkMode={darkMode}> {url} </Link>}
        </Container>
    )
}
