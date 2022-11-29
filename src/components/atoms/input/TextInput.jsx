import './input.style.css';

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
        <input value={value} onChange={onChange} {...rest} className='input-field' />
        {Icon && <Icon className='input-icon' />}
      </div>
    </div>
  );
};

export default TextInput;
