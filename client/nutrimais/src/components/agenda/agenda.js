import React, { useEffect, useMemo, useState } from "react";
import { FcPrevious, FcNext } from "react-icons/fc";
import { DropdownButton, Dropdown } from "react-bootstrap";
import "./agenda.css";
import meses from "./dadosAgenda";

let mesAtual = "";

export default function Agenda(props) {
  const [ano, setano] = useState(new Date().getFullYear());
  const [mes, setMes] = useState();
  const obtmesAtual = useMemo(() => {
    props = meses.find((mes) => mes.nMes === new Date().getMonth());
  });

  function verifMesAtual() {
    let mesAtual = meses.find((mes) => mes.nMes === new Date().getMonth());
  }

  function selectMes(evt) {
    // let mesAtual = meses.find((mes) => mes.nome ===mesNome );

    let dados = evt.target.innerText;
    if (dados != "Meses") {
      setMes(dados);
    }
    console.log(dados);
  }
  useEffect(() => {}, [mes]);

  function handleNextAno() {
    if (ano >= 1970) {
      setano(ano + 1);
    }
  }

  function handlePreviousAno() {
    if (ano > 1970) {
      setano(ano - 1);
    }
  }

  return (
    <>
      <div className="container">
        <div className="BtnGrup">
          <button onClick={handlePreviousAno}>
            <FcPrevious className="icons" />
          </button>
          <div className="ano">{ano}</div>
          <button onClick={handleNextAno}>
            <FcNext />
          </button>
        </div>
        <div className="containerMeses">
          <div>
            <DropdownButton
              id="dropdown-basic-button"
              title="Meses"
              onClick={selectMes}
            >
              <Dropdown.Item href="#/action-1">Janeiro</Dropdown.Item>
              <Dropdown.Item
                href="#/action-1"
                onClick={() => setMes("Fevereiro")}
              >
                Fevereiro
              </Dropdown.Item>
              <Dropdown.Item href="#/action-1" onClick={() => setMes("Marco")}>
                Marco
              </Dropdown.Item>
              <Dropdown.Item href="#/action-1" onClick={() => setMes("Abril")}>
                Abril
              </Dropdown.Item>
              <Dropdown.Item href="#/action-1" onClick={() => setMes("Maio")}>
                Maio
              </Dropdown.Item>
              <Dropdown.Item href="#/action-1" onClick={() => setMes("Junho")}>
                Junho
              </Dropdown.Item>
              <Dropdown.Item href="#/action-1" onClick={() => setMes("Julho")}>
                Julho
              </Dropdown.Item>
              <Dropdown.Item href="#/action-1" onClick={() => setMes("Agosto")}>
                Agosto
              </Dropdown.Item>
              <Dropdown.Item
                href="#/action-1"
                onClick={() => setMes("Setembro")}
              >
                Setembro
              </Dropdown.Item>
              <Dropdown.Item
                href="#/action-1"
                onClick={() => setMes("Outubro")}
              >
                Outubro
              </Dropdown.Item>
              <Dropdown.Item
                href="#/action-1"
                onClick={() => setMes("Novembro")}
              >
                Novembro
              </Dropdown.Item>
              <Dropdown.Item
                href="#/action-1"
                onClick={() => setMes("Dezembro")}
              >
                Dezembro
              </Dropdown.Item>
            </DropdownButton>
          </div>
          <div className="mesText">{mes}</div>
        </div>
      </div>
    </>
  );
}
