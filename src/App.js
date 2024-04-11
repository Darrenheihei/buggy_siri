import React, {useState} from "react"
import Dictaphone from "./VoiceRecognizer"
import ConvBlock from "./ConvBlock"

export default function App(){
    const [conversations, setConversations] = useState([])

    const convBlocks = conversations.map(data => {
        return <ConvBlock user={data.user} content={data.content} />
    })

    function AddNewConv(_user, _conv){ // conv means conversation
        setConversations(prevConv => [...prevConv, {user: _user, content: _conv}])
    }
    
    return (
        <div>
            {/* conversation history */}
            <div className="convContainer">
                {convBlocks}
            </div>
            <Dictaphone AddNewConv={AddNewConv}/>
        </div>
    )
}