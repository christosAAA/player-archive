import React, { useState } from "react";
import classes from "./landingPage.module.css";
import { playerObjData } from "./types";
import { axiosResponse } from "./utils/axiosResponse";
import { createActivePlayer } from "./utils/createActivePlayer";
import ToggleSwitch from "./ToggleSwitch/ToggleSwitch";
import Title from "./Title/Title";
import InputField from "./InputField/InputField";
import PlayerDetails from "./PlayerDetails/PlayerDetails";
import Message from "./Message/Message";

const dataApiBase = "https://web-sandbox.onefootball.com/assignments/player/data/";
const profileApiBase = "https://web-sandbox.onefootball.com/assignments/player/profile/";

const uiState = "secondary";

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
    searchInput: string,
    axiosResponse: any
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
    <div id="landingPageContainer" className={classes.LandingPageContainer}>
      <div className={classes.contentContainer}>
        <ToggleSwitch />
        <Title title={"Player Archive"} state={uiState} />
        <InputField
          searchInput={searchInput}
          axiosResponse={axiosResponse}
          onChange={onChange}
          submitHandler={submitHandler}
          state={uiState}
        />
        {playerIsActive ? (
          <PlayerDetails {...playerDetails} />
        ) : (
          <Message title={displayMessage} state={uiState} />
        )}
      </div>
    </div>
  );
};

export default LandingPage;
