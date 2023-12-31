"use client"

import React, { createContext, useEffect, useState } from "react";

type Props = { children: React.ReactNode }

interface User {
  name?: string;
  email?: string;
  user_pk?: number;
  token?: string;
  has_uploaded_cat?: boolean;
  // Add any other properties of the user object here.
}

interface UserContextType {
  user: User;
  setUser: React.Dispatch<React.SetStateAction<User>>;
}

// const initialUserState: User = {
//     name: '',
//     email: '',
//     id: 0,
//   };

export const UserContext = createContext<UserContextType>({
    user: {},
    setUser: () => {},
});

export const UserProvider: React.FC<Props> = ({ children }) => {
  const [user, setUser] = useState<User>({});

  useEffect(() => {
    console.log("triger UserProvider")
    const localStorageUser = localStorage.getItem("user");

    if (localStorageUser) {
      const localUser: User = JSON.parse(localStorageUser)
      setUser(localUser);
    }
  }, []);

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
