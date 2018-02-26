// var keyword
function varTest1() {
    for (var i = 0; i < 10; i++) {
        console.log(i); // print value from 0 to 9
    }

    console.log(i); // print value 10

    /*
        This is because i is still valid outside the for loop - the scope of i is not bounded by the curly braces {} 
    */
}

varTest1();