/*
Напишите компонент FetchData, который использует useEffect для получения данных с API,
например, https://jsonplaceholder.typicode.com/posts.
При получении данных отображайте заголовки постов на экране.
*/

import { useEffect, useState } from 'react';

interface IPost {
  id: number;
  title: string;
}

export function FetchData () {
  const [posts, setPosts] = useState<IPost[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('https://test-api-backend-mern.onrender.com/posts');

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data: IPost[] = await response.json();
        setPosts(data);
      } catch (error) {
        setError(error instanceof Error ? error.message : 'Unknown error');
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) {
    return <div className="fetch-data">Загрузка...</div>;
  }

  if (error) {
    return <div className="fetch-data">Ошибка: {error}</div>;
  }

  return (
    <div className="fetch-data">
      <h1>Заголовки постов</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};
