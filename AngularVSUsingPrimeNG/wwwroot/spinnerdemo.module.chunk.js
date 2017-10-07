webpackJsonp(["spinnerdemo.module"],{

/***/ "../../../../../src/app/showcase/components/spinner/spinnerdemo-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpinnerDemoRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__spinnerdemo__ = __webpack_require__("../../../../../src/app/showcase/components/spinner/spinnerdemo.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let SpinnerDemoRoutingModule = class SpinnerDemoRoutingModule {
};
SpinnerDemoRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"].forChild([
                { path: '', component: __WEBPACK_IMPORTED_MODULE_2__spinnerdemo__["a" /* SpinnerDemo */] }
            ])
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"]
        ]
    })
], SpinnerDemoRoutingModule);

//# sourceMappingURL=spinnerdemo-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/showcase/components/spinner/spinnerdemo.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-section introduction\">\n    <div>\n        <span class=\"feature-title\">Spinner</span>\n        <span>Spinner is an input component to provide a numerical input.</span>\n    </div>\n</div>\n\n<div class=\"content-section implementation\">\n    <h3 class=\"first\">Basic</h3>\n    <p-spinner size=\"30\" [(ngModel)]=\"val1\"></p-spinner>\n\n    <h3>Min/Max</h3>\n    <p-spinner size=\"30\" [(ngModel)]=\"val2\" [min]=\"0\" [max]=\"100\"></p-spinner>\n\n    <h3>Step</h3>\n    <p-spinner size=\"30\" [(ngModel)]=\"val3\" [step]=\"0.25\"></p-spinner>\n    \n    <h3>Disabled</h3>\n    <p-spinner size=\"30\" [(ngModel)]=\"val4\" [disabled]=\"true\"></p-spinner>\n</div>\n\n<div class=\"content-section documentation\">\n    <p-tabView effect=\"fade\">\n        <p-tabPanel header=\"Documentation\">\n            <h3>Import</h3>\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nimport &#123;SpinnerModule&#125; from 'primeng/primeng';\n</code>\n</pre>\n\n            <h3>Getting Started</h3>\n            <p>Two-way value binding is defined using standard ngModel directive.</p>     \n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-spinner size=\"30\" [(ngModel)]=\"val\"&gt;&lt;/p-spinner&gt;\n</code>\n</pre>\n\n            <h3>Model Driven Forms</h3>\n            <p>Spinner can be used in a model driven form as well.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-spinner formControlName=\"age\"&gt;&lt;/p-spinner&gt;\n</code>\n</pre>\n\n            <h3>Min-Max</h3>\n            <p>Boundaries are specified with min and max attributes.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-spinner size=\"30\" [(ngModel)]=\"val\" [min]=\"0\" [max]=\"100\"&gt;&lt;/p-spinner&gt;\n</code>\n</pre>\n\n            <h3>Step</h3>\n            <p>Step factor is 1 by default and can be customized with step option.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-spinner size=\"30\" [(ngModel)]=\"val\" [step]=\"0.25\"&gt;&lt;/p-spinner&gt;\n</code>\n</pre>\n\n            <h3>Properties</h3>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                        <tr>\n                            <th>Name</th>\n                            <th>Type</th>\n                            <th>Default</th>\n                            <th>Description</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>step</td>\n                            <td>number</td>\n                            <td>1</td>\n                            <td>Step factor to increment/decrement the value.</td>\n                        </tr>\n                        <tr>\n                            <td>min</td>\n                            <td>number</td>\n                            <td>null</td>\n                            <td>Mininum boundary value.</td>\n                        </tr>\n                        <tr>\n                            <td>max</td>\n                            <td>number</td>\n                            <td>null</td>\n                            <td>Maximum boundary value.</td>\n                        </tr>\n                        <tr>\n                            <td>placeholder</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Hint text for the input field.</td>\n                        </tr>\n                        <tr>\n                            <td>disabled</td>\n                            <td>boolean</td>\n                            <td>false</td>\n                            <td>When present, it specifies that the element should be disabled.</td>\n                        </tr>\n                        <tr>\n                            <td>readonly</td>\n                            <td>boolean</td>\n                            <td>false</td>\n                            <td>When present, it specifies that the element should be read-only.</td>\n                        </tr>\n                        <tr>\n                            <td>maxlength</td>\n                            <td>number</td>\n                            <td>null</td>\n                            <td>Maximum number of character allows in the input field.</td>\n                        </tr>\n                        <tr>\n                            <td>size</td>\n                            <td>number</td>\n                            <td>null</td>\n                            <td>Size of the input field.</td>\n                        </tr>\n                        <tr>\n                            <td>decimalSeparator</td>\n                            <td>string</td>\n                            <td>.</td>\n                            <td>Separator character for decimals.</td>\n                        </tr>\n                        <tr>\n                            <td>thousandSeparator</td>\n                            <td>string</td>\n                            <td>,</td>\n                            <td>Separator character for thousands.</td>\n                        </tr>\n                        <tr>\n                            <td>tabindex</td>\n                            <td>number</td>\n                            <td>null</td>\n                            <td>Index of the element in tabbing order.</td>\n                        </tr>\n                        <tr>\n                            <td>formatInput</td>\n                            <td>boolean</td>\n                            <td>true</td>\n                            <td>When present, formats the user input.</td>\n                        </tr>\n                        <tr>\n                            <td>inputId</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Identifier of the focus input to match a label defined for the component.</td>\n                        </tr>\n                        <tr>\n                            <td>type</td>\n                            <td>string</td>\n                            <td>text</td>\n                            <td>Type of the input field.</td>\n                        </tr>\n                        <tr>\n                            <td>required</td>\n                            <td>boolean</td>\n                            <td>false</td>\n                            <td>When present, it specifies that an input field must be filled out before submitting the form.</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n            \n            <h3>Events</h3>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                        <tr>\n                            <th>Name</th>\n                            <th>Parameters</th>\n                            <th>Description</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>onBlur</td>\n                            <td>event: Blur event</td>\n                            <td>Callback to invoke when input loses focus.</td>\n                        </tr>       \n                        <tr>\n                            <td>onFocus</td>\n                            <td>event: Browser event</td>\n                            <td>Callback to invoke when input gets focus.</td>\n                        </tr>                 \n                        <tr>\n                            <td>onChange</td>\n                            <td>event: Change event</td>\n                            <td>Callback to invoke on value change.</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n\n            <h3>Styling</h3>\n            <p>Following is the list of structural style classes, for theming classes visit <a href=\"#\" [routerLink]=\"['/theming']\">theming page</a>.</p>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                        <tr>\n                            <th>Name</th>\n                            <th>Element</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>ui-spinner</td>\n                            <td>Container element</td>\n                        </tr>\n                        <tr>\n                            <td>ui-spinner-up</td>\n                            <td>Up element</td>\n                        </tr>\n                        <tr>\n                            <td>ui-spinner-down</td>\n                            <td>Down button</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n\n            <h3>Dependencies</h3>\n            <p>None.</p>\n        </p-tabPanel>\n\n        <p-tabPanel header=\"Source\">\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/spinner\" class=\"btn-viewsource\" target=\"_blank\">\n                <i class=\"fa fa-github\"></i>\n                <span>View on GitHub</span>\n            </a>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;h3 class=\"first\"&gt;Basic&lt;/h3&gt;\n&lt;p-spinner size=\"30\" [(ngModel)]=\"val1\"&gt;&lt;/p-spinner&gt;\n\n&lt;h3&gt;Min/Max&lt;/h3&gt;\n&lt;p-spinner size=\"30\" [(ngModel)]=\"val2\" [min]=\"0\" [max]=\"100\"&gt;&lt;/p-spinner&gt;\n\n&lt;h3&gt;Step&lt;/h3&gt;\n&lt;p-spinner size=\"30\" [(ngModel)]=\"val3\" [step]=\"0.25\"&gt;&lt;/p-spinner&gt;\n\n&lt;h3&gt;Disabled&lt;/h3&gt;\n&lt;p-spinner size=\"30\" [(ngModel)]=\"val4\" [disabled]=\"true\"&gt;&lt;/p-spinner&gt;\n</code>\n</pre>\n\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport class SpinnerDemo &#123;\n\n    val1: number;\n\n    val2: number;\n\n    val3: number;\n\n    val4: number = 100;\n    \n&#125;\n</code>\n</pre>\n        </p-tabPanel>\n    </p-tabView>\n</div>"

