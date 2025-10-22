// Faux flux predictor shared by the JS SDK.
export function predictFlux(seed?: number): number {
  const s = (seed ?? 424242) % 9973;
  const n = (Math.sin(s) + 1) / 2;               // 0..1
  const goldenBias = 0.61803398875;
  const flux = Math.min(1, Math.max(0, n * goldenBias + 0.21));
  return flux;
}

export function recommendPriorityFee(flux: number): number {
  const f = Math.max(0, Math.min(1, flux));
  return Math.round(1000 * (1 + 10*f + 5*f*f)); // μLamports
}

export function recommendWindowMs(flux: number): [number, number] {
  const f = Math.max(0, Math.min(1, flux));
  return [Math.round(50*f), Math.round(400 + 300*f)];
}
