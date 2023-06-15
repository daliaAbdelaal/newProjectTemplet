"use strict";
(self["webpackChunkng_able_pro"] = self["webpackChunkng_able_pro"] || []).push([["src_app_demo_extension_editor_pell-wysiwyg_pell-wysiwyg_module_ts"],{

/***/ 28438:
/*!***********************************************************************************!*\
  !*** ./src/app/demo/extension/editor/pell-wysiwyg/pell-wysiwyg-routing.module.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PellWysiwygRoutingModule": () => (/* binding */ PellWysiwygRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _pell_wysiwyg_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pell-wysiwyg.component */ 71647);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);




const routes = [
    {
        path: '',
        component: _pell_wysiwyg_component__WEBPACK_IMPORTED_MODULE_0__.PellWysiwygComponent
    }
];
class PellWysiwygRoutingModule {
}
PellWysiwygRoutingModule.ɵfac = function PellWysiwygRoutingModule_Factory(t) { return new (t || PellWysiwygRoutingModule)(); };
PellWysiwygRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: PellWysiwygRoutingModule });
PellWysiwygRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](PellWysiwygRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 71647:
/*!******************************************************************************!*\
  !*** ./src/app/demo/extension/editor/pell-wysiwyg/pell-wysiwyg.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PellWysiwygComponent": () => (/* binding */ PellWysiwygComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _theme_shared_components_card_card_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../theme/shared/components/card/card.component */ 84631);
/* harmony import */ var angular_pell__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular-pell */ 30857);



class PellWysiwygComponent {
    constructor() {
        this.editorContent = 'OK';
    }
    ngOnInit() { }
    onInput(e) { }
}
PellWysiwygComponent.ɵfac = function PellWysiwygComponent_Factory(t) { return new (t || PellWysiwygComponent)(); };
PellWysiwygComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: PellWysiwygComponent, selectors: [["app-pell-wysiwyg"]], decls: 4, vars: 1, consts: [[1, "row"], [1, "col-sm-12"], ["cardTitle", "Pell WYSIWYG Editor", 3, "options"]], template: function PellWysiwygComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "app-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "pell-editor");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("options", false);
    } }, directives: [_theme_shared_components_card_card_component__WEBPACK_IMPORTED_MODULE_0__.CardComponent, angular_pell__WEBPACK_IMPORTED_MODULE_1__["ɵa"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwZWxsLXd5c2l3eWcuY29tcG9uZW50LnNjc3MifQ== */"], encapsulation: 2 });


/***/ }),

/***/ 65883:
/*!***************************************************************************!*\
  !*** ./src/app/demo/extension/editor/pell-wysiwyg/pell-wysiwyg.module.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PellWysiwygModule": () => (/* binding */ PellWysiwygModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _pell_wysiwyg_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pell-wysiwyg-routing.module */ 28438);
/* harmony import */ var _pell_wysiwyg_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pell-wysiwyg.component */ 71647);
/* harmony import */ var _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../theme/shared/shared.module */ 95702);
/* harmony import */ var angular_pell__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-pell */ 30857);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);






class PellWysiwygModule {
}
PellWysiwygModule.ɵfac = function PellWysiwygModule_Factory(t) { return new (t || PellWysiwygModule)(); };
PellWysiwygModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: PellWysiwygModule });
PellWysiwygModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _pell_wysiwyg_routing_module__WEBPACK_IMPORTED_MODULE_0__.PellWysiwygRoutingModule, _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule, angular_pell__WEBPACK_IMPORTED_MODULE_3__.PellModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](PellWysiwygModule, { declarations: [_pell_wysiwyg_component__WEBPACK_IMPORTED_MODULE_1__.PellWysiwygComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _pell_wysiwyg_routing_module__WEBPACK_IMPORTED_MODULE_0__.PellWysiwygRoutingModule, _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule, angular_pell__WEBPACK_IMPORTED_MODULE_3__.PellModule] }); })();


/***/ }),

/***/ 30857:
/*!************************************************************************!*\
  !*** ./node_modules/angular-pell/__ivy_ngcc__/esm2015/angular-pell.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PellModule": () => (/* binding */ PellModule),
/* harmony export */   "ɵa": () => (/* binding */ PellComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 36362);



/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */



