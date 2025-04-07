/*
Реализуйте компонент Form, который использует useEffect для валидации полей ввода.
При каждом изменении значения поля отображайте сообщение о том,
что введенные данные корректны или некорректны.
*/

import { useEffect, useState } from 'react';

export function Form () {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [nameValid, setNameValid] = useState<boolean | null>(null);
  const [emailValid, setEmailValid] = useState<boolean | null>(null);

  useEffect(() => {
    if (name.length > 0) {
      setNameValid(name.length >= 3);
    } else {
      setNameValid(null);
    }
  }, [name]);

  useEffect(() => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email.length > 0) {
      setEmailValid(emailRegex.test(email));
    } else {
      setEmailValid(null);
    }
  }, [email]);

  return (
    <div className="form">
      <h1>Форма валидации</h1>
      <form>
        <div>
          <label htmlFor="name">Имя:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {nameValid === true && <span style={{ color: 'green' }}>Имя корректно</span>}
          {nameValid === false && <span style={{ color: 'red' }}>Имя некорректно</span>}
        </div>

        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {emailValid === true && <span style={{ color: 'green' }}>Email корректен</span>}
          {emailValid === false && <span style={{ color: 'red' }}>Email некорректен</span>}
        </div>
      </form>
    </div>
  );
};
