/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss ***!
  \***********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
  --clr-base: #080b21;
  --clr-base-lt: #1D274C;
  --clr-base-ltr: #2b3a71;
  --clr-primary: #0fa5e5;
  --clr-primary-lt: #4dc2f3;
  --clr-ntrl-min: #fff;
  --clr-ntrl-max: #000;
  --font-size-base: 2rem;
  --shadow-primary: 0 0 2rem .2rem rgba(15, 165, 229, .4);
  --array-bar-width: 5px;
}

*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}

html {
  font-size: 62.5%;
  box-sizing: border-box;
}
@media only screen and (max-width: 62.5em) {
  html {
    font-size: 50%;
  }
}
@media only screen and (max-width: 50em) {
  html {
    font-size: 45%;
  }
}

ul {
  list-style: none;
}

body {
  font-family: "Roboto", sans-serif;
  font-size: var(--font-size-base);
  color: var(--clr-ntrl-min);
  background-color: var(--clr-base);
}
body::-webkit-scrollbar {
  display: none;
}

.navbar {
  position: relative;
  padding: 2.5rem 0;
}
@media only screen and (max-width: 62.5em) {
  .navbar {
    padding: 2.5rem 2rem;
  }
}
.navbar__list {
  display: flex;
  justify-content: center;
}
@media only screen and (max-width: 62.5em) {
  .navbar__list {
    justify-content: space-between;
  }
}
.navbar__item {
  flex: 1;
  align-items: center;
  display: flex;
  justify-content: center;
}
@media only screen and (max-width: 37.5em) {
  .navbar__item--generate, .navbar__item--sort {
    display: none;
  }
}
@media only screen and (max-width: 62.5em) {
  .navbar__item {
    flex: initial;
  }
}

.array {
  margin: 10rem auto;
  width: 80%;
}
@media only screen and (max-width: 62.5em) {
  .array {
    width: 90%;
  }
}
.array__info {
  display: flex;
  justify-content: space-between;
  font-size: 3rem;
}
.array__info span {
  margin-left: 1rem;
}
.array__bars {
  height: 500px;
  display: flex;
  align-items: end;
  margin-top: 5rem;
}
.array__bar {
  flex: 1;
  background-image: linear-gradient(180deg, var(--clr-primary-lt), var(--clr-primary), var(--clr-base-lt));
}
.array__bar:not(:last-child) {
  margin-right: 0.4rem;
}
@media only screen and (max-width: 87.5em) {
  .array__bar:not(:last-child) {
    margin-right: 0.2rem;
  }
}
.array__bar--current {
  box-shadow: 0 0 1rem 0.8rem rgb(15, 165, 229);
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var(--clr-base);
  opacity: 0.75;
  transition: all 0.2s;
  z-index: 10;
}
.overlay--hidden {
  visibility: hidden;
  opacity: 0;
}

.btn {
  outline: none;
  color: inherit;
  font-size: inherit;
  border: 0.2rem solid var(--clr-primary);
  padding: 1rem 2.5rem;
  border-radius: 10rem;
  box-shadow: var(--shadow-primary);
  transition: background-color 0.2s;
  cursor: pointer;
}
.btn--generate {
  background-color: var(--clr-primary);
}
.btn--generate:hover, .btn--generate:active {
  background-color: var(--clr-primary-lt);
}
.btn--sort {
  background-color: transparent;
}
.btn--sort:hover, .btn--sort:active {
  background-color: var(--clr-primary);
}
.btn--drop-down {
  border: none;
  box-shadow: none;
}
.btn--drop-down:hover {
  background-color: rgba(250, 250, 250, 0.1);
}

.btn-container {
  display: none;
  margin-bottom: 10rem;
}
@media only screen and (max-width: 37.5em) {
  .btn-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2.5rem;
  }
}

.drop-down {
  position: relative;
}
.drop-down__list {
  position: absolute;
  text-align: center;
  display: flex;
  flex-direction: column;
  min-width: 20rem;
  background-color: var(--clr-base-lt);
  left: 50%;
  top: 110%;
  translate: -50% 0;
  border-radius: 1.5rem;
  overflow: hidden;
  visibility: hidden;
  opacity: 0;
  transition: all 0.5s;
}
.drop-down__item {
  padding: 1.5rem 2.5rem;
  background-image: linear-gradient(90deg, var(--clr-base-lt), var(--clr-primary), var(--clr-primary-lt));
  background-size: 0 0.5rem;
  background-repeat: no-repeat;
  background-position: bottom left;
  transition: background-size 0.3s, background-color 0.2s;
  cursor: pointer;
}
.drop-down__item:hover {
  background-size: 100% 0.5rem;
  background-color: var(--clr-base-ltr);
}
.drop-down__icon {
  display: inline-block;
  width: 1.2rem;
  height: 1.2rem;
  border: solid var(--clr-ntrl-min);
  border-width: 0 0.25rem 0.25rem 0;
  rotate: 45deg;
  margin-left: 2rem;
  margin-bottom: 0.5rem;
  transition: all 0.2s;
}
.drop-down:hover .drop-down__icon {
  rotate: -135deg;
  margin-bottom: 0;
  margin-top: 0.5rem;
}
.drop-down:hover .drop-down__list {
  visibility: visible;
  opacity: 1;
}

