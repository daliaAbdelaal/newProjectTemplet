"use strict";
(self["webpackChunkng_able_pro"] = self["webpackChunkng_able_pro"] || []).push([["src_app_demo_extension_files-upload_files-upload_module_ts"],{

/***/ 22500:
/*!****************************************************************************!*\
  !*** ./src/app/demo/extension/files-upload/files-upload-routing.module.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FilesUploadRoutingModule": () => (/* binding */ FilesUploadRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _files_upload_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./files-upload.component */ 81288);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);




const routes = [
    {
        path: '',
        component: _files_upload_component__WEBPACK_IMPORTED_MODULE_0__.FilesUploadComponent
    }
];
class FilesUploadRoutingModule {
}
FilesUploadRoutingModule.ɵfac = function FilesUploadRoutingModule_Factory(t) { return new (t || FilesUploadRoutingModule)(); };
FilesUploadRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: FilesUploadRoutingModule });
FilesUploadRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](FilesUploadRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 81288:
/*!***********************************************************************!*\
  !*** ./src/app/demo/extension/files-upload/files-upload.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FilesUploadComponent": () => (/* binding */ FilesUploadComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _iplab_ngx_file_upload__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @iplab/ngx-file-upload */ 66283);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _theme_shared_components_card_card_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../theme/shared/components/card/card.component */ 84631);






class FilesUploadComponent {
    constructor() {
        this.filesControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl(null, _iplab_ngx_file_upload__WEBPACK_IMPORTED_MODULE_2__.FileUploadValidators.filesLimit(2));
        this.demoForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroup({
            files: this.filesControl
        });
    }
    ngOnInit() { }
    toggleStatus() {
        this.filesControl.disabled ? this.filesControl.enable() : this.filesControl.disable();
    }
}
FilesUploadComponent.ɵfac = function FilesUploadComponent_Factory(t) { return new (t || FilesUploadComponent)(); };
FilesUploadComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: FilesUploadComponent, selectors: [["app-files-upload"]], decls: 8, vars: 2, consts: [[1, "row"], [1, "col-sm-12"], ["cardTitle", "File Upload", 3, "options"], [3, "formGroup"], ["formControlName", "files"], [1, "text-center", "m-t-20"], [1, "btn", "btn-primary"]], template: function FilesUploadComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "app-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "file-upload", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "Upload Now");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("options", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.demoForm);
    } }, directives: [_theme_shared_components_card_card_component__WEBPACK_IMPORTED_MODULE_0__.CardComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroupDirective, _iplab_ngx_file_upload__WEBPACK_IMPORTED_MODULE_2__.FileUploadComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlName], styles: ["file-upload {\n  min-height: 150px;\n  border: 1px solid rgba(42, 42, 42, 0.05);\n  background: rgba(204, 204, 204, 0.15);\n  padding: 20px;\n  border-radius: 5px;\n  box-shadow: inset 0 0 5px 0 rgba(43, 43, 43, 0.1);\n  outline: none !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGVzLXVwbG9hZC5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXElUJTIwU0hPUFxcRGVza3RvcFxccHJvamVjdCUyMHdpdGglMjByZWFkeSUyMHRlbXBsYXRlXFxmdWxsLXZlcnNpb25cXHNyY1xcYXBwXFxkZW1vXFxleHRlbnNpb25cXGZpbGVzLXVwbG9hZFxcZmlsZXMtdXBsb2FkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQUE7RUFDQSx3Q0FBQTtFQUNBLHFDQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBRUEsaURBQUE7RUFDQSx3QkFBQTtBQ0NKIiwiZmlsZSI6ImZpbGVzLXVwbG9hZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImZpbGUtdXBsb2FkIHtcbiAgICBtaW4taGVpZ2h0OiAxNTBweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDQyLCA0MiwgNDIsIDAuMDUpO1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMjA0LCAyMDQsIDIwNCwgMC4xNSk7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIDAgNXB4IDAgcmdiYSg0MywgNDMsIDQzLCAwLjEpO1xuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCA1cHggMCByZ2JhKDQzLCA0MywgNDMsIDAuMSk7XG4gICAgb3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xufVxuIiwiZmlsZS11cGxvYWQge1xuICBtaW4taGVpZ2h0OiAxNTBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSg0MiwgNDIsIDQyLCAwLjA1KTtcbiAgYmFja2dyb3VuZDogcmdiYSgyMDQsIDIwNCwgMjA0LCAwLjE1KTtcbiAgcGFkZGluZzogMjBweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMCA1cHggMCByZ2JhKDQzLCA0MywgNDMsIDAuMSk7XG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMCA1cHggMCByZ2JhKDQzLCA0MywgNDMsIDAuMSk7XG4gIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcbn0iXX0= */"], encapsulation: 2 });


/***/ }),

/***/ 52667:
/*!********************************************************************!*\
  !*** ./src/app/demo/extension/files-upload/files-upload.module.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FilesUploadModule": () => (/* binding */ FilesUploadModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _files_upload_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./files-upload-routing.module */ 22500);
/* harmony import */ var _files_upload_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./files-upload.component */ 81288);
/* harmony import */ var _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../theme/shared/shared.module */ 95702);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _iplab_ngx_file_upload__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @iplab/ngx-file-upload */ 66283);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);







class FilesUploadModule {
}
FilesUploadModule.ɵfac = function FilesUploadModule_Factory(t) { return new (t || FilesUploadModule)(); };
FilesUploadModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: FilesUploadModule });
FilesUploadModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _files_upload_routing_module__WEBPACK_IMPORTED_MODULE_0__.FilesUploadRoutingModule, _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _iplab_ngx_file_upload__WEBPACK_IMPORTED_MODULE_6__.FileUploadModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](FilesUploadModule, { declarations: [_files_upload_component__WEBPACK_IMPORTED_MODULE_1__.FilesUploadComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _files_upload_routing_module__WEBPACK_IMPORTED_MODULE_0__.FilesUploadRoutingModule, _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _iplab_ngx_file_upload__WEBPACK_IMPORTED_MODULE_6__.FileUploadModule] }); })();


/***/ }),

/***/ 66283:
/*!********************************************************************************************!*\
  !*** ./node_modules/@iplab/ngx-file-upload/__ivy_ngcc__/fesm2015/iplab-ngx-file-upload.js ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FileSizeValidator": () => (/* binding */ FileSizeValidator),
/* harmony export */   "FileUploadAttributeComponent": () => (/* binding */ FileUploadAttributeComponent),
/* harmony export */   "FileUploadComponent": () => (/* binding */ FileUploadComponent),
/* harmony export */   "FileUploadControl": () => (/* binding */ FileUploadControl),
/* harmony export */   "FileUploadDropZoneComponent": () => (/* binding */ FileUploadDropZoneComponent),
/* harmony export */   "FileUploadModule": () => (/* binding */ FileUploadModule),
/* harmony export */   "FileUploadService": () => (/* binding */ FileUploadService),
/* harmony export */   "FileUploadTypes": () => (/* binding */ FileUploadTypes),
/* harmony export */   "FileUploadValidators": () => (/* binding */ FileUploadValidators),
/* harmony export */   "FilesAcceptDirective": () => (/* binding */ FilesAcceptDirective),
/* harmony export */   "FilesAcceptValidator": () => (/* binding */ FilesAcceptValidator),
/* harmony export */   "FilesLimitValidator": () => (/* binding */ FilesLimitValidator),
/* harmony export */   "SimpleFileUploadComponent": () => (/* binding */ SimpleFileUploadComponent),
/* harmony export */   "ɵa": () => (/* binding */ FileUploadAbstract),
/* harmony export */   "ɵb": () => (/* binding */ ZoomAnimation),
/* harmony export */   "ɵc": () => (/* binding */ InsertAnimation),
/* harmony export */   "ɵd": () => (/* binding */ FileUploadListItemComponent),
/* harmony export */   "ɵe": () => (/* binding */ FileUploadIconComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 84505);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 92218);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/animations */ 31631);









const _c0 = ["placeholder"];
const _c1 = ["item"];
const _c2 = ["inputRef"];
const _c3 = ["labelRef"];
function FileUploadComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
} }
function FileUploadComponent_ng_template_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Drag and drop");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " files");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " or click here ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function FileUploadComponent_ng_template_3_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Click here");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " to");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " choose a files ");
} }
function FileUploadComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "file-upload-drop-zone");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FileUploadComponent_ng_template_3_ng_container_1_Template, 6, 0, "ng-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, FileUploadComponent_ng_template_3_ng_template_2_Template, 5, 0, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const isFileDragDropAvailable_r6 = ctx.isFileDragDropAvailable;
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", isFileDragDropAvailable_r6)("ngIfElse", _r8);
} }
function FileUploadComponent_div_7_ng_template_1_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
} }
const _c4 = function (a0, a1, a2, a3) { return { $implicit: a0, file: a1, index: a2, control: a3 }; };
function FileUploadComponent_div_7_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, FileUploadComponent_div_7_ng_template_1_ng_container_0_Template, 1, 0, "ng-container", 2);
} if (rf & 2) {
    const file_r13 = ctx.$implicit;
    const i_r14 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r10.listItem ? ctx_r10.listItem : _r11)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction4"](2, _c4, file_r13, file_r13, i_r14, ctx_r10.control));
} }
function FileUploadComponent_div_7_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "file-upload-list-item", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Remove");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r16 = ctx.index;
    const file_r17 = ctx.file;
    const control_r18 = ctx.control;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("index", i_r16)("file", file_r17)("control", control_r18);
} }
function FileUploadComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("@insertAnimation.done", function FileUploadComponent_div_7_Template_div_animation_insertAnimation_done_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r19.animationListFinished($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FileUploadComponent_div_7_ng_template_1_Template, 1, 7, "ng-template", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, FileUploadComponent_div_7_ng_template_3_Template, 2, 3, "ng-template", null, 11, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@insertAnimation", ctx_r5.control.size);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, ctx_r5.control.valueChanges));
} }
const _c5 = ["*"];
function FileUploadIconComponent__svg_svg_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "g");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FileUploadIconComponent__svg_svg_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "g");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FileUploadIconComponent__svg_svg_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "g");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FileUploadIconComponent__svg_svg_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "g");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FileUploadIconComponent__svg_svg_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "g");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c6 = ["overlay"];
const _c7 = ["file-drop-zone", ""];
function FileUploadAttributeComponent_div_1_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
} }
function FileUploadAttributeComponent_div_1_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "file-upload-drop-zone");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Drop");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " it here ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FileUploadAttributeComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, FileUploadAttributeComponent_div_1_ng_container_3_Template, 1, 0, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, FileUploadAttributeComponent_div_1_ng_template_4_Template, 4, 0, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r0.templateRef ? ctx_r0.templateRef : _r3);
} }
const _c8 = ["button"];
const _c9 = ["simple", ""];
function SimpleFileUploadComponent_ng_template_1_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
} }
const _c10 = function (a0, a1, a2) { return { $implicit: a0, control: a1, file: a2 }; };
function SimpleFileUploadComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, SimpleFileUploadComponent_ng_template_1_ng_container_0_Template, 1, 0, "ng-container", 5);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r0.placeholderRef ? ctx_r0.placeholderRef : _r1)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](2, _c10, ctx_r0.control.value[0], ctx_r0.control, ctx_r0.control.value[0]));
} }
function SimpleFileUploadComponent_ng_template_3_span_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const file_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](file_r9.name);
} }
function SimpleFileUploadComponent_ng_template_3_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " Select a file... ");
} }
function SimpleFileUploadComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, SimpleFileUploadComponent_ng_template_3_span_0_Template, 2, 1, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SimpleFileUploadComponent_ng_template_3_ng_template_1_Template, 1, 0, "ng-template", null, 10, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
} if (rf & 2) {
    const file_r9 = ctx.$implicit;
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", file_r9)("ngIfElse", _r11);
} }
function SimpleFileUploadComponent_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
} }
function SimpleFileUploadComponent_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "svg", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "g");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "path", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Browse");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c11 = function (a0) { return { control: a0 }; };
function IsNullOrEmpty(value) {
    return value == null || value.length === 0;
}

var STATUS;
(function (STATUS) {
    STATUS[STATUS["INVALID"] = 0] = "INVALID";
    STATUS[STATUS["VALID"] = 1] = "VALID";
    STATUS[STATUS["DISABLED"] = 2] = "DISABLED";
})(STATUS || (STATUS = {}));
var FileEvent;
(function (FileEvent) {
    FileEvent["click"] = "click";
    FileEvent["focus"] = "focus";
    FileEvent["blur"] = "blur";
})(FileEvent || (FileEvent = {}));
class FileUploadControl {
    constructor(validators) {
        this.files = new Set();
        this.listVisible = true;
        this.status = STATUS.VALID;
        this.errors = [];
        this.validators = [];
        this.multipleEnabled = true;
        this.multipleChanged = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(this.multipleEnabled);
        this.statusChanged = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
        this.eventsChanged = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
        this.accept = null;
        this.acceptChanged = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(this.accept);
        /**
         * track status `VALID`, `INVALID` or `DISABLED`
         */
        this.statusChanges = this.statusChanged.asObservable();
        /**
         * emit an event every time the value of the control
         * changes.
         * Initially returns last value
         */
        this.valueChanges = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject([]);
        /**
         * @internal
         * used to trigger layout change for list visibility
         */
        this.listVisibilityChanges = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(this.listVisible);
        /**
         * track changed on accept attribute
         */
        this.acceptChanges = this.acceptChanged.asObservable();
        /**
         * emit an event every time user programmatically ask for certain event
         */
        this.eventsChanges = this.eventsChanged.asObservable();
        /**
         * track changed on multiple attribute
         */
        this.multipleChanges = this.multipleChanged.asObservable();
        this.defineValidators(validators);
    }
    /**
     * set functions that determines the synchronous validity of this control.
     */
    setValidators(newValidators) {
        this.defineValidators(newValidators);
        this.validate();
        return this;
    }
    defineValidators(validators) {
        if (!IsNullOrEmpty(validators)) {
            this.validators = Array.isArray(validators) ? [...validators] : [validators];
        }
    }
    addFile(file) {
        /**
         * if multiple is disabled and one file exists
         * clear it and reupload a new one
         */
        if (!this.multipleEnabled && this.files.size === 1) {
            this.files.clear();
        }
        this.files.add(file);
        this.validate();
        this.valueChanges.next(Array.from(this.files.values()));
        return this;
    }
    removeFile(file) {
        if (!this.disabled) {
            this.files.delete(file);
            this.validate();
            this.valueChanges.next(Array.from(this.files.values()));
        }
        return this;
    }
    addFiles(files) {
        this.addMultipleFiles(Array.from(files));
        return this;
    }
    /**
     * @internal
     * used to prevent valueChanges emit more times
     * when multiple files are uploaded
     */
    addMultipleFiles(files) {
        if (!this.multipleEnabled && !IsNullOrEmpty(files)) {
            // add only one file
            this.addFile(files[0]);
            return;
        }
        files.forEach(file => this.files.add(file));
        this.validate();
        this.valueChanges.next(Array.from(this.files.values()));
    }
    get valid() {
        return this.errors.length === 0 && this.status !== STATUS.DISABLED;
    }
    get invalid() {
        return this.errors.length > 0;
    }
    getError() {
        return this.errors;
    }
    /**
     * number of uploaded files
     */
    get size() {
        return this.files.size;
    }
    /**
     * return list of Files
     */
    get value() {
        return Array.from(this.files.values());
    }
    setValue(files) {
        this.files.clear();
        if (files instanceof Array) {
            this.addMultipleFiles(files);
        }
        else {
            throw Error(`FormControl.setValue was provided with wrong argument type, ${files} was provided instead Array<File>`);
        }
        return this;
    }
    /**
     * reset the control
     */
    clear() {
        this.files.clear();
        this.validate();
        this.valueChanges.next(Array.from(this.files.values()));
        return this;
    }
    get isListVisible() {
        return this.listVisible;
    }
    setListVisibility(isVisible = true) {
        this.listVisible = isVisible;
        this.listVisibilityChanges.next(this.listVisible);
        return this;
    }
    get disabled() {
        return this.status === STATUS.DISABLED;
    }
    enable(isEnabled = true) {
        this.status = isEnabled ? STATUS.VALID : STATUS.DISABLED;
        this.validate();
        this.statusChanged.next(this.status);
        return this;
    }
    disable(isDisabled = true) {
        this.status = isDisabled ? STATUS.DISABLED : STATUS.VALID;
        this.validate();
        this.statusChanged.next(this.status);
        return this;
    }
    click() {
        this.eventsChanged.next(FileEvent.click);
        return this;
    }
    focus() {
        this.eventsChanged.next(FileEvent.focus);
        return this;
    }
    blur() {
        this.eventsChanged.next(FileEvent.blur);
        return this;
    }
    /**
     * specifies the types of files that the server accepts
     *
     * ### Example
     *
     * ```
     * acceptFiles("file_extension|audio/*|video/*|image/*|media_type")
     * ```
     *
     * To specify more than one value, separate the values with a comma (e.g. acceptFiles("audio/*,video/*,image/*").
     *
     */
    acceptFiles(accept) {
        this.accept = accept;
        this.acceptChanged.next(this.accept);
        return this;
    }
    acceptAll() {
        this.accept = null;
        this.acceptChanged.next(this.accept);
        return this;
    }
    get isMultiple() {
        return this.multipleEnabled;
    }
    multiple(isEnabled = true) {
        this.multipleEnabled = isEnabled;
        this.multipleChanged.next(this.multipleEnabled);
        return this;
    }
    validate() {
        if (this.status !== STATUS.DISABLED) {
            const currentState = this.valid;
            this.errors = this.validators.map((validator) => validator(this)).filter((isInvalid) => isInvalid);
            if (currentState !== this.valid) {
                this.statusChanged.next(this.valid ? STATUS.VALID : STATUS.INVALID);
            }
        }
        else {
            this.errors.length = 0;
        }
    }
}

// -owner-group-others-
// -rwxrwxrwx = 0777
var FileAccess;
(function (FileAccess) {
    FileAccess[FileAccess["None"] = 0] = "None";
    FileAccess[FileAccess["Read"] = 4] = "Read";
    FileAccess[FileAccess["Write"] = 2] = "Write";
    FileAccess[FileAccess["ReadWrite"] = 6] = "ReadWrite";
    FileAccess[FileAccess["Execute"] = 1] = "Execute";
    FileAccess[FileAccess["ReadWriteExecute"] = 7] = "ReadWriteExecute";
    FileAccess[FileAccess["ExecuteRead"] = 5] = "ExecuteRead";
    FileAccess[FileAccess["r"] = 4] = "r";
    FileAccess[FileAccess["w"] = 2] = "w";
    FileAccess[FileAccess["x"] = 1] = "x";
    FileAccess[FileAccess["rw"] = 6] = "rw";
    FileAccess[FileAccess["rwx"] = 7] = "rwx";
    FileAccess[FileAccess["xr"] = 5] = "xr";
})(FileAccess || (FileAccess = {}));
/**
 * This table lists some important MIME types for the Web copied from
 * https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Complete_list_of_MIME_types
 * http://www.iana.org/assignments/media-types/media-types.xhtml
 */
