import css from "./form.module.css"
import { useState } from "react"

const Form = ()=>{
    const INITIAL_STATE = {
        name: '',
        description: '',
      }; 
      const [state, setState] = useState({ ...INITIAL_STATE });

      const handleChange = ({ target }) => {
        const { name, value } = target;
        setState({ ...state, [name]: value });
      };

      const { name, description } = state;
    return(
        <div className={css.send_form}> 
            <h3>
            Book your campervan now
            </h3>
            <p>Stay connected! We are always ready to help you. </p>
            <form >
                <label htmlFor="nameForm"/>
      <input
        id="nameForm"
        value={name}
        className={css.input}
        type="email"
        name="name"
        required
        placeholder="Name"
        onChange={handleChange}
      ></input>
       <label htmlFor="description"/>
      <textarea
      id="description"
       className={css.input}
        value={description}
        name="description"
        rows="5"
        required
        placeholder="Comment"
        onChange={handleChange}
      ></textarea>
          </form>
        </div>
        
    )
}

export default Form 