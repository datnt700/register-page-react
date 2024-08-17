import CheckBoxInput from './CheckBoxInput';
import Button from './Button';

export function TopicForm({ topics, onTopicChange, onSubmit }) {
  return (
    <section className="form second active">
      <h3 className="title sous">Which topics are you interested in?</h3>
      <form className="topic-list">
        {topics.map((topic) => (
          <CheckBoxInput
            key={topic.id}
            value={topic.value}
            label={topic.value}
            id={topic.id}
            checked={topic.checked}
            onChange={() => onTopicChange(topic.id)}
            classLabel={`topic-label ${topic.checked ? 'checked' : ''}`}
            classInput="checkbox-control"
          />
        ))}
        <Button onClick={onSubmit} className="btn topic" name="Continue" />
      </form>
    </section>
  );
}
