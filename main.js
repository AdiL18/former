(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/addirective.directive.ts":
/*!******************************************!*\
  !*** ./src/app/addirective.directive.ts ***!
  \******************************************/
/*! exports provided: AddirectiveDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddirectiveDirective", function() { return AddirectiveDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AddirectiveDirective = /** @class */ (function () {
    function AddirectiveDirective(viewContainerRef) {
        this.viewContainerRef = viewContainerRef;
    }
    AddirectiveDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[ad-host]',
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]])
    ], AddirectiveDirective);
    return AddirectiveDirective;
}());



/***/ }),

/***/ "./src/app/admin-dashboard/admin-dashboard.component.css":
/*!***************************************************************!*\
  !*** ./src/app/admin-dashboard/admin-dashboard.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#view-source {\r\n    position: fixed;\r\n    display: block;\r\n    right: 0;\r\n    bottom: 0;\r\n    margin-right: 40px;\r\n    margin-bottom: 40px;\r\n    z-index: 900;\r\n  }\r\n  .mdl-layout__content {\r\n    position: relative;\r\n    }\r\n  .create-btn{\r\n      width: 100%;\r\n\r\n    }\r\n  .add-selects-btn{\r\n      right: 0;\r\n    }\r\n  #dropdownfields{\r\n      width: 80%;\r\n    }"

/***/ }),

