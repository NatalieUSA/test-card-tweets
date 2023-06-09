import PropTypes from 'prop-types';
import styles from './button.module.scss';

const Button = ({ children, onClick, type }) => {
  return (
    <button
      onClick={onClick}
      className={`${styles.btn} ${styles.btnActive}`}
      type={type}
    >
      {children}
    </button>
  );
};
export default Button;

Button.protoTypes = {
  onClick: PropTypes.func,
  type: PropTypes.oneOf(['submit', 'button', 'reset']),
  children: PropTypes.element.isRequired,
};
