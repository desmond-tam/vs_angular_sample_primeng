webpackJsonp(["captchademo.module"],{

/***/ "../../../../../src/app/showcase/components/captcha/captchademo-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CaptchaDemoRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__captchademo__ = __webpack_require__("../../../../../src/app/showcase/components/captcha/captchademo.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let CaptchaDemoRoutingModule = class CaptchaDemoRoutingModule {
};
CaptchaDemoRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"].forChild([
                { path: '', component: __WEBPACK_IMPORTED_MODULE_2__captchademo__["a" /* CaptchaDemo */] }
            ])
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"]
        ]
    })
], CaptchaDemoRoutingModule);

//# sourceMappingURL=captchademo-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/showcase/components/captcha/captchademo.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-section introduction\">\n    <div>\n        <span class=\"feature-title\">Captcha</span>\n        <span>Captcha is a form validation component based on Recaptcha.</span>\n    </div>\n</div>\n\n<div class=\"content-section implementation\">\n    <p-growl [value]=\"msgs\" sticky=\"sticky\"></p-growl>\n    \n    <p-captcha siteKey=\"6Lf2XQkTAAAAANcvOwYqPxWL4iZDksFqHpS39GDA\" (onResponse)=\"showResponse($event)\"></p-captcha>\n</div>\n\n<div class=\"content-section documentation\">\n    <p-tabView effect=\"fade\">\n        <p-tabPanel header=\"Documentation\">\n            <h3>Import</h3>\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nimport &#123;CaptchaModule&#125; from 'primeng/primeng';\n</code>\n</pre>\n\n            <h3>Getting Started</h3>\n            <p>Captcha is used with a siteKey and a callback to verify the response.</p>\n            \n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-captcha siteKey=\"YOUR_SITE_KEY\" (onResponse)=\"showResponse($event)\"&gt;&lt;/p-captcha&gt;\n</code>\n</pre>\n\n            <p>In addition include the captcha widget resource to your page.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;script src=\"https://www.google.com/recaptcha/api.js?render=explicit&onload=initRecaptcha\" async defer>&lt;/script&gt;\n</code>\n</pre>\n\n            <p>Global callback name is initRecaptcha by default and it can be changed using initCallback property .</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;script src=\"https://www.google.com/recaptcha/api.js?render=explicit&onload=loadCaptcha\" async defer>&lt;/script&gt;\n</code>\n</pre>\n\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-captcha siteKey=\"YOUR_SITE_KEY\" (onResponse)=\"showResponse($event)\" initCallback=\"loadCaptcha\"&gt;&lt;/p-captcha&gt;\n</code>\n</pre>\n\n\n            <h3>Verification</h3>\n            <p>In order to ensure if a response token is valid, verification against recaptcha api needs to be done at backend. <a href=\"https://developers.google.com/recaptcha/docs/verify\">Read more</a> at \n            official documentation.</p>\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nshowResponse(response) &#123;\n    //call to a backend to verify against recaptcha with private key\n&#125;\n</code>\n</pre>\n\n            <h3>Properties</h3>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                        <tr>\n                            <th>Name</th>\n                            <th>Type</th>\n                            <th>Default</th>\n                            <th>Description</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>sitekey</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Public sitekey.</td>\n                        </tr>\n                        <tr>\n                            <td>theme</td>\n                            <td>string</td>\n                            <td>light</td>\n                            <td>The color scheme of the widget.</td>\n                        </tr>\n                        <tr>\n                            <td>type</td>\n                            <td>string</td>\n                            <td>image</td>\n                            <td>The type of CAPTCHA to serve.</td>\n                        </tr>\n                        <tr>\n                            <td>size</td>\n                            <td>string</td>\n                            <td>normal</td>\n                            <td>The size of the widget.</td>\n                        </tr>\n                        <tr>\n                            <td>tabindex</td>\n                            <td>number</td>\n                            <td>0</td>\n                            <td>The tabindex of the widget and challenge.\n                                If other elements in your page use tabindex, \n                                it should be set to make user navigation easier.\n                            </td>\n                        </tr>\n                        <tr>\n                            <td>language</td>\n                            <td>string</td>\n                            <td>en</td>\n                            <td>Language of the widget.</td>\n                        </tr>\n                        <tr>\n                            <td>initCallback</td>\n                            <td>string</td>\n                            <td>initRecaptcha</td>\n                            <td>Name of global callback to initialize recaptcha.</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n            \n            <h3>Events</h3>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                    <tr>\n                        <th>Name</th>\n                        <th>Parameters</th>\n                        <th>Description</th>\n                    </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>onResponse</td>\n                            <td>event.response: The user response token.</td>\n                            <td>The callback function to be executed when the user submits a successful CAPTCHA response.</td>\n                        </tr>\n                        <tr>\n                            <td>onExpire</td>\n                            <td>-</td>\n                            <td>The callback function to be executed when the recaptcha response expires and the user needs to solve a new CAPTCHA.</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n            \n            <h3>Methods</h3>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                        <tr>\n                            <th>Name</th>\n                            <th>Parameters</th>\n                            <th>Description</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>reset</td>\n                            <td>-</td>\n                            <td>Resets the reCAPTCHA widget.</td>\n                        </tr>\n                        <tr>\n                            <td>getResponse</td>\n                            <td>-</td>\n                            <td>Gets the response for the reCAPTCHA widget.</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n            \n            <h3>Official Documentation</h3>\n            <a href=\"https://developers.google.com/recaptcha/docs/display\">Here</a>\n\n            <h3>Dependencies</h3>\n            <p>Google Recaptcha V2</p>\n        </p-tabPanel>\n\n        <p-tabPanel header=\"Source\">\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/captcha\" class=\"btn-viewsource\" target=\"_blank\">\n                <i class=\"fa fa-github\"></i>\n                <span>View on GitHub</span>\n            </a>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-growl [value]=\"msgs\" sticky=\"sticky\"&gt;&lt;/p-growl&gt;\n\n&lt;p-captcha siteKey=\"6Lf2XQkTAAAAANcvOwYqPxWL4iZDksFqHpS39GDA\" (onResponse)=\"showResponse($event)\"&gt;&lt;/p-captcha&gt;\n</code>\n</pre>\n\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport class CaptchaDemo &#123;\n    \n    msgs: Message[] = [];\n    \n    showResponse(event) &#123;\n        this.msgs = [];\n        this.msgs.push(&#123;severity:'info', summary:'Succees', detail: 'User Responded'&#125;);\n    &#125;\n&#125;\n</code>\n</pre>\n        </p-tabPanel>\n    </p-tabView>\n</div>"

