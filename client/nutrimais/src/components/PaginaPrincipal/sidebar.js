import "./sidebar.css";
import { Nav, Image } from "react-bootstrap";
import Logo from "../../assets/logo branca.png";
import IconHome from "../../assets/home 2.png";
import IconPaciente from "../../assets/btn-client.png";
import IconAgenda from "../../assets/agenda.png";
import IconDashBoard from "../../assets/dashboards.png";

import { Link } from "react-router-dom";

export default function sidebar(props) {
  return (
    <>
      <div className="sideBar">
        <div className="logoHeader">
          <Image className="logo" src={Logo}></Image>
        </div>

        <Nav className="navs">
          <Link className="item" to="/">
            <div className="itemContent">
              <Image className="itemIcon" src={IconHome} />
            </div>
            Pagina Inicial
          </Link>

            
            <Link className="item" to="/Paciente">
            <div className="itemContent">
              <Image className="itemIcon" src={IconPaciente} />
            </div>
              Paciente
            </Link>
         

         
            
            <Link className="item" to="/Agenda">
            <div className="itemContent">
              <Image className="itemIcon" src={IconAgenda} />
            </div>
              Agenda
            </Link>
          
            

            <Link className="item" to="/DashBoard">
            <div className="itemContent">
              <Image className="itemIcon" src={IconDashBoard} />
            </div>
              DashBoard
            </Link>
         
        </Nav>
      </div>
    </>
  );
}
