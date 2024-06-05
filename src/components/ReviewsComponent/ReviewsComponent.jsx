import css from "./reviews-component.module.css"
import Form from "../Form/Form"

const ReviewsComponent = ({reviews})=> {

    const elements=reviews.map(({id, reviews})=><li key={id}>
        <h2>{reviews.reviewer_name}</h2>
        <p>{reviews.reviewer_rating}</p>
        <p>{reviews.comment}</p>
       </li>)


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