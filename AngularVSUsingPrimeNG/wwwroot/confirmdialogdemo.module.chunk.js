webpackJsonp(["confirmdialogdemo.module"],{

/***/ "../../../../../src/app/showcase/components/confirmdialog/confirmdialogdemo-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfirmDialogDemoRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__confirmdialogdemo__ = __webpack_require__("../../../../../src/app/showcase/components/confirmdialog/confirmdialogdemo.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let ConfirmDialogDemoRoutingModule = class ConfirmDialogDemoRoutingModule {
};
ConfirmDialogDemoRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"].forChild([
                { path: '', component: __WEBPACK_IMPORTED_MODULE_2__confirmdialogdemo__["a" /* ConfirmDialogDemo */] }
            ])
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"]
        ]
    })
], ConfirmDialogDemoRoutingModule);

//# sourceMappingURL=confirmdialogdemo-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/showcase/components/confirmdialog/confirmdialogdemo.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-section introduction\">\n    <div>\n        <span class=\"feature-title\">ConfirmDialog</span>\n        <span>ConfirmDialog is backed by a service utilizing Observables to display confirmation windows\n            easily that can be shared by multiple actions on the same component.</span>\n    </div>\n</div>\n\n<div class=\"content-section implementation\">\n    <p-growl [value]=\"msgs\"></p-growl>\n    \n    <p-confirmDialog></p-confirmDialog>\n\n    <button type=\"button\" (click)=\"confirm1()\" pButton icon=\"fa-check\" label=\"Confirm\"></button>\n    \n    <button type=\"button\" (click)=\"confirm2()\" pButton icon=\"fa-trash\" label=\"Delete\"></button>\n</div>\n\n<div class=\"content-section documentation\">\n    <p-tabView effect=\"fade\">\n        <p-tabPanel header=\"Documentation\">\n            <h3>Import</h3>\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nimport &#123;ConfirmDialogModule,ConfirmationService&#125; from 'primeng/primeng';\n</code>\n</pre>\n\n            <h3>Getting Started</h3>\n            <p>ConfirmDialog is defined using p-confirmDialog tag and an instance of ConfirmationService is required to display it by \n                calling confirm method.</p>\n                    \n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-confirmDialog header=\"Confirmation\" icon=\"fa fa-question-circle\" width=\"425\"&gt;&lt;/p-confirmDialog&gt;\n\n&lt;button type=\"text\" (click)=\"confirm()\" pButton icon=\"fa-check\" label=\"Confirm\"&gt;&lt;/button&gt;\n</code>\n</pre>\n\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport class ConfirmDialogDemo &#123; \n           \n    constructor(private confirmationService: ConfirmationService) &#123;&#125;\n\n    confirm() &#123;\n        this.confirmationService.confirm(&#123;\n            message: 'Are you sure that you want to perform this action?',\n            accept: () => &#123;\n                //Actual logic to perform a confirmation\n            &#125;\n        &#125;);\n    &#125;\n&#125;\n</code>\n</pre>\n\n            <p>Confirm method takes a confirmation instance used to customize the dialog UI along with accept and reject actions.</p>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                        <tr>\n                            <th>Name</th>\n                            <th>Type</th>\n                            <th>Default</th>\n                            <th>Description</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>message</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Message of the confirmation.</td>\n                        </tr>\n                        <tr>\n                            <td>key</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Optional key to match the key of the confirm dialog, necessary to use when component tree has multiple confirm dialogs.</td>\n                        </tr>\n                        <tr>\n                            <td>header</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Header text of the dialog.</td>\n                        </tr>\n                        <tr>\n                            <td>icon</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Icon to display next to the message.</td>\n                        </tr>\n                        <tr>\n                            <td>accept</td>\n                            <td>Function</td>\n                            <td>null</td>\n                            <td>Callback to execute when action is confirmed.</td>\n                        </tr>\n                        <tr>\n                            <td>reject</td>\n                            <td>Function</td>\n                            <td>null</td>\n                            <td>Callback to execute when action is rejected.</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n            \n            <h3>Customization</h3>\n            <p>Properties of the dialog are defined in two ways, message, icon and header properties can either\n            be defined using confirm method or declaratively on p-confirmDialog ng-template. If these values are unlikely to change then\n            declarative approach would be useful, still properties defined in a ng-template can be overriden with confirm method call.</p>\n            \n            <p>In addition, buttons at footer section can be customized by passing your own UI, important note to make confirmation work with\n            a custom UI is defining a local ng-template variable for the dialog and assign accept()-reject() methods to your own buttons.</p>\n\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-confirmDialog header=\"Confirmation\" icon=\"fa fa-question-circle\" width=\"425\" #cd&gt;\n    &lt;p-footer&gt;\n        &lt;button type=\"button\" pButton icon=\"fa-close\" label=\"No\" (click)=\"cd.reject()\"&gt;&lt;/button&gt;\n        &lt;button type=\"button\" pButton icon=\"fa-check\" label=\"Yes\" (click)=\"cd.accept()\"&gt;&lt;/button&gt;\n    &lt;/p-footer&gt;\n&lt;/p-confirmDialog&gt;\n</code>\n</pre>\n\n            <h3>Properties</h3>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                        <tr>\n                            <th>Name</th>\n                            <th>Type</th>\n                            <th>Default</th>\n                            <th>Description</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                         <tr>\n                            <td>header</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Title text of the dialog.</td>\n                         </tr>\n                         <tr>\n                           <td>message</td>\n                           <td>string</td>\n                           <td>null</td>\n                           <td>Message of the confirmation.</td>\n                        </tr>\n                        <tr>\n                            <td>key</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Optional key to match the key of confirm object, necessary to use when component tree has multiple confirm dialogs.</td>\n                        </tr>\n                        <tr>\n                          <td>icon</td>\n                          <td>string</td>\n                          <td>null</td>\n                          <td>Icon to display next to message.</td>\n                        </tr>\n                        <tr>\n                          <td>acceptLabel</td>\n                          <td>string</td>\n                          <td>Yes</td>\n                          <td>Label of the accept button.</td>\n                        </tr>\n                        <tr>\n                          <td>acceptIcon</td>\n                          <td>string</td>\n                          <td>fa-check</td>\n                          <td>Icon of the accept button.</td>\n                        </tr>\n                        <tr>\n                          <td>acceptVisible</td>\n                          <td>boolean</td>\n                          <td>true</td>\n                          <td>Visibility of the accept button.</td>\n                        </tr>\n                        <tr>\n                          <td>rejectLabel</td>\n                          <td>string</td>\n                          <td>No</td>\n                          <td>Label of the reject button.</td>\n                        </tr>\n                        <tr>\n                          <td>rejectIcon</td>\n                          <td>string</td>\n                          <td>fa-close</td>\n                          <td>Icon of the reject button.</td>\n                        </tr>\n                        <tr>\n                          <td>rejectVisible</td>\n                          <td>boolean</td>\n                          <td>true</td>\n                          <td>Visibility of the reject button.</td>\n                        </tr>\n                        <tr>\n                            <td>width</td>\n                            <td>int</td>\n                            <td>300</td>\n                            <td>Width of the dialog.</td>\n                        </tr>\n                        <tr>\n                            <td>height</td>\n                            <td>int</td>\n                            <td>auto</td>\n                            <td>Height of the dialog.</td>\n                        </tr>\n                        <tr>\n                            <td>closeOnEscape</td>\n                            <td>boolean</td>\n                            <td>true</td>\n                            <td>Specifices if pressing escape key should hide the dialog.</td>\n                        </tr>\n                        <tr>\n                            <td>rtl</td>\n                            <td>boolean</td>\n                            <td>false</td>\n                            <td>When enabled dialog is displayed in RTL direction.</td>\n                        </tr>\n                        <tr>\n                            <td>closable</td>\n                            <td>boolean</td>\n                            <td>true</td>\n                            <td>Adds a close icon to the header to hide the dialog.</td>\n                        </tr>\n                        <tr>\n                            <td>responsive</td>\n                            <td>boolean</td>\n                            <td>true</td>\n                            <td>In responsive mode, dialog adjusts itself to screen width.</td>\n                        </tr>\n                        <tr>\n                            <td>appendTo</td>\n                            <td>any</td>\n                            <td>null</td>\n                            <td>Target element to attach the dialog, valid values are \"body\" or a local ng-template variable of another element.</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n\n            <h3>Styling</h3>\n            <p>Following is the list of structural style classes, for theming classes visit <a href=\"#\" [routerLink]=\"['/theming']\">theming page</a>.</p>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                        <tr>\n                            <th>Name</th>\n                            <th>Element</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>ui-dialog</td>\n                            <td>Container element</td>\n                        </tr>\n                        <tr>\n                            <td>ui-confirmdialog</td>\n                            <td>Container element</td>\n                        </tr>\n                        <tr>\n                            <td>ui-dialog-titlebar</td>\n                            <td>Container of header.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-dialog-title</td>\n                            <td>Header element.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-dialog-titlebar-icon</td>\n                            <td>Icon container inside header.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-dialog-titlebar-close</td>\n                            <td>Close icon element.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-dialog-content</td>\n                            <td>Content element.</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n\n            <h3>Dependencies</h3>\n            <p>ConfirmationService</p>\n        </p-tabPanel>\n\n        <p-tabPanel header=\"Source\">\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/confirmdialog\" class=\"btn-viewsource\" target=\"_blank\">\n                <i class=\"fa fa-github\"></i>\n                <span>View on GitHub</span>\n            </a>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-growl [value]=\"msgs\"&gt;&lt;/p-growl&gt;\n    \n&lt;p-confirmDialog&gt;&lt;/p-confirmDialog&gt;\n\n&lt;button type=\"button\" (click)=\"confirm1()\" pButton icon=\"fa-check\" label=\"Confirm\"&gt;&lt;/button&gt;\n\n&lt;button type=\"button\" (click)=\"confirm2()\" pButton icon=\"fa-trash\" label=\"Delete\"&gt;&lt;/button&gt;\n</code>\n</pre>\n\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\n@Component(&#123;\n    templateUrl: 'showcase/demo/confirmdialog/confirmdialogdemo.html',\n    providers: [ConfirmationService]\n&#125;)\nexport class ConfirmDialogDemo &#123;\n    \n    msgs: Message[] = [];\n    \n    constructor(private confirmationService: ConfirmationService) &#123;&#125;\n\n    confirm1() &#123;\n        this.confirmationService.confirm(&#123;\n            message: 'Are you sure that you want to proceed?',\n            header: 'Confirmation',\n            icon: 'fa fa-question-circle',\n            accept: () => &#123;\n                this.msgs = [&#123;severity:'info', summary:'Confirmed', detail:'You have accepted'&#125;];\n            &#125;,\n            reject: () => &#123;\n                this.msgs = [&#123;severity:'info', summary:'Rejected', detail:'You have rejected'&#125;];\n            &#125;\n        &#125;);\n    &#125;\n\n    confirm2() &#123;\n        this.confirmationService.confirm(&#123;\n            message: 'Do you want to delete this record?',\n            header: 'Delete Confirmation',\n            icon: 'fa fa-trash',\n            accept: () => &#123;\n                this.msgs = [&#123;severity:'info', summary:'Confirmed', detail:'Record deleted'&#125;];\n            &#125;,\n            reject: () => &#123;\n                this.msgs = [&#123;severity:'info', summary:'Rejected', detail:'You have rejected'&#125;];\n            &#125;\n        &#125;);\n    &#125;\n&#125;\n</code>\n</pre>\n        </p-tabPanel>\n    </p-tabView>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/showcase/components/confirmdialog/confirmdialogdemo.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmDialogDemoModule", function() { return ConfirmDialogDemoModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__confirmdialogdemo__ = __webpack_require__("../../../../../src/app/showcase/components/confirmdialog/confirmdialogdemo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__confirmdialogdemo_routing_module__ = __webpack_require__("../../../../../src/app/showcase/components/confirmdialog/confirmdialogdemo-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__ = __webpack_require__("../../../../primeng/primeng.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_primeng_primeng__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









