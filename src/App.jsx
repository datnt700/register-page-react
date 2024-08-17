import { useState } from 'react';
import './app.scss';
import blurImage from './assets/blur-radial.svg';
import TextInput from './components/TextInput';
import CheckBoxInput from './components/CheckBoxInput';
import Button from './components/Button';
import Label from './components/Label';
import { ConfirmForm } from './components/ConfirmForm';
import { RegisterForm } from './components/RegisterForm';
import { TopicForm } from './components/TopicForm';
import { StepsIndicator } from './components/StepsIndicator';
import { SuccessMessage } from './components/SuccessMessage';

function App() {
  const [activeStep, setActiveStep] = useState(1);
  const [field, setField] = useState({ name: '', email: '' });
  const [topics, setTopics] = useState([
    { id: 'sd', value: 'Software Development', checked: false },
    { id: 'ue', value: 'User Experience', checked: false },
    { id: 'gd', value: 'Graphic Design', checked: false },
  ]);
  const [error, setError] = useState({ name: '', email: '' });

  const isEmailValid = (email) =>
    /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email);

  const handleFieldChange = (e) => {
    const { name, value } = e.target;
    setField((prevField) => ({
      ...prevField,
      [name]: value,
    }));
  };

  const handleTopicChange = (id) => {
    setTopics((prevTopics) =>
      prevTopics.map((topic) =>
        topic.id === id ? { ...topic, checked: !topic.checked } : topic
      )
    );
  };

  const handleRegisterSubmit = () => {
    const newErrors = { name: '', email: '' };
    let hasError = false;

    if (!field.name) {
      newErrors.name = 'Name is required.';
      hasError = true;
    }
    if (!field.email) {
      newErrors.email = 'Email is required.';
      hasError = true;
    } else if (!isEmailValid(field.email)) {
      newErrors.email = 'Invalid email format.';
      hasError = true;
    }

    if (hasError) {
      setError(newErrors);
      return;
    }

    setActiveStep(2);
  };

  const handleTopicSubmit = () => {
    setActiveStep(3);
  };

  const handleConfirmSubmit = () => {
    setActiveStep(4);
  };

  return (
    <div className="page">
      <img className="blur-1" src={blurImage} alt="blur" />
      <img className="blur-2" src={blurImage} alt="blur" />

      {activeStep === 1 && (
        <RegisterForm
          field={field}
          error={error}
          onFieldChange={handleFieldChange}
          onSubmit={handleRegisterSubmit}
        />
      )}

      {activeStep === 2 && (
        <TopicForm
          topics={topics}
          onTopicChange={handleTopicChange}
          onSubmit={handleTopicSubmit}
        />
      )}

      {activeStep === 3 && (
        <ConfirmForm
          field={field}
          topics={topics}
          onSubmit={handleConfirmSubmit}
        />
      )}

      {activeStep === 4 && <SuccessMessage />}

      <StepsIndicator currentStep={activeStep} />
    </div>
  );
}

export default App;
