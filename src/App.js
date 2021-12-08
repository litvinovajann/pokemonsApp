import { Pokemon } from './components/onePokemon';
import {pokemonsData} from './components/PokemonsData.js';
import {CaugthPokemons} from './components/caughtPokemons';
export function App() {
    return ( <div className="wrapper">
        <CaugthPokemons />
        <div className="pokemonsTable">
        {pokemonsData.getPokemons().map(onePieceOfPokemon => ( 
        <Pokemon 
        key={onePieceOfPokemon.id}
        name={onePieceOfPokemon.name}
        id = {onePieceOfPokemon.id}
        />))}
        </div>
      </div>
    );
}
