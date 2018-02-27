setTimeout(function () {
    console.log("I waited 2 seconds");
}, 2000);

let counter = 0;
function timeOut() {
    setTimeout(function () {
       console.log("hi " + counter++);
       timeOut(); 
    }, 2000);
}

timeOut();

// IIFE

(function() {
    console.log("Immediately Invoked Function Expression");
})();