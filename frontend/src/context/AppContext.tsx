import React, { createContext, useContext, useState, ReactNode } from 'react';

interface AppContextType {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  isAuthenticated: boolean;
  login: (token: string) => void;
  logout: () => void;
  userToken: string | null;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [userToken, setUserToken] = useState<string | null>(null);

  const toggleDarkMode = () => {
    setIsDarkMode(prev => !prev);
    if (!isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  const login = (token: string) => {
    setIsAuthenticated(true);
    setUserToken(token);
    localStorage.setItem('auth_token', token);
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUserToken(null);
    localStorage.removeItem('auth_token');
  };

  return (
    <AppContext.Provider value={{ 
      isDarkMode, 
      toggleDarkMode, 
      isAuthenticated, 
      login, 
      logout, 
      userToken 
    }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = (): AppContextType => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};