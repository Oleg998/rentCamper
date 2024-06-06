import { useState } from 'react';
import IconsSprite from '../../helpers/img/symbol-defs.svg';
import css from "./filter-campers.module.css"
import {useDispatch } from 'react-redux';
import LocationFilter from "../Locationfilter/LocatinFilter"
import { setDetails } from '../../redux/filter/filer-slice';
import {FormBtn} from "../FormBtn/FormBtn";
import { toast } from 'react-toastify';



const FilterCampers = () => {
  const INITIAL_STATE = {
    equipment: [],
    type: "",
    transmission:"",
  };

  const [state, setState] = useState({ ...INITIAL_STATE });
  const dispatch = useDispatch(); 
  

  const vehicleEquipmentList = [
    { id: 'airConditioner', name: 'AC', icon: 'icon-wind' , inputName:"equipment"},
    { id: 'automatic', name: 'Automatic', icon: 'icon-automatic', inputName:"transmission"},
    { id: 'kitchen', name: 'Kitchen', icon: 'icon-kitchen',inputName:"equipment" },
    { id: 'TV', name: 'TV', icon: 'icon-tv',inputName:"equipment" },
    { id: 'shower', name: 'Shower/WC', icon: 'icon-shower' ,inputName:"equipment"},
  ];

  const typeVen = [
    { id: 'panelTruck', name: 'Van', icon: 'icon-Button-2' },
    { id: 'fullyIntegrated', name: 'Fully Integrated', icon: 'icon-Button-1'},
    { id: 'alcove', name: 'Alcove', icon: 'icon-camper' },

  ]
  

  const handleChange = ({ target }) => {
    const { name, value, checked, type } = target;

    setState(prevState => {
      if (type === 'checkbox') {
        const updatedEquipment = checked
          ? [...prevState.equipment, value]
          : prevState.equipment.filter(item => item !== value);
        return { ...prevState, equipment: updatedEquipment };
      } else if (type === 'radio') {
        return { ...prevState, [name]: value };
      } else {
        return { ...prevState, [name]: value };
      }
    });
  };

  const handleSubmit = (e) => {
   
    e.preventDefault();
    if  (state.equipment.length === 0 && state.type === "" && state.transmission === ""){return (toast.error('Please select at least one filter ')) }
    dispatch(setDetails(state));
    setState({...INITIAL_STATE})
  };

  const elementsEquipment = vehicleEquipmentList.map(({ id, name, icon ,inputName}) => (
    <label key={id} htmlFor={id} className={css.elementsEquipment_label}>
      <input
         id={id}
         name={inputName}
         type="checkbox"
         value={id}
         checked={state.equipment.includes(id)}
         onChange={handleChange}
         className={css.radio_input}
      />
      <svg className={css.elementsEquipment_svg}>
        <use href={`${IconsSprite}#${icon}`} />
      </svg>
      {name}
    </label>
  ));

  const elementsVen= typeVen.map(({ id, name, icon }) => (
    <label key={id} htmlFor={id} className={css.elementsEquipment_label}>
      <input
       id={id}
       name="type"
       type="radio"
       value={id}
       checked={state.type === id}
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
        <LocationFilter/>
      <form onSubmit={handleSubmit}>
        <p className={css.filter_name}> Filters </p>
        <h3 className={css.filter_titel}> Vehicle equipment</h3>
        <div className={css.equipment_containet}>{elementsEquipment}</div>
        <h3 className={css.filter_titel} >Vehicle type</h3>
        <div className={css.equipment_containet}>{elementsVen}</div>
        <div className={css.filter_btn} ><FormBtn  textBtn={"Search"}/></div>
        
      </form>
    </div>
  );
};

export default FilterCampers;