import style from "./favorites-page.module.css";
import css from "../../CatalogCampers/catalog-campers.module.css";
import { useSelector, useDispatch } from "react-redux";
import { removeFavorites } from "../../../redux/camper/favorites-slice";
import { selectFavorites } from "../../../redux/camper/campers-selector";
import sprite from "../../../helpers/img/symbol-defs.svg";
import { capitalizeFirstLetter } from "../../../helpers/ToUpFistCase";

const FavoritesPage = () => {
  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites);

  const handleFavoriteToggle = (item) => {
    dispatch(removeFavorites(item._id));
  };

  const elements = favorites.map((item) => {
    const {
      _id,
      name,
      price,
      rating,
      location,
      description,
      adults,
      transmission,
      reviews,
      engine,
      details: { kitchen, beds, airConditioner },
      gallery,
    } = item;

    return (
      <li key={_id} className={css.item}>
        <img className={css.item_img} src={gallery[0]} alt={name} />
        <div className={css.item_container_info}>
          <div className={css.name_price}>
            <h2>{name}</h2>
            <h2>
              &#8364;{price}
              <button className={css.faviriteBtn} type="button" onClick={() => handleFavoriteToggle(item)}>
                <svg className={css.item_svg_favorit}>
                  <use href={`${sprite}#icon-Property-1Default`}></use>
                </svg>
              </button>
            </h2>
          </div>
          <div className={css.rating_local}>
            <svg className={css.item_svg}>
              <use href={`${sprite}#icon-Raiting`}></use>
            </svg>
            <p className={css.rating}>
              {rating} ({reviews.length} Reviews)
            </p>
            <svg className={css.item_svg}>
              <use href={`${sprite}#icon-map-pin`}></use>
            </svg>
            <p>{location}</p>
          </div>
          <p className={css.description}>{description}</p>
          <ul className={css.details_list}>
            <li className={css.item_details}>
              <span className={css.span_icons}>
                <svg className={css.icon_svg}>
                  <use href={`${sprite}#icon-Users`}></use>
                </svg>
                {adults} adults
              </span>
            </li>
            <li className={css.item_details}>
              <span className={css.span_icons}>
                <svg className={css.icon_svg}>
                  <use href={`${sprite}#icon-Container`}></use>
                </svg>
                {capitalizeFirstLetter(transmission)}
              </span>
            </li>
            <li className={css.item_details}>
              <span className={css.span_icons}>
                <svg className={css.icon_svg}>
                  <use href={`${sprite}#icon-Vertical-container`}></use>
                </svg>
                {capitalizeFirstLetter(engine)}
              </span>
            </li>
            {kitchen && (
              <li className={css.item_details}>
                <span className={css.span_icons}>
                  <svg className={css.icon_svg}>
                    <use href={`${sprite}#icon-Horizontal-container`}></use>
                  </svg>
                  Kitchen
                </span>
              </li>
            )}
            <li className={css.item_details}>
              <span className={css.span_icons}>
                <svg className={css.icon_svg}>
                  <use href={`${sprite}#icon-Container-1`}></use>
                </svg>
                {beds} beds
              </span>
            </li>
            {airConditioner && (
              <li className={css.item_details}>
                <span className={css.span_icons}>
                  <svg className={css.icon_svg}>
                    <use href={`${sprite}#icon-wind`}></use>
                  </svg>
                  AC
                </span>
              </li>
            )}
          </ul>
        </div>
      </li>
    );
  });

  return (
    <div className={style.wrraper}>
      {favorites.length > 0 ? (
        <ul className={style.favorites_list}>{elements}</ul>
      ) : (
        <h2 className={style.text} >You have no favorite campers</h2>
      )}
    </div>
  );
};

export default FavoritesPage;
