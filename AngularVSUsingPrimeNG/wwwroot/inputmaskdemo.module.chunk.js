webpackJsonp(["inputmaskdemo.module"],{

/***/ "../../../../../src/app/showcase/components/inputmask/inputmaskdemo-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InputMaskDemoRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__inputmaskdemo__ = __webpack_require__("../../../../../src/app/showcase/components/inputmask/inputmaskdemo.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let InputMaskDemoRoutingModule = class InputMaskDemoRoutingModule {
};
InputMaskDemoRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"].forChild([
                { path: '', component: __WEBPACK_IMPORTED_MODULE_2__inputmaskdemo__["a" /* InputMaskDemo */] }
            ])
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"]
        ]
    })
], InputMaskDemoRoutingModule);

//# sourceMappingURL=inputmaskdemo-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/showcase/components/inputmask/inputmaskdemo.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-section introduction\">\n    <div>\n        <span class=\"feature-title\">InputMask</span>\n        <span>InputMask component is used to enter input in a certain format such as numeric, date, currency, email and phone.</span>\n    </div>\n</div>\n\n<div class=\"content-section implementation\">\n\n    <div class=\"ui-g ui-fluid\">\n        <div class=\"ui-g-12 ui-md-6 ui-lg-4\">\n            <span>Basic</span>\n            <p-inputMask mask=\"99-999999\" [(ngModel)]=\"val1\" placeholder=\"99-999999\"></p-inputMask>\n        </div>\n        \n        <div class=\"ui-g-12 ui-md-6 ui-lg-4\">\n            <span>SSN</span>\n            <p-inputMask mask=\"999-99-9999\" [(ngModel)]=\"val2\" placeholder=\"999-99-9999\"></p-inputMask>\n        </div>\n        \n        <div class=\"ui-g-12 ui-md-6 ui-lg-4\">\n            <span>Date</span>\n            <p-inputMask mask=\"99/99/9999\" [(ngModel)]=\"val3\" placeholder=\"99/99/9999\" slotChar=\"mm/dd/yyyy\"></p-inputMask>\n        </div>\n        \n        <div class=\"ui-g-12 ui-md-6 ui-lg-4\">\n            <span>Phone</span>\n            <p-inputMask mask=\"(999) 999-9999\" [(ngModel)]=\"val4\" placeholder=\"(999) 999-9999\"></p-inputMask>\n        </div>\n        \n        <div class=\"ui-g-12 ui-md-6 ui-lg-4\">\n            <span>Phone Ext</span>\n            <p-inputMask mask=\"(999) 999-9999? x99999\" [(ngModel)]=\"val5\" placeholder=\"(999) 999-9999? x99999\"></p-inputMask>\n        </div>\n        \n        <div class=\"ui-g-12 ui-md-6 ui-lg-4\">\n            <span>Serial Number</span>\n            <p-inputMask mask=\"a*-999-a999\" [(ngModel)]=\"val6\" placeholder=\"a*-999-a999\"></p-inputMask>\n        </div>\n    </div>\n    \n</div>\n\n<div class=\"content-section documentation\">\n    <p-tabView effect=\"fade\">\n        <p-tabPanel header=\"Documentation\">\n            <h3>Import</h3>\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nimport &#123;InputMaskModule&#125; from 'primeng/primeng';\n</code>\n</pre>\n\n            <h3>Getting Started</h3>\n            <p>Component is defined using p-inputMask element with a mask and two-way value binding is enabled with standard ngModel directive.</p>   \n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-inputMask [(ngModel)]=\"val\" mask=\"99-9999\"&gt;&lt;/p-inputMask&gt;\n</code>\n</pre>\n\n            <h3>Mask</h3>\n            <p>Mask format can be a combination of the the following built-in definitions.</p>\n            <ul>\n                <li>a - Alpha character (A-Z,a-z)</li>\n                <li>9 - Numeric character (0-9)</li>\n                <li>* - Alpha numberic character (A-Z,a-z,0-9)</li>\n            </ul>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-inputMask [(ngModel)]=\"val\" mask=\"a*-999-a999\"&gt;&lt;/p-inputMask&gt;\n</code>\n</pre>\n            \n            <h3>SlotChar</h3>\n            <p>Underscore is the default placeholder for a mask and this can be customized using slotChart option.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-inputMask [(ngModel)]=\"val\" mask=\"99-9999\" slotChar=\" \"&gt;&lt;/p-inputMask&gt;\n</code>\n</pre>\n            \n            <h3>Optional Values</h3>\n            <p>If the input does not complete the mask definition, it is cleared by default. Use autoClear property to control this behavior. In addition,\n            certain part of a mask can be made optional by using ? symbol where anything after the question mark becomes optional.</p>\n                        \n            <h3>Model Driven Forms</h3>\n            <p>InputMask can be used in a model driven form as well.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-inputMask formControlName=\"username\" mask=\"(999) 999-9999? x99999\"&gt;&lt;/p-inputMask&gt;\n</code>\n</pre>\n\n            <h3>Properties</h3>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                        <tr>\n                            <th>Name</th>\n                            <th>Type</th>\n                            <th>Default</th>\n                            <th>Description</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>type</td>\n                            <td>string</td>\n                            <td>text</td>\n                            <td>HTML5 input type</td>\n                        </tr>\n                        <tr>\n                            <td>mask</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Mask pattern.</td>\n                        </tr>\n                        <tr>\n                            <td>slotChar</td>\n                            <td>string</td>\n                            <td>_</td>\n                            <td>Placeholder character in mask, default is underscore.</td>\n                        </tr>\n                        <tr>\n                            <td>autoClear</td>\n                            <td>boolean</td>\n                            <td>true</td>\n                            <td>Clears the incomplete value on blur.</td>\n                        </tr>\n                        <tr>\n                            <td>unmask</td>\n                            <td>boolean</td>\n                            <td>false</td>\n                            <td>Defines if ngModel sets the raw unmasked value to bound value or the formatted mask value.</td>\n                        </tr>\n                        <tr>\n                            <td>style</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Inline style of the input field.</td>\n                        </tr>\n                        <tr>\n                            <td>styleClass</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Style class of the input field.</td>\n                        </tr>\n                        <tr>\n                            <td>placeholder</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Advisory information to display on input.</td>\n                        </tr>\n                        <tr>\n                            <td>size</td>\n                            <td>number</td>\n                            <td>null</td>\n                            <td>Size of the input field.</td>\n                        </tr>\n                        <tr>\n                            <td>maxlength</td>\n                            <td>number</td>\n                            <td>null</td>\n                            <td>Maximum number of character allows in the input field.</td>\n                        </tr>\n                        <tr>\n                            <td>tabindex</td>\n                            <td>number</td>\n                            <td>null</td>\n                            <td>Specifies tab order of the element.</td>\n                        </tr>\n                        <tr>\n                            <td>disabled</td>\n                            <td>boolean</td>\n                            <td>false</td>\n                            <td>When present, it specifies that the element value cannot be altered.</td>\n                        </tr>\n                        <tr>\n                            <td>readonly</td>\n                            <td>boolean</td>\n                            <td>false</td>\n                            <td>When present, it specifies that an input field is read-only.</td>\n                        </tr>\n                        <tr>\n                            <td>name</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Name of the input field.</td>\n                        </tr>\n                        <tr>\n                            <td>inputId</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Identifier of the focus input to match a label defined for the component.</td>\n                        </tr>\n                        <tr>\n                            <td>required</td>\n                            <td>boolean</td>\n                            <td>false</td>\n                            <td>When present, it specifies that an input field must be filled out before submitting the form.</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n            \n            <h3>Events</h3>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                        <tr>\n                            <th>Name</th>\n                            <th>Parameters</th>\n                            <th>Description</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>onFocus</td>\n                            <td>event: Browser event</td>\n                            <td>Callback to invoke when input receives focus.</td>\n                        </tr> \n                        <tr>\n                            <td>onBlur</td>\n                            <td>event: Browser event</td>\n                            <td>Callback to invoke when input loses focus.</td>\n                        </tr>   \n                        <tr>\n                            <td>onComplete</td>\n                            <td>-</td>\n                            <td>Callback to invoke on when user completes the mask pattern.</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n\n            <h3>Styling</h3>\n            <p>Styling is same as <a href=\"#\" [routerLink]=\"['/inputtext']\">inputtext component</a>, for theming classes visit <a href=\"#\" [routerLink]=\"['/theming']\">theming page</a>.</p>\n\n            <h3>Dependencies</h3>\n            <p>None.</p>\n        </p-tabPanel>\n\n        <p-tabPanel header=\"Source\">\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/inputmask\" class=\"btn-viewsource\" target=\"_blank\">\n                <i class=\"fa fa-github\"></i>\n                <span>View on GitHub</span>\n            </a>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;div class=\"ui-g ui-fluid\"&gt;\n    &lt;div class=\"ui-g-12 ui-md-6 ui-lg-4\"&gt;\n        &lt;span&gt;Basic&lt;/span&gt;\n        &lt;p-inputMask mask=\"99-999999\" [(ngModel)]=\"val1\" placeholder=\"99-999999\"&gt;&lt;/p-inputMask&gt;\n    &lt;/div&gt;\n    \n    &lt;div class=\"ui-g-12 ui-md-6 ui-lg-4\"&gt;\n        &lt;span&gt;SSN&lt;/span&gt;\n        &lt;p-inputMask mask=\"999-99-9999\" [(ngModel)]=\"val2\" placeholder=\"999-99-9999\"&gt;&lt;/p-inputMask&gt;\n    &lt;/div&gt;\n    \n    &lt;div class=\"ui-g-12 ui-md-6 ui-lg-4\"&gt;\n        &lt;span&gt;Date&lt;/span&gt;\n        &lt;p-inputMask mask=\"99/99/9999\" [(ngModel)]=\"val3\" placeholder=\"99/99/9999\" slotChar=\"mm/dd/yyyy\"&gt;&lt;/p-inputMask&gt;\n    &lt;/div&gt;\n    \n    &lt;div class=\"ui-g-12 ui-md-6 ui-lg-4\"&gt;\n        &lt;span&gt;Phone&lt;/span&gt;\n        &lt;p-inputMask mask=\"(999) 999-9999\" [(ngModel)]=\"val4\" placeholder=\"(999) 999-9999\"&gt;&lt;/p-inputMask&gt;\n    &lt;/div&gt;\n    \n    &lt;div class=\"ui-g-12 ui-md-6 ui-lg-4\"&gt;\n        &lt;span&gt;Phone Ext&lt;/span&gt;\n        &lt;p-inputMask mask=\"(999) 999-9999? x99999\" [(ngModel)]=\"val5\" placeholder=\"(999) 999-9999? x99999\"&gt;&lt;/p-inputMask&gt;\n    &lt;/div&gt;\n    \n    &lt;div class=\"ui-g-12 ui-md-6 ui-lg-4\"&gt;\n        &lt;span&gt;Serial Number&lt;/span&gt;\n        &lt;p-inputMask mask=\"a*-999-a999\" [(ngModel)]=\"val6\" placeholder=\"a*-999-a999\"&gt;&lt;/p-inputMask&gt;\n    &lt;/div&gt;\n&lt;/div&gt;\n</code>\n</pre>\n\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport class InputMaskDemo &#123;\n\n    val1: string;\n\n    val2: string;\n\n    val3: string;\n\n    val4: string;\n\n    val5: string;\n    \n    val6: string;\n    \n&#125;\n</code>\n</pre>\n        </p-tabPanel>\n    </p-tabView>\n</div>"

