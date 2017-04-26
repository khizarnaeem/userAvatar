Generic user avatar directive built with AngularJS
===================

 enhancedavatar is an AngularJS based directive which can be used to generate avatar/img for user based on their name.

##### This is enhanced version of [userAvatar](https://github.com/khizarnaeem/userAvatar)


## [Demo](http://plnkr.co/edit/QZaqC7WCnz8An0oJjmmU?p=preview")

Requirements
AngularJS verison 1.5.0+

## How to use

1- Add a `<script>` to your `index.html`:

```html
<script src="/path_to_js_file/enhancedavatar.js"></script>
<link rel="stylesheet" href="/path_to_js_file/style.css" />
```
if you have already an angular app mofule defined in your project then themove following line and repalce appModule with your application module instance.

```javascript
var appModule = angular.module('app', ['enhancedavatar']);
```
2- copy css from style.css into your css file or link to this file in your project.

```html
<link rel="stylesheet" href="/path_to_js_file/style.css" />
```
3- use directive in html like this

```html
<div class="enhancedavatar" name="Mike S"></div> 
<!-- or -->
<div class="enhancedavatar" width="2em" height="2em" name="Mike S"></div> 
<!-- or -->
<div class="enhancedavatar" width="2em" height="2em" img="image-path"></div> 

