# API Reference

## Rust
### `predict_flux(seed: Option<u64>) -> f64`
Predicts Solana network flux intensity between 0.0 and 1.0.

### `recommend_priority_fee(flux: f64) -> u64`
Returns a suggested microlamport fee proportional to flux.

### `recommend_window_ms(flux: f64) -> (u64, u64)`
Suggests optimal transaction dispatch windows (ms).

---

## TypeScript
### `optimizeTransaction(input)`
Optimizes transaction metadata for Solana RPCs.

Returns:
```ts
{
  flux: number;
  priorityFee: number;
  sendWindowMs: [number, number];
}
