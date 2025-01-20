# Vue.js 3 Fundamentals with the Composition API

start : https://vueschool.io/lessons/getting-started-with-vue-js-and-the-composition-api on vue school
option api (vue2) vs composition api(vue3)

## Vue Template Syntax and Expressions
ref + v-model -> don't need to use useState/setState like in react, two way data binding for reactive references
2 ways = stay sync everywhere the ref is used

`ref` reactive reference

-> run JavaScript expressions directly in the template
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

## User Events in Vue 3
respond to and handle user events with Vue's v-on directive.

`v-on:click` same thing as `@click`

`v-on:keyup.enter` enter is a modifier

with form v-on:submit.prevent` same as e.prevent.default()

with form, the use of enter key instead of submit works, so we remove `    v-on:keyup.enter="items.push({id: items.length + 1,label: newItem})"
`

## Methods in Vue with the Composition API
When the expression gets too verbose, or we need the same logic in multiple places, we can extract the logic to a function and fire the function instead. These functions are called methods and allow us to DRY up the code.

encapsulate `items.push({id: items.length + 1,label: newItem}) in a new method

inside the script section, to acces the value of some refactive reference, we have to use a special property named `value` because Vue.js uses proxies in order to create reactive data. That's not the case for primitive values such as strings, numbers or boolean. (?)

## Conditionals in Vue

Conditional rendering is essential on any dynamic website. Vue.js offers two ways to render elements on our page conditionally, and in this lesson we're learning how the **v-if** and **v-else** directives work.

not appearing in the form

## HTML Attribute Binding in Vue
We know how to render data in the DOM with Vue 3, and now it's time to take a closer look at how we can bind HTML attributes to our Vue data.

This is achieved with Vue's **v-bind** directive and would let us change the href (or any other HTML attribute) of a link or swap out an image if we need to.

NOTE: for the link to work properly you should provide the protocol in the input (http:// or https://)

{{ double mustache syntax

`v-bind:disabled="!editing" is mostly used with the syntax `:disabled="!editing"`

## Dynamic CSS Classes with Vue

A common need and use case for attribute bindings is to manipulate the look of elements with CSS classes or style attributes.

To make this task easier than ever, Vue provides special enhancements when v-bind is used with the class or style attribute. In this lesson, we learn how to apply dynamic classes based on our Vue data.

add a strikeout
we have a li for each item of items reactive ref

static class

```vue
   class="static-class"
      :class="{
        strikeout: purchased,
        priority: highPriority,
      }"
```


```html
<li class="static-class strikeout priority">10 party hats</li>
<li class="static-class strikeout">20 cups</li>
```

With an array
```vue
      :class="[
        purchased ? 'strikeout' : '',
        highPriority ? 'priority' : '',
        ]"
```
Use a ternary, and add the possibility to add more classes

class can also be defined in reactive refs

## Computed Properties in Vue with the Composition API

**Computed properties** are another powerful feature from Vue that allows us to transform or perform calculations or transformation on our data and then easily reuse the result as an up-to-date variable in our template.
Computed properties are very useful and should replace complex in-template expressions.

always stay in sync with data that they reference

## Reactivity Fundamentals
What's Vue without it's powerful reactivity system? In this lesson, we dive into reactive data in Vue and explore the different options for declaring reactive data with the ref() and reactive() functions.

reactive only works for non primitive datas like arrays and objects

- we don't have to use the `.value` property
- won't work with primitives ~~const state = reactive('hello world')~~

> personal preference

## Local Setup with Vite
Since a build step is required to use script setup this is the fastest and easiest way to get going. If you don't want to use the script setup feature then you can install Vue via a script tag linked to CDN.

Links

- [Rapid Development with Vite Course](https://vueschool.io/courses/rapid-development-with-vite)
- [Vue 3 Single File Components Course](https://vueschool.io/courses/vue-3-single-file-components)
  ⚠️ You should use `npm init vue@latest` to install the latest version of Vue (instead of vue@3)

## The Vue Application Instance

In this lesson, we learn about the Vue application instance and how to mount it to the DOM. While working in the Vue.js playground, this was done behind the scenes for us. Working in the local project now, we can see how it works by looking at the generated main.js file.

Links
- [Vue Docs: Creating a Vue Application](https://vuejs.org/guide/essentials/application.html)
- [Vue 3 Components Fundamentals Course](https://vueschool.io/courses/vue-js-3-components-fundamentals)

src/main.js entry point for vue app and vue application instance is created

`const app = createApp(App)`
App is a vue component, most of the time this will be a **single file component** like App.vue, this component is known as the **ROOT component** required in every vue application that you created.

`app.mount('#app')` : make the vue application which is made up from JavaScript, show up on the page  in HTML
the mount method takes a css selector `#app` to target the element that we want to mount to. This element lives in the index.html file in the root of our project, and this is the file that initially gets served to the browser and includes the JavaScript code for our Vue app

```html
  <body>
<div id="app"></div>
<script type="module" src="/src/main.ts"></script>
</body>
```

Creating a Vue application instance is always the first step to building a Vue app. Plus, there is still more you can do with the Vue application instance such as registering global components, plugins and a whole lot more.

