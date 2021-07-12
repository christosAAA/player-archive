import React from "react";
import classes from "./SubText.module.css";

export default function SubText(props: { title: string; content: string }) {
  return (
    <div>
      <h3 className={classes.subTitle}>
        <span className={classes.title}>{props.title}</span> {props.content}
      </h3>
    </div>
  );
}
