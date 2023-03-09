import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap"
import './App.css';
import React, { useState } from 'react';
import Header from './Components/Header/Header';
import Locations from "./Components/Locations/Locations";
import Pokemon from "./Components/Pokemon/Pokemon";

function App() {

  // toggle Locations/Pokemon
  const [locationVisible, setLocationVisible] = useState(true);

  // click handler
  const clickHandler = () => {
    setLocationVisible(false);
  };

  // click back handler
  const clickBackHandler = (e) => {
    setLocationVisible(true); 
  } 

  let display;
  if (locationVisible) {
    display = <Locations clickHandler={clickHandler} />
  } else {
    display = <Pokemon clickBackHandler={clickBackHandler} />
  }

  return (
    <div>
      <Header />
      { display }
    </div>
  );
}

export default App;
