webpackJsonp(["stepsdemo.module"],{

/***/ "../../../../../src/app/showcase/components/steps/stepsdemo-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StepsDemoRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__stepsdemo__ = __webpack_require__("../../../../../src/app/showcase/components/steps/stepsdemo.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let StepsDemoRoutingModule = class StepsDemoRoutingModule {
};
StepsDemoRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"].forChild([
                { path: '', component: __WEBPACK_IMPORTED_MODULE_2__stepsdemo__["a" /* StepsDemo */] }
            ])
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"]
        ]
    })
], StepsDemoRoutingModule);

//# sourceMappingURL=stepsdemo-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/showcase/components/steps/stepsdemo.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-section introduction\">\n    <div>\n        <span class=\"feature-title\">Steps</span>\n        <span>Steps components is an indicator for the steps in a workflow. Layout of steps component is optimized for responsive design.</span>\n    </div>\n</div>\n\n<div class=\"content-section implementation\">\n    <p-growl [value]=\"msgs\"></p-growl>\n    \n    <h3 class=\"first\">Basic</h3>\n    <p-steps [model]=\"items\"></p-steps>\n    \n    <h3>Clickable</h3>\n    <p-steps [model]=\"items\" [(activeIndex)]=\"activeIndex\" [readonly]=\"false\"></p-steps>\n    \n    <h3>Custom Style</h3>\n    <p-steps [model]=\"items\" styleClass=\"steps-custom\"></p-steps>\n</div>\n\n<div class=\"content-section documentation\">\n    <p-tabView effect=\"fade\">\n        <p-tabPanel header=\"Documentation\">\n            <h3>Import</h3>\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nimport &#123;StepsModule,MenuItem&#125; from 'primeng/primeng';\n</code>\n</pre>\n\n            <h3>MenuModel API</h3>\n            <p>Steps uses the common menumodel api to define its items, visit <a [routerLink]=\"['/menumodel']\">MenuModel API</a> for details.</p>\n\n            <h3>Getting Started</h3>\n            <p>Steps requires a collection of menuitems as its model.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-steps [model]=\"items\"&gt;&lt;/p-steps&gt;\n</code>\n</pre>\n\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport class MenuDemo &#123;\n    \n    items: MenuItem[];\n\n    ngOnInit() &#123;\n        this.items = [\n            &#123;label: 'Step 1'&#125;,\n            &#123;label: 'Step 2'&#125;,\n            &#123;label: 'Step 3'&#125;\n        ];\n    &#125;\n&#125;\n</code>\n</pre>\n\n            <h3>Readonly</h3>\n            <p>Items are readonly by default, if you'd like to make them interactive then disable readonly.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-steps [model]=\"items\" [readonly]=\"false\"&gt;&lt;/p-steps&gt;\n</code>\n</pre>\n       \n            <h3>Properties</h3>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                    <tr>\n                        <th>Name</th>\n                        <th>Type</th>\n                        <th>Default</th>\n                        <th>Description</th>\n                    </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>model</td>\n                            <td>array</td>\n                            <td>null</td>\n                            <td>An array of menuitems.</td>\n                        </tr>\n                        <tr>\n                            <td>activeIndex</td>\n                            <td>number</td>\n                            <td>0</td>\n                            <td>Index of the active item.</td>\n                        </tr>\n                        <tr>\n                            <td>readonly</td>\n                            <td>boolean</td>\n                            <td>true</td>\n                            <td>Whether the items are clickable or not.</td>\n                        </tr>\n                        <tr>\n                            <td>style</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Inline style of the component.</td>\n                        </tr>\n                        <tr>\n                            <td>styleClass</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Style class of the component.</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n            \n            <h3>Events</h3>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                        <tr>\n                            <th>Name</th>\n                            <th>Parameters</th>\n                            <th>Description</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>activeIndexChange</td>\n                            <td>index: Index of the active step item</td>\n                            <td>Callback to invoke when the new step is selected.</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n            \n            <h3>Styling</h3>\n            <p>Following is the list of structural style classes, for theming classes visit <a href=\"#\" [routerLink]=\"['/theming']\">theming page</a>.</p>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                        <tr>\n                            <th>Name</th>\n                            <th>Element</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>ui-steps</td>\n                            <td>Container element.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-steps-item</td>\n                            <td>Menuitem element.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-steps-number</td>\n                            <td>Number of menuitem.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-steps-title</td>\n                            <td>Label of menuitem.</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n\n            <h3>Dependencies</h3>\n            <p>None.</p>\n        </p-tabPanel>\n\n        <p-tabPanel header=\"Source\">\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/steps\" class=\"btn-viewsource\" target=\"_blank\">\n                <i class=\"fa fa-github\"></i>\n                <span>View on GitHub</span>\n            </a>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-growl [value]=\"msgs\"&gt;&lt;/p-growl&gt;\n\n&lt;h3 class=\"first\"&gt;Basic&lt;/h3&gt;\n&lt;p-steps [model]=\"items\"&gt;&lt;/p-steps&gt;\n\n&lt;h3&gt;Clickable&lt;/h3&gt;\n&lt;p-steps [model]=\"items\" [(activeIndex)]=\"activeIndex\" [readonly]=\"false\"&gt;&lt;/p-steps&gt;\n\n&lt;h3&gt;Custom Style&lt;/h3&gt;\n&lt;p-steps [model]=\"items\" styleClass=\"steps-custom\"&gt;&lt;/p-steps&gt;\n</code>\n</pre>\n\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\n@Component(&#123;\n    templateUrl: 'showcase/demo/steps/stepsdemo.html',\n    styles: [`\n        .ui-steps .ui-steps-item &#123;\n            width: 25%;\n        &#125;\n        \n        .ui-steps.steps-custom &#123;\n            margin-bottom: 30px;\n        &#125;\n         \n        .ui-steps.steps-custom .ui-steps-item .ui-menuitem-link &#123;\n            height: 10px;\n            padding: 0 1em;\n        &#125;\n         \n        .ui-steps.steps-custom .ui-steps-item .ui-steps-number &#123;\n            background-color: #0081c2;\n            color: #FFFFFF;\n            display: inline-block;\n            width: 36px;\n            border-radius: 50%;\n            margin-top: -14px;\n            margin-bottom: 10px;\n        &#125;\n        \n        .ui-steps.steps-custom .ui-steps-item .ui-steps-title &#123;\n            color: #555555;\n        &#125;\n    `],\n    encapsulation: ViewEncapsulation.None\n&#125;)\nexport class StepsDemo implements OnInit &#123;\n\n    items: MenuItem[];\n    \n    msgs: Message[] = [];\n    \n    activeIndex: number = 1;\n\n    ngOnInit() &#123;\n        this.items = [&#123;\n                label: 'Personal',\n                command: (event: any) => &#123;\n                    this.activeIndex = 0;\n                    this.msgs.length = 0;\n                    this.msgs.push(&#123;severity:'info', summary:'First Step', detail: event.item.label&#125;);\n                &#125;\n            &#125;,\n            &#123;\n                label: 'Seat',\n                command: (event: any) => &#123;\n                    this.activeIndex = 1;\n                    this.msgs.length = 0;\n                    this.msgs.push(&#123;severity:'info', summary:'Seat Selection', detail: event.item.label&#125;);\n                &#125;\n            &#125;,\n            &#123;\n                label: 'Payment',\n                command: (event: any) => &#123;\n                    this.activeIndex = 2;\n                    this.msgs.length = 0;\n                    this.msgs.push(&#123;severity:'info', summary:'Pay with CC', detail: event.item.label&#125;);\n                &#125;\n            &#125;,\n            &#123;\n                label: 'Confirmation',\n                command: (event: any) => &#123;\n                    this.activeIndex = 3;\n                    this.msgs.length = 0;\n                    this.msgs.push(&#123;severity:'info', summary:'Last Step', detail: event.item.label&#125;);\n                &#125;\n            &#125;\n        ];\n    &#125;\n&#125;\n</code>\n</pre>\n        </p-tabPanel>\n    </p-tabView>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/showcase/components/steps/stepsdemo.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StepsDemoModule", function() { return StepsDemoModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__stepsdemo__ = __webpack_require__("../../../../../src/app/showcase/components/steps/stepsdemo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__stepsdemo_routing_module__ = __webpack_require__("../../../../../src/app/showcase/components/steps/stepsdemo-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__ = __webpack_require__("../../../../primeng/primeng.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_primeng_primeng__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