var FileUploadTypes;
(function (FileUploadTypes) {
    FileUploadTypes["arc"] = "application/octet-stream";
    FileUploadTypes["midi"] = "audio/midi";
    FileUploadTypes["ts"] = "application/typescript";
    FileUploadTypes["woff2"] = "font/woff2";
    FileUploadTypes["evy"] = "application/envoy";
    FileUploadTypes["fif"] = "application/fractals";
    FileUploadTypes["hta"] = "application/hta";
    FileUploadTypes["acx"] = "application/internet-property-stream";
    FileUploadTypes["dot"] = "application/msword";
    FileUploadTypes["dms"] = "application/octet-stream";
    FileUploadTypes["eps"] = "application/postscript";
    FileUploadTypes["ps"] = "application/postscript";
    FileUploadTypes["xla"] = "application/vnd.ms-excel";
    FileUploadTypes["xlc"] = "application/vnd.ms-excel";
    FileUploadTypes["xlm"] = "application/vnd.ms-excel";
    FileUploadTypes["xlt"] = "application/vnd.ms-excel";
    FileUploadTypes["xlw"] = "application/vnd.ms-excel";
    FileUploadTypes["msg"] = "application/vnd.ms-outlook";
    FileUploadTypes["sst"] = "application/vnd.ms-pkicertstore";
    FileUploadTypes["pot"] = "application/vnd.ms-powerpoint";
    FileUploadTypes["pps"] = "application/vnd.ms-powerpoint";
    FileUploadTypes["wcm"] = "application/vnd.ms-works";
    FileUploadTypes["wdb"] = "application/vnd.ms-works";
    FileUploadTypes["wks"] = "application/vnd.ms-works";
    FileUploadTypes["cdf"] = "application/x-cdf";
    FileUploadTypes["tgz"] = "application/x-compressed";
    FileUploadTypes["dcr"] = "application/x-director";
    FileUploadTypes["dxr"] = "application/x-director";
    FileUploadTypes["gz"] = "application/x-gzip";
    FileUploadTypes["ins"] = "application/x-internet-signup";
    FileUploadTypes["isp"] = "application/x-internet-signup";
    FileUploadTypes["iii"] = "application/x-iphone";
    FileUploadTypes["dll"] = "application/x-msdownload";
    FileUploadTypes["m13"] = "application/x-msmediaview";
    FileUploadTypes["m14"] = "application/x-msmediaview";
    FileUploadTypes["pma"] = "application/x-perfmon";
    FileUploadTypes["pmc"] = "application/x-perfmon";
    FileUploadTypes["pmr"] = "application/x-perfmon";
    FileUploadTypes["pmw"] = "application/x-perfmon";
    FileUploadTypes["pfx"] = "application/x-pkcs12";
    FileUploadTypes["spc"] = "application/x-pkcs7-certificates";
    FileUploadTypes["p7c"] = "application/x-pkcs7-mime";
    FileUploadTypes["texi"] = "application/x-texinfo";
    FileUploadTypes["roff"] = "application/x-troff";
    FileUploadTypes["tr"] = "application/x-troff";
    FileUploadTypes["man"] = "application/x-troff-man";
    FileUploadTypes["me"] = "application/x-troff-me";
    FileUploadTypes["ms"] = "application/x-troff-ms";
    FileUploadTypes["crt"] = "application/x-x509-ca-cert";
    FileUploadTypes["pko"] = "application/ynd.ms-pkipko";
    FileUploadTypes["snd"] = "audio/basic";
    FileUploadTypes["rmi"] = "audio/mid";
    FileUploadTypes["mp3"] = "audio/mpeg";
    FileUploadTypes["aifc"] = "audio/x-aiff";
    FileUploadTypes["aiff"] = "audio/x-aiff";
    FileUploadTypes["ra"] = "audio/x-pn-realaudio";
    FileUploadTypes["jpe"] = "image/jpeg";
    FileUploadTypes["jpeg"] = "image/jpeg";
    FileUploadTypes["jfif"] = "image/pipeg";
    FileUploadTypes["tif"] = "image/tiff";
    FileUploadTypes["mht"] = "message/rfc822";
    FileUploadTypes["mhtml"] = "message/rfc822";
    FileUploadTypes["nws"] = "message/rfc822";
    FileUploadTypes["htm"] = "text/html";
    FileUploadTypes["stm"] = "text/html";
    FileUploadTypes["uls"] = "text/iuls";
    FileUploadTypes["sct"] = "text/scriptlet";
    FileUploadTypes["htt"] = "text/webviewhtml";
    FileUploadTypes["htc"] = "text/x-component";
    FileUploadTypes["mp2"] = "video/mpeg";
    FileUploadTypes["mpa"] = "video/mpeg";
    FileUploadTypes["mpe"] = "video/mpeg";
    FileUploadTypes["mpg"] = "video/mpeg";
    FileUploadTypes["mpv2"] = "video/mpeg";
    FileUploadTypes["mov"] = "video/quicktime";
    FileUploadTypes["lsf"] = "video/x-la-asf";
    FileUploadTypes["lsx"] = "video/x-la-asf";
    FileUploadTypes["asr"] = "video/x-ms-asf";
    FileUploadTypes["asx"] = "video/x-ms-asf";
    FileUploadTypes["flr"] = "x-world/x-vrml";
    FileUploadTypes["vrml"] = "x-world/x-vrml";
    FileUploadTypes["wrz"] = "x-world/x-vrml";
    FileUploadTypes["xaf"] = "x-world/x-vrml";
    FileUploadTypes["xof"] = "x-world/x-vrml";
    FileUploadTypes["x3d"] = "application/vnd.hzn-3d-crossword";
    FileUploadTypes["3gp"] = "video/3gpp";
    FileUploadTypes["3g2"] = "video/3gpp2";
    FileUploadTypes["mseq"] = "application/vnd.mseq";
    FileUploadTypes["pwn"] = "application/vnd.3m.post-it-notes";
    FileUploadTypes["plb"] = "application/vnd.3gpp.pic-bw-large";
    FileUploadTypes["psb"] = "application/vnd.3gpp.pic-bw-small";
    FileUploadTypes["pvb"] = "application/vnd.3gpp.pic-bw-var";
    FileUploadTypes["tcap"] = "application/vnd.3gpp2.tcap";
    FileUploadTypes["7z"] = "application/x-7z-compressed";
    FileUploadTypes["abw"] = "application/x-abiword";
    FileUploadTypes["ace"] = "application/x-ace-compressed";
    FileUploadTypes["acc"] = "application/vnd.americandynamics.acc";
    FileUploadTypes["acu"] = "application/vnd.acucobol";
    FileUploadTypes["atc"] = "application/vnd.acucorp";
    FileUploadTypes["adp"] = "audio/adpcm";
    FileUploadTypes["aab"] = "application/x-authorware-bin";
    FileUploadTypes["aam"] = "application/x-authorware-map";
    FileUploadTypes["aas"] = "application/x-authorware-seg";
    FileUploadTypes["air"] = "application/vnd.adobe.air-application-installer-package+zip";
    FileUploadTypes["swf"] = "application/x-shockwave-flash";
    FileUploadTypes["fxp"] = "application/vnd.adobe.fxp";
    FileUploadTypes["pdf"] = "application/pdf";
    FileUploadTypes["ppd"] = "application/vnd.cups-ppd";
    FileUploadTypes["dir"] = "application/x-director";
    FileUploadTypes["xdp"] = "application/vnd.adobe.xdp+xml";
    FileUploadTypes["xfdf"] = "application/vnd.adobe.xfdf";
    FileUploadTypes["aac"] = "audio/x-aac";
    FileUploadTypes["ahead"] = "application/vnd.ahead.space";
    FileUploadTypes["azf"] = "application/vnd.airzip.filesecure.azf";
    FileUploadTypes["azs"] = "application/vnd.airzip.filesecure.azs";
    FileUploadTypes["azw"] = "application/vnd.amazon.ebook";
    FileUploadTypes["ami"] = "application/vnd.amiga.ami";
    FileUploadTypes["apk"] = "application/vnd.android.package-archive";
    FileUploadTypes["cii"] = "application/vnd.anser-web-certificate-issue-initiation";
    FileUploadTypes["fti"] = "application/vnd.anser-web-funds-transfer-initiation";
    FileUploadTypes["atx"] = "application/vnd.antix.game-component";
    FileUploadTypes["dmg"] = "application/x-apple-diskimage";
    FileUploadTypes["mpkg"] = "application/vnd.apple.installer+xml";
    FileUploadTypes["aw"] = "application/applixware";
    FileUploadTypes["les"] = "application/vnd.hhe.lesson-player";
    FileUploadTypes["swi"] = "application/vnd.aristanetworks.swi";
    FileUploadTypes["s"] = "text/x-asm";
    FileUploadTypes["atomcat"] = "application/atomcat+xml";
    FileUploadTypes["atomsvc"] = "application/atomsvc+xml";
    FileUploadTypes["atom"] = "application/atom+xml";
    FileUploadTypes["ac"] = "application/pkix-attr-cert";
    FileUploadTypes["aif"] = "audio/x-aiff";
    FileUploadTypes["avi"] = "video/x-msvideo";
    FileUploadTypes["aep"] = "application/vnd.audiograph";
    FileUploadTypes["dxf"] = "image/vnd.dxf";
    FileUploadTypes["dwf"] = "model/vnd.dwf";
    FileUploadTypes["par"] = "text/plain-bas";
    FileUploadTypes["bcpio"] = "application/x-bcpio";
    FileUploadTypes["bin"] = "application/octet-stream";
    FileUploadTypes["bmp"] = "image/bmp";
    FileUploadTypes["torrent"] = "application/x-bittorrent";
    FileUploadTypes["cod"] = "application/vnd.rim.cod";
    FileUploadTypes["mpm"] = "application/vnd.blueice.multipass";
    FileUploadTypes["bmi"] = "application/vnd.bmi";
    FileUploadTypes["sh"] = "application/x-sh";
    FileUploadTypes["btif"] = "image/prs.btif";
    FileUploadTypes["rep"] = "application/vnd.businessobjects";
    FileUploadTypes["bz"] = "application/x-bzip";
    FileUploadTypes["bz2"] = "application/x-bzip2";
    FileUploadTypes["csh"] = "application/x-csh";
    FileUploadTypes["c"] = "text/x-c";
    FileUploadTypes["cdxml"] = "application/vnd.chemdraw+xml";
    FileUploadTypes["css"] = "text/css";
    FileUploadTypes["cdx"] = "chemical/x-cdx";
    FileUploadTypes["cml"] = "chemical/x-cml";
    FileUploadTypes["csml"] = "chemical/x-csml";
    FileUploadTypes["cdbcmsg"] = "application/vnd.contact.cmsg";
    FileUploadTypes["cla"] = "application/vnd.claymore";
    FileUploadTypes["c4g"] = "application/vnd.clonk.c4group";
    FileUploadTypes["sub"] = "image/vnd.dvb.subtitle";
    FileUploadTypes["cdmia"] = "application/cdmi-capability";
    FileUploadTypes["cdmic"] = "application/cdmi-container";
    FileUploadTypes["cdmid"] = "application/cdmi-domain";
    FileUploadTypes["cdmio"] = "application/cdmi-object";
    FileUploadTypes["cdmiq"] = "application/cdmi-queue";
    FileUploadTypes["c11amc"] = "application/vnd.cluetrust.cartomobile-config";
    FileUploadTypes["c11amz"] = "application/vnd.cluetrust.cartomobile-config-pkg";
    FileUploadTypes["ras"] = "image/x-cmu-raster";
    FileUploadTypes["dae"] = "model/vnd.collada+xml";
    FileUploadTypes["csv"] = "text/csv";
    FileUploadTypes["cpt"] = "application/mac-compactpro";
    FileUploadTypes["wmlc"] = "application/vnd.wap.wmlc";
    FileUploadTypes["cgm"] = "image/cgm";
    FileUploadTypes["ice"] = "x-conference/x-cooltalk";
    FileUploadTypes["cmx"] = "image/x-cmx";
    FileUploadTypes["xar"] = "application/vnd.xara";
    FileUploadTypes["cmc"] = "application/vnd.cosmocaller";
    FileUploadTypes["cpio"] = "application/x-cpio";
    FileUploadTypes["clkx"] = "application/vnd.crick.clicker";
    FileUploadTypes["clkk"] = "application/vnd.crick.clicker.keyboard";
    FileUploadTypes["clkp"] = "application/vnd.crick.clicker.palette";
    FileUploadTypes["clkt"] = "application/vnd.crick.clicker.template";
    FileUploadTypes["clkw"] = "application/vnd.crick.clicker.wordbank";
    FileUploadTypes["wbs"] = "application/vnd.criticaltools.wbs+xml";
    FileUploadTypes["cryptonote"] = "application/vnd.rig.cryptonote";
    FileUploadTypes["cif"] = "chemical/x-cif";
    FileUploadTypes["cmdf"] = "chemical/x-cmdf";
    FileUploadTypes["cu"] = "application/cu-seeme";
    FileUploadTypes["cww"] = "application/prs.cww";
    FileUploadTypes["curl"] = "text/vnd.curl";
    FileUploadTypes["dcurl"] = "text/vnd.curl.dcurl";
    FileUploadTypes["mcurl"] = "text/vnd.curl.mcurl";
    FileUploadTypes["scurl"] = "text/vnd.curl.scurl";
    FileUploadTypes["car"] = "application/vnd.curl.car";
    FileUploadTypes["pcurl"] = "application/vnd.curl.pcurl";
    FileUploadTypes["cmp"] = "application/vnd.yellowriver-custom-menu";
    FileUploadTypes["dssc"] = "application/dssc+der";
    FileUploadTypes["xdssc"] = "application/dssc+xml";
    FileUploadTypes["deb"] = "application/x-debian-package";
    FileUploadTypes["uva"] = "audio/vnd.dece.audio";
    FileUploadTypes["uvi"] = "image/vnd.dece.graphic";
    FileUploadTypes["uvh"] = "video/vnd.dece.hd";
    FileUploadTypes["uvm"] = "video/vnd.dece.mobile";
    FileUploadTypes["uvu"] = "video/vnd.uvvu.mp4";
    FileUploadTypes["uvp"] = "video/vnd.dece.pd";
    FileUploadTypes["uvs"] = "video/vnd.dece.sd";
    FileUploadTypes["uvv"] = "video/vnd.dece.video";
    FileUploadTypes["dvi"] = "application/x-dvi";
    FileUploadTypes["seed"] = "application/vnd.fdsn.seed";
    FileUploadTypes["dtb"] = "application/x-dtbook+xml";
    FileUploadTypes["res"] = "application/x-dtbresource+xml";
    FileUploadTypes["ait"] = "application/vnd.dvb.ait";
    FileUploadTypes["svc"] = "application/vnd.dvb.service";
    FileUploadTypes["eol"] = "audio/vnd.digital-winds";
    FileUploadTypes["djvu"] = "image/vnd.djvu";
    FileUploadTypes["dtd"] = "application/xml-dtd";
    FileUploadTypes["mlp"] = "application/vnd.dolby.mlp";
    FileUploadTypes["wad"] = "application/x-doom";
    FileUploadTypes["dpg"] = "application/vnd.dpgraph";
    FileUploadTypes["dra"] = "audio/vnd.dra";
    FileUploadTypes["dfac"] = "application/vnd.dreamfactory";
    FileUploadTypes["dts"] = "audio/vnd.dts";
    FileUploadTypes["dtshd"] = "audio/vnd.dts.hd";
    FileUploadTypes["dwg"] = "image/vnd.dwg";
    FileUploadTypes["geo"] = "application/vnd.dynageo";
    FileUploadTypes["es"] = "application/ecmascript";
    FileUploadTypes["mag"] = "application/vnd.ecowin.chart";
    FileUploadTypes["mmr"] = "image/vnd.fujixerox.edmics-mmr";
    FileUploadTypes["rlc"] = "image/vnd.fujixerox.edmics-rlc";
    FileUploadTypes["exi"] = "application/exi";
    FileUploadTypes["mgz"] = "application/vnd.proteus.magazine";
    FileUploadTypes["epub"] = "application/epub+zip";
    FileUploadTypes["eml"] = "message/rfc822";
    FileUploadTypes["nml"] = "application/vnd.enliven";
    FileUploadTypes["xpr"] = "application/vnd.is-xpr";
    FileUploadTypes["xif"] = "image/vnd.xiff";
    FileUploadTypes["xfdl"] = "application/vnd.xfdl";
    FileUploadTypes["emma"] = "application/emma+xml";
    FileUploadTypes["ez2"] = "application/vnd.ezpix-album";
    FileUploadTypes["ez3"] = "application/vnd.ezpix-package";
    FileUploadTypes["fst"] = "image/vnd.fst";
    FileUploadTypes["fvt"] = "video/vnd.fvt";
    FileUploadTypes["fbs"] = "image/vnd.fastbidsheet";
    FileUploadTypes["fe_launch"] = "application/vnd.denovo.fcselayout-link";
    FileUploadTypes["f4v"] = "video/x-f4v";
    FileUploadTypes["flv"] = "video/x-flv";
    FileUploadTypes["fpx"] = "image/vnd.fpx";
    FileUploadTypes["npx"] = "image/vnd.net-fpx";
    FileUploadTypes["flx"] = "text/vnd.fmi.flexstor";
    FileUploadTypes["fli"] = "video/x-fli";
    FileUploadTypes["ftc"] = "application/vnd.fluxtime.clip";
    FileUploadTypes["fdf"] = "application/vnd.fdf";
    FileUploadTypes["f"] = "text/x-fortran";
    FileUploadTypes["mif"] = "application/vnd.mif";
    FileUploadTypes["fm"] = "application/vnd.framemaker";
    FileUploadTypes["fh"] = "image/x-freehand";
    FileUploadTypes["fsc"] = "application/vnd.fsc.weblaunch";
    FileUploadTypes["fnc"] = "application/vnd.frogans.fnc";
    FileUploadTypes["ltf"] = "application/vnd.frogans.ltf";
    FileUploadTypes["ddd"] = "application/vnd.fujixerox.ddd";
    FileUploadTypes["xdw"] = "application/vnd.fujixerox.docuworks";
    FileUploadTypes["xbd"] = "application/vnd.fujixerox.docuworks.binder";
    FileUploadTypes["oas"] = "application/vnd.fujitsu.oasys";
    FileUploadTypes["oa2"] = "application/vnd.fujitsu.oasys2";
    FileUploadTypes["oa3"] = "application/vnd.fujitsu.oasys3";
    FileUploadTypes["fg5"] = "application/vnd.fujitsu.oasysgp";
    FileUploadTypes["bh2"] = "application/vnd.fujitsu.oasysprs";
    FileUploadTypes["spl"] = "application/x-futuresplash";
    FileUploadTypes["fzs"] = "application/vnd.fuzzysheet";
    FileUploadTypes["g3"] = "image/g3fax";
    FileUploadTypes["gmx"] = "application/vnd.gmx";
    FileUploadTypes["gtw"] = "model/vnd.gtw";
    FileUploadTypes["txd"] = "application/vnd.genomatix.tuxedo";
    FileUploadTypes["ggb"] = "application/vnd.geogebra.file";
    FileUploadTypes["ggt"] = "application/vnd.geogebra.tool";
    FileUploadTypes["gdl"] = "model/vnd.gdl";
    FileUploadTypes["gex"] = "application/vnd.geometry-explorer";
    FileUploadTypes["gxt"] = "application/vnd.geonext";
    FileUploadTypes["g2w"] = "application/vnd.geoplan";
    FileUploadTypes["g3w"] = "application/vnd.geospace";
    FileUploadTypes["gsf"] = "application/x-font-ghostscript";
    FileUploadTypes["bdf"] = "application/x-font-bdf";
    FileUploadTypes["gtar"] = "application/x-gtar";
    FileUploadTypes["texinfo"] = "application/x-texinfo";
    FileUploadTypes["gnumeric"] = "application/x-gnumeric";
    FileUploadTypes["kml"] = "application/vnd.google-earth.kml+xml";
    FileUploadTypes["kmz"] = "application/vnd.google-earth.kmz";
    FileUploadTypes["gqf"] = "application/vnd.grafeq";
    FileUploadTypes["gif"] = "image/gif";
    FileUploadTypes["gv"] = "text/vnd.graphviz";
    FileUploadTypes["gac"] = "application/vnd.groove-account";
    FileUploadTypes["ghf"] = "application/vnd.groove-help";
    FileUploadTypes["gim"] = "application/vnd.groove-identity-message";
    FileUploadTypes["grv"] = "application/vnd.groove-injector";
    FileUploadTypes["gtm"] = "application/vnd.groove-tool-message";
    FileUploadTypes["tpl"] = "application/vnd.groove-tool-template";
    FileUploadTypes["vcg"] = "application/vnd.groove-vcard";
    FileUploadTypes["h261"] = "video/h261";
    FileUploadTypes["h263"] = "video/h263";
    FileUploadTypes["h264"] = "video/h264";
    FileUploadTypes["hpid"] = "application/vnd.hp-hpid";
    FileUploadTypes["hps"] = "application/vnd.hp-hps";
    FileUploadTypes["hdf"] = "application/x-hdf";
    FileUploadTypes["rip"] = "audio/vnd.rip";
    FileUploadTypes["hbci"] = "application/vnd.hbci";
    FileUploadTypes["jlt"] = "application/vnd.hp-jlyt";
    FileUploadTypes["pcl"] = "application/vnd.hp-pcl";
    FileUploadTypes["hpgl"] = "application/vnd.hp-hpgl";
    FileUploadTypes["hvs"] = "application/vnd.yamaha.hv-script";
    FileUploadTypes["hvd"] = "application/vnd.yamaha.hv-dic";
    FileUploadTypes["hvp"] = "application/vnd.yamaha.hv-voice";
    FileUploadTypes["sfd-hdstx"] = "application/vnd.hydrostatix.sof-data";
    FileUploadTypes["stk"] = "application/hyperstudio";
    FileUploadTypes["hal"] = "application/vnd.hal+xml";
    FileUploadTypes["html"] = "text/html";
    FileUploadTypes["irm"] = "application/vnd.ibm.rights-management";
    FileUploadTypes["sc"] = "application/vnd.ibm.secure-container";
    FileUploadTypes["ics"] = "text/calendar";
    FileUploadTypes["icc"] = "application/vnd.iccprofile";
    FileUploadTypes["ico"] = "image/x-icon";
    FileUploadTypes["igl"] = "application/vnd.igloader";
    FileUploadTypes["ief"] = "image/ief";
    FileUploadTypes["ivp"] = "application/vnd.immervision-ivp";
    FileUploadTypes["ivu"] = "application/vnd.immervision-ivu";
    FileUploadTypes["rif"] = "application/reginfo+xml";
    FileUploadTypes["3dml"] = "text/vnd.in3d.3dml";
    FileUploadTypes["spot"] = "text/vnd.in3d.spot";
    FileUploadTypes["igs"] = "model/iges";
    FileUploadTypes["i2g"] = "application/vnd.intergeo";
    FileUploadTypes["cdy"] = "application/vnd.cinderella";
    FileUploadTypes["xpw"] = "application/vnd.intercon.formnet";
    FileUploadTypes["fcs"] = "application/vnd.isac.fcs";
    FileUploadTypes["ipfix"] = "application/ipfix";
    FileUploadTypes["cer"] = "application/pkix-cert";
    FileUploadTypes["pki"] = "application/pkixcmp";
    FileUploadTypes["crl"] = "application/pkix-crl";
    FileUploadTypes["pkipath"] = "application/pkix-pkipath";
    FileUploadTypes["igm"] = "application/vnd.insors.igm";
    FileUploadTypes["rcprofile"] = "application/vnd.ipunplugged.rcprofile";
    FileUploadTypes["irp"] = "application/vnd.irepository.package+xml";
    FileUploadTypes["jad"] = "text/vnd.sun.j2me.app-descriptor";
    FileUploadTypes["jar"] = "application/java-archive";
    FileUploadTypes["class"] = "application/java-vm";
    FileUploadTypes["jnlp"] = "application/x-java-jnlp-file";
    FileUploadTypes["ser"] = "application/java-serialized-object";
    FileUploadTypes["java"] = "text/x-java-source,java";
    FileUploadTypes["js"] = "application/javascript";
    FileUploadTypes["json"] = "application/json";
    FileUploadTypes["joda"] = "application/vnd.joost.joda-archive";
    FileUploadTypes["jpm"] = "video/jpm";
    FileUploadTypes["jpg"] = "image/jpeg";
    FileUploadTypes["pjpeg"] = "image/pjpeg";
    FileUploadTypes["jpgv"] = "video/jpeg";
    FileUploadTypes["ktz"] = "application/vnd.kahootz";
    FileUploadTypes["mmd"] = "application/vnd.chipnuts.karaoke-mmd";
    FileUploadTypes["karbon"] = "application/vnd.kde.karbon";
    FileUploadTypes["chrt"] = "application/vnd.kde.kchart";
    FileUploadTypes["kfo"] = "application/vnd.kde.kformula";
    FileUploadTypes["flw"] = "application/vnd.kde.kivio";
    FileUploadTypes["kon"] = "application/vnd.kde.kontour";
    FileUploadTypes["kpr"] = "application/vnd.kde.kpresenter";
    FileUploadTypes["ksp"] = "application/vnd.kde.kspread";
    FileUploadTypes["kwd"] = "application/vnd.kde.kword";
    FileUploadTypes["htke"] = "application/vnd.kenameaapp";
    FileUploadTypes["kia"] = "application/vnd.kidspiration";
    FileUploadTypes["kne"] = "application/vnd.kinar";
    FileUploadTypes["sse"] = "application/vnd.kodak-descriptor";
    FileUploadTypes["lasxml"] = "application/vnd.las.las+xml";
    FileUploadTypes["latex"] = "application/x-latex";
    FileUploadTypes["lbd"] = "application/vnd.llamagraphics.life-balance.desktop";
    FileUploadTypes["lbe"] = "application/vnd.llamagraphics.life-balance.exchange+xml";
    FileUploadTypes["jam"] = "application/vnd.jam";
    FileUploadTypes["apr"] = "application/vnd.lotus-approach";
    FileUploadTypes["pre"] = "application/vnd.lotus-freelance";
    FileUploadTypes["nsf"] = "application/vnd.lotus-notes";
    FileUploadTypes["org"] = "application/vnd.lotus-organizer";
    FileUploadTypes["scm"] = "application/vnd.lotus-screencam";
    FileUploadTypes["lwp"] = "application/vnd.lotus-wordpro";
    FileUploadTypes["lvp"] = "audio/vnd.lucent.voice";
    FileUploadTypes["m3u"] = "audio/x-mpegurl";
    FileUploadTypes["m4v"] = "video/x-m4v";
    FileUploadTypes["hqx"] = "application/mac-binhex40";
    FileUploadTypes["portpkg"] = "application/vnd.macports.portpkg";
    FileUploadTypes["mgp"] = "application/vnd.osgeo.mapguide.package";
    FileUploadTypes["mrc"] = "application/marc";
    FileUploadTypes["mrcx"] = "application/marcxml+xml";
    FileUploadTypes["mxf"] = "application/mxf";
    FileUploadTypes["nbp"] = "application/vnd.wolfram.player";
    FileUploadTypes["ma"] = "application/mathematica";
    FileUploadTypes["mathml"] = "application/mathml+xml";
    FileUploadTypes["mbox"] = "application/mbox";
    FileUploadTypes["mc1"] = "application/vnd.medcalcdata";
    FileUploadTypes["mscml"] = "application/mediaservercontrol+xml";
    FileUploadTypes["cdkey"] = "application/vnd.mediastation.cdkey";
    FileUploadTypes["mwf"] = "application/vnd.mfer";
    FileUploadTypes["mfm"] = "application/vnd.mfmp";
    FileUploadTypes["msh"] = "model/mesh";
    FileUploadTypes["mads"] = "application/mads+xml";
    FileUploadTypes["mets"] = "application/mets+xml";
    FileUploadTypes["mods"] = "application/mods+xml";
    FileUploadTypes["meta4"] = "application/metalink4+xml";
    FileUploadTypes["mcd"] = "application/vnd.mcd";
    FileUploadTypes["flo"] = "application/vnd.micrografx.flo";
    FileUploadTypes["igx"] = "application/vnd.micrografx.igx";
    FileUploadTypes["es3"] = "application/vnd.eszigno3+xml";
    FileUploadTypes["mdb"] = "application/x-msaccess";
    FileUploadTypes["asf"] = "video/x-ms-asf";
    FileUploadTypes["exe"] = "application/x-msdownload";
    FileUploadTypes["cil"] = "application/vnd.ms-artgalry";
    FileUploadTypes["cab"] = "application/vnd.ms-cab-compressed";
    FileUploadTypes["ims"] = "application/vnd.ms-ims";
    FileUploadTypes["application"] = "application/x-ms-application";
    FileUploadTypes["clp"] = "application/x-msclip";
    FileUploadTypes["mdi"] = "image/vnd.ms-modi";
    FileUploadTypes["eot"] = "application/vnd.ms-fontobject";
    FileUploadTypes["xls"] = "application/vnd.ms-excel";
    FileUploadTypes["xlam"] = "application/vnd.ms-excel.addin.macroenabled.12";
    FileUploadTypes["xlsb"] = "application/vnd.ms-excel.sheet.binary.macroenabled.12";
    FileUploadTypes["xltm"] = "application/vnd.ms-excel.template.macroenabled.12";
    FileUploadTypes["xlsm"] = "application/vnd.ms-excel.sheet.macroenabled.12";
    FileUploadTypes["chm"] = "application/vnd.ms-htmlhelp";
    FileUploadTypes["crd"] = "application/x-mscardfile";
    FileUploadTypes["lrm"] = "application/vnd.ms-lrm";
    FileUploadTypes["mvb"] = "application/x-msmediaview";
    FileUploadTypes["mny"] = "application/x-msmoney";
    FileUploadTypes["pptx"] = "application/vnd.openxmlformats-officedocument.presentationml.presentation";
    FileUploadTypes["sldx"] = "application/vnd.openxmlformats-officedocument.presentationml.slide";
    FileUploadTypes["ppsx"] = "application/vnd.openxmlformats-officedocument.presentationml.slideshow";
    FileUploadTypes["potx"] = "application/vnd.openxmlformats-officedocument.presentationml.template";
    FileUploadTypes["xlsx"] = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";
    FileUploadTypes["xltx"] = "application/vnd.openxmlformats-officedocument.spreadsheetml.template";
    FileUploadTypes["docx"] = "application/vnd.openxmlformats-officedocument.wordprocessingml.document";
    FileUploadTypes["dotx"] = "application/vnd.openxmlformats-officedocument.wordprocessingml.template";
    FileUploadTypes["obd"] = "application/x-msbinder";
    FileUploadTypes["thmx"] = "application/vnd.ms-officetheme";
    FileUploadTypes["onetoc"] = "application/onenote";
    FileUploadTypes["pya"] = "audio/vnd.ms-playready.media.pya";
    FileUploadTypes["pyv"] = "video/vnd.ms-playready.media.pyv";
    FileUploadTypes["ppt"] = "application/vnd.ms-powerpoint";
    FileUploadTypes["ppa"] = "application/vnd.ms-powerpoint";
    FileUploadTypes["ppam"] = "application/vnd.ms-powerpoint.addin.macroenabled.12";
    FileUploadTypes["sldm"] = "application/vnd.ms-powerpoint.slide.macroenabled.12";
    FileUploadTypes["pptm"] = "application/vnd.ms-powerpoint.presentation.macroenabled.12";
    FileUploadTypes["ppsm"] = "application/vnd.ms-powerpoint.slideshow.macroenabled.12";
    FileUploadTypes["potm"] = "application/vnd.ms-powerpoint.template.macroenabled.12";
    FileUploadTypes["mpp"] = "application/vnd.ms-project";
    FileUploadTypes["pub"] = "application/x-mspublisher";
    FileUploadTypes["scd"] = "application/x-msschedule";
    FileUploadTypes["xap"] = "application/x-silverlight-app";
    FileUploadTypes["stl"] = "application/vnd.ms-pki.stl";
    FileUploadTypes["cat"] = "application/vnd.ms-pki.seccat";
    FileUploadTypes["vsd"] = "application/vnd.visio";
    FileUploadTypes["vsdx"] = "application/vnd.visio2013";
    FileUploadTypes["wm"] = "video/x-ms-wm";
    FileUploadTypes["wma"] = "audio/x-ms-wma";
    FileUploadTypes["wax"] = "audio/x-ms-wax";
    FileUploadTypes["wmx"] = "video/x-ms-wmx";
    FileUploadTypes["wmd"] = "application/x-ms-wmd";
    FileUploadTypes["wpl"] = "application/vnd.ms-wpl";
    FileUploadTypes["wmz"] = "application/x-ms-wmz";
    FileUploadTypes["wmv"] = "video/x-ms-wmv";
    FileUploadTypes["wvx"] = "video/x-ms-wvx";
    FileUploadTypes["wmf"] = "application/x-msmetafile";
    FileUploadTypes["trm"] = "application/x-msterminal";
    FileUploadTypes["doc"] = "application/msword";
    FileUploadTypes["docm"] = "application/vnd.ms-word.document.macroenabled.12";
    FileUploadTypes["dotm"] = "application/vnd.ms-word.template.macroenabled.12";
    FileUploadTypes["wri"] = "application/x-mswrite";
    FileUploadTypes["wps"] = "application/vnd.ms-works";
    FileUploadTypes["xbap"] = "application/x-ms-xbap";
    FileUploadTypes["xps"] = "application/vnd.ms-xpsdocument";
    FileUploadTypes["mid"] = "audio/midi";
    FileUploadTypes["mpy"] = "application/vnd.ibm.minipay";
    FileUploadTypes["afp"] = "application/vnd.ibm.modcap";
    FileUploadTypes["rms"] = "application/vnd.jcp.javame.midlet-rms";
    FileUploadTypes["tmo"] = "application/vnd.tmobile-livetv";
    FileUploadTypes["prc"] = "application/x-mobipocket-ebook";
    FileUploadTypes["mbk"] = "application/vnd.mobius.mbk";
    FileUploadTypes["dis"] = "application/vnd.mobius.dis";
    FileUploadTypes["plc"] = "application/vnd.mobius.plc";
    FileUploadTypes["mqy"] = "application/vnd.mobius.mqy";
    FileUploadTypes["msl"] = "application/vnd.mobius.msl";
    FileUploadTypes["txf"] = "application/vnd.mobius.txf";
    FileUploadTypes["daf"] = "application/vnd.mobius.daf";
    FileUploadTypes["fly"] = "text/vnd.fly";
    FileUploadTypes["mpc"] = "application/vnd.mophun.certificate";
    FileUploadTypes["mpn"] = "application/vnd.mophun.application";
    FileUploadTypes["mj2"] = "video/mj2";
    FileUploadTypes["mpga"] = "audio/mpeg";
    FileUploadTypes["mxu"] = "video/vnd.mpegurl";
    FileUploadTypes["mpeg"] = "video/mpeg";
    FileUploadTypes["m21"] = "application/mp21";
    FileUploadTypes["mp4a"] = "audio/mp4";
    FileUploadTypes["mp4"] = "video/mp4";
    FileUploadTypes["m3u8"] = "application/vnd.apple.mpegurl";
    FileUploadTypes["mus"] = "application/vnd.musician";
    FileUploadTypes["msty"] = "application/vnd.muvee.style";
    FileUploadTypes["mxml"] = "application/xv+xml";
    FileUploadTypes["ngdat"] = "application/vnd.nokia.n-gage.data";
    FileUploadTypes["n-gage"] = "application/vnd.nokia.n-gage.symbian.install";
    FileUploadTypes["ncx"] = "application/x-dtbncx+xml";
    FileUploadTypes["nc"] = "application/x-netcdf";
    FileUploadTypes["nlu"] = "application/vnd.neurolanguage.nlu";
    FileUploadTypes["dna"] = "application/vnd.dna";
    FileUploadTypes["nnd"] = "application/vnd.noblenet-directory";
    FileUploadTypes["nns"] = "application/vnd.noblenet-sealer";
    FileUploadTypes["nnw"] = "application/vnd.noblenet-web";
    FileUploadTypes["rpst"] = "application/vnd.nokia.radio-preset";
    FileUploadTypes["rpss"] = "application/vnd.nokia.radio-presets";
    FileUploadTypes["n3"] = "text/n3";
    FileUploadTypes["edm"] = "application/vnd.novadigm.edm";
    FileUploadTypes["edx"] = "application/vnd.novadigm.edx";
    FileUploadTypes["ext"] = "application/vnd.novadigm.ext";
    FileUploadTypes["gph"] = "application/vnd.flographit";
    FileUploadTypes["ecelp4800"] = "audio/vnd.nuera.ecelp4800";
    FileUploadTypes["ecelp7470"] = "audio/vnd.nuera.ecelp7470";
    FileUploadTypes["ecelp9600"] = "audio/vnd.nuera.ecelp9600";
    FileUploadTypes["oda"] = "application/oda";
    FileUploadTypes["ogx"] = "application/ogg";
    FileUploadTypes["oga"] = "audio/ogg";
    FileUploadTypes["ogv"] = "video/ogg";
    FileUploadTypes["dd2"] = "application/vnd.oma.dd2+xml";
    FileUploadTypes["oth"] = "application/vnd.oasis.opendocument.text-web";
    FileUploadTypes["opf"] = "application/oebps-package+xml";
    FileUploadTypes["qbo"] = "application/vnd.intu.qbo";
    FileUploadTypes["oxt"] = "application/vnd.openofficeorg.extension";
    FileUploadTypes["osf"] = "application/vnd.yamaha.openscoreformat";
    FileUploadTypes["weba"] = "audio/webm";
    FileUploadTypes["webm"] = "video/webm";
    FileUploadTypes["odc"] = "application/vnd.oasis.opendocument.chart";
    FileUploadTypes["otc"] = "application/vnd.oasis.opendocument.chart-template";
    FileUploadTypes["odb"] = "application/vnd.oasis.opendocument.database";
    FileUploadTypes["odf"] = "application/vnd.oasis.opendocument.formula";
    FileUploadTypes["odft"] = "application/vnd.oasis.opendocument.formula-template";
    FileUploadTypes["odg"] = "application/vnd.oasis.opendocument.graphics";
    FileUploadTypes["otg"] = "application/vnd.oasis.opendocument.graphics-template";
    FileUploadTypes["odi"] = "application/vnd.oasis.opendocument.image";
    FileUploadTypes["oti"] = "application/vnd.oasis.opendocument.image-template";
    FileUploadTypes["odp"] = "application/vnd.oasis.opendocument.presentation";
    FileUploadTypes["otp"] = "application/vnd.oasis.opendocument.presentation-template";
    FileUploadTypes["ods"] = "application/vnd.oasis.opendocument.spreadsheet";
    FileUploadTypes["ots"] = "application/vnd.oasis.opendocument.spreadsheet-template";
    FileUploadTypes["odt"] = "application/vnd.oasis.opendocument.text";
    FileUploadTypes["odm"] = "application/vnd.oasis.opendocument.text-master";
    FileUploadTypes["ott"] = "application/vnd.oasis.opendocument.text-template";
    FileUploadTypes["ktx"] = "image/ktx";
    FileUploadTypes["sxc"] = "application/vnd.sun.xml.calc";
    FileUploadTypes["stc"] = "application/vnd.sun.xml.calc.template";
    FileUploadTypes["sxd"] = "application/vnd.sun.xml.draw";
    FileUploadTypes["std"] = "application/vnd.sun.xml.draw.template";
    FileUploadTypes["sxi"] = "application/vnd.sun.xml.impress";
    FileUploadTypes["sti"] = "application/vnd.sun.xml.impress.template";
    FileUploadTypes["sxm"] = "application/vnd.sun.xml.math";
    FileUploadTypes["sxw"] = "application/vnd.sun.xml.writer";
    FileUploadTypes["sxg"] = "application/vnd.sun.xml.writer.global";
    FileUploadTypes["stw"] = "application/vnd.sun.xml.writer.template";
    FileUploadTypes["otf"] = "application/x-font-otf";
    FileUploadTypes["osfpvg"] = "application/vnd.yamaha.openscoreformat.osfpvg+xml";
    FileUploadTypes["dp"] = "application/vnd.osgi.dp";
    FileUploadTypes["pdb"] = "application/vnd.palm";
    FileUploadTypes["p"] = "text/x-pascal";
    FileUploadTypes["paw"] = "application/vnd.pawaafile";
    FileUploadTypes["pclxl"] = "application/vnd.hp-pclxl";
    FileUploadTypes["efif"] = "application/vnd.picsel";
    FileUploadTypes["pcx"] = "image/x-pcx";
    FileUploadTypes["psd"] = "image/vnd.adobe.photoshop";
    FileUploadTypes["prf"] = "application/pics-rules";
    FileUploadTypes["pic"] = "image/x-pict";
    FileUploadTypes["chat"] = "application/x-chat";
    FileUploadTypes["p10"] = "application/pkcs10";
    FileUploadTypes["p12"] = "application/x-pkcs12";
    FileUploadTypes["p7m"] = "application/pkcs7-mime";
    FileUploadTypes["p7s"] = "application/pkcs7-signature";
    FileUploadTypes["p7r"] = "application/x-pkcs7-certreqresp";
    FileUploadTypes["p7b"] = "application/x-pkcs7-certificates";
    FileUploadTypes["p8"] = "application/pkcs8";
    FileUploadTypes["plf"] = "application/vnd.pocketlearn";
    FileUploadTypes["pnm"] = "image/x-portable-anymap";
    FileUploadTypes["pbm"] = "image/x-portable-bitmap";
    FileUploadTypes["pcf"] = "application/x-font-pcf";
    FileUploadTypes["pfr"] = "application/font-tdpfr";
    FileUploadTypes["pgn"] = "application/x-chess-pgn";
    FileUploadTypes["pgm"] = "image/x-portable-graymap";
    FileUploadTypes["png"] = "image/png";
    FileUploadTypes["ppm"] = "image/x-portable-pixmap";
    FileUploadTypes["pskcxml"] = "application/pskc+xml";
    FileUploadTypes["pml"] = "application/vnd.ctc-posml";
    FileUploadTypes["ai"] = "application/postscript";
    FileUploadTypes["pfa"] = "application/x-font-type1";
    FileUploadTypes["pbd"] = "application/vnd.powerbuilder6";
    FileUploadTypes["pgp"] = "application/pgp-encrypted";
    FileUploadTypes["box"] = "application/vnd.previewsystems.box";
    FileUploadTypes["ptid"] = "application/vnd.pvi.ptid1";
    FileUploadTypes["pls"] = "application/pls+xml";
    FileUploadTypes["str"] = "application/vnd.pg.format";
    FileUploadTypes["ei6"] = "application/vnd.pg.osasli";
    FileUploadTypes["dsc"] = "text/prs.lines.tag";
    FileUploadTypes["psf"] = "application/x-font-linux-psf";
    FileUploadTypes["qps"] = "application/vnd.publishare-delta-tree";
    FileUploadTypes["wg"] = "application/vnd.pmi.widget";
    FileUploadTypes["qxd"] = "application/vnd.quark.quarkxpress";
    FileUploadTypes["esf"] = "application/vnd.epson.esf";
    FileUploadTypes["msf"] = "application/vnd.epson.msf";
    FileUploadTypes["ssf"] = "application/vnd.epson.ssf";
    FileUploadTypes["qam"] = "application/vnd.epson.quickanime";
    FileUploadTypes["qfx"] = "application/vnd.intu.qfx";
    FileUploadTypes["qt"] = "video/quicktime";
    FileUploadTypes["rar"] = "application/x-rar-compressed";
    FileUploadTypes["ram"] = "audio/x-pn-realaudio";
    FileUploadTypes["rmp"] = "audio/x-pn-realaudio-plugin";
    FileUploadTypes["rsd"] = "application/rsd+xml";
    FileUploadTypes["rm"] = "application/vnd.rn-realmedia";
    FileUploadTypes["bed"] = "application/vnd.realvnc.bed";
    FileUploadTypes["mxl"] = "application/vnd.recordare.musicxml";
    FileUploadTypes["musicxml"] = "application/vnd.recordare.musicxml+xml";
    FileUploadTypes["rnc"] = "application/relax-ng-compact-syntax";
    FileUploadTypes["rdz"] = "application/vnd.data-vision.rdz";
    FileUploadTypes["rdf"] = "application/rdf+xml";
    FileUploadTypes["rp9"] = "application/vnd.cloanto.rp9";
    FileUploadTypes["jisp"] = "application/vnd.jisp";
    FileUploadTypes["rtf"] = "application/rtf";
    FileUploadTypes["rtx"] = "text/richtext";
    FileUploadTypes["link66"] = "application/vnd.route66.link66+xml";
    FileUploadTypes["rss"] = "application/rss+xml,";
    FileUploadTypes["shf"] = "application/shf+xml";
    FileUploadTypes["st"] = "application/vnd.sailingtracker.track";
    FileUploadTypes["svg"] = "image/svg+xml";
    FileUploadTypes["sus"] = "application/vnd.sus-calendar";
    FileUploadTypes["sru"] = "application/sru+xml";
    FileUploadTypes["setpay"] = "application/set-payment-initiation";
    FileUploadTypes["setreg"] = "application/set-registration-initiation";
    FileUploadTypes["sema"] = "application/vnd.sema";
    FileUploadTypes["semd"] = "application/vnd.semd";
    FileUploadTypes["semf"] = "application/vnd.semf";
    FileUploadTypes["see"] = "application/vnd.seemail";
    FileUploadTypes["snf"] = "application/x-font-snf";
    FileUploadTypes["spq"] = "application/scvp-vp-request";
    FileUploadTypes["spp"] = "application/scvp-vp-response";
    FileUploadTypes["scq"] = "application/scvp-cv-request";
    FileUploadTypes["scs"] = "application/scvp-cv-response";
    FileUploadTypes["sdp"] = "application/sdp";
    FileUploadTypes["etx"] = "text/x-setext";
    FileUploadTypes["movie"] = "video/x-sgi-movie";
    FileUploadTypes["ifm"] = "application/vnd.shana.informed.formdata";
    FileUploadTypes["itp"] = "application/vnd.shana.informed.formtemplate";
    FileUploadTypes["iif"] = "application/vnd.shana.informed.interchange";
    FileUploadTypes["ipk"] = "application/vnd.shana.informed.package";
    FileUploadTypes["tfi"] = "application/thraud+xml";
    FileUploadTypes["shar"] = "application/x-shar";
    FileUploadTypes["rgb"] = "image/x-rgb";
    FileUploadTypes["slt"] = "application/vnd.epson.salt";
    FileUploadTypes["aso"] = "application/vnd.accpac.simply.aso";
    FileUploadTypes["imp"] = "application/vnd.accpac.simply.imp";
    FileUploadTypes["twd"] = "application/vnd.simtech-mindmapper";
    FileUploadTypes["csp"] = "application/vnd.commonspace";
    FileUploadTypes["saf"] = "application/vnd.yamaha.smaf-audio";
    FileUploadTypes["mmf"] = "application/vnd.smaf";
    FileUploadTypes["spf"] = "application/vnd.yamaha.smaf-phrase";
    FileUploadTypes["teacher"] = "application/vnd.smart.teacher";
    FileUploadTypes["svd"] = "application/vnd.svd";
    FileUploadTypes["rq"] = "application/sparql-query";
    FileUploadTypes["srx"] = "application/sparql-results+xml";
    FileUploadTypes["gram"] = "application/srgs";
    FileUploadTypes["grxml"] = "application/srgs+xml";
    FileUploadTypes["ssml"] = "application/ssml+xml";
    FileUploadTypes["skp"] = "application/vnd.koan";
    FileUploadTypes["sgml"] = "text/sgml";
    FileUploadTypes["sdc"] = "application/vnd.stardivision.calc";
    FileUploadTypes["sda"] = "application/vnd.stardivision.draw";
    FileUploadTypes["sdd"] = "application/vnd.stardivision.impress";
    FileUploadTypes["smf"] = "application/vnd.stardivision.math";
    FileUploadTypes["sdw"] = "application/vnd.stardivision.writer";
    FileUploadTypes["sgl"] = "application/vnd.stardivision.writer-global";
    FileUploadTypes["sm"] = "application/vnd.stepmania.stepchart";
    FileUploadTypes["sit"] = "application/x-stuffit";
    FileUploadTypes["sitx"] = "application/x-stuffitx";
    FileUploadTypes["sdkm"] = "application/vnd.solent.sdkm+xml";
    FileUploadTypes["xo"] = "application/vnd.olpc-sugar";
    FileUploadTypes["au"] = "audio/basic";
    FileUploadTypes["wqd"] = "application/vnd.wqd";
    FileUploadTypes["sis"] = "application/vnd.symbian.install";
    FileUploadTypes["smi"] = "application/smil+xml";
    FileUploadTypes["xsm"] = "application/vnd.syncml+xml";
    FileUploadTypes["bdm"] = "application/vnd.syncml.dm+wbxml";
    FileUploadTypes["xdm"] = "application/vnd.syncml.dm+xml";
    FileUploadTypes["sv4cpio"] = "application/x-sv4cpio";
    FileUploadTypes["sv4crc"] = "application/x-sv4crc";
    FileUploadTypes["sbml"] = "application/sbml+xml";
    FileUploadTypes["tsv"] = "text/tab-separated-values";
    FileUploadTypes["tiff"] = "image/tiff";
    FileUploadTypes["tao"] = "application/vnd.tao.intent-module-archive";
    FileUploadTypes["tar"] = "application/x-tar";
    FileUploadTypes["tcl"] = "application/x-tcl";
    FileUploadTypes["tex"] = "application/x-tex";
    FileUploadTypes["tfm"] = "application/x-tex-tfm";
    FileUploadTypes["tei"] = "application/tei+xml";
    FileUploadTypes["txt"] = "text/plain";
    FileUploadTypes["dxp"] = "application/vnd.spotfire.dxp";
    FileUploadTypes["sfs"] = "application/vnd.spotfire.sfs";
    FileUploadTypes["tsd"] = "application/timestamped-data";
    FileUploadTypes["tpt"] = "application/vnd.trid.tpt";
    FileUploadTypes["mxs"] = "application/vnd.triscape.mxs";
    FileUploadTypes["t"] = "text/troff";
    FileUploadTypes["tra"] = "application/vnd.trueapp";
    FileUploadTypes["ttf"] = "application/x-font-ttf";
    FileUploadTypes["ttl"] = "text/turtle";
    FileUploadTypes["umj"] = "application/vnd.umajin";
    FileUploadTypes["uoml"] = "application/vnd.uoml+xml";
    FileUploadTypes["unityweb"] = "application/vnd.unity";
    FileUploadTypes["ufd"] = "application/vnd.ufdl";
    FileUploadTypes["uri"] = "text/uri-list";
    FileUploadTypes["utz"] = "application/vnd.uiq.theme";
    FileUploadTypes["ustar"] = "application/x-ustar";
    FileUploadTypes["uu"] = "text/x-uuencode";
    FileUploadTypes["vcs"] = "text/x-vcalendar";
    FileUploadTypes["vcf"] = "text/x-vcard";
    FileUploadTypes["vcd"] = "application/x-cdlink";
    FileUploadTypes["vsf"] = "application/vnd.vsf";
    FileUploadTypes["wrl"] = "model/vrml";
    FileUploadTypes["vcx"] = "application/vnd.vcx";
    FileUploadTypes["mts"] = "model/vnd.mts";
    FileUploadTypes["vtu"] = "model/vnd.vtu";
    FileUploadTypes["vis"] = "application/vnd.visionary";
    FileUploadTypes["viv"] = "video/vnd.vivo";
    FileUploadTypes["ccxml"] = "application/ccxml+xml,";
    FileUploadTypes["vxml"] = "application/voicexml+xml";
    FileUploadTypes["src"] = "application/x-wais-source";
    FileUploadTypes["wbxml"] = "application/vnd.wap.wbxml";
    FileUploadTypes["wbmp"] = "image/vnd.wap.wbmp";
    FileUploadTypes["wav"] = "audio/x-wav";
    FileUploadTypes["davmount"] = "application/davmount+xml";
    FileUploadTypes["woff"] = "application/x-font-woff";
    FileUploadTypes["wspolicy"] = "application/wspolicy+xml";
    FileUploadTypes["webp"] = "image/webp";
    FileUploadTypes["wtb"] = "application/vnd.webturbo";
    FileUploadTypes["wgt"] = "application/widget";
    FileUploadTypes["hlp"] = "application/winhlp";
    FileUploadTypes["wml"] = "text/vnd.wap.wml";
    FileUploadTypes["wmls"] = "text/vnd.wap.wmlscript";
    FileUploadTypes["wmlsc"] = "application/vnd.wap.wmlscriptc";
    FileUploadTypes["wpd"] = "application/vnd.wordperfect";
    FileUploadTypes["stf"] = "application/vnd.wt.stf";
    FileUploadTypes["wsdl"] = "application/wsdl+xml";
    FileUploadTypes["xbm"] = "image/x-xbitmap";
    FileUploadTypes["xpm"] = "image/x-xpixmap";
    FileUploadTypes["xwd"] = "image/x-xwindowdump";
    FileUploadTypes["der"] = "application/x-x509-ca-cert";
    FileUploadTypes["fig"] = "application/x-xfig";
    FileUploadTypes["xhtml"] = "application/xhtml+xml";
    FileUploadTypes["xml"] = "application/xml";
    FileUploadTypes["xdf"] = "application/xcap-diff+xml";
    FileUploadTypes["xenc"] = "application/xenc+xml";
    FileUploadTypes["xer"] = "application/patch-ops-error+xml";
    FileUploadTypes["rl"] = "application/resource-lists+xml";
    FileUploadTypes["rs"] = "application/rls-services+xml";
    FileUploadTypes["rld"] = "application/resource-lists-diff+xml";
    FileUploadTypes["xslt"] = "application/xslt+xml";
    FileUploadTypes["xop"] = "application/xop+xml";
    FileUploadTypes["xpi"] = "application/x-xpinstall";
    FileUploadTypes["xspf"] = "application/xspf+xml";
    FileUploadTypes["xul"] = "application/vnd.mozilla.xul+xml";
    FileUploadTypes["xyz"] = "chemical/x-xyz";
    FileUploadTypes["yaml"] = "text/yaml";
    FileUploadTypes["yang"] = "application/yang";
    FileUploadTypes["yin"] = "application/yin+xml";
    FileUploadTypes["zir"] = "application/vnd.zul";
    FileUploadTypes["zip"] = "application/zip";
})(FileUploadTypes || (FileUploadTypes = {}));

