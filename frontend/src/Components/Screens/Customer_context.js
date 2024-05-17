import React, { createContext, useContext, useState } from 'react';
import "./Login";
const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [email, setEmail] = useState(null);


  return (
    <UserContext.Provider value={{ email, setEmail }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  return useContext(UserContext);
};