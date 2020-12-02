const wordSearch = (letters, word) => { 
    const horizontalJoin = letters.map(ls => ls.join(''));
    for (l of horizontalJoin) {
        if (l.includes(word) && word) {
            return true
        };
    };
    let verticalLetters = [];
    for (let i = 0; i <letters[0].length; i++) {
        verticalLetters.push([]);
    }
    for (let i = 0; i < letters.length; i++) {
        for( let j = 0; j < letters[i].length; j++) {
            verticalLetters[j].push(letters[i][j]);
        }
    }
    const verticalJoin = verticalLetters.map(ls => ls.join(''));
    for (l of verticalJoin) {
        if (l.includes(word) && word) {
            return true
        };
    };
    

    return false;    
    
}

module.exports = wordSearch