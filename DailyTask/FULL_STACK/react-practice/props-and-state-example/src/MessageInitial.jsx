import React, { useState } from 'react'

const MessageInitial = (props) => {
    const [message, setMessage] = useState(props.text);
  return (
    <div>
        <h3>{message}</h3>
        <button onClick={() => setMessage("I am Facing Integration Problem My Server Side")}>
            Update Message
        </button>
    </div>
  )
}

export default MessageInitial