import  "./styledCadPaciente.css"
import React,{useEffect, useState} from "react"
import { Button, Form, Modal } from "react-bootstrap";

/*
Validacao dos campos obrigatorios e 
fechamento se tudo tiver correto 
caso nao mandar um alert
*/



export default function CadastroPaciente(props) {

const [CloseModal,setCloseModal]=useState(false);

const handleClose = () => setCloseModal(false);
  // const handleShow = () => setCloseModal(true);
 
  return (
    <div className="modal">
      
        <Modal show={props.btn}  size="lg"   centered animation={true} onHide={handleClose}> 
          <Modal.Header  closeButton={handleClose} className="headerModal">Cadastro de Pacientes</Modal.Header>

          <Modal.Body  >
            <Form className="form">
              <Form.Group>
                <Form.Label for="nomePaciente" >
                  Nome
                </Form.Label>
                <Form.Control
                
                  type="text"
                  name="nome"
                  id="nomePaciente"
                  placeholder="Digite o nome do Paciente"
                />
              </Form.Group>
              <Form.Group>
                <Form.Label for="SobrenomePaciente">Sobrenome</Form.Label>
                <Form.Control
                  type="text"
                  name="sobrenome"
                  id="SobrenomePaciente"
                  placeholder="Digite o sobrenome do Paciente"
                />
              </Form.Group>

              <Form.Group>
                <Form.Label for="dataNascimentoPaciente">
                  Data de Nascimento
                </Form.Label>
                <Form.Control
                  type="date"
                  name="nascimento"
                  id="dataNascimentoPaciente"
                  placeholder="dd/mm/aaaa"
                />
              </Form.Group>
              <Form.Group>
                <Form.Label for="cpfPaciente">CPF</Form.Label>
                <Form.Control
                 className="cpf" 
                  type="number"
                  name="cpf"
                  id="cpfPaciente"
                  placeholder="000.000.000-00"
                />
              </Form.Group>
              <Form.Group >
                <Form.Label for="emailPaciente">E-mail</Form.Label>
                <Form.Control
                 
                  className="email"                  
                  type="email"
                  name="cpf"
                  id="emailPaciente"
                  placeholder="exemplo@gmail.com"
                />
              </Form.Group>

              <Form.Group>
                <Form.Label for="pesoPaciente">Peso</Form.Label>
                <Form.Control
                className="peso"
                  type="number"
                  name="peso"
                  id="pesoPaciente"
                  placeholder="0.0  kg"
                />
              </Form.Group>
              <Form.Group>
                <Form.Label for="alturaPaciente">Altura</Form.Label>
                <Form.Control
                  className="altura"
                  type="number"
                  name="altura"
                  id="alturaPaciente"
                  placeholder="0.0 m"
                />
              </Form.Group>

              <Form.Group className="group">
                <Form.Label for="percentualPaciente">
                  Percentual de Gordura %
                </Form.Label>
                <Form.Control
                className="perct"
                  type="number"
                  name="percentual"
                  id="percentualPaciente"
                  placeholder="0.0 %"
                />
              </Form.Group>
               <div className="btngroup">
               <Button color="secondary" className="btnCancelar">Cancelar</Button>
               <Button color="primary" className="btnSalvar">Salvar</Button>
               </div>
              
            </Form>
          </Modal.Body>
        </Modal>
     
    </div>
  );
}
