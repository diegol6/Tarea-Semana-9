import React from "react";
import "../Styles.css";
import { Team } from "../tipos/Tipos";

interface EquipoProps{
    team : Team;
}

export const Equipo = ({ team }: EquipoProps) => {
    return(
        <div className="userContainer">
            <img style={{  width:150, height:125}} src={team.strTeamBadge}/>
            <span style={{ fontSize: 18, fontWeight: "bold", marginTop:10 }}>
            {team.strTeam}
            </span>
            <span style={{ fontSize: 14 }}>{team.intFormedYear}</span>
            <span style={{ fontSize: 18, fontWeight: "bold", marginTop:10 }}>
            {team.strStadium}
            <img style={{  width:150, height:125}} src={team.strStadiumThumb} alt="estadio" />
            
            
            </span>
            
            <span>Cap: {team.intStadiumCapacity}</span>
            <img style={{  width:150, height:125}} src={team.strTeamJersey}/>
            
            
        </div>
    );
};