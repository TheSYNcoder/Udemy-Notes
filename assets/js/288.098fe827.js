(window.webpackJsonp=window.webpackJsonp||[]).push([[288],{491:function(t,s,a){"use strict";a.r(s);var e=a(0),n=Object(e.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"section-41-javascript-the-tricky-stuff"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#section-41-javascript-the-tricky-stuff","aria-hidden":"true"}},[t._v("#")]),t._v(" Section 41 - JavaScript: The Tricky Stuff")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#Section-41---JavaScript-The-Tricky-Stuff"}},[t._v("Section 41 - JavaScript: The Tricky Stuff")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#Lecture-Keyword-This-1---Introduction-and-Global"}},[t._v("[Lecture] Keyword This 1 - Introduction and Global")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#What-is-this"}},[t._v("What is "),a("code",[t._v("this")])])])])]),t._v(" "),a("li",[a("a",{attrs:{href:"#Lecture-Keyword-This-2---Global-With-Strict"}},[t._v("[Lecture] Keyword This 2 - Global With Strict")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#Global-Context"}},[t._v("Global Context")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#Strict-Mode"}},[t._v("Strict Mode")])])])]),t._v(" "),a("li",[a("a",{attrs:{href:"#Lecture-Keyword-This-3---Implicit"}},[t._v("[Lecture] Keyword This 3 - Implicit")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#Implicit-Object"}},[t._v("Implicit: Object")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#Implicit-Nested-Object"}},[t._v("Implicit: Nested Object")])])])]),t._v(" "),a("li",[a("a",{attrs:{href:"#Lecture-Keyword-This-4---Call-Apply-Bind"}},[t._v("[Lecture] Keyword This 4 - Call Apply Bind")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#Lecture-Keyword-This-5---Fixing-Our-Issue-With-Call"}},[t._v("[Lecture] Keyword This 5 - Fixing Our Issue With Call")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#Lecture-Keyword-This-6---Apply"}},[t._v("[Lecture] Keyword This 6 - Apply")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#Lecture-Keyword-This-7---Bind"}},[t._v("[Lecture] Keyword This 7 - Bind")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#Lecture-Keyword-This-8---Bind-Pt-2"}},[t._v("[Lecture] Keyword This 8 - Bind Pt. 2")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#Lecture-Keyword-This-9---New-Keyword--Recap"}},[t._v("[Lecture] Keyword This 9 - New Keyword & Recap")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#Lecture-OOP-1---Introduction"}},[t._v("[Lecture] OOP 1 - Introduction")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#Lecture-OOP-2---New-Keyword"}},[t._v("[Lecture] OOP 2 - New Keyword")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#Lecture-OOP-3---Multiple-Constructors"}},[t._v("[Lecture] OOP 3 - Multiple Constructors")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#Lecture-OOP-4---Recap"}},[t._v("[Lecture] OOP 4 - Recap")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#Lecture-OOP-5---Prototypes"}},[t._v("[Lecture] OOP 5 - Prototypes")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#Lecture-OOP-6---Prototype-Chain"}},[t._v("[Lecture] OOP 6 - Prototype Chain")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#Lecture-OOP-7---Exercise"}},[t._v("[Lecture] OOP 7 - Exercise")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#Lecture-OOP-8---Solution-and-Recap"}},[t._v("[Lecture] OOP 8 - Solution and Recap")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#Lecture-Closures"}},[t._v("[Lecture] Closures")])])])])]),t._v(" "),a("h2",{attrs:{id:"lecture-keyword-this-1-introduction-and-global"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#lecture-keyword-this-1-introduction-and-global","aria-hidden":"true"}},[t._v("#")]),t._v(" [Lecture] Keyword This 1 - Introduction and Global")]),t._v(" "),a("p",[t._v("在這一單元中將介紹 JavaScript 中關鍵字 "),a("code",[t._v("this")]),t._v(" 以及物件導向的概念，課程目標是：")]),t._v(" "),a("ul",[a("li",[t._v("Define what the keyword "),a("code",[t._v("this")]),t._v(" is")]),t._v(" "),a("li",[t._v("Understand the four ways to always figure out what the keyword "),a("code",[t._v("this")]),t._v(" is")]),t._v(" "),a("li",[t._v("Try as hard as possible not to use the word "),a("code",[t._v("this")]),t._v(" in a sentence")])]),t._v(" "),a("h3",{attrs:{id:"what-is-this"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#what-is-this","aria-hidden":"true"}},[t._v("#")]),t._v(" What is "),a("code",[t._v("this")])]),t._v(" "),a("p",[t._v("關鍵字 "),a("code",[t._v("this")]),t._v(" 是 JavaScript 中的保留字，他決定了函數是如何被呼叫的，涉及了 "),a("strong",[t._v("執行上下文（execution context）")]),t._v(" 的概念。在 JavaScript 有四條規則決定 "),a("code",[t._v("this")]),t._v(" 的運作：")]),t._v(" "),a("ul",[a("li",[t._v("Global")]),t._v(" "),a("li",[t._v("Object")]),t._v(" "),a("li",[t._v("Implicit")]),t._v(" "),a("li",[t._v("Explicit")])]),t._v(" "),a("h2",{attrs:{id:"lecture-keyword-this-2-global-with-strict"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#lecture-keyword-this-2-global-with-strict","aria-hidden":"true"}},[t._v("#")]),t._v(" [Lecture] Keyword This 2 - Global With Strict")]),t._v(" "),a("h3",{attrs:{id:"global-context"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#global-context","aria-hidden":"true"}},[t._v("#")]),t._v(" Global Context")]),t._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("       "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// window")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("WhatIsThis")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("variablesInThis")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Since the value of this is the window, all we doing here")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// is creating a global variable")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("person "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Elle"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("person"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Elle")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("whatIsThis")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("           "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// window")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br")])]),a("ul",[a("li",[t._v("當關鍵字 "),a("code",[t._v("this")]),t._v(" 不在已宣告的物件中使用時，將會指向 "),a("code",[t._v("window")]),t._v(" 物件。")]),t._v(" "),a("li",[t._v("不在函數中所宣告的變數，都屬於 "),a("code",[t._v("window")]),t._v(" 物件。")])]),t._v(" "),a("h3",{attrs:{id:"strict-mode"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#strict-mode","aria-hidden":"true"}},[t._v("#")]),t._v(" Strict Mode")]),t._v(" "),a("p",[t._v("承上，這樣的特性可能使得我們在函數中可以透過 "),a("code",[t._v("this")]),t._v(" 關鍵字創建一個全域變數（然而使用 "),a("code",[t._v("var")]),t._v(" 在函數中宣告變數時，他僅能在函數中使用）。為了避免這樣的錯誤，我們可以使用 "),a("code",[t._v('"use strict"')]),t._v(" 關鍵字來避免在變數中使用 "),a("code",[t._v("this")]),t._v(" 關鍵字：")]),t._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"use strict"')]),t._v("\n\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("       "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// window")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("WhatIsThis")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("variablesInThis")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Since we are in strict mode this is undefined so what happens")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// if we add a property on undefined?")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("person "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Elle"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("variablesInThis")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// TypeError, can't set person on undefined!")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("whatIsThis")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("           "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// undefined")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br")])]),a("h2",{attrs:{id:"lecture-keyword-this-3-implicit"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#lecture-keyword-this-3-implicit","aria-hidden":"true"}},[t._v("#")]),t._v(" [Lecture] Keyword This 3 - Implicit")]),t._v(" "),a("h3",{attrs:{id:"implicit-object"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#implicit-object","aria-hidden":"true"}},[t._v("#")]),t._v(" Implicit: Object")]),t._v(" "),a("p",[t._v("在物件中，如果沒有槽狀物件於其中，關鍵字 "),a("code",[t._v("this")]),t._v(" 將綁定物件本身：")]),t._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// strict mode does NOT make a difference here")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" person "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  firstName"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Elle"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  sayHi"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hi, "')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("firstName"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  determineContext"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" person"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\nperson"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sayHi")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("                 "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// "Hi, Elle"')]),t._v("\nperson"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("determineContext")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// true")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br")])]),a("h3",{attrs:{id:"implicit-nested-object"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#implicit-nested-object","aria-hidden":"true"}},[t._v("#")]),t._v(" Implicit: Nested Object")]),t._v(" "),a("p",[t._v("在槽狀物件於其中，關鍵字 "),a("code",[t._v("this")]),t._v(" 將綁定最近的物件本身，因此對於 "),a("code",[t._v("dog")]),t._v(" 物件來說並沒有 "),a("code",[t._v("firstName")]),t._v(" 屬性，因此為 "),a("code",[t._v("undefine")]),t._v("：")]),t._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" person "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  firstname"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Colt"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  sayHi"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hi "')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("firstName"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  determineContext"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" person"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  dog"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    sayHello"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hello "')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("firstName"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    determineContext"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" person"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\nperson"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sayHi")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("                     "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// "Hi Colt"')]),t._v("\nperson"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("determineContext")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("          "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// true")]),t._v("\nperson"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("dog"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sayHello")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("              "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// "Hello undefind"')]),t._v("\nperson"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("dog"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("determineContext")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// false")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br"),a("span",{staticClass:"line-number"},[t._v("20")]),a("br"),a("span",{staticClass:"line-number"},[t._v("21")]),a("br"),a("span",{staticClass:"line-number"},[t._v("22")]),a("br")])]),a("h2",{attrs:{id:"lecture-keyword-this-4-call-apply-bind"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#lecture-keyword-this-4-call-apply-bind","aria-hidden":"true"}},[t._v("#")]),t._v(" [Lecture] Keyword This 4 - Call Apply Bind")]),t._v(" "),a("h2",{attrs:{id:"lecture-keyword-this-5-fixing-our-issue-with-call"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#lecture-keyword-this-5-fixing-our-issue-with-call","aria-hidden":"true"}},[t._v("#")]),t._v(" [Lecture] Keyword This 5 - Fixing Our Issue With Call")]),t._v(" "),a("h2",{attrs:{id:"lecture-keyword-this-6-apply"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#lecture-keyword-this-6-apply","aria-hidden":"true"}},[t._v("#")]),t._v(" [Lecture] Keyword This 6 - Apply")]),t._v(" "),a("h2",{attrs:{id:"lecture-keyword-this-7-bind"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#lecture-keyword-this-7-bind","aria-hidden":"true"}},[t._v("#")]),t._v(" [Lecture] Keyword This 7 - Bind")]),t._v(" "),a("h2",{attrs:{id:"lecture-keyword-this-8-bind-pt-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#lecture-keyword-this-8-bind-pt-2","aria-hidden":"true"}},[t._v("#")]),t._v(" [Lecture] Keyword This 8 - Bind Pt. 2")]),t._v(" "),a("h2",{attrs:{id:"lecture-keyword-this-9-new-keyword-recap"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#lecture-keyword-this-9-new-keyword-recap","aria-hidden":"true"}},[t._v("#")]),t._v(" [Lecture] Keyword This 9 - New Keyword & Recap")]),t._v(" "),a("h2",{attrs:{id:"lecture-oop-1-introduction"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#lecture-oop-1-introduction","aria-hidden":"true"}},[t._v("#")]),t._v(" [Lecture] OOP 1 - Introduction")]),t._v(" "),a("h2",{attrs:{id:"lecture-oop-2-new-keyword"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#lecture-oop-2-new-keyword","aria-hidden":"true"}},[t._v("#")]),t._v(" [Lecture] OOP 2 - New Keyword")]),t._v(" "),a("h2",{attrs:{id:"lecture-oop-3-multiple-constructors"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#lecture-oop-3-multiple-constructors","aria-hidden":"true"}},[t._v("#")]),t._v(" [Lecture] OOP 3 - Multiple Constructors")]),t._v(" "),a("h2",{attrs:{id:"lecture-oop-4-recap"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#lecture-oop-4-recap","aria-hidden":"true"}},[t._v("#")]),t._v(" [Lecture] OOP 4 - Recap")]),t._v(" "),a("h2",{attrs:{id:"lecture-oop-5-prototypes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#lecture-oop-5-prototypes","aria-hidden":"true"}},[t._v("#")]),t._v(" [Lecture] OOP 5 - Prototypes")]),t._v(" "),a("h2",{attrs:{id:"lecture-oop-6-prototype-chain"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#lecture-oop-6-prototype-chain","aria-hidden":"true"}},[t._v("#")]),t._v(" [Lecture] OOP 6 - Prototype Chain")]),t._v(" "),a("h2",{attrs:{id:"lecture-oop-7-exercise"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#lecture-oop-7-exercise","aria-hidden":"true"}},[t._v("#")]),t._v(" [Lecture] OOP 7 - Exercise")]),t._v(" "),a("h2",{attrs:{id:"lecture-oop-8-solution-and-recap"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#lecture-oop-8-solution-and-recap","aria-hidden":"true"}},[t._v("#")]),t._v(" [Lecture] OOP 8 - Solution and Recap")]),t._v(" "),a("h2",{attrs:{id:"lecture-closures"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#lecture-closures","aria-hidden":"true"}},[t._v("#")]),t._v(" [Lecture] Closures")])])},[],!1,null,null,null);s.default=n.exports}}]);