webpackJsonp(["editordemo.module"],{

/***/ "../../../../../src/app/showcase/components/editor/editordemo-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditorDemoRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__editordemo__ = __webpack_require__("../../../../../src/app/showcase/components/editor/editordemo.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let EditorDemoRoutingModule = class EditorDemoRoutingModule {
};
EditorDemoRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"].forChild([
                { path: '', component: __WEBPACK_IMPORTED_MODULE_2__editordemo__["a" /* EditorDemo */] }
            ])
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"]
        ]
    })
], EditorDemoRoutingModule);

//# sourceMappingURL=editordemo-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/showcase/components/editor/editordemo.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-section introduction\">\n    <div>\n        <span class=\"feature-title\">Editor</span>\n        <span>Editor is rich text editor component based on Quill.</span>\n    </div>\n</div>\n\n<div class=\"content-section implementation\">\n    <h3 class=\"first\">Default</h3>\n    <p-editor [(ngModel)]=\"text1\" [style]=\"&#123;'height':'320px'&#125;\"></p-editor>\n    <p>Value: {{text1||'empty'}}</p>\n    \n    <button pButton type=\"button\" label=\"Clear\" icon=\"fa-close\" (click)=\"text1=null\"></button>\n    \n    <hr style=\"border-top:0px;border-color:#dde3e6\">\n    \n    <h3>Custom Toolbar</h3>\n    <p-editor [(ngModel)]=\"text2\" [style]=\"&#123;'height':'320px'&#125;\">\n        <p-header>\n            <span class=\"ql-formats\">\n                <button class=\"ql-bold\" aria-label=\"Bold\"></button>\n                <button class=\"ql-italic\" aria-label=\"Italic\"></button>\n                <button class=\"ql-underline\" aria-label=\"Underline\"></button>\n            </span>\n        </p-header>\n    </p-editor>\n    <p>Value: {{text2||'empty'}}</p>\n    \n    <button pButton type=\"button\" label=\"Clear\" icon=\"fa-close\" (click)=\"text2=null\"></button>\n</div>\n\n<div class=\"content-section documentation\">\n    <p-tabView effect=\"fade\">\n        <p-tabPanel header=\"Documentation\">\n            <h3>Import</h3>\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nimport &#123;EditorModule&#125; from 'primeng/primeng';\n</code>\n</pre>\n\n            <h3>Getting Started</h3>\n            <p>Two-way value binding is defined with ngModel.</p>\n            \n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-editor [(ngModel)]=\"text\" [style]=\"&#123;'height':'320px'&#125;\"&gt;&lt;/p-editor&gt;\n</code>\n</pre>\n\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport class EditorDemo &#123;\n    \n    text: string;\n        \n&#125;\n</code>\n</pre>\n\n            <h3>Model Driven Forms</h3>\n            <p>Editor can be used in a model driven form as well.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-editor formControlName=\"description\" [style]=\"&#123;'height':'320px'&#125;\"&gt;&lt;/p-editor&gt;\n</code>\n</pre>\n\n            <h3>Toolbar</h3>\n            <p>Editor provides a default toolbar with common options, to customize it define your elements inside the header element. Refer to <a href=\"http://quilljs.com/docs/modules/toolbar/\">Quill documentation</a> for available controls.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-editor [(ngModel)]=\"text2\" [style]=\"&#123;'height':'320px'&#125;\"&gt;\n    &lt;p-header&gt;\n        &lt;span class=\"ql-format-group\"&gt;\n            &lt;span title=\"Bold\" class=\"ql-format-button ql-bold\"&gt;&lt;/span&gt;\n            &lt;span class=\"ql-format-separator\"&gt;&lt;/span&gt;\n            &lt;span title=\"Italic\" class=\"ql-format-button ql-italic\"&gt;&lt;/span&gt;\n            &lt;span class=\"ql-format-separator\"&gt;&lt;/span&gt;\n            &lt;span title=\"Underline\" class=\"ql-format-button ql-underline\"&gt;&lt;/span&gt;\n            &lt;span class=\"ql-format-separator\"&gt;&lt;/span&gt;\n            &lt;span title=\"Strikethrough\" class=\"ql-format-button ql-strike\"&gt;&lt;/span&gt;\n        &lt;/span&gt;\n    &lt;/p-header&gt;\n&lt;/p-editor&gt;\n</code>\n</pre>\n\n            <h3>Properties</h3>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                        <tr>\n                            <th>Name</th>\n                            <th>Type</th>\n                            <th>Default</th>\n                            <th>Description</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>style</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Inline style of the container.</td>\n                        </tr>\n                        <tr>\n                            <td>styleClass</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Style class of the container.</td>\n                        </tr>\n                        <tr>\n                            <td>placeholder</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Placeholder text to show when editor is empty.</td>\n                        </tr>\n                        <tr>\n                            <td>readonly</td>\n                            <td>boolean</td>\n                            <td>false</td>\n                            <td>Whether to instantiate the editor to read-only mode.</td>\n                        </tr>\n                        <tr>\n                            <td>formats</td>\n                            <td>string[]</td>\n                            <td>null</td>\n                            <td>Whitelist of formats to display, see <a href=\"http://quilljs.com/docs/formats/\">here</a> for available options.</td>\n                        </tr>\n                        \n                    </tbody>\n                </table>\n            </div>\n            \n            <h3>Events</h3>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                        <tr>\n                            <th>Name</th>\n                            <th>Parameters</th>\n                            <th>Description</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>onTextChange</td>\n                            <td>event.delta: Representation of the change.<br>\n                                event.source: Source of change. Will be either \"user\" or \"api\".<br>\n                                event.htmlValue: Current value as html.<br>\n                                event.textValue: Current value as text.<br></td>\n                            <td>Callback to invoke when text of editor changes.</td>\n                        </tr>\n                        <tr>\n                            <td>onSelectionChange</td>\n                            <td>event.range: Object with index and length keys indicating where the selection exists.<br>\n                                event.oldRange: Object with index and length keys indicating where the previous selection was..<br>\n                                event.source: Source of change. Will be either \"user\" or \"api\".</td>\n                            <td>Callback to invoke when selected text of editor changes.</td>\n                        </tr>\n                        <tr>\n                            <td>onInit</td>\n                            <td>event.editor: Quill editor instance.<br>\n                                event.oldRange: Object with index and length keys indicating where the previous selection was..<br>\n                                event.source: Source of change. Will be either \"user\" or \"api\".</td>\n                            <td>Callback to invoke after editor is initialized.</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n            \n            <p>Refer to <a href=\"http://beta.quilljs.com/docs/api/#events\">Quill documentation</a> for more information.</p>\n\n            <h3>Methods</h3>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                        <tr>\n                            <th>Name</th>\n                            <th>Parameters</th>\n                            <th>Description</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>getQuill</td>\n                            <td>-</td>\n                            <td>Returns the underlying quill instance.</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n\n            <h3>Styling</h3>\n            <p>Following is the list of structural style classes, for theming classes visit <a href=\"#\" [routerLink]=\"['/theming']\">theming page</a>.</p>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                        <tr>\n                            <th>Name</th>\n                            <th>Element</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>ui-editor-container</td>\n                            <td>Container element</td>\n                        </tr>\n                        <tr>\n                            <td>ui-editor-toolbar</td>\n                            <td>Toolbar of the editor</td>\n                        </tr>\n                        <tr>\n                            <td>ui-editor-content</td>\n                            <td>Editable area</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n\n            <h3>Dependencies</h3>\n            <p><a href=\"http://quilljs.com\">Quill</a> Editor 1.0.</p>\n            <p>Resources of quill needs to be added to your application. Example setup with CLI is as follows;</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\nnpm install quill --save\n</code>\n</pre>\n            <p>Add Quill to scripts in angular-cli.json</p>  \n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n\"scripts\": [... \"../node_modules/quill/dist/quill.js\"],\n</code>\n</pre>\n            <p>Add Quill css to styles in angular-cli.json</p>  \n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n\"styles\": [ ... \"../node_modules/quill/dist/quill.core.css\", \"../node_modules/quill/dist/quill.snow.css\"],\n</code> \n</pre>        \n\n        </p-tabPanel>\n        <p-tabPanel header=\"Source\">\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/editor\" class=\"btn-viewsource\" target=\"_blank\">\n                <i class=\"fa fa-github\"></i>\n                <span>View on GitHub</span>\n            </a>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;h3 class=\"first\"&gt;Default&lt;/h3&gt;\n&lt;p-editor [(ngModel)]=\"text1\" [style]=\"&#123;'height':'320px'&#125;\"&gt;&lt;/p-editor&gt;\n&lt;p&gt;Value: &#123;&#123;text1||'empty'&#125;&#125;&lt;/p&gt;\n\n&lt;button pButton type=\"button\" label=\"Clear\" icon=\"fa-close\" (click)=\"text1=null\"&gt;&lt;/button&gt;\n\n&lt;hr style=\"border-top:0px;border-color:#dde3e6\"&gt;\n\n&lt;h3&gt;Custom Toolbar&lt;/h3&gt;\n&lt;p-editor [(ngModel)]=\"text2\" [style]=\"&#123;'height':'320px'&#125;\"&gt;\n    &lt;p-header&gt;\n        &lt;span class=\"ql-formats\"&gt;\n            &lt;button class=\"ql-bold\" aria-label=\"Bold\"&gt;&lt;/button&gt;\n            &lt;button class=\"ql-italic\" aria-label=\"Italic\"&gt;&lt;/button&gt;\n            &lt;button class=\"ql-underline\" aria-label=\"Underline\"&gt;&lt;/button&gt;\n        &lt;/span&gt;\n    &lt;/p-header&gt;\n&lt;/p-editor&gt;\n&lt;p&gt;Value: &#123;&#123;text2||'empty'&#125;&#125;&lt;/p&gt;\n\n&lt;button pButton type=\"button\" label=\"Clear\" icon=\"fa-close\" (click)=\"text2=null\"&gt;&lt;/button&gt;\n</code>\n</pre>\n\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nimport &#123;Component&#125; from '@angular/core';\n\n@Component(&#123;\n    templateUrl: './editordemo.html'\n&#125;)\nexport class EditorDemo &#123;\n\n    text1: string = '&lt;div&gt;Hello World!&lt;/div&gt;&lt;div&gt;PrimeNG &lt;b&gt;Editor&lt;/b&gt; Rocks&lt;/div&gt;&lt;div&gt;&lt;br&gt;&lt;/div&gt;';\n    \n    text2: string;\n&#125;\n</code>\n</pre>\n        </p-tabPanel>\n    </p-tabView>\n</div>"

