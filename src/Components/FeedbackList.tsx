import { TriangleUpIcon } from '@radix-ui/react-icons';

export default function FeedbackList() {
  return (
    <ol className="feedback-list">
      <li className="feedback">
        <button>
          <TriangleUpIcon />
          <span>368</span>
        </button>
        <div>
          <p>N</p>
        </div>
        <div>
          <p>Netflix</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
            saepe optio dolorum, voluptatum sunt veniam nemo doloremque dicta
            temporibus dolores!
          </p>
        </div>
        <p>4d</p>
      </li>
    </ol>
  );
}
