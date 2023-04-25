import propTypes from 'prop-types';
import { useEffect, useState } from 'react';
import Logo from '../../image/Logo.png';
import Ellipse from '../../image/Ellipse.png';
import Picture from '../../image/Picture.png';
import styles from './card-item.module.scss';

const CardItem = ({ item }) => {
  const { id, user, tweets, followers, avatar } = item;

  const [isFollow, setIsFollow] = useState(
    JSON.parse(localStorage.getItem(`${id}-isFollow`)) ?? false
  );
  const [totalFollowers, setTotalFollowers] = useState(
    JSON.parse(localStorage.getItem(`${id}-follow`)) ?? followers
  );

  useEffect(() => {
    localStorage.setItem(`${id}-isFollow`, JSON.stringify(isFollow));
    localStorage.setItem(`${id}-follow`, JSON.stringify(totalFollowers));
  }, [id, totalFollowers, isFollow]);

  const onFollowing = () => {
    setIsFollow(false);
    setTotalFollowers(totalFollowers - 1);
  };
  const onFollow = () => {
    setIsFollow(true);
    setTotalFollowers(totalFollowers + 1);
  };

  return (
    <>
      <div className={styles.logo}>
        <img src={Logo} alt="logo" />
      </div>
      <div className={styles.picture}>
        <img src={Picture} alt="line" />
      </div>
      <div className={styles.wrapImg}>
        <div className={styles.rectangle}></div>
        <div className={styles.ellipse}>
          <img src={Ellipse} alt="imageBackground" />
        </div>
        <div>
          <img className={styles.avatar} src={avatar} alt={user} />
        </div>
      </div>
      <div className={styles.wrapInfo}>
        <p className={styles.tweets}>{tweets} tweets</p>
        <p className={styles.followers}>
          {new Intl.NumberFormat('en').format(totalFollowers)} followers
        </p>
        {isFollow ? (
          <button
            type="button"
            onClick={onFollowing}
            className={`${styles.btn} ${styles.btnActive}`}
          >
            Following
          </button>
        ) : (
          <button type="button" onClick={onFollow} className={styles.btn}>
            Follow
          </button>
        )}
      </div>
    </>
  );
};
export default CardItem;

CardItem.propTypes = {
  item: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.number.isRequired,
      user: propTypes.string.isRequired,
      tweets: propTypes.number.isRequired,
      followers: propTypes.number.isRequired,
      avatar: propTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
