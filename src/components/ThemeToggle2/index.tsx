/*
Создайте компонент ThemeToggle, который позволяет переключаться между светлой и темной темами.
Используйте Emotion для стилизации элементов в зависимости от выбранной темы.
Добавьте кнопку, которая будет менять тему и обновлять стили всего приложения (например, цвет фона и цвет текста).
*/

import { ThemeProvider } from '@emotion/react';
import { lightTheme, darkTheme, Theme } from './theme';
import { Container, ToggleButton, Content } from "./index.styles";
import { useTheme } from './ThemeContext2';

interface IThemeToggle2Props {
  theme: Theme;
  toggleTheme: () => void;
  background: string,
  text: string,
  buttonBackground: string,
  buttonText: string,
}

// export function ThemeToggle2 ({ background, text, buttonBackground, buttonText }: IThemeToggle2Props) {
//   const { theme, toggleTheme } = useTheme();

//   return (
//       <ThemeProvider>
//           <Container
//             background={background}
//             text={text}
//           >
//               <ToggleButton
//                 onClick={toggleTheme}
//                 buttonBackground={buttonBackground}
//                 buttonText={buttonText}>
//                   Переключить на {theme === 'lightTheme' ? 'темную' : 'светлую'} тему
//               </ToggleButton>
//               <Content>
//                   <h1>Пример переключения темы</h1>
//                   <p>Текущая тема — {theme === 'lightTheme' ? 'темную' : 'светлую'}</p>
//               </Content>
//           </Container>
//       </ThemeProvider>
//   );
// };


// --------------

// import { useTheme } from './ThemeContext';

// export function ThemeToggle () {
//   const { theme, toggleTheme } = useTheme();

//   return (
//     <div>
//       <h2>Текущая тема: {theme}</h2>
//       <button onClick={toggleTheme}>
//         Сменить тему на {theme === 'light' ? 'темную' : 'светлую'}
//       </button>
//     </div>
//   );
// };