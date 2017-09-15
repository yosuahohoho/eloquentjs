//eloquent javascript, chapter 2, FizzBuzz

for (var num=1; num <= 100; num++) {
    var result = "";

    if (num % 3 == 0) {
        result += "Fizz";
    };

    if (num % 5 == 0) {
        result += "Buzz";
    };

    console.log(result || num);
}
