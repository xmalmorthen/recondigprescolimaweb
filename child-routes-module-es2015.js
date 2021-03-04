(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["child-routes-module"],{

/***/ "7px8":
/*!****************************************!*\
  !*** ./src/app/guards/access.guard.ts ***!
  \****************************************/
/*! exports provided: AccessGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccessGuard", function() { return AccessGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/user.service */ "qfBg");
/* harmony import */ var _services_handler_errors_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/handler-errors.service */ "fVQW");





let AccessGuard = class AccessGuard {
    constructor(userService, handlerErrorsService, router) {
        this.userService = userService;
        this.handlerErrorsService = handlerErrorsService;
        this.router = router;
    }
    canActivate(route, state) {
        const sessModel = this.userService.storageSessModel;
        let res = true;
        switch (route.routeConfig.path) {
            case 'captura':
                res = sessModel.roles.includes(1) || sessModel.roles.includes(2) || sessModel.roles.includes(4) || sessModel.roles.includes(5);
                break;
            case 'consultas':
                res = sessModel.roles.includes(1) || sessModel.roles.includes(2) || sessModel.roles.includes(6);
                break;
            case 'constancias':
                res = sessModel.roles.includes(1) || sessModel.roles.includes(2) || sessModel.roles.includes(7);
                break;
            case 'catalogo/usuarios':
            case 'catalogo/delitos':
            case 'catalogo/juzgados':
            case 'catalogo/libertades':
            case 'catalogo/salas':
                res = sessModel.roles.includes(1) || sessModel.roles.includes(2) || sessModel.roles.includes(3);
                break;
            case 'bitacora':
                res = sessModel.roles.includes(1) || sessModel.roles.includes(2);
                break;
            default:
                break;
        }
        if (!res) {
            this.handlerErrorsService.showErr("Restringido", { message: "Permisos insuficientes" }, 'error');
            this.router.navigate(['/']);
        }
        return res;
    }
};
AccessGuard.ctorParameters = () => [
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
    { type: _services_handler_errors_service__WEBPACK_IMPORTED_MODULE_4__["HandlerErrorsService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AccessGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AccessGuard);



/***/ }),

/***/ "E5tf":
/*!**********************************************!*\
  !*** ./src/app/pages/child-routes.module.ts ***!
  \**********************************************/
/*! exports provided: ChildRoutesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChildRoutesModule", function() { return ChildRoutesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "U5Cf");
/* harmony import */ var _dashboard_capture_capture_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dashboard/capture/capture.component */ "zekh");
/* harmony import */ var _dashboard_queryes_queryes_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dashboard/queryes/queryes.component */ "mvBV");
/* harmony import */ var _dashboard_proof_proof_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dashboard/proof/proof.component */ "6fEO");
/* harmony import */ var _dashboard_catalogs_persons_persons_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dashboard/catalogs/persons/persons.component */ "9SxO");
/* harmony import */ var _dashboard_catalogs_users_users_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dashboard/catalogs/users/users.component */ "e+v9");
/* harmony import */ var _dashboard_catalogs_crimes_crimes_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./dashboard/catalogs/crimes/crimes.component */ "Fkt7");
/* harmony import */ var _dashboard_catalogs_court_court_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./dashboard/catalogs/court/court.component */ "SSx8");
/* harmony import */ var _dashboard_catalogs_freedom_freedom_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./dashboard/catalogs/freedom/freedom.component */ "KMDW");
/* harmony import */ var _dashboard_catalogs_rooms_rooms_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./dashboard/catalogs/rooms/rooms.component */ "Nxsu");
/* harmony import */ var _dashboard_binnacle_binnacle_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./dashboard/binnacle/binnacle.component */ "Larg");
/* harmony import */ var _auth_info_info_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./auth/info/info.component */ "vJ9b");
/* harmony import */ var _guards_access_guard__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../guards/access.guard */ "7px8");
















const childsRoutes = [
    { path: '', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"] },
    { path: 'captura', component: _dashboard_capture_capture_component__WEBPACK_IMPORTED_MODULE_4__["CaptureComponent"], canActivate: [_guards_access_guard__WEBPACK_IMPORTED_MODULE_15__["AccessGuard"]] },
    { path: 'consultas', component: _dashboard_queryes_queryes_component__WEBPACK_IMPORTED_MODULE_5__["QueryesComponent"], canActivate: [_guards_access_guard__WEBPACK_IMPORTED_MODULE_15__["AccessGuard"]] },
    { path: 'constancias', component: _dashboard_proof_proof_component__WEBPACK_IMPORTED_MODULE_6__["ProofComponent"], canActivate: [_guards_access_guard__WEBPACK_IMPORTED_MODULE_15__["AccessGuard"]] },
    { path: 'catalogo/personas', component: _dashboard_catalogs_persons_persons_component__WEBPACK_IMPORTED_MODULE_7__["PersonsComponent"], canActivate: [_guards_access_guard__WEBPACK_IMPORTED_MODULE_15__["AccessGuard"]] },
    { path: 'catalogo/usuarios', component: _dashboard_catalogs_users_users_component__WEBPACK_IMPORTED_MODULE_8__["UsersComponent"], canActivate: [_guards_access_guard__WEBPACK_IMPORTED_MODULE_15__["AccessGuard"]] },
    { path: 'catalogo/delitos', component: _dashboard_catalogs_crimes_crimes_component__WEBPACK_IMPORTED_MODULE_9__["CrimesComponent"], canActivate: [_guards_access_guard__WEBPACK_IMPORTED_MODULE_15__["AccessGuard"]] },
    { path: 'catalogo/juzgados', component: _dashboard_catalogs_court_court_component__WEBPACK_IMPORTED_MODULE_10__["CourtComponent"], canActivate: [_guards_access_guard__WEBPACK_IMPORTED_MODULE_15__["AccessGuard"]] },
    { path: 'catalogo/libertades', component: _dashboard_catalogs_freedom_freedom_component__WEBPACK_IMPORTED_MODULE_11__["FreedomComponent"], canActivate: [_guards_access_guard__WEBPACK_IMPORTED_MODULE_15__["AccessGuard"]] },
    { path: 'catalogo/salas', component: _dashboard_catalogs_rooms_rooms_component__WEBPACK_IMPORTED_MODULE_12__["RoomsComponent"], canActivate: [_guards_access_guard__WEBPACK_IMPORTED_MODULE_15__["AccessGuard"]] },
    { path: 'bitacora', component: _dashboard_binnacle_binnacle_component__WEBPACK_IMPORTED_MODULE_13__["BinnacleComponent"], canActivate: [_guards_access_guard__WEBPACK_IMPORTED_MODULE_15__["AccessGuard"]] },
    { path: 'usuario/info', component: _auth_info_info_component__WEBPACK_IMPORTED_MODULE_14__["InfoComponent"], canActivate: [_guards_access_guard__WEBPACK_IMPORTED_MODULE_15__["AccessGuard"]] },
];
let ChildRoutesModule = class ChildRoutesModule {
};
ChildRoutesModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(childsRoutes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], ChildRoutesModule);



/***/ })

}]);
//# sourceMappingURL=child-routes-module-es2015.js.map