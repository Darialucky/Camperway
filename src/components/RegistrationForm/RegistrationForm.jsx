import React from "react";
import css from "./RegistrationForm.module.css";

const RegistrationForm = () => {
  return (
    <div className={css.formContainer}>
      <h2 className={css.formTitle}>Book your campervan now</h2>
      <p className={css.formSubtitle}>
        Stay connected! We are always ready to help you.
      </p>
      <div className={css.formInput}>
        <input
          className={`${css.inputField} ${css.nameField}`}
          type="text"
          placeholder="Name"
        />
        <input
          className={`${css.inputField} ${css.emailField}`}
          type="email"
          placeholder="Email"
        />
        <input
          className={`${css.inputField} ${css.dateField}`}
          type="text"
          placeholder="Booking date"
        />
        <textarea
          className={`${css.inputField} ${css.commentField}`}
          placeholder="Comment"
        ></textarea>
      </div>
      <button type="button" className={css.submitButton}>
        Send
      </button>
    </div>
  );
};

export default RegistrationForm;
