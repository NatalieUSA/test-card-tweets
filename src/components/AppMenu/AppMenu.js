import { NavLink } from 'react-router-dom';
import { menuItems } from './menu-items';
import styles from './app-menu.module.scss';

const AppMenu = () => {
  const elements = menuItems.map(({ id, to, text }) => (
    <li key={id}>
      {/* <NavLink to={to} className={styles.link}>
        {text}
      </NavLink> */}
      <a className={styles.link}> {text}</a>
    </li>
  ));

  return (
    <div>
      <ul className={styles.wrapper}>{elements}</ul>
    </div>
  );
};

export default AppMenu;
