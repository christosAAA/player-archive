import React from "react";
import classes from "./Message.module.css";

export default function Message(props: { title: string; state: string }) {
  let className = "";
  if (props.state === "primary") {
    className = `${classes.primary}`;
  } else if (props.state === "secondary") {
    className = `${classes.secondary}`;
  }
  return <h2 className={`${classes.message} ${className}`}>{props.title}</h2>;
}
