webpackJsonp(["selectbuttondemo.module"],{

/***/ "../../../../../src/app/showcase/components/selectbutton/selectbuttondemo-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectButtonDemoRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__selectbuttondemo__ = __webpack_require__("../../../../../src/app/showcase/components/selectbutton/selectbuttondemo.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let SelectButtonDemoRoutingModule = class SelectButtonDemoRoutingModule {
};
SelectButtonDemoRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"].forChild([
                { path: '', component: __WEBPACK_IMPORTED_MODULE_2__selectbuttondemo__["a" /* SelectButtonDemo */] }
            ])
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"]
        ]
    })
], SelectButtonDemoRoutingModule);

//# sourceMappingURL=selectbuttondemo-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/showcase/components/selectbutton/selectbuttondemo.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-section introduction\">\n    <div>\n        <span class=\"feature-title\">SelectButton</span>\n        <span>SelectButton is used to choose single or multiple items from a list using buttons.</span>\n    </div>\n</div>\n\n<div class=\"content-section implementation\">\n    <h3 class=\"first\">Single</h3>\n    <p-selectButton [options]=\"types\" [(ngModel)]=\"selectedType\"></p-selectButton>\n\n    <p>Selected Type: {{selectedType}}</p>\n\n    <h3>Multiple</h3>\n    <p-selectButton [options]=\"types\" [(ngModel)]=\"selectedTypes\" multiple=\"multiple\"></p-selectButton>\n    <p>Selected Types: <span *ngFor=\"let type of selectedTypes\">{{type}} </span></p>\n\n    <hr />\n\n    <button type=\"button\" (click)=\"clear()\" pButton icon=\"fa-close\" label=\"Clear\"></button>\n</div>\n\n<div class=\"content-section documentation\">\n    <p-tabView effect=\"fade\">\n        <p-tabPanel header=\"Documentation\">\n            <h3>Import</h3>\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nimport &#123;SelectButtonModule&#125; from 'primeng/primeng';\n</code>\n</pre>\n\n            <h3>Getting Started</h3>\n            <p>Two-way value binding is defined using ngModel and selectbutton requires a collection of options \n                where each option should follow the SelectItem interface that defines label-value properties.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-selectButton [options]=\"cities\" [(ngModel)]=\"selectedCity\"&gt;&lt;/p-selectButton&gt;\n</code>\n</pre>\n\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nimport &#123;SelectItem&#125; from 'primeng/primeng';\n\nexport class MyModel &#123;\n\n    cities: SelectItem[];\n\n    selectedCity: string;\n\n    constructor() &#123;\n        this.cities = [];\n        this.cities.push(&#123;label:'New York', value:'New York'&#125;);\n        this.cities.push(&#123;label:'Rome', value:'Rome'&#125;);\n        this.cities.push(&#123;label:'London', value:'London'&#125;);\n        this.cities.push(&#123;label:'Istanbul', value:'Istanbul'&#125;);\n        this.cities.push(&#123;label:'Paris', value:'Paris'&#125;);\n    &#125;\n\n&#125;\n</code>\n</pre>\n\n            <h3>Multiple</h3>\n            <p>SelectButton allows selecting only one item by default and setting multiple option enables choosing more than one item. \n                In multiple case, model property should be an array instance that is not null or undefined.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-selectButton [options]=\"cities\" [(ngModel)]=\"selectedCities\"&gt;&lt;/p-selectButton&gt;\n</code>\n</pre>\n\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nimport &#123;SelectItem&#125; from 'primeng/primeng';\n\nexport class MyModel &#123;\n\n    cities: SelectItem[];\n\n    selectedCities: string[] = [];\n\n    constructor() &#123;\n        this.cities = [];\n        this.cities.push(&#123;label:'New York', value:'New York'&#125;);\n        this.cities.push(&#123;label:'Rome', value:'Rome'&#125;);\n        this.cities.push(&#123;label:'London', value:'London'&#125;);\n        this.cities.push(&#123;label:'Istanbul', value:'Istanbul'&#125;);\n        this.cities.push(&#123;label:'Paris', value:'Paris'&#125;);\n    &#125;\n\n&#125;\n</code>\n</pre>\n\n            <h3>Model Driven Forms</h3>\n            <p>SelectButton can be used in a model driven form as well.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-selectButton [options]=\"cities\" formControlName=\"selectedCity\"&gt;&lt;/p-selectButton&gt;\n</code>\n</pre>\n\n            <h3>Properties</h3>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                    <tr>\n                        <th>Name</th>\n                        <th>Type</th>\n                        <th>Default</th>\n                        <th>Description</th>\n                    </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>options</td>\n                            <td>array</td>\n                            <td>null</td>\n                            <td>An array of selectitems to display as the available options.</td>\n                        </tr>\n                        <tr>\n                            <td>multiple</td>\n                            <td>boolean</td>\n                            <td>false</td>\n                            <td>When specified, allows selecting multiple values.</td>\n                        </tr>\n                        <tr>\n                            <td>tabindex</td>\n                            <td>number</td>\n                            <td>null</td>\n                            <td>Index of the element in tabbing order.</td>\n                        </tr>\n                        <tr>\n                            <td>style</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Inline style of the component.</td>\n                        </tr>\n                        <tr>\n                            <td>styleClass</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Style class of the component.</td>\n                        </tr>\n                        <tr>\n                            <td>disabled</td>\n                            <td>boolean</td>\n                            <td>false</td>\n                            <td>When present, it specifies that the element should be disabled.</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n\n            <h3>Events</h3>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                    <tr>\n                        <th>Name</th>\n                        <th>Parameters</th>\n                        <th>Description</th>\n                    </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>onChange</td>\n                            <td>event.originalEvent: browser event<br />\n                                event.value: single value or an array of values that are selected\n                            </td>\n                            <td>Callback to invoke when value changes.</td>\n                        </tr>\n                        <tr>\n                            <td>onOptionClick</td>\n                            <td>event.originalEvent: browser event<br />\n                                event.option: SelectItem instance of the clicked button<br />\n                                event.index: Index of the clicked button\n                            </td>\n                            <td>Callback to invoke when a button is clicked.</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n\n            <h3>Dependencies</h3>\n            <p>None.</p>\n        </p-tabPanel>\n\n        <p-tabPanel header=\"Source\">\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/selectbutton\" class=\"btn-viewsource\" target=\"_blank\">\n                <i class=\"fa fa-github\"></i>\n                <span>View on GitHub</span>\n            </a>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;h3 class=\"first\"&gt;Single&lt;/h3&gt;\n&lt;p-selectButton [options]=\"types\" [(ngModel)]=\"selectedType\"&gt;&lt;/p-selectButton&gt;\n\n&lt;p&gt;Selected Type: {{selectedType}}&lt;/p&gt;\n\n&lt;h3&gt;Multiple&lt;/h3&gt;\n&lt;p-selectButton [options]=\"types\" [(ngModel)]=\"selectedTypes\" multiple=\"multiple\"&gt;&lt;/p-selectButton&gt;\n&lt;p&gt;Selected Types: &lt;span *ngFor=\"let type of selectedTypes\"&gt;{{type}} &lt;/span&gt;&lt;/p&gt;\n\n&lt;hr /&gt;\n\n&lt;button type=\"button\" (click)=\"clear()\" pButton icon=\"fa-close\" label=\"Clear\"&gt;&lt;/button&gt;\n</code>\n</pre>\n\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport class SelectButtonDemo &#123;\n\n    types: SelectItem[];\n\n    selectedType: string;\n\n    selectedTypes: string[] = ['Apartment','Studio'];\n\n    constructor() &#123;\n        this.types = [];\n        this.types.push(&#123;label: 'Apartment', value: 'Apartment'&#125;);\n        this.types.push(&#123;label: 'House', value: 'House'&#125;);\n        this.types.push(&#123;label: 'Studio', value: 'Studio'&#125;);\n    &#125;\n\n    clear() &#123;\n        this.selectedType = null;\n        this.selectedTypes = [];\n    &#125;\n&#125;\n</code>\n</pre>\n        </p-tabPanel>\n    </p-tabView>\n</div>"

