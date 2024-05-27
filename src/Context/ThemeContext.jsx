//! ⬇️ We are going to use the component as an client component because by default in the next js component will be used as an server side component
"use client";

import { createContext, useEffect, useState } from "react";

//! ⬇️ We are storing the state of the themeToggler in this
export const ThemeContext = createContext();

const getFromLocalStorage = () => {
  if (typeof window !== "undefined") {
    const value = localStorage.getItem("theme");
    return value || "light";
  }
};

//! ⬇️ On the basis of the state of the themeToggler then we can define the condition to change the appearance of the theme and store them in the browser local storage
export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    return getFromLocalStorage();
  });

  // TODO: If the theme is the light make it dark otherwise make it light
  const toggle = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  // TODO: Whenever our theme changes then we are update the local-storage
  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);
  return (
    <ThemeContext.Provider value={{ theme, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
};
