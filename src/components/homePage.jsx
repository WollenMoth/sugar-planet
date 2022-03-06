import React from "react";
import { LinkContainer } from "react-router-bootstrap";
import Button from "react-bootstrap/Button";

function HomePage(props) {
  return (
    <div>
      <h1>¡Bienvenido a Sugar Planet!</h1>
      <p>Puedes realizar tu pedido a continuación:</p>
      <LinkContainer to={"/order"}>
        <Button variant="primary">Ordena ahora</Button>
      </LinkContainer>
    </div>
  );
}

export default HomePage;
