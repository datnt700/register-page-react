const CheckBoxInput = ({
  value,
  label,
  id,
  checked,
  onChange,
  classLabel,
  classInput,
}) => {
  return (
    <label key={id} for={id} className={classLabel}>
      <input
        type="checkbox"
        id={id}
        value={value}
        checked={checked}
        onChange={onChange}
        className={classInput}
        required
      />
      {value}
    </label>
  );
};

export default CheckBoxInput;
