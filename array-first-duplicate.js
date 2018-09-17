/**
 * @param {array} a
 * @return {number} first duplicate or -1 if duplicates doesn't exists
 */
function firstDuplicate(a) {
    let obj = {};
    for(let el of a) {
        if (!obj[el]) {
            obj[el] = true;
        } else {
            return el;
        }
    }
    
    return -1;
}
