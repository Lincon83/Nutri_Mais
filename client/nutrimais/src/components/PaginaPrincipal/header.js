import React from "react";
import "./stylenav.css";
import { Nav, Image,DropdownButton,Dropdown } from "react-bootstrap";
import img from "../../assets/nutricionista.jpg";

import {FaUserFriends,FaUserCog}from "react-icons/fa"

export default function header () {
  return (
    <>
      <Nav className="nav">
        <Image className="avatar" src={img} roundedCircle />
        

        <DropdownButton id="dropdown-basic-button" className="dropUser"title="User name">
          <Dropdown.Item href="#/action-1">
          <FaUserFriends className="config"/>
          Configuracoes
          </Dropdown.Item>
          <Dropdown.Item href="#/action-2">
              <FaUserCog className="user"/>
              perfil</Dropdown.Item>
        </DropdownButton>
      </Nav>
    </>
  );
}