/***/ }),

/***/ "../../../../../src/app/showcase/components/spinner/spinnerdemo.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpinnerDemoModule", function() { return SpinnerDemoModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__spinnerdemo__ = __webpack_require__("../../../../../src/app/showcase/components/spinner/spinnerdemo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__spinnerdemo_routing_module__ = __webpack_require__("../../../../../src/app/showcase/components/spinner/spinnerdemo-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__ = __webpack_require__("../../../../primeng/primeng.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_primeng_primeng__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



;



let SpinnerDemoModule = class SpinnerDemoModule {
};
SpinnerDemoModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_4__spinnerdemo_routing_module__["a" /* SpinnerDemoRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__["SpinnerModule"],
            __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__["TabViewModule"],
            __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__["CodeHighlighterModule"]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__spinnerdemo__["a" /* SpinnerDemo */]
        ]
    })
], SpinnerDemoModule);

//# sourceMappingURL=spinnerdemo.module.js.map

/***/ }),

/***/ "../../../../../src/app/showcase/components/spinner/spinnerdemo.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpinnerDemo; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

let SpinnerDemo = class SpinnerDemo {
    constructor() {
        this.val4 = 100;
    }
};
SpinnerDemo = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__("../../../../../src/app/showcase/components/spinner/spinnerdemo.html")
    })
], SpinnerDemo);

//# sourceMappingURL=spinnerdemo.js.map

/***/ })

});
//# sourceMappingURL=spinnerdemo.module.chunk.js.map