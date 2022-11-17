import "./App.css";
import Header from "./components/Header";
import AllImages from "./components/AllImages";
import Form from "./components/Form";
import { Routes, Route } from "react-router-dom";
import React from "react";

function App() {
  return (
    <Routes>
        <Route path="/" element={<Header />}>
          <Route path="/" element={<AllImages />} />
          <Route path="/new" element={<Form />} />
        </Route>
    </Routes>
  );
}

export default App;
