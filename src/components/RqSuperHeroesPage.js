import React from "react";
import { useQuery } from "react-query";
import axios from "axios";

const RqSuperHeroesPage = () => {
  const { data, isLoading, error, isError } = useQuery(
    "super-heroes",
    async () => {
      const { data } = await axios.get("http://localhost:5000/superheroes");
      console.log(data);
      return data;
    }
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
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

export default RqSuperHeroesPage;
