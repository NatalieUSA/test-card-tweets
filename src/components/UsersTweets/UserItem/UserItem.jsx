import Button from 'components/shared/Button/Button';
import Logo from '../../image/Logo.png';
import Ellipse from '../../image/Ellipse.png';
import Picture from '../../image/Picture.png';
import styles from '../../UsersTweets/user-tweets.module.scss';

const UserItem = ({ item, ...otherProps }) => {
  //   console.log(otherProps);
  console.log(item);
  const { user, tweets, followers, avatar } = item;
  console.log(followers);

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
          {new Intl.NumberFormat('en').format(followers)} followers
        </p>

        <Button
          type="button"

          // className={`${styles.btn} ${styles.btnActive}`}
        >
          Follow
        </Button>
      </div>
    </>
  );
};
export default UserItem;
