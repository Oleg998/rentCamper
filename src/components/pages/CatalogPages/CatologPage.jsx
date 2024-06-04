import css from "./catalog-page.module.css"
import CatalogCampers from "../../../components/CatalogCampers/CatalogCampers"
import FilterCampers from "../../../components/FilterCampers/FilterCampers"

const CatalogPage= ()=>{
    return (
        <div className={css.catalog_wraper}>
         <div className={css.filter_containet}><FilterCampers/></div>
        
        <div className={css.catalog_containet}><CatalogCampers/></div>
        
        
        </div>
    )
}

export default CatalogPage