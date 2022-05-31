import { Button } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import emoji from '../../../images/emoji.png'

function Congratulations() {
  const navigate = useNavigate()

  return (
    <div style={{padding: "30px"}}>
    <h2 class="congratulations">Congratulations, you have completed this round!</h2>
    <div style={{display:"flex"}}>
    <div style={{justifyContent: "center"}}>
    <img src={emoji}/>
    <br/>
    <Button class="button" variant="contained" onClick={() => navigate("/")}>Log out</Button>
    <Button class="button" variant="contained" onClick={() => navigate("/")}>Play another game</Button>
    </div>
    </div>
    </div>
  )
}

export default Congratulations