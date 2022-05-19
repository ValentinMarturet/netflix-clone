import { useEffect, useState } from "react";
import { tryGetPopularMovies } from "./apiConfig";
import "./App.css";
import Banner from "./components/Banner/Banner";

function App() {
  const [movies, setMovies] = useState("");
  const [loading, setLoading] = useState(true);

  const getMovies = async () => {
    try {
      const res = await tryGetPopularMovies();
      setMovies(res);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div className="App">
      <h1>Netflix Clone</h1>
      <Banner />
      {loading && <h1>Loading</h1>}
      {!loading &&
        movies.map((movie) => {
          return <h1 key={movie.id}>{movie.title}</h1>;
        })}

      <button onClick={() => console.log(movies)}>Peliculas</button>
    </div>
  );
}

export default App;
