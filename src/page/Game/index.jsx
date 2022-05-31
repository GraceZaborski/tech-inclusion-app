import React, { useState } from 'react'
import AnswerInput from './components/AnswerInput'
import { ChatBox } from './components/ChatBox'
import "./game-styles.css"
import CentralBox from './components/CentralBox'
import Question from './components/Question'

const Game = () => {
  const [answered, setAnswered] = useState(false)

  const handleAnswer = (answer) => {
if (answer === "Port Vila") {
  setAnswered(true)
}
  }

  return (
   <div class="grid-container">
    <Question/>
    <ChatBox/>
    <CentralBox answered={answered}/>
    <AnswerInput onAnswering={handleAnswer}/>
    </div>
)
}

export default Game