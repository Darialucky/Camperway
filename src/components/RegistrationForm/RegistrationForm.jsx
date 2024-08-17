import React, { useState } from "react";
import css from "./RegistrationForm.module.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    bookingDate: null,
    comment: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.length > 20) {
      newErrors.name = "Name cannot exceed 20 characters";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.bookingDate) {
      newErrors.bookingDate = "Booking date is required";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (date) => {
    setFormData({
      ...formData,
      bookingDate: date,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form is valid");
      alert("Form submitted successfully!");
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    }
  };

  return (
    <form className={css.formContainer} onSubmit={handleSubmit}>
      <h2 className={css.formTitle}>Book your campervan now</h2>
      <p className={css.formSubtitle}>
        Stay connected! We are always ready to help you.
      </p>
      <div className={css.formInput}>
        <input
          className={`${css.inputField} ${css.nameField}`}
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
        {errors.name && <span className={css.error}>{errors.name}</span>}

        <input
          className={`${css.inputField} ${css.emailField}`}
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        {errors.email && <span className={css.error}>{errors.email}</span>}

        <div className={css.dateWrapper}>
          <DatePicker
            id="bookingDate"
            className={css.dateField}
            selected={formData.bookingDate}
            onChange={handleChange}
            placeholderText="Booking date"
            dateFormat="dd/MM/yyyy"
          />
          <span className={css.calendarIcon}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16 2v2M8 2v2M4 6h16M20 10H4v10h16V10z"
              ></path>
            </svg>
          </span>
        </div>
        {errors.bookingDate && (
          <span className={css.error}>{errors.bookingDate}</span>
        )}

        <textarea
          className={`${css.inputField} ${css.commentField}`}
          name="comment"
          placeholder="Comment"
          value={formData.comment}
          onChange={(e) =>
            setFormData({ ...formData, comment: e.target.value })
          }
        ></textarea>
      </div>
      <button type="submit" className={css.submitButton}>
        Send
      </button>
    </form>
  );
};

export default RegistrationForm;
