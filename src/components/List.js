import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const List = () => {
  const [pokes, setPokes] = useState([]);
  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/")
      .then((response) => response.json())
      .then((response) => {
        setPokes(response.results);
      });
  }, []);

  if (!pokes) return null;

  return (
    <ul>
      {pokes.map(({ name }) => (
        <Link key={name} to={`/pokemons/${name}`}>
          <li className="item">
            {name}
            <span>NOVO</span>
          </li>
        </Link>
      ))}
    </ul>
  );
};
export default List;
