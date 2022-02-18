export function greaterThan(x,y) {
    var maxValue2 = Math.max(x,y)
    if (x == maxValue2 && y != maxValue2) return true
    return false
}
