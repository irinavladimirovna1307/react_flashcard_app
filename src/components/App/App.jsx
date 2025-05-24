import React from "react";
import { Routes, Route } from "react-router-dom";
import words from "../data/words.json";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Banner from "../Banner/Banner";
import Error from "../Error/Error";
import Slider from "../Slider/Slider";
import List from "../List/List";
import Quiz from "../Quiz/Quiz";

import style from "./app.module.scss";

function App() {
  return (
    <div className={style.App}>
      <Header />
      <Routes>
        <Route path="/" element={<Banner />} />
        <Route path="/wordlist" element={<List />} />
        <Route path="/cards" element={<Slider words={words} />} />
        <Route path="/training" element={<Quiz />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
