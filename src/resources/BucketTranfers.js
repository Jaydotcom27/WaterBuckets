
import { gcd } from '../resources/gcdCalc'

   export function getHappyPath(x , y , z) {

       if (x > y) {
           var t = x;
           x = y;
           y = t;
       }

       if (z > y)
           return -1;

       if ((z % gcd(y, x)) != 0)
           return -1;

       var history1 = pour(y, x, z, "y", "x");
       var history2 = pour(x, y, z, "x", "y");
       if (history1.length > history2.length){
           return history2
       } return history1
   }

    export function pour(fromCap , toCap , z, fromVar, toVar)
    {
        var steps = [];
        var from = fromCap;
        var to = 0;
 
        steps.push(`Filled bucket ${fromVar}`)
 
        while (from != z && to != z) {
 
            var temp = Math.min(from, toCap - to);
 
            to += temp;
            from -= temp;
 
            steps.push(`Transfered water from ${fromVar} to ${toVar}`)

            if (from == z || to == z)
                break;
 
            if (from == 0) {
                from = fromCap;
                steps.push(`Filled bucket ${fromVar}`)

            }
 
            if (to == toCap) {
                to = 0;
                steps.push(`Emptyed bucket ${toVar}`)

            }
        }
        return steps;
    }