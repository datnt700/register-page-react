import { useState } from 'react';
import './app.scss';
import blurImage from './assets/blur-radial.svg';
import TextInput from './components/TextInput';
import CheckBoxInput from './components/CheckBoxInput';
import Button from './components/Button';
import Label from './components/Label';
function App() {
  const [activeRegister, setActiveRegister] = useState(true);
  const [activeTopic, setActiveTopic] = useState(false);
  const [activeConfirm, setActiveConfirm] = useState(false);
  const [activeResult, setActiveResult] = useState(false);
  const [circle2, setCircle2] = useState(false);
  const [circle3, setCircle3] = useState(false);

  const [field, setField] = useState({ name: '', email: '' });
  const [count, setCount] = useState(1);
  const [topics, setTopics] = useState([
    { id: 'sd', value: 'Software Development', checked: false },
    { id: 'ue', value: 'User Experience', checked: false },
    { id: 'gd', value: 'Graphic Design', checked: false },
  ]);
  const [error, setError] = useState({ name: '', email: '' });
  const handleName = (e) => {
    const { name, value } = e.target;
    setField((prevField) => ({
      ...prevField,
      [name]: value,
    }));
  };

  const isEmailValid = (email) => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
  };

  const handleEmail = (e) => {
    const { email, value } = e.target;
    setField((prevField) => ({
      ...prevField,
      [email]: value,
    }));
  };

  const handleRegister = (event) => {
    event.preventDefault();

    let hasError = false;

    const errorMessage = { name: '', email: '' };
    if (!field.name) {
      errorMessage.name = 'Name is required.';
      hasError = true;
    }
    if (!field.email) {
      errorMessage.email = 'Email is required.';
      hasError = true;
    } else if (!isEmailValid(field.email)) {
      errorMessage.email = 'Invalid email format.';
      hasError = true;
    }
    if (hasError) {
      setError(errorMessage);
      return;
    }

    setActiveRegister((s) => !s);
    setActiveTopic((s) => !s);
    setCount(count + 1);
    setCircle2(true);
  };

  const handleTopic = (event) => {
    event.preventDefault();
    setActiveTopic((s) => !s);
    setActiveConfirm((s) => !s);
    setCount(count + 1);
    setCircle3(true);
  };

  const handleConfirm = (event) => {
    event.preventDefault();
    setActiveConfirm((s) => !s);
    setActiveResult((s) => !s);
  };

  const handleInput = (event) => {
    const { id, checked } = event.target;
    setTopics((prev) =>
      prev.map((topic) => (topic.id === id ? { ...topic, checked } : topic))
    );
  };
  return (
    <div className="page">
      <img className="blur-1" src={blurImage} alt="blur" />
      <img className="blur-2" src={blurImage} alt="blur" />
      <section
        className={`${activeRegister ? 'form first active' : 'form first'}`}
      >
        <h3 className="title main">Register</h3>
        <form onSubmit={handleRegister} className="register">
          <div className="form-group">
            <Label id="nameInput" label={'Name'} className={''} />
            <TextInput
              type="text"
              value={field.name}
              placeholder="enter your name"
              label="Name"
              id="nameInput"
              onChange={handleName}
              className="form-control"
              name="name"
              error={error.name}
            />
          </div>
          <div className="form-group">
            <Label id="nameInput" label={'Email'} className={''} />
            <TextInput
              type="email"
              value={field.email}
              placeholder="enter your email"
              label="Email"
              id="emailInput"
              onChange={handleEmail}
              className="form-control"
              name="email"
              error={error.email}
            />
          </div>
          <Button
            onClick={handleRegister}
            className="btn registration"
            name="Continue"
          />
        </form>
      </section>
      <section
        className={`${activeTopic ? 'form second active' : 'form second'}`}
      >
        <h3 className="title sous">Which topics you are interested in?</h3>
        <form className="topic-list">
          {topics.map((topic) => (
            <CheckBoxInput
              value={topic.value}
              label={topic.value}
              id={topic.id}
              key={topic.id}
              onChange={handleInput}
              checked={topic.checked}
              classLabel={`topic-label ${topic.checked ? 'checked' : ''}`}
              classInput="checkbox-control"
            />
          ))}
          <Button onClick={handleTopic} className="btn topic" name="Continue" />
        </form>
      </section>
      <section
        className={`${activeConfirm ? 'form third active' : 'form third'}`}
      >
        <div className="summary">
          <h3 className="title sous">Summary</h3>
          <div className="info-sum">
            <p className="nameSum">{field.name}</p>
            <p className="emailSum">{field.email}</p>
            <p className="topic-sum">Topics:</p>
            <ul className="item-list">
              {topics
                .filter((select) => select.checked === true)
                .map((topic) => (
                  <li className="item">{topic.value}</li>
                ))}
            </ul>
          </div>
          <Button
            onClick={handleConfirm}
            className="btn confirm"
            name="Confirm"
          />
        </div>
      </section>
      <section className={`${activeResult ? 'form four active' : 'form four'}`}>
        <div className="message">
          <p>✅ Success</p>
        </div>
      </section>
      <div className="steps">
        <p className="count">Step {count} of 3</p>
        <span className="circle one active"></span>
        <span
          className={`${circle2 ? 'circle two active' : 'circle two'}`}
        ></span>
        <span
          className={`${circle3 ? 'circle three active' : 'circle three'}`}
        ></span>
      </div>
    </div>
  );
}

export default App;
