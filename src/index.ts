import { buildCombinationIter } from "./combinations.js";
import { cultivationTiers } from "./cultivationTiers.js";
import { statBoosterProbabilities } from "./scoring.js";
import { seeds } from "./seeds.js";
import { StatBoosterType } from "./statBoosterType.js";

function printAllStatBoosterProbabilities() {
    for (let numSeeds = 5; numSeeds > 0; numSeeds--) {
        const combinations = buildCombinationIter(seeds, numSeeds);
        for (const combination of combinations) {
            for (const cultivationTier of cultivationTiers) {
                const probabilities = statBoosterProbabilities(combination, cultivationTier);
                const result = `${combination.map(s => s.name)}\t${cultivationTier}\t${probabilityMapToString(
                    probabilities,
                )}`;
                console.log(result);
            }
        }
    }
}

function probabilityMapToString(probabilities: Map<StatBoosterType, number>): string {
    return Object.values(StatBoosterType)
        .map(
            statBoosterType => `${probabilities.get(statBoosterType) != null ? probabilities.get(statBoosterType) : 0}`,
        )
        .join("\t");
}

printAllStatBoosterProbabilities();
