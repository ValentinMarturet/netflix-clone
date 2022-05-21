import { useEffect, useState } from "react";
import { tryGetPopularMovies } from "./apiConfig";
import "./App.css";
import Banner from "./components/Banner/Banner";
import Carrousel from "./components/Carrousel/Carrousel";
import Card from "./components/Card/Card";

function App() {
  return (
    <div className="App">
      <Banner />
      <Carrousel title={"Top Rated Movies"} />
      <Carrousel />
    </div>
  );
}

export default App;
