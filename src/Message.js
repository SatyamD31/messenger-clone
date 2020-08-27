import React, { forwardRef } from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';
import './Message.css';

// react flip move
const Message = forwardRef(({username, message}, ref) => {
    const isUser = username === message.username;

    return (
        <div ref={ref} className={`message ${isUser && 'message__user'}`}>       {/* only the logged in user will get the class message__user */}
            <Card className={isUser ? "message__userCard": "message__guestCard"}>       {/* guest user will get the class message__guestCard */}
                <CardContent>
                    <Typography color="white" variant="h5" component="h2">
                        {!isUser && `${message.username || 'Unknown User'}: `} {message.message}
                    </Typography>
                </CardContent>
            </Card>
            {/* styling text property */}        
        </div>
    )
})

export default Message