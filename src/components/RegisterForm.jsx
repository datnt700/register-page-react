import Label from './Label';
import TextInput from './TextInput';
import Button from './Button';

export function RegisterForm({ field, error, onFieldChange, onSubmit }) {
  return (
    <section className="form first active">
      <h3 className="title main">Register</h3>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit();
        }}
        className="register"
      >
        <div className="form-group">
          <Label id="nameInput" label="Name" />
          <TextInput
            type="text"
            value={field.name}
            placeholder="Enter your name"
            id="nameInput"
            name="name"
            onChange={onFieldChange}
            error={error.name}
          />
        </div>
        <div className="form-group">
          <Label id="emailInput" label="Email" />
          <TextInput
            type="email"
            value={field.email}
            placeholder="Enter your email"
            id="emailInput"
            name="email"
            onChange={onFieldChange}
            error={error.email}
          />
        </div>
        <Button className="btn registration" name="Continue" />
      </form>
    </section>
  );
}
