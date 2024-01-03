import { createContext, useState, useContext } from 'react';

const userContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(false);

  const Authenticate = () => {
    // Perform authentication logic and set the user
    setUser(true);
  };

  const Disconnect = () => {
    // Perform Disconnect logic
    setUser(false);
  };

  return (
    <userContext.Provider value={{ user, Authenticate, Disconnect }}>
      {children}
    </userContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(userContext);
};