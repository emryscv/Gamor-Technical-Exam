import React from "react";
import { useState } from "react";

export const Theme = React.createContext({
  theme: "dark",
  setTheme: ()=>{},
});
Theme.displayName = "Theme";

export function ThemeProvider(props: {
  children: React.ReactNode | React.ReactNode[];
}) {
  const [theme, setTheme] = useState("dark");

  return (
    <Theme.Provider value={{ theme: theme, setTheme: () => {setTheme(theme === "dark" ? "light": "dark")}}}>
      {props.children}
    </Theme.Provider>
  );
}
