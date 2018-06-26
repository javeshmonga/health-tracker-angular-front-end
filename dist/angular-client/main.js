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

/***/ "./src/app/about-us/about-us.component.css":
/*!*************************************************!*\
  !*** ./src/app/about-us/about-us.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header {\r\n  background-color: black;\r\n}\r\n\r\n.footer {\r\n  background-color: black;\r\n}\r\n\r\na{\r\n  color: white;\r\n}\r\n\r\ni{\r\n  color: white;\r\n}\r\n\r\nlabel{\r\n  color: white;\r\n}\r\n\r\nbody{\r\n  background-image: url(\"http://www.baltana.com/files/wallpapers-5/Health-Quotes-HD-Wallpapers-16018.jpg\");\r\n}\r\n"

/***/ }),

/***/ "./src/app/about-us/about-us.component.html":
/*!**************************************************!*\
  !*** ./src/app/about-us/about-us.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"modal-header header\">\n\n  <nav class=\"navbar-dark na\">\n    <a routerLink=\"home\" class=\"btn btn-link nav-item\">Home</a>\n    <a routerLink=\"/login\" *ngIf=\"user.username == ''\" class=\"btn btn-link nav-item\">Login</a>\n    <a *ngIf=\"user.username == ''\" routerLink=\"/register\" class=\"btn btn-link nav-item\">Register</a>\n    <a *ngIf=\"user.username != ''\" routerLink=\"/profile\" class=\"btn btn-link nav-item\">Profile</a>\n    <a *ngIf=\"user.userType == 'Trainer' || user.userType == 'Admin'\" routerLink=\"/schedules\" class=\"btn btn-link nav-item\">Schedules</a>\n    <a *ngIf=\"user.userType == 'Member'\" routerLink=\"/schedule/{{user.schedule.id}}\" class=\"btn btn-link nav-item\">My Schedule</a>\n    <a href=\"#\" *ngIf=\"user.userType == 'Admin'\" routerLink=\"/admin\" class=\"btn btn-link nav-item\">Users</a>\n    <a routerLink=\"/contact_us\" class=\"btn btn-link nav-item\">Contact Us</a>\n  </nav>\n\n  <label *ngIf=\"user.username != ''\" class=\"align-content-center\">Hi {{user.firstName}}</label>\n\n  <nav class=\"float-right\">\n    <a *ngIf=\"user.username != ''\" class=\"nav-item btn btn-link\" (click)=\"logout()\" routerLink=\"/login\">Logout</a>\n  </nav>\n</header>\n\n<div class=\"container\">\n  <h2 style=\"font-family: 'Cambria'\">Welcome to Health Buddy</h2>\n  <p class=\"col-4\" style=\"font-family: 'Cambria'\" >Good nutrition is the key to good mental and physical health. Eating a balanced diet is an important part of good health for everyone. The kind and amount of food you eat affects the way you feel and how your body works.</p>\n  <p class=\"col-4\" style=\"font-family: 'Cambria'\"> We at Health buddy provide a platform for bringing together health and lifestyle preachers with the ones who seek their help in achieving their health goals. It is easy to use and anyone can sign up and enjoy the benefits of a healthy social network.</p>\n  <p class=\"col-4\" style=\"font-family: 'Cambria'\">Register today and add any health requirements you might have to your profile, one of our trainers will respond by creating a descriptive schedule of certain days for you that will enable you to live a healthy lifestyle.</p>\n  <p class=\"col-4\" style=\"font-family: 'Cambria'\">Our schedule will tell you about eating right and exercising regularly, if anytime you feel you need a change in your schedule and it is not working right for you, just update your requirements and a trainer will look into it and will update your schedule. Also, registered users get access to our Nutrition Teller App, which can be found in your schedule page. The Nutrition Teller App can be used to search for any food item of which you wish to know the nutrition of, The App will suggest possible food items as your search result and clicking on any one of them will tell you the nutrition that is present in that food item. You can use this when trying to achieve the nutrition goal recommended by our instructors in your schedule.</p>\n  <p class=\"col-4\" style=\"font-family: 'Cambria'\">Get Ready to Live Healthy :)</p>\n</div>\n"

/***/ }),

/***/ "./src/app/about-us/about-us.component.ts":
/*!************************************************!*\
  !*** ./src/app/about-us/about-us.component.ts ***!
  \************************************************/
/*! exports provided: AboutUsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutUsComponent", function() { return AboutUsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_schedule_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/schedule.service */ "./src/app/services/schedule.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AboutUsComponent = /** @class */ (function () {
    function AboutUsComponent(scheduleService, service, router) {
        this.scheduleService = scheduleService;
        this.service = service;
        this.router = router;
        this.user = {
            username: '',
            password: '',
            userType: '',
            firstName: '',
            lastName: '',
            email: '',
            schedule: {
                id: ''
            }
        };
    }
    AboutUsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service
            .profile()
            .then(function (user) {
            return _this.user = user;
        });
    };
    AboutUsComponent.prototype.logout = function () {
        var _this = this;
        this.service
            .logout()
            .then(function () {
            return _this.router.navigate(['login']);
        });
    };
    AboutUsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about-us',
            template: __webpack_require__(/*! ./about-us.component.html */ "./src/app/about-us/about-us.component.html"),
            styles: [__webpack_require__(/*! ./about-us.component.css */ "./src/app/about-us/about-us.component.css")]
        }),
        __metadata("design:paramtypes", [_services_schedule_service__WEBPACK_IMPORTED_MODULE_3__["ScheduleServiceClient"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserServiceClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AboutUsComponent);
    return AboutUsComponent;
}());



/***/ }),

/***/ "./src/app/admin-page/admin-page.component.css":
/*!*****************************************************!*\
  !*** ./src/app/admin-page/admin-page.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header {\r\n  background-color: black;\r\n}\r\n\r\n.footer {\r\n  background-color: black;\r\n}\r\n\r\na{\r\n  color: white;\r\n}\r\n\r\ni{\r\n  color: white;\r\n}\r\n\r\nlabel{\r\n  color: white;\r\n}\r\n"

/***/ }),

/***/ "./src/app/admin-page/admin-page.component.html":
/*!******************************************************!*\
  !*** ./src/app/admin-page/admin-page.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <header class=\"modal-header header\">\r\n\r\n    <nav class=\"navbar-dark na\">\r\n      <a routerLink=\"home\" class=\"btn btn-link nav-item\">Home</a>\r\n\r\n\r\n      <a routerLink=\"/profile\" class=\"btn btn-link nav-item\">Profile</a>\r\n      <a routerLink=\"/schedules\" class=\"btn btn-link nav-item\">Schedules</a>\r\n    </nav>\r\n\r\n    <label class=\"align-content-center\">Hi Admin</label>\r\n\r\n    <nav class=\"float-right\">\r\n      <a class=\"nav-item btn btn-link\" (click)=\"logout()\" routerLink=\"/login\">Logout</a>\r\n    </nav>\r\n  </header>\r\n  <br>\r\n  <div class=\"container\">\r\n  <ul>\r\n    <li class=\"row\">\r\n      <b class=\"col-2\">Username</b>\r\n      <b class=\"col-2\">First Name</b>\r\n      <b class=\"col-2\">Last Name</b>\r\n      <b class=\"col-2\">User Type</b>\r\n      <b class=\"col-2\">Email</b>\r\n    </li>\r\n  <br>\r\n    <li class=\"row\">\r\n      <input [(ngModel)]=\"user.username\" class=\"col-2 form-control\" placeholder=\"Enter Username\">\r\n      <input [(ngModel)]=\"user.firstName\" class=\"col-2 form-control\" placeholder=\"Enter First Name\">\r\n      <input [(ngModel)]=\"user.lastName\" class=\"col-2 form-control\" placeholder=\"Enter Last Name\">\r\n      <select [(ngModel)]=\"user.userType\" class=\"col-2 form-control\">\r\n        <option>Member</option>\r\n        <option>Trainer</option>\r\n      </select>\r\n      <input [(ngModel)]=\"user.email\" class=\"col-2 form-control\" placeholder=\"Enter Email ID\">\r\n      <button (click)=\"register(user)\" class=\"btn btn-success\">+</button>\r\n      <button (click)=\"update()\" class=\"btn btn-primary\">Save Update</button>\r\n    </li>\r\n  <br>\r\n    <div *ngFor=\"let user of users\">\r\n      <div *ngIf=\"user.userType != 'Admin'\">\r\n      <li class=\"row form-row\">\r\n        <div class=\"col-2\">\r\n          {{user.username}}\r\n        </div>\r\n        <div class=\"col-2\">\r\n          {{user.firstName}}\r\n        </div>\r\n        <div class=\"col-2\">\r\n          {{user.lastName}}\r\n        </div>\r\n        <div class=\"col-2\">\r\n          {{user.userType}}\r\n        </div>\r\n        <div class=\"col-2\">\r\n          {{user.email}}\r\n        </div>\r\n        <div>\r\n          <button (click)=\"deleteUser(user.id)\" class=\"btn btn-danger\">X</button>\r\n        </div>\r\n        <div>\r\n          <button (click)=\"populate(user)\" class=\"btn btn-link\">Populate Data</button>\r\n        </div>\r\n      </li>\r\n        <br>\r\n      </div>\r\n    </div>\r\n  </ul>\r\n    <h6>Note: Default password for a user is the same as the username.</h6>\r\n</div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/admin-page/admin-page.component.ts":
/*!****************************************************!*\
  !*** ./src/app/admin-page/admin-page.component.ts ***!
  \****************************************************/