/***/ "./src/app/admin-dashboard/admin-dashboard.component.html":
/*!****************************************************************!*\
  !*** ./src/app/admin-dashboard/admin-dashboard.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Add to homescreen for Chrome on Android -->\n<meta name=\"mobile-web-app-capable\" content=\"yes\">\n<link rel=\"icon\" sizes=\"192x192\" href=\"images/android-desktop.png\">\n\n\n<link rel=\"apple-touch-icon-precomposed\" href=\"images/ios-desktop.png\">\n\n<!-- Tile icon for Win8 (144x144 + tile color) -->\n<meta name=\"msapplication-TileImage\" content=\"images/touch/ms-touch-icon-144x144-precomposed.png\">\n<meta name=\"msapplication-TileColor\" content=\"#3372DF\">\n\n<link rel=\"shortcut icon\" href=\"images/favicon.png\">\n\n\n<div class=\"demo-layout mdl-layout mdl-js-layout mdl-layout--fixed-drawer mdl-layout--fixed-header\">\n  <header class=\"demo-header mdl-layout__header mdl-color--grey-100 mdl-color-text--grey-600\">\n    <div class=\"mdl-layout__header-row\">\n      <span class=\"mdl-layout-title\">Forms </span>\n      <div class=\"mdl-layout-spacer\"> - from another world</div>\n      <div class=\"mdl-textfield mdl-js-textfield mdl-textfield--expandable\">\n        <label class=\"mdl-button mdl-js-button mdl-button--icon\" for=\"search\">\n          <i class=\"material-icons\">search</i>\n        </label>\n        <div class=\"mdl-textfield__expandable-holder\">\n          <input class=\"mdl-textfield__input\" type=\"text\" id=\"search\">\n          <label class=\"mdl-textfield__label\" for=\"search\">Enter your query...</label>\n        </div>\n      </div>\n      <button class=\"mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--icon\" id=\"hdrbtn\">\n        <i class=\"material-icons\">more_vert</i>\n      </button>\n      <ul class=\"mdl-menu mdl-js-menu mdl-js-ripple-effect mdl-menu--bottom-right\" for=\"hdrbtn\">\n        <li class=\"mdl-menu__item\">About</li>\n        <li class=\"mdl-menu__item\">Contact</li>\n        <li class=\"mdl-menu__item\">Legal information</li>\n      </ul>\n    </div>\n  </header>\n  <div class=\"demo-drawer mdl-layout__drawer mdl-color--blue-grey-900 mdl-color-text--blue-grey-50\">\n    <header class=\"demo-drawer-header\">\n      <!-- <img src=\"images/user.png\" class=\"demo-avatar\"> -->\n      <div class=\"demo-avatar-dropdown\">\n        <span>hello@example.com</span>\n        <div class=\"mdl-layout-spacer\"></div>\n        <button id=\"accbtn\" class=\"mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--icon\">\n          <i class=\"material-icons\" role=\"presentation\">arrow_drop_down</i>\n          <span class=\"visuallyhidden\">Accounts</span>\n        </button>\n        <ul class=\"mdl-menu mdl-menu--bottom-left mdl-js-menu mdl-js-ripple-effect\" for=\"accbtn\">\n          <li class=\"mdl-menu__item\">hello@example.com</li>\n          <li class=\"mdl-menu__item\">info@example.com</li>\n          <li class=\"mdl-menu__item\"><i class=\"material-icons\">add</i>Add another account...</li>\n        </ul>\n      </div>\n    </header>\n    <nav class=\"demo-navigation mdl-navigation mdl-color--blue-grey-800\">\n      <a class=\"mdl-navigation__link\" href=\"\"><i class=\"mdl-color-text--blue-grey-400 material-icons\" role=\"presentation\">add\n          form</i>Home</a>\n\n      <div class=\"mdl-layout-spacer\"></div>\n      <a class=\"mdl-navigation__link\" href=\"\"><i class=\"mdl-color-text--blue-grey-400 material-icons\" role=\"presentation\">help_outline</i><span\n          class=\"visuallyhidden\">Help</span></a>\n    </nav>\n  </div>\n  <main class=\"mdl-layout__content mdl-color--grey-100\">\n    <div class=\"mdl-grid demo-content\">\n      <div class=\"demo-graphs mdl-shadow--2dp mdl-color--white mdl-cell mdl-cell--8-col\">\n        <app-form-builder #formBuilder></app-form-builder>\n      </div>\n\n      <div class=\"demo-cards mdl-cell mdl-cell--3-col mdl-cell--8-col-tablet mdl-grid mdl-grid--no-spacing\">\n        <div class=\"demo-updates mdl-card mdl-shadow--2dp mdl-cell mdl-cell--4-col mdl-cell--4-col-tablet mdl-cell--12-col-desktop\">\n          <div class=\"mdl-card mdl-shadow--1dp\">\n            <div class=\"mdl-card__title\">\n              <h2 for=\"demo-menu-lower-left\" class=\"mdl-card__title-text\">ADD ELEMENT</h2>\n            </div>\n            <div class=\"mdl-card__supporting-text\">\n              <div class=\"mdl-textfield mdl-js-textfield mdl-textfield--floating-label\">\n\n                <select (change)=\"focusTo('#sample3')\" #myType [(ngModel)]=\"type\" class=\"mdl-textfield__input\" id=\"typeInput\" name=\"octane\">\n                  <option></option>\n                  <option value=\"text\">text</option>\n                  <option value=\"email\">email</option>\n                  <option value=\"phone\">phone</option>\n                  <option value=\"checkbox\">checkbox</option>\n                  <option value=\"dropdown\">dropdown</option>\n                </select>\n                <label class=\"mdl-textfield__label\" for=\"typeInput\">Input</label>\n              </div>\n              <!-- dropdown-input -->\n\n              <!-- dropdown-input -->\n\n              <div class=\"mdl-textfield mdl-js-textfield mdl-textfield--floating-label\">\n                <input [(ngModel)]=\"name\" class=\"mdl-textfield__input\" type=\"text\" id=\"sample3\">\n                <label ngDefaultControl class=\"mdl-textfield__label\" for=\"sample3\">ADD NAME.</label>\n              </div>\n              <div class=\"mdl-js-textfield mdl-textfield\"><label class=\"mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect mdl-js-ripple-effect--ignore-events is-upgraded\" for=\"req--value\"><input type=\"checkbox\" [(ngModel)]=\"required\" id=\"req--value\" class=\"mdl-checkbox__input\"><span class=\"mdl-checkbox__label\">Required</span><span class=\"mdl-checkbox__focus-helper\"></span><span class=\"mdl-checkbox__box-outline\"><span class=\"mdl-checkbox__tick-outline\"></span></span><span class=\"mdl-checkbox__ripple-container mdl-js-ripple-effect mdl-ripple--center\" data-upgraded=\",MaterialRipple\"><span class=\"mdl-ripple\"></span></span></label></div>\n              <!-- fields for dropdowns -->\n              <div *ngIf=\"isDropdown\">\n                <div #dropDownInput class=\"mdl-textfield mdl-js-textfield mdl-textfield--floating-label\">\n                  <input [(ngModel)]=\"dropdown\" class=\"mdl-textfield__input\" type=\"text\" id=\"dropdownfields\">\n                  <button (click)=\"addItemToDropdown(dropdown)\" class=\"mdl-button mdl-js-button mdl-button--fab mdl-button--mini-fab add-selects-btn\">\n                    <i class=\"material-icons\">add</i>\n                  </button>\n                  <label ngDefaultControl class=\"mdl-textfield__label\" for=\"sample3\">ADD options.</label>\n                  <strong *ngIf=\"isDropdown\">Add options to select</strong>\n\n                </div>\n              \n                <p *ngFor=\"let option of dropdownFields; let i = index\">\n                  {{i+1}}){{option.name}}\n                </p>\n                <!-- Mini FAB button -->\n              </div>\n              <!-- fields for dropdowns -->\n              <form style=\"display: none\" #imageForm=ngForm>\n                <input #imageBtn type=\"file\" (change)=\"handleFileInput($event.target.files)\" #Image accept=\"image/*\">\n              </form>\n            </div>\n            <div class=\"mdl-card__actions mdl-card--border\">\n              <div id=\"tmpHolder\">\n\n              </div>\n\n              <a (click)=\"addMyElement()\"  class=\"mdl-button mdl-js-button mdl-button--raised mdl-button--colored create-btn\">\n                Create\n              </a>\n              <br>\n\n            </div>\n            <H1></H1>\n            <H1></H1>\n            <div class=\"mdl-card__menu\">\n              <button class=\"mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect\">\n                <i class=\"material-icons\">build</i>\n              </button>\n            </div>\n          </div>\n        </div>\n        <div class=\"demo-separator mdl-cell--1-col\"></div>\n\n      </div>\n    </div>\n  </main>\n</div>"

/***/ }),

/***/ "./src/app/admin-dashboard/admin-dashboard.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/admin-dashboard/admin-dashboard.component.ts ***!
  \**************************************************************/
