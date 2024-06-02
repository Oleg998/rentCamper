import IconsSprite from '../../helpers/img/symbol-defs.svg';
import css from "./filter-campers.module.css"
const FilterCampers = () => {
  const vehicleEquipmentList = [
    { id: 'airConditioner', name: 'AC', icon: 'icon-wind' },
    { id: 'transmission', name: 'Automatic', icon: 'icon-automatic' },
    { id: 'kitchen', name: 'Kitchen', icon: 'icon-kitchen' },
    { id: 'TV', name: 'TV', icon: 'icon-tv' },
    { id: 'shower', name: 'Shower/WC', icon: 'icon-shower' },
  ];
  const elementsEquipment = vehicleEquipmentList.map(({ id, name, icon }) => (
    <label key={id} htmlFor={id} className={css.elementsEquipment_label} >
      <input id={id} name="vehicleEquipment" type="checkbox" value={id}  className={css.radio_input}/>
      <svg className={css.elementsEquipment_svg}>
        <use href={`${IconsSprite}#${icon}`} />
      </svg>
      {name}
    </label>
  ));

  return (
    <div className={css.filter_wrraper}>  <form>
    <p> Filters </p>
    <h3> Vehicle equipment</h3>
      <div className={css.equipment_containet }> {elementsEquipment}</div>
  </form></div>
   
  );
};

export default FilterCampers;
