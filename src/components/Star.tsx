import React from "react";

const Star = (props: { starId: number; marked: boolean }) => {
  const { starId, marked } = props;
  return (
    <span star-id={starId} style={{ color: "#ff9933" }}>
      {marked ? "\u2605" : "\u2606"}
    </span>
  );
};

const StarRating = (props: { rating: number; averageRating: string }) => {
  const { averageRating, rating } = props;
  return (
    <div>
      {Array.from({ length: 5 }, (v, i) => (
        <Star starId={i + 1} marked={i < Math.round(rating) ? true : false} />
      ))}
      <span>{averageRating}</span>
    </div>
  );
};

export default StarRating;
