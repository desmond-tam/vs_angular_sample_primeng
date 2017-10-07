webpackJsonp(["inputswitchdemo.module"],{

/***/ "../../../../../src/app/showcase/components/inputswitch/inputswitch.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-section introduction\">\n    <div>\n        <span class=\"feature-title\">InputSwitch</span>\n        <span>InputSwitch is used to select a boolean value.</span>\n    </div>\n</div>\n\n<div class=\"content-section implementation\">\n    <h3 class=\"first\">Basic - {{checked1}}</h3>\n    <p-inputSwitch [(ngModel)]=\"checked1\"></p-inputSwitch>\n\n    <h3>Labels - {{checked2}}</h3>\n    <p-inputSwitch onLabel=\"Yes\" offLabel=\"No\" [(ngModel)]=\"checked2\"></p-inputSwitch>\n</div>\n\n<div class=\"content-section documentation\">\n    <p-tabView effect=\"fade\">\n        <p-tabPanel header=\"Documentation\">\n            <h3>Import</h3>\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nimport &#123;InputSwitchModule&#125; from 'primeng/primeng';\n</code>\n</pre>\n\n            <h3>Getting Started</h3>\n            <p>Two-way binding to a boolean property is defined using the standard ngModel directive.</p>\n\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-inputSwitch [(ngModel)]=\"checked\"&gt;&lt;/p-inputSwitch&gt;\n</code>\n</pre>\n\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport class ModelComponent &#123;\n\n    checked: boolean;\n\n&#125;\n</code>\n</pre>\n\n            <p>As model is two-way binding enabled, setting the bound value as true displays the state as checked by default.</p>\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport class ModelComponent &#123;\n\n   checked: boolean = true;\n\n&#125;\n</code>\n</pre>\n\n            <h3>Model Driven Forms</h3>\n            <p>InputSwitch can be used in a model driven form as well.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-inputSwitch formControlName=\"enabled\"&gt;&lt;/p-inputSwitch&gt;\n</code>\n</pre>\n\n            <h3>Customization</h3>\n            <p>Labels can be customized using onLabel and offLabel properties.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-inputSwitch onLabel=\"I confirm\" offLabel=\"I reject\" [(ngModel)]=\"val\"&gt;&lt;/p-inputSwitch&gt;\n</code>\n</pre>\n\n            <h3>Properties</h3>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                        <tr>\n                            <th>Name</th>\n                            <th>Type</th>\n                            <th>Default</th>\n                            <th>Description</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>onLabel</td>\n                            <td>string</td>\n                            <td>On</td>\n                            <td>Label for the on state.</td>\n                        </tr>\n                        <tr>\n                            <td>offLabel</td>\n                            <td>string</td>\n                            <td>Off</td>\n                            <td>Label for the off state.</td>\n                        </tr>\n                        <tr>\n                            <td>style</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Inline style of the component.</td>\n                        </tr>\n                        <tr>\n                            <td>styleClass</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Style class of the component.</td>\n                        </tr>\n                        <tr>\n                          <td>tabindex</td>\n                          <td>number</td>\n                          <td>null</td>\n                          <td>Index of the element in tabbing order.</td>\n                        </tr>\n                        <tr>\n                            <td>inputId</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Identifier of the focus input to match a label defined for the component.</td>\n                        </tr>\n                        <tr>\n                            <td>ariaLabelTemplate</td>\n                            <td>string</td>\n                            <td>InputSwitch &#123;0&#125;</td>\n                            <td>The aria-label template is used to define a string that labels the current element with a template.</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n\n            <h3>Events</h3>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                    <tr>\n                        <th>Name</th>\n                        <th>Parameters</th>\n                        <th>Description</th>\n                    </tr>\n                    </thead>\n                    <tbody>\n                    <tr>\n                        <td>onChange</td>\n                        <td>event.originalEvent: browser event<br>\n                            event.checked: checked state as a boolean</td>\n                        <td>Callback to invoke on state change.</td>\n                    </tr>\n                    </tbody>\n                </table>\n            </div>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-inputSwitch (onChange)=\"handleChange($event)\" [(ngModel)]=\"val\"&gt;\n</code>\n</pre>\n <pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport class ModelComponent &#123;\n\n    handleChange(e) &#123;\n        var isChecked = e.checked;\n    &#125;\n&#125;\n</code>\n</pre>\n\n            <h3>Styling</h3>\n            <p>Following is the list of structural style classes, for theming classes visit <a href=\"#\" [routerLink]=\"['/theming']\">theming page</a>.</p>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                        <tr>\n                            <th>Name</th>\n                            <th>Element</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>ui-inputswitch</td>\n                            <td>Container element</td>\n                        </tr>\n                        <tr>\n                            <td>ui-inputswitch-on</td>\n                            <td>Checked state element.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-inputswitch-off</td>\n                            <td>Unchecked state element.</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n\n            <h3>Dependencies</h3>\n            <p>None.</p>\n        </p-tabPanel>\n\n        <p-tabPanel header=\"Source\">\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/inputswitch\" class=\"btn-viewsource\" target=\"_blank\">\n                <i class=\"fa fa-github\"></i>\n                <span>View on GitHub</span>\n            </a>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;h3 class=\"first\"&gt;Basic - {{checked1}}&lt;/h3&gt;\n&lt;p-inputSwitch [(ngModel)]=\"checked1\"&gt;&lt;/p-inputSwitch&gt;\n\n&lt;h3&gt;Labels - &lt;span&gt; {{checked2}}&lt;/h3&gt;\n&lt;p-inputSwitch onLabel=\"Yes\" offLabel=\"No\" [(ngModel)]=\"checked2\"&gt;&lt;/p-inputSwitch&gt;\n</code>\n</pre>\n\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport class InputSwitchDemo &#123;\n\n    checked1: boolean = false;\n\n    checked2: boolean = true;\n&#125;\n</code>\n</pre>\n        </p-tabPanel>\n    </p-tabView>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/showcase/components/inputswitch/inputswitchdemo-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InputSwitchDemoRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__inputswitchdemo__ = __webpack_require__("../../../../../src/app/showcase/components/inputswitch/inputswitchdemo.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let InputSwitchDemoRoutingModule = class InputSwitchDemoRoutingModule {
};
InputSwitchDemoRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"].forChild([
                { path: '', component: __WEBPACK_IMPORTED_MODULE_2__inputswitchdemo__["a" /* InputSwitchDemo */] }
            ])
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"]
        ]
    })
], InputSwitchDemoRoutingModule);

