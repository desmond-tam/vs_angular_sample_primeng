webpackJsonp(["megamenudemo.module"],{

/***/ "../../../../../src/app/showcase/components/megamenu/megamenudemo-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MegaMenuDemoRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__megamenudemo__ = __webpack_require__("../../../../../src/app/showcase/components/megamenu/megamenudemo.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let MegaMenuDemoRoutingModule = class MegaMenuDemoRoutingModule {
};
MegaMenuDemoRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"].forChild([
                { path: '', component: __WEBPACK_IMPORTED_MODULE_2__megamenudemo__["a" /* MegaMenuDemo */] }
            ])
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"]
        ]
    })
], MegaMenuDemoRoutingModule);

//# sourceMappingURL=megamenudemo-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/showcase/components/megamenu/megamenudemo.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-section introduction\">\n    <div>\n        <span class=\"feature-title\">MegaMenu</span>\n        <span>MegaMenu displays submenus of root items together.</span>\n    </div>\n</div>\n\n<div class=\"content-section implementation\">\n    <h3 class=\"first\">Default</h3>\n    <p-megaMenu [model]=\"items\"></p-megaMenu>\n    \n    <h3>Vertical</h3>\n    <p-megaMenu [model]=\"items\" orientation=\"vertical\"></p-megaMenu>\n</div>\n\n<div class=\"content-section documentation\">\n    <p-tabView effect=\"fade\">\n        <p-tabPanel header=\"Documentation\">\n            <h3>Import</h3>\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nimport &#123;MegaMenuModule&#125; from 'primeng/primeng';\n</code>\n</pre>\n\n<h3>MenuModel API</h3>\n<p>MegaMenu uses the common menumodel api to define its items, visit <a [routerLink]=\"['/menumodel']\">MenuModel API</a> for details.</p>\n\n<h3>Getting Started</h3>\n<p>MegaMenu requires nested menuitems as its model where the items of a root menuitem is a two dimensional array to define columns in an overlay submenu.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-megaMenu [model]=\"items\"&gt;&lt;/p-megaMenu&gt;\n</code>\n</pre>\n\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\n    export class MegaMenuDemo &#123;\n\n        items: MenuItem[];\n\n        ngOnInit() &#123;\n            this.items = [\n                &#123;\n                    label: 'TV', icon: 'fa-check',\n                    items: [\n                        [\n                            &#123;\n                                label: 'TV 1',\n                                items: [&#123;label: 'TV 1.1'&#125;,&#123;label: 'TV 1.2'&#125;]\n                            &#125;,\n                            &#123;\n                                label: 'TV 2',\n                                items: [&#123;label: 'TV 2.1'&#125;,&#123;label: 'TV 2.2'&#125;]\n                            &#125;\n                        ],\n                        [\n                            &#123;\n                                label: 'TV 3',\n                                items: [&#123;label: 'TV 3.1'&#125;,&#123;label: 'TV 3.2'&#125;]\n                            &#125;,\n                            &#123;\n                                label: 'TV 4',\n                                items: [&#123;label: 'TV 4.1'&#125;,&#123;label: 'TV 4.2'&#125;]\n                            &#125;    \n                        ]\n                    ]\n                &#125;,\n                &#123;\n                    label: 'Sports', icon: 'fa-soccer-ball-o',\n                    items: [\n                        [\n                            &#123;\n                                label: 'Sports 1',\n                                items: [&#123;label: 'Sports 1.1'&#125;,&#123;label: 'Sports 1.2'&#125;]\n                            &#125;,\n                            &#123;\n                                label: 'Sports 2',\n                                items: [&#123;label: 'Sports 2.1'&#125;,&#123;label: 'Sports 2.2'&#125;]\n                            &#125;,\n\n                        ],\n                        [\n                            &#123;\n                                label: 'Sports 3',\n                                items: [&#123;label: 'Sports 3.1'&#125;,&#123;label: 'Sports 3.2'&#125;]\n                            &#125;,\n                            &#123;\n                                label: 'Sports 4',\n                                items: [&#123;label: 'Sports 4.1'&#125;,&#123;label: 'Sports 4.2'&#125;]\n                            &#125;\n                        ],\n                        [\n                            &#123;\n                                label: 'Sports 5',\n                                items: [&#123;label: 'Sports 5.1'&#125;,&#123;label: 'Sports 5.2'&#125;]\n                            &#125;,\n                            &#123;\n                                label: 'Sports 6',\n                                items: [&#123;label: 'Sports 6.1'&#125;,&#123;label: 'Sports 6.2'&#125;]\n                            &#125;\n                        ]\n                    ]\n                &#125;\n            ];\n        &#125;\n    &#125;\n</code>\n</pre>\n\n<h3>Custom Content</h3>\n<p>Custom content can be placed between p-megaMenu tags. Megamenu should be horizontal for custom content.</p>\n\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-megaMenu [model]=\"items\"&gt;\n    &lt;input type=\"text\" pInputText placeholder=\"Search\"&gt;\n    &lt;button pButton label=\"Logout\" icon=\"fa-sign-out\"&gt;&lt;/button&gt;\n&lt;/p-megaMenu&gt;\n</code>\n</pre>\n\n\n<h3>Properties</h3>\n<div class=\"doc-tablewrapper\">\n    <table class=\"doc-table\">\n        <thead>\n            <tr>\n                <th>Name</th>\n                <th>Type</th>\n                <th>Default</th>\n                <th>Description</th>\n            </tr>\n        </thead>\n        <tbody>\n            <tr>\n                <td>model</td>\n                <td>array</td>\n                <td>null</td>\n                <td>An array of menuitems.</td>\n            </tr>\n            <tr>\n                <td>orientation</td>\n                <td>string</td>\n                <td>horizontal</td>\n                <td>Defines the orientation, valid values are horizontal and vertical.</td>\n            </tr>\n            <tr>\n                <td>style</td>\n                <td>string</td>\n                <td>null</td>\n                <td>Inline style of the component.</td>\n            </tr>\n            <tr>\n                <td>styleClass</td>\n                <td>string</td>\n                <td>null</td>\n                <td>Style class of the component.</td>\n            </tr>\n        </tbody>\n    </table>\n</div>\n\n<h3>Styling</h3>\n<p>Following is the list of structural style classes, for theming classes visit <a href=\"#\" [routerLink]=\"['/theming']\">theming page</a>.</p>\n<div class=\"doc-tablewrapper\">\n    <table class=\"doc-table\">\n        <thead>\n        <tr>\n            <th>Name</th>\n            <th>Element</th>\n        </tr>\n        </thead>\n        <tbody>\n        <tr>\n            <td>ui-megamenu</td>\n            <td>Container element.</td>\n        </tr>\n        <tr>\n            <td>ui-menu-list</td>\n            <td>List element.</td>\n        </tr>\n        <tr>\n            <td>ui-menuitem</td>\n            <td>Menuitem element.</td>\n        </tr>\n        <tr>\n            <td>ui-menuitem-text</td>\n            <td>Label of a menuitem.</td>\n        </tr>\n        <tr>\n            <td>ui-menuitem-icon</td>\n            <td>Icon of a menuitem.</td>\n        </tr>\n        <tr>\n            <td>ui-submenu-icon</td>\n            <td>Arrow icon of a submenu.</td>\n        </tr>\n        </tbody>\n    </table>\n</div>\n\n<h3>Dependencies</h3>\n<p>None.</p>\n</p-tabPanel>\n\n<p-tabPanel header=\"Source\">\n    <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/megamenu\" class=\"btn-viewsource\" target=\"_blank\">\n        <i class=\"fa fa-github\"></i>\n        <span>View on GitHub</span>\n    </a>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-megaMenu [model]=\"items\"&gt;&lt;/p-megaMenu&gt;\n</code>\n</pre>\n\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport class MegaMenuDemo &#123;\n\n    items: MenuItem[];\n\n    ngOnInit() &#123;\n        this.items = [\n            &#123;\n                label: 'TV', icon: 'fa-check',\n                items: [\n                    [\n                        &#123;\n                            label: 'TV 1',\n                            items: [&#123;label: 'TV 1.1'&#125;,&#123;label: 'TV 1.2'&#125;]\n                        &#125;,\n                        &#123;\n                            label: 'TV 2',\n                            items: [&#123;label: 'TV 2.1'&#125;,&#123;label: 'TV 2.2'&#125;]\n                        &#125;\n                    ],\n                    [\n                        &#123;\n                            label: 'TV 3',\n                            items: [&#123;label: 'TV 3.1'&#125;,&#123;label: 'TV 3.2'&#125;]\n                        &#125;,\n                        &#123;\n                            label: 'TV 4',\n                            items: [&#123;label: 'TV 4.1'&#125;,&#123;label: 'TV 4.2'&#125;]\n                        &#125;    \n                    ]\n                ]\n            &#125;,\n            &#123;\n                label: 'Sports', icon: 'fa-soccer-ball-o',\n                items: [\n                    [\n                        &#123;\n                            label: 'Sports 1',\n                            items: [&#123;label: 'Sports 1.1'&#125;,&#123;label: 'Sports 1.2'&#125;]\n                        &#125;,\n                        &#123;\n                            label: 'Sports 2',\n                            items: [&#123;label: 'Sports 2.1'&#125;,&#123;label: 'Sports 2.2'&#125;]\n                        &#125;,\n\n                    ],\n                    [\n                        &#123;\n                            label: 'Sports 3',\n                            items: [&#123;label: 'Sports 3.1'&#125;,&#123;label: 'Sports 3.2'&#125;]\n                        &#125;,\n                        &#123;\n                            label: 'Sports 4',\n                            items: [&#123;label: 'Sports 4.1'&#125;,&#123;label: 'Sports 4.2'&#125;]\n                        &#125;\n                    ],\n                    [\n                        &#123;\n                            label: 'Sports 5',\n                            items: [&#123;label: 'Sports 5.1'&#125;,&#123;label: 'Sports 5.2'&#125;]\n                        &#125;,\n                        &#123;\n                            label: 'Sports 6',\n                            items: [&#123;label: 'Sports 6.1'&#125;,&#123;label: 'Sports 6.2'&#125;]\n                        &#125;\n                    ]\n                ]\n            &#125;,\n            &#123;\n                label: 'Entertainment', icon: 'fa-child',\n                items: [\n                    [\n                        &#123;\n                            label: 'Entertainment 1',\n                            items: [&#123;label: 'Entertainment 1.1'&#125;,&#123;label: 'Entertainment 1.2'&#125;]\n                        &#125;,\n                        &#123;\n                            label: 'Entertainment 2',\n                            items: [&#123;label: 'Entertainment 2.1'&#125;,&#123;label: 'Entertainment 2.2'&#125;]\n                        &#125;\n                    ],\n                    [\n                        &#123;\n                            label: 'Entertainment 3',\n                            items: [&#123;label: 'Entertainment 3.1'&#125;,&#123;label: 'Entertainment 3.2'&#125;]\n                        &#125;,\n                        &#123;\n                            label: 'Entertainment 4',\n                            items: [&#123;label: 'Entertainment 4.1'&#125;,&#123;label: 'Entertainment 4.2'&#125;]\n                        &#125;    \n                    ]\n                ]\n            &#125;,\n            &#123;\n                label: 'Technology', icon: 'fa-gears',\n                items: [\n                    [\n                        &#123;\n                            label: 'Technology 1',\n                            items: [&#123;label: 'Technology 1.1'&#125;,&#123;label: 'Technology 1.2'&#125;]\n                        &#125;,\n                        &#123;\n                            label: 'Technology 2',\n                            items: [&#123;label: 'Technology 2.1'&#125;,&#123;label: 'Technology 2.2'&#125;]\n                        &#125;,\n                        &#123;\n                            label: 'Technology 3',\n                            items: [&#123;label: 'Technology 3.1'&#125;,&#123;label: 'Technology 3.2'&#125;]\n                        &#125;\n                    ],\n                    [\n                        &#123;\n                            label: 'Technology 4',\n                            items: [&#123;label: 'Technology 4.1'&#125;,&#123;label: 'Technology 4.2'&#125;]\n                        &#125;  \n                    ]\n                ]\n            &#125;\n        ];\n    &#125;\n&#125;\n</code>\n</pre>\n</p-tabPanel>\n</p-tabView>\n</div>"

