import { useQuery } from "react-query";
import axios from "axios";

const fetch = () => {
  return axios.get("http://localhost:5000/superheroes");
};

const useSuperHereosData = (onSuccess, onError) => {
  return useQuery(
    "super-heroes",

    fetch,
    {
      // cacheTime: 5000,
      // staleTime: 30000,
      // enabled: false,
      onSuccess,
      onError,
      //   select: (data) => {
      //     const superHeroes = data.data.map((hero) => hero.name);
      //     return superHeroes;
      //   },
    }
  );
};

export default useSuperHereosData;
