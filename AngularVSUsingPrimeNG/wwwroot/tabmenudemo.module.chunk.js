webpackJsonp(["tabmenudemo.module"],{

/***/ "../../../../../src/app/showcase/components/tabmenu/tabmenudemo-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabMenuDemoRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabmenudemo__ = __webpack_require__("../../../../../src/app/showcase/components/tabmenu/tabmenudemo.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let TabMenuDemoRoutingModule = class TabMenuDemoRoutingModule {
};
TabMenuDemoRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"].forChild([
                { path: '', component: __WEBPACK_IMPORTED_MODULE_2__tabmenudemo__["a" /* TabMenuDemo */] }
            ])
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"]
        ]
    })
], TabMenuDemoRoutingModule);

//# sourceMappingURL=tabmenudemo-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/showcase/components/tabmenu/tabmenudemo.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-section introduction\">\n    <div>\n        <span class=\"feature-title\">TabMenu</span>\n        <span>Menu is a navigation/command component that displays items as tab headers.</span>\n    </div>\n</div>\n\n<div class=\"content-section implementation\">\n    <p-tabMenu [model]=\"items\"></p-tabMenu>\n</div>\n\n<div class=\"content-section documentation\">\n    <p-tabView effect=\"fade\">\n        <p-tabPanel header=\"Documentation\">\n            <h3>Import</h3>\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nimport &#123;TabMenuModule,MenuItem&#125; from 'primeng/primeng';\n</code>\n</pre>\n\n            <h3>MenuModel API</h3>\n            <p>TabMenu uses the common menumodel api to define its items, visit <a [routerLink]=\"['/menumodel']\">MenuModel API</a> for details.</p>\n\n            <h3>Getting Started</h3>\n            <p>TabMenu requires a collection of menuitems as its model.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-tabMenu [model]=\"items\"&gt;&lt;/p-tabMenu&gt;\n</code>\n</pre>\n\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport class TabMenuDemo &#123;\n    \n    items: MenuItem[];\n\n    ngOnInit() &#123;\n        this.items = [\n            &#123;label: 'Stats', icon: 'fa-bar-chart'&#125;,\n            &#123;label: 'Calendar', icon: 'fa-calendar'&#125;,\n            &#123;label: 'Documentation', icon: 'fa-book'&#125;,\n            &#123;label: 'Support', icon: 'fa-support'&#125;,\n            &#123;label: 'Social', icon: 'fa-twitter'&#125;\n        ];\n    &#125;\n&#125;\n</code>\n</pre>\n\n            <h3>ActiveItem</h3>\n            <p>By default, first item is activated, use activeItem property to choose the initial active item.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-tabMenu [model]=\"items\" [activeItem]=\"activeItem\"&gt;&lt;/p-tabMenu&gt;\n</code>\n</pre>\n\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport class TabMenuDemo &#123;\n    \n    items: MenuItem[];\n    \n    activeItem: MenuItem;\n\n    ngOnInit() &#123;\n        this.items = [\n            &#123;label: 'Stats', icon: 'fa-bar-chart'&#125;,\n            &#123;label: 'Calendar', icon: 'fa-calendar'&#125;,\n            &#123;label: 'Documentation', icon: 'fa-book'&#125;,\n            &#123;label: 'Support', icon: 'fa-support'&#125;,\n            &#123;label: 'Social', icon: 'fa-twitter'&#125;\n        ];\n        \n        this.activeItem = this.items[2];\n    &#125;\n&#125;\n</code>\n</pre>\n\n            <h3>Properties</h3>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                    <tr>\n                        <th>Name</th>\n                        <th>Type</th>\n                        <th>Default</th>\n                        <th>Description</th>\n                    </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>model</td>\n                            <td>array</td>\n                            <td>null</td>\n                            <td>An array of menuitems.</td>\n                        </tr>\n                        <tr>\n                            <td>activeItem</td>\n                            <td>MenuItem</td>\n                            <td>null</td>\n                            <td>Defines the default active menuitem</td>\n                        </tr>\n                        <tr>\n                            <td>style</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Inline style of the component.</td>\n                        </tr>\n                        <tr>\n                            <td>styleClass</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Style class of the component.</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n            \n            <h3>Styling</h3>\n            <p>Following is the list of structural style classes, for theming classes visit <a href=\"#\" [routerLink]=\"['/theming']\">theming page</a>.</p>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                        <tr>\n                            <th>Name</th>\n                            <th>Element</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>ui-tabmenu</td>\n                            <td>Container element.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-tabmenu-nav</td>\n                            <td>List element of headers.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-tabmenuitem</td>\n                            <td>Menuitem element.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-menuitem-link</td>\n                            <td>Link inside a menuitem.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-menuitem-text</td>\n                            <td>Label of a menuitem.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-menuitem-icon</td>\n                            <td>Icon of a menuitem.</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n\n            <h3>Dependencies</h3>\n            <p>None.</p>\n        </p-tabPanel>\n\n        <p-tabPanel header=\"Source\">\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/tabmenu\" class=\"btn-viewsource\" target=\"_blank\">\n                <i class=\"fa fa-github\"></i>\n                <span>View on GitHub</span>\n            </a>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-tabMenu [model]=\"items\"&gt;&lt;/p-tabMenu&gt;\n</code>\n</pre>\n\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport class TabMenuDemo &#123;\n    \n    items: MenuItem[];\n\n    ngOnInit() &#123;\n        this.items = [\n            &#123;label: 'Stats', icon: 'fa-bar-chart'&#125;,\n            &#123;label: 'Calendar', icon: 'fa-calendar'&#125;,\n            &#123;label: 'Documentation', icon: 'fa-book'&#125;,\n            &#123;label: 'Support', icon: 'fa-support'&#125;,\n            &#123;label: 'Social', icon: 'fa-twitter'&#125;\n        ];\n    &#125;\n&#125;\n</code>\n</pre>\n        </p-tabPanel>\n    </p-tabView>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/showcase/components/tabmenu/tabmenudemo.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabMenuDemoModule", function() { return TabMenuDemoModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabmenudemo__ = __webpack_require__("../../../../../src/app/showcase/components/tabmenu/tabmenudemo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tabmenudemo_routing_module__ = __webpack_require__("../../../../../src/app/showcase/components/tabmenu/tabmenudemo-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__ = __webpack_require__("../../../../primeng/primeng.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_primeng_primeng__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





let TabMenuDemoModule = class TabMenuDemoModule {
};
TabMenuDemoModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_3__tabmenudemo_routing_module__["a" /* TabMenuDemoRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__["TabMenuModule"],
            __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__["TabViewModule"],
            __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__["CodeHighlighterModule"]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__tabmenudemo__["a" /* TabMenuDemo */]
        ]
    })
], TabMenuDemoModule);

//# sourceMappingURL=tabmenudemo.module.js.map

/***/ }),

/***/ "../../../../../src/app/showcase/components/tabmenu/tabmenudemo.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabMenuDemo; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

let TabMenuDemo = class TabMenuDemo {
    ngOnInit() {
        this.items = [
            { label: 'Stats', icon: 'fa-bar-chart' },
            { label: 'Calendar', icon: 'fa-calendar' },
            { label: 'Documentation', icon: 'fa-book' },
            { label: 'Support', icon: 'fa-support' },
            { label: 'Social', icon: 'fa-twitter' }
        ];
    }
};
TabMenuDemo = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__("../../../../../src/app/showcase/components/tabmenu/tabmenudemo.html")
    })
], TabMenuDemo);

//# sourceMappingURL=tabmenudemo.js.map

/***/ })

});
//# sourceMappingURL=tabmenudemo.module.chunk.js.map