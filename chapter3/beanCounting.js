//eloquent javascript, chapter 3, Bean Counting
function countChar(word, char) {
    var total = 0;
    for (var i=0; i < word.length; i++) {
        if (word.charAt(i) == char) {
            total++;
        }
    }
    return total;
}

function countBs(word) {
    return countChar(word, "B");
}

console.log(countBs("BaBaba"));
console.log(countBs("no b"));
console.log(countBs("BaBaBabu"));
