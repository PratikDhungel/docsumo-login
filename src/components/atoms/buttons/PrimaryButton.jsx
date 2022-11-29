import './buttons.style.css';
import classNames from 'classnames';

const PrimaryButton = ({ handleOnClick, children, disabled, ...rest }) => {
  return (
    <button
      className={classNames('primary-button', { 'button-disabled': disabled })}
      onClick={handleOnClick}
      {...rest}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
