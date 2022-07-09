import UseForm from "../../Hooks/UseForm";
import InputComponent from "../../components/Input/Input";

import {
  Container,
  FormWrapper,
  ImageContainer,
  InputsContainer,
  InputWrapper,
} from "./Login.styles";

const styleInputs = {
  width: "70%",
};

export default function Login() {
  const email = UseForm("email");
  const password = UseForm("password");

  return (
    <Container>
      <FormWrapper>
        <ImageContainer></ImageContainer>
        <InputsContainer>
          <InputWrapper>
            <InputComponent label="E-mail" style={styleInputs} {...email} />
            <InputComponent label="Senha" style={styleInputs} {...password} />
          </InputWrapper>
        </InputsContainer>
      </FormWrapper>
    </Container>
  );
}