/***/ }),

/***/ "../../../../../src/app/showcase/components/selectbutton/selectbuttondemo.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectButtonDemoModule", function() { return SelectButtonDemoModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__selectbuttondemo__ = __webpack_require__("../../../../../src/app/showcase/components/selectbutton/selectbuttondemo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__selectbuttondemo_routing_module__ = __webpack_require__("../../../../../src/app/showcase/components/selectbutton/selectbuttondemo-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__ = __webpack_require__("../../../../primeng/primeng.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_primeng_primeng__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






let SelectButtonDemoModule = class SelectButtonDemoModule {
};
SelectButtonDemoModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_4__selectbuttondemo_routing_module__["a" /* SelectButtonDemoRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__["SelectButtonModule"],
            __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__["ButtonModule"],
            __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__["TabViewModule"],
            __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__["CodeHighlighterModule"]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__selectbuttondemo__["a" /* SelectButtonDemo */]
        ]
    })
], SelectButtonDemoModule);

//# sourceMappingURL=selectbuttondemo.module.js.map

/***/ }),

/***/ "../../../../../src/app/showcase/components/selectbutton/selectbuttondemo.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectButtonDemo; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

let SelectButtonDemo = class SelectButtonDemo {
    constructor() {
        this.selectedTypes = ['Apartment', 'Studio'];
        this.types = [];
        this.types.push({ label: 'Apartment', value: 'Apartment' });
        this.types.push({ label: 'House', value: 'House' });
        this.types.push({ label: 'Studio', value: 'Studio' });
    }
    clear() {
        this.selectedType = null;
        this.selectedTypes = [];
    }
};
SelectButtonDemo = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__("../../../../../src/app/showcase/components/selectbutton/selectbuttondemo.html")
    }),
    __metadata("design:paramtypes", [])
], SelectButtonDemo);

//# sourceMappingURL=selectbuttondemo.js.map

/***/ })

});
//# sourceMappingURL=selectbuttondemo.module.chunk.js.map