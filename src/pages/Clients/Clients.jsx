import {useEffect} from "react";
import Container from "../../components/Container/Container";
import Title from "../../components/Title/Title";
import {getCities, fillDataBase} from "../../services/clients";

export default function Clients() {
  useEffect(() => {
    getCities();
  }, []);

  return (
    <Container>
      <>
        <Title text="Lista de Clientes" />
      </>
    </Container>
  );
}
