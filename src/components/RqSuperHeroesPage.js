import React from "react";
import { useQuery } from "react-query";
import axios from "axios";
import useSuperHereosData from "../hooks/useSuperHereosData";

const RqSuperHeroesPage = () => {
  const onSuccess = (data) => {
    console.log("ylm", data);
  };

  const onError = (error) => {
    console.log("ylm2", error);
  };

  // const fetch = () => {
  //   return axios.get("http://localhost:5000/superheroes");
  // };

  // const { data, isLoading, error, isError, isFetching, refetch } = useQuery(
  //   "super-heroes",
  //   fetch,
  //   {
  //     // cacheTime: 5000,
  //     // staleTime: 30000,
  //     // enabled: false,
  //     onSuccess,
  //     onError,
  //     select: (data) => {
  //       const superHeroes = data.data.map((hero) => hero.name);
  //       return superHeroes;
  //     },
  //   }
  // );

  const { data, isLoading, error, isError, isFetching, refetch } =
    useSuperHereosData(onSuccess, onError);

  if (isLoading || isFetching) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h1>Super Heroes</h1>
      <button onClick={refetch}>Refetch</button>
      <ul>
        {/* {data?.data?.map((hero) => (
          <li key={hero.id}>
            <h2>{hero.name}</h2>
            <p>{hero.power}</p>
          </li>
        ))} */}
        {data?.map((heroName) => (
          <li key={heroName}>
            <h2>{heroName}</h2>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RqSuperHeroesPage;
