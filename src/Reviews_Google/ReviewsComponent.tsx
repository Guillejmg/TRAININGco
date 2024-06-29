import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { MdOutlineNavigateNext } from "react-icons/md";
import { MdNavigateBefore } from "react-icons/md";
import { InstagramEmbed } from "react-social-media-embed";
import axios from "axios";
import "./GoogleReviews.css";

// Define types for reviews
interface Review {
  author_name: string;
  profile_photo_url: string;
  rating: number;
  text: string;
}

const GoogleReviews: React.FC = () => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const placeId = "ChIJi2SGmFL3cg0RoXTooxLvh1w";

  const colors = {
    orange: "#F2C265",
    grey: "a9a9a9",
  };

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/get-reviews?placeid=${placeId}&language=es`
        );
        if (response.data.result && response.data.result.reviews) {
          const filteredReviews = response.data.result.reviews.filter(
            (review: Review) => review.rating > 4
          );
          setReviews(filteredReviews);
        } else {
          console.log("No se encontraron reseñas.");
        }
      } catch (error) {
        console.error("Error fetching Google reviews:", error);
      }
    };

    fetchReviews();
  }, [placeId]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 < reviews.length - 2 ? prevIndex + 1 : prevIndex
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : prevIndex));
  };

  const visibleReviews = reviews.slice(currentIndex, currentIndex + 3);
  return (
    <div className="main-container">
      <h2 className="title">
        Lo que la gente opina de <span> TrainningCO</span>
      </h2>
      {reviews.length > 0 ? (
        <div className="reviews-carousel">
          <button
            onClick={handlePrev}
            className="nav-button"
            disabled={currentIndex === 0}
          >
            <MdNavigateBefore />
          </button>
          <div className="reviews-container">
            {visibleReviews.map((review, index) => (
              <div className="review-card" key={index}>
                <div className="review-header">
                  <img
                    src={review.profile_photo_url}
                    alt={review.author_name}
                    className="review-avatar"
                  />
                  <div>
                    <p className="review-author">{review.author_name}</p>
                    <div className="review-rating">
                      <FaStar color={colors.orange} />
                      <span>{review.rating}</span>
                    </div>
                  </div>
                </div>
                <p className="review-text">{review.text}</p>
              </div>
            ))}
          </div>
          <button
            onClick={handleNext}
            className="nav-button"
            disabled={currentIndex + 3 >= reviews.length}
          >
            <MdOutlineNavigateNext />
          </button>
        </div>
      ) : (
        <p>No hay reseñas disponibles.</p>
      )}
      <div>
        <InstagramEmbed url="https://www.instagram.com/thetrainingco/" />
      </div>
    </div>
  );
};

export default GoogleReviews;
