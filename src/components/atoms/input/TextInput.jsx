import './input.style.css';
import classNames from 'classnames';

const TextInput = ({
  label,
  value,
  onChange,
  isError,
  errorMsg,
  Icon,
  showMargin,
  ...rest
}) => {
  return (
    <div className={showMargin ? 'mb-24' : 'mb-0'}>
      <label className='input-label'>{label}</label>

      <div className='input-field-container'>
        <input
          value={value}
          onChange={onChange}
          {...rest}
          className={classNames('input-field', { 'input-field-error': isError })}
        />
        {Icon && <Icon className='input-icon' />}
      </div>

      {isError && <span className='input-error'>{errorMsg}</span>}
    </div>
  );
};

export default TextInput;
