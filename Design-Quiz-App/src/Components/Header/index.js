import React from "react";
import styled from "styled-components";

const HeaderComponent = styled.div`
  text-align: left;
  font: normal normal bold 40px/47px Rubik;
  letter-spacing: 0px;
  color: #000000;
  opacity: 1;
`;

export default function Header() {
  return <HeaderComponent>Quiz</HeaderComponent>;
}
