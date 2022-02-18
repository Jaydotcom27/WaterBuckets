export function greaterThan(x,y) {
    var maxValue = Math.max(x,y)
    if (x == maxValue && y != maxValue) return true
    return false
}
