import React from 'react'
import {TextField, Button} from '@mui/material';
import {useState} from 'react'
import {Link} from 'react-router-dom'

function GameBoxSearchBar() {
const [value, setValue] = useState("")
const [showResults, setShowResults] = useState(false)

function setResults() {
  sessionStorage.setItem("search", true)
  setShowResults(true)
}

function setLink(title) {
  sessionStorage.setItem("title", title)
}

  return (
    <>
      <div style={{ "display": "flex" , "alignItems": "center"}}>
<TextField fullWidth id="outlined-basic" variant="outlined" value={value} onChange={(e) => {
    setValue(e.target.value)}} />
<Button variant="contained" sx={{ml: "10px"}} onClick={() => setResults()}>Search</Button>
</ div>
{showResults || sessionStorage.getItem("search") &&
  <>
<a href="/searchResults" onClick={()=> setLink("Find out more about Vanuatu")}>Find out more about Vanuatu</a>
<a href="/searchResults" onClick={()=> setLink("Vanuatu- facts and figures")}>Vanuatu- facts and figures</a>
<a href="/searchResults" onClick={()=> setLink("Vanuatu- major cities")}>Vanuatu- major cities</a>
  </>}
  </>
  )
}

export default GameBoxSearchBar

// component={Link} to="/register"