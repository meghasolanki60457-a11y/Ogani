import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Header from "./Components/Header";
import Categories from "./Components/Categories";
import Feature from "./Components/Feature";
import Latest from "./Components/Latest";
import Blog from "./Components/Blog";
import Footer from "./Components/Footer";

import Shop from "./Pages/Shop"

function Home() {
  return (
    <>
      <Categories />
      <Feature />
      <Latest />
      <Blog/>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>

      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
      
      </Routes>

      <Footer />

    </BrowserRouter>
  );
}

export default App;