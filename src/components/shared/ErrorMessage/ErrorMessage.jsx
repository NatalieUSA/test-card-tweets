import propTypes from 'prop-types';
import styles from './error-message.module.scss';

export const ErrorMessage = ({ children }) => {
  return <h2 className={styles}>{children}</h2>;
};

ErrorMessage.propTypes = {
  children: propTypes.node.isRequired,
};
