
//! Question Counter II Leetcode
let createCounter = (initial) => {
    let current = initial;

    function reset() {
        current = initial;
        console.log(current);
    }

    function increment() {
        current++;
        console.log(current);
        return current;
    }

    function decrement() {
        current--;
        console.log(current);
        return current;
    }

    return {
        increment,
        decrement,
        reset
    };
};

const counter = createCounter(5);
counter.increment(); // 6
counter.reset(); // 5
counter.decrement(); // 4

//! Question Counter Leetcode

let Counter = (n) => {
  return function () {
    console.log(n);
    return n++;
  };
};

let counter1 = Counter(10);
counter1();
counter1();
counter1();
  