import css from "./catalog-page.module.css"
import CatalogCampers from "../../../components/CatalogCampers/CatalogCampers"

const CatalogPage= ()=>{
    return (
        <div>
        <h1 className={css.titel}>Catalog Page</h1>
        <CatalogCampers/>
        </div>
    )
}

export default CatalogPage