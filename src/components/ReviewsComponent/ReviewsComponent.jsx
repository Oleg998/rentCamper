import css from "./reviews-component.module.css"
import Form from "../Form/Form"

const ReviewsComponent = ({reviews})=> {
         
    const elements = reviews.map(({ reviewer_name, reviewer_rating, comment }, index) => (
        <li key={index}>
            <h2>{reviewer_name}</h2>
            <p>Rating: {reviewer_rating}</p>
            <p>{comment}</p>
        </li>
    ));



    return(
       

        <div className={css.wrraper }>
            <div className={css.review_container}>
                <ul>
              {elements}
                </ul>
            </div>
            <Form/>
        </div>
    )
}

export default ReviewsComponent