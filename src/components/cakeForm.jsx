import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const flavours = ["Chocolate", "Fresa", "Vainilla", "Limón"];
const decorations = ["Figuras de Fondant", "Chispas de Chocolate", "Betún"];

function CakeForm(props) {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="description">
        <Form.Label>Descripción general</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="flavours">
        <Form.Label>Sabor</Form.Label>
        {flavours.map((flavour) => {
          return <Form.Check type="checkbox" label={flavour} />;
        })}
      </Form.Group>
      <Form.Group className="mb-3" controlId="decorations">
        <Form.Label>Decoración</Form.Label>
        {decorations.map((decoration) => {
          return <Form.Check type="checkbox" label={decoration} />;
        })}
      </Form.Group>
      <Form.Group className="mb-3" controlId="name">
        <Form.Label>Nombre</Form.Label>
        <Form.Control type="text" placeholder="John Smith" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="phone">
        <Form.Label>Teléfono</Form.Label>
        <Form.Control type="tel" placeholder="555 555 1212" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="email">
        <Form.Label>Correo electrónico</Form.Label>
        <Form.Control type="email" placeholder="name@domain.com" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Enviar
      </Button>{" "}
      <Button variant="secondary" type="reset">
        Reset
      </Button>
    </Form>
  );
}

export default CakeForm;
