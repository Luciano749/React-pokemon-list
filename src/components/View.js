import { useState, useEffect } from "react";

import "./View.css";

const View = (props) => {
  const [poke, setPoke] = useState(null);
  let name = window.location.href.split("/").pop();

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then((response) => response.json())
      .then((response) => {
        setPoke(response);
      });
  }, [name]);

  if (!poke) return null;

  return (
    <div id="container">
      <h1>{poke.name}</h1>
      <img src={poke.sprites.front_default} alt={poke.name} />

      <ul>
        {poke.abilities.map((item, idx) => (
          <li key={idx}>{item.ability.name}</li>
        ))}
      </ul>
      <button onClick={() => props.history.goBack()}>&#8592;</button>
    </div>
  );
};

export default View;
