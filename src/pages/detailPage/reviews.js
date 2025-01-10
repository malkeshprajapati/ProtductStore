import React from "react";
import { CardContent, Rating } from "../../styles/singleProductStyle";
import {
  Comment,
  Date,
  ReviewCard,
  ReviewerInfo,
  ReviewsContainer,
} from "../../styles/reviewStyle";

const Reviews = ({ reviewsData }) => {
  return (
    <ReviewsContainer>
      <CardContent>
        <h2>Customer Reviews</h2>
        {reviewsData.map((review, index) => (
          <ReviewCard key={index}>
            <Rating>
              {"★".repeat(review.rating) + "☆".repeat(5 - review.rating)}
            </Rating>
            <Comment>{review.comment}</Comment>
            <ReviewerInfo>
              <strong>{review.reviewerName}</strong>
              <Date>{review.date.slice(0, 10)}</Date>
            </ReviewerInfo>
          </ReviewCard>
        ))}
      </CardContent>
    </ReviewsContainer>
  );
};

export default Reviews;
