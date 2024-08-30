import FeedbackForm from '../feedback/FeedbackForm';
import Logo from '../Logo';
import PageHeading from '../PageHeading';
import Pattern from '../Pattern';

type HeaderProps = {
  handleAddToList: (text: string) => void;
};
export default function Header({ handleAddToList }: HeaderProps) {
  return (
    <header>
      <Pattern />
      <Logo />
      <PageHeading />
      <FeedbackForm onAddToList={handleAddToList} />
    </header>
  );
}
