// const chai = "chai"
// const spy = "chai-spices"
const chai = () => {
    return spy
}

function receivesAFunction(spy) {
    return spy();
}


// function receivesAFunction(callback) {
//     return callback();
// }

const fn = () => {
    return console.log("fn function returned");
}

function returnsANamedFunction() {
    return (fn);
}

function returnsAnAnonymousFunction() { {
    return function () { return "an anonymous function"}};
}
