import React, { createContext, useContext, useState, ReactNode } from 'react';

interface IUser {
  name: string;
  email: string;
}

interface IUserContextType {
  user: IUser | null;
  setUser: (user: IUser) => void;
}

const UserContext = createContext<IUserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<IUser | null>(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export function useUser (): IUserContextType {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }

  return context;
};