import { Link, useLocation } from "react-router-dom";
import styles from "../styles/styles.module.css";

const PostList = ({ items }) => {
  const location = useLocation();

  const elements = items.map(({ id, title }) => (
    <li key={id} className={styles.list}>
      <Link
        state={{ from: location }}
        to={`/movies/${id}`}
        style={{ textDecoration: "none" }}
      >
        {title}
      </Link>
    </li>
  ));
  return <ul className={styles.container2}>{elements}</ul>;
};

PostList.defaultProps = {
  items: [],
};

export default PostList;