/*! exports provided: AdminDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminDashboardComponent", function() { return AdminDashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _form_builder_form_builder_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../form-builder/form-builder.component */ "./src/app/form-builder/form-builder.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AdminDashboardComponent = /** @class */ (function () {
    function AdminDashboardComponent(elementRef) {
        this.elementRef = elementRef;
        this.imgUrl = "https://getmdl.io/assets/demos/welcome_card.jpg";
        this.customInput = function (id, name, type, required) {
            this.ID = id;
            this.name = name;
            this.type = type;
            this.required = required;
        };
        this.dropdownFields = [];
    }
    AdminDashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        debugger;
        this.eventFire(this.myType.nativeElement, 'click');
        document.addEventListener('keyup', function (ev) {
            _this.onPressEnter(ev);
            return false;
        });
        this.formBuilder.imageUrl = this.imgUrl;
        this.myType.nativeElement.addEventListener('click', this.onClick.bind(this));
        var imageClick = document.querySelector('#upload-img-btn');
        if (imageClick !== null) {
            imageClick.addEventListener('click', function () {
                _this.imageBtn.nativeElement.click();
            });
        }
    };
    AdminDashboardComponent.prototype.eventFire = function (el, etype) {
        if (el.fireEvent) {
            el.fireEvent('on' + etype);
        }
        else {
            var evObj = document.createEvent('Events');
            evObj.initEvent(etype, true, false);
            el.dispatchEvent(evObj);
        }
    };
    AdminDashboardComponent.prototype.handleFileInput = function (file) {
        var _this = this;
        this.fileToUpload = file.item(0);
        var reader = new FileReader();
        reader.onload = function (event) {
            _this.imgUrl = event.target.result;
            _this.formBuilder.imageUrl = _this.imgUrl;
        };
        reader.readAsDataURL(this.fileToUpload);
    };
    AdminDashboardComponent.prototype.onPressEnter = function (ev) {
        if (ev.keyCode === 13) {
            this.addMyElement();
        }
    };
    AdminDashboardComponent.prototype.onClick = function (event) {
        if (event.srcElement.value === "dropdown") {
            this.isDropdown = true;
            setTimeout(function () {
                componentHandler.upgradeDom();
            }, 300);
        }
        else {
            this.isDropdown = false;
            this.dropdownFields = [];
        }
    };
    AdminDashboardComponent.prototype.addItemToDropdown = function (val) {
        if (val.trim() || '') {
            var option = {
                name: val
            };
            this.dropdownFields.push(option);
            this.dropdown = "";
        }
    };
    AdminDashboardComponent.prototype.focusTo = function (query) {
        var el = document.querySelector(query);
        if (el !== null) {
            el.focus();
        }
    };
    AdminDashboardComponent.prototype.addParagraph = function (type) {
        var myElm = {
            id: 0,
            type: type,
            content: "",
            name: undefined
        };
        this.formBuilder.addElement(myElm).then(function (res) {
        }).catch();
    };
    AdminDashboardComponent.prototype.addMyElement = function () {
        if (this.name.length < 1) {
            return;
        }
        var myElm = new this.customInput(0, this.name, this.type, this.required);
        if (this.dropdownFields.length > 0)
            myElm.selects = this.dropdownFields;
        if (this.required === true) {
            myElm.name = "*" + this.name;
        }
        this.formBuilder.addElement(myElm).then(function (res) {
        }).catch();
        this.name = "";
        this.dropdownFields = [];
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('formBuilder'),
        __metadata("design:type", _form_builder_form_builder_component__WEBPACK_IMPORTED_MODULE_1__["FormBuilderComponent"])
    ], AdminDashboardComponent.prototype, "formBuilder", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("myType", { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], AdminDashboardComponent.prototype, "myType", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("imageBtn", { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], AdminDashboardComponent.prototype, "imageBtn", void 0);
    AdminDashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin-dashboard',
            template: __webpack_require__(/*! ./admin-dashboard.component.html */ "./src/app/admin-dashboard/admin-dashboard.component.html"),
            styles: [__webpack_require__(/*! ./admin-dashboard.component.css */ "./src/app/admin-dashboard/admin-dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], AdminDashboardComponent);
    return AdminDashboardComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var _admin_dashboard_admin_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./admin-dashboard/admin-dashboard.component */ "./src/app/admin-dashboard/admin-dashboard.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: 'home', component: _admin_dashboard_admin_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["AdminDashboardComponent"] },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes),
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
            providers: [{ provide: _angular_common__WEBPACK_IMPORTED_MODULE_1__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_1__["HashLocationStrategy"] }],
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var ng2_dragula__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-dragula */ "./node_modules/ng2-dragula/index.js");
/* harmony import */ var ng2_dragula__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ng2_dragula__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _form_builder_form_builder_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./form-builder/form-builder.component */ "./src/app/form-builder/form-builder.component.ts");
/* harmony import */ var _admin_dashboard_admin_dashboard_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./admin-dashboard/admin-dashboard.component */ "./src/app/admin-dashboard/admin-dashboard.component.ts");
/* harmony import */ var _text_text_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./text/text.component */ "./src/app/text/text.component.ts");
/* harmony import */ var _addirective_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./addirective.directive */ "./src/app/addirective.directive.ts");
/* harmony import */ var _data_service_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./data-service.service */ "./src/app/data-service.service.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! .//app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm5/select.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












