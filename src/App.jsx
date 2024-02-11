import React from "react";

import "./App.css";
import data from "./assets/data";
import Gallery from "./components/Gallery";
const App = () => {
  return (
    <>
      <h1 className="text-6xl font-bold text-center my-4 decoration-white text-white">
        Photo Gallery
      </h1>
      <Gallery data={data} />
    </>
  );
};

export default App;
