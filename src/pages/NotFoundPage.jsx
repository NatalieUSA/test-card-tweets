import { Link } from 'react-router-dom';
import styles from './pages.module.scss';
const NotFoundPage = () => {
  return (
    <div className={styles.items}>
      <h2 className={styles.text}>Page NOT Found </h2>
      <Link to="/" className={styles.btn}>
        to Home page
      </Link>
    </div>
  );
};
export default NotFoundPage;
