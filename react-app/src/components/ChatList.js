import React from 'react'
import ChatItem from './ChatItem'

export default function ChatList(props) {
    const nodeChat = props.chats.map(item =>
        <ChatItem key={item.id} id={item.id} author={item.author} message={item.message} sent={item.sent} edit={item.edit}
            resend={props.resend} 
            remove={props.remove} 
            truekanEdit={props.handleEdit} 
            cancelEdit={props.cancelEdit}
            isUpdate={props.update}
            postUpdate={props.postUpdate}
            />)

    return (
            <div className="panel-body">
                <ul className="chat">
                    {nodeChat}
                </ul>
            </div>
    )
}