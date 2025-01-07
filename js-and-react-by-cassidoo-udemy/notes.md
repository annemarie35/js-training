# JavaScript and React for Developers: Master the Essentials

Bought this course by [Cassidoo](https://cassidoo.co/) in 2021 but never took it.

[link](https://www.udemy.com/course/js-and-react-for-devs/?couponCode=NEWYEARCAREERFT)

## 1.Introduction

## 2.DOM

```js
document.querySelector(".list"); // class='list' returns the first element matching the query
document.querySelectorAll("list"); // returns an array
document.querySelectorAll("list").children;
document.querySelectorAll("list").children[0].innerHTML;
document.querySelectorAll("list").children[0].innerHTML = "another value "; // manipulate the DOM

// Add element and some attributes
createElement();
createAttribute();

document.createElement("p"); // create en empty p
const toto = document.createElement("p");
toto.innertText = "tex inside the element";

document.body.appendChild(toto); // add the created element to the page

var attribute = document.createAttribute("id");
attribute.value = "created-id";

toto.setAttributeNode(attribute); // set that on the paragraph

// exercice implement function getElementsByAttribue(attribute, value)
```

## 3. Events and callbacks

event occurences happens in the browser
document
hundred of events, some are commons :

- click
- resize
- keydown, keypress, keyup
- mouseover
- load
  you also can make your custom event

### event handler

```js
window.addEventListener("load", function (event) {
    console.log("hey !!");
});
// select a button element
// add an event listener
// name the event
// put the result on a callback
```

## 4.Ajax

Quick history

- old web pages needed a complete refresh to get new data, poor user experience
- released in 2005 but still relevant in 2018 a new approcag to web application, not a programming language but new approach with web technologies like the dom, javascript, etc
- misleading name but powerfull tool : can use xml to transport data but more common to use json or plain text
- improve ability to make http requests, computer send request and web services send response; ajax make

asynchronous vs asynchronous
wait the task is finished or not to make the task
ajax use the both

what is ajax
and making http requests

- https methods
- status codes
    - 100-level - **hold on** : indicates that the request was received and understood
    - 200-level - **here you go** : indicates the action requested by the client was received, understood, accepted and processed successfully
    - 300-level - **go away** : indicates the client must take additionnal action to complete the request, often use for redirection
    - 400-level - **you messed up**: the error seems to have been caused by the client
    - 500 level - **server's messed up** : the server failed to fulfill a valid request

in theory need a method to **request** and a **handler**

With callback method

```js
const a = new XMLHttpRequest();
// readystatechange event from ajax request, listen to api response
// r = event object captured by the target
// get status of the event
a.addEventListener("readystatechange", (r) => {
    if (r.target.status === 200) {
        console.log(r.target.response);
    }
});

a.open("GET", "https://api.github.com/users/annemarie35");
// send the ajax request
a.send();
// the state change, the event is triggered
// json as response
```

### With promises

fetch api
then similar to callbacks, promises are js objects wich can be returned synchronously from an asynchronously function

- pending - incomplete
- fulfilled - complete
- rejected - failed

- [Introduction à fetch() ](https://web.dev/articles/introduction-to-fetch?hl=fr)
- [https://dev.to/damcosset/i-promise-i-wont-callback-anymore-cp3](https://dev.to/damcosset/i-promise-i-wont-callback-anymore-cp3)
- [Promesses JavaScript: introduction](https://web.dev/articles/promises?hl=fr)

when promise resolves
fetch have specific response (.json(), ok false/true, etc.)

## 5.Json (javascript object notation)

Json is a set of text formatting rules that stores and transfers data and build a machine and human readeable way. **a lightweight data interchange format**
It is not javascript, it is its own language but essential for js development as well as other languages 
keys values pair which follow a very specific syntax 

```javascript
JSON.stringify() // Turn a JSON into a string
JSON.parse() // Turn a string into a JSON
```
