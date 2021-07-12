export type playerObjData = {
  id: string;
  active: string;
  age: string;
  role: string;
  team: string;
  picture: string;
};

export type dataApiType = {
  id: string;
  active: string;
  "profile-id": string;
};

export type profileApiType = {
  id: string;
  profile: {
    age: string;
    role: string;
    team: string;
    picture: string;
  };
  stats: {
    blocks: string;
    totalTackles: string;
    interceptions: string;
    tacklesWon: string;
    yellowCards: string;
    passingAccuracy: string;
    clearances: string;
    totalCrosses: string;
    aerialDuelsWon: string;
    minutesPlayed: string;
    minutesPerGoal: string;
    headedGoals: string;
    foulsConceded: string;
    totalPasses: string;
    totalShots: string;
    otherGoals: string;
    duelsWon: string;
    shotsOnTarget: string;
    leftFootGoals: string;
    rightFootGoals: string;
    starts: string;
    goalsFromInsideBox: string;
    substitutionOff: string;
    foulsWon: string;
    assists: string;
    gamesPlayed: string;
    substitutionOn: string;
    redCards: string;
    goals: string;
    successfulCrosses: string;
    goalsFromOutsideBox: string;
  };
};

export const isDataApiType = (data: any): data is dataApiType => {
  return (
    typeof data === "object" &&
    typeof data.id === "string" &&
    !!data.id &&
    typeof data.active === "string" &&
    !!data.active &&
    typeof data["profile-id"] === "string" &&
    !!data["profile-id"]
  );
};

export const isProfileApiType = (data: any): data is profileApiType => {
  return (
    typeof data === "object" &&
    typeof data.id === "string" &&
    !!data.id &&
    typeof data.profile === "object" &&
    !!data.profile &&
    typeof data.profile.age === "string" &&
    !!data.profile.age &&
    typeof data.profile.role === "string" &&
    !!data.profile.role &&
    typeof data.profile.team === "string" &&
    !!data.profile.team &&
    typeof data.profile.picture === "string" &&
    !!data.profile.picture &&
    typeof data.stats === "object" &&
    !!data.stats
  )
}