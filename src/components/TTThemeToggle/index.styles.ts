import styled from '@emotion/styled';

export const AppContainer = styled.div<{ isDark: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: ${({ isDark }) => (isDark ? '#121212' : '#ffffff')};
  transition: background-color 0.3s ease;
`;

export const Card2 = styled.div<{ isDark: boolean }>`
  padding: 20px;
  border-radius: 8px;
  background-color: ${({ isDark }) => (isDark ? '#333333' : '#f0f0f0')};
  color: ${({ isDark }) => (isDark ? '#ffffff' : '#000000')};
  box-shadow: ${({ isDark }) => (isDark ? '0px 4px 10px rgba(255,255,255,0.1)' : '0px 4px 10px rgba(0,0,0,0.1)')};
`;

export const ToggleButton = styled.button<{ isDark: boolean }>`
    background-color: ${({ isDark }) => (isDark ? '#555555' : '#e0e0e0')};
    color: ${({ isDark }) => (isDark ? '#ffffff' : '#000000')};
    border: none;
    padding: 12px 24px;
    border-radius: 6px;
    cursor: pointer;
    font-size: 16px;

    &:hover {
        opacity: 0.8;
    }
`;