let ConfirmDialogDemoModule = class ConfirmDialogDemoModule {
};
ConfirmDialogDemoModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_3__confirmdialogdemo_routing_module__["a" /* ConfirmDialogDemoRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__["ConfirmDialogModule"],
            __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__["ButtonModule"],
            __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__["GrowlModule"],
            __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__["TabViewModule"],
            __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__["CodeHighlighterModule"]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__confirmdialogdemo__["a" /* ConfirmDialogDemo */]
        ]
    })
], ConfirmDialogDemoModule);

//# sourceMappingURL=confirmdialogdemo.module.js.map

/***/ }),

/***/ "../../../../../src/app/showcase/components/confirmdialog/confirmdialogdemo.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfirmDialogDemo; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_primeng_primeng__ = __webpack_require__("../../../../primeng/primeng.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_primeng_primeng__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


let ConfirmDialogDemo = class ConfirmDialogDemo {
    constructor(confirmationService) {
        this.confirmationService = confirmationService;
        this.msgs = [];
    }
    confirm1() {
        this.confirmationService.confirm({
            message: 'Are you sure that you want to proceed?',
            header: 'Confirmation',
            icon: 'fa-question-circle',
            accept: () => {
                this.msgs = [{ severity: 'info', summary: 'Confirmed', detail: 'You have accepted' }];
            },
            reject: () => {
                this.msgs = [{ severity: 'info', summary: 'Rejected', detail: 'You have rejected' }];
            }
        });
    }
    confirm2() {
        this.confirmationService.confirm({
            message: 'Do you want to delete this record?',
            header: 'Delete Confirmation',
            icon: 'fa-trash',
            accept: () => {
                this.msgs = [{ severity: 'info', summary: 'Confirmed', detail: 'Record deleted' }];
            },
            reject: () => {
                this.msgs = [{ severity: 'info', summary: 'Rejected', detail: 'You have rejected' }];
            }
        });
    }
};
ConfirmDialogDemo = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__("../../../../../src/app/showcase/components/confirmdialog/confirmdialogdemo.html"),
        providers: [__WEBPACK_IMPORTED_MODULE_1_primeng_primeng__["ConfirmationService"]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_primeng_primeng__["ConfirmationService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_primeng_primeng__["ConfirmationService"]) === "function" && _a || Object])
], ConfirmDialogDemo);

var _a;
//# sourceMappingURL=confirmdialogdemo.js.map

/***/ })

});
//# sourceMappingURL=confirmdialogdemo.module.chunk.js.map