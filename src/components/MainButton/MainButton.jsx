import PropTypes from 'prop-types';

export const Button = ({
  type = 'button',
  disabled = false,
  children,
  ...otherProps
}) => {
  return (
    <button type={type} disabled={disabled} {...otherProps}>
      {children}
    </button>
  );
};
Button.propTypes = {
  type: PropTypes.string,
  disabled: PropTypes.bool,
  children: PropTypes.node.isRequired,
};