/*! exports provided: AdminPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminPageComponent", function() { return AdminPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AdminPageComponent = /** @class */ (function () {
    function AdminPageComponent(service, router) {
        this.service = service;
        this.router = router;
        this.user = {
            username: '',
            password: '',
            userType: '',
            firstName: '',
            lastName: '',
            email: '',
            schedule: {
                id: ''
            }
        };
    }
    AdminPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.finAllUsers()
            .then(function (users) { return _this.users = users; });
    };
    AdminPageComponent.prototype.logout = function () {
        var _this = this;
        this.service
            .logout()
            .then(function () {
            return _this.router.navigate(['login']);
        });
    };
    AdminPageComponent.prototype.populate = function (user) {
        this.user = user;
    };
    AdminPageComponent.prototype.update = function () {
        var _this = this;
        this.service.updateUserByAdmin(this.user)
            .then(function (response) {
            if (response.username == null) {
                alert('username does not exist');
            }
        })
            .then(function () { return _this.ngOnInit(); });
    };
    AdminPageComponent.prototype.register = function (user) {
        var _this = this;
        user.password = user.username;
        this.service
            .registerUserByAdmin(user)
            .then(function (response) {
            if (response.username == null) {
                alert('username already exists');
            }
            else {
                _this.ngOnInit();
            }
        });
    };
    AdminPageComponent.prototype.deleteUser = function (id) {
        var _this = this;
        this.service.deleteUser(id)
            .then(function () { return _this.ngOnInit(); });
    };
    AdminPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin-page',
            template: __webpack_require__(/*! ./admin-page.component.html */ "./src/app/admin-page/admin-page.component.html"),
            styles: [__webpack_require__(/*! ./admin-page.component.css */ "./src/app/admin-page/admin-page.component.css")]
        }),
        __metadata("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserServiceClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AdminPageComponent);
    return AdminPageComponent;
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

module.exports = "<router-outlet></router-outlet>\r\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _poc_poc_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./poc/poc.component */ "./src/app/poc/poc.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _schedule_list_schedule_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./schedule-list/schedule-list.component */ "./src/app/schedule-list/schedule-list.component.ts");
/* harmony import */ var _schedule_schedule_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./schedule/schedule.component */ "./src/app/schedule/schedule.component.ts");
/* harmony import */ var _days_list_days_list_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./days-list/days-list.component */ "./src/app/days-list/days-list.component.ts");
/* harmony import */ var _day_day_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./day/day.component */ "./src/app/day/day.component.ts");
/* harmony import */ var _services_schedule_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/schedule.service */ "./src/app/services/schedule.service.ts");
/* harmony import */ var _services_day_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./services/day.service */ "./src/app/services/day.service.ts");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _widget_list_widget_list_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./widget-list/widget-list.component */ "./src/app/widget-list/widget-list.component.ts");
/* harmony import */ var _services_widget_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./services/widget.service */ "./src/app/services/widget.service.ts");
/* harmony import */ var _admin_page_admin_page_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./admin-page/admin-page.component */ "./src/app/admin-page/admin-page.component.ts");
/* harmony import */ var _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./about-us/about-us.component */ "./src/app/about-us/about-us.component.ts");
/* harmony import */ var _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./contact-us/contact-us.component */ "./src/app/contact-us/contact-us.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _poc_poc_component__WEBPACK_IMPORTED_MODULE_4__["PocComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"],
                _profile_profile_component__WEBPACK_IMPORTED_MODULE_6__["ProfileComponent"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_7__["RegisterComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"],
                _schedule_list_schedule_list_component__WEBPACK_IMPORTED_MODULE_9__["ScheduleListComponent"],
                _schedule_schedule_component__WEBPACK_IMPORTED_MODULE_10__["ScheduleComponent"],
                _days_list_days_list_component__WEBPACK_IMPORTED_MODULE_11__["DaysListComponent"],
                _day_day_component__WEBPACK_IMPORTED_MODULE_12__["DayComponent"],
                _widget_list_widget_list_component__WEBPACK_IMPORTED_MODULE_17__["WidgetListComponent"],
                _admin_page_admin_page_component__WEBPACK_IMPORTED_MODULE_19__["AdminPageComponent"],
                _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_20__["AboutUsComponent"],
                _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_21__["ContactUsComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _app_routing__WEBPACK_IMPORTED_MODULE_15__["routing"]
            ],
            providers: [
                _services_schedule_service__WEBPACK_IMPORTED_MODULE_13__["ScheduleServiceClient"],
                _services_day_service__WEBPACK_IMPORTED_MODULE_14__["DayServiceClient"],
                _services_user_service__WEBPACK_IMPORTED_MODULE_16__["UserServiceClient"],
                _services_widget_service__WEBPACK_IMPORTED_MODULE_18__["WidgetServiceClient"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _schedule_list_schedule_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./schedule-list/schedule-list.component */ "./src/app/schedule-list/schedule-list.component.ts");
/* harmony import */ var _schedule_schedule_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./schedule/schedule.component */ "./src/app/schedule/schedule.component.ts");
/* harmony import */ var _poc_poc_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./poc/poc.component */ "./src/app/poc/poc.component.ts");
/* harmony import */ var _admin_page_admin_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./admin-page/admin-page.component */ "./src/app/admin-page/admin-page.component.ts");
/* harmony import */ var _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./about-us/about-us.component */ "./src/app/about-us/about-us.component.ts");
/* harmony import */ var _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./contact-us/contact-us.component */ "./src/app/contact-us/contact-us.component.ts");











var appRoutes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'register', component: _register_register_component__WEBPACK_IMPORTED_MODULE_2__["RegisterComponent"] },
    { path: 'profile', component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_4__["ProfileComponent"] },
    { path: 'schedules', component: _schedule_list_schedule_list_component__WEBPACK_IMPORTED_MODULE_5__["ScheduleListComponent"] },
    { path: 'about_us', component: _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_9__["AboutUsComponent"] },
    { path: 'contact_us', component: _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_10__["ContactUsComponent"] },
    { path: 'admin', component: _admin_page_admin_page_component__WEBPACK_IMPORTED_MODULE_8__["AdminPageComponent"] },
    { path: 'schedule/:scheduleId', component: _schedule_schedule_component__WEBPACK_IMPORTED_MODULE_6__["ScheduleComponent"] },
    { path: 'schedule/:scheduleId/poc', component: _poc_poc_component__WEBPACK_IMPORTED_MODULE_7__["PocComponent"] },
    { path: 'schedule/:scheduleId/day/:dayId/widget', component: _schedule_schedule_component__WEBPACK_IMPORTED_MODULE_6__["ScheduleComponent"] },
    { path: '**', component: _home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"] } // last
];
var routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(appRoutes);


/***/ }),

