webpackJsonp(["galleriademo.module"],{

/***/ "../../../../../src/app/showcase/components/galleria/galleriademo-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GalleriaDemoRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__galleriademo__ = __webpack_require__("../../../../../src/app/showcase/components/galleria/galleriademo.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let GalleriaDemoRoutingModule = class GalleriaDemoRoutingModule {
};
GalleriaDemoRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"].forChild([
                { path: '', component: __WEBPACK_IMPORTED_MODULE_2__galleriademo__["a" /* GalleriaDemo */] }
            ])
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"]
        ]
    })
], GalleriaDemoRoutingModule);

//# sourceMappingURL=galleriademo-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/showcase/components/galleria/galleriademo.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-section introduction\">\n    <div>\n        <span class=\"feature-title\">Galleria</span>\n        <span>Galleria is a content gallery component.</span>\n    </div>\n</div>\n\n<div class=\"content-section implementation\">\n    <p-galleria [images]=\"images\" panelWidth=\"500\" panelHeight=\"313\"></p-galleria>\n</div>\n\n<div class=\"content-section documentation\">\n    <p-tabView effect=\"fade\">\n        <p-tabPanel header=\"Documentation\">\n            <h3>Import</h3>\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nimport &#123;GalleriaModule&#125; from 'primeng/primeng';\n</code>\n</pre>\n\n            <h3>Getting Started</h3>\n            <p>Galleria requires a set of images to display. Source attribute defines the path of the image whereas title and alt attributes are used in the caption section\n                to display summary and description about an image.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-galleria [images]=\"images\" panelWidth=\"500\" panelHeight=\"313\" [showCaption]=\"true\"&gt;&lt;/p-galleria&gt;\n</code>\n</pre>\n\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport class GalleriaDemo implements OnInit &#123;\n    \n    images: any[];\n    \n    ngOnInit() &#123;\n        this.images = [];\n        this.images.push(&#123;source:'assets/showcase/images/demo/galleria/galleria1.jpg', alt:'Description for Image 1', title:'Title 1'&#125;);\n        this.images.push(&#123;source:'assets/showcase/images/demo/galleria/galleria2.jpg', alt:'Description for Image 2', title:'Title 2'&#125;);\n        this.images.push(&#123;source:'assets/showcase/images/demo/galleria/galleria3.jpg', alt:'Description for Image 3', title:'Title 3'&#125;);\n        this.images.push(&#123;source:'assets/showcase/images/demo/galleria/galleria4.jpg', alt:'Description for Image 4', title:'Title 4'&#125;);\n        this.images.push(&#123;source:'assets/showcase/images/demo/galleria/galleria5.jpg', alt:'Description for Image 5', title:'Title 5'&#125;);\n        this.images.push(&#123;source:'assets/showcase/images/demo/galleria/galleria6.jpg', alt:'Description for Image 6', title:'Title 6'&#125;);\n        this.images.push(&#123;source:'assets/showcase/images/demo/galleria/galleria7.jpg', alt:'Description for Image 7', title:'Title 7'&#125;);\n        this.images.push(&#123;source:'assets/showcase/images/demo/galleria/galleria8.jpg', alt:'Description for Image 8', title:'Title 8'&#125;);\n        this.images.push(&#123;source:'assets/showcase/images/demo/galleria/galleria9.jpg', alt:'Description for Image 9', title:'Title 9'&#125;);\n        this.images.push(&#123;source:'assets/showcase/images/demo/galleria/galleria10.jpg', alt:'Description for Image 10', title:'Title 10'&#125;);\n        this.images.push(&#123;source:'assets/showcase/images/demo/galleria/galleria11.jpg', alt:'Description for Image 11', title:'Title 11'&#125;);\n        this.images.push(&#123;source:'assets/showcase/images/demo/galleria/galleria12.jpg', alt:'Description for Image 12', title:'Title 12'&#125;);\n    &#125;\n&#125;\n</code>\n</pre>\n\n            <h3>Properties</h3>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                        <tr>\n                            <th>Name</th>\n                            <th>Type</th>\n                            <th>Default</th>\n                            <th>Description</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>panelWidth</td>\n                            <td>number</td>\n                            <td>600</td>\n                            <td>Width of the content panel.</td>\n                        </tr>\n                        <tr>\n                            <td>panelHeight</td>\n                            <td>number</td>\n                            <td>400</td>\n                            <td>Height of the content panel.</td>\n                        </tr>\n                        <tr>\n                            <td>frameWidth</td>\n                            <td>number</td>\n                            <td>60</td>\n                            <td>Width of the filmstrip frames.</td>\n                        </tr>\n                        <tr>\n                            <td>frameHeight</td>\n                            <td>number</td>\n                            <td>40</td>\n                            <td>Height of the filmstrip frames.</td>\n                        </tr>\n                        <tr>\n                            <td>showFilmstrip</td>\n                            <td>boolean</td>\n                            <td>true</td>\n                            <td>Defines visibility of filmstrip.</td>\n                        </tr>\n                        <tr>\n                            <td>autoPlay</td>\n                            <td>boolean</td>\n                            <td>true</td>\n                            <td>Images are displayed with a slideshow in autoPlay mode.</td>\n                        </tr>\n                        <tr>\n                            <td>transitionInterval</td>\n                            <td>number</td>\n                            <td>4000</td>\n                            <td>Time in milliseconds between each slide in autoPlay mode.</td>\n                        </tr>\n                        <tr>\n                            <td>effect</td>\n                            <td>string</td>\n                            <td>fade</td>\n                            <td>Name of animation to use on transitions.</td>\n                        </tr>\n                        <tr>\n                            <td>effectDuration</td>\n                            <td>number</td>\n                            <td>250</td>\n                            <td>Duration of animation in milliseconds.</td>\n                        </tr>\n                        <tr>\n                            <td>showCaption</td>\n                            <td>boolean</td>\n                            <td>true</td>\n                            <td>Displays information retrieved from title and alt attributes of images in content caption.</td>\n                        </tr>\n                        <tr>\n                            <td>activeIndex</td>\n                            <td>number</td>\n                            <td>0</td>\n                            <td>Index of the current active image of galleria images.</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n\n            <h4>Events</h4>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                    <tr>\n                        <th>Name</th>\n                        <th>Parameters</th>\n                        <th>Description</th>\n                    </tr>\n                    </thead>\n                    <tbody>\n                    <tr>\n                        <td>onImageClicked</td>\n                        <td>\n                            event.image: Image Object<br>\n                            event.originalEvent: Click Object<br>\n                            event.index: Index of the image\n                        </td>\n                        <td>Callback to invoke when the displayed image is clicked.</td>\n                    </tr>\n                    </tbody>\n                </table>\n            </div>\n\n            <h3>Styling</h3>\n            <p>Following is the list of structural style classes, for theming classes visit <a href=\"#\" [routerLink]=\"['/theming']\">theming page</a>.</p>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                        <tr>\n                            <th>Name</th>\n                            <th>Element</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>ui-galleria</td>\n                            <td>Container element</td>\n                        </tr>\n                        <tr>\n                            <td>ui-galleria-panel-wrapper</td>\n                            <td>Parent of item containers.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-galleria-filmstrip-wrapper</td>\n                            <td>Container of filmstrip.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-galleria-filmstrip</td>\n                            <td>Filmstrip element</td>\n                        </tr>\n                        <tr>\n                            <td>ui-galleria-frame</td>\n                            <td>Frame element of thumbnail</td>\n                        </tr>\n                        <tr>\n                            <td>ui-galleria-nav-next</td>\n                            <td>Icon to navigate to next item</td>\n                        </tr>\n                        <tr>\n                            <td>ui-galleria-nav-prev</td>\n                            <td>Icon to navigate to previous item</td>\n                        </tr>\n                        <tr>\n                            <td>ui-galleria-caption</td>\n                            <td>Caption element that displays title and description of an item</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n\n            <h3>Dependencies</h3>\n            <p>None.</p>\n        </p-tabPanel>\n\n        <p-tabPanel header=\"Source\">\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/galleria\" class=\"btn-viewsource\" target=\"_blank\">\n                <i class=\"fa fa-github\"></i>\n                <span>View on GitHub</span>\n            </a>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-galleria [images]=\"images\" panelWidth=\"500\" panelHeight=\"313\" showCaption=\"true\"&gt;&lt;/p-galleria&gt;\n</code>\n</pre>\n\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport class GalleriaDemo implements OnInit &#123;\n    \n    images: any[];\n    \n    ngOnInit() &#123;\n        this.images = [];\n        this.images.push(&#123;source:'assets/showcase/images/demo/galleria/galleria1.jpg', alt:'Description for Image 1', title:'Title 1'&#125;);\n        this.images.push(&#123;source:'assets/showcase/images/demo/galleria/galleria2.jpg', alt:'Description for Image 2', title:'Title 2'&#125;);\n        this.images.push(&#123;source:'assets/showcase/images/demo/galleria/galleria3.jpg', alt:'Description for Image 3', title:'Title 3'&#125;);\n        this.images.push(&#123;source:'assets/showcase/images/demo/galleria/galleria4.jpg', alt:'Description for Image 4', title:'Title 4'&#125;);\n        this.images.push(&#123;source:'assets/showcase/images/demo/galleria/galleria5.jpg', alt:'Description for Image 5', title:'Title 5'&#125;);\n        this.images.push(&#123;source:'assets/showcase/images/demo/galleria/galleria6.jpg', alt:'Description for Image 6', title:'Title 6'&#125;);\n        this.images.push(&#123;source:'assets/showcase/images/demo/galleria/galleria7.jpg', alt:'Description for Image 7', title:'Title 7'&#125;);\n        this.images.push(&#123;source:'assets/showcase/images/demo/galleria/galleria8.jpg', alt:'Description for Image 8', title:'Title 8'&#125;);\n        this.images.push(&#123;source:'assets/showcase/images/demo/galleria/galleria9.jpg', alt:'Description for Image 9', title:'Title 9'&#125;);\n        this.images.push(&#123;source:'assets/showcase/images/demo/galleria/galleria10.jpg', alt:'Description for Image 10', title:'Title 10'&#125;);\n        this.images.push(&#123;source:'assets/showcase/images/demo/galleria/galleria11.jpg', alt:'Description for Image 11', title:'Title 11'&#125;);\n        this.images.push(&#123;source:'assets/showcase/images/demo/galleria/galleria12.jpg', alt:'Description for Image 12', title:'Title 12'&#125;);\n    &#125;\n&#125;\n</code>\n</pre>\n        </p-tabPanel>\n    </p-tabView>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/showcase/components/galleria/galleriademo.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleriaDemoModule", function() { return GalleriaDemoModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__galleriademo__ = __webpack_require__("../../../../../src/app/showcase/components/galleria/galleriademo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__galleriademo_routing_module__ = __webpack_require__("../../../../../src/app/showcase/components/galleria/galleriademo-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__ = __webpack_require__("../../../../primeng/primeng.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_primeng_primeng__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







