import css from './formBtn.module.css';

const FormBtn = ({ textBtn }) => {
  return <button  type='submit' className={css.btn}>{textBtn}</button>;
};

export default FormBtn;
