import React, { useState, useEffect } from "react";
import { fetchMoviesDetails } from "../../services/fetchMovies"; // Updated function name
import {
  useParams,
  useNavigate,
  Link,
  Outlet,
  useLocation,
} from "react-router-dom";
import styles from "../../styles/styles.module.css";

const MovieDetails = () => {
  const [state, setState] = useState({
    items: {},
    isLoading: false,
    error: null,
  });

  const { id } = useParams();
  const navigate = useNavigate();

  const location = useLocation();
  const { from } = location.state;

  useEffect(() => {
    const fetchMovieDetailsData = async () => {
      setState((prevState) => ({
        ...prevState,
        isLoading: true,
      }));
      try {
        const result = await fetchMoviesDetails(id);
        setState((prevState) => ({
          ...prevState,
          items: result,
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
    fetchMovieDetailsData();
  }, [id]);

  const goBack = () => {
    const from = location.state ? location.state.from : "/";
    navigate(from);
  };

  const { items, isLoading, error } = state;

  const genres = items.genres?.map((genre) => genre.name).join(", ");

  return (
    <>
      <div className={styles.buttonMD}>
        <button onClick={goBack} className={styles.btnMD}>
          Go Back
        </button>
      </div>
      <div className={styles.containerMD}>
        {isLoading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>{error}</p>
        ) : (
          <>
            {items.poster_path && (
              <img
                src={`https://image.tmdb.org/t/p/w500/${items.poster_path}`}
                alt={items.title}
              />
            )}
            <h2>{items.title}</h2>

            <ul>
              <span>Genres:</span> {genres || "no information"}
            </ul>

            <p>{items.overview}</p>
            <p>Rating: {items.vote_average}</p>
            <div>
              <div>
                <Link state={{ from }} to={`/movies/${id}/reviews`}>
                  Reviews
                </Link>
              </div>
              <div>
                <Link state={{ from }} to={`/movies/${id}/cast`}>
                  Cast
                </Link>
              </div>
              <Outlet />
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default MovieDetails;
