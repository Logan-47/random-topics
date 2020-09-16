// https://www.youtube.com/watch?v=8aGhZQkoFbQ

// -------------- How does JavaScript even works ? ----------------

// --> single threaded, non-blocking, asynchronous, concurrent language
//  --> I have a call stack an event loop, a Callback queue some other apis and stuff

// ------------------ The Call Stack -------------------------

// -> one thread --> one call stack ---> one this at a time

// ------------- Blocking -------------------
// -> what happens when things are slow?
// -> asynchronous callbacks

// -------------- concurrency and the event loop --------------
// task queue : when Web APIs are done they push it to queue
// Event Loop job is to look at the stack and look at the task queue
// -> if stack is empty it takes first thing in queue and push it to stack

// => setTimeout is not gauranteed time to execution, it is minimum time to execution

console.log("hello");

setTimeout(() => {
  console.log("there");
}, 0); // will go into task queue

console.log("world");

// OUTPUT: hello -> world -> there

// => don't block the event loop,
// => don't put slow code in stack
