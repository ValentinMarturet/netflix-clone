import { useEffect, useState } from "react";
import { apiEntity } from "./apiConfig";
import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import Banner from "./components/Banner/Banner";
import Carrousel from "./components/Carrousel/Carrousel";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Banner />
      <Carrousel title={"Popular Movies"} entity={apiEntity.popularMovies} />
      <Carrousel title={"Popular Tv Shows"} entity={apiEntity.popularTv} />
      <Carrousel title={"Top Rated Movies"} entity={apiEntity.topRatedMovies} />
      <Carrousel title={"Top Rated Tv Shows"} entity={apiEntity.topRatedTv} />
    </div>
  );
}

export default App;
