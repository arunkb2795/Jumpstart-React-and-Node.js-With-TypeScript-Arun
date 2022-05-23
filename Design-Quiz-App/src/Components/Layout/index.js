import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 3rem;
  font-family: "Rubik", sans-serif;
`;

export default function Layout(props) {
  const { children } = props;
  return <Container>{children}</Container>;
}
