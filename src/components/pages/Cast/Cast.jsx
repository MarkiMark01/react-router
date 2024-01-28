import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getMovieCast } from "../../services/fetchMovies";
import styles from "../../styles/styles.module.css";

const MovieCast = () => {
  const [movieCast, setMovieCast] = useState([]);
  const { id: movieId } = useParams();

  useEffect(() => {
    const movieCastFetch = async () => {
      try {
        const data = await getMovieCast(movieId);
        setMovieCast(data);
      } catch (error) {
        console.log(error);
      }
    };
    if (movieId) {
      movieCastFetch();
    }
  }, [movieId]);

  const { cast } = movieCast;

  const element = cast?.map(({ cast_id, name, character, profile_path }) => (
    <li key={cast_id} className={styles.castLi}>
      {profile_path ? (
        <img
          src={`https://image.tmdb.org/t/p/w185${profile_path}`}
          alt={name}
        />
      ) : (
        <img
          src={
            "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg?20200913095930"
          }
          alt={name}
          width={185}
        />
      )}
      <div>
        <p className={styles.castTitles}>{name}</p>
        <p className={styles.castTitlesP}>
          <span>as</span> {character}
        </p>
      </div>
    </li>
  ));
  return cast && cast.length > 0 ? (
    <ul className={styles.cast} style={{ textDecoration: "none" }}>
      {element}
    </ul>
  ) : (
    <p>Unfortunately, there is no information about the actors yet...</p>
  );
};

export default MovieCast;
