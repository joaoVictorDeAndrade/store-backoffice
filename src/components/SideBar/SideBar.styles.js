import Colors from "../../Theme/Colors";
import styled from "styled-components";

export const SideBar = styled.div`
  width: ${({isOpen}) => (!isOpen ? `6vw` : "12vw")};
  height: calc(100vh - 5rem);
  background-color: ${Colors.shape};
  box-shadow: 0 10px 10px -1px #333333;
`;

export const Navigate = styled.nav`
  width: 100%;
`;

export const NavList = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Button = styled.li`
  a {
    display: ${({isOpen}) => (!isOpen ? "none" : "inline")};
  }
`;
