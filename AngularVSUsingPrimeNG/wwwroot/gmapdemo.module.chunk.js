webpackJsonp(["gmapdemo.module"],{

/***/ "../../../../../src/app/showcase/components/gmap/gmapdemo-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GMapDemoRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__gmapdemo__ = __webpack_require__("../../../../../src/app/showcase/components/gmap/gmapdemo.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let GMapDemoRoutingModule = class GMapDemoRoutingModule {
};
GMapDemoRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"].forChild([
                { path: '', component: __WEBPACK_IMPORTED_MODULE_2__gmapdemo__["a" /* GMapDemo */] }
            ])
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"]
        ]
    })
], GMapDemoRoutingModule);

//# sourceMappingURL=gmapdemo-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/showcase/components/gmap/gmapdemo.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-section introduction\">\n    <div>\n        <span class=\"feature-title\">GMap</span>\n        <span>GMap component provides integration with Google Maps API. This sample demontrates\n        various uses cases like binding, overlays and events. Click the map to add a new item.</span>\n    </div>\n</div>\n\n<div class=\"content-section implementation\">\n    <p-growl [value]=\"msgs\"></p-growl>\n    \n    <p-gmap #gmap [style]=\"&#123;'width':'100%','height':'320px'&#125;\" [options]=\"options\" [overlays]=\"overlays\" \n       (onMapClick)=\"handleMapClick($event)\" (onOverlayClick)=\"handleOverlayClick($event)\" (onOverlayDragEnd)=\"handleDragEnd($event)\"></p-gmap>\n    <button type=\"button\" pButton label=\"Clear\" icon=\"fa-close\" (click)=\"clear()\" style=\"margin-top:10px\"></button>\n    <button type=\"button\" pButton label=\"Zoom In\" icon=\"fa-search-plus\" (click)=\"zoomIn(gmap.getMap())\" style=\"margin-top:10px\"></button>\n    <button type=\"button\" pButton label=\"Zoom Out\" icon=\"fa-search-minus\" (click)=\"zoomOut(gmap.getMap())\" style=\"margin-top:10px\"></button>\n\n    <p-dialog showEffect=\"fade\" [(visible)]=\"dialogVisible\" header=\"New Location\" [width]=\"300\">\n        <div class=\"ui-g ui-fluid\" *ngIf=\"selectedPosition\">\n            <div class=\"ui-g-2\"><label for=\"title\">Label</label></div>\n            <div class=\"ui-g-10\"><input type=\"text\" pInputText id=\"title\" [(ngModel)]=\"markerTitle\"></div>\n            \n            <div class=\"ui-g-2\"><label for=\"lat\">Lat</label></div>\n            <div class=\"ui-g-10\"><input id=\"lat\" type=\"text\" readonly pInputText [ngModel]=\"selectedPosition.lat()\"></div>\n            \n            <div class=\"ui-g-2\"><label for=\"lng\">Lng</label></div>\n            <div class=\"ui-g-10\"><input id=\"lng\" type=\"text\" readonly pInputText [ngModel]=\"selectedPosition.lng()\"></div>\n            \n            <div class=\"ui-g-2\"><label for=\"drg\">Drag</label></div>\n            <div class=\"ui-g-10\"><p-checkbox [(ngModel)]=\"draggable\" binary=\"true\" [style]=\"{'margin-top':'.25em'}\"></p-checkbox></div>\n        </div>\n        <p-footer>\n            <div class=\"ui-dialog-buttonpane ui-helper-clearfix\">\n                <button type=\"button\" pButton label=\"Add Marker\" icon=\"fa-plus\" (click)=\"addMarker()\"></button>\n            </div>\n        </p-footer>\n    </p-dialog>\n</div>\n\n<div class=\"content-section documentation\">\n    <p-tabView effect=\"fade\">\n        <p-tabPanel header=\"Documentation\">\n            <h3>Import</h3>\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nimport &#123;GMapModule&#125; from 'primeng/primeng';\n</code>\n</pre>\n\n            <h3>Getting Started</h3>\n            <p>A map is initialized with options and dimensions. Refer to the google maps api for the list of available options.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-gmap [options]=\"options\" [style]=\"&#123;'width':'100%','height':'320px'&#125;\" &gt;&lt;/p-gmap&gt;\n</code>\n</pre>\n\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport class MyModel &#123;\n\n    options: any;\n    \n    overlays: any[];\n    \n    ngOnInit() &#123;\n        this.options = &#123;\n            center: &#123;lat: 36.890257, lng: 30.707417&#125;,\n            zoom: 12\n        &#125;;\n    &#125;\n\n&#125;\n</code>\n</pre>\n\n            <h3>Overlays</h3>\n            <p>GMap can display any type of overlay such as markers, polygons and circles. Overlay instances are bound using the overlays property array. Overlays are aware\n            of one-way binding so whenever the array changes, gmap updates itself.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-gmap [options]=\"options\" [overlays]=\"overlays\" [style]=\"&#123;'width':'100%','height':'320px'&#125;\" &gt;&lt;/p-gmap&gt;\n</code>\n</pre>\n\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport class MyModel &#123;\n\n    options: any;\n    \n    overlays: any[];\n    \n    ngOnInit() &#123;\n        this.options = &#123;\n            center: &#123;lat: 36.890257, lng: 30.707417&#125;,\n            zoom: 12\n        &#125;;\n        \n        this.overlays = [\n            new google.maps.Marker(&#123;position: &#123;lat: 36.879466, lng: 30.667648&#125;, title:\"Konyaalti\"&#125;),\n            new google.maps.Marker(&#123;position: &#123;lat: 36.883707, lng: 30.689216&#125;, title:\"Ataturk Park\"&#125;),\n            new google.maps.Marker(&#123;position: &#123;lat: 36.885233, lng: 30.702323&#125;, title:\"Oldtown\"&#125;),\n            new google.maps.Polygon(&#123;paths: [\n                &#123;lat: 36.9177, lng: 30.7854&#125;,&#123;lat: 36.8851, lng: 30.7802&#125;,&#123;lat: 36.8829, lng: 30.8111&#125;,&#123;lat: 36.9177, lng: 30.8159&#125;\n            ], strokeOpacity: 0.5, strokeWeight: 1,fillColor: '#1976D2', fillOpacity: 0.35\n            &#125;),\n            new google.maps.Circle(&#123;center: &#123;lat: 36.90707, lng: 30.56533&#125;, fillColor: '#1976D2', fillOpacity: 0.35, strokeWeight: 1, radius: 1500&#125;),\n            new google.maps.Polyline(&#123;path: [&#123;lat: 36.86149, lng: 30.63743&#125;,&#123;lat: 36.86341, lng: 30.72463&#125;], geodesic: true, strokeColor: '#FF0000', strokeOpacity: 0.5, strokeWeight: 2&#125;)\n        ];\n    &#125;\n&#125;\n</code>\n</pre>\n\n            <h3>Events</h3>\n            <p>GMap provides common callbacks to hook into events including map click, overlay click and overlay dragging.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-gmap [options]=\"options\" [overlays]=\"overlays\" [style]=\"&#123;'width':'100%','height':'320px'&#125;\"\n            (onMapClick)=\"handleMapClick($event)\" (onOverlayClick)=\"handleOverlayClick($event)\"&gt;&lt;/p-gmap&gt;\n</code>\n</pre>\n\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport class MyModel &#123;\n\n    options: any;\n    \n    overlays: any[];\n    \n    ngOnInit() &#123;\n        this.options = &#123;\n            center: &#123;lat: 36.890257, lng: 30.707417&#125;,\n            zoom: 12\n        &#125;;\n        \n        this.overlays = [\n            new google.maps.Marker(&#123;position: &#123;lat: 36.879466, lng: 30.667648&#125;, title:\"Konyaalti\"&#125;),\n            new google.maps.Marker(&#123;position: &#123;lat: 36.883707, lng: 30.689216&#125;, title:\"Ataturk Park\"&#125;),\n            new google.maps.Marker(&#123;position: &#123;lat: 36.885233, lng: 30.702323&#125;, title:\"Oldtown\"&#125;),\n            new google.maps.Polygon(&#123;paths: [\n                &#123;lat: 36.9177, lng: 30.7854&#125;,&#123;lat: 36.8851, lng: 30.7802&#125;,&#123;lat: 36.8829, lng: 30.8111&#125;,&#123;lat: 36.9177, lng: 30.8159&#125;\n            ], strokeOpacity: 0.5, strokeWeight: 1,fillColor: '#1976D2', fillOpacity: 0.35\n            &#125;),\n            new google.maps.Circle(&#123;center: &#123;lat: 36.90707, lng: 30.56533&#125;, fillColor: '#1976D2', fillOpacity: 0.35, strokeWeight: 1, radius: 1500&#125;),\n            new google.maps.Polyline(&#123;path: [&#123;lat: 36.86149, lng: 30.63743&#125;,&#123;lat: 36.86341, lng: 30.72463&#125;], geodesic: true, strokeColor: '#FF0000', strokeOpacity: 0.5, strokeWeight: 2&#125;)\n        ];\n    &#125;\n    \n    handleMapClick(event) &#123;\n        //event: MouseEvent of Google Maps api\n    &#125;\n    \n    handleOverlayClick(event) &#123;\n        //event.originalEvent: MouseEvent of Google Maps api\n        //event.overlay: Clicked overlay     \n        //event.map: Map instance   \n    &#125;\n&#125;\n</code>\n</pre>\n\n            <h3>Google Maps API</h3>\n            <p>In case you need to access the map instance directly, use the getMap() method.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-gmap #gmap [options]=\"options\"&gt;&lt;/p-gmap&gt;\n\n&lt;button type=\"button\" pButton label=\"Zoom In\" icon=\"fa-search-plus\" (click)=\"zoomIn(gmap.getMap())\"&gt;&lt;/button&gt;\n</code>\n</pre>\n\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport class MyModel &#123;\n\n    options: any;\n    \n    overlays: any[];\n    \n    ngOnInit() &#123;\n        this.options = &#123;\n            center: &#123;lat: 36.890257, lng: 30.707417&#125;,\n            zoom: 12\n        &#125;;\n    &#125;\n    \n    zoomIn(map) &#123;\n        map.setZoom(map.getZoom()+1);\n    &#125;\n&#125;\n</code>\n</pre>\n            <p>Another option is to to get the map object directly after init via (onMapReady) event.\n               In the example below, google.maps.Map is used for adjusting map bounds to markers.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-gmap #gmap [options]=\"options\" [overlays]=\"overlays\" [style]=\"mapStyle\"\n    (onMapReady)=\"setMap($event)\"&gt;&lt;/p-gmap&gt;\n</code>\n</pre>\n            <p>Then from your component you would write</p>\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport class MyModel &#123;\n\n    options: any;\n    \n    overlays: any[];\n    \n    map: google.maps.Map;\n    \n    setMap(event) &#123;\n        this.map = event.map;\n    &#125;\n    \n    ngOnInit() &#123;\n        let bounds = new google.maps.LatLngBounds();\n        this.overlays = [\n            new google.maps.Marker(&#123;position: &#123;lat: 36.879466, lng: 30.667648&#125;, title:\"Konyaalti\"&#125;),\n            new google.maps.Marker(&#123;position: &#123;lat: 36.883707, lng: 30.689216&#125;, title:\"Ataturk Park\"&#125;),\n            new google.maps.Marker(&#123;position: &#123;lat: 36.885233, lng: 30.702323&#125;, title:\"Oldtown\"&#125;),\n        ]\n        // ... extend bounds\n        this.overlays.forEach(marker => &#123;\n            bounds.extend(marker.getPosition());\n        &#125;);\n        \n        setTimeout(()=> &#123; // map will need some time to load\n            this.map.fitBounds(bounds); // Map object used directly\n        &#125;, 1000);\n    &#125;\n&#125;\n</code>\n</pre>\n\n            <h3>Properties</h3>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                    <tr>\n                        <th>Name</th>\n                        <th>Type</th>\n                        <th>Default</th>\n                        <th>Description</th>\n                    </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>options</td>\n                            <td>any</td>\n                            <td>null</td>\n                            <td>Google Maps API configuration object.</td>\n                        </tr>\n                        <tr>\n                            <td>overlays</td>\n                            <td>array</td>\n                            <td>null</td>\n                            <td>An array of overlays to display.</td>\n                        </tr>\n                        <tr>\n                            <td>style</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Inline style of the component.</td>\n                        </tr>\n                        <tr>\n                            <td>styleClass</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Style class of the component.</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n            \n            <h3>Events</h3>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                        <tr>\n                            <th>Name</th>\n                            <th>Parameters</th>\n                            <th>Description</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>onMapClick</td>\n                            <td>event: Google Maps MouseEvent</td>\n                            <td>Callback to invoke when map is clicked except markers.</td>\n                        </tr>\n                        <tr>\n                            <td>onMapDragEnd</td>\n                            <td>originalEvent: Google Maps dragend<br></td>\n                            <td>Callback to invoke when map drag (i.e. pan) has ended.</td>\n                        </tr>\n                        <tr>\n                            <td>onMapReady</td>\n                            <td>event.map: Google Maps Instance</td>\n                            <td>Callback to invoke when the map is ready to be used.</td>\n                        </tr>\n                        <tr>\n                            <td>onOverlayClick</td>\n                            <td>originalEvent: Google Maps MouseEvent <br>\n                                overlay: Clicked overlay <br>\n                                map: Map instance <br></td>\n                            <td>Callback to invoke when an overlay is clicked.</td>\n                        </tr>\n                        <tr>\n                            <td>onOverlayDrag</td>\n                            <td>originalEvent: Google Maps MouseEvent <br>\n                                overlay: Clicked overlay <br>\n                                map: Map instance <br></td>\n                            <td>Callback to invoke when an overlay is being dragged.</td>\n                        </tr>\n                        <tr>\n                            <td>onOverlayDragEnd</td>\n                            <td>originalEvent: Google Maps MouseEvent <br>\n                                overlay: Clicked overlay <br>\n                                map: Map instance <br></td>\n                            <td>Callback to invoke when an overlay drag ends.</td>\n                        </tr>\n                        <tr>\n                            <td>onOverlayDragStart</td>\n                            <td>originalEvent: Google Maps MouseEvent <br>\n                                overlay: Clicked overlay <br>\n                                map: Map instance <br></td>\n                            <td>Callback to invoke when an overlay drag starts.</td>\n                        </tr>\n                        <tr>\n                            <td>onZoomChanged</td>\n                            <td>originalEvent: Google Maps zoom_changed</td>\n                            <td>Callback to invoke when zoom level has changed.</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n\n            <h3>Dependencies</h3>\n            <p>Google Maps API.</p>\n        </p-tabPanel>\n\n        <p-tabPanel header=\"Source\">\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/gmap\" class=\"btn-viewsource\" target=\"_blank\">\n                <i class=\"fa fa-github\"></i>\n                <span>View on GitHub</span>\n            </a>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-growl [value]=\"msgs\"&gt;&lt;/p-growl&gt;\n\n&lt;p-gmap #gmap [style]=\"&#123;'width':'100%','height':'320px'&#125;\" [options]=\"options\" [overlays]=\"overlays\" \n    (onMapClick)=\"handleMapClick($event)\" (onOverlayClick)=\"handleOverlayClick($event)\" (onOverlayDragEnd)=\"handleDragEnd($event)\"&gt;&lt;/p-gmap&gt;\n&lt;button type=\"button\" pButton label=\"Clear\" icon=\"fa-close\" (click)=\"clear()\" style=\"margin-top:10px\"&gt;&lt;/button&gt;\n&lt;button type=\"button\" pButton label=\"Zoom In\" icon=\"fa-search-plus\" (click)=\"zoomIn(gmap.getMap())\" style=\"margin-top:10px\"&gt;&lt;/button&gt;\n&lt;button type=\"button\" pButton label=\"Zoom Out\" icon=\"fa-search-minus\" (click)=\"zoomOut(gmap.getMap())\" style=\"margin-top:10px\"&gt;&lt;/button&gt;\n\n&lt;p-dialog showEffect=\"fade\" [(visible)]=\"dialogVisible\" header=\"New Location\"&gt;\n    &lt;div class=\"ui-g ui-fluid\" *ngIf=\"selectedPosition\"&gt;\n        &lt;div class=\"ui-g-2\"&gt;&lt;label for=\"title\"&gt;Label&lt;/label&gt;&lt;/div&gt;\n        &lt;div class=\"ui-g-10\"&gt;&lt;input type=\"text\" pInputText id=\"title\" [(ngModel)]=\"markerTitle\"&gt;&lt;/div&gt;\n        \n        &lt;div class=\"ui-g-2\"&gt;&lt;label for=\"lat\"&gt;Lat&lt;/label&gt;&lt;/div&gt;\n        &lt;div class=\"ui-g-10\"&gt;&lt;input id=\"lat\" type=\"text\" readonly pInputText [ngModel]=\"selectedPosition.lat()\"&gt;&lt;/div&gt;\n        \n        &lt;div class=\"ui-g-2\"&gt;&lt;label for=\"lng\"&gt;Lng&lt;/label&gt;&lt;/div&gt;\n        &lt;div class=\"ui-g-10\"&gt;&lt;input id=\"lng\" type=\"text\" readonly pInputText [ngModel]=\"selectedPosition.lng()\"&gt;&lt;/div&gt;\n        \n        &lt;div class=\"ui-g-2\"&gt;&lt;label for=\"drg\"&gt;Drag&lt;/label&gt;&lt;/div&gt;\n        &lt;div class=\"ui-g-10\"&gt;&lt;p-checkbox [(ngModel)]=\"draggable\" binary=\"true\" [style]=\"&#123;'margin-top':'.25em'&#125;\"&gt;&lt;/p-checkbox&gt;&lt;/div&gt;\n    &lt;/div&gt;\n    &lt;p-footer&gt;\n        &lt;div class=\"ui-dialog-buttonpane ui-helper-clearfix\"&gt;\n            &lt;button type=\"button\" pButton label=\"Add Marker\" icon=\"fa-plus\" (click)=\"addMarker()\"&gt;&lt;/button&gt;\n        &lt;/div&gt;\n    &lt;/p-footer&gt;\n&lt;/p-dialog&gt;\n</code>\n</pre>\n\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport class GMapDemo implements OnInit &#123;\n\n    options: any;\n    \n    overlays: any[];\n    \n    dialogVisible: boolean;\n    \n    markerTitle: string;\n    \n    selectedPosition: any;\n    \n    infoWindow: any;\n    \n    draggable: boolean;\n    \n    msgs: Message[] = [];\n\n    ngOnInit() &#123;\n        this.options = &#123;\n            center: &#123;lat: 36.890257, lng: 30.707417&#125;,\n            zoom: 12\n        &#125;;\n        \n        this.initOverlays();\n        \n        this.infoWindow = new google.maps.InfoWindow();\n    &#125;\n    \n    handleMapClick(event) &#123;\n        this.dialogVisible = true;\n        this.selectedPosition = event.latLng;\n    &#125;\n    \n    handleOverlayClick(event) &#123;\n        this.msgs = [];\n        let isMarker = event.overlay.getTitle != undefined;\n        \n        if(isMarker) &#123;\n            let title = event.overlay.getTitle();\n            this.infoWindow.setContent('<div>' + title + '</div>');\n            this.infoWindow.open(event.map, event.overlay);\n            event.map.setCenter(event.overlay.getPosition());\n            \n            this.msgs.push(&#123;severity:'info', summary:'Marker Selected', detail: title&#125;);\n        &#125;\n        else &#123;\n            this.msgs.push(&#123;severity:'info', summary:'Shape Selected', detail: ''&#125;);\n        &#125;        \n    &#125;\n    \n    addMarker() &#123;\n        this.overlays.push(new google.maps.Marker(&#123;position:&#123;lat: this.selectedPosition.lat(), lng: this.selectedPosition.lng()&#125;, title:this.markerTitle, draggable: this.draggable&#125;));\n        this.markerTitle = null;\n        this.dialogVisible = false;\n    &#125;\n    \n    handleDragEnd(event) &#123;\n        this.msgs = [];\n        this.msgs.push(&#123;severity:'info', summary:'Marker Dragged', detail: event.overlay.getTitle()&#125;);\n    &#125;\n    \n    initOverlays() &#123;\n        if(!this.overlays||!this.overlays.length) &#123;\n            this.overlays = [\n                new google.maps.Marker(&#123;position: &#123;lat: 36.879466, lng: 30.667648&#125;, title:\"Konyaalti\"&#125;),\n                new google.maps.Marker(&#123;position: &#123;lat: 36.883707, lng: 30.689216&#125;, title:\"Ataturk Park\"&#125;),\n                new google.maps.Marker(&#123;position: &#123;lat: 36.885233, lng: 30.702323&#125;, title:\"Oldtown\"&#125;),\n                new google.maps.Polygon(&#123;paths: [\n                    &#123;lat: 36.9177, lng: 30.7854&#125;,&#123;lat: 36.8851, lng: 30.7802&#125;,&#123;lat: 36.8829, lng: 30.8111&#125;,&#123;lat: 36.9177, lng: 30.8159&#125;\n                ], strokeOpacity: 0.5, strokeWeight: 1,fillColor: '#1976D2', fillOpacity: 0.35\n                &#125;),\n                new google.maps.Circle(&#123;center: &#123;lat: 36.90707, lng: 30.56533&#125;, fillColor: '#1976D2', fillOpacity: 0.35, strokeWeight: 1, radius: 1500&#125;),\n                new google.maps.Polyline(&#123;path: [&#123;lat: 36.86149, lng: 30.63743&#125;,&#123;lat: 36.86341, lng: 30.72463&#125;], geodesic: true, strokeColor: '#FF0000', strokeOpacity: 0.5, strokeWeight: 2&#125;)\n            ];\n        &#125;\n    &#125;\n    \n    zoomIn(map) &#123;\n        map.setZoom(map.getZoom()+1);\n    &#125;\n    \n    zoomOut(map) &#123;\n        map.setZoom(map.getZoom()-1);\n    &#125;\n    \n    clear() &#123;\n        this.overlays = [];\n    &#125;\n&#125;\n</code>\n</pre>\n        </p-tabPanel>\n    </p-tabView>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/showcase/components/gmap/gmapdemo.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GMapDemoModule", function() { return GMapDemoModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__gmapdemo__ = __webpack_require__("../../../../../src/app/showcase/components/gmap/gmapdemo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__gmapdemo_routing_module__ = __webpack_require__("../../../../../src/app/showcase/components/gmap/gmapdemo-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__ = __webpack_require__("../../../../primeng/primeng.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_primeng_primeng__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













