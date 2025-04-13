/*
Реализуйте компонент UserProvider,
который использует useContext для передачи информации о пользователе (имя и email) дочерним компонентам.
Создайте компонент UserProfile, который отображает информацию о пользователе.
*/

import { useUser } from './UserContext';

export function UserProfile () {
  const { user } = useUser();

  if (!user) {
    return <p>Пользователь не найден.</p>;
  }

  return (
    <div>
      <p>Имя: {user.name}</p>
      <p>Email: {user.email}</p>
    </div>
  );
};
