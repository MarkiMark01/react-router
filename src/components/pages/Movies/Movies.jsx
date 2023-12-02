import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import MoviesSearch from "./MoviesSearch";
import { searchPosts } from "../../services/fetchMovies";
import PostList from "../../PostLIst/PostList";
import "../../styles/style.css";

const Movies = () => {
  const [state, setState] = useState({
    items: [],
    loading: false,
    error: null,
  });

  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get("search");

  //   const [search, setSearch] = useState("");
  const [loading] = useState(false);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setState((prevState) => ({
          ...prevState,
          loading: true,
        }));

        const data = await searchPosts(search);

        setState((prevState) => ({
          ...prevState,
          items: data,
        }));
      } catch (error) {
        setState((prevState) => ({
          ...prevState,
          error,
        }));
      } finally {
        setState((prevState) => ({
          ...prevState,
          loading: false,
        }));
      }
    };

    if (search) {
      fetchPosts();
    }
  }, [search]);

  const changeSearch = ({ search }) => {
    // setSearch(search);
    setSearchParams({ search });
  };

  const { items } = state;

  return (
    // <div className="container">
    //   <MoviesSearch onSubmit={changeSearch} />
    //   {items.length > 0 && <PostList items={items} />}
    // </div>
    <div className="container">
      <MoviesSearch onSubmit={changeSearch} />
      {loading ? (
        <p>Loading...</p>
      ) : (
        items.length > 0 && <PostList items={items} />
      )}
    </div>
  );
};
export default Movies;
