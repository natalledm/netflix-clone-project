// packages
import { createContext, useState, useContext, useEffect } from "react";
import { getDocument } from "../scripts/fireStoreDB";
import {
  setLocalStorageUser,
  getLocalStorageUser,
  removeLocalStorageUser,
} from "../scripts/localStorage";

// Properties
const Context = createContext(null);

// This is for App.jsx
export function UserIdContext({ children }) {
  // Local state
  const [userId, setUserId] = useState(null);
  const [userInfo, setUserInfo] = useState([]);

  // first load = check local storage
  useEffect(() => {
    async function onFirstLoad() {
      const info = getLocalStorageUser();
      if (info) {
        setUserId(info);
      }
    }
    onFirstLoad();
  }, []);

  // methods
  const login = (userLogginIn) => {
    if (userId !== null) {
      return;
    }

    // There is a user logging in, save user id
    setLocalStorageUser(userLogginIn);
    setUserId(userLogginIn);
  };

  const logout = () => {
    setUserId(null);
    removeLocalStorageUser();
  };

  // get user data from database
  useEffect(() => {
    async function loadUserData(path, id) {
      const userData = await getDocument(path, id);
      setUserInfo(userData);
    }
    loadUserData("users", userId);
  }, [userId]);

  const value = { userId, login, logout, userInfo };

  return <Context.Provider value={value}>{children}</Context.Provider>;
}

// This is for every component that needs the user state
export function useUserId() {
  const context = useContext(Context);
  const errorText =
    "To use this function, useUserId(), wrap the parent component with <UserIdContext/>";

  // Safeguards
  if (!context) throw new Error(errorText);

  return context;
}
