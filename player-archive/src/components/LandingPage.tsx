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
import { uiState } from "./configUI";
import { isDataApiType} from "./types";
// const dataApiBase = "https://web-sandbox.onefootball.com/assignments/player/data/";
// const profileApiBase = "https://web-sandbox.onefootball.com/assignments/player/profile/";

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
    // axiosResponse: (apiBase: string, playerName: string)=>Promise<dataApiType | profileApiType>
  ) => {
    e.preventDefault();
    // Returns the player's data if the player exists otherwise returns false
    const responseDataApi = await axiosResponse("http://localhost:80/data/", searchInput); //dataApiBase

    if (isDataApiType(responseDataApi)) {
      if (responseDataApi.active === "true") {
        const player = await createActivePlayer(
          "http://localhost:80/profile/",
          responseDataApi
        ); //profileApiBase

        if (player) {
          setplayerIsActive(true);
          setPlayerDetails(player);
          setDisplayMessage("");
        }
      } else if (responseDataApi.active === "false") {
        setplayerIsActive(false);
        setDisplayMessage("the player is not available");
      }
    } else {
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
