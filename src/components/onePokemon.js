export function Pokemon(name, id) {
    const imageUrl = (
        'https://img.pokemondb.net/artwork/' +
        name.name +
        '.jpg'
      );
    return ( <div
        className="onePokeCard"
        >
       <p>{name.name} </p>
       <img className="pokemonCardPic"
       src={imageUrl}></img>
      </div>
    );
}