webpackJsonp(["breadcrumbdemo.module"],{

/***/ "../../../../../src/app/showcase/components/breadcrumb/breadcrumbdemo-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BreadcrumbDemoRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__breadcrumbdemo__ = __webpack_require__("../../../../../src/app/showcase/components/breadcrumb/breadcrumbdemo.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let BreadcrumbDemoRoutingModule = class BreadcrumbDemoRoutingModule {
};
BreadcrumbDemoRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"].forChild([
                { path: '', component: __WEBPACK_IMPORTED_MODULE_2__breadcrumbdemo__["a" /* BreadcrumbDemo */] }
            ])
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"]
        ]
    })
], BreadcrumbDemoRoutingModule);

//# sourceMappingURL=breadcrumbdemo-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/showcase/components/breadcrumb/breadcrumbdemo.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-section introduction\">\n    <div>\n        <span class=\"feature-title\">Breadcrumb</span>\n        <span>Breadcrumb provides contextual information about page hierarchy.</span>\n    </div>\n</div>\n\n<div class=\"content-section implementation\">\n    <p-breadcrumb [model]=\"items\"></p-breadcrumb>\n</div>\n\n<div class=\"content-section documentation\">\n    <p-tabView effect=\"fade\">\n        <p-tabPanel header=\"Documentation\">\n            <h3>Import</h3>\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nimport &#123;BreadcrumbModule,MenuItem&#125; from 'primeng/primeng';\n</code>\n</pre>\n\n            <h3>MenuModel API</h3>\n            <p>Breadcrumb uses the common menumodel api to define its items, visit <a [routerLink]=\"['/menumodel']\">MenuModel API</a> for details.</p>\n\n            <h3>Getting Started</h3>\n            <p>Breadcrumb requires a collection of menuitems connected to its model property.</p>\n            \n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport class BreadcrumbDemo implements OnInit &#123;\n\n    private items: MenuItem[];\n    \n    ngOnInit() &#123;\n        this.items = [];\n        this.items.push(&#123;label:'Categories'&#125;);\n        this.items.push(&#123;label:'Sports'&#125;);\n        this.items.push(&#123;label:'Football'&#125;);\n        this.items.push(&#123;label:'Countries'&#125;);\n        this.items.push(&#123;label:'Spain'&#125;);\n        this.items.push(&#123;label:'F.C. Barcelona'&#125;);\n        this.items.push(&#123;label:'Squad'&#125;);\n        this.items.push(&#123;label:'Lionel Messi', url: 'https://en.wikipedia.org/wiki/Lionel_Messi'&#125;);\n    &#125;\n&#125;\n</code>\n</pre>\n\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-breadcrumb [model]=\"items\"&gt;&lt;/p-breadcrumb&gt;\n</code>\n</pre>\n\n            <h3>Properties</h3>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                        <tr>\n                            <th>Name</th>\n                            <th>Type</th>\n                            <th>Default</th>\n                            <th>Description</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>model</td>\n                            <td>array</td>\n                            <td>null</td>\n                            <td>An array of menuitems.</td>\n                        </tr>\n                        <tr>\n                            <td>home</td>\n                            <td>MenuItem</td>\n                            <td>null</td>\n                            <td>MenuItem configuration for the home icon.</td>\n                        </tr>\n                        <tr>\n                            <td>style</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Inline style of the component.</td>\n                        </tr>\n                        <tr>\n                            <td>styleClass</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Style class of the component.</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n\n            <h3>Styling</h3>\n            <p>Following is the list of structural style classes, for theming classes visit <a href=\"#\" [routerLink]=\"['/theming']\">theming page</a>.</p>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                        <tr>\n                            <th>Name</th>\n                            <th>Element</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>ui-breadcrumb</td>\n                            <td>Container element.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-menuitem</td>\n                            <td>Menuitem element.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-menuitem-text</td>\n                            <td>Label of a menuitem.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-breadcrumb-chevron</td>\n                            <td>Chevron element.</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n\n            <h3>Dependencies</h3>\n            <p>None.</p>\n        </p-tabPanel>\n\n        <p-tabPanel header=\"Source\">\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/breadcrumb\" class=\"btn-viewsource\" target=\"_blank\">\n                <i class=\"fa fa-github\"></i>\n                <span>View on GitHub</span>\n            </a>\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport class BreadcrumbDemo implements OnInit &#123;\n\n    items: MenuItem[];\n    \n    ngOnInit() &#123;\n        this.items = [];\n        this.items.push(&#123;label:'Categories'&#125;);\n        this.items.push(&#123;label:'Sports'&#125;);\n        this.items.push(&#123;label:'Football'&#125;);\n        this.items.push(&#123;label:'Countries'&#125;);\n        this.items.push(&#123;label:'Spain'&#125;);\n        this.items.push(&#123;label:'F.C. Barcelona'&#125;);\n        this.items.push(&#123;label:'Squad'&#125;);\n        this.items.push(&#123;label:'Lionel Messi', url: 'https://en.wikipedia.org/wiki/Lionel_Messi'&#125;);\n    &#125;\n&#125;\n</code>\n</pre>\n\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-breadcrumb [model]=\"items\"&gt;&lt;/p-breadcrumb&gt;\n</code>\n</pre>\n        </p-tabPanel>\n    </p-tabView>\n</div>"

/***/ }),

/***/ "../../../../../src/app/showcase/components/breadcrumb/breadcrumbdemo.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BreadcrumbDemoModule", function() { return BreadcrumbDemoModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__breadcrumbdemo__ = __webpack_require__("../../../../../src/app/showcase/components/breadcrumb/breadcrumbdemo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__breadcrumbdemo_routing_module__ = __webpack_require__("../../../../../src/app/showcase/components/breadcrumb/breadcrumbdemo-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__ = __webpack_require__("../../../../primeng/primeng.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_primeng_primeng__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







let BreadcrumbDemoModule = class BreadcrumbDemoModule {
};
BreadcrumbDemoModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_3__breadcrumbdemo_routing_module__["a" /* BreadcrumbDemoRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__["BreadcrumbModule"],
            __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__["TabViewModule"],
            __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__["CodeHighlighterModule"]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__breadcrumbdemo__["a" /* BreadcrumbDemo */]
        ]
    })
], BreadcrumbDemoModule);

//# sourceMappingURL=breadcrumbdemo.module.js.map

/***/ }),

/***/ "../../../../../src/app/showcase/components/breadcrumb/breadcrumbdemo.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BreadcrumbDemo; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

let BreadcrumbDemo = class BreadcrumbDemo {
    ngOnInit() {
        this.items = [];
        this.items.push({ label: 'Categories' });
        this.items.push({ label: 'Sports' });
        this.items.push({ label: 'Football' });
        this.items.push({ label: 'Countries' });
        this.items.push({ label: 'Spain' });
        this.items.push({ label: 'F.C. Barcelona' });
        this.items.push({ label: 'Squad' });
        this.items.push({ label: 'Lionel Messi', url: 'https://en.wikipedia.org/wiki/Lionel_Messi' });
    }
};
BreadcrumbDemo = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__("../../../../../src/app/showcase/components/breadcrumb/breadcrumbdemo.html")
    })
], BreadcrumbDemo);

//# sourceMappingURL=breadcrumbdemo.js.map

/***/ })

});
//# sourceMappingURL=breadcrumbdemo.module.chunk.js.map