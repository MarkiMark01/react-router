import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getMovieReviews } from "../../services/fetchMovies";
import styles from "../../styles/styles.module.css";

const Reviews = () => {
  const [state, setState] = useState({
    items: [],
    isLoading: false,
    error: null,
  });

  const { id: movieId } = useParams();

  useEffect(() => {
    const fetchMovieReviews = async () => {
      setState((prevState) => ({
        ...prevState,
        isLoading: true,
      }));
      try {
        const result = await getMovieReviews(movieId);
        console.log("Result:", result);
        setState((prevState) => ({
          ...prevState,
          items: result.results,
        }));
      } catch (error) {
        setState((prevState) => ({
          ...prevState,
          error: error.message,
        }));
      } finally {
        setState((prevState) => ({
          ...prevState,
          isLoading: false,
        }));
      }
    };
    fetchMovieReviews();
  }, [movieId]);

  const { items, isLoading, error } = state;

  return (
    <div className={styles.reviews}>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {items.length > 0 ? (
        items.map((item, index) => (
          <div key={index}>
            <p className={styles.reviewsUser}>User: {item.author}</p>
            <p className={styles.reviewsContent}>{item.content}</p>
          </div>
        ))
      ) : (
        <p>Sorry, no comments yet...</p>
      )}
    </div>
  );
};

export default Reviews;
