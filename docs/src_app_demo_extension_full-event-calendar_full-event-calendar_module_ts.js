"use strict";
(self["webpackChunkng_able_pro"] = self["webpackChunkng_able_pro"] || []).push([["src_app_demo_extension_full-event-calendar_full-event-calendar_module_ts"],{

/***/ 76919:
/*!******************************************************************************************!*\
  !*** ./src/app/demo/extension/full-event-calendar/full-event-calendar-routing.module.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FullEventCalendarRoutingModule": () => (/* binding */ FullEventCalendarRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _full_event_calendar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./full-event-calendar.component */ 60153);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);




const routes = [
    {
        path: '',
        component: _full_event_calendar_component__WEBPACK_IMPORTED_MODULE_0__.FullEventCalendarComponent
    }
];
class FullEventCalendarRoutingModule {
}
FullEventCalendarRoutingModule.ɵfac = function FullEventCalendarRoutingModule_Factory(t) { return new (t || FullEventCalendarRoutingModule)(); };
FullEventCalendarRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: FullEventCalendarRoutingModule });
FullEventCalendarRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](FullEventCalendarRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 60153:
/*!*************************************************************************************!*\
  !*** ./src/app/demo/extension/full-event-calendar/full-event-calendar.component.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FullEventCalendarComponent": () => (/* binding */ FullEventCalendarComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _theme_shared_components_card_card_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../theme/shared/components/card/card.component */ 84631);
/* harmony import */ var _fullcalendar_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fullcalendar/angular */ 35717);




class FullEventCalendarComponent {
    constructor() {
        this.dateObj = new Date();
        this.yearMonth = this.dateObj.getUTCFullYear() + '-' + (this.dateObj.getUTCMonth() + 1);
        this.calendarOptions = {
            initialView: 'dayGridMonth',
            events: [
                {
                    title: 'All Day Event',
                    start: (0,_angular_common__WEBPACK_IMPORTED_MODULE_1__.formatDate)(this.yearMonth + '-01', 'yyyy-MM-dd', 'en-US'),
                    borderColor: '#04a9f5',
                    backgroundColor: '#04a9f5',
                    textColor: '#fff'
                },
                {
                    title: 'Long Event',
                    start: (0,_angular_common__WEBPACK_IMPORTED_MODULE_1__.formatDate)(this.yearMonth + '-07', 'yyyy-MM-dd', 'en-US'),
                    end: (0,_angular_common__WEBPACK_IMPORTED_MODULE_1__.formatDate)(this.yearMonth + '-10', 'yyyy-MM-dd', 'en-US'),
                    borderColor: '#f44236',
                    backgroundColor: '#f44236',
                    textColor: '#fff'
                },
                {
                    id: '999',
                    title: 'Repeating Event',
                    start: (0,_angular_common__WEBPACK_IMPORTED_MODULE_1__.formatDate)(this.yearMonth + '-09 09:00:00 PM', 'yyyy-MM-dd hh:mm:ss', 'en-US'),
                    borderColor: '#f4c22b',
                    backgroundColor: '#f4c22b',
                    textColor: '#fff'
                },
                {
                    id: '1000',
                    title: 'Repeating Event',
                    start: (0,_angular_common__WEBPACK_IMPORTED_MODULE_1__.formatDate)(this.yearMonth + '-16 08:00:00 AM', 'yyyy-MM-dd hh:mm:ss', 'en-US'),
                    borderColor: '#3ebfea',
                    backgroundColor: '#3ebfea',
                    textColor: '#fff'
                },
                {
                    title: 'Conference',
                    start: (0,_angular_common__WEBPACK_IMPORTED_MODULE_1__.formatDate)(this.yearMonth + '-11', 'yyyy-MM-dd', 'en-US'),
                    end: (0,_angular_common__WEBPACK_IMPORTED_MODULE_1__.formatDate)(this.yearMonth + '-13', 'yyyy-MM-dd', 'en-US'),
                    borderColor: '#1de9b6',
                    backgroundColor: '#1de9b6',
                    textColor: '#fff'
                },
                {
                    title: 'Meeting',
                    start: (0,_angular_common__WEBPACK_IMPORTED_MODULE_1__.formatDate)(this.yearMonth + '-12 10:00:00 PM', 'yyyy-MM-dd hh:mm:ss', 'en-US'),
                    end: (0,_angular_common__WEBPACK_IMPORTED_MODULE_1__.formatDate)(this.yearMonth + '-12 12:30:00 AM', 'yyyy-MM-dd hh:mm:ss', 'en-US'),
                    textColor: '#fff'
                },
                {
                    title: 'Lunch',
                    start: (0,_angular_common__WEBPACK_IMPORTED_MODULE_1__.formatDate)(this.yearMonth + '-12 12:00:00 PM', 'yyyy-MM-dd hh:mm:ss', 'en-US'),
                    borderColor: '#f44236',
                    backgroundColor: '#f44236',
                    textColor: '#fff'
                },
                {
                    title: 'Meeting',
                    start: (0,_angular_common__WEBPACK_IMPORTED_MODULE_1__.formatDate)(this.yearMonth + '-12 02:30:00 PM', 'yyyy-MM-dd hh:mm:ss', 'en-US'),
                    textColor: '#fff'
                },
                {
                    title: 'Happy Hour',
                    start: (0,_angular_common__WEBPACK_IMPORTED_MODULE_1__.formatDate)(this.yearMonth + '-12 05:30:00 PM', 'yyyy-MM-dd hh:mm:ss', 'en-US'),
                    borderColor: '#a389d4',
                    backgroundColor: '#a389d4',
                    textColor: '#fff'
                },
                {
                    title: 'Dinner',
                    start: (0,_angular_common__WEBPACK_IMPORTED_MODULE_1__.formatDate)(this.yearMonth + '-12 08:00:00 PM', 'yyyy-MM-dd hh:mm:ss', 'en-US'),
                    textColor: '#fff'
                },
                {
                    title: 'Birthday Party',
                    start: (0,_angular_common__WEBPACK_IMPORTED_MODULE_1__.formatDate)(this.yearMonth + '-13 07:30:00 AM', 'yyyy-MM-dd hh:mm:ss', 'en-US'),
                    textColor: '#fff'
                },
                {
                    title: 'Click for Google',
                    url: 'http://google.com/',
                    start: (0,_angular_common__WEBPACK_IMPORTED_MODULE_1__.formatDate)(this.yearMonth + '-28', 'yyyy-MM-dd', 'en-US'),
                    borderColor: '#a389d4',
                    backgroundColor: '#a389d4',
                    textColor: '#fff'
                }
            ]
        };
    }
    ngOnInit() { }
}
FullEventCalendarComponent.ɵfac = function FullEventCalendarComponent_Factory(t) { return new (t || FullEventCalendarComponent)(); };
FullEventCalendarComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: FullEventCalendarComponent, selectors: [["app-full-event-calendar"]], decls: 4, vars: 2, consts: [[1, "row"], [1, "col-sm-12"], ["cardTitle", "Full Calendar", "cardClass", "elite-calendar", 3, "options"], [3, "options"]], template: function FullEventCalendarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "app-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "full-calendar", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("options", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("options", ctx.calendarOptions);
    } }, directives: [_theme_shared_components_card_card_component__WEBPACK_IMPORTED_MODULE_0__.CardComponent, _fullcalendar_angular__WEBPACK_IMPORTED_MODULE_3__.FullCalendarComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmdWxsLWV2ZW50LWNhbGVuZGFyLmNvbXBvbmVudC5zY3NzIn0= */"], encapsulation: 2 });


/***/ }),

