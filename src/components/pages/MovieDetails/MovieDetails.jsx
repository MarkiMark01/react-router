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
            <div className={styles.boxMD}>
              {items.poster_path && (
                <img
                  src={`https://image.tmdb.org/t/p/w500/${items.poster_path}`}
                  alt={items.title}
                  width={500}
                  height={500}
                />
              )}
              <div className={styles.describeMD}>
                <span className={styles.titleMD}>{items.title}</span>

                <ul className={styles.listDescribe}>
                  <span>Genres: {genres || "no information"}</span>
                </ul>

                <span style={{ textAlign: "justify" }}>{items.overview}</span>
                <span className={styles.rating}>
                  Rating: {items.vote_average}
                </span>
              </div>
            </div>
            <div className={styles.links}>
              <div className={styles.linkMD}>
                <Link
                  state={{ from }}
                  to={`/movies/${id}/reviews`}
                  style={{ textDecoration: "none", color: "#fff" }}
                >
                  Reviews
                </Link>
              </div>
              <div className={styles.linkMD}>
                <Link
                  state={{ from }}
                  to={`/movies/${id}/cast`}
                  style={{ textDecoration: "none", color: "#fff" }}
                >
                  Cast
                </Link>
              </div>
            </div>
            <Outlet />
          </>
        )}
      </div>
    </>
  );
};

export default MovieDetails;
