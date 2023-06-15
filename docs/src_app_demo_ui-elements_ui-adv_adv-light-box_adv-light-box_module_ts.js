"use strict";
(self["webpackChunkng_able_pro"] = self["webpackChunkng_able_pro"] || []).push([["src_app_demo_ui-elements_ui-adv_adv-light-box_adv-light-box_module_ts"],{

/***/ 64160:
/*!***************************************************************************************!*\
  !*** ./src/app/demo/ui-elements/ui-adv/adv-light-box/adv-light-box-routing.module.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdvLightBoxRoutingModule": () => (/* binding */ AdvLightBoxRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _adv_light_box_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./adv-light-box.component */ 88771);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);




const routes = [
    {
        path: '',
        component: _adv_light_box_component__WEBPACK_IMPORTED_MODULE_0__.AdvLightBoxComponent
    }
];
class AdvLightBoxRoutingModule {
}
AdvLightBoxRoutingModule.ɵfac = function AdvLightBoxRoutingModule_Factory(t) { return new (t || AdvLightBoxRoutingModule)(); };
AdvLightBoxRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AdvLightBoxRoutingModule });
AdvLightBoxRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AdvLightBoxRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 88771:
/*!**********************************************************************************!*\
  !*** ./src/app/demo/ui-elements/ui-adv/adv-light-box/adv-light-box.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdvLightBoxComponent": () => (/* binding */ AdvLightBoxComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _theme_shared_components_card_card_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../theme/shared/components/card/card.component */ 84631);
/* harmony import */ var _theme_shared_components_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../theme/shared/components/gallery/gallery.component */ 67252);



class AdvLightBoxComponent {
    constructor() {
        this.singleGallery1 = [
            {
                src: 'assets/images/light-box/l3.jpg',
                caption: 'Image 3 caption here',
                thumb: 'assets/images/light-box/sl3.jpg'
            }
        ];
        this.singleGallery2 = [
            {
                src: 'assets/images/light-box/l4.jpg',
                caption: 'Image 4 caption here',
                thumb: 'assets/images/light-box/sl4.jpg'
            }
        ];
        this.albums = [];
        for (let i = 1; i <= 6; i++) {
            const album = {
                src: 'assets/images/light-box/l' + i + '.jpg',
                caption: 'Image ' + i + ' caption here',
                thumb: 'assets/images/light-box/sl' + i + '.jpg'
            };
            this.albums.push(album);
        }
    }
    ngOnInit() { }
}
AdvLightBoxComponent.ɵfac = function AdvLightBoxComponent_Factory(t) { return new (t || AdvLightBoxComponent)(); };
AdvLightBoxComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AdvLightBoxComponent, selectors: [["app-adv-light-box"]], decls: 12, vars: 3, consts: [[1, "page-body"], [1, "row"], [1, "col-sm-12"], ["cardTitle", "Single Images"], [1, "row", "single-image-gallery"], [1, "col-auto"], [3, "albums"], ["cardTitle", "Image Gallery"]], template: function AdvLightBoxComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "app-card", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "app-gallery", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "app-gallery", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "app-card", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "app-gallery", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("albums", ctx.singleGallery1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("albums", ctx.singleGallery2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("albums", ctx.albums);
    } }, directives: [_theme_shared_components_card_card_component__WEBPACK_IMPORTED_MODULE_0__.CardComponent, _theme_shared_components_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_1__.GalleryComponent], styles: [".img-row[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n\n.img-frame[_ngcontent-%COMP%] {\n  margin: 10px;\n  border: 5px solid #fff;\n  cursor: pointer;\n  transition-duration: 0.3s;\n  transition-property: transform;\n}\n\n.img-frame[_ngcontent-%COMP%]:hover, .img-frame[_ngcontent-%COMP%]:focus, .img-frame[_ngcontent-%COMP%]:active {\n  transform: translateY(-5px);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkdi1saWdodC1ib3guY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcSVQlMjBTSE9QXFxEZXNrdG9wXFxwcm9qZWN0JTIwd2l0aCUyMHJlYWR5JTIwdGVtcGxhdGVcXGZ1bGwtdmVyc2lvblxcc3JjXFxhcHBcXGRlbW9cXHVpLWVsZW1lbnRzXFx1aS1hZHZcXGFkdi1saWdodC1ib3hcXGFkdi1saWdodC1ib3guY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxQkFBQTtBQ0NKOztBREVBO0VBQ0ksWUFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtFQUVBLHlCQUFBO0VBRUEsOEJBQUE7QUNDSjs7QURFQTs7O0VBSUksMkJBQUE7QUNDSiIsImZpbGUiOiJhZHYtbGlnaHQtYm94LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmltZy1yb3cge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLmltZy1mcmFtZSB7XG4gICAgbWFyZ2luOiAxMHB4O1xuICAgIGJvcmRlcjogNXB4IHNvbGlkICNmZmY7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4zcztcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjNzO1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbi1wcm9wZXJ0eTogdHJhbnNmb3JtO1xuICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IHRyYW5zZm9ybTtcbn1cblxuLmltZy1mcmFtZTpob3Zlcixcbi5pbWctZnJhbWU6Zm9jdXMsXG4uaW1nLWZyYW1lOmFjdGl2ZSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTVweCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01cHgpO1xufVxuIiwiLmltZy1yb3cge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5pbWctZnJhbWUge1xuICBtYXJnaW46IDEwcHg7XG4gIGJvcmRlcjogNXB4IHNvbGlkICNmZmY7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgLXdlYmtpdC10cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjNzO1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjNzO1xuICAtd2Via2l0LXRyYW5zaXRpb24tcHJvcGVydHk6IHRyYW5zZm9ybTtcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogdHJhbnNmb3JtO1xufVxuXG4uaW1nLWZyYW1lOmhvdmVyLFxuLmltZy1mcmFtZTpmb2N1cyxcbi5pbWctZnJhbWU6YWN0aXZlIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTVweCk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNXB4KTtcbn0iXX0= */"] });


/***/ }),

/***/ 19609:
/*!*******************************************************************************!*\
  !*** ./src/app/demo/ui-elements/ui-adv/adv-light-box/adv-light-box.module.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdvLightBoxModule": () => (/* binding */ AdvLightBoxModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _adv_light_box_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./adv-light-box.component */ 88771);
/* harmony import */ var _adv_light_box_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./adv-light-box-routing.module */ 64160);
/* harmony import */ var _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../theme/shared/shared.module */ 95702);
/* harmony import */ var ngx_lightbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-lightbox */ 25015);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);






class AdvLightBoxModule {
}
AdvLightBoxModule.ɵfac = function AdvLightBoxModule_Factory(t) { return new (t || AdvLightBoxModule)(); };
AdvLightBoxModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: AdvLightBoxModule });
AdvLightBoxModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _adv_light_box_routing_module__WEBPACK_IMPORTED_MODULE_1__.AdvLightBoxRoutingModule, _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule, ngx_lightbox__WEBPACK_IMPORTED_MODULE_3__.LightboxModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AdvLightBoxModule, { declarations: [_adv_light_box_component__WEBPACK_IMPORTED_MODULE_0__.AdvLightBoxComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _adv_light_box_routing_module__WEBPACK_IMPORTED_MODULE_1__.AdvLightBoxRoutingModule, _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule, ngx_lightbox__WEBPACK_IMPORTED_MODULE_3__.LightboxModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_demo_ui-elements_ui-adv_adv-light-box_adv-light-box_module_ts.js.map