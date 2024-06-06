import css from "./home-page.module.css"
import backgroundImage from "../../../helpers/img/truck-camper-stop-action-g7775e5746_1280.jpg"
const HomePage= ()=>{
    return (
        <div className={css.home_page} style={{ backgroundImage: `url(${backgroundImage})` }} >
          <header>
            <h1>Welcome to Cemper Rentals</h1>
           
          </header>
          <main>
            <section className={css.featured_listings}>
              <h2>Featured Listings</h2>
            
            </section>
            <section className={css.how_it_works}>
              <h2>How It Works</h2>
             
            </section>
          </main>
          <footer>
            <p>&copy; {new Date().getFullYear()} Cemper Rentals. All rights reserved.</p>
          </footer>
        </div>
      );
    }


export default HomePage