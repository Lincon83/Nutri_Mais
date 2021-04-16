import React, { useState } from "react";
import { Table, Button, Form } from "react-bootstrap";
import "./pacientePrincipal.css";
import CadastroPaciente from "./CadastroPaciente";

export default function PacientesPrincipal() {
  const [visible, setvisible] = useState(false);

  return (
    <>
      <div className="principal">
        <div>
          <div className="tituloPac">
            <h2>Registro de Pacientes</h2>
          </div>

          <Form className="formPesquisa">
            <Form.Group controlId="formBasicEmail">
              <Form.Control
                className="pesquisa"
                type="text"
                placeholder="Enter email"
              />
            </Form.Group>
            <Button variant="info">Pesquisa</Button>
          </Form>
          <div className="btns">
            <Button className="btnCad" onClick={() => setvisible(true)}>
              {visible ? (
                <CadastroPaciente btn={true} close={() => setvisible(false)} />
              ) : null}
              {visible ? <CadastroPaciente close={false} /> : null}
              Cadastrar
            </Button>
            <CadastroPaciente />
            <Button className="btnExc">Excluir</Button>
            <Button className="btnAlt">Alterar</Button>
          </div>
          <div className="tbContainer">
            <Table className="tabela" striped bordered hover size="sm">
              <thead className="tbheader">
                <tr>
                  <th>#</th>
                  <th>Nome</th>
                  <th>Sobrenome</th>
                  <th>Telefone</th>
                  <th>E-mail</th>
                  <th>Nascimento</th>
                  <th>Altura</th>
                  <th>Peso</th>
                  <th>% Gordura</th>
                  <th>IMC</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td colSpan="2">Larry the Bird</td>
                  <td>@twitter</td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    </>
  );
}
