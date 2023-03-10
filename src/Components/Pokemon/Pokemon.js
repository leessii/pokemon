import React, { useState, useEffect } from 'react';
import sadFace from "../../images/sadface.png";
import Loader from '../Loading/Loader';
import PokemonCard from '../PokemonCard/PokemonCard';
import UsersOptions from '../UsersOptions/UsersOptions';
import style from "./Pokemon.module.css"
import pokeBall from "../../images/pokeball.png"
import attack from "../../images/baam.png"

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
    const index = getRandomId(10);

    if (data.pokemon_encounters[index] !== undefined) {
        return data.pokemon_encounters[index].pokemon;
    } else {
        return undefined;
    }
};

const Pokemon = ( { clickBackHandler, clickBackToLocationsHandler, usersPokemon, setUsersPokemon } ) => {

    // choose random pokemon url
    const [randPokemonUrl, setRandPokemonUrl] = useState({});
    // status
    const [status, setStatus] = useState("idle");
    // save pokemonDetails
    const [pokemonDetails, setPokemonDetails] = useState(null);
    // users pokemons 
    const [usersOptionsVisible, setUsersOptionsVisible] = useState(true);
    // choosen pokemon Url
    const [usersCurrPokemonUrl, setUsersCurrPokemonUrl] = useState("");
    // choosen pokemon
    const [usersCurrPokemon, setUsersCurrPokemon] = useState({});
    // attack state
    const [atackState, setAtackState] = useState(false);

    console.log(usersPokemon);

    // click handler - choose pokemon
    const clickHandler = (e) => {
        setUsersOptionsVisible(false);
        setUsersCurrPokemonUrl(usersPokemon[e.target.id]);
        setStatus("loading");
    }

    // fetch random pokemon
    useEffect(() => {
        const loadPokemonFromArea = async() => {
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

    //fetch users Curr pokemons
    useEffect(() => {
        setStatus("loading");
        const fetchUsersPokemon = async () => {
            const res = await fetch(usersCurrPokemonUrl);
            const pokemon = await res.json(); 
            setUsersCurrPokemon(pokemon);
            setStatus("success");
        }
        fetchUsersPokemon();
    }, [usersOptionsVisible]);

    // set Timeout for Attack
    useEffect(() => {
        if (status === "success" && !usersOptionsVisible) {
            const timer = setTimeout(() => {
                setAtackState(true);
                setUsersPokemon([...usersPokemon,`https://pokeapi.co/api/v2/pokemon/${pokemonDetails.name}`]);
            }, 2000); 
            return () => clearTimeout(timer);
        }
      }, [usersCurrPokemon]);

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
    }, [randPokemonUrl] );

    // controll the display
    let dispaly;
    if(status === "error") {
        dispaly = <>
            <PokemonCard 
                title = "OPSSS...." 
                img = { sadFace } 
                details = "No pokémon here!"
            />
            <div className={style.button}>
                <button className={`${style.butonStyle} mb-5`} onClick={(e) => clickBackHandler(e)}>Go Back</button>
            </div>
        </>
    } else if (status === "success" && usersOptionsVisible) {
        dispaly = pokemonDetails && 
        <div className={style.content}> 
            <PokemonCard 
                title = { pokemonDetails.name } 
                img = { pokemonDetails.sprites.front_default } 
                details = { "HP: " + pokemonDetails.stats[0].base_stat }
            />
            <div className={style.contentBadge}>
                    <img src={pokeBall} alt="pokeBall" style={{width: "150px", margin: "30px"}}></img>
                    <h2 className={style.title}>Choose Pokemon:</h2>
                    { usersPokemon && usersPokemon.map((url, index) =>
                        <UsersOptions 
                        url = { url }
                        key = { index }
                        index = { index }
                        clickHandler = { clickHandler }
                        />
                    )}
            </div>
        </div>
    } else if (status === "success" && !usersOptionsVisible && atackState === false) {
        dispaly = 
        <div className={style.content}> 
            <PokemonCard 
                title = { pokemonDetails.name } 
                img = { pokemonDetails.sprites.front_default } 
                details = { "HP: " + pokemonDetails.stats[0].base_stat }
            />
            <PokemonCard 
                title = { usersCurrPokemon.name } 
                img = { usersCurrPokemon.sprites.front_default } 
                details = { "HP: " + usersCurrPokemon.stats[0].base_stat }
            />
        </div>;
    } else if (atackState === true) {
        dispaly = 
        <div className={`${style.attack} my-2`}>
            <img src={attack} alt="attack" className="mt-1"/>
            <h4><span className={`${style.text} text-danger`}>{ usersCurrPokemon.name }</span> won the battle!</h4>
            <div className={style.button}>
                <button className={`${style.butonStyle} my-5`} onClick={(e) => clickBackToLocationsHandler(e)}>Back to Locations</button>
            </div>
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






 








