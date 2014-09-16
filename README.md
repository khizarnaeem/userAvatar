Generic user avatar directive built with AngularJS
===================

userAvatar is an AngularJS based directive which can be used to generate avatar/img for user based on their name.

<h1>Demo</h1>
<p>
<a href="http://plnkr.co/edit/UHq23coTUSrwnMKq1Itv?p=info" target="_blank">Demo</a>
</p>
<h1>Requirements</h1>
<p>
AngularJS verison 1.0.5+
</p>

## How to use

1- Add a `<script>` to your `index.html`:

```html
<script src="/path_to_js_file/useravatar.js"></script>
```
if you have already an angular app mofule defined in your project then themove following line and repalce appModule with your application module instance.

```javascript
var appModule = angular.module('useravatar', []);
```
2- copy css from style.css into your css file or link to this file in your project.

3- use directive in html like this

```html
<div class="useravatar" user="UserDetails"></div> 
```
UserDetails must be user data which is being passed to directive with following json format

```json
{
	Name: "My Name",
	Avatar: null or "http://link.to.img.jpg"
}
```
or
```json
{
	FirstName: "My",
	LastName: "Name",
	Avatar: null or "http://link.to.img.jpg"
}
```
You can make changes to directive according to your convinience and can also improve this repository. 

<h1>CSS</h1>
style.css file includes the css which i use to generate the style for avatar, you can change it according to your wish when using in your projects.
