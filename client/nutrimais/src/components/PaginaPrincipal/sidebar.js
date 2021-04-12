import "./sidebar.css";
import { Nav, Image } from "react-bootstrap";
import Logo from "../../assets/logo branca.png";
import IconHome from "../../assets/home 2.png";
import IconPaciente from "../../assets/btn-client.png";
import IconAgenda from "../../assets/agenda.png";
import IconDashBoard from "../../assets/dashboards.png";

export default function sidebar() {
  return (
    <>
      <div className="sideBar">
        <div className="logoHeader">
          <Image className="logo" src={Logo}></Image>
        </div>

        <Nav className="navs">
          <Nav.Link className="item">
            <div className="itemContent">
              <Image className="itemIcon" src={IconHome} />
            </div>
            Pagina Inicial
          </Nav.Link>

          <Nav.Link className="item">
            <div className="itemContent">
              <Image className="itemIcon" src={IconPaciente} />
            </div>
            Paciente
          </Nav.Link>
          <Nav.Link className="item">
            <div className="itemContent">
              <Image className="itemIcon" src={IconAgenda} />
            </div>
            Agenda
          </Nav.Link>
          <Nav.Link className="item">
            <div className="itemContent">
              <Image className="itemIcon" src={IconDashBoard} />
            </div>
            DashBoard
          </Nav.Link>
        </Nav>
      </div>
    </>
  );
}
