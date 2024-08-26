import { useState } from 'react';
import { MAX_CHARACTERS } from '../lib/constants';

export default function FeedbackForm() {
  const [text, setText] = useState('');
  return (
    <form className="form">
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
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
          <span>submit </span>
        </button>
      </div>
    </form>
  );
}
