import React from "react";
import { Nav, Image, DropdownButton, Dropdown } from "react-bootstrap";
import img from "../../assets/nutricionista.jpg";


export default function header() {
  return (
    <>
      <Nav className="nav">
        <Image className="avatar" src={img} roundedCircle />


      </Nav>
    </>
  );
}
