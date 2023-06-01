import PropType from 'prop-types';
import { Link } from 'react-router-dom';
import './styles.css';

export const Button = ({ to, text }) => {
  return (
    <Link className={'btn_tela_inicial'} to={to}>
      {text}
    </Link>
  );
};

Button.propTypes = {
  to: PropType.string.isRequired,
  text: PropType.string.isRequired,
};
