"use client";
import React, { ReactNode } from "react";
import { User } from "../types";
import { sleep } from "../utils";

const mockedUser: User = {
  firstName: "John",
  lastName: "Doe",
  email: "jd@dtex.com",
  role: "admin",
};

type UserState = {
  user: User;
  isLoading: boolean;
  isLoggedIn: boolean;
  onLogout: () => void;
  onLogin: () => void;
  onUpdateProfile: (user: User) => void;
};

const UserContext = React.createContext<UserState | undefined>(undefined);

const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = React.useState<User>(mockedUser); // This would be an initialized user object from the server
  const [isLoading, setIsLoading] = React.useState(false);
  const [isLoggedIn, setIsLoggedIn] = React.useState(true); // This would be initialized from the server

  const handleLogout = async () => {
    setIsLoading(true);
    try {
      // Call logout API
      await sleep(1000);
      setIsLoading(false);
      setIsLoggedIn(false);
    } catch (error) {
      setIsLoading(false);
      console.error(error);
    }
  };

  const handleLogin = async () => {
    setIsLoading(true);
    try {
      // Call login API
      await sleep(1000);
      setIsLoading(false);
      setIsLoggedIn(true);
    } catch (error) {
      setIsLoading(false);
      console.error(error);
    }
  };

  const handleUpdateProfile = async (newUser: User) => {
    setIsLoading(true);
    try {
      // Call update profile API
      await sleep(1000);
      setUser(newUser);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.error(error);
    }
  };

  return (
    <UserContext.Provider
      value={{
        user,
        isLoading,
        isLoggedIn,
        onLogout: handleLogout,
        onLogin: handleLogin,
        onUpdateProfile: handleUpdateProfile,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

const useUser = () => {
  const context = React.useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};

export { UserProvider, useUser };
