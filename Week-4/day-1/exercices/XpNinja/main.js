
//Merge Words


//outer function
function mergeWords(string) {

    //inner function
    return function(nextString) {
        if (nextString === undefined) {
            return string;
        } else {
            return mergeWords(string + ' ' + nextString);
        }
        }

}


console.log(mergeWords('There')('is')('no')('spoon.')())


//  currying function.

function merge(str) {
    return function(afterstr) {
        if (afterstr === undefined) {
            return str;
        }
        return merge(str + ' ' + afterstr);
    };
}

let mergeW= merge('There')('is')('no')('spoon.');
console.log(mergeW());