//https://sinyakov.com/frontend/react/hw/pokemons.txt
// export const pokemonsData = fetch(new Request('http://skladgryazi.litvin6p.beget.tech/pokemons.json'), 
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
// export const pokemonsData = async function(){
//     try {
//         const queryString = 'http://skladgryazi.litvin6p.beget.tech/pokemons.json';
//         const response = await fetch(queryString);
//         const data = await response.json();
//         return data
//     } 
//     catch(error) {
//         console.log('Eror occured in DataFetch' + error);
//     }
// }
export const pokemonsData = [{"id":"1","name":"bulbasaur"},{"id":"2","name":"ivysaur"},{"id":"3","name":"venusaur"},{"id":"4","name":"charmander"},{"id":"5","name":"charmeleon"},{"id":"6","name":"charizard"},{"id":"7","name":"squirtle"},{"id":"8","name":"wartortle"},{"id":"9","name":"blastoise"},{"id":"10","name":"caterpie"},{"id":"11","name":"metapod"},{"id":"12","name":"butterfree"},{"id":"13","name":"weedle"},{"id":"14","name":"kakuna"},{"id":"15","name":"beedrill"},{"id":"16","name":"pidgey"},{"id":"17","name":"pidgeotto"},{"id":"18","name":"pidgeot"},{"id":"19","name":"rattata"},{"id":"20","name":"raticate"}];
