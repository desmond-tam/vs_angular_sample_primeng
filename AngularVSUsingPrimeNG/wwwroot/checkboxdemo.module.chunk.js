webpackJsonp(["checkboxdemo.module"],{

/***/ "../../../../../src/app/showcase/components/checkbox/checkboxdemo-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckboxDemoRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__checkboxdemo__ = __webpack_require__("../../../../../src/app/showcase/components/checkbox/checkboxdemo.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let CheckboxDemoRoutingModule = class CheckboxDemoRoutingModule {
};
CheckboxDemoRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"].forChild([
                { path: '', component: __WEBPACK_IMPORTED_MODULE_2__checkboxdemo__["a" /* CheckboxDemo */] }
            ])
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"]
        ]
    })
], CheckboxDemoRoutingModule);

//# sourceMappingURL=checkboxdemo-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/showcase/components/checkbox/checkboxdemo.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-section introduction\">\n    <div>\n        <span class=\"feature-title\">Checkbox</span>\n        <span>Checkbox is an extension to standard checkbox element with skinning capabilities.</span>\n    </div>\n</div>\n\n<div class=\"content-section implementation\">\n    <h3 class=\"first\">Basic</h3>\n    <div class=\"ui-g\" style=\"width:250px;margin-bottom:10px\">\n        <div class=\"ui-g-12\"><p-checkbox name=\"group1\" value=\"New York\" label=\"New York\" [(ngModel)]=\"selectedCities\" inputId=\"ny\"></p-checkbox></div>\n        <div class=\"ui-g-12\"><p-checkbox name=\"group1\" value=\"San Francisco\" label=\"San Francisco\" [(ngModel)]=\"selectedCities\" inputId=\"sf\"></p-checkbox></div>\n        <div class=\"ui-g-12\"><p-checkbox name=\"group1\" value=\"Los Angeles\" label=\"Los Angeles\" [(ngModel)]=\"selectedCities\" inputId=\"la\"></p-checkbox></div>\n    </div>\n\n    Selected Cities: <span *ngFor=\"let city of selectedCities\" style=\"margin-right:10px\">{{city}}</span>\n\n    <h3>Preselection</h3>\n    <div class=\"ui-g\" style=\"width:250px;margin-bottom:10px\">\n        <div class=\"ui-g-12\"><p-checkbox name=\"group2\" value=\"Technology\" label=\"Technology\" [(ngModel)]=\"selectedCategories\" inputId=\"technology\"></p-checkbox></div>\n        <div class=\"ui-g-12\"><p-checkbox name=\"group2\" value=\"Finance\" label=\"Finance\" [(ngModel)]=\"selectedCategories\" inputId=\"finance\"></p-checkbox></div>\n        <div class=\"ui-g-12\"><p-checkbox name=\"group2\" value=\"Sports\" label=\"Sports\" [(ngModel)]=\"selectedCategories\" inputId=\"sports\"></p-checkbox></div>\n        <div class=\"ui-g-12\"><p-checkbox name=\"group2\" value=\"Entertainment\" label=\"Entertainment\" [(ngModel)]=\"selectedCategories\" inputId=\"entertainment\"></p-checkbox></div>\n    </div>\n\n    Selected Categories: <span *ngFor=\"let cat of selectedCategories\" style=\"margin-right:10px\">{{cat}}</span>\n    \n    <h3>Boolean - {{checked}}</h3>\n    <p-checkbox [(ngModel)]=\"checked\" binary=\"true\"></p-checkbox>\n</div>\n\n<div class=\"content-section documentation\">\n    <p-tabView effect=\"fade\">\n        <p-tabPanel header=\"Documentation\">\n            <h3>Import</h3>\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nimport &#123;CheckboxModule&#125; from 'primeng/primeng';\n</code>\n</pre>\n\n            <h3>Getting Started</h3>\n            <p>Checkbox can either be used in multiple selection with other checkboxes or as a single checkbox to provide a boolean value.</p>\n            \n            <h4>Multiple Values</h4>\n            <p>Multiple mode is enabled by default, ngModel property refers to an array to bind the selected values.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-checkbox name=\"groupname\" value=\"val1\" [(ngModel)]=\"selectedValues\"&gt;&lt;/p-checkbox&gt;\n&lt;p-checkbox name=\"groupname\" value=\"val2\" [(ngModel)]=\"selectedValues\"&gt;&lt;/p-checkbox&gt;\n</code>\n</pre>\n\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport class ModelComponent &#123;\n\n    selectedValues: string[] = [];\n\n&#125;\n</code>\n</pre>\n\n            <p>As ngModel is two-way binding enabled, prepopulating the model array with values is enough to display the related\n            checkboxes as checked by default.</p>\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport class ModelComponent &#123;\n\n    selectedValues: string[] = ['val1','val2'];\n\n&#125;\n</code>\n</pre>\n\n        <h4>Label</h4>\n        <p>The label attribute provides a label text for the checkbox. This label is also clickable and toggles the checked state.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-checkbox name=\"groupname\" value=\"val1\" label=\"Value 1\" [(ngModel)]=\"selectedValues\"&gt;&lt;/p-checkbox&gt;\n&lt;p-checkbox name=\"groupname\" value=\"val2\" label=\"Value 2\" [(ngModel)]=\"selectedValues\"&gt;&lt;/p-checkbox&gt;\n</code>\n</pre>\n\n        <h4>Boolean Value</h4>\n        <p>A single boolean value can be bound using the ngModel property as well by enabling the binary option.</p>\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport class ModelComponent &#123;\n\n    value: boolean;\n\n&#125;\n</code>\n</pre>\n\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-checkbox [(ngModel)]=\"value\" binary=\"true\"&gt;&lt;/p-checkbox&gt;\n</code>\n</pre>\n\n        <h3>Model Driven Forms</h3>\n        <p>Checkbox can be used in a model driven form as well.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-checkbox formControlName=\"agreed\"&gt;&lt;/p-checkbox&gt;\n</code>\n</pre>\n\n            <h3>Properties</h3>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                        <tr>\n                            <th>Name</th>\n                            <th>Type</th>\n                            <th>Default</th>\n                            <th>Description</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>name</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Name of the checkbox group.</td>\n                        </tr>\n                        <tr>\n                            <td>value</td>\n                            <td>any</td>\n                            <td>null</td>\n                            <td>Value of the checkbox.</td>\n                        </tr>\n                        <tr>\n                            <td>label</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Label of the checkbox.</td>\n                        </tr>\n                        <tr>\n                            <td>disabled</td>\n                            <td>boolean</td>\n                            <td>false</td>\n                            <td>When present, it specifies that the element should be disabled.</td>\n                        </tr>\n                        <tr>\n                            <td>binary</td>\n                            <td>boolean</td>\n                            <td>false</td>\n                            <td>Allows to select a boolean value instead of multiple values.</td>\n                        </tr>\n                        <tr>\n                            <td>tabindex</td>\n                            <td>number</td>\n                            <td>null</td>\n                            <td>Index of the element in tabbing order.</td>\n                        </tr>\n                        <tr>\n                            <td>inputId</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Identifier of the focus input to match a label defined for the component.</td>\n                        </tr>\n                        <tr>\n                            <td>style</td>\n                            <td>object</td>\n                            <td>null</td>\n                            <td>Inline style of the component.</td>\n                        </tr>\n                        <tr>\n                            <td>styleClass</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Style class of the component.</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n\n            <h3>Events</h3>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                        <tr>\n                            <th>Name</th>\n                            <th>Parameters</th>\n                            <th>Description</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>onChange</td>\n                            <td>checked: Boolean value to represent new state of checkbox.</td>\n                            <td>Callback to invoke on checkbox click.</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n\n            <h3>Styling</h3>\n            <p>Following is the list of structural style classes, for theming classes visit <a href=\"#\" [routerLink]=\"['/theming']\">theming page</a>.</p>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                        <tr>\n                            <th>Name</th>\n                            <th>Element</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>ui-chkbox</td>\n                            <td>Container element</td>\n                        </tr>\n                        <tr>\n                            <td>ui-chkbox-box</td>\n                            <td>Container of icon.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-chkbox-icon</td>\n                            <td>Icon element.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-chkbox-label</td>\n                            <td>Label element.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-label-active</td>\n                            <td>Label element of a checked state.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-label-focus</td>\n                            <td>Label element of a focused state.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-label-disabled</td>\n                            <td>Label element of a disabled state.</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n\n            <h3>Dependencies</h3>\n            <p>None.</p>\n        </p-tabPanel>\n        <p-tabPanel header=\"Source\">\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/checkbox\" class=\"btn-viewsource\" target=\"_blank\">\n                <i class=\"fa fa-github\"></i>\n                <span>View on GitHub</span>\n            </a>\n            \n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;h3 class=\"first\"&gt;Basic&lt;/h3&gt;\n&lt;div class=\"ui-g\" style=\"width:250px;margin-bottom:10px\"&gt;\n    &lt;div class=\"ui-g-12\"&gt;&lt;p-checkbox name=\"group1\" value=\"New York\" label=\"New York\" [(ngModel)]=\"selectedCities\" inputId=\"ny\"&gt;&lt;/p-checkbox&gt;&lt;/div&gt;\n    &lt;div class=\"ui-g-12\"&gt;&lt;p-checkbox name=\"group1\" value=\"San Francisco\" label=\"San Francisco\" [(ngModel)]=\"selectedCities\" inputId=\"sf\"&gt;&lt;/p-checkbox&gt;&lt;/div&gt;\n    &lt;div class=\"ui-g-12\"&gt;&lt;p-checkbox name=\"group1\" value=\"Los Angeles\" label=\"Los Angeles\" [(ngModel)]=\"selectedCities\" inputId=\"la\"&gt;&lt;/p-checkbox&gt;&lt;/div&gt;\n&lt;/div&gt;\n\nSelected Cities: &lt;span *ngFor=\"let city of selectedCities\" style=\"margin-right:10px\"&gt;{{city}}&lt;/span&gt;\n\n&lt;h3&gt;Preselection&lt;/h3&gt;\n&lt;div class=\"ui-g\" style=\"width:250px;margin-bottom:10px\"&gt;\n    &lt;div class=\"ui-g-12\"&gt;&lt;p-checkbox name=\"group2\" value=\"Technology\" label=\"Technology\" [(ngModel)]=\"selectedCategories\" inputId=\"technology\"&gt;&lt;/p-checkbox&gt;&lt;/div&gt;\n    &lt;div class=\"ui-g-12\"&gt;&lt;p-checkbox name=\"group2\" value=\"Finance\" label=\"Finance\" [(ngModel)]=\"selectedCategories\" inputId=\"finance\"&gt;&lt;/p-checkbox&gt;&lt;/div&gt;\n    &lt;div class=\"ui-g-12\"&gt;&lt;p-checkbox name=\"group2\" value=\"Sports\" label=\"Sports\" [(ngModel)]=\"selectedCategories\" inputId=\"sports\"&gt;&lt;/p-checkbox&gt;&lt;/div&gt;\n    &lt;div class=\"ui-g-12\"&gt;&lt;p-checkbox name=\"group2\" value=\"Entertainment\" label=\"Entertainment\" [(ngModel)]=\"selectedCategories\" inputId=\"entertainment\"&gt;&lt;/p-checkbox&gt;&lt;/div&gt;\n&lt;/div&gt;\n\nSelected Categories: &lt;span *ngFor=\"let cat of selectedCategories\" style=\"margin-right:10px\"&gt;{{cat}} &lt;/span&gt;\n\n&lt;h3&gt;Boolean - {{checked}}&lt;/h3&gt;\n&lt;p-checkbox [(ngModel)]=\"checked\" binary=\"true\"&gt;&lt;/p-checkbox&gt;\n</code>\n</pre>\n\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport class CheckboxDemo &#123;\n\n    selectedCities: string[] = [];\n\n    selectedCategories: string[] = ['Technology', 'Sports'];\n\n    checked: boolean = false;\n&#125;\n</code>\n</pre>\n        </p-tabPanel>\n    </p-tabView>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/showcase/components/checkbox/checkboxdemo.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckboxDemoModule", function() { return CheckboxDemoModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__checkboxdemo__ = __webpack_require__("../../../../../src/app/showcase/components/checkbox/checkboxdemo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__checkboxdemo_routing_module__ = __webpack_require__("../../../../../src/app/showcase/components/checkbox/checkboxdemo-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__ = __webpack_require__("../../../../primeng/primeng.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_primeng_primeng__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








