webpackJsonp(["scheduledemo.module"],{

/***/ "../../../../../src/app/showcase/components/schedule/scheduledemo-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScheduleDemoRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__scheduledemo__ = __webpack_require__("../../../../../src/app/showcase/components/schedule/scheduledemo.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let ScheduleDemoRoutingModule = class ScheduleDemoRoutingModule {
};
ScheduleDemoRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"].forChild([
                { path: '', component: __WEBPACK_IMPORTED_MODULE_2__scheduledemo__["a" /* ScheduleDemo */] }
            ])
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"]
        ]
    })
], ScheduleDemoRoutingModule);

//# sourceMappingURL=scheduledemo-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/showcase/components/schedule/scheduledemo.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-section introduction\">\n    <div>\n        <span class=\"feature-title\">Schedule</span>\n        <span>Schedule is an event calendar based on FullCalendar. This sample demonstrates a crud scenario using a Dialog.</span>\n    </div>\n</div>\n\n<div class=\"content-section implementation\">\n    <p-schedule [events]=\"events\" [header]=\"header\" defaultDate=\"2017-02-01\" [eventLimit]=\"4\" [editable]=\"true\"\n                (onDayClick)=\"handleDayClick($event)\" (onEventClick)=\"handleEventClick($event)\"></p-schedule>\n    \n    <p-dialog header=\"Event Details\" [(visible)]=\"dialogVisible\" [responsive]=\"true\" showEffect=\"fade\" [modal]=\"false\" [contentStyle]=\"{'overflow':'visible'}\"\n        [style]=\"{'overflow':'visible'}\" [resizable]=\"false\">\n        <div class=\"ui-grid ui-grid-responsive ui-fluid\" *ngIf=\"event\">\n            <div class=\"ui-grid-row\">\n                <div class=\"ui-grid-col-4\"><label for=\"vin\">Title</label></div>\n                <div class=\"ui-grid-col-8\"><input pInputText id=\"title\" [(ngModel)]=\"event.title\" /></div>\n            </div>\n            <div class=\"ui-grid-row\">\n                <div class=\"ui-grid-col-4\"><label for=\"start\">Start</label></div>\n                <div class=\"ui-grid-col-8\"><p-calendar [(ngModel)]=\"event.start\" dateFormat=\"yy-mm-dd\" dataType=\"string\"></p-calendar></div>\n            </div>\n            <div class=\"ui-grid-row\">\n                <div class=\"ui-grid-col-4\"><label for=\"end\">End</label></div>\n                <div class=\"ui-grid-col-8\"><p-calendar [(ngModel)]=\"event.end\" dateFormat=\"yy-mm-dd\" dataType=\"string\"></p-calendar></div>\n            </div>\n            <div class=\"ui-grid-row\">\n                <div class=\"ui-grid-col-4\"><label for=\"allday\">All Day</label></div>\n                <div class=\"ui-grid-col-8\"><p-checkbox [(ngModel)]=\"event.allDay\" binary=\"checkbox\"></p-checkbox></div>\n            </div>\n        </div>\n        <p-footer>\n            <div class=\"ui-dialog-buttonpane ui-helper-clearfix\">\n                <button type=\"button\" pButton icon=\"fa-close\" (click)=\"deleteEvent()\" label=\"Delete\" [disabled]=\"!event?.id\"></button>\n                <button type=\"button\" pButton icon=\"fa-check\" (click)=\"saveEvent()\" label=\"Save\" [disabled]=\"!event?.start\"></button>\n            </div>\n        </p-footer>\n    </p-dialog>\n</div>\n\n<div class=\"content-section documentation\">\n    <p-tabView effect=\"fade\">\n        <p-tabPanel header=\"Documentation\">\n            <h3>Import</h3>\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nimport &#123;ScheduleModule&#125; from 'primeng/primeng';\n</code>\n</pre>\n\n            <h3>Getting Started</h3>\n            <p>Schedule is based on <a href=\"http://fullcalendar.io/\">FullCalendar</a>. For a complete documentation and samples please refer to the fullcalendar website.\n            Events of schedule should be an array and defined using the events property.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-schedule [events]=\"events\"&gt;&lt;/p-schedule&gt;\n</code>\n</pre>\n\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport class MyModel &#123;\n\n    events: any[];\n\n    ngOnInit() &#123;\n        this.events = [\n            &#123;\n                \"title\": \"All Day Event\",\n                \"start\": \"2016-01-01\"\n            &#125;,\n            &#123;\n                \"title\": \"Long Event\",\n                \"start\": \"2016-01-07\",\n                \"end\": \"2016-01-10\"\n            &#125;,\n            &#123;\n                \"title\": \"Repeating Event\",\n                \"start\": \"2016-01-09T16:00:00\"\n            &#125;,\n            &#123;\n                \"title\": \"Repeating Event\",\n                \"start\": \"2016-01-16T16:00:00\"\n            &#125;,\n            &#123;\n                \"title\": \"Conference\",\n                \"start\": \"2016-01-11\",\n                \"end\": \"2016-01-13\"\n            &#125;\n        ];\n    &#125;\n    \n&#125;\n</code>\n</pre>\n            <p>In a real application, it is likely to populate the events by making a service call, when the events are updated, schedule component will detect the change and render them.</p>\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\n@Injectable()\nexport class EventService &#123;\n    \n    constructor(private http: Http) &#123;&#125;\n\n    getEvents() &#123;\n        return this.http.get('showcase/resources/data/scheduleevents.json')\n                    .toPromise()\n                    .then(res =&gt; &lt;any[]&gt; res.json().data)\n                    .then(data =&gt; &#123; return data; &#125;);\n    &#125;\n&#125;\n</code>\n</pre>\n\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport class MyModel &#123;\n\n    events: any[];\n\n    ngOnInit() &#123;\n        this.eventService.getEvents().then(events => &#123;this.events = events;&#125;);\n    &#125;\n    \n&#125;\n</code>\n</pre>\n\n            <h3>Lazy Loading</h3>\n            <p>onViewRender call is used to implement lazy loading which is triggered when a new date-range is rendered or when the view type changes.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-schedule [events]=\"events\" (onViewRender)=\"loadEvents($event)\"&gt;&lt;/p-schedule&gt;\n</code>\n</pre>\n\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nloadEvents(event) &#123;\n    let start = event.view.start\n    let end = event.view.end\n    this.events = this.eventService.getEvents().then(events => &#123;this.events = events;&#125;);\n&#125;\n</code>\n</pre>\n            \n\n            <h3>Event API</h3>\n            <p>Event object has various properties to define an event, refer to <a href=\"http://fullcalendar.io/docs/event_data/Event_Object/\">official documentation</a> for the whole list.</p>\n\n            <h3>Header Customization</h3>\n            <p>Header is customized using the header property that takes an object as its value. Default configuration is;</p>\n<pre>\n<code class=\"language-javascript\" pCode ngNonBindable>\n&#123;\n    left:   'title',\n    center: '',\n    right:  'today prev,next'\n&#125;\n</code>\n</pre>\n\n            <p>Here is a customized version of header.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-schedule [events]=\"events\" [header]=\"headerConfig\"&gt;&lt;/p-schedule&gt;\n</code>\n</pre>\n\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport class MyModel &#123;\n\n    events: any[];\n    \n    headerConfig: any;\n\n    ngOnInit() &#123;\n        this.headerConfig = &#123;\n\t\t\tleft: 'prev,next today',\n\t\t\tcenter: 'title',\n\t\t\tright: 'month,agendaWeek,agendaDay'\n\t\t&#125;;\n    &#125;\n    \n&#125;\n</code>\n</pre>\n\n            <h3>Localization</h3>\n            <p>Localization for different languages and formats is defined by binding the settings object to the locale property. \n                Following is a schedule with Spanish month names.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-schedule [events]=\"events\" locale=\"es\"&gt;&lt;/p-schedule&gt;\n</code>\n</pre>\n\n            <p>Visit the <a href=\"https://fullcalendar.io/docs/text/locale/\">fullcalendar documentation</a> to get the available locales.</p>\n\n            <h3>Properties</h3>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                    <tr>\n                        <th>Name</th>\n                        <th>Type</th>\n                        <th>Description</th>\n                    </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>events</td>\n                            <td>array</td>\n                            <td>An array of events to display.</td>\n                        </tr>\n                        <tr>\n                            <td>header</td>\n                            <td>object</td>\n                            <td><a href=\"http://fullcalendar.io/docs/display/header/\">Read more</a></td>\n                        </tr>\n                        <tr>\n                            <td>isRTL</td>\n                            <td>boolean</td>\n                            <td><a href=\"http://fullcalendar.io/docs/display/isRTL/\">Read more</a></td>\n                        </tr>\n                        <tr>\n                            <td>weekends</td>\n                            <td>boolean</td>\n                            <td><a href=\"http://fullcalendar.io/docs/display/weekends/\">Read more</a></td>\n                        </tr>\n                        <tr>\n                            <td>hiddenDays</td>\n                            <td>array</td>\n                            <td><a href=\"http://fullcalendar.io/docs/display/hiddenDays/\">Read more</a></td>\n                        </tr>\n                        <tr>\n                            <td>locale</td>\n                            <td>object</td>\n                            <td><a href=\"https://fullcalendar.io/docs/text/locale/\">Read more</a></td>\n                        </tr>\n                        <tr>\n                            <td>fixedWeekCount</td>\n                            <td>boolean</td>\n                            <td><a href=\"http://fullcalendar.io/docs/display/fixedWeekCount/\">Read more</a></td>\n                        </tr>\n                        <tr>\n                            <td>weekNumbers</td>\n                            <td>boolean</td>\n                            <td><a href=\"http://fullcalendar.io/docs/display/weekNumbers/\">Read more</a></td>\n                        </tr>\n                        <tr>\n                            <td>businessHours</td>\n                            <td>any</td>\n                            <td><a href=\"http://fullcalendar.io/docs/display/businessHours/\">Read more</a></td>\n                        </tr>\n                        <tr>\n                            <td>height</td>\n                            <td>any</td>\n                            <td><a href=\"http://fullcalendar.io/docs/display/height/\">Read more</a></td>\n                        </tr>\n                        <tr>\n                            <td>contentHeight</td>\n                            <td>any</td>\n                            <td><a href=\"http://fullcalendar.io/docs/display/contentHeight/\">Read more</a></td>\n                        </tr>\n                        <tr>\n                            <td>aspectRatio</td>\n                            <td>any</td>\n                            <td><a href=\"http://fullcalendar.io/docs/display/aspectRatio/\">Read more</a></td>\n                        </tr>\n                        <tr>\n                            <td>eventLimit</td>\n                            <td>any</td>\n                            <td><a href=\"http://fullcalendar.io/docs/display/eventLimit/\">Read more</a></td>\n                        </tr>\n                        <tr>\n                            <td>defaultDate</td>\n                            <td>any</td>\n                            <td><a href=\"http://fullcalendar.io/docs/current_date/defaultDate/\">Read more</a></td>\n                        </tr>\n                        <tr>\n                            <td>editable</td>\n                            <td>boolean</td>\n                            <td><a href=\"http://fullcalendar.io/docs/event_ui/editable/\">Read more</a></td>\n                        </tr>\n                        <tr>\n                            <td>droppable</td>\n                            <td>boolean</td>\n                            <td><a href=\"https://fullcalendar.io/docs/dropping/droppable/\">Read more</a></td>\n                        </tr>\n                        <tr>\n                            <td>eventStartEditable</td>\n                            <td>boolean</td>\n                            <td><a href=\"http://fullcalendar.io/docs/event_ui/eventStartEditable/\">Read more</a></td>\n                        </tr>\n                        <tr>\n                            <td>eventDurationEditable</td>\n                            <td>boolean</td>\n                            <td><a href=\"http://fullcalendar.io/docs/event_ui/eventDurationEditable/\">Read more</a></td>\n                        </tr>\n                        <tr>\n                            <td>defaultView</td>\n                            <td>string</td>\n                            <td><a href=\"http://fullcalendar.io/docs/views/defaultView/\">Read more</a></td>\n                        </tr>\n                        <tr>\n                            <td>allDaySlot</td>\n                            <td>boolean</td>\n                            <td><a href=\"http://fullcalendar.io/docs/agenda/allDaySlot/\">Read more</a></td>\n                        </tr>\n                        <tr>\n                            <td>allDayText</td>\n                            <td>string</td>\n                            <td><a href=\"http://fullcalendar.io/docs/agenda/allDayText/\">Read more</a></td>\n                        </tr>\n                        <tr>\n                            <td>slotDuration</td>\n                            <td>Duration</td>\n                            <td><a href=\"http://fullcalendar.io/docs/agenda/slotDuration/\">Read more</a></td>\n                        </tr>\n                        <tr>\n                            <td>slotLabelInterval</td>\n                            <td>Duration</td>\n                            <td><a href=\"http://fullcalendar.io/docs/agenda/slotLabelInterval/\">Read more</a></td>\n                        </tr>\n                        <tr>\n                            <td>snapDuration</td>\n                            <td>Duration</td>\n                            <td><a href=\"http://fullcalendar.io/docs/agenda/snapDuration/\">Read more</a></td>\n                        </tr>\n                        <tr>\n                            <td>scrollTime</td>\n                            <td>Duration</td>\n                            <td><a href=\"http://fullcalendar.io/docs/agenda/scrollTime/\">Read more</a></td>\n                        </tr>\n                        <tr>\n                            <td>minTime</td>\n                            <td>Duration</td>\n                            <td><a href=\"http://fullcalendar.io/docs/agenda/minTime/\">Read more</a></td>\n                        </tr>\n                        <tr>\n                            <td>maxTime</td>\n                            <td>Duration</td>\n                            <td><a href=\"hhttp://fullcalendar.io/docs/agenda/maxTime/\">Read more</a></td>\n                        </tr>\n                        <tr>\n                            <td>slotEventOverlap</td>\n                            <td>boolean</td>\n                            <td><a href=\"http://fullcalendar.io/docs/agenda/slotEventOverlap/\">Read more</a></td>\n                        </tr>\n                        <tr>\n                            <td>nowIndicator</td>\n                            <td>boolean</td>\n                            <td><a href=\"http://fullcalendar.io/docs/current_date/nowIndicator/\">Read more</a></td>\n                        </tr>\n                        <tr>\n                            <td>dragRevertDuration</td>\n                            <td>number</td>\n                            <td><a href=\"http://fullcalendar.io/docs/event_ui/dragRevertDuration/\">Read more</a></td>\n                        </tr>\n                        <tr>\n                            <td>dragOpacity</td>\n                            <td>number</td>\n                            <td><a href=\"http://fullcalendar.io/docs/event_ui/dragOpacity/\">Read more</a></td>\n                        </tr>\n                        <tr>\n                            <td>dragScroll</td>\n                            <td>boolean</td>\n                            <td><a href=\"http://fullcalendar.io/docs/event_ui/dragScroll/\">Read more</a></td>\n                        </tr>\n                        <tr>\n                            <td>eventOverlap</td>\n                            <td>any</td>\n                            <td><a href=\"http://fullcalendar.io/docs/event_ui/eventOverlap/\">Read more</a></td>\n                        </tr>\n                        <tr>\n                            <td>eventConstraint</td>\n                            <td>any</td>\n                            <td><a href=\"http://fullcalendar.io/docs/event_ui/eventConstraint/\">Read more</a></td>\n                        </tr>\n                        <tr>\n                            <td>eventRender</td>\n                            <td>Function</td>\n                            <td><a href=\"https://fullcalendar.io/docs/event_rendering/eventRender/\">Read more</a></td>\n                        </tr>\n                        <tr>\n                            <td>dayRender</td>\n                            <td>Function</td>\n                            <td><a href=\"https://fullcalendar.io/docs/display/dayRender/\">Read more</a></td>\n                        </tr>\n                        <tr>\n                            <td>timezone</td>\n                            <td>boolean|string</td>\n                            <td><a href=\"https://fullcalendar.io/docs/timezone/timezone/\">Read more</a></td>\n                        </tr>\n                        <tr>\n                            <td>timeFormat</td>\n                            <td>string</td>\n                            <td><a href=\"https://fullcalendar.io/docs/text/timeFormat/\">Read more</a></td>\n                        </tr>\n                        <tr>\n                            <td>options</td>\n                            <td>Object</td>\n                            <td>A configuration object to define properties of FullCalendar that do not have a corresponding option in schedule.</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n\n            <h3>Events</h3>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                    <tr>\n                        <th>Name</th>\n                        <th>Description</th>\n                    </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>onDayClick</td>\n                            <td><a href=\"http://fullcalendar.io/docs/mouse/dayClick/\">Read more</a></td>\n                        </tr>\n                        <tr>\n                            <td>onEventClick</td>\n                            <td><a href=\"http://fullcalendar.io/docs/mouse/eventClick/\">Read more</a></td>\n                        </tr>\n                        <tr>\n                            <td>onEventMouseover</td>\n                            <td><a href=\"http://fullcalendar.io/docs/mouse/eventMouseover/\">Read more</a></td>\n                        </tr>\n                        <tr>\n                            <td>onEventMouseout</td>\n                            <td><a href=\"http://fullcalendar.io/docs/mouse/eventMouseout/\">Read more</a></td>\n                        </tr>\n                        <tr>\n                            <td>onEventDragStart</td>\n                            <td><a href=\"http://fullcalendar.io/docs/event_ui/eventDragStart/\">Read more</a></td>\n                        </tr>\n                        <tr>\n                            <td>onEventDragStop</td>\n                            <td><a href=\"http://fullcalendar.io/docs/event_ui/eventDragStop/\">Read more</a></td>\n                        </tr>\n                        <tr>\n                            <td>onEventDrop</td>\n                            <td><a href=\"http://fullcalendar.io/docs/event_ui/eventDrop/\">Read more</a></td>\n                        </tr>\n                        <tr>\n                            <td>onEventResizeStart</td>\n                            <td><a href=\"http://fullcalendar.io/docs/event_ui/eventResizeStart/\">Read more</a></td>\n                        </tr>\n                        <tr>\n                            <td>onEventResizeStop</td>\n                            <td><a href=\"http://fullcalendar.io/docs/event_ui/eventResizeStop/\">Read more</a></td>\n                        </tr>\n                        <tr>\n                            <td>onEventResize</td>\n                            <td><a href=\"http://fullcalendar.io/docs/event_ui/eventResize/\">Read more</a></td>\n                        </tr>\n                        <tr>\n                            <td>onViewRender</td>\n                            <td><a href=\"http://fullcalendar.io/docs/display/viewRender/\">Read more</a></td>\n                        </tr>\n                        <tr>\n                            <td>onViewDestroy</td>\n                            <td><a href=\"http://fullcalendar.io/docs/display/viewDestroy/\">Read more</a></td>\n                        </tr>  \n                        <tr>\n                            <td>onDrop</td>\n                            <td><a href=\"https://fullcalendar.io/docs/dropping/drop/\">Read more</a></td>\n                        </tr>                        \n                    </tbody>\n                </table>\n            </div>\n            \n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-schedule [events]=\"events\" [header]=\"headerConfig\" (onEventClick)=\"handleEventClick($event)\"&gt;&lt;/p-schedule&gt;\n</code>\n</pre>\n\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport class MyModel &#123;\n\n    handleEventClick(e) &#123;\n        //e.calEvent = Selected event\n        //e.jsEvent = Browser click event\n        //e.view = Current view object\n    &#125;\n    \n&#125;\n</code>\n</pre>\n            \n            <h3>Methods</h3>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                        <tr>\n                            <th>Name</th>\n                            <th>Parameters</th>\n                            <th>Description</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>prev()</td>\n                            <td>-</td>\n                            <td><a href=\"http://fullcalendar.io/docs/current_date/prev/\">Read more</a></td>\n                        </tr>\n                        <tr>\n                            <td>next()</td>\n                            <td>-</td>\n                            <td><a href=\"http://fullcalendar.io/docs/current_date/next/\">Read more</a></td>\n                        </tr>\n                        <tr>\n                            <td>prevYear()</td>\n                            <td>-</td>\n                            <td><a href=\"http://fullcalendar.io/docs/current_date/prevYear/\">Read more</a></td>\n                        </tr>\n                        <tr>\n                            <td>nextYear()</td>\n                            <td>-</td>\n                            <td><a href=\"http://fullcalendar.io/docs/current_date/nextYear/\">Read more</a></td>\n                        </tr>\n                        <tr>\n                            <td>today()</td>\n                            <td>-</td>\n                            <td><a href=\"http://fullcalendar.io/docs/current_date/today/\">Read more</a></td>\n                        </tr>\n                        <tr>\n                            <td>gotoDate(date)</td>\n                            <td>date: Date to navigate</td>\n                            <td><a href=\"http://fullcalendar.io/docs/current_date/gotoDate/\">Read more</a></td>\n                        </tr>\n                        <tr>\n                            <td>incrementDate(duration)</td>\n                            <td>duration: Duration to add to current date</td>\n                            <td><a href=\"http://fullcalendar.io/docs/current_date/incrementDate/\">Read more</a></td>\n                        </tr>\n                        <tr>\n                            <td>getDate()</td>\n                            <td>-</td>\n                            <td><a href=\"http://fullcalendar.io/docs/current_date/getDate/\">Read more</a></td>\n                        </tr>\n                        <tr>\n                            <td>changeView(viewName)</td>\n                            <td>viewName: A valid view string to change to</td>\n                            <td><a href=\"https://fullcalendar.io/docs/views/changeView/\">Read more</a></td>\n                        </tr>\n                        <tr>\n                          <td>updateEvent(event)</td>\n                          <td>event: Original Event Object for an event (not merely a reconstructed object)</td>\n                          <td><a href=\"https://fullcalendar.io/docs/event_data/updateEvent/\">Read more</a></td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n            \n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-schedule [events]=\"events\" #fc&gt;&lt;/p-schedule&gt;\n\n&lt;button type=\"button\" pButton (click)=\"back(fc)\"&gt;&lt;/p-button&gt;\n</code>\n</pre>\n\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport class MyModel &#123;\n\n    back(fc) &#123;\n        fc.prev();\n    &#125;\n    \n&#125;\n</code>\n</pre>\n            \n            <h3>Dependencies</h3>\n            <p><a href=\"http://fullcalendar.io/docs/usage/\">FullCalendar</a>.</p>\n        </p-tabPanel>\n\n        <p-tabPanel header=\"Source\">\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/schedule\" class=\"btn-viewsource\" target=\"_blank\">\n                <i class=\"fa fa-github\"></i>\n                <span>View on GitHub</span>\n            </a>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-schedule [events]=\"events\" [header]=\"header\" defaultDate=\"2017-02-01\" [eventLimit]=\"4\" [editable]=\"true\"\n            (onDayClick)=\"handleDayClick($event)\" (onEventClick)=\"handleEventClick($event)\"&gt;&lt;/p-schedule&gt;\n\n&lt;p-dialog header=\"Event Details\" [(visible)]=\"dialogVisible\" [responsive]=\"true\" showEffect=\"fade\" [modal]=\"false\" [contentStyle]=\"&#123;'overflow':'visible'&#125;\"\n    [style]=\"&#123;'overflow':'visible'&#125;\" [resizable]=\"false\"&gt;\n    &lt;div class=\"ui-grid ui-grid-responsive ui-fluid\" *ngIf=\"event\"&gt;\n        &lt;div class=\"ui-grid-row\"&gt;\n            &lt;div class=\"ui-grid-col-4\"&gt;&lt;label for=\"vin\"&gt;Title&lt;/label&gt;&lt;/div&gt;\n            &lt;div class=\"ui-grid-col-8\"&gt;&lt;input pInputText id=\"title\" [(ngModel)]=\"event.title\" /&gt;&lt;/div&gt;\n        &lt;/div&gt;\n        &lt;div class=\"ui-grid-row\"&gt;\n            &lt;div class=\"ui-grid-col-4\"&gt;&lt;label for=\"start\"&gt;Start&lt;/label&gt;&lt;/div&gt;\n            &lt;div class=\"ui-grid-col-8\"&gt;&lt;p-calendar [(ngModel)]=\"event.start\" dateFormat=\"yy-mm-dd\" dataType=\"string\"&gt;&lt;/p-calendar&gt;&lt;/div&gt;\n        &lt;/div&gt;\n        &lt;div class=\"ui-grid-row\"&gt;\n            &lt;div class=\"ui-grid-col-4\"&gt;&lt;label for=\"end\"&gt;End&lt;/label&gt;&lt;/div&gt;\n            &lt;div class=\"ui-grid-col-8\"&gt;&lt;p-calendar [(ngModel)]=\"event.end\" dateFormat=\"yy-mm-dd\" dataType=\"string\"&gt;&lt;/p-calendar&gt;&lt;/div&gt;\n        &lt;/div&gt;\n        &lt;div class=\"ui-grid-row\"&gt;\n            &lt;div class=\"ui-grid-col-4\"&gt;&lt;label for=\"allday\"&gt;All Day&lt;/label&gt;&lt;/div&gt;\n            &lt;div class=\"ui-grid-col-8\"&gt;&lt;p-checkbox [(ngModel)]=\"event.allDay\" binary=\"checkbox\"&gt;&lt;/p-checkbox&gt;&lt;/div&gt;\n        &lt;/div&gt;\n    &lt;/div&gt;\n    &lt;p-footer&gt;\n        &lt;div class=\"ui-dialog-buttonpane ui-helper-clearfix\"&gt;\n            &lt;button type=\"button\" pButton icon=\"fa-close\" (click)=\"deleteEvent()\" label=\"Delete\" [disabled]=\"!event?.id\"&gt;&lt;/button&gt;\n            &lt;button type=\"button\" pButton icon=\"fa-check\" (click)=\"saveEvent()\" label=\"Save\" [disabled]=\"!event?.start\"&gt;&lt;/button&gt;\n        &lt;/div&gt;\n    &lt;/p-footer&gt;\n&lt;/p-dialog&gt;\n</code>\n</pre>\n\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport class ScheduleDemo implements OnInit &#123;\n\n    events: any[];\n    \n    header: any;\n    \n    event: MyEvent;\n    \n    dialogVisible: boolean = false;\n    \n    idGen: number = 100;\n    \n    constructor(private eventService: EventService, private cd: ChangeDetectorRef) &#123; &#125;\n\n    ngOnInit() &#123;\n        this.eventService.getEvents().then(events => &#123;this.events = events;&#125;);\n        \n        this.header = &#123;\n\t\t\tleft: 'prev,next today',\n\t\t\tcenter: 'title',\n\t\t\tright: 'month,agendaWeek,agendaDay'\n\t\t&#125;;\n    &#125;\n    \n    handleDayClick(event) &#123;\n        this.event = new MyEvent();\n        this.event.start = event.date.format();\n        this.dialogVisible = true;\n        \n        //trigger detection manually as somehow only moving the mouse quickly after click triggers the automatic detection\n        this.cd.detectChanges();\n    &#125;\n    \n    handleEventClick(e) &#123;\n        this.event = new MyEvent();\n        this.event.title = e.calEvent.title;\n        \n        let start = e.calEvent.start;\n        let end = e.calEvent.end;\n        if(e.view.name === 'month') &#123;\n            start.stripTime();\n        &#125;\n        \n        if(end) &#123;\n            end.stripTime();\n            this.event.end = end.format();\n        &#125;\n\n        this.event.id = e.calEvent.id;\n        this.event.start = start.format();\n        this.event.allDay = e.calEvent.allDay;\n        this.dialogVisible = true;\n    &#125;\n    \n    saveEvent() &#123;\n        //update\n        if(this.event.id) &#123;\n            let index: number = this.findEventIndexById(this.event.id);\n            if(index >= 0) &#123;\n                this.events[index] = this.event;\n            &#125;\n        &#125;\n        //new\n        else &#123;\n            this.event.id = this.idGen++;\n            this.events.push(this.event);\n            this.event = null;\n        &#125;\n        \n        this.dialogVisible = false;\n    &#125;\n    \n    deleteEvent() &#123;\n        let index: number = this.findEventIndexById(this.event.id);\n        if(index >= 0) &#123;\n            this.events.splice(index, 1);\n        &#125;\n        this.dialogVisible = false;\n    &#125;\n    \n    findEventIndexById(id: number) &#123;\n        let index = -1;\n        for(let i = 0; i < this.events.length; i++) &#123;\n            if(id == this.events[i].id) &#123;\n                index = i;\n                break;\n            &#125;\n        &#125;\n        \n        return index;\n    &#125;\n&#125;\n\nexport class MyEvent &#123;\n    id: number;\n    title: string;\n    start: string;\n    end: string;\n    allDay: boolean = true;\n&#125;\n</code>\n</pre>\n\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\n@Injectable()\nexport class EventService &#123;\n    \n    constructor(private http: Http) &#123;&#125;\n\n    getEvents() &#123;\n        return this.http.get('showcase/resources/data/scheduleevents.json')\n                    .toPromise()\n                    .then(res =&gt; &lt;any[]&gt; res.json().data)\n                    .then(data =&gt; &#123; return data; &#125;);\n    &#125;\n&#125;\n</code>\n</pre>\n        </p-tabPanel>\n    </p-tabView>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/showcase/components/schedule/scheduledemo.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScheduleDemoModule", function() { return ScheduleDemoModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__scheduledemo__ = __webpack_require__("../../../../../src/app/showcase/components/schedule/scheduledemo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__scheduledemo_routing_module__ = __webpack_require__("../../../../../src/app/showcase/components/schedule/scheduledemo-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__ = __webpack_require__("../../../../primeng/primeng.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_primeng_primeng__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






