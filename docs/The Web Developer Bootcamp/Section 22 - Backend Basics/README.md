# Section 22 - Backend Basics

## Table of Contents

- [Section 22 - Backend Basics](#section-22---backend-basics)
  - [Table of Contents](#table-of-contents)
  - [[Lecture] Introduction to Backend](#lecture-introduction-to-backend)
    - [Static Sites v.s. Dynamic Sites](#static-sites-vs-dynamic-sites)
    - [Stacks and Back End Technologies](#stacks-and-back-end-technologies)
  - [[Lecture] HTTP in Depth](#lecture-http-in-depth)
    - [HTTP Requests](#http-requests)
  - [[Lecture] Backend Workflow](#lecture-backend-workflow)
  - [[Lecture] Note about Cloud9 signup - IMPORTANT!!! Please Read!](#lecture-note-about-cloud9-signup---important-please-read)
    - [Cloud9](#cloud9)
    - [Local Development Environment](#local-development-environment)
  - [[Lecture] Introduction to Cloud 9](#lecture-introduction-to-cloud-9)
  - [[Lecture] Setting Up Cloud9](#lecture-setting-up-cloud9)

## [Lecture] Introduction to Backend

### Static Sites v.s. Dynamic Sites

在前面課程 [012, Introduction to Web](../Section%2002%20-%20Introduction%20to%20Front%20End%20Development#012-introduction-to-the-web) 的內容中，我們知道了在瀏覽器中所呈現的網頁，實際上是透過發起請求到遠端伺服器，再將回傳的檔案渲染給使用者看。而 **靜態頁面（Static Sites）** 與 **動態頁面（Dynamic Sites）** 的差異主要在於前者每次回傳的內容都是一塵不變的，而後者所回傳的內容將會是透過後端伺服器根據不同的狀況產生並回傳的，這期間可能還涉及了與資料庫的連動，一個簡單的動態頁面架構如下所示：

<div align="center">
  <img src="![](https://i.imgur.com/tW00n4J.png)">
</div>

### Stacks and Back End Technologies

由於現在的網頁技術已經不再像以往那樣簡單，他會透過許多不同的技術所相互結合在一起來達到目的，由於包含了許多的技術，我們稱之為 **技術棧（stack）**，比如常見的 `LAMP (Linux + Apache + MySQL/MariaDB + PHP)` 和 `MEAN (MongoDB + Express.js + Angular + Node.js)`…等。

以 [Reddit](https://www.reddit.com/) 為例，他的後端技術採用 Python 作為主要後端語言，使用 Flask 框架與 Nginx 伺服器，並存取 PostgreSQL 資料庫。後端的選擇性十分多，我們可以透過 [StackShare](https://stackshare.io/) 來查看一些站點的搭建過程中使用了那些技術。而在這門課當中，將採用：NodeJs、Express 框架和 MongoDB 資料庫。

透過後端技術，我們可以實現這些功能：

- Check if the user is logged in
- Figure out what HTML, CSS and JavaScript to send to the User
- Sign up a User
- Add new post to Database
- Create new comment
- Remove Post from Database
- Sort/Rank posts
- Create subreddit
- Add to newsletter
- ...

## [Lecture] HTTP in Depth

瀏覽器透過發送請求與伺服器溝通，然而對遠端伺服器發送請求這件事並不是瀏覽器獨有的功能，我們也可以透過 **命令行（command line）**、手機應用程式…等來對伺服器發送請求。在這裡 Colt 介紹了調試工具 [Postman](https://www.getpostman.com/)，他允許我們對伺服器發送請求與查看響應。

關於 Postman 的使用方法可以參考以下內容：

- [知乎 | 或许你应该学学 postman](https://zhuanlan.zhihu.com/p/33481273)
- [法蘭克的 iOS 世界 | 測試 Web Service 的工具](https://medium.com/@mikru168/postman-%E6%B8%AC%E8%A9%A6web-service%E7%9A%84%E5%B7%A5%E5%85%B7-c7726997868a)

### HTTP Requests

HTTP **協議（protocol）** 定義了一組能對給定資源執行特定操作的請求方法，在這邊稍微舉例說明一下各個方法的用途：

- `GET` 方法：用於取得資料，比如向 [Google](http://www.google.com/) 取得頁面資源。
- `POST` 方法：用於向指定的資源提交要被處理的數據，比如向 [Facebook](http://www.facebook.com) 提交註冊資訊、上傳檔案或是提交評論內容。
- `PUT` 方法：取代指定資源所酬載請求（request payload）的所有表現。
- `PATCH` 方法：用於對指定資源進行局部更新，是對 `PUT` 方法的補充
- `HEAD` 方法：請求與 `GET` 方法相同的回應，但它沒有回應主體（response body）。
- `DELETE` 方法：用於刪除指定資源，這個方法主要是提供開發者使用
- `CONNECT` 方法：和指定資源標明的伺服器之間，建立隧道（tunnel）。
- `OPTIONS` 方法：描述指定資源的溝通方法（communication option）。
- `TRACE` 方法：與指定資源標明的伺服器之間，執行迴路返回測試（loop-back test）。

關於更多詳細的內容可以參考以下連結：

- [MDN | HTTP Methods](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods)
- [iThome | 重新認識HTTP請求方法](https://www.ithome.com.tw/node/80062)
- [知乎 | 网络基础知识之 HTTP 协议](https://zhuanlan.zhihu.com/p/24913080)
- [知乎 | HTTP 方法：GET 对比 POST](https://zhuanlan.zhihu.com/p/26529478)

## [Lecture] Backend Workflow

## [Lecture] Note about Cloud9 signup - IMPORTANT!!! Please Read!

### Cloud9

在後續的過程中，將使用雲端集成開發環境 [Cloud9](https://c9.io/) 服務，但自 2016 年這項服務被亞馬遜收購後，必須綁定信用卡，不過可以透過在 [連結](https://wdb-c9-invite.herokuapp.com/) 中填寫信箱獲得原始的註冊邀請。

### Local Development Environment

倘若是想要在自己本機端上搭建開發環境，可以參考下面這篇文章：

- [Zarko Blog | How to install MongoDB for development in Windows](https://zarkom.net/blogs/how-to-install-mongodb-for-development-in-windows-3328)
- [Zarko Blog | How to install MySQL 8 for development in Windows](https://zarkom.net/blogs/how-to-install-mysql-for-development-in-windows-9189)
- [Zarko Blog | How to install Node.js via nvm on Windows](https://zarkom.net/blogs/how-to-install-nodejs-via-nvm-on-windows-7934)
- [Zarko Blog | How to install Git and Git Bash on Windows](https://zarkom.net/blogs/how-to-install-git-and-git-bash-on-windows-9140)
- [Zarko Blog | How to set up Visual Studio Code with Git Bash on Windows](https://zarkom.net/blogs/how-to-set-up-visual-studio-code-with-git-bash-on-windows-7234)
- [Zarko Blog | How to use a MongoDB Atlas database in your Node.js app](https://zarkom.net/blogs/how-to-use-a-mongodb-atlas-database-in-your-nodejs-app-1051)

## [Lecture] Introduction to Cloud 9

## [Lecture] Setting Up Cloud9

檢查 `node.js` 和 `npm` 版本：

```bash
$ node -v
v6.11.2

$ npm -v
3.10.10
```