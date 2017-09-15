//eloquent javascript, chapter 3, recursion

function isEven(number) {
    if(!isNaN(number)) {
        var absoluteNumber = Math.abs(number);

        if (absoluteNumber == 0) {
            return true;
        }
        else if (absoluteNumber == 1) {
            return false;
        }
        else {
            return isEven(absoluteNumber-2);
        }
    }
    else {
        return "The argument must be a number";
    }
}

console.log(isEven(-50));
console.log(isEven(75));
console.log(isEven(-1));
