import css from "./main-menu.module.css"
import { NavLink } from "react-router-dom"
const MainMenu = ()=> {

    return (
        <ul className={css.menu}>
            <li>
                <NavLink to="/" className={css.link} >Home Page</NavLink>
            </li>
            <li>
                <NavLink to="/catalog" className={css.link} >Catalog</NavLink>
            </li>
            <li>
                <NavLink to="/favorites" className={css.link} > Favorites</NavLink>
            </li>
        </ul>
    )

}


export default MainMenu