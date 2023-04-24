import { useState } from 'react';
import UserItem from '../UserItem/UserItem';
import Button from 'components/shared/Button/Button';

import styles from '../../UsersTweets/user-tweets.module.scss';

const UserList = ({ items, ...otherProps }) => {
  const [itemsPerPage, setItemsPerPage] = useState(13);

  const onLoadMore = () => {
    const next = itemsPerPage;
    setItemsPerPage(next + itemsPerPage);
  };

  return (
    <div>
      <ul className={styles.list}>
        {items?.slice(0, itemsPerPage)?.map(item => (
          <li key={item.id} className={styles.item}>
            <UserItem item={item} {...otherProps} />
          </li>
        ))}
      </ul>
      {itemsPerPage < items.length && (
        <Button onClick={onLoadMore} type="button">
          Load more
        </Button>
      )}
    </div>
  );
};

export default UserList;
