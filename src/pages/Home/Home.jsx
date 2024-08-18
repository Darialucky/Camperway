import React from "react";
import css from "./Home.module.css";

import Camper1 from "../../assets/Camper1.jpg";
import Camp2 from "../../assets/Camp2.jpg";
import Camper3 from "../../assets/camrer22.jpg";
import Fone from "../../assets/fone.jpg";

export const Home = () => {
  return (
    <div className={css.homeContainer}>
      <header
        className={css.header}
        style={{
          backgroundImage: `url(${Fone})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h1 className={css.headerTitle}>Camperway</h1>
        <p className={css.headerSubtitle}>Explore freedom on wheels</p>
      </header>

      <section className={css.mission}>
        <h2>OUR MISSION</h2>
        <p>
          At Camperway, we are committed to providing an unforgettable
          experience with our top-notch camper rentals. Our fleet is diverse,
          well-maintained, and ready to take you on your next adventure. We
          prioritize customer satisfaction, safety, and comfort, ensuring that
          every journey is enjoyable and memorable.
        </p>
      </section>

      <section className={css.vehicles}>
        <h2>OUR CAMPERS AND MORE</h2>
        <div className={css.vehicleCards}>
          <div className={css.vehicleCard}>
            <img src={Camper1} alt="Road Bear C 23-25" />
            <h3>Road Bear C 23-25</h3>
            <p>
              Embark on an unforgettable journey with the Road Bear C 23-25.
            </p>
          </div>
          <div className={css.vehicleCard}>
            <img src={Camp2} alt="Cruise America C-21" />
            <h3>Cruise America C-21</h3>
            <p>
              Discover the charm of the open road with the Cruise America C-21.
            </p>
          </div>
          <div className={css.vehicleCard}>
            <img src={Camper3} alt="Britz 4 Berth" />
            <h3>Britz 4 Berth</h3>
            <p>
              Experience luxury on the road with the Britz 4 Berth motorhome.
            </p>
          </div>
        </div>
      </section>

      <section className={css.faq}>
        <h2>FAQ</h2>
        <div className={css.faqItem}>
          <h3>What documents do I need to rent a camper?</h3>
          <p>
            To rent a camper, you will need a valid driver’s license, a credit
            card, and a form of identification such as a passport or ID card.
            International renters may also need an International Driving Permit
            (IDP) depending on the country’s regulations.
          </p>
        </div>
        <div className={css.faqItem}>
          <h3>Is there a minimum age requirement for renting a camper?</h3>
          <p>
            Yes, the minimum age requirement is typically 18 years old, but it
            can vary depending on the rental terms.
          </p>
        </div>
        <div className={css.faqItem}>
          <h3>Can I modify or cancel my reservation?</h3>
          <p>
            Yes, you can modify or cancel your reservation, but please check our
            terms and conditions for specific details.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;
