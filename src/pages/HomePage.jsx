import { Link } from 'react-router-dom';
import styles from '../components/shared/Button/button.module.scss';

const HomePage = () => {
  return (
    <div>
      <p>Finding people to follow· Select the Follow button.</p>
      <p>
        What is following? Following someone means: You are subscribing to their
        Tweets as a follower.
      </p>
      <Link to="/tweets" className={styles.btn}>
        to tweets page
      </Link>
    </div>
  );
};
export default HomePage;
