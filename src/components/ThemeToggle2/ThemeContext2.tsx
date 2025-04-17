import React, { createContext, useContext, useState, ReactNode } from 'react';

type Theme = 'lightTheme' | 'darkTheme';

interface IThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext2 = createContext<IThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>('lightTheme');

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'lightTheme' ? 'darkTheme' : 'lightTheme'));
  };

  return (
    <ThemeContext2.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext2.Provider>
  );
};

export function useTheme (): IThemeContextType {
  const context = useContext(ThemeContext2);

  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  
  return context;
};




// export const lightTheme = {
//   background: '#ffffff',
//   text: '#000000',
//   buttonBackground: '#e0e0e0',
//   buttonText: '#000000',
// };

// export const darkTheme = {
//   background: '#121212',
//   text: '#ffffff',
//   buttonBackground: '#333333',
//   buttonText: '#ffffff',
// };

// export type Theme = typeof lightTheme;