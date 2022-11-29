import './input.css';

const TextInput = ({ label, value, onChange, isError, errorMsg, Icon, ...rest }) => {
  return (
    <div className='input-wrapper'>
      <label className='input-label'>{label}</label>

      <div className='input-field-container'>
        <input value={value} onChange={onChange} {...rest} className='input-field' />
        {Icon && <Icon className='input-icon' />}
      </div>
    </div>
  );
};

export default TextInput;
