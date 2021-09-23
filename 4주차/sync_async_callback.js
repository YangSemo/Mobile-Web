"use strict"

// Sync callback
{
    function doSomething(cb, delay) {
        cb();
    }

    console.log("Sync-start");

    doSomething(() => {
        console.log("Sync callback");
    }, 0);

    console.log("Sync-End");
}
console.log("========");

// Async callback
{
    console.log("Async-start");

    setTimeout(() => {
        console.log("Async callback");
    }, 0);
    console.log("Async-end");
}