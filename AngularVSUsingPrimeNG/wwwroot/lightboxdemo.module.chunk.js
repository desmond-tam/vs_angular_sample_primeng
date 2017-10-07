webpackJsonp(["lightboxdemo.module"],{

/***/ "../../../../../src/app/showcase/components/lightbox/lightboxdemo-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LightboxDemoRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lightboxdemo__ = __webpack_require__("../../../../../src/app/showcase/components/lightbox/lightboxdemo.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let LightboxDemoRoutingModule = class LightboxDemoRoutingModule {
};
LightboxDemoRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"].forChild([
                { path: '', component: __WEBPACK_IMPORTED_MODULE_2__lightboxdemo__["a" /* LightboxDemo */] }
            ])
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"]
        ]
    })
], LightboxDemoRoutingModule);

//# sourceMappingURL=lightboxdemo-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/showcase/components/lightbox/lightboxdemo.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-section introduction\">\n    <div>\n        <span class=\"feature-title\">Lightbox</span>\n        <span>LightBox is a modal overlay component to display images, videos, inline html content and iframes.</span>\n    </div>\n</div>\n\n<div class=\"content-section implementation\">\n    <h3 class=\"first\">Basic</h3>\n    <p-lightbox [images]=\"images\"></p-lightbox>\n\n    <h3>Content</h3>\n    <p-lightbox type=\"content\">\n        <a class=\"group\" href=\"#\">\n            Watch Video\n        </a>\n        <iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/9bZkp7q19f0\" frameborder=\"0\" allowfullscreen></iframe>\n    </p-lightbox>\n</div>\n\n<div class=\"content-section documentation\">\n    <p-tabView effect=\"fade\">\n        <p-tabPanel header=\"Documentation\">\n            <h3>Import</h3>\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nimport &#123;LightboxModule&#125; from 'primeng/primeng';\n</code>\n</pre>\n\n            <h3>Getting Started</h3>\n            <p>Lightbox has two modes; <i>image</i> and <i>custom content</i> defined using type property. In image mode a collection of\n            images are required to display where an image object in the collection defines the source of the original image, thumbnail image and the title.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-lightbox [images]=\"images\"&gt;&lt;/p-lightbox&gt;\n</code>\n</pre>\n\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport class LightboxDemo &#123;\n\n    images: any[];\n\n    constructor() &#123;\n        this.images = [];\n        this.images.push(&#123;source:'assets/showcase/images/demo/sopranos/sopranos1.jpg', thumbnail: 'assets/showcase/images/demo/sopranos/sopranos1_small.jpg', title:'Sopranos 1'&#125;);\n        this.images.push(&#123;source:'assets/showcase/images/demo/sopranos/sopranos2.jpg', thumbnail: 'assets/showcase/images/demo/sopranos/sopranos2_small.jpg', title:'Sopranos 2'&#125;);\n        this.images.push(&#123;source:'assets/showcase/images/demo/sopranos/sopranos3.jpg', thumbnail: 'assets/showcase/images/demo/sopranos/sopranos3_small.jpg', title:'Sopranos 3'&#125;);\n        this.images.push(&#123;source:'assets/showcase/images/demo/sopranos/sopranos4.jpg', thumbnail: 'assets/showcase/images/demo/sopranos/sopranos4_small.jpg', title:'Sopranos 4'&#125;);\n    &#125;\n&#125;\n</code>\n</pre>\n            <p>Content mode is enabled by setting type property to \"content\", providing an anchor to open the lightbox and content to display inside lightbox.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-lightbox type=\"content\"&gt;\n    &lt;a class=\"group\" href=\"#\"&gt;\n        Watch Video\n    &lt;/a&gt;\n    &lt;iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/9bZkp7q19f0\" frameborder=\"0\" allowfullscreen&gt;&lt;/iframe&gt;\n&lt;/p-lightbox&gt;\n</code>\n</pre>\n\n            <h3>Effects</h3>\n            <p>The easing function to use between image transitions is \"ease-out\" by default and this can be customized using easing property. \n                See <a href=\"http://www.w3schools.com/cssref/css3_pr_transition-timing-function.asp\">here</a> for possible alternative values. Duration\n            of the effect can be changed using effectDuration option.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-lightbox [images]=\"images\" easing=\"ease-in\" effectDuration=\"1500ms\"&gt;&lt;/p-lightbox&gt;\n</code>\n</pre>\n\n            <h3>Properties</h3>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                        <tr>\n                            <th>Name</th>\n                            <th>Type</th>\n                            <th>Default</th>\n                            <th>Description</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>images</td>\n                            <td>array</td>\n                            <td>null</td>\n                            <td>An array of images to display.</td>\n                        </tr>\n                        <tr>\n                            <td>type</td>\n                            <td>string</td>\n                            <td>image</td>\n                            <td>Type of the lightbox, valid values are \"image\" and \"content\".</td>\n                        </tr>\n                        <tr>\n                            <td>style</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Inline style of the component.</td>\n                        </tr>\n                        <tr>\n                            <td>styleClass</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Style class of the component.</td>\n                        </tr>\n                        <tr>\n                            <td>easing</td>\n                            <td>string</td>\n                            <td>ease-out</td>\n                            <td>Easing to use for transition between images.</td>\n                        </tr>\n                        <tr>\n                            <td>effectDuration</td>\n                            <td>string</td>\n                            <td>500ms</td>\n                            <td>Duration of the transition between the images.</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n\n            <h3>Styling</h3>\n            <p>Following is the list of structural style classes, for theming classes visit <a href=\"#\" [routerLink]=\"['/theming']\">theming page</a>.</p>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                    <tr>\n                        <th>Name</th>\n                        <th>Element</th>\n                    </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>ui-lightbox</td>\n                            <td>Container element</td>\n                        </tr>\n                        <tr>\n                            <td>ui-lightbox-content</td>\n                            <td>Content element.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-lightbox-nav-right</td>\n                            <td>Element to navigate to next image.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-lightbox-nav-left</td>\n                            <td>Element to navigate to previous image.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-lightbox-caption</td>\n                            <td>Caption element.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-lightbox-caption-text</td>\n                            <td>Text of caption.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-lightbox-close</td>\n                            <td>Close icon.</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n\n            <h3>Dependencies</h3>\n            <p>None.</p>\n        </p-tabPanel>\n\n        <p-tabPanel header=\"Source\">\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/lightbox\" class=\"btn-viewsource\" target=\"_blank\">\n                <i class=\"fa fa-github\"></i>\n                <span>View on GitHub</span>\n            </a>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;h3 class=\"first\"&gt;Basic&lt;/h3&gt;\n&lt;p-lightbox [images]=\"images\"&gt;&lt;/p-lightbox&gt;\n\n&lt;h3&gt;Content&lt;/h3&gt;\n&lt;p-lightbox type=\"content\"&gt;\n    &lt;a class=\"group\" href=\"#\"&gt;\n        Watch Video\n    &lt;/a&gt;\n    &lt;iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/9bZkp7q19f0\" frameborder=\"0\" allowfullscreen&gt;&lt;/iframe&gt;\n&lt;/p-lightbox&gt;\n</code>\n</pre>\n\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport class LightboxDemo &#123;\n\n    images: any[];\n\n    constructor() &#123;\n        this.images = [];\n        this.images.push(&#123;source:'assets/showcase/images/demo/sopranos/sopranos1.jpg', thumbnail: 'assets/showcase/images/demo/sopranos/sopranos1_small.jpg', title:'Sopranos 1'&#125;);\n        this.images.push(&#123;source:'assets/showcase/images/demo/sopranos/sopranos2.jpg', thumbnail: 'assets/showcase/images/demo/sopranos/sopranos2_small.jpg', title:'Sopranos 2'&#125;);\n        this.images.push(&#123;source:'assets/showcase/images/demo/sopranos/sopranos3.jpg', thumbnail: 'assets/showcase/images/demo/sopranos/sopranos3_small.jpg', title:'Sopranos 3'&#125;);\n        this.images.push(&#123;source:'assets/showcase/images/demo/sopranos/sopranos4.jpg', thumbnail: 'assets/showcase/images/demo/sopranos/sopranos4_small.jpg', title:'Sopranos 4'&#125;);\n    &#125;\n&#125;\n</code>\n</pre>\n        </p-tabPanel>\n    </p-tabView>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/showcase/components/lightbox/lightboxdemo.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LightboxDemoModule", function() { return LightboxDemoModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lightboxdemo__ = __webpack_require__("../../../../../src/app/showcase/components/lightbox/lightboxdemo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lightboxdemo_routing_module__ = __webpack_require__("../../../../../src/app/showcase/components/lightbox/lightboxdemo-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__ = __webpack_require__("../../../../primeng/primeng.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_primeng_primeng__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







