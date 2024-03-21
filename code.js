function fib(n) { return fib_acc(n, 1, 1); }

function fib_acc(n, old, current) {
    if (n <= 2) return current;
    else       return fib_acc(n-1, current, old+current);
}