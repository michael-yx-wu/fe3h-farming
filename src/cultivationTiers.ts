export const cultivationTiers = [1, 2, 3, 4, 5, 6] as const;
export type CultivationTier = typeof cultivationTiers[number];
