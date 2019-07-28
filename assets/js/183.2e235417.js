(window.webpackJsonp=window.webpackJsonp||[]).push([[183],{380:function(t,e,r){"use strict";r.r(e);var a=r(0),i=Object(a.a)({},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"section-17-handling-authentication-with-react"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#section-17-handling-authentication-with-react","aria-hidden":"true"}},[t._v("#")]),t._v(" Section 17 - Handling Authentication with React")]),t._v(" "),r("h2",{attrs:{id:"table-of-contents"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#table-of-contents","aria-hidden":"true"}},[t._v("#")]),t._v(" Table of Contents")]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"#section-17---handling-authentication-with-react"}},[t._v("Section 17 - Handling Authentication with React")]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"#table-of-contents"}},[t._v("Table of Contents")])]),t._v(" "),r("li",[r("a",{attrs:{href:"#lecture-oauth-based-authentication"}},[t._v("[Lecture] OAuth-Based Authentication")])]),t._v(" "),r("li",[r("a",{attrs:{href:"#lecture-oauth-for-servers-vs-browser-apps"}},[t._v("[Lecture] OAuth for Servers vs Browser Apps")])]),t._v(" "),r("li",[r("a",{attrs:{href:"#lecture-creating-oauth-credentials"}},[t._v("[Lecture] Creating OAuth Credentials")])]),t._v(" "),r("li",[r("a",{attrs:{href:"#lecture-wiring-up-the-google-api-library"}},[t._v("[Lecture] Wiring Up the Google API Library")])]),t._v(" "),r("li",[r("a",{attrs:{href:"#lecture-sending-a-user-into-the-oauth-flow"}},[t._v("[Lecture] Sending a User Into the OAuth Flow")])]),t._v(" "),r("li",[r("a",{attrs:{href:"#lecture-rendering-authentication-status"}},[t._v("[Lecture] Rendering Authentication Status")])]),t._v(" "),r("li",[r("a",{attrs:{href:"#lecture-updating-auth-state"}},[t._v("[Lecture] Updating Auth State")])]),t._v(" "),r("li",[r("a",{attrs:{href:"#lecture-displaying-sign-in-and-sign-out-buttons"}},[t._v("[Lecture] Displaying Sign In and Sign Out Buttons")])]),t._v(" "),r("li",[r("a",{attrs:{href:"#lecture-on-demand-sign-in-and-sign-out"}},[t._v("[Lecture] On-Demand Sign In and Sign Out")])]),t._v(" "),r("li",[r("a",{attrs:{href:"#lecture-redux-architecture-design"}},[t._v("[Lecture] Redux Architecture Design")])]),t._v(" "),r("li",[r("a",{attrs:{href:"#lecture-redux-setup"}},[t._v("[Lecture] Redux Setup")])]),t._v(" "),r("li",[r("a",{attrs:{href:"#lecture-connecting-auth-with-action-creators"}},[t._v("[Lecture] Connecting Auth with Action Creators")])]),t._v(" "),r("li",[r("a",{attrs:{href:"#lecture-building-the-auth-reducer"}},[t._v("[Lecture] Building the Auth Reducer")])]),t._v(" "),r("li",[r("a",{attrs:{href:"#lecture-handling-auth-status-through-redux"}},[t._v("[Lecture] Handling Auth Status Through Redux")])]),t._v(" "),r("li",[r("a",{attrs:{href:"#lecture-fixed-action-types"}},[t._v("[Lecture] Fixed Action Types")])]),t._v(" "),r("li",[r("a",{attrs:{href:"#lecture-recording-the-users-id"}},[t._v("[Lecture] Recording the User's ID")])])])])]),t._v(" "),r("h2",{attrs:{id:"lecture-oauth-based-authentication"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#lecture-oauth-based-authentication","aria-hidden":"true"}},[t._v("#")]),t._v(" [Lecture] OAuth-Based Authentication")]),t._v(" "),r("h2",{attrs:{id:"lecture-oauth-for-servers-vs-browser-apps"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#lecture-oauth-for-servers-vs-browser-apps","aria-hidden":"true"}},[t._v("#")]),t._v(" [Lecture] OAuth for Servers vs Browser Apps")]),t._v(" "),r("h2",{attrs:{id:"lecture-creating-oauth-credentials"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#lecture-creating-oauth-credentials","aria-hidden":"true"}},[t._v("#")]),t._v(" [Lecture] Creating OAuth Credentials")]),t._v(" "),r("h2",{attrs:{id:"lecture-wiring-up-the-google-api-library"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#lecture-wiring-up-the-google-api-library","aria-hidden":"true"}},[t._v("#")]),t._v(" [Lecture] Wiring Up the Google API Library")]),t._v(" "),r("h2",{attrs:{id:"lecture-sending-a-user-into-the-oauth-flow"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#lecture-sending-a-user-into-the-oauth-flow","aria-hidden":"true"}},[t._v("#")]),t._v(" [Lecture] Sending a User Into the OAuth Flow")]),t._v(" "),r("h2",{attrs:{id:"lecture-rendering-authentication-status"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#lecture-rendering-authentication-status","aria-hidden":"true"}},[t._v("#")]),t._v(" [Lecture] Rendering Authentication Status")]),t._v(" "),r("h2",{attrs:{id:"lecture-updating-auth-state"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#lecture-updating-auth-state","aria-hidden":"true"}},[t._v("#")]),t._v(" [Lecture] Updating Auth State")]),t._v(" "),r("h2",{attrs:{id:"lecture-displaying-sign-in-and-sign-out-buttons"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#lecture-displaying-sign-in-and-sign-out-buttons","aria-hidden":"true"}},[t._v("#")]),t._v(" [Lecture] Displaying Sign In and Sign Out Buttons")]),t._v(" "),r("h2",{attrs:{id:"lecture-on-demand-sign-in-and-sign-out"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#lecture-on-demand-sign-in-and-sign-out","aria-hidden":"true"}},[t._v("#")]),t._v(" [Lecture] On-Demand Sign In and Sign Out")]),t._v(" "),r("h2",{attrs:{id:"lecture-redux-architecture-design"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#lecture-redux-architecture-design","aria-hidden":"true"}},[t._v("#")]),t._v(" [Lecture] Redux Architecture Design")]),t._v(" "),r("h2",{attrs:{id:"lecture-redux-setup"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#lecture-redux-setup","aria-hidden":"true"}},[t._v("#")]),t._v(" [Lecture] Redux Setup")]),t._v(" "),r("h2",{attrs:{id:"lecture-connecting-auth-with-action-creators"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#lecture-connecting-auth-with-action-creators","aria-hidden":"true"}},[t._v("#")]),t._v(" [Lecture] Connecting Auth with Action Creators")]),t._v(" "),r("h2",{attrs:{id:"lecture-building-the-auth-reducer"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#lecture-building-the-auth-reducer","aria-hidden":"true"}},[t._v("#")]),t._v(" [Lecture] Building the Auth Reducer")]),t._v(" "),r("h2",{attrs:{id:"lecture-handling-auth-status-through-redux"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#lecture-handling-auth-status-through-redux","aria-hidden":"true"}},[t._v("#")]),t._v(" [Lecture] Handling Auth Status Through Redux")]),t._v(" "),r("h2",{attrs:{id:"lecture-fixed-action-types"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#lecture-fixed-action-types","aria-hidden":"true"}},[t._v("#")]),t._v(" [Lecture] Fixed Action Types")]),t._v(" "),r("h2",{attrs:{id:"lecture-recording-the-user-s-id"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#lecture-recording-the-user-s-id","aria-hidden":"true"}},[t._v("#")]),t._v(" [Lecture] Recording the User's ID")])])},[],!1,null,null,null);e.default=i.exports}}]);