import './buttons.style.css';
import classNames from 'classnames';
import { useNavigate } from 'react-router-dom';

const LinkButton = ({
  route,
  customOnClick,
  handleOnClick,
  children,
  largerButton,
  colored,
  ...rest
}) => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    if (!customOnClick) {
      const toRoute = route || '#';
      navigate(toRoute);
      return;
    }

    handleOnClick();
  };

  return (
    <button
      className={classNames('link-button', {
        'font-18': largerButton,
        'bold': largerButton,
        'colored': colored,
      })}
      onClick={handleButtonClick}
      {...rest}
    >
      {children}
    </button>
  );
};

export default LinkButton;
