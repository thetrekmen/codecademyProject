import { animals } from "./animals";
import React from "react";
import ReactDOM from "react-dom";

let title;
let background = <img class="background" alt="ocean" src="/images/ocean.png" />;
let images = [];
for (let animal in animals) {
  images.push(
    <img
      key={animal}
      className="animal"
      alt={animal}
      src={animals[animal].image}
      ariaLabel={animal}
      role="button"
    />
  );
}

function displayFact(e) {
  let index = Math.floor(Math.random() * 3);
  e.facts[index];
}

let animalFacts = (
  <div>
    <h1>{!title ? "Click an animal for a fun fact" : title}</h1>
    {background}
    <div className="animals">{images}</div>
  </div>
);

ReactDOM.render(animalFacts, document.getElementById("root"));

