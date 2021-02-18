import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { MsgMe } from '../Message/MsgMe/MsgMe'
import { MsgOther } from '../Message/MsgOther/MsgOther'
import { PageContainer } from './style'


export const MsgContainer = () => {
    const messages = useSelector(state => state.messages)

    // const msgRender = messages.length &&
    //     messages.map((msg, index) => 
    //         msg.user === 'me' ?
    //             <MsgMe key={index} id={`msg${index + 1}`} msg={msg.msg}/>
    //             :
    //             <MsgOther key={index} id={`msg${index + 1}`} msg={msg.msg}/>
    //         // index % 2 === 0 ?
    //         //     <MsgMe key={index} id={`msg${index + 1}`} msg={msg}/>
    //         //     :
    //         //     <MsgOther key={index} id={`msg${index + 1}`} msg={msg}/>
    //     )

    // const msgRender = messages.length &&
    //     messages.map((msg, index) => 
    //         msg.user === 'me' ?
    //             <MsgMe key={index} id={`msg${index + 1}`} msg={msg} index={index} />
    //             :
    //             <MsgOther key={index} id={`msg${index + 1}`} msg={msg} index={index} />
    //     )

    const msgRender = messages.length &&
        messages.map((msg, index) => {
            // console.log(msg)
            return msg.user === 'me' ?
                <MsgMe key={index} id={`msg${index + 1}`} msg={msg} index={index} />
                :
                <MsgOther key={index} id={`msg${index + 1}`} msg={msg} index={index} />
        })

    const scrollToBottom = () => {
        const lastMsg = document.getElementById(`msg${messages.length}`)
        lastMsg.scrollIntoView({behavior: 'smooth'})
    }

    useEffect(() => { msgRender.length && scrollToBottom() })

    return (
        <PageContainer>
            {msgRender || ''}
        </PageContainer>
    )
}