import style from './features-component.module.css';
import css from '../CatalogCampers/catalog-campers.module.css';
import sprite from '../../helpers/img/symbol-defs.svg';
import { capitalizeFirstLetter } from '../../helpers/ToUpFistCase';
import Form from '../../components/Form/Form';
const FeaturesComponent = ({ features }) => {
  return (
    <div className={style.wrraper}>
      <div className={style.elements_container}>
        <div className={style.feature_item}>
          <ul className={css.details_list}>
            <li className={css.item_details}>
              <span className={css.span_icons}>
                <svg className={css.icon_svg}>
                  <use
                    className={css.icon_use_1}
                    href={`${sprite}#icon-Users`}
                  ></use>
                </svg>
                {features.adults} adults
              </span>
            </li>
            <li className={css.item_details}>
              <span className={css.span_icons}>
                <svg className={css.icon_svg}>
                  <use
                    className={css.icon_use}
                    href={`${sprite}#icon-Container`}
                  ></use>
                </svg>
                {capitalizeFirstLetter(features.transmission)}
              </span>
            </li>
            <li className={css.item_details}>
              <span className={css.span_icons}>
                <svg className={css.icon_svg}>
                  <use
                    className={css.icon_use_1}
                    href={`${sprite}#icon-Vertical-container`}
                  ></use>
                </svg>
                {capitalizeFirstLetter(features.engine)}
              </span>
            </li>
            {features.details.kitchen && (
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
            )}
            <li className={css.item_details}>
              <span className={css.span_icons}>
                <svg className={css.icon_svg}>
                  <use
                    className={css.icon_use}
                    href={`${sprite}#icon-Container-1`}
                  ></use>
                </svg>
                {features.beds} beds
              </span>
            </li>
            {features.details.airConditioner && (
              <li className={css.item_details}>
                <span className={css.span_icons}>
                  <svg className={css.icon_svg}>
                    <use
                      className={css.icon_use_1}
                      href={`${sprite}#icon-wind`}
                    ></use>
                  </svg>
                  AC
                </span>
              </li>
            )}
            {features.details.CD ? (
              <li className={css.item_details}>
                <span className={css.span_icons}>
                  <svg className={css.icon_svg}>
                    <use
                      className={css.icon_use_1}
                      href={`${sprite}#icon-CD`}
                    ></use>
                  </svg>
                  CD
                </span>
              </li>
            ) : (
              <></>
            )}
            {features.details.radio ? (
              <li className={css.item_details}>
                <span className={css.span_icons}>
                  <svg className={css.icon_svg}>
                    <use
                      className={css.icon_use_1}
                      href={`${sprite}#icon-radio`}
                    ></use>
                  </svg>
                  Radio
                </span>
              </li>
            ) : (
              <></>
            )}
            {features.details.hob ? (
              <li className={css.item_details}>
                <span className={css.span_icons}>
                  <svg className={css.icon_svg}>
                    <use
                      className={css.icon_use_1}
                      href={`${sprite}#icon-hob`}
                    ></use>
                  </svg>
                  {features.details.hob} hob
                </span>
              </li>
            ) : (
              <></>
            )}

            {features.details.shower ? (
              <li className={css.item_details}>
                <span className={css.span_icons}>
                  <svg className={css.icon_svg}>
                    <use
                      className={css.icon_use_1}
                      href={`${sprite}#icon-shower`}
                    ></use>
                  </svg>
                  Shower
                </span>
              </li>
            ) : (
              <></>
            )}
            {features.details.TV ? (
              <li className={css.item_details}>
                <span className={css.span_icons}>
                  <svg className={css.icon_svg}>
                    <use
                      className={css.icon_use_1}
                      href={`${sprite}#icon-tv`}
                    ></use>
                  </svg>
                  TV
                </span>
              </li>
            ) : (
              <></>
            )}
          </ul>
        </div>
        <h3 className={style.features_titel}>Vehicle details</h3>

        <ul className={style.features_info}>
          <li className={style.features_info_item}>
            <p>Form</p>
            <p>{capitalizeFirstLetter(features.form)}</p>
          </li>
        </ul>
      </div>
      <Form/>
    </div>
  );
};

export default FeaturesComponent;
