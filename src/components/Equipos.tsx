import React from "react";
import { Equipo } from "./Equipo";
import { conexionAPI } from "../api/conexionAPI";
import { Team , EquipoResponse } from "../tipos/Tipos";
import { useEquipos } from "../hooks/useEquipos";

export const Equipos = () => {
    const { equipos } = useEquipos();

    return (
        <div>
            <div className="flexContainerUsers">
                {equipos.map((team) =>(
                    <Equipo team={team} key={team.idTeam.toString()} />
                ))}
            </div>
        </div>
    );
};
