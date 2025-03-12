// import { useState } from "react";
import "./App.css";
import Header from "./component/Header";
import Profile from "./component/Profile";
import FoodItem from "./component/FoodItem";
import Footer from "./component/Footer";
function App() {
  return (
    <>
      <Header />
      <section>
        <Profile />
        <FoodItem />
        <Footer />
      </section>
    </>
  );
}

export default App;
