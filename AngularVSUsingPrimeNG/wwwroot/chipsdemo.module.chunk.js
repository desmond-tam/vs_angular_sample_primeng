webpackJsonp(["chipsdemo.module"],{

/***/ "../../../../../src/app/showcase/components/chips/chipsdemo-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChipsDemoRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__chipsdemo__ = __webpack_require__("../../../../../src/app/showcase/components/chips/chipsdemo.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let ChipsDemoRoutingModule = class ChipsDemoRoutingModule {
};
ChipsDemoRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"].forChild([
                { path: '', component: __WEBPACK_IMPORTED_MODULE_2__chipsdemo__["a" /* ChipsDemo */] }
            ])
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"]
        ]
    })
], ChipsDemoRoutingModule);

//# sourceMappingURL=chipsdemo-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/showcase/components/chips/chipsdemo.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-section introduction\">\n    <div>\n        <span class=\"feature-title\">Chips</span>\n        <span>Chips is used to enter multiple values on an inputfield.</span>\n    </div>\n</div>\n\n<div class=\"content-section implementation\">\n    <h3 class=\"first\">Basic</h3>\n    <p-chips [(ngModel)]=\"values1\"></p-chips>\n    \n    <h3>Template</h3>\n    <p-chips [(ngModel)]=\"values2\">\n        <ng-template let-item pTemplate=\"item\">\n            {{item}} - (active) <i class=\"fa fa-user\" style=\"margin-right:2em\"></i>\n        </ng-template>\n    </p-chips>\n</div>\n\n<div class=\"content-section documentation\">\n    <p-tabView effect=\"fade\">\n        <p-tabPanel header=\"Documentation\">\n            <h3>Import</h3>\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nimport &#123;ChipsModule&#125; from 'primeng/primeng';\n</code>\n</pre>\n\n            <h3>Getting Started</h3>\n            <p>Chips requires an array as its model.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-chips [(ngModel)]=\"values\"&gt;&lt;/p-chips&gt;\n</code>\n</pre>\n\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport class MyModel &#123;\n\n    values: string[];\n\n&#125;\n</code>\n</pre>\n            <h3>Model Driven Forms</h3>\n            <p>Chips can be used in a model driven form as well.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-chips formControlName=\"cities\"&gt;&lt;/p-chips&gt;\n</code>\n</pre>\n\n            <h3>Custom Content</h3>\n            <p>A chip is customized using a ng-template element where the value is passed as the implicit variable.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-chips [(ngModel)]=\"values\"&gt;\n    &lt;ng-template let-item pTemplate=\"item\"&gt;\n        &#123;&#123;item&#125;&#125; - (active) &lt;i class=\"fa fa-user\"&gt;&lt;/i&gt;\n    &lt;/ng-template&gt;\n&lt;/p-chips&gt;\n</code>\n</pre>\n            <h3>Properties</h3>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                    <tr>\n                        <th>Name</th>\n                        <th>Type</th>\n                        <th>Default</th>\n                        <th>Description</th>\n                    </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>field</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Name of the property to display on a chip.</td>\n                        </tr>\n                        <tr>\n                            <td>max</td>\n                            <td>number</td>\n                            <td>null</td>\n                            <td>Maximum number of entries allowed.</td>\n                        </tr>\n                        <tr>\n                            <td>disabled</td>\n                            <td>boolean</td>\n                            <td>false</td>\n                            <td>When present, it specifies that the element should be disabled.</td>\n                        </tr>\n                        <tr>\n                            <td>style</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Inline style of the element.</td>\n                        </tr>\n                        <tr>\n                            <td>styleClass</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Style class of the element.</td>\n                        </tr>\n                        <tr>\n                            <td>placeholder</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Advisory information to display on input.</td>\n                        </tr>\n                        <tr>\n                            <td>tabindex</td>\n                            <td>number</td>\n                            <td>null</td>\n                            <td>Index of the element in tabbing order.</td>\n                        </tr>\n                        <tr>\n                            <td>inputId</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Identifier of the focus input to match a label defined for the component.</td>\n                        </tr>\n                        <tr>\n                            <td>allowDuplicate</td>\n                            <td>boolean</td>\n                            <td>true</td>\n                            <td>Whether to allow duplicate values or not.</td>\n                        </tr>\n                        <tr>\n                            <td>inputStyle</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Inline style of the input field.</td>\n                        </tr>\n                        <tr>\n                            <td>inputStyleClass</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Style class of the input field.</td>\n                        </tr>\n                        <tr>\n                            <td>addOnTab</td>\n                            <td>boolean</td>\n                            <td>false</td>\n                            <td>Whether to add an item on tab key press.</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n\n            <h3>Events</h3>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                    <tr>\n                        <th>Name</th>\n                        <th>Parameters</th>\n                        <th>Description</th>\n                    </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>onAdd</td>\n                            <td>originalEvent: Browser event <br >\n                                value: Added item value\n                            </td>\n                            <td>Callback to invoke when a value is added.</td>\n                        </tr>\n                        <tr>\n                            <td>onRemove</td>\n                            <td>originalEvent: Browser event <br >\n                                value: Added item value\n                            </td>\n                            <td>Callback to invoke when a value is removed.</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n\n            <h3>Styling</h3>\n            <p>Following is the list of structural style classes, for theming classes visit <a href=\"#\" [routerLink]=\"['/theming']\">theming page</a>.</p>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                        <tr>\n                            <th>Name</th>\n                            <th>Element</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>ui-chips</td>\n                            <td>Container element.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-chips-token</td>\n                            <td>Chip element container.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-chips-token-icon</td>\n                            <td>Icon of a chip.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-chips-token-label</td>\n                            <td>Label of a chip.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-chips-input-token</td>\n                            <td>Container of input element.</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n\n            <h3>Dependencies</h3>\n            <p>None.</p>\n        </p-tabPanel>\n\n        <p-tabPanel header=\"Source\">\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/chips\" class=\"btn-viewsource\" target=\"_blank\">\n                <i class=\"fa fa-github\"></i>\n                <span>View on GitHub</span>\n            </a>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;h3 class=\"first\"&gt;Basic&lt;/h3&gt;\n&lt;p-chips [(ngModel)]=\"values1\" &gt;&lt;/p-chips&gt;\n\n&lt;h3&gt;ng-template&lt;/h3&gt;\n&lt;p-chips [(ngModel)]=\"values2\"&gt;\n    &lt;ng-template let-item pTemplate=\"item\"&gt;\n        &#123;&#123;item&#125;&#125; - (active) &lt;i class=\"fa fa-user\" style=\"margin-right:2em\"&gt;&lt;/i&gt;\n    &lt;/ng-template&gt;\n&lt;/p-chips&gt;\n</code>\n</pre>\n\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport class ChipsDemo &#123;\n\n    values1: string[];\n    \n    values2: string[];\n&#125;\n</code>\n</pre>\n        </p-tabPanel>\n    </p-tabView>\n</div>"

