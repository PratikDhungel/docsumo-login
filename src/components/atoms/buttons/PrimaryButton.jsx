import './buttons.style.css';

const PrimaryButton = ({ handleOnClick, children, ...rest }) => {
  return (
    <button className='primary-button' onClick={handleOnClick} {...rest}>
      {children}
    </button>
  );
};

export default PrimaryButton;