let ScheduleDemoModule = class ScheduleDemoModule {
};
ScheduleDemoModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_4__scheduledemo_routing_module__["a" /* ScheduleDemoRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__["ScheduleModule"],
            __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__["DialogModule"],
            __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__["InputTextModule"],
            __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__["CalendarModule"],
            __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__["CheckboxModule"],
            __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__["ButtonModule"],
            __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__["TabViewModule"],
            __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__["CodeHighlighterModule"]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__scheduledemo__["a" /* ScheduleDemo */]
        ]
    })
], ScheduleDemoModule);

//# sourceMappingURL=scheduledemo.module.js.map

/***/ }),

/***/ "../../../../../src/app/showcase/components/schedule/scheduledemo.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScheduleDemo; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_eventservice__ = __webpack_require__("../../../../../src/app/showcase/service/eventservice.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


let ScheduleDemo = class ScheduleDemo {
    constructor(eventService) {
        this.eventService = eventService;
        this.dialogVisible = false;
        this.idGen = 100;
    }
    ngOnInit() {
        this.eventService.getEvents().then(events => { this.events = events; });
        this.header = {
            left: 'prev,next today',
            center: 'title',
            right: 'month,agendaWeek,agendaDay'
        };
    }
    handleDayClick(event) {
        this.event = new MyEvent();
        this.event.start = event.date.format();
        this.dialogVisible = true;
    }
    handleEventClick(e) {
        this.event = new MyEvent();
        this.event.title = e.calEvent.title;
        let start = e.calEvent.start;
        let end = e.calEvent.end;
        if (e.view.name === 'month') {
            start.stripTime();
        }
        if (end) {
            end.stripTime();
            this.event.end = end.format();
        }
        this.event.id = e.calEvent.id;
        this.event.start = start.format();
        this.event.allDay = e.calEvent.allDay;
        this.dialogVisible = true;
    }
    saveEvent() {
        //update
        if (this.event.id) {
            let index = this.findEventIndexById(this.event.id);
            if (index >= 0) {
                this.events[index] = this.event;
            }
        }
        else {
            this.event.id = this.idGen++;
            this.events.push(this.event);
            this.event = null;
        }
        this.dialogVisible = false;
    }
    deleteEvent() {
        let index = this.findEventIndexById(this.event.id);
        if (index >= 0) {
            this.events.splice(index, 1);
        }
        this.dialogVisible = false;
    }
    findEventIndexById(id) {
        let index = -1;
        for (let i = 0; i < this.events.length; i++) {
            if (id == this.events[i].id) {
                index = i;
                break;
            }
        }
        return index;
    }
};
ScheduleDemo = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__("../../../../../src/app/showcase/components/schedule/scheduledemo.html"),
        styles: [`
        .ui-grid-row div {
          padding: 4px 10px
        }
        
        .ui-grid-row div label {
          font-weight: bold;
        }
  `]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service_eventservice__["a" /* EventService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__service_eventservice__["a" /* EventService */]) === "function" && _a || Object])
], ScheduleDemo);

class MyEvent {
    constructor() {
        this.allDay = true;
    }
}
/* unused harmony export MyEvent */

var _a;
//# sourceMappingURL=scheduledemo.js.map

/***/ })

});
//# sourceMappingURL=scheduledemo.module.chunk.js.map