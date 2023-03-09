import React, { useState, useEffect } from 'react';
import style from "./UsersOptions.module.css"

const UsersOptions = ( { url, clickHandler, index } ) => {

    // users pokemon
    const [usersPokemon, setUsersPokemon] = useState([])

    // fetch users pokemons
    useEffect(() => {
    const fetchUsersPokemon = async () => {
        const res = await fetch(url);
        const pokemon = await res.json(); 
        setUsersPokemon(pokemon);
    }
    fetchUsersPokemon();
    });

  return (
    <div className={style.content}>
        <button id={index} onClick={(e) => clickHandler(e)} className={`${style.button} my-1 px-5`}> {usersPokemon.name} </button>
    </div>
  )
}

export default UsersOptions