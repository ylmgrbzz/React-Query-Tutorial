import React from "react";
import { useQuery } from "react-query";
import axios from "axios";

const fetch = (heroId) => {
  return axios.get(`http://localhost:5000/superheroes${heroId}`);
};

const useSuperHeroData = (heroId) => {
  return useQuery(["super-hero", heroId], () => fetch(heroId));
};

export default useSuperHeroData;
