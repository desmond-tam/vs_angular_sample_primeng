webpackJsonp(["inplacedemo.module"],{

/***/ "../../../../../src/app/showcase/components/inplace/inplacedemo-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InplaceDemoRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__inplacedemo__ = __webpack_require__("../../../../../src/app/showcase/components/inplace/inplacedemo.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let InplaceDemoRoutingModule = class InplaceDemoRoutingModule {
};
InplaceDemoRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"].forChild([
                { path: '', component: __WEBPACK_IMPORTED_MODULE_2__inplacedemo__["a" /* InplaceDemo */] }
            ])
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"]
        ]
    })
], InplaceDemoRoutingModule);

//# sourceMappingURL=inplacedemo-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/showcase/components/inplace/inplacedemo.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-section introduction\">\n    <div>\n        <span class=\"feature-title\">Inplace</span>\n        <span>Inplace provides an easy to do editing and display at the same time where clicking the output displays the actual content.</span>\n    </div>\n</div>\n\n<div class=\"content-section implementation\">\n    <h3 class=\"first\">Basic</h3>\n    <p-inplace closable=\"closable\" [style]=\"{'min-height':'30px'}\">\n        <span pInplaceDisplay>\n            Click to Edit\n        </span>\n        <span pInplaceContent>\n            <input type=\"text\" value=\"PrimeNG\" pInputText>\n        </span>\n    </p-inplace>\n    \n    <h3>Image</h3>\n    <p-inplace>\n        <span pInplaceDisplay>\n            <span class=\"fa fa-picture-o\"></span><span style=\"margin-left:8px\">View Picture</span>\n        </span>\n        <span pInplaceContent>\n            <img src=\"assets/showcase/images/demo/galleria/galleria5.jpg\" alt=\"Nature\">\n        </span>\n    </p-inplace>\n    \n    <h3>Data</h3>\n    <p-inplace>\n        <span pInplaceDisplay>\n            <span class=\"fa fa-table\"></span><span style=\"margin-left:8px\">View Data</span>\n        </span>\n        <span pInplaceContent>\n            <p-dataTable [value]=\"cars\">\n                <p-column field=\"vin\" header=\"Vin\"></p-column>\n                <p-column field=\"year\" header=\"Year\"></p-column>\n                <p-column field=\"brand\" header=\"Brand\"></p-column>\n                <p-column field=\"color\" header=\"Color\"></p-column>\n            </p-dataTable>\n        </span>\n    </p-inplace>\n</div>\n\n<div class=\"content-section documentation\">\n    <p-tabView effect=\"fade\">\n        <p-tabPanel header=\"Documentation\">\n            <h3>Import</h3>\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nimport &#123;InplaceModule&#125; from 'primeng/primeng';\n</code>\n</pre>\n\n            <h3>Getting Started</h3>\n            <p>Inplace requires two child components having <i>pInplaceDisplay</i> and <i>pInplaceOutput</i> attributes respectively to define.</p>\n            \n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-inplace&gt;\n    &lt;span pInplaceDisplay&gt;\n        Click to Edit\n    &lt;/span&gt;\n    &lt;span pInplaceContent&gt;\n        &lt;input type=\"text\" value=\"PrimeNG\" pInputText&gt;\n    &lt;/span&gt;\n&lt;/p-inplace&gt;\n</code>\n</pre>\n\n            <h3>Properties</h3>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                        <tr>\n                            <th>Name</th>\n                            <th>Type</th>\n                            <th>Default</th>\n                            <th>Description</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>active</td>\n                            <td>boolean</td>\n                            <td>false</td>\n                            <td>Whether the content is displayed or not.</td>\n                        </tr>\n                        <tr>\n                            <td>disabled</td>\n                            <td>boolean</td>\n                            <td>false</td>\n                            <td>When present, it specifies that the element should be disabled.</td>\n                        </tr>\n                        <tr>\n                            <td>closable</td>\n                            <td>boolean</td>\n                            <td>false</td>\n                            <td>Displays a button to switch back to display mode.</td>\n                        </tr>\n                        <tr>\n                            <td>style</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Inline style of the component.</td>\n                        </tr>\n                        <tr>\n                            <td>styleClass</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Style class of the component.</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n            \n            <h3>Events</h3>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                        <tr>\n                            <th>Name</th>\n                            <th>Parameters</th>\n                            <th>Description</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>onActivate</td>\n                            <td>event.originalEvent: Click event</td>\n                            <td>Activates the content.</td>\n                        </tr>\n                        <tr>\n                            <td>onDeactivate</td>\n                            <td>event.originalEvent: Click event</td>\n                            <td>Deactivates the content.</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n\n            <h3>Styling</h3>\n            <p>Following is the list of structural style classes, for theming classes visit <a href=\"#\" [routerLink]=\"['/theming']\">theming page</a>.</p>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                        <tr>\n                            <th>Name</th>\n                            <th>Element</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>ui-inplace</td>\n                            <td>Container element</td>\n                        </tr>\n                        <tr>\n                            <td>ui-inplace-display</td>\n                            <td>Display container</td>\n                        </tr>\n                        <tr>\n                            <td>ui-inplace-content</td>\n                            <td>Content container</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n\n            <h3>Dependencies</h3>\n            <p>None.</p>\n        </p-tabPanel>\n        \n        <p-tabPanel header=\"Source\">\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/inplace\" class=\"btn-viewsource\" target=\"_blank\">\n                <i class=\"fa fa-github\"></i>\n                <span>View on GitHub</span>\n            </a>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;h3 class=\"first\"&gt;Basic&lt;/h3&gt;\n&lt;p-inplace closable=\"closable\"&gt;\n    &lt;span pInplaceDisplay&gt;\n        Click to Edit\n    &lt;/span&gt;\n    &lt;span pInplaceContent&gt;\n        &lt;input type=\"text\" value=\"PrimeNG\" pInputText&gt;\n    &lt;/span&gt;\n&lt;/p-inplace&gt;\n\n&lt;h3&gt;Image&lt;/h3&gt;\n&lt;p-inplace&gt;\n    &lt;span pInplaceDisplay&gt;\n        &lt;span class=\"fa fa-picture-o\"&gt;&lt;/span&gt;&lt;span style=\"margin-left:8px\"&gt;View Picture&lt;/span&gt;\n    &lt;/span&gt;\n    &lt;span pInplaceContent&gt;\n        &lt;img src=\"assets/showcase/images/demo/galleria/galleria5.jpg\" alt=\"Nature\"&gt;\n    &lt;/span&gt;\n&lt;/p-inplace&gt;\n\n&lt;h3&gt;Data&lt;/h3&gt;\n&lt;p-inplace&gt;\n    &lt;span pInplaceDisplay&gt;\n        &lt;span class=\"fa fa-table\"&gt;&lt;/span&gt;&lt;span style=\"margin-left:8px\"&gt;View Data&lt;/span&gt;\n    &lt;/span&gt;\n    &lt;span pInplaceContent&gt;\n        &lt;p-dataTable [value]=\"cars\"&gt;\n            &lt;p-column field=\"vin\" header=\"Vin\"&gt;&lt;/p-column&gt;\n            &lt;p-column field=\"year\" header=\"Year\"&gt;&lt;/p-column&gt;\n            &lt;p-column field=\"brand\" header=\"Brand\"&gt;&lt;/p-column&gt;\n            &lt;p-column field=\"color\" header=\"Color\"&gt;&lt;/p-column&gt;\n        &lt;/p-dataTable&gt;\n    &lt;/span&gt;\n&lt;/p-inplace&gt;\n</code>\n</pre>\n        </p-tabPanel>\n    </p-tabView>\n</div>"

