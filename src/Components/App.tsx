import { useEffect, useMemo, useState } from 'react';
import Container from './layout/Container';
import Footer from './layout/Footer';
import HashtagList from './hashtag/HashtagList';
import { TFeedbackItem } from '../lib/types';

function App() {
  const [feedbackItems, setFeedbackItems] = useState<TFeedbackItem[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const companyList = useMemo(() =>
    feedbackItems
      .map((item) => item.company)
      .filter(
        (company, index, self) => self.indexOf(company) === index,
        [feedbackItems]
      )
  );

  const [selectedCompany, setSelectedCompany] = useState('');
  const filteredFeedbackItems = useMemo(
    () =>
      selectedCompany
        ? feedbackItems.filter(
            (feedbackItem) => feedbackItem.company === selectedCompany
          )
        : feedbackItems,
    [feedbackItems, selectedCompany]
  );

  const handleSelectCompany = (company: string) => {
    setSelectedCompany(company);
  };
  const handleAddToList = async (text: string) => {
    const companyName = text
      .split(' ')
      .find((word) => word.includes('#'))!
      .substring(1);
    const newItem: TFeedbackItem = {
      id: new Date().getTime(),
      badgeLetter: companyName.substring(0, 1).toUpperCase(),
      company: companyName,
      text,
      upvoteCount: 0,
      daysAgo: 0,
    };
    setFeedbackItems([...feedbackItems, newItem]);
    await fetch(
      'https://bytegrad.com/course-assets/projects/corpcomment/api/feedbacks',
      {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newItem),
      }
    );
  };
  useEffect(() => {
    const fetchFeedbacks = async () => {
      setIsLoading(true);
      try {
        const res = await fetch(
          'https://bytegrad.com/course-assets/projects/corpcomment/api/feedbacks'
        );
        if (!res.ok) {
          throw new Error();
        }
        const data = await res.json();
        setFeedbackItems(data.feedbacks);
      } catch {
        setErrorMessage('Something went wrong');
      }
      setIsLoading(false);
    };
    fetchFeedbacks();
  }, []);
  return (
    <div className="app">
      <Footer />
      <Container
        feedbackItems={filteredFeedbackItems}
        isLoading={isLoading}
        errorMessage={errorMessage}
        handleAddToList={handleAddToList}
      />
      <HashtagList
        companyList={companyList}
        handleSelectCompany={handleSelectCompany}
      />
    </div>
  );
}

export default App;
