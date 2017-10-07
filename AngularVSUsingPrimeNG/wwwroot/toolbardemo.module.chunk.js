webpackJsonp(["toolbardemo.module"],{

/***/ "../../../../../src/app/showcase/components/toolbar/toolbardemo-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToolbarDemoRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__toolbardemo__ = __webpack_require__("../../../../../src/app/showcase/components/toolbar/toolbardemo.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let ToolbarDemoRoutingModule = class ToolbarDemoRoutingModule {
};
ToolbarDemoRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"].forChild([
                { path: '', component: __WEBPACK_IMPORTED_MODULE_2__toolbardemo__["a" /* ToolbarDemo */] }
            ])
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"]
        ]
    })
], ToolbarDemoRoutingModule);

//# sourceMappingURL=toolbardemo-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/showcase/components/toolbar/toolbardemo.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-section introduction\">\n    <div>\n        <span class=\"feature-title\">Toolbar</span>\n        <span>Toolbar is a grouping component for buttons and other content.</span>\n    </div>\n</div>\n\n<div class=\"content-section implementation\">\n    <p-toolbar>\n        <div class=\"ui-toolbar-group-left\">\n            <button pButton type=\"button\" label=\"New\" icon=\"fa-plus\"></button>\n            <button pButton type=\"button\" label=\"Open\" icon=\"fa-folder-open\" class=\"ui-button-success\"></button>\n                \n            <i class=\"fa fa-bars\"></i>\n            \n            <p-splitButton label=\"Save\" icon=\"fa-check\" [model]=\"items\" styleClass=\"ui-button-warning\"></p-splitButton>\n        </div>\n        \n        <div class=\"ui-toolbar-group-right\">\n            <button pButton type=\"button\" icon=\"fa-search\"></button>\n            <i class=\"fa fa-bars\"></i>\n            <button pButton type=\"button\" icon=\"fa-refresh\"></button>\n            <button pButton type=\"button\" icon=\"fa-trash\" class=\"ui-button-danger\"></button>\n        </div>\n   </p-toolbar>\n</div>\n\n<div class=\"content-section documentation\">\n    <p-tabView effect=\"fade\">\n        <p-tabPanel header=\"Documentation\">\n            <h3>Import</h3>\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nimport &#123;ToolbarModule&#125; from 'primeng/primeng';\n</code>\n</pre>\n\n            <h3>Getting Started</h3>\n            <p>Toolbar is a container component defined using p-toolbar element. Left aligned content is placed inside a div \n            having .ui-toolbar-group-left class and similarly .ui-toolbar-group-right for right alignment.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-toolbar&gt;\n    &lt;div class=\"ui-toolbar-group-left\"&gt;\n        &lt;button pButton type=\"button\" label=\"New\" icon=\"fa-plus\"&gt;&lt;/button&gt;\n        &lt;button pButton type=\"button\" label=\"Open\" icon=\"fa-folder-open\"&gt;&lt;/button&gt;\n            \n        &lt;i class=\"fa fa-bars\"&gt;&lt;/i&gt;\n        \n        &lt;p-splitButton label=\"Save\" icon=\"fa-check\" [model]=\"items\"&gt;&lt;/p-splitButton&gt;\n    &lt;/div&gt;\n    \n    &lt;div class=\"ui-toolbar-group-right\"&gt;\n        &lt;button pButton type=\"button\" icon=\"fa-search\"&gt;&lt;/button&gt;\n        &lt;i class=\"fa fa-bars\"&gt;&lt;/i&gt;\n        &lt;button pButton type=\"button\" icon=\"fa-refresh\"&gt;&lt;/button&gt;\n        &lt;button pButton type=\"button\" icon=\"fa-trash\"&gt;&lt;/button&gt;\n    &lt;/div&gt;\n&lt;/p-toolbar&gt;\n</code>\n</pre>\n            \n            <h3>Properties</h3>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                        <tr>\n                            <th>Name</th>\n                            <th>Type</th>\n                            <th>Default</th>\n                            <th>Description</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>style</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Inline style of the component.</td>\n                        </tr>\n                        <tr>\n                            <td>styleClass</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Style class of the component.</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n\n            <h3>Styling</h3>\n            <p>Following is the list of structural style classes, for theming classes visit <a href=\"#\" [routerLink]=\"['/theming']\">theming page</a>.</p>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                        <tr>\n                            <th>Name</th>\n                            <th>Element</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>ui-toolbar</td>\n                            <td>Main container element.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-toolbar-group-left</td>\n                            <td>Left content container.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-toolbar-group-right</td>\n                            <td>Right content container.</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n\n            <h3>Dependencies</h3>\n            <p>None.</p>\n        </p-tabPanel>\n\n        <p-tabPanel header=\"Source\">\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/toolbar\" class=\"btn-viewsource\" target=\"_blank\">\n                <i class=\"fa fa-github\"></i>\n                <span>View on GitHub</span>\n            </a>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-toolbar&gt;\n    &lt;div class=\"ui-toolbar-group-left\"&gt;\n        &lt;button pButton type=\"button\" label=\"New\" icon=\"fa-plus\"&gt;&lt;/button&gt;\n        &lt;button pButton type=\"button\" label=\"Open\" icon=\"fa-folder-open\" class=\"ui-button-success\"&gt;&lt;/button&gt;\n            \n        &lt;i class=\"fa fa-bars\"&gt;&lt;/i&gt;\n        \n        &lt;p-splitButton label=\"Save\" icon=\"fa-check\" (onClick)=\"save()\" [model]=\"items\" styleClass=\"ui-button-warning\"&gt;&lt;/p-splitButton&gt;\n    &lt;/div&gt;\n    \n    &lt;div class=\"ui-toolbar-group-right\"&gt;\n        &lt;button pButton type=\"button\" icon=\"fa-search\"&gt;&lt;/button&gt;\n        &lt;i class=\"fa fa-bars\"&gt;&lt;/i&gt;\n        &lt;button pButton type=\"button\" icon=\"fa-refresh\"&gt;&lt;/button&gt;\n        &lt;button pButton type=\"button\" icon=\"fa-trash\" class=\"ui-button-danger\"&gt;&lt;/button&gt;\n    &lt;/div&gt;\n&lt;/p-toolbar&gt;\n</code>\n</pre>\n        </p-tabPanel>\n    </p-tabView>\n</div>"

