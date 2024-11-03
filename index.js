//! Question 1
const path = require("path");
console.log("Full Path of Current File:" + " " + path.resolve(__filename));

//! Question 2
let getExtension = (filepath) => {
  return path.extname(filepath);
};
console.log("Extension of Current File:" + " " + getExtension(__filename));

// //! Question 3
let isAbsolute = (filepath) => {
  return path.isAbsolute(filepath);
};
console.log("Absolute Path of Current File:" + " " + isAbsolute(__filename));

// //! Question 4
let joinPaths = (path1, path2) => {
  return path.join(path1, path2);
};
console.log("Path of Current File:" + " " + joinPaths(__filename, "index.js"));

// //! Question 5
let parseFormat = (filepath) => {
  let parsed = path.parse(filepath);
  let formated = path.format(parsed);
  console.log(`parse of ${filepath} is`, parsed);
  console.log(`format of ${filepath} is ${formated}`);
};

parseFormat(__filename);

// //! Question 6
const fs = require("fs");
let delFile = (filepath) => {
  fs.unlink(filepath, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("File Deleted Successfully");
    }
  });
};
delFile("E:/DEV/Route/Node js/Assignment 3/data.txt");

// //! Question 7
let createFolder = (folderpath) => {
  fs.mkdir(folderpath, (err) => {
    err ? console.log(err) : console.log("Folder Created Successfully");
  });
};
createFolder("E:/DEV/Route/Node js/Assignment 3/data");

const EventEmitter = require("events");
const eventEmitter = new EventEmitter();
// //! Question 8
let createEvent = (event, msg) => {
  eventEmitter.on(event, () => {
    console.log(
      `The ${event} Event is triggered and the message ${msg} is logged.`
    );
  });
  eventEmitter.emit(event);
};
createEvent("greet", "Hello Event!");

fs.writeFileSync(
  "./bonus.js",
  `
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
`,
  "utf-8"
);

fs.writeFileSync(
  "./bonus.js",
  `
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
  `,
  { flag: "a" }
);
 