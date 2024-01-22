import React, { useState, useEffect } from "react";
import { fetchMovies } from "../../services/fetchMovies";
import "../../styles/style.css";
import PostList from "../../PostList/PostList";

const Home = () => {
  const [state, setState] = useState({
    items: [],
    isLoading: false,
    error: null,
    page: 1,
  });

  useEffect(() => {
    const fetchPosts = async () => {
      setState((prevState) => ({
        ...prevState,
        isLoading: true,
      }));
      try {
        const result = await fetchMovies(state.page);
        setState((prevState) => ({
          ...prevState,
          items: [...prevState.items, ...result.results],
        }));
      } catch (error) {
        setState((prevState) => ({
          ...prevState,
          error,
        }));
      } finally {
        setState((prevState) => ({
          ...prevState,
          isLoading: false,
        }));
      }
    };
    fetchPosts();
  }, [state.page]);

  const handleLoadMore = () => {
    setState((prevState) => ({
      ...prevState,
      page: prevState.page + 1,
    }));
  };

  const { items, isLoading, error } = state;

  return (
    <div className="container">
      <h1>Movie List</h1>
      {items.length > 0 && <PostList items={items} />}
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <button type="button" onClick={handleLoadMore}>
        Load more
      </button>
    </div>
  );
};

export default Home;
