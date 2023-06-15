"use strict";
(self["webpackChunkng_able_pro"] = self["webpackChunkng_able_pro"] || []).push([["src_app_demo_panels_membership_mshp-newsletter_mshp-newsletter_module_ts"],{

/***/ 48958:
/*!******************************************************************************************!*\
  !*** ./src/app/demo/panels/membership/mshp-newsletter/mshp-newsletter-routing.module.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MshpNewsletterRoutingModule": () => (/* binding */ MshpNewsletterRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _mshp_newsletter_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mshp-newsletter.component */ 92712);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);




const routes = [
    {
        path: '',
        component: _mshp_newsletter_component__WEBPACK_IMPORTED_MODULE_0__.MshpNewsletterComponent
    }
];
class MshpNewsletterRoutingModule {
}
MshpNewsletterRoutingModule.ɵfac = function MshpNewsletterRoutingModule_Factory(t) { return new (t || MshpNewsletterRoutingModule)(); };
MshpNewsletterRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: MshpNewsletterRoutingModule });
MshpNewsletterRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](MshpNewsletterRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 92712:
/*!*************************************************************************************!*\
  !*** ./src/app/demo/panels/membership/mshp-newsletter/mshp-newsletter.component.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MshpNewsletterComponent": () => (/* binding */ MshpNewsletterComponent)
/* harmony export */ });
/* harmony import */ var _node_modules_tinymce_tinymce_min_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../node_modules/tinymce/tinymce.min.js */ 68610);
/* harmony import */ var _node_modules_tinymce_tinymce_min_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_tinymce_tinymce_min_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _theme_shared_components_card_card_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../theme/shared/components/card/card.component */ 84631);
/* harmony import */ var angular2_tinymce__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-tinymce */ 85381);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 90587);





