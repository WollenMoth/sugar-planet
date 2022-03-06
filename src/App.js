import { Fragment } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import "./App.css";
import NavBar from "./components/navBar";
import HomePage from "./components/homePage";
import Dashboard from "./components/dashboard";
import Information from "./components/information";
import CakeForm from "./components/cakeForm";
import NotFound from "./components/notFound";

function App() {
  return (
    <Fragment>
      <NavBar />
      <Container>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/info" element={<Information />} />
          <Route path="/order" element={<CakeForm />} />
          <Route path="/not-found" element={<NotFound />} />
          <Route path="*" element={<Navigate to="/not-found" />} />
        </Routes>
      </Container>
    </Fragment>
  );
}

export default App;
