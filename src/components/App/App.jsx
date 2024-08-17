import { Routes, Route } from "react-router-dom";
import Home from "../../pages/Home/Home";
import Catalog from "../../pages/Catalog/Catalog";
import Favorites from "../../pages/Favorites/Favorites";
import Navigation from "../Navigation/Navigation";
import Container from "../Container/Container";

function App() {
  return (
    <>
      <Container>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