// materials



var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _form_builder_form_builder_component__WEBPACK_IMPORTED_MODULE_6__["FormBuilderComponent"],
                _admin_dashboard_admin_dashboard_component__WEBPACK_IMPORTED_MODULE_7__["AdminDashboardComponent"],
                _text_text_component__WEBPACK_IMPORTED_MODULE_8__["TextComponent"],
                _addirective_directive__WEBPACK_IMPORTED_MODULE_9__["AddirectiveDirective"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                ng2_dragula__WEBPACK_IMPORTED_MODULE_2__["DragulaModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_11__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["BrowserAnimationsModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_13__["MatSelectModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_14__["MatButtonModule"]
            ],
            providers: [_data_service_service__WEBPACK_IMPORTED_MODULE_10__["DataServiceService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/data-service.service.ts":
/*!*****************************************!*\
  !*** ./src/app/data-service.service.ts ***!
  \*****************************************/
/*! exports provided: DataServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataServiceService", function() { return DataServiceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/esm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DataServiceService = /** @class */ (function () {
    function DataServiceService(http) {
        this.http = http;
    }
    DataServiceService.prototype.postFrm = function (configUrl) {
        return this.http.get(configUrl);
    };
    DataServiceService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], DataServiceService);
    return DataServiceService;
}());



/***/ }),

/***/ "./src/app/form-builder/checkbox.ts":
/*!******************************************!*\
  !*** ./src/app/form-builder/checkbox.ts ***!
  \******************************************/
/*! exports provided: checkbox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkbox", function() { return checkbox; });
function checkbox(element) {
    var id = element.ID;
    var wrapper = document.createElement('div');
    wrapper.classList.add("mdl-js-textfield");
    wrapper.classList.add("mdl-textfield");
    var text = document.createElement('input');
    text.type = element.type;
    text.id = id;
    text.classList.add('mdl-checkbox__input');
    var label = document.createElement('label');
    label.classList.add("mdl-checkbox");
    label.classList.add("mdl-js-checkbox");
    label.classList.add("mdl-js-ripple-effect");
    label.setAttribute("for", id);
    var span = document.createElement('span');
    span.className = "mdl-checkbox__label";
    span.innerText = element.name;
    label.appendChild(text);
    label.appendChild(span);
    wrapper.appendChild(label);
    var content = document.getElementById("content");
    content.appendChild(wrapper);
}


/***/ }),

/***/ "./src/app/form-builder/email-input.ts":
/*!*********************************************!*\
  !*** ./src/app/form-builder/email-input.ts ***!
  \*********************************************/
/*! exports provided: addEmailField */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addEmailField", function() { return addEmailField; });
function addEmailField(element) {
    var id = element.ID; // get the id
    //ceate span
    var span = document.createElement('span');
    span.innerText = "invalid mail!";
    span.className = "mdl-textfield__error";
    //create label
    var label = document.createElement('label');
    label.className = "mdl-textfield__label";
    label.setAttribute("for", id);
    label.innerText = element.name;
    //create input
    var text = document.createElement('input');
    text.type = element.type;
    text.id = id;
    text.className = "mdl-textfield__input my--input--app";
    //create wrapper - div
    var wrapper = document.createElement('div');
    wrapper.classList.add("mdl-js-textfield");
    wrapper.classList.add("mdl-textfield");
    //appends
    wrapper.appendChild(text);
    wrapper.appendChild(label);
    wrapper.appendChild(span);
    //get the parent element....
    var content = document.getElementById("content");
    content.appendChild(wrapper);
}


/***/ }),

/***/ "./src/app/form-builder/form-builder.component.css":
/*!*********************************************************!*\
  !*** ./src/app/form-builder/form-builder.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".demo-card-wide.mdl-card {\r\n    width: 400px;\r\n    resize: both;\r\n  }\r\n  .demo-card-wide > .mdl-card__title {\r\n    color: #fff;\r\n    height: 176px;\r\n    /* background: url('https://getmdl.io/assets/demos/welcome_card.jpg') center / cover; */\r\n  }\r\n  .demo-card-wide > .mdl-card__menu {\r\n    color: #fff;\r\n   }\r\n  /* .sndBtn{\r\n    width: 100% !important;\r\n  }  */\r\n  #data-received--app{\r\n    background: white;\r\n    border: none;\r\n    resize: none;\r\n    height: auto;\r\n  }\r\n  textarea.mirror{\r\n    float: left;\r\n    width: 20%;\r\n    background: #263238;\r\n    resize: none;\r\n    color: white;\r\n    height: 80%;\r\n    position: absolute;\r\n    z-index: 999;\r\n    left: 0;\r\n    top: 70px;\r\n  }\r\n  .mdl-dialog {\r\n    border: none;\r\n    box-shadow: 0 9px 46px 8px rgba(0,0,0,.14), 0 11px 15px -7px rgba(0,0,0,.12), 0 24px 38px 3px rgba(0,0,0,.2);\r\n    width: 500px;\r\n}\r\n  .custom-form{\r\nmargin: auto;\r\n}\r\n  #vertical{\r\n  background: #585b6f;\r\n  position: relative;\r\n  width: 150px;\r\n  z-index: 99999;\r\n  display: block;\r\n  float: right;\r\npadding: 3px;\r\nmargin: 20px;\r\n}\r\n  .obj--btn{\r\nbackground: #1b1b1b !important;\r\n}\r\n  .obj--btn-close{\r\n  background: #962121 !important;\r\n}\r\n  .noselect,.mdl-button {\r\n  -webkit-touch-callout: none; /* iOS Safari */\r\n    -webkit-user-select: none; /* Safari */ /* Konqueror HTML */\r\n       -moz-user-select: none; /* Firefox */\r\n        -ms-user-select: none; /* Internet Explorer/Edge */\r\n            user-select: none; /* Non-prefixed version, currently\r\n                                  supported by Chrome and Opera */\r\n}"

/***/ }),

