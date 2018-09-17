/**
 * @param {string} s
 * @return {string} First non repeating char or "_" if there is none
 */
function firstNotRepeatingCharacter(s) {
    let duplicates = {};
    let unique = {};
  
    for (let el of s.split('')) {
        if (!unique[el] && !duplicates[el]) {
            unique[el] = true;
        } else if (!duplicates[el]) {
            duplicates[el] = true;
            delete unique[el];
        }
    }
    
    let uniqueKeys = Object.keys(unique);
    if (!uniqueKeys.length) {
        return "_";
    }
    
    return uniqueKeys[0];
}
