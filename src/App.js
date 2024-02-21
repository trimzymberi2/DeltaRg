import { FALSE } from 'sass';
import './App.css';
import Footer from './Components/Footer';
import Body from './Components/Home/Body';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar';
import { useState, useEffect } from 'react';
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import logo from './images/delta-rg.png'


function App() {
  const [loading, setLoading] = useState(false)
  useEffect(()=> {
      setLoading(true)
      setTimeout(() =>{
          setLoading(false)

      },2000)

  },[])
  let [color, setColor] = useState("#eab308");
  return (
    <div className="App">
      {
        loading?
        <div className='reload flex'>
        <ClimbingBoxLoader
        color={color} loading={loading} size={30} aria-label="Loading Spinner" data-testid="loader" />
          <h1 className='reload-tittle Tittle flex'><img src={logo}></img><span>Delta</span>RG</h1>
        </div>
        :
        <div>
          <nav> 
            <Navbar/>
          </nav>
          <body>
            <Body/>
          </body>
          <footer>
            <Footer/>
          </footer>
        </div>
      }
    </div>
  );
}

export default App;
