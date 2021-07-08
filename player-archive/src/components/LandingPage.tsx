import React, { useState } from "react";
import classes from "./landingPage.module.css";
import { playerObjData } from "./types";
import { axiosResponse } from "./utils/axiosResponse";
import { createActivePlayer } from "./utils/createActivePlayer";
const dataApiBase = "https://web-sandbox.onefootball.com/assignments/player/data/";
const profileApiBase = "https://web-sandbox.onefootball.com/assignments/player/profile/";

const LandingPage = () => {
  const [searchInput, setSearchInput] = useState("");
  const [displayMessage, setDisplayMessage] = useState("");
  const [playerIsActive, setplayerIsActive] = useState(false);
  const [playerDetails, setPlayerDetails] = useState<playerObjData>({
    id: "",
    active: "",
    age: "",
    role: "",
    team: "",
    picture: ""
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value.toLowerCase());
  };

  const submitHandler = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    searchInput: string
  ) => {
    e.preventDefault();
    // Returns the player's data if the player exists otherwise returns false
    const responseDataApi = await axiosResponse(dataApiBase, searchInput);

    if (responseDataApi.active === "true") {
      const player = await createActivePlayer(profileApiBase, responseDataApi);
      setplayerIsActive(true);
      setPlayerDetails(player);
      setDisplayMessage("");
    } else if (responseDataApi.active === "false") {
      setplayerIsActive(false);
      setDisplayMessage("the player is not available");
    } else if (!responseDataApi) {
      setplayerIsActive(false);
      setDisplayMessage("please enter a valid player's id");
    }
  };

  return (
    <div>
      <h1>Player Archive</h1>
      <h2>Search</h2>
      <form action="reset">
        <div
          style={{
            border: " 1px solid #adb5bd",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between"
          }}
        >
          <input
            type="text"
            className={classes.searchInput}
            onChange={(e) => {
              onChange(e);
            }}
            id="lname"
            name="searchInput"
            defaultValue="Enter player's id"
          />
          <button onClick={(e) => submitHandler(e, searchInput)}>GO</button>
        </div>
      </form>
      {playerIsActive ? (
        <div>
            <img src={playerDetails.picture} alt=""/>
          <div>
            <h3>Id: {playerDetails.id}</h3>
            <h3>Active: {playerDetails.active}</h3>
          </div>
          <div>
            <h3>Age: {playerDetails.age}</h3>
            <h3>Role: {playerDetails.role}</h3>
            <h3>Team: {playerDetails.team}</h3>
          </div>
        </div>
      ) : (
        <h1>{displayMessage}</h1>
      )}
    </div>
  );
};

export default LandingPage;
