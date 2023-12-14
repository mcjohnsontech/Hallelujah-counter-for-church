import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';

function Home(props) {
    const navigate = useNavigate();
        const [inputedNumber, setInputedNumber] = useState(0)
    const saveText = (e) =>{
        setInputedNumber(e.target.value);
        console.log(inputedNumber);
    }
    const moveNow = () => {
        inputedNumber <= 2 ? alert('You cannot input a number less than 3') : console.log();
        inputedNumber >=5000 ? alert('Input a number less than 5000') : console.log();
        inputedNumber >= 2 && inputedNumber <=5000 ? navigate(`/counter/${inputedNumber}`) : console.log();;
        
    }
  return (
    <div className="App-header">
        <h1 className="text-3xl font-bold underline">
      Hallelujah Counter
    </h1>
        <input 
        className='App-input form-control'
        value={inputedNumber}
        type='number'
        placeholder='Input a number'
        onChange={saveText}/>
        <button 
        onClick={moveNow}
        className='App-button'>Submit</button>
    </div>
  )
}

export default Home