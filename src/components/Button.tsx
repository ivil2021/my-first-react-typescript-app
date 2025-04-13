/*
Создайте компонент Button, используя styled из Emotion.
Сделайте кнопку с фоном, цветом текста и некоторыми эффектами при наведении (например, изменение цвета фона).
Используйте этот компонент в основном приложении и добавьте текст "Нажми меня".
*/

import styled from '@emotion/styled';

interface IButtonProps {
  children: any;
  backgroundColor?: string;
  color?: string;
}

const StyledButton = styled.button<IButtonProps>`
  background-color: ${props => props.backgroundColor || '#007bff'};
  color: ${props => props.color || '#ffffff'};
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: blue;
  }
`;

export function Button ({ children, backgroundColor, color }: IButtonProps) {
  return (
    <div className="button">
      <StyledButton backgroundColor={backgroundColor} color={color}>
        {children}
      </StyledButton>
    </div>
  );
};
