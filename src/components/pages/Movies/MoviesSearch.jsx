import "../../styles/style.css";
import { useState } from "react";

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
    <form onSubmit={handleSubmit}>
      <input
        onChange={handleChange}
        name="search"
        value={state.search}
        // placeholder="search"
        required
      ></input>

      <button type="submit">Search</button>
    </form>
  );
};

export default MoviesSearch;
