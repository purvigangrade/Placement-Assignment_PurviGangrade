import React, { createContext, useEffect, useState } from "react";
import "./App.css";
import Posts from "./components/Posts";

const themes = {
  Dark: "Dark",
  Light: "Light",
};

export const themeContext = createContext({});

function App() {
  const [theme, setTheme] = useState(themes.Light);

  //Button Function

  const handleOnclick = () => {
    theme === themes.Light ? setTheme(themes.Dark) : setTheme(themes.Light);
  };

  const body = document.body;
  useEffect(() => {
    switch (theme) {
      case themes.Light:
        body.classList.remove('bg-dark');
        body.classList.remove('text-light');
        body.classList.add("bg-light");
        body.classList.add("text-dark");
        break;
      case themes.Dark:
        body.classList.remove('bg-light');
        body.classList.remove('text-dark');
        body.classList.add("bg-dark");
        body.classList.add("text-light");
        break;

      default:
        body.classList.remove('bg-dark');
        body.classList.remove('text-light');
        body.classList.add("bg-light");
        body.classList.add("text-dark");
        break;
    }
  }, [theme]);
  return (
    <div className="App">
      <themeContext.Provider value={{ theme, handleOnclick }}>
        <div className="main-container">
          <h1 className="text-center">Light Dark Theme App</h1>
          <Posts theme={theme} />
        </div>
      </themeContext.Provider>
    </div>
  );
}

export default App;
