import React from "react";
import SubText from "../SubText/SubText";
import classes from "./PlayerDetails.module.css";

export default function PlayerDetails(playerDetails: any) {
  return (
    <div id="playerContainer" className={classes.playerContainer}>
      <img src={playerDetails.picture} alt="" />
      <div className={classes.playerInfo}>
        <div>
          <div className={classes.playerName}>{playerDetails.id}</div>
          <div className={classes.activeIcon}>Active</div>
        </div>
        <div>
          <SubText title="Age:" content={playerDetails.age} />
          <SubText title="Role:" content={playerDetails.role} />
          <SubText title="Team:" content={playerDetails.team} />
        </div>
      </div>
    </div>
  );
}
