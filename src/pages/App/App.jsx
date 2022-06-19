import { useEffect, useReducer, useState } from "react";
import { apiEntity } from "../../apiConfig";
import { types } from "../../types";
import "./App.css";
import Navigation from "../../components/Navigation/Navigation";
import Banner from "../../components/Banner/Banner";
import Carrousel from "../../components/Carrousel/Carrousel";
import Overlay from "../../components/Overlay/Overlay";
import Footer from "../../components/Footer/Footer";

const initialState = {
  selection: false,
  data: {},
};

const reducer = (state, action) => {
  switch (action.type) {
    case types.showInfo:
      return { ...state, selection: true, data: action.payload };
    case types.closeInfo:
      return { ...state, selection: false, data: {} };

    default:
      return state;
  }
};

function App() {
  const [selection, dispatch] = useReducer(reducer, initialState);

  const handleSelect = (content) => {
    dispatch({ type: types.showInfo, payload: content });
  };

  const handleClose = () => {
    dispatch({ type: types.closeInfo });
  };

  return (
    <div className="App">
      {selection.selection && (
        <Overlay handleClose={handleClose} content={selection.data} />
      )}
      <Navigation />
      <Banner handleSelect={handleSelect} />
      <Carrousel
        title={"Popular Movies"}
        entity={apiEntity.popularMovies}
        handleSelect={handleSelect}
      />
      <Carrousel
        title={"Popular Tv Shows"}
        entity={apiEntity.popularTv}
        handleSelect={handleSelect}
      />
      <Carrousel
        title={"Top Rated Movies"}
        entity={apiEntity.topRatedMovies}
        handleSelect={handleSelect}
      />
      <Carrousel
        title={"Top Rated Tv Shows"}
        entity={apiEntity.topRatedTv}
        handleSelect={handleSelect}
      />
      <Footer />
    </div>
  );
}

export default App;
