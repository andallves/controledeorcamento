import PropType from 'prop-types';
import './styles.css';

export const Input = ({ type, text, name, placeholder }) => {
  return (
    <div className={'btn'}>
      <label htmlFor={name}>{text}: </label>
      <input
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        required
      />
    </div>
  );
};

Input.propTypes = {
  type: PropType.string.isRequired,
  text: PropType.string.isRequired,
  name: PropType.string.isRequired,
  placeholder: PropType.string.isRequired,
};
