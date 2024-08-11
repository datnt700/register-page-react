const Label = ({ id, label, className }) => {
  return (
    <label htmlFor={id} className={className}>
      {label}
    </label>
  );
};

export default Label;