/***/ "./src/app/form-builder/form-builder.component.html":
/*!**********************************************************!*\
  !*** ./src/app/form-builder/form-builder.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n  <div id=\"myForm\" class=\"mdl-grid\">\n    <a *ngIf=\"!showCode\"  (click)=\"showCode = !showCode\" class=\"mdl-button mdl-js-button mdl-button--raised obj--btn mdl-button--colored \">\n      <i class=\"material-icons\">code</i>\n    </a>\n    <a *ngIf=\"showCode\"  (click)=\"showCode = !showCode\" class=\"mdl-button mdl-js-button mdl-button--raised mdl-button--colored obj--btn-close\">\n      <i class=\"material-icons\">close</i>\n    </a>\n    <textarea class=\"mirror\" *ngIf=\"showCode\" disabled cols=\"30\" rows=\"10\">\n     myForm = {{fields | json}}\n    </textarea>\n<!-- <div [dragula]='\"second-bag\"' id=\"myPage\"> -->\n    <div id=\"my-sexy--form\"class=\"demo-card-wide mdl-card mdl-shadow--2dp mdl-cell mdl-cell--4-col custom-form\">\n      <img height=\"200\" width=\"auto\" [src]=\"imageUrl\">\n\n      <div class=\"mdl-card__supporting-text\">\n     <div  [dragula]='\"first-bag\"' [dragulaModel]='fields' id=\"content\">\n\n     </div>\n      </div>\n      <div class=\"mdl-card__actions mdl-card--border\">\n        <a id=\"send\" [ngStyle]=\"btnStyle\" (click)=\"SendFrm()\" class=\"sndBtn mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect\">\n          Send\n        </a>\n\n      </div>\n      <div class=\"mdl-card__menu\">\n\n        <button id=\"upload-img-btn\" class=\"mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect\">\n          <i class=\"material-icons\">image</i>\n\n        </button>\n      </div>\n\n    </div>\n\n  <!-- </div> -->\n  </div>\n  <div class=\"mdl-button mdl-js-button mdl-button--raised mdl-button--colored\" *ngIf=\"x !==''\" id=\"vertical\">h:{{x}},w:{{y}}</div>\n<hr>\n<!-- <h4 *ngIf=\"dataToTable.length>0\" class=\"center--text\">Data received</h4>\n<textarea disabled id=\"data-received--app\" cols=\"30\" rows=\"5\">\n  dataReceived = {{this.dataToTable | json}}\n</textarea> -->\n  <dialog class=\"mdl-dialog\">\n    <h4 class=\"mdl-dialog__title\">Data was sent successfully</h4>\n    <div class=\"mdl-dialog__content\">\n      <p id=\"data-to-send\">\n      </p>\n    </div>\n    <div class=\"mdl-dialog__actions\">\n      <button type=\"button\" class=\"mdl-button mdl-js-button mdl-button--raised mdl-button--colored close\">OK</button>\n    </div>\n  </dialog>\n  <div id=\"tableHolder\"></div>\n\n\n"

/***/ }),

/***/ "./src/app/form-builder/form-builder.component.ts":
/*!********************************************************!*\
  !*** ./src/app/form-builder/form-builder.component.ts ***!
  \********************************************************/
/*! exports provided: FormBuilderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormBuilderComponent", function() { return FormBuilderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _guid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../guid */ "./src/app/guid.ts");
/* harmony import */ var ng2_dragula__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-dragula */ "./node_modules/ng2-dragula/index.js");
/* harmony import */ var ng2_dragula__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ng2_dragula__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _text_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./text-input */ "./src/app/form-builder/text-input.ts");
/* harmony import */ var _checkbox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./checkbox */ "./src/app/form-builder/checkbox.ts");
/* harmony import */ var _select_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./select-input */ "./src/app/form-builder/select-input.ts");
/* harmony import */ var _email_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./email-input */ "./src/app/form-builder/email-input.ts");
/* harmony import */ var _phone_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./phone-input */ "./src/app/form-builder/phone-input.ts");
/* harmony import */ var _paragraph__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./paragraph */ "./src/app/form-builder/paragraph.ts");
/* harmony import */ var _title__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./title */ "./src/app/form-builder/title.ts");
/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./form */ "./src/app/form-builder/form.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};











