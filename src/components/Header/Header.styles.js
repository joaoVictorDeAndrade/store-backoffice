import Colors from "../../Theme/Colors";
import styled from "styled-components";

export const Header = styled.header`
  width: 100%;
  height: 5rem;
  background-color: ${Colors.shape};
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 4px #333333;
`;

export const Title = styled.h1`
  color: ${Colors.font1};
`;