/***/ }),

/***/ "../../../../../src/app/showcase/components/toolbar/toolbardemo.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolbarDemoModule", function() { return ToolbarDemoModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__toolbardemo__ = __webpack_require__("../../../../../src/app/showcase/components/toolbar/toolbardemo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__toolbardemo_routing_module__ = __webpack_require__("../../../../../src/app/showcase/components/toolbar/toolbardemo-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__ = __webpack_require__("../../../../primeng/primeng.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_primeng_primeng__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





let ToolbarDemoModule = class ToolbarDemoModule {
};
ToolbarDemoModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_3__toolbardemo_routing_module__["a" /* ToolbarDemoRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__["ToolbarModule"],
            __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__["ButtonModule"],
            __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__["SplitButtonModule"],
            __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__["TabViewModule"],
            __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__["CodeHighlighterModule"]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__toolbardemo__["a" /* ToolbarDemo */]
        ]
    })
], ToolbarDemoModule);

//# sourceMappingURL=toolbardemo.module.js.map

/***/ }),

/***/ "../../../../../src/app/showcase/components/toolbar/toolbardemo.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToolbarDemo; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

let ToolbarDemo = class ToolbarDemo {
    ngOnInit() {
        this.items = [
            { label: 'Angular.io', icon: 'fa-link', url: 'http://angular.io' },
            { label: 'Theming', icon: 'fa-paint-brush', routerLink: ['/theming'] }
        ];
    }
};
ToolbarDemo = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__("../../../../../src/app/showcase/components/toolbar/toolbardemo.html")
    })
], ToolbarDemo);

//# sourceMappingURL=toolbardemo.js.map

/***/ })

});
//# sourceMappingURL=toolbardemo.module.chunk.js.map