const TextInput = ({
  value,
  label,
  name,
  placeholder,
  type,
  id,
  onChange,
  classDiv,
  classInput,
}) => {
  return (
    <div className={classDiv}>
      <label for={id}>{label}</label>
      <input
        type={type}
        id={id}
        value={name}
        placeholder={placeholder}
        onChange={onChange}
        className={classInput}
        required
      />
    </div>
  );
};

export default TextInput;