class FileUploadService {
    constructor(renderer) {
        this.renderer = renderer;
        this.extensions = ['B', 'KB', 'MB', 'GB'];
        this.sizeRegex = new RegExp(`^(\\d+)(?:\\s{0,1})(${this.extensions.join('|')})?$`, 'i');
    }
    isFileDragDropAvailable() {
        const div = this.renderer.createElement('div');
        return (('draggable' in div) || ('ondragstart' in div && 'ondrop' in div));
    }
    parseSize(value) {
        if (IsNullOrEmpty(value)) {
            return 0;
        }
        if (typeof value === 'number') {
            return value;
        }
        const [, size, extension] = value.match(this.sizeRegex) || [null, '0', 'B'];
        const i = IsNullOrEmpty(extension) ? 0 : this.extensions.indexOf(extension.toUpperCase());
        return parseInt(size, 10) * Math.pow(1024, i < 0 ? 0 : i);
    }
    formatSize(size) {
        return this.calculateSize(size);
    }
    calculateSize(size, extensionIndex = 0) {
        if (isNaN(size)) {
            size = 0;
        }
        if (size < 1024) {
            return `${Math.round(size * 100) / 100} ${this.extensions[extensionIndex]}`;
        }
        return this.calculateSize(size / 1024, extensionIndex + 1);
    }
    getFileType(file) {
        return Object.keys(FileUploadTypes).find((key) => FileUploadTypes[key] === file.type);
    }
}
FileUploadService.ɵfac = function FileUploadService_Factory(t) { return new (t || FileUploadService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2)); };
FileUploadService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: FileUploadService, factory: FileUploadService.ɵfac });
FileUploadService.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2 }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FileUploadService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2 }]; }, null); })();

