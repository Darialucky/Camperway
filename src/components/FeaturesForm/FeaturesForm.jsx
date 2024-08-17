import Icon from "../Icon";
import css from "./FeaturesForm.module.css";
import RegistrationForm from "../RegistrationForm/RegistrationForm";

const FeaturesForm = ({ camper }) => {
  return (
    <div className={css.container}>
      {/* Секція з даними та іконками закоментована */}
      {/* <div className={css.details}>
        {camper.adults !== undefined && (
          <p className={css.iconContainer}>
            <Icon
              name="icon-Users"
              className={css.icon}
              width={16}
              height={16}
            />
            {camper.adults} adults
          </p>
        )}
        {camper.transmission && (
          <p className={css.iconContainer}>
            <Icon
              name="icon-avtomatmin"
              className={css.icon}
              width={16}
              height={16}
            />
            {camper.transmission}
          </p>
        )}
        {camper.engine && (
          <p className={css.iconContainer}>
            <Icon
              name="icon-petrol"
              className={css.icon}
              width={16}
              height={16}
            />
            {camper.engine}
          </p>
        )}
        {camper.details?.kitchen && (
          <p className={css.iconContainer}>
            <Icon
              name="icon-kithenmin"
              className={css.icon}
              width={16}
              height={16}
            />
            Kitchen
          </p>
        )}
        {camper.details?.beds !== undefined && (
          <p className={css.iconContainer}>
            <Icon name="icon-bed" className={css.icon} width={16} height={16} />
            {camper.details.beds} beds
          </p>
        )}
        {camper.details?.airConditioner && (
          <p className={css.iconContainer}>
            <Icon
              name="icon-acmin"
              className={css.icon}
              width={16}
              height={16}
            />
            AC
          </p>
        )}
      </div> */}
      <div className={css.formSection}>
        <RegistrationForm />
      </div>
    </div>
  );
};

export default FeaturesForm;