// var _= function(query){
//   try {
//     if (query.includes('#'))
//         return document.querySelector(query);
//     return document.querySelectorAll(query);
// } catch (error) {
//     console.log(error);
// }
// }
var counter = 0;
var FormBuilderComponent = /** @class */ (function () {
    function FormBuilderComponent(hostElement, dragulaService) {
        //   dragulaService.drag.subscribe((value) => {
        //     console.log(`drag: ${value[0]}`);
        //     this.onDrag(value.slice(1));
        //   });
        //   dragulaService.drop.subscribe((value) => {
        //     console.log(`drop: ${value[0]}`);
        //     this.onDrop(value.slice(1));
        //   });
        //   dragulaService.over.subscribe((value) => {
        //     console.log(`over: ${value[0]}`);
        //     this.onOver(value.slice(1));
        //   });
        //   dragulaService.out.subscribe((value) => {
        //     console.log(`out: ${value[0]}`);
        //     this.onOut(value.slice(1));
        //   });
        this.hostElement = hostElement;
        this.dragulaService = dragulaService;
        this.showCode = false;
        this.fields = [];
        this.dataToTable = [];
        this.btnStyle = {
            "color": "white",
            "background-color": "grey",
            "width": "92%"
        };
        this.baseUrl = "http://localhost:4200/api/forms?";
        // }
        // private onDrag(args) {
        //   let [e, el] = args;
        //   console.log(`onDrag: ${args[0]}`);
        //   console.log(args[0]);
        // }
        // private onDrop(args) {
        //   let [e, el] = args;
        //   console.log(`onDrop: ${args[0]}`);
        //   console.log(args[0]);
        // }
        // private onOver(args) {
        //   let [e, el, container] = args;
        //   console.log(`onOver: ${args[0]}`);
        //   console.log(args[0]);
        // }
        // private onOut(args) {
        //   let [e, el, container] = args;
        //   console.log(`onOut: ${args[1]}`);
        //   console.log([e, el, container]);
    }
    FormBuilderComponent.prototype.ngDoCheck = function () {
        var form = document.querySelector('#my-sexy--form');
        this.x = form.style.height;
        this.y = form.style.width;
    };
    FormBuilderComponent.prototype.ngOnInit = function () {
        var dialog = document.querySelector('dialog');
        document.querySelector('.close').addEventListener('click', function () {
            dialog.close();
        });
        var form = document.querySelector('#my-sexy--form');
        this.x = form.style.height;
        this.y = form.style.width;
    };
    FormBuilderComponent.prototype.addElement = function (element) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (element.name === '') {
                    return [2 /*return*/];
                }
                if (element.type === undefined) {
                    element.type = this.mdlInput;
                    element.name = this.editInput;
                    alert("element is undifiend");
                }
                element.ID = Object(_guid__WEBPACK_IMPORTED_MODULE_1__["guid"])();
                this.fields.push(element);
                this.switchCase(element);
                return [2 /*return*/];
            });
        });
    };
    FormBuilderComponent.prototype.BuildForm = function () {
        var _this = this;
        this.fields.forEach(function (element) {
            _this.switchCase(element);
        });
    };
    FormBuilderComponent.prototype.switchCase = function (element) {
        switch (element.type) {
            case "text": {
                Object(_text_input__WEBPACK_IMPORTED_MODULE_3__["text"])(element);
                break;
            }
            case "checkbox": {
                Object(_checkbox__WEBPACK_IMPORTED_MODULE_4__["checkbox"])(element);
                break;
            }
            case "dropdown": {
                Object(_select_input__WEBPACK_IMPORTED_MODULE_5__["addSelectField"])(element);
                break;
            }
            case "email": {
                Object(_email_input__WEBPACK_IMPORTED_MODULE_6__["addEmailField"])(element);
                break;
            }
            case "phone": {
                Object(_phone_input__WEBPACK_IMPORTED_MODULE_7__["addPhoneField"])(element);
                break;
            }
            case "paragraph": {
                Object(_paragraph__WEBPACK_IMPORTED_MODULE_8__["addParagraph"])(element);
                break;
            }
            case "title": {
                Object(_title__WEBPACK_IMPORTED_MODULE_9__["addTitle"])(element);
                break;
            }
            case "form": {
                Object(_form__WEBPACK_IMPORTED_MODULE_10__["addForm"])(element);
                break;
            }
        }
        componentHandler.upgradeDom();
    };
    FormBuilderComponent.prototype.exportFrm = function () {
        var form = document.querySelector("myForm");
        var exportdiv = document.querySelector("styleNscript");
        var css = document.createElement('link');
        css.rel = 'stylesheet';
        css.href = 'https://code.getmdl.io/1.3.0/material.indigo-pink.min.css';
        var script = document.createElement('script');
        script.src = "https://code.getmdl.io/1.3.0/material.min.js";
        exportdiv.appendChild(form);
        exportdiv.appendChild(script);
        exportdiv.appendChild(css);
        componentHandler.upgradeDom();
    };
    FormBuilderComponent.prototype.getOffset = function (el) {
        var _x = 0;
        var _y = 0;
        while (el && !isNaN(el.offsetLeft) && !isNaN(el.offsetTop)) {
            _x += el.offsetLeft - el.scrollLeft;
            _y += el.offsetTop - el.scrollTop;
            el = el.offsetParent;
        }
        return { top: _y, left: _x };
    };
    FormBuilderComponent.prototype.SendFrm = function () {
        var modal = document.querySelector('dialog');
        var dialog = document.querySelector('#data-to-send');
        if (this.fields.length === 0) {
            dialog.innerText = "Nothing to send...";
            modal.showModal();
            return;
        }
        var params = '';
        var dataNum = Object(_guid__WEBPACK_IMPORTED_MODULE_1__["guid"])();
        var _loop_1 = function (key) {
            if (this_1.fields.hasOwnProperty(key)) {
                var element_1 = this_1.fields[key];
                var val_1 = document.getElementById(element_1.ID);
                if (element_1.required === true && val_1.value === '') {
                    val_1.style.background = '#e6000052';
                    setTimeout(function () {
                        val_1.style.background = null;
                    }, 1000);
                    return { value: false };
                }
                if (val_1 !== null) {
                    switch (element_1.type) {
                        case 'checkbox':
                            params += element_1.ID + '=' + val_1.checked;
                            element_1.value = val_1.checked;
                            element_1.dataNumber = dataNum;
                            this_1.dataToTable.push(Object.assign({}, element_1));
                            break;
                        default:
                            params += element_1.ID + '=' + val_1.value;
                            element_1.value = val_1.value;
                            element_1.dataNumber = dataNum;
                            this_1.dataToTable.push(Object.assign({}, element_1));
                            break;
                    }
                    params += "&";
                }
            }
        };
        var this_1 = this;
        for (var key in this.fields) {
            var state_1 = _loop_1(key);
            if (typeof state_1 === "object")
                return state_1.value;
        }
        this.baseUrl += params.substring(0, params.length - 1);
        dialog.innerText = this.baseUrl;
        modal.showModal();
        this.baseUrl = "http://localhost:4200/api/forms?";
        // this.createTable();
    };
    FormBuilderComponent.prototype.stripHtmlComments = function (html) {
        if (typeof html !== 'string') {
            throw new TypeError('strip-html-comments expected a string');
        }
        return html.replace(/<!--[\s\S]*?(?:-->)/g, '');
    };
    FormBuilderComponent.prototype.stripJsComments = function (html) {
        if (typeof html !== 'string') {
            throw new TypeError('strip-html-comments expected a string');
        }
        return html.replace(/[\s\S]*?(?:-->)/g, '');
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], FormBuilderComponent.prototype, "newInput", void 0);
    FormBuilderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-form-builder',
            template: __webpack_require__(/*! ./form-builder.component.html */ "./src/app/form-builder/form-builder.component.html"),
            styles: [__webpack_require__(/*! ./form-builder.component.css */ "./src/app/form-builder/form-builder.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], ng2_dragula__WEBPACK_IMPORTED_MODULE_2__["DragulaService"]])
    ], FormBuilderComponent);
    return FormBuilderComponent;
}());

