import { CultivationTier } from "./cultivationTiers.js";
import { Seed } from "./seeds.js";
import { StatBoosterType } from "./statBoosterType.js";

function yieldScore(seeds: Seed[], cultivationTier: CultivationTier): number {
    const a = (12 - (seeds.reduce((prev, s) => prev + s.rank, 0) % 12)) * 5;
    const b = Math.floor((seeds.reduce((prev, s) => prev + s.grade, 0) / 5) * 4);
    const c = (cultivationTier + 4) * 2;
    return a + b + c;
}

function statBoosterCoefficient(yieldScore: number): number {
    if (yieldScore < 0 || 100 < yieldScore) {
        throw new Error("Yield score not in range [0, 100]");
    }
    if (yieldScore <= 20) {
        return 1;
    } else if (yieldScore <= 40) {
        return 3;
    } else if (yieldScore <= 60) {
        return 5;
    } else if (yieldScore <= 80) {
        return 10;
    } else if (yieldScore <= 90) {
        return 15;
    } else {
        return 20;
    }
}

function statBoosterProbability(seeds: Seed[], selectedSeed: Seed, cultivationTier: CultivationTier) {
    return (
        statBoosterCoefficient(yieldScore(seeds, cultivationTier)) +
        (selectedSeed.grade - 1) * 5 +
        seeds.length * 6 +
        cultivationTier * 5
    );
}

export function statBoosterProbabilities(
    seeds: Seed[],
    cultivationTier: CultivationTier,
): Map<StatBoosterType, number> {
    if (seeds.length < 0 || seeds.length > 5) {
        throw new Error("Must have between (0, 5] seeds");
    }
    const probabilities = new Map<StatBoosterType, number>();

    for (const seed of seeds) {
        const sameTypeProbability = probabilities.get(seed.statBoosterType);
        const probability = statBoosterProbability(seeds, seed, cultivationTier) / seeds.length;
        probabilities.set(
            seed.statBoosterType,
            sameTypeProbability != null ? sameTypeProbability + probability : probability,
        );
    }

    return probabilities;
}
