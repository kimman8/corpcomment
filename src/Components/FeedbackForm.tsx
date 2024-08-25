export default function FeedbackForm() {
  return (
    <form className="form">
      <label htmlFor="feedback-textarea">
        Enter your feedback here, remember to #hashtag the company!
      </label>
      <textarea
        id="feedback-textarea"
        placeholder="blabla"
        spellCheck={false}
        maxLength={150}
      />
      <div>
        <p className="u-italic">150</p>
        <button>
          <span>submit </span>
        </button>
      </div>
    </form>
  );
}
