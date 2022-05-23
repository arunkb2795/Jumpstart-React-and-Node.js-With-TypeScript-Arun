import React from "react";
import { Header } from "../../Components";
import { QuestionList } from "../../Partials";
import styled from "styled-components";

const QuizContainerComponent = styled.div`
  width: 720px;
`;

export default function QuizContainer(props) {
  const { quizData } = props;
  return (
    <QuizContainerComponent>
      <Header />
      <QuestionList quizData={quizData} />
    </QuizContainerComponent>
  );
}