/***/ 13082:
/*!**********************************************************************************!*\
  !*** ./src/app/demo/extension/full-event-calendar/full-event-calendar.module.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FullEventCalendarModule": () => (/* binding */ FullEventCalendarModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _full_event_calendar_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./full-event-calendar-routing.module */ 76919);
/* harmony import */ var _full_event_calendar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./full-event-calendar.component */ 60153);
/* harmony import */ var _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../theme/shared/shared.module */ 95702);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _fullcalendar_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fullcalendar/angular */ 35717);
/* harmony import */ var _fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fullcalendar/daygrid */ 13947);
/* harmony import */ var _fullcalendar_interaction__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fullcalendar/interaction */ 85194);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);









_fullcalendar_angular__WEBPACK_IMPORTED_MODULE_5__.FullCalendarModule.registerPlugins([
    // register FullCalendar plugins
    _fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_3__["default"],
    _fullcalendar_interaction__WEBPACK_IMPORTED_MODULE_4__["default"]
]);
class FullEventCalendarModule {
}
FullEventCalendarModule.ɵfac = function FullEventCalendarModule_Factory(t) { return new (t || FullEventCalendarModule)(); };
FullEventCalendarModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: FullEventCalendarModule });
FullEventCalendarModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ providers: [], imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _full_event_calendar_routing_module__WEBPACK_IMPORTED_MODULE_0__.FullEventCalendarRoutingModule, _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule, _fullcalendar_angular__WEBPACK_IMPORTED_MODULE_5__.FullCalendarModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](FullEventCalendarModule, { declarations: [_full_event_calendar_component__WEBPACK_IMPORTED_MODULE_1__.FullEventCalendarComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _full_event_calendar_routing_module__WEBPACK_IMPORTED_MODULE_0__.FullEventCalendarRoutingModule, _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule, _fullcalendar_angular__WEBPACK_IMPORTED_MODULE_5__.FullCalendarModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_demo_extension_full-event-calendar_full-event-calendar_module_ts.js.map