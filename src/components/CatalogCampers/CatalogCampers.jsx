import { useSelector } from 'react-redux';
import css from './catalog-campers.module.css';
import { fetchCars } from '../../redux/camper/campers-operations';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getAllCampers } from '../../redux/camper/campers-selector';
import sprite from '../../helpers/img/symbol-defs.svg';
import { capitalizeFirstLetter } from '../../helpers/ToUpFistCase';

const CatalogCampers = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);
  const items = useSelector(getAllCampers);

  const elements = items.map(
    ({
      id,
      name,
      price,
      rating,
      location,
      description,
      adults,
      transmission,
      reviews,
      engine,
      details,
      gallery,
    }) => {
      const { kitchen, beds, airConditioner } = details;
      return (
        <li key={id} className={css.item}>
          <img className={css.item_img} src={gallery[0]} alt="" />
          <div className={css.item_container_info}>
            <div className={css.name_price}>
              <h2>{name}</h2>
              <h2>
                &#8364;{price}{' '}
                <svg className={css.item_svg_favorit}>
                  <use
                    className={css.item_use_favorit}
                    href={`${sprite}#icon-Property-1Default`}
                  ></use>
                </svg>
              </h2>
            </div>
            <div className={css.rating_local}>
              <svg className={css.item_svg}>
                <use
                  className={css.item_use}
                  href={`${sprite}#icon-Raiting`}
                ></use>
              </svg>
              <p className={css.rating}>
                {rating}({reviews.length} Reviews)
              </p>
              <svg className={css.item_svg}>
                <use
                  className={css.item_use_local}
                  href={`${sprite}#icon-map-pin`}
                ></use>
              </svg>
              <p>{location}</p>
            </div>

            <p className={css.description}>{description}</p>
            <ul className={css.details_list}>
              <li className={css.item_details}>
                <span className={css.span_icons}>
                  
                  <svg className={css.icon_svg}>
                    <use
                      className={css.icon_use_1}
                      href={`${sprite}#icon-Users`}
                    ></use>
                  </svg>
                  {adults} adults
                </span>
              </li>
              <li className={css.item_details} >
                <span className={css.span_icons}>
                  <svg className={css.icon_svg}>
                    <use
                      className={css.icon_use}
                      href={`${sprite}#icon-Container`}
                    ></use>
                  </svg>
                  {capitalizeFirstLetter(transmission)}
                </span>
              </li>
              <li className={css.item_details}>
                <span className={css.span_icons}>
                  {' '}
                  <svg className={css.icon_svg}>
                    <use
                      className={css.icon_use_1}
                      href={`${sprite}#icon-Vertical-container`}
                    ></use>
                  </svg>{' '}
                  {capitalizeFirstLetter(engine)}{' '}
                </span>
              </li>
              {kitchen ? (
                <li className={css.item_details}>
                  <span className={css.span_icons}>
                    
                    <svg className={css.icon_svg}>
                      <use
                        className={css.icon_use}
                        href={`${sprite}#icon-Horizontal-container`}
                      ></use>
                    </svg>
                    Kitchen
                  </span>
                </li>
              ) : (
                <></>
              )}

              <li className={css.item_details}>
                <span className={css.span_icons}>
                  {' '}
                  <svg className={css.icon_svg}>
                    <use
                      className={css.icon_use}
                      href={`${sprite}#icon-Container-1`}
                    ></use>
                  </svg>{' '}
                  {beds} beds{' '}
                </span>
              </li>
              {airConditioner ? (<li className={css.item_details}>
                <span className={css.span_icons}>
                  <svg className={css.icon_svg}>
                    <use
                      className={css.icon_use_1}
                      href={`${sprite}#icon-wind`}
                    ></use>
                  </svg> AC

                </span>
              </li>) : <></>}
              
            </ul>
          </div>
        </li>
      );
    }
  );

  return (
    <div className={css.item_container}>
      <ul>{elements}</ul>
    </div>
  );
};

export default CatalogCampers;
