import FeedbackList from './FeedbackList';
import Header from './Header';
import { TFeedbackItem } from '../lib/types';

type ContainerProps = {
  handleAddToList: (text: string) => void;
  isLoading: boolean;
  errorMessage: string;
  feedbackItems: TFeedbackItem[];
};
export default function Container({
  handleAddToList,
  isLoading,
  errorMessage,
  feedbackItems,
}: ContainerProps) {
  return (
    <div className="container">
      <Header handleAddToList={handleAddToList} />
      <FeedbackList
        isLoading={isLoading}
        feedbackItems={feedbackItems}
        errorMessage={errorMessage}
      />
    </div>
  );
}
