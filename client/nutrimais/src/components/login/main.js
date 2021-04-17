import React from "react";
import "./login.css"
import fundoLogin from "../../assets/fundo.jpg"
import { Nav, Image } from "react-bootstrap";
import Logo from "../../assets/logo branca.png";

export default function Main() {
  return (
    <>
      <div className="fundoMain conteudo" >
        <Nav className="navLogin">
          <Image src={Logo} className="Logo" />
        </Nav>

      </div>
    </>
  )
}