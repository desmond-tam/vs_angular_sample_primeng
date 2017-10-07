webpackJsonp(["terminaldemo.module"],{

/***/ "../../../../../src/app/showcase/components/terminal/terminaldemo-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TerminalDemoRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__terminaldemo__ = __webpack_require__("../../../../../src/app/showcase/components/terminal/terminaldemo.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let TerminalDemoRoutingModule = class TerminalDemoRoutingModule {
};
TerminalDemoRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"].forChild([
                { path: '', component: __WEBPACK_IMPORTED_MODULE_2__terminaldemo__["a" /* TerminalDemo */] }
            ])
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"]
        ]
    })
], TerminalDemoRoutingModule);

//# sourceMappingURL=terminaldemo-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/showcase/components/terminal/terminaldemo.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-section introduction\">\n    <div>\n        <span class=\"feature-title\">Terminal</span>\n        <span>Terminal is a text based user interface. Enter \"date\" to display the current date.</span>\n    </div>\n</div>\n\n<div class=\"content-section implementation\">\n    <p-terminal welcomeMessage=\"Welcome to PrimeNG\" prompt=\"primeng $\"></p-terminal>\n</div>\n\n<div class=\"content-section documentation\">\n    <p-tabView effect=\"fade\">\n        <p-tabPanel header=\"Documentation\">\n            <h3>Import</h3>\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nimport &#123;TerminalModule&#125; from 'primeng/primeng';\n</code>\n</pre>\n\n            <h3>Getting Started</h3>\n            <p>Commands are processed using observables via the TerminalService. Import this service into your component and subscribe\n            to commandHandler to process commands by sending replies with sendResponse function.</p>\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nimport &#123;Component&#125; from '@angular/core';\nimport &#123;TerminalService&#125; from 'primeng/components/terminal/terminalservice';\n\n@Component(&#123;\n    template: '&lt;p-terminal welcomeMessage=\"Welcome to PrimeNG\" prompt=\"primeng $\"&gt;&lt;/p-terminal&gt;',\n    providers: [TerminalService]\n&#125;)\nexport class TerminalDemo &#123;\n    \n    constructor(private terminalService: TerminalService) &#123;\n        this.terminalService.commandHandler.subscribe(command => &#123;\n            let response = (command === 'date') ? new Date().toDateString() : 'Unknown command: ' + command;\n            this.terminalService.sendResponse(response);\n        &#125;);\n    &#125;\n&#125;\n</code>\n</pre>\n\n            <h3>Properties</h3>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                        <tr>\n                            <th>Name</th>\n                            <th>Type</th>\n                            <th>Default</th>\n                            <th>Description</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>welcomeMessage</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Initial text to display on terminal.</td>\n                        </tr>\n                        <tr>\n                            <td>prompt</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Prompt text for each command.</td>\n                        </tr>\n                        <tr>\n                            <td>style</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Inline style of the component.</td>\n                        </tr>\n                        <tr>\n                            <td>styleClass</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Style class of the component.</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n            \n            <h3>Styling</h3>\n            <p>Following is the list of structural style classes, for theming classes visit <a href=\"#\" [routerLink]=\"['/theming']\">theming page</a>.</p>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                        <tr>\n                            <th>Name</th>\n                            <th>Element</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>ui-terminal</td>\n                            <td>Container element.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-terminal-content</td>\n                            <td>Content of terminal.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-terminal-content-prompt</td>\n                            <td>Prompt text.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-terminal-input</td>\n                            <td>Input element to enter commands.</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n\n            <h3>Dependencies</h3>\n            <p>None.</p>\n        </p-tabPanel>\n\n<p-tabPanel header=\"Source\">\n    <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/terminal\" class=\"btn-viewsource\" target=\"_blank\">\n        <i class=\"fa fa-github\"></i>\n        <span>View on GitHub</span>\n    </a>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-terminal welcomeMessage=\"Welcome to PrimeNG\" prompt=\"primeng $\"&gt;&lt;/p-terminal&gt;\n</code>\n</pre>\n    \n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nimport &#123;Component&#125; from '@angular/core';\nimport &#123;TerminalService&#125; from 'primeng/components/terminal/terminalservice';\nimport &#123;Subscription&#125; from 'rxjs/Subscription';\n\n@Component(&#123;\n    templateUrl: './terminaldemo.html',\n    providers: [TerminalService]\n&#125;)\nexport class TerminalDemo &#123;\n\n    subscription: Subscription;\n    \n    constructor(private terminalService: TerminalService) &#123;\n        this.terminalService.commandHandler.subscribe(command => &#123;\n            let response = (command === 'date') ? new Date().toDateString() : 'Unknown command: ' + command;\n            this.terminalService.sendResponse(response);\n        &#125;);\n    &#125;\n    \n    ngOnDestroy() &#123;\n        if(this.subscription) &#123;\n            this.subscription.unsubscribe();\n        &#125;\n    &#125;\n&#125;\n</code>\n</pre>\n</p-tabPanel>\n\n\n    </p-tabView>\n</div>"

/***/ }),

/***/ "../../../../../src/app/showcase/components/terminal/terminaldemo.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TerminalDemoModule", function() { return TerminalDemoModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__terminaldemo__ = __webpack_require__("../../../../../src/app/showcase/components/terminal/terminaldemo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__terminaldemo_routing_module__ = __webpack_require__("../../../../../src/app/showcase/components/terminal/terminaldemo-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__ = __webpack_require__("../../../../primeng/primeng.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_primeng_primeng__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





let TerminalDemoModule = class TerminalDemoModule {
};
TerminalDemoModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_3__terminaldemo_routing_module__["a" /* TerminalDemoRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__["TerminalModule"],
            __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__["TabViewModule"],
            __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__["CodeHighlighterModule"]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__terminaldemo__["a" /* TerminalDemo */]
        ]
    })
], TerminalDemoModule);

//# sourceMappingURL=terminaldemo.module.js.map

/***/ }),

/***/ "../../../../../src/app/showcase/components/terminal/terminaldemo.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TerminalDemo; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_primeng_components_terminal_terminalservice__ = __webpack_require__("../../../../primeng/components/terminal/terminalservice.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_primeng_components_terminal_terminalservice___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_primeng_components_terminal_terminalservice__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


let TerminalDemo = class TerminalDemo {
    constructor(terminalService) {
        this.terminalService = terminalService;
        this.subscription = this.terminalService.commandHandler.subscribe(command => {
            let response = (command === 'date') ? new Date().toDateString() : 'Unknown command: ' + command;
            this.terminalService.sendResponse(response);
        });
    }
    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
};
TerminalDemo = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__("../../../../../src/app/showcase/components/terminal/terminaldemo.html"),
        providers: [__WEBPACK_IMPORTED_MODULE_1_primeng_components_terminal_terminalservice__["TerminalService"]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_primeng_components_terminal_terminalservice__["TerminalService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_primeng_components_terminal_terminalservice__["TerminalService"]) === "function" && _a || Object])
], TerminalDemo);

var _a;
//# sourceMappingURL=terminaldemo.js.map

/***/ })

});
//# sourceMappingURL=terminaldemo.module.chunk.js.map