import { useState } from 'react';
import { MAX_CHARACTERS } from '../lib/constants';

type FeedbackFormProps = {
  onAddToList: (text: string) => void;
};
export default function FeedbackForm({ onAddToList }: FeedbackFormProps) {
  const [text, setText] = useState('');
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (e.target.value.length <= MAX_CHARACTERS) {
      setText(e.target.value);
    }
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (text.trim() === '') {
      return;
    }
    onAddToList(text);
    setText('');
  };
  return (
    <form className="form" onSubmit={handleSubmit}>
      <textarea
        value={text}
        onChange={handleChange}
        id="feedback-textarea"
        placeholder="blabla"
        spellCheck={false}
        maxLength={MAX_CHARACTERS}
      />
      <label htmlFor="feedback-textarea">
        Enter your feedback here, remember to #hashtag the company!
      </label>
      <div>
        <p className="u-italic">{MAX_CHARACTERS - text.length}</p>
        <button>
          <span>submit</span>
        </button>
      </div>
    </form>
  );
}