/***/ }),

/***/ "../../../../../src/app/showcase/components/editor/editordemo.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditorDemoModule", function() { return EditorDemoModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__editordemo__ = __webpack_require__("../../../../../src/app/showcase/components/editor/editordemo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__editordemo_routing_module__ = __webpack_require__("../../../../../src/app/showcase/components/editor/editordemo-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__ = __webpack_require__("../../../../primeng/primeng.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_primeng_primeng__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









let EditorDemoModule = class EditorDemoModule {
};
EditorDemoModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_4__editordemo_routing_module__["a" /* EditorDemoRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__["EditorModule"],
            __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__["ButtonModule"],
            __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__["TabViewModule"],
            __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__["CodeHighlighterModule"]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__editordemo__["a" /* EditorDemo */]
        ]
    })
], EditorDemoModule);

//# sourceMappingURL=editordemo.module.js.map

/***/ }),

/***/ "../../../../../src/app/showcase/components/editor/editordemo.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditorDemo; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

let EditorDemo = class EditorDemo {
    constructor() {
        this.text1 = '<div>Hello World!</div><div>PrimeNG <b>Editor</b> Rocks</div><div><br></div>';
    }
};
EditorDemo = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__("../../../../../src/app/showcase/components/editor/editordemo.html")
    })
], EditorDemo);

//# sourceMappingURL=editordemo.js.map

/***/ })

});
//# sourceMappingURL=editordemo.module.chunk.js.map