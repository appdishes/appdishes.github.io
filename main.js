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
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

let AppComponent = class AppComponent {
};
AppComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-root',
        template: `
    <nav></nav>
    <router-outlet></router-outlet>
  `,
    })
], AppComponent);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm2015/http.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _dishes_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dishes.component */ "./src/app/dishes.component.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _web_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./web.service */ "./src/app/web.service.ts");
/* harmony import */ var _nav_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./nav.component */ "./src/app/nav.component.ts");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./home.component */ "./src/app/home.component.ts");
/* harmony import */ var _dishes_create_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./dishes.create.component */ "./src/app/dishes.create.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var routes = [
    {
        path: '',
        component: _home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"]
    },
    {
        path: 'dishes',
        component: _dishes_component__WEBPACK_IMPORTED_MODULE_7__["DishesComponent"]
    },
    {
        path: 'dishes/:id',
        component: _dishes_component__WEBPACK_IMPORTED_MODULE_7__["DishesComponent"]
    },
    {
        path: 'create',
        component: _dishes_create_component__WEBPACK_IMPORTED_MODULE_12__["ManageDishComponent"]
    },
    {
        path: 'manage/:id',
        component: _dishes_create_component__WEBPACK_IMPORTED_MODULE_12__["ManageDishComponent"]
    }
];
let AppModule = class AppModule {
};
AppModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _angular_http__WEBPACK_IMPORTED_MODULE_1__["HttpModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forRoot(routes), _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"]],
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"], _dishes_component__WEBPACK_IMPORTED_MODULE_7__["DishesComponent"], _dishes_create_component__WEBPACK_IMPORTED_MODULE_12__["ManageDishComponent"], _nav_component__WEBPACK_IMPORTED_MODULE_10__["NavComponent"], _home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]],
        providers: [_web_service__WEBPACK_IMPORTED_MODULE_9__["WebService"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/dishes.component.css":
/*!**************************************!*\
  !*** ./src/app/dishes.component.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {box-sizing: border-box;}\r\n\r\nbody {\r\n  margin: 0;\r\n  font-family: Arial, Helvetica, sans-serif;\r\n}\r\n\r\n.topnav {\r\n  overflow: hidden;\r\n  background-color: #e9e9e9;\r\n}\r\n\r\n.topnav a.lnk {\r\n  float: left;\r\n  display: block;\r\n  color: black;\r\n  text-align: center;\r\n  padding: 14px 16px;\r\n  text-decoration: none;\r\n  font-size: 17px;\r\n}\r\n\r\n.topnav a.lnk:hover {\r\n  background-color: #ddd;\r\n  color: black;\r\n}\r\n\r\n.topnav a.active {\r\n  background-color: #2196F3;\r\n  color: white;\r\n}\r\n\r\n.topnav .search-container {\r\n  float: right;\r\n}\r\n\r\n.topnav input[type=text] {\r\n  padding: 6px;\r\n  margin-top: 8px;\r\n  font-size: 17px;\r\n  border: none;\r\n}\r\n\r\n.topnav .search-container button {\r\n  float: right;\r\n  padding: 6px 10px;\r\n  margin-top: 8px;\r\n  margin-right: 16px;\r\n  background: #ddd;\r\n  font-size: 17px;\r\n  border: none;\r\n  cursor: pointer;\r\n}\r\n\r\n.topnav .search-container button:hover {\r\n  background: #ccc;\r\n}\r\n\r\n@media screen and (max-width: 600px) {\r\n  .topnav .search-container {\r\n    float: none;\r\n  }\r\n  .topnav a.lnk, .topnav input[type=text], .topnav .search-container button {\r\n    float: none;\r\n    display: block;\r\n    text-align: left;\r\n    width: 100%;\r\n    margin: 0;\r\n    padding: 14px;\r\n  }\r\n  .topnav input[type=text] {\r\n    border: 1px solid #ccc;  \r\n  }\r\n\r\n  .error {\r\n    background-color: #fff0f0\r\n}\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGlzaGVzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsR0FBRyx1QkFBdUIsQ0FBQzs7QUFFM0I7RUFDRSxVQUFVO0VBQ1YsMENBQTBDO0NBQzNDOztBQUVEO0VBQ0UsaUJBQWlCO0VBQ2pCLDBCQUEwQjtDQUMzQjs7QUFFRDtFQUNFLFlBQVk7RUFDWixlQUFlO0VBQ2YsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLGdCQUFnQjtDQUNqQjs7QUFFRDtFQUNFLHVCQUF1QjtFQUN2QixhQUFhO0NBQ2Q7O0FBRUQ7RUFDRSwwQkFBMEI7RUFDMUIsYUFBYTtDQUNkOztBQUVEO0VBQ0UsYUFBYTtDQUNkOztBQUVEO0VBQ0UsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsYUFBYTtDQUNkOztBQUVEO0VBQ0UsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLGdCQUFnQjtDQUNqQjs7QUFFRDtFQUNFLGlCQUFpQjtDQUNsQjs7QUFFRDtFQUNFO0lBQ0UsWUFBWTtHQUNiO0VBQ0Q7SUFDRSxZQUFZO0lBQ1osZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osVUFBVTtJQUNWLGNBQWM7R0FDZjtFQUNEO0lBQ0UsdUJBQXVCO0dBQ3hCOztFQUVEO0lBQ0UseUJBQXlCO0NBQzVCO0NBQ0EiLCJmaWxlIjoic3JjL2FwcC9kaXNoZXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIioge2JveC1zaXppbmc6IGJvcmRlci1ib3g7fVxyXG5cclxuYm9keSB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4udG9wbmF2IHtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlOWU5ZTk7XHJcbn1cclxuXHJcbi50b3BuYXYgYS5sbmsge1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGNvbG9yOiBibGFjaztcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMTRweCAxNnB4O1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBmb250LXNpemU6IDE3cHg7XHJcbn1cclxuXHJcbi50b3BuYXYgYS5sbms6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG4udG9wbmF2IGEuYWN0aXZlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjE5NkYzO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLnRvcG5hdiAuc2VhcmNoLWNvbnRhaW5lciB7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG59XHJcblxyXG4udG9wbmF2IGlucHV0W3R5cGU9dGV4dF0ge1xyXG4gIHBhZGRpbmc6IDZweDtcclxuICBtYXJnaW4tdG9wOiA4cHg7XHJcbiAgZm9udC1zaXplOiAxN3B4O1xyXG4gIGJvcmRlcjogbm9uZTtcclxufVxyXG5cclxuLnRvcG5hdiAuc2VhcmNoLWNvbnRhaW5lciBidXR0b24ge1xyXG4gIGZsb2F0OiByaWdodDtcclxuICBwYWRkaW5nOiA2cHggMTBweDtcclxuICBtYXJnaW4tdG9wOiA4cHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xyXG4gIGJhY2tncm91bmQ6ICNkZGQ7XHJcbiAgZm9udC1zaXplOiAxN3B4O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi50b3BuYXYgLnNlYXJjaC1jb250YWluZXIgYnV0dG9uOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kOiAjY2NjO1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gIC50b3BuYXYgLnNlYXJjaC1jb250YWluZXIge1xyXG4gICAgZmxvYXQ6IG5vbmU7XHJcbiAgfVxyXG4gIC50b3BuYXYgYS5sbmssIC50b3BuYXYgaW5wdXRbdHlwZT10ZXh0XSwgLnRvcG5hdiAuc2VhcmNoLWNvbnRhaW5lciBidXR0b24ge1xyXG4gICAgZmxvYXQ6IG5vbmU7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDE0cHg7XHJcbiAgfVxyXG4gIC50b3BuYXYgaW5wdXRbdHlwZT10ZXh0XSB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjOyAgXHJcbiAgfVxyXG5cclxuICAuZXJyb3Ige1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjBmMFxyXG59XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/dishes.component.html":
/*!***************************************!*\
  !*** ./src/app/dishes.component.html ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br />\r\n<mat-card>\r\n<form [formGroup]=\"searchForm\" (ngSubmit)=\"onSubmit()\" autocomplete=\"off\">\r\n        <mat-form-field>\r\n            <input style=\"width:450px\" matInput placeholder=\"Search by name, type, or category..\" formControlName=\"search\">\r\n        </mat-form-field>\r\n        <br>\r\n        <button mat-raised-button color=\"primary\">Search Dishes</button>        \r\n    </form>\r\n</mat-card>\r\n\r\n<br />\r\n    <button (click)=\"showAll()\" mat-raised-button color=\"primary\">Show All</button>\r\n\r\n    <div *ngFor=\"let dish of webService.dishes | async\">\r\n        <mat-card class=\"card\">\r\n            <mat-card-title (click)=\"selectByName(dish.name)\" matTooltip=\"Click to see all dishes with this name\" style=\"cursor: pointer\">{{dish.name}}</mat-card-title>\r\n            <mat-card-content (click)=\"selectByType(dish.type)\" matTooltip=\"Click to see all dishes from this type\" style=\"cursor: pointer\">{{dish.type}}</mat-card-content>\r\n            <mat-card-content (click)=\"selectByCategory(dish.category)\" matTooltip=\"Click to see all dishes from this category\" style=\"cursor: pointer\">{{dish.category}}</mat-card-content>\r\n            <mat-card-content>{{dish.description}}</mat-card-content>\r\n            <button (click)=\"delete(dish)\" mat-raised-button color=\"warn\">Delete</button>\r\n            <button (click)=\"selectById(dish.id)\"  mat-raised-button color=\"primary\">See this dish only</button>\r\n\r\n           <!-- <button [routerLink]=\"['/manage', dish.id]\"  mat-raised-button color=\"primary\">Update</button> -->\r\n           <!--  <button [routerLink]=\"['/manage', dish.id]\"  mat-raised-button color=\"primary\">View Details</button> -->\r\n        </mat-card>\r\n    </div>"

/***/ }),