/***/ }),

/***/ "../../../../../src/app/showcase/components/captcha/captchademo.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CaptchaDemoModule", function() { return CaptchaDemoModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__captchademo__ = __webpack_require__("../../../../../src/app/showcase/components/captcha/captchademo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__captchademo_routing_module__ = __webpack_require__("../../../../../src/app/showcase/components/captcha/captchademo-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__ = __webpack_require__("../../../../primeng/primeng.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_primeng_primeng__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








let CaptchaDemoModule = class CaptchaDemoModule {
};
CaptchaDemoModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_3__captchademo_routing_module__["a" /* CaptchaDemoRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__["CaptchaModule"],
            __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__["TabViewModule"],
            __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__["GrowlModule"],
            __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__["CodeHighlighterModule"]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__captchademo__["a" /* CaptchaDemo */]
        ]
    })
], CaptchaDemoModule);

//# sourceMappingURL=captchademo.module.js.map

/***/ }),

/***/ "../../../../../src/app/showcase/components/captcha/captchademo.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CaptchaDemo; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

let CaptchaDemo = class CaptchaDemo {
    constructor() {
        this.msgs = [];
    }
    showResponse(event) {
        this.msgs = [];
        this.msgs.push({ severity: 'info', summary: 'Success', detail: 'User Responsed' });
    }
};
CaptchaDemo = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__("../../../../../src/app/showcase/components/captcha/captchademo.html")
    })
], CaptchaDemo);

//# sourceMappingURL=captchademo.js.map

/***/ })

});
//# sourceMappingURL=captchademo.module.chunk.js.map