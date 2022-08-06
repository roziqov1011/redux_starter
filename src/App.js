import { useState } from 'react';
import './App.css';
import About from './pages/About/About';
import Home from './pages/Home/Home';

function App() {
  const [render, setRender] = useState(false)
  return (
    <div className="App">
     <Home render={render} setRender={setRender}/>
     <About render={render} setRender={setRender}/>
    </div>
  );
}

export default App;
