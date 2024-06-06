import css from './form.module.css';
import { toast } from 'react-toastify';
import { useState } from 'react';
import { FormBtn } from '../../components/FormBtn/FormBtn';
const Form = () => {
  const INITIAL_STATE = {
    name: '',
    email:"",
    data:"",
    description: '',
  };
  const [state, setState] = useState({ ...INITIAL_STATE });

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const requiredFields = ['name', 'email', 'data', 'description'];
    const isEmpty = requiredFields.some(field => !state[field].trim());
     if (isEmpty) {
     
      toast.error('Please fill out all required fields');
    } else {
      toast.success("Forn Send Successfully")
      setState({ ...INITIAL_STATE });
    }
  };

  const { name, email , data , description } = state;
  return (
    <div className={css.send_form}>
      <h3 className={css.titel_form}>Book your campervan now</h3>
      <p className={css.subtitel_form}>
        Stay connected! We are always ready to help you.{' '}
      </p>
      <form onSubmit={handleSubmit} >
        <label htmlFor="nameForm" />
        <input
          id="nameForm"
          value={name}
          className={css.input}
          type="text"
          name="name"
          required
          placeholder="Name"
          onChange={handleChange}
        ></input>
        <label htmlFor="emailForm" />
        <input
          id="emailForm"
          value={email}
          className={css.input}
          type="email"
          name="email"
          pattern='^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$'
          required
          placeholder="Email"
          onChange={handleChange}
        ></input>
        <label htmlFor="dataForm" />
        <input
          id="dataForm"
          value={data}
          className={css.input}
          type="date"
          name="data"
          required
           placeholder="Booking date"
          onChange={handleChange}
        ></input>
        <label htmlFor="description" />
        <textarea
          id="description"
          className={css.textarea}
          value={description}
          name="description"
          rows="5"
          required
          placeholder="Comment"
          onChange={handleChange}
        ></textarea>
        <FormBtn textBtn={"Send"}/>
      </form>
    </div>
  );
};

export default Form;
