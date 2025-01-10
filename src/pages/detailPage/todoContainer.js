import React from "react";
import {
  Author,
  QuoteContainer,
  TodoContainer,
  TodoText,
} from "../../styles/todoQuoteStyle";
import { CardContent } from "../../styles/singleProductStyle";

const TodoQuote = ({ todo }) => {
  return (
    <TodoContainer>
      <CardContent>
        <TodoText>
          <strong>Todo:</strong> {todo.todo}
        </TodoText>
        <QuoteContainer>
          {`"${todo.quote}"`}
          <Author>— {`${todo.author}`}</Author>
        </QuoteContainer>
      </CardContent>
    </TodoContainer>
  );
};

export default TodoQuote;
