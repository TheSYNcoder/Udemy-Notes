# Section 17 - Building Our Web App

## Table of Contents

- [Section 17 - Building Our Web App](#section-17---building-our-web-app)
  - [Table of Contents](#table-of-contents)
  - [[Lecture] Section 17 Introduction](#lecture-section-17-introduction)
  - [[Lecture] Join Us Completed CODE](#lecture-join-us-completed-code)
  - [[Lecture] Introducing Express](#lecture-introducing-express)
  - [[Lecture] NPM Init and package.json files](#lecture-npm-init-and-packagejson-files)
  - [[Lecture] Our First Simple Web App](#lecture-our-first-simple-web-app)
  - [[Lecture] CODE: Our First Simple Web App](#lecture-code-our-first-simple-web-app)
  - [[Lecture] Adding Multiple Routes](#lecture-adding-multiple-routes)
  - [[Lecture] CODE: Adding Multiple Routes](#lecture-code-adding-multiple-routes)
  - [308, Connecting Express and MySQL](#308-connecting-express-and-mysql)
  - [309, CODE: Connecting Express and MySQL](#309-code-connecting-express-and-mysql)
  - [[Lecture] Adding EJS Templates](#lecture-adding-ejs-templates)
  - [[Lecture] CODE: Adding EJS Templates](#lecture-code-adding-ejs-templates)
  - [[Lecture] Connecting The Form](#lecture-connecting-the-form)
  - [[Lecture] CODE: Connecting the Form](#lecture-code-connecting-the-form)
  - [[Lecture] Styling Part 1](#lecture-styling-part-1)
  - [[Lecture] CODE: HTML AND CSS FILES](#lecture-code-html-and-css-files)
  - [[Lecture] Styling Part 2](#lecture-styling-part-2)

## [Lecture] Section 17 Introduction

在這一門課中將會建置一個實際的網頁應用。

## [Lecture] Join Us Completed CODE

完整的課程代碼可以透過 [連結](../sources/JoinUsCompleteCode.zip) 進行下載。

## [Lecture] Introducing Express

## [Lecture] NPM Init and package.json files

## [Lecture] Our First Simple Web App

## [Lecture] CODE: Our First Simple Web App

Add to your app.js file:

```javascript
var express = require('express');
 
var app = express();
 
app.get("/", function(req, res){
 res.send("HELLO FROM OUR WEB APP!");
});
 
app.listen(8080, function () {
 console.log('App listening on port 8080!');
});
```

Remember to start the server up:

```bash
$ node app.js
```

## [Lecture] Adding Multiple Routes

## [Lecture] CODE: Adding Multiple Routes

Add a /joke route:

```javascript
app.get("/joke", function(req, res){
 var joke = "What do you call a dog that does magic tricks? A labracadabrador.";
 res.send(joke);
});
```

Add a /random_num route:

```javascript
app.get("/random_num", function(req, res){
 var num = Math.floor((Math.random() * 10) + 1);
 res.send("Your lucky number is " + num);
});
```

## 308, Connecting Express and MySQL

## 309, CODE: Connecting Express and MySQL

Add the MySQL code inside of the root route:

```javascript
app.get("/", function(req, res){
 var q = 'SELECT COUNT(*) as count FROM users';
 connection.query(q, function (error, results) {
 if (error) throw error;
 var msg = "We have " + results[0].count + " users";
 res.send(msg);
 });
});
```

## [Lecture] Adding EJS Templates

## [Lecture] CODE: Adding EJS Templates

```html
<h1>JOIN US</h1>
 
<p class="lead">Enter your email to join <strong><%= count %></strong> 
others on our waitlist. We are 100% not a cult. </p>
 
<form method="POST" action='/register'>
 <input type="text" class="form" placeholder="Enter Your Email">
 <button>Join Now</button>
</form>
```

## [Lecture] Connecting The Form

## [Lecture] CODE: Connecting the Form

The '/register' post route:

```javascript
app.post('/register', function(req,res){
 var person = {email: req.body.email};
 connection.query('INSERT INTO users SET ?', person, function(err, result) {
 console.log(err);
 console.log(result);
 res.redirect("/");
 });
});
```

## [Lecture] Styling Part 1

## [Lecture] CODE: HTML AND CSS FILES

完整的 HTML 與 CSS 代碼可以至 [連結](../sources/JOIN-US-HTML-AND-CSS.zip) 進行下載。

## [Lecture] Styling Part 2
