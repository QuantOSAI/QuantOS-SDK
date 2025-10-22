import { predictFlux, recommendPriorityFee, recommendWindowMs } from "./flux.js";

export type OptimizeInput = {
  recentBlockhash: string;
  message: Uint8Array;
  seed?: number;
};

export type OptimizeOutput = {
  flux: number;
  priorityFee: number;         // μLamports
  sendWindowMs: [number, number];
};

export function optimizeTransaction(input: OptimizeInput): OptimizeOutput {
  // Seed can be derived from blockhash length as a goofy nonce
  const seed = input.seed ?? input.recentBlockhash.length * 1337;
  const flux = predictFlux(seed);
  return {
    flux,
    priorityFee: recommendPriorityFee(flux),
    sendWindowMs: recommendWindowMs(flux),
  };
}

export { predictFlux, recommendPriorityFee, recommendWindowMs };
