import { Warband } from "../../ducks/warbands";

export const selectHeroes = (warband: Warband = {}) => warband.heroes || {};
export const selectHenchmen = (warband: Warband = {}) => warband.henchmen || {};
