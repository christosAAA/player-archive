import React from "react";
import classes from "./InputField.module.css";
import {dataApiType,profileApiType} from '../types'

export default function InputField(props: {
  searchInput: string;
  // axiosResponse: dataApiType | profileApiType;
  onChange: any;
  submitHandler: any;
  state: string;
}) {
  let className = "";
  if (props.state === "primary") {
    className = `${classes.primary}`;
  } else if (props.state === "secondary") {
    className = `${classes.secondary}`;
  }
  return (
    <form action="reset">
      <div className={classes.searchContainer}>
        <i className={classes.searchIcon} />
        <input
          type="text"
          className={classes.searchInput}
          onChange={(e) => {
            props.onChange(e);
          }}
          id="searchInput"
          name="searchInput"
          placeholder="Enter player's id"
        />
        <button
          className={`${classes.buttonGo} ${className}`}
          onClick={(e) => props.submitHandler(e, props.searchInput)}
        >
          Go
        </button>
      </div>
    </form>
  );
}
