webpackJsonp(["tooltipdemo.module"],{

/***/ "../../../../../src/app/showcase/components/tooltip/tooltipdemo-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TooltipDemoRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tooltipdemo__ = __webpack_require__("../../../../../src/app/showcase/components/tooltip/tooltipdemo.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let TooltipDemoRoutingModule = class TooltipDemoRoutingModule {
};
TooltipDemoRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"].forChild([
                { path: '', component: __WEBPACK_IMPORTED_MODULE_2__tooltipdemo__["a" /* TooltipDemo */] }
            ])
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"]
        ]
    })
], TooltipDemoRoutingModule);

//# sourceMappingURL=tooltipdemo-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/showcase/components/tooltip/tooltipdemo.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-section introduction\">\n    <div>\n        <span class=\"feature-title\">Tooltip</span>\n        <span>Tooltip provides advisory information for a component.</span>\n    </div>\n</div>\n\n<div class=\"content-section implementation\">\n    <h3 class=\"first\">Positions</h3>\n    <div class=\"ui-g ui-fluid\">\n        <div class=\"ui-g-12 ui-md-3\">\n            <input type=\"text\" pInputText pTooltip=\"Enter your username\" placeholder=\"Right\">                \n        </div>\n        <div class=\"ui-g-12 ui-md-3\">\n            <input type=\"text\" pInputText pTooltip=\"Enter your username\" tooltipPosition=\"top\" placeholder=\"Top\">\n        </div>\n        <div class=\"ui-g-12 ui-md-3\">\n            <input type=\"text\" pInputText pTooltip=\"Enter your username\" tooltipPosition=\"bottom\" placeholder=\"Bottom\">\n        </div>\n        <div class=\"ui-g-12 ui-md-3\">\n            <input type=\"text\" pInputText pTooltip=\"Enter your username\" tooltipPosition=\"left\" placeholder=\"Left\">\n        </div>\n    </div>\n    \n    <h3>Focus and Blur</h3>\n    <input type=\"text\" pInputText pTooltip=\"Enter your username\" placeholder=\"Right\" tooltipEvent=\"focus\" style=\"margin-left:.5em\">\n</div>\n\n<div class=\"content-section documentation\">\n    <p-tabView effect=\"fade\">\n        <p-tabPanel header=\"Documentation\">\n                    <h3>Import</h3>\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nimport &#123;TooltipModule&#125; from 'primeng/primeng';\n</code>\n</pre>\n\n            <h3>Getting Started</h3>\n            <p>Tooltip is applied to an element with pTooltip directive where the value of the directive defines the text to display.</p>\n            \n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;input type=\"text\" pTooltip=\"Enter your username\"&gt;\n</code>\n</pre>\n\n            <h3>Position</h3>\n            <p>There are four choices to position the tooltip, default value is \"right\" and alternatives are \"top\", \"bottom\", \"left\". Position is \n            specified using tooltipPosition attribute.</p>\n            \n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;input type=\"text\" pTooltip=\"Enter your username\" tooltipPosition=\"top\"&gt;\n</code>\n</pre>\n\n            <h3>Events</h3>\n            <p>Tooltip gets displayed on hover event of its target by default, other option is the focus event to display and blur to hide.</p>\n\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;input type=\"text\" pTooltip=\"Enter your username\" tooltipPosition=\"top\" tooltipEvent=\"focus\"&gt;\n</code>\n</pre>\n\n            <h3>Delay</h3>\n            <p>Tooltip is displayed or hidden instantly by default however you may add delays using showDelay and hideDelay properties which accept a number value in terms of milliseconds.</p>\n\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;input type=\"text\" pTooltip=\"Enter your username\" tooltipPosition=\"top\" tooltipEvent=\"focus\" showDelay=\"1000\" hideDelay=\"500\"&gt;\n</code>\n</pre>\n\n            <h3>Scrolling Containers</h3>\n            <p>When placed inside a scrolling container like an overflown div, tooltip must be appended to another element that has\n                relative positioning instead of document body which is the default.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;div #container style=\"display:inline-block;position:relative\"&gt;\n    &lt;input type=\"text\" pInputText pTooltip=\"Enter your username\" placeholder=\"Right\" [appendTo]=\"container\"&gt;\n&lt;/div&gt;\n</code>\n</pre>\n            \n            <h3>Properties</h3>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                        <tr>\n                            <th>Name</th>\n                            <th>Type</th>\n                            <th>Default</th>\n                            <th>Description</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>pTooltip</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Text of the tooltip.</td>\n                        </tr>\n                        <tr>\n                            <td>tooltipPosition</td>\n                            <td>string</td>\n                            <td>right</td>\n                            <td>Position of the tooltip, valid values are right, left, top and bottom.</td>\n                        </tr>\n                        <tr>\n                            <td>tooltipEvent</td>\n                            <td>string</td>\n                            <td>hover</td>\n                            <td>Event to show the tooltip, valid values are hover and focus.</td>\n                        </tr>\n                        <tr>\n                            <td>positionStyle</td>\n                            <td>string</td>\n                            <td>absolute</td>\n                            <td>Type of CSS position.</td>\n                        </tr>\n                        <tr>\n                            <td>tooltipDisabled</td>\n                            <td>boolean</td>\n                            <td>false</td>\n                            <td>When present, it specifies that the component should be disabled.</td>\n                        </tr>\n                        <tr>\n                            <td>appendTo</td>\n                            <td>string</td>\n                            <td>any</td>\n                            <td>Target element to attach the overlay, valid values are \"body\", \"target\" or a local ng-template variable of another element.</td>\n                        </tr>\n                        <tr>\n                            <td>hideDelay</td>\n                            <td>null</td>\n                            <td>number</td>\n                            <td>Delay to hide the tooltip in milliseconds.</td>\n                        </tr>\n                        <tr>\n                            <td>showDelay</td>\n                            <td>null</td>\n                            <td>number</td>\n                            <td>Delay to show the tooltip in milliseconds.</td>\n                        </tr>\n                        <tr>\n                            <td>life</td>\n                            <td>null</td>\n                            <td>number</td>\n                            <td>Time to wait in milliseconds to hide the tooltip even it is active.</td>\n                        </tr>\n                        <tr>\n                            <td>tooltipStyleClass</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Style class of the tooltip.</td>\n                        </tr>\n                        <tr>\n                            <td>escape</td>\n                            <td>boolean</td>\n                            <td>true</td>\n                            <td>By default the tooltip contents are rendered as text. Set to false to support html tags in the content</td>\n                        </tr>\n                        <tr>\n                            <td>tooltipZIndex</td>\n                            <td>string</td>\n                            <td>auto</td>\n                            <td>Whether the z-index should be managed automatically to always go on top or have a fixed value.</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n\n            <h3>Styling</h3>\n            <p>Following is the list of structural style classes, for theming classes visit <a href=\"#\" [routerLink]=\"['/theming']\">theming page</a>.</p>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                        <tr>\n                            <th>Name</th>\n                            <th>Element</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>ui-tooltip</td>\n                            <td>Container element</td>\n                        </tr>\n                        <tr>\n                            <td>ui-tooltip-arrow</td>\n                            <td>Arrow of the tooltip</td>\n                        </tr>\n                        <tr>\n                            <td>ui-tooltip-text</td>\n                            <td>Text of the tooltip</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n\n            <h3>Dependencies</h3>\n            <p>None.</p>\n        </p-tabPanel>\n        \n        <p-tabPanel header=\"Source\">\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/tooltip\" class=\"btn-viewsource\" target=\"_blank\">\n                <i class=\"fa fa-github\"></i>\n                <span>View on GitHub</span>\n            </a>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;h3 class=\"first\"&gt;Positions&lt;/h3&gt;\n&lt;div class=\"ui-g ui-fluid\"&gt;\n    &lt;div class=\"ui-g-12 ui-md-3\"&gt;\n        &lt;input type=\"text\" pInputText pTooltip=\"Enter your username\" placeholder=\"Right\"&gt;                \n    &lt;/div&gt;\n    &lt;div class=\"ui-g-12 ui-md-3\"&gt;\n        &lt;input type=\"text\" pInputText pTooltip=\"Enter your username\" tooltipPosition=\"top\" placeholder=\"Top\"&gt;\n    &lt;/div&gt;\n    &lt;div class=\"ui-g-12 ui-md-3\"&gt;\n        &lt;input type=\"text\" pInputText pTooltip=\"Enter your username\" tooltipPosition=\"bottom\" placeholder=\"Bottom\"&gt;\n    &lt;/div&gt;\n    &lt;div class=\"ui-g-12 ui-md-3\"&gt;\n        &lt;input type=\"text\" pInputText pTooltip=\"Enter your username\" tooltipPosition=\"left\" placeholder=\"Left\"&gt;\n    &lt;/div&gt;\n&lt;/div&gt;\n\n&lt;h3&gt;Focus and Blur&lt;/h3&gt;\n&lt;input type=\"text\" pInputText pTooltip=\"Enter your username\" placeholder=\"Right\" tooltipEvent=\"focus\" style=\"margin-left:.5em\"&gt;\n</code>\n</pre>\n\n        </p-tabPanel>\n     </p-tabView >\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/showcase/components/tooltip/tooltipdemo.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TooltipDemoModule", function() { return TooltipDemoModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tooltipdemo__ = __webpack_require__("../../../../../src/app/showcase/components/tooltip/tooltipdemo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tooltipdemo_routing_module__ = __webpack_require__("../../../../../src/app/showcase/components/tooltip/tooltipdemo-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__ = __webpack_require__("../../../../primeng/primeng.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_primeng_primeng__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





let TooltipDemoModule = class TooltipDemoModule {
};
TooltipDemoModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_3__tooltipdemo_routing_module__["a" /* TooltipDemoRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__["TooltipModule"],
            __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__["InputTextModule"],
            __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__["TabViewModule"],
            __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__["CodeHighlighterModule"]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__tooltipdemo__["a" /* TooltipDemo */]
        ]
    })
], TooltipDemoModule);

//# sourceMappingURL=tooltipdemo.module.js.map

/***/ }),

/***/ "../../../../../src/app/showcase/components/tooltip/tooltipdemo.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TooltipDemo; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

let TooltipDemo = class TooltipDemo {
};
TooltipDemo = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__("../../../../../src/app/showcase/components/tooltip/tooltipdemo.html")
    })
], TooltipDemo);

//# sourceMappingURL=tooltipdemo.js.map

/***/ })

});
//# sourceMappingURL=tooltipdemo.module.chunk.js.map