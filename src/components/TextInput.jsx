const TextInput = ({
  value,
  label,
  name,
  placeholder,
  type,
  id,
  onChange,
  className,
  error,
}) => {
  return (
    <>
      <input
        type={type}
        id={id}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        className={className}
        name={name}
        required
      />
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </>
  );
};

export default TextInput;