/***/ "./src/app/contact-us/contact-us.component.css":
/*!*****************************************************!*\
  !*** ./src/app/contact-us/contact-us.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header {\r\n  background-color: black;\r\n}\r\n\r\n.footer {\r\n  background-color: black;\r\n}\r\n\r\na{\r\n  color: white;\r\n}\r\n\r\ni{\r\n  color: white;\r\n}\r\n\r\nlabel{\r\n  color: white;\r\n}\r\n\r\nbody{\r\n  background-image: url(\"http://www.baltana.com/files/wallpapers-5/Health-Quotes-HD-Wallpapers-16018.jpg\");\r\n}\r\n"

/***/ }),

/***/ "./src/app/contact-us/contact-us.component.html":
/*!******************************************************!*\
  !*** ./src/app/contact-us/contact-us.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"modal-header header\">\n\n  <nav class=\"navbar-dark na\">\n    <a routerLink=\"home\" class=\"btn btn-link nav-item\">Home</a>\n    <a routerLink=\"/login\" *ngIf=\"user.username == ''\" class=\"btn btn-link nav-item\">Login</a>\n    <a *ngIf=\"user.username == ''\" routerLink=\"/register\" class=\"btn btn-link nav-item\">Register</a>\n    <a *ngIf=\"user.username != ''\" routerLink=\"/profile\" class=\"btn btn-link nav-item\">Profile</a>\n    <a *ngIf=\"user.userType == 'Trainer' || user.userType == 'Admin'\" routerLink=\"/schedules\" class=\"btn btn-link nav-item\">Schedules</a>\n    <a *ngIf=\"user.userType == 'Member'\" routerLink=\"/schedule/{{user.schedule.id}}\" class=\"btn btn-link nav-item\">My Schedule</a>\n    <a href=\"#\" *ngIf=\"user.userType == 'Admin'\" routerLink=\"/admin\" class=\"btn btn-link nav-item\">Users</a>\n    <a routerLink=\"/about_us\" class=\"btn btn-link nav-item\">About Us</a>\n  </nav>\n\n  <label *ngIf=\"user.username != ''\" class=\"align-content-center\">Hi {{user.firstName}}</label>\n\n  <nav class=\"float-right\">\n    <a *ngIf=\"user.username != ''\" class=\"nav-item btn btn-link\" (click)=\"logout()\" routerLink=\"/login\">Logout</a>\n  </nav>\n</header>\n\n<div class=\"container\">\n  <h3 style=\"font-family: Cambria\">Contact Us</h3>\n\n\n  <div class=\"container\">\n\n\n    <div class=\"row\">\n      <div class=\"col-2\">\n        <h6 style=\"font-family: Cambria\">Phone Number: </h6>\n      </div>\n      <div class=\"col-2\">\n        <h6><b>+1(234)-567-8912</b></h6>\n      </div>\n    </div>\n\n    <div class=\"row\">\n      <div class=\"col-2\">\n        <h6 style=\"font-family: Cambria\">Email: </h6>\n      </div>\n      <div class=\"col-2\">\n        <h6><b>livehealthy@healthbuddy.com</b></h6>\n      </div>\n    </div>\n\n\n    <div class=\"row\">\n      <div class=\"col-2\">\n        <h6 style=\"font-family: Cambria\">Address: </h6>\n      </div>\n      <div class=\"col-2\">\n        <h6 style=\"font-family: Cambria\"><b>123 On That Street,<br>In That City, In That State, <br>In That Country, 02215</b></h6>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/contact-us/contact-us.component.ts":
/*!****************************************************!*\
  !*** ./src/app/contact-us/contact-us.component.ts ***!
  \****************************************************/
/*! exports provided: ContactUsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactUsComponent", function() { return ContactUsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_schedule_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/schedule.service */ "./src/app/services/schedule.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ContactUsComponent = /** @class */ (function () {
    function ContactUsComponent(scheduleService, service, router) {
        this.scheduleService = scheduleService;
        this.service = service;
        this.router = router;
        this.user = {
            username: '',
            password: '',
            userType: '',
            firstName: '',
            lastName: '',
            email: '',
            schedule: {
                id: ''
            }
        };
    }
    ContactUsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service
            .profile()
            .then(function (user) {
            return _this.user = user;
        });
    };
    ContactUsComponent.prototype.logout = function () {
        var _this = this;
        this.service
            .logout()
            .then(function () {
            return _this.router.navigate(['login']);
        });
    };
    ContactUsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contact-us',
            template: __webpack_require__(/*! ./contact-us.component.html */ "./src/app/contact-us/contact-us.component.html"),
            styles: [__webpack_require__(/*! ./contact-us.component.css */ "./src/app/contact-us/contact-us.component.css")]
        }),
        __metadata("design:paramtypes", [_services_schedule_service__WEBPACK_IMPORTED_MODULE_3__["ScheduleServiceClient"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserServiceClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ContactUsComponent);
    return ContactUsComponent;
}());



/***/ }),

/***/ "./src/app/day/day.component.css":
/*!***************************************!*\
  !*** ./src/app/day/day.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/day/day.component.html":
/*!****************************************!*\
  !*** ./src/app/day/day.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  day works!\n</p>\n"

/***/ }),

/***/ "./src/app/day/day.component.ts":
/*!**************************************!*\
  !*** ./src/app/day/day.component.ts ***!
  \**************************************/
/*! exports provided: DayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DayComponent", function() { return DayComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DayComponent = /** @class */ (function () {
    function DayComponent() {
    }
    DayComponent.prototype.ngOnInit = function () {
    };
    DayComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-day',
            template: __webpack_require__(/*! ./day.component.html */ "./src/app/day/day.component.html"),
            styles: [__webpack_require__(/*! ./day.component.css */ "./src/app/day/day.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DayComponent);
    return DayComponent;
}());



/***/ }),

/***/ "./src/app/days-list/days-list.component.css":
/*!***************************************************!*\
  !*** ./src/app/days-list/days-list.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/days-list/days-list.component.html":
/*!****************************************************!*\
  !*** ./src/app/days-list/days-list.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  days-list works!\n</p>\n"

/***/ }),

/***/ "./src/app/days-list/days-list.component.ts":
/*!**************************************************!*\
  !*** ./src/app/days-list/days-list.component.ts ***!
  \**************************************************/
