import './App.css';
import {BrowserRouter as Router, Route, Routes, useParams} from 'react-router-dom';
import Home from './Components/Home';
import Conffeti from './Components/Conffeti';
import Counter from './Components/Counter';


const App = () => {
  let {id} = useParams();
  return (
    <Router>
      <Routes>
        <Route path='/' exact element={<Home/>} />
        <Route path='/conffeti/:id' exact element={<Conffeti/>}  />
        <Route path='/counter/:id' element={<Counter/>} />
      </Routes>
    </Router>
    
  );
}

export default App;
