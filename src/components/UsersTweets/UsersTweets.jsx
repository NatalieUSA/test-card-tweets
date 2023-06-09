import { useEffect, useState } from 'react';
import { getUsers } from 'components/shared/api/api-users';
import CardList from './CardList/CardList';

import { ErrorMessage } from 'components/shared/ErrorMessage/ErrorMessage';
import { Loader } from 'components/shared/Loader/Loader';

import styles from './user-tweets.module.scss';

const UsersTweets = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchUsers() {
      try {
        setLoading(true);
        const users = await getUsers();
        setUsers(users);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
        console.log(error);
      }
    }
    fetchUsers();
  }, []);

  return (
    <div className={styles.wrap}>
      {loading ? <Loader /> : <CardList items={users} />}
      {error && (
        <ErrorMessage>...error load cards...cards load failed</ErrorMessage>
      )}
    </div>
  );
};

export default UsersTweets;
