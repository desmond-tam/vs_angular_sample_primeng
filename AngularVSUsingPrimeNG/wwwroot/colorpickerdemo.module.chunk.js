webpackJsonp(["colorpickerdemo.module"],{

/***/ "../../../../../src/app/showcase/components/colorpicker/colorpickerdemo-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ColorPickerDemoRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__colorpickerdemo__ = __webpack_require__("../../../../../src/app/showcase/components/colorpicker/colorpickerdemo.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let ColorPickerDemoRoutingModule = class ColorPickerDemoRoutingModule {
};
ColorPickerDemoRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"].forChild([
                { path: '', component: __WEBPACK_IMPORTED_MODULE_2__colorpickerdemo__["a" /* ColorPickerDemo */] }
            ])
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"]
        ]
    })
], ColorPickerDemoRoutingModule);

//# sourceMappingURL=colorpickerdemo-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/showcase/components/colorpicker/colorpickerdemo.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-section introduction\">\n    <div>\n        <span class=\"feature-title\">ColorPicker</span>\n        <span>ColorPicker is an input component to select a color.</span>\n    </div>\n</div>\n\n<div class=\"content-section implementation\">\n    <h3 class=\"first\">Inline</h3>\n    <p-colorPicker [(ngModel)]=\"color1\" inline=\"true\"></p-colorPicker>\n    \n    <p style=\"margin-top:.5em\">Selected Color: <span style=\"display:inline-block;width:32px;height:32px;vertical-align:middle\" [style.backgroundColor]=\"color1\"></span> {{color1}} </p>    \n    \n    <h3>Overlay</h3>\n    <p-colorPicker [(ngModel)]=\"color2\"></p-colorPicker>\n    \n    <p style=\"margin-top:.5em\">Selected Color: <span [ngStyle]=\"{'color':color2}\">{{color2}}</span></p> \n</div>\n\n<div class=\"content-section documentation\">\n    <p-tabView effect=\"fade\">\n        <p-tabPanel header =\"Documentation\">\n            <h3>Import</h3>\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nimport &#123;ColorPickerModule&#125; from 'primeng/primeng';\n</code>\n</pre>\n\n            <h3>Getting Started</h3>\n            <p>ColorPicker uses ngModel directive to bind a value.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-colorPicker [(ngModel)]=\"color\"&gt;&lt;/p-colorPicker&gt;\n</code>\n</pre>\n\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport class MyComponent &#123;\n\n    color: string;\n\n&#125;\n</code>\n</pre>\n\n            <h3>Formats</h3>\n            <p>Default color format to use in value binding is \"hex\" and other possible values are \"rgb\" and \"hsb\". \n                Example below has 3 colorpickers having default values with different formats.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-colorPicker [(ngModel)]=\"color1\"&gt;&lt;/p-colorPicker&gt;\n&lt;p-colorPicker [(ngModel)]=\"color2\" format=\"rgb\"&gt;&lt;/p-colorPicker&gt;\n&lt;p-colorPicker [(ngModel)]=\"color3\" format=\"hsb\"&gt;&lt;/p-colorPicker&gt;\n</code>\n</pre>\n\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport class MyComponent &#123;\n\n    color1: string;\n    \n    color2: any = &#123;\n        r: 100, g: 130, b: 150\n    &#125;;\n    \n    color3: any = &#123;\n        h: 100, s: 50, b: 50\n    &#125;;\n\n&#125;\n</code>\n</pre>\n\n            <h3>Overlay and Inline</h3>\n            <p>ColorPicker can be displayed as inline or as an overlay (default) using the \"inline\" property.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-colorPicker [(ngModel)]=\"color1\" &gt;&lt;/p-colorPicker&gt;\n&lt;p-colorPicker [(ngModel)]=\"color2\" inline=\"true\"&gt;&lt;/p-colorPicker&gt;\n</code>\n</pre>\n\n            <h3>Model Driven Forms</h3>\n            <p>Dropdown can be used in a model driven form as well.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-colorPicker formControlName=\"color\"&gt;&lt;/p-dropdown&gt;\n</code>\n</pre>\n            \n    \n            <h3>Properties</h3>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                        <tr>\n                            <th>Name</th>\n                            <th>Type</th>\n                            <th>Default</th>\n                            <th>Description</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>style</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Inline style of the component.</td>\n                        </tr>\n                        <tr>\n                            <td>styleClass</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Style class of the component.</td>\n                        </tr>\n                        <tr>\n                            <td>inline</td>\n                            <td>boolean</td>\n                            <td>false</td>\n                            <td>Whether to display as an overlay or not.</td>\n                        </tr>\n                        <tr>\n                            <td>format</td>\n                            <td>string</td>\n                            <td>hex</td>\n                            <td>Format to use in value binding, supported formats are \"hex\", \"rgb\" and \"hsb\".</td>\n                        </tr>\n                        <tr>\n                            <td>appendTo</td>\n                            <td>any</td>\n                            <td>null</td>\n                            <td>Target element to attach the overlay, valid values are \"body\" or a local ng-template variable of another element.</td>\n                        </tr>\n                        <tr>\n                            <td>tabindex</td>\n                            <td>number</td>\n                            <td>null</td>\n                            <td>Index of the element in tabbing order.</td>\n                        </tr>\n                        <tr>\n                            <td>disabled</td>\n                            <td>boolean</td>\n                            <td>false</td>\n                            <td>When present, it specifies that the component should be disabled.</td>\n                        </tr>\n                        <tr>\n                            <td>inputId</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Identifier of the focus input to match a label defined for the dropdown.</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n\n        <h3>Events</h3>\n        <div class=\"doc-tablewrapper\">\n            <table class=\"doc-table\">\n                <thead>\n                <tr>\n                    <th>Name</th>\n                    <th>Parameters</th>\n                    <th>Description</th>\n                </tr>\n                </thead>\n                <tbody>\n                    <tr>\n                        <td>onChange</td>\n                        <td>event.originalEvent: Browser event<br />\n                            event.value: Selected color\n                        </td>\n                        <td>Callback to invoke when a color is selected.</td>\n                    </tr>\n                </tbody>\n            </table>\n        </div>\n\n        <h3>Styling</h3>\n        <p>Following is the list of structural style classes, for theming classes visit <a href=\"#\" [routerLink]=\"['/theming']\">theming page</a>.</p>\n        <div class=\"doc-tablewrapper\">\n            <table class=\"doc-table\">\n                <thead>\n                    <tr>\n                        <th>Name</th>\n                        <th>Element</th>\n                    </tr>\n                </thead>\n                <tbody>\n                    <tr>\n                        <td>ui-colorpicker</td>\n                        <td>Container element.</td>\n                    </tr>\n                    <tr>\n                        <td>ui-colorpicker-overlay</td>\n                        <td>Container element in overlay mode.</td>\n                    </tr>\n                    <tr>\n                        <td>ui-colorpicker-preview </td>\n                        <td>Preview input in overlay mode.</td>\n                    </tr>\n                    <tr>\n                        <td>ui-colorpicker-panel</td>\n                        <td>Panel element of the colorpicker.</td>\n                    </tr>\n                    <tr>\n                        <td>ui-colorpicker-content</td>\n                        <td>Wrapper that contains color and hue sections.</td>\n                    </tr>\n                    <tr>\n                        <td>ui-colorpicker-color-selector</td>\n                        <td>Color selector container.</td>\n                    </tr>\n                    <tr>\n                        <td>ui-colorpicker-color</td>\n                        <td>Color element.</td>\n                    </tr>\n                    <tr>\n                        <td>ui-colorpicker-color-handle</td>\n                        <td>Handle of the color element.</td>\n                    </tr>\n                    <tr>\n                        <td>ui-colorpicker-hue</td>\n                        <td>Hue slider.</td>\n                    </tr>\n                    <tr>\n                        <td>ui-colorpicker-hue-handle</td>\n                        <td>Handle of the hue slider.</td>\n                    </tr>\n                </tbody>\n            </table>\n        </div>\n\n        <h3>Dependencies</h3>\n        <p>None.</p>\n\n        </p-tabPanel>\n\n        <p-tabPanel header=\"Source\">\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/colorpicker\" class=\"btn-viewsource\" target=\"_blank\">\n                <i class=\"fa fa-github\"></i>\n                <span>View on GitHub</span>\n            </a>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;h3 class=\"first\"&gt;Inline&lt;/h3&gt;\n&lt;p-colorPicker [(ngModel)]=\"color1\" inline=\"true\"&gt;&lt;/p-colorPicker&gt;\n\n&lt;p style=\"margin-top:.5em\"&gt;Selected Color: &lt;span style=\"display:inline-block;width:32px;height:32px;vertical-align:middle\" [style.backgroundColor]=\"color1\"&gt;&lt;/span&gt; &#123;&#123;color1&#125;&#125; &lt;/p&gt;    \n\n&lt;h3&gt;Overlay&lt;/h3&gt;\n&lt;p-colorPicker [(ngModel)]=\"color2\"&gt;&lt;/p-colorPicker&gt;\n\n&lt;p style=\"margin-top:.5em\"&gt;Selected Color: &lt;span [ngStyle]=\"&#123;'color':color2&#125;\"&gt;&#123;&#123;color2&#125;&#125;&lt;/span&gt;&lt;/p&gt; \n</code>\n</pre>\n\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport class ColorPickerDemo &#123;\n\n    color1: string;\n    \n    color2: string = '#1976D2';\n&#125;\n</code>\n</pre>\n        </p-tabPanel>\n    </p-tabView>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/showcase/components/colorpicker/colorpickerdemo.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorPickerDemoModule", function() { return ColorPickerDemoModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__colorpickerdemo__ = __webpack_require__("../../../../../src/app/showcase/components/colorpicker/colorpickerdemo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__colorpickerdemo_routing_module__ = __webpack_require__("../../../../../src/app/showcase/components/colorpicker/colorpickerdemo-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__ = __webpack_require__("../../../../primeng/primeng.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_primeng_primeng__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








let ColorPickerDemoModule = class ColorPickerDemoModule {
};
ColorPickerDemoModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_4__colorpickerdemo_routing_module__["a" /* ColorPickerDemoRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__["ColorPickerModule"],
            __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__["TabViewModule"],
            __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__["CodeHighlighterModule"]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__colorpickerdemo__["a" /* ColorPickerDemo */]
        ]
    })
], ColorPickerDemoModule);

//# sourceMappingURL=colorpickerdemo.module.js.map

/***/ }),

/***/ "../../../../../src/app/showcase/components/colorpicker/colorpickerdemo.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ColorPickerDemo; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

let ColorPickerDemo = class ColorPickerDemo {
    constructor() {
        this.color2 = '#1976D2';
    }
};
ColorPickerDemo = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__("../../../../../src/app/showcase/components/colorpicker/colorpickerdemo.html")
    })
], ColorPickerDemo);

//# sourceMappingURL=colorpickerdemo.js.map

/***/ })

});
//# sourceMappingURL=colorpickerdemo.module.chunk.js.map