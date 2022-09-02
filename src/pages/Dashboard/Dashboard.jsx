import Header from "../../components/Header/Header";
import SideBar from "../../components/SideBar/SideBar";

import {Container} from "./Dashboard.styles";

export default function Dashboard() {
  return (
    <Container>
      <Header></Header>
      <SideBar></SideBar>
    </Container>
  );
}
