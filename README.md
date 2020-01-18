# Vue
Here is some simple Vue.js project that I made it to help my learning.

-----

## Vue cli
### install
```
$ npm install -g @vue/cli
$ vue --version               #(check)
```  
### run
```
$ vue create my-project       #(only for first time)  
$ cd my-project
$ npm install                 #(only for first time)  
$ npm run serve
```  

---

## Vue Router
### install
```
$ npm install vue-router
```
### HTML
```html
<!-- use router-link component for navigation. -->
<!-- specify the link by passing the `to` prop. -->
<!-- `<router-link>` will be rendered as an `<a>` tag by default -->
<router-link to="/url">text</router-link>
<!-- or -->
<router-link to="{name:'router name'}">text</router-link>
```
### JavaScript
```js
//get access to it as 'this.$router'
this.$router
```
Notice that a ```<router-link>``` automatically gets the ```.router-link-active``` class when its target route is matched.  

reference : https://router.vuejs.org

---

###### tags: `vue`
