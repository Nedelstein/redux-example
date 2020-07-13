import React from "react";
import styled from "styled-components";
import { hot } from "react-hot-loader";
import TodoList from "./todos/TodoList.js";

const AppContainer = styled.div`
  margin: 1rem;
  font-family: Arial, Arial, Helvetica, sans-serif;
  color: aqua;
`;

const App = () => (
  <AppContainer>
    <TodoList />
  </AppContainer>
);

export default hot(module)(App);
