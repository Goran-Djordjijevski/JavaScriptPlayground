// Truthy and falsy expressions

if (false) {} else { console.log("False is falsy"); }
if (null) {} else { console.log("Null is falsy"); }
if (undefined) {} else { console.log("undefined is falsy"); }
if (0) {} else { console.log("0 is falsy"); }
if (NaN) {} else { console.log("NaN is falsy"); }
if ('') {} else { console.log("an empty string with single-quotes is falsy"); }
if ("") {} else { console.log("an empty string with double-quotes is falsy"); }

// Everything else is truthy

if (true) { console.log("true is truthy"); }
if ({}) { console.log("an empthy object is truthy"); }
if ([]) { console.log("an empthy array is truthy"); }

if ("bob") { console.log("a non-empthy string is truthy"); }
if (new RegExp()) { console.log("a new instance of an object is truthy"); }

if (10) { console.log("positive integers is truthy"); }
if (-10) { console.log("negative integers is truthy"); }
if (1.23) { console.log("positive floats is truthy"); }
if (-1.23) { console.log("negative floats is truthy"); }
if (Infinity) { console.log("positive Infinity is truthy"); }
if (-Infinity) { console.log("negative Infinity is truthy"); }