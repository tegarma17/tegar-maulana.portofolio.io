import React from "react";

import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import Footer from "./components/Footer";

import "./App.css";
const Home = () => <HomePage />;
const Contact = () => <MyContact />;

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Footer />
    </>
  );
}

export default App;
