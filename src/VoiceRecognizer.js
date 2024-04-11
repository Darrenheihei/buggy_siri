import React, {useEffect} from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import './VoiceRecognizer.css'

// source: https://github.com/JamesBrill/react-speech-recognition/blob/master/README.md
export default function Dictaphone(props){
  const {
    transcript,
    listening,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();

  useEffect(() => {
    if (!listening && transcript !== ''){
        {/* add transcript to conversation history */}
        props.AddNewConv("您", transcript)
        {/* add random response to conversation history */}
        props.AddNewConv("Siri", getRandomResponse())
    }
  }, [listening])

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }


  return (
    <div className='Dictaphone'>
      <p className='transcript'>{transcript}</p>
      <button className='speakButton' onClick={SpeechRecognition.startListening}>{listening ? '聆聽中。。。' : '開始說話'}</button>


      {/* add new conversation block if listening = false */}
      {/* {!listening && !updated && (() => {
        console.log(updated)
        updated = Boolean(true)
        } */}

    </div>
  )
}

function getRandomResponse(){
    let responses = [
        "Random response 1", 
        "Random response 2", 
        "Random response 3", 
        "Random response 4", 
        "Random response 5", 
        "Random response 6", 
        "Random response 7", 
        "Random response 8", 
        "Random response 9",
        "Random response 10"
    ]
    return responses[Math.floor(Math.random() * responses.length)]
}

