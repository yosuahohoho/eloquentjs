//eloquent javascript chapter3, minimum

function min(a, b) {
    // return the smallest number, if input number is same return "a and b is same"
    if (!isNaN(a) && !isNaN(b)) {
        if (a < b) {
            return a;
        }
        else if (b < a) {
            return b;
        }
        else {
            return a + " and " + b + " is same..";
        }
    }
    else {
        return "The arguments must be numbers";
    }

}

console.log(min(2,1));
console.log(min(3,10));
console.log(min(10,10));
console.log(min(10,"three"));