let LightboxDemoModule = class LightboxDemoModule {
};
LightboxDemoModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_3__lightboxdemo_routing_module__["a" /* LightboxDemoRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__["LightboxModule"],
            __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__["TabViewModule"],
            __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__["CodeHighlighterModule"]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__lightboxdemo__["a" /* LightboxDemo */]
        ]
    })
], LightboxDemoModule);

//# sourceMappingURL=lightboxdemo.module.js.map

/***/ }),

/***/ "../../../../../src/app/showcase/components/lightbox/lightboxdemo.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LightboxDemo; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

let LightboxDemo = class LightboxDemo {
    constructor() {
        this.images = [];
        this.images.push({ source: 'assets/showcase/images/demo/sopranos/sopranos1.jpg', thumbnail: 'assets/showcase/images/demo/sopranos/sopranos1_small.jpg', title: 'Sopranos 1' });
        this.images.push({ source: 'assets/showcase/images/demo/sopranos/sopranos2.jpg', thumbnail: 'assets/showcase/images/demo/sopranos/sopranos2_small.jpg', title: 'Sopranos 2' });
        this.images.push({ source: 'assets/showcase/images/demo/sopranos/sopranos3.jpg', thumbnail: 'assets/showcase/images/demo/sopranos/sopranos3_small.jpg', title: 'Sopranos 3' });
        this.images.push({ source: 'assets/showcase/images/demo/sopranos/sopranos4.jpg', thumbnail: 'assets/showcase/images/demo/sopranos/sopranos4_small.jpg', title: 'Sopranos 4' });
    }
};
LightboxDemo = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__("../../../../../src/app/showcase/components/lightbox/lightboxdemo.html")
    }),
    __metadata("design:paramtypes", [])
], LightboxDemo);

//# sourceMappingURL=lightboxdemo.js.map

/***/ })

});
//# sourceMappingURL=lightboxdemo.module.chunk.js.map