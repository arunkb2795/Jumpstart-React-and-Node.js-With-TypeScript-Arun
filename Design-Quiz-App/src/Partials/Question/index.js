import React from "react";
import { Answer } from "../../Components";
import styled from "styled-components";

const QuestionWrapper = styled.div`
  margin: 4rem 0;
`;

export default function Question(props) {
  const { data } = props;
  return (
    <QuestionWrapper>
      <p>{data.question}</p>
      {data.options.map((answer, index) => {
        return <Answer key={index} answer={answer} />;
      })}
    </QuestionWrapper>
  );
}
