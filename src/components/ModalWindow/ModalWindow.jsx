import style from './modal-window.module.css';
import sprite from '../../helpers/img/symbol-defs.svg';
import css from '../CatalogCampers/catalog-campers.module.css';
import React, { useState } from 'react';
import ReviewsComponent from "../../components/ReviewsComponent/ReviewsComponent";
import FeaturesComponent from "../../components/FeaturesComponent/FeaturesComponent";

const ModalWindows = ({ currentItem }) => {
  const [activeComponent, setActiveComponent] = useState('');
  
  const handleButtonClick = (componentName) => {
    setActiveComponent(componentName);
  };

  return (
    <div className={style.modal_window_container}>
      <h2 className={style.modal_title}>{currentItem.name}</h2>
      <div className={css.rating_local}>
        <svg className={css.item_svg}>
          <use className={css.item_use} href={`${sprite}#icon-Raiting`}></use>
        </svg>
        <p className={css.rating}>
          {currentItem.rating} ({currentItem.reviews.length} Reviews)
        </p>
        <svg className={css.item_svg}>
          <use
            className={css.item_use_local}
            href={`${sprite}#icon-map-pin`}
          ></use>
        </svg>
        <p>{currentItem.location}</p>
      </div>
      <h2>&#8364;{currentItem.price}</h2>
      <div className={style.modal_img}>
        {currentItem.gallery.map((imgSrc, index) => (
          <img
            key={index}
            className={css.item_img}
            src={imgSrc}
            alt={`${currentItem.name} ${index + 1}`}
          />
        ))}
      </div>
      <p className={style.modal_text}>{currentItem.description}</p>

      <div className={style.currentBtn_container}>
        <button
          className={style.currentBtn}
          onClick={() => handleButtonClick('Features')}
        >
          <span>Features</span>
          {activeComponent === 'Features' && <span className={style.underline}></span>}
        </button>
        <button
          className={style.currentBtn}
          onClick={() => handleButtonClick('Reviews')}
        >
          <span>Reviews</span>
          {activeComponent === 'Reviews' && <span className={style.underline}></span>}
        </button>
      </div>
      <div className={style.componentContainer}>
        {activeComponent === 'Features' && <FeaturesComponent features={currentItem} />}
        {activeComponent === 'Reviews' && <ReviewsComponent reviews={currentItem.reviews} />}
      </div>
    </div>
  );
};

export default ModalWindows;
