import {CardStyled} from "./Card.styles";
import {element} from "prop-types";

export default function Card({children}) {
  return <CardStyled>{children}</CardStyled>;
}

Card.propTypes = {
  children: element.isRequired,
};
