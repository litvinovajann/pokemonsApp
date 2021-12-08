export function Pokemon(pokemonObj) {
    const imageUrl = (
        'https://img.pokemondb.net/artwork/' +
        pokemonObj.name +
        '.jpg'
      );
    function catchPokemon(e) {
      e.preventDefault();
      console.log(e.target.id)
    }
    return ( <div
        className="onePokeCard"
        >
       <p>{pokemonObj.name}</p>
       <img className="pokemonCardPic"
       src={imageUrl}></img>
       <button id={pokemonObj.id} onClick={catchPokemon}>  {1 < 0 ? "release" : "catch"} </button>
      </div>
    );
}