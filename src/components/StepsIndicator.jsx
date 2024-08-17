export function StepsIndicator({ currentStep }) {
  return (
    <div className="steps">
      <p className="count">Step {currentStep} of 3</p>
      <span className={`circle one ${currentStep >= 1 ? 'active' : ''}`}></span>
      <span className={`circle two ${currentStep >= 2 ? 'active' : ''}`}></span>
      <span
        className={`circle three ${currentStep >= 3 ? 'active' : ''}`}
      ></span>
    </div>
  );
}
