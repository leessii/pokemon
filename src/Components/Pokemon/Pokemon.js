import React, { useState, useEffect } from 'react';
import sadFace from "../../images/sadface.png";
import Loader from '../Loading/Loader';
import PokemonCard from '../PokemonCard/PokemonCard';
import UsersOptions from '../UsersOptions/UsersOptions';
import style from "./Pokemon.module.css"

// genetare random number for location
function getRandomLocation(max) {
    return Math.floor(Math.random() * max);
};
  
// genetare random number for pokemon
function getRandomId(max) {
    return Math.floor(Math.random() * max);
};
  
// fetch from Area
const fetchPokemonFromArea = async () => {
    const res = await fetch(`https://pokeapi.co/api/v2/location-area/${getRandomLocation(800)}/`);
    const data = await res.json();
    const index = getRandomId(13);

    if (data.pokemon_encounters[index] !== undefined) {
        return data.pokemon_encounters[index].pokemon;
    } else {
        return undefined;
    }
};

const Pokemon = ( { clickBackHandler } ) => {

    // users Pokemons
    const usersPokemon = [
        "https://pokeapi.co/api/v2/pokemon/bulbasaur",
        "https://pokeapi.co/api/v2/pokemon/charizard",
        "https://pokeapi.co/api/v2/pokemon/poliwhirl"
    ]

    // choose random pokemon url
    const [randPokemonUrl, setRandPokemonUrl] = useState({});
    // status
    const [status, setStatus] = useState("idle");
    // save pokemonDetails
    const [pokemonDetails, setPokemonDetails] = useState(null);
    // users pokemons 
    const [usersOptionsVisible, setUsersOptionsVisible] = useState(true);

    // fetch random pokemon
    useEffect(() => {
        const loadPokemonFromArea = async() => {
            setStatus("loading");
            const pokemon = await fetchPokemonFromArea().catch(err => console.log(err));
            if (pokemon !== undefined) {
                setRandPokemonUrl(pokemon.url);
                setStatus("success");
            } else {
                setRandPokemonUrl(undefined);
                setStatus("error");
            }
        } 
        loadPokemonFromArea();
    }, [] );

    // fetch random pokemon Details
    useEffect(() => {
        if (randPokemonUrl !== undefined) {
            const fetchPokemonDetails = async() => {
                const res = await fetch(`${randPokemonUrl}`).catch(() => {console.log("no Pokemons")});
                const data = await res.json()
                setPokemonDetails(data)
            }
            fetchPokemonDetails();
        } else {
            console.log("no Pokemons");
        }
        
        //   fetch(`${randPokemonUrl}`)
        //     .then((res) => res.json())
        //     .then((pokemonDetails) => {
        //       setPokemonDetails(pokemonDetails)
        //     })
        //     .catch(err => {
        //         console.log("no Pokemons");
        //     })
        // } else {
        //     console.log("no Pokemons");
        // }
    }, [randPokemonUrl] );
    
    // controll the display
    let dispaly;
    if(status === "error") {
        dispaly = <>
            <PokemonCard 
                title = "OPSSS...." 
                img = { sadFace } 
                details = "This location doesn't seem to have any pokémon!"
            />
            <div className={style.button}>
                <button className={`${style.butonStyle} mb-5`} onClick={(e) => clickBackHandler(e)}>Go Back</button>
            </div>
        </>
    } else if (status === "success") {
        dispaly = pokemonDetails && 
        <div className={style.content}> 
            <PokemonCard 
                title = { pokemonDetails.name } 
                img = { pokemonDetails.sprites.front_default } 
                details = { "HP: " + pokemonDetails.stats[0].base_stat }
            />
            { usersOptionsVisible ? (
                <div className="content">
                    <h2 className={style.title}>Choose Pokemon:</h2>
                    { usersPokemon && usersPokemon.map((url, index) =>
                        <UsersOptions 
                           url = { url }
                           key = { index }
                        />
                    )}
                </div>
            ) : (
                <PokemonCard 
                />
            )} 
        </div>
    } else if (status === "loading") {
        dispaly = <Loader />
    }

    return (
        <div>
            { dispaly }
        </div>
    )
    }

export default Pokemon