//https://sinyakov.com/frontend/react/hw/pokemons.txt
// export default async function pokemonsData() { 
//     try {
//         const queryString ='https://sinyakov.com/frontend/react/hw/pokemons.txt';
//         const response = await fetch(queryString,{ credentials: 'same-origin',  mode : 'no-cors' });
//         const data = await response.json();
//         const result = await data;
//         return result
//     } 
//     catch(error) {
//         console.log('Eror occured in DataFetch' + error);
//         return error
//     }
// }
export const pokemonsData = [
    {
      name: "bulbasaur",
      id: "1"
    },
    {
      name: "ivysaur",
      id: "2"
    },
    {
      name: "venusaur",
      id: "3"
    },
    {
      name: "charmander",
      id: "4"
    },
    {
      name: "charmeleon",
      id: "5"
    },
    {
      name: "charizard",
      id: "6"
    },
    {
      name: "squirtle",
      id: "7"
    },
    {
      name: "wartortle",
      id: "8"
    },
    {
      name: "blastoise",
      id: "9"
    },
    {
      name: "caterpie",
      id: "10"
    },
    {
      name: "metapod",
      id: "11"
    },
    {
      name: "butterfree",
      id: "12"
    },
    {
      name: "weedle",
      id: "13"
    },
    {
      name: "kakuna",
      id: "14"
    },
    {
      name: "beedrill",
      id: "15"
    },
    {
      name: "pidgey",
      id: "16"
    },
    {
      name: "pidgeotto",
      id: "17"
    },
    {
      name: "pidgeot",
      id: "18"
    },
    {
      name: "rattata",
      id: "19"
    },
    {
      name: "raticate",
      id: "20"
    }
  ];
