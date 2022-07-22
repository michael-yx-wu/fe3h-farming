import { Seed } from "./seeds.js";

export function buildCombination(
    seeds: Seed[],
    maxLength: number,
    combinations: Seed[][],
    combination: Seed[],
    startIndex: number,
) {
    if (combination.length === maxLength) {
        combinations.push(combination);
        return;
    }
    for (let i = startIndex; i < seeds.length; i++) {
        buildCombination(seeds, maxLength, combinations, combination.concat(seeds[i]), i);
    }
}

export function buildCombinationIter(seeds: Seed[], maxLength: number): Seed[][] {
    const combinations: Seed[][] = [];
    const iterators = new Array(maxLength).fill(0);
    let itIndex = iterators.length - 1;
    while (true) {
        // Iterate through iterator values to build a combination
        const combination: Seed[] = [];
        for (let it = 0; it < iterators.length; it++) {
            combination.push(seeds[iterators[it]]);
        }
        combinations.push(combination);

        // Increment iterators aka counting in base "maxLength" except when we carry over, we reset
        // all lower digits to the greatest digit's value instead of 0
        while (iterators[itIndex] + 1 === seeds.length) {
            itIndex--;
        }
        if (itIndex < 0) {
            break;
        } else {
            iterators[itIndex]++;
            // Reset "lower" iterators
            for (let i = itIndex + 1; i < iterators.length; i++) {
                iterators[i] = iterators[itIndex];
            }
            itIndex = iterators.length - 1;
        }
    }
    return combinations;
}
