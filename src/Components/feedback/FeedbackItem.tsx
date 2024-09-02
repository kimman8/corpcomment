import { TriangleUpIcon } from '@radix-ui/react-icons';
import { TFeedbackItem } from '../../lib/types';
import { useState } from 'react';

type FeedbackItemProps = {
  feedbackItem: TFeedbackItem;
};
export default function FeedbackItem({
  feedbackItem: { badgeLetter, company, text, upvoteCount, daysAgo },
}: FeedbackItemProps) {
  const [open, setOpen] = useState(false);
  return (
    <li
      className={`feedback ${open && 'feedback--expand'}`}
      onClick={() => setOpen((prev) => !prev)}
    >
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
      <p>{daysAgo === 0 ? 'NEW' : `${daysAgo}d`}</p>
    </li>
  );
}
