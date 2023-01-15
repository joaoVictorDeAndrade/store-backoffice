import Colors from "../../Theme/Colors";
import styled from "styled-components";

export const SideBar = styled.div`
  width: 15vw;
  height: calc(100vh - 5rem);
  background-color: ${Colors.shape};
  box-shadow: 0 10px 10px -1px #333333;
  float: left;

  @media (max-width: 768px) {
    width: 20vw;
  }

  @media (max-width: 425px) {
    display: none;
  }
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
  display: flex;
  align-items: center;
  padding: 0 16px;
  margin: 8px 0;
  a {
    font-size: 1.2rem;
    color: black;
  }
`;
