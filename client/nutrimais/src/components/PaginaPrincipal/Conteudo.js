import React from "react";
import "./Conteudo.css";
import Conteudo_Main from "./Conteudo_Main";

export default function Conteudo(props) {
  return (
    <>
      <div className="main">
        <header className="header">
          <div className="titulo">
            <h2>{props.titulo}</h2>
            <h6>
              Veja suas próximas consultas e informações sobre a sua ativide
            </h6>
          </div>
          <div>
            <h5 className="horario">segunda-feira 12 de abril de 2021 </h5>
          </div>
        </header>
      </div>

    </>
  );
}
