import {Wrapper, Title, Line} from "./Title.style";

export default function Title({text}) {
  return (
    <Wrapper>
      <Title>{text}</Title>
      <Line />
    </Wrapper>
  );
}
