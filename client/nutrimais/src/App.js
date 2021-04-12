import React from "react";
import "./App.css";
import Header from "./components/PaginaPrincipal/header";
import SideBar from "./components/PaginaPrincipal/sidebar";
import Conteudo from "./components/pacientes/pacientesPrincipal";
import Cad from "./components/pacientes/CadastroPaciente"

function App() {
  return (
    <div className="App">
      <SideBar/>
      <Header />
      <Conteudo />
      <Cad></Cad>
    </div>
  );
}

export default App;
