import React from "react";
import classes from "./Title.module.css";

export default function Title(props: { title: string; state: string }) {
  let className = "";
  if (props.state === "primary") {
    className = `${classes.primary}`;
  } else if (props.state === "secondary") {
    className = `${classes.secondary}`;
  }
  return <h1 className={`${classes.title} ${className}`}>{props.title}</h1>;
}
