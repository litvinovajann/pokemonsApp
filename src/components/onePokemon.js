export function Pokemon({ id, name, isCaught, handlePokemonToggle }) {
    // const [caught, setCaught] = useState(false);

    //  console.log(name, isCaught)

    const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

    function catchPokemon(e) {
      e.preventDefault();
      // console.log(">>>");
      handlePokemonToggle(id)
    }

    return (
      <div className="onePokeCard" style={{ background: isCaught ? "red" : "green" }}>
        <p>{name}</p>
        <img
          className="pokemonCardPic"
          src={imageUrl}
        />  
        <button
          onClick={catchPokemon}
        >
          {isCaught ? "release" : "catch"}
        </button>
      </div>
    );
}