/***/ }),

/***/ "../../../../../src/app/showcase/components/inputmask/inputmaskdemo.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputMaskDemoModule", function() { return InputMaskDemoModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__inputmaskdemo__ = __webpack_require__("../../../../../src/app/showcase/components/inputmask/inputmaskdemo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__inputmaskdemo_routing_module__ = __webpack_require__("../../../../../src/app/showcase/components/inputmask/inputmaskdemo-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__ = __webpack_require__("../../../../primeng/primeng.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_primeng_primeng__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








let InputMaskDemoModule = class InputMaskDemoModule {
};
InputMaskDemoModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_4__inputmaskdemo_routing_module__["a" /* InputMaskDemoRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__["InputMaskModule"],
            __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__["TabViewModule"],
            __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__["CodeHighlighterModule"]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__inputmaskdemo__["a" /* InputMaskDemo */]
        ]
    })
], InputMaskDemoModule);

//# sourceMappingURL=inputmaskdemo.module.js.map

/***/ }),

/***/ "../../../../../src/app/showcase/components/inputmask/inputmaskdemo.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InputMaskDemo; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

let InputMaskDemo = class InputMaskDemo {
};
InputMaskDemo = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__("../../../../../src/app/showcase/components/inputmask/inputmaskdemo.html"),
        styles: [`
        .ui-g-12 > span {
            display: block;
            margin-bottom: 4px;
        }
    `]
    })
], InputMaskDemo);

//# sourceMappingURL=inputmaskdemo.js.map

/***/ })

});
//# sourceMappingURL=inputmaskdemo.module.chunk.js.map