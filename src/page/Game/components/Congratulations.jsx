import { Button } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

function Congratulations() {
  const navigate = useNavigate()

  return (
    <div>
    <h2>Congratulations, you have completed this round!</h2>
    <Button class="button" variant="contained" onClick={() => navigate("/")}>Log out</Button>
    <Button class="button" variant="contained" onClick={() => navigate("/")}>Play another game</Button>
    </div>
  )
}

export default Congratulations