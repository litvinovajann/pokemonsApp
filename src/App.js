import { Pokemon } from './components/onePokemon';
import {CaugthPokemons} from './components/caughtPokemons';
import { useState } from "react";

// https://pokeapi.co/api/v2/pokemon
const getPokemons = () => {
  return fetch('https://pokeapi.co/api/v2/pokemon').then((response) => {
      return response.json();
  }).then((data) => {
     console.log(data.results)
      return data.results.map((onePokemon) => {
        return {
          name: onePokemon.name,
          id: onePokemon.url.slice(34, -1)
        }
      }) 
  });
}

// getPokemons().then(pokemonList => {
//     console.log(">>", pokemonList); // [{name: "pikachu", id: "25"}, ...]
// })

// https://sinyakov.com/frontend/react/hw/profi.png
// https://beta.reactjs.org/


export function App() {
    const [caughtPokemonIds, setCaughtPokemonIds] = useState(["2", "5"]);
    const [pokemonsData, setPokemonsData] = useState([]);

    function handleClick() {
        getPokemons().then(pokemonList => {
            setPokemonsData(pokemonList);
        })
    }

    function handlePokemonToggle(id) {
        // поменять стейт
        // если id есть в массиве, то удалить его оттуда
        // если нет, то добавить
        // при этом нельзя мутировать массив, можно создать новый
        setCaughtPokemonIds(prevState => {
            if (!prevState.includes(id)) {
              return [...prevState, id];
            } else {
              return prevState.filter((pokemonId) => pokemonId !== id)
            }
        })
    }

    return (
        <div className="wrapper">
            <CaugthPokemons />
            <button onClick={handleClick}>fetch</button>
            <div className="pokemonsTable">
                {pokemonsData.map(onePieceOfPokemon => ( 
                    <Pokemon 
                        handlePokemonToggle={handlePokemonToggle}
                        isCaught={caughtPokemonIds.includes(onePieceOfPokemon.id)}
                        key={onePieceOfPokemon.id}
                        name={onePieceOfPokemon.name}
                        id={onePieceOfPokemon.id}
                    />)
                )}
            </div>
        </div>
    );
}
