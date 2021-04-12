import React from "react";
import { Table,Button} from "react-bootstrap";
import "./pacientePrincipal.css";

export default function PacientesPrincipal() {
  return (
    <>
      <div>
        <div>
          <div>
            <h2>Registro de Pacientes</h2>
          </div>
          <div className="btns">
          <Button>
              Castrar
          </Button>
          <Button>
              Excluir
          </Button>
          <Button>
              Alterar
          </Button>

          </div>
          <div>
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
