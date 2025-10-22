//! QuantOS Core Library
//! Quantum-inspired transaction optimizer for Solana

use rand::prelude::*;

pub fn predict_flux(seed: Option<u64>) -> f64 {
    let mut rng: StdRng = match seed {
        Some(s) => SeedableRng::seed_from_u64(s),
        None => SeedableRng::seed_from_u64(424242),
    };
    let base: f64 = rng.gen();
    (base * 0.61803398875 + 0.21).min(1.0)
}

pub fn recommend_priority_fee(flux: f64) -> u64 {
    let f = flux.clamp(0.0, 1.0);
    (1000.0 * (1.0 + 10.0*f + 5.0*f*f)).round() as u64
}

pub fn recommend_window_ms(flux: f64) -> (u64, u64) {
    let f = flux.clamp(0.0, 1.0);
    ((50.0*f) as u64, (400.0 + 300.0*f) as u64)
}
