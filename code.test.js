const fs = require('fs');
const assert = require('assert');

eval(fs.readFileSync('code.js')+'');

function controlFib(n) { // from the slides
    if (n <= 2) return 1;
    else        return controlFib(n-1) + controlFib(n-2);
}

for (let i = 0; i < 100; i++) {
    assert(fib(i) == controlFib(i));
}
