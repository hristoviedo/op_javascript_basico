//instalar axios para llamar servicios externos

import axios from "axios";
import voca from "voca"
// Make a request for a user with a given ID
axios
  .get("https://pokeapi.co/api/v2/pokemon/pikachu")
  .then(function (response) {
    // handle success
    console.log(voca.upperCase("Success"));
    console.log(response.data);
  })
  .catch(function (error) {
    // handle error
    console.log("Error");
    console.log(error);
  });