/*! exports provided: DaysListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DaysListComponent", function() { return DaysListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DaysListComponent = /** @class */ (function () {
    function DaysListComponent() {
    }
    DaysListComponent.prototype.ngOnInit = function () {
    };
    DaysListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-days-list',
            template: __webpack_require__(/*! ./days-list.component.html */ "./src/app/days-list/days-list.component.html"),
            styles: [__webpack_require__(/*! ./days-list.component.css */ "./src/app/days-list/days-list.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DaysListComponent);
    return DaysListComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".home {\r\n  background-color: lightsteelblue;\r\n  border-color: white;\r\n}\r\n\r\n.txt {\r\n  font-family: Calibri;\r\n  font: caption;\r\n  color: white;\r\n}\r\n\r\n.header {\r\n  background-color: black;\r\n}\r\n\r\n.footer {\r\n  background-color: black;\r\n}\r\n\r\na{\r\n  color: white;\r\n}\r\n\r\ni{\r\n  color: white;\r\n}\r\n\r\nlabel{\r\n  color: white;\r\n}\r\n\r\nbody{\r\n  background-image: url(\"http://www.baltana.com/files/wallpapers-5/Health-Quotes-HD-Wallpapers-16018.jpg\");\r\n}\r\n"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"home\">\n  <header class=\"modal-header header\">\n\n    <nav class=\"navbar-dark na\">\n      <a routerLink=\"home\" class=\"btn btn-link nav-item\">Home</a>\n      <a routerLink=\"/login\" *ngIf=\"user.username == ''\" class=\"btn btn-link nav-item\">Login</a>\n      <a *ngIf=\"user.username == ''\" routerLink=\"/register\" class=\"btn btn-link nav-item\">Register</a>\n      <a *ngIf=\"user.username != ''\" routerLink=\"/profile\" class=\"btn btn-link nav-item\">Profile</a>\n      <a *ngIf=\"user.userType == 'Trainer' || user.userType == 'Admin'\" routerLink=\"/schedules\" class=\"btn btn-link nav-item\">Schedules</a>\n      <a *ngIf=\"user.userType == 'Member'\" routerLink=\"/schedule/{{user.schedule.id}}\" class=\"btn btn-link nav-item\">My Schedule</a>\n      <a href=\"#\" *ngIf=\"user.userType == 'Admin'\" routerLink=\"/admin\" class=\"btn btn-link nav-item\">Users</a>\n      <a routerLink=\"/about_us\" class=\"btn btn-link nav-item\">About Us</a>\n      <a routerLink=\"/contact_us\" class=\"btn btn-link nav-item\">Contact Us</a>\n    </nav>\n\n    <label *ngIf=\"user.username != ''\" class=\"align-content-center\">Hi {{user.firstName}}</label>\n\n    <nav class=\"float-right\">\n      <a *ngIf=\"user.username != ''\" class=\"nav-item btn btn-link\" (click)=\"logout()\" routerLink=\"/login\">Logout</a>\n    </nav>\n  </header>\n  <body>\n    <img src=\"http://www.baltana.com/files/wallpapers-5/Health-Quotes-HD-Wallpapers-16018.jpg\" class=\"img-fluid\" alt=\"Responsive image\">\n    <!--<div class=\"col-4\">-->\n      <!--<p class=\"txt font-italic\">\"Good nutrition is the key to good mental and physical health. Eating a balanced diet is an important part of good health for everyone. The kind and amount of food you eat affects the way you feel and how your body works.\"</p>-->\n    <!--</div>-->\n    <!--<div class=\"col-4\">-->\n    <!--</div>-->\n    <!--<div class=\"col-4\">-->\n      <!--<p class=\"txt font-italic\">What are nutrients?-->\n        <!--Nutrients are ingredients in food that help you:-->\n\n        <!--Grow-->\n        <!--Repair body tissue-->\n        <!--Build new muscle tissue.-->\n        <!--No single food will provide you with the right amount of nutrients. By combining foods from all the different food groups, you can meet your body's daily needs.</p>-->\n    <!--</div>-->\n    <!--<div class=\"col-3\">-->\n\n    <!--</div>-->\n\n  </body>\n  <footer class=\"modal-footer footer\">\n    <i>Content on nutrition and well being taken from https://www.kidney.org/atoz/content/nutritionwyska and image taken from http://www.baltana.com/files/wallpapers-5/Health-Quotes-HD-Wallpapers-16018.jpg</i>\n  </footer>\n</div>\n\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_schedule_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/schedule.service */ "./src/app/services/schedule.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomeComponent = /** @class */ (function () {
    function HomeComponent(scheduleService, service, router) {
        this.scheduleService = scheduleService;
        this.service = service;
        this.router = router;
        this.user = {
            username: '',
            password: '',
            userType: '',
            firstName: '',
            lastName: '',
            email: '',
            schedule: {
                id: ''
            }
        };
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service
            .profile()
            .then(function (user) {
            return _this.user = user;
        });
    };
    HomeComponent.prototype.logout = function () {
        var _this = this;
        this.service
            .logout()
            .then(function () {
            return _this.router.navigate(['login']);
        });
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_services_schedule_service__WEBPACK_IMPORTED_MODULE_3__["ScheduleServiceClient"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserServiceClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header {\r\n  background-color: black;\r\n}\r\n\r\n.footer {\r\n  background-color: black;\r\n}\r\n\r\na{\r\n  color: white;\r\n}\r\n"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<header class=\"modal-header header\">\n\n  <nav class=\"navbar-dark na\">\n    <a routerLink=\"/home\" class=\"btn btn-link\">Home</a>\n    <a routerLink=\"/about_us\" class=\"btn btn-link nav-item\">About Us</a>\n    <a routerLink=\"/contact_us\" class=\"btn btn-link nav-item\">Contact Us</a>\n  </nav>\n\n</header>\n\n<!--reffered from https://bootsnipp.com/snippets/featured/parallax-login-form-->\n\n<div class=\"container-fluid justify-content-around\">\n  <div class=\"row vertical-offset-100\">\n    <div class=\"col-md-4 col-md-offset-4\">\n      <div class=\"panel panel-default\">\n        <div class=\"panel-heading\">\n          <h3 class=\"panel-title\">Login</h3>\n        </div>\n        <div class=\"panel-body\">\n            <fieldset>\n              <div class=\"form-group\">\n                <input [(ngModel)]=\"username\"\n                       class=\"form-control\"\n                       placeholder=\"Username\">\n              </div>\n              <div class=\"form-group\">\n                <input [(ngModel)]=\"password\"\n                       class=\"form-control\"\n                       placeholder=\"Password\"\n                       type=\"password\">\n              </div>\n              <button (click)=\"login(username,password)\" class=\"btn btn-lg btn-success btn-block\">Login</button>\n              <br>\n              <button href=\"#\" routerLink=\"/register\" class=\"btn btn-link\">Not a Registered User?</button>\n            </fieldset>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-8\">\n      <h3 class=\"h3\">How do I eat a healthy diet?</h3>\n\n      <p class=\"font-italic\">\n        <ul>\n      <li>Eat a variety of foods from each group and stay within the recommended servings listed.</li>\n      <li>Choose foods that are low in fat and sugar.</li>\n      <li>Choose and prepare foods that are low in salt.</li>\n      <li>Learn to read and understand food labels.</li>\n    </ul>\n\n      <h3>How can I make healthy choices when shopping for food?</h3>\n      <p class=\"font-italic\">Read the Nutrition Facts Food Label, which is found on canned, frozen and packaged foods. This label:</p>\n      <ul>\n        <li>Lists the items that by law need to be listed on food products.</li>\n        <li>Shows what a serving size of a food is, and how many calories and fat grams are in a serving, as well as how many calories of the food come from fat.</li>\n        <li>Tells some important vitamins and minerals that the food provides.</li>\n      </ul>\n\n      <h3>What if I have more questions?</h3>\n      <ul>\n        <li>Login or SignUp here today :)</li>\n      </ul>\n    </div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, service) {
        this.router = router;
        this.service = service;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function (username, password) {
        var _this = this;
        console.log([username, password]);
        this.service
            .login(username, password)
            .then(function (response) {
            if (response.username == null) {
                alert('Incorrect credintials');
            }
            else {
                _this.router.navigate(['home']);
            }
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserServiceClient"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/poc/poc.component.css":
/*!***************************************!*\
  !*** ./src/app/poc/poc.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header {\r\n  background-color: black;\r\n}\r\n\r\n.footer {\r\n  background-color: black;\r\n}\r\n\r\na{\r\n  color: white;\r\n}\r\n\r\ni{\r\n  color: white;\r\n}\r\n\r\nlabel{\r\n  color: white;\r\n}\r\n\r\nbody{\r\n  background-image: url(\"http://www.baltana.com/files/wallpapers-5/Health-Quotes-HD-Wallpapers-16018.jpg\");\r\n}\r\n"

/***/ }),

/***/ "./src/app/poc/poc.component.html":
/*!****************************************!*\
  !*** ./src/app/poc/poc.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"modal-header header\">\n\n  <nav class=\"navbar-dark na\">\n    <a routerLink=\"home\" class=\"btn btn-link nav-item\">Home</a>\n    <a routerLink=\"/login\" *ngIf=\"user.username == ''\" class=\"btn btn-link nav-item\">Login</a>\n    <a *ngIf=\"user.username == ''\" routerLink=\"/register\" class=\"btn btn-link nav-item\">Register</a>\n    <a *ngIf=\"user.username != ''\" routerLink=\"/profile\" class=\"btn btn-link nav-item\">Profile</a>\n    <a *ngIf=\"user.userType == 'Trainer' || user.userType == 'Admin'\" routerLink=\"/schedules\" class=\"btn btn-link nav-item\">Schedules</a>\n    <a *ngIf=\"user.userType == 'Member'\" routerLink=\"/schedule/{{user.schedule.id}}\" class=\"btn btn-link nav-item\">My Schedule</a>\n    <a href=\"#\" *ngIf=\"user.userType == 'Admin'\" routerLink=\"/admin\" class=\"btn btn-link nav-item\">Users</a>\n  </nav>\n\n  <label *ngIf=\"user.username != ''\" class=\"align-content-center\">Hi {{user.firstName}}</label>\n\n  <nav class=\"float-right\">\n    <a *ngIf=\"user.username != ''\" class=\"nav-item btn btn-link\" (click)=\"logout()\" routerLink=\"/login\">Logout</a>\n  </nav>\n</header>\n\n<div class=\"container\">\n\n  <div class=\"row\">\n    <div class=\"col-8\">\n      <h3>Search The Food Item To Track Nutrition</h3>\n    </div>\n  </div>\n\n  <div class=\"row container\">\n    <div class=\"col-8\">\n      <input [(ngModel)]=\"queryTerm\"\n             class=\"form-control\"\n             type='text'\n             placeholder=\"Enter Search Term (Example: Pizza)\">\n    </div>\n    <div class=\"col-4\">\n      <button title=\"Search\"\n              class=\"btn btn-primary\"\n              (click)=\"selectSearch()\">Search</button>\n    </div>\n  </div>\n\n\n\n  <div class=\"row\">\n    <div *ngIf=\"toggleSearch\" class=\"container col-6\">\n        <h5>Select the appropriate item from the list below</h5>\n        <ul>\n          <li (click)=\"displayDetails(food)\"\n              class=\"list-group-item webdev btn btn-link\"\n              *ngFor=\"let food of Foods\">\n            {{food.food_name}}\n          </li>\n        </ul>\n    </div>\n\n    <div *ngIf=\"toggleDetail\" class=\" container col-6\">\n        <h5>Description</h5>\n        {{food.food_description}}}\n    </div>\n\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/poc/poc.component.ts":
/*!**************************************!*\
  !*** ./src/app/poc/poc.component.ts ***!
  \**************************************/
/*! exports provided: PocComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PocComponent", function() { return PocComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_schedule_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/schedule.service */ "./src/app/services/schedule.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PocComponent = /** @class */ (function () {
    function PocComponent(scheduleService, userService, router) {
        this.scheduleService = scheduleService;
        this.userService = userService;
        this.router = router;
        this.user = {
            username: '',
            password: '',
            userType: '',
            firstName: '',
            lastName: '',
            email: '',
            schedule: {
                id: ''
            }
        };
        this.toggleSearch = false;
        this.toggleDetail = false;
        this.Foods = [];
    }
    PocComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService
            .profile()
            .then(function (user) {
            return _this.user = user;
        });
    };
    PocComponent.prototype.logout = function () {
        var _this = this;
        this.userService
            .logout()
            .then(function () {
            return _this.router.navigate(['login']);
        });
    };
    PocComponent.prototype.selectSearch = function () {
        var _this = this;
        this.toggleSearch = true;
        this.toggleDetail = false;
        console.log(this.queryTerm);
        this.service()
            .then(function (Foods) {
            _this.Foods = Foods;
        });
        console.log(this.Foods);
    };
    PocComponent.prototype.service = function () {
        return fetch('https://powerful-basin-21524.herokuapp.com/api/poc/' + this.queryTerm)
            .then(function (response) { return response.json(); });
    };
    PocComponent.prototype.displayDetails = function (food) {
        this.toggleDetail = true;
        console.log(food.food_name);
        this.food = food;
    };
    PocComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-poc',
            template: __webpack_require__(/*! ./poc.component.html */ "./src/app/poc/poc.component.html"),
            styles: [__webpack_require__(/*! ./poc.component.css */ "./src/app/poc/poc.component.css")]
        }),
        __metadata("design:paramtypes", [_services_schedule_service__WEBPACK_IMPORTED_MODULE_3__["ScheduleServiceClient"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserServiceClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], PocComponent);
    return PocComponent;
}());



/***/ }),

/***/ "./src/app/profile/profile.component.css":
/*!***********************************************!*\
  !*** ./src/app/profile/profile.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header {\r\n  background-color: black;\r\n}\r\n\r\n.footer {\r\n  background-color: black;\r\n}\r\n\r\na{\r\n  color: white;\r\n}\r\n\r\ni{\r\n  color: white;\r\n}\r\n\r\nlabel{\r\n  color: black;\r\n}\r\n\r\nbody{\r\n  background-image: url(\"http://www.baltana.com/files/wallpapers-5/Health-Quotes-HD-Wallpapers-16018.jpg\");\r\n}\r\n"

/***/ }),

/***/ "./src/app/profile/profile.component.html":
/*!************************************************!*\
  !*** ./src/app/profile/profile.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n\n  <header class=\"modal-header header\">\n\n    <nav class=\"navbar-dark na\">\n      <a routerLink=\"home\" class=\"btn btn-link nav-item\">Home</a>\n      <a routerLink=\"/login\" *ngIf=\"user.username == ''\" class=\"btn btn-link nav-item\">Login</a>\n      <a *ngIf=\"user.username == ''\" routerLink=\"/register\" class=\"btn btn-link nav-item\">Register</a>\n      <a *ngIf=\"user.userType == 'Trainer' || user.userType == 'Admin'\" routerLink=\"/schedules\" class=\"btn btn-link nav-item\">Schedules</a>\n      <a *ngIf=\"user.userType == 'Member'\" routerLink=\"/schedule/{{user.schedule.id}}\" class=\"btn btn-link nav-item\">My Schedule</a>\n      <a href=\"#\" *ngIf=\"user.userType == 'Admin'\" routerLink=\"/admin\" class=\"btn btn-link nav-item\">Users</a>\n    </nav>\n\n    <label *ngIf=\"user.username != ''\" class=\"align-content-center\">Hi {{user.firstName}}</label>\n\n    <nav class=\"float-right\">\n      <a *ngIf=\"user.username != ''\" class=\"nav-item btn btn-link\" (click)=\"logout()\" routerLink=\"/login\">Logout</a>\n    </nav>\n  </header>\n<div class=\"container\">\n  <h1>Profile</h1>\n<div class=\"form-group\">\n  <div class=\"row\">\n    <div class=\"col-4\">\n      <label>Username:</label><br>\n      <label>First Name:</label><br>\n      <label>Last Name:</label><br>\n      <label>Password:</label><br>\n      <label>Email ID:</label><br>\n    </div>\n    <div class=\"col-8\">\n      {{user.username}}\n      <input [(ngModel)]=\"user.firstName\"\n             id=\"firstName\"\n             placeholder=\"first name\"\n             class=\"form-control\"/>\n      <input [(ngModel)]=\"user.lastName\"\n             placeholder=\"lastName\"\n             class=\"form-control\"/>\n      <input [(ngModel)]=\"user.password\"\n             placeholder=\"password\"\n             class=\"form-control\"\n             type=\"password\"/>\n      <input [(ngModel)]=\"user.email\"\n             placeholder=\"email\"\n             class=\"form-control\"/>\n\n    </div>\n  </div>\n  </div>\n\n  <button (click)=\"update()\" class=\"btn btn-primary\">\n    Update\n  </button>\n</div>\n</div>\n"

/***/ }),