/***/ }),

/***/ "../../../../../src/app/showcase/components/megamenu/megamenudemo.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MegaMenuDemoModule", function() { return MegaMenuDemoModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__megamenudemo__ = __webpack_require__("../../../../../src/app/showcase/components/megamenu/megamenudemo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__megamenudemo_routing_module__ = __webpack_require__("../../../../../src/app/showcase/components/megamenu/megamenudemo-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__ = __webpack_require__("../../../../primeng/primeng.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_primeng_primeng__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







let MegaMenuDemoModule = class MegaMenuDemoModule {
};
MegaMenuDemoModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_3__megamenudemo_routing_module__["a" /* MegaMenuDemoRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__["MegaMenuModule"],
            __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__["TabViewModule"],
            __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__["CodeHighlighterModule"]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__megamenudemo__["a" /* MegaMenuDemo */]
        ]
    })
], MegaMenuDemoModule);

//# sourceMappingURL=megamenudemo.module.js.map

/***/ }),

/***/ "../../../../../src/app/showcase/components/megamenu/megamenudemo.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MegaMenuDemo; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

let MegaMenuDemo = class MegaMenuDemo {
    ngOnInit() {
        this.items = [
            {
                label: 'TV', icon: 'fa-check',
                items: [
                    [
                        {
                            label: 'TV 1',
                            items: [{ label: 'TV 1.1' }, { label: 'TV 1.2' }]
                        },
                        {
                            label: 'TV 2',
                            items: [{ label: 'TV 2.1' }, { label: 'TV 2.2' }]
                        }
                    ],
                    [
                        {
                            label: 'TV 3',
                            items: [{ label: 'TV 3.1' }, { label: 'TV 3.2' }]
                        },
                        {
                            label: 'TV 4',
                            items: [{ label: 'TV 4.1' }, { label: 'TV 4.2' }]
                        }
                    ]
                ]
            },
            {
                label: 'Sports', icon: 'fa-soccer-ball-o',
                items: [
                    [
                        {
                            label: 'Sports 1',
                            items: [{ label: 'Sports 1.1' }, { label: 'Sports 1.2' }]
                        },
                        {
                            label: 'Sports 2',
                            items: [{ label: 'Sports 2.1' }, { label: 'Sports 2.2' }]
                        },
                    ],
                    [
                        {
                            label: 'Sports 3',
                            items: [{ label: 'Sports 3.1' }, { label: 'Sports 3.2' }]
                        },
                        {
                            label: 'Sports 4',
                            items: [{ label: 'Sports 4.1' }, { label: 'Sports 4.2' }]
                        }
                    ],
                    [
                        {
                            label: 'Sports 5',
                            items: [{ label: 'Sports 5.1' }, { label: 'Sports 5.2' }]
                        },
                        {
                            label: 'Sports 6',
                            items: [{ label: 'Sports 6.1' }, { label: 'Sports 6.2' }]
                        }
                    ]
                ]
            },
            {
                label: 'Entertainment', icon: 'fa-child',
                items: [
                    [
                        {
                            label: 'Entertainment 1',
                            items: [{ label: 'Entertainment 1.1' }, { label: 'Entertainment 1.2' }]
                        },
                        {
                            label: 'Entertainment 2',
                            items: [{ label: 'Entertainment 2.1' }, { label: 'Entertainment 2.2' }]
                        }
                    ],
                    [
                        {
                            label: 'Entertainment 3',
                            items: [{ label: 'Entertainment 3.1' }, { label: 'Entertainment 3.2' }]
                        },
                        {
                            label: 'Entertainment 4',
                            items: [{ label: 'Entertainment 4.1' }, { label: 'Entertainment 4.2' }]
                        }
                    ]
                ]
            },
            {
                label: 'Technology', icon: 'fa-gears',
                items: [
                    [
                        {
                            label: 'Technology 1',
                            items: [{ label: 'Technology 1.1' }, { label: 'Technology 1.2' }]
                        },
                        {
                            label: 'Technology 2',
                            items: [{ label: 'Technology 2.1' }, { label: 'Technology 2.2' }]
                        },
                        {
                            label: 'Technology 3',
                            items: [{ label: 'Technology 3.1' }, { label: 'Technology 3.2' }]
                        }
                    ],
                    [
                        {
                            label: 'Technology 4',
                            items: [{ label: 'Technology 4.1' }, { label: 'Technology 4.2' }]
                        }
                    ]
                ]
            }
        ];
    }
};
MegaMenuDemo = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__("../../../../../src/app/showcase/components/megamenu/megamenudemo.html")
    })
], MegaMenuDemo);

//# sourceMappingURL=megamenudemo.js.map

/***/ })

});
//# sourceMappingURL=megamenudemo.module.chunk.js.map