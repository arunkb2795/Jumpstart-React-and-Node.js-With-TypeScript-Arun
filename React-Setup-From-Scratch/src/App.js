import React from "react";
import styled from "styled-components";

export default function App() {
  const Header = styled.h1`
    color: red;
    @media (max-width: 480px) {
      font-size: 24px;
      color: green;
    }
  `;

  const Hero = styled(Header)`
    color: blue;
    font-size: 100px;
  `;

  return (
    <div>
      <Header>Hello React!</Header>
      <Hero>I am a Hero.</Hero>
    </div>
  );
}
