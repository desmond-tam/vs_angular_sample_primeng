webpackJsonp(["slidemenudemo.module"],{

/***/ "../../../../../src/app/showcase/components/slidemenu/slidemenudemo-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SlideMenuDemoRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__slidemenudemo__ = __webpack_require__("../../../../../src/app/showcase/components/slidemenu/slidemenudemo.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let SlideMenuDemoRoutingModule = class SlideMenuDemoRoutingModule {
};
SlideMenuDemoRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"].forChild([
                { path: '', component: __WEBPACK_IMPORTED_MODULE_2__slidemenudemo__["a" /* SlideMenuDemo */] }
            ])
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"]
        ]
    })
], SlideMenuDemoRoutingModule);

//# sourceMappingURL=slidemenudemo-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/showcase/components/slidemenu/slidemenudemo.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-section introduction\">\n    <div>\n        <span class=\"feature-title\">Slide Menu</span>\n        <span>SlideMenu displays submenus with slide animation.</span>\n    </div>\n</div>\n\n<div class=\"content-section implementation\">\n    <h3 class=\"first\">Default</h3>\n    <p-slideMenu [model]=\"items\"></p-slideMenu>\n\n    <h3>Popup</h3>\n    <p-slideMenu #menu [model]=\"items\" [popup]=\"true\"></p-slideMenu>\n    <button #btn type=\"button\" pButton icon=\"fa fa-list\" label=\"Show\" (click)=\"menu.toggle($event)\"></button>\n</div>\n\n<div class=\"content-section documentation\">\n    <p-tabView effect=\"fade\">\n        <p-tabPanel header=\"Documentation\">\n            <h3>Import</h3>\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nimport &#123;SlideMenuModule,MenuItem&#125; from 'primeng/primeng';\n</code>\n</pre>\n\n            <h3>MenuModel API</h3>\n            <p>SlideMenu uses the common menumodel api to define its items, visit <a [routerLink]=\"['/menumodel']\">MenuModel API</a> for details.</p>\n\n            <h3>Getting Started</h3>\n            <p>SlideMenu requires nested menuitems as its model.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-slideMenu [model]=\"items\"&gt;&lt;/p-slideMenu&gt;\n</code>\n</pre>\n\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport class SlideMenuDemo &#123;\n\n    items: MenuItem[];\n\n    ngOnInit() &#123;\n        this.items = [\n            &#123;\n                label: 'File',\n                items: [&#123;\n                        label: 'New', \n                        icon: 'fa-plus',\n                        items: [\n                            &#123;label: 'Project'&#125;,\n                            &#123;label: 'Other'&#125;,\n                        ]\n                    &#125;,\n                    &#123;label: 'Open'&#125;,\n                    &#123;label: 'Quit'&#125;\n                ]\n            &#125;,\n            &#123;\n                label: 'Edit',\n                icon: 'fa-edit',\n                items: [\n                    &#123;label: 'Undo', icon: 'fa-mail-forward'&#125;,\n                    &#123;label: 'Redo', icon: 'fa-mail-reply'&#125;\n                ]\n            &#125;\n        ];\n    &#125;\n&#125;\n</code>\n</pre>\n\n            <h3>Popup Mode</h3>\n            <p>SlideMenu is inline by default, popup mode is also supported by enabling popup property and calling toggle method by passing the event \n                    from the anchor element.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-slideMenu #menu [model]=\"items\" [popup]=\"true\"&gt;&lt;/p-slideMenu&gt;\n&lt;button #btn type=\"button\" pButton icon=\"fa fa-list\" label=\"Show\" (click)=\"menu.toggle($event)\"&gt;&lt;/button&gt;\n</code>\n</pre>\n\n            <h3>Effects</h3>\n            <p>The easing function to use is \"ease-out\" by default and this can be customized using easing property. \n                See <a href=\"http://www.w3schools.com/cssref/css3_pr_transition-timing-function.asp\">here</a> for possible alternative values.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-slideMenu #menu [model]=\"items\" effectDuration=\"1000\" easing=\"ease-in\"&gt;&lt;/p-slideMenu&gt;\n</code>\n</pre>\n\n\n            <h3>Properties</h3>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                        <tr>\n                            <th>Name</th>\n                            <th>Type</th>\n                            <th>Default</th>\n                            <th>Description</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>model</td>\n                            <td>array</td>\n                            <td>null</td>\n                            <td>An array of menuitems.</td>\n                        </tr>\n                        <tr>\n                            <td>popup</td>\n                            <td>boolean</td>\n                            <td>false</td>\n                            <td>Defines if menu would displayed as a popup.</td>\n                        </tr>\n                        <tr>\n                            <td>style</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Inline style of the component.</td>\n                        </tr>\n                        <tr>\n                            <td>styleClass</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Style class of the component.</td>\n                        </tr>\n                        <tr>\n                            <td>easing</td>\n                            <td>string</td>\n                            <td>ease-out</td>\n                            <td>Easing animation to use for sliding.</td>\n                        </tr>\n                        <tr>\n                            <td>effectDuration</td>\n                            <td>any</td>\n                            <td>250</td>\n                            <td>Duration of the sliding animation in milliseconds.</td>\n                        </tr>\n                        <tr>\n                            <td>backLabel</td>\n                            <td>string</td>\n                            <td>Back</td>\n                            <td>Label of element to navigate back.</td>\n                        </tr>\n                        <tr>\n                            <td>menuWidth</td>\n                            <td>number</td>\n                            <td>180</td>\n                            <td>Width of the submenus.</td>\n                        </tr>\n                        <tr>\n                            <td>viewportHeight</td>\n                            <td>number</td>\n                            <td>175</td>\n                            <td>Height of the scrollable area, a scrollbar appears if a menu height is longer than this value.</td>\n                        </tr>\n                        <tr>\n                            <td>appendTo</td>\n                            <td>any</td>\n                            <td>null</td>\n                            <td>Target element to attach the overlay, valid values are \"body\" or a local ng-template variable of another element.</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n            \n            <h3>Methods</h3>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                        <tr>\n                            <th>Name</th>\n                            <th>Parameters</th>\n                            <th>Description</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>toggle</td>\n                            <td>event: browser event</td>\n                            <td>Toggles the visibility of the popup menu.</td>\n                        </tr>\n                        <tr>\n                            <td>show</td>\n                            <td>event: browser event</td>\n                            <td>Displays the popup menu.</td>\n                        </tr>\n                        <tr>\n                            <td>hide</td>\n                            <td>-</td>\n                            <td>Hides the popup menu.</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n\n            <h3>Styling</h3>\n            <p>Following is the list of structural style classes, for theming classes visit <a href=\"#\" [routerLink]=\"['/theming']\">theming page</a>.</p>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                    <tr>\n                        <th>Name</th>\n                        <th>Element</th>\n                    </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>ui-slidemenu</td>\n                            <td>Container element.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-slidemenu-wrapper</td>\n                            <td>Wrapper of content.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-slidemenu-content</td>\n                            <td>Content element.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-slidemenu-backward</td>\n                            <td>Element to navigate to previous menu on click.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-menu-list</td>\n                            <td>List element.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-menuitem</td>\n                            <td>Menuitem element.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-menuitem-text</td>\n                            <td>Label of a menuitem.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-menuitem-icon</td>\n                            <td>Icon of a menuitem.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-submenu-icon</td>\n                            <td>Arrow icon of a submenu.</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n\n            <h3>Dependencies</h3>\n            <p>None.</p>\n        </p-tabPanel>\n\n        <p-tabPanel header=\"Source\">\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/slidemenu\" class=\"btn-viewsource\" target=\"_blank\">\n                <i class=\"fa fa-github\"></i>\n                <span>View on GitHub</span>\n            </a>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;h3 class=\"first\"&gt;Default&lt;/h3&gt;\n&lt;p-slideMenu [model]=\"items\"&gt;&lt;/p-slideMenu&gt;\n\n&lt;h3&gt;Popup&lt;/h3&gt;\n&lt;p-slideMenu #menu [model]=\"items\" [popup]=\"true\"&gt;&lt;/p-slideMenu&gt;\n&lt;button #btn type=\"button\" pButton icon=\"fa fa-list\" label=\"Show\" (click)=\"menu.toggle($event)\"&gt;&lt;/button&gt;\n</code>\n</pre>\n\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport class SlideMenuDemo &#123;\n\n    items: MenuItem[];\n\n    ngOnInit() &#123;\n        this.items = [\n            &#123;\n                label: 'File',\n                icon: 'fa-file-o',\n                items: [&#123;\n                        label: 'New', \n                        icon: 'fa-plus',\n                        items: [\n                            &#123;label: 'Project'&#125;,\n                            &#123;label: 'Other'&#125;,\n                        ]\n                    &#125;,\n                    &#123;label: 'Open'&#125;,\n                    &#123;separator:true&#125;,\n                    &#123;label: 'Quit'&#125;\n                ]\n            &#125;,\n            &#123;\n                label: 'Edit',\n                icon: 'fa-edit',\n                items: [\n                    &#123;label: 'Undo', icon: 'fa-mail-forward'&#125;,\n                    &#123;label: 'Redo', icon: 'fa-mail-reply'&#125;\n                ]\n            &#125;,\n            &#123;\n                label: 'Help',\n                icon: 'fa-question',\n                items: [\n                    &#123;\n                        label: 'Contents'\n                    &#125;,\n                    &#123;\n                        label: 'Search', \n                        icon: 'fa-search', \n                        items: [\n                            &#123;\n                                label: 'Text', \n                                items: [\n                                    &#123;\n                                        label: 'Workspace'\n                                    &#125;\n                                ]\n                            &#125;,\n                            &#123;\n                                label: 'File'\n                            &#125;\n                    ]&#125;\n                ]\n            &#125;,\n            &#123;\n                label: 'Actions',\n                icon: 'fa-gear',\n                items: [\n                    &#123;\n                        label: 'Edit',\n                        icon: 'fa-refresh',\n                        items: [\n                            &#123;label: 'Save', icon: 'fa-save'&#125;,\n                            &#123;label: 'Update', icon: 'fa-save'&#125;,\n                        ]\n                    &#125;,\n                    &#123;\n                        label: 'Other',\n                        icon: 'fa-phone',\n                        items: [\n                            &#123;label: 'Delete', icon: 'fa-minus'&#125;\n                        ]\n                    &#125;\n                ]\n            &#125;,\n            &#123;separator:true&#125;,\n            &#123;\n                label: 'Quit', icon: 'fa-minus'\n            &#125;\n        ];\n    &#125;\n&#125;\n</code>\n</pre>\n        </p-tabPanel>\n    </p-tabView>\n</div>"

