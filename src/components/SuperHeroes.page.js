import React, { useState, useEffect } from "react";
import axios from "axios";

const SuperHeroes = () => {
  const [isloading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/superheroes")
      .then((response) => {
        setData(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  if (isloading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Super Heroes</h1>
      <ul>
        {data.map((hero) => (
          <li key={hero.id}>
            <h2>{hero.name}</h2>
            <p>{hero.power}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SuperHeroes;
