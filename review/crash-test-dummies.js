// How high can we jump from without killing ourselves?
//
// Max 100 stories.
// Two crash test dummies.
// IFF dummy dies, I would die.
//
// Does damage compound?
// Only the number of drops is relevent, not total distance
// traveled.
//

// WRITE THINGS DOWN!

// Linear bottom up scan: O(n)

// Do we want to minimize the worst case as much as possible?

// Window congestion avoidence???

// Assume 1 is safe

// Type: Divide & Conquer

// Guess: 50
// Worst Case: Linear scan 1..49
// Items scanned: 48

//   Guess: 75
//   Worst Case: Linear scan 51..74
//   Items scanned: 23

//    Guess: 88
//    Worst Case: Linear scan 76..87
//    Items Scanned: 11

//////////////////////////////////////////

// Type: Linear Partition

// Guess: 10
// Worst Case: Linear scan 1..9
// Items Scanned: 8

//  Guess: 20
//  Worst Case: Linear scan 11..19
//  Items Scanned: 8

//    Guess: 30
//    Worst Case: Linear scan 21..29
//    Items Scanned: 8

//////////////////////////////////////////

// Type: Window Congestion Avoidence
// 100 * 0.1

// Guess: 10  (100 * 0.1)
// Worst Case: Linear scan 1..9
// Items scanned: 8

//  Guess: 30 (100 * 0.3)
//  Worst Case: Linear scan 11..29
//  Items Scanned: 18

//    Guess: 45 (100 * 0.45)
//    Worst Case: Linear scan 31..44
//    Items Scanned: 13
