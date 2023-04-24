import UsersTweets from 'components/UsersTweets/UsersTweets';
import { Link } from 'react-router-dom';

const TweetsPage = () => {
  return (
    <div>
      <Link to="/">back to Home page</Link>

      <UsersTweets />
    </div>
  );
};
export default TweetsPage;
