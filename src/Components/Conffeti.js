import React from 'react'
import { useParams } from 'react-router-dom'

function Conffeti() {
  let {id} = useParams();
  return (
    <div className="App-header">
      <p>We just completed</p>
      <h1>{id} Hallelujah</h1>
    </div>
    
  )
}

export default Conffeti