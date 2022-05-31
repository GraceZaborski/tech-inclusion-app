import React, { useState } from 'react'
import Congratulations from './Congratulations'
import SearchContainer from './SearchContainer'
import SearchResults from './SearchResults'

function CentralBox({answered}) {
const [linkPressed, setLinkPressed] = useState(false)
const [title, setTitle] = useState("")


const handleLinkPressed = (result, title) => {
setLinkPressed(result)
setTitle(title)
}

console.log(linkPressed)

  return (
<div class="central-box">
  {answered ? 
    <Congratulations />
   : 
    !linkPressed ? <SearchContainer onLinkPressed={handleLinkPressed}/> : <SearchResults onLinkPressed={handleLinkPressed} title={title}/>}
    </div>
  )
}

export default CentralBox