function PellComponent_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PellComponent_button_3_Template_button_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const action_r2 = restoredCtx.$implicit; return action_r2.result(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const action_r2 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r1.actionButtonClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", action_r2.title)("innerHTML", action_r2.icon, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
const actions = {
    bold: {
        icon: '<b>B</b>',
        title: 'Bold',
        result: () => exec('bold')
    },
    italic: {
        icon: '<i>I</i>',
        title: 'Italic',
        result: () => exec('italic')
    },
    underline: {
        icon: '<u>U</u>',
        title: 'Underline',
        result: () => exec('underline')
    },
    strikethrough: {
        icon: '<strike>S</strike>',
        title: 'Strike-through',
        result: () => exec('strikeThrough')
    },
    heading1: {
        icon: '<b>H<sub>1</sub></b>',
        title: 'Heading 1',
        result: () => exec('formatBlock', '<H1>')
    },
    heading2: {
        icon: '<b>H<sub>2</sub></b>',
        title: 'Heading 2',
        result: () => exec('formatBlock', '<H2>')
    },
    paragraph: {
        icon: '&#182;',
        title: 'Paragraph',
        result: () => exec('formatBlock', '<P>')
    },
    quote: {
        icon: '&#8220; &#8221;',
        title: 'Quote',
        result: () => exec('formatBlock', '<BLOCKQUOTE>')
    },
    olist: {
        icon: '&#35;',
        title: 'Ordered List',
        result: () => exec('insertOrderedList')
    },
    ulist: {
        icon: '&#8226;',
        title: 'Unordered List',
        result: () => exec('insertUnorderedList')
    },
    code: {
        icon: '&lt;/&gt;',
        title: 'Code',
        result: () => exec('formatBlock', '<PRE>')
    },
    line: {
        icon: '&#8213;',
        title: 'Horizontal Line',
        result: () => exec('insertHorizontalRule')
    },
    link: {
        icon: '&#128279;',
        title: 'Link',
        result: () => {
            const /** @type {?} */ url = window.prompt('Enter the link URL');
            if (url)
                exec('createLink', url);
        }
    },
    image: {
        icon: '&#128247;',
        title: 'Image',
        result: () => {
            const /** @type {?} */ url = window.prompt('Enter the image URL');
            if (url)
                exec('insertImage', url);
        }
    }
};
const exec = (command, value = null) => {
    document.execCommand(command, false, value);
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class PellComponent {
    constructor() {
        this.actions = Object.keys(actions).map(action => actions[action]);
        this.actionBarClass = 'pell-actionbar';
        this.actionButtonClass = 'pell-button';
        this.contentClass = 'pell-content';
        this.onChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onInput(event) {
        this.onChange.emit(event.target.innerHTML);
    }
}
PellComponent.ɵfac = function PellComponent_Factory(t) { return new (t || PellComponent)(); };
PellComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PellComponent, selectors: [["pell-editor"]], outputs: { onChange: "onChange" }, decls: 5, vars: 5, consts: [["pell", ""], [3, "class", "title", "innerHTML", "click", 4, "ngFor", "ngForOf"], ["contenteditable", "true", 3, "input"], [3, "title", "innerHTML", "click"]], template: function PellComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", null, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PellComponent_button_3_Template, 1, 4, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function PellComponent_Template_div_input_4_listener($event) { return ctx.onInput($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.actionBarClass);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.actions);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.contentClass);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf], styles: [".pell[_ngcontent-%COMP%]{border-radius:5px;-webkit-box-shadow:0 2px 3px hsla(0,0%,4%,.1),0 0 0 1px hsla(0,0%,4%,.1);box-shadow:0 2px 3px hsla(0,0%,4%,.1),0 0 0 1px hsla(0,0%,4%,.1)}.pell[_ngcontent-%COMP%], .pell-content[_ngcontent-%COMP%]{-webkit-box-sizing:border-box;box-sizing:border-box;width:100%}.pell-content[_ngcontent-%COMP%]{height:300px;outline:0;overflow-y:auto;padding:10px}.pell-actionbar[_ngcontent-%COMP%]{background-color:#fff;border-bottom:1px solid hsla(0,0%,4%,.1);border-top-left-radius:5px;border-top-right-radius:5px;width:100%}.pell-button[_ngcontent-%COMP%]{background-color:transparent;border:none;cursor:pointer;height:30px;outline:0;width:30px}"] });
/** @nocollapse */
PellComponent.ctorParameters = () => [];
PellComponent.propDecorators = {
    "onChange": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output },],
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PellComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
        args: [{
                selector: 'pell-editor',
                template: `<div #pell>
  <div [class]="actionBarClass">
    <button *ngFor="let action of actions" [class]="actionButtonClass" [title]="action.title"
    (click)="action.result()" [innerHTML]="action.icon">
    </button>
  </div>
  <div contenteditable="true" [class]="contentClass" (input)="onInput($event)"></div>
</div>
`,
                styles: [`.pell{border-radius:5px;-webkit-box-shadow:0 2px 3px hsla(0,0%,4%,.1),0 0 0 1px hsla(0,0%,4%,.1);box-shadow:0 2px 3px hsla(0,0%,4%,.1),0 0 0 1px hsla(0,0%,4%,.1)}.pell,.pell-content{-webkit-box-sizing:border-box;box-sizing:border-box;width:100%}.pell-content{height:300px;outline:0;overflow-y:auto;padding:10px}.pell-actionbar{background-color:#fff;border-bottom:1px solid hsla(0,0%,4%,.1);border-top-left-radius:5px;border-top-right-radius:5px;width:100%}.pell-button{background-color:transparent;border:none;cursor:pointer;height:30px;outline:0;width:30px}`]
            }]
    }], function () { return []; }, { onChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }] }); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class PellModule {
}
PellModule.ɵfac = function PellModule_Factory(t) { return new (t || PellModule)(); };
PellModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PellModule });
PellModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule
        ]] });
/** @nocollapse */
PellModule.ctorParameters = () => [];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PellModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule
                ],
                declarations: [PellComponent],
                exports: [PellComponent]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PellModule, { declarations: function () { return [PellComponent]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule]; }, exports: function () { return [PellComponent]; } }); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Generated bundle index. Do not edit.
 */





/***/ })

}]);
//# sourceMappingURL=src_app_demo_extension_editor_pell-wysiwyg_pell-wysiwyg_module_ts.js.map