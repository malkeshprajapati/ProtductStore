import styled from "styled-components";

const ReviewsContainer = styled.div`
  width: 800px;
  max-height: 60vh;
  overflow-y: auto;
  margin: 20px;
  border: 1px solid #e1e1e1;
  border-radius: 8px;
  background-color: #f9f9f9;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const ReviewCard = styled.div`
  background-color: #ffffff;
  border: 1px solid #e1e1e1;
  border-radius: 8px;
  padding: 15px;
  margin-bottom: 15px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`;

const Comment = styled.p`
  font-size: 1em;
  color: #333;
  margin: 0 0 10px;
`;

const ReviewerInfo = styled.div`
  font-size: 0.9em;
  color: #777;
`;

const Date = styled.span`
  font-style: italic;
  color: #aaa;
  margin-left: 10px;
`;

export { ReviewsContainer, ReviewCard, Comment, ReviewerInfo, Date };
