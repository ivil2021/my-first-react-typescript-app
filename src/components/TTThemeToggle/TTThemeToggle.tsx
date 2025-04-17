import { ToggleButton } from './index.styles';

interface IThemeToggleProps {
  toggleTheme: () => void;
  isDark: boolean;
}

export function TTThemeToggle ({ toggleTheme, isDark }: IThemeToggleProps) {
  return (
    <ToggleButton onClick={toggleTheme} isDark={isDark}>
      Переключить на {isDark ? 'светлую' : 'тёмную'} тему
    </ToggleButton>
  );
};