/***/ "./src/app/dishes.component.ts":
/*!*************************************!*\
  !*** ./src/app/dishes.component.ts ***!
  \*************************************/
/*! exports provided: DishesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DishesComponent", function() { return DishesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _web_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./web.service */ "./src/app/web.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




let DishesComponent = class DishesComponent {
    constructor(fb, webService, route) {
        this.fb = fb;
        this.webService = webService;
        this.route = route;
        this.resetSearchForm();
    }
    ngOnInit() {
        this.webService.getDishes();
    }
    showAll() {
        this.webService.getDishes();
    }
    delete(dish) {
        this.webService.deleteDish(dish);
    }
    selectById(id) {
        this.webService.getDishesById(id);
    }
    selectByName(name) {
        this.webService.getDishesByName(name);
    }
    selectByType(type) {
        this.webService.getDishesByType(type);
    }
    selectByCategory(category) {
        this.webService.getDishesByCategory(category);
    }
    resetSearchForm() {
        this.searchForm = this.fb.group({
            search: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
    }
    onSubmit() {
        this.webService.search(this.searchForm.value.search);
    }
};
DishesComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'dishes',
        template: __webpack_require__(/*! ./dishes.component.html */ "./src/app/dishes.component.html"),
        styles: [`
        .error {
            background-color: #fff0f0
        }
    `]
    }),
    __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
        _web_service__WEBPACK_IMPORTED_MODULE_1__["WebService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
], DishesComponent);



