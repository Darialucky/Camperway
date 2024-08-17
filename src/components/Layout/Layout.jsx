import { Outlet } from "react-router";
import Navigation from "../Navigation/Navigation";
import Container from "../Container/Container";
import { Suspense } from "react";

const Layout = () => {
  return (
    <>
      <Navigation />
      <Container>
        <Suspense fallback="Loading...">
          <Outlet />
        </Suspense>
      </Container>
    </>
  );
};

export default Layout;