.size__label {
  margin-right: 2rem;
}
.size__range {
  outline: none;
  width: 50%;
  cursor: pointer;
}`, "",{"version":3,"sources":["webpack://./src/styles/abstracts/_variables.scss","webpack://./src/styles/main.scss","webpack://./src/styles/base/_reset.scss","webpack://./src/styles/abstracts/_mixins.scss","webpack://./src/styles/base/_base.scss","webpack://./src/styles/layout/_navbar.scss","webpack://./src/styles/layout/_array.scss","webpack://./src/styles/layout/_overlay.scss","webpack://./src/styles/components/_button.scss","webpack://./src/styles/components/_dropdown.scss","webpack://./src/styles/components/_sizecontrol.scss"],"names":[],"mappings":"AAAA;EACG,mBAAA;EACA,sBAAA;EACA,uBAAA;EAEA,sBAAA;EACA,yBAAA;EAEA,oBAAA;EACA,oBAAA;EAEA,sBAAA;EAEA,uDAAA;EAEA,sBAAA;ACHH;;ACZA;;;EAGG,SAAA;EACA,UAAA;EACA,mBAAA;ADeH;;ACZA;EACG,gBAAA;EACA,sBAAA;ADeH;AEfM;EDFN;IAKM,cAAA;EDgBJ;AACF;AEhBM;EDNN;IASM,cAAA;EDiBJ;AACF;;ACdA;EACG,gBAAA;ADiBH;;AGvCA;EACG,iCAAA;EACA,gCAAA;EACA,0BAAA;EACA,iCAAA;AH0CH;AGxCG;EACG,aAAA;AH0CN;;AIjDA;EACG,kBAAA;EACA,iBAAA;AJoDH;AE5CM;EEVN;IAKM,oBAAA;EJqDJ;AACF;AInDG;EACG,aAAA;EACA,uBAAA;AJqDN;AErDM;EEFH;IAKM,8BAAA;EJsDP;AACF;AInDG;EACG,OAAA;EACA,mBAAA;EACA,aAAA;EACA,uBAAA;AJqDN;AExDM;EEMG;IAEG,aAAA;EJoDV;AACF;AErEM;EEOH;IAcM,aAAA;EJoDP;AACF;;AKpFA;EACG,kBAAA;EACA,UAAA;ALuFH;AE/EM;EGVN;IAKM,UAAA;ELwFJ;AACF;AKtFG;EACG,aAAA;EACA,8BAAA;EACA,eAAA;ALwFN;AKtFM;EACG,iBAAA;ALwFT;AKpFG;EACG,aAAA;EACA,aAAA;EACA,gBAAA;EACA,gBAAA;ALsFN;AKnFG;EACG,OAAA;EACA,wGAAA;ALqFN;AKnFM;EACG,oBAAA;ALqFT;AE7GM;EGuBA;IAIM,oBAAA;ELsFV;AACF;AKnFM;EACG,6CAAA;ALqFT;;AM3HA;EACG,kBAAA;EACA,MAAA;EACA,OAAA;EACA,WAAA;EACA,YAAA;EACA,iCAAA;EACA,aAAA;EACA,oBAAA;EACA,WAAA;AN8HH;AM5HG;EACG,kBAAA;EACA,UAAA;AN8HN;;AO3IA;EACG,aAAA;EACA,cAAA;EACA,kBAAA;EACA,uCAAA;EACA,oBAAA;EACA,oBAAA;EACA,iCAAA;EACA,iCAAA;EACA,eAAA;AP8IH;AO5IG;EACG,oCAAA;AP8IN;AO5IM;EAEG,uCAAA;AP6IT;AOzIG;EACG,6BAAA;AP2IN;AOzIM;EAEG,oCAAA;AP0IT;AOtIG;EACG,YAAA;EACA,gBAAA;APwIN;AOtIM;EACG,0CAAA;APwIT;;AOnIA;EACG,aAAA;EACA,oBAAA;APsIH;AE7JM;EKqBN;IAKM,aAAA;IACA,sBAAA;IACA,mBAAA;IACA,WAAA;EPuIJ;AACF;;AQvLA;EACG,kBAAA;AR0LH;AQxLG;EACG,kBAAA;EACA,kBAAA;EACA,aAAA;EACA,sBAAA;EACA,gBAAA;EACA,oCAAA;EACA,SAAA;EACA,SAAA;EACA,iBAAA;EACA,qBAAA;EACA,gBAAA;EACA,kBAAA;EACA,UAAA;EACA,oBAAA;AR0LN;AQvLG;EACG,sBAAA;EACA,uGAAA;EACA,yBAAA;EACA,4BAAA;EACA,gCAAA;EACA,uDAAA;EACA,eAAA;ARyLN;AQvLM;EACG,4BAAA;EACA,qCAAA;ARyLT;AQrLG;EACG,qBAAA;EACA,aAAA;EACA,cAAA;EACA,iCAAA;EACA,iCAAA;EACA,aAAA;EACA,iBAAA;EACA,qBAAA;EACA,oBAAA;ARuLN;AQpLG;EACG,eAAA;EACA,gBAAA;EACA,kBAAA;ARsLN;AQnLG;EACG,mBAAA;EACA,UAAA;ARqLN;;AS3OG;EACG,kBAAA;AT8ON;AS3OG;EACG,aAAA;EACA,UAAA;EACA,eAAA;AT6ON","sourcesContent":[":root {\r\n   --clr-base: #080b21;\r\n   --clr-base-lt: #1D274C;\r\n   --clr-base-ltr: #{lighten(#1D274C, 10%)};\r\n   \r\n   --clr-primary: #0fa5e5;\r\n   --clr-primary-lt: #{lighten(#0fa5e5, 15%)};\r\n   \r\n   --clr-ntrl-min: #fff;\r\n   --clr-ntrl-max: #000;\r\n   \r\n   --font-size-base: 2rem;\r\n   \r\n   --shadow-primary: 0 0 2rem .2rem rgba(15, 165, 229, .4);\r\n\r\n   --array-bar-width: 5px; \r\n}","//FONT\r\n\r\n@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');\r\n\r\n//ABSTRACTS\r\n\r\n@import './abstracts/variables';\r\n@import './abstracts/mixins';\r\n\r\n//BASE\r\n\r\n@import './base/reset';\r\n@import './base/base';\r\n\r\n//Layout\r\n\r\n@import './layout/navbar';\r\n@import './layout/array';\r\n@import './layout/overlay';\r\n\r\n//COMPONENTS\r\n\r\n@import './components/button';\r\n@import './components/dropdown';\r\n@import './components/sizecontrol';\r\n","*,\r\n*::before,\r\n*::after {\r\n   margin: 0;\r\n   padding: 0;\r\n   box-sizing: inherit;\r\n}\r\n\r\nhtml {\r\n   font-size: 62.5%;\r\n   box-sizing: border-box;\r\n\r\n   @include responsive(tablet) {\r\n      font-size: 50%;\r\n   }\r\n\r\n   @include responsive(phone) {\r\n      font-size: 45%;\r\n   }\r\n}\r\n\r\nul {\r\n   list-style: none;\r\n}","//RESPONSIVE\r\n\r\n\r\n\r\n@mixin responsive($device) {\r\n   @if $device == small-laptop {\r\n      @media only screen and (max-width: 87.5em) { @content }; // 1400px\r\n   }\r\n\r\n   @if $device == tablet {\r\n      @media only screen and (max-width: 62.5em) { @content }; // 1000px\r\n   }\r\n\r\n   @if $device == phone {\r\n      @media only screen and (max-width: 50em) { @content }; // 800px\r\n   }\r\n\r\n   @if $device == small-phone {\r\n      @media only screen and (max-width: 37.5em) { @content }; //600px\r\n   }\r\n}","body {\r\n   font-family: 'Roboto', sans-serif;\r\n   font-size: var(--font-size-base);\r\n   color: var(--clr-ntrl-min);\r\n   background-color: var(--clr-base);\r\n\r\n   &::-webkit-scrollbar {\r\n      display: none;\r\n   }\r\n}",".navbar {\r\n   position: relative;\r\n   padding: 2.5rem 0;\r\n\r\n   @include responsive(tablet) {\r\n      padding: 2.5rem 2rem;\r\n   }\r\n\r\n   &__list {\r\n      display: flex;\r\n      justify-content: center;\r\n\r\n      @include responsive(tablet) {\r\n         justify-content: space-between;\r\n      }\r\n   }\r\n\r\n   &__item {\r\n      flex: 1;\r\n      align-items: center;\r\n      display: flex;\r\n      justify-content: center;\r\n\r\n      @include responsive(small-phone) {\r\n         &--generate,\r\n         &--sort {\r\n            display: none;\r\n         }\r\n      }\r\n\r\n      @include responsive(tablet) {\r\n         flex: initial;\r\n      }\r\n   }\r\n}",".array {\r\n   margin: 10rem auto;\r\n   width: 80%;\r\n\r\n   @include responsive(tablet) {\r\n      width: 90%;\r\n   }\r\n\r\n   &__info {\r\n      display: flex;\r\n      justify-content: space-between;\r\n      font-size: 3rem;\r\n\r\n      & span {\r\n         margin-left: 1rem;\r\n      }\r\n   }\r\n\r\n   &__bars {\r\n      height: 500px;\r\n      display: flex;\r\n      align-items: end;\r\n      margin-top: 5rem;\r\n   }\r\n\r\n   &__bar {\r\n      flex: 1;\r\n      background-image: linear-gradient(180deg, var(--clr-primary-lt), var(--clr-primary), var(--clr-base-lt));\r\n\r\n      &:not(:last-child) {\r\n         margin-right: .4rem;\r\n\r\n         @include responsive(small-laptop) {\r\n            margin-right: .2rem;\r\n         }  \r\n      }\r\n\r\n      &--current {\r\n         box-shadow: 0 0 1rem .8rem rgba(15, 165, 229, 1);\r\n      }\r\n   }\r\n}",".overlay {\r\n   position: absolute;\r\n   top: 0;\r\n   left: 0;\r\n   width: 100%;\r\n   height: 100%;\r\n   background-color: var(--clr-base);\r\n   opacity: .75;\r\n   transition: all .2s;\r\n   z-index: 10;\r\n\r\n   &--hidden {\r\n      visibility: hidden;\r\n      opacity: 0;\r\n   }\r\n}",".btn {\r\n   outline: none;\r\n   color: inherit;\r\n   font-size: inherit;\r\n   border: .2rem solid var(--clr-primary);\r\n   padding: 1rem 2.5rem;\r\n   border-radius: 10rem;\r\n   box-shadow: var(--shadow-primary);\r\n   transition: background-color .2s;\r\n   cursor: pointer;\r\n\r\n   &--generate {\r\n      background-color: var(--clr-primary);\r\n\r\n      &:hover,\r\n      &:active {\r\n         background-color: var(--clr-primary-lt);\r\n      }\r\n   }\r\n\r\n   &--sort {\r\n      background-color: transparent;\r\n\r\n      &:hover,\r\n      &:active {\r\n         background-color: var(--clr-primary);\r\n      }\r\n   }\r\n\r\n   &--drop-down {\r\n      border: none;\r\n      box-shadow: none;\r\n      \r\n      &:hover {\r\n         background-color: rgba(250, 250, 250, .1);\r\n      }\r\n   }\r\n}\r\n\r\n.btn-container {\r\n   display: none;\r\n   margin-bottom: 10rem;\r\n\r\n   @include responsive(small-phone) {\r\n      display: flex;\r\n      flex-direction: column;\r\n      align-items: center;\r\n      gap: 2.5rem;\r\n   }\r\n}",".drop-down {\r\n   position: relative;\r\n\r\n   &__list {\r\n      position: absolute;\r\n      text-align: center;\r\n      display: flex;\r\n      flex-direction: column;\r\n      min-width: 20rem;\r\n      background-color: var(--clr-base-lt);\r\n      left: 50%;\r\n      top: 110%;\r\n      translate: -50% 0;\r\n      border-radius: 1.5rem;\r\n      overflow: hidden;\r\n      visibility: hidden;\r\n      opacity: 0;\r\n      transition: all .5s;\r\n   }\r\n\r\n   &__item {\r\n      padding: 1.5rem 2.5rem;\r\n      background-image: linear-gradient(90deg, var(--clr-base-lt), var(--clr-primary), var(--clr-primary-lt));\r\n      background-size: 0 .5rem;\r\n      background-repeat: no-repeat;\r\n      background-position: bottom left;\r\n      transition: background-size .3s, background-color .2s;\r\n      cursor: pointer;\r\n\r\n      &:hover {\r\n         background-size: 100% .5rem;\r\n         background-color: var(--clr-base-ltr);\r\n      }\r\n   }\r\n\r\n   &__icon {\r\n      display: inline-block;\r\n      width: 1.2rem;\r\n      height: 1.2rem;\r\n      border: solid var(--clr-ntrl-min);\r\n      border-width: 0 .25rem .25rem 0;\r\n      rotate: 45deg;\r\n      margin-left: 2rem;\r\n      margin-bottom: .5rem;\r\n      transition: all .2s;\r\n   }\r\n\r\n   &:hover &__icon {\r\n      rotate: -135deg;\r\n      margin-bottom: 0;\r\n      margin-top: .5rem;\r\n   }\r\n\r\n   &:hover &__list {\r\n      visibility: visible;\r\n      opacity: 1;\r\n   }\r\n}",".size {\r\n   &__label {\r\n      margin-right: 2rem;\r\n   }\r\n\r\n   &__range {\r\n      outline: none;\r\n      width: 50%;\r\n      cursor: pointer;\r\n   }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/main.scss":
/*!******************************!*\
  !*** ./src/styles/main.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/main.scss */ "./src/styles/main.scss");


function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var array = document.querySelector('.array__bars');
var algs = document.querySelector('.drop-down__list');
var sizeControl = document.querySelector('.size__range');
var labelSize = document.querySelector('.array__size');
var labelMethod = document.querySelector('.array__method');
var generateButton = document.querySelectorAll('.btn--generate');
var sortButton = document.querySelectorAll('.btn--sort');
var overlay = document.querySelector('.overlay');
var arrCurr = [];
var arrayHeight = parseFloat(window.getComputedStyle(array).getPropertyValue('height'));

// TIMER

function timer() {
  var time = sizeControl.value;
  return new Promise(function (resolve) {
    setTimeout(resolve, 1000 / time);
  });
}

//ALGORITHMS

var algorithms = {
  //SELECTION SORT**************************************

  selectionsort: function () {
    var _selectionsort = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var i, iElem, minIdx, minElem, j, currElem, _ref, heightMin, heightI;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            i = 0;
          case 1:
            if (!(i < arrCurr.length - 1)) {
              _context.next = 41;
              break;
            }
            iElem = document.getElementById("".concat(i));
            minIdx = i;
            minElem = iElem;
            minElem.classList.add('array__bar--current');
            _context.next = 8;
            return timer();
          case 8:
            j = i + 1;
          case 9:
            if (!(j < arrCurr.length)) {
              _context.next = 25;
              break;
            }
            currElem = document.getElementById("".concat(j));
            currElem.classList.add('array__bar--current');
            _context.next = 14;
            return timer();
          case 14:
            currElem.classList.remove('array__bar--current');
            if (!(arrCurr[minIdx] > arrCurr[j])) {
              _context.next = 22;
              break;
            }
            minIdx = j;
            minElem.classList.remove('array__bar--current');
            minElem = currElem;
            minElem.classList.add('array__bar--current');
            _context.next = 22;
            return timer();
          case 22:
            j++;
            _context.next = 9;
            break;
          case 25:
            if (!(minIdx !== i)) {
              _context.next = 37;
              break;
            }
            _ref = [arrCurr[i], arrCurr[minIdx]];
            arrCurr[minIdx] = _ref[0];
            arrCurr[i] = _ref[1];
            heightMin = minElem.dataset.height;
            heightI = iElem.dataset.height;
            minElem.style.height = "".concat(heightI, "px");
            minElem.dataset.height = heightI;
            iElem.style.height = "".concat(heightMin, "px");
            iElem.dataset.height = heightMin;
            _context.next = 37;
            return timer();
          case 37:
            minElem.classList.remove('array__bar--current');
          case 38:
            i++;
            _context.next = 1;
            break;
          case 41:
            overlay.classList.add('overlay--hidden');
          case 42:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    function selectionsort() {
      return _selectionsort.apply(this, arguments);
    }
    return selectionsort;
  }(),
  //HEAP SORT*********************************************

  heapsort: function () {
    var _heapsort = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
      var heapify, _heapify, i, _i, _ref2, zeroElem, iElem, heightZero, heightIElem;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            _heapify = function _heapify3() {
              _heapify = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(size, index) {
                var largest, left, right, indexElem, largestElem, leftElem, rightElem, heightIndex, heightLargest, _ref3;
                return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                  while (1) switch (_context2.prev = _context2.next) {
                    case 0:
                      largest = index;
                      left = 2 * index + 1;
                      right = 2 * index + 2;
                      indexElem = document.getElementById("".concat(index));
                      largestElem = indexElem;
                      indexElem.classList.add('array__bar--current');
                      _context2.next = 8;
                      return timer();
                    case 8:
                      if (!(left < size)) {
                        _context2.next = 14;
                        break;
                      }
                      leftElem = document.getElementById("".concat(left));
                      leftElem.classList.add('array__bar--current');
                      _context2.next = 13;
                      return timer();
                    case 13:
                      if (arrCurr[left] > arrCurr[largest]) {
                        largest = left;
                        largestElem = leftElem;
                      } else {
                        leftElem.classList.remove('array__bar--current');
                      }
                    case 14:
                      if (!(right < size)) {
                        _context2.next = 21;
                        break;
                      }
                      rightElem = document.getElementById("".concat(right));
                      rightElem.classList.add('array__bar--current');
                      if (arrCurr[right] > arrCurr[largest]) {
                        largest = right;
                        largestElem.classList.remove('array__bar--current');
                        largestElem = rightElem;
                      }
                      _context2.next = 20;
                      return timer();
                    case 20:
                      rightElem.classList.remove('array__bar--current');
                    case 21:
                      indexElem.classList.remove('array__bar--current');
                      largestElem.classList.remove('array__bar--current');
                      if (!(largest !== index)) {
                        _context2.next = 35;
                        break;
                      }
                      heightIndex = indexElem.dataset.height;
                      heightLargest = largestElem.dataset.height;
                      indexElem.style.height = "".concat(heightLargest, "px");
                      indexElem.dataset.height = "".concat(heightLargest);
                      largestElem.style.height = "".concat(heightIndex, "px");
                      largestElem.dataset.height = "".concat(heightIndex);
                      _ref3 = [arrCurr[largest], arrCurr[index]];
                      arrCurr[index] = _ref3[0];
                      arrCurr[largest] = _ref3[1];
                      _context2.next = 35;
                      return heapify(size, largest);
                    case 35:
                    case "end":
                      return _context2.stop();
                  }
                }, _callee2);
              }));
              return _heapify.apply(this, arguments);
            };
            heapify = function _heapify2(_x, _x2) {
              return _heapify.apply(this, arguments);
            };
            i = Math.floor(arrCurr.length / 2) - 1;
          case 3:
            if (!(i >= 0)) {
              _context3.next = 9;
              break;
            }
            _context3.next = 6;
            return heapify(arrCurr.length, i);
          case 6:
            i--;
            _context3.next = 3;
            break;
          case 9:
            _i = arrCurr.length - 1;
          case 10:
            if (!(_i > 0)) {
              _context3.next = 27;
              break;
            }
            _ref2 = [arrCurr[_i], arrCurr[0]];
            arrCurr[0] = _ref2[0];
            arrCurr[_i] = _ref2[1];
            zeroElem = document.getElementById("".concat(0));
            iElem = document.getElementById("".concat(_i));
            heightZero = zeroElem.dataset.height;
            heightIElem = iElem.dataset.height;
            zeroElem.style.height = "".concat(heightIElem, "px");
            zeroElem.dataset.height = heightIElem;
            iElem.style.height = "".concat(heightZero, "px");
            iElem.dataset.height = heightZero;
            _context3.next = 24;
            return heapify(_i, 0);
          case 24:
            _i--;
            _context3.next = 10;
            break;
          case 27:
            overlay.classList.add('overlay--hidden');
          case 28:
          case "end":
            return _context3.stop();
        }
      }, _callee3);
    }));
    function heapsort() {
      return _heapsort.apply(this, arguments);
    }
    return heapsort;
  }(),
  //MERGE SORT********************************************

  mergesort: function () {
    var _mergesort = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
      var merge, _merge, mergeS, _mergeS, arrIdx, i, sortedIdx;
      return _regeneratorRuntime().wrap(function _callee6$(_context6) {
        while (1) switch (_context6.prev = _context6.next) {
          case 0:
            _mergeS = function _mergeS3() {
              _mergeS = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(arr) {
                var middle, left, right;
                return _regeneratorRuntime().wrap(function _callee5$(_context5) {
                  while (1) switch (_context5.prev = _context5.next) {
                    case 0:
                      if (!(arr.length <= 1)) {
                        _context5.next = 2;
                        break;
                      }
                      return _context5.abrupt("return", arr);
                    case 2:
                      middle = Math.floor(arr.length / 2);
                      _context5.next = 5;
                      return mergeS(arr.slice(0, middle));
                    case 5:
                      left = _context5.sent;
                      _context5.next = 8;
                      return mergeS(arr.slice(middle));
                    case 8:
                      right = _context5.sent;
                      return _context5.abrupt("return", merge(left, right));
                    case 10:
                    case "end":
                      return _context5.stop();
                  }
                }, _callee5);
              }));
              return _mergeS.apply(this, arguments);
            };
            mergeS = function _mergeS2(_x5) {
              return _mergeS.apply(this, arguments);
            };
            _merge = function _merge3() {
              _merge = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(left, right) {
                var result, leftIdx, rightIdx, current, leftElem, rightElem, currentElem, _currentElem, _leftElem, _currentElem2, _rightElem, _currentElem3;
                return _regeneratorRuntime().wrap(function _callee4$(_context4) {
                  while (1) switch (_context4.prev = _context4.next) {
                    case 0:
                      result = [];
                      leftIdx = 0;
                      rightIdx = 0;
                      current = Math.min.apply(Math, _toConsumableArray(left));
                    case 4:
                      if (!(leftIdx < left.length && rightIdx < right.length)) {
                        _context4.next = 19;
                        break;
                      }
                      leftElem = document.getElementById("".concat(left[leftIdx]));
                      rightElem = document.getElementById("".concat(right[rightIdx]));
                      leftElem.classList.add('array__bar--current');
                      _context4.next = 10;
                      return timer();
                    case 10:
                      rightElem.classList.add('array__bar--current');
                      _context4.next = 13;
                      return timer();
                    case 13:
                      if (arrCurr[left[leftIdx]] < arrCurr[right[rightIdx]]) {
                        result.push(left[leftIdx]);
                        currentElem = document.getElementById("".concat(current));
                        currentElem.style.height = "".concat(arrCurr[left[leftIdx]], "px");
                        currentElem.dataset.height = arrCurr[left[leftIdx]];
                        leftIdx++;
                      } else {
                        result.push(right[rightIdx]);
                        _currentElem = document.getElementById("".concat(current));
                        _currentElem.style.height = "".concat(arrCurr[right[rightIdx]], "px");
                        _currentElem.dataset.height = arrCurr[right[rightIdx]];
                        rightIdx++;
                      }
                      current++;
                      leftElem.classList.remove('array__bar--current');
                      rightElem.classList.remove('array__bar--current');
                      _context4.next = 4;
                      break;
                    case 19:
                      if (!(leftIdx < left.length)) {
                        _context4.next = 33;
                        break;
                      }
                      result.push(left[leftIdx]);
                      _leftElem = document.getElementById("".concat(left[leftIdx]));
                      _leftElem.classList.add('array__bar--current');
                      _context4.next = 25;
                      return timer();
                    case 25:
                      _leftElem.classList.remove('array__bar--current');
                      _currentElem2 = document.getElementById("".concat(current));
                      _currentElem2.style.height = "".concat(arrCurr[left[leftIdx]], "px");
                      _currentElem2.dataset.height = arrCurr[left[leftIdx]];
                      leftIdx++;
                      current++;
                      _context4.next = 19;
                      break;
                    case 33:
                      if (!(rightIdx < right.length)) {
                        _context4.next = 47;
                        break;
                      }
                      result.push(right[rightIdx]);
                      _rightElem = document.getElementById("".concat(right[rightIdx]));
                      _rightElem.classList.add('array__bar--current');
                      _context4.next = 39;
                      return timer();
                    case 39:
                      _rightElem.classList.remove('array__bar--current');
                      _currentElem3 = document.getElementById("".concat(current));
                      _currentElem3.style.height = "".concat(arrCurr[right[rightIdx]], "px");
                      _currentElem3.dataset.height = arrCurr[right[rightIdx]];
                      rightIdx++;
                      current++;
                      _context4.next = 33;
                      break;
                    case 47:
                      return _context4.abrupt("return", result);
                    case 48:
                    case "end":
                      return _context4.stop();
                  }
                }, _callee4);
              }));
              return _merge.apply(this, arguments);
            };
            merge = function _merge2(_x3, _x4) {
              return _merge.apply(this, arguments);
            };
            arrIdx = [];
            for (i = 0; i < arrCurr.length; i++) arrIdx.push(i);
            _context6.next = 8;
            return mergeS(arrIdx);
          case 8:
            sortedIdx = _context6.sent;
            arrCurr = sortedIdx.map(function (currVal) {
              return arrCurr[currVal];
            });
            overlay.classList.add('overlay--hidden');
          case 11:
          case "end":
            return _context6.stop();
        }
      }, _callee6);
    }));
    function mergesort() {
      return _mergesort.apply(this, arguments);
    }
    return mergesort;
  }(),
  //QUICK SORT*************************************************

  quicksort: function () {
    var _quicksort = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8() {
      var quickS, _quickS;
      return _regeneratorRuntime().wrap(function _callee8$(_context8) {
        while (1) switch (_context8.prev = _context8.next) {
          case 0:
            _quickS = function _quickS3() {
              _quickS = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
                var _indexElem2;
                var left,
                  right,
                  pivot,
                  index,
                  indexElem,
                  i,
                  currElem,
                  _indexElem,
                  _ref4,
                  heightCurrent,
                  heightIndex,
                  _args7 = arguments;
                return _regeneratorRuntime().wrap(function _callee7$(_context7) {
                  while (1) switch (_context7.prev = _context7.next) {
                    case 0:
                      left = _args7.length > 0 && _args7[0] !== undefined ? _args7[0] : 0;
                      right = _args7.length > 1 && _args7[1] !== undefined ? _args7[1] : arrCurr.length - 1;
                      if (!(left >= right)) {
                        _context7.next = 4;
                        break;
                      }
                      return _context7.abrupt("return");
                    case 4:
                      pivot = arrCurr[right];
                      index = left - 1;
                      i = left;
                    case 7:
                      if (!(i <= right)) {
                        _context7.next = 32;
                        break;
                      }
                      currElem = document.getElementById("".concat(i));
                      currElem.classList.add('array__bar--current');
                      _context7.next = 12;
                      return timer();
                    case 12:
                      if (!(arrCurr[i] < pivot || i === right)) {
                        _context7.next = 28;
                        break;
                      }
                      index++;
                      _ref4 = [arrCurr[index], arrCurr[i]];
                      arrCurr[i] = _ref4[0];
                      arrCurr[index] = _ref4[1];
                      (_indexElem = indexElem) === null || _indexElem === void 0 || _indexElem.classList.remove('array__bar--current');
                      indexElem = document.getElementById("".concat(index));
                      indexElem.classList.add('array__bar--current');
                      _context7.next = 22;
                      return timer();
                    case 22:
                      heightCurrent = currElem.dataset.height;
                      heightIndex = indexElem.dataset.height;
                      indexElem.style.height = "".concat(heightCurrent, "px");
                      indexElem.dataset.height = heightCurrent;
                      currElem.style.height = "".concat(heightIndex, "px");
                      currElem.dataset.height = heightIndex;
                    case 28:
                      currElem.classList.remove('array__bar--current');
                    case 29:
                      i++;
                      _context7.next = 7;
                      break;
                    case 32:
                      (_indexElem2 = indexElem) === null || _indexElem2 === void 0 || _indexElem2.classList.remove('array__bar--current');
                      _context7.next = 35;
                      return quickS(left, index - 1);
                    case 35:
                      _context7.next = 37;
                      return quickS(index + 1, right);
                    case 37:
                    case "end":
                      return _context7.stop();
                  }
                }, _callee7);
              }));
              return _quickS.apply(this, arguments);
            };
            quickS = function _quickS2() {
              return _quickS.apply(this, arguments);
            };
            _context8.next = 4;
            return quickS();
          case 4:
            overlay.classList.add('overlay--hidden');
          case 5:
          case "end":
            return _context8.stop();
        }
      }, _callee8);
    }));
    function quicksort() {
      return _quicksort.apply(this, arguments);
    }
    return quicksort;
  }(),
  //BUBBLE SORT***************************************************

  bubblesort: function () {
    var _bubblesort = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9() {
      var i, sorted, j, currElem, nextElem, _ref5, heightCurrent, heightNext;
      return _regeneratorRuntime().wrap(function _callee9$(_context9) {
        while (1) switch (_context9.prev = _context9.next) {
          case 0:
            i = 0;
          case 1:
            if (!(i < arrCurr.length - 1)) {
              _context9.next = 24;
              break;
            }
            sorted = true;
            j = 0;
          case 4:
            if (!(j < arrCurr.length - i - 1)) {
              _context9.next = 19;
              break;
            }
            currElem = document.getElementById("".concat(j));
            nextElem = document.getElementById("".concat(j + 1));
            currElem.classList.add('array__bar--current');
            _context9.next = 10;
            return timer();
          case 10:
            nextElem.classList.add('array__bar--current');
            _context9.next = 13;
            return timer();
          case 13:
            if (arrCurr[j] > arrCurr[j + 1]) {
              _ref5 = [arrCurr[j + 1], arrCurr[j]];
              arrCurr[j] = _ref5[0];
              arrCurr[j + 1] = _ref5[1];
              sorted = false;
              heightCurrent = currElem.dataset.height;
              heightNext = nextElem.dataset.height;
              currElem.style.height = "".concat(heightNext, "px");
              currElem.dataset.height = heightNext;
              nextElem.style.height = "".concat(heightCurrent, "px");
              nextElem.dataset.height = heightCurrent;
            }
            currElem.classList.remove('array__bar--current');
            nextElem.classList.remove('array__bar--current');
          case 16:
            j++;
            _context9.next = 4;
            break;
          case 19:
            if (!sorted) {
              _context9.next = 21;
              break;
            }
            return _context9.abrupt("break", 24);
          case 21:
            i++;
            _context9.next = 1;
            break;
          case 24:
            overlay.classList.add('overlay--hidden');
          case 25:
          case "end":
            return _context9.stop();
        }
      }, _callee9);
    }));
    function bubblesort() {
      return _bubblesort.apply(this, arguments);
    }
    return bubblesort;
  }()
};

//VIEW

function genRandomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
function genRandomArr(size) {
  var arr = [];
  var minHeight = 10;
  for (var i = 0; i < size; i++) {
    var height = genRandomNum(minHeight, arrayHeight);
    arr.push(height);
  }
  return arr;
}
function renderArr(arr) {
  array.innerHTML = '';
  for (var i = 0; i < arr.length; i++) {
    var markup = "\n         <span id=\"".concat(i, "\" data-height=\"").concat(arr[i], "\" style=\"height: ").concat(arr[i], "px;\" class=\"array__bar\"></span>\n      ");
    array.insertAdjacentHTML('beforeend', markup);
  }
  arrCurr = arr;
}
function createArr(size) {
  var arr = genRandomArr(size);
  renderArr(arr);
}
function checkSize() {
  if (window.innerWidth > 1400) {
    if (+sizeControl.max !== 200) {
      sizeControl.max = 200;
      createArr(sizeControl.value);
      labelSize.textContent = sizeControl.value;
    }
  } else if (window.innerWidth <= 1400 && window.innerWidth > 800) {
    if (+sizeControl.max !== 150) {
      sizeControl.max = 150;
      createArr(sizeControl.value);
      labelSize.textContent = sizeControl.value;
    }
  } else {
    if (+sizeControl.max !== 100) {
      sizeControl.max = 100;
      createArr(sizeControl.value);
      labelSize.textContent = sizeControl.value;
    }
  }
}
sizeControl.addEventListener('input', function () {
  labelSize.textContent = sizeControl.value;
  createArr(sizeControl.value);
});
algs.addEventListener('click', function (e) {
  var target = e.target;
  if (!target.classList.contains('drop-down__item')) return;
  labelMethod.textContent = target.textContent;
});
generateButton.forEach(function (btn) {
  return btn.addEventListener('click', function () {
    createArr(sizeControl.value);
  });
});
sortButton.forEach(function (btn) {
  return btn.addEventListener('click', function () {
    var alg = labelMethod.textContent.toLowerCase().split(' ').join('');
    overlay.classList.remove('overlay--hidden');
    algorithms[alg]();
  });
});

//RESPONSIVE SLIDER

window.addEventListener('resize', checkSize);
checkSize();
createArr(sizeControl.value);
})();

/******/ })()
;
//# sourceMappingURL=bundle90e29657a1cd03737fc1.js.map