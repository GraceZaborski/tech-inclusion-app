import React from 'react'
import {TextField, Button} from '@mui/material';
import {useState} from 'react'


function AnswerInput({setAnswer}) {
    const [value, setValue] = useState("")

  return (
    <div class="answer-input" style={{"background-color": "#d2eff7"}}>
    <TextField id="outlined-basic" variant="outlined" value={value} style={{"width": "600px", "background": "rgb(255,255,255)"}} inputProps={{style: {fontSize: 25}}} onChange={(e) => {
        setValue(e.target.value)}}/>
    <Button  class="button" variant="contained" onClick={() => setAnswer("Port Vila")}>Input your answer</Button>
    </ div>
  )
}

export default AnswerInput