import { useLanguage } from './LanguageContext';

export function LanguageSelector () {
  const { language, setLanguage } = useLanguage();

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setLanguage(event.target.value as 'en' | 'ru');
  };

  return (
    <div>
      <select value={language} onChange={handleChange}>
        <option value="en">Английский</option>
        <option value="ru">Русский</option>
      </select>
      <p>Выбран язык: {language}</p>
    </div>
  );
};
