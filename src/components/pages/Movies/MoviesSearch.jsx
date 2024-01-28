import { useState } from "react";
import styles from "../../styles/styles.module.css";

const MoviesSearch = ({ onSubmit }) => {
  const [state, setState] = useState({
    search: "",
  });

  // const handleChange = (e) => {
  //   const value = e.target.value;
  //   setState({
  //     ...state,
  //     search: value,
  //   });
  // };

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setState({
      ...state,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ ...state });
    setState({
      search: "",
    });
  };

  return (
    <form onSubmit={handleSubmit} className={styles.inputSearch}>
      <input
        onChange={handleChange}
        name="search"
        value={state.search}
        placeholder="Search movies"
        required
        className={styles.input}
      ></input>

      <button type="submit" className={styles.btnSearch}>
        Search
      </button>
    </form>
  );
};

export default MoviesSearch;
