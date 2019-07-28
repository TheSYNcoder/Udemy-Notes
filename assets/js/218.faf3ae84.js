(window.webpackJsonp=window.webpackJsonp||[]).push([[218],{416:function(t,a,s){"use strict";s.r(a);var n=s(0),e=Object(n.a)({},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"section-27-state"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#section-27-state","aria-hidden":"true"}},[t._v("#")]),t._v(" Section 27 - State")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"#Section-27---State"}},[t._v("Section 27 - State")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"#Note-State"}},[t._v("[Note] State")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#Note-Pure-Function-and-Spread-Operator"}},[t._v("[Note] Pure Function and Spread Operator")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#Note-React-Component-Architecture"}},[t._v("[Note] React Component Architecture")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"#State-and-Props"}},[t._v("State and Props")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#Stateless-Functional-Component"}},[t._v("Stateless Functional Component")])])])]),t._v(" "),s("li",[s("a",{attrs:{href:"#Note-setState-can-be-tricky"}},[t._v("[Note] "),s("code",[t._v("setState")]),t._v(" can be tricky")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"#Update-Function"}},[t._v("Update Function")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#Use-Callback"}},[t._v("Use Callback")])])])])])])]),t._v(" "),s("h2",{attrs:{id:"note-state"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#note-state","aria-hidden":"true"}},[t._v("#")]),t._v(" [Note] State")]),t._v(" "),s("ul",[s("li",[t._v("狀態的改變必須為純函數")])]),t._v(" "),s("h2",{attrs:{id:"note-pure-function-and-spread-operator"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#note-pure-function-and-spread-operator","aria-hidden":"true"}},[t._v("#")]),t._v(" [Note] Pure Function and Spread Operator")]),t._v(" "),s("ul",[s("li",[t._v("純函數不會改變輸入值。")]),t._v(" "),s("li",[t._v("同樣的輸入，返回值會一樣。")])]),t._v(" "),s("h2",{attrs:{id:"note-react-component-architecture"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#note-react-component-architecture","aria-hidden":"true"}},[t._v("#")]),t._v(" [Note] React Component Architecture")]),t._v(" "),s("h3",{attrs:{id:"state-and-props"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#state-and-props","aria-hidden":"true"}},[t._v("#")]),t._v(" State and Props")]),t._v(" "),s("ul",[s("li",[t._v("State is always passed from a parent down to a child component as a prop")]),t._v(" "),s("li",[t._v("State should not be passed to a sibling or a parent")]),t._v(" "),s("li",[t._v("State Should Be Owned by 1 Component")])]),t._v(" "),s("h3",{attrs:{id:"stateless-functional-component"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#stateless-functional-component","aria-hidden":"true"}},[t._v("#")]),t._v(" Stateless Functional Component")]),t._v(" "),s("h2",{attrs:{id:"note-setstate-can-be-tricky"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#note-setstate-can-be-tricky","aria-hidden":"true"}},[t._v("#")]),t._v(" [Note] "),s("code",[t._v("setState")]),t._v(" can be tricky")]),t._v(" "),s("h3",{attrs:{id:"update-function"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#update-function","aria-hidden":"true"}},[t._v("#")]),t._v(" Update Function")]),t._v(" "),s("p",[t._v("當要使用到前一狀態 "),s("code",[t._v("prevState")]),t._v(" 時，將參數傳入到函數中：")]),t._v(" "),s("div",{staticClass:"language-jsx line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-jsx"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setState")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("prevState"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" props"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    counter"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" prevState"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("counter "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br")])]),s("h3",{attrs:{id:"use-callback"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#use-callback","aria-hidden":"true"}},[t._v("#")]),t._v(" Use Callback")]),t._v(" "),s("p",[t._v("由於 "),s("code",[t._v("setState")]),t._v(" 是異步（asynchronous）的，我們必須使用 "),s("code",[t._v("callback()")]),t._v(" 這樣的異步解決方案：")]),t._v(" "),s("div",{staticClass:"language-jsx line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-jsx"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setState")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Tim"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Won't be updated yet")]),t._v("\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("state"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setState")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Tim"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Now state is up to date"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("state"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  \n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br")])])])},[],!1,null,null,null);a.default=e.exports}}]);