const InsertAnimation = (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.trigger)('insertAnimation', [
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.transition)('* => *', [
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.query)(':leave', [
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.stagger)(30, [
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.animate)('.3s', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.style)({ opacity: 0 }))
            ])
        ], { optional: true }),
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.query)(':enter', [
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.style)({ opacity: 0 }),
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.stagger)(30, [
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.animate)('.3s', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.style)({ opacity: 1 }))
            ])
        ], { optional: true })
    ])
]);

const ZoomAnimation = (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.trigger)('zoomAnimation', [
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.transition)('static => zoomOut', [
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.animate)(250, (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.style)({ transform: 'translate(-50%, -50%) scale(2, 2)', opacity: 0 })),
    ]),
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.transition)('static => zoomIn', [
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.query)(':self', [
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.style)({ transform: 'translate(-50%, -50%) scale(.2, .2)', opacity: 0, top: '50%', left: '50%', margin: 0 }),
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.stagger)(50, [
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.animate)(250, (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.style)({ transform: 'translate(-50%, -50%) scale(1, 1)', opacity: 1 }))
            ])
        ])
    ])
]);

class FileUploadAbstract {
    constructor(hostElementRef, renderer, cdr) {
        this.hostElementRef = hostElementRef;
        this.renderer = renderer;
        this.cdr = cdr;
        this.control = null;
        this.isMultiple = true;
        this.hooks = [];
        this.subscriptions = [];
        this.onChange = () => { };
    }
    ngOnInit() {
        if (IsNullOrEmpty(this.control)) {
            this.control = new FileUploadControl();
        }
        this.setEvents();
        this.checkAndMarkAsDisabled();
        this.checkAndSetMultiple();
        this.connectToForm();
    }
    ngOnDestroy() {
        this.cdr.detach();
        this.hooks.forEach((hook) => hook());
        this.hooks.length = 0;
        this.subscriptions.forEach((subscription) => subscription.unsubscribe());
        this.subscriptions.length = 0;
    }
    setEvents() {
        this.subscriptions.push(this.control.statusChanges.subscribe((status) => this.checkAndMarkAsDisabled()));
        this.subscriptions.push(this.control.eventsChanges.subscribe((event) => this.triggerEvent(event)));
        this.subscriptions.push(this.control.acceptChanges.subscribe((accept) => this.updateAcceptAttr(accept)));
        this.subscriptions.push(this.control.multipleChanges.subscribe((isMultiple) => this.toggleMultiple(isMultiple)));
    }
    clearInputEl() {
        this.input.nativeElement.value = null;
    }
    checkAndSetMultiple() {
        if (!this.control) {
            return;
        }
        const isMultiple = !(this.isMultiple === false || this.isMultiple === 'false');
        if (isMultiple !== this.control.isMultiple) {
            this.control.multiple(isMultiple);
        }
    }
    triggerEvent(event) {
        if (typeof this.label.nativeElement[event] === 'function') {
            this.label.nativeElement[event]();
        }
    }
    updateAcceptAttr(accept) {
        if (!IsNullOrEmpty(accept)) {
            this.renderer.setAttribute(this.input.nativeElement, 'accept', accept);
        }
        else {
            this.renderer.removeAttribute(this.input.nativeElement, 'accept');
        }
    }
    checkAndMarkAsDisabled() {
        if (this.control.disabled) {
            this.renderer.addClass(this.hostElementRef.nativeElement, 'disabled');
            this.renderer.setProperty(this.input.nativeElement, 'disabled', true);
        }
        else {
            this.renderer.removeClass(this.hostElementRef.nativeElement, 'disabled');
            this.renderer.setProperty(this.input.nativeElement, 'disabled', false);
        }
    }
    toggleMultiple(isMultiple) {
        if (isMultiple) {
            this.renderer.setAttribute(this.input.nativeElement, 'multiple', '');
        }
        else {
            this.renderer.removeAttribute(this.input.nativeElement, 'multiple');
        }
    }
    /**
     * ControlValueAccessor implementation
     */
    connectToForm() {
        this.subscriptions.push(this.control.valueChanges.subscribe((v) => this.onChange(v)));
    }
}
FileUploadAbstract.ɵfac = function FileUploadAbstract_Factory(t) { return new (t || FileUploadAbstract)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef)); };
FileUploadAbstract.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: FileUploadAbstract });
FileUploadAbstract.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2 },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FileUploadAbstract, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2 }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef }]; }, null); })();

const DRAGOVER = 'dragover';
const TOUCHED = 'ng-touched';
class FileUploadComponent extends FileUploadAbstract {
    constructor(fileUploadService, hostElementRef, renderer, document, cdr) {
        super(hostElementRef, renderer, cdr);
        this.fileUploadService = fileUploadService;
        this.document = document;
        this.control = null;
        this.animation = true;
        this.templateRef = null;
        this.listItem = null;
        this.templateContext = {
            $implicit: this.fileUploadService.isFileDragDropAvailable(),
            isFileDragDropAvailable: this.fileUploadService.isFileDragDropAvailable()
        };
        /** animation fields */
        this.zoomText = 'static';
        this.listVisible = false;
        this.onTouch = () => {
            this.renderer.addClass(this.hostElementRef.nativeElement, TOUCHED);
        };
    }
    set multiple(isMultiple) {
        this.isMultiple = isMultiple;
        this.checkAndSetMultiple();
    }
    get hasFiles() {
        return this.control.isListVisible && this.control.size > 0;
    }
    get isInvalid() {
        return !this.control.disabled && this.control.invalid;
    }
    get isAnimationDisabled() {
        return this.animation === false || this.animation === 'false';
    }
    setEvents() {
        super.setEvents();
        ['drag', 'dragstart', 'dragend', 'dragover', 'dragenter', 'dragleave', 'drop'].forEach((eventName) => {
            this.hooks.push(this.renderer.listen(this.document, eventName, (event) => this.preventDragEvents(event)));
        });
        ['dragover', 'dragenter'].forEach((eventName) => {
            this.hooks.push(this.renderer.listen(this.hostElementRef.nativeElement, eventName, (event) => this.onDragOver(event)));
        });
        ['dragleave', 'dragend', 'drop'].forEach((eventName) => {
            this.hooks.push(this.renderer.listen(this.hostElementRef.nativeElement, eventName, (event) => this.onDragLeave(event)));
        });
        this.subscriptions.push(this.control.valueChanges.subscribe((files) => this.renderView()));
        this.subscriptions.push(this.control.listVisibilityChanges.subscribe((status) => this.toggleListVisibility()));
    }
    onKeyDown(event) {
        if (event.keyCode === 13 || event.keyCode === 32) {
            event.preventDefault();
            this.control.click();
        }
    }
    preventDragEvents(event) {
        event.preventDefault();
        event.stopPropagation();
    }
    renderView() {
        if (!this.listVisible) {
            this.zoomText = this.control.isListVisible && this.control.size > 0 ? 'zoomOut' : 'static';
        }
        this.cdr.markForCheck();
    }
    showList() {
        if (this.zoomText !== 'static') {
            this.listVisible = true;
        }
    }
    hideList() {
        this.listVisible = false;
    }
    toggleListVisibility() {
        this.listVisible = this.control.isListVisible && this.control.size > 0;
        if (this.listVisible) {
            this.renderer.addClass(this.hostElementRef.nativeElement, 'list-visible');
            this.zoomText = 'static';
        }
        this.cdr.markForCheck();
    }
    /**
     * on file over add class name
     */
    onDragOver(event) {
        this.renderer.addClass(this.hostElementRef.nativeElement, DRAGOVER);
    }
    /**
     * on mouse out remove class name
     */
    onDragLeave(event) {
        this.renderer.removeClass(this.hostElementRef.nativeElement, DRAGOVER);
    }
    onDrop(event) {
        if (this.control.disabled) {
            return;
        }
        // There is some issue with DragEvent in typescript lib.dom.d.ts
        const files = event.dataTransfer.files;
        this.control.addFiles(files);
        this.onTouch();
    }
    onInputChange(event) {
        const input = (event.target);
        if (!this.control.disabled && input.files.length > 0) {
            this.control.addFiles(input.files);
            this.clearInputEl();
        }
        this.onTouch();
    }
    /**
     * model -> view changes
     */
    writeValue(files) {
        if (files != null) {
            this.control.setValue(files);
        }
    }
    /**
     * register function which will be called on UI change
     * to update view -> model
     */
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouch = fn;
    }
    setDisabledState(isDisabled) {
        this.control.disable(isDisabled);
    }
    zoomAnimationDone(event) {
        if (this.control.isListVisible && this.control.size > 0) {
            this.showList();
        }
        else {
            this.hideList();
        }
        if (event.fromState === 'static' && event.toState === 'zoomOut') {
            this.renderer.addClass(this.hostElementRef.nativeElement, 'hide-text');
        }
        else {
            this.renderer.removeClass(this.hostElementRef.nativeElement, 'hide-text');
        }
        if (event.toState === 'zoomIn') {
            this.zoomText = 'static';
        }
    }
    animationListFinished(event) {
        if (event.toState === 'void') {
            this.zoomText = 'zoomIn';
            this.renderer.removeClass(this.hostElementRef.nativeElement, 'list-visible');
        }
        if (event.fromState === 'void') {
            this.zoomText = 'static';
            this.renderer.addClass(this.hostElementRef.nativeElement, 'list-visible');
        }
    }
}
FileUploadComponent.ɵfac = function FileUploadComponent_Factory(t) { return new (t || FileUploadComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](FileUploadService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef)); };
FileUploadComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FileUploadComponent, selectors: [["file-upload", 3, "simple", ""]], contentQueries: function FileUploadComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, _c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, _c1, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.templateRef = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.listItem = _t.first);
    } }, viewQuery: function FileUploadComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c2, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c3, 7);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.input = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.label = _t.first);
    } }, hostVars: 5, hostBindings: function FileUploadComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("drop", function FileUploadComponent_drop_HostBindingHandler($event) { return ctx.onDrop($event); });
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsyntheticHostProperty"]("@.disabled", ctx.isAnimationDisabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("has-files", ctx.hasFiles)("ng-invalid", ctx.isInvalid);
    } }, inputs: { control: "control", animation: "animation", multiple: "multiple" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
            FileUploadService,
            {
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NG_VALUE_ACCESSOR,
                useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => FileUploadComponent),
                multi: true
            }
        ]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 9, vars: 6, consts: [["tabindex", "0", 1, "upload-input", 3, "keydown"], ["labelRef", ""], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["defaultTemplate", ""], ["type", "file", "tabindex", "-1", "multiple", "", 1, "files-input", 3, "change"], ["inputRef", ""], ["class", "upload-list", 4, "ngIf"], [4, "ngIf", "ngIfElse"], ["isNotDragDropAvailable", ""], [1, "upload-list"], ["ngFor", "", 3, "ngForOf"], ["defaultItemTemplate", ""], [3, "index", "file", "control"]], template: function FileUploadComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown", function FileUploadComponent_Template_label_keydown_0_listener($event) { return ctx.onKeyDown($event); })("@zoomAnimation.done", function FileUploadComponent_Template_label_animation_zoomAnimation_done_0_listener($event) { return ctx.zoomAnimationDone($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, FileUploadComponent_ng_container_2_Template, 1, 0, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, FileUploadComponent_ng_template_3_Template, 4, 2, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function FileUploadComponent_Template_input_change_5_listener($event) { return ctx.onInputChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, FileUploadComponent_div_7_Template, 5, 4, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "async");
    } if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@zoomAnimation", ctx.zoomText);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx.templateRef ? ctx.templateRef : _r2)("ngTemplateOutletContext", ctx.templateContext);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 4, ctx.control.listVisibilityChanges) && ctx.control.size > 0 && ctx.listVisible);
    } }, directives: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgTemplateOutlet, FileUploadDropZoneComponent, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, FileUploadListItemComponent]; }, pipes: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_4__.AsyncPipe]; }, styles: ["@charset \"UTF-8\";[_nghost-%COMP%], [_nghost-%COMP%] > *[_ngcontent-%COMP%]{box-sizing:border-box}[_nghost-%COMP%]{background:#fafafa;display:block;min-height:140px;outline:1px dashed #92b0b3;outline-offset:-10px;overflow:hidden;padding:20px 66px 20px 20px;position:relative}[_nghost-%COMP%]     .icon{float:left}.dragover[_nghost-%COMP%]{outline-width:2px}.disabled[_nghost-%COMP%]{cursor:no-drop;opacity:.5}.files-input[_ngcontent-%COMP%]{height:.1px;left:-100%;opacity:0;overflow:hidden;position:absolute;top:-100%;width:.1px}.upload-input[_ngcontent-%COMP%]:after{clear:both;content:\"\u00A0\";display:block;height:0;line-height:0;visibility:hidden;zoom:1}.upload-input[_ngcontent-%COMP%]{-ms-transform:translate(-50%,-50%);color:#646464;cursor:pointer;display:inline-block;left:50%;margin:0;outline:none;position:absolute;top:50%;transform:translate(-50%,-50%)}.disabled[_nghost-%COMP%]   .upload-input[_ngcontent-%COMP%]{cursor:not-allowed}.list-visible[_nghost-%COMP%]   .upload-input[_ngcontent-%COMP%]{-ms-transform:translate(-100%);left:100%;margin-left:-20px;text-align:center;top:20px;transform:translate(-100%)}.hide-text[_nghost-%COMP%]   .upload-input[_ngcontent-%COMP%]{opacity:0}.dragover[_nghost-%COMP%]:not(.disabled)   .upload-input[_ngcontent-%COMP%], [_nghost-%COMP%]:not(.disabled)   .upload-input[_ngcontent-%COMP%]:focus, [_nghost-%COMP%]:not(.disabled)   .upload-input[_ngcontent-%COMP%]:hover{color:#80a9d2}.dragover[_nghost-%COMP%]:not(.disabled)   .icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%], [_nghost-%COMP%]:not(.disabled)   .upload-input[_ngcontent-%COMP%]:focus   svg[_ngcontent-%COMP%], [_nghost-%COMP%]:not(.disabled)   .upload-input[_ngcontent-%COMP%]:hover   svg[_ngcontent-%COMP%]{fill:#80a9d2}file-upload-list-item[_ngcontent-%COMP%]{padding:10px 0 0}file-upload-list-item[_ngcontent-%COMP%]:first-child{padding:0}"], data: { animation: [
            ZoomAnimation,
            InsertAnimation
        ] }, changeDetection: 0 });
