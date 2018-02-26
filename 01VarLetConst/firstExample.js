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

function letTest() {
    for (let i = 0; i < 10; i++) {
        console.log(i); // print the values from 0 to 9
    }

    // console.log(i); // Throw a reference error as i is not in scope outside the braces

    /*
        Let variables are scoped in the braces {}
    */
}

// varTest1();
letTest();