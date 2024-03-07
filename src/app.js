/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  /* document.querySelector("#button").addEventListener("click", () => {
    document.querySelector("#escusa").innerHTML = generadorEscusas();
  });
  console.log("hello");
};*/
  //write your code here

  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];

  for (let pronombre in pronoun) {
    for (let adjetivo in adj) {
      for (let nombre in noun) {
        console.log(pronoun[pronombre] + adj[adjetivo] + noun[nombre]);
      }
    }
  }
};
console.log("Hello Rigo from the console!");
