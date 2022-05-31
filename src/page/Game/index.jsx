import React, { useState } from 'react'
import AnswerInput from './components/AnswerInput'
import { ChatBox } from './components/ChatBox'
import "./game-styles.css"
import CentralBox from './components/CentralBox'
import Question from './components/Question'

function Game() {
  const [answered, setAnswered] = useState(false)

  function handleAnswer () {
  setAnswered(true)
  }

  return (
   <div className="grid-container">
     <div className="non-chatbox">
    <Question/>
    <CentralBox answered={answered}/>
    <AnswerInput onAnswering={handleAnswer}/>
    </div>
    <ChatBox/>
    </div>
)
}

export default Game