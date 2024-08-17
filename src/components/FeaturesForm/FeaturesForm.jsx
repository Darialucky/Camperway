import css from "./FeaturesForm.module.css";
import Icon from "../Icon";
import RegistrationForm from "../RegistrationForm/RegistrationForm";

const FeaturesForm = ({ camper }) => {
  return (
    <div className={css.featuresFormContainer}>
      <div className={css.featuresForm}>
        <div className={css.iconsContainer}>
          <p className={css.detailItem}>
            <Icon
              name="icon-Users"
              className={css.icon}
              width={20}
              height={20}
            />
            {camper.adults} adults
          </p>
          <p className={css.detailItem}>
            <Icon
              name="icon-avtomatmin"
              className={css.icon}
              width={20}
              height={20}
            />
            Automatic
          </p>
          <p className={css.detailItem}>
            <Icon
              name="icon-petrol"
              className={css.icon}
              width={20}
              height={20}
            />
            Petrol
          </p>
          <p className={css.detailItem}>
            <Icon
              name="icon-kithenmin"
              className={css.icon}
              width={20}
              height={20}
            />
            Kitchen
          </p>
          <p className={css.detailItem}>
            <Icon name="icon-bed" className={css.icon} width={20} height={20} />
            {camper.details.beds} beds
          </p>
          <p className={css.detailItem}>
            <Icon
              name="icon-acmin"
              className={css.icon}
              width={20}
              height={20}
            />
            AC
          </p>
          <p className={css.detailItem}>
            <Icon name="icon-air" className={css.icon} width={20} height={20} />
            {camper.details.airConditioner} air conditioner
          </p>
          <p className={css.detailItem}>
            <Icon
              name="icon-tvmin"
              className={css.icon}
              width={20}
              height={20}
            />
            {camper.details.TV} TV
          </p>
          <p className={css.detailItem}>
            <Icon name="icon-cd" className={css.icon} width={20} height={20} />
            CD
          </p>
          <p className={css.detailItem}>
            <Icon
              name="icon-radio"
              className={css.icon}
              width={20}
              height={20}
            />
            Radio
          </p>
          <p className={css.detailItem}>
            <Icon
              name="icon-shower"
              className={css.icon}
              width={20}
              height={20}
            />
            Shower
          </p>
          <p className={css.detailItem}>
            <Icon
              name="icon-toilet"
              className={css.icon}
              width={20}
              height={20}
            />
            {camper.details.toilet} Toilet
          </p>
          <p className={css.detailItem}>
            <Icon
              name="icon-freezer"
              className={css.icon}
              width={20}
              height={20}
            />
            {camper.details.freezer} Freezer
          </p>
          <p className={css.detailItem}>
            <Icon name="icon-hob" className={css.icon} width={20} height={20} />
            {camper.details.hob} Hob
          </p>
          <p className={css.detailItem}>
            <Icon
              name="icon-microwave"
              className={css.icon}
              width={20}
              height={20}
            />
            {camper.details.microwave} Microwave
          </p>
          <p className={css.detailItem}>
            <Icon name="icon-gas" className={css.icon} width={20} height={20} />
            Gas
          </p>
          <p className={css.detailItem}>
            <Icon
              name="icon-water"
              className={css.icon}
              width={20}
              height={20}
            />
            Water
          </p>
        </div>
        <div className={css.vehicleDetails}>
          <h3 className={css.detailsTitle}>Vehicle Details</h3>
          <div className={css.detailsSection}>
            <p>
              <span className={css.detailsLabel}>Form:</span>{" "}
              <span className={css.detailsValue}>{camper.form}</span>
            </p>
            <p>
              <span className={css.detailsLabel}>Length:</span>{" "}
              <span className={css.detailsValue}>{camper.length}</span>
            </p>
            <p>
              <span className={css.detailsLabel}>Width:</span>{" "}
              <span className={css.detailsValue}>{camper.width}</span>
            </p>
            <p>
              <span className={css.detailsLabel}>Height:</span>{" "}
              <span className={css.detailsValue}>{camper.height}</span>
            </p>
            <p>
              <span className={css.detailsLabel}>Tank:</span>{" "}
              <span className={css.detailsValue}>{camper.tank}</span>
            </p>
            <p>
              <span className={css.detailsLabel}>Consumption:</span>{" "}
              <span className={css.detailsValue}>{camper.consumption}</span>
            </p>
          </div>
        </div>
      </div>
      <div className={css.registrationContainer}>
        <RegistrationForm />
      </div>
    </div>
  );
};

export default FeaturesForm;
