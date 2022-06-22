export interface EquipoResponse {
    teams: Team[];
}

export interface Team {
    idTeam:             string;
    idSoccerXML:        string;
    idAPIfootball:      string;
    intLoved:           string;
    strTeam:            string;
    strTeamShort:       string;
    strAlternate:       string;
    intFormedYear:      string;
    strSport:           string;
    strLeague:          string;
    strManager:         string;
    strStadium:         string;
    strKeywords:        string;
    strRSS:             string;
    strStadiumThumb:    string;
    strStadiumLocation: string;
    intStadiumCapacity: string;
    strWebsite:         string;
    strFacebook:        string;
    strTwitter:         string;
    strInstagram:       string;
    strKitColour1:      string;
    strKitColour2:      string;
    strGender:          string;
    strCountry:         string;
    strTeamBadge:       string;
    strTeamJersey:      string;
    strTeamLogo:        string;
    strTeamFanart1:     string;
    strTeamFanart2:     string;
    strTeamFanart3:     string;
    strTeamFanart4:     string;
    strTeamBanner:      string;
    strYoutube:         string;
    strLocked:          string;
}