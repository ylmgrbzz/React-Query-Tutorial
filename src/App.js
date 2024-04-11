import "./App.css";
import { Routes, Route } from "react-router-dom";
import SuperHeroes from "./components/SuperHeroes.page";
import RqSuperHeroesPage from "./components/RqSuperHeroesPage";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import RqSuperHero from "./components/RqSuperHero";
import ParallelQueriesPage from "./components/ParallelQueriesPage";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      {" "}
      {/* Wrap your App with QueryClientProvider */}
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="super-heroes" element={<SuperHeroes />} />
          <Route path="rq-super-heroes" element={<RqSuperHeroesPage />} />
          <Route path="rq-super-heroes/:heroId" element={<RqSuperHero />} />
          <Route path="rq-parallel" element={<ParallelQueriesPage />} />
        </Routes>
      </div>
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
    </QueryClientProvider>
  );
}

export default App;
