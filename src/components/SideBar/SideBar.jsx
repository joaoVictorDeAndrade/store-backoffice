import {SideBar, Navigate, NavList, Button} from "./SideBar.styles";
import {Link} from "react-router-dom";
import {HiMenu} from "react-icons/hi";
import {FaStore} from "react-icons/fa";
import Colors from "../../Theme/Colors";

const iconStyle = {
  width: "32px",
  height: "32px",
  marginRight: "8px",
  color: `${Colors.primary}`,
};

const navItems = [
  {
    route: "/",
    label: "Home",
    icon: <HiMenu style={iconStyle} />,
  },
  {
    route: "/clients/add",
    label: "Adicionar Cliente",
    icon: <FaStore style={iconStyle} />,
  },
  {
    route: "/clients",
    label: "Ver Clientes",
    icon: <FaStore style={iconStyle} />,
  },
];

export default function SideBarComponent() {
  return (
    <SideBar>
      <Navigate>
        <NavList>
          {navItems.map(item => (
            <Button key={item.route}>
              {item.icon}
              <Link to={item.route}>{item.label}</Link>
            </Button>
          ))}
        </NavList>
      </Navigate>
    </SideBar>
  );
}
