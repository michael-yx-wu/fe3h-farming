import { StatBoosterType } from "./statBoosterType.js";

export interface Seed {
    name: string;
    grade: 1 | 2 | 3 | 4 | 5;
    rank: number;
    statBoosterType: StatBoosterType;
}

export const seeds: Seed[] = [
    { name: "Mixed Herb Seeds", grade: 1, rank: 27, statBoosterType: StatBoosterType.STR },
    { name: "Western Fodlan Seeds", grade: 1, rank: 9, statBoosterType: StatBoosterType.HP },
    { name: "Root Vegetable Seeds", grade: 1, rank: 49, statBoosterType: StatBoosterType.DEF },
    { name: "Vegetable Seeds", grade: 1, rank: 33, statBoosterType: StatBoosterType.RES },
    { name: "Northern Fodlan Seeds", grade: 2, rank: 53, statBoosterType: StatBoosterType.CHA },
    { name: "Morfis-Plum Seeds", grade: 4, rank: 18, statBoosterType: StatBoosterType.DEX },
    { name: "Southern Fodlan Seeds", grade: 2, rank: 37, statBoosterType: StatBoosterType.MAG },
    { name: "Morfis Seeds", grade: 2, rank: 23, statBoosterType: StatBoosterType.DEX },
    { name: "Nordsalat Seeds", grade: 4, rank: 3, statBoosterType: StatBoosterType.SPD },
    { name: "Boa-Fruit Seeds", grade: 5, rank: 31, statBoosterType: StatBoosterType.LCK },
    { name: "Albinean Seeds", grade: 2, rank: 20, statBoosterType: StatBoosterType.CHA },
    { name: "Eastern Fodlan Seeds", grade: 2, rank: 42, statBoosterType: StatBoosterType.DEF },
    { name: "Angelica Seeds", grade: 5, rank: 34, statBoosterType: StatBoosterType.STR },
    { name: "Mixed Fruit Seeds", grade: 1, rank: 44, statBoosterType: StatBoosterType.LCK },
    { name: "Red Flower Seeds", grade: 3, rank: 24, statBoosterType: StatBoosterType.RES },
    { name: "White Flower Seeds", grade: 3, rank: 5, statBoosterType: StatBoosterType.CHA },
    { name: "Blue Flower Seeds", grade: 3, rank: 38, statBoosterType: StatBoosterType.HP },
    { name: "Purple Flower Seeds", grade: 3, rank: 16, statBoosterType: StatBoosterType.STR },
    { name: "Yellow Flower Seeds", grade: 3, rank: 55, statBoosterType: StatBoosterType.MAG },
    { name: "Green Flower Seeds", grade: 3, rank: 10, statBoosterType: StatBoosterType.DEX },
    { name: "Pale-Blue Flower Seeds", grade: 3, rank: 1, statBoosterType: StatBoosterType.SPD },
];
