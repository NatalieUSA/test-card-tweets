import { Link } from 'react-router-dom';

import styles from './pages.module.scss';

const HomePage = () => {
  return (
    <div className={styles.wrap}>
      <div className={styles.items}>
        <p className={styles.text}>
          What is following? <br />
          Following someone means: <br />
          You are subscribing to their Tweets as a follower.
          <br />
          Find people to follow· <br />
          Select the Follow button.
        </p>
      </div>
      <Link to="/tweets" className={styles.btn}>
        to tweets page
      </Link>
    </div>
  );
};
export default HomePage;
