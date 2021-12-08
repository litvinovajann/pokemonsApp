// export const pokemonsData = fetch(new Request('http://skladgryazi.litvin6p.beget.tech'), 
// { 
//     method: 'GET',
//     mode: 'cors',
//     headers: {
//         'Content-Type': 'application/json',
//     }
// }).then((response) => {
//     return response.json();
//   }).then((data) => {
//     return data
//   });
export const pokemonsData = async function(){
    try {
        const queryString = 'http://skladgryazi.litvin6p.beget.tech/pokemons.json';
        const response = await fetch(queryString);
        const data = await response.json();
        const result = await data;
        return result;
    } 
    catch(error) {
        console.log('Eror occured in DataFetch' + error);
    }
}
