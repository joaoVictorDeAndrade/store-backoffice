import {SideBar, Navigate, NavList, Button} from "./SideBar.styles";
import {Link} from "react-router-dom";
import {HiMenu} from "react-icons/hi";
import {FaStore} from "react-icons/fa";
import {useState} from "react";

const navItems = [
  {
    route: "/",
    label: "Home",
    icon: <HiMenu />,
  },
  {
    route: "/clients/add",
    label: "Adicionar Clientes",
    icon: <FaStore />,
  },
  {
    route: "/clients",
    label: "Ver Clientes",
    icon: <FaStore />,
  },
];

export default function SideBarComponent() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <SideBar isOpen={isOpen}>
      <Navigate>
        <NavList>
          {navItems.map(item => (
            <Button key={item.route} isOpen={isOpen}>
              {item.icon}
              <Link to={item.route}>{item.label}</Link>
            </Button>
          ))}
        </NavList>
      </Navigate>
    </SideBar>
  );
}
