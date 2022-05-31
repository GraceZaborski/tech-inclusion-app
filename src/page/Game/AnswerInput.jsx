import React from 'react'
import {TextField, Button} from '@mui/material';
import {useState} from 'react'

function AnswerInput() {
    const [value, setValue] = useState("")
    console.log(value)

  return (
    <div style={{ "display": "flex" , "alignItems": "center", "position": "absolute", "bottom": 0, padding: "20px"}}>
    <TextField fullWidth id="outlined-basic" variant="outlined" value={value} onChange={(e) => {
        setValue(e.target.value)}} />
    <Button variant="contained" sx={{ml: "10px"}}>Input your answer</Button>
    </ div>
  )
}

export default AnswerInput