/***/ "./src/app/profile/profile.component.ts":
/*!**********************************************!*\
  !*** ./src/app/profile/profile.component.ts ***!
  \**********************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(service, router) {
        this.service = service;
        this.router = router;
        this.user = {
            username: '',
            password: '',
            userType: '',
            firstName: '',
            lastName: '',
            email: '',
            schedule: {
                id: ''
            }
        };
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service
            .profile()
            .then(function (user) {
            return _this.user = user;
        });
    };
    ProfileComponent.prototype.logout = function () {
        var _this = this;
        this.service
            .logout()
            .then(function () {
            return _this.router.navigate(['login']);
        });
    };
    ProfileComponent.prototype.update = function () {
        var _this = this;
        this.service.updateUser(this.user)
            .then(function () { return _this.ngOnInit(); });
    };
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserServiceClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/register/register.component.css":
/*!*************************************************!*\
  !*** ./src/app/register/register.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header {\r\n  background-color: black;\r\n}\r\n\r\nfooter {\r\n  background-color: black;\r\n}\r\n\r\na{\r\n  color: white;\r\n}\r\n\r\ni{\r\n  color: white;\r\n}\r\n\r\nlabel{\r\n  color: black;\r\n}\r\n\r\nbody{\r\n  background-image: url(\"http://www.baltana.com/files/wallpapers-5/Health-Quotes-HD-Wallpapers-16018.jpg\");\r\n}\r\n"

/***/ }),

