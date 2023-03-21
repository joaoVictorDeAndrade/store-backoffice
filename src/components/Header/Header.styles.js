import Colors from "../../Theme/Colors";
import styled from "styled-components";

export const Header = styled.header`
  width: 100%;
  height: 5rem;
  background-color: ${Colors.shape};
  box-shadow: 0 0 4px #333333;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 2rem;
  position: fixed;
`;

export const Button = styled.button`
  all: unset;
  cursor: pointer;
`;

export const Title = styled.h1`
  color: ${Colors.font1};
`;
