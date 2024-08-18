import { Routes, Route, Navigate } from "react-router-dom";
import { lazy, Suspense } from "react";
import Navigation from "../Navigation/Navigation";
import Container from "../Container/Container";

const Home = lazy(() => import("../../pages/Home/Home"));
const Catalog = lazy(() => import("../../pages/Catalog/Catalog"));
const Favorites = lazy(() => import("../../pages/Favorites/Favorites"));

function App() {
  return (
    <Container>
      <Navigation />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
    </Container>
  );
}

export default App;
