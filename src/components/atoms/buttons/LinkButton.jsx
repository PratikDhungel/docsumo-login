import './buttons.style.css';
import { useNavigate } from 'react-router-dom';

const LinkButton = ({ route, customOnClick, handleOnClick, children }) => {
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
    <button className='link-button' onClick={handleButtonClick}>
      {children}
    </button>
  );
};

export default LinkButton;
