import React from "react"
import "./ConvBlock.css"

export default function ConvBlock(props){
    return (
        <div className="block">
            <p className="content">{props.user}: {props.content}</p>
        </div>
    )
}