FileUploadComponent.ctorParameters = () => [
    { type: FileUploadService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2 },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject, args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.DOCUMENT,] }] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef }
];
FileUploadComponent.propDecorators = {
    control: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    animation: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    multiple: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input, args: ['multiple',] }],
    templateRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild, args: ['placeholder',] }],
    listItem: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild, args: ['item',] }],
    input: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild, args: ['inputRef', { static: true },] }],
    label: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild, args: ['labelRef', { static: true },] }],
    hasFiles: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding, args: ['class.has-files',] }],
    isInvalid: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding, args: ['class.ng-invalid',] }],
    isAnimationDisabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding, args: ['@.disabled',] }],
    onDrop: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener, args: ['drop', ['$event'],] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FileUploadComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
        args: [{
                selector: `file-upload:not([simple])`,
                template: "<label #labelRef class=\"upload-input\" tabindex=\"0\" (keydown)=\"onKeyDown($event)\" [@zoomAnimation]=\"zoomText\" (@zoomAnimation.done)=\"zoomAnimationDone($event)\">\r\n\r\n    <ng-container *ngTemplateOutlet=\"templateRef ? templateRef : defaultTemplate; context: templateContext\"></ng-container>\r\n\r\n    <ng-template #defaultTemplate let-isFileDragDropAvailable=\"isFileDragDropAvailable\">\r\n        <file-upload-drop-zone>\r\n            <ng-container *ngIf=\"isFileDragDropAvailable; else isNotDragDropAvailable\">\r\n                <b>Drag and drop</b> files<br> or click here\r\n            </ng-container>\r\n            <ng-template #isNotDragDropAvailable>\r\n                <b>Click here</b> to<br> choose a files\r\n            </ng-template>\r\n        </file-upload-drop-zone>\r\n    </ng-template>\r\n\r\n    <input #inputRef type=\"file\" class=\"files-input\" tabindex=\"-1\" multiple (change)=\"onInputChange($event)\">\r\n</label>\r\n\r\n<div class=\"upload-list\" *ngIf=\"(control.listVisibilityChanges | async) && control.size > 0 && listVisible\" [@insertAnimation]=\"control.size\" (@insertAnimation.done)=\"animationListFinished($event)\">\r\n    <ng-template ngFor let-file let-i=\"index\" [ngForOf]=\"control.valueChanges | async\">\r\n        <ng-container *ngTemplateOutlet=\"listItem ? listItem : defaultItemTemplate; context: { $implicit: file, file: file, index: i, control: control }\"></ng-container>\r\n    </ng-template>\r\n    \r\n    <ng-template #defaultItemTemplate let-i=\"index\" let-file=\"file\" let-control=\"control\">\r\n        <file-upload-list-item  [index]=\"i\" [file]=\"file\" [control]=\"control\">Remove</file-upload-list-item>\r\n    </ng-template>\r\n</div>",
                providers: [
                    FileUploadService,
                    {
                        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NG_VALUE_ACCESSOR,
                        useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => FileUploadComponent),
                        multi: true
                    }
                ],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
                animations: [
                    ZoomAnimation,
                    InsertAnimation
                ],
                styles: ["@charset \"UTF-8\";:host,:host>*{box-sizing:border-box}:host{background:#fafafa;display:block;min-height:140px;outline:1px dashed #92b0b3;outline-offset:-10px;overflow:hidden;padding:20px 66px 20px 20px;position:relative}:host ::ng-deep .icon{float:left}:host(.dragover){outline-width:2px}:host(.disabled){cursor:no-drop;opacity:.5}.files-input{height:.1px;left:-100%;opacity:0;overflow:hidden;position:absolute;top:-100%;width:.1px}.upload-input:after{clear:both;content:\"\u00A0\";display:block;height:0;line-height:0;visibility:hidden;zoom:1}.upload-input{-ms-transform:translate(-50%,-50%);color:#646464;cursor:pointer;display:inline-block;left:50%;margin:0;outline:none;position:absolute;top:50%;transform:translate(-50%,-50%)}:host(.disabled) .upload-input{cursor:not-allowed}:host(.list-visible) .upload-input{-ms-transform:translate(-100%);left:100%;margin-left:-20px;text-align:center;top:20px;transform:translate(-100%)}:host(.hide-text) .upload-input{opacity:0}:host(.dragover:not(.disabled)) .upload-input,:host(:not(.disabled)) .upload-input:focus,:host(:not(.disabled)) .upload-input:hover{color:#80a9d2}:host(.dragover:not(.disabled)) .icon svg,:host(:not(.disabled)) .upload-input:focus svg,:host(:not(.disabled)) .upload-input:hover svg{fill:#80a9d2}file-upload-list-item{padding:10px 0 0}file-upload-list-item:first-child{padding:0}"]
            }]
    }], function () { return [{ type: FileUploadService }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2 }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.DOCUMENT]
            }] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef }]; }, { control: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], animation: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], templateRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
            args: ['placeholder']
        }], listItem: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
            args: ['item']
        }], multiple: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
            args: ['multiple']
        }], hasFiles: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
            args: ['class.has-files']
        }], isInvalid: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
            args: ['class.ng-invalid']
        }], isAnimationDisabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
            args: ['@.disabled']
        }], onDrop: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
            args: ['drop', ['$event']]
        }], input: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
            args: ['inputRef', { static: true }]
        }], label: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
            args: ['labelRef', { static: true }]
        }] }); })();

class FileUploadDropZoneComponent {
}
FileUploadDropZoneComponent.ɵfac = function FileUploadDropZoneComponent_Factory(t) { return new (t || FileUploadDropZoneComponent)(); };
FileUploadDropZoneComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FileUploadDropZoneComponent, selectors: [["file-upload-drop-zone"]], ngContentSelectors: _c5, decls: 6, vars: 0, consts: [[1, "icon"], ["viewBox", "0 0 96 96"], ["d", "M62.8,68.1c0-0.6-0.2-1.1-0.6-1.5c-0.4-0.4-0.9-0.6-1.5-0.6s-1.1,0.2-1.5,0.6\n                c-0.4,0.4-0.6,0.9-0.6,1.5c0,0.6,0.2,1.1,0.6,1.5c0.4,0.4,0.9,0.6,1.5,0.6s1.1-0.2,1.5-0.6S62.8,68.7,62.8,68.1z M71.3,68.1\n                c0-0.6-0.2-1.1-0.6-1.5c-0.4-0.4-0.9-0.6-1.5-0.6c-0.6,0-1.1,0.2-1.5,0.6C67.2,67,67,67.5,67,68.1c0,0.6,0.2,1.1,0.6,1.5\n                s0.9,0.6,1.5,0.6c0.6,0,1.1-0.2,1.5-0.6C71.1,69.2,71.3,68.7,71.3,68.1z M75.5,60.7v10.6c0,0.9-0.3,1.6-0.9,2.2\n                c-0.6,0.6-1.4,0.9-2.2,0.9H23.7c-0.9,0-1.6-0.3-2.2-0.9c-0.6-0.6-0.9-1.4-0.9-2.2V60.7c0-0.9,0.3-1.6,0.9-2.2\n                c0.6-0.6,1.4-0.9,2.2-0.9h14.1c0.5,1.2,1.2,2.2,2.3,3c1.1,0.8,2.3,1.2,3.7,1.2h8.5c1.3,0,2.6-0.4,3.7-1.2c1.1-0.8,1.9-1.8,2.3-3\n                h14.1c0.9,0,1.6,0.3,2.2,0.9C75.2,59.1,75.5,59.8,75.5,60.7z M64.8,39.3c-0.4,0.9-1,1.3-2,1.3h-8.5v14.8c0,0.6-0.2,1.1-0.6,1.5\n                c-0.4,0.4-0.9,0.6-1.5,0.6h-8.5c-0.6,0-1.1-0.2-1.5-0.6c-0.4-0.4-0.6-0.9-0.6-1.5V40.6h-8.5c-0.9,0-1.6-0.4-2-1.3\n                c-0.4-0.9-0.2-1.6,0.5-2.3l14.8-14.8c0.4-0.4,0.9-0.6,1.5-0.6s1.1,0.2,1.5,0.6L64.3,37C65,37.7,65.1,38.4,64.8,39.3z"], [1, "upload-text"]], template: function FileUploadDropZoneComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "path", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["[_nghost-%COMP%]{display:block}.icon[_ngcontent-%COMP%]{border:1px solid #eaeaea;border-radius:4px;height:35px;width:35px}.icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{fill:#909293}.upload-text[_ngcontent-%COMP%]{overflow:hidden;padding-left:20px;position:relative;width:auto}.list-visible[_nghost-%COMP%]   .upload-text[_ngcontent-%COMP%], .list-visible   [_nghost-%COMP%]   .upload-text[_ngcontent-%COMP%]{display:none}"], changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FileUploadDropZoneComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
        args: [{
                selector: `file-upload-drop-zone`,
                template: "<div class=\"icon\">\r\n    <svg viewBox=\"0 0 96 96\">\r\n        <g>\r\n            <path d=\"M62.8,68.1c0-0.6-0.2-1.1-0.6-1.5c-0.4-0.4-0.9-0.6-1.5-0.6s-1.1,0.2-1.5,0.6\r\n                c-0.4,0.4-0.6,0.9-0.6,1.5c0,0.6,0.2,1.1,0.6,1.5c0.4,0.4,0.9,0.6,1.5,0.6s1.1-0.2,1.5-0.6S62.8,68.7,62.8,68.1z M71.3,68.1\r\n                c0-0.6-0.2-1.1-0.6-1.5c-0.4-0.4-0.9-0.6-1.5-0.6c-0.6,0-1.1,0.2-1.5,0.6C67.2,67,67,67.5,67,68.1c0,0.6,0.2,1.1,0.6,1.5\r\n                s0.9,0.6,1.5,0.6c0.6,0,1.1-0.2,1.5-0.6C71.1,69.2,71.3,68.7,71.3,68.1z M75.5,60.7v10.6c0,0.9-0.3,1.6-0.9,2.2\r\n                c-0.6,0.6-1.4,0.9-2.2,0.9H23.7c-0.9,0-1.6-0.3-2.2-0.9c-0.6-0.6-0.9-1.4-0.9-2.2V60.7c0-0.9,0.3-1.6,0.9-2.2\r\n                c0.6-0.6,1.4-0.9,2.2-0.9h14.1c0.5,1.2,1.2,2.2,2.3,3c1.1,0.8,2.3,1.2,3.7,1.2h8.5c1.3,0,2.6-0.4,3.7-1.2c1.1-0.8,1.9-1.8,2.3-3\r\n                h14.1c0.9,0,1.6,0.3,2.2,0.9C75.2,59.1,75.5,59.8,75.5,60.7z M64.8,39.3c-0.4,0.9-1,1.3-2,1.3h-8.5v14.8c0,0.6-0.2,1.1-0.6,1.5\r\n                c-0.4,0.4-0.9,0.6-1.5,0.6h-8.5c-0.6,0-1.1-0.2-1.5-0.6c-0.4-0.4-0.6-0.9-0.6-1.5V40.6h-8.5c-0.9,0-1.6-0.4-2-1.3\r\n                c-0.4-0.9-0.2-1.6,0.5-2.3l14.8-14.8c0.4-0.4,0.9-0.6,1.5-0.6s1.1,0.2,1.5,0.6L64.3,37C65,37.7,65.1,38.4,64.8,39.3z\"/>\r\n        </g>\r\n    </svg>\r\n</div>\r\n\r\n<div class=\"upload-text\">\r\n    <ng-content></ng-content>\r\n</div>",
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
                styles: [":host{display:block}.icon{border:1px solid #eaeaea;border-radius:4px;height:35px;width:35px}.icon svg{fill:#909293}.upload-text{overflow:hidden;padding-left:20px;position:relative;width:auto}:host-context(.list-visible) .upload-text{display:none}"]
            }]
    }], null, null); })();

class FileUploadListItemComponent {
    constructor(fileUploadService) {
        this.fileUploadService = fileUploadService;
    }
    removeFile(file) {
        this.control.removeFile(file);
    }
    calculateSize(size) {
        return this.fileUploadService.formatSize(size);
    }
}
FileUploadListItemComponent.ɵfac = function FileUploadListItemComponent_Factory(t) { return new (t || FileUploadListItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](FileUploadService)); };
FileUploadListItemComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FileUploadListItemComponent, selectors: [["file-upload-list-item"]], inputs: { index: "index", file: "file", control: "control" }, ngContentSelectors: _c5, decls: 11, vars: 3, consts: [[3, "file"], [1, "file-info"], [1, "file-name"], [1, "file-buttons"], [1, "remove-btn", 3, "click"], ["viewBox", "0 0 96 96"], ["d", "M40.5,66.8V39.3c0-0.4-0.1-0.7-0.4-0.9S39.6,38,39.3,38h-2.5c-0.4,0-0.7,0.1-0.9,0.4\n                    s-0.4,0.5-0.4,0.9v27.5c0,0.4,0.1,0.7,0.4,0.9s0.5,0.4,0.9,0.4h2.5c0.4,0,0.7-0.1,0.9-0.4S40.5,67.1,40.5,66.8z M50.5,66.8V39.3\n                    c0-0.4-0.1-0.7-0.4-0.9S49.6,38,49.3,38h-2.5c-0.4,0-0.7,0.1-0.9,0.4s-0.4,0.5-0.4,0.9v27.5c0,0.4,0.1,0.7,0.4,0.9s0.5,0.4,0.9,0.4\n                    h2.5c0.4,0,0.7-0.1,0.9-0.4S50.5,67.1,50.5,66.8z M60.5,66.8V39.3c0-0.4-0.1-0.7-0.4-0.9S59.6,38,59.3,38h-2.5\n                    c-0.4,0-0.7,0.1-0.9,0.4s-0.4,0.5-0.4,0.9v27.5c0,0.4,0.1,0.7,0.4,0.9s0.5,0.4,0.9,0.4h2.5c0.4,0,0.7-0.1,0.9-0.4\n                    S60.5,67.1,60.5,66.8z M39.3,28h17.5l-1.9-4.6c-0.2-0.2-0.4-0.4-0.7-0.4H41.8c-0.3,0.1-0.5,0.2-0.7,0.4L39.3,28z M75.5,29.3v2.5\n                    c0,0.4-0.1,0.7-0.4,0.9S74.6,33,74.3,33h-3.8v37c0,2.2-0.6,4-1.8,5.6S66,78,64.3,78H31.8c-1.7,0-3.2-0.8-4.4-2.3s-1.8-3.4-1.8-5.5\n                    V33h-3.8c-0.4,0-0.7-0.1-0.9-0.4s-0.4-0.5-0.4-0.9v-2.5c0-0.4,0.1-0.7,0.4-0.9s0.5-0.4,0.9-0.4h12.1l2.7-6.5c0.4-1,1.1-1.8,2.1-2.5\n                    s2-1,3.1-1h12.5c1,0,2.1,0.3,3.1,1s1.7,1.5,2.1,2.5l2.7,6.5h12.1c0.4,0,0.7,0.1,0.9,0.4S75.5,28.9,75.5,29.3z"]], template: function FileUploadListItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "file-upload-icon", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FileUploadListItemComponent_Template_span_click_6_listener() { return ctx.removeFile(ctx.file); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "svg", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "path", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("file", ctx.file);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.file.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" (", ctx.calculateSize(ctx.file.size), ") ");
    } }, directives: function () { return [FileUploadIconComponent]; }, styles: ["@charset \"UTF-8\";[_nghost-%COMP%]{color:#646464;display:block;font-size:14px}[_nghost-%COMP%]:after{clear:both;content:\"\u00A0\";display:block;height:0;line-height:0;visibility:hidden;zoom:1}file-upload-icon[_ngcontent-%COMP%]{float:left;height:36px;margin:0 10px 0 0;width:30px}.file-info[_ngcontent-%COMP%]{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.remove-btn[_ngcontent-%COMP%]{cursor:pointer;font-size:12px}.remove-btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{display:inline-block;height:18px;vertical-align:-20%;width:18px}"] });
