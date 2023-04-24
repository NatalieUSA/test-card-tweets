import UsersTweets from 'components/UsersTweets/UsersTweets';
import { Link } from 'react-router-dom';

import styles from './pages.module.scss';

const TweetsPage = () => {
  return (
    <div>
      <Link to="/" className={styles.btn}>
        back
      </Link>

      <UsersTweets />
    </div>
  );
};
export default TweetsPage;
