import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Newsletter from "./Components/Footer/Newsletter/newsletter";
import Header from "./Components/Header/header";
import Footer from "./Components/Footer/footer";
import Home from "./Components/Home/home";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Newsletter />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