FileUploadListItemComponent.ctorParameters = () => [
    { type: FileUploadService }
];
FileUploadListItemComponent.propDecorators = {
    index: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    file: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    control: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FileUploadListItemComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
        args: [{
                selector: `file-upload-list-item`,
                template: `
    <file-upload-icon [file]="file"></file-upload-icon>
    <div class="file-info">
        <span class="file-name">{{ file.name }}</span> ({{ calculateSize( file.size ) }})
    </div>
    <div class="file-buttons">
        <span class="remove-btn" (click)="removeFile(file)">
        <svg viewBox="0 0 96 96">
            <g>
                <path d="M40.5,66.8V39.3c0-0.4-0.1-0.7-0.4-0.9S39.6,38,39.3,38h-2.5c-0.4,0-0.7,0.1-0.9,0.4
                    s-0.4,0.5-0.4,0.9v27.5c0,0.4,0.1,0.7,0.4,0.9s0.5,0.4,0.9,0.4h2.5c0.4,0,0.7-0.1,0.9-0.4S40.5,67.1,40.5,66.8z M50.5,66.8V39.3
                    c0-0.4-0.1-0.7-0.4-0.9S49.6,38,49.3,38h-2.5c-0.4,0-0.7,0.1-0.9,0.4s-0.4,0.5-0.4,0.9v27.5c0,0.4,0.1,0.7,0.4,0.9s0.5,0.4,0.9,0.4
                    h2.5c0.4,0,0.7-0.1,0.9-0.4S50.5,67.1,50.5,66.8z M60.5,66.8V39.3c0-0.4-0.1-0.7-0.4-0.9S59.6,38,59.3,38h-2.5
                    c-0.4,0-0.7,0.1-0.9,0.4s-0.4,0.5-0.4,0.9v27.5c0,0.4,0.1,0.7,0.4,0.9s0.5,0.4,0.9,0.4h2.5c0.4,0,0.7-0.1,0.9-0.4
                    S60.5,67.1,60.5,66.8z M39.3,28h17.5l-1.9-4.6c-0.2-0.2-0.4-0.4-0.7-0.4H41.8c-0.3,0.1-0.5,0.2-0.7,0.4L39.3,28z M75.5,29.3v2.5
                    c0,0.4-0.1,0.7-0.4,0.9S74.6,33,74.3,33h-3.8v37c0,2.2-0.6,4-1.8,5.6S66,78,64.3,78H31.8c-1.7,0-3.2-0.8-4.4-2.3s-1.8-3.4-1.8-5.5
                    V33h-3.8c-0.4,0-0.7-0.1-0.9-0.4s-0.4-0.5-0.4-0.9v-2.5c0-0.4,0.1-0.7,0.4-0.9s0.5-0.4,0.9-0.4h12.1l2.7-6.5c0.4-1,1.1-1.8,2.1-2.5
                    s2-1,3.1-1h12.5c1,0,2.1,0.3,3.1,1s1.7,1.5,2.1,2.5l2.7,6.5h12.1c0.4,0,0.7,0.1,0.9,0.4S75.5,28.9,75.5,29.3z"/>
            </g>
        </svg> <ng-content></ng-content></span>
    </div>
    `,
                styles: ["@charset \"UTF-8\";:host{color:#646464;display:block;font-size:14px}:host:after{clear:both;content:\"\u00A0\";display:block;height:0;line-height:0;visibility:hidden;zoom:1}file-upload-icon{float:left;height:36px;margin:0 10px 0 0;width:30px}.file-info{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.remove-btn{cursor:pointer;font-size:12px}.remove-btn svg{display:inline-block;height:18px;vertical-align:-20%;width:18px}"]
            }]
    }], function () { return [{ type: FileUploadService }]; }, { index: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], file: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], control: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }] }); })();

class FileUploadIconComponent {
    constructor(fileUploadService) {
        this.fileUploadService = fileUploadService;
        this.fileType = 'unknown';
    }
    ngOnInit() {
        this.fileType = this.fileUploadService.getFileType(this.file);
    }
    isIcon(type) {
        switch (type) {
            case 'text':
                return this.fileType === 'html' || this.fileType === 'css' ||
                    this.fileType === 'csv' || this.fileType === 'js' ||
                    this.fileType === 'pdf' || this.fileType === 'ppt' ||
                    this.fileType === 'xls' || this.fileType === 'xlsx' ||
                    this.fileType === 'xml' || this.fileType === 'doc' ||
                    this.fileType === 'txt' || this.fileType === 'docx';
            case 'audio':
                return this.fileType === 'aac' || this.fileType === 'midi' ||
                    this.fileType === 'oga' || this.fileType === 'wav' ||
                    this.fileType === 'weba';
            case 'image':
                return this.fileType === 'png' || this.fileType === 'bmp' ||
                    this.fileType === 'gif' || this.fileType === 'jpg' ||
                    this.fileType === 'svg' || this.fileType === 'webp' ||
                    this.fileType === 'ico';
            case 'video':
                return this.fileType === 'avi' || this.fileType === 'mpeg' ||
                    this.fileType === 'ogv' || this.fileType === 'webm' ||
                    this.fileType === '3gp' || this.fileType === '3g2';
        }
    }
}
FileUploadIconComponent.ɵfac = function FileUploadIconComponent_Factory(t) { return new (t || FileUploadIconComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](FileUploadService)); };
FileUploadIconComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FileUploadIconComponent, selectors: [["file-upload-icon"]], inputs: { file: "file" }, decls: 6, vars: 5, consts: [[3, "ngSwitch"], ["viewBox", "0 0 96 96", 4, "ngSwitchDefault"], ["viewBox", "0 0 96 96", 4, "ngSwitchCase"], ["viewBox", "0 0 96 96"], ["d", "M71.4,30.7c0.6,0.6,1.2,1.5,1.6,2.5c0.4,1.1,0.7,2.1,0.7,2.9v38.6c0,0.9-0.3,1.7-0.9,2.3\n                S71.4,78,70.5,78h-45c-0.9,0-1.7-0.3-2.3-0.9c-0.6-0.6-0.9-1.4-0.9-2.3V21.2c0-0.9,0.3-1.7,0.9-2.3c0.6-0.6,1.4-0.9,2.3-0.9h30\n                c0.9,0,1.9,0.2,2.9,0.7c1.1,0.4,1.9,1,2.5,1.6L71.4,30.7z M56.6,22.6v12.6h12.6c-0.2-0.6-0.5-1.1-0.7-1.4L57.9,23.3\n                C57.7,23,57.2,22.8,56.6,22.6z M69.4,73.7V39.4H55.5c-0.9,0-1.7-0.3-2.3-0.9c-0.6-0.6-0.9-1.4-0.9-2.3V22.3H26.6v51.4H69.4z"], ["d", "M71.4,30.7c0.6,0.6,1.2,1.5,1.6,2.5c0.4,1.1,0.7,2.1,0.7,2.9v38.6c0,0.9-0.3,1.7-0.9,2.3\n                S71.4,78,70.5,78h-45c-0.9,0-1.7-0.3-2.3-0.9c-0.6-0.6-0.9-1.4-0.9-2.3V21.2c0-0.9,0.3-1.7,0.9-2.3c0.6-0.6,1.4-0.9,2.3-0.9h30\n                c0.9,0,1.9,0.2,2.9,0.7c1.1,0.4,1.9,1,2.5,1.6L71.4,30.7z M56.6,22.6v12.6h12.6c-0.2-0.6-0.5-1.1-0.7-1.4L57.9,23.3\n                C57.7,23,57.2,22.8,56.6,22.6z M69.4,73.7V39.4H55.5c-0.9,0-1.7-0.3-2.3-0.9c-0.6-0.6-0.9-1.4-0.9-2.3V22.3H26.6v51.4H69.4z\n                M65.1,58.7v10.7H30.9V63l6.4-6.4l4.3,4.3L54.4,48L65.1,58.7z M37.3,52.3c-1.8,0-3.3-0.6-4.6-1.9c-1.3-1.2-1.9-2.8-1.9-4.6\n                c0-1.8,0.6-3.3,1.9-4.6c1.3-1.2,2.8-1.9,4.6-1.9s3.3,0.6,4.6,1.9c1.3,1.3,1.9,2.8,1.9,4.6c0,1.8-0.6,3.3-1.9,4.6\n                C40.6,51.7,39.1,52.3,37.3,52.3z"], ["d", "M71.4,30.7c0.6,0.6,1.2,1.5,1.6,2.5c0.4,1.1,0.7,2.1,0.7,2.9v38.6c0,0.9-0.3,1.7-0.9,2.3\n                S71.4,78,70.5,78h-45c-0.9,0-1.7-0.3-2.3-0.9c-0.6-0.6-0.9-1.4-0.9-2.3V21.2c0-0.9,0.3-1.7,0.9-2.3c0.6-0.6,1.4-0.9,2.3-0.9h30\n                c0.9,0,1.9,0.2,2.9,0.7c1.1,0.4,1.9,1,2.5,1.6L71.4,30.7z M56.6,22.6v12.6h12.6c-0.2-0.6-0.5-1.1-0.7-1.4L57.9,23.3\n                C57.7,23,57.2,22.8,56.6,22.6z M69.4,73.7V39.4H55.5c-0.9,0-1.7-0.3-2.3-0.9c-0.6-0.6-0.9-1.4-0.9-2.3V22.3H26.6v51.4H69.4z\n                M43,46.5c0.4,0.2,0.7,0.5,0.7,1v18.2c0,0.5-0.2,0.8-0.7,1c-0.2,0-0.3,0.1-0.4,0.1c-0.3,0-0.5-0.1-0.8-0.3l-5.6-5.6h-4.4\n                c-0.3,0-0.6-0.1-0.8-0.3c-0.2-0.2-0.3-0.5-0.3-0.8v-6.4c0-0.3,0.1-0.6,0.3-0.8c0.2-0.2,0.5-0.3,0.8-0.3h4.4l5.6-5.6\n                C42.2,46.4,42.6,46.3,43,46.5z M57,69.5c0.7,0,1.3-0.3,1.7-0.8c2.9-3.5,4.3-7.6,4.3-12.2s-1.4-8.6-4.3-12.2\n                c-0.4-0.5-0.8-0.7-1.4-0.8c-0.6-0.1-1.1,0.1-1.6,0.5c-0.5,0.4-0.7,0.9-0.8,1.5c-0.1,0.6,0.1,1.1,0.5,1.6c2.2,2.7,3.3,5.9,3.3,9.4\n                c0,3.5-1.1,6.7-3.3,9.4c-0.4,0.5-0.5,1-0.5,1.6c0.1,0.6,0.3,1.1,0.8,1.4C56.1,69.4,56.5,69.5,57,69.5z M49.9,64.6\n                c0.6,0,1.1-0.2,1.6-0.7c1.9-2.1,2.9-4.5,2.9-7.3s-1-5.3-2.9-7.3c-0.4-0.4-0.9-0.6-1.5-0.7c-0.6,0-1.1,0.2-1.5,0.6s-0.6,0.9-0.7,1.5\n                c0,0.6,0.2,1.1,0.6,1.6c1.2,1.3,1.7,2.7,1.7,4.4c0,1.7-0.6,3.1-1.7,4.4c-0.4,0.4-0.6,1-0.6,1.6c0,0.6,0.2,1.1,0.7,1.5\n                C48.9,64.4,49.4,64.6,49.9,64.6z"], ["d", "M71.4,30.7c0.6,0.6,1.2,1.5,1.6,2.5c0.4,1.1,0.7,2.1,0.7,2.9v38.6c0,0.9-0.3,1.7-0.9,2.3\n                S71.4,78,70.5,78h-45c-0.9,0-1.7-0.3-2.3-0.9c-0.6-0.6-0.9-1.4-0.9-2.3V21.2c0-0.9,0.3-1.7,0.9-2.3c0.6-0.6,1.4-0.9,2.3-0.9h30\n                c0.9,0,1.9,0.2,2.9,0.7c1.1,0.4,1.9,1,2.5,1.6L71.4,30.7z M56.6,22.6v12.6h12.6c-0.2-0.6-0.5-1.1-0.7-1.4L57.9,23.3\n                C57.7,23,57.2,22.8,56.6,22.6z M69.4,73.7V39.4H55.5c-0.9,0-1.7-0.3-2.3-0.9c-0.6-0.6-0.9-1.4-0.9-2.3V22.3H26.6v51.4H69.4z\n                M35.1,44.8c0-0.3,0.1-0.6,0.3-0.8c0.2-0.2,0.5-0.3,0.8-0.3h23.6c0.3,0,0.6,0.1,0.8,0.3c0.2,0.2,0.3,0.5,0.3,0.8v2.1\n                c0,0.3-0.1,0.6-0.3,0.8c-0.2,0.2-0.5,0.3-0.8,0.3H36.2c-0.3,0-0.6-0.1-0.8-0.3c-0.2-0.2-0.3-0.5-0.3-0.8V44.8z M59.8,52.3\n                c0.3,0,0.6,0.1,0.8,0.3c0.2,0.2,0.3,0.5,0.3,0.8v2.1c0,0.3-0.1,0.6-0.3,0.8c-0.2,0.2-0.5,0.3-0.8,0.3H36.2c-0.3,0-0.6-0.1-0.8-0.3\n                c-0.2-0.2-0.3-0.5-0.3-0.8v-2.1c0-0.3,0.1-0.6,0.3-0.8c0.2-0.2,0.5-0.3,0.8-0.3H59.8z M59.8,60.9c0.3,0,0.6,0.1,0.8,0.3\n                c0.2,0.2,0.3,0.5,0.3,0.8v2.1c0,0.3-0.1,0.6-0.3,0.8c-0.2,0.2-0.5,0.3-0.8,0.3H36.2c-0.3,0-0.6-0.1-0.8-0.3\n                c-0.2-0.2-0.3-0.5-0.3-0.8v-2.1c0-0.3,0.1-0.6,0.3-0.8c0.2-0.2,0.5-0.3,0.8-0.3H59.8z"], ["d", "M71.4,30.7c0.6,0.6,1.2,1.5,1.6,2.5c0.4,1.1,0.7,2.1,0.7,2.9v38.6c0,0.9-0.3,1.7-0.9,2.3\n                S71.4,78,70.5,78h-45c-0.9,0-1.7-0.3-2.3-0.9c-0.6-0.6-0.9-1.4-0.9-2.3V21.2c0-0.9,0.3-1.7,0.9-2.3c0.6-0.6,1.4-0.9,2.3-0.9h30\n                c0.9,0,1.9,0.2,2.9,0.7c1.1,0.4,1.9,1,2.5,1.6L71.4,30.7z M56.6,22.6v12.6h12.6c-0.2-0.6-0.5-1.1-0.7-1.4L57.9,23.3\n                C57.7,23,57.2,22.8,56.6,22.6z M69.4,73.7V39.4H55.5c-0.9,0-1.7-0.3-2.3-0.9c-0.6-0.6-0.9-1.4-0.9-2.3V22.3H26.6v51.4H69.4z\n                M48,43.7c1.2,0,2.2,0.4,3,1.3c0.8,0.8,1.3,1.9,1.3,3v12.9c0,1.2-0.4,2.2-1.3,3c-0.8,0.8-1.9,1.3-3,1.3H35.1c-1.2,0-2.2-0.4-3-1.3\n                c-0.8-0.8-1.3-1.9-1.3-3V48c0-1.2,0.4-2.2,1.3-3c0.8-0.8,1.9-1.3,3-1.3H48z M64.5,43.8c0.4,0.2,0.7,0.5,0.7,1v19.3\n                c0,0.5-0.2,0.8-0.7,1c-0.2,0-0.3,0.1-0.4,0.1c-0.3,0-0.6-0.1-0.8-0.3l-8.9-8.9v-3l8.9-8.9c0.2-0.2,0.5-0.3,0.8-0.3\n                C64.2,43.7,64.3,43.7,64.5,43.8z"]], template: function FileUploadIconComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FileUploadIconComponent__svg_svg_1_Template, 3, 0, "svg", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, FileUploadIconComponent__svg_svg_2_Template, 3, 0, "svg", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, FileUploadIconComponent__svg_svg_3_Template, 3, 0, "svg", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, FileUploadIconComponent__svg_svg_4_Template, 3, 0, "svg", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, FileUploadIconComponent__svg_svg_5_Template, 3, 0, "svg", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", ctx.isIcon("image"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", ctx.isIcon("audio"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", ctx.isIcon("text"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", ctx.isIcon("video"));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgSwitchDefault, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgSwitchCase], styles: ["[_nghost-%COMP%]{border:1px solid #eaeaea;border-radius:4px;display:block}[_nghost-%COMP%]   svg[_ngcontent-%COMP%]{fill:#909293}"], changeDetection: 0 });
FileUploadIconComponent.ctorParameters = () => [
    { type: FileUploadService }
];
FileUploadIconComponent.propDecorators = {
    file: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FileUploadIconComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
        args: [{
                selector: `file-upload-icon`,
                template: "\r\n\r\n<ng-container [ngSwitch]=\"true\">\r\n\r\n    <svg *ngSwitchDefault viewBox=\"0 0 96 96\">\r\n        <g>\r\n            <path d=\"M71.4,30.7c0.6,0.6,1.2,1.5,1.6,2.5c0.4,1.1,0.7,2.1,0.7,2.9v38.6c0,0.9-0.3,1.7-0.9,2.3\r\n                S71.4,78,70.5,78h-45c-0.9,0-1.7-0.3-2.3-0.9c-0.6-0.6-0.9-1.4-0.9-2.3V21.2c0-0.9,0.3-1.7,0.9-2.3c0.6-0.6,1.4-0.9,2.3-0.9h30\r\n                c0.9,0,1.9,0.2,2.9,0.7c1.1,0.4,1.9,1,2.5,1.6L71.4,30.7z M56.6,22.6v12.6h12.6c-0.2-0.6-0.5-1.1-0.7-1.4L57.9,23.3\r\n                C57.7,23,57.2,22.8,56.6,22.6z M69.4,73.7V39.4H55.5c-0.9,0-1.7-0.3-2.3-0.9c-0.6-0.6-0.9-1.4-0.9-2.3V22.3H26.6v51.4H69.4z\"/>\r\n        </g>\r\n    </svg>\r\n\r\n    <svg *ngSwitchCase=\"isIcon('image')\" viewBox=\"0 0 96 96\">\r\n        <g>\r\n            <path d=\"M71.4,30.7c0.6,0.6,1.2,1.5,1.6,2.5c0.4,1.1,0.7,2.1,0.7,2.9v38.6c0,0.9-0.3,1.7-0.9,2.3\r\n                S71.4,78,70.5,78h-45c-0.9,0-1.7-0.3-2.3-0.9c-0.6-0.6-0.9-1.4-0.9-2.3V21.2c0-0.9,0.3-1.7,0.9-2.3c0.6-0.6,1.4-0.9,2.3-0.9h30\r\n                c0.9,0,1.9,0.2,2.9,0.7c1.1,0.4,1.9,1,2.5,1.6L71.4,30.7z M56.6,22.6v12.6h12.6c-0.2-0.6-0.5-1.1-0.7-1.4L57.9,23.3\r\n                C57.7,23,57.2,22.8,56.6,22.6z M69.4,73.7V39.4H55.5c-0.9,0-1.7-0.3-2.3-0.9c-0.6-0.6-0.9-1.4-0.9-2.3V22.3H26.6v51.4H69.4z\r\n                M65.1,58.7v10.7H30.9V63l6.4-6.4l4.3,4.3L54.4,48L65.1,58.7z M37.3,52.3c-1.8,0-3.3-0.6-4.6-1.9c-1.3-1.2-1.9-2.8-1.9-4.6\r\n                c0-1.8,0.6-3.3,1.9-4.6c1.3-1.2,2.8-1.9,4.6-1.9s3.3,0.6,4.6,1.9c1.3,1.3,1.9,2.8,1.9,4.6c0,1.8-0.6,3.3-1.9,4.6\r\n                C40.6,51.7,39.1,52.3,37.3,52.3z\"/>\r\n        </g>\r\n    </svg>\r\n\r\n    <svg *ngSwitchCase=\"isIcon('audio')\" viewBox=\"0 0 96 96\">\r\n        <g>\r\n            <path d=\"M71.4,30.7c0.6,0.6,1.2,1.5,1.6,2.5c0.4,1.1,0.7,2.1,0.7,2.9v38.6c0,0.9-0.3,1.7-0.9,2.3\r\n                S71.4,78,70.5,78h-45c-0.9,0-1.7-0.3-2.3-0.9c-0.6-0.6-0.9-1.4-0.9-2.3V21.2c0-0.9,0.3-1.7,0.9-2.3c0.6-0.6,1.4-0.9,2.3-0.9h30\r\n                c0.9,0,1.9,0.2,2.9,0.7c1.1,0.4,1.9,1,2.5,1.6L71.4,30.7z M56.6,22.6v12.6h12.6c-0.2-0.6-0.5-1.1-0.7-1.4L57.9,23.3\r\n                C57.7,23,57.2,22.8,56.6,22.6z M69.4,73.7V39.4H55.5c-0.9,0-1.7-0.3-2.3-0.9c-0.6-0.6-0.9-1.4-0.9-2.3V22.3H26.6v51.4H69.4z\r\n                M43,46.5c0.4,0.2,0.7,0.5,0.7,1v18.2c0,0.5-0.2,0.8-0.7,1c-0.2,0-0.3,0.1-0.4,0.1c-0.3,0-0.5-0.1-0.8-0.3l-5.6-5.6h-4.4\r\n                c-0.3,0-0.6-0.1-0.8-0.3c-0.2-0.2-0.3-0.5-0.3-0.8v-6.4c0-0.3,0.1-0.6,0.3-0.8c0.2-0.2,0.5-0.3,0.8-0.3h4.4l5.6-5.6\r\n                C42.2,46.4,42.6,46.3,43,46.5z M57,69.5c0.7,0,1.3-0.3,1.7-0.8c2.9-3.5,4.3-7.6,4.3-12.2s-1.4-8.6-4.3-12.2\r\n                c-0.4-0.5-0.8-0.7-1.4-0.8c-0.6-0.1-1.1,0.1-1.6,0.5c-0.5,0.4-0.7,0.9-0.8,1.5c-0.1,0.6,0.1,1.1,0.5,1.6c2.2,2.7,3.3,5.9,3.3,9.4\r\n                c0,3.5-1.1,6.7-3.3,9.4c-0.4,0.5-0.5,1-0.5,1.6c0.1,0.6,0.3,1.1,0.8,1.4C56.1,69.4,56.5,69.5,57,69.5z M49.9,64.6\r\n                c0.6,0,1.1-0.2,1.6-0.7c1.9-2.1,2.9-4.5,2.9-7.3s-1-5.3-2.9-7.3c-0.4-0.4-0.9-0.6-1.5-0.7c-0.6,0-1.1,0.2-1.5,0.6s-0.6,0.9-0.7,1.5\r\n                c0,0.6,0.2,1.1,0.6,1.6c1.2,1.3,1.7,2.7,1.7,4.4c0,1.7-0.6,3.1-1.7,4.4c-0.4,0.4-0.6,1-0.6,1.6c0,0.6,0.2,1.1,0.7,1.5\r\n                C48.9,64.4,49.4,64.6,49.9,64.6z\"/>\r\n        </g>\r\n    </svg>\r\n\r\n    <svg *ngSwitchCase=\"isIcon('text')\" viewBox=\"0 0 96 96\">\r\n        <g>\r\n            <path d=\"M71.4,30.7c0.6,0.6,1.2,1.5,1.6,2.5c0.4,1.1,0.7,2.1,0.7,2.9v38.6c0,0.9-0.3,1.7-0.9,2.3\r\n                S71.4,78,70.5,78h-45c-0.9,0-1.7-0.3-2.3-0.9c-0.6-0.6-0.9-1.4-0.9-2.3V21.2c0-0.9,0.3-1.7,0.9-2.3c0.6-0.6,1.4-0.9,2.3-0.9h30\r\n                c0.9,0,1.9,0.2,2.9,0.7c1.1,0.4,1.9,1,2.5,1.6L71.4,30.7z M56.6,22.6v12.6h12.6c-0.2-0.6-0.5-1.1-0.7-1.4L57.9,23.3\r\n                C57.7,23,57.2,22.8,56.6,22.6z M69.4,73.7V39.4H55.5c-0.9,0-1.7-0.3-2.3-0.9c-0.6-0.6-0.9-1.4-0.9-2.3V22.3H26.6v51.4H69.4z\r\n                M35.1,44.8c0-0.3,0.1-0.6,0.3-0.8c0.2-0.2,0.5-0.3,0.8-0.3h23.6c0.3,0,0.6,0.1,0.8,0.3c0.2,0.2,0.3,0.5,0.3,0.8v2.1\r\n                c0,0.3-0.1,0.6-0.3,0.8c-0.2,0.2-0.5,0.3-0.8,0.3H36.2c-0.3,0-0.6-0.1-0.8-0.3c-0.2-0.2-0.3-0.5-0.3-0.8V44.8z M59.8,52.3\r\n                c0.3,0,0.6,0.1,0.8,0.3c0.2,0.2,0.3,0.5,0.3,0.8v2.1c0,0.3-0.1,0.6-0.3,0.8c-0.2,0.2-0.5,0.3-0.8,0.3H36.2c-0.3,0-0.6-0.1-0.8-0.3\r\n                c-0.2-0.2-0.3-0.5-0.3-0.8v-2.1c0-0.3,0.1-0.6,0.3-0.8c0.2-0.2,0.5-0.3,0.8-0.3H59.8z M59.8,60.9c0.3,0,0.6,0.1,0.8,0.3\r\n                c0.2,0.2,0.3,0.5,0.3,0.8v2.1c0,0.3-0.1,0.6-0.3,0.8c-0.2,0.2-0.5,0.3-0.8,0.3H36.2c-0.3,0-0.6-0.1-0.8-0.3\r\n                c-0.2-0.2-0.3-0.5-0.3-0.8v-2.1c0-0.3,0.1-0.6,0.3-0.8c0.2-0.2,0.5-0.3,0.8-0.3H59.8z\"/>\r\n        </g>\r\n    </svg>\r\n\r\n    <svg *ngSwitchCase=\"isIcon('video')\" viewBox=\"0 0 96 96\">\r\n        <g>\r\n            <path d=\"M71.4,30.7c0.6,0.6,1.2,1.5,1.6,2.5c0.4,1.1,0.7,2.1,0.7,2.9v38.6c0,0.9-0.3,1.7-0.9,2.3\r\n                S71.4,78,70.5,78h-45c-0.9,0-1.7-0.3-2.3-0.9c-0.6-0.6-0.9-1.4-0.9-2.3V21.2c0-0.9,0.3-1.7,0.9-2.3c0.6-0.6,1.4-0.9,2.3-0.9h30\r\n                c0.9,0,1.9,0.2,2.9,0.7c1.1,0.4,1.9,1,2.5,1.6L71.4,30.7z M56.6,22.6v12.6h12.6c-0.2-0.6-0.5-1.1-0.7-1.4L57.9,23.3\r\n                C57.7,23,57.2,22.8,56.6,22.6z M69.4,73.7V39.4H55.5c-0.9,0-1.7-0.3-2.3-0.9c-0.6-0.6-0.9-1.4-0.9-2.3V22.3H26.6v51.4H69.4z\r\n                M48,43.7c1.2,0,2.2,0.4,3,1.3c0.8,0.8,1.3,1.9,1.3,3v12.9c0,1.2-0.4,2.2-1.3,3c-0.8,0.8-1.9,1.3-3,1.3H35.1c-1.2,0-2.2-0.4-3-1.3\r\n                c-0.8-0.8-1.3-1.9-1.3-3V48c0-1.2,0.4-2.2,1.3-3c0.8-0.8,1.9-1.3,3-1.3H48z M64.5,43.8c0.4,0.2,0.7,0.5,0.7,1v19.3\r\n                c0,0.5-0.2,0.8-0.7,1c-0.2,0-0.3,0.1-0.4,0.1c-0.3,0-0.6-0.1-0.8-0.3l-8.9-8.9v-3l8.9-8.9c0.2-0.2,0.5-0.3,0.8-0.3\r\n                C64.2,43.7,64.3,43.7,64.5,43.8z\"/>\r\n        </g>\r\n    </svg>\r\n\r\n</ng-container>",
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
                styles: [":host{border:1px solid #eaeaea;border-radius:4px;display:block}:host svg{fill:#909293}"]
            }]
    }], function () { return [{ type: FileUploadService }]; }, { file: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }] }); })();

