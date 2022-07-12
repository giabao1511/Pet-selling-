import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DogPages from "./components/Dogs/DogsPage";
import Cart from "./components/Cart/Cart";
import NavBar from "./components/Navbar/NavBar";
import axios from "axios";
import { useEffect, useState } from "react";
import Home from "./components/Home/Home";
import { CartContext } from "./Contexts/CardContexts";

function App() {
  const [allDogs, setAllDogs] = useState([]);
  const [myCart, addToCart] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    async function getData() {
      const res = await axios.get("/v1/dogs");
      return res;
    }
    getData().then((res) => setAllDogs(res.data));
    getData().catch((err) => console.log(err));
  }, []);

  return (
    <CartContext.Provider value={{ myCart, addToCart, setTotal, total }}>
      <Router>
        <NavBar />
        <div className="page-container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/dogs"
              element={<DogPages allDogs={allDogs} />}
            ></Route>
            <Route path="/checkout" element={<Cart />}></Route>
          </Routes>
        </div>
      </Router>
    </CartContext.Provider>
  );
}

export default App;
