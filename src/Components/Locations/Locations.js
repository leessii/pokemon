import React, { useEffect, useState } from 'react';
import style from "./Locations.module.css"

export default function Locations( { clickHandler } ) {

  // list locations
  const [locations, setLocations] = useState([]);
  // destructure
  let { results } = locations;

  // fetch locations
  useEffect(() => {
    const fetchLocations = async () => {
      const res = await fetch("https://pokeapi.co/api/v2/location");
      const locations = await res.json(); 
      setLocations(locations);
    }
    fetchLocations();
  }, []);

  return (
    <div className={`${style.content} my-5`}>
      <div className={style.locations}>
          { results && results.map((result, index) =>
            <button onClick={(e) => clickHandler(e)} className={style.button} key={index} id={index}>
                { result.name }
            </button>
          )}
      </div>
    </div>
  )
}