class FileUploadAttributeComponent {
    constructor(fileUploadService, hostElementRef, renderer, document) {
        this.fileUploadService = fileUploadService;
        this.hostElementRef = hostElementRef;
        this.renderer = renderer;
        this.document = document;
        this.control = null;
        this.templateRef = null;
        this.hooks = [];
        this.subscriptions = [];
        this.onTouch = () => {
            this.renderer.addClass(this.hostElementRef.nativeElement, TOUCHED);
        };
    }
    ngOnInit() {
        if (IsNullOrEmpty(this.control)) {
            this.control = new FileUploadControl();
        }
    }
    ngAfterViewInit() {
        if (this.fileUploadService.isFileDragDropAvailable()) {
            this.setEvents();
            this.checkAndMarkAsDisabled();
        }
    }
    ngOnDestroy() {
        this.hooks.forEach((hook) => hook());
        this.hooks.length = 0;
        this.subscriptions.forEach((subscription) => subscription.unsubscribe());
        this.subscriptions.length = 0;
    }
    get hasFiles() {
        return this.control.isListVisible && this.control.size > 0;
    }
    get isInvalid() {
        return !this.control.disabled && this.control.invalid;
    }
    setEvents() {
        ['drag', 'dragstart', 'dragend', 'dragover', 'dragenter', 'dragleave', 'drop'].forEach((eventName) => {
            this.hooks.push(this.renderer.listen(this.document, eventName, (event) => this.preventDragEvents(event)));
        });
        ['dragover', 'dragenter'].forEach((eventName) => {
            this.hooks.push(this.renderer.listen(this.hostElementRef.nativeElement, eventName, (event) => this.onDragOver(event)));
        });
        ['dragleave', 'dragend', 'drop'].forEach((eventName) => {
            this.hooks.push(this.renderer.listen(this.hostElementRef.nativeElement, eventName, (event) => {
                if (this.control.disabled && eventName === 'dragleave' || eventName !== 'dragleave') {
                    this.onDragLeave(event);
                }
            }));
        });
        ['dragleave'].forEach((eventName) => {
            this.hooks.push(this.renderer.listen(this.overlay.nativeElement, eventName, (event) => this.onDragLeave(event)));
        });
        this.subscriptions.push(this.control.statusChanges.subscribe((status) => this.checkAndMarkAsDisabled()));
    }
    checkAndMarkAsDisabled() {
        if (this.control.disabled) {
            this.renderer.addClass(this.hostElementRef.nativeElement, 'disabled');
        }
        else {
            this.renderer.removeClass(this.hostElementRef.nativeElement, 'disabled');
        }
    }
    preventDragEvents(event) {
        event.preventDefault();
        event.stopPropagation();
    }
    /**
     * on file over add class name
     */
    onDragOver(event) {
        this.renderer.addClass(this.hostElementRef.nativeElement, DRAGOVER);
    }
    /**
     * on mouse out remove class name
     */
    onDragLeave(event) {
        this.renderer.removeClass(this.hostElementRef.nativeElement, DRAGOVER);
    }
    onDrop(event) {
        if (this.control.disabled) {
            return;
        }
        const files = event.dataTransfer.files;
        this.control.addFiles(files);
        this.onTouch();
    }
}
FileUploadAttributeComponent.ɵfac = function FileUploadAttributeComponent_Factory(t) { return new (t || FileUploadAttributeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](FileUploadService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__.DOCUMENT)); };
FileUploadAttributeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FileUploadAttributeComponent, selectors: [["", "file-drop-zone", ""]], contentQueries: function FileUploadAttributeComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, _c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.templateRef = _t.first);
    } }, viewQuery: function FileUploadAttributeComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c6, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.overlay = _t.first);
    } }, hostVars: 4, hostBindings: function FileUploadAttributeComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("drop", function FileUploadAttributeComponent_drop_HostBindingHandler($event) { return ctx.onDrop($event); });
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("has-files", ctx.hasFiles)("ng-invalid", ctx.isInvalid);
    } }, inputs: { control: "control" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
            FileUploadService
        ])], attrs: _c7, ngContentSelectors: _c5, decls: 2, vars: 1, consts: [["class", "overlay", 4, "ngIf"], [1, "overlay"], ["overlay", ""], [1, "upload-input"], [4, "ngTemplateOutlet"], ["defaultTemplate", ""]], template: function FileUploadAttributeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FileUploadAttributeComponent_div_1_Template, 6, 1, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.fileUploadService.isFileDragDropAvailable());
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgTemplateOutlet, FileUploadDropZoneComponent], styles: ["[_nghost-%COMP%]{display:block;position:relative}[_nghost-%COMP%]   .overlay[_ngcontent-%COMP%]{background:hsla(0,0%,100%,.8);bottom:0;display:none;left:0;outline:2px dashed #92b0b3;outline-offset:-10px;position:absolute;right:0;top:0}.dragover[_nghost-%COMP%]:not(.disabled)   .overlay[_ngcontent-%COMP%]{display:block}[_nghost-%COMP%]     .icon{margin:0 auto 10px}[_nghost-%COMP%]     .icon svg{fill:#80a9d2}.upload-input[_ngcontent-%COMP%]{-ms-transform:translate(-50%,-50%);color:#80a9d2;cursor:pointer;display:inline-block;left:50%;pointer-events:none;position:absolute;top:50%;transform:translate(-50%,-50%);transition:all .15s ease-in-out}"] });
FileUploadAttributeComponent.ctorParameters = () => [
    { type: FileUploadService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2 },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject, args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.DOCUMENT,] }] }
];
FileUploadAttributeComponent.propDecorators = {
    control: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    overlay: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild, args: ['overlay',] }],
    templateRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild, args: ['placeholder',] }],
    hasFiles: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding, args: ['class.has-files',] }],
    isInvalid: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding, args: ['class.ng-invalid',] }],
    onDrop: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener, args: ['drop', ['$event'],] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FileUploadAttributeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
        args: [{
                selector: `[file-drop-zone]`,
                template: `
        <ng-content></ng-content>
        <div #overlay class="overlay" *ngIf="fileUploadService.isFileDragDropAvailable()">

            <div class="upload-input">
                <ng-container *ngTemplateOutlet="templateRef ? templateRef : defaultTemplate"></ng-container>

                <ng-template #defaultTemplate>
                    <file-upload-drop-zone>
                        <b>Drop</b> it here
                    </file-upload-drop-zone>
                </ng-template>
            </div>
        </div>
    `,
                providers: [
                    FileUploadService
                ],
                styles: [":host{display:block;position:relative}:host .overlay{background:hsla(0,0%,100%,.8);bottom:0;display:none;left:0;outline:2px dashed #92b0b3;outline-offset:-10px;position:absolute;right:0;top:0}:host(.dragover:not(.disabled)) .overlay{display:block}:host ::ng-deep .icon{margin:0 auto 10px}:host ::ng-deep .icon svg{fill:#80a9d2}.upload-input{-ms-transform:translate(-50%,-50%);color:#80a9d2;cursor:pointer;display:inline-block;left:50%;pointer-events:none;position:absolute;top:50%;transform:translate(-50%,-50%);transition:all .15s ease-in-out}"]
            }]
    }], function () { return [{ type: FileUploadService }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2 }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.DOCUMENT]
            }] }]; }, { control: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], templateRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
            args: ['placeholder']
        }], hasFiles: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
            args: ['class.has-files']
        }], isInvalid: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
            args: ['class.ng-invalid']
        }], onDrop: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
            args: ['drop', ['$event']]
        }], overlay: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
            args: ['overlay']
        }] }); })();

class SimpleFileUploadComponent extends FileUploadAbstract {
    constructor(fileUploadService, hostElementRef, renderer, cdr) {
        super(hostElementRef, renderer, cdr);
        this.fileUploadService = fileUploadService;
        this.control = null;
        this.buttonRef = null;
        this.placeholderRef = null;
        this.isMultiple = false;
        this.onTouch = () => {
            this.renderer.addClass(this.hostElementRef.nativeElement, TOUCHED);
        };
    }
    get hasFiles() {
        return this.control.isListVisible && this.control.size > 0;
    }
    get isInvalid() {
        return !this.control.disabled && this.control.invalid;
    }
    onInputChange(event) {
        const input = (event.target);
        if (!this.control.disabled && input.files.length > 0) {
            this.control.setValue(Array.from(input.files));
            this.clearInputEl();
        }
        this.onTouch();
    }
    /**
     * model -> view changes
     */
    writeValue(files) {
        if (files != null) {
            this.control.setValue(files);
        }
    }
    /**
     * register function which will be called on UI change
     * to update view -> model
     */
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouch = fn;
    }
    setDisabledState(isDisabled) {
        this.control.disable(isDisabled);
    }
    onKeyDown(event) {
        if (event.keyCode === 13 || event.keyCode === 32) {
            event.preventDefault();
            this.control.click();
        }
    }
}
SimpleFileUploadComponent.ɵfac = function SimpleFileUploadComponent_Factory(t) { return new (t || SimpleFileUploadComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](FileUploadService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef)); };
SimpleFileUploadComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SimpleFileUploadComponent, selectors: [["file-upload", "simple", ""]], contentQueries: function SimpleFileUploadComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, _c8, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, _c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.buttonRef = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.placeholderRef = _t.first);
    } }, viewQuery: function SimpleFileUploadComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c2, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c3, 7);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.input = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.label = _t.first);
    } }, hostVars: 4, hostBindings: function SimpleFileUploadComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("has-files", ctx.hasFiles)("ng-invalid", ctx.isInvalid);
    } }, inputs: { control: "control" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
            FileUploadService,
            {
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NG_VALUE_ACCESSOR,
                useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => SimpleFileUploadComponent),
                multi: true
            }
        ]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], attrs: _c9, decls: 12, vars: 7, consts: [[1, "upload-text"], [3, "ngIf"], ["defaultPlaceholderTemplate", ""], ["tabindex", "0", 1, "upload-button", 3, "keydown"], ["labelRef", ""], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["defaultButtonTemplate", ""], ["type", "file", "tabindex", "-1", 1, "files-input", 3, "change"], ["inputRef", ""], ["class", "file-name", 4, "ngIf", "ngIfElse"], ["emptyList", ""], [1, "file-name"], [1, "button"], [1, "icon"], ["viewBox", "0 0 96 96"], ["d", "M62.8,68.1c0-0.6-0.2-1.1-0.6-1.5c-0.4-0.4-0.9-0.6-1.5-0.6s-1.1,0.2-1.5,0.6\n                            c-0.4,0.4-0.6,0.9-0.6,1.5c0,0.6,0.2,1.1,0.6,1.5c0.4,0.4,0.9,0.6,1.5,0.6s1.1-0.2,1.5-0.6S62.8,68.7,62.8,68.1z M71.3,68.1\n                            c0-0.6-0.2-1.1-0.6-1.5c-0.4-0.4-0.9-0.6-1.5-0.6c-0.6,0-1.1,0.2-1.5,0.6C67.2,67,67,67.5,67,68.1c0,0.6,0.2,1.1,0.6,1.5\n                            s0.9,0.6,1.5,0.6c0.6,0,1.1-0.2,1.5-0.6C71.1,69.2,71.3,68.7,71.3,68.1z M75.5,60.7v10.6c0,0.9-0.3,1.6-0.9,2.2\n                            c-0.6,0.6-1.4,0.9-2.2,0.9H23.7c-0.9,0-1.6-0.3-2.2-0.9c-0.6-0.6-0.9-1.4-0.9-2.2V60.7c0-0.9,0.3-1.6,0.9-2.2\n                            c0.6-0.6,1.4-0.9,2.2-0.9h14.1c0.5,1.2,1.2,2.2,2.3,3c1.1,0.8,2.3,1.2,3.7,1.2h8.5c1.3,0,2.6-0.4,3.7-1.2c1.1-0.8,1.9-1.8,2.3-3\n                            h14.1c0.9,0,1.6,0.3,2.2,0.9C75.2,59.1,75.5,59.8,75.5,60.7z M64.8,39.3c-0.4,0.9-1,1.3-2,1.3h-8.5v14.8c0,0.6-0.2,1.1-0.6,1.5\n                            c-0.4,0.4-0.9,0.6-1.5,0.6h-8.5c-0.6,0-1.1-0.2-1.5-0.6c-0.4-0.4-0.6-0.9-0.6-1.5V40.6h-8.5c-0.9,0-1.6-0.4-2-1.3\n                            c-0.4-0.9-0.2-1.6,0.5-2.3l14.8-14.8c0.4-0.4,0.9-0.6,1.5-0.6s1.1,0.2,1.5,0.6L64.3,37C65,37.7,65.1,38.4,64.8,39.3z"], [1, "button-text"]], template: function SimpleFileUploadComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SimpleFileUploadComponent_ng_template_1_Template, 1, 6, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SimpleFileUploadComponent_ng_template_3_Template, 3, 2, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown", function SimpleFileUploadComponent_Template_label_keydown_5_listener($event) { return ctx.onKeyDown($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, SimpleFileUploadComponent_ng_container_7_Template, 1, 0, "ng-container", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, SimpleFileUploadComponent_ng_template_8_Template, 7, 0, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function SimpleFileUploadComponent_Template_input_change_10_listener($event) { return ctx.onInputChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 3, ctx.control.valueChanges));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx.buttonRef ? ctx.buttonRef : _r5)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c11, ctx.control));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgTemplateOutlet], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.AsyncPipe], styles: ["[_nghost-%COMP%], [_nghost-%COMP%] > *[_ngcontent-%COMP%]{box-sizing:border-box}[_nghost-%COMP%]{background-color:#fff;border:1px solid #ddd;border-radius:4px;box-shadow:inset 0 4px 7px rgba(0,0,0,.05);color:#555;display:-ms-flexbox;display:flex;line-height:1.5}.disabled[_nghost-%COMP%]{opacity:.5}.files-input[_ngcontent-%COMP%]{height:.1px;left:-100%;opacity:0;overflow:hidden;position:absolute;top:-100%;width:.1px}.icon[_ngcontent-%COMP%]{display:inline-block;height:24px;width:24px}.icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{fill:#555}.upload-button[_ngcontent-%COMP%]{background-color:#eee;border-left:1px solid #ddd;border-radius:0 4px 4px 0;color:#555;cursor:pointer;display:block;margin:0;min-width:100px;outline:none;padding:2px 4px;position:relative}.upload-text[_ngcontent-%COMP%]{display:block;font-size:14px;height:30px;overflow:hidden;padding:5px 10px;text-overflow:ellipsis;white-space:nowrap;width:100%}.button-text[_ngcontent-%COMP%]{padding-left:10px;vertical-align:middle}.disabled[_nghost-%COMP%]   .upload-button[_ngcontent-%COMP%]{cursor:not-allowed}[_nghost-%COMP%]:not(.disabled)   .upload-button[_ngcontent-%COMP%]:focus, [_nghost-%COMP%]:not(.disabled)   .upload-button[_ngcontent-%COMP%]:hover{color:#80a9d2}[_nghost-%COMP%]:not(.disabled)   .upload-button[_ngcontent-%COMP%]:focus   svg[_ngcontent-%COMP%], [_nghost-%COMP%]:not(.disabled)   .upload-button[_ngcontent-%COMP%]:hover   svg[_ngcontent-%COMP%]{fill:#80a9d2}"], changeDetection: 0 });
SimpleFileUploadComponent.ctorParameters = () => [
    { type: FileUploadService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2 },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef }
];
SimpleFileUploadComponent.propDecorators = {
    control: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    buttonRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild, args: ['button',] }],
    placeholderRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild, args: ['placeholder',] }],
    input: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild, args: ['inputRef', { static: true },] }],
    label: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild, args: ['labelRef', { static: true },] }],
    hasFiles: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding, args: ['class.has-files',] }],
    isInvalid: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding, args: ['class.ng-invalid',] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SimpleFileUploadComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
        args: [{
                selector: `file-upload[simple]`,
                template: "<div class=\"upload-text\">\r\n    <ng-template [ngIf]=\"control.valueChanges | async\">\r\n        <ng-container *ngTemplateOutlet=\"placeholderRef ? placeholderRef : defaultPlaceholderTemplate; context: { $implicit: control.value[0], control: control, file: control.value[0] }\"></ng-container>\r\n    </ng-template>\r\n    \r\n    <ng-template #defaultPlaceholderTemplate let-file>\r\n        <span *ngIf=\"file; else emptyList\" class=\"file-name\">{{ file.name }}</span>\r\n\r\n        <ng-template #emptyList>\r\n            Select a file...\r\n        </ng-template>\r\n    </ng-template>\r\n</div>\r\n\r\n<label #labelRef class=\"upload-button\" tabindex=\"0\" (keydown)=\"onKeyDown($event)\">\r\n    <ng-container *ngTemplateOutlet=\"buttonRef ? buttonRef : defaultButtonTemplate; context: { control: control }\"></ng-container>\r\n\r\n    <ng-template #defaultButtonTemplate>\r\n        <div class=\"button\">\r\n            <div class=\"icon\">\r\n                <svg viewBox=\"0 0 96 96\">\r\n                    <g>\r\n                        <path d=\"M62.8,68.1c0-0.6-0.2-1.1-0.6-1.5c-0.4-0.4-0.9-0.6-1.5-0.6s-1.1,0.2-1.5,0.6\r\n                            c-0.4,0.4-0.6,0.9-0.6,1.5c0,0.6,0.2,1.1,0.6,1.5c0.4,0.4,0.9,0.6,1.5,0.6s1.1-0.2,1.5-0.6S62.8,68.7,62.8,68.1z M71.3,68.1\r\n                            c0-0.6-0.2-1.1-0.6-1.5c-0.4-0.4-0.9-0.6-1.5-0.6c-0.6,0-1.1,0.2-1.5,0.6C67.2,67,67,67.5,67,68.1c0,0.6,0.2,1.1,0.6,1.5\r\n                            s0.9,0.6,1.5,0.6c0.6,0,1.1-0.2,1.5-0.6C71.1,69.2,71.3,68.7,71.3,68.1z M75.5,60.7v10.6c0,0.9-0.3,1.6-0.9,2.2\r\n                            c-0.6,0.6-1.4,0.9-2.2,0.9H23.7c-0.9,0-1.6-0.3-2.2-0.9c-0.6-0.6-0.9-1.4-0.9-2.2V60.7c0-0.9,0.3-1.6,0.9-2.2\r\n                            c0.6-0.6,1.4-0.9,2.2-0.9h14.1c0.5,1.2,1.2,2.2,2.3,3c1.1,0.8,2.3,1.2,3.7,1.2h8.5c1.3,0,2.6-0.4,3.7-1.2c1.1-0.8,1.9-1.8,2.3-3\r\n                            h14.1c0.9,0,1.6,0.3,2.2,0.9C75.2,59.1,75.5,59.8,75.5,60.7z M64.8,39.3c-0.4,0.9-1,1.3-2,1.3h-8.5v14.8c0,0.6-0.2,1.1-0.6,1.5\r\n                            c-0.4,0.4-0.9,0.6-1.5,0.6h-8.5c-0.6,0-1.1-0.2-1.5-0.6c-0.4-0.4-0.6-0.9-0.6-1.5V40.6h-8.5c-0.9,0-1.6-0.4-2-1.3\r\n                            c-0.4-0.9-0.2-1.6,0.5-2.3l14.8-14.8c0.4-0.4,0.9-0.6,1.5-0.6s1.1,0.2,1.5,0.6L64.3,37C65,37.7,65.1,38.4,64.8,39.3z\"/>\r\n                    </g>\r\n                </svg>\r\n            </div>\r\n            \r\n            <span class=\"button-text\">Browse</span>\r\n        </div>\r\n    </ng-template>\r\n\r\n    <input #inputRef type=\"file\" class=\"files-input\" tabindex=\"-1\" (change)=\"onInputChange($event)\">\r\n</label>",
                providers: [
                    FileUploadService,
                    {
                        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NG_VALUE_ACCESSOR,
                        useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => SimpleFileUploadComponent),
                        multi: true
                    }
                ],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
                styles: [":host,:host>*{box-sizing:border-box}:host{background-color:#fff;border:1px solid #ddd;border-radius:4px;box-shadow:inset 0 4px 7px rgba(0,0,0,.05);color:#555;display:-ms-flexbox;display:flex;line-height:1.5}:host(.disabled){opacity:.5}.files-input{height:.1px;left:-100%;opacity:0;overflow:hidden;position:absolute;top:-100%;width:.1px}.icon{display:inline-block;height:24px;width:24px}.icon svg{fill:#555}.upload-button{background-color:#eee;border-left:1px solid #ddd;border-radius:0 4px 4px 0;color:#555;cursor:pointer;display:block;margin:0;min-width:100px;outline:none;padding:2px 4px;position:relative}.upload-text{display:block;font-size:14px;height:30px;overflow:hidden;padding:5px 10px;text-overflow:ellipsis;white-space:nowrap;width:100%}.button-text{padding-left:10px;vertical-align:middle}:host(.disabled) .upload-button{cursor:not-allowed}:host(:not(.disabled)) .upload-button:focus,:host(:not(.disabled)) .upload-button:hover{color:#80a9d2}:host(:not(.disabled)) .upload-button:focus svg,:host(:not(.disabled)) .upload-button:hover svg{fill:#80a9d2}"]
            }]
    }], function () { return [{ type: FileUploadService }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2 }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef }]; }, { control: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], buttonRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
            args: ['button']
        }], placeholderRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
            args: ['placeholder']
        }], hasFiles: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
            args: ['class.has-files']
        }], isInvalid: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
            args: ['class.ng-invalid']
        }], input: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
            args: ['inputRef', { static: true }]
        }], label: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
            args: ['labelRef', { static: true }]
        }] }); })();

