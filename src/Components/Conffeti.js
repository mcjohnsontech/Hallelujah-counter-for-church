import React, { } from 'react'
import { useParams } from 'react-router-dom'
import useWindowSize from 'react-use/lib/useWindowSize'
import Donfetti from 'react-confetti'

function Conffeti() {
  const { width, height } = useWindowSize()

  // useEffect(() => {
  // }, [])
  
  let {id} = useParams();
  return (
    
    <div className="App-header text">
      <Donfetti
      width={width}
      height={height}/>
      <p>Praise God!</p>
      <h1>We just completed {id} Hallelujah</h1>
    </div>
    
  )
}

export default Conffeti