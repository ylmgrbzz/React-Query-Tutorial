import React from "react";
import useSuperHeroData from "../hooks/useSuperHeroData";
import { useParams } from "react-router-dom";

const RqSuperHero = () => {
  const { heroId } = useParams();
  console.log(heroId);

  const { data, isLoading, error, isError, isFetching, refetch } =
    useSuperHeroData(heroId);

  if (isLoading || isFetching) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h1>Super Hero</h1>
      <h2>{data.data.name}</h2>
      <p>{data.data.power}</p>
    </div>
  );
};

export default RqSuperHero;