// String.prototype.replaceAll = function(search, replacement) {
//   var target = this;
//   return target.replace(new RegExp(search, 'g'), replacement);
// }; 


/***/ }),

/***/ "./src/app/form-builder/form.ts":
/*!**************************************!*\
  !*** ./src/app/form-builder/form.ts ***!
  \**************************************/
/*! exports provided: addForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addForm", function() { return addForm; });
function addForm(element) {
    var myForm = "<div class=\"demo-card-wide mdl-card mdl-shadow--2dp mdl-cell mdl-cell--4-co\">\n <img height=\"200\" [src]=\"imageUrl\">\n\n <div class=\"mdl-card__supporting-text\">      \n<div  [dragula]='\"first-bag\"' [dragulaModel]='fields' id=\"content\">\n\n</div>\n </div>\n <div class=\"mdl-card__actions mdl-card--border\">      \n   <a id=\"send\" [ngStyle]=\"btnStyle\" (click)=\"SendFrm()\" class=\"sndBtn mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect\">\n     Send\n   </a>\n </div>\n <div class=\"mdl-card__menu\">\n   <button class=\"mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect\">\n     <i class=\"material-icons\">share</i>\n   </button>\n </div>\n</div> \n<style>.demo-card-wide.mdl-card {\n    width: 400px;\n  }\n  .demo-card-wide > .mdl-card__title {\n    color: #fff;\n    height: 176px;\n    /* background: url('https://getmdl.io/assets/demos/welcome_card.jpg') center / cover; */\n  }\n  .demo-card-wide > .mdl-card__menu {\n    color: #fff;\n   }\n   /* .sndBtn{\n    width: 100% !important;\n  }  */</style>";
    var content = document.getElementById("myForm");
    content.innerHTML = (myForm);
}


/***/ }),

/***/ "./src/app/form-builder/paragraph.ts":
/*!*******************************************!*\
  !*** ./src/app/form-builder/paragraph.ts ***!
  \*******************************************/
/*! exports provided: addParagraph */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addParagraph", function() { return addParagraph; });
function addParagraph(element) {
    var id = element.ID;
    var paragraph = document.createElement('h6');
    paragraph.id = id;
    paragraph.textContent = "write something...";
    paragraph.setAttribute("contenteditable", "true");
    var wrapper = document.createElement('div');
    // wrapper.classList.add("mdl-js-textfield");
    // wrapper.classList.add("mdl-textfield")
    wrapper.appendChild(paragraph);
    var content = document.getElementById("myPage");
    content.appendChild(wrapper);
}


