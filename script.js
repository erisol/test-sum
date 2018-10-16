function sum(a, b){
    if (typeof a !== 'number' || typeof b !== 'number') {
        return NaN;
        } else {
        
    return a + b;
        }
}

module.exports = {
    sum: sum
}
