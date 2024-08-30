type HashtagItemProps = {
  company: string;
  onSelectCompany: (company: string) => void;
};

export default function HashtagItem({
  company,
  onSelectCompany,
}: HashtagItemProps) {
  return (
    <li key={company}>
      <button onClick={() => onSelectCompany(company)}>#{company}</button>
    </li>
  );
}