/***/ }),

/***/ "./src/app/dishes.create.component.html":
/*!**********************************************!*\
  !*** ./src/app/dishes.create.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br />\r\n<mat-card>\r\n    <form [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\">\r\n        <mat-form-field>\r\n            <input style=\"width:350px\" [ngClass]=\"{'error': isValid('name')}\" matInput placeholder=\"Name\" formControlName=\"name\">\r\n        </mat-form-field>\r\n        <mat-form-field>\r\n            <input style=\"width:350px\" [ngClass]=\"{'error': isValid('type')}\" matInput placeholder=\"Type\" formControlName=\"type\">\r\n        </mat-form-field>\r\n        <mat-form-field>\r\n            <input style=\"width:350px\" [ngClass]=\"{'error': isValid('category')}\" matInput placeholder=\"Category\" formControlName=\"category\">\r\n        </mat-form-field>\r\n        <mat-form-field>\r\n            <textarea  style=\"width:350px\" [ngClass]=\"{'error': isValid('description')}\" matInput placeholder=\"Description\" formControlName=\"description\"></textarea>\r\n        </mat-form-field>\r\n        <br>\r\n       <!--  <button (click)=\"delete(dish)\" mat-raised-button color=\"warn\">Delete</button>--> \r\n        <button mat-raised-button color=\"primary\">Create Dish</button>\r\n\r\n      <!-- <button mat-raised-button ng-show=\"dish.id !=''\" class=\"ng-hide\" color=\"primary\">Update Dish</button> --> \r\n\r\n    </form>\r\n</mat-card>"

/***/ }),

