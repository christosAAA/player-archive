import { axiosResponse } from "./axiosResponse";
import { isProfileApiType } from "../types/types";

// Gets the base url for profile api and the object from data api
// Returns an object with all the necessary information for the player

export const createActivePlayer = async (
  profileApiBase: string,
  responsePlayerId: any
) => {
  const responseProfileID = await axiosResponse(
    profileApiBase,
    responsePlayerId["profile-id"]
  );
  // Type guard 
  if (isProfileApiType(responseProfileID)) {
    return {
      id: responseProfileID.id,
      active: responsePlayerId.active,
      age: responseProfileID.profile.age,
      role: responseProfileID.profile.role,
      team: responseProfileID.profile.team,
      picture: responseProfileID.profile.picture
    };
  }
};
