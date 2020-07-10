import React from "react";
import { hot } from "react-hot-loader";
import TodoList from "./todos/TodoList.js";
import "./app.css";

const App = () => (
  <div className="app">
    <TodoList />
  </div>
);

export default hot(module)(App);