/***/ "./src/app/dishes.create.component.ts":
/*!********************************************!*\
  !*** ./src/app/dishes.create.component.ts ***!
  \********************************************/
/*! exports provided: ManageDishComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageDishComponent", function() { return ManageDishComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _web_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./web.service */ "./src/app/web.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




let ManageDishComponent = class ManageDishComponent {
    constructor(fb, webService, route) {
        this.fb = fb;
        this.webService = webService;
        this.route = route;
        this.resetDish();
    }
    ngOnInit() {
        /**
        var id = this.route.snapshot.params.id;
        console.log("ppppp id " + id);

        this.webService.getDishesById(id);
        console.log("ppppp this.webService.singleDish " + this.webService.singleDish);
        if(this.webService.singleDish != null){
            this.dish = this.webService.singleDish[0];
            console.log("ppppp this.webService.dish " + this.dish);

            this.form = this.fb.group({
                name: [this.dish.name, Validators.required],
                type: [this.dish.type, Validators.required],
                category: [this.dish.category, Validators.required],
                description: [this.dish.description, Validators.required]
                })
        }
        */
    }
    onSubmit() {
        this.dish.name = this.form.value.name;
        this.dish.type = this.form.value.type;
        this.dish.category = this.form.value.category;
        this.dish.description = this.form.value.description;
        this.webService.postDish(this.dish);
        //this.resetDish();
    }
    isValid(control) {
        return this.form.controls[control].invalid && this.form.controls[control].touched;
    }
    resetDish() {
        this.dish = {
            name: "",
            type: "",
            description: "",
            category: "",
            id: ""
        };
        this.form = this.fb.group({
            name: [this.dish.name, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            type: [this.dish.type, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            category: [this.dish.category, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            description: [this.dish.description, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    }
};
ManageDishComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        //  moduleId: module.id,//this does not work for some reason. However it works without it.
        selector: 'manage',
        template: __webpack_require__(/*! ./dishes.create.component.html */ "./src/app/dishes.create.component.html"),
        styles: [`
        .error {
            background-color: #fff0f0
        }
    `]
    }),
    __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
        _web_service__WEBPACK_IMPORTED_MODULE_2__["WebService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
], ManageDishComponent);



/***/ }),

/***/ "./src/app/home.component.ts":
/*!***********************************!*\
  !*** ./src/app/home.component.ts ***!
  \***********************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

let HomeComponent = class HomeComponent {
};
HomeComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'home',
        template: `
    <dishes></dishes>
  `,
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/nav.component.html":
/*!************************************!*\
  !*** ./src/app/nav.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n  <mat-toolbar color=\"primary\">\r\n            <button mat-button routerLink=\"/dishes\" >View Dishes</button>\r\n            <button mat-button routerLink=\"/create\" >Create Dish</button>\r\n\r\n            </mat-toolbar>\r\n       <!--\r\n                     <input type=\"search\"/><button mat-button (click)=\"searchDishes()\" >Search Dishes</button> \r\n\r\n                     \r\n<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\">\r\n<div class=\"topnav\">\r\n    <a class=\"lnk active\" href=\"dishes\">View Dishes</a>\r\n    <a class=\"lnk active\" href=\"create\">Create Dish</a>\r\n  </div>\r\n           -->\r\n\r\n"

/***/ }),

/***/ "./src/app/nav.component.ts":
/*!**********************************!*\
  !*** ./src/app/nav.component.ts ***!
  \**********************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _web_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./web.service */ "./src/app/web.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



let NavComponent = class NavComponent {
    constructor(fb, webService) {
        this.fb = fb;
        this.webService = webService;
    }
};
NavComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'nav',
        template: __webpack_require__(/*! ./nav.component.html */ "./src/app/nav.component.html"),
        styles: [__webpack_require__(/*! ./dishes.component.css */ "./src/app/dishes.component.css")]
    }),
    __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        _web_service__WEBPACK_IMPORTED_MODULE_1__["WebService"]])
], NavComponent);



/***/ }),

/***/ "./src/app/web.service.ts":
/*!********************************!*\
  !*** ./src/app/web.service.ts ***!
  \********************************/
/*! exports provided: WebService, Dish */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebService", function() { return WebService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dish", function() { return Dish; });
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/toPromise */ "./node_modules/rxjs-compat/_esm2015/add/operator/toPromise.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/Rx */ "./node_modules/rxjs-compat/_esm2015/Rx.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





