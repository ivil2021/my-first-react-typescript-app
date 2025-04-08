import { useTheme } from './ThemeContext';

export function ThemeToggle () {
  const { theme, toggleTheme } = useTheme();

  return (
    <div>
      <h2>Текущая тема: {theme}</h2>
      <button onClick={toggleTheme}>
        Сменить тему на {theme === 'light' ? 'темную' : 'светлую'}
      </button>
    </div>
  );
};
