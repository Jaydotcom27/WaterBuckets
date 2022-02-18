// import { gcd } from "../resources/gcdCalc";

// export function getHappyPath(x, y, z) {
//   if (x > y) {
//     var t = x;
//     x = y;
//     y = t;
//   }

//   //   if (z > y) return -1;

//   if (z % gcd(y, x) != 0) return -1;

//   var history1 = pour(y, x, z, "y", "x");
//   var history2 = pour(x, y, z, "x", "y");
//   if (history1.length > history2.length) {
//     return history2;
//   }
//   return history1;
// }

// export function pour(fromCap, toCap, z, fromVar, toVar) {
//   var steps = [];
//   var from = fromCap;
//   var to = 0;

//   steps.push(`Filled bucket ${fromVar}`);

//   while (from !== z && to !== z) {
//     var temp = Math.min(from, toCap - to);

//     to += temp;
//     from -= temp;

//     steps.push(`Transfered water from ${fromVar} to ${toVar}`);

//     if (from === z || to === z) break;

//     if (from === 0) {
//       from = fromCap;
//       steps.push(`Filled bucket ${fromVar}`);
//     }

//     if (to === toCap) {
//       to = 0;
//       steps.push(`Emptyed bucket ${toVar}`);
//     }
//   }
//   return steps;
// }

import { gcd } from "../resources/gcdCalc";
import { greaterThan } from "./MathHelpers";

// export function getHappyPath(x, y, z) {
//   if (x > y) {
//     var t = x;
//     x = y;
//     y = t;
//   }

//     if (z > y) return ["Error Z >"];

//   if (z % gcd(y, x) != 0) return ["Error GCD"];

//   var history1 = pour(y, x, z, "y", "x");
//   var history2 = pour(x, y, z, "x", "y");
//   if (history1.length > history2.length) {
//     return history2;
//   }
//   return history1;
// }

export function getHappyPath(x, y, z) {
  if (greaterThan(x,y)) {
    var t = x;
    x = y;
    y = t;
  }

  if (greaterThan(z,y)) return ["Error", "Z (goal) can't be greater than Y or X, not possible to measure"];
  
  if (x == 0 || y == 0 || z == 0) return ["Error", "Lookout for 0 values"];
  
  if (z % gcd(y, x) != 0) return ["Error", "The Greatest Common Divisor of X and Y doesn't divide Z"];


  var history1 = pour(y, x, z, "y", "x");
  var history2 = pour(x, y, z, "x", "y");
  if (history1.length > history2.length) {
    return history2;
  }
  return history1;
}

export function pour(fromCap, toCap, z, fromVar, toVar) {
  var steps = [];
  var from = fromCap;
  var to = 0;

  steps.push({ Step: steps.length, Action: "Fill", Bucket1: fromVar });

  while (from != z && to != z) {
    var temp = Math.min(from, toCap - to);

    to += temp;
    from -= temp;

    steps.push({
      Step: steps.length,
      Action: "Transfer",
      Bucket1: fromVar,
      Bucket2: toVar,
    });

    if (from == z || to == z) break;

    if (from == 0) {
      from = fromCap;
      steps.push({ Step: steps.length, Action: "Fill", Bucket1: fromVar });
    }

    if (to == toCap) {
      to = 0;
      steps.push({ Step: steps.length, Action: "Dump", Bucket1: toVar });
    }
  }
  return steps;
}
