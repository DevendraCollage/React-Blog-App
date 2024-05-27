//! ⬇️ We are going to use the component as an client component because by default in the next js component will be used as an server side component
"use client";

import { ThemeContext } from "@/Context/ThemeContext";
import React, { useContext, useEffect, useState } from "react";

const ThemeProvider = ({ children }) => {
  const { theme } = useContext(ThemeContext);
  const [mounted, setMounted] = useState(false);

  //! If you are using another browser then check the component will client component or not using useEffect
  useEffect(() => {
    setMounted(true);
  }, []);

  //* If its mounted then give its children
  if (mounted) {
    return <div className={theme}>{children}</div>;
  }
};

export default ThemeProvider;
