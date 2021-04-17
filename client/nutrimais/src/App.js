import React, { useState } from "react";
import "./App.css";
import Header from "./components/PaginaPrincipal/header";
import Paciente from "./components/pacientes/pacientesPrincipal";
import PaginaInicial from "./components/PaginaPrincipal/Conteudo";
import Cad from "./components/pacientes/CadastroPaciente";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Sidebar from "./components/PaginaPrincipal/sidebar"
import Login from "./components/login/main"


function App() {
  return (
    <div className="App">


      <Login />
      {/* <Router>

        <Sidebar />
        <Cad></Cad>
        <Header />

        <Switch>
          <Route exact path="/">
            <PaginaInicial titulo="Pagina do Profissional" />
          </Route>
          <Route exact path="/Paciente">
            <PaginaInicial titulo="Pacientes" />
            <Paciente />

          </Route>
        </Switch>
      </Router> */}
    </div>
  );
}

export default App;
