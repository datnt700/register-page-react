import { useState } from 'react';
import './app.scss';
import blurImage from './assets/blur-radial.svg';
import TextInput from './components/TextInput';
import CheckBoxInput from './components/CheckBoxInput';
function App() {
  const [activeRegister, setActiveRegister] = useState(true);
  const [activeTopic, setActiveTopic] = useState(false);
  const [activeConfirm, setActiveConfirm] = useState(false);
  const [activeResult, setActiveResult] = useState(false);
  const [circle2, setCircle2] = useState(false);
  const [circle3, setCircle3] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [count, setCount] = useState(1);
  const [topics, setTopics] = useState([
    { id: 'sd', value: 'Software Development', checked: false },
    { id: 'ue', value: 'User Experience', checked: false },
    { id: 'gd', value: 'Graphic Design', checked: false },
  ]);
  const [error, setError] = useState('');
  const handleName = (e) => {
    const { value } = e.target;

    setName(e.target.value);
  };

  const isEmailValid = (email) => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
  };

  const handleEmail = (e) => {
    const { value } = e.target;
    setEmail(e.target.value);
  };

  const handleRegister = (event) => {
    event.preventDefault();

    let hasError = false;
    let errorMessage = '';
    if (!name.trim()) {
      errorMessage += 'Name is required.';
      hasError = true;
    }
    if (!email.trim()) {
      errorMessage += 'Email is required.';
      hasError = true;
    } else if (!isEmailValid(email)) {
      errorMessage += 'Invalid email format.';
      hasError = true;
    }

    if (hasError) {
      setError(errorMessage.trim());
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
    setCount(count + 1);
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
          <TextInput
            type="text"
            value={name}
            placeholder="enter your name"
            label="Name"
            id="nameInput"
            onChange={handleName}
            classDiv="form-group"
            classInput="form-control"
          />
          <TextInput
            type="email"
            value={email}
            placeholder="enter your email"
            label="Email"
            id="emailInput"
            onChange={handleEmail}
            classDiv="form-group"
            classInput="form-control"
          />
          {error && (
            <p className="error-message" style={{ color: 'red' }}>
              {error}
            </p>
          )}
          <button
            onClick={handleRegister}
            type="submit"
            className="btn registration"
          >
            Continue
          </button>
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
              onChange={handleInput}
              checked={topic.checked}
              classLabel={`topic-label ${topic.checked ? 'checked' : ''}`}
              classInput="checkbox-control"
            />
          ))}
          <button onClick={handleTopic} className="btn topic">
            Continue
          </button>
        </form>
      </section>
      <section
        className={`${activeConfirm ? 'form third active' : 'form third'}`}
      >
        <div className="summary">
          <h3 className="title sous">Summary</h3>
          <div className="info-sum">
            <p className="nameSum">{name}</p>
            <p className="emailSum">{email}</p>
            <p className="topic-sum">Topics:</p>
            <ul className="item-list">
              {topics
                .filter((select) => select.checked === true)
                .map((topic) => (
                  <li className="item">{topic.value}</li>
                ))}
            </ul>
          </div>

          <button onClick={handleConfirm} className="btn confirm">
            Confirm
          </button>
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
