webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/Pojo/login.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Login; });
var Login = (function () {
    function Login(userId, password) {
        this.userId = userId;
        this.password = password;
    }
    return Login;
}());



/***/ }),

/***/ "../../../../../src/Pojo/transaction.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Transaction; });
var Transaction = (function () {
    function Transaction(transactionId, userId, stockName, stockPrice, quantity, chargeBack, balanceInCurrency, balanceInDollar, transactionType, dateTime, currency, boughtId) {
        this.transactionId = transactionId;
        this.userId = userId;
        this.stockName = stockName;
        this.stockPrice = stockPrice;
        this.quantity = quantity;
        this.chargeBack = chargeBack;
        this.balanceInCurrency = balanceInCurrency;
        this.balanceInDollar = balanceInDollar;
        this.transactionType = transactionType;
        this.dateTime = dateTime;
        this.currency = currency;
        this.boughtId = boughtId;
    }
    return Transaction;
}());



/***/ }),

/***/ "../../../../../src/Pojo/user.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = (function () {
    function User(userId, password, firstName, lastName, role, age, gender, contactNo, emailId, address, city, zipCode, balance) {
        this.userId = userId;
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastName;
        this.role = role;
        this.age = age;
        this.gender = gender;
        this.contactNo = contactNo;
        this.emailId = emailId;
        this.address = address;
        this.city = city;
        this.zipCode = zipCode;
        this.balance = balance;
    }
    return User;
}());



/***/ }),

/***/ "../../../../../src/app/admin-display/admin-display.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin-display/admin-display.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<a  routerLink='/home' class=\"pull-right\"><button class=\"btn btn-primary\" >LogOut</button></a>\r\n<div class=\"panel panel-primary container\" align=\"center\">\r\n        <a><button class=\"btn btn-primary\" (click)=\"usersList()\" >Individual Users</button></a>\r\n        <a><button class=\"btn btn-primary\" (click)=\"fundsList()\">Fund Users</button></a>\r\n       \r\n    <div class=\"panel-heading\">\r\n        Client Information\r\n    </div>\r\n    <div class=\"panel-body\" *ngIf=\"userList\">\r\n      <div class=\"table-responsive\">\r\n       \r\n          <table class=\"table\">\r\n              <thead>\r\n                <tr>\r\n                  <th>User Id</th>\r\n                  <th>Name</th>\r\n                  <th>Balance</th>\r\n                </tr>\r\n              </thead>\r\n              <tbody>\r\n                <tr *ngFor=\"let user of userList\">\r\n                    <a routerLink='/individual-trade/{{user.userId}}'><td>{{user.userId}}</td></a>\r\n                    <td>{{user.firstName}}</td>\r\n                    <td>{{user.balance}}</td>\r\n                </tr>\r\n              </tbody>\r\n  \r\n          </table>\r\n      </div>\r\n        \r\n    </div>\r\n\r\n    <div class=\"panel-body\" *ngIf=\"fundList\">\r\n      <div class=\"table-responsive\">\r\n       \r\n          <table class=\"table\">\r\n              <thead>\r\n                <tr>\r\n                  <th>Fund Id</th>\r\n                  <th>Name</th>\r\n                  <th>Balance</th>\r\n                </tr>\r\n              </thead>\r\n              <tbody>\r\n                <tr *ngFor=\"let fund of fundList\">\r\n                    <td>{{fund.fundId}}</td>\r\n                    <td>{{fund.fundName}}</td>\r\n                    <td>{{fund.fundBalance}}</td>\r\n                </tr>\r\n              </tbody>\r\n  \r\n          </table>\r\n      </div>\r\n        \r\n    </div>\r\n        \r\n  </div>\r\n"

/***/ }),

