import { isDataApiType } from "./types";

const dataCorrectFormat = {
  id: "fabio",
  active: "true",
  "profile-id": "profile-111.json"
};
const dataEmptyFormat = {
  id: "",
  active: "",
  "profile-id": ""
};
const dataDifferentTypes = {
    id: 2,
    active: true,
    "profile-id": 1
  };
const dataLessEntries = {
  id: "fabio",
  "profile-id": "profile-111.json"
};

const dataFromProfileApi = {
  id: "fabio",
  profile: {
    age: "33",
    role: "centre-back",
    team: "Juventus",
    picture: "https://dummyimage.com/170x170/eead47/000000&text=Fabio"
  },
  stats: {
    blocks: "7",
    totalTackles: "31",
    interceptions: "41",
    tacklesWon: "28",
    yellowCards: "6",
    passingAccuracy: "87.2",
    clearances: "95",
    totalCrosses: "8",
    aerialDuelsWon: "61",
    minutesPlayed: "1993",
    minutesPerGoal: "1993.0",
    headedGoals: "0",
    foulsConceded: "30",
    totalPasses: "1833",
    totalShots: "9",
    otherGoals: "0",
    duelsWon: "106",
    shotsOnTarget: "4",
    leftFootGoals: "1",
    rightFootGoals: "0",
    starts: "23",
    goalsFromInsideBox: "1",
    substitutionOff: "3",
    foulsWon: "7",
    assists: "1",
    gamesPlayed: "23",
    substitutionOn: "0",
    redCards: "0",
    goals: "1",
    successfulCrosses: "5",
    goalsFromOutsideBox: "0"
  }
};
const dataEmpty = {};

describe("isDataApiTypeDate", () => {
  it("should return true - normal state", () => {
    let result = isDataApiType(dataCorrectFormat);
    expect(result).toEqual(true);
  });
  it("should return false - empty data should not be accepted", () => {
    let result = isDataApiType(dataEmptyFormat);
    expect(result).toEqual(false);
  });
  it("should return false - diferrent types not be accepted", () => {
    let result = isDataApiType(dataDifferentTypes);
    expect(result).toEqual(false);
  });
  it("should return false - less entries not be accepted", () => {
    let result = isDataApiType(dataLessEntries);
    expect(result).toEqual(false);
  });
  it("should return false - entries from profile api not be accepted", () => {
    let result = isDataApiType(dataFromProfileApi);
    expect(result).toEqual(false);
  });
  it("should return false - empty object", () => {
    let result = isDataApiType(dataEmpty);
    expect(result).toEqual(false);
  });
});


const dataNull = null;
const dataFalse = false;
const dataUndefined = undefined;

describe("cases when is not object", () => {
    it("should return false", () => {
      let result = isDataApiType(dataNull);
      expect(result).toEqual(false);
      result = isDataApiType(dataFalse);
      expect(result).toEqual(false);
      result = isDataApiType(dataUndefined);
      expect(result).toEqual(false);
    });
  });