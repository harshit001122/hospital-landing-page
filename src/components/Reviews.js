import React, { useEffect, useState } from "react";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import StarIcon from '@mui/icons-material/Star';
import "./Reviews.css";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);

  useEffect(() => {
    axios
      .get("https://admin.tomedes.com/api/v1/get-reviews?page=1")
      .then((response) => {
        setReviews(response.data.data);
      })
      .catch((error) => {
        console.error("Error fetching the reviews: ", error);
      });
  }, []);

  const goToNextReview = () => {
    setCurrentReviewIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  const goToPreviousReview = () => {
    setCurrentReviewIndex((prevIndex) =>
      prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
    );
  };

  const currentReview = reviews[currentReviewIndex];

  return (
    <div className="reviews-section">
      <h2>Review</h2>
      {currentReview && (
        <Card className="card-content" sx={{ maxWidth: 345, margin: "20px auto" }}>
          <CardContent>
            <Typography className="card-title" gutterBottom variant="h5" component="div">
              {currentReview.Name}
            </Typography>
            <Typography className="card-description" variant="body2" color="text.secondary">
              {currentReview.Reviews}
            </Typography>
            <div className="rating">
              {[...Array(5)].map((_, index) => (
                <StarIcon key={index} className="star" />
              ))}
              <Typography className="rating-label">{currentReview.rating}/5</Typography>
            </div>
          </CardContent>
        </Card>
      )}
      <div>
        <button onClick={goToPreviousReview}>Previous</button>
        <button onClick={goToNextReview}>Next</button>
      </div>
    </div>
  );
};

export default Reviews;
