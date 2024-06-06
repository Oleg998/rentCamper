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
            {features.details.water ? (
              <li className={css.item_details}>
                <span className={css.span_icons}>
                  <svg className={css.icon_svg}>
                    <use
                      className={css.icon_use_1}
                      href={`${sprite}#icon-water`}
                    ></use>
                  </svg>
                  
                </span>
              </li>
            ) : (
              <></>
            )}
             {features.details.gas ? (
              <li className={css.item_details}>
                <span className={css.span_icons}>
                  <svg className={css.icon_svg}>
                    <use
                      className={css.icon_use_1}
                      href={`${sprite}#icon-gas`}
                    ></use>
                  </svg>
                  
                </span>
              </li>
            ) : (
              <></>
            )}
                   {features.details.toilet ? (
              <li className={css.item_details}>
                <span className={css.span_icons}>
                  <svg className={css.icon_svg}>
                    <use
                      className={css.icon_use_1}
                      href={`${sprite}#icon-toilet`}
                    ></use>
                  </svg>
                  
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
            <p className={style.info_subtitel}>Form</p>
            <p className={style.info_subtitel} >{capitalizeFirstLetter(features.form)}</p>
          </li>
          <li className={style.features_info_item}>
            <p className={style.info_subtitel}>Length</p>
            <p className={style.info_subtitel}>{features.length}</p>
          </li>
          <li className={style.features_info_item}>
            <p className={style.info_subtitel}>Width</p>
            <p className={style.info_subtitel}>{features.width}</p>
          </li>
          <li className={style.features_info_item}>
            <p className={style.info_subtitel}>Height</p>
            <p className={style.info_subtitel}>{features.height}</p>
          </li>
          <li className={style.features_info_item}>
            <p className={style.info_subtitel}>Tank</p>
            <p className={style.info_subtitel}>{features.tank}</p>
          </li>
          <li className={style.features_info_item}>
            <p className={style.info_subtitel}>Consumption</p>
            <p className={style.info_subtitel}>{features.consumption}</p>
          </li>
        </ul>
      </div>
      <Form/>
    </div>
  );
};

export default FeaturesComponent;
