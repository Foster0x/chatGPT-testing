function firstThree(array) {
    return array.filter((str, i) => {
        return i < 3;
    });
}

module.exports = firstThree;


function unique(array) {
    return array.filter((str, i) => {
        return array.indexOf(str) === i;
    });
}

module.exports = unique;