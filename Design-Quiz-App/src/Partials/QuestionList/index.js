import React from "react";
import { Question } from "../../Partials";

export default function QuestionList(props) {
  const { quizData } = props;
  return (
    <div>
      {quizData.map((quiz, index) => {
          return <Question key={index} data={quiz}/>;
      })}

      <h2>You Score: 15 Points</h2>
    </div>
  );
}
