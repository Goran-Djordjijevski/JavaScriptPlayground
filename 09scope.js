let x = "first";

function scopeTest() {
    console.log(x);
    x = "changed";

    if (x != "") {
        console.log(x);

        let y = "second";
    }

    // console.log(y);
}

scopeTest();

console.log(x);