class MshpNewsletterComponent {
    constructor() {
        this.basicContent =
            '<table border="0" width="100%" cellspacing="0" cellpadding="0" bgcolor="#F0F0F0">' +
                '<tbody>' +
                '<tr>' +
                '<td style="background-color: #ffffff;" align="center" valign="top" bgcolor="#ffffff"><br />' +
                '<table style="width: 100%px; max-width: 600px;" border="0" width="100%" cellspacing="0" cellpadding="0">' +
                '<tbody>' +
                '<tr><td height="30"> </td></tr>' +
                '<tr><td align="center">[LOGO]</td></tr>' +
                '<tr><td height="20"> </td></tr>' +
                '<tr><td><p style="text-align: center; margin: 0; font-family: Helvetica, Arial, sans-serif; font-size: 26px; color: #222222;">Welcome to [COMPANY]</p></td></tr>' +
                '<tr><td align="center"><hr/></td></tr>' +
                '<tr><td height="30"> </td></tr>' +
                '<tr>' +
                '<td style="background-color: #ffffff; padding: 12px 24px 12px 24px;" align="left"><br />' +
                '<p style="font-family: Helvetica, Arial, sans-serif; font-size: 18px; font-weight: 600; color: #374550;">Hello, [NAME]</p>' +
                '<p style="font-family: Helvetica, Arial, sans-serif; font-size: 14px; line-height: 20px; text-align: left; color: #222222;">You are now a member of [COMPANY]. <br /> Here are your login details. Please keep them in a\n safe place: </p>' +
                '</td>' +
                '</tr>' +
                '<tr>' +
                '<td style="background-color: #ffffff; padding: 12px 24px 12px 24px;" align="left">' +
                '<p style="font-family: Helvetica, Arial, sans-serif; font-size: 14px; line-height: 20px; text-align: left; color: #222222;">Here are your login details. Please keep them in a safe place: <br /> <br /> Username: [USERNAME] or [EMAIL]<br /> Password: [PASSWORD]</p>' +
                '</td>' +
                '</tr>' +
                '<tr><td height="65"> </td></tr>' +
                '<tr>' +
                '<td align="center">' +
                '<table>' +
                '<tbody>' +
                '<tr>' +
                '<td style="background: #289CDC; padding: 15px 18px; -webkit-border-radius: 4px; border-radius: 4px; font-family: Helvetica, Arial, sans-serif;" align="center" bgcolor="#289CDC"><a target="_blank" href="[LINK]" style="color: #ffffff; text-decoration: none; font-size: 16px;">Login</a></td>' +
                '</tr>' +
                '</tbody>' +
                '</table>' +
                '</td>' +
                '</tr>' +
                '<tr>' +
                '<td height="65"> </td>' +
                '</tr>' +
                '<tr>' +
                '<td style="border-bottom: 1px solid #DDDDDD;"> </td>' +
                '</tr>' +
                '<tr>' +
                '<td height="25"> </td>' +
                '</tr>' +
                '<tr>' +
                '<td style="text-align: center;" align="center">' +
                '<table border="0" width="95%" cellspacing="0" cellpadding="0" align="center">' +
                '<tbody>' +
                '<tr>' +
                '<td style="font-family: Helvetica, Arial, sans-serif;" align="left" valign="top">' +
                '<p style="text-align: left; color: #999999; font-size: 12px; font-weight: normal; line-height: 20px;">This email is sent to you directly from <a href="http://www.wojoscripts.com/mmp">[COMPANY]</a> The information above is gathered from the user input. <br /> ©[DATE] <a href="javascript:">[COMPANY]</a>. All rights reserved.</p>' +
                '</td>' +
                '<td width="30"> </td>' +
                '<td width="16"> </td>' +
                '</tr>' +
                '</tbody>' +
                '</table>' +
                '</td>' +
                '</tr>' +
                '</tbody>' +
                '</table>' +
                '</td>' +
                '</tr>' +
                '</tbody>' +
                '</table>';
    }
    ngOnInit() { }
}
MshpNewsletterComponent.ɵfac = function MshpNewsletterComponent_Factory(t) { return new (t || MshpNewsletterComponent)(); };
MshpNewsletterComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: MshpNewsletterComponent, selectors: [["app-mshp-newsletter"]], decls: 26, vars: 2, consts: [[1, "row", "btn-page"], [1, "col-sm-12"], [3, "hidHeader"], [1, "row"], [1, "col-sm-6"], [1, "form-group"], ["type", "email", "id", "Email", "placeholder", "Email From", 1, "form-control"], ["type", "text", "id", "Recipients", "placeholder", "Recipients", 1, "form-control"], ["type", "email", "id", "Subject", "placeholder", "Email Subject", 1, "form-control"], [1, "form-group", "fill"], ["type", "file", "id", "Attachment", "placeholder", "Attachment", 1, "form-control"], [1, "label"], [3, "ngModel", "ngModelChange"], ["tinymce", "tinymce"], [1, "btn", "btn-primary"], [1, "btn", "btn-danger"]], template: function MshpNewsletterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "app-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "app-tinymce", 12, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function MshpNewsletterComponent_Template_app_tinymce_ngModelChange_20_listener($event) { return ctx.basicContent = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "Send Mail");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "Clear");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("hidHeader", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.basicContent);
    } }, directives: [_theme_shared_components_card_card_component__WEBPACK_IMPORTED_MODULE_1__.CardComponent, angular2_tinymce__WEBPACK_IMPORTED_MODULE_3__.TinymceComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtc2hwLW5ld3NsZXR0ZXIuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 20390:
/*!**********************************************************************************!*\
  !*** ./src/app/demo/panels/membership/mshp-newsletter/mshp-newsletter.module.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MshpNewsletterModule": () => (/* binding */ MshpNewsletterModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _mshp_newsletter_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mshp-newsletter-routing.module */ 48958);
/* harmony import */ var _mshp_newsletter_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mshp-newsletter.component */ 92712);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var angular2_tinymce__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular2-tinymce */ 85381);
/* harmony import */ var _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../theme/shared/shared.module */ 95702);
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-datatables */ 51282);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);








class MshpNewsletterModule {
}
MshpNewsletterModule.ɵfac = function MshpNewsletterModule_Factory(t) { return new (t || MshpNewsletterModule)(); };
MshpNewsletterModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: MshpNewsletterModule });
MshpNewsletterModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _mshp_newsletter_routing_module__WEBPACK_IMPORTED_MODULE_0__.MshpNewsletterRoutingModule, _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, angular_datatables__WEBPACK_IMPORTED_MODULE_3__.DataTablesModule, angular2_tinymce__WEBPACK_IMPORTED_MODULE_7__.TinymceModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](MshpNewsletterModule, { declarations: [_mshp_newsletter_component__WEBPACK_IMPORTED_MODULE_1__.MshpNewsletterComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _mshp_newsletter_routing_module__WEBPACK_IMPORTED_MODULE_0__.MshpNewsletterRoutingModule, _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, angular_datatables__WEBPACK_IMPORTED_MODULE_3__.DataTablesModule, angular2_tinymce__WEBPACK_IMPORTED_MODULE_7__.TinymceModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_demo_panels_membership_mshp-newsletter_mshp-newsletter_module_ts.js.map