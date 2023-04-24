import { useState } from 'react';
import CardItem from '../CardItem/CardItem';
// import Button from 'components/shared/Button/Button';

import styles from './card-list.module.scss';

const CardList = ({ items, ...otherProps }) => {
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
            <CardItem item={item} {...otherProps} />
          </li>
        ))}
      </ul>
      {itemsPerPage < items.length && (
        <button onClick={onLoadMore} type="button" className={styles.btn}>
          Load more
        </button>
      )}
    </div>
  );
};

export default CardList;