/***/ "../../../../../src/app/admin-display/admin-display.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminDisplayComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Pojo_login__ = __webpack_require__("../../../../../src/Pojo/login.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_service__ = __webpack_require__("../../../../../src/app/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Pojo_user__ = __webpack_require__("../../../../../src/Pojo/user.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AdminDisplayComponent = (function () {
    function AdminDisplayComponent(userservice, route, router) {
        this.userservice = userservice;
        this.route = route;
        this.router = router;
        this.user = new __WEBPACK_IMPORTED_MODULE_4__Pojo_user__["a" /* User */](undefined, '', '', '', '', undefined, '', '', '', '', '', '', 10000);
        this.newLogin = new __WEBPACK_IMPORTED_MODULE_2__Pojo_login__["a" /* Login */](undefined, "");
    }
    AdminDisplayComponent.prototype.loginadmin = function (login) {
        var _this = this;
        console.dir(login);
        this.userservice.loginAdmin(login).then(function (user) {
            if (user.password == null) {
                _this.router.navigateByUrl('/adminlogin');
            }
            _this.userservice.getIndividualUsers().then(function (userlist) { _this.userList = userlist; });
            _this.user = user;
        });
    };
    AdminDisplayComponent.prototype.fundsList = function () {
        var _this = this;
        this.userservice.getFundList().then(function (fundlist) { _this.fundList = fundlist; });
        this.userList = null;
    };
    AdminDisplayComponent.prototype.usersList = function () {
        var _this = this;
        this.userservice.getIndividualUsers().then(function (userlist) { _this.userList = userlist; });
        this.fundList = null;
    };
    AdminDisplayComponent.prototype.ngOnInit = function () {
        var userId = +this.route.snapshot.paramMap.get('userId');
        var password = this.route.snapshot.paramMap.get('password');
        this.newLogin.userId = userId;
        this.newLogin.password = password;
        this.loginadmin(this.newLogin);
        //this.userservice.getIndividualUsers().then(userlist=>{this.userList=userlist});
    };
    AdminDisplayComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-admin-display',
            template: __webpack_require__("../../../../../src/app/admin-display/admin-display.component.html"),
            styles: [__webpack_require__("../../../../../src/app/admin-display/admin-display.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], AdminDisplayComponent);
    return AdminDisplayComponent;
}());



/***/ }),

/***/ "../../../../../src/app/adminlogin/adminlogin.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/adminlogin/adminlogin.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-6 col-md-offset-3\" >\r\n    <h2 align='center'>Login</h2>\r\n    <br/>\r\n    <form name=\"form\" >\r\n        <div class=\"form-group\">\r\n            <label>Username</label>\r\n            <input type=\"text\" class=\"form-control\" name=\"username\" [(ngModel)]=\"userId\"/>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label>Password</label>\r\n            <input type=\"password\" class=\"form-control\" name=\"password\" [(ngModel)]=\"password\">\r\n        </div>\r\n        <br/> \r\n        <br/>\r\n\r\n        <div >\r\n            <button class=\"btn btn-primary\" routerLink=\"/displayAdmin/{{userId}}/{{password}}\">Login</button> \r\n        </div>\r\n\r\n    </form>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/adminlogin/adminlogin.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminloginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AdminloginComponent = (function () {
    function AdminloginComponent() {
    }
    AdminloginComponent.prototype.ngOnInit = function () {
    };
    AdminloginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-adminlogin',
            template: __webpack_require__("../../../../../src/app/adminlogin/adminlogin.component.html"),
            styles: [__webpack_require__("../../../../../src/app/adminlogin/adminlogin.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AdminloginComponent);
    return AdminloginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://maxcdn.bootstrapcdn.com/font-awesome/4.6.0/css/font-awesome.min.css);", ""]);

// module
exports.push([module.i, ".bg-dark {\r\n    background-color: #343a40!important;\r\n}\r\n.navbar-header{\r\n  margin-left:5px;\r\n  width:100%;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\r\n<html lang=\"en\">\r\n    <head>\r\n      <title></title>\r\n      <meta charset=\"UTF-8\">\r\n      <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\r\n      <link href=\"/node_modules/bootstrap/dist/css/bootstrap.css\" rel=\"stylesheet\">\r\n    </head>\r\n\r\n    <body>\r\n      \r\n   \r\n    <nav class=\"navbar navbar-expand-md navbar-dark bg-dark fixed-top\" role=\"navigation\">\r\n      <div class=\"navbar-header\">\r\n        <a href=\"#\" type=\"button\" class=\"btn btn-default navbar-btn pull-right\">Contact Us</a>\r\n        <a href=\"#\" type=\"button\" class=\"btn btn-default navbar-btn pull-right\">About Us</a>\r\n        <a href=\"#\" type=\"button\" class=\"btn btn-default navbar-btn pull-right\">Home</a>\r\n        <a class=\"navbar-brand text-white\" href=\"#\" style=\"color: white\">Charge Back Calculation</a>\r\n      </div>\r\n    </nav>\r\n\r\n    \r\n\r\n    <router-outlet></router-outlet>\r\n    \r\n\r\n\r\n</body>\r\n\r\n</html>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__register_register_component__ = __webpack_require__("../../../../../src/app/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__user_user_component__ = __webpack_require__("../../../../../src/app/user/user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__user_service__ = __webpack_require__("../../../../../src/app/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__display_display_component__ = __webpack_require__("../../../../../src/app/display/display.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__adminlogin_adminlogin_component__ = __webpack_require__("../../../../../src/app/adminlogin/adminlogin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__admin_display_admin_display_component__ = __webpack_require__("../../../../../src/app/admin-display/admin-display.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__individual_trade_individual_trade_component__ = __webpack_require__("../../../../../src/app/individual-trade/individual-trade.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_6__register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_7__user_user_component__["a" /* UserComponent */],
                __WEBPACK_IMPORTED_MODULE_8__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_11__display_display_component__["a" /* DisplayComponent */],
                __WEBPACK_IMPORTED_MODULE_12__adminlogin_adminlogin_component__["a" /* AdminloginComponent */],
                __WEBPACK_IMPORTED_MODULE_13__admin_display_admin_display_component__["a" /* AdminDisplayComponent */],
                __WEBPACK_IMPORTED_MODULE_14__individual_trade_individual_trade_component__["a" /* IndividualTradeComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */].forRoot([
                    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_6__register_register_component__["a" /* RegisterComponent */] },
                    { path: 'users', component: __WEBPACK_IMPORTED_MODULE_7__user_user_component__["a" /* UserComponent */] },
                    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_5__login_login_component__["a" /* LoginComponent */] },
                    { path: 'login/:userId', component: __WEBPACK_IMPORTED_MODULE_5__login_login_component__["a" /* LoginComponent */] },
                    { path: '', component: __WEBPACK_IMPORTED_MODULE_8__home_home_component__["a" /* HomeComponent */] },
                    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_8__home_home_component__["a" /* HomeComponent */] },
                    { path: 'display/:userId/:password', component: __WEBPACK_IMPORTED_MODULE_11__display_display_component__["a" /* DisplayComponent */] },
                    { path: 'displayAdmin/:userId/:password', component: __WEBPACK_IMPORTED_MODULE_13__admin_display_admin_display_component__["a" /* AdminDisplayComponent */] },
                    { path: 'adminlogin', component: __WEBPACK_IMPORTED_MODULE_12__adminlogin_adminlogin_component__["a" /* AdminloginComponent */] },
                    { path: 'individual-trade/:userId', component: __WEBPACK_IMPORTED_MODULE_14__individual_trade_individual_trade_component__["a" /* IndividualTradeComponent */] }
                ])
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_9__user_service__["a" /* UserService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/display/display.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/display/display.component.html":
/***/ (function(module, exports) {

module.exports = "<a  routerLink='/home' class=\"pull-right\"><button class=\"btn btn-primary\" >LogOut</button></a>\r\n<div class=\"panel panel-primary container\" align=\"center\">\r\n        <a><button class=\"btn btn-primary\" (click)=\"boughtStock()\" >Bought</button></a>\r\n        <a><button class=\"btn btn-primary\" (click)=\"soldStock()\">Sold</button></a>\r\n        <h3 align=\"right\"> Hello {{newUser.firstName}}</h3>\r\n        <h3 align=\"right\"> Current Balance:${{newUser.balance}}</h3>\r\n        \r\n    <div class=\"panel-heading\">\r\n        Transaction Information\r\n    </div>\r\n    <div class=\"panel-body\">\r\n      <div class=\"table-responsive\">\r\n       \r\n          <table class=\"table\">\r\n              <thead>\r\n                <tr>\r\n                  <th>Transaction Id</th>\r\n                  <th>Stock Name</th>\r\n                  <th>Stock Price</th>\r\n                  <th>Quantity</th>\r\n                  <th>Charge Back</th>\r\n                  <th>Balance(in $)</th>\r\n                </tr>\r\n              </thead>\r\n              <tbody>\r\n                <tr *ngFor=\"let transaction of transactionList\">\r\n                    <td>{{transaction.transactionId}}</td>\r\n                    <td>{{transaction.stockName}}</td>\r\n                    <td>{{transaction.stockPrice}}</td>\r\n                    <td>{{transaction.quantity}}</td>\r\n                    <td>{{transaction.chargeBack}}</td>\r\n                    <td>{{transaction.balanceInDollar}}</td> \r\n                </tr>\r\n              </tbody>\r\n  \r\n          </table>\r\n      </div>\r\n        \r\n    </div>\r\n        \r\n  </div>"

/***/ }),

/***/ "../../../../../src/app/display/display.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DisplayComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Pojo_login__ = __webpack_require__("../../../../../src/Pojo/login.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_service__ = __webpack_require__("../../../../../src/app/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Pojo_user__ = __webpack_require__("../../../../../src/Pojo/user.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var DisplayComponent = (function () {
    function DisplayComponent(userservice, route, router) {
        this.userservice = userservice;
        this.route = route;
        this.router = router;
        this.newUser = new __WEBPACK_IMPORTED_MODULE_4__Pojo_user__["a" /* User */](undefined, '', '', '', '', undefined, '', '', '', '', '', '', 10000);
        this.newLogin = new __WEBPACK_IMPORTED_MODULE_2__Pojo_login__["a" /* Login */](undefined, "");
    }
    DisplayComponent.prototype.boughtStock = function () {
        var _this = this;
        this.userservice.boughtStockAll(this.newLogin.userId).then(function (transactionList) { _this.transactionList = transactionList; });
    };
    DisplayComponent.prototype.soldStock = function () {
        var _this = this;
        this.userservice.soldStock(this.newLogin.userId).then(function (transactionList) { _this.transactionList = transactionList; });
    };
    DisplayComponent.prototype.loginUser = function (login) {
        var _this = this;
        console.dir(login);
        this.userservice.loginUser(login).then(function (userAndTransactions) {
            console.log(userAndTransactions);
            if (userAndTransactions.user == null) {
                _this.router.navigateByUrl('/login');
            }
            _this.newUser = userAndTransactions.user,
                _this.transactionList = userAndTransactions.transactionList;
        });
    };
    DisplayComponent.prototype.ngOnInit = function () {
        var userId = +this.route.snapshot.paramMap.get('userId');
        var password = this.route.snapshot.paramMap.get('password');
        this.newLogin.userId = userId;
        this.newLogin.password = password;
        this.loginUser(this.newLogin);
    };
    DisplayComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-display',
            template: __webpack_require__("../../../../../src/app/display/display.component.html"),
            styles: [__webpack_require__("../../../../../src/app/display/display.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], DisplayComponent);
    return DisplayComponent;
}());



/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".img-contains{\r\n    position: relative;\r\n}\r\n.img-contains div {\r\n    position: relative;\r\n    z-index: 2;\r\n}\r\n.img-contains .img-back{\r\n    position: absolute;\r\n    opacity: 0.4;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "    \r\n\r\n    <div  class =\"img-contains\" >\r\n\r\n        <img class=\"img-fluid img-back\" src=\"http://www.facenet.org/wp-content/themes/executive/assets/images/header.jpg\" width=\"100%\" height=\"520\" >\r\n        \r\n        <div>\r\n            <div class=\"container mb-5\" >\r\n                <div class=\"row\">\r\n                    <div>\r\n                        <h2 class=\"display-4\">Welcome</h2>\r\n                        <hr class=\"bg-dark w-25 ml-0\">\r\n                        <p  class=\"lead\" >\r\n                        ChargeBack Calculation (CBC) is a system used for determining portfolio transaction costs driven by client cash flows, and to charge those costs back to the appropriate clients. Charge back is calculated by the Bank Representative at the time of buying or selling a stock for a client or for a fund (fund is a group of clients, they can be from different countries) irrespective of profit or loss.\r\n                        </p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <br/><br/><br/>\r\n            <div class=\"container container mt-4 mb-5\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-4\">\r\n                        <div class=\"card\" align=\"center\">\r\n                            <img class=\"card-img-top\" src=\"https://genomics.tamu.edu/public/assets/uploads/2016/10/TIGSS_Cluster_Account_Stock_Photo.png\"  width=\"100\" height=\"100\" >\r\n                            <div class=\"card-block p-3\" >\r\n                                <h4 class=\"card-title\" > Individual User</h4>\r\n            \r\n                                <a routerLink=\"/login\"><button class=\"btn btn-primary\" >Login</button></a>\r\n                                <a routerLink=\"/register\"><button class=\"btn btn-primary\" >Register</button></a>                \r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-md-4\">\r\n                        <div class=\"card\" align=\"center\">\r\n                            <img class=\"card-img-top\" src=\"https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Conferences.svg/200px-Conferences.svg.png\" width=\"100\" height=\"100\" >\r\n                            <div class=\"card-block p-3\">\r\n                                <h4 class=\"card-title\"> Fund User</h4>\r\n                                <a routerLink=\"/login\"><button class=\"btn btn-primary\" >Login</button></a>\r\n                                <a routerLink=\"/register\"><button class=\"btn btn-primary\" >Register</button></a>                      \r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-md-4\">\r\n                        <div class=\"card\" align=\"center\">\r\n                            <img class=\"card-img-top\" src=\"https://cdn1.iconfinder.com/data/icons/profession-avatar-solid-2/48/54-512.png\" width=\"100\" height=\"100\">\r\n                            <div class=\"card-block p-3\">\r\n                                <h4 class=\"card-title\" > Bank Representative</h4>\r\n                                <a routerLink=\"/adminlogin\"><button class=\"btn btn-primary\" >Login</button></a>\r\n                               \r\n                                \r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!-- <hr class=\"bg-white mx-4 mt-2 mb-1\"> -->\r\n"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/individual-trade/individual-trade.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/individual-trade/individual-trade.component.html":
/***/ (function(module, exports) {

module.exports = "<a  routerLink='/home' class=\"pull-right\"><button class=\"btn btn-primary\" >LogOut</button></a>\r\n<div class=\"panel panel-primary container\" align=\"center\">\r\n        <a><button class=\"btn btn-primary\" (click)=\"buy()\" >Buy</button></a>\r\n        <a><button class=\"btn btn-primary\" (click)=\"sell()\">Sell</button></a>\r\n        <h3 align=\"right\"> Trading for: {{user.firstName}}</h3>\r\n        <h3 align=\"right\"> Current Balance:${{user.balance}}</h3>\r\n        \r\n    <div class=\"panel-heading\">\r\n        Client Information\r\n    </div>\r\n    <div class=\"panel-body\" *ngIf=\"stockList\">\r\n      <div class=\"table-responsive\">\r\n       \r\n          <table class=\"table\">\r\n              <thead>\r\n                <tr>\r\n                  <th>Index</th>\r\n                  <th>Stock Name</th>\r\n                  <th>Stock Price</th>\r\n                  <th>Quantity</th>\r\n                  <th>Charge Back</th>\r\n                  <th>!!It's Time!!</th>\r\n                </tr>\r\n              </thead>\r\n              <tbody>\r\n                <tr *ngFor=\"let stock of stockList; index as i\">\r\n                  <td>{{i+1}}</td>\r\n                    <td>{{stock.name}}</td>\r\n                    <td>{{stock.price}}</td>\r\n                    <td><input type=\"number\" #quantity [(ngModel)]=\"quantities[i]\" (keyup)=\"calculateChargeBack(quantities[i],stock.price,i)\"></td>\r\n                    <td>{{chargeBack[i]}}</td>\r\n                    <td><button type=\"btn btn-primary\" (click)=\"commitBuy(stock,quantities[i],i)\">Buy</button></td>\r\n                </tr>\r\n              </tbody>\r\n  \r\n          </table>\r\n      </div>\r\n        \r\n    </div>\r\n\r\n\r\n    <div class=\"panel-body\" *ngIf=\"transactionList\">\r\n      <div class=\"table-responsive\">\r\n       \r\n           <table class=\"table\">\r\n              <thead>\r\n                <tr>\r\n                  <th>Transaction Id</th>\r\n                  <th>Stock Name</th>\r\n                  <th>Stock Price</th>\r\n                  <th>Quantity</th>\r\n                  <th>CurrentPrice</th>\r\n                   <th>Charge Back</th>\r\n                  <th>!!It's Time!!</th>\r\n                </tr>\r\n              </thead>\r\n              <tbody>\r\n                <tr *ngFor=\"let transxn of transactionList;  index as i\">\r\n                  \r\n                    <td>{{transxn.transactionId}}</td>\r\n                    <td>{{transxn.stockName}}</td>\r\n                    <td>{{transxn.stockPrice}}</td>\r\n                    <td>{{transxn.quantity}}</td>\r\n                    <td><input type=\"number\" #currentPrice [(ngModel)]=\"currentPrices[i]\" (keyup)=\"calculateChargeBackForSell(currentPrices[i],transxn.quantity,i)\"></td>\r\n                    <td>{{chargeBackForSell[i]}}</td>\r\n                    <td><button type=\"btn btn-primary\" (click)=\"commitSell(transxn,i)\">Sell</button></td>\r\n                    \r\n                </tr>\r\n              </tbody>\r\n  \r\n          </table>\r\n      </div>\r\n        \r\n    </div>\r\n        \r\n  </div>"

/***/ }),

/***/ "../../../../../src/app/individual-trade/individual-trade.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IndividualTradeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_service__ = __webpack_require__("../../../../../src/app/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Pojo_transaction__ = __webpack_require__("../../../../../src/Pojo/transaction.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var IndividualTradeComponent = (function () {
    function IndividualTradeComponent(userservice, route) {
        this.userservice = userservice;
        this.route = route;
        this.transaction = new __WEBPACK_IMPORTED_MODULE_3__Pojo_transaction__["a" /* Transaction */](undefined, undefined, "", undefined, undefined, undefined, undefined, undefined, "", "", "", undefined);
    }
    IndividualTradeComponent.prototype.calculateChargeBack = function (quantity, price, index) {
        console.log(quantity + " q:p " + price);
        this.chargeBack[index] = quantity * price / 100;
    };
    IndividualTradeComponent.prototype.calculateChargeBackForSell = function (price, quantity, index) {
        console.log(quantity + " q:p " + price);
        this.chargeBackForSell[index] = quantity * price / 100;
    };
    IndividualTradeComponent.prototype.buy = function () {
        var _this = this;
        this.userservice.stockPrice().then(function (stockList) {
            _this.stockList = stockList;
            _this.quantities = Array(stockList.length).fill(0);
            _this.chargeBack = Array(stockList.length).fill(0);
        });
        this.userservice.findUser(this.userId).then(function (user) { _this.user = user; });
        this.transactionList = null;
    };
    IndividualTradeComponent.prototype.sell = function () {
        var _this = this;
        this.userservice.boughtStock(this.userId).then(function (transactionList) {
            _this.transactionList = transactionList;
            _this.currentPrices = Array(transactionList.length).fill(0);
            _this.chargeBackForSell = Array(transactionList.length).fill(0);
        });
        //this.userservice.stockPrice().then(stockListForSell=>{this.stockListForSell=stockListForSell});
        this.userservice.findUser(this.userId).then(function (user) { _this.user = user; });
        this.stockList = null;
    };
    IndividualTradeComponent.prototype.commitBuy = function (stock, quantity, index) {
        var _this = this;
        this.transaction.userId = this.user.userId;
        this.transaction.transactionType = "BUY";
        this.transaction.stockPrice = stock.price;
        this.transaction.chargeBack = this.chargeBack[index];
        this.transaction.stockName = stock.name;
        this.transaction.quantity = quantity;
        this.transaction.balanceInDollar = this.user.balance - this.chargeBack[index] - stock.price * this.transaction.quantity;
        this.userservice.commitBuyOrSell(this.transaction).then(function (transaction) {
            _this.user.balance = transaction.balanceInDollar;
            _this.userservice.boughtStock(_this.userId).then(function (transactionList) {
                _this.transactionList = transactionList;
                _this.currentPrices = Array(transactionList.length).fill(0);
                _this.chargeBackForSell = Array(transactionList.length).fill(0);
            });
            _this.stockList = null;
        });
    };
    IndividualTradeComponent.prototype.commitSell = function (transxn, index) {
        var _this = this;
        console.log("commit sell called for : " + transxn.userId);
        this.transaction.userId = transxn.userId;
        this.transaction.transactionType = "SELL";
        this.transaction.stockPrice = this.currentPrices[index];
        this.transaction.chargeBack = this.chargeBackForSell[index]; //this.chargeBack[index];
        this.transaction.stockName = transxn.stockName;
        this.transaction.quantity = transxn.quantity;
        this.transaction.balanceInDollar = this.user.balance - this.chargeBackForSell[index] + transxn.quantity * this.currentPrices[index];
        this.transaction.boughtId = transxn.transactionId;
        this.userservice.commitBuyOrSell(this.transaction).then(function (transaction) {
            _this.user.balance = transaction.balanceInDollar;
            _this.userservice.boughtStock(_this.userId).then(function (transactionList) {
                _this.transactionList = transactionList;
                _this.currentPrices = Array(transactionList.length).fill(0);
                _this.chargeBackForSell = Array(transactionList.length).fill(0);
            });
        });
    };
    IndividualTradeComponent.prototype.getCurrentPrice = function (stockName) {
        var _this = this;
        this.userservice.getCurrentPrice(stockName).then(function (stockPrice) { _this.stock = stockPrice; });
    };
    IndividualTradeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userId = +this.route.snapshot.paramMap.get('userId');
        this.userservice.findUser(this.userId).then(function (user) { _this.user = user; });
        this.userservice.stockPrice().then(function (stockList) {
            _this.stockList = stockList;
            _this.quantities = Array(stockList.length).fill(0);
            _this.chargeBack = Array(stockList.length).fill(0);
        });
    };
    IndividualTradeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-individual-trade',
            template: __webpack_require__("../../../../../src/app/individual-trade/individual-trade.component.html"),
            styles: [__webpack_require__("../../../../../src/app/individual-trade/individual-trade.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]])
    ], IndividualTradeComponent);
    return IndividualTradeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<h3 align=\"center\" *ngIf = (message)>{{message}}</h3>\r\n<div class=\"col-md-6 col-md-offset-3\" >\r\n    <h2 align='center'>Login</h2>\r\n    <br/>\r\n    <form name=\"form\" >\r\n        <div class=\"form-group\">\r\n            <label>Username</label>\r\n            <input type=\"text\" class=\"form-control\" name=\"username\" [(ngModel)]=\"userId\"/>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label>Password</label>\r\n            <input type=\"password\" class=\"form-control\" name=\"password\" [(ngModel)]=\"password\">\r\n        </div>\r\n        <br/> \r\n        <br/>\r\n\r\n        <div >\r\n            <button class=\"btn btn-primary\" routerLink=\"/display/{{userId}}/{{password}}\">Login</button>\r\n            <a routerLink=\"/register\"><button class=\"btn btn-primary\" >Register for New User</button></a> \r\n        </div>\r\n\r\n    </form>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_service__ = __webpack_require__("../../../../../src/app/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = (function () {
    function LoginComponent(userservice, route) {
        this.userservice = userservice;
        this.route = route;
        this.message = '';
    }
    LoginComponent.prototype.ngOnInit = function () {
        var id = +this.route.snapshot.paramMap.get('userId');
        console.log(id);
        if (id != 0)
            this.message = "Registered  Successfully !!! your userId is " + id;
        else {
            this.message = "";
        }
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <div class=\"row\">\r\n        <form class=\"form-horizontal\">\r\n            <fieldset>\r\n\r\n\r\n                <legend>Register</legend>\r\n\r\n\r\n                <div class=\"form-group\">\r\n                    <label class=\"col-md-4 control-label\" for=\"Name\">First Name</label>\r\n                    <div class=\"col-md-5\">\r\n                        <input id=\"Name\" name=\"Name\" type=\"text\" placeholder=\"First name\" class=\"form-control input-md\" required=\"\" [(ngModel)]=\"newUser.firstName\">\r\n\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"form-group\">\r\n                    <label class=\"col-md-4 control-label\" for=\"Name\">Last Name</label>\r\n                    <div class=\"col-md-5\">\r\n                        <input id=\"Name\" name=\"Name\" type=\"text\" placeholder=\"Last name\" class=\"form-control input-md\" required=\"\" [(ngModel)]=\"newUser.lastName\">\r\n\r\n                    </div>\r\n                </div>\r\n\r\n\r\n                <div class=\"form-group\">\r\n                    <label class=\"col-md-4 control-label\" for=\"passwordinput\">Password</label>\r\n                    <div class=\"col-md-5\">\r\n                        <input id=\"passwordinput\" name=\"passwordinput\" type=\"password\" placeholder=\"\" class=\"form-control input-md\" required=\"\" [(ngModel)]=\"newUser.password\">\r\n                        <span class=\"help-block\">Min 8 characters</span>\r\n                    </div>\r\n                </div>\r\n\r\n\r\n                <div class=\"form-group\">\r\n                    <label class=\"col-md-4 control-label\" for=\"confirm_password\">Confirm Password</label>\r\n                    <div class=\"col-md-5\">\r\n                        <input id=\"confirm_password\" name=\"confirm_password\" type=\"password\" placeholder=\"Re-type password\" class=\"form-control input-md\"\r\n                            required=\"\">\r\n\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"form-group\">\r\n                    <label class=\"col-md-4 control-label\" for=\"role\">Role</label>\r\n                    <div class=\"col-md-4\">\r\n                        <label class=\"radio-inline\" for=\"role-0\">\r\n                            <input type=\"radio\" name=\"role\" id=\"role-0\" value=\"IndividualUser\" checked=\"checked\" [(ngModel)]=\"newUser.role\">\r\n                                Individual User (INDL)\r\n                         </label>\r\n                        <br/>\r\n                        <label class=\"radio-inline\" for=\"role-1\">\r\n                            <input type=\"radio\" name=\"role\" id=\"role-1\" value=\"FundUser\" checked=\"checked\" [(ngModel)]=\"newUser.role\">\r\n                                Fund User (FUND)\r\n                        </label>\r\n                        <br/>\r\n                        <label class=\"radio-inline\" for=\"role-2\">\r\n                            <input type=\"radio\" name=\"role\" id=\"role-2\" value=\"BankRepresentative\" checked=\"checked\" [(ngModel)]=\"newUser.role\">\r\n                                Bank Representative (ADMIN)\r\n                        </label>\r\n                    </div>\r\n                </div>\r\n\r\n\r\n                <div class=\"form-group\">\r\n                    <label class=\"col-md-4 control-label\" for=\"gender\">Gender</label>\r\n                    <div class=\"col-md-4\">\r\n                        <label class=\"radio-inline\" for=\"gender-0\">\r\n                            <input type=\"radio\" name=\"gender\" id=\"gender-0\" value=\"Male\" checked=\"checked\" [(ngModel)]=\"newUser.gender\">\r\n                                Male\r\n                        </label>\r\n                        <label class=\"radio-inline\" for=\"gender-1\">\r\n                            <input type=\"radio\" name=\"gender\" id=\"gender-1\" value=\"Female\" [(ngModel)]=\"newUser.gender\">\r\n                                Female\r\n                        </label>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"form-group\">\r\n                    <label class=\"col-md-4 control-label\" for=\"Age\">Age</label>\r\n                    <div class=\"col-md-5\">\r\n                        <input id=\"Age\" name=\"Age\" type=\"number\" class=\"form-control input-md\" required=\"\" [(ngModel)]=\"newUser.age\">\r\n\r\n                    </div>\r\n                </div>\r\n\r\n\r\n                <div class=\"form-group\">\r\n                    <label class=\"col-md-4 control-label\" for=\"address\">Address</label>\r\n                    <div class=\"col-md-4\">\r\n                        <textarea class=\"form-control\" id=\"address\" name=\"address\" [(ngModel)]=\"newUser.address\"></textarea>\r\n                    </div>\r\n                </div>\r\n\r\n\r\n                <div class=\"form-group\">\r\n                    <label class=\"col-md-4 control-label\" for=\"country\">Country</label>\r\n                    <div class=\"col-md-5\">\r\n                        <select id=\"country\" name=\"country\" class=\"form-control\" [(ngModel)]=\"newUser.city\">\r\n                        <option value=\"\">Country...</option>\r\n                        <option value=\"Afghanistan\">Afghanistan</option>\r\n                        <option value=\"Albania\">Albania</option>\r\n                        <option value=\"Algeria\">Algeria</option>\r\n                        <option value=\"American Samoa\">American Samoa</option>\r\n                        <option value=\"Andorra\">Andorra</option>\r\n                        <option value=\"Angola\">Angola</option>\r\n                        <option value=\"Anguilla\">Anguilla</option>\r\n                        <option value=\"Antigua &amp; Barbuda\">Antigua &amp; Barbuda</option>\r\n                        <option value=\"Argentina\">Argentina</option>\r\n                        <option value=\"Armenia\">Armenia</option>\r\n                        <option value=\"Aruba\">Aruba</option>\r\n                        <option value=\"Australia\">Australia</option>\r\n                        <option value=\"Austria\">Austria</option>\r\n                        <option value=\"Azerbaijan\">Azerbaijan</option>\r\n                        <option value=\"Bahamas\">Bahamas</option>\r\n                        <option value=\"Bahrain\">Bahrain</option>\r\n                        <option value=\"Bangladesh\">Bangladesh</option>\r\n                        <option value=\"Barbados\">Barbados</option>\r\n                        <option value=\"Belarus\">Belarus</option>\r\n                        <option value=\"Belgium\">Belgium</option>\r\n                        <option value=\"Belize\">Belize</option>\r\n                        <option value=\"Benin\">Benin</option>\r\n                        <option value=\"Bermuda\">Bermuda</option>\r\n                        <option value=\"Bhutan\">Bhutan</option>\r\n                        <option value=\"Bolivia\">Bolivia</option>\r\n                        <option value=\"Bonaire\">Bonaire</option>\r\n                        <option value=\"Bosnia &amp; Herzegovina\">Bosnia &amp; Herzegovina</option>\r\n                        <option value=\"Botswana\">Botswana</option>\r\n                        <option value=\"Brazil\">Brazil</option>\r\n                        <option value=\"British Indian Ocean Ter\">British Indian Ocean Ter</option>\r\n                        <option value=\"Brunei\">Brunei</option>\r\n                        <option value=\"Bulgaria\">Bulgaria</option>\r\n                        <option value=\"Burkina Faso\">Burkina Faso</option>\r\n                        <option value=\"Burundi\">Burundi</option>\r\n                        <option value=\"Cambodia\">Cambodia</option>\r\n                        <option value=\"Cameroon\">Cameroon</option>\r\n                        <option value=\"Canada\">Canada</option>\r\n                        <option value=\"Canary Islands\">Canary Islands</option>\r\n                        <option value=\"Cape Verde\">Cape Verde</option>\r\n                        <option value=\"Cayman Islands\">Cayman Islands</option>\r\n                        <option value=\"Central African Republic\">Central African Republic</option>\r\n                        <option value=\"Chad\">Chad</option>\r\n                        <option value=\"Channel Islands\">Channel Islands</option>\r\n                        <option value=\"Chile\">Chile</option>\r\n                        <option value=\"China\">China</option>\r\n                        <option value=\"Christmas Island\">Christmas Island</option>\r\n                        <option value=\"Cocos Island\">Cocos Island</option>\r\n                        <option value=\"Colombia\">Colombia</option>\r\n                        <option value=\"Comoros\">Comoros</option>\r\n                        <option value=\"Congo\">Congo</option>\r\n                        <option value=\"Cook Islands\">Cook Islands</option>\r\n                        <option value=\"Costa Rica\">Costa Rica</option>\r\n                        <option value=\"Cote DIvoire\">Cote D'Ivoire</option>\r\n                        <option value=\"Croatia\">Croatia</option>\r\n                        <option value=\"Cuba\">Cuba</option>\r\n                        <option value=\"Curaco\">Curacao</option>\r\n                        <option value=\"Cyprus\">Cyprus</option>\r\n                        <option value=\"Czech Republic\">Czech Republic</option>\r\n                        <option value=\"Denmark\">Denmark</option>\r\n                        <option value=\"Djibouti\">Djibouti</option>\r\n                        <option value=\"Dominica\">Dominica</option>\r\n                        <option value=\"Dominican Republic\">Dominican Republic</option>\r\n                        <option value=\"East Timor\">East Timor</option>\r\n                        <option value=\"Ecuador\">Ecuador</option>\r\n                        <option value=\"Egypt\">Egypt</option>\r\n                        <option value=\"El Salvador\">El Salvador</option>\r\n                        <option value=\"Equatorial Guinea\">Equatorial Guinea</option>\r\n                        <option value=\"Eritrea\">Eritrea</option>\r\n                        <option value=\"Estonia\">Estonia</option>\r\n                        <option value=\"Ethiopia\">Ethiopia</option>\r\n                        <option value=\"Falkland Islands\">Falkland Islands</option>\r\n                        <option value=\"Faroe Islands\">Faroe Islands</option>\r\n                        <option value=\"Fiji\">Fiji</option>\r\n                        <option value=\"Finland\">Finland</option>\r\n                        <option value=\"France\">France</option>\r\n                        <option value=\"French Guiana\">French Guiana</option>\r\n                        <option value=\"French Polynesia\">French Polynesia</option>\r\n                        <option value=\"French Southern Ter\">French Southern Ter</option>\r\n                        <option value=\"Gabon\">Gabon</option>\r\n                        <option value=\"Gambia\">Gambia</option>\r\n                        <option value=\"Georgia\">Georgia</option>\r\n                        <option value=\"Germany\">Germany</option>\r\n                        <option value=\"Ghana\">Ghana</option>\r\n                        <option value=\"Gibraltar\">Gibraltar</option>\r\n                        <option value=\"Great Britain\">Great Britain</option>\r\n                        <option value=\"Greece\">Greece</option>\r\n                        <option value=\"Greenland\">Greenland</option>\r\n                        <option value=\"Grenada\">Grenada</option>\r\n                        <option value=\"Guadeloupe\">Guadeloupe</option>\r\n                        <option value=\"Guam\">Guam</option>\r\n                        <option value=\"Guatemala\">Guatemala</option>\r\n                        <option value=\"Guinea\">Guinea</option>\r\n                        <option value=\"Guyana\">Guyana</option>\r\n                        <option value=\"Haiti\">Haiti</option>\r\n                        <option value=\"Hawaii\">Hawaii</option>\r\n                        <option value=\"Honduras\">Honduras</option>\r\n                        <option value=\"Hong Kong\">Hong Kong</option>\r\n                        <option value=\"Hungary\">Hungary</option>\r\n                        <option value=\"Iceland\">Iceland</option>\r\n                        <option value=\"India\">India</option>\r\n                        <option value=\"Indonesia\">Indonesia</option>\r\n                        <option value=\"Iran\">Iran</option>\r\n                        <option value=\"Iraq\">Iraq</option>\r\n                        <option value=\"Ireland\">Ireland</option>\r\n                        <option value=\"Isle of Man\">Isle of Man</option>\r\n                        <option value=\"Israel\">Israel</option>\r\n                        <option value=\"Italy\">Italy</option>\r\n                        <option value=\"Jamaica\">Jamaica</option>\r\n                        <option value=\"Japan\">Japan</option>\r\n                        <option value=\"Jordan\">Jordan</option>\r\n                        <option value=\"Kazakhstan\">Kazakhstan</option>\r\n                        <option value=\"Kenya\">Kenya</option>\r\n                        <option value=\"Kiribati\">Kiribati</option>\r\n                        <option value=\"Korea North\">Korea North</option>\r\n                        <option value=\"Korea Sout\">Korea South</option>\r\n                        <option value=\"Kuwait\">Kuwait</option>\r\n                        <option value=\"Kyrgyzstan\">Kyrgyzstan</option>\r\n                        <option value=\"Laos\">Laos</option>\r\n                        <option value=\"Latvia\">Latvia</option>\r\n                        <option value=\"Lebanon\">Lebanon</option>\r\n                        <option value=\"Lesotho\">Lesotho</option>\r\n                        <option value=\"Liberia\">Liberia</option>\r\n                        <option value=\"Libya\">Libya</option>\r\n                        <option value=\"Liechtenstein\">Liechtenstein</option>\r\n                        <option value=\"Lithuania\">Lithuania</option>\r\n                        <option value=\"Luxembourg\">Luxembourg</option>\r\n                        <option value=\"Macau\">Macau</option>\r\n                        <option value=\"Macedonia\">Macedonia</option>\r\n                        <option value=\"Madagascar\">Madagascar</option>\r\n                        <option value=\"Malaysia\">Malaysia</option>\r\n                        <option value=\"Malawi\">Malawi</option>\r\n                        <option value=\"Maldives\">Maldives</option>\r\n                        <option value=\"Mali\">Mali</option>\r\n                        <option value=\"Malta\">Malta</option>\r\n                        <option value=\"Marshall Islands\">Marshall Islands</option>\r\n                        <option value=\"Martinique\">Martinique</option>\r\n                        <option value=\"Mauritania\">Mauritania</option>\r\n                        <option value=\"Mauritius\">Mauritius</option>\r\n                        <option value=\"Mayotte\">Mayotte</option>\r\n                        <option value=\"Mexico\">Mexico</option>\r\n                        <option value=\"Midway Islands\">Midway Islands</option>\r\n                        <option value=\"Moldova\">Moldova</option>\r\n                        <option value=\"Monaco\">Monaco</option>\r\n                        <option value=\"Mongolia\">Mongolia</option>\r\n                        <option value=\"Montserrat\">Montserrat</option>\r\n                        <option value=\"Morocco\">Morocco</option>\r\n                        <option value=\"Mozambique\">Mozambique</option>\r\n                        <option value=\"Myanmar\">Myanmar</option>\r\n                        <option value=\"Nambia\">Nambia</option>\r\n                        <option value=\"Nauru\">Nauru</option>\r\n                        <option value=\"Nepal\">Nepal</option>\r\n                        <option value=\"Netherland Antilles\">Netherland Antilles</option>\r\n                        <option value=\"Netherlands\">Netherlands (Holland, Europe)</option>\r\n                        <option value=\"Nevis\">Nevis</option>\r\n                        <option value=\"New Caledonia\">New Caledonia</option>\r\n                        <option value=\"New Zealand\">New Zealand</option>\r\n                        <option value=\"Nicaragua\">Nicaragua</option>\r\n                        <option value=\"Niger\">Niger</option>\r\n                        <option value=\"Nigeria\">Nigeria</option>\r\n                        <option value=\"Niue\">Niue</option>\r\n                        <option value=\"Norfolk Island\">Norfolk Island</option>\r\n                        <option value=\"Norway\">Norway</option>\r\n                        <option value=\"Oman\">Oman</option>\r\n                        <option value=\"Pakistan\">Pakistan</option>\r\n                        <option value=\"Palau Island\">Palau Island</option>\r\n                        <option value=\"Palestine\">Palestine</option>\r\n                        <option value=\"Panama\">Panama</option>\r\n                        <option value=\"Papua New Guinea\">Papua New Guinea</option>\r\n                        <option value=\"Paraguay\">Paraguay</option>\r\n                        <option value=\"Peru\">Peru</option>\r\n                        <option value=\"Phillipines\">Philippines</option>\r\n                        <option value=\"Pitcairn Island\">Pitcairn Island</option>\r\n                        <option value=\"Poland\">Poland</option>\r\n                        <option value=\"Portugal\">Portugal</option>\r\n                        <option value=\"Puerto Rico\">Puerto Rico</option>\r\n                        <option value=\"Qatar\">Qatar</option>\r\n                        <option value=\"Republic of Montenegro\">Republic of Montenegro</option>\r\n                        <option value=\"Republic of Serbia\">Republic of Serbia</option>\r\n                        <option value=\"Reunion\">Reunion</option>\r\n                        <option value=\"Romania\">Romania</option>\r\n                        <option value=\"Russia\">Russia</option>\r\n                        <option value=\"Rwanda\">Rwanda</option>\r\n                        <option value=\"St Barthelemy\">St Barthelemy</option>\r\n                        <option value=\"St Eustatius\">St Eustatius</option>\r\n                        <option value=\"St Helena\">St Helena</option>\r\n                        <option value=\"St Kitts-Nevis\">St Kitts-Nevis</option>\r\n                        <option value=\"St Lucia\">St Lucia</option>\r\n                        <option value=\"St Maarten\">St Maarten</option>\r\n                        <option value=\"St Pierre &amp; Miquelon\">St Pierre &amp; Miquelon</option>\r\n                        <option value=\"St Vincent &amp; Grenadines\">St Vincent &amp; Grenadines</option>\r\n                        <option value=\"Saipan\">Saipan</option>\r\n                        <option value=\"Samoa\">Samoa</option>\r\n                        <option value=\"Samoa American\">Samoa American</option>\r\n                        <option value=\"San Marino\">San Marino</option>\r\n                        <option value=\"Sao Tome &amp; Principe\">Sao Tome &amp; Principe</option>\r\n                        <option value=\"Saudi Arabia\">Saudi Arabia</option>\r\n                        <option value=\"Senegal\">Senegal</option>\r\n                        <option value=\"Serbia\">Serbia</option>\r\n                        <option value=\"Seychelles\">Seychelles</option>\r\n                        <option value=\"Sierra Leone\">Sierra Leone</option>\r\n                        <option value=\"Singapore\">Singapore</option>\r\n                        <option value=\"Slovakia\">Slovakia</option>\r\n                        <option value=\"Slovenia\">Slovenia</option>\r\n                        <option value=\"Solomon Islands\">Solomon Islands</option>\r\n                        <option value=\"Somalia\">Somalia</option>\r\n                        <option value=\"South Africa\">South Africa</option>\r\n                        <option value=\"Spain\">Spain</option>\r\n                        <option value=\"Sri Lanka\">Sri Lanka</option>\r\n                        <option value=\"Sudan\">Sudan</option>\r\n                        <option value=\"Suriname\">Suriname</option>\r\n                        <option value=\"Swaziland\">Swaziland</option>\r\n                        <option value=\"Sweden\">Sweden</option>\r\n                        <option value=\"Switzerland\">Switzerland</option>\r\n                        <option value=\"Syria\">Syria</option>\r\n                        <option value=\"Tahiti\">Tahiti</option>\r\n                        <option value=\"Taiwan\">Taiwan</option>\r\n                        <option value=\"Tajikistan\">Tajikistan</option>\r\n                        <option value=\"Tanzania\">Tanzania</option>\r\n                        <option value=\"Thailand\">Thailand</option>\r\n                        <option value=\"Togo\">Togo</option>\r\n                        <option value=\"Tokelau\">Tokelau</option>\r\n                        <option value=\"Tonga\">Tonga</option>\r\n                        <option value=\"Trinidad &amp; Tobago\">Trinidad &amp; Tobago</option>\r\n                        <option value=\"Tunisia\">Tunisia</option>\r\n                        <option value=\"Turkey\">Turkey</option>\r\n                        <option value=\"Turkmenistan\">Turkmenistan</option>\r\n                        <option value=\"Turks &amp; Caicos Is\">Turks &amp; Caicos Is</option>\r\n                        <option value=\"Tuvalu\">Tuvalu</option>\r\n                        <option value=\"Uganda\">Uganda</option>\r\n                        <option value=\"Ukraine\">Ukraine</option>\r\n                        <option value=\"United Arab Erimates\">United Arab Emirates</option>\r\n                        <option value=\"United Kingdom\">United Kingdom</option>\r\n                        <option value=\"United States of America\">United States of America</option>\r\n                        <option value=\"Uraguay\">Uruguay</option>\r\n                        <option value=\"Uzbekistan\">Uzbekistan</option>\r\n                        <option value=\"Vanuatu\">Vanuatu</option>\r\n                        <option value=\"Vatican City State\">Vatican City State</option>\r\n                        <option value=\"Venezuela\">Venezuela</option>\r\n                        <option value=\"Vietnam\">Vietnam</option>\r\n                        <option value=\"Virgin Islands (Brit)\">Virgin Islands (Brit)</option>\r\n                        <option value=\"Virgin Islands (USA)\">Virgin Islands (USA)</option>\r\n                        <option value=\"Wake Island\">Wake Island</option>\r\n                        <option value=\"Wallis &amp; Futana Is\">Wallis &amp; Futana Is</option>\r\n                        <option value=\"Yemen\">Yemen</option>\r\n                        <option value=\"Zaire\">Zaire</option>\r\n                        <option value=\"Zambia\">Zambia</option>\r\n                        <option value=\"Zimbabwe\">Zimbabwe</option>\r\n                        </select>\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <label class=\"col-md-4 control-label\" for=\"zip\">Zip Code</label>\r\n                    <div class=\"col-md-5\">\r\n                        <select id=\"zip\" name=\"zip\" class=\"form-control\" [(ngModel)]=\"newUser.zipCode\">\r\n  \r\n\r\n                        <option data-countryCode=\"US\" value=\"1\" selected>USA (+1)</option>\r\n                        <option data-countryCode=\"GB\" value=\"44\">UK (+44)</option>\r\n\r\n                        <option disabled=\"disabled\">Other Countries</option>\r\n                        <option data-countryCode=\"AF\" value=\"213\">Afghanistan (+93)</option>\r\n                        <option data-countryCode=\"DZ\" value=\"213\">Algeria (+213)</option>\r\n                        <option data-countryCode=\"AD\" value=\"376\">Andorra (+376)</option>\r\n                        <option data-countryCode=\"AO\" value=\"244\">Angola (+244)</option>\r\n                        <option data-countryCode=\"AI\" value=\"1264\">Anguilla (+1264)</option>\r\n                        <option data-countryCode=\"AG\" value=\"1268\">Antigua &amp; Barbuda (+1268)</option>\r\n                        <option data-countryCode=\"AR\" value=\"54\">Argentina (+54)</option>\r\n                        <option data-countryCode=\"AM\" value=\"374\">Armenia (+374)</option>\r\n                        <option data-countryCode=\"AW\" value=\"297\">Aruba (+297)</option>\r\n                        <option data-countryCode=\"AU\" value=\"61\">Australia (+61)</option>\r\n                        <option data-countryCode=\"AT\" value=\"43\">Austria (+43)</option>\r\n                        <option data-countryCode=\"AZ\" value=\"994\">Azerbaijan (+994)</option>\r\n                        <option data-countryCode=\"BS\" value=\"1242\">Bahamas (+1242)</option>\r\n                        <option data-countryCode=\"BH\" value=\"973\">Bahrain (+973)</option>\r\n                        <option data-countryCode=\"BD\" value=\"880\">Bangladesh (+880)</option>\r\n                        <option data-countryCode=\"BB\" value=\"1246\">Barbados (+1246)</option>\r\n                        <option data-countryCode=\"BY\" value=\"375\">Belarus (+375)</option>\r\n                        <option data-countryCode=\"BE\" value=\"32\">Belgium (+32)</option>\r\n                        <option data-countryCode=\"BZ\" value=\"501\">Belize (+501)</option>\r\n                        <option data-countryCode=\"BJ\" value=\"229\">Benin (+229)</option>\r\n                        <option data-countryCode=\"BM\" value=\"1441\">Bermuda (+1441)</option>\r\n                        <option data-countryCode=\"BT\" value=\"975\">Bhutan (+975)</option>\r\n                        <option data-countryCode=\"BO\" value=\"591\">Bolivia (+591)</option>\r\n                        <option data-countryCode=\"BA\" value=\"387\">Bosnia Herzegovina (+387)</option>\r\n                        <option data-countryCode=\"BW\" value=\"267\">Botswana (+267)</option>\r\n                        <option data-countryCode=\"BR\" value=\"55\">Brazil (+55)</option>\r\n                        <option data-countryCode=\"BN\" value=\"673\">Brunei (+673)</option>\r\n                        <option data-countryCode=\"BG\" value=\"359\">Bulgaria (+359)</option>\r\n                        <option data-countryCode=\"BF\" value=\"226\">Burkina Faso (+226)</option>\r\n                        <option data-countryCode=\"BI\" value=\"257\">Burundi (+257)</option>\r\n                        <option data-countryCode=\"KH\" value=\"855\">Cambodia (+855)</option>\r\n                        <option data-countryCode=\"CM\" value=\"237\">Cameroon (+237)</option>\r\n                        <option data-countryCode=\"CA\" value=\"1\">Canada (+1)</option>\r\n                        <option data-countryCode=\"CV\" value=\"238\">Cape Verde Islands (+238)</option>\r\n                        <option data-countryCode=\"KY\" value=\"1345\">Cayman Islands (+1345)</option>\r\n                        <option data-countryCode=\"CF\" value=\"236\">Central African Republic (+236)</option>\r\n                        <option data-countryCode=\"CL\" value=\"56\">Chile (+56)</option>\r\n                        <option data-countryCode=\"CN\" value=\"86\">China (+86)</option>\r\n                        <option data-countryCode=\"CO\" value=\"57\">Colombia (+57)</option>\r\n                        <option data-countryCode=\"KM\" value=\"269\">Comoros (+269)</option>\r\n                        <option data-countryCode=\"CG\" value=\"242\">Congo (+242)</option>\r\n                        <option data-countryCode=\"CK\" value=\"682\">Cook Islands (+682)</option>\r\n                        <option data-countryCode=\"CR\" value=\"506\">Costa Rica (+506)</option>\r\n                        <option data-countryCode=\"HR\" value=\"385\">Croatia (+385)</option>\r\n                        <!-- <option data-countryCode=\"CU\" value=\"53\">Cuba (+53)</option> -->\r\n                        <option data-countryCode=\"CY\" value=\"90\">Cyprus - North (+90)</option>\r\n                        <option data-countryCode=\"CY\" value=\"357\">Cyprus - South (+357)</option>\r\n                        <option data-countryCode=\"CZ\" value=\"420\">Czech Republic (+420)</option>\r\n                        <option data-countryCode=\"DK\" value=\"45\">Denmark (+45)</option>\r\n                        <option data-countryCode=\"DJ\" value=\"253\">Djibouti (+253)</option>\r\n                        <option data-countryCode=\"DM\" value=\"1809\">Dominica (+1809)</option>\r\n                        <option data-countryCode=\"DO\" value=\"1809\">Dominican Republic (+1809)</option>\r\n                        <option data-countryCode=\"EC\" value=\"593\">Ecuador (+593)</option>\r\n                        <option data-countryCode=\"EG\" value=\"20\">Egypt (+20)</option>\r\n                        <option data-countryCode=\"SV\" value=\"503\">El Salvador (+503)</option>\r\n                        <option data-countryCode=\"GQ\" value=\"240\">Equatorial Guinea (+240)</option>\r\n                        <option data-countryCode=\"ER\" value=\"291\">Eritrea (+291)</option>\r\n                        <option data-countryCode=\"EE\" value=\"372\">Estonia (+372)</option>\r\n                        <option data-countryCode=\"ET\" value=\"251\">Ethiopia (+251)</option>\r\n                        <option data-countryCode=\"FK\" value=\"500\">Falkland Islands (+500)</option>\r\n                        <option data-countryCode=\"FO\" value=\"298\">Faroe Islands (+298)</option>\r\n                        <option data-countryCode=\"FJ\" value=\"679\">Fiji (+679)</option>\r\n                        <option data-countryCode=\"FI\" value=\"358\">Finland (+358)</option>\r\n                        <option data-countryCode=\"FR\" value=\"33\">France (+33)</option>\r\n                        <option data-countryCode=\"GF\" value=\"594\">French Guiana (+594)</option>\r\n                        <option data-countryCode=\"PF\" value=\"689\">French Polynesia (+689)</option>\r\n                        <option data-countryCode=\"GA\" value=\"241\">Gabon (+241)</option>\r\n                        <option data-countryCode=\"GM\" value=\"220\">Gambia (+220)</option>\r\n                        <option data-countryCode=\"GE\" value=\"7880\">Georgia (+7880)</option>\r\n                        <option data-countryCode=\"DE\" value=\"49\">Germany (+49)</option>\r\n                        <option data-countryCode=\"GH\" value=\"233\">Ghana (+233)</option>\r\n                        <option data-countryCode=\"GI\" value=\"350\">Gibraltar (+350)</option>\r\n                        <option data-countryCode=\"GR\" value=\"30\">Greece (+30)</option>\r\n                        <option data-countryCode=\"GL\" value=\"299\">Greenland (+299)</option>\r\n                        <option data-countryCode=\"GD\" value=\"1473\">Grenada (+1473)</option>\r\n                        <option data-countryCode=\"GP\" value=\"590\">Guadeloupe (+590)</option>\r\n                        <option data-countryCode=\"GU\" value=\"671\">Guam (+671)</option>\r\n                        <option data-countryCode=\"GT\" value=\"502\">Guatemala (+502)</option>\r\n                        <option data-countryCode=\"GN\" value=\"224\">Guinea (+224)</option>\r\n                        <option data-countryCode=\"GW\" value=\"245\">Guinea - Bissau (+245)</option>\r\n                        <option data-countryCode=\"GY\" value=\"592\">Guyana (+592)</option>\r\n                        <option data-countryCode=\"HT\" value=\"509\">Haiti (+509)</option>\r\n                        <option data-countryCode=\"HN\" value=\"504\">Honduras (+504)</option>\r\n                        <option data-countryCode=\"HK\" value=\"852\">Hong Kong (+852)</option>\r\n                        <option data-countryCode=\"HU\" value=\"36\">Hungary (+36)</option>\r\n                        <option data-countryCode=\"IS\" value=\"354\">Iceland (+354)</option>\r\n                        <option data-countryCode=\"IN\" value=\"91\">India (+91)</option>\r\n                        <option data-countryCode=\"ID\" value=\"62\">Indonesia (+62)</option>\r\n                        <option data-countryCode=\"IQ\" value=\"964\">Iraq (+964)</option>\r\n                        <!-- <option data-countryCode=\"IR\" value=\"98\">Iran (+98)</option> -->\r\n                        <option data-countryCode=\"IE\" value=\"353\">Ireland (+353)</option>\r\n                        <option data-countryCode=\"IL\" value=\"972\">Israel (+972)</option>\r\n                        <option data-countryCode=\"IT\" value=\"39\">Italy (+39)</option>\r\n                        <option data-countryCode=\"JM\" value=\"1876\">Jamaica (+1876)</option>\r\n                        <option data-countryCode=\"JP\" value=\"81\">Japan (+81)</option>\r\n                        <option data-countryCode=\"JO\" value=\"962\">Jordan (+962)</option>\r\n                        <option data-countryCode=\"KZ\" value=\"7\">Kazakhstan (+7)</option>\r\n                        <option data-countryCode=\"KE\" value=\"254\">Kenya (+254)</option>\r\n                        <option data-countryCode=\"KI\" value=\"686\">Kiribati (+686)</option>\r\n                        <!-- <option data-countryCode=\"KP\" value=\"850\">Korea - North (+850)</option> -->\r\n                        <option data-countryCode=\"KR\" value=\"82\">Korea - South (+82)</option>\r\n                        <option data-countryCode=\"KW\" value=\"965\">Kuwait (+965)</option>\r\n                        <option data-countryCode=\"KG\" value=\"996\">Kyrgyzstan (+996)</option>\r\n                        <option data-countryCode=\"LA\" value=\"856\">Laos (+856)</option>\r\n                        <option data-countryCode=\"LV\" value=\"371\">Latvia (+371)</option>\r\n                        <option data-countryCode=\"LB\" value=\"961\">Lebanon (+961)</option>\r\n                        <option data-countryCode=\"LS\" value=\"266\">Lesotho (+266)</option>\r\n                        <option data-countryCode=\"LR\" value=\"231\">Liberia (+231)</option>\r\n                        <option data-countryCode=\"LY\" value=\"218\">Libya (+218)</option>\r\n                        <option data-countryCode=\"LI\" value=\"417\">Liechtenstein (+417)</option>\r\n                        <option data-countryCode=\"LT\" value=\"370\">Lithuania (+370)</option>\r\n                        <option data-countryCode=\"LU\" value=\"352\">Luxembourg (+352)</option>\r\n                        <option data-countryCode=\"MO\" value=\"853\">Macao (+853)</option>\r\n                        <option data-countryCode=\"MK\" value=\"389\">Macedonia (+389)</option>\r\n                        <option data-countryCode=\"MG\" value=\"261\">Madagascar (+261)</option>\r\n                        <option data-countryCode=\"MW\" value=\"265\">Malawi (+265)</option>\r\n                        <option data-countryCode=\"MY\" value=\"60\">Malaysia (+60)</option>\r\n                        <option data-countryCode=\"MV\" value=\"960\">Maldives (+960)</option>\r\n                        <option data-countryCode=\"ML\" value=\"223\">Mali (+223)</option>\r\n                        <option data-countryCode=\"MT\" value=\"356\">Malta (+356)</option>\r\n                        <option data-countryCode=\"MH\" value=\"692\">Marshall Islands (+692)</option>\r\n                        <option data-countryCode=\"MQ\" value=\"596\">Martinique (+596)</option>\r\n                        <option data-countryCode=\"MR\" value=\"222\">Mauritania (+222)</option>\r\n                        <option data-countryCode=\"YT\" value=\"269\">Mayotte (+269)</option>\r\n                        <option data-countryCode=\"MX\" value=\"52\">Mexico (+52)</option>\r\n                        <option data-countryCode=\"FM\" value=\"691\">Micronesia (+691)</option>\r\n                        <option data-countryCode=\"MD\" value=\"373\">Moldova (+373)</option>\r\n                        <option data-countryCode=\"MC\" value=\"377\">Monaco (+377)</option>\r\n                        <option data-countryCode=\"MN\" value=\"976\">Mongolia (+976)</option>\r\n                        <option data-countryCode=\"MS\" value=\"1664\">Montserrat (+1664)</option>\r\n                        <option data-countryCode=\"MA\" value=\"212\">Morocco (+212)</option>\r\n                        <option data-countryCode=\"MZ\" value=\"258\">Mozambique (+258)</option>\r\n                        <option data-countryCode=\"MN\" value=\"95\">Myanmar (+95)</option>\r\n                        <option data-countryCode=\"NA\" value=\"264\">Namibia (+264)</option>\r\n                        <option data-countryCode=\"NR\" value=\"674\">Nauru (+674)</option>\r\n                        <option data-countryCode=\"NP\" value=\"977\">Nepal (+977)</option>\r\n                        <option data-countryCode=\"NL\" value=\"31\">Netherlands (+31)</option>\r\n                        <option data-countryCode=\"NC\" value=\"687\">New Caledonia (+687)</option>\r\n                        <option data-countryCode=\"NZ\" value=\"64\">New Zealand (+64)</option>\r\n                        <option data-countryCode=\"NI\" value=\"505\">Nicaragua (+505)</option>\r\n                        <option data-countryCode=\"NE\" value=\"227\">Niger (+227)</option>\r\n                        <option data-countryCode=\"NG\" value=\"234\">Nigeria (+234)</option>\r\n                        <option data-countryCode=\"NU\" value=\"683\">Niue (+683)</option>\r\n                        <option data-countryCode=\"NF\" value=\"672\">Norfolk Islands (+672)</option>\r\n                        <option data-countryCode=\"NP\" value=\"670\">Northern Marianas (+670)</option>\r\n                        <option data-countryCode=\"NO\" value=\"47\">Norway (+47)</option>\r\n                        <option data-countryCode=\"OM\" value=\"968\">Oman (+968)</option>\r\n                        <option data-countryCode=\"PK\" value=\"92\">Pakistan (+92)</option>\r\n                        <option data-countryCode=\"PW\" value=\"680\">Palau (+680)</option>\r\n                        <option data-countryCode=\"PA\" value=\"507\">Panama (+507)</option>\r\n                        <option data-countryCode=\"PG\" value=\"675\">Papua New Guinea (+675)</option>\r\n                        <option data-countryCode=\"PY\" value=\"595\">Paraguay (+595)</option>\r\n                        <option data-countryCode=\"PE\" value=\"51\">Peru (+51)</option>\r\n                        <option data-countryCode=\"PH\" value=\"63\">Philippines (+63)</option>\r\n                        <option data-countryCode=\"PL\" value=\"48\">Poland (+48)</option>\r\n                        <option data-countryCode=\"PT\" value=\"351\">Portugal (+351)</option>\r\n                        <option data-countryCode=\"PR\" value=\"1787\">Puerto Rico (+1787)</option>\r\n                        <option data-countryCode=\"QA\" value=\"974\">Qatar (+974)</option>\r\n                        <option data-countryCode=\"RE\" value=\"262\">Reunion (+262)</option>\r\n                        <option data-countryCode=\"RO\" value=\"40\">Romania (+40)</option>\r\n                        <option data-countryCode=\"RU\" value=\"7\">Russia (+7)</option>\r\n                        <option data-countryCode=\"RW\" value=\"250\">Rwanda (+250)</option>\r\n                        <option data-countryCode=\"SM\" value=\"378\">San Marino (+378)</option>\r\n                        <option data-countryCode=\"ST\" value=\"239\">Sao Tome &amp; Principe (+239)</option>\r\n                        <option data-countryCode=\"SA\" value=\"966\">Saudi Arabia (+966)</option>\r\n                        <option data-countryCode=\"SN\" value=\"221\">Senegal (+221)</option>\r\n                        <option data-countryCode=\"CS\" value=\"381\">Serbia (+381)</option>\r\n                        <option data-countryCode=\"SC\" value=\"248\">Seychelles (+248)</option>\r\n                        <option data-countryCode=\"SL\" value=\"232\">Sierra Leone (+232)</option>\r\n                        <option data-countryCode=\"SG\" value=\"65\">Singapore (+65)</option>\r\n                        <option data-countryCode=\"SK\" value=\"421\">Slovak Republic (+421)</option>\r\n                        <option data-countryCode=\"SI\" value=\"386\">Slovenia (+386)</option>\r\n                        <option data-countryCode=\"SB\" value=\"677\">Solomon Islands (+677)</option>\r\n                        <option data-countryCode=\"SO\" value=\"252\">Somalia (+252)</option>\r\n                        <option data-countryCode=\"ZA\" value=\"27\">South Africa (+27)</option>\r\n                        <option data-countryCode=\"ES\" value=\"34\">Spain (+34)</option>\r\n                        <option data-countryCode=\"LK\" value=\"94\">Sri Lanka (+94)</option>\r\n                        <option data-countryCode=\"SH\" value=\"290\">St. Helena (+290)</option>\r\n                        <option data-countryCode=\"KN\" value=\"1869\">St. Kitts (+1869)</option>\r\n                        <option data-countryCode=\"SC\" value=\"1758\">St. Lucia (+1758)</option>\r\n                        <option data-countryCode=\"SR\" value=\"597\">Suriname (+597)</option>\r\n                        <option data-countryCode=\"SD\" value=\"249\">Sudan (+249)</option>\r\n                        <option data-countryCode=\"SZ\" value=\"268\">Swaziland (+268)</option>\r\n                        <option data-countryCode=\"SE\" value=\"46\">Sweden (+46)</option>\r\n                        <option data-countryCode=\"CH\" value=\"41\">Switzerland (+41)</option>\r\n                        <!-- <option data-countryCode=\"SY\" value=\"963\">Syria (+963)</option> -->\r\n                        <option data-countryCode=\"TW\" value=\"886\">Taiwan (+886)</option>\r\n                        <option data-countryCode=\"TJ\" value=\"992\">Tajikistan (+992)</option>\r\n                        <option data-countryCode=\"TH\" value=\"66\">Thailand (+66)</option>\r\n                        <option data-countryCode=\"TG\" value=\"228\">Togo (+228)</option>\r\n                        <option data-countryCode=\"TO\" value=\"676\">Tonga (+676)</option>\r\n                        <option data-countryCode=\"TT\" value=\"1868\">Trinidad &amp; Tobago (+1868)</option>\r\n                        <option data-countryCode=\"TN\" value=\"216\">Tunisia (+216)</option>\r\n                        <option data-countryCode=\"TR\" value=\"90\">Turkey (+90)</option>\r\n                        <option data-countryCode=\"TM\" value=\"993\">Turkmenistan (+993)</option>\r\n                        <option data-countryCode=\"TC\" value=\"1649\">Turks &amp; Caicos Islands (+1649)</option>\r\n                        <option data-countryCode=\"TV\" value=\"688\">Tuvalu (+688)</option>\r\n                        <option data-countryCode=\"UG\" value=\"256\">Uganda (+256)</option>\r\n                        <option data-countryCode=\"UA\" value=\"380\">Ukraine (+380)</option>\r\n                        <option data-countryCode=\"AE\" value=\"971\">United Arab Emirates (+971)</option>\r\n                        <option data-countryCode=\"UY\" value=\"598\">Uruguay (+598)</option>\r\n                        <option data-countryCode=\"UZ\" value=\"998\">Uzbekistan (+998)</option>\r\n                        <option data-countryCode=\"VU\" value=\"678\">Vanuatu (+678)</option>\r\n                        <option data-countryCode=\"VA\" value=\"379\">Vatican City (+379)</option>\r\n                        <option data-countryCode=\"VE\" value=\"58\">Venezuela (+58)</option>\r\n                        <option data-countryCode=\"VN\" value=\"84\">Vietnam (+84)</option>\r\n                        <option data-countryCode=\"VG\" value=\"1\">Virgin Islands - British (+1)</option>\r\n                        <option data-countryCode=\"VI\" value=\"1\">Virgin Islands - US (+1)</option>\r\n                        <option data-countryCode=\"WF\" value=\"681\">Wallis &amp; Futuna (+681)</option>\r\n                        <option data-countryCode=\"YE\" value=\"969\">Yemen (North)(+969)</option>\r\n                        <option data-countryCode=\"YE\" value=\"967\">Yemen (South)(+967)</option>\r\n                        <option data-countryCode=\"ZM\" value=\"260\">Zambia (+260)</option>\r\n                        <option data-countryCode=\"ZW\" value=\"263\">Zimbabwe (+263)</option>\r\n                        </select>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"form-group\">\r\n                    <label class=\"col-md-4 control-label\" for=\"mobilenumber\">Mobile Number</label>\r\n                    <div class=\"col-md-5\">\r\n                        <input id=\"mobilenumber\" name=\"mobilenumber\" type=\"text\" placeholder=\"Mobile Number\" class=\"form-control input-md\" required=\"\" [(ngModel)]=\"newUser.contactNo\">\r\n\r\n                    </div>\r\n                </div>\r\n\r\n                \r\n                <div class=\"form-group\">\r\n                    <label class=\"col-md-4 control-label\" for=\"emailId\">Email Id</label>\r\n                    <div class=\"col-md-6\">\r\n                        <input id=\"emailId\" name=\"emailId\" type=\"text\" placeholder=\"user@domain.com\" class=\"form-control input-md\" required=\"\" [(ngModel)]=\"newUser.emailId\">\r\n\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"form-group\">\r\n                    <label class=\"col-md-4 control-label\" for=\"Register\"></label>\r\n                    <div class=\"col-md-4\">\r\n                        <button id=\"Register\" name=\"Register\" class=\"btn btn-primary \" (click)=\"createUser(newUser)\">Register</button>\r\n                        <a routerLink='/register'><button id=\"Reset\" name=\"Reset\" class=\"btn btn-primary\">Reset</button></a>\r\n                    </div>\r\n                </div>\r\n                \r\n\r\n            </fieldset>\r\n        </form>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_service__ = __webpack_require__("../../../../../src/app/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Pojo_user__ = __webpack_require__("../../../../../src/Pojo/user.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegisterComponent = (function () {
    function RegisterComponent(userservice, router) {
        this.userservice = userservice;
        this.router = router;
        this.newUser = new __WEBPACK_IMPORTED_MODULE_3__Pojo_user__["a" /* User */](undefined, '', '', '', '', undefined, '', '', '', '', '', '', 10000);
    }
    RegisterComponent.prototype.createUser = function (user) {
        var _this = this;
        this.userservice.createUser(user).then(function (user) {
            _this.user = user;
            //console.log(user);
            //console.log(" this.user::: "+this.user);
            //console.log("userid:: "+user.userId);
            _this.router.navigateByUrl('/login/' + user.userId);
        });
        //  this.router.navigateByUrl('/login'+this.user.userId);
    };
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-register',
            template: __webpack_require__("../../../../../src/app/register/register.component.html"),
            styles: [__webpack_require__("../../../../../src/app/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserService = (function () {
    function UserService(http) {
        this.http = http;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        this.userUrl = 'http://localhost:8080/chargeback-services';
    }
    UserService.prototype.createUser = function (user) {
        console.log('----- Service: ' + user);
        return this.http
            .post(this.userUrl + "/addUser", user, { headers: this.headers })
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    UserService.prototype.loginUser = function (login) {
        console.log('----- Service: ' + login);
        return this.http
            .post(this.userUrl + "/login", login, { headers: this.headers })
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    UserService.prototype.loginAdmin = function (login) {
        console.log('----- Service: ' + login);
        return this.http
            .post(this.userUrl + "/loginSimple", login, { headers: this.headers })
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    UserService.prototype.getIndividualUsers = function () {
        return this.http
            .get(this.userUrl + "/usersIndividual")
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    UserService.prototype.getFundList = function () {
        return this.http
            .get(this.userUrl + "/funds")
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    UserService.prototype.boughtStockAll = function (userId) {
        return this.http
            .get(this.userUrl + "/transactions/" + userId + '/BUY', { headers: this.headers })
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    UserService.prototype.boughtStock = function (userId) {
        return this.http
            .get(this.userUrl + "/notSold/" + userId, { headers: this.headers })
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    UserService.prototype.soldStock = function (userId) {
        return this.http
            .get(this.userUrl + "/transactions/" + userId + "/SELL", { headers: this.headers })
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    UserService.prototype.findUser = function (userId) {
        return this.http
            .get(this.userUrl + "/user/" + userId, { headers: this.headers })
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    UserService.prototype.stockPrice = function () {
        return this.http
            .get(this.userUrl + "/stockPrices", { headers: this.headers })
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    UserService.prototype.commitBuyOrSell = function (transaction) {
        return this.http
            .post(this.userUrl + "/transactionEntry", transaction, { headers: this.headers })
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    UserService.prototype.getCurrentPrice = function (stock) {
        return this.http
            .get(this.userUrl + "/stockPrice/" + stock, { headers: this.headers })
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    UserService.prototype.handleError = function (error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "../../../../../src/app/user/mockUser.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return USERS; });
var USERS = [{ transactionID: 'T001',
        userId: 'U001',
        stockName: 'Cognizant',
        noOfStocks: 420,
        stockPrice: 500,
        chargeBack: 520,
        balanceAmount: 520000,
        role: 'INDL' },
    { transactionID: 'T002',
        userId: 'U002',
        stockName: 'Infosys',
        noOfStocks: 350,
        stockPrice: 1000,
        chargeBack: 650,
        balanceAmount: 5000000,
        role: 'INDL' }];


/***/ }),

/***/ "../../../../../src/app/user/user.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user/user.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-primary container\">\r\n  <div class=\"panel-heading\">\r\n    Stock Information\r\n  </div>\r\n  <div class=\"panel-body\">\r\n    <div class=\"table-responsive\">\r\n        <table class=\"table\">\r\n            <thead>\r\n              <tr>\r\n                <th>transactionID</th>\r\n                <th>userId</th>\r\n                <th>stockName</th>\r\n                <th>noOfStocks</th>\r\n                <th>stockPrice</th>\r\n                <th>chargeBack</th>\r\n                <th>balanceAmount</th>\r\n                <th>role</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr *ngFor=\"let users1 of users\">\r\n                  <td>{{users1.transactionID}}</td>\r\n                  <td>{{users1.userId}}</td>\r\n                  <td>{{users1.stockName}}</td>\r\n                  <td>{{users1.noOfStocks}}</td>\r\n                  <td>{{users1.stockPrice}}</td>\r\n                  <td>{{users1.chargeBack}}</td>\r\n                  <td>{{users1.balanceAmount}}</td>\r\n                  <td>{{users1.role}}</td>\r\n              </tr>\r\n            </tbody>\r\n\r\n        </table>\r\n    </div>\r\n      \r\n  </div>\r\n      \r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/user/user.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mockUser__ = __webpack_require__("../../../../../src/app/user/mockUser.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserComponent = (function () {
    function UserComponent() {
        this.users = __WEBPACK_IMPORTED_MODULE_1__mockUser__["a" /* USERS */];
    }
    UserComponent.prototype.ngOnInit = function () {
    };
    UserComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-user',
            template: __webpack_require__("../../../../../src/app/user/user.component.html"),
            styles: [__webpack_require__("../../../../../src/app/user/user.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], UserComponent);
    return UserComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map