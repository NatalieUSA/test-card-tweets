import React from 'react';
import { Component } from 'react';
import axios from 'axios';

import Logo from '../image/Logo.png';
import Ellipse from '../image/Ellipse.png';
import Picture from '../image/Picture.png';

import styles from './user-card.module.scss';
import Button from 'components/shared/Button/Button';
import { Loader } from 'components/shared/Loader/Loader';

class UserCard extends Component {
  state = {
    users: [],
    loading: false,
    error: null,
    showBtn: false,
  };

  componentDidMount() {
    this.setState({ loading: true });
    axios
      .get('https://642b4c71208dfe2547160104.mockapi.io/users')
      .then(({ data }) => {
        console.log(data);
        this.setState({ users: data });
      })
      .catch(error => {
        console.log(error.message);
        this.setState({ error: error.message });
      })
      .finally(() => this.setState({ loading: false }));
  }

  render() {
    const { users, loading, error } = this.state;
    const elements = users.map(({ avatar, tweets, followers, id }) => (
      <li key={id} className={styles.item}>
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
            <img className={styles.avatar} src={avatar} alt="ava" />
          </div>
        </div>
        <div className={styles.wrapInfo}>
          <p className={styles.tweets}>{tweets} tweets</p>
          <p className={styles.followers}>
            {new Intl.NumberFormat('en').format(followers)} followers
          </p>
          <Button type="button">follow</Button>
        </div>
      </li>
    ));
    return (
      <div>
        <ul className={styles.list}>{elements}</ul>
        <Button type="button">Load more</Button>

        {loading && <Loader />}
        {error && <p>...error load cards...cards load failed</p>}
      </div>
    );
  }
}

export default UserCard;
