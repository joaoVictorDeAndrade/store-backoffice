import Colors from "../../Theme/Colors";
import styled from "styled-components";

export const Container = styled.div`
  max-width: 100vw;
  height: 100vh;
  background-color: ${Colors.background};
`;

export const Content = styled.main`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px 20px;
  padding: 25px;
`;
