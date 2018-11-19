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
/* harmony import */ var _dishes_manage_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./dishes.manage.component */ "./src/app/dishes.manage.component.ts");
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
        path: 'manage',
        component: _dishes_manage_component__WEBPACK_IMPORTED_MODULE_12__["ManageDishComponent"]
    },
    {
        path: 'manage/:id',
        component: _dishes_manage_component__WEBPACK_IMPORTED_MODULE_12__["ManageDishComponent"]
    }
];
let AppModule = class AppModule {
};
AppModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _angular_http__WEBPACK_IMPORTED_MODULE_1__["HttpModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forRoot(routes), _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"]],
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"], _dishes_component__WEBPACK_IMPORTED_MODULE_7__["DishesComponent"], _dishes_manage_component__WEBPACK_IMPORTED_MODULE_12__["ManageDishComponent"], _nav_component__WEBPACK_IMPORTED_MODULE_10__["NavComponent"], _home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]],
        providers: [_web_service__WEBPACK_IMPORTED_MODULE_9__["WebService"]]
    })
], AppModule);



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
    constructor(webService, route) {
        this.webService = webService;
        this.route = route;
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
};
DishesComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'dishes',
        template: `
    <button (click)="showAll()" mat-raised-button color="primary">Show All</button>

    <div *ngFor="let dish of webService.dishes | async">
        <mat-card class="card">
            <mat-card-title (click)="selectById(dish.id)" style="cursor: pointer">{{dish.id}}</mat-card-title>
            <mat-card-content (click)="selectByName(dish.name)" style="cursor: pointer">{{dish.name}}</mat-card-content>
            <mat-card-content (click)="selectByType(dish.type)" style="cursor: pointer">{{dish.type}}</mat-card-content>
            <mat-card-content (click)="selectByCategory(dish.category)" style="cursor: pointer">{{dish.category}}</mat-card-content>
            <mat-card-content>{{dish.description}}</mat-card-content>
            <button (click)="delete(dish)" mat-raised-button color="warn">Delete</button>
            <button [routerLink]="['/manage', dish.id]"  mat-raised-button color="primary">Update</button>
            <button [routerLink]="['/manage', dish.id]"  mat-raised-button color="primary">View Details</button>
        </mat-card>
    </div>
    
    `
    }),
    __metadata("design:paramtypes", [_web_service__WEBPACK_IMPORTED_MODULE_1__["WebService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
], DishesComponent);



/***/ }),

/***/ "./src/app/dishes.manage.component.html":
/*!**********************************************!*\
  !*** ./src/app/dishes.manage.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\r\n    <form [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\">\r\n        <mat-form-field>\r\n            <input style=\"width:350px\" [ngClass]=\"{'error': isValid('name')}\" matInput placeholder=\"Name\" formControlName=\"name\">\r\n        </mat-form-field>\r\n        <mat-form-field>\r\n            <input style=\"width:350px\" [ngClass]=\"{'error': isValid('type')}\" matInput placeholder=\"Type\" formControlName=\"type\">\r\n        </mat-form-field>\r\n        <mat-form-field>\r\n            <input style=\"width:350px\" [ngClass]=\"{'error': isValid('category')}\" matInput placeholder=\"Category\" formControlName=\"category\">\r\n        </mat-form-field>\r\n        <mat-form-field>\r\n            <textarea  style=\"width:350px\" [ngClass]=\"{'error': isValid('description')}\" matInput placeholder=\"Description\" formControlName=\"description\"></textarea>\r\n        </mat-form-field>\r\n        <br>\r\n        <button mat-raised-button ng-show=\"dish.id ==''\" class=\"ng-hide\" color=\"primary\">Create Dish</button>\r\n        <button mat-raised-button ng-show=\"dish.id !=''\" class=\"ng-hide\" color=\"primary\">Update Dish</button>\r\n\r\n    </form>\r\n</mat-card>"

/***/ }),

/***/ "./src/app/dishes.manage.component.ts":
/*!********************************************!*\
  !*** ./src/app/dishes.manage.component.ts ***!
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
        template: __webpack_require__(/*! ./dishes.manage.component.html */ "./src/app/dishes.manage.component.html"),
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
    constructor() { }
};
NavComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'nav',
        template: `
        <mat-toolbar color="primary">
            <button mat-button routerLink="/" >View Dishes</button>
            <button mat-button routerLink="/manage" >Manage Dish</button>
            </mat-toolbar>
    `
    }),
    __metadata("design:paramtypes", [])
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
                console.log("oooo" + response.json());
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
                console.log("oooo" + response.json());
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
                console.log("oooo" + response.json());
                this.dishesStore = response.json();
                this.dishSubjet.next(this.dishesStore);
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
                this.alert("Dish Has been Deleted");
            }, err => {
                this.handleError("Unable to delete dish");
            });
        }
    }
    handleError(error) {
        console.error(error);
        this.sb.open(error, 'close', { duration: 2000 });
    }
    alert(message) {
        console.log(message);
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

module.exports = __webpack_require__(/*! C:\Users\Liliya\Documents\Centennial\API course\assignments\2\dishes.fe\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map