/***/ }),

/***/ "../../../../../src/app/showcase/components/chips/chipsdemo.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChipsDemoModule", function() { return ChipsDemoModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__chipsdemo__ = __webpack_require__("../../../../../src/app/showcase/components/chips/chipsdemo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__chipsdemo_routing_module__ = __webpack_require__("../../../../../src/app/showcase/components/chips/chipsdemo-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__ = __webpack_require__("../../../../primeng/primeng.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_primeng_primeng__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









let ChipsDemoModule = class ChipsDemoModule {
};
ChipsDemoModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_4__chipsdemo_routing_module__["a" /* ChipsDemoRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__["ChipsModule"],
            __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__["ButtonModule"],
            __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__["TabViewModule"],
            __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__["CodeHighlighterModule"]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__chipsdemo__["a" /* ChipsDemo */]
        ]
    })
], ChipsDemoModule);

//# sourceMappingURL=chipsdemo.module.js.map

/***/ }),

/***/ "../../../../../src/app/showcase/components/chips/chipsdemo.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChipsDemo; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

let ChipsDemo = class ChipsDemo {
};
ChipsDemo = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__("../../../../../src/app/showcase/components/chips/chipsdemo.html")
    })
], ChipsDemo);

//# sourceMappingURL=chipsdemo.js.map

/***/ })

});
//# sourceMappingURL=chipsdemo.module.chunk.js.map