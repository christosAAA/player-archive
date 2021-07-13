import React, { useState } from "react";
import classes from "./landingPage.module.css";
import { playerObjData } from "./types/types";
import { axiosResponse } from "./utils/axiosResponse";
import { createActivePlayer } from "./utils/createActivePlayer";
import ToggleSwitch from "./ToggleSwitch/ToggleSwitch";
import Title from "./Title/Title";
import InputField from "./InputField/InputField";
import PlayerDetails from "./PlayerDetails/PlayerDetails";
import Message from "./Message/Message";
import { uiState } from "./configUI";
import { isDataApiType } from "./types/types";

const apiBaseData = "/data/";
const apiBaseProfile = "/profile/";

const LandingPage = () => {
  const [searchInput, setSearchInput] = useState("");
  const [stateData, setStateData] = useState({
    displayMessage: "",
    playerIsActive: false
  });
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
    const responseDataApi = await axiosResponse(apiBaseData, searchInput);
    // Type guard
    if (isDataApiType(responseDataApi)) {
      if (responseDataApi.active === "true") {
        const player = await createActivePlayer(apiBaseProfile, responseDataApi);

        if (player) {
          setStateData({ displayMessage: "", playerIsActive: true });
          setPlayerDetails(player);
        }
      } else if (responseDataApi.active === "false") {
        setStateData({
          displayMessage: "the player is not available",
          playerIsActive: false
        });
      }
    } else {
      setStateData({
        displayMessage: "please enter a valid player's id",
        playerIsActive: false
      });
    }
  };

  return (
    <div id="landingPageContainer" className={classes.LandingPageContainer}>
      <div className={classes.contentContainer}>
        <ToggleSwitch />
        <Title title={"Player Archive"} state={uiState} />
        <InputField
          searchInput={searchInput}
          onChange={onChange}
          submitHandler={submitHandler}
          state={uiState}
        />
        {stateData.playerIsActive ? (
          <PlayerDetails {...playerDetails} />
        ) : (
          <Message title={stateData.displayMessage} state={uiState} />
        )}
      </div>
    </div>
  );
};

export default LandingPage;
