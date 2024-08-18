import { useState } from "react";
import css from "./RegistrationForm.module.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { addDays } from "date-fns";

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

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  const handleDateChange = (date) => {
    setFormData({
      ...formData,
      bookingDate: date,
    });

    setErrors((prevErrors) => ({
      ...prevErrors,
      bookingDate: "",
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert("Form submitted successfully!");
      setFormData({
        name: "",
        email: "",
        bookingDate: null,
        comment: "",
      });
    }
  };

  const today = new Date();

  return (
    <form className={css.formContainer} onSubmit={handleSubmit}>
      <h2 className={css.formTitle}>Book your campervan now</h2>
      <p className={css.formSubtitle}>
        Stay connected! We are always ready to help you.
      </p>
      <div className={css.formInput}>
        <div className={css.inputWrapper}>
          <input
            className={`${css.inputField} ${css.nameField} ${
              errors.name ? css.errorBorder : ""
            }`}
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <div className={css.tooltip}>{errors.name}</div>}
        </div>

        <div className={css.inputWrapper}>
          <input
            className={`${css.inputField} ${css.emailField} ${
              errors.email ? css.errorBorder : ""
            }`}
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <div className={css.tooltip}>{errors.email}</div>}
        </div>

        <div className={css.inputWrapper}>
          <div className={css.dateWrapper}>
            <DatePicker
              id="bookingDate"
              className={`${css.dateField} ${
                errors.bookingDate ? css.errorBorder : ""
              }`}
              selected={formData.bookingDate}
              onChange={handleDateChange}
              placeholderText="Booking date"
              dateFormat="dd/MM/yyyy"
              minDate={today}
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
            <div className={css.tooltip}>{errors.bookingDate}</div>
          )}
        </div>

        <textarea
          className={`${css.inputField} ${css.commentField}`}
          name="comment"
          placeholder="Comment"
          value={formData.comment}
          onChange={handleChange}
        ></textarea>
      </div>
      <button type="submit" className={css.submitButton}>
        Send
      </button>
    </form>
  );
};

export default RegistrationForm;
