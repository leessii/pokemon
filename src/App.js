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
  // users Pokemons 
  const [usersPokemon, setUsersPokemon] = useState([
    "https://pokeapi.co/api/v2/pokemon/bulbasaur",
    "https://pokeapi.co/api/v2/pokemon/charizard",
    "https://pokeapi.co/api/v2/pokemon/poliwhirl"
  ]);

  // click handler
  const clickHandler = () => {
    setLocationVisible(false);
  };

  // click back handler
  const clickBackHandler = () => {
    setLocationVisible(true); 
  } 

  // go backt to start 
  const clickBackToLocationsHandler = () => {
    setLocationVisible(true);
  };

  // controll display
  let display;
  if (locationVisible) {
    display = 
    <Locations 
      clickHandler={clickHandler} />
  } else {
    display = 
    <Pokemon 
      clickBackHandler={clickBackHandler} 
      clickBackToLocationsHandler={clickBackToLocationsHandler}
      usersPokemon={usersPokemon}
      setUsersPokemon={setUsersPokemon} />
  }

  return (
    <div>
      <Header />
      { display }
    </div>
  );
}

export default App;
