import { TriangleUpIcon } from '@radix-ui/react-icons';

type FeedbackItemProps = {
  feedbackItem: {
    id: number;
    badgeLetter: string;
    company: string;
    text: string;
    upvoteCount: number;
    daysAgo: number;
  };
};
export default function FeedbackItem({
  feedbackItem: { badgeLetter, company, text, upvoteCount, daysAgo },
}: FeedbackItemProps) {
  return (
    <li className="feedback">
      <button>
        <TriangleUpIcon />
        <span>{upvoteCount}</span>
      </button>
      <div>
        <p>{badgeLetter}</p>
      </div>
      <div>
        <p>{company}</p>
        <p>{text}</p>
      </div>
      <p>{daysAgo}d</p>
    </li>
  );
}
