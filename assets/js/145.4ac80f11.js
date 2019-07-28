(window.webpackJsonp=window.webpackJsonp||[]).push([[145],{342:function(e,t,r){"use strict";r.r(t);var o=r(0),n=Object(o.a)({},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"section-02-more-info-concepts"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#section-02-more-info-concepts","aria-hidden":"true"}},[e._v("#")]),e._v(" Section 02 - More Info & Concepts")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"#section-02---more-info--concepts"}},[e._v("Section 02 - More Info & Concepts")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"#note-the-request-library-method"}},[e._v("[Note] The Request Library Method")])]),e._v(" "),r("li",[r("a",{attrs:{href:"#note-the-browser-automation-method"}},[e._v("[Note] The Browser Automation Method")])])])])]),e._v(" "),r("h2",{attrs:{id:"note-the-request-library-method"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#note-the-request-library-method","aria-hidden":"true"}},[e._v("#")]),e._v(" [Note] The Request Library Method")]),e._v(" "),r("p",[e._v("當瀏覽器訪問網路資源時，會對遠端的伺服器發送不同種類的 "),r("strong",[e._v("請求（Request）")]),e._v("，比如："),r("code",[e._v("GET")]),e._v("、"),r("code",[e._v("POST")]),e._v("、"),r("code",[e._v("PUT")]),e._v("、"),r("code",[e._v("DELETE")]),e._v("…等，在接下來的內容中我們將使用 "),r("a",{attrs:{href:"https://github.com/request/request",target:"_blank",rel:"noopener noreferrer"}},[e._v("request"),r("OutboundLink")],1),e._v(" 函數庫，透過該函數庫可以在 Node.js 中發送請求。")]),e._v(" "),r("div",{staticClass:"language-bash line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[r("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Install request library")]),e._v("\n$ "),r("span",{pre:!0,attrs:{class:"token function"}},[e._v("npm")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" --save request\n")])]),e._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[e._v("1")]),r("br"),r("span",{staticClass:"line-number"},[e._v("2")]),r("br")])]),r("h2",{attrs:{id:"note-the-browser-automation-method"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#note-the-browser-automation-method","aria-hidden":"true"}},[e._v("#")]),e._v(" [Note] The Browser Automation Method")]),e._v(" "),r("p",[e._v("當網頁內容並非動態渲染時，絕大多數的爬蟲工作都可以交由發送請求與接受回應來完成。但隨著網頁驗證的方式越趨複雜，則必須使用瀏覽器自動化的方式來完成，也就是使用代碼來控制瀏覽器的操作。在 Node.js 中常見的函數庫有：")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://github.com/johntitus/node-horseman",target:"_blank",rel:"noopener noreferrer"}},[e._v("Horseman"),r("OutboundLink")],1),e._v("：已經很久沒有更新了…")]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/GoogleChrome/puppeteer",target:"_blank",rel:"noopener noreferrer"}},[e._v("Puppeteer"),r("OutboundLink")],1),e._v("：由 Google Chrome 開發團隊發起與維護，是目前主流且穩定函數庫。")]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/segmentio/nightmare",target:"_blank",rel:"noopener noreferrer"}},[e._v("Nightmare"),r("OutboundLink")],1),e._v("：基於 Electron 的瀏覽器自動化函數庫，比起 "),r("a",{attrs:{href:"http://phantomjs.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Phantom.JS"),r("OutboundLink")],1),e._v(" 要簡單使用。")])]),e._v(" "),r("p",[e._v("使用瀏覽器自動化的方式來撰寫爬蟲，很大一個程度上是將平時操作瀏覽器的動作改為用代碼來實現，在實現上較為直觀且開發速度較快，不過相較於透過發送請求的方式來說，由於要使用到瀏覽器引擎與涉及 DOM 的操作，運行速度相對較慢。")])])},[],!1,null,null,null);t.default=n.exports}}]);