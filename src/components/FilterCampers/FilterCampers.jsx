import { useState } from 'react';
import IconsSprite from '../../helpers/img/symbol-defs.svg';
import css from "./filter-campers.module.css"
import {useDispatch } from 'react-redux';

import { setDetails } from '../../redux/filter/filer-slice';

const FilterCampers = () => {
  const INITIAL_STATE = {
    equipment: [],
    type: "",
    transmission:"",
  };

  const [state, setState] = useState({ ...INITIAL_STATE });
  const dispatch = useDispatch(); 


  const vehicleEquipmentList = [
    { id: 'airConditioner', name: 'AC', icon: 'icon-wind' , inpudName:"equipment"},
    { id: 'automatic', name: 'Automatic', icon: 'icon-automatic', inpudName:"transmission"},
    { id: 'kitchen', name: 'Kitchen', icon: 'icon-kitchen',inpudName:"equipment" },
    { id: 'TV', name: 'TV', icon: 'icon-tv',inpudName:"equipment" },
    { id: 'shower', name: 'Shower/WC', icon: 'icon-shower' ,inpudName:"equipment"},
  ];
  
  const handleChange = ({ target }) => {
    const { name, value, checked } = target;

    setState(prevState => {
        if (name === 'equipment') {
            const updatedEquipment = checked
                ? [...prevState.equipment, value]
                : prevState.equipment.filter(item => item !== value);

            return { ...prevState, equipment: updatedEquipment };
        } else {
            return { ...prevState, [name]: value };
        }
    });
};

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setDetails(state));
  };

  const elementsEquipment = vehicleEquipmentList.map(({ id, name, icon ,inpudName}) => (
    <label key={id} htmlFor={id} className={css.elementsEquipment_label}>
      <input
        id={id}
        name={inpudName}
        type="checkbox"
        value={id}
        onChange={handleChange}
        className={css.radio_input}
      />
      <svg className={css.elementsEquipment_svg}>
        <use href={`${IconsSprite}#${icon}`} />
      </svg>
      {name}
    </label>
  ));

  return (
    <div className={css.filter_wrraper}>
      <form onSubmit={handleSubmit}>
        <p> Filters </p>
        <h3> Vehicle equipment</h3>
        <div className={css.equipment_containet}>{elementsEquipment}</div>
        <button type='submit'>Apply Filters</button>
      </form>
    </div>
  );
};

export default FilterCampers;