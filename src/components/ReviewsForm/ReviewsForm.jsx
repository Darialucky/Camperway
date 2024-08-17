import { useState, useEffect } from "react";
import css from "./ReviewsForm.module.css";
import RegistrationForm from "../RegistrationForm/RegistrationForm";

const ReviewsForm = ({ camper }) => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    if (camper.reviews) {
      setReviews(camper.reviews);
    }
  }, [camper.reviews]);

  return (
    <div className={css.container}>
      <div className={css.reviewsContainer}>
        {reviews.length > 0 ? (
          <div className={css.reviewsList}>
            {reviews.map((review, index) => (
              <div key={index} className={css.reviewItem}>
                <div className={css.reviewHeader}>
                  <div className={css.avatar}>
                    {review.reviewer_name.charAt(0)}
                  </div>
                  <div className={css.nameAndRating}>
                    <h4 className={css.reviewerName}>{review.reviewer_name}</h4>
                    <div className={css.rating}>
                      {Array.from({ length: 5 }, (_, i) => (
                        <span
                          key={i}
                          style={{
                            fontSize: "16px",
                            color:
                              i < review.reviewer_rating
                                ? "#f39c12"
                                : "#e0e0e0",
                          }}
                        >
                          ★
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <p className={css.comment}>{review.comment}</p>
              </div>
            ))}
          </div>
        ) : (
          <p className={css.noReviews}>No reviews available</p>
        )}
      </div>
      <div className={css.registrationContainer}>
        <RegistrationForm />
      </div>
    </div>
  );
};

export default ReviewsForm;