let GMapDemoModule = class GMapDemoModule {
};
GMapDemoModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_4__gmapdemo_routing_module__["a" /* GMapDemoRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__["GMapModule"],
            __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__["GrowlModule"],
            __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__["InputTextModule"],
            __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__["CheckboxModule"],
            __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__["DialogModule"],
            __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__["ButtonModule"],
            __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__["TabViewModule"],
            __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__["CodeHighlighterModule"]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__gmapdemo__["a" /* GMapDemo */]
        ]
    })
], GMapDemoModule);

//# sourceMappingURL=gmapdemo.module.js.map

/***/ }),

/***/ "../../../../../src/app/showcase/components/gmap/gmapdemo.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GMapDemo; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

let GMapDemo = class GMapDemo {
    constructor() {
        this.msgs = [];
    }
    ngOnInit() {
        this.options = {
            center: { lat: 36.890257, lng: 30.707417 },
            zoom: 12
        };
        this.initOverlays();
        this.infoWindow = new google.maps.InfoWindow();
    }
    handleMapClick(event) {
        this.dialogVisible = true;
        this.selectedPosition = event.latLng;
    }
    handleOverlayClick(event) {
        this.msgs = [];
        let isMarker = event.overlay.getTitle != undefined;
        if (isMarker) {
            let title = event.overlay.getTitle();
            this.infoWindow.setContent('<div>' + title + '</div>');
            this.infoWindow.open(event.map, event.overlay);
            event.map.setCenter(event.overlay.getPosition());
            this.msgs.push({ severity: 'info', summary: 'Marker Selected', detail: title });
        }
        else {
            this.msgs.push({ severity: 'info', summary: 'Shape Selected', detail: '' });
        }
    }
    addMarker() {
        this.overlays.push(new google.maps.Marker({ position: { lat: this.selectedPosition.lat(), lng: this.selectedPosition.lng() }, title: this.markerTitle, draggable: this.draggable }));
        this.markerTitle = null;
        this.dialogVisible = false;
    }
    handleDragEnd(event) {
        this.msgs = [];
        this.msgs.push({ severity: 'info', summary: 'Marker Dragged', detail: event.overlay.getTitle() });
    }
    initOverlays() {
        if (!this.overlays || !this.overlays.length) {
            this.overlays = [
                new google.maps.Marker({ position: { lat: 36.879466, lng: 30.667648 }, title: "Konyaalti" }),
                new google.maps.Marker({ position: { lat: 36.883707, lng: 30.689216 }, title: "Ataturk Park" }),
                new google.maps.Marker({ position: { lat: 36.885233, lng: 30.702323 }, title: "Oldtown" }),
                new google.maps.Polygon({ paths: [
                        { lat: 36.9177, lng: 30.7854 }, { lat: 36.8851, lng: 30.7802 }, { lat: 36.8829, lng: 30.8111 }, { lat: 36.9177, lng: 30.8159 }
                    ], strokeOpacity: 0.5, strokeWeight: 1, fillColor: '#1976D2', fillOpacity: 0.35
                }),
                new google.maps.Circle({ center: { lat: 36.90707, lng: 30.56533 }, fillColor: '#1976D2', fillOpacity: 0.35, strokeWeight: 1, radius: 1500 }),
                new google.maps.Polyline({ path: [{ lat: 36.86149, lng: 30.63743 }, { lat: 36.86341, lng: 30.72463 }], geodesic: true, strokeColor: '#FF0000', strokeOpacity: 0.5, strokeWeight: 2 })
            ];
        }
    }
    zoomIn(map) {
        map.setZoom(map.getZoom() + 1);
    }
    zoomOut(map) {
        map.setZoom(map.getZoom() - 1);
    }
    clear() {
        this.overlays = [];
    }
};
GMapDemo = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__("../../../../../src/app/showcase/components/gmap/gmapdemo.html"),
        styles: [`
        .ui-g-2 {
            padding-top: .75em;
        }
    `]
    })
], GMapDemo);

//# sourceMappingURL=gmapdemo.js.map

/***/ })

});
//# sourceMappingURL=gmapdemo.module.chunk.js.map