/***/ "./src/app/register/register.component.html":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"modal-header header\">\n\n  <nav class=\"navbar-dark na\">\n    <a routerLink=\"home\" class=\"btn btn-link nav-item\">Home</a>\n    <a routerLink=\"/login\" class=\"btn btn-link nav-item\">Login</a>\n    <a routerLink=\"/about_us\" class=\"btn btn-link nav-item\">About Us</a>\n    <a routerLink=\"/contact_us\" class=\"btn btn-link nav-item\">Contact Us</a>\n  </nav>\n\n\n</header>\n<br>\n\n\n<div class=\"container col-8\">\n\n  <h1 align=\"center\">Register New User</h1>\n\n  <div class=\"form-group\">\n    <label for=\"username\">Username:</label>\n    <input [(ngModel)]=\"user.username\"\n           placeholder=\"Enter Username\"\n           class=\"form-control\" id=\"username\"/>\n  </div>\n  <div class=\"form-group\">\n    <label for=\"firstname\">First Name:</label>\n    <input [(ngModel)]=\"user.firstName\"\n           placeholder=\"Enter First Name\"\n           class=\"form-control\" id=\"firstname\"/>\n  </div>\n  <div class=\"form-group\">\n    <label for=\"lastname\">Last Name:</label>\n    <input [(ngModel)]=\"user.lastName\"\n           placeholder=\"Enter Last Name\"\n           class=\"form-control\" id=\"lastname\"/>\n  </div>\n  <div class=\"form-group\">\n    <label for=\"usertype\">User Type:</label>\n    <select [(ngModel)]=\"user.userType\"\n            class=\"form-control\" id=\"usertype\">\n      <option class=\"form-control\">Trainer</option>\n      <option class=\"form-control\">Member</option>\n    </select>\n  </div>\n  <div class=\"form-group\">\n    <label for=\"password\">Password:</label>\n    <input [(ngModel)]=\"user.password\"\n           placeholder=\"Enter Password\"\n           class=\"form-control\"\n           type=\"password\" id=\"password\"/>\n  </div>\n  <div class=\"form-group\">\n    <label for=\"password2\">Verify Password:</label>\n    <input [(ngModel)]=\"password2\"\n           placeholder=\"Re-enter Password\"\n           class=\"form-control\"\n           type=\"password\" id=\"password2\"/>\n  </div>\n  <div class=\"form-group\">\n    <label for=\"email\">Email ID:</label>\n    <input [(ngModel)]=\"user.email\"\n           placeholder=\"Enter Email ID\"\n           class=\"form-control\" id=\"email\"/>\n  </div>\n  <button (click)=\"register(user, password2)\"\n          class=\"btn btn-primary\">\n    Register\n  </button>\n\n</div>\n"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(router, service) {
        this.router = router;
        this.service = service;
        this.user = {
            username: '',
            password: '',
            userType: '',
            firstName: '',
            lastName: '',
            email: '',
            schedule: {}
        };
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.register = function (user, password2) {
        var _this = this;
        if (user.password !== password2) {
            alert('passwords does not match');
        }
        else {
            this.service
                .register(user)
                .then(function (response) {
                if (response.username == null) {
                    alert('username already exists');
                }
                else {
                    _this.router.navigate(['home']);
                }
            });
        }
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserServiceClient"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/schedule-list/schedule-list.component.css":
/*!***********************************************************!*\
  !*** ./src/app/schedule-list/schedule-list.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header {\r\n  background-color: black;\r\n}\r\n\r\nfooter {\r\n  background-color: black;\r\n}\r\n\r\na{\r\n  color: white;\r\n}\r\n\r\ni{\r\n  color: white;\r\n}\r\n\r\nlabel{\r\n  color: black;\r\n}\r\n\r\nbody{\r\n  background-image: url(\"http://www.baltana.com/files/wallpapers-5/Health-Quotes-HD-Wallpapers-16018.jpg\");\r\n}\r\n"

/***/ }),

/***/ "./src/app/schedule-list/schedule-list.component.html":
/*!************************************************************!*\
  !*** ./src/app/schedule-list/schedule-list.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<header class=\"modal-header header\">\n\n  <nav class=\"navbar-dark na\">\n    <a routerLink=\"home\" class=\"btn btn-link nav-item\">Home</a>\n    <a *ngIf=\"user.username != ''\" routerLink=\"/profile\" class=\"btn btn-link nav-item\">Profile</a>\n    <a *ngIf=\"user.userType == 'Admin'\" routerLink=\"/admin\" class=\"btn btn-link nav-item\">Users</a>\n  </nav>\n\n  <label *ngIf=\"user.username != ''\" class=\"align-content-center\">Hi {{user.firstName}}</label>\n\n  <nav class=\"float-right\">\n    <a *ngIf=\"user.username != ''\" class=\"nav-item btn btn-link\" (click)=\"logout()\" routerLink=\"/login\">Logout</a>\n  </nav>\n</header>\n<br>\n<div class=\"container justify-content-around align-content-center\">\n  <h3 align=\"left\"> Member Schedule List</h3>\n  <br>\n\n  <div class=\"card-deck card-group\">\n    <div *ngFor=\"let schedule of schedules\">\n      <div *ngIf=\"schedule.title != null\">\n        <div class=\"card\">\n          <div class=\"card-body\">\n            <h5 class=\"card-title\">{{schedule.title}}</h5>\n            <a routerLink='/schedule/{{schedule.id}}' class=\"btn btn-primary\">Edit Schedule</a>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/schedule-list/schedule-list.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/schedule-list/schedule-list.component.ts ***!
  \**********************************************************/
/*! exports provided: ScheduleListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScheduleListComponent", function() { return ScheduleListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_schedule_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/schedule.service */ "./src/app/services/schedule.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ScheduleListComponent = /** @class */ (function () {
    function ScheduleListComponent(userService, service, router) {
        this.userService = userService;
        this.service = service;
        this.router = router;
        this.user = {
            username: '',
            password: '',
            userType: '',
            firstName: '',
            lastName: '',
            email: '',
            schedule: {
                id: ''
            }
        };
    }
    ScheduleListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.findAllSchedules()
            .then(function (schedules) { return _this.schedules = schedules; });
        this.userService
            .profile()
            .then(function (user) {
            return _this.user = user;
        });
    };
    ScheduleListComponent.prototype.logout = function () {
        var _this = this;
        this.userService
            .logout()
            .then(function () {
            return _this.router.navigate(['login']);
        });
    };
    ScheduleListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-schedule-list',
            template: __webpack_require__(/*! ./schedule-list.component.html */ "./src/app/schedule-list/schedule-list.component.html"),
            styles: [__webpack_require__(/*! ./schedule-list.component.css */ "./src/app/schedule-list/schedule-list.component.css")]
        }),
        __metadata("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserServiceClient"],
            _services_schedule_service__WEBPACK_IMPORTED_MODULE_1__["ScheduleServiceClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], ScheduleListComponent);
    return ScheduleListComponent;
}());



/***/ }),

/***/ "./src/app/schedule/schedule.component.css":
/*!*************************************************!*\
  !*** ./src/app/schedule/schedule.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header {\r\n  background-color: black;\r\n}\r\n\r\n.footer {\r\n  background-color: black;\r\n}\r\n\r\na{\r\n  color: white;\r\n}\r\n\r\na.day{\r\n  color: blue;\r\n}\r\n\r\ni{\r\n  color: white;\r\n}\r\n\r\nlabel{\r\n  color: white;\r\n}\r\n\r\nbody{\r\n  background-image: url(\"http://www.baltana.com/files/wallpapers-5/Health-Quotes-HD-Wallpapers-16018.jpg\");\r\n}\r\n"

/***/ }),

