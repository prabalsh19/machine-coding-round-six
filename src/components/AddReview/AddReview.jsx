/* eslint-disable react/prop-types */
import { useState } from "react";
import "./AddReview.css";
import { useRestaurantContext } from "../../context/restaurantContext";
export const AddReview = ({ id, setShowAddReviewModal }) => {
  const { setRestaurantsDb } = useRestaurantContext();
  const [reviewData, setReviewData] = useState({ rating: 5, comment: "" });
  const submitReviewHandler = () => {
    setRestaurantsDb((prev) => {
      return prev.map((restaurant) => {
        console.log(restaurant);
        return restaurant.id == id
          ? { ...restaurant, ratings: [...restaurant.ratings, reviewData] }
          : restaurant;
      });
    });
    setShowAddReviewModal(false);
  };

  return (
    <div className="add-review">
      <span className="cross-icon" onClick={() => setShowAddReviewModal(false)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="1em"
          viewBox="0 0 512 512"
        >
          <path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c-9.4 9.4-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47-47-47c-9.4-9.4-24.6-9.4-33.9 0z" />
        </svg>
      </span>
      <div className="heading">
        <h2>Add Your Review</h2>
        <hr />
      </div>
      <div className="review-inputs">
        <div className="review-input">
          <label htmlFor="">Rating</label>
          <select
            value={reviewData.rating}
            onChange={(e) =>
              setReviewData((prev) => ({ ...prev, rating: e.target.value }))
            }
            name=""
            id=""
          >
            <option value="5">5</option>
            <option value="4">4</option>
            <option value="3">3</option>
            <option value="2">2</option>
            <option value="1">1</option>
          </select>
        </div>
        <div className="review-input">
          <label htmlFor="">Comment</label>
          <input
            value={reviewData.comment}
            onChange={(e) =>
              setReviewData((prev) => ({ ...prev, comment: e.target.value }))
            }
            type="text"
          />
        </div>
      </div>
      <button className="submit-btn" onClick={submitReviewHandler}>
        Submit
      </button>
    </div>
  );
};
