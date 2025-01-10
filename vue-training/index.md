# VUE TRAINING

Purpose: go further on my understanding of Vue.js after working 9 months on a Vue project.

- create a quick start vue project https://vuejs.org/guide/quick-start
- cd vue-training
- npm install
- npm run format
- npm run dev


start : https://vueschool.io/lessons/getting-started-with-vue-js-and-the-composition-api on vue school
option api (vue2) vs composition api(vue3)

ref + v-model -> don't need to use useState/setState like in react, two way data binding for reactive references
2 ways = stay sync everywhere the ref is used

`ref` reactive reference

## run JavaScript expressions directly in the template
just one expression possible, you can't declare new variables inside

## List Rendering in Vue
In almost all applications, there is a need to iterate or loop through a list of items and render them on the page.

In this lesson, we're taking a closer look at Vue's v-for directive, which lets us iterate through arrays and objects in an elegant matter.

`v-for`

https://vueschool.io/articles/vuejs-tutorials/tips-and-gotchas-for-using-key-with-v-for-in-vue-js-3/

> Don't forget the key !

To know how and when rerender elements, should be unique. Is there is not id in the data list, use the index (vue does it by default)
:key attribute binding dynamic

destructuring is used in the example to get key cause data list is an object

v-for can handle objects too and not only array, index value will be the key

## User Inputs in Vue
You'll learn how to handle user inputs with the `v-model` directive. v-model gives super powers to text inputs, checkboxes, radio buttons, selects, and more!

bind
can't take modifier
after we blurred the input v-model.lazy
v-model.number
v-model.trim

can be used on text areas, select, radio button, check box and more

with iceCreamFlavors ref and array and checkboxes, selecting a checkbox add value to the array