let StepsDemoModule = class StepsDemoModule {
};
StepsDemoModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_3__stepsdemo_routing_module__["a" /* StepsDemoRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__["StepsModule"],
            __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__["GrowlModule"],
            __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__["TabViewModule"],
            __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__["CodeHighlighterModule"]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__stepsdemo__["a" /* StepsDemo */]
        ]
    })
], StepsDemoModule);

//# sourceMappingURL=stepsdemo.module.js.map

/***/ }),

/***/ "../../../../../src/app/showcase/components/steps/stepsdemo.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StepsDemo; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

let StepsDemo = class StepsDemo {
    constructor() {
        this.msgs = [];
        this.activeIndex = 1;
    }
    ngOnInit() {
        this.items = [{
                label: 'Personal',
                command: (event) => {
                    this.activeIndex = 0;
                    this.msgs.length = 0;
                    this.msgs.push({ severity: 'info', summary: 'First Step', detail: event.item.label });
                }
            },
            {
                label: 'Seat',
                command: (event) => {
                    this.activeIndex = 1;
                    this.msgs.length = 0;
                    this.msgs.push({ severity: 'info', summary: 'Seat Selection', detail: event.item.label });
                }
            },
            {
                label: 'Payment',
                command: (event) => {
                    this.activeIndex = 2;
                    this.msgs.length = 0;
                    this.msgs.push({ severity: 'info', summary: 'Pay with CC', detail: event.item.label });
                }
            },
            {
                label: 'Confirmation',
                command: (event) => {
                    this.activeIndex = 3;
                    this.msgs.length = 0;
                    this.msgs.push({ severity: 'info', summary: 'Last Step', detail: event.item.label });
                }
            }
        ];
    }
};
StepsDemo = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__("../../../../../src/app/showcase/components/steps/stepsdemo.html"),
        styles: [`
        .ui-steps .ui-steps-item {
            width: 25%;
        }
        
        .ui-steps.steps-custom {
            margin-bottom: 30px;
        }
         
        .ui-steps.steps-custom .ui-steps-item .ui-menuitem-link {
            height: 10px;
            padding: 0 1em;
            overflow: visible;
        }
         
        .ui-steps.steps-custom .ui-steps-item .ui-steps-number {
            background-color: #0081c2;
            color: #FFFFFF;
            display: inline-block;
            width: 36px;
            border-radius: 50%;
            margin-top: -14px;
            margin-bottom: 10px;
        }
        
        .ui-steps.steps-custom .ui-steps-item .ui-steps-title {
            color: #555555;
        }
    `],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
    })
], StepsDemo);

//# sourceMappingURL=stepsdemo.js.map

/***/ })

});
//# sourceMappingURL=stepsdemo.module.chunk.js.map