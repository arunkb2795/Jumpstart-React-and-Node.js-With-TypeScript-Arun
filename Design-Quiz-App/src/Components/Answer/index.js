import React from "react";
import styled from "styled-components";

const AnswerComponent = styled.div`
  background: #eeeeee 0% 0% no-repeat padding-box;
  border-radius: 5px;
  height: 60px;
  margin: 1rem 0 1rem 0;
  padding: 0 1rem;
  display: flex;
  align-items: center;
  font-size: 18px;
  font: normal normal normal 18px/22px Rubik;
  letter-spacing: 0px;
  color: #000000;
  opacity: 1;
`;

export default function Answer(props) {
  const { answer } = props;
  return <AnswerComponent>{answer}</AnswerComponent>;
}