let WebService = class WebService {
    constructor(http, sb) {
        this.http = http;
        this.sb = sb;
        //BASE_URL = 'http://localhost:8090';
        this.BASE_URL = 'https://appdishes.herokuapp.com';
        this.dishesStore = [];
        this.dishSubjet = new rxjs_Rx__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.dishes = this.dishSubjet.asObservable();
        this.singleDishStore = new Dish();
        this.singleDishSubjet = new rxjs_Rx__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.singleDish = this.singleDishSubjet.asObservable();
        this.getDishes();
    }
    getDishes() {
        this.http.get(this.BASE_URL + '/dishes').subscribe(response => {
            this.dishesStore = response.json();
            this.dishSubjet.next(this.dishesStore);
        }, error => {
            this.handleError("Unable to get dishes");
        });
    }
    getDishesById(id) {
        if (id != null || id != '') {
            this.http.get(this.BASE_URL + '/dishes' + '/' + id).subscribe(response => {
                this.dishesStore = response.json();
                this.dishSubjet.next(this.dishesStore);
            }, error => {
                this.handleError("Unable to get dishes");
            });
        }
    }
    getDishesByName(name) {
        if (name != null || name != '') {
            let data = { "name": name };
            this.http.get(this.BASE_URL + '/dishes/by', { params: data }).subscribe(response => {
                //console.log("oooo" + response.json())
                this.dishesStore = response.json();
                this.dishSubjet.next(this.dishesStore);
            }, error => {
                this.handleError("Unable to get dishes");
            });
        }
    }
    getDishesByCategory(category) {
        if (category != null || category != '') {
            let data = { "category": category };
            this.http.get(this.BASE_URL + '/dishes/by', { params: data }).subscribe(response => {
                // console.log("oooo" + response.json())
                this.dishesStore = response.json();
                this.dishSubjet.next(this.dishesStore);
            }, error => {
                this.handleError("Unable to get dishes");
            });
        }
    }
    getDishesByType(type) {
        if (type != null || type != '') {
            let data = { "type": type };
            this.http.get(this.BASE_URL + '/dishes/by', { params: data }).subscribe(response => {
                // console.log("oooo" + response.json())
                this.dishesStore = response.json();
                this.dishSubjet.next(this.dishesStore);
            }, error => {
                this.handleError("Unable to get dishes");
            });
        }
    }
    search(search) {
        if (typeof search === 'undefined' || search == null || search === null || search == '') {
            // console.log("hhhhhh " + search)
            alert("Please provide value in search box.");
        }
        else {
            // console.log("oooo" + search)
            let data = { "search": search };
            this.http.get(this.BASE_URL + '/dishes/search', { params: data }).subscribe(response => {
                console.log("oooo" + response.json());
                if (response.json().length === 0) {
                    alert("Search did not return any results.");
                }
                else {
                    this.dishesStore = response.json();
                    this.dishSubjet.next(this.dishesStore);
                }
            }, error => {
                this.handleError("Unable to get dishes");
            });
        }
    }
    postDish(dish) {
        this.http.post(this.BASE_URL + '/dishes', dish).subscribe(response => {
            this.informCreated("dish " + response.json().name + " was created!");
        }, error => {
            this.handleError("Unable to post dish");
        });
    }
    deleteDish(dish) {
        if (confirm("Are you sure you wish to delete Lease ' " + dish.name + " '")) {
            this.http.delete(this.BASE_URL + '/dishes' + "/" + dish.id).finally(() => { this.dishSubjet; })
                .subscribe(res => {
                this.alertUser("Dish Has been Deleted");
            }, err => {
                this.handleError("Unable to delete dish");
            });
        }
    }
    handleError(error) {
        //console.error(error);
        this.sb.open(error, 'close', { duration: 2000 });
    }
    emptyValue(error) {
        // console.error(error);
        this.sb.open(error, 'close', { duration: 2000 });
    }
    alertUser(message) {
        // console.log(message);
        this.sb.open(message, 'close', { duration: 2000 });
    }
    informCreated(message) {
        this.sb.open(message, 'close', { duration: 2000 });
    }
};
WebService = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_0__["Http"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]])
], WebService);

class Dish {
}


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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Liliya\Documents\Centennial\API course\final project\dishes.fe\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map