/***/ "./src/app/schedule/schedule.component.html":
/*!**************************************************!*\
  !*** ./src/app/schedule/schedule.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"modal-header header\">\r\n\r\n  <nav class=\"navbar-dark na\">\r\n    <a routerLink=\"home\" class=\"btn btn-link nav-item\">Home</a>\r\n    <a *ngIf=\"user.username != ''\" routerLink=\"/profile\" class=\"btn btn-link nav-item\">Profile</a>\r\n    <a *ngIf=\"user.userType == 'Trainer' || user.userType == 'Admin'\" routerLink=\"/schedules\" class=\"btn btn-link nav-item\">Schedules</a>\r\n    <a href=\"#\" *ngIf=\"user.userType == 'Admin'\" routerLink=\"/admin\" class=\"btn btn-link nav-item\">Users</a>\r\n  </nav>\r\n\r\n  <label *ngIf=\"user.username != ''\" class=\"align-content-center\">Hi {{user.firstName}}</label>\r\n\r\n  <nav class=\"float-right\">\r\n    <a *ngIf=\"user.username != ''\" class=\"nav-item btn btn-link\" (click)=\"logout()\" routerLink=\"/login\">Logout</a>\r\n  </nav>\r\n</header>\r\n\r\n<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\" container col-4\">\r\n\r\n      <div class=\"form-control\">\r\n        <h4>User Requirements</h4>\r\n        <div *ngIf=\"user.userType == 'Member' || user.userType == 'Admin'\">\r\n          <textarea [(ngModel)]=\"schedule.userRequirements\"\r\n                  class=\"form-control\"\r\n                  placeholder=\"Enter Requirements\">\r\n\r\n          </textarea>\r\n          <button (click)=\"saveSchedule()\" class=\"btn btn-primary\">Save</button>\r\n        </div>\r\n        <div *ngIf=\"user.userType == 'Trainer'\">\r\n          {{schedule.userRequirements}}\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"form-control container\">\r\n      <h4>Recommended Nutrition</h4>\r\n        <div *ngIf=\"user.userType == 'Trainer' || user.userType == 'Admin'\">\r\n      <ul>\r\n        <li>Calories: <input [(ngModel)]=\"schedule.calories\" type=\"text\" class=\"form-control\"></li>\r\n        <li>Proteins: <input [(ngModel)]=\"schedule.proteins\" type=\"text\" class=\"form-control\"></li>\r\n        <li>Fats: <input [(ngModel)]=\"schedule.fats\" type=\"text\" class=\"form-control\"></li>\r\n        <li>Carbohydrates: <input [(ngModel)]=\"schedule.carbohydrates\" type=\"text\" class=\"form-control\"></li>\r\n        <button (click)=\"saveSchedule()\" class=\"btn btn-primary\">Save</button>\r\n      </ul>\r\n        </div>\r\n        <div *ngIf=\"user.userType == 'Member'\">\r\n          <ul>\r\n            <li>Calories: {{schedule.calories}}</li>\r\n            <li>Proteins: {{schedule.proteins}}</li>\r\n            <li>Fats: {{schedule.fats}}</li>\r\n            <li>Carbohydrates: {{schedule.carbohydrates}}</li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n\r\n      <div *ngIf=\"user.userType == 'Member' || user.userType == 'Admin'\"\r\n           class=\"form-control container\">\r\n        <button routerLink=\"/schedule/{{scheduleId}}/poc\" class=\"btn btn-success\">Nutrition Teller App</button>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-8 container\">\r\n      <h4>Schedule For {{days.length}} Days</h4>\r\n      <ul class=\"nav nav-tabs\">\r\n        <li *ngFor=\"let day of days; let i = index\"\r\n            class=\"nav-item nav\">\r\n          <a routerLink=\"/schedule/{{scheduleId}}/day/{{day.id}}/widget\" class=\"btn btn-link day nav-link\">\r\n            Day {{i+1}}\r\n          </a>\r\n          <button (click)=\"deleteDay(day.id)\" style=\"color: red\" class=\"btn btn-link btn-sm\">X</button>\r\n        </li>\r\n        <li *ngIf=\"user.userType == 'Trainer' || user.userType == 'Admin'\"><button (click)=\"createDay(scheduleId)\" class=\"btn\">+</button></li>\r\n      </ul>\r\n      <app-widget-list></app-widget-list>\r\n\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/schedule/schedule.component.ts":
/*!************************************************!*\
  !*** ./src/app/schedule/schedule.component.ts ***!
  \************************************************/
/*! exports provided: ScheduleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScheduleComponent", function() { return ScheduleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_day_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/day.service */ "./src/app/services/day.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_schedule_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/schedule.service */ "./src/app/services/schedule.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ScheduleComponent = /** @class */ (function () {
    function ScheduleComponent(scheduleService, dayService, service, router, route) {
        var _this = this;
        this.scheduleService = scheduleService;
        this.dayService = dayService;
        this.service = service;
        this.router = router;
        this.route = route;
        this.user = {
            username: '',
            password: '',
            userType: '',
            firstName: '',
            lastName: '',
            email: '',
            schedule: {}
        };
        this.route.params.subscribe(function (params) { return _this.setParams(params); });
    }
    ScheduleComponent.prototype.setParams = function (params) {
        this.scheduleId = params['scheduleId'];
        this.loadDays();
    };
    ScheduleComponent.prototype.loadDays = function () {
        var _this = this;
        console.log(this.scheduleId);
        this.dayService.findAllDaysForSchedule(this.scheduleId)
            .then(function (days) { return _this.days = days; });
    };
    ScheduleComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service
            .profile()
            .then(function (user) {
            return _this.user = user;
        });
        this.scheduleService.findScheduleById(this.scheduleId)
            .then(function (schedule) { return _this.schedule = schedule; });
    };
    ScheduleComponent.prototype.createDay = function (scheduleId) {
        var _this = this;
        this.dayService.createDay(scheduleId)
            .then(function (response) { return _this.router.navigate(['schedule/' + _this.scheduleId + '/day/' + response.id + '/widget']); });
    };
    ScheduleComponent.prototype.saveSchedule = function () {
        this.scheduleService.saveSchedule(this.schedule);
    };
    ScheduleComponent.prototype.logout = function () {
        var _this = this;
        this.service
            .logout()
            .then(function () {
            return _this.router.navigate(['login']);
        });
    };
    ScheduleComponent.prototype.deleteDay = function (dayId) {
        var _this = this;
        this.dayService.deleteDay(dayId)
            .then(function () { return _this.router.navigate(['schedule/' + _this.scheduleId]); });
    };
    ScheduleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-schedule',
            template: __webpack_require__(/*! ./schedule.component.html */ "./src/app/schedule/schedule.component.html"),
            styles: [__webpack_require__(/*! ./schedule.component.css */ "./src/app/schedule/schedule.component.css")]
        }),
        __metadata("design:paramtypes", [_services_schedule_service__WEBPACK_IMPORTED_MODULE_4__["ScheduleServiceClient"],
            _services_day_service__WEBPACK_IMPORTED_MODULE_1__["DayServiceClient"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserServiceClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], ScheduleComponent);
    return ScheduleComponent;
}());



/***/ }),

/***/ "./src/app/services/day.service.ts":
/*!*****************************************!*\
  !*** ./src/app/services/day.service.ts ***!
  \*****************************************/
/*! exports provided: DayServiceClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DayServiceClient", function() { return DayServiceClient; });
var DayServiceClient = /** @class */ (function () {
    function DayServiceClient() {
        this.SCHEDULE_URL = 'https://quiet-fjord-77462.herokuapp.com';
    }
    DayServiceClient.prototype.findAllDaysForSchedule = function (scheduleId) {
        return fetch(this.SCHEDULE_URL + '/api/schedule/' + scheduleId + '/day')
            .then(function (response) { return response.json(); });
    };
    DayServiceClient.prototype.createDay = function (scheduleId) {
        var day = {};
        return fetch(this.SCHEDULE_URL + '/api/schedule/' + scheduleId + '/day', {
            method: 'post',
            body: JSON.stringify(day),
            headers: {
                'content-type': 'application/json'
            }
        }).then(function (response) { return response.json(); });
    };
    DayServiceClient.prototype.deleteDay = function (dayId) {
        return fetch(this.SCHEDULE_URL + '/api/day/' + dayId, {
            method: 'delete'
        }).then(function (response) { return response.json; });
    };
    return DayServiceClient;
}());



/***/ }),

/***/ "./src/app/services/schedule.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/schedule.service.ts ***!
  \**********************************************/
