// You should implement your task here.

module.exports = function towelSort(matrix = 1) {
    if (!matrix) return [];
    let mass = [];
    for (let i = 0; i < matrix.length; i++) {
        mass = mass.concat(i % 2 != 0 ? matrix[i].reverse() : matrix[i]);
    }
    return matrix == 0 ? [] : mass;
}