import s from './Title.module.css';
import PropTypes from 'prop-types';
export const Title = ({ children }) => {
  return <h2 className={s.title}>{children}</h2>;
};

Title.propTypes = {
  children: PropTypes.node.isRequired,
};
