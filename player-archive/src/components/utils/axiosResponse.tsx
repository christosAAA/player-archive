import axios from "axios";
// This function is been use for both APIs
// If the user exists returns the data
// If user doesn't exist in the the response is 403 so it returns false for further manipulation
// Checks the ending of the response for id and for profile-id and build the url accordingly

export const axiosResponse = async (apiBase: string, playerName: string) => {
  let getUrl = "";
  if (playerName.endsWith(".json")) {
    getUrl = `${apiBase}${playerName}`;
  } else {
    getUrl = `${apiBase}${playerName}.json`;
  }
  return axios
    .get(getUrl)
    .then((response) => response.data)
    .catch(() => false);
};