//# sourceMappingURL=inputswitchdemo-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/showcase/components/inputswitch/inputswitchdemo.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputSwitchDemoModule", function() { return InputSwitchDemoModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__inputswitchdemo__ = __webpack_require__("../../../../../src/app/showcase/components/inputswitch/inputswitchdemo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__inputswitchdemo_routing_module__ = __webpack_require__("../../../../../src/app/showcase/components/inputswitch/inputswitchdemo-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__ = __webpack_require__("../../../../primeng/primeng.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_primeng_primeng__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








let InputSwitchDemoModule = class InputSwitchDemoModule {
};
InputSwitchDemoModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_4__inputswitchdemo_routing_module__["a" /* InputSwitchDemoRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__["InputSwitchModule"],
            __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__["TabViewModule"],
            __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__["CodeHighlighterModule"]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__inputswitchdemo__["a" /* InputSwitchDemo */]
        ]
    })
], InputSwitchDemoModule);

//# sourceMappingURL=inputswitchdemo.module.js.map

/***/ }),

/***/ "../../../../../src/app/showcase/components/inputswitch/inputswitchdemo.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InputSwitchDemo; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

let InputSwitchDemo = class InputSwitchDemo {
    constructor() {
        this.checked1 = false;
        this.checked2 = true;
    }
};
InputSwitchDemo = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__("../../../../../src/app/showcase/components/inputswitch/inputswitch.html")
    })
], InputSwitchDemo);

//# sourceMappingURL=inputswitchdemo.js.map

/***/ })

});
//# sourceMappingURL=inputswitchdemo.module.chunk.js.map