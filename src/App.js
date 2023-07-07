import { BrowserRouter as Router } from "react-router-dom";
import FruitData from "./components/FruitData";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { getFruitList } from "./api";
import { useEffect, useState } from "react";

function App() {
  // const [fruits, setFruits] = useState([]);

  // useEffect(() => {
  //   getFruitList().then((data) => console.log(data));
  // }, []);
  return (
    <>
      <Router>
        <Navbar />
        <FruitData />
        <Footer />
      </Router>
    </>
  );
}

export default App;