/**
 * function used to check file size
 */
const checkFileSize = (file, maxSize, minSize = 0) => {
    return (!IsNullOrEmpty(maxSize) && file.size > maxSize) || file.size < minSize ?
        { maxSize, minSize, actual: file.size, file } : null;
};
const ɵ0 = checkFileSize;
const getFileType = (file, fileExtension) => {
    const type = file.type;
    if (!IsNullOrEmpty(type)) {
        return type;
    }
    return FileUploadTypes[fileExtension];
};
const ɵ1 = getFileType;
const FILE_EXT_REG = /(^[.]\w*)$/m;
/**
 * function used to check file type
 *
 * #### allowedTypes
 * file_extension|audio/*|video/*|image/*|media_type
 */
const checkFileType = (file, allowedTypes) => {
    const fileExtension = file.name.split('.').pop().toLowerCase();
    const fileType = getFileType(file, fileExtension);
    for (const type of allowedTypes) {
        const isValid = FILE_EXT_REG.test(type) ? type === `.${fileExtension}` : new RegExp(type).test(fileType);
        if (isValid) {
            return null;
        }
    }
    return { allowedTypes, actual: file.type, file };
};
const ɵ2 = checkFileType;
const checkValueType = (value) => {
    if (!Array.isArray(value)) {
        throw Error(`FormControl.setValue was provided with wrong argument type, ${value} was provided instead Array<File>`);
    }
};
const ɵ3 = checkValueType;
// @dynamic
class FileUploadValidators {
    /**
     * Validator that requires controls to have a file maximum size length.
     * Compare the File size in bytes
     * @dynamic
     */
    static fileSize(maxSize) {
        return (control) => {
            const files = control.value;
            if (IsNullOrEmpty(files)) {
                return null;
            }
            checkValueType(files);
            const toLargeFiles = files.map((file) => checkFileSize(file, maxSize))
                .filter((error) => error);
            return toLargeFiles.length > 0 ?
                { 'fileSize': toLargeFiles } : null;
        };
    }
    /**
     * Compare the File size in bytes with max and min size limits
     * @dynamic
     */
    static sizeRange({ minSize, maxSize }) {
        return (control) => {
            const files = control.value;
            if (IsNullOrEmpty(files)) {
                return null;
            }
            checkValueType(files);
            const sizeMismatch = files.map((file) => checkFileSize(file, maxSize, minSize))
                .filter((error) => error);
            return sizeMismatch.length > 0 ?
                { 'sizeRange': sizeMismatch } : null;
        };
    }
    /**
     * validator that requires control to have limit on files number
     * @dynamic
     */
    static filesLimit(numFiles) {
        return (control) => {
            const files = control.value;
            if (IsNullOrEmpty(files)) {
                return null;
            }
            checkValueType(files);
            return files.length > numFiles ?
                { 'filesLimit': { 'max': numFiles, 'actual': files.length } } : null;
        };
    }
    /**
     * validator that requires control to have limit on media types
     *
     * ##### Allowed media types are
     *
     * - file_extension - a file extension starting with the STOP character,
     * e.g: .gif, .jpg, .png, .doc
     * - audio/* -        All sound files are accepted
     * - video/* -        All video files are accepted
     * - image/* -        All image files are accepted
     * - media_type -     A valid media type, with no parameters. Look at [IANA Media Types](https://www.iana.org/assignments/media-types/media-types.xhtml) for a complete list of standard media types
     *
     * #### Example
     * `FileUploadValidators.accept([file_extension, audio/*, video/*, image/*, media_type])`
     * @dynamic
     */
    static accept(allowedFileTypes) {
        return (control) => {
            const files = control.value;
            if (IsNullOrEmpty(files)) {
                return null;
            }
            checkValueType(files);
            const notAllowedFiles = files.map((file) => checkFileType(file, allowedFileTypes))
                .filter((error) => error);
            return notAllowedFiles.length > 0 ?
                { 'fileTypes': notAllowedFiles } : null;
        };
    }
}

/**
 * A Directive that adds the `filesize` validator to controls marked with the
 * `filesize` attribute. The size of the file is in bytes or any other unit
 *
 * ### Example
 *
 * ```
 * <file-upload name="files" ngModel filesize="830000"></file-upload>
 * <file-upload name="files" ngModel [filesize]="830000"></file-upload>
 * <file-upload name="files" ngModel minSize="0" max="6200"></file-upload>
 * <file-upload name="files" ngModel filesize="123MB"></file-upload>
 * <file-upload name="files" ngModel [filesize]="12 mb"></file-upload>
 * <file-upload name="files" ngModel minSize="0" max="324KB"></file-upload>
 * ```
 *
 */
class FileSizeValidator {
    constructor(fileUploadService) {
        this.fileUploadService = fileUploadService;
    }
    ngOnChanges(changes) {
        if ('filesize' in changes
            || 'maxsize' in changes
            || 'minsize' in changes) {
            this._createValidator();
            if (this.onChange) {
                this.onChange();
            }
        }
    }
    validate(c) {
        return this.validator(c);
    }
    registerOnValidatorChange(fn) {
        this.onChange = fn;
    }
    _createValidator() {
        let maxSize = null;
        if (!IsNullOrEmpty(this.maxsize)) {
            maxSize = this.fileUploadService.parseSize(this.maxsize);
        }
        else if (!IsNullOrEmpty(this.filesize)) {
            maxSize = this.fileUploadService.parseSize(this.filesize);
        }
        const minSize = this.fileUploadService.parseSize(this.minsize);
        this.validator = FileUploadValidators.sizeRange({ maxSize, minSize });
    }
}
FileSizeValidator.ɵfac = function FileSizeValidator_Factory(t) { return new (t || FileSizeValidator)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](FileUploadService)); };
FileSizeValidator.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: FileSizeValidator, selectors: [["file-upload", "filesize", "", "formControlName", ""], ["file-upload", "filesize", "", "formControl", ""], ["file-upload", "filesize", "", "ngModel", ""], ["file-upload", "minsize", "", "formControlName", ""], ["file-upload", "minsize", "", "formControl", ""], ["file-upload", "minsize", "", "ngModel", ""], ["file-upload", "maxsize", "", "formControlName", ""], ["file-upload", "maxsize", "", "formControl", ""], ["file-upload", "maxsize", "", "ngModel", ""]], hostVars: 3, hostBindings: function FileSizeValidator_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("filesize", ctx.filesize ? ctx.filesize : null)("minsize", ctx.minsize ? ctx.minsize : null)("maxsize", ctx.maxsize ? ctx.maxsize : null);
    } }, inputs: { filesize: "filesize", minsize: "minsize", maxsize: "maxsize" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NG_VALIDATORS,
                useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => FileSizeValidator),
                multi: true
            }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]] });
FileSizeValidator.ctorParameters = () => [
    { type: FileUploadService }
];
FileSizeValidator.propDecorators = {
    filesize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    minsize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    maxsize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FileSizeValidator, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
        args: [{
                selector: `file-upload[filesize][formControlName],
    file-upload[filesize][formControl],
    file-upload[filesize][ngModel],
    file-upload[minsize][formControlName],
    file-upload[minsize][formControl],
    file-upload[minsize][ngModel],
    file-upload[maxsize][formControlName],
    file-upload[maxsize][formControl],
    file-upload[maxsize][ngModel]`,
                providers: [{
                        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NG_VALIDATORS,
                        useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => FileSizeValidator),
                        multi: true
                    }],
                host: {
                    '[attr.filesize]': 'filesize ? filesize : null',
                    '[attr.minsize]': 'minsize ? minsize : null',
                    '[attr.maxsize]': 'maxsize ? maxsize : null'
                }
            }]
    }], function () { return [{ type: FileUploadService }]; }, { filesize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], minsize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], maxsize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }] }); })();
/**
 * A Directive that adds the `fileslimit` validator to controls marked with the
 * `fileslimit` attribute.
 *
 * ### Example
 *
 * ```
 * <file-upload name="files" ngModel fileslimit="2"></file-upload>
 * <file-upload name="files" ngModel [fileslimit]="2"></file-upload>
 * ```
 *
 */
class FilesLimitValidator {
    ngOnChanges(changes) {
        if ('fileslimit' in changes) {
            this._createValidator();
            if (this.onChange) {
                this.onChange();
            }
        }
    }
    validate(c) {
        return this.fileslimit != null ? this.validator(c) : null;
    }
    registerOnValidatorChange(fn) {
        this.onChange = fn;
    }
    _createValidator() {
        this.validator = FileUploadValidators.filesLimit(typeof this.fileslimit === 'string' ? parseInt(this.fileslimit, 10) : this.fileslimit);
    }
}
FilesLimitValidator.ɵfac = function FilesLimitValidator_Factory(t) { return new (t || FilesLimitValidator)(); };
FilesLimitValidator.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: FilesLimitValidator, selectors: [["file-upload", "fileslimit", "", "formControlName", ""], ["file-upload", "fileslimit", "", "formControl", ""], ["file-upload", "fileslimit", "", "ngModel", ""]], hostVars: 1, hostBindings: function FilesLimitValidator_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("fileslimit", ctx.fileslimit ? ctx.fileslimit : null);
    } }, inputs: { fileslimit: "fileslimit" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NG_VALIDATORS,
                useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => FilesLimitValidator),
                multi: true
            }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]] });
FilesLimitValidator.propDecorators = {
    fileslimit: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FilesLimitValidator, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
        args: [{
                selector: 'file-upload[fileslimit][formControlName], file-upload[fileslimit][formControl], file-upload[fileslimit][ngModel]',
                providers: [{
                        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NG_VALIDATORS,
                        useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => FilesLimitValidator),
                        multi: true
                    }],
                host: { '[attr.fileslimit]': 'fileslimit ? fileslimit : null' }
            }]
    }], null, { fileslimit: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }] }); })();
/**
 * A Directive that adds the `accept` validator to controls marked with the
 * `accept` attribute.
 *
 * ### Example
 *
 * ```
 * <file-upload name="files" ngModel accept="file_extension|audio/*|video/*|image/*|media_type"></file-upload>
 * <file-upload name="files" ngModel [accept]="file_extension|audio/*|video/*|image/*|media_type"></file-upload>
 * ```
 *
 * To specify more than one value, separate the values with a comma (e.g. <file-upload accept="audio/*,video/*,image/*"></file-upload>.
 *
 */
class FilesAcceptValidator {
    ngOnChanges(changes) {
        if ('accept' in changes) {
            this._createValidator();
            if (this.onChange) {
                this.onChange();
            }
        }
    }
    validate(c) {
        return !!this.validator ? this.validator(c) : null;
    }
    registerOnValidatorChange(fn) {
        this.onChange = fn;
    }
    _createValidator() {
        if (IsNullOrEmpty(this.accept)) {
            return;
        }
        this.validator = FileUploadValidators.accept(this.accept.split(','));
    }
}
FilesAcceptValidator.ɵfac = function FilesAcceptValidator_Factory(t) { return new (t || FilesAcceptValidator)(); };
FilesAcceptValidator.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: FilesAcceptValidator, selectors: [["file-upload", "accept", "", "formControlName", ""], ["file-upload", "accept", "", "formControl", ""], ["file-upload", "accept", "", "ngModel", ""]], hostVars: 1, hostBindings: function FilesAcceptValidator_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("accept", ctx.accept ? ctx.accept : null);
    } }, inputs: { accept: "accept" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NG_VALIDATORS,
                useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => FilesAcceptValidator),
                multi: true
            }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]] });
FilesAcceptValidator.propDecorators = {
    accept: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FilesAcceptValidator, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
        args: [{
                selector: 'file-upload[accept][formControlName], file-upload[accept][formControl], file-upload[accept][ngModel]',
                providers: [{
                        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NG_VALIDATORS,
                        useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => FilesAcceptValidator),
                        multi: true
                    }],
                host: { '[attr.accept]': 'accept ? accept : null' }
            }]
    }], null, { accept: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }] }); })();

class FilesAcceptDirective {
    constructor(fileUpload, simpleFileUpload) {
        this.fileUpload = null;
        this.fileUpload = fileUpload || simpleFileUpload;
    }
    ngAfterViewInit() {
        this.setAccept(this.accept);
    }
    ngOnChanges(changes) {
        if ('accept' in changes && changes['accept'].currentValue !== changes['accept'].previousValue) {
            this.setAccept(this.accept);
        }
    }
    setAccept(accept) {
        if (this.fileUpload && this.fileUpload.control) {
            this.fileUpload.control.acceptFiles(accept);
        }
    }
}
FilesAcceptDirective.ɵfac = function FilesAcceptDirective_Factory(t) { return new (t || FilesAcceptDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](FileUploadComponent, 11), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](SimpleFileUploadComponent, 11)); };
FilesAcceptDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: FilesAcceptDirective, selectors: [["file-upload", "accept", ""]], hostVars: 1, hostBindings: function FilesAcceptDirective_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("accept", ctx.accept ? ctx.accept : null);
    } }, inputs: { accept: "accept" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]] });
FilesAcceptDirective.ctorParameters = () => [
    { type: FileUploadComponent, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Host }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Self }] },
    { type: SimpleFileUploadComponent, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Host }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Self }] }
];
FilesAcceptDirective.propDecorators = {
    accept: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FilesAcceptDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
        args: [{
                selector: 'file-upload[accept]',
                host: { '[attr.accept]': 'accept ? accept : null' }
            }]
    }], function () { return [{ type: FileUploadComponent, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Host
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Self
            }] }, { type: SimpleFileUploadComponent, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Host
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Self
            }] }]; }, { accept: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }] }); })();

/*
 * FileUpload
 *
 * By Ivan Pintar, http://www.pintar-ivan.com
 * Licensed under the MIT License
 * See https://github.com/pIvan/file-upload/blob/master/README.md
 */
class FileUploadModule {
    ngDoBootstrap() { }
}
FileUploadModule.ɵfac = function FileUploadModule_Factory(t) { return new (t || FileUploadModule)(); };
FileUploadModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: FileUploadModule });
FileUploadModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule
        ]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FileUploadModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule
                ],
                declarations: [
                    FileUploadComponent,
                    FileUploadListItemComponent,
                    FileUploadIconComponent,
                    FileUploadDropZoneComponent,
                    FileUploadAttributeComponent,
                    FileSizeValidator,
                    FilesLimitValidator,
                    FilesAcceptValidator,
                    FilesAcceptDirective,
                    SimpleFileUploadComponent
                ],
                exports: [
                    FileUploadComponent,
                    FileUploadDropZoneComponent,
                    FileUploadListItemComponent,
                    FileUploadAttributeComponent,
                    FileSizeValidator,
                    FilesLimitValidator,
                    FilesAcceptValidator,
                    FilesAcceptDirective,
                    SimpleFileUploadComponent
                ],
                entryComponents: [
                    FileUploadComponent
                ]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](FileUploadModule, { declarations: function () { return [FileUploadComponent, FileUploadListItemComponent, FileUploadIconComponent, FileUploadDropZoneComponent, FileUploadAttributeComponent, FileSizeValidator, FilesLimitValidator, FilesAcceptValidator, FilesAcceptDirective, SimpleFileUploadComponent]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule]; }, exports: function () { return [FileUploadComponent, FileUploadDropZoneComponent, FileUploadListItemComponent, FileUploadAttributeComponent, FileSizeValidator, FilesLimitValidator, FilesAcceptValidator, FilesAcceptDirective, SimpleFileUploadComponent]; } }); })();

/*
 * Public API Surface of ngx-file-upload
 */

/**
 * Generated bundle index. Do not edit.
 */





/***/ })

}]);
//# sourceMappingURL=src_app_demo_extension_files-upload_files-upload_module_ts.js.map