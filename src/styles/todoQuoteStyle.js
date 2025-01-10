import styled from "styled-components";

const TodoContainer = styled.div`
  width: 800px;
  // height: 100%;
  background-color: #ffffff;
  border: 1px solid #e1e1e1;
  border-radius: 8px;
  margin: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }
`;

const TodoText = styled.div`
  font-size: 1.5em;
  color: #639567;
  font-weight: bold;
  margin-bottom: 10px;
`;

const QuoteContainer = styled.div`
  font-style: italic;
  color: #555;
  font-size: 1.1em;
  margin-top: 10px;
  border-left: 4px solid #639567;
  padding-left: 10px;
`;

const Author = styled.h3`
  display: block;
  margin-top: 6px;
  color: #639567;
`;

export { TodoContainer, TodoText, QuoteContainer, Author };