/*! exports provided: ScheduleServiceClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScheduleServiceClient", function() { return ScheduleServiceClient; });
var ScheduleServiceClient = /** @class */ (function () {
    function ScheduleServiceClient() {
        this.SCHEDULE_URL = 'https://quiet-fjord-77462.herokuapp.com/api/schedule';
    }
    ScheduleServiceClient.prototype.findAllSchedules = function () {
        return fetch(this.SCHEDULE_URL)
            .then(function (response) { return response.json(); });
    };
    ScheduleServiceClient.prototype.findScheduleById = function (scheduleId) {
        return fetch(this.SCHEDULE_URL + '/' + scheduleId)
            .then(function (response) { return response.json(); });
    };
    ScheduleServiceClient.prototype.saveSchedule = function (schedule) {
        return fetch(this.SCHEDULE_URL, {
            method: 'post',
            body: JSON.stringify(schedule),
            headers: {
                'content-type': 'application/json'
            }
        }).then(function (response) { return response.json(); });
    };
    return ScheduleServiceClient;
}());



/***/ }),

/***/ "./src/app/services/user.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserServiceClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserServiceClient", function() { return UserServiceClient; });
var UserServiceClient = /** @class */ (function () {
    function UserServiceClient() {
        this.URL = 'https://quiet-fjord-77462.herokuapp.com';
    }
    UserServiceClient.prototype.finAllUsers = function () {
        return fetch(this.URL + '/api/user')
            .then(function (response) { return response.json(); });
    };
    UserServiceClient.prototype.login = function (username, password) {
        var userCredentials = {
            username: username,
            password: password
        };
        return fetch(this.URL + '/api/login', {
            body: JSON.stringify(userCredentials),
            method: 'post',
            headers: {
                'content-type': 'application/json'
            }
        }).then(function (response) { return response.json(); });
    };
    UserServiceClient.prototype.logout = function () {
        return fetch(this.URL + '/api/logout', {
            method: 'delete'
        });
    };
    UserServiceClient.prototype.profile = function () {
        return fetch(this.URL + '/api/profile')
            .then(function (response) { return response.json(); });
    };
    UserServiceClient.prototype.register = function (user) {
        return fetch(this.URL + '/api/register', {
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user),
            method: 'post'
        }).then(function (respose) { return respose.json(); });
    };
    UserServiceClient.prototype.updateUser = function (user) {
        return fetch(this.URL + '/api/user/update', {
            body: JSON.stringify(user),
            method: 'post',
            headers: {
                'content-type': 'application/json'
            }
        }).then(function (response) { return response.json(); });
    };
    UserServiceClient.prototype.registerUserByAdmin = function (user) {
        return fetch(this.URL + '/api/register/admin', {
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user),
            method: 'post'
        }).then(function (respose) { return respose.json(); });
    };
    UserServiceClient.prototype.updateUserByAdmin = function (user) {
        return fetch(this.URL + '/api/user/update/admin', {
            body: JSON.stringify(user),
            method: 'post',
            headers: {
                'content-type': 'application/json'
            }
        }).then(function (response) { return response.json(); });
    };
    UserServiceClient.prototype.deleteUser = function (id) {
        return fetch(this.URL + '/api/user/' + id, {
            method: 'delete'
        });
    };
    return UserServiceClient;
}());



/***/ }),

/***/ "./src/app/services/widget.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/widget.service.ts ***!
  \********************************************/
/*! exports provided: WidgetServiceClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetServiceClient", function() { return WidgetServiceClient; });
var WidgetServiceClient = /** @class */ (function () {
    function WidgetServiceClient() {
        this.URL = 'https://quiet-fjord-77462.herokuapp.com';
    }
    WidgetServiceClient.prototype.findAllWidgetsForDay = function (dayId) {
        return fetch(this.URL + '/api/day/' + dayId + '/widget')
            .then(function (response) { return response.json(); });
    };
    WidgetServiceClient.prototype.createWidget = function (dayId) {
        var widget = {};
        return fetch(this.URL + '/api/day/' + dayId + '/widget', {
            method: 'post',
            body: JSON.stringify(widget),
            headers: {
                'content-type': 'application/json'
            }
        }).then(function (response) { return response.json(); });
    };
    WidgetServiceClient.prototype.saveWidgets = function (widgets, dayId) {
        return fetch(this.URL + '/api/day/' + dayId + '/widget/save', {
            method: 'post',
            body: JSON.stringify(widgets),
            headers: {
                'content-type': 'application/json'
            }
        }).then(function (response) { return response.json(); });
    };
    WidgetServiceClient.prototype.deleteWidget = function (id) {
        return fetch(this.URL + '/api/widget/' + id, {
            method: 'delete'
        }).then(function (response) { return response.json(); });
    };
    return WidgetServiceClient;
}());



/***/ }),

/***/ "./src/app/widget-list/widget-list.component.css":
/*!*******************************************************!*\
  !*** ./src/app/widget-list/widget-list.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/widget-list/widget-list.component.html":
/*!********************************************************!*\
  !*** ./src/app/widget-list/widget-list.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div *ngFor=\"let widget of widgets\">\n  <div *ngIf=\"user.userType == 'Trainer' || user.userType == 'Admin'\">\n    <textarea [(ngModel)] = \"widget.text\"\n              class=\"form-control\">\n\n    </textarea>\n    <button routerLink=\"/schedule/{{scheduleId}}\"\n            style=\"color: red\"\n            class=\"btn btn-link\"\n            (click)=\"deleteWidget(widget.id)\">\n      X\n    </button>\n  </div>\n  <div *ngIf=\"user.userType == 'Member'\">\n    <ul>\n      <li>\n        {{widget.text}}\n      </li>\n    </ul>\n  </div>\n\n</div>\n<div *ngIf=\"user.userType == 'Trainer' || user.userType == 'Admin'\">\n  <button (click)=\"addWidget(dayId)\"\n          class=\"btn btn-link\">Add New Description</button>\n  <button (click)=\"saveWidgets()\"\n          class=\"btn btn-primary\">Save</button>\n\n</div>\n"

/***/ }),

/***/ "./src/app/widget-list/widget-list.component.ts":
/*!******************************************************!*\
  !*** ./src/app/widget-list/widget-list.component.ts ***!
  \******************************************************/
/*! exports provided: WidgetListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetListComponent", function() { return WidgetListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_widget_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/widget.service */ "./src/app/services/widget.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WidgetListComponent = /** @class */ (function () {
    function WidgetListComponent(userService, service, route, router) {
        var _this = this;
        this.userService = userService;
        this.service = service;
        this.route = route;
        this.router = router;
        this.widgets = [];
        this.user = {
            username: '',
            password: '',
            userType: '',
            firstName: '',
            lastName: '',
            email: '',
            schedule: {
                id: ''
            }
        };
        this.route.params.subscribe(function (params) { return _this.setParams(params); });
    }
    WidgetListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService
            .profile()
            .then(function (user) {
            return _this.user = user;
        });
    };
    WidgetListComponent.prototype.setParams = function (params) {
        this.dayId = params['dayId'];
        this.scheduleId = params['scheduleId'];
        this.loadWidgets();
    };
    WidgetListComponent.prototype.loadWidgets = function () {
        var _this = this;
        this.service.findAllWidgetsForDay(this.dayId)
            .then(function (widgets) { return _this.widgets = widgets; });
    };
    WidgetListComponent.prototype.addWidget = function (dayId) {
        var _this = this;
        this.service.createWidget(dayId)
            .then(function () { return _this.loadWidgets(); });
    };
    WidgetListComponent.prototype.saveWidgets = function () {
        var _this = this;
        this.service.saveWidgets(this.widgets, this.dayId)
            .then(function () { return _this.loadWidgets(); });
    };
    WidgetListComponent.prototype.deleteWidget = function (id) {
        var _this = this;
        this.service.deleteWidget(id)
            .then(function () { return _this.router.navigate['schedule/' + _this.scheduleId + '/day/' + _this.dayId + '/widget']; });
    };
    WidgetListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-widget-list',
            template: __webpack_require__(/*! ./widget-list.component.html */ "./src/app/widget-list/widget-list.component.html"),
            styles: [__webpack_require__(/*! ./widget-list.component.css */ "./src/app/widget-list/widget-list.component.css")]
        }),
        __metadata("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserServiceClient"],
            _services_widget_service__WEBPACK_IMPORTED_MODULE_1__["WidgetServiceClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], WidgetListComponent);
    return WidgetListComponent;
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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




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

module.exports = __webpack_require__(/*! D:\Northeastern\WebDev\Project\angular-client\angular-client\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map