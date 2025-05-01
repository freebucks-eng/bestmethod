export function StarRating({ rating }: { rating: number }) {
  return (
    <div className="star-rating">
      {[1, 2, 3, 4, 5].map((starValue) => (
        <span
          key={`star-${starValue}`}
          className={starValue <= rating ? "star-filled" : "star-empty"}
        >
          ★
        </span>
      ))}
    </div>
  );
}
