import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap"
import './App.css';
import React, { useState } from 'react';
import Footer from "./Components/Footer/Footer";
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

  let display;
  if (locationVisible) {
    display = <Locations clickHandler={clickHandler} />
  } else {
    display = <Pokemon />
  }

  return (
    <div>
      <Header />
      { display }
      <Footer />
    </div>
  );
}

export default App;
