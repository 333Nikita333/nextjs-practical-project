"use client";

import { createContext, useState } from "react";
import { DarkModeToggleContextType } from "../../types";

const initialContext = {
  handleToggle: () => {},
  mode: "dark",
};
export const ThemeContext =
  createContext<DarkModeToggleContextType>(initialContext);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [mode, setmode] = useState("dark");
  const handleToggle = () =>
    setmode((prev) => (prev === "dark" ? "light" : "dark"));

  return (
    <ThemeContext.Provider value={{ handleToggle, mode }}>
      <div className={`theme ${mode}`}>{children}</div>
    </ThemeContext.Provider>
  );
};