/***/ }),

/***/ "../../../../../src/app/showcase/components/inplace/inplacedemo.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InplaceDemoModule", function() { return InplaceDemoModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__inplacedemo__ = __webpack_require__("../../../../../src/app/showcase/components/inplace/inplacedemo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__inplacedemo_routing_module__ = __webpack_require__("../../../../../src/app/showcase/components/inplace/inplacedemo-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__ = __webpack_require__("../../../../primeng/primeng.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_primeng_primeng__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









let InplaceDemoModule = class InplaceDemoModule {
};
InplaceDemoModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_3__inplacedemo_routing_module__["a" /* InplaceDemoRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__["InplaceModule"],
            __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__["InputTextModule"],
            __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__["DataTableModule"],
            __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__["TabViewModule"],
            __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__["CodeHighlighterModule"]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__inplacedemo__["a" /* InplaceDemo */]
        ]
    })
], InplaceDemoModule);

//# sourceMappingURL=inplacedemo.module.js.map

/***/ }),

/***/ "../../../../../src/app/showcase/components/inplace/inplacedemo.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InplaceDemo; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_carservice__ = __webpack_require__("../../../../../src/app/showcase/service/carservice.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


let InplaceDemo = class InplaceDemo {
    constructor(carService) {
        this.carService = carService;
    }
    ngOnInit() {
        this.carService.getCarsSmall().then(cars => this.cars = cars);
    }
};
InplaceDemo = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__("../../../../../src/app/showcase/components/inplace/inplacedemo.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service_carservice__["a" /* CarService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__service_carservice__["a" /* CarService */]) === "function" && _a || Object])
], InplaceDemo);

var _a;
//# sourceMappingURL=inplacedemo.js.map

/***/ })

});
//# sourceMappingURL=inplacedemo.module.chunk.js.map