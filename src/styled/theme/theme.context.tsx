import React, { useState } from "react";

const ThemeContext = React.createContext({
  theme: "light",
  handleTheme: () => {},
});

interface IProps {
  children: React.ReactNode;
}

function ThemeProvider({ children }: IProps) {
  const [theme, setTheme] = useState("light");
  const handleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };
  return (
    <ThemeContext.Provider value={{ theme, handleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export { ThemeProvider, ThemeContext };
