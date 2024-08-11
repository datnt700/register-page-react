const TextInput = ({
  value,
  label,
  name,
  placeholder,
  type,
  id,
  onChange,
  className,
}) => {
  return (
    <input
      type={type}
      id={id}
      value={name}
      placeholder={placeholder}
      onChange={onChange}
      className={className}
      required
    />
  );
};

export default TextInput;
