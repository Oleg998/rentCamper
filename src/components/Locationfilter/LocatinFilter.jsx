
import { useDispatch } from "react-redux";
import css from "./locationfilter.module.css"
import {setFilterLocation} from "../../redux/filter/filer-slice"
import Sprite from "../../helpers/img/symbol-defs.svg"

const LocationFilter = ()=>{
    const dispatch = useDispatch();
const handleChange=(e)=>{
        dispatch(setFilterLocation(e.target.value))
    }

    return(
        <div className={css.location_contaiter}>
  
  <label htmlFor="local_input" className={css.location_titel}>Location</label>
  <div className={css.input_container}>
    <input
      id="local_input"
      className={css.input}
      type="text"
      name="location"
      onChange={handleChange}
      placeholder="City"
    />
    <svg className={css.item_svg}>
      <use
        className={css.item_use_local}
        href={`${Sprite}#icon-map-pin`}
      ></use>
    </svg>
  </div>
</div>
       
    )

}

export default LocationFilter