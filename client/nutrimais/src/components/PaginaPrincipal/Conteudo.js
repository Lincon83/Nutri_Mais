import React from "react";
import "./Conteudo.css";

export default function Conteudo() {
  return (
    <>
      <div className="main">
        <header className="header">
          <div className="titulo">
            <h2>Pagina do principal</h2>
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
