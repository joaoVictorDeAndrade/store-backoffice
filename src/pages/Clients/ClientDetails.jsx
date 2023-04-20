import Container from "../../components/Container/Container";
import Title from "../../components/Title/Title";
import Input from "../../components/Input/Input";
import {ClientForm, PersonalData, AddressData} from "./Clients.styles";

import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {fetchClientByCPF} from "../../services/clients";
import useForm from "../../Hooks/UseForm";

export default function ClientDetails() {
  const params = useParams();
  const clientId = params.id;

  const [client, setClient] = useState(null);
  const name = useForm("name");
  const cpf = useForm("cpf");
  const street = useForm("street");
  const number = useForm("number");
  const complement = useForm(false);
  const neighborhood = useForm("neighborhood");
  const city = useForm("city");

  useEffect(() => {
    const response = fetchClientByCPF(clientId);
    setClient(response);
  }, []);

  return (
    <Container>
      <Title text={clientId ? "Editar Cliente" : "Adicionar Cliente"} />

      <ClientForm>
        <Title fontSize="1.25rem" text={"Dados Pessoais"} />
        <PersonalData>
          <Input label="Nome" {...name} />
          <Input label="CPF" {...cpf} />
          <Input label="Data de Nascimento" {...name} />
        </PersonalData>

        <Title fontSize="1.25rem" text={"Endereço"} />
        <AddressData>
          <Input label="Rua" {...street} />
          <Input label="Número" type="number" {...number} />
          <Input label="Complemento" {...complement} />
          <Input label="Bairro" {...neighborhood} />
          <Input label="Cidade" {...city} />
        </AddressData>
      </ClientForm>
    </Container>
  );
}