let CheckboxDemoModule = class CheckboxDemoModule {
};
CheckboxDemoModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_4__checkboxdemo_routing_module__["a" /* CheckboxDemoRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__["CheckboxModule"],
            __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__["TabViewModule"],
            __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__["CodeHighlighterModule"]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__checkboxdemo__["a" /* CheckboxDemo */]
        ]
    })
], CheckboxDemoModule);

//# sourceMappingURL=checkboxdemo.module.js.map

/***/ }),

/***/ "../../../../../src/app/showcase/components/checkbox/checkboxdemo.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckboxDemo; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

let CheckboxDemo = class CheckboxDemo {
    constructor() {
        this.selectedCities = [];
        this.selectedCategories = ['Technology', 'Sports'];
        this.checked = false;
    }
};
CheckboxDemo = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__("../../../../../src/app/showcase/components/checkbox/checkboxdemo.html"),
        styles: [`
        .ui-grid .ui-grid-col-1,
        .ui-grid .ui-grid-col-11 {
            padding: 4px 10px;
        }

        .ui-grid label {
            display: block;
            margin: 2px 0 0 4px;
        }
    `]
    })
], CheckboxDemo);

//# sourceMappingURL=checkboxdemo.js.map

/***/ })

});
//# sourceMappingURL=checkboxdemo.module.chunk.js.map