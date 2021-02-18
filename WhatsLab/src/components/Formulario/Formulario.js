import React, { useState } from 'react';
import { FormContainer, FormMsg, SendButton, SendImg } from './style'
import sendIcon2 from '../../img/icons8-paper-plane-100_white.png'
import { useDispatch, useSelector } from 'react-redux';
import { setMsgValue } from '../../store/Message/Message.actions'
import { removeAcento } from '../RemoveAcento/RemoveAcento';
import fixedResponses from './fixedResponses'



export const Formulario = () => {
    const [msg, setMsg] = useState('')
    const messages = useSelector(state => state.messages)
    const darkMode= useSelector(state => state.darkMode)
    const dispatch = useDispatch()

    const handleInput = (event) => {setMsg(event.target.value)}

    const handleKeyDown = (event) => {event.key === 'Enter' && handleSubmit()}

    const handleSubmit = () => {
        const msgText = msg.length ? msg : `Olá Raphael`
        const newMsg = {user: 'me', msg: msgText}

        if (removeAcento(msgText.toLowerCase()) === 'Ola Raphael'.toLowerCase()) {
            dispatch(setMsgValue([...messages, newMsg]))
            
            let responses = []
            let counter = 0
            const flux = setInterval(() => {
                responses.push(fixedResponses[counter])
                dispatch(setMsgValue([...messages, newMsg, ...responses]))
                counter++
                if (counter > fixedResponses.length - 1) {clearInterval(flux)}
            }, 2000)

        } else if (removeAcento(msgText.toLowerCase()).indexOf('parabens'.toLowerCase()) >= 0) {
            const response = {user: 'Raphael', msg: 'Obrigado!'}
            dispatch(setMsgValue([...messages, newMsg]))
            setTimeout(() => dispatch(setMsgValue([...messages, newMsg, response])), 1500)

        } else {
            const response = {user: 'Raphael', msg: 'Que bom! :)'}
            dispatch(setMsgValue([...messages, newMsg]))
            setTimeout(() => dispatch(setMsgValue([...messages, newMsg, response])), 1500)
        }

        setMsg('')
    }

    return (
        <FormContainer>
            <FormMsg
                darkMode={darkMode}
                // placeholder={'Mensagem'}
                placeholder={"Diga 'Olá Raphael'"}
                value={msg}
                onChange={handleInput}
                onKeyDown={handleKeyDown}
            />

            <SendButton onClick={handleSubmit} darkMode={darkMode}>
                <SendImg src={sendIcon2} />
            </SendButton>
        </FormContainer>
    )
}

