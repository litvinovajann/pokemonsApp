import { Pokemon } from './components/onePokemon';
import {pokemonsData} from './data/PokemonsData.js';
export function App() {
    return ( <div className="pokemonsTable">
        {pokemonsData.map(onePieceOfPokemon => ( 
        <Pokemon 
        key={onePieceOfPokemon.id}
        name={onePieceOfPokemon.name}
        id = {onePieceOfPokemon.id}
        />))}
      </div>
    );
}
