function firstExampleOfTryCatch() {
    try {
        let obj = undefined;
        console.log(obj.b);
    } catch (error) {
        console.log("I caught an exception: " + error.message)
    }

    console.log("My application is still running!");
}

firstExampleOfTryCatch();