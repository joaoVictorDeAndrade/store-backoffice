import Colors from "../../Theme/Colors";
import imageLogin from "../../assets/images/imageLogin.jpg";
import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url(${imageLogin}) no-repeat center center;
  background-size: cover;
`;

export const FormWrapper = styled.div`
  width: 60%;
  height: 60%;
  background-color: white;
  border-radius: 24px;
  display: flex;
`;

export const ImageContainer = styled.div`
  border-right: 1px solid ${Colors.gray};
  border-top-left-radius: 1.5rem;
  border-bottom-left-radius: 1.5rem;
  width: 30%;
  background-color: ${Colors.tertiary};
`;

export const InputsContainer = styled.div`
  display: flex;
  width: 70%;
  padding-top: 14%;
`;

export const InputWrapper = styled.div`
  width: 100%;
`;
