import { BrowserRouter as Router } from "react-router-dom";
import FruitData from "./components/FruitData";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Router>
        <FruitData />
      </Router>
      <Footer />
    </>
  );
}

export default App;
