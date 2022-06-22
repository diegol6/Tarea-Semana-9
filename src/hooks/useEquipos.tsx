import React, { useEffect, useState } from "react";
import { conexionAPI } from "../api/conexionAPI";
import { EquipoResponse , Team } from "../tipos/Tipos";

export const useEquipos = () => {

    const [equipos , setEquipos] = useState<Team[]>([]);

    const getEquipos = async () =>{
    try {
        const rpta = await conexionAPI.get<EquipoResponse>("/v1/json/2/search_all_teams.php?l=English%20Premier%20League",{

        });
        setEquipos(rpta.data.teams);

    } catch (err) {
        console.log(err);
    }

};

    useEffect(() =>{
        console.log('Arrancando Hook');
        getEquipos();
    }, []);

    return{
        equipos
    };

};