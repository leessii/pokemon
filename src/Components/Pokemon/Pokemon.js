import React, { useState, useEffect } from 'react';
import sadFace from "../../images/sadface.png";
import Loader from '../Loading/Loader';
import PokemonCard from '../PokemonCard/PokemonCard';

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
    const index = getRandomId(15);

    if (data.pokemon_encounters[index] !== undefined) {
        return data.pokemon_encounters[index].pokemon;
    } else {
        return undefined;
    }
};

const Pokemon = () => {

    // choose random pokemon url
    const [randPokemonUrl, setRandPokemonUrl] = useState({});
    // status
    const [status, setStatus] = useState("idle");
    // save pokemonDetails
    // const [pokemonDetails, setPokemonDetails] = useState(null);

    console.log(randPokemonUrl);
    // console.log(pokemonDetails);

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
    // useEffect(() => {
    //     debugger
    //     if (randPokemon) {
    //     fetch(randPokemon.url)
    //     .then((res) => res.json())
    //     .then((pokemonDetails) => {
    //         setPokemonDetails(pokemonDetails)
    //         console.log(pokemonDetails);
    //     })
    //     .catch(err => {
    //         console.log("no Pokemons");
    //     })
    // }
    // }, [] );


        // const getPokemonDetails = async() => {
        //     if (randPokemon === undefined ) {
        //         const res = await fetch(randPokemon.url);
        //         const pokemonDetails = await res.json();
        //         setPokemonDetails(pokemonDetails);
        //     }
        // } 
        // getPokemonDetails();
    // }, [randPokemon] );

        // const fetchLocations = async () => {
        //     const res = await fetch("https://pokeapi.co/api/v2/location");
        //     const locations = await res.json(); 
        //     setLocations(locations);
        //   }
        //   fetchLocations();
        // }, []);

    //     if (randPokemon) {
    //       fetch(randPokemon.url)
    //         .then((res) => res.json())
    //         .then((pokemonDetails) => {
    //           setPokemonDetails(pokemonDetails)
    //           console.log(pokemonDetails);
    //         })
    //         .catch(err => {
    //           console.log("no Pokemons");
    //         })
    //     }
    //   }, [] );
    
    // controll the display
    let dispaly;
    if(status === "error") {
        dispaly = <PokemonCard 
            title = "OPSSS...." 
            img = { sadFace } 
            details = "This location doesn't seem to have any pokémon!"
        />
    } else if (status === "success") {
        dispaly = <PokemonCard 
            // title = { randPokemon.name } 
            // img = { pokemonDetails.sprites.front_default } 
            // details = { "HP: " + pokemonDetails.stats[0].base_stat }
        />
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