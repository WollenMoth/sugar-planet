import React from "react";
import Table from "react-bootstrap/Table";

function Dashboard(props) {
  return (
    <div>
      <h2>Material restante</h2>
      <h3>Sabores</h3>
      <p>Chocolate: 15</p>
      <p>Fresa: 12</p>
      <p>Vainilla: 10</p>
      <p>Limón: 8</p>
      <h3>Adornos</h3>
      <p>Figuras de Fondant: 20</p>
      <p>Chispas de Chocolate: 15</p>
      <p>Betún: 25</p>
      <h2>Pedidos</h2>
      <Table variant="dark" striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Descripción General</th>
            <th>Sabor</th>
            <th>Decoración</th>
            <th>Nombre</th>
            <th>Teléfono</th>
            <th>Correo electrónico</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Pastel rectangular de dos pisos para 40 personas</td>
            <td>Chocolate</td>
            <td>Sin decoración</td>
            <td>Juan Pérez</td>
            <td>555 555 1212</td>
            <td>juan.perez@domain.com</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Pastel redondo de 3 pisos para 100 personas</td>
            <td>Vainilla y Fresa</td>
            <td>Figuras de Fondant</td>
            <td>María Rodríguez</td>
            <td>555 555 1212</td>
            <td>maria.rodriguez@domain.com</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Pastel redondo para 15 personas</td>
            <td>Limón</td>
            <td>Chispas de Chocolate</td>
            <td>Luis García</td>
            <td>555 555 1212</td>
            <td>luis.garcia@domain.com</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default Dashboard;
