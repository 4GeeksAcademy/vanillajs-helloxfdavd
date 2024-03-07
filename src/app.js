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

  let pronoun = ["el", "la", "vuestro", "le", "lo", "su"];
  let adj = [
    "maravilos@",
    "gran",
    "magnific@",
    "enorme",
    "esperad@",
    "desead@"
  ];
  let noun = [
    "juerga",
    "boda",
    "dominatrix",
    "factorydevelopers",
    "semillerohackers",
    "loshijosdeVeroyNoé"
  ];
  let extension = [".es", ".com", ".org", ".so", ".eu", ".uk"];
  for (let pronombre in pronoun) {
    for (let adjetivo in adj) {
      for (let nombre in noun) {
        for (let extenxion in extension) {
          console.log(
            pronoun[pronombre] +
              adj[adjetivo] +
              noun[nombre] +
              extension[extenxion]
          );
        }
      }
    }
  }
};
console.log("Hello Rigo from the console!");
