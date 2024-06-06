import StarRatings from 'react-star-ratings';

const StaticStarRating = ({ rating, totalStars }) => {
  return (
    <StarRatings
      rating={rating}
      starRatedColor="gold"
      numberOfStars={totalStars}
      starDimension="16px"
      starSpacing="4px"
      name='rating'
    />
  );
};

StaticStarRating.defaultProps = {
  totalStars: 5,
};

export default StaticStarRating;