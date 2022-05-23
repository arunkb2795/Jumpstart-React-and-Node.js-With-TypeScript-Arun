import React from "react";
import { Layout } from "./Components";
import { QuizContainer } from "./Partials";
const quizData = [
  {
    question: "1. Sun rises in the ____",
    options: ["North", "South", "East", "West"],
  },
  {
    question: "2. Largest ocean is ____",
    options: [
      "Pacific Ocean",
      "Indian Ocean",
      "Atlantic Ocean",
      "Arctic Ocean",
    ],
  },
  {
    question: "3. Canada is in which continent?",
    options: ["Asia", "Africa", "North America", "South America"],
  },
];
export default function App() {
  return (
    <Layout>
      <QuizContainer quizData={quizData} />
    </Layout>
  );
}
