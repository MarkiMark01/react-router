import { NavLink } from "react-router-dom";
import styles from '../styles/styles.module.css';
import items from './items';

const getClassName = ({ isActive }) => {
    const className = isActive ? `${styles.link} ${styles.active}` : styles.link;
    return className;
}

const Header = () => {

    const elements = items.map(({ id, to, text }) => (
        <li key={id}>
            <NavLink className={getClassName} to={to}>{text}</NavLink>
        </li>
    ))

    return (
        <div className={styles.header}>
            <ul className={styles.nav}>
                {elements}
            </ul>
        </div>
    )
}

export default Header;