let GalleriaDemoModule = class GalleriaDemoModule {
};
GalleriaDemoModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_3__galleriademo_routing_module__["a" /* GalleriaDemoRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__["GalleriaModule"],
            __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__["TabViewModule"],
            __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__["CodeHighlighterModule"]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__galleriademo__["a" /* GalleriaDemo */]
        ]
    })
], GalleriaDemoModule);

//# sourceMappingURL=galleriademo.module.js.map

/***/ }),

/***/ "../../../../../src/app/showcase/components/galleria/galleriademo.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GalleriaDemo; });
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

let GalleriaDemo = class GalleriaDemo {
    constructor() {
        this.images = [];
        this.images.push({ source: 'assets/showcase/images/demo/galleria/galleria1.jpg', alt: 'Description for Image 1', title: 'Title 1' });
        this.images.push({ source: 'assets/showcase/images/demo/galleria/galleria2.jpg', alt: 'Description for Image 2', title: 'Title 2' });
        this.images.push({ source: 'assets/showcase/images/demo/galleria/galleria3.jpg', alt: 'Description for Image 3', title: 'Title 3' });
        this.images.push({ source: 'assets/showcase/images/demo/galleria/galleria4.jpg', alt: 'Description for Image 4', title: 'Title 4' });
        this.images.push({ source: 'assets/showcase/images/demo/galleria/galleria5.jpg', alt: 'Description for Image 5', title: 'Title 5' });
        this.images.push({ source: 'assets/showcase/images/demo/galleria/galleria6.jpg', alt: 'Description for Image 6', title: 'Title 6' });
        this.images.push({ source: 'assets/showcase/images/demo/galleria/galleria7.jpg', alt: 'Description for Image 7', title: 'Title 7' });
        this.images.push({ source: 'assets/showcase/images/demo/galleria/galleria8.jpg', alt: 'Description for Image 8', title: 'Title 8' });
        this.images.push({ source: 'assets/showcase/images/demo/galleria/galleria9.jpg', alt: 'Description for Image 9', title: 'Title 9' });
        this.images.push({ source: 'assets/showcase/images/demo/galleria/galleria10.jpg', alt: 'Description for Image 10', title: 'Title 10' });
        this.images.push({ source: 'assets/showcase/images/demo/galleria/galleria11.jpg', alt: 'Description for Image 11', title: 'Title 11' });
        this.images.push({ source: 'assets/showcase/images/demo/galleria/galleria12.jpg', alt: 'Description for Image 12', title: 'Title 12' });
    }
};
GalleriaDemo = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__("../../../../../src/app/showcase/components/galleria/galleriademo.html")
    }),
    __metadata("design:paramtypes", [])
], GalleriaDemo);

//# sourceMappingURL=galleriademo.js.map

/***/ })

});
//# sourceMappingURL=galleriademo.module.chunk.js.map