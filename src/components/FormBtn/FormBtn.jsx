import css from './formBtn.module.css';

export const FormBtn = ({ textBtn }) => {
  return <button  type='submit' className={css.btn}>{textBtn}</button>;
};
 export const LoadBtn = ({ textBtn }) => {
  return <button  type='button' className={css.btn_Load}>{textBtn}</button>;
};