/***/ }),

/***/ "./src/app/form-builder/phone-input.ts":
/*!*********************************************!*\
  !*** ./src/app/form-builder/phone-input.ts ***!
  \*********************************************/
/*! exports provided: addPhoneField */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addPhoneField", function() { return addPhoneField; });
function addPhoneField(element) {
    debugger;
    var id = element.ID;
    var span = document.createElement('span');
    span.innerText = "invalid phone!";
    span.className = "mdl-textfield__error";
    var label = document.createElement('label');
    label.className = "mdl-textfield__label";
    label.setAttribute("for", id);
    label.innerText = element.name;
    var text = document.createElement('input');
    text.setAttribute("pattern", "[0-9]*");
    text.type = element.type;
    text.id = id;
    text.className = "mdl-textfield__input my--input--app";
    var wrapper = document.createElement('div');
    wrapper.classList.add("mdl-js-textfield");
    wrapper.classList.add("mdl-textfield");
    wrapper.appendChild(text);
    wrapper.appendChild(label);
    wrapper.appendChild(span);
    var content = document.getElementById("content");
    content.appendChild(wrapper);
}


/***/ }),

/***/ "./src/app/form-builder/select-input.ts":
/*!**********************************************!*\
  !*** ./src/app/form-builder/select-input.ts ***!
  \**********************************************/
/*! exports provided: addSelectField */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addSelectField", function() { return addSelectField; });
function addSelectField(element) {
    var id = element.ID;
    var wrapper = document.createElement('div');
    // classes
    wrapper.classList.add("my--input--app");
    wrapper.classList.add("mdl-textfield");
    wrapper.classList.add("mdl-js-textfield");
    wrapper.classList.add('mdl-textfield--floating-label');
    var select = document.createElement('select');
    select.setAttribute('type', 'text');
    select.classList.add('mdl-textfield__input');
    select.classList.add("my--input--app");
    select.id = id;
    var label = document.createElement('label');
    label.classList.add('mdl-textfield__label');
    label.setAttribute('for', id);
    label.innerText = element.name;
    //option
    for (var _i = 0, _a = element.selects; _i < _a.length; _i++) {
        var item = _a[_i];
        var option = document.createElement('option');
        option.setAttribute('value', item['name']);
        option.innerText = item['name'];
        select.appendChild(option);
    }
    wrapper.appendChild(select);
    wrapper.appendChild(label);
    var content = document.getElementById("content");
    content.appendChild(wrapper);
}


/***/ }),

/***/ "./src/app/form-builder/text-input.ts":
/*!********************************************!*\
  !*** ./src/app/form-builder/text-input.ts ***!
  \********************************************/
/*! exports provided: text */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "text", function() { return text; });
function text(element) {
    var id = element.ID;
    var label = document.createElement('label');
    label.className = "mdl-textfield__label";
    label.setAttribute("for", id);
    label.innerText = element.name;
    var text = document.createElement('input');
    text.type = element.type;
    text.id = id;
    text.className = "mdl-textfield__input my--input--app";
    var wrapper = document.createElement('div');
    wrapper.classList.add("mdl-js-textfield");
    wrapper.classList.add("mdl-textfield");
    wrapper.appendChild(text);
    wrapper.appendChild(label);
    var content = document.getElementById("content");
    content.appendChild(wrapper);
}


/***/ }),

/***/ "./src/app/form-builder/title.ts":
/*!***************************************!*\
  !*** ./src/app/form-builder/title.ts ***!
  \***************************************/
/*! exports provided: addTitle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addTitle", function() { return addTitle; });
function addTitle(element) {
    var id = element.ID;
    var paragraph = document.createElement('h1');
    paragraph.id = id;
    paragraph.textContent = "write Title...";
    paragraph.setAttribute("contenteditable", "true");
    var wrapper = document.createElement('div');
    // wrapper.classList.add("mdl-js-textfield");
    // wrapper.classList.add("mdl-textfield")
    wrapper.appendChild(paragraph);
    var content = document.getElementById("myPage");
    content.appendChild(wrapper);
}


/***/ }),

/***/ "./src/app/guid.ts":
/*!*************************!*\
  !*** ./src/app/guid.ts ***!
  \*************************/
/*! exports provided: guid */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "guid", function() { return guid; });
function guid() {
    function s4() {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    }
    return s4();
}


/***/ }),

/***/ "./src/app/text/text.component.css":
/*!*****************************************!*\
  !*** ./src/app/text/text.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/text/text.component.html":
/*!******************************************!*\
  !*** ./src/app/text/text.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  text works!\n</p>\n"

/***/ }),

/***/ "./src/app/text/text.component.ts":
/*!****************************************!*\
  !*** ./src/app/text/text.component.ts ***!
  \****************************************/
/*! exports provided: TextComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextComponent", function() { return TextComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TextComponent = /** @class */ (function () {
    function TextComponent() {
    }
    TextComponent.prototype.ngOnInit = function () {
    };
    TextComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-text',
            template: __webpack_require__(/*! ./text.component.html */ "./src/app/text/text.component.html"),
            styles: [__webpack_require__(/*! ./text.component.css */ "./src/app/text/text.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TextComponent);
    return TextComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_4__);





if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Adi\repo\FormCreator\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map