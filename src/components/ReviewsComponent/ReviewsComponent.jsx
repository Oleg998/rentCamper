import css from './reviews-component.module.css';
import Form from '../Form/Form';
import StaticStarRating from '../../helpers/Star';

const ReviewsComponent = ({ reviews }) => {
  const elements = reviews.map(
    ({ reviewer_name, reviewer_rating, comment }, index) => (
      <li key={index} className={css.reviews_list}>
        <div className={css.rating_container}>
          <div className={css.circle}>
            
            <span className={css.letter}>{reviewer_name.charAt(0)}</span>
          </div >
          <div>     <h2 className={css.reviewer_name}>{reviewer_name}</h2>
          <StaticStarRating rating={reviewer_rating} />   </div>
      



        </div>

        <p className={css.reviews_text}>{comment}</p>
      </li>
    )
  );

  return (
    <div className={css.wrraper}>
      <div className={css.review_container}>
        <ul>{elements}</ul>
      </div>
      <Form />
    </div>
  );
};

export default ReviewsComponent;
