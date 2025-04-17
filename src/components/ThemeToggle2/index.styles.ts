import styled from '@emotion/styled';
import { Theme } from './theme';

export const Container = styled.div<{ theme: Theme }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
`;

export const ToggleButton = styled.button<{ theme: Theme }>`
  padding: 12px 24px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 16px;
  background-color: ${({ theme }) => theme.buttonBackground};
  color: ${({ theme }) => theme.buttonText};

  &:hover {
    opacity: 0.8;
  }
`;

export const Content = styled.div`
  margin-top: 20px;
`;
