import { Button } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'
// import emoji from './emoji.png'

function Congratulations() {
  const navigate = useNavigate()

  return (
    <div style={{padding: "30px"}}>
    <h2 class="congratulations">Congratulations, you have completed this round!</h2>
    {/* <img src={emoji} alt="emogi-image" /> */}
    <Button class="button" variant="contained" onClick={() => navigate("/")}>Log out</Button>
    <Button class="button" variant="contained" onClick={() => navigate("/")}>Play another game</Button>
    </div>
  )
}

export default Congratulations