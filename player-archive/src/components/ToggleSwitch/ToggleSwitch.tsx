import React, { useState } from "react";
import classes from "./ToggleSwitch.module.css";

export default function ToggleSwitch() {
  const [theme, setTheme] = useState(true);
  const playerContainer = document.getElementById("playerContainer");

  if (theme) {
    document.body.classList.remove(`${classes.darkMode}`);
    document.body.classList.add(`${classes.whiteMode}`);
    if (playerContainer) {
      console.log(playerContainer);
      playerContainer.classList.add(`${classes.whiteMode}`);
      playerContainer.classList.remove(`${classes.darkModePlayerContainer}`);
    }
  } else {
    document.body.classList.remove(`${classes.whiteMode}`);
    document.body.classList.add(`${classes.darkMode}`);
    if (playerContainer) {
      console.log(playerContainer);
      playerContainer.classList.remove(`${classes.whiteMode}`);
      playerContainer.classList.add(`${classes.darkModePlayerContainer}`);
    }
  }
  const themeOnChange = () => {
    setTheme(!theme);
  };

  return (
    <div className={classes.darkModeContainer}>
      {"Dark Mode"}
      <label className={classes.switch}>
        <input type="checkbox" onChange={() => themeOnChange()} />
        <div className={`${classes.slider} ${classes.round}`}></div>
      </label>
    </div>
  );
}
