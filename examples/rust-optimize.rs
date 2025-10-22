fn main() {
    let flux = 0.42;
    let fee  = quantos_core::recommend_priority_fee(flux);
    println!("demo fee {}", fee);
}
