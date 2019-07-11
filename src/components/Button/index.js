import './styles.css';
import React from 'react';
import PropTypes from 'prop-types';

const colors = {
  gray: 'rgb(224, 224, 224)',
  orange: 'rgb(236, 146, 67)',
}

const Button = (props) => {
  const { color, wide, name, handleClick } = props;

  return (
    <div
      className="button"
      style={{
        background: (color) ? colors[color] : colors.orange,
        width: (wide) ? '50%' : '25%',
      }}
      onClick={() => handleClick(name)}
    >{name}</div>
  );
}

Button.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string,
  wide: PropTypes.bool,
};

export default Button;
