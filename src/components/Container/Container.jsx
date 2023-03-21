import Header from "../Header/Header";
import SideBar from "../SideBar/SideBar";
import {element} from "prop-types";

import {Wrapper, Main} from "./Container.styles";

export default function Container({children}) {
  return (
    <Wrapper>
      <Header></Header>
      <SideBar></SideBar>
      <Main>{children}</Main>
    </Wrapper>
  );
}

Container.propTypes = {
  children: element.isRequired,
};
