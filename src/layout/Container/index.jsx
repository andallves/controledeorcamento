import PropTypes from 'prop-types';
import './styles.css';

export const Container = ({ children }) => {
  return <div className={'container'}>{children}</div>;
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
};
