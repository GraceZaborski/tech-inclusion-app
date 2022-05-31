import React from 'react'
import AnswerInput from './AnswerInput'
import ChatBox from './ChatBox'
import GameBoxQuestion from './GameBoxQuestion'
// import { ChatRoom } from './ChatRoom'
import GameBoxSearchBar from './GameBoxSearchBar'

function Game() {

  return (
    <>
    {/* <ChatRoom /> */}
    <GameBoxQuestion />
    <GameBoxSearchBar/>
    <ChatBox />
    <AnswerInput/>
</>
  )
}

export default Game