/***/ }),

/***/ "../../../../../src/app/showcase/components/slidemenu/slidemenudemo.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlideMenuDemoModule", function() { return SlideMenuDemoModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__slidemenudemo__ = __webpack_require__("../../../../../src/app/showcase/components/slidemenu/slidemenudemo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__slidemenudemo_routing_module__ = __webpack_require__("../../../../../src/app/showcase/components/slidemenu/slidemenudemo-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__ = __webpack_require__("../../../../primeng/primeng.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_primeng_primeng__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





let SlideMenuDemoModule = class SlideMenuDemoModule {
};
SlideMenuDemoModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_3__slidemenudemo_routing_module__["a" /* SlideMenuDemoRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__["SlideMenuModule"],
            __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__["ButtonModule"],
            __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__["TabViewModule"],
            __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__["CodeHighlighterModule"]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__slidemenudemo__["a" /* SlideMenuDemo */]
        ]
    })
], SlideMenuDemoModule);

//# sourceMappingURL=slidemenudemo.module.js.map

/***/ }),

/***/ "../../../../../src/app/showcase/components/slidemenu/slidemenudemo.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SlideMenuDemo; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

let SlideMenuDemo = class SlideMenuDemo {
    ngOnInit() {
        this.items = [
            {
                label: 'File',
                icon: 'fa-file-o',
                items: [{
                        label: 'New',
                        icon: 'fa-plus',
                        items: [
                            { label: 'Project' },
                            { label: 'Other' },
                        ]
                    },
                    { label: 'Open' },
                    { separator: true },
                    { label: 'Quit' }
                ]
            },
            {
                label: 'Edit',
                icon: 'fa-edit',
                items: [
                    { label: 'Undo', icon: 'fa-mail-forward' },
                    { label: 'Redo', icon: 'fa-mail-reply' }
                ]
            },
            {
                label: 'Help',
                icon: 'fa-question',
                items: [
                    {
                        label: 'Contents'
                    },
                    {
                        label: 'Search',
                        icon: 'fa-search',
                        items: [
                            {
                                label: 'Text',
                                items: [
                                    {
                                        label: 'Workspace'
                                    }
                                ]
                            },
                            {
                                label: 'File'
                            }
                        ]
                    }
                ]
            },
            {
                label: 'Actions',
                icon: 'fa-gear',
                items: [
                    {
                        label: 'Edit',
                        icon: 'fa-refresh',
                        items: [
                            { label: 'Save', icon: 'fa-save' },
                            { label: 'Update', icon: 'fa-save' },
                        ]
                    },
                    {
                        label: 'Other',
                        icon: 'fa-phone',
                        items: [
                            { label: 'Delete', icon: 'fa-minus' }
                        ]
                    }
                ]
            },
            { separator: true },
            {
                label: 'Quit', icon: 'fa-minus'
            }
        ];
    }
};
SlideMenuDemo = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__("../../../../../src/app/showcase/components/slidemenu/slidemenudemo.html")
    })
], SlideMenuDemo);

//# sourceMappingURL=slidemenudemo.js.map

/***/ })

});
//# sourceMappingURL=slidemenudemo.module.chunk.js.map