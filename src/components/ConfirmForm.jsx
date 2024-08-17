import Button from './Button';

export function ConfirmForm({ field, topics, onSubmit }) {
  const selectedTopics = topics.filter((topic) => topic.checked);

  return (
    <section className="form third active">
      <div className="summary">
        <h3 className="title sous">Summary</h3>
        <div className="info-sum">
          <p className="nameSum">{field.name}</p>
          <p className="emailSum">{field.email}</p>
          <p className="topic-sum">Topics:</p>
          <ul className="item-list">
            {selectedTopics.map((topic) => (
              <li key={topic.id} className="item">
                {topic.value}
              </li>
            ))}
          </ul>
        </div>
        <Button onClick={onSubmit} className="btn confirm" name="Confirm" />
      </div>
    </section>
  );
}
