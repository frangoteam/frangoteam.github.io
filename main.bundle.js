webpackJsonp(["main"],{

/***/ "../../../../../package.json":
/***/ (function(module, exports) {

module.exports = {"name":"fuxa","version":"1.0.4","keywords":[],"author":"frangoteam <4frango@gmail.com>","description":"Web-based Process Visualization (SCADA/HMI) software","repository":{"type":"git","url":"https://github.com/frangoteam/FUXA.git"},"scripts":{"ng":"ng","start":"ng serve --dev","start-ele":"ng serve --env=winele","start-demo":"ng serve --env=demo","build":"ng build","test":"ng test","lint":"ng lint","e2e":"ng e2e"},"dependencies":{"@angular/animations":"5.2.0","@angular/cdk":"^5.2.5","@angular/common":"5.2.0","@angular/compiler":"5.2.0","@angular/core":"5.2.0","@angular/forms":"5.2.0","@angular/http":"5.2.0","@angular/material":"^5.2.5","@angular/platform-browser":"5.2.0","@angular/platform-browser-dynamic":"5.2.0","@angular/router":"5.2.0","@codebyjordan/scrollbar":"^2.1.6","@ngx-translate/core":"^9.1.1","@ngx-translate/http-loader":"^2.0.1","bcryptjs":"^2.4.3","body-parser":"^1.18.2","core-js":"^2.4.1","express":"^4.16.4","file-saver":"^1.3.8","gulp-autoprefixer":"^5.0.0","gulp-concat":"^2.6.1","gulp-csso":"^3.0.1","gulp-htmlmin":"^4.0.0","gulp-minify":"^3.0.2","gulp-sass":"^4.0.1","gulp-sourcemaps":"^2.6.4","gulp-uglify":"^3.0.0","hammerjs":"^2.0.8","material-design-icons":"^3.0.1","ng5-slider":"^1.1.7","ngx-color-picker":"^7.4.0","ngx-drag-drop":"^1.1.0","ngx-toastr":"^8.10.2","rxjs":"^5.5.2","socket.io-client":"^2.2.0","zone.js":"^0.8.14"},"devDependencies":{"@angular-devkit/core":"^0.7.3","@angular/cli":"1.6.3","@angular/compiler-cli":"^5.0.0","@angular/language-service":"5.2.0","@types/jasmine":"~2.5.53","@types/jasminewd2":"~2.0.2","@types/node":"~6.0.60","codelyzer":"^4.0.2","gulp":"^4.0.0","jasmine-core":"~2.6.2","jasmine-spec-reporter":"~4.1.0","karma":"^4.0.1","karma-chrome-launcher":"~2.1.1","karma-cli":"~1.0.1","karma-coverage-istanbul-reporter":"^1.2.1","karma-jasmine":"~1.1.0","karma-jasmine-html-reporter":"^0.2.2","protractor":"^5.4.0","ts-node":"~3.2.0","tslint":"~5.7.0","typescript":"~2.4.2"}}

/***/ }),

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

/***/ "../../../../../src/app/_directives/dialog-draggable.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DialogDraggableDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators_takeUntil__ = __webpack_require__("../../../../rxjs/_esm5/operators/takeUntil.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_fromEvent__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/fromEvent.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_operators_take__ = __webpack_require__("../../../../rxjs/_esm5/operators/take.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__modal_position_cache__ = __webpack_require__("../../../../../src/app/_directives/modal-position.cache.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var DialogDraggableDirective = (function () {
    function DialogDraggableDirective(matDialogRef, container, positionCache) {
        this.matDialogRef = matDialogRef;
        this.container = container;
        this.positionCache = positionCache;
    }
    DialogDraggableDirective.prototype.ngOnInit = function () {
        var _this = this;
        var dialogType = this.matDialogRef.componentInstance.constructor;
        var cachedValue = this.positionCache.get(dialogType);
        this.offset = cachedValue || this._getOffset();
        this._updatePosition(this.offset.y, this.offset.x);
        this.matDialogRef.beforeClose().pipe(Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators_take__["a" /* take */])(1))
            .subscribe(function () { return _this.positionCache.set(dialogType, _this.offset); });
    };
    DialogDraggableDirective.prototype.onMouseDown = function (event) {
        var _this = this;
        this.mouseStart = { x: event.pageX, y: event.pageY };
        var mouseup$ = __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].fromEvent(document, 'mouseup');
        this._subscription = mouseup$.subscribe(function () { return _this.onMouseup(); });
        var mousemove$ = __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].fromEvent(document, 'mousemove')
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators_takeUntil__["a" /* takeUntil */])(mouseup$))
            .subscribe(function (e) { return _this.onMouseMove(e); });
        this._subscription.add(mousemove$);
    };
    DialogDraggableDirective.prototype.onMouseMove = function (event) {
        this.mouseDelta = { x: (event.pageX - this.mouseStart.x), y: (event.pageY - this.mouseStart.y) };
        this._updatePosition(this.offset.y + this.mouseDelta.y, this.offset.x + this.mouseDelta.x);
    };
    DialogDraggableDirective.prototype.onMouseup = function () {
        if (this._subscription) {
            this._subscription.unsubscribe();
            this._subscription = undefined;
        }
        if (this.mouseDelta) {
            this.offset.x += this.mouseDelta.x;
            this.offset.y += this.mouseDelta.y;
        }
    };
    DialogDraggableDirective.prototype._updatePosition = function (top, left) {
        this.matDialogRef.updatePosition({
            top: top + 'px',
            left: left + 'px'
        });
    };
    DialogDraggableDirective.prototype._getOffset = function () {
        var box = this.container['_elementRef'].nativeElement.getBoundingClientRect();
        return {
            x: box.left + pageXOffset,
            y: box.top + pageYOffset
        };
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* HostListener */])('mousedown', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [MouseEvent]),
        __metadata("design:returntype", void 0)
    ], DialogDraggableDirective.prototype, "onMouseDown", null);
    DialogDraggableDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */])({
            selector: '[mat-dialog-draggable]'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["m" /* MatDialogRef */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["k" /* MatDialogContainer */],
            __WEBPACK_IMPORTED_MODULE_6__modal_position_cache__["a" /* ModalPositionCache */]])
    ], DialogDraggableDirective);
    return DialogDraggableDirective;
}());



/***/ }),

/***/ "../../../../../src/app/_directives/lazyFor.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LazyForDirective; });
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

var LazyForDirective = (function () {
    function LazyForDirective(vcr, tpl, iterableDiffers) {
        this.vcr = vcr;
        this.tpl = tpl;
        this.iterableDiffers = iterableDiffers;
        this.list = [];
        this.initialized = false;
        this.firstUpdate = true;
        this.lastChangeTriggeredByScroll = false;
    }
    Object.defineProperty(LazyForDirective.prototype, "lazyForOf", {
        set: function (list) {
            this.list = list;
            if (list) {
                this.differ = this.iterableDiffers.find(list).create();
                if (this.initialized) {
                    this.update();
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    LazyForDirective.prototype.ngOnInit = function () {
        var _this = this;
        this.templateElem = this.vcr.element.nativeElement;
        this.lazyForContainer = this.templateElem.parentElement;
        //Adding an event listener will trigger ngDoCheck whenever the event fires so we don't actually need to call
        //update here.
        this.lazyForContainer.addEventListener('scroll', function () {
            _this.lastChangeTriggeredByScroll = true;
        });
        this.initialized = true;
    };
    LazyForDirective.prototype.ngDoCheck = function () {
        if (this.differ && Array.isArray(this.list)) {
            if (this.lastChangeTriggeredByScroll) {
                this.update();
                this.lastChangeTriggeredByScroll = false;
            }
            else {
                var changes = this.differ.diff(this.list);
                if (changes !== null) {
                    this.update();
                }
            }
        }
    };
    /**
     * List update
     *
     * @returns {void}
     */
    LazyForDirective.prototype.update = function () {
        //Can't run the first update unless there is an element in the list
        if (this.list.length === 0) {
            this.vcr.clear();
            if (!this.firstUpdate) {
                this.beforeListElem.style.height = '0';
                this.afterListElem.style.height = '0';
            }
            return;
        }
        if (this.firstUpdate) {
            this.onFirstUpdate();
        }
        var listHeight = this.lazyForContainer.clientHeight;
        var scrollTop = this.lazyForContainer.scrollTop;
        //The height of anything inside the container but above the lazyFor content
        var fixedHeaderHeight = (this.beforeListElem.getBoundingClientRect().top - this.beforeListElem.scrollTop) -
            (this.lazyForContainer.getBoundingClientRect().top - this.lazyForContainer.scrollTop);
        //This needs to run after the scrollTop is retrieved.
        this.vcr.clear();
        var listStartI = Math.floor((scrollTop - fixedHeaderHeight) / this.itemHeight);
        listStartI = this.limitToRange(listStartI, 0, this.list.length);
        var listEndI = Math.ceil((scrollTop - fixedHeaderHeight + listHeight) / this.itemHeight);
        listEndI = this.limitToRange(listEndI, -1, this.list.length - 1);
        for (var i = listStartI; i <= listEndI; i++) {
            this.vcr.createEmbeddedView(this.tpl, {
                $implicit: this.list[i],
                index: i
            });
        }
        this.beforeListElem.style.height = listStartI * this.itemHeight + "px";
        this.afterListElem.style.height = (this.list.length - listEndI - 1) * this.itemHeight + "px";
    };
    /**
     * First update.
     *
     * @returns {void}
     */
    LazyForDirective.prototype.onFirstUpdate = function () {
        var sampleItemElem;
        if (this.itemHeight === undefined || this.itemTagName === undefined) {
            this.vcr.createEmbeddedView(this.tpl, {
                $implicit: this.list[0],
                index: 0
            });
            sampleItemElem = this.templateElem.nextSibling;
        }
        if (this.itemHeight === undefined) {
            this.itemHeight = sampleItemElem.clientHeight;
        }
        if (this.itemTagName === undefined) {
            this.itemTagName = sampleItemElem.tagName;
        }
        this.beforeListElem = document.createElement(this.itemTagName);
        this.templateElem.parentElement.insertBefore(this.beforeListElem, this.templateElem);
        this.afterListElem = document.createElement(this.itemTagName);
        this.templateElem.parentElement.insertBefore(this.afterListElem, this.templateElem.nextSibling);
        // If you want to use <li> elements
        if (this.itemTagName.toLowerCase() === 'li') {
            this.beforeListElem.style.listStyleType = 'none';
            this.afterListElem.style.listStyleType = 'none';
        }
        this.firstUpdate = false;
    };
    /**
     * Limit To Range
     *
     * @param {number} num - Element number.
     * @param {number} min - Min element number.
     * @param {number} max - Max element number.
     *
     * @returns {number}
     */
    LazyForDirective.prototype.limitToRange = function (num, min, max) {
        return Math.max(Math.min(num, max), min);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Array),
        __metadata("design:paramtypes", [Array])
    ], LazyForDirective.prototype, "lazyForOf", null);
    LazyForDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */])({
            selector: '[lazyFor]'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewContainerRef */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* TemplateRef */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* IterableDiffers */]])
    ], LazyForDirective);
    return LazyForDirective;
}());



/***/ }),

/***/ "../../../../../src/app/_directives/modal-position.cache.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalPositionCache; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ModalPositionCache = (function () {
    function ModalPositionCache() {
        this._cache = new Map();
    }
    ModalPositionCache.prototype.set = function (dialog, position) {
        this._cache.set(dialog, position);
    };
    ModalPositionCache.prototype.get = function (dialog) {
        return this._cache.get(dialog);
    };
    ModalPositionCache = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])()
    ], ModalPositionCache);
    return ModalPositionCache;
}());



/***/ }),

/***/ "../../../../../src/app/_directives/ngx-draggable.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DraggableDirective; });
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

var DraggableDirective = (function () {
    function DraggableDirective(el, renderer) {
        this.el = el;
        this.renderer = renderer;
        this.dx = 0;
        this.dy = 0;
        this.canDrag = '';
        this.active = false;
        this.mustBePosition = ['absolute', 'fixed', 'relative'];
    }
    Object.defineProperty(DraggableDirective.prototype, "draggable", {
        set: function (val) {
            if (val === undefined || val === null || val === '')
                return;
            this.canDrag = val;
        },
        enumerable: true,
        configurable: true
    });
    DraggableDirective.prototype.ngOnInit = function () {
        this.renderer.setElementAttribute(this.el.nativeElement, 'draggable', 'true');
    };
    DraggableDirective.prototype.ngAfterViewInit = function () {
        try {
            var position = window.getComputedStyle(this.el.nativeElement).position;
            if (this.mustBePosition.indexOf(position) === -1) {
                console.warn(this.el.nativeElement, 'Must be having position attribute set to ' + this.mustBePosition.join('|'));
            }
        }
        catch (ex) {
            console.error(ex);
        }
    };
    DraggableDirective.prototype.ngOnDestroy = function () {
        this.renderer.setElementAttribute(this.el.nativeElement, 'draggable', 'false');
    };
    DraggableDirective.prototype.onDragStart = function (event) {
        this.active = false;
        if (this.draggableHeight && this.draggableHeight < event.offsetY) {
            return;
        }
        this.active = true;
        this.dx = event.x - this.el.nativeElement.offsetLeft;
        this.dy = event.y - this.el.nativeElement.offsetTop;
    };
    DraggableDirective.prototype.onDrag = function (event) {
        if (!this.active) {
            return;
        }
        this.doTranslation(event.x, event.y);
    };
    DraggableDirective.prototype.onDragEnd = function (event) {
        if (!this.active) {
            return;
        }
        this.dx = 0;
        this.dy = 0;
    };
    DraggableDirective.prototype.doTranslation = function (x, y) {
        if (!x || !y)
            return;
        this.renderer.setElementStyle(this.el.nativeElement, 'top', (y - this.dy) + 'px');
        this.renderer.setElementStyle(this.el.nativeElement, 'left', (x - this.dx) + 'px');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])('draggable'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], DraggableDirective.prototype, "draggable", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Number)
    ], DraggableDirective.prototype, "draggableHeight", void 0);
    DraggableDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */])({
            selector: '[draggable]',
            host: {
                '(dragstart)': 'onDragStart($event)',
                '(dragend)': 'onDragEnd($event)',
                '(drag)': 'onDrag($event)'
            }
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Renderer */]])
    ], DraggableDirective);
    return DraggableDirective;
}());



/***/ }),

/***/ "../../../../../src/app/_directives/number.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NumberOnlyDirective; });
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

var NumberOnlyDirective = (function () {
    function NumberOnlyDirective(el) {
        this.el = el;
        // Allow decimal numbers and negative values
        this.regex = new RegExp(/^-?[0-9]+(\.[0-9]*){0,1}$/g); ///^-?[0-9]+(\.[0-9]*){0,1}$/g);
        // Allow key codes for special events. Reflect :
        // Backspace, tab, end, home
        this.specialKeys = ['Backspace', 'Delete', 'Tab', 'End', 'Home', 'ArrowLeft', 'ArrowRight'];
    }
    NumberOnlyDirective.prototype.onKeyDown = function (event) {
        // Allow Backspace, tab, end, and home keys
        if (this.specialKeys.indexOf(event.key) !== -1) {
            return;
        }
        var current = this.el.nativeElement.value;
        var next = '';
        if (event.key === '-') {
            event.preventDefault();
            if (!current.startsWith('-')) {
                next = event.key + current;
                this.el.nativeElement.value = next;
            }
        }
        else {
            next = current.concat(event.key);
        }
        if (next && !String(next).match(this.regex)) {
            event.preventDefault();
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* HostListener */])('keydown', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [KeyboardEvent]),
        __metadata("design:returntype", void 0)
    ], NumberOnlyDirective.prototype, "onKeyDown", null);
    NumberOnlyDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */])({
            selector: '[numberOnly]'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */]])
    ], NumberOnlyDirective);
    return NumberOnlyDirective;
}());



/***/ }),

/***/ "../../../../../src/app/_helpers/auth-interceptor.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export AuthInterceptor */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return httpInterceptorProviders; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/_services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_project_service__ = __webpack_require__("../../../../../src/app/_services/project.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TOKEN_HEADER_KEY = 'x-access-token';
var USER_HEADER_KEY = 'x-auth-user';
var AuthInterceptor = (function () {
    function AuthInterceptor(injector) {
        this.injector = injector;
    }
    AuthInterceptor.prototype.intercept = function (req, next) {
        var _this = this;
        var authService = this.injector.get(__WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]);
        if (authService.getUserToken) {
            var token = authService.getUserToken();
            if (token != null) {
                var user = authService.getUser();
                if (user) {
                    var locuser = { user: user.username, groups: user.groups };
                    req = req.clone({ headers: req.headers.set(USER_HEADER_KEY, JSON.stringify(locuser)) });
                }
                req = req.clone({ headers: req.headers.set(TOKEN_HEADER_KEY, token) });
            }
        }
        // if (!req.headers.has('Content-Type')) {
        //     req = req.clone({ headers: req.headers.set('Content-Type', 'application/json') });
        // }
        // req = req.clone({ headers: req.headers.set('Accept', 'application/json') });
        return next.handle(req).do(function (event) {
            // if (event instanceof HttpResponse) {
            // do stuff with response if you want
            // }
        }, function (err) {
            if (err instanceof __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["d" /* HttpErrorResponse */]) {
                if (err.status === 403) {
                    // redirect to the login route or show a modal
                    authService.signOut();
                    var projectService = _this.injector.get(__WEBPACK_IMPORTED_MODULE_3__services_project_service__["a" /* ProjectService */]);
                    projectService.reload();
                }
            }
        });
    };
    AuthInterceptor = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* Injector */]])
    ], AuthInterceptor);
    return AuthInterceptor;
}());

var httpInterceptorProviders = [
    { provide: __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HTTP_INTERCEPTORS */], useClass: AuthInterceptor, multi: true }
];


/***/ }),

/***/ "../../../../../src/app/_helpers/custom-http.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export CustomHttp */
/* unused harmony export customHttpFactory */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return customHttpProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_config__ = __webpack_require__("../../../../../src/app/app.config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/throw.js");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var CustomHttp = (function (_super) {
    __extends(CustomHttp, _super);
    function CustomHttp(backend, defaultOptions) {
        return _super.call(this, backend, defaultOptions) || this;
    }
    CustomHttp.prototype.get = function (url, options) {
        // return super.get(appConfig.apiUrl + url).catch(this.handleError);
        return _super.prototype.get.call(this, __WEBPACK_IMPORTED_MODULE_2__app_config__["a" /* appConfig */].apiUrl + url, this.addJwt(options)).catch(this.handleError);
    };
    CustomHttp.prototype.post = function (url, body, options) {
        // return super.post(appConfig.apiUrl + url, body).catch(this.handleError);
        return _super.prototype.post.call(this, __WEBPACK_IMPORTED_MODULE_2__app_config__["a" /* appConfig */].apiUrl + url, body, this.addJwt(options)).catch(this.handleError);
    };
    CustomHttp.prototype.put = function (url, body, options) {
        return _super.prototype.put.call(this, __WEBPACK_IMPORTED_MODULE_2__app_config__["a" /* appConfig */].apiUrl + url, body, this.addJwt(options)).catch(this.handleError);
    };
    CustomHttp.prototype.delete = function (url, options) {
        return _super.prototype.delete.call(this, __WEBPACK_IMPORTED_MODULE_2__app_config__["a" /* appConfig */].apiUrl + url, this.addJwt(options)).catch(this.handleError);
    };
    // private helper methods
    CustomHttp.prototype.addJwt = function (options) {
        // ensure request options and headers are not null
        options = options || new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]();
        options.headers = options.headers || new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        // add authorization header with jwt token
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            options.headers.append('Authorization', 'Bearer ' + currentUser.token);
        }
        return options;
    };
    CustomHttp.prototype.handleError = function (error) {
        if (error.status === 401) {
            // 401 unauthorized response so log user out of client
            window.location.href = '/login';
        }
        return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].throw(error._body);
    };
    CustomHttp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* ConnectionBackend */], __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]])
    ], CustomHttp);
    return CustomHttp;
}(__WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]));

function customHttpFactory(xhrBackend, requestOptions) {
    return new CustomHttp(xhrBackend, requestOptions);
}
var customHttpProvider = {
    provide: __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */],
    useFactory: customHttpFactory,
    deps: [__WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* XHRBackend */], __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]]
};


/***/ }),

/***/ "../../../../../src/app/_helpers/define.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Define; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var Define = (function () {
    function Define() {
    }
    Define.materialIcons = [
        // Action
        'accessibility', 'accessible', 'account_balance', 'account_box', 'account_circle', 'alarm', 'alarm_add', 'alarm_off',
        'alarm_on', 'all_out', 'android', 'announcement', 'aspect_ratio', 'assessment', 'assignment', 'assignment_ind', 'assignment_late',
        'assignment_return', 'assignment_returned', 'assignment_turned_in', 'autorenew', 'backup', 'book', 'bookmark', 'bookmark_border', 'bug_report', 'build',
        'cached', 'camera_enhance', 'change_history', 'check_circle', 'check_circle_outline', 'chrome_reader_mode', 'class', 'code',
        'compare_arrows', 'copyright', 'credit_card', 'dashboard', 'delete', 'delete_outline', 'description', 'dns',
        'done', 'done_all', 'done_outline', 'donut_large', 'donut_small', 'eject', 'euro_symbol', 'event', 'event_seat', 'exit_to_app',
        'explore', 'extension', 'face', 'favorite', 'favorite_border', 'feedback', 'find_in_page', 'find_replace', 'fingerprint', 'flight_land', 'flight_takeoff',
        'flip_to_back', 'flip_to_front', 'gavel', 'get_app', 'gif', 'grade', 'group_work', 'help', 'help_outline', 'highlight_off', 'history',
        'home', 'hourglass_empty', 'hourglass_full', 'important_devices', 'info', 'input', 'invert_colors', 'label',
        'language', 'launch', 'list', 'lock', 'lock_open', 'loyalty', 'markunread_mailbox', 'motorcycle', 'note_add', 'offline_pin',
        'opacity', 'open_in_browser', 'open_with', 'pageview', 'pan_tool', 'perm_camera_mic', 'perm_contact_calendar', 'perm_data_setting', 'perm_device_information', 'perm_identity', 'perm_media',
        'perm_phone_msg', 'perm_scan_wifi', 'pets', 'picture_in_picture', 'play_for_work', 'polymer', 'power_settings_new', 'print', 'query_builder',
        'question_answer', 'receipt', 'record_voice_over', 'reorder', 'report_problem', 'restore_page', 'room', 'rowing', 'search', 'settings',
        'settings_applications', 'settings_backup_restore', 'settings_bluetooth', 'settings_brightness', 'settings_cell', 'settings_ethernet',
        'settings_input_antenna', 'settings_input_component', 'settings_input_hdmi', 'settings_input_svideo',
        'settings_overscan', 'settings_phone', 'settings_power', 'settings_remote', 'settings_voice', 'shop', 'shopping_basket', 'shopping_cart', 'speaker_notes', 'spellcheck',
        'stars', 'store', 'subject', 'supervisor_account', 'swap_horiz', 'swap_horizontal_circle', 'swap_vert', 'swap_vertical_circle', 'tab',
        'tab_unselected', 'theaters', 'thumb_down', 'thumb_up', 'thumbs_up_down', 'timeline', 'toc', 'toll', 'touch_app', 'track_changes',
        'trending_down', 'trending_flat', 'trending_up', 'verified_user', 'view_agenda', 'view_array', 'view_carousel', 'view_column', 'view_day',
        'view_list', 'view_module', 'view_quilt', 'view_stream', 'view_week', 'visibility', 'visibility_off', 'watch_later', 'work',
        'zoom_in', 'zoom_out',
        // Alert
        'add_alert', 'error', 'error_outline', 'warning',
        // Av
        'airplay', 'av_timer',
        'fast_forward', 'fast_rewind', 'featured_play_list', 'featured_video', 'fiber_manual_record', 'fiber_new', 'fiber_pin', 'fiber_smart_record', 'games',
        'library_add', 'library_books', 'mic', 'mic_none', 'mic_off', 'new_releases', 'not_interested', 'note', 'pause', 'pause_circle_filled',
        'pause_circle_outline', 'play_arrow', 'play_circle_filled', 'play_circle_outline', 'playlist_add', 'playlist_add_check', 'playlist_play', 'queue', 'queue_play_next', 'radio',
        'recent_actors', 'remove_from_queue', 'repeat', 'repeat_one', 'shuffle', 'skip_next', 'skip_previous', 'slow_motion_video', 'snooze', 'sort_by_alpha',
        'stop', 'subscriptions', 'subtitles', 'surround_sound', 'video_label', 'volume_down', 'volume_mute', 'volume_off', 'volume_up', 'web', 'web_asset',
        // Communication
        'business', 'call', 'call_end', 'call_made', 'call_merge', 'call_missed', 'call_missed_outgoing', 'call_received',
        'call_split', 'cancel_presentation', 'chat ', 'chat_bubble', 'chat_bubble_outline', 'clear_all', 'comment', 'contact_mail', 'contact_phone', 'contacts',
        'dialer_sip', 'dialpad', 'email', 'forum', 'import_contacts', 'import_export', 'invert_colors_off', 'list_alt',
        'live_help', 'location_off', 'location_on', 'mail_outline', 'message', 'no_sim', 'pause_presentation', 'person_add_disabled', 'phonelink_erase', 'phonelink_lock',
        'phonelink_ring', 'phonelink_setup', 'portable_wifi_off', 'present_to_all', 'print_disabled', 'ring_volume', 'rss_feed', 'screen_share', 'sentiment_satisfied_alt', 'speaker_phone', 'stay_current_landscape',
        'stay_current_portrait', 'stop_screen_share', 'swap_calls', 'textsms', 'voicemail', 'vpn_key',
        // Content
        'add', 'add_box', 'add_circle', 'add_circle_outline',
        'archive', 'backspace', 'block', 'clear', 'create', 'delete_sweep', 'drafts', 'filter_list', 'flag',
        'font_download', 'forward', 'gesture', 'inbox', 'link', 'link_off', 'low_priority', 'move_to_inbox', 'next_week',
        'redo', 'remove', 'remove_circle', 'remove_circle_outline', 'reply', 'reply_all', 'report', 'report_off', 'save', 'save_alt',
        'select_all', 'send', 'sort', 'text_format', 'unarchive', 'undo', 'weekend',
        // Device
        'access_alarm', 'access_time', 'add_alarm', 'add_to_home_screen', 'airplanemode_active', 'airplanemode_inactive', 'battery_alert', 'battery_full', 'battery_unknown',
        'bluetooth', 'bluetooth_connected', 'bluetooth_disabled', 'bluetooth_searching', 'brightness_auto', 'brightness_high', 'brightness_low', 'brightness_medium', 'data_usage',
        'developer_mode', 'devices', 'dvr', 'gps_fixed', 'gps_not_fixed', 'gps_off', 'graphic_eq', 'network_cell', 'network_wifi', 'nfc',
        'screen_rotation', 'screen_lock_rotation', 'sd_storage', 'settings_system_daydream', 'signal_cellular_no_sim',
        'signal_cellular_null', 'signal_cellular_off', 'signal_wifi_4_bar_lock', 'signal_wifi_off', 'storage', 'usb', 'wallpaper', 'widgets', 'wifi_tethering',
        // Editor
        'attach_file', 'attach_money', 'border_all', 'border_bottom', 'border_clear', 'border_color', 'border_horizontal', 'border_inner', 'border_left', 'border_outer',
        'border_right', 'border_style', 'border_top', 'border_vertical', 'bubble_chart', 'drag_handle', 'format_align_center', 'format_align_justify', 'format_align_left', 'format_align_right',
        'format_bold', 'format_clear', 'format_color_fill', 'format_color_reset', 'format_color_text', 'format_indent_decrease', 'format_indent_increase', 'format_italic', 'format_line_spacing',
        'format_list_bulleted', 'format_list_numbered', 'format_list_numbered_rtl', 'format_paint', 'format_quote', 'format_shapes', 'format_size', 'format_strikethrough', 'format_underlined',
        'functions', 'highlight', 'insert_chart', 'insert_chart_outlined', 'insert_comment', 'insert_drive_file', 'insert_emoticon', 'insert_photo', 'linear_scale', 'merge_type', 'mode_comment',
        'monetization_on', 'money_off', 'multiline_chart', 'notes', 'pie_chart', 'publish', 'short_text', 'show_chart', 'space_bar', 'strikethrough_s', 'table_chart',
        'title', 'vertical_align_bottom', 'vertical_align_center', 'vertical_align_top', 'wrap_text',
        // File
        'attachment', 'cloud', 'cloud_circle', 'cloud_done', 'cloud_download', 'cloud_off', 'cloud_queue', 'cloud_upload', 'create_new_folder', 'folder', 'folder_open', 'folder_shared',
        // Hardware
        'cast', 'cast_connected', 'cast_for_education', 'computer', 'desktop_mac', 'desktop_windows', 'developer_board', 'device_hub', 'devices_other', 'dock', 'gamepad',
        'headset', 'headset_mic', 'keyboard', 'keyboard_arrow_down', 'keyboard_arrow_left', 'keyboard_arrow_right', 'keyboard_arrow_up', 'keyboard_backspace', 'keyboard_capslock', 'keyboard_hide',
        'keyboard_return', 'keyboard_tab', 'keyboard_voice', 'laptop', 'laptop_chromebook', 'laptop_windows', 'memory', 'mouse', 'power_input', 'router', 'scanner', 'security', 'sim_card',
        'speaker', 'speaker_group', 'tablet_android', 'toys', 'tv', 'videogame_asset', 'watch',
        // Image
        'add_a_photo', 'add_to_photos', 'adjust', 'assistant', 'audiotrack', 'blur_circular', 'blur_linear', 'blur_on', 'brightness_1', 'brightness_2', 'brightness_3',
        'brightness_5', 'brightness_6', 'brightness_7', 'broken_image', 'brush', 'burst_mode', 'camera', 'camera_alt', 'camera_front', 'camera_rear', 'center_focus_strong', 'center_focus_weak',
        'collections', 'collections_bookmark', 'color_lens', 'colorize', 'compare', 'control_point_duplicate', 'crop', 'crop_7_5', 'crop_16_9', 'crop_5_4', 'crop_3_2', 'crop_din', 'crop_free',
        'crop_original', 'crop_rotate', 'dehaze', 'details', 'edit', 'exposure', 'exposure_neg_1', 'exposure_neg_2', 'exposure_plus_1', 'exposure_plus_2', 'exposure_zero', 'filter',
        'filter_1', 'filter_2', 'filter_3', 'filter_4', 'filter_5', 'filter_6', 'filter_7', 'filter_8', 'filter_9', 'filter_b_and_w', 'filter_drama', 'filter_frames', 'filter_hdr', 'filter_none',
        'filter_tilt_shift', 'filter_vintage', 'flare', 'flash_auto', 'flash_off', 'flash_on', 'flip', 'gradient', 'grain', 'grid_off', 'grid_on', 'hdr_strong', 'hdr_weak', 'healing',
        'image_aspect_ratio', 'iso', 'leak_add', 'leak_remove', 'looks', 'looks_one', 'looks_two', 'looks_3', 'looks_4', 'looks_5', 'looks_6', 'loupe', 'movie_creation',
        'movie_filter', 'music_note', 'nature', 'nature_people', 'panorama_fish_eye', 'panorama_horizontal', 'panorama_vertical', 'panorama_wide_angle', 'photo_filter',
        'photo_size_select_small', 'picture_as_pdf', 'portrait', 'remove_red_eye', 'rotate_left', 'rotate_right', 'slideshow', 'straighten', 'style', 'switch_camera', 'texture',
        'timelapse', 'timer', 'timer_off', 'tonality', 'transform', 'tune', 'view_comfy', 'view_compact', 'vignette', 'wb_incandescent', 'wb_iridescent', 'wb_sunny',
        // Maps
        'beenhere', 'directions', 'directions_bike', 'directions_boat', 'directions_bus', 'directions_car', 'directions_railway', 'directions_run',
        'directions_subway', 'directions_walk', 'edit_attributes', 'ev_station', 'flight', 'hotel', 'layers', 'layers_clear', 'local_activity', 'local_atm', 'local_bar', 'local_cafe',
        'local_car_wash', 'local_dining', 'local_drink', 'local_florist', 'local_gas_station', 'local_hospital', 'local_laundry_service', 'local_library', 'local_mall', 'local_parking',
        'local_pharmacy', 'local_pizza', 'local_printshop', 'local_shipping', 'local_taxi', 'map', 'navigation', 'near_me', 'person_pin', 'person_pin_circle', 'pin_drop', 'rate_review',
        'restaurant', 'restaurant_menu', 'satellite', 'store_mall_directory', 'streetview', 'subway', 'traffic', 'train', 'tram', 'transfer_within_a_station', 'zoom_out_map',
        // Navigation
        'apps', 'arrow_back', 'arrow_downward', 'arrow_drop_down', 'arrow_drop_down_circle', 'arrow_drop_up', 'arrow_forward',
        'arrow_upward', 'cancel', 'check', 'chevron_left', 'chevron_right', 'close', 'expand_less', 'expand_more', 'first_page', 'fullscreen', 'fullscreen_exit', 'last_page', 'menu', 'more_horiz',
        'more_vert', 'refresh', 'subdirectory_arrow_left', 'subdirectory_arrow_right', 'unfold_less', 'unfold_more',
        // Notification
        'adb', 'airline_seat_flat', 'airline_seat_flat_angled', 'airline_seat_recline_extra', 'airline_seat_recline_normal', 'disc_full', 'more', 'network_check', 'network_locked', 'no_encryption',
        'power', 'power_off', 'priority_high', 'sd_card', 'sms', 'sms_failed', 'sync', 'sync_disabled', 'sync_problem', 'system_update', 'vibration', 'vpn_lock', 'wc', 'wifi', 'wifi_off',
        // Places
        'ac_unit', 'airport_shuttle', 'all_inclusive', 'beach_access', 'business_center', 'casino', 'child_care', 'child_friendly', 'fitness_center', 'golf_course', 'hot_tub', 'kitchen',
        'pool', 'room_service', 'rv_hookup', 'smoke_free', 'smoking_rooms', 'spa',
        // Social
        'cake', 'domain', 'group', 'group_add', 'location_city', 'mood', 'mood_bad', 'notifications', 'notifications_active', 'notifications_none', 'notifications_off', 'notifications_paused',
        'pages', 'party_mode', 'people_outline', 'person', 'person_add', 'person_outline', 'public', 'school', 'sentiment_dissatisfied', 'sentiment_satisfied', 'sentiment_very_dissatisfied',
        'sentiment_very_satisfied', 'share', 'thumb_down_alt', 'thumb_up_alt', 'whatshot',
        // Toggle
        'check_box', 'check_box_outline_blank', 'indeterminate_check_box', 'radio_button_checked', 'radio_button_unchecked', 'star', 'star_border', 'star_half'
    ];
    Define = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])()
    ], Define);
    return Define;
}());



/***/ }),

/***/ "../../../../../src/app/_helpers/dictionary.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Dictionary; });
var Dictionary = (function () {
    function Dictionary() {
        this.items = {};
        this.count = 0;
    }
    Dictionary.prototype.ContainsKey = function (key) {
        return this.items.hasOwnProperty(key);
    };
    Dictionary.prototype.Count = function () {
        return this.count;
    };
    Dictionary.prototype.Add = function (key, value) {
        if (!this.items.hasOwnProperty(key))
            this.count++;
        this.items[key] = value;
    };
    Dictionary.prototype.Remove = function (key) {
        var val = this.items[key];
        delete this.items[key];
        this.count--;
        return val;
    };
    Dictionary.prototype.Item = function (key) {
        return this.items[key];
    };
    Dictionary.prototype.Keys = function () {
        var keySet = [];
        for (var prop in this.items) {
            if (this.items.hasOwnProperty(prop)) {
                keySet.push(prop);
            }
        }
        return keySet;
    };
    Dictionary.prototype.Values = function () {
        var values = [];
        for (var prop in this.items) {
            if (this.items.hasOwnProperty(prop)) {
                values.push(this.items[prop]);
            }
        }
        return values;
    };
    return Dictionary;
}());



/***/ }),

/***/ "../../../../../src/app/_helpers/endpointapi.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EndPointApi; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var EndPointApi = (function () {
    function EndPointApi() {
    }
    EndPointApi.getURL = function () {
        if (!this.url) {
            if (__WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].apiEndpoint) {
                this.url = __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].apiEndpoint;
            }
            else {
                var origin = location.origin;
                var path = location.origin.split('/')[2];
                var protocoll = location.origin.split(':')[0];
                var temp = path.split(':')[0];
                if (temp.length > 1 && __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].apiPort) {
                    path = temp + ':' + __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].apiPort;
                }
                this.url = protocoll + '://' + path;
            }
        }
        return this.url;
    };
    EndPointApi.getRemoteURL = function (destIp) {
        var protocoll = location.origin.split(':')[0];
        var path = destIp + ':' + __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].apiPort;
        return protocoll + '://' + path + '/api';
    };
    EndPointApi.url = null;
    EndPointApi = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])()
    ], EndPointApi);
    return EndPointApi;
}());



/***/ }),

/***/ "../../../../../src/app/_helpers/utils.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Utils; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EnumToArrayPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var Utils = (function () {
    function Utils() {
    }
    Utils_1 = Utils;
    Utils.searchTreeStartWith = function (element, matchingStart) {
        if (element.id.startsWith(matchingStart)) {
            return element;
        }
        else if (element.children != null) {
            var i;
            var result = null;
            for (i = 0; result == null && i < element.children.length; i++) {
                result = Utils_1.searchTreeStartWith(element.children[i], matchingStart);
            }
            return result;
        }
        return null;
    };
    Utils.isNullOrUndefined = function (ele) {
        return (ele === null || ele === undefined) ? true : false;
    };
    // returns keys of enum
    Utils.enumKeys = function (p) {
        var keys = Object.keys(p);
        return keys;
    };
    // returns values of enum
    Utils.enumValues = function (p) {
        var keys = Object.keys(p);
        return keys.map(function (el) { return Object(p)[el]; });
    };
    Utils.getGUID = function () {
        var uuid = "", i, random;
        for (i = 0; i < 16; i++) {
            random = Math.random() * 16 | 0;
            if (i == 8) {
                uuid += "-";
            }
            uuid += (i == 12 ? 4 : (i == 16 ? (random & 3 | 8) : random)).toString(16);
        }
        return uuid;
    };
    ;
    Utils.getShortGUID = function () {
        var uuid = "", i, random;
        for (i = 0; i < 12; i++) {
            random = Math.random() * 16 | 0;
            if (i == 8) {
                uuid += "-";
            }
            uuid += (i == 4 ? 4 : (i == 6 ? (random & 3 | 8) : random)).toString(12);
        }
        return uuid;
    };
    ;
    Utils.defaultColor = ['#FFFFFF', '#000000', '#EEECE1', '#1F497D', '#4F81BD', '#C0504D', '#9BBB59', '#8064A2', '#4BACC6',
        '#F79646', '#C00000', '#FF0000', '#FFC000', '#FFD04A', '#FFFF00', '#92D050', '#0AC97D', '#00B050', '#00B0F0', '#4484EF', '#3358C0',
        '#002060', '#7030A0', '#D8D8D8', '#BFBFBF', '#A5A5A5', '#7F7F7F', '#595959', '#3F3F3F', '#262626'];
    Utils.lineColor = ['#4484ef', '#ef0909', '#00b050', '#ffd04a', '#7030a0', '#a5a5a5', '#c0504d', '#000000'];
    Utils = Utils_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])()
    ], Utils);
    return Utils;
    var Utils_1;
}());

var EnumToArrayPipe = (function () {
    function EnumToArrayPipe() {
    }
    EnumToArrayPipe.prototype.transform = function (value, args) {
        var result = [];
        var keys = Object.keys(value);
        var values = Object.values(value);
        for (var i = 0; i < keys.length; i++) {
            result.push({ key: keys[i], value: values[i] });
        }
        return result;
        //or if you want to order the result: 
        //return result.sort((a, b) => a.value < b.value ? -1 : 1);
    };
    EnumToArrayPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Pipe */])({
            name: 'enumToArray'
        })
    ], EnumToArrayPipe);
    return EnumToArrayPipe;
}());



/***/ }),

/***/ "../../../../../src/app/_helpers/windowref.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WindowRef; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

function _window() {
    // return the global native browser window object
    return window;
}
var WindowRef = (function () {
    function WindowRef() {
    }
    Object.defineProperty(WindowRef.prototype, "nativeWindow", {
        get: function () {
            return _window();
        },
        enumerable: true,
        configurable: true
    });
    WindowRef = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])()
    ], WindowRef);
    return WindowRef;
}());



/***/ }),

/***/ "../../../../../src/app/_models/chart.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Chart */
/* unused harmony export ChartLine */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return ChartViewType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ChartRangeType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChartRangeConverter; });
var Chart = (function () {
    function Chart() {
    }
    return Chart;
}());

var ChartLine = (function () {
    function ChartLine() {
    }
    return ChartLine;
}());

var ChartViewType;
(function (ChartViewType) {
    ChartViewType["realtime1"] = "chart.viewtype-realtime1";
    ChartViewType["history"] = "chart.viewtype-history";
})(ChartViewType || (ChartViewType = {}));
var ChartRangeType;
(function (ChartRangeType) {
    ChartRangeType["last8h"] = "chart.rangetype-last8h";
    ChartRangeType["last1d"] = "chart.rangetype-last1d";
    ChartRangeType["last3d"] = "chart.rangetype-last3d";
    ChartRangeType["last1w"] = "chart.rangetype-last1w";
})(ChartRangeType || (ChartRangeType = {}));
var ChartRangeConverter = (function () {
    function ChartRangeConverter() {
    }
    ChartRangeConverter.ChartRangeToHours = function (crt) {
        var types = Object.keys(ChartRangeType);
        if (crt === types[0]) {
            return 8;
        }
        else if (crt === types[1]) {
            return 24;
        }
        else if (crt === types[2]) {
            return 24 * 3;
        }
        else if (crt === types[3]) {
            return 24 * 7;
        }
        return 0;
    };
    return ChartRangeConverter;
}());



/***/ }),

/***/ "../../../../../src/app/_models/device.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Device; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return Tag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return DeviceNetProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return DeviceSecurity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return DeviceType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return TagType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return MessageSecurityMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return SecurityPolicy; });
var Device = (function () {
    function Device() {
    }
    return Device;
}());

var Tag = (function () {
    function Tag() {
    }
    return Tag;
}());

var DeviceNetProperty = (function () {
    function DeviceNetProperty() {
    }
    return DeviceNetProperty;
}());

var DeviceSecurity = (function () {
    function DeviceSecurity() {
    }
    return DeviceSecurity;
}());

var DeviceType;
(function (DeviceType) {
    DeviceType["FuxaServer"] = "FuxaServer";
    DeviceType["SiemensS7"] = "SiemensS7";
    DeviceType["OPCUA"] = "OPCUA";
})(DeviceType || (DeviceType = {}));
var TagType;
(function (TagType) {
    TagType["Bool"] = "Bool";
    TagType["Byte"] = "Byte";
    TagType["Int"] = "Int";
    TagType["Word"] = "Word";
    TagType["DInt"] = "DInt";
    TagType["DWord"] = "DWord";
    TagType["Real"] = "Real";
})(TagType || (TagType = {}));
var MessageSecurityMode;
(function (MessageSecurityMode) {
    /** The MessageSecurityMode is invalid */
    MessageSecurityMode[MessageSecurityMode["INVALID"] = 0] = "INVALID";
    /** No security is applied. */
    MessageSecurityMode["NONE"] = "NONE";
    /** All messages are signed but not encrypted. */
    MessageSecurityMode["SIGN"] = "SIGN";
    /** All messages are signed and encrypted. */
    MessageSecurityMode["SIGNANDENCRYPT"] = "SIGNANDENCRYPT";
})(MessageSecurityMode || (MessageSecurityMode = {}));
var SecurityPolicy;
(function (SecurityPolicy) {
    /** see http://opcfoundation.org/UA/SecurityPolicy#None */
    SecurityPolicy["None"] = "None";
    /** see http://opcfoundation.org/UA/SecurityPolicy#Basic128 */
    SecurityPolicy["Basic128"] = "Basic128";
    /** see http://opcfoundation.org/UA/SecurityPolicy#Basic128Rsa15 */
    SecurityPolicy["Basic128Rsa15"] = "Basic128Rsa15";
    /** see http://opcfoundation.org/UA/SecurityPolicy#Basic192 */
    SecurityPolicy["Basic192"] = "Basic192";
    /** see http://opcfoundation.org/UA/SecurityPolicy#Basic192Rsa15 */
    SecurityPolicy["Basic192Rsa15"] = "Basic192Rsa15";
    /** see http://opcfoundation.org/UA/SecurityPolicy#Basic256 */
    SecurityPolicy["Basic256"] = "Basic256";
    /** see http://opcfoundation.org/UA/SecurityPolicy#Basic256Rsa15 */
    SecurityPolicy["Basic256Rsa15"] = "Basic256Rsa15";
    /** see http://opcfoundation.org/UA/SecurityPolicy#Basic256Sha25 */
    SecurityPolicy["Basic256Sha256"] = "Basic256Sha256";
})(SecurityPolicy || (SecurityPolicy = {}));


/***/ }),

/***/ "../../../../../src/app/_models/hmi.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return Hmi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return View; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return LayoutSettings; });
/* unused harmony export NavigationSettings */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return NaviModeType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return NaviItemType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return NaviItem; });
/* unused harmony export HeaderSettings */
/* unused harmony export DocProfile */
/* unused harmony export MyItem */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return GaugeSettings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return GaugeProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return GaugeEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return GaugeAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return GaugeStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return GaugeEventType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return GaugeEventActionType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return GaugeRangeProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return Variable; });
/* unused harmony export VariableRange */
/* unused harmony export Alarm */
/* unused harmony export WindowLink */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return SelElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Event; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DaqQuery; });
/* unused harmony export DaqResult */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return HelpData; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__device__ = __webpack_require__("../../../../../src/app/_models/device.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var Hmi = (function () {
    function Hmi() {
        this.layout = new LayoutSettings();
        this.views = [];
        // variables: Variable[] = [];
        // alarmes: Alarm[] = [];
        // devices = {};
    }
    return Hmi;
}());

var View = (function () {
    function View() {
        this.id = '';
        this.name = '';
        this.profile = new DocProfile();
        this.items = {};
        this.variables = {};
        this.svgcontent = '';
    }
    return View;
}());

var LayoutSettings = (function () {
    function LayoutSettings() {
        this.start = '';
        this.navigation = new NavigationSettings();
        this.header = new HeaderSettings();
    }
    return LayoutSettings;
}());

var NavigationSettings = (function () {
    function NavigationSettings() {
        this.mode = Object.keys(NaviModeType).find(function (key) { return NaviModeType[key] === NaviModeType.over; });
        this.type = Object.keys(NaviItemType).find(function (key) { return NaviItemType[key] === NaviItemType.block; });
    }
    return NavigationSettings;
}());

var NaviModeType;
(function (NaviModeType) {
    NaviModeType["void"] = "item.navsmode-none";
    NaviModeType["push"] = "item.navsmode-push";
    NaviModeType["over"] = "item.navsmode-over";
    NaviModeType["fix"] = "item.navsmode-fix";
})(NaviModeType || (NaviModeType = {}));
var NaviItemType;
(function (NaviItemType) {
    NaviItemType["icon"] = "item.navtype-icons";
    NaviItemType["text"] = "item.navtype-text";
    NaviItemType["block"] = "item.navtype-icons-text-block";
    NaviItemType["inline"] = "item.navtype-icons-text-inline";
})(NaviItemType || (NaviItemType = {}));
var NaviItem = (function () {
    function NaviItem() {
    }
    return NaviItem;
}());

var HeaderSettings = (function () {
    function HeaderSettings() {
    }
    return HeaderSettings;
}());

var DocProfile = (function () {
    function DocProfile() {
        this.width = 640;
        this.height = 480;
        this.bkcolor = '';
    }
    return DocProfile;
}());

var MyItem = (function () {
    function MyItem() {
    }
    return MyItem;
}());

var GaugeSettings = (function () {
    function GaugeSettings(id, type) {
        this.id = id;
        this.type = type;
        this.name = '';
        this.property = null; // set to GaugeProperty after upgrate
        this.label = '';
    }
    return GaugeSettings;
}());

var GaugeProperty = (function () {
    function GaugeProperty() {
        this.events = [];
        this.actions = [];
    }
    return GaugeProperty;
}());

var GaugeEvent = (function () {
    function GaugeEvent() {
    }
    return GaugeEvent;
}());

var GaugeAction = (function () {
    function GaugeAction() {
    }
    return GaugeAction;
}());

var GaugeStatus = (function () {
    function GaugeStatus() {
        this.variablesValue = {};
        this.onlyChange = false;
    }
    return GaugeStatus;
}());

var GaugeEventType;
(function (GaugeEventType) {
    GaugeEventType["click"] = "Click";
})(GaugeEventType || (GaugeEventType = {}));
var GaugeEventActionType;
(function (GaugeEventActionType) {
    GaugeEventActionType["onpage"] = "Open Page";
    GaugeEventActionType["onwindow"] = "Open Window";
    GaugeEventActionType["ondialog"] = "Open Dialog";
    GaugeEventActionType["onSetValue"] = "Set Value";
})(GaugeEventActionType || (GaugeEventActionType = {}));
var GaugeRangeProperty = (function () {
    function GaugeRangeProperty() {
    }
    return GaugeRangeProperty;
}());

var Variable = (function () {
    function Variable(id, source, name) {
        this.id = id;
        this.name = name;
        this.source = source;
    }
    return Variable;
}());

var VariableRange = (function () {
    function VariableRange() {
    }
    return VariableRange;
}());

var Alarm = (function (_super) {
    __extends(Alarm, _super);
    function Alarm() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Alarm;
}(__WEBPACK_IMPORTED_MODULE_0__device__["g" /* Tag */]));

var WindowLink = (function () {
    function WindowLink() {
        this.name = '';
        this.title = '';
    }
    return WindowLink;
}());

var SelElement = (function () {
    function SelElement() {
        this.type = '';
        this.ele = null;
    }
    return SelElement;
}());

var Event = (function () {
    function Event() {
        this.id = '';
        this.value = null;
        this.dbg = '';
    }
    return Event;
}());

var DaqQuery = (function () {
    function DaqQuery() {
    }
    return DaqQuery;
}());

var DaqResult = (function () {
    function DaqResult() {
    }
    return DaqResult;
}());

var HelpData = (function () {
    function HelpData() {
    }
    return HelpData;
}());



/***/ }),

/***/ "../../../../../src/app/_models/user.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return UserGroups; });
var User = (function () {
    function User() {
    }
    return User;
}());

var UserGroups = (function () {
    function UserGroups() {
    }
    UserGroups.GroupsToValue = function (grps, extended) {
        var result = 0;
        if (grps) {
            for (var i = 0; i < grps.length; i++) {
                result += grps[i].id;
            }
        }
        var shift = (extended) ? this.EXTENSION : 0;
        return result << shift;
    };
    UserGroups.ValueToGroups = function (value, extended) {
        var result = [];
        var shift = (extended) ? this.EXTENSION : 0;
        for (var i = 0; i < this.Groups.length; i++) {
            if ((value >> shift) & this.Groups[i].id) {
                result.push(this.Groups[i]);
            }
        }
        return result;
    };
    UserGroups.GroupToLabel = function (value) {
        var result = '';
        for (var i = 0; i < this.Groups.length; i++) {
            if (value & this.Groups[i].id) {
                if (result) {
                    result += ',';
                }
                result += this.Groups[i].label;
            }
        }
        return result;
    };
    UserGroups.ADMINMASK = [-1, 255];
    UserGroups.EXTENSION = 8;
    UserGroups.Groups = [{ id: 1, label: 'A' },
        { id: 2, label: 'B' },
        { id: 4, label: 'C' },
        { id: 8, label: 'D' },
        { id: 16, label: 'E' },
        { id: 32, label: 'F' },
        { id: 64, label: 'G' },
        { id: 128, label: 'H' }];
    return UserGroups;
}());



/***/ }),

/***/ "../../../../../src/app/_services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* unused harmony export UserProfile */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_user__ = __webpack_require__("../../../../../src/app/_models/user.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__helpers_endpointapi__ = __webpack_require__("../../../../../src/app/_helpers/endpointapi.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AuthService = (function () {
    function AuthService(http) {
        this.http = http;
        this.endPointConfig = __WEBPACK_IMPORTED_MODULE_5__helpers_endpointapi__["a" /* EndPointApi */].getURL();
        var user = JSON.parse(localStorage.getItem('currentUser'));
        if (user) {
            this.currentUser = user;
        }
    }
    AuthService.prototype.signIn = function (username, password) {
        var _this = this;
        return new __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"](function (observer) {
            if (__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].serverEnabled) {
                var header = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["e" /* HttpHeaders */]({ 'Content-Type': 'application/json' });
                return _this.http.post(_this.endPointConfig + '/api/signin', { username: username, password: password }).subscribe(function (result) {
                    if (result) {
                        _this.currentUser = result.data;
                        _this.saveUserToken(_this.currentUser);
                    }
                    observer.next();
                }, function (err) {
                    console.log(err);
                    observer.error(err);
                });
            }
            else {
                observer.next();
            }
        });
    };
    AuthService.prototype.signOut = function () {
        this.removeUser();
    };
    AuthService.prototype.getUser = function () {
        return this.currentUser;
    };
    AuthService.prototype.getUserToken = function () {
        if (this.currentUser) {
            return this.currentUser.token;
        }
        else {
            return null;
        }
    };
    AuthService.prototype.isAdmin = function () {
        if (this.currentUser && __WEBPACK_IMPORTED_MODULE_3__models_user__["b" /* UserGroups */].ADMINMASK.indexOf(this.currentUser.groups) !== -1) {
            return true;
        }
        return false;
    };
    // to check by page refresh
    AuthService.prototype.saveUserToken = function (user) {
        localStorage.setItem('currentUser', JSON.stringify(user));
    };
    AuthService.prototype.removeUser = function () {
        this.currentUser = null;
        localStorage.removeItem('currentUser');
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], AuthService);
    return AuthService;
}());

var UserProfile = (function (_super) {
    __extends(UserProfile, _super);
    function UserProfile() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return UserProfile;
}(__WEBPACK_IMPORTED_MODULE_3__models_user__["a" /* User */]));



/***/ }),

/***/ "../../../../../src/app/_services/hmi.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HmiService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_socket_io_client__ = __webpack_require__("../../../../socket.io-client/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_socket_io_client__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_hmi__ = __webpack_require__("../../../../../src/app/_models/hmi.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_project_service__ = __webpack_require__("../../../../../src/app/_services/project.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__helpers_endpointapi__ = __webpack_require__("../../../../../src/app/_helpers/endpointapi.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ngx_translate_core__ = __webpack_require__("../../../../@ngx-translate/core/@ngx-translate/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var HmiService = (function () {
    function HmiService(projectService, translateService, toastr) {
        this.projectService = projectService;
        this.translateService = translateService;
        this.toastr = toastr;
        // @Output() onSaveCurrent: EventEmitter<boolean> = new EventEmitter();
        this.onVariableChanged = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.onDeviceChanged = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.onDeviceBrowse = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.onDeviceNodeAttribute = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.onDaqResult = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.onDeviceProperty = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.version = "1.00";
        this.hmiresource = "hmi-config";
        this.viewSignalGaugeMap = new ViewSignalGaugeMap();
        this.devices = {};
        this.variables = {};
        this.endPointConfig = __WEBPACK_IMPORTED_MODULE_5__helpers_endpointapi__["a" /* EndPointApi */].getURL(); //"http://localhost:1881";
        if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].serverEnabled) {
            this.initSocket();
        }
    }
    HmiService_1 = HmiService;
    /**
     * Set signal value in current frontend signal array
     * Called from Test and value beckame from backend
     * @param sig
     */
    HmiService.prototype.setSignalValue = function (sig) {
        // update the signals array value 
        // notify the gui
        this.onVariableChanged.emit(sig);
    };
    /**
     * Set signal value to backend
     * Value input in frontend
     * @param sigId
     * @param value
     */
    HmiService.prototype.putSignalValue = function (sigId, value) {
        if (this.variables[sigId]) {
            this.variables[sigId].value = value;
            if (this.socket) {
                this.socket.emit('device-values', { cmd: 'set', var: this.variables[sigId] });
            }
            // this.onVariableChanged.emit(this.variables[sigId]);
        }
    };
    HmiService.prototype.getAllSignals = function () {
        return this.variables;
    };
    //#region Scket.io
    /**
     * Init the socket and subsribe to device status and signal value change
     */
    HmiService.prototype.initSocket = function () {
        var _this = this;
        // check to init socket io
        if (!this.socket) {
            this.socket = __WEBPACK_IMPORTED_MODULE_1_socket_io_client__(this.endPointConfig);
            // devicse status
            this.socket.on('device-status', function (message) {
                _this.onDeviceChanged.emit(message);
                if (message.status === 'connect-error') {
                    var msg = '';
                    _this.translateService.get('msg.device-connection-error', { value: message.id }).subscribe(function (txt) { msg = txt; });
                    _this.toastr.error(msg, '', {
                        timeOut: 3000,
                        closeButton: true,
                    });
                }
            });
            // device property
            this.socket.on('device-property', function (message) {
                _this.onDeviceProperty.emit(message);
            });
            // devices values
            this.socket.on('device-values', function (message) {
                for (var idx = 0; idx < message.values.length; idx++) {
                    var varid = message.id + HmiService_1.separator + message.values[idx].id;
                    if (!_this.variables[varid]) {
                        _this.variables[varid] = new __WEBPACK_IMPORTED_MODULE_3__models_hmi__["r" /* Variable */](varid, message.id, message.values[idx].id);
                    }
                    _this.variables[varid].value = message.values[idx].value;
                    _this.setSignalValue(_this.variables[varid]);
                }
            });
            // device browse
            this.socket.on('device-browse', function (message) {
                _this.onDeviceBrowse.emit(message);
            });
            // device node attribute
            this.socket.on('device-node-attribute', function (message) {
                _this.onDeviceNodeAttribute.emit(message);
            });
            // daq values
            this.socket.on('daq-result', function (message) {
                _this.onDaqResult.emit(message);
            });
            this.askDeviceValues();
        }
    };
    /**
     * Ask device status to backend
     */
    HmiService.prototype.askDeviceStatus = function () {
        if (this.socket) {
            this.socket.emit('device-status', 'get');
        }
    };
    /**
     * Ask device status to backend
     */
    HmiService.prototype.askDeviceProperty = function (endpoint, type) {
        if (this.socket) {
            var msg = { endpoint: endpoint, type: type };
            this.socket.emit('device-property', msg);
        }
    };
    /**
     * Ask device status to backend
     */
    HmiService.prototype.askDeviceValues = function () {
        if (this.socket) {
            this.socket.emit('device-values', 'get');
        }
    };
    HmiService.prototype.emitMappedSignalsGauge = function (domViewId) {
        var sigsToEmit = this.viewSignalGaugeMap.getSignalIds(domViewId);
        for (var idx = 0; idx < sigsToEmit.length; idx++) {
            if (this.variables[sigsToEmit[idx]]) {
                this.setSignalValue(this.variables[sigsToEmit[idx]]);
            }
        }
    };
    /**
     * Ask device browse to backend
     */
    HmiService.prototype.askDeviceBrowse = function (deviceId, node) {
        if (this.socket) {
            var msg = { device: deviceId, node: node };
            this.socket.emit('device-browse', msg);
        }
    };
    /**
     * Ask device node attribute to backend
     */
    HmiService.prototype.askNodeAttributes = function (deviceId, node) {
        if (this.socket) {
            var msg = { device: deviceId, node: node };
            this.socket.emit('device-node-attribute', msg);
        }
    };
    HmiService.prototype.queryDaqValues = function (msg) {
        if (this.socket) {
            this.socket.emit('daq-query', msg);
        }
    };
    //#endregion
    //#region Signals Gauges Mapping
    HmiService.prototype.addSignal = function (signalId, ga) {
        var sigsplit = signalId.split(HmiService_1.separator);
        // add to variable list
        if (!this.variables[signalId]) {
            var v = new __WEBPACK_IMPORTED_MODULE_3__models_hmi__["r" /* Variable */](signalId, sigsplit[0], sigsplit[1]);
            this.variables[signalId] = v;
        }
    };
    /**
     * map the dom view with signal and gauge settings
     * @param domViewId
     * @param signalId
     * @param ga
     */
    HmiService.prototype.addSignalGaugeToMap = function (domViewId, signalId, ga) {
        this.viewSignalGaugeMap.add(domViewId, signalId, ga);
        var sigsplit = signalId.split(HmiService_1.separator);
        // add to variable list
        if (!this.variables[signalId]) {
            var v = new __WEBPACK_IMPORTED_MODULE_3__models_hmi__["r" /* Variable */](signalId, sigsplit[0], sigsplit[1]);
            this.variables[signalId] = v;
        }
        // add to device list
        if (!this.devices[sigsplit[0]]) {
            this.devices[sigsplit[0]] = {};
            this.devices[sigsplit[0]] = sigsplit[1];
        }
        else if (!this.devices[sigsplit[0]][sigsplit[1]]) {
            this.devices[sigsplit[0]] = sigsplit[1];
        }
    };
    /**
     * remove mapped dom view Gauges
     * @param domViewId
     * return the removed gauge settings id list with signal id binded
     */
    HmiService.prototype.removeSignalGaugeFromMap = function (domViewId) {
        var _this = this;
        var sigsIdremoved = this.viewSignalGaugeMap.getSignalIds(domViewId);
        var result = {};
        sigsIdremoved.forEach(function (sigid) {
            var gs = _this.viewSignalGaugeMap.signalsGauges(domViewId, sigid);
            if (gs) {
                result[sigid] = gs[0].id;
            }
        });
        this.viewSignalGaugeMap.remove(domViewId);
        return result;
    };
    /**
     * get the gauges settings list of mapped dom view with the signal
     * @param domViewId
     * @param sigid
     */
    HmiService.prototype.getMappedSignalsGauges = function (domViewId, sigid) {
        return Object.values(this.viewSignalGaugeMap.signalsGauges(domViewId, sigid));
    };
    /**
     * get all signals property mapped in all dom views
     * @param fulltext a copy with item name and source
     */
    HmiService.prototype.getMappedVariables = function (fulltext) {
        var _this = this;
        var result = [];
        this.viewSignalGaugeMap.getAllSignalIds().forEach(function (sigid) {
            if (_this.variables[sigid]) {
                var toadd = _this.variables[sigid];
                if (fulltext) {
                    toadd = Object.assign({}, _this.variables[sigid]);
                    var device = _this.projectService.getDeviceFromId(toadd.source);
                    if (device) {
                        toadd['source'] = device.name;
                        if (device.tags[toadd.name]) {
                            toadd['name'] = device.tags[toadd.name].name;
                        }
                    }
                }
                result.push(toadd);
            }
        });
        return result;
    };
    /**
     * get singal property, complate the signal property with device tag property
     * @param sigid
     * @param fulltext
     */
    HmiService.prototype.getMappedVariable = function (sigid, fulltext) {
        if (this.variables[sigid]) {
            var result = this.variables[sigid];
            if (fulltext) {
                result = Object.assign({}, this.variables[sigid]);
                var device = this.projectService.getDeviceFromId(result.source);
                if (device) {
                    result['source'] = device.name;
                    if (device.tags[result.name]) {
                        result['name'] = device.tags[result.name].name;
                    }
                }
            }
            return result;
        }
    };
    //#endregion
    //#region Chart Function
    HmiService.prototype.getChart = function (id) {
        return this.projectService.getChart(id);
    };
    HmiService.prototype.getChartSignal = function (id) {
        var chart = this.projectService.getChart(id);
        if (chart) {
            var varsId_1 = [];
            chart.lines.forEach(function (line) {
                varsId_1.push(HmiService_1.toVariableId(line.device, line.id));
            });
            return varsId_1;
        }
    };
    //#endregion
    //#region My Static functions
    HmiService.toVariableId = function (src, name) {
        return src + HmiService_1.separator + name;
    };
    HmiService.separator = '^~^';
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */])
    ], HmiService.prototype, "onVariableChanged", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */])
    ], HmiService.prototype, "onDeviceChanged", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */])
    ], HmiService.prototype, "onDeviceBrowse", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */])
    ], HmiService.prototype, "onDeviceNodeAttribute", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */])
    ], HmiService.prototype, "onDaqResult", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */])
    ], HmiService.prototype, "onDeviceProperty", void 0);
    HmiService = HmiService_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__services_project_service__["a" /* ProjectService */],
            __WEBPACK_IMPORTED_MODULE_7__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_6_ngx_toastr__["b" /* ToastrService */]])
    ], HmiService);
    return HmiService;
    var HmiService_1;
}());

var ViewSignalGaugeMap = (function () {
    function ViewSignalGaugeMap() {
        this.views = {};
    }
    ViewSignalGaugeMap.prototype.add = function (domViewId, signalId, ga) {
        if (!this.views[domViewId]) {
            this.views[domViewId] = {};
        }
        if (!this.views[domViewId][signalId]) {
            this.views[domViewId][signalId] = [];
        }
        this.views[domViewId][signalId].push(ga);
        return true;
    };
    ViewSignalGaugeMap.prototype.remove = function (domViewId) {
        delete this.views[domViewId];
        return;
    };
    ViewSignalGaugeMap.prototype.signalsGauges = function (domViewId, sigid) {
        return this.views[domViewId][sigid];
    };
    ViewSignalGaugeMap.prototype.getSignalIds = function (domViewId) {
        var result = [];
        if (this.views[domViewId]) {
            result = Object.keys(this.views[domViewId]);
        }
        return result;
    };
    ViewSignalGaugeMap.prototype.getAllSignalIds = function () {
        var result = [];
        Object.values(this.views).forEach(function (evi) {
            Object.keys(evi).forEach(function (key) {
                if (result.indexOf(key) === -1) {
                    result.push(key);
                }
            });
        });
        return result;
    };
    return ViewSignalGaugeMap;
}());


/***/ }),

/***/ "../../../../../src/app/_services/project.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectService; });
/* unused harmony export ProjectData */
/* unused harmony export ProjectDataCmdType */
/* unused harmony export ServerSettings */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_hmi__ = __webpack_require__("../../../../../src/app/_models/hmi.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_device__ = __webpack_require__("../../../../../src/app/_models/device.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__helpers_endpointapi__ = __webpack_require__("../../../../../src/app/_helpers/endpointapi.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ngx_translate_core__ = __webpack_require__("../../../../@ngx-translate/core/@ngx-translate/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_file_saver__ = __webpack_require__("../../../../file-saver/FileSaver.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_file_saver___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_file_saver__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var ProjectService = (function () {
    function ProjectService(http, translateService, toastr) {
        var _this = this;
        this.http = http;
        this.translateService = translateService;
        this.toastr = toastr;
        this.onSaveCurrent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.onLoadHmi = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.projectData = new ProjectData(); // Project data
        this.version = '1.00';
        this.separator = '^~^';
        this.prjresource = 'prj-data';
        this.endPointConfig = __WEBPACK_IMPORTED_MODULE_5__helpers_endpointapi__["a" /* EndPointApi */].getURL();
        this.projectOld = '';
        this.saveworking = false;
        this.ready = false;
        if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].serverEnabled) {
            this.checkServer().subscribe(function (result) {
                _this.serverSettings = result;
                _this.load();
            }, function (error) {
                console.error('project.service err: ' + error);
                _this.load();
                _this.notifyServerError();
            });
        }
        else {
            this.load();
        }
    }
    //#region Load and Save
    /**
     * Load Project from Server if enable.
     * From Local Storage, from 'assets' if demo or create a local project
     */
    ProjectService.prototype.load = function () {
        var _this = this;
        if (this.serverSettings) {
            this.getServerProject().subscribe(function (prj) {
                _this.projectData = prj;
                // copy to check before save
                _this.projectOld = JSON.parse(JSON.stringify(_this.projectData));
                _this.ready = true;
                _this.notifyToLoadHmi();
                console.log('Load Server Project: ' + prj);
            }, function (err) {
                console.log('Load Server Project err: ' + err);
            });
        }
        else {
            if (!this.projectData || this.projectData.hmi.views.length <= 0) {
                var res = localStorage.getItem(this.prjresource);
                if (res) {
                    console.log('Load Local Project');
                    this.projectData = JSON.parse(res);
                }
                else if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].type === 'demo') {
                    console.log('Load Demo Project');
                    // try root path
                    this.http.get('./assets/project.demo.fuxap').subscribe(function (prj) {
                        _this.projectData = prj;
                    }, function (err) {
                    });
                }
                else {
                    console.log('Create Local Project');
                    this.setNewProject();
                }
            }
            this.notifyToLoadHmi();
            this.ready = true;
        }
    };
    /**
     * Save Project to Server if enabled
     */
    ProjectService.prototype.save = function () {
        var _this = this;
        if (this.serverSettings) {
            // check project change don't work some svg object change the order and this to check ...boooo
            this.setServerProject(this.projectData).subscribe(function (result) {
                _this.load();
                _this.toastr.success('Project save successful!');
            }, function (err) {
                console.log(err);
                var msg = '';
                _this.translateService.get('msg.project-save-error').subscribe(function (txt) { msg = txt; });
                _this.toastr.error(msg, '', {
                    timeOut: 3000,
                    closeButton: true,
                    disableTimeOut: true
                });
            });
        }
        else {
            localStorage.setItem(this.prjresource, JSON.stringify(this.projectData));
            this.load();
        }
        return true;
    };
    ProjectService.prototype.saveAs = function () {
        var filename = 'MyProject.fuxap';
        var date = new Date();
        var content = JSON.stringify(this.convertToSave(this.getProject()));
        var blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
        __WEBPACK_IMPORTED_MODULE_8_file_saver__["saveAs"](blob, filename);
    };
    ProjectService.prototype.reload = function () {
        this.load();
    };
    /**
     * Remove Tag value to save without value
     * Value was added by HmiService from socketIo event
     * @param prj
     */
    ProjectService.prototype.convertToSave = function (prj) {
        var result = JSON.parse(JSON.stringify(prj));
        for (var devid in result.devices) {
            for (var tagid in result.devices[devid].tags) {
                delete result.devices[devid].tags[tagid].value;
            }
        }
        return result;
    };
    //#endregion
    //#region Device to Save
    /**
     * Add or update Device to Project.
     * Save to Server
     * @param device
     * @param old
     */
    ProjectService.prototype.setDevice = function (device, old, security) {
        var _this = this;
        if (this.projectData.devices) {
            this.projectData.devices[device.name] = device;
            if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].serverEnabled) {
                this.setDeviceSecurity(device.name, security).subscribe(function () {
                    _this.setServerProjectData(ProjectDataCmdType.SetDevice, device).subscribe(function (result) {
                        if (old && old.name && old.name !== device.name && old.id === device.id) {
                            _this.removeDevice(old);
                        }
                    }, function (err) {
                        console.log(err);
                        _this.notifySaveError(err);
                    });
                }, function (err) {
                    console.log(err);
                    _this.notifySaveError(err);
                });
            }
        }
    };
    ProjectService.prototype.setDeviceTags = function (device) {
        var _this = this;
        this.projectData.devices[device.name] = device;
        if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].serverEnabled) {
            this.setServerProjectData(ProjectDataCmdType.SetDevice, device).subscribe(function (result) {
            }, function (err) {
                console.log(err);
                _this.notifySaveError(err);
            });
        }
    };
    /**
     * Remove Device from Project.
     * Save to Server
     * @param device
     */
    ProjectService.prototype.removeDevice = function (device) {
        var _this = this;
        delete this.projectData.devices[device.name];
        // Object.keys(this.projectData.devices).forEach((key) => {
        //     if (this.projectData.devices[key].id === device.id) {
        //         delete this.projectData.devices[key];
        //         return;
        //     }
        // });
        if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].serverEnabled) {
            this.setServerProjectData(ProjectDataCmdType.DelDevice, device).subscribe(function (result) {
            }, function (err) {
                console.log(err);
                _this.notifySaveError(err);
            });
            this.setDeviceSecurity(device.name, '').subscribe(function () {
            }, function (err) {
                console.log(err);
                _this.notifySaveError(err);
            });
        }
    };
    //#endregion
    //#region View to Save
    /**
     * Add or update View to Project.
     * Save to Server
     * @param view
     */
    ProjectService.prototype.setView = function (view) {
        var _this = this;
        var v = null;
        for (var i = 0; i < this.projectData.hmi.views.length; i++) {
            if (this.projectData.hmi.views[i].id === view.id) {
                v = this.projectData.hmi.views[i];
            }
        }
        if (v) {
            v = view;
        }
        else {
            this.projectData.hmi.views.push(view);
        }
        if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].serverEnabled) {
            this.setServerProjectData(ProjectDataCmdType.SetView, view).subscribe(function (result) {
            }, function (err) {
                console.log(err);
                _this.notifySaveError(err);
            });
        }
    };
    /**
     * Remove the View from Project
     * Delete from Server
     * @param view
     */
    ProjectService.prototype.removeView = function (view) {
        var _this = this;
        for (var i = 0; i < this.projectData.hmi.views.length; i++) {
            if (this.projectData.hmi.views[i].id === view.id) {
                this.projectData.hmi.views.splice(i, 1);
                break;
            }
        }
        if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].serverEnabled) {
            this.setServerProjectData(ProjectDataCmdType.DelView, view).subscribe(function (result) {
            }, function (err) {
                console.log(err);
                _this.notifySaveError(err);
            });
        }
    };
    //#endregion
    //#region ToServer api
    ProjectService.prototype.getServerProject = function () {
        return this.http.get(this.endPointConfig + '/api/project', {});
    };
    ProjectService.prototype.setServerProject = function (prj) {
        // let header = new HttpHeaders();
        // header.append("Access-Control-Allow-Origin", "*");
        // header.append("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        var header = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["e" /* HttpHeaders */]({ 'Content-Type': 'application/json' });
        return this.http.post(this.endPointConfig + '/api/project', prj, { headers: header });
    };
    ProjectService.prototype.setServerProjectData = function (cmd, data) {
        var header = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["e" /* HttpHeaders */]({ 'Content-Type': 'application/json' });
        var params = { cmd: cmd, data: data };
        return this.http.post(this.endPointConfig + '/api/projectData', params, { headers: header });
    };
    ProjectService.prototype.getDeviceSecurity = function (name) {
        var header = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["e" /* HttpHeaders */]({ 'Content-Type': 'application/json' });
        var params = { query: 'security', name: name };
        return this.http.get(this.endPointConfig + '/api/device', { headers: header, params: params });
    };
    ProjectService.prototype.setDeviceSecurity = function (name, value) {
        var header = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["e" /* HttpHeaders */]({ 'Content-Type': 'application/json' });
        var params = { query: 'security', name: name, value: value };
        return this.http.post(this.endPointConfig + '/api/device', { headers: header, params: params });
    };
    //#endregion
    //#region Hmi, Layout resource json struct
    /**
     * get hmi resource
     */
    ProjectService.prototype.getHmi = function () {
        return (this.ready && this.projectData) ? this.projectData.hmi : null;
    };
    ProjectService.prototype.setLayout = function (layout) {
        var _this = this;
        this.projectData.hmi.layout = layout;
        if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].serverEnabled) {
            this.setServerProjectData(ProjectDataCmdType.HmiLayout, layout).subscribe(function (result) {
            }, function (err) {
                console.log(err);
                _this.notifySaveError(err);
            });
        }
    };
    //#endregion
    //#region Charts resource
    /**
     * get charts resource
     */
    ProjectService.prototype.getCharts = function () {
        return (this.projectData) ? (this.projectData.charts) ? this.projectData.charts : [] : null;
    };
    ProjectService.prototype.getChart = function (id) {
        for (var i = 0; i < this.projectData.charts.length; i++) {
            if (this.projectData.charts[i].id === id) {
                return this.projectData.charts[i];
            }
        }
    };
    /**
     * save the charts to project
     * @param charts
     */
    ProjectService.prototype.setCharts = function (charts) {
        var _this = this;
        this.projectData.charts = charts;
        if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].serverEnabled) {
            this.setServerProjectData(ProjectDataCmdType.Charts, charts).subscribe(function (result) {
            }, function (err) {
                console.log(err);
                _this.notifySaveError(err);
            });
        }
    };
    //#endregion
    //#region Notify
    ProjectService.prototype.notifyToLoadHmi = function () {
        this.onLoadHmi.emit(true);
    };
    ProjectService.prototype.notifySaveError = function (err) {
        var msg = '';
        this.translateService.get('msg.project-save-error').subscribe(function (txt) { msg = txt; });
        if (err.status === 401) {
            this.translateService.get('msg.project-save-unauthorized').subscribe(function (txt) { msg = txt; });
        }
        this.toastr.error(msg, '', {
            timeOut: 3000,
            closeButton: true,
            disableTimeOut: true
        });
    };
    ProjectService.prototype.notifyServerError = function () {
        var msg = '';
        this.translateService.get('msg.server-connection-error').subscribe(function (txt) { msg = txt; });
        this.toastr.error(msg, '', {
            timeOut: 3000,
            closeButton: true,
            disableTimeOut: true
        });
    };
    //#endregion
    /**
     * Set Project data and save resource to backend
     * Used from open and upload JSON Project file
     * @param prj project data to save
     */
    ProjectService.prototype.setProject = function (prj, notify) {
        this.projectData = prj;
        this.save();
    };
    ProjectService.prototype.setNewProject = function () {
        this.projectData = new ProjectData();
        var server = new __WEBPACK_IMPORTED_MODULE_4__models_device__["a" /* Device */]();
        server.name = 'FUXA Server';
        server.id = '0';
        server.type = __WEBPACK_IMPORTED_MODULE_4__models_device__["d" /* DeviceType */].FuxaServer;
        server.property = new __WEBPACK_IMPORTED_MODULE_4__models_device__["b" /* DeviceNetProperty */]();
        this.projectData.server = server;
        this.save();
    };
    ProjectService.prototype.getProject = function () {
        return this.projectData;
    };
    ProjectService.prototype.getServer = function () {
        return (this.projectData) ? this.projectData.server : null;
    };
    ProjectService.prototype.getDevices = function () {
        return (this.projectData) ? this.projectData.devices : {};
    };
    ProjectService.prototype.getDeviceFromId = function (id) {
        var _this = this;
        var result;
        Object.keys(this.projectData.devices).forEach(function (k) {
            if (_this.projectData.devices[k].id === id) {
                result = _this.projectData.devices[k];
            }
        });
        return result;
    };
    ProjectService.prototype.setDevices = function (devices, nosave) {
        this.projectData.devices = devices;
        if (nosave) {
            return true;
        }
        return this.save();
    };
    ProjectService.prototype.addDevice = function (d) {
        var dev = this.projectData.devices[d.name];
        if (dev) {
            this.projectData.devices[d.name];
            return this.save();
        }
        return false;
    };
    /**
     * Send Save Project to to editor component
     * @param saveas
     */
    ProjectService.prototype.saveProject = function (saveas) {
        this.onSaveCurrent.emit(saveas);
    };
    ProjectService.prototype.checkServer = function () {
        return this.http.get(this.endPointConfig + '/api/settings');
    };
    ProjectService.prototype.getDemoProject = function () {
        return this.http.get(this.endPointConfig + '/api/projectdemo');
    };
    ProjectService.prototype.isSecurityEnabled = function () {
        if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].serverEnabled) {
            if (this.serverSettings && !this.serverSettings.secureEnabled) {
                return false;
            }
            return true;
        }
        else {
            return false;
        }
    };
    ProjectService.prototype._deepEquals = function (x, y) {
        if (JSON.stringify(x) === JSON.stringify(y)) {
            return true; // if both x and y are null or undefined and exactly the same
        }
        else {
            try {
                for (var p in x) {
                    if (!x.hasOwnProperty(p)) {
                        continue; // other properties were tested using x.constructor === y.constructor
                    }
                    if (!y.hasOwnProperty(p)) {
                        return false; // allows to compare x[ p ] and y[ p ] when set to undefined
                    }
                    if (p === 'svgcontent') {
                        // the xml have to be transform in json
                        var parser = new DOMParser(); // initialize dom parser
                        var aDOM = parser.parseFromString(x[p], "text/xml");
                        var bDOM = parser.parseFromString(y[p], "text/xml");
                        var a = this._xml2json(aDOM);
                        var b = this._xml2json(bDOM);
                        return this._deepEquals(a, b);
                    }
                    if (x[p] === y[p]) {
                        continue; // if they have the same strict value or identity then they are equal
                    }
                    if (!this._deepEquals(x[p], y[p])) {
                        return false;
                    }
                }
                for (var p in y) {
                    if (y.hasOwnProperty(p) && !x.hasOwnProperty(p)) {
                        return false;
                    }
                }
            }
            catch (ex) {
                console.log(ex);
                return false;
            }
            return true;
        }
    };
    /**
     * This function coverts a DOM Tree into JavaScript Object.
     * @param srcDOM: DOM Tree to be converted.
     */
    ProjectService.prototype._xml2json = function (xml) {
        // Create the return object
        var obj = {};
        if (xml.nodeType == 1) {
            // do attributes
            if (xml.attributes.length > 0) {
                obj["@attributes"] = {};
                for (var j = 0; j < xml.attributes.length; j++) {
                    var attribute = xml.attributes.item(j);
                    obj["@attributes"][attribute.nodeName] = attribute.nodeValue;
                }
            }
        }
        else if (xml.nodeType == 3) {
            obj = xml.nodeValue;
        }
        // do children
        if (xml.hasChildNodes()) {
            for (var i = 0; i < xml.childNodes.length; i++) {
                var item = xml.childNodes.item(i);
                var nodeName = item.nodeName;
                if (typeof (obj[nodeName]) == "undefined") {
                    obj[nodeName] = this._xml2json(item);
                }
                else {
                    if (typeof (obj[nodeName].push) == "undefined") {
                        var old = obj[nodeName];
                        obj[nodeName] = [];
                        obj[nodeName].push(old);
                    }
                    obj[nodeName].push(this._xml2json(item));
                }
            }
        }
        return obj;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */])
    ], ProjectService.prototype, "onSaveCurrent", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */])
    ], ProjectService.prototype, "onLoadHmi", void 0);
    ProjectService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_7__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_6_ngx_toastr__["b" /* ToastrService */]])
    ], ProjectService);
    return ProjectService;
}());

var ProjectData = (function () {
    function ProjectData() {
        this.version = "1.00";
        this.server = new __WEBPACK_IMPORTED_MODULE_4__models_device__["a" /* Device */]();
        this.hmi = new __WEBPACK_IMPORTED_MODULE_3__models_hmi__["l" /* Hmi */]();
        this.devices = {};
        this.charts = [];
    }
    return ProjectData;
}());

var ProjectDataCmdType;
(function (ProjectDataCmdType) {
    ProjectDataCmdType["SetDevice"] = "set-device";
    ProjectDataCmdType["DelDevice"] = "del-device";
    ProjectDataCmdType["SetView"] = "set-view";
    ProjectDataCmdType["DelView"] = "del-view";
    ProjectDataCmdType["HmiLayout"] = "layout";
    ProjectDataCmdType["Charts"] = "charts";
})(ProjectDataCmdType || (ProjectDataCmdType = {}));
var ServerSettings = (function () {
    function ServerSettings() {
    }
    return ServerSettings;
}());



/***/ }),

/***/ "../../../../../src/app/_services/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__helpers_endpointapi__ = __webpack_require__("../../../../../src/app/_helpers/endpointapi.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__ = __webpack_require__("../../../../@ngx-translate/core/@ngx-translate/core.es5.js");
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
    function UserService(http, translateService, toastr) {
        this.http = http;
        this.translateService = translateService;
        this.toastr = toastr;
        this.endPointConfig = __WEBPACK_IMPORTED_MODULE_3__helpers_endpointapi__["a" /* EndPointApi */].getURL();
    }
    UserService.prototype.getUsers = function (user) {
        var header = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["e" /* HttpHeaders */]({ 'Content-Type': 'application/json' });
        var params = user;
        return this.http.get(this.endPointConfig + '/api/users', { headers: header, params: params });
    };
    UserService.prototype.setUser = function (user) {
        var _this = this;
        return new __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"](function (observer) {
            if (__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].serverEnabled) {
                var header = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["e" /* HttpHeaders */]({ 'Content-Type': 'application/json' });
                _this.http.post(_this.endPointConfig + '/api/users', { headers: header, params: user }).subscribe(function (result) {
                    observer.next();
                }, function (err) {
                    console.log(err);
                    _this.notifySaveError();
                    observer.error(err);
                });
            }
            else {
                observer.next();
            }
        });
    };
    UserService.prototype.removeUser = function (user) {
        var _this = this;
        return new __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"](function (observer) {
            if (__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].serverEnabled) {
                var header = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["e" /* HttpHeaders */]({ 'Content-Type': 'application/json' });
                _this.http.delete(_this.endPointConfig + '/api/users', { headers: header, params: { param: user.username } }).subscribe(function (result) {
                    observer.next();
                }, function (err) {
                    console.log(err);
                    _this.notifySaveError();
                    observer.error(err);
                });
            }
            else {
                observer.next();
            }
        });
    };
    //#region Notify
    UserService.prototype.notifySaveError = function () {
        var msg = '';
        this.translateService.get('msg.users-save-error').subscribe(function (txt) { msg = txt; });
        this.toastr.error(msg, '', {
            timeOut: 3000,
            closeButton: true,
            disableTimeOut: true
        });
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_5_ngx_toastr__["b" /* ToastrService */]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n.container {\r\n    width: 100%;\r\n    height: 100% !important;\r\n    background-color:#FFFFFF\r\n}\r\n\r\n.work-void {\r\n    height: 100%;\r\n    width: 100%;\r\n}\r\n\r\n.work-editor {\r\n    background-color:#FFFFFF;\r\n    height: calc(100% - (46px));\r\n    min-width: 800px;\r\n}\r\n\r\n.work-home {\r\n    background-color:#FFFFFF;\r\n    height: 100%;\r\n    min-width: 800px;\r\n}\r\n\r\n.header {\r\n    /* height: 40px !important;     */\r\n}\r\n\r\n.footer {\r\n    height: 20px;\r\n    position:absolute;\r\n    bottom:0px;\r\n}\r\n\r\n.fab-button {\r\n    position: absolute;\r\n    bottom: 20px;\r\n    left: 10px;\r\n    color: rgba(255,255,255,1);\r\n    background-color: rgba(68,138,255, 0);\r\n    /* background-color: rgba(0,0,0,0.9); */\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"main-container\" class=\"container\">\n  <app-header class=\"header\" [hidden]=\"isHidden()\"></app-header>\n  <div [ngClass]=\"getClass()\">\n    <router-outlet></router-outlet>\n    <ngx-fab-button *ngIf=\"showDevNavigation()\" #fabmenu icon=\"menu\" iconOpen=\"menu\" class=\"fab-button\" color=\"rgba(68,138,255, 1)\">\n      <ngx-fab-item-button color=\"rgba(68,138,255, 1)\" content=\"editor\" (click)=\"onGoTo('editor')\" (touchend)=\"onGoTo('editor')\">editor</ngx-fab-item-button>\n      <ngx-fab-item-button color=\"rgba(68,138,255, 1)\" content=\"lab\" (click)=\"onGoTo('lab')\" (touchend)=\"onGoTo('lab')\">lab</ngx-fab-item-button>\n      <ngx-fab-item-button color=\"rgba(68,138,255, 1)\" content=\"home\" (click)=\"onGoTo('home')\" (touchend)=\"onGoTo('home')\">home</ngx-fab-item-button>\n    </ngx-fab-button>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__("../../../../@ngx-translate/core/@ngx-translate/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = (function () {
    function AppComponent(router, fuxaLanguage, location) {
        this.router = router;
        this.fuxaLanguage = fuxaLanguage;
        this.title = 'app';
        this.location = location;
        // this language will be used as a fallback when a translation isn't found in the current language
        fuxaLanguage.setDefaultLang('en');
        // the lang to use, if the lang isn't available, it will use the current loader to get them
        fuxaLanguage.use('en');
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent.prototype.ngAfterViewInit = function () {
    };
    AppComponent.prototype.isHidden = function () {
        var list = ['/lab', '/home'], route = this.location.path();
        return (list.indexOf(route) > -1);
    };
    AppComponent.prototype.getClass = function () {
        var route = this.location.path();
        if (route.startsWith('/view')) {
            return 'work-void';
        }
        return (this.isHidden()) ? 'work-home' : 'work-editor';
    };
    AppComponent.prototype.showDevNavigation = function () {
        var route = this.location.path();
        if (route.startsWith('/view')) {
            return false;
        }
        return true;
    };
    AppComponent.prototype.onGoTo = function (goto) {
        this.router.navigate([goto]);
        this.fabmenu.toggle();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewChild */])('fabmenu'),
        __metadata("design:type", Object)
    ], AppComponent.prototype, "fabmenu", void 0);
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["f" /* Location */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.config.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return appConfig; });
var appConfig = {
    apiUrl: 'http://localhost:3000'
};


/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export createTranslateLoader */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__material_module__ = __webpack_require__("../../../../../src/app/material.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_color_picker__ = __webpack_require__("../../../../ngx-color-picker/dist/ngx-color-picker.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng5_slider__ = __webpack_require__("../../../../ng5-slider/esm5/ng5-slider.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ngx_drag_drop__ = __webpack_require__("../../../../ngx-drag-drop/ngx-drag-drop.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ngx_translate_core__ = __webpack_require__("../../../../@ngx-translate/core/@ngx-translate/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ngx_translate_http_loader__ = __webpack_require__("../../../../@ngx-translate/http-loader/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__app_routing__ = __webpack_require__("../../../../../src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__auth_guard__ = __webpack_require__("../../../../../src/app/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__header_header_component__ = __webpack_require__("../../../../../src/app/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__iframe_iframe_component__ = __webpack_require__("../../../../../src/app/iframe/iframe.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__view_view_component__ = __webpack_require__("../../../../../src/app/view/view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__sidenav_sidenav_component__ = __webpack_require__("../../../../../src/app/sidenav/sidenav.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__editor_editor_component__ = __webpack_require__("../../../../../src/app/editor/editor.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__editor_layout_property_layout_property_component__ = __webpack_require__("../../../../../src/app/editor/layout-property/layout-property.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__editor_chart_config_chart_config_component__ = __webpack_require__("../../../../../src/app/editor/chart-config/chart-config.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__lab_lab_component__ = __webpack_require__("../../../../../src/app/lab/lab.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__device_device_component__ = __webpack_require__("../../../../../src/app/device/device.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__device_device_property_device_property_component__ = __webpack_require__("../../../../../src/app/device/device-property/device-property.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__device_tag_property_tag_property_component__ = __webpack_require__("../../../../../src/app/device/tag-property/tag-property.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__device_device_list_device_list_component__ = __webpack_require__("../../../../../src/app/device/device-list/device-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__device_device_map_device_map_component__ = __webpack_require__("../../../../../src/app/device/device-map/device-map.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__fuxa_view_fuxa_view_component__ = __webpack_require__("../../../../../src/app/fuxa-view/fuxa-view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__tester_tester_component__ = __webpack_require__("../../../../../src/app/tester/tester.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__helpers_custom_http__ = __webpack_require__("../../../../../src/app/_helpers/custom-http.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__tester_tester_service__ = __webpack_require__("../../../../../src/app/tester/tester.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__services_user_service__ = __webpack_require__("../../../../../src/app/_services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__services_auth_service__ = __webpack_require__("../../../../../src/app/_services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__services_project_service__ = __webpack_require__("../../../../../src/app/_services/project.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__services_hmi_service__ = __webpack_require__("../../../../../src/app/_services/hmi.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__help_tutorial_tutorial_component__ = __webpack_require__("../../../../../src/app/help/tutorial/tutorial.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__helpers_windowref__ = __webpack_require__("../../../../../src/app/_helpers/windowref.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__helpers_utils__ = __webpack_require__("../../../../../src/app/_helpers/utils.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__helpers_define__ = __webpack_require__("../../../../../src/app/_helpers/define.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__helpers_dictionary__ = __webpack_require__("../../../../../src/app/_helpers/dictionary.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__gui_helpers_fab_button_ngx_fab_button_component__ = __webpack_require__("../../../../../src/app/gui-helpers/fab-button/ngx-fab-button.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__gui_helpers_fab_button_ngx_fab_item_button_component__ = __webpack_require__("../../../../../src/app/gui-helpers/fab-button/ngx-fab-item-button.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__gui_helpers_treetable_treetable_component__ = __webpack_require__("../../../../../src/app/gui-helpers/treetable/treetable.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__gui_helpers_confirm_dialog_confirm_dialog_component__ = __webpack_require__("../../../../../src/app/gui-helpers/confirm-dialog/confirm-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__gui_helpers_ngx_dygraphs_ngx_dygraphs_component__ = __webpack_require__("../../../../../src/app/gui-helpers/ngx-dygraphs/ngx-dygraphs.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__gui_helpers_sel_options_sel_options_component__ = __webpack_require__("../../../../../src/app/gui-helpers/sel-options/sel-options.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__directives_dialog_draggable_directive__ = __webpack_require__("../../../../../src/app/_directives/dialog-draggable.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__directives_modal_position_cache__ = __webpack_require__("../../../../../src/app/_directives/modal-position.cache.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__directives_ngx_draggable_directive__ = __webpack_require__("../../../../../src/app/_directives/ngx-draggable.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52__directives_number_directive__ = __webpack_require__("../../../../../src/app/_directives/number.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_53__directives_lazyFor_directive__ = __webpack_require__("../../../../../src/app/_directives/lazyFor.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_54__gauges_gauges_component__ = __webpack_require__("../../../../../src/app/gauges/gauges.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_55__gauges_gauge_base_gauge_base_component__ = __webpack_require__("../../../../../src/app/gauges/gauge-base/gauge-base.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_56__gauges_switch_switch_component__ = __webpack_require__("../../../../../src/app/gauges/switch/switch.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_57__gauges_controls_value_value_component__ = __webpack_require__("../../../../../src/app/gauges/controls/value/value.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_58__gauges_gauge_property_gauge_property_component__ = __webpack_require__("../../../../../src/app/gauges/gauge-property/gauge-property.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_59__gauges_chart_property_chart_property_component__ = __webpack_require__("../../../../../src/app/gauges/chart-property/chart-property.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_60__gauges_gauge_property_flex_input_flex_input_component__ = __webpack_require__("../../../../../src/app/gauges/gauge-property/flex-input/flex-input.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_61__gauges_gauge_property_flex_auth_flex_auth_component__ = __webpack_require__("../../../../../src/app/gauges/gauge-property/flex-auth/flex-auth.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_62__gauges_gauge_property_flex_head_flex_head_component__ = __webpack_require__("../../../../../src/app/gauges/gauge-property/flex-head/flex-head.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_63__gauges_gauge_property_flex_event_flex_event_component__ = __webpack_require__("../../../../../src/app/gauges/gauge-property/flex-event/flex-event.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_64__gauges_gauge_property_flex_action_flex_action_component__ = __webpack_require__("../../../../../src/app/gauges/gauge-property/flex-action/flex-action.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_65__gauges_gauge_property_flex_variable_flex_variable_component__ = __webpack_require__("../../../../../src/app/gauges/gauge-property/flex-variable/flex-variable.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_66__gui_helpers_mat_select_search_mat_select_search_module__ = __webpack_require__("../../../../../src/app/gui-helpers/mat-select-search/mat-select-search.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_67__gauges_controls_html_input_html_input_component__ = __webpack_require__("../../../../../src/app/gauges/controls/html-input/html-input.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_68__gauges_controls_html_button_html_button_component__ = __webpack_require__("../../../../../src/app/gauges/controls/html-button/html-button.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_69__gauges_controls_html_select_html_select_component__ = __webpack_require__("../../../../../src/app/gauges/controls/html-select/html-select.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_70__gauges_controls_html_chart_html_chart_component__ = __webpack_require__("../../../../../src/app/gauges/controls/html-chart/html-chart.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_71__gauges_controls_html_bag_html_bag_component__ = __webpack_require__("../../../../../src/app/gauges/controls/html-bag/html-bag.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_72__gauges_controls_gauge_progress_gauge_progress_component__ = __webpack_require__("../../../../../src/app/gauges/controls/gauge-progress/gauge-progress.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_73__gauges_controls_gauge_semaphore_gauge_semaphore_component__ = __webpack_require__("../../../../../src/app/gauges/controls/gauge-semaphore/gauge-semaphore.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_74__users_users_component__ = __webpack_require__("../../../../../src/app/users/users.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_75__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_76__gauges_shapes_shapes_component__ = __webpack_require__("../../../../../src/app/gauges/shapes/shapes.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_77__gauges_shapes_proc_eng_proc_eng_component__ = __webpack_require__("../../../../../src/app/gauges/shapes/proc-eng/proc-eng.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_78__gauges_shapes_ape_shapes_ape_shapes_component__ = __webpack_require__("../../../../../src/app/gauges/shapes/ape-shapes/ape-shapes.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_79__gui_helpers_ngx_gauge_ngx_gauge_component__ = __webpack_require__("../../../../../src/app/gui-helpers/ngx-gauge/ngx-gauge.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_80__gauges_bag_property_bag_property_component__ = __webpack_require__("../../../../../src/app/gauges/bag-property/bag-property.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_81__gauges_pipe_pipe_property_pipe_property_component__ = __webpack_require__("../../../../../src/app/gauges/pipe/pipe-property/pipe-property.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_82__gauges_pipe_pipe_component__ = __webpack_require__("../../../../../src/app/gauges/pipe/pipe.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_83__helpers_auth_interceptor__ = __webpack_require__("../../../../../src/app/_helpers/auth-interceptor.ts");
// the start/root module that tells Angular how to assemble the application.
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















































































function createTranslateLoader(http) {
    return new __WEBPACK_IMPORTED_MODULE_11__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http, './assets/i18n/', '.json');
}
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_16__home_home_component__["b" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_21__editor_editor_component__["c" /* EditorComponent */],
                __WEBPACK_IMPORTED_MODULE_17__header_header_component__["b" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_20__sidenav_sidenav_component__["a" /* SidenavComponent */],
                __WEBPACK_IMPORTED_MODULE_18__iframe_iframe_component__["a" /* IframeComponent */],
                __WEBPACK_IMPORTED_MODULE_13__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_24__lab_lab_component__["a" /* LabComponent */],
                __WEBPACK_IMPORTED_MODULE_25__device_device_component__["a" /* DeviceComponent */],
                __WEBPACK_IMPORTED_MODULE_27__device_tag_property_tag_property_component__["a" /* TagPropertyComponent */],
                __WEBPACK_IMPORTED_MODULE_26__device_device_property_device_property_component__["a" /* DevicePropertyComponent */],
                __WEBPACK_IMPORTED_MODULE_22__editor_layout_property_layout_property_component__["b" /* LayoutPropertyComponent */],
                __WEBPACK_IMPORTED_MODULE_22__editor_layout_property_layout_property_component__["a" /* DialogMenuItem */],
                __WEBPACK_IMPORTED_MODULE_28__device_device_list_device_list_component__["a" /* DeviceListComponent */],
                __WEBPACK_IMPORTED_MODULE_29__device_device_map_device_map_component__["a" /* DeviceMapComponent */],
                __WEBPACK_IMPORTED_MODULE_30__fuxa_view_fuxa_view_component__["a" /* FuxaViewComponent */],
                __WEBPACK_IMPORTED_MODULE_21__editor_editor_component__["b" /* DialogDocProperty */],
                __WEBPACK_IMPORTED_MODULE_21__editor_editor_component__["a" /* DialogDocName */],
                __WEBPACK_IMPORTED_MODULE_46__gui_helpers_confirm_dialog_confirm_dialog_component__["a" /* ConfirmDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_17__header_header_component__["a" /* DialogInfo */],
                __WEBPACK_IMPORTED_MODULE_55__gauges_gauge_base_gauge_base_component__["a" /* GaugeBaseComponent */],
                __WEBPACK_IMPORTED_MODULE_56__gauges_switch_switch_component__["a" /* SwitchComponent */],
                __WEBPACK_IMPORTED_MODULE_67__gauges_controls_html_input_html_input_component__["a" /* HtmlInputComponent */],
                __WEBPACK_IMPORTED_MODULE_68__gauges_controls_html_button_html_button_component__["a" /* HtmlButtonComponent */],
                __WEBPACK_IMPORTED_MODULE_69__gauges_controls_html_select_html_select_component__["a" /* HtmlSelectComponent */],
                __WEBPACK_IMPORTED_MODULE_70__gauges_controls_html_chart_html_chart_component__["a" /* HtmlChartComponent */],
                __WEBPACK_IMPORTED_MODULE_71__gauges_controls_html_bag_html_bag_component__["a" /* HtmlBagComponent */],
                __WEBPACK_IMPORTED_MODULE_72__gauges_controls_gauge_progress_gauge_progress_component__["a" /* GaugeProgressComponent */],
                __WEBPACK_IMPORTED_MODULE_73__gauges_controls_gauge_semaphore_gauge_semaphore_component__["a" /* GaugeSemaphoreComponent */],
                __WEBPACK_IMPORTED_MODULE_58__gauges_gauge_property_gauge_property_component__["c" /* GaugePropertyComponent */],
                __WEBPACK_IMPORTED_MODULE_58__gauges_gauge_property_gauge_property_component__["a" /* DialogGaugePermission */],
                __WEBPACK_IMPORTED_MODULE_59__gauges_chart_property_chart_property_component__["a" /* ChartPropertyComponent */],
                __WEBPACK_IMPORTED_MODULE_80__gauges_bag_property_bag_property_component__["a" /* BagPropertyComponent */],
                __WEBPACK_IMPORTED_MODULE_81__gauges_pipe_pipe_property_pipe_property_component__["a" /* PipePropertyComponent */],
                __WEBPACK_IMPORTED_MODULE_76__gauges_shapes_shapes_component__["a" /* ShapesComponent */],
                __WEBPACK_IMPORTED_MODULE_77__gauges_shapes_proc_eng_proc_eng_component__["a" /* ProcEngComponent */],
                __WEBPACK_IMPORTED_MODULE_78__gauges_shapes_ape_shapes_ape_shapes_component__["a" /* ApeShapesComponent */],
                __WEBPACK_IMPORTED_MODULE_31__tester_tester_component__["a" /* TesterComponent */],
                __WEBPACK_IMPORTED_MODULE_38__help_tutorial_tutorial_component__["a" /* TutorialComponent */],
                __WEBPACK_IMPORTED_MODULE_60__gauges_gauge_property_flex_input_flex_input_component__["a" /* FlexInputComponent */],
                __WEBPACK_IMPORTED_MODULE_61__gauges_gauge_property_flex_auth_flex_auth_component__["a" /* FlexAuthComponent */],
                __WEBPACK_IMPORTED_MODULE_62__gauges_gauge_property_flex_head_flex_head_component__["a" /* FlexHeadComponent */],
                __WEBPACK_IMPORTED_MODULE_63__gauges_gauge_property_flex_event_flex_event_component__["a" /* FlexEventComponent */],
                __WEBPACK_IMPORTED_MODULE_64__gauges_gauge_property_flex_action_flex_action_component__["a" /* FlexActionComponent */],
                __WEBPACK_IMPORTED_MODULE_65__gauges_gauge_property_flex_variable_flex_variable_component__["a" /* FlexVariableComponent */],
                __WEBPACK_IMPORTED_MODULE_57__gauges_controls_value_value_component__["a" /* ValueComponent */],
                __WEBPACK_IMPORTED_MODULE_49__directives_dialog_draggable_directive__["a" /* DialogDraggableDirective */],
                __WEBPACK_IMPORTED_MODULE_40__helpers_utils__["a" /* EnumToArrayPipe */],
                __WEBPACK_IMPORTED_MODULE_51__directives_ngx_draggable_directive__["a" /* DraggableDirective */],
                __WEBPACK_IMPORTED_MODULE_52__directives_number_directive__["a" /* NumberOnlyDirective */],
                __WEBPACK_IMPORTED_MODULE_43__gui_helpers_fab_button_ngx_fab_button_component__["a" /* NgxFabButtonComponent */],
                __WEBPACK_IMPORTED_MODULE_44__gui_helpers_fab_button_ngx_fab_item_button_component__["a" /* NgxFabItemButtonComponent */],
                __WEBPACK_IMPORTED_MODULE_45__gui_helpers_treetable_treetable_component__["b" /* TreetableComponent */],
                __WEBPACK_IMPORTED_MODULE_48__gui_helpers_sel_options_sel_options_component__["a" /* SelOptionsComponent */],
                __WEBPACK_IMPORTED_MODULE_53__directives_lazyFor_directive__["a" /* LazyForDirective */],
                __WEBPACK_IMPORTED_MODULE_47__gui_helpers_ngx_dygraphs_ngx_dygraphs_component__["a" /* NgxDygraphsComponent */],
                __WEBPACK_IMPORTED_MODULE_23__editor_chart_config_chart_config_component__["a" /* ChartConfigComponent */],
                __WEBPACK_IMPORTED_MODULE_79__gui_helpers_ngx_gauge_ngx_gauge_component__["a" /* NgxGaugeComponent */],
                __WEBPACK_IMPORTED_MODULE_23__editor_chart_config_chart_config_component__["b" /* DialogListItem */],
                __WEBPACK_IMPORTED_MODULE_74__users_users_component__["b" /* UsersComponent */],
                __WEBPACK_IMPORTED_MODULE_74__users_users_component__["a" /* DialogUser */],
                __WEBPACK_IMPORTED_MODULE_75__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_16__home_home_component__["a" /* DialogUserInfo */],
                __WEBPACK_IMPORTED_MODULE_19__view_view_component__["a" /* ViewComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["c" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_14__app_routing__["a" /* routing */],
                __WEBPACK_IMPORTED_MODULE_4__material_module__["a" /* MaterialModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_6_ngx_color_picker__["a" /* ColorPickerModule */],
                __WEBPACK_IMPORTED_MODULE_7_ng5_slider__["a" /* Ng5SliderModule */],
                __WEBPACK_IMPORTED_MODULE_66__gui_helpers_mat_select_search_mat_select_search_module__["a" /* MatSelectSearchModule */],
                __WEBPACK_IMPORTED_MODULE_8_ngx_toastr__["a" /* ToastrModule */].forRoot({
                    timeOut: 3000,
                    positionClass: "toast-bottom-right",
                    preventDuplicates: false
                }),
                __WEBPACK_IMPORTED_MODULE_9_ngx_drag_drop__["a" /* DndModule */],
                __WEBPACK_IMPORTED_MODULE_10__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                    loader: {
                        provide: __WEBPACK_IMPORTED_MODULE_10__ngx_translate_core__["a" /* TranslateLoader */],
                        useFactory: createTranslateLoader,
                        deps: [__WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClient */]]
                    }
                })
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_37__services_hmi_service__["a" /* HmiService */],
                __WEBPACK_IMPORTED_MODULE_36__services_project_service__["a" /* ProjectService */],
                __WEBPACK_IMPORTED_MODULE_34__services_user_service__["a" /* UserService */],
                __WEBPACK_IMPORTED_MODULE_33__tester_tester_service__["a" /* TesterService */],
                __WEBPACK_IMPORTED_MODULE_32__helpers_custom_http__["a" /* customHttpProvider */],
                __WEBPACK_IMPORTED_MODULE_83__helpers_auth_interceptor__["a" /* httpInterceptorProviders */],
                __WEBPACK_IMPORTED_MODULE_35__services_auth_service__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_54__gauges_gauges_component__["a" /* GaugesManager */],
                __WEBPACK_IMPORTED_MODULE_39__helpers_windowref__["a" /* WindowRef */],
                __WEBPACK_IMPORTED_MODULE_40__helpers_utils__["b" /* Utils */],
                __WEBPACK_IMPORTED_MODULE_82__gauges_pipe_pipe_component__["a" /* PipeComponent */],
                __WEBPACK_IMPORTED_MODULE_42__helpers_dictionary__["a" /* Dictionary */],
                __WEBPACK_IMPORTED_MODULE_50__directives_modal_position_cache__["a" /* ModalPositionCache */],
                __WEBPACK_IMPORTED_MODULE_41__helpers_define__["a" /* Define */],
                __WEBPACK_IMPORTED_MODULE_15__auth_guard__["a" /* AuthGuard */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["d" /* HAMMER_GESTURE_CONFIG */], useClass: __WEBPACK_IMPORTED_MODULE_12__angular_material__["a" /* GestureConfig */] }
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_21__editor_editor_component__["b" /* DialogDocProperty */],
                __WEBPACK_IMPORTED_MODULE_21__editor_editor_component__["a" /* DialogDocName */],
                __WEBPACK_IMPORTED_MODULE_17__header_header_component__["a" /* DialogInfo */],
                __WEBPACK_IMPORTED_MODULE_58__gauges_gauge_property_gauge_property_component__["c" /* GaugePropertyComponent */],
                __WEBPACK_IMPORTED_MODULE_58__gauges_gauge_property_gauge_property_component__["a" /* DialogGaugePermission */],
                __WEBPACK_IMPORTED_MODULE_59__gauges_chart_property_chart_property_component__["a" /* ChartPropertyComponent */],
                __WEBPACK_IMPORTED_MODULE_79__gui_helpers_ngx_gauge_ngx_gauge_component__["a" /* NgxGaugeComponent */],
                __WEBPACK_IMPORTED_MODULE_80__gauges_bag_property_bag_property_component__["a" /* BagPropertyComponent */],
                __WEBPACK_IMPORTED_MODULE_81__gauges_pipe_pipe_property_pipe_property_component__["a" /* PipePropertyComponent */],
                __WEBPACK_IMPORTED_MODULE_26__device_device_property_device_property_component__["a" /* DevicePropertyComponent */],
                __WEBPACK_IMPORTED_MODULE_27__device_tag_property_tag_property_component__["a" /* TagPropertyComponent */],
                __WEBPACK_IMPORTED_MODULE_46__gui_helpers_confirm_dialog_confirm_dialog_component__["a" /* ConfirmDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_22__editor_layout_property_layout_property_component__["b" /* LayoutPropertyComponent */],
                __WEBPACK_IMPORTED_MODULE_22__editor_layout_property_layout_property_component__["a" /* DialogMenuItem */],
                __WEBPACK_IMPORTED_MODULE_47__gui_helpers_ngx_dygraphs_ngx_dygraphs_component__["a" /* NgxDygraphsComponent */],
                __WEBPACK_IMPORTED_MODULE_23__editor_chart_config_chart_config_component__["a" /* ChartConfigComponent */],
                __WEBPACK_IMPORTED_MODULE_23__editor_chart_config_chart_config_component__["b" /* DialogListItem */],
                __WEBPACK_IMPORTED_MODULE_74__users_users_component__["a" /* DialogUser */],
                __WEBPACK_IMPORTED_MODULE_75__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_16__home_home_component__["a" /* DialogUserInfo */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_13__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_guard__ = __webpack_require__("../../../../../src/app/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__editor_editor_component__ = __webpack_require__("../../../../../src/app/editor/editor.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__device_device_component__ = __webpack_require__("../../../../../src/app/device/device.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__lab_lab_component__ = __webpack_require__("../../../../../src/app/lab/lab.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__users_users_component__ = __webpack_require__("../../../../../src/app/users/users.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__view_view_component__ = __webpack_require__("../../../../../src/app/view/view.component.ts");








var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__home_home_component__["b" /* HomeComponent */] },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_2__home_home_component__["b" /* HomeComponent */] },
    { path: 'editor', component: __WEBPACK_IMPORTED_MODULE_3__editor_editor_component__["c" /* EditorComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_1__auth_guard__["a" /* AuthGuard */]] },
    { path: 'lab', component: __WEBPACK_IMPORTED_MODULE_5__lab_lab_component__["a" /* LabComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_1__auth_guard__["a" /* AuthGuard */]] },
    { path: 'device', component: __WEBPACK_IMPORTED_MODULE_4__device_device_component__["a" /* DeviceComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_1__auth_guard__["a" /* AuthGuard */]] },
    { path: 'users', component: __WEBPACK_IMPORTED_MODULE_6__users_users_component__["b" /* UsersComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_1__auth_guard__["a" /* AuthGuard */]] },
    { path: 'view', component: __WEBPACK_IMPORTED_MODULE_7__view_view_component__["a" /* ViewComponent */] },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */].forRoot(appRoutes);


/***/ }),

/***/ "../../../../../src/app/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/_services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_project_service__ = __webpack_require__("../../../../../src/app/_services/project.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthGuard = (function () {
    function AuthGuard(authService, projectService, router) {
        this.authService = authService;
        this.projectService = projectService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        if (!this.projectService.isSecurityEnabled()) {
            return true;
        }
        if (this.authService.isAdmin()) {
            return true;
        }
        // this.router.navigate(['/home']);
        return false;
    };
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_3__services_project_service__["a" /* ProjectService */],
            __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "../../../../../src/app/device/device-list/device-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container {\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -ms-flex-direction: column;\r\n        flex-direction: column;\r\n    min-width: 300px;\r\n    position: absolute;\r\n    bottom: 0px;\r\n    top: 0px;\r\n    left:0px;\r\n    right:0px;\r\n    background-color: white;\r\n}\r\n\r\n.filter {\r\n    display: inline-block;\r\n    min-height: 64px;\r\n    padding: 8px 24px 0;\r\n}\r\n\r\n.filter .mat-form-field {\r\n    font-size: 14px;\r\n    width: 100%;\r\n}\r\n\r\n.mat-table {\r\n    overflow: auto;\r\n    /* margin: 5px; */\r\n    /* max-height: 500px; */\r\n}\r\n  \r\n.mat-header-cell.mat-sort-header-sorted {\r\n    color: black;\r\n}\r\n\r\n.mat-header-row {\r\n    top: 0;\r\n    position: -webkit-sticky;\r\n    position: sticky;\r\n    z-index: 1;\r\n    background-color: rgba(0,0,0,0.7);\r\n    color: white;\r\n}\r\n.mat-header-cell {\r\n    color: white;\r\n    font-size: 14px;\r\n}\r\n\r\n.mat-column-select {\r\n    overflow: visible;\r\n    -ms-flex: 0 0 100px;\r\n        flex: 0 0 100px;\r\n}\r\n\r\n.mat-column-name {\r\n    -ms-flex: 0 0 400px;\r\n        flex: 0 0 400px;\r\n}\r\n\r\n\r\n.mat-column-address {\r\n    -ms-flex: 0 0 260px;\r\n        flex: 0 0 260px;\r\n}\r\n\r\n.mat-column-device {\r\n    -ms-flex: 0 0 200px;\r\n        flex: 0 0 200px;\r\n}\r\n\r\n.mat-column-type {\r\n    -ms-flex: 0 0 160px;\r\n        flex: 0 0 160px;\r\n}\r\n\r\n.mat-column-value {\r\n    -ms-flex: 0 0 180px;\r\n        flex: 0 0 180px;\r\n}\r\n\r\n.mat-column-min {\r\n    -ms-flex: 0 0 100px;\r\n        flex: 0 0 100px;\r\n}\r\n\r\n.mat-column-max {\r\n    -ms-flex: 0 0 100px;\r\n        flex: 0 0 100px;\r\n}\r\n\r\n.mat-column-remove {\r\n    -ms-flex: 0 0 60px;\r\n        flex: 0 0 60px;\r\n}\r\n\r\n.selectidthClass{\r\n    -ms-flex: 0 0 50px;\r\n        flex: 0 0 50px;\r\n }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/device/device-list/device-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <div class=\"filter\" *ngIf=\"deviceSelected\">\r\n        <button mat-icon-button title=\"Device Map\" (click)=\"onGoBack()\" style=\"margin-right:10px;margin-left:-10px;\">\r\n            <mat-icon aria-label=\"Show devices map\">arrow_back</mat-icon>\r\n        </button>\r\n        <div class=\"my-form-field\" style=\"\">\r\n            <span>{{'device.list-device' | translate}}</span>\r\n            <mat-select [(value)]=\"deviceSelected\" style=\"width: 300px\"\r\n                (selectionChange)=\"onDeviceChange($event.source)\">\r\n                <mat-option *ngFor=\"let device of devicesValue()\" [value]=\"device\">\r\n                    {{ device.name }}\r\n                </mat-option>\r\n            </mat-select>\r\n        </div>\r\n        <div class=\"my-form-field\" style=\"\">\r\n            <span>{{'device.list-filter' | translate}}</span>\r\n            <input (keyup)=\"applyFilter($event.target.value)\" style=\"width: 450px\" type=\"text\">\r\n        </div>\r\n        <!-- <mat-form-field>\r\n      <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\r\n    </mat-form-field> -->\r\n        <!-- <div class=\"my-form-field\" style=\"padding: 10 20 10 20\">\r\n      <input (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\" type=\"text\" style=\"width: 100%\">\r\n    </div> -->\r\n    </div>\r\n    <mat-table #table [dataSource]=\"dataSource\" matSort>\r\n        <!-- Checkbox Column -->\r\n        <ng-container matColumnDef=\"select\">\r\n            <mat-header-cell *matHeaderCellDef [ngClass]=\"'selectidthClass'\">\r\n                <button mat-icon-button (click)=\"onAddTag()\" class=\"remove\">\r\n                    <mat-icon>add</mat-icon>\r\n                </button>\r\n                <!-- <mat-checkbox (change)=\"$event ? masterToggle() : null\" [checked]=\"selection.hasValue() && isAllSelected()\"\r\n          [indeterminate]=\"selection.hasValue() && !isAllSelected()\">\r\n        </mat-checkbox> -->\r\n            </mat-header-cell>\r\n            <mat-cell *matCellDef=\"let element\" [ngClass]=\"'selectidthClass'\">\r\n                <button mat-icon-button (click)=\"onEditRow(element)\" class=\"remove\"\r\n                    *ngIf=\"deviceSelected.type === deviceType.SiemensS7\">\r\n                    <mat-icon>edit</mat-icon>\r\n                </button>\r\n                <!-- <mat-checkbox (click)=\"$event.stopPropagation()\" (change)=\"$event ? selection.toggle(row) : null\" [checked]=\"selection.isSelected(row)\">\r\n        </mat-checkbox> -->\r\n            </mat-cell>\r\n        </ng-container>\r\n\r\n        <!-- Name Column -->\r\n        <ng-container matColumnDef=\"name\">\r\n            <mat-header-cell *matHeaderCellDef mat-sort-header> {{'device.list-name' | translate}} </mat-header-cell>\r\n            <mat-cell *matCellDef=\"let element\"> {{element.name}} </mat-cell>\r\n        </ng-container>\r\n\r\n        <!-- Address Column -->\r\n        <ng-container matColumnDef=\"address\">\r\n            <mat-header-cell *matHeaderCellDef mat-sort-header> {{'device.list-address' | translate}} </mat-header-cell>\r\n            <mat-cell *matCellDef=\"let element\"> {{element.address}} </mat-cell>\r\n        </ng-container>\r\n\r\n        <!-- Device Column -->\r\n        <ng-container matColumnDef=\"device\">\r\n            <mat-header-cell *matHeaderCellDef mat-sort-header> {{'device.list-device' | translate}} </mat-header-cell>\r\n            <mat-cell *matCellDef=\"let element\"> {{deviceSelected.name}} </mat-cell>\r\n        </ng-container>\r\n\r\n        <!-- Device Column -->\r\n        <ng-container matColumnDef=\"type\">\r\n            <mat-header-cell *matHeaderCellDef mat-sort-header> {{'device.list-type' | translate}} </mat-header-cell>\r\n            <mat-cell *matCellDef=\"let element\"> {{element.type}} </mat-cell>\r\n        </ng-container>\r\n\r\n        <!-- Min Column -->\r\n        <ng-container matColumnDef=\"min\">\r\n            <mat-header-cell *matHeaderCellDef mat-sort-header> {{'device.list-min' | translate}} </mat-header-cell>\r\n            <mat-cell *matCellDef=\"let element\"> {{element.min}} </mat-cell>\r\n        </ng-container>\r\n\r\n        <!-- Max Column -->\r\n        <ng-container matColumnDef=\"max\">\r\n            <mat-header-cell *matHeaderCellDef mat-sort-header> {{'device.list-max' | translate}} </mat-header-cell>\r\n            <mat-cell *matCellDef=\"let element\"> {{element.max}} </mat-cell>\r\n        </ng-container>\r\n\r\n        <!-- Value Column -->\r\n        <ng-container matColumnDef=\"value\">\r\n            <mat-header-cell *matHeaderCellDef mat-sort-header> {{'device.list-value' | translate}} </mat-header-cell>\r\n            <mat-cell *matCellDef=\"let element\"> {{element.value}} </mat-cell>\r\n        </ng-container>\r\n\r\n        <!-- Button remove Column -->\r\n        <ng-container matColumnDef=\"remove\">\r\n            <mat-header-cell *matHeaderCellDef> </mat-header-cell>\r\n            <mat-cell *matCellDef=\"let element\">\r\n                <button mat-icon-button (click)=\"$event.stopPropagation();onRemoveRow(element)\" class=\"remove\">\r\n                    <mat-icon>clear</mat-icon>\r\n                </button>\r\n            </mat-cell>\r\n        </ng-container>\r\n\r\n        <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n        <mat-row *matRowDef=\"let row; columns: displayedColumns;\" class=\"my-mat-row\"></mat-row>\r\n    </mat-table>\r\n</div>\r\n\r\n<button mat-fab color=\"primary\" (click)=\"onAddTag()\"\r\n    style=\"position: absolute; right: 20px; bottom: 30px; z-index: 9999;\">\r\n    <mat-icon class=\"\">add</mat-icon>\r\n</button>"

/***/ }),

/***/ "../../../../../src/app/device/device-list/device-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeviceListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_cdk_collections__ = __webpack_require__("../../../cdk/esm5/collections.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tag_property_tag_property_component__ = __webpack_require__("../../../../../src/app/device/tag-property/tag-property.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_device__ = __webpack_require__("../../../../../src/app/_models/device.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_project_service__ = __webpack_require__("../../../../../src/app/_services/project.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_hmi_service__ = __webpack_require__("../../../../../src/app/_services/hmi.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var DeviceListComponent = (function () {
    function DeviceListComponent(dialog, hmiService, projectService) {
        this.dialog = dialog;
        this.hmiService = hmiService;
        this.projectService = projectService;
        this.displayedColumns = ['select', 'name', 'address', 'device', 'type', 'min', 'max', 'value', 'remove'];
        this.dataSource = new __WEBPACK_IMPORTED_MODULE_1__angular_material__["O" /* MatTableDataSource */]([]);
        this.selection = new __WEBPACK_IMPORTED_MODULE_2__angular_cdk_collections__["b" /* SelectionModel */](true, []);
        this.dirty = false;
        this.deviceType = __WEBPACK_IMPORTED_MODULE_4__models_device__["d" /* DeviceType */];
        this.save = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.goto = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
    }
    DeviceListComponent.prototype.ngOnInit = function () {
        this.devices = this.projectService.getDevices();
        if (!this.deviceSelected && this.devices) {
            this.deviceSelected = this.devices[0];
        }
    };
    DeviceListComponent.prototype.ngAfterViewInit = function () {
        if (this.deviceSelected) {
            this.bindToTable(this.deviceSelected.tags);
        }
        this.dataSource.sort = this.sort;
        this.table.renderRows();
    };
    DeviceListComponent.prototype.bindToTable = function (tags) {
        this.dataSource.data = Object.values(tags);
    };
    DeviceListComponent.prototype.onDeviceChange = function (source) {
        this.dataSource.data = [];
        this.deviceSelected = source.value;
        if (this.deviceSelected.tags) {
            this.bindToTable(this.deviceSelected.tags);
        }
    };
    DeviceListComponent.prototype.setSelectedDevice = function (device) {
        var _this = this;
        this.devices = this.projectService.getDevices(); //JSON.parse(JSON.stringify(this.projectService.getDevices()));
        this.updateDeviceValue();
        // this.devices = JSON.parse(JSON.stringify(this.projectService.getDevices()));
        Object.values(this.devices).forEach(function (d) {
            if (d.name === device.name) {
                _this.deviceSelected = d;
                _this.bindToTable(_this.deviceSelected.tags);
            }
        });
    };
    DeviceListComponent.prototype.onGoBack = function () {
        this.goto.emit();
    };
    DeviceListComponent.prototype.onRemoveRow = function (row) {
        var index = this.dataSource.data.indexOf(row, 0);
        // if (index > -1) {
        //   this.dataSource.data.splice(index, 1);
        //   this.dirty = true;
        // }
        if (this.dataSource.data[index]) {
            delete this.deviceSelected.tags[this.dataSource.data[index].id];
        }
        this.bindToTable(this.deviceSelected.tags);
        this.projectService.setDeviceTags(this.deviceSelected);
    };
    /** Whether the number of selected elements matches the total number of rows. */
    DeviceListComponent.prototype.isAllSelected = function () {
        var numSelected = this.selection.selected.length;
        var numRows = this.dataSource.data.length;
        return numSelected === numRows;
    };
    /** Selects all rows if they are not all selected; otherwise clear selection. */
    DeviceListComponent.prototype.masterToggle = function () {
        var _this = this;
        this.isAllSelected() ?
            this.selection.clear() :
            this.dataSource.data.forEach(function (row) { return _this.selection.select(row); });
    };
    DeviceListComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
        this.dataSource.filter = filterValue;
    };
    DeviceListComponent.prototype.onEditRow = function (row) {
        this.editTag(row, false);
    };
    DeviceListComponent.prototype.onAddTag = function () {
        if (this.deviceSelected.type === __WEBPACK_IMPORTED_MODULE_4__models_device__["d" /* DeviceType */].OPCUA) {
            this.addOpcTags(null);
        }
        else {
            var tag = new __WEBPACK_IMPORTED_MODULE_4__models_device__["g" /* Tag */]();
            this.editTag(tag, true);
        }
    };
    DeviceListComponent.prototype.addOpcTags = function (tag) {
        var _this = this;
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_3__tag_property_tag_property_component__["a" /* TagPropertyComponent */], {
            minWidth: '1200px',
            minHeight: '900px',
            panelClass: 'dialog-property',
            data: { device: this.deviceSelected, tag: tag, devices: this.devices },
            position: { top: '80px' }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.dirty = true;
                result.nodes.forEach(function (n) {
                    var tag = new __WEBPACK_IMPORTED_MODULE_4__models_device__["g" /* Tag */]();
                    tag.id = n.id;
                    tag.name = n.id;
                    tag.type = n.type;
                    tag.address = n.id;
                    _this.checkToAdd(tag, result.device);
                });
                _this.projectService.setDeviceTags(_this.deviceSelected);
            }
        });
    };
    DeviceListComponent.prototype.editTag = function (tag, checkToAdd) {
        var _this = this;
        var oldtag = tag.name;
        var temptag = JSON.parse(JSON.stringify(tag));
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_3__tag_property_tag_property_component__["a" /* TagPropertyComponent */], {
            // minWidth: '700px',
            // minHeight: '700px',
            panelClass: 'dialog-property',
            data: { device: this.deviceSelected, tag: temptag, devices: this.devices },
            position: { top: '80px' }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.dirty = true;
                // tag.id = (tag.id) ? tag.id : Utils.getShortGUID();
                tag.id = temptag.name;
                tag.name = temptag.name;
                tag.type = temptag.type;
                tag.address = temptag.address;
                tag.min = temptag.min;
                tag.max = temptag.max;
                if (checkToAdd) {
                    _this.checkToAdd(tag, result.device);
                }
                else if (tag.id !== oldtag) {
                    //remove old tag device reference
                    delete result.device.tags[oldtag];
                    _this.checkToAdd(tag, result.device);
                }
                _this.projectService.setDeviceTags(_this.deviceSelected);
            }
        });
    };
    DeviceListComponent.prototype.checkToAdd = function (tag, device) {
        var exist = false;
        Object.keys(device.tags).forEach(function (key) {
            if (device.tags[key].id) {
                if (device.tags[key].id === tag.id) {
                    exist = true;
                }
            }
            else if (device.tags[key].name === tag.id) {
                exist = true;
            }
        });
        if (!exist) {
            device.tags[tag.id] = tag;
        }
        this.bindToTable(this.deviceSelected.tags);
    };
    DeviceListComponent.prototype.updateDeviceValue = function () {
        var sigs = this.hmiService.getAllSignals();
        for (var id in sigs) {
            var vartoken = id.split(__WEBPACK_IMPORTED_MODULE_6__services_hmi_service__["a" /* HmiService */].separator);
            if (vartoken.length > 1 && this.devices[vartoken[0]] && this.devices[vartoken[0]].tags[vartoken[1]]) {
                this.devices[vartoken[0]].tags[vartoken[1]].value = sigs[id].value;
            }
        }
    };
    DeviceListComponent.prototype.devicesValue = function () {
        return Object.values(this.devices);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4__models_device__["a" /* Device */])
    ], DeviceListComponent.prototype, "deviceSelected", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", Object)
    ], DeviceListComponent.prototype, "save", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", Object)
    ], DeviceListComponent.prototype, "goto", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["N" /* MatTable */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_material__["N" /* MatTable */])
    ], DeviceListComponent.prototype, "table", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["K" /* MatSort */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_material__["K" /* MatSort */])
    ], DeviceListComponent.prototype, "sort", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["v" /* MatMenuTrigger */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_material__["v" /* MatMenuTrigger */])
    ], DeviceListComponent.prototype, "trigger", void 0);
    DeviceListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-device-list',
            template: __webpack_require__("../../../../../src/app/device/device-list/device-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/device/device-list/device-list.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["j" /* MatDialog */],
            __WEBPACK_IMPORTED_MODULE_6__services_hmi_service__["a" /* HmiService */],
            __WEBPACK_IMPORTED_MODULE_5__services_project_service__["a" /* ProjectService */]])
    ], DeviceListComponent);
    return DeviceListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/device/device-map/device-map.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-line\"></div>\n<div *ngFor=\"let device of devicesValue(); index as i\" class=\"device-line\" [style.left]=\"getDeviceLinePosition(i) + 'px'\"></div>\n<div class=\"connection-line\" [style.left]=\"getDeviceConnectionLeftPosition(devicesValue().length) + 'px'\" [style.width]=\"getDeviceConnectionWidth(devicesValue().length) + 'px'\"></div>\n<div class=\"container\">\n  <div class=\"main-device\" *ngIf=\"server && server.property\">\n    <span class=\"device-header\" style=\"padding-top: 10px;\">{{ server.name }}</span>\n    <span class=\"device-pro\">{{ server.property.address }}</span>\n    <mat-icon (click)=\"onEditDevice(server)\" class=\"device-icon device-edit\">edit</mat-icon>\n  </div>\n  <div *ngFor=\"let device of devicesValue(); index as i\" class=\"node-device\" [style.color]=\"(device.enabled) ? '#FFFFFF' : '#C5C5C5'\" [style.left]=\"getDevicePosition(i) + 'px'\">\n    <span class=\"device-header\">{{ device.name }}</span>\n    <span class=\"device-pro\" *ngIf=\"device.property\">{{ device.property.address }}</span>\n    <div *ngIf=\"isDevicePropertyToShow(device)\" style=\"padding-bottom: 10px;\">\n      <span class=\"device-pro-line\" *ngIf=\"device.property.port\">Port: {{ device.property.port }}</span>\n      <span class=\"device-pro-line\" *ngIf=\"device.property.rack || device.property.rack === 0\"> / Rack: {{device.property.rack}}</span>\n      <span class=\"device-pro-line\" *ngIf=\"device.property.slot || device.property.slot === 0\"> / Slot: {{device.property.slot}}</span>\n    </div>\n    <div class=\"device-status\" *ngIf=\"device.enabled\" [style.background-color]=\"getDeviceStatusColor(device)\"></div>\n    <mat-icon (click)=\"onListDevice(device)\" class=\"device-icon device-list\">list_alt</mat-icon>\n    <mat-icon (click)=\"onEditDevice(device)\" class=\"device-icon device-edit\">edit</mat-icon>\n    <mat-icon (click)=\"onRemoveDevice(device)\" class=\"device-icon device-delete\">clear</mat-icon>\n  </div>\n</div>\n\n<button mat-fab color=\"primary\" (click)=\"addDevice()\" style=\"position: absolute; right: 20px; bottom: 30px; z-index: 9999;\">\n  <mat-icon class=\"\">add</mat-icon>\n</button>"

/***/ }),

/***/ "../../../../../src/app/device/device-map/device-map.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".main-device {\n  position: absolute;\n  left: calc((100% - 160px) / 2);\n  top: calc((100% - 90px) / 4);\n  width: 160px;\n  height: 90px;\n  min-height: 90px;\n  text-align: center;\n  background-color: #4C5358;\n  color: white;\n  border: 5px solid #3C3C3C;\n  /* border: 0.5px solid rgba(0,0,0,0.5); */\n  /* border-radius: 8px;  */ }\n\n.node-device {\n  position: absolute;\n  top: calc(((100% - 90px) / 4) + 90px + (60px * 2));\n  width: 160px;\n  height: 90px;\n  background-color: #464a4d;\n  color: white;\n  text-align: center;\n  padding-top: 17px;\n  left: 100px;\n  border: 5px solid #3C3C3C; }\n\n.main-line {\n  position: absolute;\n  left: calc(calc((100% - 160px) / 2) + calc((160px - 6px) / 2));\n  top: calc(((100% - 90px) / 4) + 90px);\n  height: 60px;\n  width: 6px;\n  background-color: #3C3C3C; }\n\n.device-line {\n  position: absolute;\n  top: calc(((100% - 90px) / 4) + 90px + 60px);\n  height: 60px;\n  width: 6px;\n  background-color: #3C3C3C; }\n\n.connection-line {\n  position: absolute;\n  top: calc(((100% - 90px) / 4) + 90px + 60px);\n  height: 6px;\n  background-color: #3C3C3C; }\n\n.main-device mat-icon {\n  font-size: 0px; }\n\n.main-device:hover mat-icon {\n  font-size: 17px; }\n\n.device-header {\n  display: block;\n  font-size: 17px;\n  padding-bottom: 7px;\n  padding-top: 0px; }\n\n.device-pro {\n  display: block;\n  font-size: 12px;\n  padding-top: 0px; }\n\n.device-pro-line {\n  display: inline-block;\n  font-size: 12px;\n  padding-top: 5px; }\n\n.device-icon {\n  position: absolute;\n  font-size: 17px;\n  color: rgba(255, 255, 255, 0.8);\n  cursor: pointer; }\n\n.device-edit {\n  bottom: 0px;\n  right: 2px; }\n\n.device-delete {\n  top: 2px;\n  right: 2px;\n  font-size: 17px; }\n\n.device-list {\n  bottom: 0px;\n  right: 26px; }\n\n.device-status {\n  position: absolute;\n  bottom: 10px;\n  left: 10px;\n  width: 10px;\n  height: 10px;\n  border-radius: 4px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/device/device-map/device-map.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeviceMapComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__device_property_device_property_component__ = __webpack_require__("../../../../../src/app/device/device-property/device-property.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_project_service__ = __webpack_require__("../../../../../src/app/_services/project.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_device__ = __webpack_require__("../../../../../src/app/_models/device.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__helpers_utils__ = __webpack_require__("../../../../../src/app/_helpers/utils.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var DeviceMapComponent = (function () {
    function DeviceMapComponent(dialog, projectService) {
        this.dialog = dialog;
        this.projectService = projectService;
        this.goto = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.devices = {};
        this.devicesStatus = {};
        this.dirty = false;
    }
    DeviceMapComponent.prototype.ngOnInit = function () {
        this.loadCurrentProject();
    };
    DeviceMapComponent.prototype.ngAfterViewInit = function () {
    };
    DeviceMapComponent.prototype.ngOnDestroy = function () {
    };
    DeviceMapComponent.prototype.onEditDevice = function (device) {
        this.editDevice(device, false);
    };
    DeviceMapComponent.prototype.loadCurrentProject = function () {
        // take the copy of devices to save by leave
        var prj = this.projectService.getProject();
        if (prj && prj.server) {
            this.server = prj.server;
        }
        if (prj && prj.devices) {
            this.devices = prj.devices;
        }
    };
    DeviceMapComponent.prototype.addDevice = function () {
        var device = new __WEBPACK_IMPORTED_MODULE_4__models_device__["a" /* Device */]();
        device.id = __WEBPACK_IMPORTED_MODULE_5__helpers_utils__["b" /* Utils */].getGUID();
        device.property = new __WEBPACK_IMPORTED_MODULE_4__models_device__["b" /* DeviceNetProperty */]();
        device.enabled = false;
        device.tags = {};
        this.editDevice(device, false);
    };
    DeviceMapComponent.prototype.onRemoveDevice = function (device) {
        this.editDevice(device, true);
    };
    DeviceMapComponent.prototype.removeDevice = function (device) {
        delete this.devices[device.name];
    };
    DeviceMapComponent.prototype.getDevicePosition = function (index) {
        if (this.devices && Object.values(this.devices).length) {
            var offset = 160; // scss.$card-width
            var pos = index + 1;
            var centerd = Object.keys(this.devices).length + 1;
            var result = ((window.innerWidth - offset) / centerd) * pos;
            return result;
        }
        return 0;
    };
    DeviceMapComponent.prototype.getDeviceLinePosition = function (index) {
        if (this.devices && Object.values(this.devices).length) {
            var offset = 160; // scss.$card-width
            var pos = index + 1;
            var centerd = Object.keys(this.devices).length + 1;
            var result = ((window.innerWidth - offset) / centerd) * pos;
            result += (160 - 6) / 2; // card center: scss.$card-width - $line-size
            return result;
        }
        return 0;
    };
    DeviceMapComponent.prototype.getDeviceConnectionLeftPosition = function (index) {
        var offset = 160; // scss.$card-width
        var centerd = Object.keys(this.devices).length + 1;
        var result = ((window.innerWidth - offset) / centerd) * 1;
        result += (160 - 6) / 2; // card center: scss.$card-width - $line-size
        return result;
    };
    DeviceMapComponent.prototype.getDeviceConnectionWidth = function (index) {
        var offset = 160; // scss.$card-width
        var pos = index;
        var centerd = Object.keys(this.devices).length + 1;
        var result = (((window.innerWidth - offset) / centerd) * pos) - (((window.innerWidth - offset) / centerd) * 1);
        return result;
    };
    DeviceMapComponent.prototype.devicesValue = function () {
        if (this.devices && Object.values(this.devices).length) {
            var result = Object.values(this.devices);
            return result.sort(function (a, b) { return (a.name > b.name) ? 1 : -1; });
        }
        return [];
    };
    DeviceMapComponent.prototype.onListDevice = function (device) {
        this.goto.emit(device);
    };
    DeviceMapComponent.prototype.isDevicePropertyToShow = function (device) {
        if (device.property && device.type !== 'OPCUA') {
            return true;
        }
    };
    DeviceMapComponent.prototype.getDeviceStatusColor = function (device) {
        var st = this.devicesStatus[device.name];
        if (this.devicesStatus[device.name]) {
            if (st === 'connect-ok') {
                return '#00b050';
            }
            else if (st === 'connect-error') {
                return '#ff2d2d';
            }
            else if (st === 'connect-off') {
                return '#ffc000';
            }
        }
    };
    DeviceMapComponent.prototype.setDeviceStatus = function (event) {
        this.devicesStatus[event.id] = event.status;
    };
    DeviceMapComponent.prototype.editDevice = function (device, toremove) {
        var _this = this;
        var exist = Object.values(this.devices).filter(function (d) { return d.id !== device.id; }).map(function (d) { return d.name; });
        exist.push('server');
        var tempdevice = JSON.parse(JSON.stringify(device));
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_2__device_property_device_property_component__["a" /* DevicePropertyComponent */], {
            // minWidth: '700px',
            // minHeight: '700px',
            panelClass: 'dialog-property',
            data: { device: tempdevice, remove: toremove, exist: exist },
            position: { top: '80px' }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.dirty = true;
                if (toremove) {
                    _this.removeDevice(device);
                    _this.projectService.removeDevice(device);
                }
                else {
                    var olddevice = JSON.parse(JSON.stringify(device));
                    device.name = tempdevice.name;
                    device.type = tempdevice.type;
                    device.enabled = tempdevice.enabled;
                    if (device.property && tempdevice.property) {
                        device.property.address = tempdevice.property.address;
                        device.property.port = parseInt(tempdevice.property.port);
                        device.property.slot = parseInt(tempdevice.property.slot);
                        device.property.rack = parseInt(tempdevice.property.rack);
                    }
                    _this.projectService.setDevice(device, olddevice, result.security);
                }
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */])
    ], DeviceMapComponent.prototype, "goto", void 0);
    DeviceMapComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-device-map',
            template: __webpack_require__("../../../../../src/app/device/device-map/device-map.component.html"),
            styles: [__webpack_require__("../../../../../src/app/device/device-map/device-map.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["j" /* MatDialog */],
            __WEBPACK_IMPORTED_MODULE_3__services_project_service__["a" /* ProjectService */]])
    ], DeviceMapComponent);
    return DeviceMapComponent;
}());



/***/ }),

/***/ "../../../../../src/app/device/device-property/device-property.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n ::ng-deep .mat-expansion-panel-body {\r\n    padding-left: 5px !important;\r\n    padding-right: 5px !important;\r\n }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/device/device-property/device-property.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <div style=\"width: 100%;\"> -->\n<div style=\"width: 100%;position: relative;padding-bottom: 40px\">\n\t<div *ngIf=\"isToRemove\" style=\"margin-top: 20px;margin-bottom: 20px;\">\n\t\t{{'msg.device-remove' | translate}} '{{data.device.name}}' ?\n\t</div>\n\t<div *ngIf=\"!isToRemove\">\n\t\t<h1 mat-dialog-title style=\"display:inline-block; cursor:move; padding-top: 15px\" mat-dialog-draggable *ngIf=\"!isFuxaServer\">\n\t\t\t{{'device.property-client' | translate}}</h1>\n\t\t<h1 mat-dialog-title style=\"display:inline-block; cursor:move; padding-top: 15px\" mat-dialog-draggable *ngIf=\"isFuxaServer\">\n\t\t\t{{'device.property-server' | translate}}</h1>\n\t\t<mat-icon (click)=\"onNoClick()\" style=\"float:right;cursor:pointer;color:gray;position: relative; top: 10px; right: 0px\">clear</mat-icon>\n\t</div>\n\t<div style=\"overflow-y: hidden; overflow-x: hidden; padding-top: 5px;\" *ngIf=\"!isToRemove\">\n\t\t<div style=\"display: block;\">\n\t\t\t<div class=\"my-form-field\" style=\"display: block;margin-bottom: 10px;\">\n\t\t\t\t<span>{{'device.property-name' | translate}}</span>\n\t\t\t\t<input [(ngModel)]=\"data.device.name\" style=\"width: 300px\" type=\"text\">\n\t\t\t</div>\n\t\t\t<div class=\"my-form-field\" style=\"display: inline-block;margin-bottom: 10px;\" *ngIf=\"!isFuxaServer\">\n\t\t\t\t<span>{{'device.property-type' | translate}}</span>\n\t\t\t\t<mat-select [(value)]=\"data.device.type\" style=\"width: 200px\" [disabled]=\"isFuxaServer\">\n\t\t\t\t\t<mat-option *ngFor=\"let type of deviceType | enumToArray\" [value]=\"type.key\">\n\t\t\t\t\t\t{{ type.value }}\n\t\t\t\t\t</mat-option>\n\t\t\t\t</mat-select>\n\t\t\t</div>\n\t\t\t<div class=\"my-form-field\" style=\"display: inline-block;margin-bottom: 10px;margin-left: 20px;\" *ngIf=\"!isFuxaServer\">\n\t\t\t\t<span>{{'device.property-enable' | translate}}</span>\n\t\t\t\t<mat-slide-toggle color=\"primary\" [(ngModel)]=\"data.device.enabled\"></mat-slide-toggle>\n\t\t\t</div>\n\t\t\t<div class=\"my-form-field\" *ngIf=\"data.device.property\" style=\"display: block;margin-bottom: 10px;\">\n\t\t\t\t<span>{{'device.property-address' | translate}}</span>\n\t\t\t\t<input [(ngModel)]=\"data.device.property.address\" style=\"width: 300px\" type=\"ip\" (click)=\"onAddressChanged()\">\n\t\t\t</div>\n\t\t\t<div class=\"my-form-field\" *ngIf=\"data.device.property && isOpcUa(data.device.type)\" style=\"width: 306px\">\n\t\t\t\t<mat-expansion-panel #panelProperty class=\"my-expansion-panel\" style=\"box-shadow:none !important; background-color: #f1f3f4;\" (closed)=\"onPropertyExpand(false)\" (opened)=\"onPropertyExpand(true);onCheckOpcUaServer()\">\n\t\t\t\t\t<mat-expansion-panel-header class=\"header\" [collapsedHeight]=\"'40px'\" [expandedHeight]=\"'40px'\" style=\"padding-left:5px !important;padding-right:17px !important\">\n\t\t\t\t\t\t<mat-panel-title>\n\t\t\t\t\t\t\t<span *ngIf=\"propertyExpanded\">{{'device.property-security' | translate}}</span>\n\t\t\t\t\t\t\t<span *ngIf=\"!propertyExpanded\">{{'device.not-property-security' | translate}}</span>\n\t\t\t\t\t\t</mat-panel-title>\n\t\t\t\t\t</mat-expansion-panel-header>\n\t\t\t\t\t<div *ngIf=\"propertyLoading\">\n\t\t\t\t\t\t<mat-spinner style=\"margin: auto\" diameter=\"20\"></mat-spinner>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div *ngIf=\"!propertyLoading\">\n\t\t\t\t\t\t<mat-radio-group [(ngModel)]=\"securityRadio\">\n\t\t\t\t\t\t\t<mat-radio-button style=\"display:block;padding-left:10px;padding-bottom:2px;\" *ngFor=\"let sec of securityMode;\" [value]=\"sec.value\">{{sec.text}}</mat-radio-button>\n\t\t\t\t\t\t</mat-radio-group>\n\t\t\t\t\t\t<div class=\"my-form-field\" style=\"display: block;margin: 5px 10px 0px 10px;\">\n\t\t\t\t\t\t\t<span>{{'general.username' | translate}}</span>\n\t\t\t\t\t\t\t<input [(ngModel)]=\"security.username\" style=\"width: 265px;border:1px solid#dcdcdc\" type=\"text\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"my-form-field\" style=\"display: block;margin: 5px 10px 0px 10px;\">\n\t\t\t\t\t\t\t<span>{{'general.password' | translate}}</span>\n\t\t\t\t\t\t\t<input [(ngModel)]=\"security.password\" style=\"width: 265px;border:1px solid #dcdcdc\" type=\"text\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</mat-expansion-panel>\n\t\t\t</div>\n\t\t\t<div *ngIf=\"data.device.property && isSiemensS7(data.device.type)\">\n\t\t\t\t<div class=\"my-form-field\" style=\"display: inline-block;margin-bottom: 10px;\">\n\t\t\t\t\t<span>{{'device.property-port' | translate}}</span>\n\t\t\t\t\t<input numberOnly [(ngModel)]=\"data.device.property.port\" style=\"width: 80px\" type=\"text\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"my-form-field\" style=\"display: inline-block;margin-bottom: 10px;\">\n\t\t\t\t\t<span>{{'device.property-rack' | translate}}</span>\n\t\t\t\t\t<input numberOnly [(ngModel)]=\"data.device.property.rack\" style=\"width: 80px\" type=\"text\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"my-form-field\" style=\"display: inline-block;margin-bottom: 10px;\">\n\t\t\t\t\t<span>{{'device.property-slot' | translate}}</span>\n\t\t\t\t\t<input numberOnly [(ngModel)]=\"data.device.property.slot\" style=\"width: 80px\" type=\"text\">\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<div mat-dialog-actions style=\"display: inline-block; position: absolute; bottom: 10px; right: 10px\">\n\t\t<button mat-raised-button (click)=\"onNoClick()\">{{'dlg.cancel' | translate}}</button>\n\t\t<button mat-raised-button color=\"primary\" [disabled]=\"!isValid(data.device)\" (click)=\"onOkClick()\" [mat-dialog-close]=\"data\" cdkFocusInitial>{{'dlg.ok' | translate}}</button>\n\t</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/device/device-property/device-property.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DevicePropertyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__("../../../../@ngx-translate/core/@ngx-translate/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_hmi_service__ = __webpack_require__("../../../../../src/app/_services/hmi.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_project_service__ = __webpack_require__("../../../../../src/app/_services/project.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_device__ = __webpack_require__("../../../../../src/app/_models/device.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};






var DevicePropertyComponent = (function () {
    function DevicePropertyComponent(hmiService, projectService, translateService, dialogRef, data) {
        this.hmiService = hmiService;
        this.projectService = projectService;
        this.translateService = translateService;
        this.dialogRef = dialogRef;
        this.data = data;
        this.deviceType = {};
        this.isFuxaServer = false;
        this.isToRemove = false;
        this.securityMode = [];
        this.security = new __WEBPACK_IMPORTED_MODULE_5__models_device__["c" /* DeviceSecurity */]();
    }
    DevicePropertyComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isToRemove = this.data.remove;
        this.isFuxaServer = (this.data.device.type && this.data.device.type === __WEBPACK_IMPORTED_MODULE_5__models_device__["d" /* DeviceType */].FuxaServer) ? true : false;
        for (var key in __WEBPACK_IMPORTED_MODULE_5__models_device__["d" /* DeviceType */]) {
            if (!this.isFuxaServer && key !== __WEBPACK_IMPORTED_MODULE_5__models_device__["d" /* DeviceType */].FuxaServer) {
                this.deviceType[key] = __WEBPACK_IMPORTED_MODULE_5__models_device__["d" /* DeviceType */][key];
            }
        }
        this.subscriptionDeviceProperty = this.hmiService.onDeviceProperty.subscribe(function (res) {
            if (res.type === __WEBPACK_IMPORTED_MODULE_5__models_device__["d" /* DeviceType */].OPCUA) {
                _this.securityMode = [];
                if (res.result) {
                    var secPol = __WEBPACK_IMPORTED_MODULE_5__models_device__["f" /* SecurityPolicy */];
                    for (var idx = 0; idx < res.result.length; idx++) {
                        var sec = res.result[idx];
                        var mode = _this.securityModeToString(sec.securityMode);
                        if (sec.securityPolicy.indexOf(secPol.None) !== -1) {
                            _this.securityMode.push({ value: sec, text: __WEBPACK_IMPORTED_MODULE_5__models_device__["f" /* SecurityPolicy */].None.toString() + ' - ' + mode });
                        }
                        else if (sec.securityPolicy.indexOf(secPol.Basic128) !== -1) {
                            _this.securityMode.push({ value: sec, text: __WEBPACK_IMPORTED_MODULE_5__models_device__["f" /* SecurityPolicy */].Basic128.toString() + ' - ' + mode });
                        }
                        else if (sec.securityPolicy.indexOf(secPol.Basic128Rsa15) !== -1) {
                            _this.securityMode.push({ value: sec, text: __WEBPACK_IMPORTED_MODULE_5__models_device__["f" /* SecurityPolicy */].Basic128Rsa15.toString() + ' - ' + mode });
                        }
                        else if (sec.securityPolicy.indexOf(secPol.Basic192) !== -1) {
                            _this.securityMode.push({ value: sec, text: __WEBPACK_IMPORTED_MODULE_5__models_device__["f" /* SecurityPolicy */].Basic192.toString() + ' - ' + mode });
                        }
                        else if (sec.securityPolicy.indexOf(secPol.Basic192Rsa15) !== -1) {
                            _this.securityMode.push({ value: sec, text: __WEBPACK_IMPORTED_MODULE_5__models_device__["f" /* SecurityPolicy */].Basic192Rsa15.toString() + ' - ' + mode });
                        }
                        else if (sec.securityPolicy.indexOf(secPol.Basic256) !== -1) {
                            _this.securityMode.push({ value: sec, text: __WEBPACK_IMPORTED_MODULE_5__models_device__["f" /* SecurityPolicy */].Basic256.toString() + ' - ' + mode });
                        }
                        else if (sec.securityPolicy.indexOf(secPol.Basic256Rsa15) !== -1) {
                            _this.securityMode.push({ value: sec, text: __WEBPACK_IMPORTED_MODULE_5__models_device__["f" /* SecurityPolicy */].Basic256Rsa15.toString() + ' - ' + mode });
                        }
                        else if (sec.securityPolicy.indexOf(secPol.Basic256Sha256) !== -1) {
                            _this.securityMode.push({ value: sec, text: __WEBPACK_IMPORTED_MODULE_5__models_device__["f" /* SecurityPolicy */].Basic256Sha256.toString() + ' - ' + mode });
                        }
                        if (_this.isSecurityMode(sec)) {
                            _this.securityRadio = sec;
                        }
                    }
                }
                else if (res.error) {
                }
            }
            _this.propertyLoading = false;
        });
        // check security
        if (this.data.device.name && this.data.device.type === __WEBPACK_IMPORTED_MODULE_5__models_device__["d" /* DeviceType */].OPCUA) {
            this.projectService.getDeviceSecurity(this.data.device.name).subscribe(function (result) {
                _this.setSecurity(result.value);
            }, function (err) {
                console.log('get Device Security err: ' + err);
            });
        }
    };
    DevicePropertyComponent.prototype.ngOnDestroy = function () {
        try {
            if (this.subscriptionDeviceProperty) {
                this.subscriptionDeviceProperty.unsubscribe();
            }
        }
        catch (e) {
        }
    };
    DevicePropertyComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    DevicePropertyComponent.prototype.onOkClick = function () {
        this.data.security = this.getSecurity();
    };
    DevicePropertyComponent.prototype.onCheckOpcUaServer = function () {
        this.propertyLoading = true;
        this.hmiService.askDeviceProperty(this.data.device.property.address, this.data.device.type);
    };
    DevicePropertyComponent.prototype.onPropertyExpand = function (status) {
        this.propertyExpanded = status;
    };
    DevicePropertyComponent.prototype.onAddressChanged = function () {
        this.propertyLoading = false;
    };
    DevicePropertyComponent.prototype.isSiemensS7 = function (type) {
        return (type === __WEBPACK_IMPORTED_MODULE_5__models_device__["d" /* DeviceType */].SiemensS7) ? true : false;
    };
    DevicePropertyComponent.prototype.isOpcUa = function (type) {
        return (type === __WEBPACK_IMPORTED_MODULE_5__models_device__["d" /* DeviceType */].OPCUA) ? true : false;
    };
    DevicePropertyComponent.prototype.isValid = function (device) {
        if (!device.name) {
            return false;
        }
        return (this.data.exist.find(function (n) { return n === device.name; })) ? false : true;
    };
    DevicePropertyComponent.prototype.isSecurityMode = function (sec) {
        if (JSON.stringify(this.mode) === JSON.stringify(sec)) {
            return true;
        }
        else {
            return false;
        }
    };
    DevicePropertyComponent.prototype.getSecurity = function () {
        if (this.data.device.type !== __WEBPACK_IMPORTED_MODULE_5__models_device__["d" /* DeviceType */].OPCUA || !this.propertyExpanded) {
            return null;
        }
        else {
            if (this.securityRadio || this.security.username || this.security.password) {
                var result = { mode: this.securityRadio, uid: this.security.username, pwd: this.security.password };
                return result;
            }
            else {
                return null;
            }
        }
    };
    DevicePropertyComponent.prototype.setSecurity = function (security) {
        if (security && security !== 'null') {
            var value = JSON.parse(security);
            this.mode = value.mode;
            this.security.username = value.uid;
            this.security.password = value.pwd;
            this.panelProperty.open();
        }
    };
    DevicePropertyComponent.prototype.securityModeToString = function (mode) {
        var secMode = __WEBPACK_IMPORTED_MODULE_5__models_device__["e" /* MessageSecurityMode */];
        var result = '';
        if (mode === secMode.NONE) {
            this.translateService.get('device.security-none').subscribe(function (txt) { result = txt; });
        }
        else if (mode === secMode.SIGN) {
            this.translateService.get('device.security-sign').subscribe(function (txt) { result = txt; });
        }
        else if (mode === secMode.SIGNANDENCRYPT) {
            this.translateService.get('device.security-signandencrypt').subscribe(function (txt) { result = txt; });
        }
        return result;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["o" /* MatExpansionPanel */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_material__["o" /* MatExpansionPanel */])
    ], DevicePropertyComponent.prototype, "panelProperty", void 0);
    DevicePropertyComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-device-property',
            template: __webpack_require__("../../../../../src/app/device/device-property/device-property.component.html"),
            styles: [__webpack_require__("../../../../../src/app/device/device-property/device-property.component.css")]
        }),
        __param(4, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_hmi_service__["a" /* HmiService */],
            __WEBPACK_IMPORTED_MODULE_4__services_project_service__["a" /* ProjectService */],
            __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["m" /* MatDialogRef */], Object])
    ], DevicePropertyComponent);
    return DevicePropertyComponent;
}());



/***/ }),

/***/ "../../../../../src/app/device/device.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".header-panel {\r\n    /* z-index: 9999 !important; */\r\n    position: fixed;\r\n    top: 0px;\r\n    left: 0px;\r\n    background-color: rgba(33,33,33,1);\r\n    /* background-color: rgba(33,33,33,0.92); */\r\n    color: rgba(255,255,255,1);\r\n    height: 40px;\r\n    width: 100%;\r\n}\r\n\r\n.device-btn {\r\n    height: 34px;\r\n    width: 34px;\r\n    min-width: unset !important;\r\n    padding:unset !important;\r\n    line-height: 34px;\r\n    margin-left: 5px;\r\n    margin-right: 5px;\r\n    float: right;\r\n}\r\n  \r\n.device-btn mat-icon {\r\n    font-size: 24px;\r\n    height: unset;\r\n    width: unset;\r\n}\r\n\r\n.work-panel {\r\n    position: absolute;\r\n    top: 40px;\r\n    left: 0px;\r\n    right: 0px;\r\n    bottom: 0px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/device/device.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"header-panel\">\n</div>\n<diV class=\"work-panel\">\n    <app-device-list [hidden]=\"showMode === 'map'\" #devicelist (save)=\"saveDevices()\" (goto)=\"gotoMap($event)\"></app-device-list>\n    <app-device-map [hidden]=\"showMode === 'tags'\" #devicemap (save)=\"saveDevices()\" (goto)=\"gotoList($event)\"></app-device-map>\n</diV>"

/***/ }),

/***/ "../../../../../src/app/device/device.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeviceComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__device_list_device_list_component__ = __webpack_require__("../../../../../src/app/device/device-list/device-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__device_map_device_map_component__ = __webpack_require__("../../../../../src/app/device/device-map/device-map.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_project_service__ = __webpack_require__("../../../../../src/app/_services/project.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_hmi_service__ = __webpack_require__("../../../../../src/app/_services/hmi.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DeviceComponent = (function () {
    function DeviceComponent(projectService, hmiService) {
        this.projectService = projectService;
        this.hmiService = hmiService;
        this.showMode = 'map';
    }
    DeviceComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscriptionLoad = this.projectService.onLoadHmi.subscribe(function (res) {
            _this.deviceMap.loadCurrentProject();
            // this.deviceList.loadCurrentProject();
        });
        this.subscriptionDeviceChange = this.hmiService.onDeviceChanged.subscribe(function (event) {
            _this.deviceMap.setDeviceStatus(event);
        });
        this.subscriptionVariableChange = this.hmiService.onVariableChanged.subscribe(function (event) {
            _this.deviceList.updateDeviceValue();
        });
        this.subscriptionSave = this.projectService.onSaveCurrent.subscribe(function (saveas) {
            if (saveas) {
                _this.projectService.saveAs();
            }
        });
        this.hmiService.askDeviceStatus();
    };
    DeviceComponent.prototype.ngAfterViewInit = function () {
        this.showMode = 'map';
    };
    DeviceComponent.prototype.ngOnDestroy = function () {
        // this.checkToSave();
        try {
            if (this.subscriptionLoad) {
                this.subscriptionLoad.unsubscribe();
            }
            if (this.subscriptionDeviceChange) {
                this.subscriptionDeviceChange.unsubscribe();
            }
            if (this.subscriptionVariableChange) {
                this.subscriptionVariableChange.unsubscribe();
            }
            if (this.subscriptionSave) {
                this.subscriptionSave.unsubscribe();
            }
        }
        catch (e) {
        }
    };
    DeviceComponent.prototype.show = function (mode) {
        // this.checkToSave();
        this.showMode = mode;
        if (this.showMode === 'tags') {
            this.deviceList.updateDeviceValue();
            try {
                if (Object.values(this.deviceMap.devicesValue()).length > 0) {
                    this.deviceList.setSelectedDevice(this.deviceMap.devicesValue()[0]);
                }
            }
            catch (e) {
            }
        }
    };
    DeviceComponent.prototype.gotoMap = function () {
        this.show('map');
    };
    DeviceComponent.prototype.gotoList = function (device) {
        this.show('tags');
        this.deviceList.setSelectedDevice(device);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewChild */])('devicelist'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__device_list_device_list_component__["a" /* DeviceListComponent */])
    ], DeviceComponent.prototype, "deviceList", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewChild */])('devicemap'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__device_map_device_map_component__["a" /* DeviceMapComponent */])
    ], DeviceComponent.prototype, "deviceMap", void 0);
    DeviceComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-device',
            template: __webpack_require__("../../../../../src/app/device/device.component.html"),
            styles: [__webpack_require__("../../../../../src/app/device/device.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_project_service__["a" /* ProjectService */],
            __WEBPACK_IMPORTED_MODULE_4__services_hmi_service__["a" /* HmiService */]])
    ], DeviceComponent);
    return DeviceComponent;
}());



/***/ }),

/***/ "../../../../../src/app/device/tag-property/tag-property.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/device/tag-property/tag-property.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"width: 100%;position: relative;padding-bottom: 40px\">\n  <div *ngIf=\"isToRemove\" style=\"margin-top: 20px;margin-bottom: 20px;\">\n    {{'msg.device-tag-remove' | translate}} '{{data.tag.name}}' ({{data.device.name}}) ?\n  </div>\n  <div *ngIf=\"!isToRemove\">\n    <h1 *ngIf=\"!withtree\" mat-dialog-title style=\"display:inline-block; cursor:move; padding-top: 15px\" mat-dialog-draggable>\n      {{'device.tag-property-title' | translate}}\n    </h1>\n    <h1 *ngIf=\"withtree\" mat-dialog-title style=\"display:inline-block; cursor:move; padding-top: 15px\" mat-dialog-draggable>\n      {{'device.opctag-property-title' | translate}}\n    </h1>    \n    <mat-icon (click)=\"onNoClick()\" style=\"float:right;cursor:pointer;color:gray;position: relative; top: 10px; right: 0px\">clear</mat-icon>\n  </div>\n  <div style=\"max-height: 540px; overflow-y: auto; overflow-x: hidden; padding-top: 5px;\" *ngIf=\"!isToRemove && !withtree\">\n    <div style=\"display: block;\">\n      <div class=\"my-form-field\" style=\"display: block;margin-bottom: 10px;\">\n        <span>{{'device.tag-property-device' | translate}}</span>\n        <mat-select [(value)]=\"data.device.name\" style=\"width: 300px\" [disabled]=\"true\">\n          <mat-option *ngFor=\"let device of devicesValue()\" [value]=\"device.name\">\n            {{ device.name }}\n          </mat-option>\n        </mat-select>\n      </div>\n      <div class=\"my-form-field\" style=\"display: block;margin-bottom: 10px;\">\n        <span>{{'device.tag-property-name' | translate}}</span>\n        <input [(ngModel)]=\"data.tag.name\" style=\"width: 300px\" type=\"text\" (input)=\"onCheckValue($event)\">\n      </div>\n      <div class=\"my-form-field\" style=\"display: block;margin-bottom: 10px;\">\n        <span>{{'device.tag-property-type' | translate}}</span>\n        <mat-select [(value)]=\"data.tag.type\" style=\"width: 300px\">\n          <mat-option *ngFor=\"let type of tagType | enumToArray\" [value]=\"type.key\">\n            {{ type.value }}\n          </mat-option>\n        </mat-select>\n      </div>\n      <div class=\"my-form-field\"style=\"display: block;margin-bottom: 10px;\">\n        <span>{{'device.tag-property-address' | translate}}</span>\n        <input [(ngModel)]=\"data.tag.address\" style=\"width: 300px\" type=\"text\">\n      </div>\n      <div class=\"my-form-field\" style=\"display: inline-block;margin-bottom: 10px;\">\n        <span>{{'device.tag-property-min' | translate}}</span>\n        <input numberOnly [(ngModel)]=\"data.tag.min\" style=\"width: 80px\" type=\"text\">\n      </div>\n      <div class=\"my-form-field\" style=\"display: inline-block;margin-bottom: 10px;\">\n        <span>{{'device.tag-property-max' | translate}}</span>\n        <input numberOnly [(ngModel)]=\"data.tag.max\" style=\"width: 80px\" type=\"text\">\n      </div>\n      <div class=\"error\" *ngIf=\"error\">\n          <span>{{error}}</span>\n      </div>\n    </div>\n  </div>\n\n  <div style=\"overflow-y: auto; overflow-x: hidden; padding-top: 5px;\" [hidden]=\"isToRemove && !withtree\">\n    <ngx-treetable #treetable [config]=\"config\" (expand)=\"queryNext($event)\"></ngx-treetable>\n  </div>\n\n  <div mat-dialog-actions style=\"display: inline-block; position: absolute; bottom: 10px; right: 10px\">\n    <button mat-raised-button (click)=\"onNoClick()\">{{'dlg.cancel' | translate}}</button>\n    <button mat-raised-button [disabled]=\"(error) ? 'true' : 'false'\" color=\"primary\" (click)=\"onOkClick()\" [mat-dialog-close]=\"data\" cdkFocusInitial>{{'dlg.ok' | translate}}</button>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/device/tag-property/tag-property.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TagPropertyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_device__ = __webpack_require__("../../../../../src/app/_models/device.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__gui_helpers_treetable_treetable_component__ = __webpack_require__("../../../../../src/app/gui-helpers/treetable/treetable.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_hmi_service__ = __webpack_require__("../../../../../src/app/_services/hmi.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__ = __webpack_require__("../../../../@ngx-translate/core/@ngx-translate/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};






var TagPropertyComponent = (function () {
    function TagPropertyComponent(hmiService, translateService, dialogRef, data) {
        var _this = this;
        this.hmiService = hmiService;
        this.translateService = translateService;
        this.dialogRef = dialogRef;
        this.data = data;
        this.existing = [];
        this.withtree = false;
        this.config = { width: '100%', height: '600px' };
        if (this.data.device.type === __WEBPACK_IMPORTED_MODULE_2__models_device__["d" /* DeviceType */].OPCUA) {
            this.withtree = true;
        }
        else {
            this.config.height = '0px';
            Object.keys(this.data.device.tags).forEach(function (key) {
                var tag = _this.data.device.tags[key];
                if (tag.id) {
                    if (tag.id !== _this.data.tag.id) {
                        _this.existing.push(tag.name);
                    }
                }
                else if (tag.name !== _this.data.tag.name) {
                    _this.existing.push(tag.name);
                }
            });
        }
    }
    TagPropertyComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.tagType = __WEBPACK_IMPORTED_MODULE_2__models_device__["h" /* TagType */];
        if (this.withtree) {
            if (this.data.device.type === __WEBPACK_IMPORTED_MODULE_2__models_device__["d" /* DeviceType */].OPCUA) {
                this.subscriptionBrowse = this.hmiService.onDeviceBrowse.subscribe(function (values) {
                    if (_this.data.device.name === values.device) {
                        if (values.error) {
                            _this.addError(values.node, values.error);
                        }
                        else {
                            _this.addNodes(values.node, values.result);
                        }
                    }
                });
                this.subscriptionNodeAttribute = this.hmiService.onDeviceNodeAttribute.subscribe(function (values) {
                    if (_this.data.device.name === values.device) {
                        if (values.error) {
                            //   this.addError(values.node, values.error);
                        }
                        else if (values.node) {
                            if (values.node.attribute[14]) {
                                values.node.type = values.node.attribute[14];
                            }
                            _this.treetable.setNodeProperty(values.node, _this.attributeToString(values.node.attribute));
                        }
                    }
                });
            }
            this.queryNext(null);
        }
    };
    TagPropertyComponent.prototype.ngOnDestroy = function () {
        // this.checkToSave();
        try {
            if (this.subscriptionBrowse) {
                this.subscriptionBrowse.unsubscribe();
            }
            if (this.subscriptionNodeAttribute) {
                this.subscriptionNodeAttribute.unsubscribe();
            }
        }
        catch (e) {
        }
    };
    TagPropertyComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    TagPropertyComponent.prototype.onOkClick = function () {
        var _this = this;
        this.data.nodes = [];
        Object.keys(this.treetable.nodes).forEach(function (key) {
            var n = _this.treetable.nodes[key];
            if (n.checked) {
                _this.data.nodes.push(_this.treetable.nodes[key]);
            }
        });
    };
    TagPropertyComponent.prototype.onCheckValue = function (tag) {
        var _this = this;
        if (this.existing.indexOf(tag.target.value) !== -1) {
            this.error = '';
            this.translateService.get('msg.device-tag-exist').subscribe(function (txt) { _this.error = txt; });
        }
        else {
            this.error = '';
        }
    };
    TagPropertyComponent.prototype.addNodes = function (parent, nodes) {
        var _this = this;
        nodes.forEach(function (n) {
            var node = new __WEBPACK_IMPORTED_MODULE_3__gui_helpers_treetable_treetable_component__["a" /* Node */](n.id, n.name);
            node.class = n.class;
            node.property = _this.getProperty(n);
            var enabled = true;
            if (_this.data.device.tags[n.id] && node.class === 'Variable') {
                // node allready selected
                enabled = false;
            }
            _this.treetable.addNode(node, parent, enabled);
            if (node.class === 'Variable') {
                _this.hmiService.askNodeAttributes(_this.data.device.name, n);
            }
        });
        this.treetable.update();
    };
    TagPropertyComponent.prototype.getProperty = function (n) {
        if (n.class === 'Object') {
            return '';
        }
        else if (n.class === 'Variable') {
            return 'Variable';
        }
        else if (n.class === 'Method') {
            return 'Method';
        }
        return '';
    };
    TagPropertyComponent.prototype.addError = function (parent, error) {
    };
    TagPropertyComponent.prototype.devicesValue = function () {
        return Object.values(this.data.devices);
    };
    TagPropertyComponent.prototype.queryNext = function (node) {
        var n = (node) ? { id: node.id } : null;
        this.hmiService.askDeviceBrowse(this.data.device.name, n);
    };
    TagPropertyComponent.prototype.attributeToString = function (attribute) {
        var result = '';
        if (attribute) {
            Object.values(attribute).forEach(function (x) {
                if (result.length) {
                    result += ', ';
                }
                result += x;
            });
        }
        return result;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_3__gui_helpers_treetable_treetable_component__["b" /* TreetableComponent */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__gui_helpers_treetable_treetable_component__["b" /* TreetableComponent */])
    ], TagPropertyComponent.prototype, "treetable", void 0);
    TagPropertyComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-tag-property',
            template: __webpack_require__("../../../../../src/app/device/tag-property/tag-property.component.html"),
            styles: [__webpack_require__("../../../../../src/app/device/tag-property/tag-property.component.css")]
        }),
        __param(3, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__services_hmi_service__["a" /* HmiService */],
            __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["m" /* MatDialogRef */], Object])
    ], TagPropertyComponent);
    return TagPropertyComponent;
}());



/***/ }),

/***/ "../../../../../src/app/editor/chart-config/chart-config.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n.panelTop {\r\n    display: block;\r\n    /* position: relative;\r\n    top: 20px; */\r\n    /* margin-top: 10px; */\r\n    width: 100%;\r\n    height: 580px;\r\n    /* border: 1px solid rgba(0, 0, 0, 0.1); */\r\n}\r\n\r\n.panelBottom {\r\n    /* position: relative; */\r\n    /* bottom: 10px; */\r\n    display: block;\r\n    width: 100%;\r\n    height: 160px;\r\n    /* margin-top: 2px; */\r\n    /* border: 1px solid rgba(0, 0, 0, 0.1); */\r\n}\r\n\r\n.list {\r\n    width: 100% !important; \r\n    height: 100% !important; \r\n    font-size: 16px !important; \r\n    padding-top: 0px !important;\r\n}\r\n\r\n.list span  {\r\n    padding-left: 10px;\r\n    white-space: nowrap;\r\n    /* padding-right: 10px; */\r\n}\r\n\r\n.list mat-list-option  {\r\n    padding-left: 10px;\r\n    /* padding-right: 10px; */\r\n}\r\n\r\n.chart-list {\r\n    /* margin-right: 2px; */\r\n    overflow-y: auto;\r\n}\r\n\r\n.list-item {\r\n    width: 100%;\r\n    display: block;\r\n    font-size: 14px;\r\n    height: 26px !important;\r\n    white-space: nowrap;\r\n    cursor: pointer;\r\n    text-overflow: ellipsis;\r\n    overflow: hidden;\r\n}\r\n\r\n.list-item mat-icon {\r\n    font-size: 20px;\r\n}\r\n\r\n.list-item span {\r\n    width: calc(100% - 26px);\r\n    text-overflow: ellipsis;\r\n    overflow: hidden;\r\n}\r\n\r\n.list-item-selected {\r\n  background-color: rgba(0, 0, 0, 0.1);\r\n}\r\n\r\n.list-header {\r\n    background-color: rgba(0, 0, 0, 0.8);\r\n    color: #ffffff;\r\n    line-height: 26px;\r\n}\r\n\r\n.device-list {\r\n    margin-right: 2px;\r\n    overflow-y: auto;\r\n    /* border-left: 1px solid rgba(0, 0, 0, 0.1); */\r\n}\r\n\r\n.tag-list {\r\n    margin-right: 2px;\r\n    overflow-y: auto;\r\n    /* border-left: 1px solid rgba(0, 0, 0, 0.1); */\r\n}\r\n\r\n.color-line {\r\n    width: 30px;\r\n    border: unset;\r\n    border: 1px solid rgba(0,0,0,0.1);\r\n    border-radius: 2px;\r\n    opacity: 1;\r\n    background-color: #f1f3f4;\r\n  }\r\n\r\n/* ::ng-deep .mat-dialog-container {\r\n    display: inline-table !important;\r\n    padding: 0px 10px 10px 10px;\r\n} */\r\n\r\n/* ::ng-deep .mat-list-item-content {\r\n    padding-left: 8px !important;\r\n    padding-right: 8px !important;\r\n} */", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/editor/chart-config/chart-config.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n    <h1 mat-dialog-title style=\"display:inline-block\" mat-dialog-draggable>{{'chart.config-title' | translate}}</h1>\n    <mat-icon (click)=\"onNoClick()\" style=\"float:right;margin-right:-10px;margin-top:-10px;cursor:pointer;color:gray;\">clear</mat-icon>\n    <div style=\"display: inline-block; width: 100%\">\n        <div class=\"panelTop\">\n            <mat-grid-list cols=\"3\" rowHeight=\"100%\">\n                <mat-grid-tile class=\"chart-list\">\n                    <mat-list class=\"list\" >\n                        <mat-list-item class=\"list-item list-header\">\n                            <span>{{'chart.config-charts' | translate}}</span>\n                            <mat-icon style=\"position: absolute; right: 10px;cursor:pointer;color:rgba(255, 255, 255, 0.9);\" (click)=\"editChart()\">add</mat-icon>\n                        </mat-list-item>\n                        <mat-list-item *ngFor=\"let chart of data.charts\" matTooltip=\"{{chart.name}}\" class=\"list-item\" [ngClass]=\"isChartSelected(chart)\" (click)=\"selectedChart = chart;loadChartConfig();\">\n                            <span>{{chart.name}}</span>\n                            <mat-icon [matMenuTriggerFor]=\"configMenu\" style=\"position: absolute; right: 10px;cursor:pointer;color:gray;\">more_vert</mat-icon>\n                            <mat-menu #configMenu [overlapTrigger]=\"false\" style=\"color:#000000\">\n                                <button mat-menu-item (click)=\"editChart(chart)\" style=\"color:#000000;font-size: 14px;\">edit chart</button>\n                                <button mat-menu-item (click)=\"deleteChart(chart)\" style=\"color:#000000;font-size: 14px;\">delete chart</button>\n                            </mat-menu>\n                        </mat-list-item>\n                    </mat-list>\n                </mat-grid-tile>\n                <mat-grid-tile class=\"device-list\">\n                    <mat-list class=\"list\">\n                        <mat-list-item class=\"list-item list-header\">\n                            <span>{{'chart.config-devices' | translate}}</span>\n                        </mat-list-item>\n                        <mat-list-item *ngFor=\"let device of data.devices;\" matTooltip=\"{{device.name}}\" class=\"list-item\" [ngClass]=\"isDeviceSelected(device)\" (click)=\"selectDevice(device);\">\n                            <span>{{device.name}}</span>\n                        </mat-list-item>\n                    </mat-list>\n                </mat-grid-tile>\n                <mat-grid-tile class=\"tag-list\">\n                    <mat-list class=\"list\">\n                        <mat-list-item class=\"list-item list-header\">\n                            <span>{{'chart.config-tags' | translate}}</span>\n                        </mat-list-item>\n                        <mat-selection-list #selTags [(ngModel)]=\"selectedTags\" [disabled]=\"(selectedChart.id)?false:true\" (selectionChange)=\"tagSelectionChanged($event)\" style=\"padding-top: 0px;\">\n                            <mat-list-option *ngFor=\"let tag of selectedDevice.tags\" matTooltip=\"{{tag.name}}\" [selected]=\"tag.selected\" [value]=\"tag\" class=\"list-item\" checkboxPosition=\"before\">\n                                {{tag.name}}\n                            </mat-list-option>\n                        </mat-selection-list>\n                    </mat-list>\n                </mat-grid-tile>\n            </mat-grid-list>\n        </div>\n        <div class=\"panelBottom\">\n            <mat-list class=\"list\">\n                <mat-list-item class=\"list-item list-header\">\n                    <span>{{'chart.config-lines' | translate}}</span>\n                </mat-list-item>\n                <div style=\"height: calc(100% - 36px); overflow-y: auto\">\n                    <mat-list-item *ngFor=\"let tag of selectedChart.lines\" class=\"list-item\" (click)=\"editChartLine(tag)\">\n                        <mat-icon (click)=\"$event.stopPropagation();removeChartLine(tag)\" style=\"color:gray;font-size: 20px\">delete</mat-icon>\n                        <div style=\"width: 50%;max-width: 50%\">\n                            <span>{{getDeviceTagName(tag)}}</span>\n                        </div>\n                        <div style=\"width: 30%;max-width: 30%\">\n                            <span>{{tag.device}}</span>\n                        </div>\n                        <div>\n                            <input [(colorPicker)]=\"tag.color\" class=\"color-line\" title=\"{{'chart.config-line-color' | translate}}\" \n                            [style.background]=\"tag.color\" [cpAlphaChannel]=\"'disabled'\" [cpPosition]=\"'top'\"\n                            [cpPresetColors]=\"defaultColor\" [cpCancelButton]=\"true\" [cpCancelButtonClass]=\"'cpCancelButtonClass'\"\n                            [cpCancelButtonText]=\"'Cancel'\" [cpOKButton]=\"true\" [cpOKButtonText]=\"'OK'\" [cpOKButtonClass]=\"'cpOKButtonClass'\" />\n                        </div>\n                    </mat-list-item>\n                </div>\n            </mat-list>\n        </div>\n    </div>\n\n    <!-- <div mat-dialog-actions style=\"display: inline-block; position: absolute; bottom: 10px; right: 10px\"> -->\n  <div mat-dialog-actions style=\"float:right; margin-bottom:0px;padding-bottom:0px\">\n    <button mat-raised-button (click)=\"onNoClick()\">CANCEL</button>\n        <button mat-raised-button color=\"primary\" (click)=\"onOkClick()\" [mat-dialog-close]=\"data\"\n            cdkFocusInitial>OK</button>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/editor/chart-config/chart-config.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChartConfigComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return DialogListItem; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__helpers_utils__ = __webpack_require__("../../../../../src/app/_helpers/utils.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var ChartConfigComponent = (function () {
    function ChartConfigComponent(dialog, dialogRef, param) {
        var _this = this;
        this.dialog = dialog;
        this.dialogRef = dialogRef;
        this.param = param;
        this.selectedChart = { id: null, name: null, lines: [] };
        this.selectedDevice = { id: null, name: null, tags: [] };
        this.selectedTags = [];
        this.data = { charts: [], devices: [] };
        this.defaultColor = __WEBPACK_IMPORTED_MODULE_2__helpers_utils__["b" /* Utils */].defaultColor;
        this.lineColor = __WEBPACK_IMPORTED_MODULE_2__helpers_utils__["b" /* Utils */].lineColor;
        this.data.charts = param.charts;
        Object.values(param.devices).forEach(function (device) {
            var devicobj = Object.assign({}, device);
            devicobj.tags = Object.values(device.tags);
            _this.data.devices.push(devicobj);
        });
    }
    ChartConfigComponent.prototype.ngOnInit = function () {
        // this.data = {
        //     charts: [{ id: 'My chart A', name: 'My chart A', lines: [{ device: 'a', id: 'ab', name: 'aB' }] },
        //              { id: 'My chart B', name: 'My chart B', lines: []}],
        //     devices: [{ id: 'a', name: 'Device A', tags: [{ id: 'aa', name: 'aA' }, { id: 'ab', name: 'aB' }, { id: 'ac', name: 'aC' }]},
        //         { id: 'b', name: 'Device B', tags: [{ id: 'ba', name: 'bA' }, { id: 'bb', name: 'bB' }, { id: 'bc', name: 'bC' }, { id: 'bd', name: 'bD' }]}] };
    };
    ChartConfigComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    ChartConfigComponent.prototype.onOkClick = function () {
        this.dialogRef.close({ charts: this.data.charts });
    };
    ChartConfigComponent.prototype.editChart = function (chart) {
        var _this = this;
        var dialogRef = this.dialog.open(DialogListItem, {
            // minWidth: '700px',
            // minHeight: '700px',
            panelClass: 'dialog-property',
            data: { name: (chart) ? chart.name : '' },
            position: { top: '80px' }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result && result.name && result.name.length > 0) {
                // this.dirty = true;
                if (chart) {
                    chart.name = result.name;
                }
                else {
                    _this.data.charts.push({ id: __WEBPACK_IMPORTED_MODULE_2__helpers_utils__["b" /* Utils */].getShortGUID(), name: result.name, lines: [] });
                }
            }
        });
    };
    ChartConfigComponent.prototype.deleteChart = function (chart) {
        var found = -1;
        for (var i = 0; i < this.data.charts.length; i++) {
            if (chart.id === this.data.charts[i].id) {
                found = i;
            }
        }
        if (found >= 0) {
            this.data.charts.splice(found, 1);
            this.selectedChart = { id: null, name: null, lines: [] };
        }
    };
    ChartConfigComponent.prototype.selectDevice = function (device) {
        this.selectedDevice = JSON.parse(JSON.stringify(device));
        this.loadDeviceConfig();
    };
    ChartConfigComponent.prototype.loadChartConfig = function () {
        this.selectedDevice = { id: null, name: null, tags: [] };
        this.loadDeviceConfig();
    };
    ChartConfigComponent.prototype.loadDeviceConfig = function () {
        var _this = this;
        if (this.selectedChart && this.selectedChart.lines && this.selectedDevice) {
            this.selectedChart.lines.forEach(function (line) {
                _this.selectedDevice.tags.forEach(function (tag) {
                    if (line.device === _this.selectedDevice.name && line.id === tag.id) {
                        tag.selected = true;
                    }
                });
            });
        }
    };
    /**
     * add or remove the selected device tags to the selected chart in char-line list
     * @param chart
     * @param device
     * @param tags
     */
    ChartConfigComponent.prototype.checkChartTags = function (chart, device, tags) {
        if (chart && chart.id) {
            var toremove = [];
            // check to remove
            if (chart.lines) {
                for (var i = 0; i < chart.lines.length; i++) {
                    if (chart.lines[i].device === device.name) {
                        var found = -1;
                        for (var x = 0; x < tags.length; x++) {
                            if (chart.lines[i].id === tags[x].id) {
                                found = i;
                                break;
                            }
                        }
                        if (found < 0) {
                            toremove.push(i);
                        }
                        // if (tags.map(x => x.id).indexOf(chart.lines[i].id) === -1) {
                        //     toremove.push(i);
                        // }
                    }
                }
            }
            // remove
            for (var i = 0; i < toremove.length; i++) {
                chart.lines.splice(toremove[i], 1);
            }
            // add if not exist
            for (var x = 0; x < tags.length; x++) {
                var found = false;
                if (chart.lines) {
                    for (var i = 0; i < chart.lines.length; i++) {
                        if (chart.lines[i].device === device.name && chart.lines[i].id === tags[x].id) {
                            found = true;
                        }
                    }
                }
                if (!found) {
                    var myCopiedObject = {};
                    myCopiedObject['id'] = tags[x].id;
                    myCopiedObject['name'] = tags[x].name;
                    myCopiedObject['device'] = device.name;
                    myCopiedObject['color'] = this.getNextColor();
                    chart.lines.push(myCopiedObject);
                }
            }
        }
    };
    ChartConfigComponent.prototype.tagSelectionChanged = function (event) {
        this.checkChartTags(this.selectedChart, this.selectedDevice, this.selectedTags);
    };
    ChartConfigComponent.prototype.editChartLine = function (tag) {
        console.log('ed ' + tag);
    };
    ChartConfigComponent.prototype.removeChartLine = function (tag) {
        var found = -1;
        for (var i = 0; i < this.selectedTags.length; i++) {
            if (tag.id === this.selectedTags[i].id) {
                found = i;
                break;
            }
        }
        if (found >= 0) {
            this.selectedTags.splice(found, 1);
        }
        this.checkChartTags(this.selectedChart, this.selectedDevice, this.selectedTags);
    };
    ChartConfigComponent.prototype.isChartSelected = function (chart) {
        if (chart === this.selectedChart) {
            return 'list-item-selected';
        }
    };
    ChartConfigComponent.prototype.isDeviceSelected = function (device) {
        if (device && device.name === this.selectedDevice.name) {
            return 'list-item-selected';
        }
    };
    ChartConfigComponent.prototype.getDeviceTagName = function (tag) {
        var devices = this.data.devices.filter(function (x) { return x.name === tag.device; });
        if (devices && devices.length > 0) {
            var tags = devices[0].tags;
            for (var i = 0; i < tags.length; i++) {
                if (tag.id === tags[i].id) {
                    return tags[i].name;
                }
            }
        }
        return '';
    };
    ChartConfigComponent.prototype.getNextColor = function () {
        for (var x = 0; x < this.lineColor.length; x++) {
            var found = false;
            if (this.selectedChart.lines) {
                for (var i = 0; i < this.selectedChart.lines.length; i++) {
                    if (this.selectedChart.lines[i].color === this.lineColor[x]) {
                        found = true;
                    }
                }
            }
            if (!found) {
                return this.lineColor[x];
            }
        }
        return __WEBPACK_IMPORTED_MODULE_2__helpers_utils__["b" /* Utils */].lineColor[0];
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["E" /* MatSelectionList */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_material__["E" /* MatSelectionList */])
    ], ChartConfigComponent.prototype, "selTags", void 0);
    ChartConfigComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-chart-config',
            template: __webpack_require__("../../../../../src/app/editor/chart-config/chart-config.component.html"),
            styles: [__webpack_require__("../../../../../src/app/editor/chart-config/chart-config.component.css")]
        }),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["j" /* MatDialog */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["m" /* MatDialogRef */], Object])
    ], ChartConfigComponent);
    return ChartConfigComponent;
}());

var DialogListItem = (function () {
    // defaultColor = Utils.defaultColor;
    function DialogListItem(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    DialogListItem.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    DialogListItem.prototype.onOkClick = function () {
        this.dialogRef.close(true);
    };
    DialogListItem = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'dialog-list-item',
            template: __webpack_require__("../../../../../src/app/editor/chart-config/list-item.dialog.html"),
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["m" /* MatDialogRef */], Object])
    ], DialogListItem);
    return DialogListItem;
}());



/***/ }),

/***/ "../../../../../src/app/editor/chart-config/list-item.dialog.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <h1 mat-dialog-title style=\"display:inline-block\" mat-dialog-draggable>menu</h1>\r\n    <div mat-dialog-content>\r\n        <!-- <div class=\"my-form-field\" style=\"display: block;margin-bottom: 10px;\">\r\n            <span>Icon</span>\r\n            <mat-select [(value)]=\"data.item.icon\" style=\"width: 60px; height: 30px\" #iconsel>\r\n                <mat-select-trigger>\r\n                    <mat-icon>{{iconsel.value}}</mat-icon>\r\n                </mat-select-trigger>\r\n                <mat-option *ngFor=\"let icon of icons\" [value]=\"icon\">\r\n                    <mat-icon class=\"\">{{ icon }}</mat-icon>\r\n                </mat-option>\r\n            </mat-select>\r\n        </div> -->\r\n        <div class=\"my-form-field\" style=\"display: block;margin-bottom: 10px;\">\r\n            <span>name</span>\r\n            <input [(ngModel)]=\"data.name\" type=\"text\" style=\"width:100%\">\r\n        </div>\r\n        <!-- <div class=\"my-form-field\" style=\"display: block;margin-bottom: 10px;\">\r\n            <span>{{'dlg.menuitem-view' | translate}}</span>\r\n            <mat-select [(value)]=\"data.item.view\" style=\"width: 300px\">\r\n                <mat-option *ngFor=\"let view of data.views\" [value]=\"view.id\">\r\n                    {{ view.name }}\r\n                </mat-option>\r\n            </mat-select>\r\n        </div>\r\n        <div class=\"my-form-field\" style=\"display: block;margin-bottom: 10px;\">\r\n            <span>{{'dlg.menuitem-link' | translate}}</span>\r\n            <input [(ngModel)]=\"data.item.link\" type=\"text\" style=\"width:100%\" [readonly]=\"data.item.view\">\r\n        </div> -->\r\n    </div>\r\n    <div mat-dialog-actions style=\"float:right; margin-bottom:0px;padding-bottom:0px\">\r\n        <button mat-raised-button (click)=\"onNoClick()\">CANCEL</button>\r\n        <button mat-raised-button color=\"primary\" [mat-dialog-close]=\"data\"\r\n            cdkFocusInitial>OK</button>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/editor/docname.dialog.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <h1 mat-dialog-title style=\"display:inline-block\" mat-dialog-draggable>{{'dlg.docname-title' | translate}}</h1>\r\n  <mat-icon (click)=\"onNoClick()\" style=\"float:right;margin-right:-10px;margin-top:-10px;cursor:pointer;color:gray;\">clear</mat-icon>\r\n  <div mat-dialog-content>\r\n    <div class=\"my-form-field\" style=\"display: block;margin-bottom: 10px;\">\r\n        <span>{{'dlg.docname-name' | translate}}</span>\r\n        <input [(ngModel)]=\"data.name\" type=\"text\" width=\"100%\" [readonly]=\"data.readonly\">\r\n    </div>\r\n    <!-- <div style=\"display: grid; margin-bottom: 20px;\">\r\n      <input [(ngModel)]=\"data.name\" type=\"text\" width=\"100%\" [readonly]=\"data.readonly\">\r\n    </div> -->\r\n  </div>\r\n  <div mat-dialog-actions style=\"float:right; margin-bottom:0px;padding-bottom:0px\">\r\n    <button mat-raised-button (click)=\"onNoClick()\">{{'dlg.cancel' | translate}}</button>\r\n    <button mat-raised-button [disabled]=\"!isValid(data.name)\" color=\"primary\" [mat-dialog-close]=\"data\" cdkFocusInitial>{{'dlg.ok' | translate}}</button>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/editor/docproperty.dialog.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <h1 mat-dialog-title style=\"display:inline-block\" mat-dialog-draggable>{{'dlg.docproperty-title' | translate}}</h1>\r\n  <mat-icon (click)=\"onNoClick()\" style=\"float:right;margin-right:-10px;margin-top:-10px;cursor:pointer;color:gray;\">clear</mat-icon>\r\n  <div mat-dialog-content>\r\n    <div class=\"my-form-field\" style=\"display: inline-block;margin-bottom: 10px;\">\r\n      <span>{{'dlg.docproperty-width' | translate}}</span>\r\n      <input numberOnly [(ngModel)]=\"data.width\" style=\"width: 100px\" type=\"text\">\r\n    </div>\r\n    <div class=\"my-form-field\" style=\"margin-bottom: 10px; float:right\">\r\n        <span>{{'dlg.docproperty-height' | translate}}</span>\r\n        <input numberOnly [(ngModel)]=\"data.height\" style=\"width: 100px\" type=\"text\">\r\n    </div>    \r\n    <div style=\"display: block; margin-top: 10px;margin-bottom:10px\">\r\n      <span style=\"font-size:12px;color:darkgray\">{{'dlg.docproperty-background' | translate}}</span>\r\n      <input style=\"width:100%;height:24px;border:1px solid rgba(0,0,0,0.2);margin-top: 4px;\" readonly [(colorPicker)]=\"data.bkcolor\"\r\n        class=\"color-stroke\" title=\"Change stroke color\" [style.background]=\"data.bkcolor\" [cpPresetColors]=\"defaultColor\"\r\n        [cpAlphaChannel]=\"'always'\" [cpPosition]=\"'top'\" [value]=\"data.bkcolor\" [cpCancelButton]=\"true\"\r\n        [cpCancelButtonClass]=\"'cpCancelButtonClass'\" [cpCancelButtonText]=\"'Cancel'\" [cpOKButton]=\"true\"\r\n        [cpOKButtonText]=\"'OK'\" [cpOKButtonClass]=\"'cpOKButtonClass'\" />\r\n    </div>\r\n  </div>\r\n  <div mat-dialog-actions style=\"float:right; margin-bottom:0px;padding-bottom:0px\">\r\n    <button mat-raised-button (click)=\"onNoClick()\">{{'dlg.cancel' | translate}}</button>\r\n    <button mat-raised-button color=\"primary\" [mat-dialog-close]=\"data\" cdkFocusInitial>{{'dlg.ok' | translate}}</button>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/editor/editor.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#svg_editor_container {\r\n  /* position: absolute; */\r\n  /* bottom: 0px; */\r\n  /* left: 0px; */\r\n  /* right: 0px; */\r\n  /* display: block; */\r\n  background:#AAA;\r\n  height:100%; \r\n  width:100%;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -ms-flex-direction: column;\r\n      flex-direction: column;\r\n  position: absolute;\r\n  top: 0px;\r\n  left: 0px;\r\n}\r\n\r\n.svg-workarea-toolbar {\r\n  min-height: 46px;\r\n  height: 46px;\r\n}\r\n.svg-workarea-leftbar-p {\r\n  box-shadow: none !important;\r\n  background-color: rgba(33,33,33,1);\r\n}\r\n\r\n.svg-workarea-leftbar-h {\r\nmax-height: 26px;\r\ntext-align: center;\r\nvertical-align: middle;\r\npadding-left: 0px;\r\npadding-right: 0px;\r\nbackground-color: rgba(33,33,33,1);\r\ncolor: rgba(255,255,255,1);\r\n/* border-bottom: solid 1px rgba(0, 0, 0, 0.07); */\r\n}\r\n\r\n.svg-workarea-leftbar-h mat-icon {\r\n  background-color: rgba(33,33,33,1);\r\n  color: rgba(255,255,255,1);\r\n}\r\n\r\n.svg-workarea-leftbar-h span {\r\n  background-color: rgba(33,33,33,1);\r\n  color: rgba(255,255,255,1);\r\n  padding-top: 5px !important;\r\n  padding-left: 3px;\r\n  font-size: 11px;\r\n}\r\n\r\n/* .svg-workarea-leftbar-h:hover {\r\n} */\r\n\r\n.svg-workarea-leftbar-h:enabled .svg-workarea-leftbar-h::-moz-selection{\r\n  background-color: rgba(33,33,33,1);\r\n  color: rgba(255,255,255,1);\r\n}\r\n\r\n.svg-workarea-leftbar-h:enabled .svg-workarea-leftbar-h::selection{\r\n  background-color: rgba(33,33,33,1);\r\n  color: rgba(255,255,255,1);\r\n}\r\n\r\n/* .mat-expansion-panel-content {\r\n  background-color: rgb(53, 3, 3);\r\n} */\r\n\r\n.svg-workarea-flybar-h {\r\n  max-height: 26px;\r\n  text-align: center;\r\n  vertical-align: middle;\r\n  padding-left: 0px;\r\n  padding-right: 0px;\r\n  background-color: rgba(33,33,33,1);\r\n  color: rgba(255,255,255,1);\r\n  /* border-bottom: solid 1px rgba(0, 0, 0, 0.07); */\r\n }\r\n \r\n .svg-workarea-flybar-h mat-icon {\r\n     background-color: rgba(33,33,33,1);\r\n     color: rgba(255,255,255,1);\r\n }\r\n \r\n .svg-workarea-flybar-h span {\r\n     background-color: rgba(33,33,33,1);\r\n     color: rgba(255,255,255,1);\r\n     padding-top: 5px !important;\r\n     padding-left: 3px;\r\n     font-size: 11px;\r\n }\r\n \r\n /* .svg-workarea-flybar-h:hover {\r\n } */\r\n \r\n .svg-workarea-flybar-h:enabled .svg-workarea-flybar-h::-moz-selection{\r\n     background-color: rgba(33,33,33,1);\r\n     color: rgba(255,255,255,1);\r\n }\r\n \r\n .svg-workarea-flybar-h:enabled .svg-workarea-flybar-h::selection{\r\n     background-color: rgba(33,33,33,1);\r\n     color: rgba(255,255,255,1);\r\n }   \r\n\r\n.svg-workarea-fly-p {\r\n  box-shadow: none !important;\r\n  background-color: rgba(33,33,33,1);\r\n  width: 200px;\r\n  padding-left: 0px;\r\n  padding-right: 0px;\r\n}\r\n\r\n.svg-property-split3:after {\r\n  display: table;\r\n  clear: both;\r\n}\r\n\r\n.svg-property-split3 div {\r\n  /* float: left; */\r\n  /* width: 49%; */\r\n  display: inline-block;\r\n}\r\n\r\n.svg-property-split2:after {\r\n  display: table;\r\n  clear: both;\r\n}\r\n\r\n.svg-property-split2 div {\r\n  /* float: left; */\r\n  /* width: 49%; */\r\n  display: inline-block;\r\n}\r\n\r\n.svg-property {\r\n  /* display: block; */\r\n  color: rgba(255,255,255,0.75);\r\n  /* position: relative; */\r\n  /* left: 5px; */\r\n  /* right: 5px; */\r\n  /* width: 100%; */\r\n}\r\n\r\n.svg-property span {\r\n  /* float: left; */\r\n  display: block;\r\n  font-size: 10px;\r\n  margin: 0px 5px 0px 10px;\r\n}\r\n\r\n.svg-property input {\r\n  /* float: right; */\r\n  /* position: relative; */\r\n  /* left: 0px; */\r\n  /* right: 0px; */\r\n  display: block;\r\n  margin: 0px 10px 12px 10px;\r\n  border: unset;\r\n  background-color: inherit;\r\n  color: inherit;\r\n  border-bottom: 1px solid rgba(255,255,255,0.75);\r\n}\r\n\r\n.svg-workarea-container {\r\n  /* position: relative; */\r\n  display: block;\r\n  height: 100%;\r\n  /* height: calc(100% - 46px);  */\r\n  /* bottom: 0px; */\r\n  /* top: 0px; */\r\n  /* left: 0px; */\r\n  /* right: 0px; */\r\n}\r\n\r\n.svg-tools-fly {\r\n  z-index: 9999;\r\n  position:absolute; \r\n  right:25px; \r\n  top:55px; \r\n  overflow-y: auto;\r\n  max-height: calc(100% - 75px); \r\n\r\n}\r\n\r\n.svg-tool-button {\r\n  vertical-align: middle;\r\n  display: inline-table;\r\n  /* display: inline-block; */\r\n  cursor: pointer;\r\n  height: 30px;\r\n  width: 30px;\r\n  border-radius: 50%;\r\n  margin: 2px 2px 2px 2px;\r\n  /* padding-top: 5px; */\r\n}\r\n\r\n.svg-tool-button span {\r\n  display: block;\r\n  margin: auto;\r\n  /* height: 30px; */\r\n  /* width: 30px; */\r\n}\r\n\r\n.svg-tool-button:hover {\r\n  background: rgba(0, 0, 0, 0.1);\r\n}\r\n\r\n.svg-tool-active:active {\r\n  /* border: 1px solid #000000; */\r\n  background-color: rgba(48,89,175,1);        \r\n}\r\n\r\n.svg-tool-active {\r\n  /* border: 1px solid #000000; */\r\n  background-color: rgba(48,89,175,1);        \r\n}\r\n\r\n.leave-header-area {\r\n  margin-top: 36px;\r\n}\r\n\r\n.svg-sidenav {\r\n  min-width: 160px;\r\n  max-width: 200px;\r\n  background: rgba(33,33,33,1);\r\n}\r\n\r\n/* tool bar top */\r\n.tools_panel {\r\n  background-color: rgba(33,33,33,0.92);\r\n  color: rgba(255,255,255,1);\r\n}\r\n.main-btn {\r\n  height: 34px;\r\n  width: 34px;\r\n  min-width: unset !important;\r\n  padding:unset !important;\r\n  line-height: 34px;\r\n  margin-left: 5px;\r\n  margin-right: 5px;\r\n}\r\n\r\n.main-btn mat-icon {\r\n  font-size: 24px;\r\n  height: unset;\r\n  width: unset;\r\n}\r\n\r\n.main-btn .to-top {\r\n  background: url('/assets/images/to-top.svg') no-repeat center center;\r\n  background-size: contain;\r\n  display: inline-block;\r\n  height: 34px;\r\n  width: 34px;\r\n}\r\n\r\n.main-btn .to-bottom {\r\n  background: url('/assets/images/to-bottom.svg') no-repeat center center;\r\n  background-size: contain;\r\n  display: inline-block;\r\n  height: 34px;\r\n  width: 34px;\r\n}\r\n\r\n.main-btn .to-path {\r\n  background: url('/assets/images/to-path.svg') no-repeat center center;\r\n  background-size: contain;\r\n  display: inline-block;\r\n  height: 34px;\r\n  width: 34px;\r\n}\r\n\r\n.main-btn .group {\r\n  background: url('/assets/images/group.svg') no-repeat center center;\r\n  background-size: contain;\r\n  display: inline-block;\r\n  height: 34px;\r\n  width: 34px;\r\n}\r\n\r\n.main-btn .ungroup {\r\n  background: url('/assets/images/ungroup.svg') no-repeat center center;\r\n  background-size: contain;\r\n  display: inline-block;\r\n  height: 34px;\r\n  width: 34px;\r\n}\r\n\r\n.main-btn-sep {\r\n  width: 1px;\r\n  background: #888;\r\n  border-left: 1px outset #888;\r\n  margin: 5px 3px;\r\n  padding: 0;\r\n  height: 24px;\r\n}\r\n\r\n/* --------------- */\r\n/* left panel */\r\n/* --------------- */\r\n.view-panel {\r\n  max-height: 400px;\r\n  overflow: auto;\r\n}\r\n.leftbar-edit-btn {\r\n  margin-top: 2px;\r\n  font-size: 18px;\r\n  height: 18px;\r\n  width: 18px;\r\n  padding-right: 15px;\r\n}\r\n\r\n.leftbar-panel {\r\n  padding: 0px 0px 0px 0px;\r\n  font-size: 11px;\r\n  /* background-color: rgb(34, 107, 241); */\r\n  background-color: rgba(47,47,47,1);\r\n  overflow: auto;\r\n  max-height: 200px;\r\n}\r\n\r\n.leftbar-item {\r\n  /* padding-top: 6px; */\r\n  /* padding-bottom: 6px; */\r\n  /* width: 100%; */\r\n  padding: 3px 0px 1px 0px;\r\n  display: flow-root;\r\n  color: rgba(255,255,255,1);\r\n}\r\n\r\n.leftbar-item-active {\r\n  /* font-weight: 600; */\r\n  background-color: rgba(48,89,175,1);    \r\n}\r\n\r\n.leftbar-item span {\r\n  padding-left: 15px;    \r\n  float: left;\r\n}\r\n.leftbar-item mat-icon {\r\n  float: right;\r\n  font-size: 18px;\r\n  /* color: rgba(0, 0, 0, 0.4); */\r\n}\r\n\r\n::ng-deep .leftbar-item-menu {\r\n  background-color: rgba(47,47,47,1);\r\n}\r\n\r\n::ng-deep .svg-workarea-leftbar-p .mat-expansion-panel-body {\r\n  margin: 0px 0px 0px 0px !important;\r\n  padding: 0px 0px 0px 0px !important;\r\n  /* padding-left: 10px !important; */\r\n  -ms-flex-wrap: wrap !important;\r\n      flex-wrap: wrap !important;\r\n}\r\n\r\n::ng-deep .svg-workarea-fly-p .mat-expansion-panel-body {\r\n  margin: 0px 0px 0px 0px !important;\r\n  padding: 0px 0px 0px 0px !important;\r\n  /* padding-left: 10px !important; */\r\n  -ms-flex-wrap: wrap !important;\r\n      flex-wrap: wrap !important;\r\n  background-color: rgba(47,47,47,1);\r\n  \r\n}\r\n\r\n::ng-deep .mat-menu-item {\r\n  font-size: 11px;\r\n  color: rgba(255,255,255,1);\r\n  height: 30px !important;\r\n  line-height: unset !important;\r\n}\r\n\r\n.rightbar-panel {\r\n  /* padding: 0px 0px 0px 0px; */\r\n  /* font-size: 11px; */\r\n  /* background-color: rgb(34, 107, 241); */\r\n  background-color: rgba(47,47,47,1);\r\n  /* overflow: auto; */\r\n}\r\n\r\n.mat-expansion-panel-header-title span {\r\n  padding-top: 3px;\r\n}\r\n.mat-expansion-panel-spacing {\r\n  margin: 0px 0px 0px 0px !important;\r\n}\r\n\r\n.bottom-bar {\r\n  position: absolute;\r\n  left: 0px;\r\n  right: 0;\r\n  bottom: 0;\r\n  height: 30px;\r\n  overflow: visible;\r\n}\r\n\r\n.zoom-menu {\r\n  float: left;\r\n  padding-left: 5px;\r\n  width: 90px;  \r\n}\r\n\r\n.zoom-value {\r\n  background-color: inherit;\r\n  color: rgba(255,255,255,1);\r\n  border: unset;\r\n  display: inline-block;\r\n}\r\n\r\n.zoom-label {\r\n  display: inline-block;\r\n  height: 25px;\r\n}\r\n.zoom-value span {\r\n  display: inline-block;\r\n  /* position: absolute; */\r\n  /* top: 5px; */\r\n  /* left: 5px; */\r\n  /* height: 10px; */\r\n  /* width: 10px; */\r\n}\r\n\r\n.zoom-value .selection, button {\r\n  display: inline-block;\r\n  /* height: 10px; */\r\n  /* width: 10px; */\r\n  /* position: absolute; */\r\n  /* top: 3px; */\r\n  /* left: 55px; */\r\n}\r\n.zoom-value button {\r\n  /* width: unset; */\r\n  z-index: 9999;\r\n  background-color: rgba(33,33,33,1);\r\n  color: rgba(255,255,255,1);\r\n  border: unset;\r\n}\r\n\r\n.zoom-value ul, li {\r\n  /* width: unset; */\r\n  background-color: rgba(33,33,33,1);\r\n  color: rgba(255,255,255,1);\r\n  border: unset;\r\n}\r\n\r\n.zoom-value ul {\r\n  left: 0px;\r\n}\r\n\r\n.zoom-value li:hover {\r\n  background-color: rgb(22, 22, 22);\r\n  \r\n}\r\n\r\n.colors {\r\n  position: absolute;\r\n  left: 25px;\r\n  top: 0px;\r\n}\r\n\r\n.colors-palette {\r\n  position: absolute;\r\n  left: 850px;\r\n  top: 0px;\r\n}\r\n\r\n.color-fill {\r\n  position: relative;\r\n  top: 3px;\r\n  left: 10px;\r\n  cursor: pointer;\r\n  width: 14px;\r\n  height: 14px;\r\n  border: 1px solid  rgba(255,255,255,0.75);\r\n}\r\n\r\n.color-stroke {\r\n  position: absolute;\r\n  top: 3px;\r\n  left: 30px;\r\n  cursor: pointer;\r\n  width: 14px;\r\n  height: 14px;\r\n  border: 1px solid  rgba(255,255,255,0.75);\r\n}\r\n\r\n.style-stroke {\r\n  display: block !important;\r\n  margin: 0px 10px 12px 10px;\r\n  background-color: inherit;\r\n  color: inherit;\r\n}\r\n\r\n.style-stroke option {\r\n  background-color: rgba(33,33,33,1);\r\n  color: rgba(255,255,255,1);\r\n}\r\n\r\n.font-family {\r\n  display: block;\r\n  margin: 0px 10px 12px 10px;\r\n  background-color: inherit;\r\n  color: inherit;\r\n}\r\n\r\n.font-family option {\r\n  background-color: rgba(33,33,33,1);\r\n  color: rgba(255,255,255,1);\r\n}\r\n\r\n.text-align {\r\n  display: block;\r\n  margin: 0px 10px 12px 10px;\r\n  background-color: inherit;\r\n  color: inherit;\r\n}\r\n\r\n.text-align option {\r\n  background-color: rgba(33,33,33,1);\r\n  color: rgba(255,255,255,1);\r\n}\r\n\r\nselect#start_marker option[value=\"A\"] { background:url('/assets/images/select-pointer.svg');   }\r\nselect#start_marker option[value=\"B\"] { background:url('/assets/images/select-pointer.svg'); }\r\nselect#start_marker option[value=\"C\"] { background:url('/assets/images/select-pointer.svg'); }\r\nselect#start_marker option[value=\"D\"] { background:url('/assets/images/select-pointer.svg'); }\r\n\r\n.icon-select {\r\n  background: url('/assets/images/select-pointer.svg') no-repeat center center;\r\n  background-size: contain;\r\n  height: 30px;\r\n  width: 30px;\r\n}\r\n\r\n.icon-pencil {\r\n  background: url('/assets/images/pencil.svg') no-repeat center center;\r\n  background-size: contain;\r\n  height: 30px;\r\n  width: 30px;\r\n}\r\n\r\n.icon-line {\r\n  background: url('/assets/images/line.svg') no-repeat center center;\r\n  background-size: contain;\r\n  height: 30px;\r\n  width: 30px;\r\n}\r\n\r\n.icon-rect {\r\n  background: url('/assets/images/rect.svg') no-repeat center center;\r\n  background-size: contain;\r\n  height: 30px;\r\n  width: 30px;\r\n}\r\n\r\n.icon-circle {\r\n  background: url('/assets/images/circle.svg') no-repeat center center;\r\n  background-size: contain;\r\n  height: 30px;\r\n  width: 30px;\r\n}\r\n\r\n.icon-ellipse {\r\n  background: url('/assets/images/ellipse.svg') no-repeat center center;\r\n  background-size: contain;\r\n  height: 30px;\r\n  width: 30px;\r\n}\r\n\r\n.icon-path {\r\n  background: url('/assets/images/path.svg') no-repeat center center;\r\n  background-size: contain;\r\n  height: 30px;\r\n  width: 30px;\r\n}\r\n\r\n.icon-text {\r\n  background: url('/assets/images/text.svg') no-repeat center center;\r\n  background-size: contain;\r\n  height: 30px;\r\n  width: 30px; \r\n}\r\n\r\n.icon-image {\r\n  background: url('/assets/images/image.svg') no-repeat center center;\r\n  background-size: contain;\r\n  height: 30px;\r\n  width: 30px;\r\n}\r\n\r\n.icon-align-left {\r\n  background: url('/assets/images/align-left.svg') no-repeat center center;\r\n  background-size: contain;\r\n  height: 30px;\r\n  width: 30px;\r\n}\r\n\r\n.icon-align-center {\r\n  background: url('/assets/images/align-center.svg') no-repeat center center;\r\n  background-size: contain;\r\n  height: 30px;\r\n  width: 30px;\r\n}\r\n\r\n.icon-align-right {\r\n  background: url('/assets/images/align-right.svg') no-repeat center center;\r\n  background-size: contain;\r\n  height: 30px;\r\n  width: 30px;\r\n}\r\n\r\n.icon-align-top {\r\n  background: url('/assets/images/align-top.svg') no-repeat center center;\r\n  background-size: contain;\r\n  height: 30px;\r\n  width: 30px;\r\n}\r\n\r\n.icon-align-middle {\r\n  background: url('/assets/images/align-middle.svg') no-repeat center center;\r\n  background-size: contain;\r\n  height: 30px;\r\n  width: 30px;\r\n}\r\n\r\n.icon-align-bottom {\r\n  background: url('/assets/images/align-bottom.svg') no-repeat center center;\r\n  background-size: contain;\r\n  height: 30px;\r\n  width: 30px;\r\n}\r\n\r\n.icon-flip-orizontal {\r\n  background: url('/assets/images/flip-orizontal.svg') no-repeat center center;\r\n  background-size: contain;\r\n  height: 30px;\r\n  width: 30px;\r\n}\r\n\r\n.icon-flip-vertical {\r\n  background: url('/assets/images/flip-vertical.svg') no-repeat center center;\r\n  background-size: contain;\r\n  height: 30px;\r\n  width: 30px;\r\n}\r\n\r\n.icon-linejoin-miter {\r\n  background: url('/assets/images/linejoin-miter.svg') no-repeat center center;\r\n  background-size: contain;\r\n  height: 30px;\r\n  width: 30px;\r\n}\r\n\r\n.icon-linejoin-round {\r\n  background: url('/assets/images/linejoin-round.svg') no-repeat center center;\r\n  background-size: contain;\r\n  height: 30px;\r\n  width: 30px;\r\n}\r\n\r\n.icon-linejoin-bevel {\r\n  background: url('/assets/images/linejoin-bevel.svg') no-repeat center center;\r\n  background-size: contain;\r\n  height: 30px;\r\n  width: 30px;\r\n}\r\n\r\n.icon-linecap-butt {\r\n  background: url('/assets/images/linecap-butt.svg') no-repeat center center;\r\n  background-size: contain;\r\n  height: 30px;\r\n  width: 30px;\r\n}\r\n\r\n.icon-linecap-square {\r\n  background: url('/assets/images/linecap-square.svg') no-repeat center center;\r\n  background-size: contain;\r\n  height: 30px;\r\n  width: 30px;\r\n}\r\n\r\n.icon-linecap-round {\r\n  background: url('/assets/images/linecap-round.svg') no-repeat center center;\r\n  background-size: contain;\r\n  height: 30px;\r\n  width: 30px;\r\n}\r\n\r\n.icon-tool {\r\n  background-size: auto;\r\n  height: 30px;\r\n  width: 30px;\r\n  color: rgba(255,255,255,1);\r\n  background-position: center; /* Center the image */\r\n  background-repeat: no-repeat; /* Do not repeat the image */\r\n}\r\n\r\n.icon-switch {\r\n  background: url('/assets/images/switch.svg') no-repeat center center;\r\n}\r\n.icon-value {\r\n  background: url('/assets/images/value.svg') no-repeat center center;\r\n}\r\n.icon-editvalue {\r\n  background: url('/assets/images/editvalue.svg') no-repeat center center;\r\n}\r\n.icon-selectvalue {\r\n  background: url('/assets/images/selectvalue.svg') no-repeat center center;\r\n}\r\n.icon-progress-v {\r\n  background: url('/assets/images/progress-v.svg') no-repeat center center;\r\n}\r\n.icon-semaphore {\r\n  background: url('/assets/images/semaphore.svg') no-repeat center center;\r\n}\r\n.icon-button {\r\n  background: url('/assets/images/button.svg') no-repeat center center;\r\n}\r\n.icon-chart {\r\n  background: url('/assets/images/chart.svg') no-repeat center center;\r\n}\r\n.icon-bag {\r\n  background: url('/assets/images/bag.svg') no-repeat center center;\r\n}\r\n.icon-pipe {\r\n  background: url('/assets/images/pipe.svg') no-repeat center center;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/editor/editor.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"isLoading\" style=\"position:absolute;top:0px;left:0px;right:0px;bottom:0px;background-color:rgba(0,0,0,0.2); z-index: 99999;\">\n    <!-- <mat-spinner mode=\"indeterminate\" color=\"rgba(48,89,175,1)\" diameter=\"50\" \n            style=\"position: absolute;left: 50%;top: 50%;transform: translate(-50%, -50%);\">\n    </mat-spinner> -->\n    <mat-progress-bar mode=\"indeterminate\" color=\"warn\" style=\"position: absolute; top: 0px; left: 0px; right: 0px; z-index: 99999;\">\n    </mat-progress-bar>\n</div>\n<div id=\"svg_editor_container\">\n    <mat-drawer-container class=\"svg-workarea-container\">\n        <!-- LEFT BAR -->\n        <mat-drawer mode=\"side\" opened=\"true\" class=\"svg-sidenav leave-header-area\">\n            <mat-accordion multi=\"true\">\n                <mat-expansion-panel class=\"svg-workarea-leftbar-p\" (opened)=\"panelsState.panelView=true;savePanelState()\" (closed)=\"panelsState.panelView=false;savePanelState()\" hideToggle=\"true\" [expanded]=\"panelsState.panelView\">\n                    <mat-expansion-panel-header class=\"svg-workarea-leftbar-h\">\n                        <mat-panel-title>\n                            <mat-icon aria-label=\"Select\" *ngIf=\"panelsState.panelView\">expand_less</mat-icon>\n                            <mat-icon aria-label=\"Select\" *ngIf=\"!panelsState.panelView\">expand_more</mat-icon>\n                            <span>{{'editor.views' | translate}}</span> <!-- PROJECT VIEWS -->\n                        </mat-panel-title>\n                        <mat-icon aria-label=\"Set\" title=\"{{'editor.layout-settings' | translate}}\" *ngIf=\"panelsState.panelView\" class=\"leftbar-edit-btn\" (click)=\"onLayoutProperty();$event.stopPropagation()\">settings</mat-icon>\n                        <mat-icon aria-label=\"Add\" title=\"Add View\" *ngIf=\"panelsState.panelView\" class=\"leftbar-edit-btn\" (click)=\"onAddView();$event.stopPropagation()\">add</mat-icon>\n                    </mat-expansion-panel-header>\n                    <div class=\"leftbar-panel view-panel\">\n                        <div *ngIf=\"hmi.views && hmi.views.length <= 0\">\n                            <br>\n                        </div>\n                        <div *ngFor=\"let item of getViewsSorted()\" (click)=\"onSelectView(item)\" [ngClass]=\"{'leftbar-item-active': isViewActive(item)}\" class=\"leftbar-item mycursor-pointer\">\n                            <span>{{item.name}}</span>\n                            <mat-icon aria-label=\"More\" [matMenuTriggerFor]=\"menuview\" class=\"\">more_vert</mat-icon>\n                            <mat-menu #menuview=\"matMenu\" class=\"leftbar-item-menu\">\n                                <button mat-menu-item (click)=\"onDeleteView(item)\">{{'editor.view-delete' | translate}}</button>\n                                <button mat-menu-item (click)=\"onRenameView(item)\">{{'editor.view-rename' | translate}}</button>\n                                <button mat-menu-item (click)=\"onPropertyView(item)\">{{'editor.view-property' | translate}}</button>\n                            </mat-menu>\n                        </div>\n                    </div>\n                </mat-expansion-panel>\n                <mat-expansion-panel class=\"svg-workarea-leftbar-p\" (opened)=\"panelsState.panelGeneral=true;savePanelState()\" (closed)=\"panelsState.panelGeneral=false;savePanelState()\" hideToggle=\"true\" [expanded]=\"panelsState.panelGeneral\">\n                    <mat-expansion-panel-header class=\"svg-workarea-leftbar-h\">\n                        <mat-panel-title>\n                            <mat-icon aria-label=\"Select\" *ngIf=\"panelsState.panelGeneral\">expand_less</mat-icon>\n                            <mat-icon aria-label=\"Select\" *ngIf=\"!panelsState.panelGeneral\">expand_more</mat-icon>\n                            <span>{{'editor.general' | translate}}</span> <!-- GENERAL -->\n                        </mat-panel-title>\n                    </mat-expansion-panel-header>\n\n                    <div id=\"__tools_left\" class=\"leftbar-panel\">\n                        <div class=\"svg-tool-button\" [ngClass]=\"{'svg-tool-active': isModeActive('select')}\" (click)=\"setMode('select')\">\n                            <span class=\"icon-select\"></span>\n                        </div>\n                        <div class=\"svg-tool-button\" [ngClass]=\"{'svg-tool-active': isModeActive('fhpath')}\" (click)=\"setMode('fhpath')\">\n                            <span class=\"icon-pencil\"></span>\n                        </div>\n                        <div class=\"svg-tool-button\" [ngClass]=\"{'svg-tool-active': isModeActive('line')}\" (click)=\"setMode('line')\">\n                            <span class=\"icon-line\"></span>\n                        </div>\n                        <div class=\"svg-tool-button\" [ngClass]=\"{'svg-tool-active': isModeActive('rect')}\" (click)=\"setMode('rect')\">\n                            <span class=\"icon-rect\"></span>\n                        </div>\n                        <div class=\"svg-tool-button\" [ngClass]=\"{'svg-tool-active': isModeActive('circle')}\" (click)=\"setMode('circle')\">\n                            <span class=\"icon-circle\"></span>\n                        </div>\n                        <div class=\"svg-tool-button\" [ngClass]=\"{'svg-tool-active': isModeActive('ellipse')}\" (click)=\"setMode('ellipse')\">\n                            <span class=\"icon-ellipse\"></span>\n                        </div>\n                        <div class=\"svg-tool-button\" [ngClass]=\"{'svg-tool-active': isModeActive('path')}\" (click)=\"setMode('path')\">\n                            <span class=\"icon-path\"></span>\n                        </div>\n                        <!-- <div class=\"svg-tool-button\" [ngClass]=\"{'svg-tool-active': isModeActive('path')}\" (click)=\"setMode('path')\">\n              <span class=\"icon-path\"></span>\n            </div> -->\n                        <div class=\"svg-tool-button\" [ngClass]=\"{'svg-tool-active': isModeActive('text')}\" (click)=\"setMode('text')\">\n                            <span class=\"icon-text\"></span>\n                        </div>\n                        <div class=\"svg-tool-button\" [ngClass]=\"{'svg-tool-active': (isModeActive('image') || isModeActive('svg-image'))}\" (click)=\"imagefile.value = '';imagefile.click();\">\n                            <span class=\"icon-image\"></span>\n                            <input #imagefile type=\"file\" style=\"display: none;\" (change)=\"onSetImage($event)\" accept=\"image/png|jpg|svg\" />\n                        </div>\n                        <div id=\"tool_line\" style=\"display: none;\">\n                            <span class=\"icon-image\"></span>\n                        </div>\n                    </div>\n                </mat-expansion-panel>\n                <!-- SHAPES -->\n                <mat-expansion-panel *ngFor=\"let shGrp of shapesGrps\" class=\"svg-workarea-leftbar-p\" (opened)=\"panelsState[shGrp.name]=true;savePanelState()\" (closed)=\"panelsState[shGrp.name]=false;savePanelState()\" hideToggle=\"true\" [expanded]=\"panelsState[shGrp.name]\">\n                    <mat-expansion-panel-header class=\"svg-workarea-leftbar-h\">\n                        <mat-panel-title>\n                            <mat-icon aria-label=\"Select\" *ngIf=\"panelsState[shGrp.name]\">expand_less</mat-icon>\n                            <mat-icon aria-label=\"Select\" *ngIf=\"!panelsState[shGrp.name]\">expand_more</mat-icon>\n                            <span>{{shGrp.name}}</span>\n                        </mat-panel-title>\n                    </mat-expansion-panel-header>\n                    <div id=\"__tools_left\" class=\"leftbar-panel\">\n                        <div *ngFor=\"let shape of shGrp.shapes\" style=\"margin-left: 3px;margin-right: 3px;\" class=\"svg-tool-button\" [ngClass]=\"{'svg-tool-active': isModeActive(shape.name)}\" (click)=\"setMode(shape.name)\">\n                            <span class=\"icon-tool\" [style.backgroundImage]=\"'url(' + shape.ico + ')'\"> </span>\n                        </div>\n                    </div>\n                </mat-expansion-panel>\n\n                <mat-expansion-panel class=\"svg-workarea-leftbar-p\" (opened)=\"panelsState.panelD=true;savePanelState()\" (closed)=\"panelsState.panelD=false;savePanelState()\" hideToggle=\"true\" [expanded]=\"panelsState.panelD\">\n                    <mat-expansion-panel-header class=\"svg-workarea-leftbar-h\">\n                        <mat-panel-title>\n                            <mat-icon aria-label=\"Select\" *ngIf=\"panelsState.panelD\">expand_less</mat-icon>\n                            <mat-icon aria-label=\"Select\" *ngIf=\"!panelsState.panelD\">expand_more</mat-icon>\n                            <span>{{'editor.controls' | translate}}</span> <!-- CONTROLS  -->\n                        </mat-panel-title>\n                    </mat-expansion-panel-header>\n                    <div id=\"__tools_left\" class=\"leftbar-panel\">\n                        <div class=\"svg-tool-button\" [ngClass]=\"{'svg-tool-active': isModeActive('html_input')}\" (click)=\"setMode('html_input')\">\n                            <span class=\"icon-tool icon-editvalue\"></span>\n                        </div>\n                        <div class=\"svg-tool-button\" [ngClass]=\"{'svg-tool-active': isModeActive('value')}\" (click)=\"setMode('value')\">\n                            <span class=\"icon-tool icon-value\"></span>\n                        </div>\n                        <div class=\"svg-tool-button\" [ngClass]=\"{'svg-tool-active': isModeActive('html_button')}\" (click)=\"setMode('html_button')\">\n                            <span class=\"icon-tool icon-button\"></span>\n                        </div>\n                        <div class=\"svg-tool-button\" [ngClass]=\"{'svg-tool-active': isModeActive('html_select')}\" (click)=\"setMode('html_select')\">\n                            <span class=\"icon-tool icon-selectvalue\"></span>\n                        </div>\n                        <div class=\"svg-tool-button\" [ngClass]=\"{'svg-tool-active': isModeActive('gauge_progress')}\" (click)=\"setMode('gauge_progress')\">\n                            <span class=\"icon-tool icon-progress-v\"></span>\n                        </div>\n                        <div class=\"svg-tool-button\" [ngClass]=\"{'svg-tool-active': isModeActive('gauge_semaphore')}\" (click)=\"setMode('gauge_semaphore')\">\n                            <span class=\"icon-tool icon-semaphore\"></span>\n                        </div>\n                        <div class=\"svg-tool-button\" [ngClass]=\"{'svg-tool-active': isModeActive('html_chart')}\" (click)=\"setMode('html_chart')\">\n                            <span class=\"icon-tool icon-chart\"></span>\n                        </div>\n                        <div class=\"svg-tool-button\" [ngClass]=\"{'svg-tool-active': isModeActive('html_bag')}\" (click)=\"setMode('html_bag')\">\n                            <span class=\"icon-tool icon-bag\"></span>\n                        </div>\n                        <div class=\"svg-tool-button\" [ngClass]=\"{'svg-tool-active': isModeActive('pipe')}\" (click)=\"setMode('pipe')\">\n                            <span class=\"icon-tool icon-pipe\"></span>\n                        </div>               \n                    </div>\n                </mat-expansion-panel>\n            </mat-accordion>\n        </mat-drawer>\n        <!-- END LEFT BAR -->\n        <!-- WORK AREA -->\n        <mat-drawer-content>\n            <!-- RIGHT BAR -->\n            <div class=\"svg-tools-fly\">\n                <mat-expansion-panel class=\"svg-workarea-fly-p\" (opened)=\"panelPropertyIdOpenState = true\" (closed)=\"panelPropertyIdOpenState = false\" hideToggle=\"true\" expanded=\"true\" style=\"display:none\">\n                    <mat-expansion-panel-header class=\"svg-workarea-flybar-h\">\n                        <mat-panel-title>\n                            <mat-icon aria-label=\"Select\" *ngIf=\"panelPropertyIdOpenState\">expand_less</mat-icon>\n                            <mat-icon aria-label=\"Select\" *ngIf=\"!panelPropertyIdOpenState\">expand_more</mat-icon>\n                            <span>{{'editor.interactivity' | translate}}</span> <!-- INTERACTIVITY -->\n                        </mat-panel-title>\n                    </mat-expansion-panel-header>\n                    <div id=\"_selected_panel\">\n                        <div class=\"_toolset\">\n                            <label id=\"idLabel\" title=\"{{'editor.interactivity-id-title' | translate}}\" class=\"svg-property\">\n                                <span>{{'editor.interactivity-id' | translate}}</span>\n                                <input id=\"elem_id\" #selid class=\"attr_changer\" data-attr=\"id\" type=\"text\" />\n                            </label>\n                            <label id=\"classLabel\" title=\"{{'editor.interactivity-class-title' | translate}}\" class=\"svg-property\">\n                                <span>{{'editor.interactivity-class' | translate}}</span>\n                                <input id=\"elem_class\" class=\"attr_changer\" data-attr=\"class\" type=\"text\" />\n                            </label>\n                        </div>\n                    </div>\n                </mat-expansion-panel>\n                <mat-expansion-panel class=\"svg-workarea-fly-p\" (opened)=\"panelPropertyTransformOpenState = true\" (closed)=\"panelPropertyTransformOpenState = false\" hideToggle=\"true\" expanded=\"true\">\n                    <mat-expansion-panel-header class=\"svg-workarea-leftbar-h\">\n                        <mat-panel-title>\n                            <mat-icon aria-label=\"Select\" *ngIf=\"panelPropertyTransformOpenState\">expand_less</mat-icon>\n                            <mat-icon aria-label=\"Select\" *ngIf=\"!panelPropertyTransformOpenState\">expand_more</mat-icon>\n                            <span>{{'editor.transform' | translate}}</span> <!-- TRANSFORM SIZE/POSITION-->\n                        </mat-panel-title>\n                    </mat-expansion-panel-header>\n                    <div id=\"_selected_panel\" class=\"rightbar-panel\">\n                        <div class=\"_toolset\">\n                            <div id=\"xy_panel\" class=\"_toolset\">\n                                <div class=\"svg-property-split2\">\n                                    <div class=\"svg-property\">\n                                        <span>{{'editor.transform-x' | translate}}</span>\n                                        <input id=\"selected_x\" class=\"attr_changer\" title=\"{{'editor.transform-x-title' | translate}}\" size=\"4\" data-attr=\"x\" />\n                                    </div>\n                                    <div class=\"svg-property\">\n                                        <span>{{'editor.transform-y' | translate}}</span>\n                                        <input id=\"selected_y\" class=\"attr_changer\" title=\"{{'editor.transform-y-title' | translate}}\" size=\"3\" data-attr=\"y\" />\n                                    </div>\n                                </div>\n                            </div>\n                            <div id=\"line_panel\">\n                                <div class=\"svg-property-split2\">\n                                    <div class=\"svg-property\">\n                                        <span>{{'editor.transform-x1' | translate}}</span>\n                                        <input id=\"line_x1\" class=\"attr_changer\" title=\"{{'editor.transform-x1-title' | translate}}\" size=\"3\" data-attr=\"x1\" />\n                                    </div>\n                                    <div class=\"svg-property\">\n                                        <span>{{'editor.transform-y1' | translate}}</span>\n                                        <input id=\"line_y1\" class=\"attr_changer\" title=\"{{'editor.transform-y1-title' | translate}}\" size=\"3\" data-attr=\"y1\" />\n                                    </div>\n                                </div>\n                                <div class=\"svg-property-split2\">\n                                    <div class=\"svg-property\">\n                                        <span>{{'editor.transform-x2' | translate}}</span>\n                                        <input id=\"line_x2\" class=\"attr_changer\" title=\"{{'editor.transform-x2-title' | translate}}\" size=\"3\" data-attr=\"x2\" />\n                                    </div>\n                                    <div class=\"svg-property\">\n                                        <span>{{'editor.transform-y2' | translate}}</span>\n                                        <input id=\"line_y2\" class=\"attr_changer\" title=\"{{'editor.transform-y2-title' | translate}}\" size=\"3\" data-attr=\"y2\" />\n                                    </div>\n                                </div>\n                            </div>\n                            <div id=\"rect_panel\">\n                                <div class=\"svg-property-split2\">\n                                    <div class=\"svg-property\" title=\"{{'editor.transform-rect-width-title' | translate}}\">\n                                        <span>{{'editor.transform-width' | translate}}</span>\n                                        <input id=\"rect_width\" class=\"attr_changer\" size=\"3\" data-attr=\"width\" />\n                                    </div>\n                                    <div class=\"svg-property\" title=\"{{'editor.transform-rect-height-title' | translate}}\">\n                                        <span>{{'editor.transform-height' | translate}}</span>\n                                        <input id=\"rect_height\" class=\"attr_changer\" size=\"3\" data-attr=\"height\" />\n                                    </div>\n                                </div>\n                                <div class=\"svg-property-split2\">\n                                    <div class=\"svg-property\" title=\"{{'editor.transform-rect-radius-title' | translate}}\">\n                                        <span>{{'editor.transform-radiuscorner' | translate}}</span>\n                                        <input id=\"rect_rx\" size=\"3\" value=\"0\" type=\"text\" data-attr=\"Corner Radius\" />\n                                    </div>\n                                </div>\n                            </div>\n                            <div id=\"htmlctrl_panel\">\n                                <div class=\"svg-property-split2\">\n                                    <div class=\"svg-property\" title=\"{{'editor.transform-rect-width-title' | translate}}\">\n                                        <span>{{'editor.transform-width' | translate}}</span>\n                                        <input id=\"htmlctrl_width\" class=\"attr_changer\" size=\"3\" data-attr=\"width\" />\n                                    </div>\n                                    <div class=\"svg-property\" title=\"{{'editor.transform-rect-height-title' | translate}}\">\n                                        <span>{{'editor.transform-height' | translate}}</span>\n                                        <input id=\"htmlctrl_height\" class=\"attr_changer\" size=\"3\" data-attr=\"height\" />\n                                    </div>\n                                </div>\n                            </div>\n                            <div id=\"shape_panel\">\n                                <div class=\"svg-property-split2\">\n                                    <div class=\"svg-property\" title=\"{{'editor.transform-rect-width-title' | translate}}\">\n                                        <span>{{'editor.transform-width' | translate}}</span>\n                                        <input id=\"shape_width\" class=\"attr_changer\" size=\"3\" data-attr=\"width\" />\n                                    </div>\n                                    <div class=\"svg-property\" title=\"{{'editor.transform-rect-height-title' | translate}}\">\n                                        <span>{{'editor.transform-height' | translate}}</span>\n                                        <input id=\"shape_height\" class=\"attr_changer\" size=\"3\" data-attr=\"height\" />\n                                    </div>\n                                </div>\n                            </div>\n                            <div id=\"circle_panel\">\n                                <div class=\"svg-property-split2\">\n                                    <div class=\"svg-property\">\n                                        <span>{{'editor.transform-circlecx' | translate}}</span>\n                                        <input id=\"circle_cx\" class=\"attr_changer\" title=\"{{'editor.transform-circlecx-title' | translate}}\" size=\"3\" data-attr=\"cx\" />\n                                    </div>\n                                    <div class=\"svg-property\">\n                                        <span>{{'editor.transform-circlecy' | translate}}</span>\n                                        <input id=\"circle_cy\" class=\"attr_changer\" title=\"{{'editor.transform-circlecy-title' | translate}}\" size=\"3\" data-attr=\"cy\" />\n                                    </div>\n                                </div>\n                                <div class=\"svg-property-split2\">\n                                    <div class=\"svg-property\">\n                                        <span>{{'editor.transform-circler' | translate}}</span>\n                                        <input id=\"circle_r\" class=\"attr_changer\" title=\"{{'editor.transform-circler-title' | translate}}\" size=\"3\" data-attr=\"r\" />\n                                    </div>\n                                </div>\n                            </div>\n                            <div id=\"ellipse_panel\">\n                                <div class=\"svg-property-split2\">\n                                    <div class=\"svg-property\">\n                                        <span>{{'editor.transform-ellipsecx' | translate}}</span>\n                                        <input id=\"ellipse_cx\" class=\"attr_changer\" title=\"{{'editor.transform-ellipsecx-title' | translate}}\" size=\"3\" data-attr=\"cx\" />\n                                    </div>\n                                    <div class=\"svg-property\">\n                                        <span>{{'editor.transform-ellipsecy' | translate}}</span>\n                                        <input id=\"ellipse_cy\" class=\"attr_changer\" title=\"{{'editor.transform-ellipsecy-title' | translate}}\" size=\"3\" data-attr=\"cy\" />\n                                    </div>\n                                </div>\n                                <div class=\"svg-property-split2\">\n                                    <div class=\"svg-property\">\n                                        <span>{{'editor.transform-ellipserx' | translate}}</span>\n                                        <input id=\"ellipse_rx\" class=\"attr_changer\" title=\"{{'editor.transform-ellipserx-title' | translate}}\" size=\"3\" data-attr=\"rx\" />\n                                    </div>\n                                    <div class=\"svg-property\">\n                                        <span>{{'editor.transform-ellipsery' | translate}}</span>\n                                        <input id=\"ellipse_ry\" class=\"attr_changer\" title=\"{{'editor.transform-ellipsery-title' | translate}}\" size=\"3\" data-attr=\"ry\" />\n                                    </div>\n                                </div>\n                            </div>\n                            <div id=\"text_panel\">\n                                <div class=\"svg-property\">\n                                    <span>{{'editor.transform-fontfamily' | translate}}</span>\n                                    <select class=\"font-family\" id=\"font_family\" #fontfamily (change)=\"onFontFamilyChange(fontfamily.value)\">\n                                        <option style=\"font-family:serif\">{{'editor.transform-font-serif' | translate}}</option>\n                                        <option style=\"font-family:sans-serif\">{{'editor.transform-font-sansserif' | translate}}</option>\n                                        <option style=\"font-family:cursive\">{{'editor.transform-font-cursive' | translate}}</option>\n                                        <option style=\"font-family:fantasy\">{{'editor.transform-font-fantasy' | translate}}</option>\n                                        <option style=\"font-family:monospace\">{{'editor.transform-font-monospace' | translate}}</option>\n                                    </select>\n                                </div>\n\n                                <div class=\"svg-property-split2\">\n                                    <div class=\"svg-property\">\n                                        <span>{{'editor.transform-fontsize' | translate}}</span>\n                                        <input id=\"font_size\" size=\"3\" value=\"0\" class=\"attr_changer\" title=\"{{'editor.transform-fontsize-title' | translate}}\" />\n                                    </div>\n                                    <div class=\"svg-property\">\n                                        <span>{{'editor.transform-textalign' | translate}}</span>\n                                        <select class=\"text-align\" id=\"text_anchor\" #textalign (change)=\"onTextAlignChange(textalign.value)\">\n                                            <option value=\"start\">{{'editor.transform-left' | translate}}</option>\n                                            <option value=\"middle\">{{'editor.transform-center' | translate}}</option>\n                                            <option value=\"end\">{{'editor.transform-right' | translate}}</option>\n                                        </select>\n                                        <!-- <div class=\"tool_button\" id=\"tool_bold\" title=\"Bold Text [B]\">\n                      <span>B</span>\n                    </div> -->\n                                    </div>\n                                    <!-- <div class=\"svg-property\">\n                    <div class=\"tool_button\" id=\"tool_italic\" title=\"Italic Text [I]\">\n                      <span>i</span>\n                    </div>\n                  </div> -->\n                                </div>\n\n                                <!-- Not visible, but still used -->\n                                <input id=\"text\" type=\"text\" size=\"35\" />\n                            </div>\n                            <div id=\"image_panel\">\n                                <div class=\"svg-property-split2\">\n                                    <div class=\"svg-property\">\n                                        <span>{{'editor.transform-width' | translate}}</span>\n                                        <input id=\"image_width\" class=\"attr_changer\" title=\"{{'editor.transform-image-width-title' | translate}}\" size=\"3\" data-attr=\"width\" />\n                                    </div>\n                                    <div class=\"svg-property\">\n                                        <span>{{'editor.transform-height' | translate}}</span>\n                                        <input id=\"image_height\" class=\"attr_changer\" title=\"{{'editor.transform-image-height-title' | translate}}\" size=\"3\" data-attr=\"height\" />\n                                    </div>\n                                </div>\n                                <div class=\"svg-property\" style=\"display: none;\">\n                                    <div class=\"svg-property\">\n                                        <span>{{'editor.transform-url' | translate}}</span>\n                                        <input id=\"image_url\" class=\"attr_changer\" type=\"text\" title=\"{{'editor.transform-image-url-title' | translate}}\" />\n                                    </div>\n                                    <div class=\"svg-property\">\n                                        <div class=\"svg-property\">\n                                            <button id=\"change_image_url\" style=\"display:none;\">{{'editor.transform-change-image' | translate}}</button>\n                                            <span id=\"url_notice\" title=\"{{'editor.transform-change-image-title' | translate}}\"></span>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                            <!-- <div id=\"hw_panel\">\n                <div class=\"svg-property-split2\">\n                  <div class=\"svg-property\" title=\"Change rectangle width\">\n                    <span>width</span>\n                    <input id=\"rect_width\" class=\"attr_changer\" size=\"3\" data-attr=\"width\" />\n                  </div>\n                  <div class=\"svg-property\" title=\"Change rectangle height\">\n                    <span>height</span>\n                    <input id=\"rect_height\" class=\"attr_changer\" size=\"3\" data-attr=\"height\" />\n                  </div>\n                </div>\n              </div> -->\n                            <div id=\"tool_angle\" title=\"{{'editor.transform-angle-title' | translate}}\" class=\"svg-property\">\n                                <div class=\"svg-property-split2\">\n                                    <div class=\"svg-property\">\n                                        <span>{{'editor.transform-angle' | translate}}</span>\n                                        <input id=\"angle\" size=\"2\" value=\"0\" type=\"text\" />\n                                    </div>\n                                    <div class=\"svg-property\">\n                                        <!-- <div class=\"svg-tool-button\" (click)=\"flipSelected('vertical')\" title=\"Flip vertically\">\n                      <span class=\"icon-flip-vertical\"></span>\n                    </div>\n                    <div class=\"svg-tool-button\" (click)=\"flipSelected('orizontal')\" title=\"Flip orizontally\">\n                      <span class=\"icon-flip-orizontal\"></span>\n                    </div> -->\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </mat-expansion-panel>\n                <mat-expansion-panel class=\"svg-workarea-fly-p\" (opened)=\"panelAlignOpenState = true\" (closed)=\"panelAlignOpenState = false\" hideToggle=\"true\" expanded=\"true\">\n                    <mat-expansion-panel-header class=\"svg-workarea-leftbar-h\">\n                        <mat-panel-title>\n                            <mat-icon aria-label=\"Select\" *ngIf=\"panelAlignOpenState\">expand_less</mat-icon>\n                            <mat-icon aria-label=\"Select\" *ngIf=\"!panelAlignOpenState\">expand_more</mat-icon>\n                            <span>{{'editor.align' | translate}}</span> <!-- ALIGN-->\n                        </mat-panel-title>\n                    </mat-expansion-panel-header>\n                    <div id=\"align_panel\" class=\"rightbar_panel\">\n                        <div class=\"svg-tool-button\" (click)=\"onAlignSelected('left')\" title=\"{{'editor.align-left-title' | translate}}\">\n                            <span class=\"icon-align-left\"></span>\n                        </div>\n                        <div class=\"svg-tool-button\" (click)=\"onAlignSelected('center')\" title=\"{{'editor.align-center-title' | translate}}Align Center\">\n                            <span class=\"icon-align-center\"></span>\n                        </div>\n                        <div class=\"svg-tool-button\" (click)=\"onAlignSelected('right')\" title=\"{{'editor.align-right-title' | translate}}Align Right\">\n                            <span class=\"icon-align-right\"></span>\n                        </div>\n                        <div class=\"svg-tool-button\" (click)=\"onAlignSelected('top')\" title=\"{{'editor.align-top-title' | translate}}Align Top\">\n                            <span class=\"icon-align-top\"></span>\n                        </div>\n                        <div class=\"svg-tool-button\" (click)=\"onAlignSelected('middle')\" title=\"{{'editor.align-middle-title' | translate}}Align Middle\">\n                            <span class=\"icon-align-middle\"></span>\n                        </div>\n                        <div class=\"svg-tool-button\" (click)=\"onAlignSelected('bottom')\" title=\"{{'editor.align-bottom-title' | translate}}Align Bottom\">\n                            <span class=\"icon-align-bottom\"></span>\n                        </div>\n                    </div>\n                </mat-expansion-panel>\n                <mat-expansion-panel class=\"svg-workarea-fly-p\" (opened)=\"panelFillOpenState = true\" (closed)=\"panelFillOpenState = false\" hideToggle=\"true\" expanded=\"true\">\n                    <mat-expansion-panel-header class=\"svg-workarea-leftbar-h\">\n                        <mat-panel-title>\n                            <mat-icon aria-label=\"Select\" *ngIf=\"panelFillOpenState\">expand_less</mat-icon>\n                            <mat-icon aria-label=\"Select\" *ngIf=\"!panelFillOpenState\">expand_more</mat-icon>\n                            <span>{{'editor.stroke' | translate}}</span> <!-- STROKE-->\n                        </mat-panel-title>\n                    </mat-expansion-panel-header>\n                    <div class=\"rightbar_panel\">\n                        <div class=\"_color_tool\" id=\"tool_stroke\">\n                            <div class=\"svg-property-split2\">\n                                <div class=\"svg-property\">\n                                    <span>{{'editor.stroke-width' | translate}}</span>\n                                    <input id=\"stroke_width\" title=\"{{'editor.stroke-width-title' | translate}}\" size=\"2\" value=\"1\" type=\"text\" data-attr=\"Stroke Width\" />\n                                </div>\n                                <div class=\"svg-property\">\n                                    <span>{{'editor.stroke-style' | translate}}</span>\n                                    <select id=\"stroke_style\" class=\"style-stroke\" title=\"{{'editor.stroke-style-title' | translate}}\">\n                                        <option selected=\"selected\" value=\"none\">&#8212;</option>\n                                        <option value=\"2,2\">...</option>\n                                        <option value=\"5,5\">- -</option>\n                                        <option value=\"5,2,2,2\">- .</option>\n                                        <option value=\"5,2,2,2,2,2\">- ..</option>\n                                    </select>\n                                </div>\n                            </div>\n                            <div class=\"svg-property\">\n                                <div class=\"svg-tool-button\" id=\"linejoin_miter\" #linejoinmiter (click)=\"onSetStrokeOption(linejoinmiter)\" title=\"{{'editor.stroke-joinmiter-title' | translate}}\">\n                                    <span class=\"icon-linejoin-miter\"></span>\n                                </div>\n                                <div class=\"svg-tool-button\" id=\"linejoin_round\" #linejoinround (click)=\"onSetStrokeOption(linejoinround)\" title=\"{{'editor.stroke-joinround-title' | translate}}\">\n                                    <span class=\"icon-linejoin-round\"></span>\n                                </div>\n                                <div class=\"svg-tool-button\" id=\"linejoin_bevel\" #linejoinbevel (click)=\"onSetStrokeOption(linejoinbevel)\" title=\"{{'editor.stroke-joinbevel-title' | translate}}\">\n                                    <span class=\"icon-linejoin-bevel\"></span>\n                                </div>\n                            </div>\n                            <div class=\"svg-property\">\n                                <div class=\"svg-tool-button\" id=\"linecap_butt\" #linecapbutt (click)=\"onSetStrokeOption(linecapbutt)\" title=\"{{'editor.stroke-capbutt-title' | translate}}\">\n                                    <span class=\"icon-linecap-butt\"></span>\n                                </div>\n                                <div class=\"svg-tool-button\" id=\"linecap_square\" #linecapsquare (click)=\"onSetStrokeOption(linecapsquare)\" title=\"{{'editor.stroke-capsquare-title' | translate}}\">\n                                    <span class=\"icon-linecap-square\"></span>\n                                </div>\n                                <div class=\"svg-tool-button\" id=\"linecap_round\" #linecapround (click)=\"onSetStrokeOption(linecapround)\" title=\"{{'editor.stroke-capround-title' | translate}}\">\n                                    <span class=\"icon-linecap-round\"></span>\n                                </div>\n                            </div>\n                            <div class=\"svg-property-split2\" style=\"display: none\">\n                                <div class=\"svg-property\">\n                                    <span for=\"class_shadow\">{{'editor.stroke-shadow' | translate}}</span>\n                                    <input type=\"checkbox\" id=\"class_shadow\" name=\"class_shadow\" class=\"attr_changer\" title=\"{{'editor.stroke-shadow-title' | translate}}\" (change)=\"onSetShadowOption($event.target.checked)\" label=\"shadow\" />\n                                </div>\n                                <div class=\"svg-property\">\n                                </div>\n                            </div>\n                            <!-- <ul id=\"linejoin_opts\">\n                <li class=\"tool_button current\" id=\"linejoin_miter\" title=\"Linejoin: Miter\"></li>\n                <li class=\"tool_button\" id=\"linejoin_round\" title=\"Linejoin: Round\"></li>\n                <li class=\"tool_button\" id=\"linejoin_bevel\" title=\"Linejoin: Bevel\"></li>\n              </ul>\n\n              <ul id=\"linecap_opts\">\n                <li class=\"tool_button current\" id=\"linecap_butt\" title=\"Linecap: Butt\"></li>\n                <li class=\"tool_button\" id=\"linecap_square\" title=\"Linecap: Square\"></li>\n                <li class=\"tool_button\" id=\"linecap_round\" title=\"Linecap: Round\"></li>\n              </ul> -->\n                        </div>\n                    </div>\n                </mat-expansion-panel>\n                <mat-expansion-panel class=\"svg-workarea-fly-p\" (opened)=\"panelMarkerOpenState = true\" (closed)=\"panelMarkerOpenState = false\" hideToggle=\"true\" expanded=\"true\">\n                    <mat-expansion-panel-header class=\"svg-workarea-leftbar-h\">\n                        <mat-panel-title>\n                            <mat-icon aria-label=\"Select\" *ngIf=\"panelMarkerOpenState\">expand_less</mat-icon>\n                            <mat-icon aria-label=\"Select\" *ngIf=\"!panelMarkerOpenState\">expand_more</mat-icon>\n                            <span>{{'editor.marker' | translate}}</span> <!-- MARKER-->\n                        </mat-panel-title>\n                    </mat-expansion-panel-header>\n                    <div id=\"marker_panel\" class=\"rightbar_panel\">\n                        <div class=\"svg-property-split3\">\n                            <div class=\"svg-property\">\n                                <span>{{'editor.marker-start' | translate}}</span>\n                                <select id=\"start_marker\" #smarker class=\"style-stroke\" title=\"{{'editor.marker-start-title' | translate}}\" (click)=\"onSetMarker('start_marker', smarker.selectedIndex);\" onfocus=\"this.selectedIndex=-1;this.blur();\">\n                                </select>\n                            </div>\n                            <div class=\"svg-property\">\n                                <span>{{'editor.marker-middle' | translate}}</span>\n                                <select id=\"mid_marker\" #mmarker class=\"style-stroke\" title=\"{{'editor.marker-middle-title' | translate}}\" (click)=\"onSetMarker('mid_marker', mmarker.selectedIndex);\" onfocus=\"this.selectedIndex=-1;this.blur();\">\n                                </select>\n                            </div>\n                            <div class=\"svg-property\">\n                                <span>{{'editor.marker-end' | translate}}</span>\n                                <select id=\"end_marker\" #emarker class=\"style-stroke\" title=\"{{'editor.marker-end-title' | translate}}\" (click)=\"onSetMarker('end_marker', emarker.selectedIndex);\" onfocus=\"this.selectedIndex=-1;this.blur();\">\n                                </select>\n                            </div>\n\n                        </div>\n                    </div>\n                </mat-expansion-panel>\n                <mat-expansion-panel class=\"svg-workarea-fly-p\" (opened)=\"panelEventOpenState = true\" (closed)=\"panelEventOpenState = false\" hideToggle=\"true\" expanded=\"true\">\n                    <mat-expansion-panel-header class=\"svg-workarea-leftbar-h\">\n                        <mat-panel-title>\n                            <mat-icon aria-label=\"Select\" *ngIf=\"panelEventOpenState\">expand_less</mat-icon>\n                            <mat-icon aria-label=\"Select\" *ngIf=\"!panelEventOpenState\">expand_more</mat-icon>\n                            <span>{{'editor.interactivity' | translate}}</span> <!-- INTERACTIVITY -->\n                        </mat-panel-title>\n                        <!-- <mat-icon aria-label=\"Add\" class=\"leftbar-edit-btn\" (click)=\"addEvent();$event.stopPropagation()\" *ngif=\"selectedElement\">add</mat-icon> -->\n                    </mat-expansion-panel-header>\n                    <div id=\"interaction_panel\" class=\"rightbar_panel\">\n                        <gauge-base #gaugepanel *ngIf=\"selectedElement\" [settings]=getGaugeSettings(selectedElement) (edit)=\"onGaugeEdit($event)\"></gauge-base>\n                    </div>\n                </mat-expansion-panel>\n            </div>\n            <!-- END RIGHT BAR -->\n            <!-- Work Area -->\n            <div id=\"svg_editor\" style=\"z-index:-1\">\n                <!-- Rules bar -->\n                <div id=\"rulers\">\n                    <div id=\"ruler_corner\"></div>\n                    <div id=\"ruler_x\">\n                        <div>\n                            <canvas height=\"15\"></canvas>\n                        </div>\n                    </div>\n                    <div id=\"ruler_y\">\n                        <div>\n                            <canvas width=\"15\"></canvas>\n                        </div>\n                    </div>\n                </div>\n                <!-- END Rules bar -->\n                <!-- Draw Area -->\n                <div id=\"workarea\">\n                    <style id=\"styleoverrides\" type=\"text/css\" media=\"screen\" scoped=\"scoped\"></style>\n                    <div id=\"svgcanvas\" style=\"position:relative\">\n                    </div>\n                </div>\n                <!-- END Draw Area -->\n                <!-- Draw top tool bar -->\n                <div id=\"tools_top\" class=\"tools_panel\">\n                    <div id=\"editor_panel\">\n                        <!-- <button mat-button title=\"Save Project\" [matMenuTriggerFor]=\"prjview\" class=\"main-btn\">\n              <mat-icon aria-label=\"Save Project\">save</mat-icon>\n            </button> -->\n                        <!-- <mat-menu #prjview=\"matMenu\" class=\"leftbar-item-menu\" yPosition=\"below\" [overlapTrigger]=\"false\"> -->\n                        <!-- <button mat-menu-item (click)=\"onSaveProject()\">Save</button> -->\n                        <!-- <button mat-menu-item (click)=\"onSaveProjectAs()\">Save as...</button> -->\n                        <!-- <button mat-menu-item (click)=\"onOpenProject();$event.stopPropagation()\">Open Project</button> -->\n                        <!-- <button mat-menu-item (click)=\"onImportVariable();$event.stopPropagation()\">Import Variable</button> -->\n                        <!-- <input type=\"file\" #fileImportInput style=\"display: none\" id=\"projectFileUpload\" (change)=\"onFileChangeListener($event)\" accept=\".wvc\"/> -->\n                        <!-- </mat-menu> -->\n                        <div class=\"main-btn-sep\"></div>\n                        <button mat-button title=\"{{'editor.tools-launch-title' | translate}}\" class=\"main-btn\" (click)=\"onStartCurrent()\">\n                            <mat-icon aria-label=\"Launch Current View\">play_arrow</mat-icon>\n                        </button>\n                        <div class=\"main-btn-sep\"></div>\n                        <button mat-button title=\"{{'editor.tools-zoom-title' | translate}}\" class=\"main-btn\" (click)=\"onZoomSelect()\">\n                            <mat-icon aria-label=\"Zoom Tool [Ctrl+Up/Down]\">zoom_in</mat-icon>\n                        </button>\n                        <button mat-button title=\"{{'editor.tools-grid-title' | translate}}\" class=\"main-btn\" (click)=\"onShowGrid()\">\n                            <mat-icon aria-label=\"Show Hide Grid\" *ngIf=\"!gridOn\">grid_on</mat-icon>\n                            <mat-icon aria-label=\"Show Hide Grid\" *ngIf=\"gridOn\">grid_off</mat-icon>\n                        </button>\n                        <div id=\"history_panel\">\n                            <button mat-button id=\"tool_undo\" title=\"{{'editor.tools-undo-title' | translate}}\" class=\"main-btn\">\n                                <mat-icon aria-label=\"Undo [Z]\">undo</mat-icon>\n                            </button>\n                            <button mat-button id=\"tool_redo\" title=\"{{'editor.tools-redo-title' | translate}}\" class=\"main-btn\">\n                                <mat-icon aria-label=\"Redo [Y]\">redo</mat-icon>\n                            </button>\n                        </div>\n\n                        <!-- <div class=\"push_button\" title=\"Save Project\" (click)=\"saveProject()\"></div> -->\n                        <!-- <div class=\"tool_sep\"></div> -->\n                        <!-- <div class=\"push_button\" id=\"tool_source\" title=\"Edit Source [U]\"></div> -->\n                        <!-- <div class=\"tool_button\" id=\"tool_wireframe\" title=\"Wireframe Mode [F]\"></div> -->\n                        <!-- <div class=\"tool_sep\"></div> -->\n                        <!-- <div class=\"tool_button\" id=\"tool_zoom\" title=\"Zoom Tool [Ctrl+Up/Down]\"></div> -->\n                    </div>\n                    <div id=\"selected_panel\">\n                        <div class=\"main-btn-sep\"></div>\n                        <button mat-button id=\"tool_clone\" title=\"{{'editor.tools-clone-title' | translate}}\" class=\"main-btn\">\n                            <mat-icon aria-label=\"Duplicate Element [D]\">content_copy</mat-icon>\n                        </button>\n                        <button mat-button id=\"tool_delete\" title=\"{{'editor.tools-delete-title' | translate}}\" class=\"main-btn\">\n                            <mat-icon aria-label=\"Delete Element [Delete/Backspace]\">content_cut</mat-icon>\n                        </button>\n                        <button mat-button id=\"tool_move_bottom\" title=\"{{'editor.tools-movebottom-title' | translate}}\" class=\"main-btn\">\n                            <span class=\"to-bottom\"></span>\n                        </button>\n                        <button mat-button id=\"tool_move_top\" title=\"{{'editor.tools-movetop-title' | translate}}\" class=\"main-btn\">\n                            <span class=\"to-top\"></span>\n                        </button>\n                        <button mat-button id=\"tool_topath\" title=\"{{'editor.tools-topath-title' | translate}}\" class=\"main-btn\">\n                            <mat-icon>linear_scale</mat-icon>\n                        </button>\n                    </div>\n                    <div id=\"multiselected_panel\">\n                        <div class=\"main-btn-sep\"></div>\n                        <button mat-button id=\"tool_clone_multi\" title=\"{{'editor.tools-clonemulti-title' | translate}}\" class=\"main-btn\">\n                            <mat-icon aria-label=\"Clone Elements [C]\">content_copy</mat-icon>\n                        </button>\n                        <button mat-button id=\"tool_delete_multi\" title=\"{{'editor.tools-deletemulti-title' | translate}}\" class=\"main-btn\">\n                            <mat-icon aria-label=\"Delete Selected Elements [Delete/Backspace]\">content_cut</mat-icon>\n                        </button>\n                        <button mat-button id=\"tool_group_elements\" title=\"{{'editor.tools-group-title' | translate}}\" class=\"main-btn\">\n                            <span class=\"group\"></span>\n                        </button>\n                        <button mat-button id=\"tool_alignleft\" title=\"{{'editor.tools-alignleft-title' | translate}}\" class=\"main-btn\">\n                            <mat-icon>format_align_left</mat-icon>\n                        </button>\n                        <button mat-button id=\"tool_aligncenter\" title=\"{{'editor.tools-aligncenter-title' | translate}}\" class=\"main-btn\">\n                            <mat-icon>format_align_center</mat-icon>\n                        </button>\n                        <button mat-button id=\"tool_alignright\" title=\"{{'editor.tools-alignright-title' | translate}}\" class=\"main-btn\">\n                            <mat-icon>format_align_right</mat-icon>\n                        </button>\n                        <button mat-button id=\"tool_aligntop\" title=\"{{'editor.tools-aligntop-title' | translate}}\" class=\"main-btn\">\n                            <mat-icon>vertical_align_top</mat-icon>\n                        </button>\n                        <button mat-button id=\"tool_alignmiddle\" title=\"{{'editor.tools-alignmiddle-title' | translate}}\" class=\"main-btn\">\n                            <mat-icon>vertical_align_center</mat-icon>\n                        </button>\n                        <button mat-button id=\"tool_alignbottom\" title=\"{{'editor.tools-alignbottom-title' | translate}}\" class=\"main-btn\">\n                            <mat-icon>vertical_align_bottom</mat-icon>\n                        </button>\n                    </div>\n                    <div id=\"g_panel\">\n                        <button mat-button id=\"tool_ungroup\" title=\"{{'editor.tools-ungroup-title' | translate}}\" class=\"main-btn\">\n                            <span class=\"ungroup\"></span>\n                        </button>\n                    </div>\n\n                    <!-- History buttons -->\n                    <!-- <div id=\"history_panel\">\n            <div class=\"tool_sep\"></div>\n            <div class=\"push_button tool_button_disabled\" id=\"tool_undo\" title=\"Undo [Z]\"></div>\n            <div class=\"push_button tool_button_disabled\" id=\"tool_redo\" title=\"Redo [Y]\"></div>\n          </div> -->\n                    <!-- Buttons when a single element is selected -->\n                    <!-- <div id=\"_selected_panel\"> -->\n                    <!-- <div class=\"toolset\"> -->\n                    <!-- <div class=\"tool_sep\"></div> -->\n                    <!-- <div class=\"push_button\" id=\"tool_clone\" title=\"Duplicate Element [D]\"></div> -->\n                    <!-- <div class=\"push_button\" id=\"tool_delete\" title=\"Delete Element [Delete/Backspace]\"></div> -->\n                    <!-- <div class=\"push_button\" id=\"tool_move_top\" title=\"Bring to Front [ Ctrl+Shift+] ]\"></div> -->\n                    <!-- <div class=\"push_button\" id=\"tool_move_bottom\" title=\"Send to Back [ Ctrl+Shift+[ ]\"></div> -->\n                    <!-- <div class=\"push_button\" id=\"tool_topath\" title=\"Convert to Path\"></div> -->\n                    <!-- <div class=\"push_button\" id=\"tool_reorient\" title=\"Reorient path\"></div> -->\n                    <!-- <div class=\"push_button\" id=\"tool_make_link\" title=\"Make (hyper)link\"></div> -->\n                    <!-- </div> -->\n                    <!-- </div> -->\n                    <!-- select panel END -->\n                    <!-- Buttons when multiple elements are selected -->\n                    <!-- <div id=\"_multiselected_panel\"> -->\n                    <!-- <div class=\"tool_sep\"></div> -->\n                    <!-- <div class=\"push_button\" id=\"tool_clone_multi\" title=\"Clone Elements [C]\"></div> -->\n                    <!-- <div class=\"push_button\" id=\"tool_delete_multi\" title=\"Delete Selected Elements [Delete/Backspace]\"></div> -->\n                    <!-- <div class=\"tool_sep\"></div> -->\n                    <!-- <div class=\"push_button\" id=\"tool_group_elements\" title=\"Group Elements [G]\"></div> -->\n                    <!-- <div class=\"push_button\" id=\"tool_make_link_multi\" title=\"Make (hyper)link\"></div> -->\n                    <!-- <div class=\"push_button\" id=\"tool_alignleft\" title=\"Align Left\"></div> -->\n                    <!-- <div class=\"push_button\" id=\"tool_aligncenter\" title=\"Align Center\"></div> -->\n                    <!-- <div class=\"push_button\" id=\"tool_alignright\" title=\"Align Right\"></div> -->\n                    <!-- <div class=\"push_button\" id=\"tool_aligntop\" title=\"Align Top\"></div> -->\n                    <!-- <div class=\"push_button\" id=\"tool_alignmiddle\" title=\"Align Middle\"></div> -->\n                    <!-- <div class=\"push_button\" id=\"tool_alignbottom\" title=\"Align Bottom\"></div> -->\n                    <!-- <label id=\"tool_align_relative\">\n              <span id=\"relativeToLabel\">relative to:</span>\n              <select id=\"align_relative_to\" title=\"Align relative to ...\">\n                <option id=\"selected_objects\" value=\"selected\">selected objects</option>\n                <option id=\"largest_object\" value=\"largest\">largest object</option>\n                <option id=\"smallest_object\" value=\"smallest\">smallest object</option>\n                <option id=\"page\" value=\"page\">page</option>\n              </select>\n            </label> -->\n                    <!-- </div> -->\n\n                    <!-- formerly gsvg_panel -->\n                    <!-- <div id=\"container_panel\"> -->\n                    <!-- <div class=\"tool_sep\"></div> -->\n                    <!-- Add viewBox field here? -->\n                    <!-- <label id=\"group_title\" title=\"Group identification label\">\n              <span>label:</span>\n              <input id=\"g_title\" data-attr=\"title\" size=\"10\" type=\"text\" />\n            </label> -->\n                    <!-- </div> -->\n\n                    <!-- <div id=\"use_panel\">\n            <div class=\"push_button\" id=\"tool_unlink_use\" title=\"Break link to reference element (make unique)\"></div>\n          </div> -->\n\n                    <!-- <div id=\"g_panel\">\n            <div class=\"push_button\" id=\"tool_ungroup\" title=\"Ungroup Elements [G]\"></div>\n          </div> -->\n\n                    <!-- For anchor elements -->\n                    <!-- <div id=\"a_panel\">\n            <label id=\"tool_link_url\" title=\"Set link URL (leave empty to remove)\">\n              <span id=\"linkLabel\" class=\"icon_label\"></span>\n              <input id=\"link_url\" type=\"text\" size=\"35\" />\n            </label>\n          </div> -->\n\n                    <!-- <div id=\"path_node_panel\"> -->\n                    <!-- <div class=\"tool_sep\"></div> -->\n                    <!-- <div class=\"tool_button push_button_pressed\" id=\"tool_node_link\" title=\"Link Control Points\"></div> -->\n                    <!-- <div class=\"tool_sep\"></div> -->\n                    <!-- <label id=\"tool_node_x\">x:\n              <input id=\"path_node_x\" class=\"attr_changer\" title=\"Change node's x coordinate\" size=\"3\" data-attr=\"x\" />\n            </label>\n            <label id=\"tool_node_y\">y:\n              <input id=\"path_node_y\" class=\"attr_changer\" title=\"Change node's y coordinate\" size=\"3\" data-attr=\"y\" />\n            </label> -->\n\n                    <!-- <select id=\"seg_type\" title=\"Change Segment type\">\n              <option id=\"straight_segments\" selected=\"selected\" value=\"4\">Straight</option>\n              <option id=\"curve_segments\" value=\"6\">Curve</option>\n            </select> -->\n                    <!-- <div class=\"tool_button\" id=\"tool_node_clone\" title=\"Clone Node\"></div>\n            <div class=\"tool_button\" id=\"tool_node_delete\" title=\"Delete Node\"></div>\n            <div class=\"tool_button\" id=\"tool_openclose_path\" title=\"Open/close sub-path\"></div>\n            <div class=\"tool_button\" id=\"tool_add_subpath\" title=\"Add sub-path\"></div> -->\n                    <!-- </div> -->\n                </div>\n                <!-- tools_top -->\n                <div id=\"cur_context_panel\">\n\n                </div>\n\n                <!-- tools_left -->\n                <!-- <div id=\"tools_left\" class=\"tools_panel\">\n      <div class=\"tool_button\" id=\"tool_select\" title=\"Select Tool\"></div>\n      <div class=\"tool_button\" id=\"tool_fhpath\" title=\"Pencil Tool\"></div>\n      <div class=\"tool_button\" id=\"tool_line\" title=\"Line Tool\"></div>\n      <div class=\"tool_button flyout_current\" id=\"tools_rect_show\" title=\"Square/Rect Tool\">\n        <div class=\"flyout_arrow_horiz\"></div>\n      </div>\n      <div class=\"tool_button flyout_current\" id=\"tools_ellipse_show\" title=\"Ellipse/Circle Tool\">\n        <div class=\"flyout_arrow_horiz\"></div>\n      </div>\n      <div class=\"tool_button\" id=\"tool_path\" title=\"Path Tool\"></div>\n      <div class=\"tool_button\" id=\"tool_text\" title=\"Text Tool\"></div>\n      <div class=\"tool_button\" id=\"tool_image\" title=\"Image Tool\"></div>\n      <div class=\"tool_button\" id=\"tool_zoom\" title=\"Zoom Tool [Ctrl+Up/Down]\"></div>\n\n      <div style=\"display: none\">\n        <div id=\"tool_rect\" title=\"Rectangle\"></div>\n        <div id=\"tool_square\" title=\"Square\"></div>\n        <div id=\"tool_fhrect\" title=\"Free-Hand Rectangle\"></div>\n        <div id=\"tool_ellipse\" title=\"Ellipse\"></div>\n        <div id=\"tool_circle\" title=\"Circle\"></div>\n        <div id=\"tool_fhellipse\" title=\"Free-Hand Ellipse\"></div>\n      </div>\n    </div> -->\n                <!-- tools_left -->\n\n                <!-- tool bottom -->\n                <div class=\"bottom-bar tools_panel\">\n                    <!-- Zoom buttons -->\n                    <div class=\"zoom-menu\" title=\"{{'editor.tools-zoomlevel-title' | translate}}\">\n                        <div class=\"zoom-value\">\n                            <input id=\"zoom\" size=\"3\" value=\"100\" type=\"text\" #zoomValue hidden />\n                            <span id=\"zoomLabel\">{{zoomValue.value}} %</span>\n                            <div id=\"zoom_dropdown\" class=\"dropdown selection\">\n                                <button>O\n                                </button>\n                                <ul>\n                                    <li>1000%</li>\n                                    <li>400%</li>\n                                    <li>200%</li>\n                                    <li>100%</li>\n                                    <li>50%</li>\n                                    <li>25%</li>\n                                    <li id=\"fit_to_canvas\" data-val=\"canvas\">{{'editor.tools-zoomlevel-fitcanvas' | translate}}</li>\n                                    <li id=\"fit_to_sel\" data-val=\"selection\">{{'editor.tools-zoomlevel-fitsection' | translate}}</li>\n                                    <!-- <li id=\"fit_to_layer_content\" data-val=\"layer\">Fit to layer content</li> -->\n                                    <li id=\"fit_to_all\" data-val=\"content\">{{'editor.tools-zoomlevel-fitcontent' | translate}}</li>\n                                    <li>100%</li>\n                                </ul>\n                            </div>\n                        </div>\n                    </div>\n\n                    <div id=\"tools_bottom_2\" class=\"colors\">\n                        <input readonly [(colorPicker)]=\"colorFill\" class=\"color-fill\" title=\"{{'editor.tools-fillcolor-title' | translate}}\" [style.background]=\"colorFill\" [cpAlphaChannel]=\"'always'\" [cpPosition]=\"'top'\" (colorPickerChange)=\"onChangeFillColor($event)\" [cpPresetColors]=\"defaultColor\" [cpCancelButton]=\"true\" [cpCancelButtonClass]=\"'cpCancelButtonClass'\" [cpCancelButtonText]=\"'Cancel'\" [cpOKButton]=\"true\" [cpOKButtonText]=\"'OK'\" [cpOKButtonClass]=\"'cpOKButtonClass'\" />\n                        <input readonly [(colorPicker)]=\"colorStroke\" class=\"color-stroke\" title=\"{{'editor.tools-strokecolor-title' | translate}}\" [style.background]=\"colorStroke\" [cpAlphaChannel]=\"'always'\" [cpPosition]=\"'top'\" (colorPickerChange)=\"onChangeStrokeColor($event)\" [cpPresetColors]=\"defaultColor\" [cpCancelButton]=\"true\" [cpCancelButtonClass]=\"'cpCancelButtonClass'\" [cpCancelButtonText]=\"'Cancel'\" [cpOKButton]=\"true\" [cpOKButtonText]=\"'OK'\" [cpOKButtonClass]=\"'cpOKButtonClass'\" />\n                        <!-- <div id=\"color_tools\"> -->\n                        <div class=\"color_tool\" id=\"tool_fill\" hidden>\n                            <label class=\"icon_label\" for=\"fill_color\" title=\"{{'editor.tools-fillcolor-title' | translate}}\"></label>\n                            <div class=\"color_block\">\n                                <div id=\"fill_color\" class=\"color_block\" [style.border-color]=\"colorFill\"></div>\n                            </div>\n                        </div>\n                        <div class=\"color_tool\" id=\"tool_stroke\" hidden>\n                            <label class=\"icon_label\" title=\"Change stroke color\"></label>\n                            <div class=\"color_block\">\n                                <div id=\"stroke_bg\"></div>\n                                <div id=\"stroke_color\" class=\"color_block\" title=\"{{'editor.tools-strokecolor-title' | translate}}\" [style.border-color]=\"colorStroke\"></div>\n                            </div>\n\n                            <!-- <div id=\"toggle_stroke_tools\" title=\"Show/hide more stroke tools\"></div> -->\n\n                            <!-- <label class=\"stroke_tool\">\n                  <select id=\"stroke_style\" title=\"Change stroke dash style\">\n                    <option selected=\"selected\" value=\"none\">&#8212;</option>\n                    <option value=\"2,2\">...</option>\n                    <option value=\"5,5\">- -</option>\n                    <option value=\"5,2,2,2\">- .</option>\n                    <option value=\"5,2,2,2,2,2\">- ..</option>\n                  </select>\n                </label> -->\n\n                            <!-- <div class=\"stroke_tool dropdown\" id=\"stroke_linejoin\">\n                  <div id=\"cur_linejoin\" title=\"Linejoin: Miter\"></div>\n                  <button></button>\n                </div> -->\n\n                            <!-- <div class=\"stroke_tool dropdown\" id=\"stroke_linecap\">\n                  <div id=\"cur_linecap\" title=\"Linecap: Butt\"></div>\n                  <button></button>\n                </div> -->\n\n                            <!-- </div> -->\n\n                            <!-- <div class=\"color_tool\" id=\"tool_opacity\" title=\"Change selected item opacity\">\n                <label>\n                  <span id=\"group_opacityLabel\" class=\"icon_label\"></span>\n                  <input id=\"group_opacity\" size=\"3\" value=\"100\" type=\"text\" />\n                </label>\n                <div id=\"opacity_dropdown\" class=\"dropdown\">\n                  <button></button>\n                  <ul>\n                    <li>0%</li>\n                    <li>25%</li>\n                    <li>50%</li>\n                    <li>75%</li>\n                    <li>100%</li>\n                    <li class=\"special\">\n                      <div id=\"opac_slider\"></div>\n                    </li>\n                  </ul>\n                </div>\n              </div> -->\n                        </div>\n                    </div>\n\n                    <div id=\"tools_bottom_3\" class=\"colors-palette\">\n                        <div id=\"palette_holder\">\n                            <div id=\"palette\" title=\"{{'editor.tools-palettecolor-title' | translate}}\"></div>\n                        </div>\n                    </div>\n                </div>\n\n                <div id=\"option_lists\" class=\"dropdown\">\n                    <!-- <ul id=\"linejoin_opts\">\n            <li class=\"tool_button current\" id=\"linejoin_miter\" title=\"Linejoin: Miter\"></li>\n            <li class=\"tool_button\" id=\"linejoin_round\" title=\"Linejoin: Round\"></li>\n            <li class=\"tool_button\" id=\"linejoin_bevel\" title=\"Linejoin: Bevel\"></li>\n          </ul>\n\n          <ul id=\"linecap_opts\">\n            <li class=\"tool_button current\" id=\"linecap_butt\" title=\"Linecap: Butt\"></li>\n            <li class=\"tool_button\" id=\"linecap_square\" title=\"Linecap: Square\"></li>\n            <li class=\"tool_button\" id=\"linecap_round\" title=\"Linecap: Round\"></li>\n          </ul> -->\n\n                    <ul id=\"position_opts\" class=\"optcols3\">\n                        <li class=\"push_button\" id=\"tool_posleft\" title=\"Align Left\"></li>\n                        <li class=\"push_button\" id=\"tool_poscenter\" title=\"Align Center\"></li>\n                        <li class=\"push_button\" id=\"tool_posright\" title=\"Align Right\"></li>\n                        <li class=\"push_button\" id=\"tool_postop\" title=\"Align Top\"></li>\n                        <li class=\"push_button\" id=\"tool_posmiddle\" title=\"Align Middle\"></li>\n                        <li class=\"push_button\" id=\"tool_posbottom\" title=\"Align Bottom\"></li>\n                    </ul>\n                </div>\n\n\n                <!-- hidden divs -->\n                <!-- <div id=\"color_picker\"></div> -->\n\n            </div>\n        </mat-drawer-content>\n        <!-- work area END -->\n    </mat-drawer-container>\n\n    <!-- svg_editor -->\n\n    <!-- NOT USED -->\n    <div id=\"svg_source_editor\">\n        <div class=\"overlay\"></div>\n        <div id=\"svg_source_container\">\n            <div id=\"tool_source_back\" class=\"toolbar_button\">\n                <button id=\"tool_source_save\">Apply Changes</button>\n                <button id=\"tool_source_cancel\">Cancel</button>\n            </div>\n            <div id=\"save_output_btns\">\n                <p id=\"copy_save_note\">Copy the contents of this box into a text editor, then save the file with a .svg\n                    extension.</p>\n                <button id=\"copy_save_done\">Done</button>\n            </div>\n            <form>\n                <textarea id=\"svg_source_textarea\" spellcheck=\"false\"></textarea>\n            </form>\n        </div>\n    </div>\n\n    <div id=\"svg_docprops\">\n        <div class=\"overlay\"></div>\n        <div id=\"svg_docprops_container\">\n            <div id=\"tool_docprops_back\" class=\"toolbar_button\">\n                <button id=\"tool_docprops_save\">OK</button>\n                <button id=\"tool_docprops_cancel\">Cancel</button>\n            </div>\n\n\n            <fieldset id=\"svg_docprops_docprops\">\n                <legend id=\"svginfo_image_props\">Image Properties</legend>\n                <label>\n                    <span id=\"svginfo_title\">Title:</span>\n                    <input type=\"text\" id=\"canvas_title\" />\n                </label>\n\n                <fieldset id=\"change_resolution\">\n                    <legend id=\"svginfo_dim\">Canvas Dimensions</legend>\n\n                    <label>\n                        <span id=\"svginfo_width\">width:</span>\n                        <input type=\"text\" id=\"canvas_width\" size=\"6\" />\n                    </label>\n\n                    <label>\n                        <span id=\"svginfo_height\">height:</span>\n                        <input type=\"text\" id=\"canvas_height\" size=\"6\" />\n                    </label>\n\n                    <label>\n                        <select id=\"resolution\">\n                            <option id=\"selectedPredefined\" selected=\"selected\">Select predefined:</option>\n                            <option>640x480</option>\n                            <option>800x600</option>\n                            <option>1024x768</option>\n                            <option>1280x960</option>\n                            <option>1600x1200</option>\n                            <option id=\"fitToContent\" value=\"content\">Fit to Content</option>\n                        </select>\n                    </label>\n                </fieldset>\n\n                <fieldset id=\"image_save_opts\">\n                    <legend id=\"includedImages\">Included Images</legend>\n                    <label>\n                        <input type=\"radio\" name=\"image_opt\" value=\"embed\" checked=\"checked\" />\n                        <span id=\"image_opt_embed\">Embed data (local files)</span>\n                    </label>\n                    <label>\n                        <input type=\"radio\" name=\"image_opt\" value=\"ref\" />\n                        <span id=\"image_opt_ref\">Use file reference</span>\n                    </label>\n                </fieldset>\n            </fieldset>\n\n        </div>\n    </div>\n\n    <div id=\"svg_prefs\">\n        <div class=\"overlay\"></div>\n        <div id=\"svg_prefs_container\">\n            <div id=\"tool_prefs_back\" class=\"toolbar_button\">\n                <button id=\"tool_prefs_save\">OK</button>\n                <button id=\"tool_prefs_cancel\">Cancel</button>\n            </div>\n\n            <fieldset>\n                <legend id=\"svginfo_editor_prefs\">Editor Preferences</legend>\n\n                <label>\n                    <span id=\"svginfo_lang\">Language:</span>\n                    <!-- Source: http://en.wikipedia.org/wiki/Language_names -->\n                    <select id=\"lang_select\">\n                        <option id=\"lang_ar\" value=\"ar\">العربية</option>\n                        <option id=\"lang_cs\" value=\"cs\">Čeština</option>\n                        <option id=\"lang_de\" value=\"de\">Deutsch</option>\n                        <option id=\"lang_en\" value=\"en\" selected=\"selected\">English</option>\n                        <option id=\"lang_es\" value=\"es\">Español</option>\n                        <option id=\"lang_fa\" value=\"fa\">فارسی</option>\n                        <option id=\"lang_fr\" value=\"fr\">Français</option>\n                        <option id=\"lang_fy\" value=\"fy\">Frysk</option>\n                        <option id=\"lang_hi\" value=\"hi\">&#2361;&#2367;&#2344;&#2381;&#2342;&#2368;,\n                            &#2361;&#2367;&#2306;&#2342;&#2368;</option>\n                        <option id=\"lang_it\" value=\"it\">Italiano</option>\n                        <option id=\"lang_ja\" value=\"ja\">日本語</option>\n                        <option id=\"lang_nl\" value=\"nl\">Nederlands</option>\n                        <option id=\"lang_pl\" value=\"pl\">Polski</option>\n                        <option id=\"lang_pt-BR\" value=\"pt-BR\">Português (BR)</option>\n                        <option id=\"lang_ro\" value=\"ro\">Română</option>\n                        <option id=\"lang_ru\" value=\"ru\">Русский</option>\n                        <option id=\"lang_sk\" value=\"sk\">Slovenčina</option>\n                        <option id=\"lang_sl\" value=\"sl\">Slovenščina</option>\n                        <option id=\"lang_zh-TW\" value=\"zh-TW\">繁體中文</option>\n                    </select>\n                </label>\n\n                <label>\n                    <span id=\"svginfo_icons\">Icon size:</span>\n                    <select id=\"iconsize\">\n                        <option id=\"icon_small\" value=\"s\">Small</option>\n                        <option id=\"icon_medium\" value=\"m\" selected=\"selected\">Medium</option>\n                        <option id=\"icon_large\" value=\"l\">Large</option>\n                        <option id=\"icon_xlarge\" value=\"xl\">Extra Large</option>\n                    </select>\n                </label>\n\n                <fieldset id=\"change_background\">\n                    <legend id=\"svginfo_change_background\">Editor Background</legend>\n                    <div id=\"bg_blocks\"></div>\n                    <label>\n                        <span id=\"svginfo_bg_url\">URL:</span>\n                        <input type=\"text\" id=\"canvas_bg_url\" />\n                    </label>\n                    <p id=\"svginfo_bg_note\">Note: Background will not be saved with image.</p>\n                </fieldset>\n\n                <fieldset id=\"change_grid\">\n                    <legend id=\"svginfo_grid_settings\">Grid</legend>\n                    <label>\n                        <span id=\"svginfo_snap_onoff\">Snapping on/off</span>\n                        <input type=\"checkbox\" value=\"snapping_on\" id=\"grid_snapping_on\" />\n                    </label>\n                    <label>\n                        <span id=\"svginfo_snap_step\">Snapping Step-Size:</span>\n                        <input type=\"text\" id=\"grid_snapping_step\" size=\"3\" value=\"10\" />\n                    </label>\n                    <label>\n                        <span id=\"svginfo_grid_color\">Grid color:</span>\n                        <input type=\"text\" id=\"grid_color\" size=\"3\" value=\"#000\" />\n                    </label>\n                </fieldset>\n\n                <fieldset id=\"units_rulers\">\n                    <legend id=\"svginfo_units_rulers\">Units &amp; Rulers</legend>\n                    <label>\n                        <span id=\"svginfo_rulers_onoff\">Show rulers</span>\n                        <input type=\"checkbox\" value=\"show_rulers\" id=\"show_rulers\" checked=\"checked\" />\n                    </label>\n                    <label>\n                        <span id=\"svginfo_unit\">Base Unit:</span>\n                        <select id=\"base_unit\">\n                            <option value=\"px\">Pixels</option>\n                            <option value=\"cm\">Centimeters</option>\n                            <option value=\"mm\">Millimeters</option>\n                            <option value=\"in\">Inches</option>\n                            <option value=\"pt\">Points</option>\n                            <option value=\"pc\">Picas</option>\n                            <option value=\"em\">Ems</option>\n                            <option value=\"ex\">Exs</option>\n                        </select>\n                    </label>\n                    <!-- Should this be an export option instead? -->\n                    <!-- \n          <span id=\"svginfo_unit_system\">Unit System:</span>\n          <label>\n            <input type=\"radio\" name=\"unit_system\" value=\"single\" checked=\"checked\"/>\n            <span id=\"svginfo_single_type_unit\">Single type unit</span>\n            <small id=\"svginfo_single_type_unit_sub\">CSS unit type is set on root element. If a different unit type is entered in a text field, it is converted back to user units on export.</small>\n          </label>\n          <label>\n            <input type=\"radio\" name=\"unit_system\" value=\"multi\"/>\n            <span id=\"svginfo_multi_units\">Multiple CSS units</span> \n            <small id=\"svginfo_single_type_unit_sub\">Attributes can be given different CSS units, which may lead to inconsistant results among viewers.</small>\n          </label>\n   -->\n                </fieldset>\n\n            </fieldset>\n\n        </div>\n    </div>\n    <!-- NOT USED END -->\n\n    <div id=\"dialog_box\">\n        <div class=\"overlay\"></div>\n        <div id=\"dialog_container\">\n            <div id=\"dialog_content\"></div>\n            <div id=\"dialog_buttons\"></div>\n        </div>\n    </div>\n\n    <!-- canvas context menu -->\n    <ul id=\"cmenu_canvas\" class=\"contextMenu svg-workarea-contextmenu\">\n        <!-- <li>\n      <a href=\"#deselect\">Clear selection</a>\n    </li> -->\n        <li>\n            <a id=\"#interactivity\" (click)=\"isInteractivtyEnabled(selectedElement) && onGaugeEditEx()\">{{'editor.interactivity' | translate}}</a>\n        </li>\n        <li class=\"separator\">\n            <a id=\"#cut\">{{'editor.cmenu-cut' | translate}}</a>\n        </li>\n        <li>\n            <a id=\"#copy\">{{'editor.cmenu-copy' | translate}}</a>\n        </li>\n        <li>\n            <a id=\"#paste\">{{'editor.cmenu-paste' | translate}}</a>\n        </li>\n        <li>\n            <a id=\"#paste_in_place\">{{'editor.cmenu-paste-place' | translate}}</a>\n        </li>\n        <li class=\"separator\">\n            <a id=\"#delete\">{{'editor.cmenu-delete' | translate}}</a>\n        </li>\n        <li class=\"separator\">\n            <a id=\"#group\">{{'editor.cmenu-group' | translate}}\n                <span class=\"shortcut\">G</span>\n            </a>\n        </li>\n        <li>\n            <a id=\"#ungroup\">{{'editor.cmenu-ungroup' | translate}}\n                <span class=\"shortcut\">G</span>\n            </a>\n        </li>\n        <li class=\"separator\">\n            <a id=\"#move_front\">{{'editor.cmenu-bring-front' | translate}}\n                <span class=\"shortcut\">SHFT+CTRL+]</span>\n            </a>\n        </li>\n        <li>\n            <a id=\"#move_up\">{{'editor.cmenu-bring-forward' | translate}}\n                <span class=\"shortcut\">CTRL+]</span>\n            </a>\n        </li>\n        <li>\n            <a id=\"#move_down\">{{'editor.cmenu-send-backward' | translate}}\n                <span class=\"shortcut\">CTRL+[</span>\n            </a>\n        </li>\n        <li>\n            <a id=\"#move_back\">{{'editor.cmenu-send-back' | translate}}\n                <span class=\"shortcut\">SHFT+CTRL+[</span>\n            </a>\n        </li>\n    </ul>\n    <!-- canvas context menu END -->\n\n    <!-- layers context menu -->\n    <ul id=\"cmenu_layers\" class=\"contextMenu\" style=\"display: none\">\n        <li>\n            <a href=\"#dupe\">{{'editor.cmenu-layer-duplicate' | translate}}</a>\n        </li>\n        <li>\n            <a href=\"#delete\">{{'editor.cmenu-layer-delete' | translate}}</a>\n        </li>\n        <li>\n            <a href=\"#merge_down\">{{'editor.cmenu-layer-marge-down' | translate}}</a>\n        </li>\n        <li>\n            <a href=\"#merge_all\">{{'editor.cmenu-layer-marge-all' | translate}}</a>\n        </li>\n    </ul>\n    <!-- layers context menu END -->\n</div>"

/***/ }),

/***/ "../../../../../src/app/editor/editor.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return EditorComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return DialogDocProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DialogDocName; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__("../../../../@ngx-translate/core/@ngx-translate/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_project_service__ = __webpack_require__("../../../../../src/app/_services/project.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_hmi__ = __webpack_require__("../../../../../src/app/_models/hmi.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__helpers_windowref__ = __webpack_require__("../../../../../src/app/_helpers/windowref.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__gauges_gauge_property_gauge_property_component__ = __webpack_require__("../../../../../src/app/gauges/gauge-property/gauge-property.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__gauges_chart_property_chart_property_component__ = __webpack_require__("../../../../../src/app/gauges/chart-property/chart-property.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__layout_property_layout_property_component__ = __webpack_require__("../../../../../src/app/editor/layout-property/layout-property.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__gauges_gauges_component__ = __webpack_require__("../../../../../src/app/gauges/gauges.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__gauges_gauge_base_gauge_base_component__ = __webpack_require__("../../../../../src/app/gauges/gauge-base/gauge-base.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__helpers_utils__ = __webpack_require__("../../../../../src/app/_helpers/utils.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__gui_helpers_confirm_dialog_confirm_dialog_component__ = __webpack_require__("../../../../../src/app/gui-helpers/confirm-dialog/confirm-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__gauges_bag_property_bag_property_component__ = __webpack_require__("../../../../../src/app/gauges/bag-property/bag-property.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__gauges_pipe_pipe_property_pipe_property_component__ = __webpack_require__("../../../../../src/app/gauges/pipe/pipe-property/pipe-property.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


















var EditorComponent = (function () {
    function EditorComponent(projectService, winRef, dialog, changeDetector, translateService, gaugesManager, viewContainerRef, resolver, mdIconRegistry, sanitizer) {
        this.projectService = projectService;
        this.winRef = winRef;
        this.dialog = dialog;
        this.changeDetector = changeDetector;
        this.translateService = translateService;
        this.gaugesManager = gaugesManager;
        this.viewContainerRef = viewContainerRef;
        this.resolver = resolver;
        this.mdIconRegistry = mdIconRegistry;
        this.sanitizer = sanitizer;
        this.isLoading = true;
        this.defaultColor = __WEBPACK_IMPORTED_MODULE_12__helpers_utils__["b" /* Utils */].defaultColor;
        this.colorFill = '#FFFFFF';
        this.colorStroke = '#000000';
        this.currentView = null;
        this.hmi = new __WEBPACK_IMPORTED_MODULE_5__models_hmi__["l" /* Hmi */](); // = {_id: '', name: '', networktype: '', ipaddress: '', maskaddress: '' };
        this.currentMode = '';
        this.gridOn = false;
        this.selectedElement = new __WEBPACK_IMPORTED_MODULE_5__models_hmi__["q" /* SelElement */]();
        this.panelsState = {
            enabled: false,
            panelView: true,
            panelGeneral: true,
            panelC: true,
            panelD: true,
            panelS: true
        };
        this.shapesGrps = [];
        this.gaugesRef = [];
        mdIconRegistry.addSvgIcon('group', sanitizer.bypassSecurityTrustResourceUrl('/assets/images/group.svg'));
        mdIconRegistry.addSvgIcon('to_bottom', sanitizer.bypassSecurityTrustResourceUrl('/assets/images/to-bottom.svg'));
        mdIconRegistry.addSvgIcon('to_top', sanitizer.bypassSecurityTrustResourceUrl('/assets/images/to-top.svg'));
        // this.gaugesManager.stopDemo();
    }
    //#region Implemented onInit / onAfterInit event
    /**
     * Init Save Project event and clear gauge memory (to manage event signal/gauge)
     */
    EditorComponent.prototype.ngOnInit = function () {
        var _this = this;
        try {
            this.subscriptionSave = this.projectService.onSaveCurrent.subscribe(function (saveas) {
                _this.onSaveProject();
                if (saveas) {
                    _this.projectService.saveAs();
                }
            });
            this.gaugesManager.clearMemory();
        }
        catch (err) {
            console.log(err);
        }
    };
    /**
     * after init event
     */
    EditorComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.myInit();
        this.setMode('select');
        var hmi = this.projectService.getHmi();
        if (hmi) {
            this.loadHmi();
        }
        this.subscriptionLoad = this.projectService.onLoadHmi.subscribe(function (load) {
            _this.loadHmi();
        }, function (error) {
            console.log('Error loadHMI');
        });
        this.changeDetector.detectChanges();
    };
    EditorComponent.prototype.ngOnDestroy = function () {
        try {
            if (this.subscriptionSave) {
                this.subscriptionSave.unsubscribe();
            }
            if (this.subscriptionLoad) {
                this.subscriptionLoad.unsubscribe();
            }
        }
        catch (e) {
        }
        if (this.currentView) {
            this.currentView.svgcontent = this.winRef.nativeWindow.svgEditor.getSvgString();
            this.saveView(this.currentView);
        }
    };
    //#endregion
    //#region General private function
    /**
     * Init, first init the svg-editor component
     */
    EditorComponent.prototype.myInit = function () {
        var _this = this;
        try {
            // first init svg-editor component
            mypathseg.initPathSeg();
            mybrowser.initBrowser();
            mysvgutils.initSvgutils();
            myselect.initSelect();
            mydraw.initDraw();
            mysvgcanvas.initSvgCanvas();
            // init svg-editor
            var toinit = mysvgeditor.initSvgEditor($, function (selected) {
                _this.onSelectedElement(selected);
                var ga = _this.getGaugeSettings(selected);
            }, function (type, args) {
                _this.onExtensionLoaded(args);
                _this.clearSelection();
                if (type === 'shapes') {
                    _this.setShapes();
                }
            }, function (type, color) {
                if (type === 'fill') {
                    _this.colorFill = color;
                    _this.setFillColor(_this.colorFill);
                    _this.checkMySelectedToSetColor(_this.colorFill, null, _this.winRef.nativeWindow.svgEditor.getSelectedElements());
                    // console.log('fill ' + color);
                }
                else if (type === 'stroke') {
                    _this.colorStroke = color;
                    _this.checkMySelectedToSetColor(null, _this.colorStroke, _this.winRef.nativeWindow.svgEditor.getSelectedElements());
                    // console.log('stroke ' + color);
                }
            }, function (eleadded) {
                console.log('added: ' + eleadded.id + ' ' + eleadded.type);
                var ga = _this.getGaugeSettings(eleadded);
                _this.checkGaugeAdded(ga);
                // this.hmiService.addGauge(this.hmi, eleadded);
            }, function (eleremoved) {
                _this.onRemoveElement(eleremoved);
            }, function (eleresized) {
                if (eleresized && eleresized.id) {
                    var ga = _this.getGaugeSettings(eleresized);
                    _this.gaugesManager.checkElementToResize(ga, _this.resolver, _this.viewContainerRef);
                }
            }, function (copiedpasted) {
                if (copiedpasted && copiedpasted.copy && copiedpasted.past && copiedpasted.copy.length == copiedpasted.past.length) {
                    for (var i = 0; i < copiedpasted.copy.length; i++) {
                        var gasrc = _this.getGaugeSettings(copiedpasted.copy[i]);
                        var gadest = _this.gaugesManager.createSettings(copiedpasted.past[i].id, gasrc.type);
                        gadest.property = JSON.parse(JSON.stringify(gasrc.property));
                        _this.checkGaugeAdded(gadest);
                    }
                }
            });
            this.winRef.nativeWindow.svgEditor.init();
            $(initContextmenu);
        }
        catch (err) {
            console.log(err);
        }
        this.setFillColor(this.colorFill);
        this.setFillColor(this.colorStroke);
    };
    /**
     * Load the hmi resource and bind it
     */
    EditorComponent.prototype.loadHmi = function () {
        this.currentView = null;
        this.hmi = this.projectService.getHmi();
        // check new hmi
        if (!this.hmi.views || this.hmi.views.length <= 0) {
            this.hmi.views = [];
            this.onAddView();
            // this.selectView(this.hmi.views[0].name);
        }
        else {
            var oldsel = localStorage.getItem("@frango.webeditor.currentview");
            if (!oldsel && this.hmi.views.length) {
                oldsel = this.hmi.views[0].name;
            }
            for (var i = 0; i < this.hmi.views.length; i++) {
                if (this.hmi.views[i].name === oldsel) {
                    this.onSelectView(this.hmi.views[i]);
                    break;
                }
            }
        }
        this.loadPanelState();
        this.isLoading = false;
    };
    /**
     * Set or Add the View to Project
     * Save the View to Server
     */
    EditorComponent.prototype.saveView = function (view) {
        this.projectService.setView(view);
    };
    /**
     * Remove the View from Project
     * Remove the View from Server
     * @param view
     */
    EditorComponent.prototype.removeView = function (view) {
        this.projectService.removeView(view);
    };
    /**
     * Set the HMI Layout to Project
     * Save the Layout to Server
     * @param layout
     */
    EditorComponent.prototype.saveLayout = function (layout) {
        this.projectService.setLayout(layout);
    };
    EditorComponent.prototype.saveHmi = function () {
        console.log('TO REMOVE!!!!!!!!!');
    };
    /**
     * Take shapes from svg-editor to show in panel
     */
    EditorComponent.prototype.setShapes = function () {
        var temp = this.winRef.nativeWindow.svgEditor.getShapes();
        var grps = [];
        Object.keys(temp).forEach(function (grpk) {
            grps.push({ name: grpk, shapes: temp[grpk] });
        }),
            this.shapesGrps = grps;
    };
    /**
     * get gauge settings from current view items, if not exist create void settings from GaugesManager
     * @param ele gauge id
     */
    EditorComponent.prototype.getGaugeSettings = function (ele) {
        if (ele && this.currentView) {
            if (this.currentView.items[ele.id]) {
                return this.currentView.items[ele.id];
            }
            return this.gaugesManager.createSettings(ele.id, ele.type);
        }
        return null;
    };
    /**
     * add the gauge settings to the current view items list
     * @param ele
     */
    EditorComponent.prototype.setGaugeSettings = function (ele) {
        this.currentView.items[ele.id] = ele;
    };
    /**
     * check the gauge in current view of element
     * @param ele element to check
     */
    EditorComponent.prototype.checkGaugeInView = function (ele) {
        var g = this.getGaugeSettings(ele);
        if (!g) {
        }
    };
    /**
     * check and set the color panel with selected element
     * @param ele selected element
     */
    EditorComponent.prototype.checkColors = function (ele) {
        var eles = this.winRef.nativeWindow.svgEditor.getSelectedElements();
        var clrfill = null;
        var clrstroke = null;
        if (eles && (eles.length <= 1 || !eles[1]) && eles[0]) {
            // check for gauge fill and stroke color
            var colors = { fill: clrfill, stroke: clrstroke };
            if (__WEBPACK_IMPORTED_MODULE_10__gauges_gauges_component__["a" /* GaugesManager */].checkGaugeColor(ele, eles, colors)) {
                if (colors.fill) {
                    this.colorFill = colors.fill;
                }
                if (colors.stroke) {
                    this.colorStroke = colors.stroke;
                }
            }
            else {
                if (eles[0].attributes['fill']) {
                    clrfill = eles[0].attributes['fill'].value;
                    this.colorFill = clrfill;
                }
                if (eles[0].attributes['stroke']) {
                    clrstroke = eles[0].attributes['stroke'].value;
                    this.colorStroke = clrstroke;
                }
                // this.setFillColor(this.colorFill);
                // console.log('f:' + this.colorFill + ' s:' + this.colorStroke);
            }
        }
    };
    /**
     * load the view to svg-editor and canvas
     * @param view view to load
     */
    EditorComponent.prototype.loadView = function (view) {
        var _this = this;
        if (view) {
            this.clearEditor();
            var svgcontent = '';
            var v_1 = this.getView(view.name);
            if (v_1) {
                svgcontent = v_1.svgcontent;
            }
            if (svgcontent.length <= 0) {
                svgcontent = '<svg id="' + view.name + '" width="' + view.profile.width + '" height="' + view.profile.height +
                    '" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg"><g><title>Layer 1</title></g></svg>';
                // svgcontent = '<svg id="' + view.name + '" width="' + view.profile.width + '" height="' + view.profile.height +
                //     '" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg"><g><title>Layer 1</title>' +
                //     '<g transform="translate(267,179) scale(0.005) translate(-267,-179)" strokeWidth=\"2\" strokecolor=\"#000000\" fill=\"none\" type=\"svg-ext-switch\" id=\"svg_6\">' +
                //     '<path d="M1.07052,290.14898L1.0583,290.13018" id="svg_1" stroke-width="2" stroke="#000000" fill="none"/>' +
                //     '<path d="M1.0707,290.12L1.0707,290.12677" id="svg_2" stroke-width="2" stroke="#000000" fill="none"/>' +
                //     '<circle stroke_width="none" r="0.00165" cy="290.12825" cx="1.07065" id="svg_3" stroke-width="2" stroke="#000000" fill="none"/>' +
                //     '<path d="M1.0707,290.15724L1.0707,290.15046" id="svg_4" stroke-width="2" stroke="#000000" fill="none"/>' +
                //     '<circle transform="scale(1,-1)" r="0.00165" cy="-4777.94978" cx="17.44126" id="svg_5" stroke-width="2" stroke="#000000" fill="none"/>' +
                //     '</g>' +
                //     '</g></svg>';
            }
            if (this.winRef.nativeWindow.svgEditor) {
                this.winRef.nativeWindow.svgEditor.setDocProperty(view.name, view.profile.width, view.profile.height, view.profile.bkcolor);
                this.winRef.nativeWindow.svgEditor.setSvgString(svgcontent);
            }
            // check gauge to init
            this.gaugesRef = [];
            setTimeout(function () {
                for (var key in v_1.items) {
                    var ga = _this.getGaugeSettings(v_1.items[key]);
                    _this.checkGaugeAdded(ga);
                    // GaugesManager.initElementAdded(v.items[key], this.resolver, this.viewContainerRef);                
                }
            }, 500);
        }
    };
    /**
     * get view from hmi views list
     * @param name view name
     */
    EditorComponent.prototype.getView = function (name) {
        for (var i = 0; i < this.hmi.views.length; i++) {
            if (this.hmi.views[i].name === name) {
                return this.hmi.views[i];
            }
        }
        return null;
    };
    EditorComponent.prototype.getViewsSorted = function () {
        return this.hmi.views.sort(function (a, b) {
            if (a.name > b.name) {
                return 1;
            }
            return -1;
        });
    };
    //#endregion
    //#region Svg-editor event and function interface 
    /**
     * set the mode to svg-editor (line,text,...)
     * @param mode mode to set
     */
    EditorComponent.prototype.setMode = function (mode) {
        this.currentMode = mode;
        this.winRef.nativeWindow.svgEditor.clickToSetMode(mode);
    };
    /**
     * check with the current mode
     * @param mode mode to check
     */
    EditorComponent.prototype.isModeActive = function (mode) {
        return (this.currentMode === mode);
    };
    /**
     * clear svg-editor and the canvas
     */
    EditorComponent.prototype.clearEditor = function () {
        if (this.winRef.nativeWindow.svgEditor) {
            this.winRef.nativeWindow.svgEditor.clickClearAll();
        }
    };
    /**
     * event from svg-editor by new selection svg element
     * @param event svg element
     */
    EditorComponent.prototype.onSelectedElement = function (event) {
        this.selectedElement = null;
        try {
            // to remove some strange effects
            if (document.activeElement !== document.body)
                document.activeElement.blur();
        }
        catch (e) { }
        if (event) {
            for (var i = 0; i < event.length; i++) {
                console.log('selected: ' + event[i].id + ' ' + event[i].type);
            }
            if (event.length <= 1) {
                this.selectedElement = event[0];
                this.selectedElement.type = event[0].type;
                this.checkColors(this.selectedElement);
                this.checkGaugeInView(this.selectedElement);
            }
        }
    };
    /**
     * event from svg-editor: for every loaded extension
     * @param args
     */
    EditorComponent.prototype.onExtensionLoaded = function (args) {
        if (args && args.length) {
            // console.log('ext \'' + args[0] + '\' loaded');
        }
    };
    /**
     * event from svg-editor: change fill color
     * @param event color code
     */
    EditorComponent.prototype.onChangeFillColor = function (event) {
        this.setFillColor(event);
        this.checkMySelectedToSetColor(this.colorFill, null, this.winRef.nativeWindow.svgEditor.getSelectedElements());
    };
    /**
     * event change stroke color (from bottom color panel)
     * @param event color code
     */
    EditorComponent.prototype.onChangeStrokeColor = function (event) {
        this.setStrokeColor(event);
        this.checkMySelectedToSetColor(null, this.colorStroke, this.winRef.nativeWindow.svgEditor.getSelectedElements());
    };
    /**
     * event from svg-editor: svg element removed
     * @param ele svg element
     */
    EditorComponent.prototype.onRemoveElement = function (ele) {
        if (this.currentView && this.currentView.items && ele) {
            for (var i = 0; i < ele.length; i++) {
                if (this.currentView.items[ele[i].id]) {
                    delete this.currentView.items[ele[i].id];
                }
            }
        }
    };
    /**
     * set the fill color (to svg-editor)
     * @param event color code
     */
    EditorComponent.prototype.setFillColor = function (event) {
        var color = event;
        if (color.charAt(0) === '#')
            color = color.slice(1);
        var alfa = 100;
        if (this.winRef.nativeWindow.svgEditor) {
            this.winRef.nativeWindow.svgEditor.setColor(color, alfa, "fill");
        }
        // this.fillcolor;
    };
    /**
     * set stroke color (to svg-editor)
     * @param event color code
     */
    EditorComponent.prototype.setStrokeColor = function (event) {
        var color = event;
        if (color.charAt(0) === '#')
            color = color.slice(1);
        var alfa = 100;
        this.winRef.nativeWindow.svgEditor.setColor(color, alfa, "stroke");
        // this.fillcolor;
    };
    /**
     * set the marker to selected element (->, <->, <-)
     * @param id marker id (start,mid,end)
     * @param marker marker type
     */
    EditorComponent.prototype.onSetMarker = function (id, marker) {
        if (marker >= 0) {
            this.winRef.nativeWindow.svgEditor.setMarker(id, marker);
        }
    };
    /**
     * align the selected element
     * @param letter align type (left,center,right,top,middle,bottom)
     */
    EditorComponent.prototype.onAlignSelected = function (letter) {
        this.winRef.nativeWindow.svgEditor.alignSelectedElements(letter.charAt(0));
    };
    /**
     * select the zoom area function
     */
    EditorComponent.prototype.onZoomSelect = function () {
        this.winRef.nativeWindow.svgEditor.clickZoom();
    };
    /**
     * show grid in canvas
     */
    EditorComponent.prototype.onShowGrid = function () {
        this.gridOn = this.gridOn = !this.gridOn;
        this.winRef.nativeWindow.svgEditor.clickExtension("view_grid");
        this.winRef.nativeWindow.svgEditor.enableGridSnapping(this.gridOn);
    };
    /**
     * add image to view
     * @param event selected file
     */
    EditorComponent.prototype.onSetImage = function (event) {
        if (event.target.files) {
            this.imagefile = 'assets/images/' + event.target.files[0].name;
            var self_1 = this;
            if (this.imagefile.split('.').pop().toLowerCase() === 'svg') {
                var reader = new FileReader();
                reader.onloadend = function (e) {
                    self_1.winRef.nativeWindow.svgEditor.setSvgImageToAdd(e.target.result);
                    self_1.setMode('svg-image');
                };
                reader.readAsText(event.target.files[0]);
            }
            else {
                this.getBase64Image(event.target.files[0], function (imgdata) {
                    var data = imgdata;
                    self_1.winRef.nativeWindow.svgEditor.promptImgURLcallback = data;
                    self_1.setMode('image');
                });
            }
        }
    };
    /**
     * convert image file to code to attach in svg
     * @param file image file
     * @param callback event for end load image
     */
    EditorComponent.prototype.getBase64Image = function (file, callback) {
        var fr = new FileReader();
        fr.onload = function () {
            callback(fr.result);
        };
        fr.readAsDataURL(file);
    };
    /**
     * set stroke to svg selected (joinmieter, joinround, joinbevel, capbutt, capsquare, capround)
     * @param option stroke type
     */
    EditorComponent.prototype.onSetStrokeOption = function (option) {
        this.winRef.nativeWindow.svgEditor.setStrokeOption(option);
    };
    /**
     * set shadow to svg selected
     * @param event shadow
     */
    EditorComponent.prototype.onSetShadowOption = function (event) {
        this.winRef.nativeWindow.svgEditor.onSetShadowOption(event);
    };
    /**
     * set font to svg selected
     * @param font font family
     */
    EditorComponent.prototype.onFontFamilyChange = function (font) {
        this.winRef.nativeWindow.svgEditor.setFontFamily(font);
    };
    /**
     * align the svg text (left,middle,right)
     * @param align type
     */
    EditorComponent.prototype.onTextAlignChange = function (align) {
        this.winRef.nativeWindow.svgEditor.setTextAlign(align);
    };
    EditorComponent.prototype.checkMySelectedToSetColor = function (bkcolor, color, elems) {
        __WEBPACK_IMPORTED_MODULE_10__gauges_gauges_component__["a" /* GaugesManager */].initElementColor(bkcolor, color, elems);
        // for (let i = 0; i < elems.length; i++) {
        //     HtmlButtonComponent.initElementColor(bkcolor, color, elems[i]);
        //     GaugeProgressComponent.initElementColor(bkcolor, color, elems[i]);
        // }
    };
    /**
     * check and set the special gauge like ngx-dygraphs if added
     * @param ga
     */
    EditorComponent.prototype.checkGaugeAdded = function (ga) {
        var gauge = this.gaugesManager.initElementAdded(ga, this.resolver, this.viewContainerRef, false);
        if (gauge) {
            if (this.gaugesRef.indexOf(ga.id) === -1) {
                this.gaugesRef[ga.id] = { type: ga.type, ref: gauge };
            }
            this.setGaugeSettings(ga);
        }
    };
    //#endregion
    //#region Toolbar Top Events
    /**
     * save current project and launch the Test in new Windows 'lab'
     */
    EditorComponent.prototype.onStartCurrent = function () {
        this.onSaveProject();
        this.winRef.nativeWindow.open('lab', 'MyTest', 'width=800,height=640,menubar=0');
    };
    //#endregion
    //#region Project Events
    /**
     * Save Project
     * Save the current View
     */
    EditorComponent.prototype.onSaveProject = function () {
        if (this.currentView) {
            this.currentView.svgcontent = this.winRef.nativeWindow.svgEditor.getSvgString();
            this.saveView(this.currentView);
        }
    };
    //#endregion
    //#region View Events (Add/Rename/Delete/...)
    /**
     * Add View to Project with a default name View_[x]
     */
    EditorComponent.prototype.onAddView = function () {
        if (this.hmi.views) {
            var nn = "View_";
            var idx = 1;
            for (idx = 1; idx < this.hmi.views.length + 2; idx++) {
                var found = false;
                for (var i = 0; i < this.hmi.views.length; i++) {
                    if (this.hmi.views[i].name === nn + idx) {
                        found = true;
                        break;
                    }
                }
                if (!found)
                    break;
            }
            var v = new __WEBPACK_IMPORTED_MODULE_5__models_hmi__["s" /* View */]();
            if (this.hmi.views.length <= 0) {
                v.name = 'MainView';
            }
            else {
                v.name = nn + idx;
                v.profile.bkcolor = '#ffffffff';
            }
            v.id = 'v_' + __WEBPACK_IMPORTED_MODULE_12__helpers_utils__["b" /* Utils */].getShortGUID();
            this.hmi.views.push(v);
            this.onSelectView(v);
            this.saveView(this.currentView);
        }
    };
    /**
     * Delete the View from hmi.views list
     * @param view View to delete
     */
    EditorComponent.prototype.onDeleteView = function (view) {
        var _this = this;
        var msg = '';
        this.translateService.get('msg.view-remove', { value: view.name }).subscribe(function (txt) { msg = txt; });
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_13__gui_helpers_confirm_dialog_confirm_dialog_component__["a" /* ConfirmDialogComponent */], {
            minWidth: '350px',
            data: { msg: msg },
            position: { top: '80px' }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result && _this.hmi.views) {
                var toselect = null;
                for (var i = 0; i < _this.hmi.views.length; i++) {
                    if (_this.hmi.views[i].id === view.id) {
                        _this.hmi.views.splice(i, 1);
                        if (i > 0 && i < _this.hmi.views.length) {
                            toselect = _this.hmi.views[i];
                        }
                        break;
                    }
                }
                _this.currentView = null;
                if (toselect) {
                    _this.onSelectView(toselect);
                }
                else if (_this.hmi.views.length > 0) {
                    _this.onSelectView(_this.hmi.views[0]);
                }
                _this.removeView(view);
            }
        });
    };
    /**
     * Rename the View (only name)
     * @param view View to rename
     */
    EditorComponent.prototype.onRenameView = function (view) {
        var _this = this;
        var exist = this.hmi.views.filter(function (v) { return v.id !== view.id; }).map(function (v) { return v.name; });
        var dialogRef = this.dialog.open(DialogDocName, {
            minWidth: '250px',
            data: { name: view.name, exist: exist }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            view.name = result.name;
            _this.saveView(view);
        });
    };
    /**
     * Edit View property
     * @param view View to change property (height, width, background)
     */
    EditorComponent.prototype.onPropertyView = function (view) {
        var _this = this;
        var dialogRef = this.dialog.open(DialogDocProperty, {
            minWidth: '250px',
            data: { name: view.name, width: view.profile.width, height: view.profile.height, bkcolor: view.profile.bkcolor }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            view.profile.width = parseInt(result.width);
            view.profile.height = parseInt(result.height);
            view.profile.bkcolor = result.bkcolor;
            _this.winRef.nativeWindow.svgEditor.setDocProperty(view.name, view.profile.width, view.profile.height, view.profile.bkcolor);
            _this.onSelectView(view);
        });
    };
    /**
     * select the view, save current vieww before
     * @param view selected view to load resource
     */
    EditorComponent.prototype.onSelectView = function (view) {
        if (this.currentView) {
            this.currentView.svgcontent = this.winRef.nativeWindow.svgEditor.getSvgString();
            // this.hmi.views[this.currentView].svgcontent = this.winRef.nativeWindow.svgEditor.getSvgString();
        }
        else {
            this.setFillColor(this.colorFill);
        }
        if (this.currentView) {
            this.saveView(this.currentView);
        }
        this.currentView = view;
        localStorage.setItem("@frango.webeditor.currentview", this.currentView.name);
        this.loadView(this.currentView);
    };
    /**
     * check with the current view
     * @param view view to check
     */
    EditorComponent.prototype.isViewActive = function (view) {
        return (this.currentView && this.currentView.name === view.name);
    };
    /**
     * edit the layout property of project views
     */
    EditorComponent.prototype.onLayoutProperty = function () {
        var _this = this;
        var templayout = null;
        if (this.hmi.layout) {
            templayout = JSON.parse(JSON.stringify(this.hmi.layout));
        }
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_9__layout_property_layout_property_component__["b" /* LayoutPropertyComponent */], {
            // minWidth: '700px',
            // minHeight: '700px',
            panelClass: 'dialog-property',
            data: { layout: templayout, views: this.hmi.views },
            position: { top: '80px' }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.hmi.layout = JSON.parse(JSON.stringify(result.layout));
                _this.saveLayout(_this.hmi.layout);
            }
        });
    };
    //#endregion
    //#region Panels State
    /**
     * Load the left panels state copied in localstorage
     */
    EditorComponent.prototype.loadPanelState = function () {
        var ps = localStorage.getItem("@frango.webeditor.panelsState");
        this.panelsState.enabled = true;
        if (ps) {
            this.panelsState = JSON.parse(ps);
        }
    };
    /**
     * Save the panels state in localstorage (after every toggled)
     */
    EditorComponent.prototype.savePanelState = function () {
        if (this.panelsState.enabled) {
            localStorage.setItem("@frango.webeditor.panelsState", JSON.stringify(this.panelsState));
        }
    };
    //#endregion
    //#region Interactivity
    /**
     * to check from DOM and to control open close interaction panel
     * @param ele selected gauge element
     */
    EditorComponent.prototype.isInteractivtyEnabled = function (ele) {
        if (ele && ele.type) {
            return this.gaugesManager.isGauge(ele.type);
        }
        return false;
    };
    /**
     * callback to open edit gauge property form (from GaugeBase)
     * @param event
     */
    EditorComponent.prototype.onGaugeEdit = function (event) {
        var _this = this;
        var settings = this.gaugePanelComponent.settings;
        this.openEditGauge(settings, function (data) {
            _this.setGaugeSettings(data);
        });
    };
    /**
     * callback to open edit gauge property form (from selected element context menu)
     */
    EditorComponent.prototype.onGaugeEditEx = function () {
        var _this = this;
        setTimeout(function () {
            _this.gaugePanelComponent.onEdit();
        }, 500);
    };
    EditorComponent.prototype.isWithEvents = function (type) {
        return this.gaugesManager.isWithEvents(type);
    };
    EditorComponent.prototype.isWithActions = function (type) {
        return this.gaugesManager.isWithActions(type);
    };
    /**
     * edit the gauge/chart settings property, the settings are composed from gauge id... and property
     * in property will be the result values saved
     * @param settings
     * @param callback
     */
    EditorComponent.prototype.openEditGauge = function (settings, callback) {
        var _this = this;
        var tempsettings = JSON.parse(JSON.stringify(settings));
        var hmi = this.projectService.getHmi();
        var dlgType = __WEBPACK_IMPORTED_MODULE_10__gauges_gauges_component__["a" /* GaugesManager */].getEditDialogTypeToUse(settings.type);
        var eventsSupported = this.isWithEvents(settings.type);
        var actionsSupported = this.isWithActions(settings.type);
        var defaultValue = __WEBPACK_IMPORTED_MODULE_10__gauges_gauges_component__["a" /* GaugesManager */].getDefaultValue(settings.type);
        // settings.property = JSON.parse(settings.property);
        var dialogRef;
        if (dlgType === __WEBPACK_IMPORTED_MODULE_7__gauges_gauge_property_gauge_property_component__["b" /* GaugeDialogType */].Chart) {
            dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_8__gauges_chart_property_chart_property_component__["a" /* ChartPropertyComponent */], {
                minWidth: '700px',
                minHeight: '700px',
                panelClass: 'dialog-property',
                data: {
                    settings: tempsettings, devices: Object.values(this.projectService.getDevices()),
                    views: hmi.views, dlgType: dlgType, charts: this.projectService.getCharts()
                },
                position: { top: '80px' }
            });
        }
        else if (dlgType === __WEBPACK_IMPORTED_MODULE_7__gauges_gauge_property_gauge_property_component__["b" /* GaugeDialogType */].Gauge) {
            dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_14__gauges_bag_property_bag_property_component__["a" /* BagPropertyComponent */], {
                minWidth: '800px',
                minHeight: '780px',
                panelClass: 'dialog-property',
                data: {
                    settings: tempsettings, devices: Object.values(this.projectService.getDevices()), dlgType: dlgType
                },
                position: { top: '30px' }
            });
        }
        else if (dlgType === __WEBPACK_IMPORTED_MODULE_7__gauges_gauge_property_gauge_property_component__["b" /* GaugeDialogType */].Pipe) {
            dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_15__gauges_pipe_pipe_property_pipe_property_component__["a" /* PipePropertyComponent */], {
                minWidth: '700px',
                minHeight: '700px',
                panelClass: 'dialog-property',
                data: {
                    settings: tempsettings, devices: Object.values(this.projectService.getDevices()),
                    withEvents: eventsSupported, withActions: actionsSupported
                },
                position: { top: '80px' }
            });
        }
        else {
            dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_7__gauges_gauge_property_gauge_property_component__["c" /* GaugePropertyComponent */], {
                minWidth: '700px',
                minHeight: '700px',
                panelClass: 'dialog-property',
                data: {
                    settings: tempsettings, devices: Object.values(this.projectService.getDevices()),
                    views: hmi.views, dlgType: dlgType, withEvents: eventsSupported, withActions: actionsSupported, default: defaultValue
                },
                position: { top: '80px' }
            });
        }
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                callback(result.settings);
                _this.saveView(_this.currentView);
                var result_gauge = _this.gaugesManager.initInEditor(result.settings, _this.resolver, _this.viewContainerRef);
                if (dlgType === __WEBPACK_IMPORTED_MODULE_7__gauges_gauge_property_gauge_property_component__["b" /* GaugeDialogType */].Pipe && result_gauge && result_gauge.element && result_gauge.element.id !== result.settings.id) {
                    // by init a path we need to change the id
                    delete _this.currentView.items[result.settings.id];
                    result.settings.id = result_gauge.element.id;
                    callback(result.settings);
                    _this.saveView(_this.currentView);
                }
            }
        });
    };
    //#endregion
    EditorComponent.prototype.isWithShadow = function () {
        if (this.selectedElement) {
        }
        return false;
    };
    EditorComponent.prototype.fileNew = function () {
    };
    EditorComponent.prototype.checkValid = function (hmi) {
        if (!hmi.views) {
            hmi.views = [];
            return false;
        }
        return true;
    };
    EditorComponent.prototype.clearSelection = function () {
        this.winRef.nativeWindow.svgEditor.clearSelection();
    };
    EditorComponent.prototype.cloneElement = function () {
        this.winRef.nativeWindow.svgEditor.clickExtension("view_grid");
    };
    EditorComponent.prototype.flipSelected = function (fliptype) {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewChild */])('gaugepanel'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_11__gauges_gauge_base_gauge_base_component__["a" /* GaugeBaseComponent */])
    ], EditorComponent.prototype, "gaugePanelComponent", void 0);
    EditorComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            moduleId: module.i,
            template: __webpack_require__("../../../../../src/app/editor/editor.component.html"),
            styles: [__webpack_require__("../../../../../src/app/editor/editor.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__services_project_service__["a" /* ProjectService */],
            __WEBPACK_IMPORTED_MODULE_6__helpers_windowref__["a" /* WindowRef */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["j" /* MatDialog */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* ChangeDetectorRef */],
            __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_10__gauges_gauges_component__["a" /* GaugesManager */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewContainerRef */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* ComponentFactoryResolver */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["r" /* MatIconRegistry */], __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* DomSanitizer */]])
    ], EditorComponent);
    return EditorComponent;
}());

var DialogDocProperty = (function () {
    function DialogDocProperty(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.defaultColor = __WEBPACK_IMPORTED_MODULE_12__helpers_utils__["b" /* Utils */].defaultColor;
    }
    DialogDocProperty.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    DialogDocProperty = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'dialog-doc-property',
            template: __webpack_require__("../../../../../src/app/editor/docproperty.dialog.html"),
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["m" /* MatDialogRef */], Object])
    ], DialogDocProperty);
    return DialogDocProperty;
}());

var DialogDocName = (function () {
    function DialogDocName(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    DialogDocName.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    DialogDocName.prototype.isValid = function (name) {
        return (this.data.exist.find(function (n) { return n === name; })) ? false : true;
    };
    DialogDocName = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'dialog-doc-name',
            template: __webpack_require__("../../../../../src/app/editor/docname.dialog.html"),
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["m" /* MatDialogRef */], Object])
    ], DialogDocName);
    return DialogDocName;
}());

//#region Model Help
// export class PanelState {
//     width: Number = 640;
//     height: Number = 480;
//     bkcolor: String = '';
// }
//#endregion 


/***/ }),

/***/ "../../../../../src/app/editor/layout-property/layout-property.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n\r\n.layout-menu-item-icon {\r\n    /* position: absolute; */\r\n    font-size: 17px;\r\n    height: 18px;\r\n    width: 18px;\r\n    /* color: rgba(255,255,255,0.8); */\r\n    cursor:pointer;\r\n}\r\n.layout-menu-item-edit {\r\n    /* bottom: 0px; */\r\n    /* right: 2px; */\r\n}\r\n\r\n.layout-menu-item-delete {\r\n    /* top: 2px; */\r\n    /* right: 2px; */\r\n    /* font-size: 17px; */\r\n}\r\n\r\n.layout-menu-item-link {\r\n    /* min-width: 150px; */\r\n    /* color: rgba(0,0,0,0.3); */\r\n    display: block;\r\n    font-size: 12px;\r\n    white-space: nowrap;\r\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/editor/layout-property/layout-property.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"width: 100%;min-height: 650px;min-width: 950px;position: relative;padding-bottom: 40px\">\n    <h1 mat-dialog-title style=\"display:inline-block;padding-top: 14px; margin-bottom: 0px !important;\">{{'dlg.layout-title' | translate}}</h1>\n    <mat-icon (click)=\"onNoClick()\" style=\"float:right;cursor:pointer;color:gray;position: relative; top: 10px; right: 0px\">clear</mat-icon>\n    <mat-tab-group style=\"width: 100%;height: 100%\">\n        <mat-tab label=\"{{'dlg.layout-general' | translate}}\">\n            <div class=\"my-form-field\" style=\"display: inline-block;margin-top: 25px;\">\n                <span>{{'dlg.layout-lbl-sview' | translate}}</span>\n                <mat-select [(value)]=\"data.layout.start\" style=\"width: 400px\">\n                    <mat-option *ngFor=\"let view of data.views\" [value]=\"view.id\">\n                        {{ view.name }}\n                    </mat-option>\n                </mat-select>\n            </div>\n\n            <!-- <div style=\"max-height: 540px; overflow-y: auto; overflow-x: hidden; padding-top: 15px;\">\n                <div style=\"display: block;\">\n                    <div class=\"my-form-field\">\n                        <span>Name</span>\n                        <input [(ngModel)]=\"data.settings.name\" style=\"width: 220px\" type=\"text\">\n                    </div>\n                    <div class=\"toolbox\" *ngIf=\"isToolboxToShow()\">\n                        <button mat-icon-button (click)=\"onAddInput()\">\n                            <mat-icon>add_circle_outline</mat-icon>\n                        </button>\n                        <button mat-icon-button (click)=\"slideView = !slideView;onRangeViewToggle()\" *ngIf=\"isRangeToShow()\">\n                            <mat-icon class=\"header-icon\" *ngIf=\"slideView\">toll</mat-icon>\n                            <mat-icon class=\"header-icon\" *ngIf=\"!slideView\">input</mat-icon>\n                        </button>\n                        <button mat-icon-button (click)=\"withAlarm = !withAlarm;onAlarmToggle();\" *ngIf=\"isAlarmToShow()\">\n                            <mat-icon class=\"header-icon\" *ngIf=\"!withAlarm\">notifications</mat-icon>\n                            <mat-icon class=\"header-icon\" *ngIf=\"withAlarm\">notifications_off</mat-icon>\n                        </button>\n                    </div>\n                </div>\n                <div mat-dialog-content style=\"overflow: hidden; width:100%\">\n                    <flex-head [data]=\"data\" [property]=\"property\" #flexhead></flex-head>\n                </div>\n            </div> -->\n        </mat-tab>\n        <mat-tab label=\"{{'dlg.layout-navigation' | translate}}\">\n            <div style=\"display: inline-block;margin-top: 10px;width:65%; min-height: 500px; overflow-y: auto; height: 620px\">\n                <div>\n                    <button mat-icon-button>\n                        <mat-icon aria-label=\"Menu\">menu</mat-icon>\n                    </button>\n                    <div style=\"display: inline-block;padding-left: 140px\">\n                        <button mat-icon-button (click)=\"onAddMenuItem()\">\n                            <mat-icon aria-label=\"Add\">control_point</mat-icon>\n                        </button>\n                    </div>\n                </div>\n                <div class=\"sidenav-menu\" style=\"height: calc(100% - 50px);\" [ngClass]=\"'sidenav-menu-' + data.layout.navigation.type\">\n                    <mat-list dndDropzone [dndHorizontal]=\"layout.dndHorizontal\" dndEffectAllowed=\"copyMove\" (dndDrop)=\"onDrop($event, draggableListLeft)\"\n                        class=\"dndList\" style=\"padding-top: 10px; background-color: rgba(244,245,247, 1)\">\n\n                        <mat-list-item dndPlaceholderRef class=\"dndPlaceholder\">\n                        </mat-list-item>\n\n                        <mat-list-item *ngFor=\"let item of draggableListLeft; let i = index\" [dndDraggable]=\"item\"\n                            [dndEffectAllowed]=\"'move'\" (dndStart)=\"onDragStart($event)\" (dndMoved)=\"onDragged(item, draggableListLeft, 'move')\"\n                            (dndCanceled)=\"onDragged(item, draggableListLeft, 'none')\" (dndEnd)=\"onDragEnd($event)\"\n                            [ngClass]=\"'menu-item-' + data.layout.navigation.type\">\n                            <button type=\"button\" mat-button class=\"sidenav-btn\" [ngSwitch]=\"data.layout.navigation.type\" style=\"cursor: move;\">\n                                <!-- <mat-icon *ngIf=\"mode.value === navMode.icon || mode.value === navMode.block\">{{item.icon}}</mat-icon> -->\n                                <div *ngSwitchCase=\"'icon'\" class=\"menu-item-content-icon\">\n                                    <mat-icon>{{item.icon}}</mat-icon>\n                                </div>\n                                <div *ngSwitchCase=\"'text'\" class=\"menu-item-content-text\">\n                                    <span>{{item.text}}</span>\n                                </div>\n                                <div *ngSwitchCase=\"'block'\" class=\"menu-item-content-block\">\n                                    <mat-icon style=\"display: block;\">{{item.icon}}</mat-icon>\n                                    <span>{{item.text}}</span>\n                                </div>\n                                <div *ngSwitchCase=\"'inline'\" class=\"menu-item-content-inline\">\n                                    <mat-icon style=\"display: inline-block\">{{item.icon}}</mat-icon>\n                                    <span style=\"display: inline-block\">{{item.text}}</span>\n                                </div>\n                            </button>\n                            <div style=\"padding-left:15px\">\n                                <div style=\"display: block;width: 50px;\">\n                                    <mat-icon (click)=\"onAddMenuItem(item)\" class=\"layout-menu-item-icon layout-menu-item-edit\">edit</mat-icon>\n                                    <mat-icon (click)=\"onRemoveMenuItem(i, item)\" class=\"layout-menu-item-icon layout-menu-item-delete\">clear</mat-icon>\n                                </div>\n                                <div class=\"layout-menu-item-link\">{{getViewName(item)}}</div>\n                            </div>\n                        </mat-list-item>\n                    </mat-list>\n                </div>\n            </div>\n            <div style=\"display: inline-block;margin-top: 25px;margin-left: 10px;top: 0px;position: absolute;\">\n                <div class=\"my-form-field\" style=\"display: block;\">\n                    <span>{{'dlg.layout-lbl-smode' | translate}}</span>\n                    <mat-select [(value)]=\"data.layout.navigation.mode\" style=\"width: 300px\">\n                        <mat-option *ngFor=\"let mode of navMode | enumToArray\" [value]=\"mode.key\">\n                            {{ mode.value }}\n                        </mat-option>\n                    </mat-select>\n                </div>\n                <div class=\"my-form-field\" style=\"display: block; margin-top: 10px\">\n                    <span>{{'dlg.layout-lbl-type' | translate}}</span>\n                    <mat-select [(value)]=\"data.layout.navigation.type\" style=\"width: 300px\">\n                        <mat-option *ngFor=\"let type of navType | enumToArray\" [value]=\"type.key\">\n                            {{ type.value }}\n                        </mat-option>\n                    </mat-select>\n                </div>\n            </div>\n\n            <!-- <div style=\"max-height: 540px; overflow-y: auto; overflow-x: hidden; padding-top: 15px;\">\n                <div style=\"display: block;\">\n                    <div class=\"toolbox\">\n                        <button mat-icon-button (click)=\"onAddEvent()\">\n                            <mat-icon>add_circle_outline</mat-icon>\n                        </button>\n                    </div>\n                </div>\n                <div mat-dialog-content style=\"overflow: hidden; width:100%\">\n                    <flex-event [property]=\"property\" [views]=\"views\" #flexevent *ngIf=\"eventsSupported\" style=\"padding-bottom: 5px\"></flex-event>\n                </div>\n            </div> -->\n        </mat-tab>\n        <mat-tab label=\"{{'dlg.layout-header' | translate}}\">\n            <!-- <div style=\"max-height: 540px; overflow-y: auto; overflow-x: hidden; padding-top: 15px;\">\n                        <div style=\"display: block;\">\n                            <div class=\"toolbox\">\n                                <button mat-icon-button (click)=\"onAddEvent()\">\n                                    <mat-icon>add_circle_outline</mat-icon>\n                                </button>\n                            </div>\n                        </div>\n                        <div mat-dialog-content style=\"overflow: hidden; width:100%\">\n                            <flex-event [property]=\"property\" [views]=\"views\" #flexevent *ngIf=\"eventsSupported\" style=\"padding-bottom: 5px\"></flex-event>\n                        </div>\n                    </div> -->\n        </mat-tab>\n    </mat-tab-group>\n    <div mat-dialog-actions style=\"display: inline-block; position: absolute; bottom: 10px; right: 10px\">\n        <button mat-raised-button [mat-dialog-close]=\"\">{{'dlg.cancel' | translate}}</button>\n        <button mat-raised-button color=\"primary\" (click)=\"onOkClick\" [mat-dialog-close]=\"data\" cdkFocusInitial>{{'dlg.ok' | translate}}</button>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/editor/layout-property/layout-property.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return LayoutPropertyComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DialogMenuItem; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__("../../../../@ngx-translate/core/@ngx-translate/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__gui_helpers_sel_options_sel_options_component__ = __webpack_require__("../../../../../src/app/gui-helpers/sel-options/sel-options.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_hmi__ = __webpack_require__("../../../../../src/app/_models/hmi.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__helpers_define__ = __webpack_require__("../../../../../src/app/_helpers/define.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__models_user__ = __webpack_require__("../../../../../src/app/_models/user.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};







var LayoutPropertyComponent = (function () {
    function LayoutPropertyComponent(data, dialog, translateService) {
        this.data = data;
        this.dialog = dialog;
        this.translateService = translateService;
        this.draggableListLeft = [];
        this.horizontalLayoutActive = false;
        this.verticalLayout = {
            container: "row",
            list: "column",
            dndHorizontal: false
        };
        this.horizontalLayout = {
            container: "row",
            list: "row",
            dndHorizontal: true
        };
        if (!data.layout) {
            data.layout = new __WEBPACK_IMPORTED_MODULE_4__models_hmi__["m" /* LayoutSettings */]();
        }
        this.startView = data.layout.start;
        this.sideMode = data.layout.navigation.mode;
        if (!data.layout.navigation.items) {
            data.layout.navigation.items = [];
        }
        this.draggableListLeft = data.layout.navigation.items;
        this.setHorizontalLayout(this.horizontalLayoutActive);
    }
    LayoutPropertyComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.navMode = __WEBPACK_IMPORTED_MODULE_4__models_hmi__["p" /* NaviModeType */];
        this.navType = __WEBPACK_IMPORTED_MODULE_4__models_hmi__["o" /* NaviItemType */];
        Object.keys(this.navMode).forEach(function (key) {
            _this.translateService.get(_this.navMode[key]).subscribe(function (txt) { _this.navMode[key] = txt; });
        });
        Object.keys(this.navType).forEach(function (key) {
            _this.translateService.get(_this.navType[key]).subscribe(function (txt) { _this.navType[key] = txt; });
        });
    };
    LayoutPropertyComponent.prototype.onAddMenuItem = function (item) {
        var _this = this;
        var eitem = new __WEBPACK_IMPORTED_MODULE_4__models_hmi__["n" /* NaviItem */]();
        if (item) {
            eitem = JSON.parse(JSON.stringify(item));
        }
        var views = JSON.parse(JSON.stringify(this.data.views));
        views.unshift({ id: '', name: '' });
        var dialogRef = this.dialog.open(DialogMenuItem, {
            minWidth: '350px',
            data: { item: eitem, views: views, permission: eitem.permission },
            position: { top: '90px' }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                if (item) {
                    item.icon = result.item.icon;
                    item.text = result.item.text;
                    item.view = result.item.view;
                    item.link = result.item.link;
                    item.permission = result.permission;
                    if (item.view) {
                        item.link = '';
                    }
                }
                else {
                    var nitem = new __WEBPACK_IMPORTED_MODULE_4__models_hmi__["n" /* NaviItem */]();
                    nitem.icon = result.item.icon;
                    nitem.text = result.item.text;
                    nitem.view = result.item.view;
                    nitem.link = result.item.link;
                    nitem.permission = result.permission;
                    if (nitem.view) {
                        nitem.link = '';
                    }
                    _this.draggableListLeft.push(nitem);
                }
            }
        });
        // this.winRef.nativeWindow.svgEditor.showDocProperties();
    };
    LayoutPropertyComponent.prototype.onRemoveMenuItem = function (index, item) {
        this.draggableListLeft.splice(index, 1);
    };
    LayoutPropertyComponent.prototype.onDragStart = function (event) {
        this.currentDraggableEvent = event;
    };
    LayoutPropertyComponent.prototype.setHorizontalLayout = function (horizontalLayoutActive) {
        this.layout = (horizontalLayoutActive) ? this.horizontalLayout : this.verticalLayout;
    };
    LayoutPropertyComponent.prototype.onDragged = function (item, list, effect) {
        if (effect === "move") {
            var index = list.indexOf(item);
            list.splice(index, 1);
        }
    };
    LayoutPropertyComponent.prototype.onDragEnd = function (event) {
        this.currentDraggableEvent = event;
    };
    LayoutPropertyComponent.prototype.onDrop = function (event, list) {
        if (list && (event.dropEffect === "copy" || event.dropEffect === "move")) {
            var index = event.index;
            if (typeof index === "undefined") {
                index = list.length;
            }
            list.splice(index, 0, event.data);
        }
    };
    LayoutPropertyComponent.prototype.onOkClick = function () {
        var _this = this;
        this.data.layout.navigation.items = [];
        this.draggableListLeft.forEach(function (item) {
            var nitem = new __WEBPACK_IMPORTED_MODULE_4__models_hmi__["n" /* NaviItem */]();
            nitem.icon = item.icon;
            nitem.text = item.text;
            nitem.view = item.view;
            nitem.link = item.link;
            _this.data.layout.navigation.items.push(nitem);
        });
    };
    LayoutPropertyComponent.prototype.getViewName = function (vid) {
        if (vid.view) {
            var view = this.data.views.find(function (x) { return x.id === vid.view; });
            if (view) {
                return view.name;
            }
        }
        else if (vid.link) {
            return vid.link;
        }
        else {
            return '';
        }
    };
    LayoutPropertyComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-layout-property',
            template: __webpack_require__("../../../../../src/app/editor/layout-property/layout-property.component.html"),
            styles: [__webpack_require__("../../../../../src/app/editor/layout-property/layout-property.component.css")]
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [Object, __WEBPACK_IMPORTED_MODULE_1__angular_material__["j" /* MatDialog */],
            __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */]])
    ], LayoutPropertyComponent);
    return LayoutPropertyComponent;
}());

var DialogMenuItem = (function () {
    function DialogMenuItem(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        // defaultColor = Utils.defaultColor;
        this.selectedGroups = [];
        this.groups = __WEBPACK_IMPORTED_MODULE_6__models_user__["b" /* UserGroups */].Groups;
        this.icons = __WEBPACK_IMPORTED_MODULE_5__helpers_define__["a" /* Define */].materialIcons;
        this.selectedGroups = __WEBPACK_IMPORTED_MODULE_6__models_user__["b" /* UserGroups */].ValueToGroups(this.data.permission);
    }
    DialogMenuItem.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    DialogMenuItem.prototype.onOkClick = function () {
        this.data.permission = __WEBPACK_IMPORTED_MODULE_6__models_user__["b" /* UserGroups */].GroupsToValue(this.seloptions.selected);
        this.dialogRef.close(this.data);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_3__gui_helpers_sel_options_sel_options_component__["a" /* SelOptionsComponent */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__gui_helpers_sel_options_sel_options_component__["a" /* SelOptionsComponent */])
    ], DialogMenuItem.prototype, "seloptions", void 0);
    DialogMenuItem = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'dialog-menuitem',
            template: __webpack_require__("../../../../../src/app/editor/layout-property/menuitem.dialog.html"),
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["m" /* MatDialogRef */], Object])
    ], DialogMenuItem);
    return DialogMenuItem;
}());



/***/ }),

/***/ "../../../../../src/app/editor/layout-property/menuitem.dialog.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <h1 mat-dialog-title style=\"display:inline-block\" mat-dialog-draggable>{{'dlg.menuitem-title' | translate}}</h1>\r\n    <div mat-dialog-content>\r\n        <div class=\"my-form-field\" style=\"display: block;margin-bottom: 10px;\">\r\n            <span>Icon</span>\r\n            <mat-select [(value)]=\"data.item.icon\" style=\"width: 60px; height: 30px\" #iconsel>\r\n                <mat-select-trigger>\r\n                    <mat-icon>{{iconsel.value}}</mat-icon>\r\n                </mat-select-trigger>\r\n                <mat-option *ngFor=\"let icon of icons\" [value]=\"icon\">\r\n                    <mat-icon class=\"\">{{ icon }}</mat-icon>\r\n                </mat-option>\r\n            </mat-select>\r\n        </div>\r\n        <div class=\"my-form-field\" style=\"display: block;margin-bottom: 10px;\">\r\n            <span>{{'dlg.menuitem-text' | translate}}</span>\r\n            <input [(ngModel)]=\"data.item.text\" type=\"text\" style=\"width:100%\">\r\n        </div>\r\n        <div class=\"my-form-field\" style=\"display: block;margin-bottom: 10px;\">\r\n            <span>{{'dlg.menuitem-view' | translate}}</span>\r\n            <mat-select [(value)]=\"data.item.view\" style=\"width: 300px\">\r\n                <mat-option *ngFor=\"let view of data.views\" [value]=\"view.id\">\r\n                    {{ view.name }}\r\n                </mat-option>\r\n            </mat-select>\r\n        </div>\r\n        <div class=\"my-form-field\" style=\"display: block;margin-bottom: 10px;\">\r\n            <span>{{'dlg.menuitem-link' | translate}}</span>\r\n            <input [(ngModel)]=\"data.item.link\" type=\"text\" style=\"width:100%\" [readonly]=\"data.item.view\">\r\n        </div>    \r\n        <div class=\"my-form-field\" style=\"display: block;margin-bottom: 10px;\">\r\n            <span>{{'dlg.useraccess-groups' | translate}}</span>\r\n            <sel-options #seloptions [selected]=\"selectedGroups\" [options]=\"groups\"></sel-options>\r\n        </div>   \r\n    </div>\r\n    <div mat-dialog-actions style=\"float:right; margin-bottom:0px;padding-bottom:0px\">\r\n        <button mat-raised-button (click)=\"onNoClick()\">{{'dlg.cancel' | translate}}</button>\r\n        <button mat-raised-button color=\"primary\" (click)=\"onOkClick()\" cdkFocusInitial>{{'dlg.ok' | translate}}</button>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/fuxa-view/fuxa-view.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".view-container {\n    display: table;\n}\n\n.fab-card {\n    position: absolute;\n    width: 1300px;\n    height: 800px;\n    /* background-color:black; */\n    /* box-shadow: 0 2px 5px 0 rgba(0,0,0,.26); */\n    box-shadow: 0px 1px 4px 1px #888888;\n}\n\n.card-close {\n    position: absolute;\n    top: 0px;\n    right: 0px;\n    height: 22px;\n    width: 100%;\n    color: rgba(0,0,0,0.7);\n    background-color: transparent;\n    font-size: 12px;\n    cursor: move !important;\n}\n\n.card-close i {\n    float: right;\n}\n\n.dialog-modal {\n    /* display: none; */\n    position: fixed; /* Stay in place */\n    z-index: 1; /* Sit on top */\n    left: 0;\n    top: 0;\n    width: 100%; /* Full width */\n    height: 100%; /* Full height */\n    overflow: auto; /* Enable scroll if needed */\n    background-color: rgb(0,0,0); /* Fallback color */\n    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */\n}\n  \n  /* Modal Content/Box */\n.dialog-modal-content {\n    /* background-color: #fefefe; */\n    margin: 15% auto; /*15% from the top and centered */\n    /* padding: 20px; */\n    border: 1px solid #888;\n    width: 80%; /* Could be more or less, depending on screen size */\n}\n\n.dialog-modal-close {\n    position: relative;\n    top: 0px;\n    right: 0px;\n    height: 22px;\n    width: 100%;\n    color: rgba(0,0,0,0.7);\n    background-color: transparent;\n    font-size: 12px;\n    cursor: move !important;\n}\n\n.dialog-modal-close i {\n    float: right;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/fuxa-view/fuxa-view.component.html":
/***/ (function(module, exports) {

module.exports = "<div #dataContainer class=\"view-container\">\n</div>\n<div class=\"fab-card\" draggable [draggableHeight]=\"22\" *ngFor=\"let card of cards; let i = index\" [style.top]=\"card.y +'px'\"\n    [style.left]=\"card.x + 'px'\" [style.width]=\"card.width +'px'\" [style.height]=\"getCardHeight(card.height) + 'px'\">\n    <a (click)=\"onCloseCard(card);\" class=\"card-close\">\n        <i class=\"material-icons\" style=\"font-size: 22px; cursor: pointer;\">close</i>\n    </a>\n    <app-fuxa-view [view]=\"card.view\" [hmi]=\"hmi\" [gaugesManager]=\"gaugesManager\" [parentcards]=\"cards\"></app-fuxa-view>\n</div>\n<div *ngIf=\"dialog\" class=\"dialog-modal\">\n    <div [style.width]=\"dialog.width +'px'\" [style.height]=\"dialog.height + 'px'\" class=\"dialog-modal-content\" [style.background-color]=\"dialog.bkcolor\">\n        <a (click)=\"onCloseDialog();\" class=\"dialog-modal-close\">\n            <i class=\"material-icons\" style=\"font-size: 22px; cursor: pointer;\">close</i>\n        </a>\n        <app-fuxa-view [view]=\"dialog.view\" [hmi]=\"hmi\" [gaugesManager]=\"gaugesManager\" ></app-fuxa-view>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/fuxa-view/fuxa-view.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FuxaViewComponent; });
/* unused harmony export CardModel */
/* unused harmony export DialogModalModel */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_hmi__ = __webpack_require__("../../../../../src/app/_models/hmi.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__gauges_gauges_component__ = __webpack_require__("../../../../../src/app/gauges/gauges.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_util__ = __webpack_require__("../../../../util/util.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_util___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_util__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FuxaViewComponent = (function () {
    function FuxaViewComponent(el, viewContainerRef, resolver) {
        this.el = el;
        this.viewContainerRef = viewContainerRef;
        this.resolver = resolver;
        this.cards = [];
        this.mapGaugeStatus = {};
    }
    FuxaViewComponent.prototype.ngOnInit = function () {
        try {
        }
        catch (err) {
            console.log(err);
        }
    };
    FuxaViewComponent.prototype.ngAfterViewInit = function () {
        this.loadHmi(this.view);
        try {
            this.gaugesManager.emitBindedSignals(this.id);
        }
        catch (e) {
        }
    };
    FuxaViewComponent.prototype.ngOnDestroy = function () {
        this.gaugesManager.unbindGauge(this.id);
        this.clearGaugeStatus();
        try {
            if (this.subscriptionOnChange) {
                this.subscriptionOnChange.unsubscribe();
            }
        }
        catch (e) {
        }
    };
    FuxaViewComponent.prototype.clearGaugeStatus = function () {
        Object.values(this.mapGaugeStatus).forEach(function (gs) {
            try {
                if (gs.actionRef && gs.actionRef.timer) {
                    clearTimeout(gs.actionRef.timer);
                }
            }
            catch (e) {
            }
        });
        this.mapGaugeStatus = {};
    };
    /**
     * load the svg content to show in browser, clear all binded to this view
     * @param view
     */
    FuxaViewComponent.prototype.loadHmi = function (view) {
        if (this.id) {
            this.gaugesManager.unbindGauge(this.id);
            this.clearGaugeStatus();
        }
        if (view) {
            this.id = view.id;
            this.view = view;
            this.dataContainer.nativeElement.innerHTML = view.svgcontent.replace('<title>Layer 1</title>', '');
            ;
            if (view.profile.bkcolor) {
                this.dataContainer.nativeElement.style.backgroundColor = view.profile.bkcolor;
            }
        }
        this.loadWatch(this.view);
    };
    /**
     * load all gauge settings, bind gauge with signals, bind gauge event
     * @param view
     */
    FuxaViewComponent.prototype.loadWatch = function (view) {
        var _this = this;
        if (view && view.items) {
            // this.gaugesManager.initGaugesMap();
            for (var key in view.items) {
                var gauge = this.gaugesManager.initElementAdded(view.items[key], this.resolver, this.viewContainerRef, true);
                this.gaugesManager.bindGauge(gauge, this.id, view.items[key], function (gatobindclick) {
                    _this.onBindClick(gatobindclick);
                }, function (gatobindhtmlevent) {
                    _this.onBindHtmlEvent(gatobindhtmlevent);
                });
            }
            var self_1 = this;
            this.subscriptionOnChange = this.gaugesManager.onchange.subscribe(function (sig) {
                if (!Object(__WEBPACK_IMPORTED_MODULE_3_util__["isUndefined"])(sig.value)) {
                    try {
                        // take all gauges settings binded to the signal id in this view
                        var gas = _this.gaugesManager.getGaugeSettings(_this.id, sig.id);
                        if (gas) {
                            for (var i = 0; i < gas.length; i++) {
                                var gaugeSetting = gas[i];
                                var gaugeStatus = _this.getGaugeStatus(gaugeSetting);
                                if (_this.checkStatusVaue(gaugeStatus, sig)) {
                                    var svgeles = _this.getSvgElements(gaugeSetting.id);
                                    for (var y = 0; y < svgeles.length; y++) {
                                        _this.gaugesManager.processValue(gaugeSetting, svgeles[y], sig, gaugeStatus);
                                    }
                                }
                            }
                        }
                    }
                    catch (err) {
                    }
                }
            });
        }
    };
    /**
     * return the mapped gauge status, if it doesn't exist add it
     * @param gaugeId
     */
    FuxaViewComponent.prototype.getGaugeStatus = function (ga) {
        if (this.mapGaugeStatus[ga.id]) {
            return this.mapGaugeStatus[ga.id];
        }
        else {
            this.mapGaugeStatus[ga.id] = this.gaugesManager.createGaugeStatus(ga);
            return this.mapGaugeStatus[ga.id];
        }
    };
    /**
     * check the change of variable value in gauge status
     * @param gaugeStatus
     * @param signal
     */
    FuxaViewComponent.prototype.checkStatusVaue = function (gaugeStatus, signal) {
        var result = true;
        if (gaugeStatus.onlyChange && gaugeStatus.variablesValue[signal.id] === signal.value) {
            result = false;
        }
        gaugeStatus.variablesValue[signal.id] = signal.value;
        return result;
    };
    FuxaViewComponent.prototype.onBindClick = function (ga) {
        var self = this;
        var svgele = this.getSvgElement(ga.id);
        if (svgele) {
            svgele.click(function (ev) {
                var event = self.gaugesManager.getBindClick(ga);
                if (event && event.length > 0 && event[0].action && event[0].actparam) {
                    var actindex = Object.keys(__WEBPACK_IMPORTED_MODULE_1__models_hmi__["e" /* GaugeEventActionType */]).indexOf(event[0].action);
                    if (Object.values(__WEBPACK_IMPORTED_MODULE_1__models_hmi__["e" /* GaugeEventActionType */]).indexOf(__WEBPACK_IMPORTED_MODULE_1__models_hmi__["e" /* GaugeEventActionType */].onpage) === actindex) {
                        self.loadPage(ev, event[0].actparam);
                    }
                    else if (Object.values(__WEBPACK_IMPORTED_MODULE_1__models_hmi__["e" /* GaugeEventActionType */]).indexOf(__WEBPACK_IMPORTED_MODULE_1__models_hmi__["e" /* GaugeEventActionType */].onwindow) === actindex) {
                        self.onOpenCard(ga.id, ev, event[0].actparam);
                    }
                    else if (Object.values(__WEBPACK_IMPORTED_MODULE_1__models_hmi__["e" /* GaugeEventActionType */]).indexOf(__WEBPACK_IMPORTED_MODULE_1__models_hmi__["e" /* GaugeEventActionType */].ondialog) === actindex) {
                        self.openDialog(ev, event[0].actparam);
                    }
                    else if (Object.values(__WEBPACK_IMPORTED_MODULE_1__models_hmi__["e" /* GaugeEventActionType */]).indexOf(__WEBPACK_IMPORTED_MODULE_1__models_hmi__["e" /* GaugeEventActionType */].onSetValue) === actindex) {
                        self.onSetValue(ga, event[0].actparam);
                    }
                    // self.createComponent(event[0].name, ev.x, ev.y);
                }
            });
        }
    };
    FuxaViewComponent.prototype.onBindHtmlEvent = function (htmlevent) {
        var self = this;
        // let htmlevent = this.getHtmlElement(ga.id);
        if (htmlevent.type === 'key-enter') {
            htmlevent.dom.onkeypress = function (ev) {
                if (ev.keyCode === 13) {
                    console.log('click sig ' + htmlevent.dom.id + ' ' + htmlevent.dom.value);
                    htmlevent.dbg = 'key pressed ' + htmlevent.dom.id + ' ' + htmlevent.dom.value;
                    htmlevent.id = htmlevent.dom.id;
                    htmlevent.value = htmlevent.dom.value;
                    self.gaugesManager.putEvent(htmlevent);
                }
            };
        }
        else if (htmlevent.type === 'change') {
            htmlevent.dom.onchange = function (ev) {
                console.log('change sig ' + htmlevent.dom.id + ' ' + htmlevent.dom.value);
                htmlevent.dbg = 'key pressed ' + htmlevent.dom.id + ' ' + htmlevent.dom.value;
                htmlevent.id = htmlevent.dom.id;
                htmlevent.value = htmlevent.dom.value;
                self.gaugesManager.putEvent(htmlevent);
            };
        }
    };
    FuxaViewComponent.prototype.getView = function (viewref) {
        var view;
        for (var i = 0; this.hmi.views.length; i++) {
            if (this.hmi.views[i] && this.hmi.views[i].id === viewref) {
                view = this.hmi.views[i];
                break;
            }
        }
        return view;
    };
    FuxaViewComponent.prototype.getSvgElements = function (svgid) {
        var ele = document.getElementsByTagName('svg');
        var result = [];
        for (var i = 0; i < ele.length; i++) {
            var svgItems = ele[i].getElementById(svgid);
            if (svgItems) {
                result.push(SVG.adopt(svgItems));
            }
        }
        return result;
    };
    FuxaViewComponent.prototype.getSvgElement = function (svgid) {
        var ele = document.getElementsByTagName('svg');
        for (var i = 0; i < ele.length; i++) {
            var svgItems = ele[i].getElementById(svgid);
            if (svgItems) {
                return SVG.adopt(svgItems);
            }
        }
    };
    FuxaViewComponent.prototype.loadPage = function (event, viewref) {
        var view = this.getView(viewref);
        if (view) {
            this.loadHmi(view);
        }
    };
    FuxaViewComponent.prototype.openDialog = function (event, viewref) {
        var view = this.getView(viewref);
        if (!view) {
            return;
        }
        this.dialog = new DialogModalModel(viewref);
        this.dialog.width = view.profile.width;
        this.dialog.height = view.profile.height + 26;
        this.dialog.view = view;
        this.dialog.bkcolor = 'trasparent';
        if (view.profile.bkcolor) {
            this.dialog.bkcolor = view.profile.bkcolor;
        }
    };
    FuxaViewComponent.prototype.onOpenCard = function (id, event, viewref) {
        var view = this.getView(viewref);
        if (!view) {
            return;
        }
        // check existing card
        var card = null;
        this.cards.forEach(function (c) {
            if (c.id === id) {
                card = c;
            }
        });
        if (card) {
            return;
        }
        card = new CardModel(id);
        card.x = event.clientX;
        card.y = event.clientY;
        card.width = view.profile.width;
        card.height = view.profile.height;
        card.view = view;
        if (this.parentcards) {
            this.parentcards.push(card);
        }
        else {
            this.cards.push(card);
        }
    };
    FuxaViewComponent.prototype.onCloseCard = function (card) {
        this.cards.splice(this.cards.indexOf(card), 1);
    };
    FuxaViewComponent.prototype.onCloseDialog = function () {
        delete this.dialog;
    };
    FuxaViewComponent.prototype.onSetValue = function (ga, paramValue) {
        if (ga.property && ga.property.variableId) {
            this.gaugesManager.putSignalValue(ga.property.variableId, paramValue);
        }
    };
    FuxaViewComponent.prototype.getCardHeight = function (height) {
        return parseInt(height) + 4;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", String)
    ], FuxaViewComponent.prototype, "id", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__models_hmi__["s" /* View */])
    ], FuxaViewComponent.prototype, "view", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__models_hmi__["l" /* Hmi */])
    ], FuxaViewComponent.prototype, "hmi", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__gauges_gauges_component__["a" /* GaugesManager */])
    ], FuxaViewComponent.prototype, "gaugesManager", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Array)
    ], FuxaViewComponent.prototype, "parentcards", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewChild */])('dataContainer'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
    ], FuxaViewComponent.prototype, "dataContainer", void 0);
    FuxaViewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-fuxa-view',
            template: __webpack_require__("../../../../../src/app/fuxa-view/fuxa-view.component.html"),
            styles: [__webpack_require__("../../../../../src/app/fuxa-view/fuxa-view.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewContainerRef */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* ComponentFactoryResolver */]])
    ], FuxaViewComponent);
    return FuxaViewComponent;
}());

var CardModel = (function () {
    function CardModel(id) {
        this.id = id;
    }
    return CardModel;
}());

var DialogModalModel = (function () {
    function DialogModalModel(id) {
        this.id = id;
    }
    return DialogModalModel;
}());



/***/ }),

/***/ "../../../../../src/app/gauges/bag-property/bag-property.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n.slider {\r\n    display:inline-block; \r\n    width: 100px;\r\n}\r\n\r\n.gauge {\r\n    display: inline-block;\r\n    position: absolute;\r\n    top: 0px;\r\n    width: 360px;\r\n    height: 350px;\r\n    margin: 0 auto;\r\n    padding-top: 30px;\r\n    padding-left: 70px;\r\n}\r\n\r\n.gauge-select {\r\n    width: 280px; \r\n    text-align: center;\r\n}\r\n\r\n.gauge-view {\r\n    border: 1px solid rgba(0, 0, 0, 0.1);\r\n    width: 280px; \r\n    height: 220px;\r\n    margin-top: -5px;\r\n    padding-top: 30px;\r\n}\r\n\r\n.btn-gauge {\r\n    z-index: 99;\r\n    display: inline-block;\r\n    width: 50px;\r\n    height:38px;\r\n    border: 1px solid rgba(0, 0, 0, 0.1);\r\n}\r\n\r\n.btn-gauge-mat {\r\n    background: url('/assets/images/gauge-mat.png') no-repeat center center;\r\n}\r\n\r\n.btn-gauge-donut {\r\n    background: url('/assets/images/gauge-donut.png') no-repeat center center;\r\n} \r\n\r\n.btn-gauge-zone {\r\n    background: url('/assets/images/gauge-zone.png') no-repeat center center;\r\n}\r\n\r\n.toolbox {\r\n    /* display: inline-block; */\r\n    /* width: 460px; */\r\n    position: absolute;\r\n    bottom: 0px;\r\n    left: 0px;\r\n    width: 100%;\r\n    height: 270px;\r\n}\r\n\r\n.toolbox-left {\r\n    display: inline-block;\r\n    width: 460px;\r\n    padding-top: 20px;\r\n}\r\n\r\n.toolbox-right {\r\n    width: 300px;\r\n    position: absolute;\r\n    top: 0px;\r\n    right: 0px;\r\n    height: 270px;\r\n}\r\n\r\n.toolbox-det {\r\n    display: inline-block;\r\n    width: 312px;\r\n    height: 300px;\r\n    position: absolute;\r\n    top: 15px;\r\n    right: 0px;\r\n}\r\n\r\n.slider-field span {\r\n    padding-left: 2px;\r\n    text-overflow: clip;\r\n    max-width: 125px;\r\n    white-space: nowrap;\r\n    overflow: hidden;\r\n}\r\n\r\n.slider-field mat-slider {\r\n    background-color: #f1f3f4;\r\n    height: 30px;\r\n}\r\n\r\n.field-row {\r\n    display: block;\r\n    margin-bottom: 5px;\r\n}\r\n\r\n.color-field input {\r\n    padding: 0 !important;\r\n    height: 29px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/gauges/bag-property/bag-property.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"background-color: white; width: 760px;height: 800px; position: relative\">\n    <mat-icon (click)=\"onNoClick()\" style=\"float:right;cursor:pointer;color:gray;position: relative; top: 10px; right: 0px\">clear</mat-icon>\n    <div style=\"display: block; width: 660px;padding-top: 30px\">\n        <div style=\"display: block;\">\n            <div class=\"my-form-field\">\n                <span>{{'gauges.property-name' | translate}}</span>\n                <input [(ngModel)]=\"data.settings.name\" style=\"width: 220px\" type=\"text\">\n            </div>\n            <div class=\"my-form-field\" style=\"vertical-align: bottom; margin-left: 13px;\">\n                <span>{{'gauges.property-permission' | translate}}</span>\n                <div style=\"width:80px;height:30px;background-color:#f1f3f4;text-align:center;cursor:pointer;\" (click)=\"onEditPermission()\">\n                    <mat-icon class=\"header-icon\" style=\"line-height: 30px;\" *ngIf=\"!property || !property.permission\">lock_open</mat-icon>\n                    <mat-icon class=\"header-icon\" style=\"line-height: 30px;\" *ngIf=\"property && property.permission\">lock</mat-icon>\n                </div>\n            </div>\n        </div>\n        <div mat-dialog-content style=\"overflow: hidden; width:100%\">\n            <flex-head [data]=\"data\" [property]=\"property\" #flexhead></flex-head>\n        </div>\n    </div>\n    <div style=\"width: 760px; height: 620px; position: relative\">\n        <div class=\"gauge\">\n            <div class=\"gauge-select\">\n                <div (click)=\"onGaugeChange(gaugeTypeEnum.Gauge)\" class=\"btn-gauge btn-gauge-mat\" [ngStyle]=\"{'border-bottom-color': gaugeType == gaugeTypeEnum.Gauge ? 'white' : ''}\"></div>\n                <div (click)=\"onGaugeChange(gaugeTypeEnum.Donut)\" class=\"btn-gauge btn-gauge-donut\" [ngStyle]=\"{'border-bottom-color': gaugeType == gaugeTypeEnum.Donut ? 'white' : ''}\"></div>\n                <div (click)=\"onGaugeChange(gaugeTypeEnum.Zones)\" class=\"btn-gauge btn-gauge-zone\" [ngStyle]=\"{'border-bottom-color': gaugeType == gaugeTypeEnum.Zones ? 'white' : ''}\"></div>\n            </div>\n            <div class=\"gauge-view\">\n                <ngx-gauge [options]=\"options\" #ngauge [value]=\"gauge.value\"></ngx-gauge>\n            </div>\n        </div>\n        <div class=\"toolbox-det\" *ngIf=\"gaugeType!=gaugeTypeEnum.Donut\">\n            <div class=\"field-row\">\n                <div class=\"my-form-field\" style=\"padding-left: 12px\">\n                    <span>{{'bag.property-ticks' | translate}}</span>\n                    <mat-slide-toggle color=\"primary\" [(ngModel)]=\"optcfg.ticksEnabled\" (change)=\"onChangeTicks($event.checked)\"></mat-slide-toggle>\n                </div>\n            </div>\n            <div class=\"field-row\">\n                <div class=\"my-form-field slider-field\" style=\"padding-left: 12px\">\n                    <span>{{'bag.property-divisions' | translate}}</span>\n                    <mat-slider [disabled]=\"!optcfg.ticksEnabled\" style=\"display:inline-block;\" [max]=\"20\" [min]=\"0\" [step]=\"1\" [thumb-label]=\"true\" [(ngModel)]=\"optcfg.renderTicks.divisions\" (input)=\"onChangeOptionsTicks('divisions', $event.value)\">\n                    </mat-slider>\n                </div>\n                <div class=\"my-form-field slider-field\" style=\"padding-left: 12px\">\n                    <span>{{'bag.property-subdivisions' | translate}}</span>\n                    <mat-slider [disabled]=\"!optcfg.ticksEnabled\" style=\"display:inline-block;\" [max]=\"20\" [min]=\"0\" [step]=\"1\" [thumb-label]=\"true\" [(ngModel)]=\"optcfg.renderTicks.subDivisions\" (input)=\"onChangeOptionsTicks('subDivisions', $event.value)\">\n                    </mat-slider>\n                </div>\n            </div>\n            <div class=\"field-row\">\n                <div class=\"my-form-field slider-field\" style=\"padding-left: 12px\">\n                    <span>{{'bag.property-divisions-length' | translate}}</span>\n                    <mat-slider [disabled]=\"!optcfg.ticksEnabled\" style=\"display:inline-block;\" [max]=\"100\" [min]=\"0\" [step]=\"1\" [thumb-label]=\"true\" [(ngModel)]=\"optcfg.renderTicks.divLength\" (input)=\"onChangeOptionsTicks('divLength', $event.value)\">\n                    </mat-slider>\n                </div>\n                <div class=\"my-form-field slider-field\" style=\"padding-left: 12px\">\n                    <span>{{'bag.property-subdivisions-length' | translate}}</span>\n                    <mat-slider [disabled]=\"!optcfg.ticksEnabled\" style=\"display:inline-block;\" [max]=\"100\" [min]=\"0\" [step]=\"1\" [thumb-label]=\"true\" [(ngModel)]=\"optcfg.renderTicks.subLength\" (input)=\"onChangeOptionsTicks('subLength', $event.value)\">\n                    </mat-slider>\n                </div>\n            </div>\n            <div class=\"field-row\">\n                <div class=\"my-form-field slider-field\" style=\"padding-left: 12px\">\n                    <span>{{'bag.property-divisions-width' | translate}}</span>\n                    <mat-slider [disabled]=\"!optcfg.ticksEnabled\" style=\"display:inline-block;\" [max]=\"100\" [min]=\"0\" [step]=\"1\" [thumb-label]=\"true\" [(ngModel)]=\"optcfg.renderTicks.divWidth\" (input)=\"onChangeOptionsTicks('divWidth', $event.value)\">\n                    </mat-slider>\n                </div>\n                <div class=\"my-form-field slider-field\" style=\"padding-left: 12px\">\n                    <span>{{'bag.property-subdivisions-width' | translate}}</span>\n                    <mat-slider [disabled]=\"!optcfg.ticksEnabled\" style=\"display:inline-block;\" [max]=\"100\" [min]=\"0\" [step]=\"1\" [thumb-label]=\"true\" [(ngModel)]=\"optcfg.renderTicks.subWidth\" (input)=\"onChangeOptionsTicks('subWidth', $event.value)\">\n                    </mat-slider>\n                </div>\n            </div>\n            <div class=\"field-row\">\n                <div class=\"my-form-field slider-field color-field\" style=\"padding-left: 12px\">\n                    <span>{{'bag.property-divisions-color' | translate}}</span>\n                    <input [disabled]=\"!optcfg.ticksEnabled\" [(colorPicker)]=\"optcfg.renderTicks.divColor\" [style.background]=\"optcfg.renderTicks.divColor\" [cpPresetColors]=\"defaultColor\" [cpOKButton]=\"true\" [cpCancelButton]=\"true\" [cpCancelButtonClass]=\"'cpCancelButtonClass'\" [cpCancelButtonText]=\"'Cancel'\" [cpOKButtonText]=\"'OK'\" [cpOKButtonClass]=\"'cpOKButtonClass'\" style=\"padding: 8px 0 0 0; width: 128px\" [cpPosition]=\"'left'\" (colorPickerChange)=\"onChangeOptionsTicks('divColor', $event)\" />\n                </div>\n                <div class=\"my-form-field slider-field color-field\" style=\"padding-left: 12px;\">\n                    <span>{{'bag.property-subdivisions-color' | translate}}</span>\n                    <input [disabled]=\"!optcfg.ticksEnabled\" [(colorPicker)]=\"optcfg.renderTicks.subColor\" [style.background]=\"optcfg.renderTicks.subColor\" [cpPresetColors]=\"defaultColor\" [cpOKButton]=\"true\" [cpCancelButton]=\"true\" [cpCancelButtonClass]=\"'cpCancelButtonClass'\" [cpCancelButtonText]=\"'Cancel'\" [cpOKButtonText]=\"'OK'\" [cpOKButtonClass]=\"'cpOKButtonClass'\" style=\"padding: 8px 0 0 0; width: 128px\" [cpPosition]=\"'left'\" (colorPickerChange)=\"onChangeOptionsTicks('subColor', $event)\" />\n                </div>\n            </div>\n            <div class=\"field-row\">\n                <div class=\"my-form-field slider-field\" style=\"padding-left: 12px\">\n                    <span>{{'bag.property-divisionfont-size' | translate}}</span>\n                    <mat-slider [disabled]=\"!optcfg.ticksEnabled\" style=\"display:inline-block;\" [max]=\"100\" [min]=\"0\" [step]=\"1\" [thumb-label]=\"true\" [(ngModel)]=\"optcfg.staticFontSize\" (input)=\"onChangeOptionsLabels('fontSize', $event.value)\">\n                    </mat-slider>\n                </div>\n                <div class=\"my-form-field slider-field color-field\" style=\"padding-left: 12px\">\n                    <span>{{'bag.property-divisionfont-color' | translate}}</span>\n                    <input [(colorPicker)]=\"optcfg.staticFontColor\" [cpDisabled]=\"!optcfg.ticksEnabled\" [style.background]=\"optcfg.staticFontColor\" [cpPresetColors]=\"defaultColor\" [cpOKButton]=\"true\" [cpCancelButton]=\"true\" [cpCancelButtonClass]=\"'cpCancelButtonClass'\" [cpCancelButtonText]=\"'Cancel'\" [cpOKButtonText]=\"'OK'\" [cpOKButtonClass]=\"'cpOKButtonClass'\" style=\"padding: 8px 0 0 0; width: 128px\" [cpPosition]=\"'top'\" (colorPickerChange)=\"onChangeOptionsLabels('labelsColor', $event)\" />\n                </div>\n            </div>\n            <div class=\"field-row\">\n                <div class=\"my-form-field slider-field\" style=\"padding-left: 12px\">\n                    <span style=\"max-width: 180px\">{{'bag.property-divisions-labels' | translate}}</span>\n                    <input [disabled]=\"!optcfg.ticksEnabled\" [(ngModel)]=\"optcfg.staticLabelsText\" (change)=\"onChangeOptionsLabels('labels', optcfg.staticLabelsText)\" style=\"width: 265px;\" type=\"text\">\n                </div>\n            </div>\n        </div>\n        <div class=\"toolbox\">\n            <div class=\"toolbox-left\">\n                <div class=\"field-row\">\n                    <div class=\"my-form-field slider-field\" style=\"padding-left: 12px\">\n                        <span>{{'bag.property-current-value' | translate}}</span>\n                        <mat-slider style=\"display:inline-block;\" [max]=\"optcfg.maxValue\" [min]=\"optcfg.minValue\" [step]=\"1\" [thumb-label]=\"true\" [(ngModel)]=\"gauge.value\" (input)=\"onChangeValue($event.value)\">\n                        </mat-slider>\n                    </div>\n                    <div class=\"my-form-field slider-field\" style=\"padding-left: 11px\">\n                        <span>{{'bag.property-min' | translate}}</span>\n                        <input numberOnly [(ngModel)]=\"optcfg.minValue\" (change)=\"onChangeOptions('minValue', optcfg.minValue)\" style=\"width: 50px;text-align: center;display:inline-block;\" type=\"text\">\n                    </div>\n                    <div class=\"my-form-field slider-field\" style=\"padding-left: 12px\">\n                        <span>{{'bag.property-max' | translate}}</span>\n                        <input numberOnly [(ngModel)]=\"optcfg.maxValue\" (change)=\"onChangeOptions('maxValue', optcfg.maxValue)\" style=\"width: 50px;text-align: center;display:inline-block;\" type=\"text\">\n                    </div>\n                    <div class=\"my-form-field slider-field\" style=\"padding-left: 12px\">\n                        <span>{{'bag.property-bar-width' | translate}}</span>\n                        <mat-slider style=\"display:inline-block;\" [max]=\"70\" [min]=\"0\" [step]=\"1\" [thumb-label]=\"true\" [(ngModel)]=\"optcfg.lineWidth\" (input)=\"onChangeOptions('lineWidth', $event.value)\">\n                        </mat-slider>\n                    </div>\n                </div>\n                <div class=\"field-row\">\n                    <div class=\"my-form-field slider-field\" style=\"padding-left: 12px\">\n                        <span>{{'bag.property-animation-speed' | translate}}</span>\n                        <mat-slider style=\"display:inline-block;\" [max]=\"128\" [min]=\"1\" [step]=\"1\" [thumb-label]=\"true\" [(ngModel)]=\"optcfg.animationSpeed\" (input)=\"onChangeOptions('animationSpeed', $event.value)\">\n                        </mat-slider>\n                    </div>\n                    <div class=\"my-form-field slider-field\" style=\"padding-left: 12px\">\n                        <span>{{'bag.property-angle' | translate}}</span>\n                        <mat-slider style=\"display:inline-block;\" [max]=\"50\" [min]=\"-50\" [step]=\"1\" [thumb-label]=\"true\" [(ngModel)]=\"optcfg.angle\" (input)=\"onChangeOptions('angle', $event.value)\">\n                        </mat-slider>\n                    </div>\n                    <div class=\"my-form-field slider-field\" style=\"padding-left: 12px\">\n                        <span>{{'bag.property-radius' | translate}}</span>\n                        <mat-slider style=\"display:inline-block;\" [max]=\"100\" [min]=\"50\" [step]=\"1\" [thumb-label]=\"true\" [(ngModel)]=\"optcfg.radiusScale\" (input)=\"onChangeOptions('radiusScale', $event.value)\">\n                        </mat-slider>\n                    </div>\n                </div>\n                <div class=\"field-row\">\n                    <div class=\"my-form-field slider-field\" style=\"padding-left: 12px\">\n                        <span>{{'bag.property-font-size' | translate}}</span>\n                        <mat-slider style=\"display:inline-block;\" [max]=\"100\" [min]=\"0\" [step]=\"1\" [thumb-label]=\"true\" [(ngModel)]=\"optcfg.fontSize\" (input)=\"onChangeOptions('fontSize', $event.value)\">\n                        </mat-slider>\n                    </div>\n                    <div class=\"my-form-field slider-field\" style=\"padding-left: 12px\">\n                        <span>{{'bag.property-textfield-position' | translate}}</span>\n                        <mat-slider style=\"display:inline-block;\" [max]=\"100\" [min]=\"0\" [step]=\"1\" [thumb-label]=\"true\" [(ngModel)]=\"optcfg.textFilePosition\" (input)=\"onChangeOptions('textFilePosition', $event.value)\">\n                        </mat-slider>\n                    </div>\n                    <div class=\"my-form-field slider-field\" style=\"padding-left: 12px\">\n                        <span>{{'bag.property-format-digits' | translate}}</span>\n                        <mat-slider style=\"display:inline-block;\" [max]=\"5\" [min]=\"0\" [step]=\"1\" [thumb-label]=\"true\" [(ngModel)]=\"optcfg.fractionDigits\" (input)=\"onChangeOptions('fractionDigits', $event.value)\">\n                        </mat-slider>\n                    </div>\n                </div>\n                <div class=\"field-row\">\n                    <div class=\"my-form-field slider-field\" style=\"padding-left: 12px\">\n                        <span>{{'bag.property-pointer-length' | translate}}</span>\n                        <mat-slider style=\"display:inline-block;\" [max]=\"100\" [min]=\"0\" [step]=\"1\" [thumb-label]=\"true\" [(ngModel)]=\"optcfg.pointer.length\" (input)=\"onChangeOptionsPointer('pointerLength', $event.value)\">\n                        </mat-slider>\n                    </div>\n                    <div class=\"my-form-field slider-field\" style=\"padding-left: 12px\">\n                        <span>{{'bag.property-pointer-stroke' | translate}}</span>\n                        <mat-slider style=\"display:inline-block;\" [max]=\"300\" [min]=\"0\" [step]=\"1\" [thumb-label]=\"true\" [(ngModel)]=\"optcfg.pointer.strokeWidth\" (input)=\"onChangeOptionsPointer('pointerStrokeWidth', $event.value)\">\n                        </mat-slider>\n                    </div>\n                    <div class=\"my-form-field slider-field color-field\" style=\"padding-left: 12px\">\n                        <span>{{'bag.property-pointer-color' | translate}}</span>\n                        <input [(colorPicker)]=\"optcfg.pointer.color\" [cpDisabled]=\"gaugeType===gaugeTypeEnum.Donut\" [style.background]=\"optcfg.pointer.color\" [cpPresetColors]=\"defaultColor\" [cpOKButton]=\"true\" [cpCancelButton]=\"true\" [cpCancelButtonClass]=\"'cpCancelButtonClass'\" [cpCancelButtonText]=\"'Cancel'\" [cpOKButtonText]=\"'OK'\" [cpOKButtonClass]=\"'cpOKButtonClass'\" style=\"padding: 8px 0 0 0; width: 128px\" [cpPosition]=\"'top'\" (colorPickerChange)=\"onChangeOptionsPointer('color', $event)\" />\n                    </div>\n                </div>\n                <div class=\"field-row slider-field\">\n                    <div class=\"my-form-field color-field\" style=\"padding-left: 12px\">\n                        <span>{{'bag.property-color-start' | translate}}</span>\n                        <input [(colorPicker)]=\"optcfg.colorStart\" [style.background]=\"optcfg.colorStart\" [cpPresetColors]=\"defaultColor\" [cpOKButton]=\"true\" [cpCancelButton]=\"true\" [cpCancelButtonClass]=\"'cpCancelButtonClass'\" [cpCancelButtonText]=\"'Cancel'\" [cpOKButtonText]=\"'OK'\" [cpOKButtonClass]=\"'cpOKButtonClass'\" style=\"padding: 8px 0 0 0; width: 128px\" [cpPosition]=\"'top'\" (colorPickerChange)=\"onChangeOptions('colorStart', $event)\" />\n                    </div>\n                    <div class=\"my-form-field slider-field color-field\" style=\"padding-left: 12px\">\n                        <span>{{'bag.property-color-stop' | translate}}</span>\n                        <input [(colorPicker)]=\"optcfg.colorStop\" [style.background]=\"optcfg.colorStop\" [cpPresetColors]=\"defaultColor\" [cpOKButton]=\"true\" [cpCancelButton]=\"true\" [cpCancelButtonClass]=\"'cpCancelButtonClass'\" [cpCancelButtonText]=\"'Cancel'\" [cpOKButtonText]=\"'OK'\" [cpOKButtonClass]=\"'cpOKButtonClass'\" style=\"padding: 8px 0 0 0; width: 128px\" [cpPosition]=\"'top'\" (colorPickerChange)=\"onChangeOptions('colorStop', $event)\" />\n                    </div>\n                    <div class=\"my-form-field slider-field color-field\" style=\"padding-left: 12px\">\n                        <span>{{'bag.property-background' | translate}}</span>\n                        <input [(colorPicker)]=\"optcfg.strokeColor\" [style.background]=\"optcfg.strokeColor\" [cpPresetColors]=\"defaultColor\" [cpOKButton]=\"true\" [cpCancelButton]=\"true\" [cpCancelButtonClass]=\"'cpCancelButtonClass'\" [cpCancelButtonText]=\"'Cancel'\" [cpOKButtonText]=\"'OK'\" [cpOKButtonClass]=\"'cpOKButtonClass'\" style=\"padding: 8px 0 0 0; width: 128px\" [cpPosition]=\"'top'\" (colorPickerChange)=\"onChangeOptions('strokeColor', $event)\" />\n                    </div>\n                </div>\n            </div>\n            <div class=\"toolbox-right\" *ngIf=\"gaugeType==gaugeTypeEnum.Zones\">\n                <div style=\"position: absolute; top: 0px; right: 0px\">\n                    <span>{{'bag.property-zones' | translate}}</span>\n                    <button mat-icon-button (click)=\"onAddZone()\" [disabled]=\"optcfg.staticZones && optcfg.staticZones.length >= 5\">\n                        <mat-icon>add_circle_outline</mat-icon>\n                    </button>\n                </div>\n                <div style=\"margin-top: 20px; margin-bottom:20px; height:250px\">\n                    <div *ngFor=\"let item of optcfg.staticZones; index as i\" style=\"display: block;\">\n                        <div class=\"my-form-field slider-field\">\n                            <span>{{'bag.property-min' | translate}}</span>\n                            <input [(ngModel)]=\"item.min\" style=\"width: 60px; text-align: center;\" type=\"text\" (change)=\"onChangeStaticZones()\">\n                        </div>\n                        <div class=\"my-form-field slider-field\" style=\"padding-left: 12px;\">\n                            <span>{{'bag.property-max' | translate}}</span>\n                            <input [(ngModel)]=\"item.max\" style=\"width: 60px\" type=\"text\" (change)=\"onChangeStaticZones()\">\n                        </div>\n                        <div class=\"my-form-field slider-field color-field\" style=\"padding-left: 12px\">\n                            <span>{{'bag.property-color' | translate}}</span>\n                            <input [cpDialogDisplay]=\"'popup'\" [(colorPicker)]=\"item.strokeStyle\" [style.background]=\"item.strokeStyle\" [cpPresetColors]=\"defaultColor\" [cpOKButton]=\"true\" [cpCancelButton]=\"true\" [cpCancelButtonClass]=\"'cpCancelButtonClass'\" [cpCancelButtonText]=\"'Cancel'\" [cpOKButtonText]=\"'OK'\" [cpOKButtonClass]=\"'cpOKButtonClass'\" style=\"padding: 8px 0 0 0; width: 60px\" [cpPosition]=\"'top'\" (colorPickerChange)=\"onChangeStaticZones()\" />\n                        </div>\n                        <div class=\"my-form-field\" style=\"line-height: 40px;\">\n                            <button mat-icon-button (click)=\"onRemoveZone(i)\" class=\"remove\">\n                                <mat-icon>clear</mat-icon>\n                            </button>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div mat-dialog-actions style=\"display: inline-block; position: absolute; bottom: 10px; right: 10px\">\n        <button mat-raised-button (click)=\"onNoClick()\">{{'dlg.cancel' | translate}}</button>\n        <button mat-raised-button color=\"primary\" (click)=\"onOkClick()\" [mat-dialog-close]=\"data\" cdkFocusInitial>{{'dlg.ok' | translate}}</button>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/gauges/bag-property/bag-property.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BagPropertyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__helpers_utils__ = __webpack_require__("../../../../../src/app/_helpers/utils.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__gui_helpers_ngx_gauge_gaugeOptions__ = __webpack_require__("../../../../../src/app/gui-helpers/ngx-gauge/gaugeOptions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__gui_helpers_ngx_gauge_ngx_gauge_component__ = __webpack_require__("../../../../../src/app/gui-helpers/ngx-gauge/ngx-gauge.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_hmi__ = __webpack_require__("../../../../../src/app/_models/hmi.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__gauge_property_gauge_property_component__ = __webpack_require__("../../../../../src/app/gauges/gauge-property/gauge-property.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__gauge_property_flex_head_flex_head_component__ = __webpack_require__("../../../../../src/app/gauges/gauge-property/flex-head/flex-head.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};








var BagPropertyComponent = (function () {
    function BagPropertyComponent(cdRef, dialog, dialogRef, data) {
        this.cdRef = cdRef;
        this.dialog = dialog;
        this.dialogRef = dialogRef;
        this.data = data;
        this.gauge = {
            value: 30
        };
        this.gaugeTypeEnum = __WEBPACK_IMPORTED_MODULE_3__gui_helpers_ngx_gauge_gaugeOptions__["b" /* GaugeType */];
        this.gaugeType = __WEBPACK_IMPORTED_MODULE_3__gui_helpers_ngx_gauge_gaugeOptions__["b" /* GaugeType */].Gauge;
        this.options = new __WEBPACK_IMPORTED_MODULE_3__gui_helpers_ngx_gauge_gaugeOptions__["a" /* GaugeOptions */]();
        this.optionsGauge = new __WEBPACK_IMPORTED_MODULE_3__gui_helpers_ngx_gauge_gaugeOptions__["a" /* GaugeOptions */]();
        this.optionsDonut = new __WEBPACK_IMPORTED_MODULE_3__gui_helpers_ngx_gauge_gaugeOptions__["a" /* GaugeOptions */]();
        this.optionsZones = new __WEBPACK_IMPORTED_MODULE_3__gui_helpers_ngx_gauge_gaugeOptions__["a" /* GaugeOptions */]();
        this.optcfg = new __WEBPACK_IMPORTED_MODULE_3__gui_helpers_ngx_gauge_gaugeOptions__["a" /* GaugeOptions */]();
        this.defaultColor = __WEBPACK_IMPORTED_MODULE_1__helpers_utils__["b" /* Utils */].defaultColor;
        this.optionsGauge = this.getDefaultOptions(__WEBPACK_IMPORTED_MODULE_3__gui_helpers_ngx_gauge_gaugeOptions__["b" /* GaugeType */].Gauge);
        this.optionsDonut = this.getDefaultOptions(__WEBPACK_IMPORTED_MODULE_3__gui_helpers_ngx_gauge_gaugeOptions__["b" /* GaugeType */].Donut);
        this.optionsZones = this.getDefaultOptions(__WEBPACK_IMPORTED_MODULE_3__gui_helpers_ngx_gauge_gaugeOptions__["b" /* GaugeType */].Zones);
        this.options = this.optionsGauge;
        this.property = JSON.parse(JSON.stringify(this.data.settings.property));
        if (!this.property) {
            this.property = new __WEBPACK_IMPORTED_MODULE_5__models_hmi__["g" /* GaugeProperty */]();
        }
    }
    BagPropertyComponent.prototype.ngOnInit = function () {
    };
    BagPropertyComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.gaugeType = __WEBPACK_IMPORTED_MODULE_3__gui_helpers_ngx_gauge_gaugeOptions__["b" /* GaugeType */].Gauge;
            if (_this.property.options) {
                _this.options = _this.property.options;
                _this.gaugeType = _this.options.type;
                if (_this.gaugeType === __WEBPACK_IMPORTED_MODULE_3__gui_helpers_ngx_gauge_gaugeOptions__["b" /* GaugeType */].Donut) {
                    _this.optionsDonut = _this.options;
                }
                else if (_this.gaugeType === __WEBPACK_IMPORTED_MODULE_3__gui_helpers_ngx_gauge_gaugeOptions__["b" /* GaugeType */].Zones) {
                    _this.optionsZones = _this.options;
                }
                else {
                    _this.optionsGauge = _this.options;
                }
            }
            _this.onGaugeChange(_this.gaugeType);
            _this.cdRef.detectChanges();
        }, 500);
    };
    BagPropertyComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    BagPropertyComponent.prototype.onOkClick = function () {
        this.data.settings.property = this.flexHead.getProperty();
        this.options.type = this.gaugeType;
        this.data.settings.property.options = this.options;
    };
    BagPropertyComponent.prototype.onEditPermission = function () {
        var _this = this;
        var permission = this.property.permission;
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_6__gauge_property_gauge_property_component__["a" /* DialogGaugePermission */], {
            minWidth: '350px',
            data: { permission: permission },
            position: { top: '90px' }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.property.permission = result.permission;
            }
        });
    };
    BagPropertyComponent.prototype.ngOnChanges = function (changes) {
        console.log('changes');
    };
    BagPropertyComponent.prototype.onGaugeChange = function (type) {
        if (type === __WEBPACK_IMPORTED_MODULE_3__gui_helpers_ngx_gauge_gaugeOptions__["b" /* GaugeType */].Donut) {
            this.gaugeType = __WEBPACK_IMPORTED_MODULE_3__gui_helpers_ngx_gauge_gaugeOptions__["b" /* GaugeType */].Donut;
            this.initOptionsToConfig(this.optionsDonut);
            this.initDonut();
        }
        else if (type === __WEBPACK_IMPORTED_MODULE_3__gui_helpers_ngx_gauge_gaugeOptions__["b" /* GaugeType */].Zones) {
            this.gaugeType = __WEBPACK_IMPORTED_MODULE_3__gui_helpers_ngx_gauge_gaugeOptions__["b" /* GaugeType */].Zones;
            this.initOptionsToConfig(this.optionsZones);
            this.initZones();
        }
        else {
            this.gaugeType = __WEBPACK_IMPORTED_MODULE_3__gui_helpers_ngx_gauge_gaugeOptions__["b" /* GaugeType */].Gauge;
            this.initOptionsToConfig(this.optionsGauge);
            this.initGauge();
        }
        this.cdRef.detectChanges();
    };
    BagPropertyComponent.prototype.onChangeValue = function (value) {
        this.ngauge.setValue(value);
    };
    BagPropertyComponent.prototype.onChangeOptions = function (opt, value) {
        this.optcfg[opt] = value;
        this.configToOptions(this.optcfg[opt], opt);
        this.setGaugeOptions();
    };
    BagPropertyComponent.prototype.onChangeOptionsPointer = function (opt, value) {
        this.options.pointer[opt] = value;
        if (opt === 'pointerLength') {
            this.options.pointer.length = value / 100;
        }
        else if (opt === 'pointerStrokeWidth') {
            this.options.pointer.strokeWidth = value / 1000;
        }
        this.setGaugeOptions();
    };
    BagPropertyComponent.prototype.onChangeOptionsTicks = function (opt, value) {
        this.options.renderTicks[opt] = value;
        if (opt === 'divLength') {
            this.options.renderTicks.divLength = value / 100;
        }
        else if (opt === 'divWidth') {
            this.options.renderTicks.divWidth = value / 10;
        }
        else if (opt === 'subLength') {
            this.options.renderTicks.subLength = value / 100;
        }
        else if (opt === 'subWidth') {
            this.options.renderTicks.subWidth = value / 10;
        }
        this.setGaugeOptions();
    };
    BagPropertyComponent.prototype.onChangeTicks = function (event) {
        this.options.ticksEnabled = event;
        if (event) {
            var opt = new __WEBPACK_IMPORTED_MODULE_3__gui_helpers_ngx_gauge_gaugeOptions__["a" /* GaugeOptions */]();
            this.options.renderTicks = JSON.parse(JSON.stringify(opt.renderTicks));
        }
        else {
            this.options.renderTicks = {};
        }
        this.onGaugeChange(this.gaugeType);
    };
    BagPropertyComponent.prototype.onChangeOptionsLabels = function (opt, value) {
        if (opt === 'labels') {
            var labels_1 = [];
            if (value) {
                var tks = value.split(';');
                tks.forEach(function (tk) {
                    var v = parseFloat(tk);
                    if (!isNaN(v)) {
                        labels_1.push(v);
                    }
                });
            }
            this.options.staticLabels = { labels: labels_1, font: this.options.staticFontSize + 'px sans-serif', color: this.options.staticFontColor };
            this.onGaugeChange(this.gaugeType);
        }
        else if (opt === 'fontSize') {
            this.options.staticFontSize = value;
            if (this.options.staticLabels) {
                this.options.staticLabels.font = this.options.staticFontSize + 'px sans-serif';
                this.setGaugeOptions();
            }
        }
        else if (opt === 'labelsColor') {
            this.options.staticFontColor = value;
            if (this.options.staticLabels) {
                this.options.staticLabels.color = this.options.staticFontColor;
                this.setGaugeOptions();
            }
        }
    };
    BagPropertyComponent.prototype.onAddZone = function () {
        if (!this.optcfg.staticZones) {
            this.optcfg.staticZones = [];
        }
        if (this.optcfg.staticZones.length < 5) {
            this.optcfg.staticZones.push({ min: null, max: null, strokeStyle: null });
        }
        this.options.staticZones = this.optcfg.staticZones;
        this.onGaugeChange(this.gaugeType);
    };
    BagPropertyComponent.prototype.onRemoveZone = function (index) {
        this.optcfg.staticZones.splice(index, 1);
        if (this.optcfg.staticZones.length <= 0) {
            delete this.optcfg.staticZones;
            delete this.options.staticZones;
        }
        else {
            this.options.staticZones = this.optcfg.staticZones;
        }
        this.onGaugeChange(this.gaugeType);
    };
    BagPropertyComponent.prototype.onChangeStaticZones = function () {
        this.options.staticZones = this.optcfg.staticZones;
        this.setGaugeOptions();
    };
    BagPropertyComponent.prototype.initGauge = function () {
        this.setGaugeOptions();
        this.options = this.optionsGauge;
        this.ngauge.init(__WEBPACK_IMPORTED_MODULE_3__gui_helpers_ngx_gauge_gaugeOptions__["b" /* GaugeType */].Gauge);
    };
    BagPropertyComponent.prototype.initDonut = function () {
        this.setGaugeOptions();
        this.options = this.optionsDonut;
        this.ngauge.init(__WEBPACK_IMPORTED_MODULE_3__gui_helpers_ngx_gauge_gaugeOptions__["b" /* GaugeType */].Donut);
    };
    BagPropertyComponent.prototype.initZones = function () {
        this.setGaugeOptions();
        this.options = this.optionsZones;
        this.ngauge.init(__WEBPACK_IMPORTED_MODULE_3__gui_helpers_ngx_gauge_gaugeOptions__["b" /* GaugeType */].Zones);
    };
    BagPropertyComponent.prototype.setGaugeOptions = function () {
        if (this.gaugeType === __WEBPACK_IMPORTED_MODULE_3__gui_helpers_ngx_gauge_gaugeOptions__["b" /* GaugeType */].Donut) {
            this.ngauge.setOptions(this.optionsDonut);
        }
        else if (this.gaugeType === __WEBPACK_IMPORTED_MODULE_3__gui_helpers_ngx_gauge_gaugeOptions__["b" /* GaugeType */].Zones) {
            this.ngauge.setOptions(this.optionsZones);
        }
        else {
            this.ngauge.setOptions(this.optionsGauge);
        }
    };
    BagPropertyComponent.prototype.initOptionsToConfig = function (options) {
        var _this = this;
        this.optcfg = JSON.parse(JSON.stringify(options));
        this.optcfg.angle *= 100;
        this.optcfg.lineWidth *= 100;
        this.optcfg.radiusScale *= 100;
        this.optcfg.pointer.length *= 100;
        this.optcfg.pointer.strokeWidth *= 1000;
        if (this.optcfg.renderTicks) {
            if (this.optcfg.renderTicks.divLength) {
                this.optcfg.renderTicks.divLength *= 100;
            }
            if (this.optcfg.renderTicks.divWidth) {
                this.optcfg.renderTicks.divWidth *= 10;
            }
            if (this.optcfg.renderTicks.subLength) {
                this.optcfg.renderTicks.subLength *= 100;
            }
            if (this.optcfg.renderTicks.subWidth) {
                this.optcfg.renderTicks.subWidth *= 10;
            }
        }
        this.optcfg.staticLabelsText = '';
        if (this.optcfg.staticLabels && this.optcfg.staticLabels.labels.length) {
            this.optcfg.staticLabels.labels.forEach(function (lb) {
                if (_this.optcfg.staticLabelsText) {
                    _this.optcfg.staticLabelsText += ';';
                }
                _this.optcfg.staticLabelsText += lb;
            });
        }
    };
    BagPropertyComponent.prototype.configToOptions = function (value, opt) {
        if (opt === 'angle' || opt === 'lineWidth' || opt === 'radiusScale') {
            value /= 100;
        }
        this.options[opt] = value;
    };
    BagPropertyComponent.prototype.getDefaultOptions = function (type) {
        if (type === __WEBPACK_IMPORTED_MODULE_3__gui_helpers_ngx_gauge_gaugeOptions__["b" /* GaugeType */].Zones) {
            var opts = new __WEBPACK_IMPORTED_MODULE_3__gui_helpers_ngx_gauge_gaugeOptions__["a" /* GaugeOptions */]();
            opts.angle = -0.25;
            opts.lineWidth = 0.2;
            opts.radiusScale = 0.9;
            opts.pointer.length = 0.6;
            opts.pointer.strokeWidth = 0.05;
            return opts;
        }
        else if (type === __WEBPACK_IMPORTED_MODULE_3__gui_helpers_ngx_gauge_gaugeOptions__["b" /* GaugeType */].Donut) {
            var optsd = new __WEBPACK_IMPORTED_MODULE_3__gui_helpers_ngx_gauge_gaugeOptions__["a" /* GaugeOptions */]();
            optsd.angle = 0.3;
            optsd.lineWidth = 0.1;
            optsd.radiusScale = 0.8;
            optsd.renderTicks.divisions = 0;
            optsd.renderTicks.divWidth = 0;
            optsd.renderTicks.divLength = 0;
            optsd.renderTicks.subDivisions = 0;
            optsd.renderTicks.subWidth = 0;
            optsd.renderTicks.subLength = 0;
            delete optsd.staticLabels;
            delete optsd.staticZones;
            optsd.ticksEnabled = false;
            return optsd;
        }
        else {
            var optsa = new __WEBPACK_IMPORTED_MODULE_3__gui_helpers_ngx_gauge_gaugeOptions__["a" /* GaugeOptions */]();
            delete optsa.staticLabels;
            delete optsa.staticZones;
            optsa.ticksEnabled = false;
            optsa.renderTicks = {};
            optsa.staticFontSize = 0;
            optsa.staticLabelsText = '';
            return optsa;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewChild */])("ngauge"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4__gui_helpers_ngx_gauge_ngx_gauge_component__["a" /* NgxGaugeComponent */])
    ], BagPropertyComponent.prototype, "ngauge", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewChild */])('flexhead'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_7__gauge_property_flex_head_flex_head_component__["a" /* FlexHeadComponent */])
    ], BagPropertyComponent.prototype, "flexHead", void 0);
    BagPropertyComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'bag-property',
            template: __webpack_require__("../../../../../src/app/gauges/bag-property/bag-property.component.html"),
            styles: [__webpack_require__("../../../../../src/app/gauges/bag-property/bag-property.component.css")]
        }),
        __param(3, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_2__angular_material__["b" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* ChangeDetectorRef */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["j" /* MatDialog */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["m" /* MatDialogRef */], Object])
    ], BagPropertyComponent);
    return BagPropertyComponent;
}());



/***/ }),

/***/ "../../../../../src/app/gauges/chart-property/chart-property.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/gauges/chart-property/chart-property.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"width: 100%;min-height: 400px;position: relative;padding-bottom: 40px\">\n  <mat-icon (click)=\"onNoClick()\" style=\"float:right;cursor:pointer;color:gray;position: relative; top: 10px; right: 0px\">clear</mat-icon>\n  <mat-tab-group style=\"width: 100%;\">\n    <mat-tab label=\"{{'gauges.property-props' | translate}}\">\n      <div style=\"max-height: 540px; overflow-y: auto; overflow-x: hidden; padding-top: 15px;\">\n        <div style=\"display: block;\">\n          <div class=\"my-form-field\" style=\"width: 400px;\">\n            <span>{{'chart.property-chart' | translate}}</span>\n            <mat-select [formControl]=\"chartCtrl\">\n              <mat-select-search [formControl]=\"chartFilterCtrl\"></mat-select-search>\n              <mat-option *ngFor=\"let chart of filteredChart | async\" [value]=\"chart\">\n                {{ chart.name }}\n              </mat-option>\n            </mat-select>\n          </div>\n          <div class=\"my-form-field\" style=\"width: 200px;float: right;margin-right: 10px;\">\n            <span>{{'chart.property-chart-type' | translate}}</span>\n            <mat-select [(value)]=\"chartViewValue\" >\n              <mat-option *ngFor=\"let ev of chartViewType | enumToArray\" [value]=\"ev.key\">\n                {{ ev.value }}\n              </mat-option>\n            </mat-select>\n          </div>          \n        </div>\n        <div style=\"display: block; width:100%\">\n          <mat-list class=\"list\" style=\"padding-left: 8px;padding-right: 8px;\">\n            <div style=\"height: calc(100% - 36px); overflow-y: auto\" *ngIf=\"chartCtrl.value\">\n                <mat-list-item *ngFor=\"let tag of chartCtrl.value.lines\" style=\"font-size:14px;height: 27px;\">\n                    <div style=\"width: 50%;text-overflow: ellipsis;display: block; overflow: hidden; white-space: nowrap;\">\n                        <span matTooltip=\"{{tag.name}}\">{{tag.name}}</span>\n                    </div>\n                    <div style=\"width: 40%;text-overflow: ellipsis;display: block; overflow: hidden; white-space: nowrap;\">\n                        <span matTooltip=\"{{tag.device}}\">{{tag.device}}</span>\n                    </div>\n                    <div [style.background-color]=\"tag.color\" style=\"height:20px; width:30px\">\n                    </div>\n                </mat-list-item>\n            </div>\n        </mat-list>\n        </div>\n      </div>\n    </mat-tab>\n  </mat-tab-group>\n  <div mat-dialog-actions style=\"display: inline-block; position: absolute; bottom: 10px; right: 10px\">\n    <button mat-raised-button (click)=\"onNoClick()\">{{'dlg.cancel' | translate}}</button>\n    <button mat-raised-button color=\"primary\" (click)=\"onOkClick()\" [mat-dialog-close]=\"data\" cdkFocusInitial>{{'dlg.ok' | translate}}</button>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/gauges/chart-property/chart-property.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChartPropertyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_ReplaySubject__ = __webpack_require__("../../../../rxjs/_esm5/ReplaySubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operators__ = __webpack_require__("../../../../rxjs/_esm5/operators.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__ = __webpack_require__("../../../../@ngx-translate/core/@ngx-translate/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__models_chart__ = __webpack_require__("../../../../../src/app/_models/chart.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};








var ChartPropertyComponent = (function () {
    function ChartPropertyComponent(dialogRef, translateService, data) {
        this.dialogRef = dialogRef;
        this.translateService = translateService;
        this.data = data;
        this.chartViewType = __WEBPACK_IMPORTED_MODULE_7__models_chart__["c" /* ChartViewType */];
        this.chartCtrl = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */]();
        this.chartFilterCtrl = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */]();
        this.filteredChart = new __WEBPACK_IMPORTED_MODULE_2_rxjs_ReplaySubject__["a" /* ReplaySubject */](1);
        this._onDestroy = new __WEBPACK_IMPORTED_MODULE_5_rxjs_Subject__["b" /* Subject */]();
    }
    ChartPropertyComponent.prototype.ngOnInit = function () {
        var _this = this;
        Object.keys(this.chartViewType).forEach(function (key) {
            _this.translateService.get(_this.chartViewType[key]).subscribe(function (txt) { _this.chartViewType[key] = txt; });
        });
        this.loadChart();
        var selected = null;
        if (this.data.settings.property) {
            this.chartViewValue = this.data.settings.property.type;
            this.data.charts.forEach(function (chart) {
                if (chart.id === _this.data.settings.property.id) {
                    selected = chart;
                }
            });
        }
        if (selected) {
            this.chartCtrl.setValue(selected);
        }
    };
    ChartPropertyComponent.prototype.ngOnDestroy = function () {
        this._onDestroy.next();
        this._onDestroy.complete();
    };
    ChartPropertyComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    ChartPropertyComponent.prototype.onOkClick = function () {
        if (this.chartCtrl.value) {
            this.data.settings.property = { id: this.chartCtrl.value.id, type: this.chartViewValue };
            this.data.settings.name = this.chartCtrl.value.name;
        }
        else {
            this.data.settings.name = '';
            this.data.settings.property = null;
        }
    };
    ChartPropertyComponent.prototype.loadChart = function (toset) {
        var _this = this;
        // load the initial chart list
        this.filteredChart.next(this.data.charts.slice());
        // listen for search field value changes
        this.chartFilterCtrl.valueChanges
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["takeUntil"])(this._onDestroy))
            .subscribe(function () {
            _this.filterChart();
        });
        if (toset) {
            var idx_1 = -1;
            this.data.charts.every(function (value, index, _arr) {
                if (value.id === toset) {
                    idx_1 = index;
                    return false;
                }
                return true;
            });
            if (idx_1 >= 0) {
                this.chartCtrl.setValue(this.data.charts[idx_1]);
            }
        }
    };
    ChartPropertyComponent.prototype.filterChart = function () {
        if (!this.data.charts) {
            return;
        }
        // get the search keyword
        var search = this.chartFilterCtrl.value;
        if (!search) {
            this.filteredChart.next(this.data.charts.slice());
            return;
        }
        else {
            search = search.toLowerCase();
        }
        // filter the variable
        this.filteredChart.next(this.data.charts.filter(function (chart) { return chart.name.toLowerCase().indexOf(search) > -1; }));
    };
    ChartPropertyComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-chart-property',
            template: __webpack_require__("../../../../../src/app/gauges/chart-property/chart-property.component.html"),
            styles: [__webpack_require__("../../../../../src/app/gauges/chart-property/chart-property.component.css")]
        }),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["m" /* MatDialogRef */],
            __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__["c" /* TranslateService */], Object])
    ], ChartPropertyComponent);
    return ChartPropertyComponent;
}());



/***/ }),

/***/ "../../../../../src/app/gauges/controls/gauge-progress/gauge-progress.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/gauges/controls/gauge-progress/gauge-progress.component.html":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "../../../../../src/app/gauges/controls/gauge-progress/gauge-progress.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GaugeProgressComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__gauge_base_gauge_base_component__ = __webpack_require__("../../../../../src/app/gauges/gauge-base/gauge-base.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__helpers_utils__ = __webpack_require__("../../../../../src/app/_helpers/utils.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__gauge_property_gauge_property_component__ = __webpack_require__("../../../../../src/app/gauges/gauge-property/gauge-property.component.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var GaugeProgressComponent = (function (_super) {
    __extends(GaugeProgressComponent, _super);
    function GaugeProgressComponent() {
        return _super.call(this) || this;
    }
    GaugeProgressComponent.prototype.ngOnInit = function () {
    };
    GaugeProgressComponent.getSignals = function (pro) {
        var res = [];
        if (pro.variableId) {
            res.push(pro.variableId);
        }
        return res;
    };
    GaugeProgressComponent.getDialogType = function () {
        return __WEBPACK_IMPORTED_MODULE_3__gauge_property_gauge_property_component__["b" /* GaugeDialogType */].MinMax;
    };
    GaugeProgressComponent.processValue = function (ga, svgele, sig, gaugeStatus) {
        if (svgele.node && svgele.node.children && svgele.node.children.length === 3 && ga.property && ga.property.ranges.length > 0) {
            var gap = ga.property.ranges[0];
            var g = svgele.node.children[0];
            var val = parseFloat(sig.value);
            var rectBase = __WEBPACK_IMPORTED_MODULE_2__helpers_utils__["b" /* Utils */].searchTreeStartWith(svgele.node, this.prefixA);
            var heightBase = parseFloat(rectBase.getAttribute('height'));
            var yBase = parseFloat(rectBase.getAttribute('y'));
            var rect = __WEBPACK_IMPORTED_MODULE_2__helpers_utils__["b" /* Utils */].searchTreeStartWith(svgele.node, this.prefixB);
            if (rectBase && rect) {
                var vtoy = (heightBase / (gap.max - gap.min)) * val;
                rect.setAttribute('y', yBase + heightBase - vtoy);
                rect.setAttribute('height', vtoy);
                if (gap.style[1]) {
                    var htmlValue = __WEBPACK_IMPORTED_MODULE_2__helpers_utils__["b" /* Utils */].searchTreeStartWith(svgele.node, this.prefixValue);
                    if (htmlValue) {
                        htmlValue.innerHTML = val;
                        if (gap.text) {
                            htmlValue.innerHTML += ' ' + gap.text;
                        }
                        htmlValue.style.top = (heightBase - vtoy - 7).toString() + 'px';
                        // htmlValue.style.top = 'calc(100% - ' + (heightBase - vtoy).toString() + 'px)';
                    }
                }
            }
        }
    };
    GaugeProgressComponent.initElement = function (ga) {
        var ele = document.getElementById(ga.id);
        if (ele && ga.property && ga.property.ranges.length > 0) {
            var gap = ga.property.ranges[0];
            // label min
            var htmlLabel = __WEBPACK_IMPORTED_MODULE_2__helpers_utils__["b" /* Utils */].searchTreeStartWith(ele, this.prefixMin);
            if (htmlLabel) {
                htmlLabel.innerHTML = gap.min.toString();
                htmlLabel.style.display = (gap.style[0]) ? 'block' : 'none';
            }
            // label max
            htmlLabel = __WEBPACK_IMPORTED_MODULE_2__helpers_utils__["b" /* Utils */].searchTreeStartWith(ele, this.prefixMax);
            if (htmlLabel) {
                htmlLabel.innerHTML = gap.max.toString();
                htmlLabel.style.display = (gap.style[0]) ? 'block' : 'none';
            }
            // value
            var htmlValue = __WEBPACK_IMPORTED_MODULE_2__helpers_utils__["b" /* Utils */].searchTreeStartWith(ele, this.prefixValue);
            if (htmlValue) {
                htmlValue.style.display = (gap.style[1]) ? 'block' : 'none';
            }
            // bar color
            var rect = __WEBPACK_IMPORTED_MODULE_2__helpers_utils__["b" /* Utils */].searchTreeStartWith(ele, this.prefixB);
            if (rect) {
                rect.setAttribute('fill', gap.color);
            }
        }
    };
    GaugeProgressComponent.initElementColor = function (bkcolor, color, ele) {
        var rectArea = __WEBPACK_IMPORTED_MODULE_2__helpers_utils__["b" /* Utils */].searchTreeStartWith(ele, this.prefixA);
        if (rectArea) {
            if (bkcolor) {
                rectArea.setAttribute('fill', bkcolor);
            }
            if (color) {
                rectArea.setAttribute('stroke', color);
            }
        }
        rectArea = __WEBPACK_IMPORTED_MODULE_2__helpers_utils__["b" /* Utils */].searchTreeStartWith(ele, this.prefixB);
        if (rectArea) {
            if (color) {
                rectArea.setAttribute('stroke', color);
            }
        }
    };
    GaugeProgressComponent.getFillColor = function (ele) {
        var rectArea = __WEBPACK_IMPORTED_MODULE_2__helpers_utils__["b" /* Utils */].searchTreeStartWith(ele, this.prefixA);
        if (rectArea) {
            return rectArea.getAttribute('fill');
        }
    };
    GaugeProgressComponent.getStrokeColor = function (ele) {
        var rectArea = __WEBPACK_IMPORTED_MODULE_2__helpers_utils__["b" /* Utils */].searchTreeStartWith(ele, this.prefixA);
        if (rectArea) {
            return rectArea.getAttribute('stroke');
        }
    };
    GaugeProgressComponent.getDefaultValue = function () {
        return { color: this.barColor };
    };
    GaugeProgressComponent.TypeTag = 'svg-ext-gauge_progress';
    GaugeProgressComponent.LabelTag = 'HtmlProgress';
    GaugeProgressComponent.prefixA = 'A-GXP_';
    GaugeProgressComponent.prefixB = 'B-GXP_';
    GaugeProgressComponent.prefixH = 'H-GXP_';
    GaugeProgressComponent.prefixMax = 'M-GXP_';
    GaugeProgressComponent.prefixMin = 'm-GXP_';
    GaugeProgressComponent.prefixValue = 'V-GXP_';
    GaugeProgressComponent.barColor = '#1565c0';
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], GaugeProgressComponent.prototype, "data", void 0);
    GaugeProgressComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'gauge-progress',
            template: __webpack_require__("../../../../../src/app/gauges/controls/gauge-progress/gauge-progress.component.html"),
            styles: [__webpack_require__("../../../../../src/app/gauges/controls/gauge-progress/gauge-progress.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], GaugeProgressComponent);
    return GaugeProgressComponent;
}(__WEBPACK_IMPORTED_MODULE_1__gauge_base_gauge_base_component__["a" /* GaugeBaseComponent */]));



/***/ }),

/***/ "../../../../../src/app/gauges/controls/gauge-semaphore/gauge-semaphore.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/gauges/controls/gauge-semaphore/gauge-semaphore.component.html":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "../../../../../src/app/gauges/controls/gauge-semaphore/gauge-semaphore.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GaugeSemaphoreComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__gauge_base_gauge_base_component__ = __webpack_require__("../../../../../src/app/gauges/gauge-base/gauge-base.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__gauge_property_gauge_property_component__ = __webpack_require__("../../../../../src/app/gauges/gauge-property/gauge-property.component.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GaugeSemaphoreComponent = (function (_super) {
    __extends(GaugeSemaphoreComponent, _super);
    function GaugeSemaphoreComponent() {
        return _super.call(this) || this;
    }
    GaugeSemaphoreComponent.prototype.ngOnInit = function () {
    };
    GaugeSemaphoreComponent.getSignals = function (pro) {
        var res = [];
        if (pro.variableId) {
            res.push(pro.variableId);
        }
        return res;
    };
    GaugeSemaphoreComponent.getDialogType = function () {
        return __WEBPACK_IMPORTED_MODULE_2__gauge_property_gauge_property_component__["b" /* GaugeDialogType */].Range;
    };
    GaugeSemaphoreComponent.processValue = function (ga, svgele, sig, gaugeStatus) {
        if (svgele.node && svgele.node.children && svgele.node.children.length <= 1) {
            var g = svgele.node.children[0];
            var clr = '';
            var val = parseFloat(sig.value);
            if (Number.isNaN(val)) {
                // maybe boolean
                val = Number(sig.value);
            }
            if (ga.property && ga.property.ranges) {
                for (var idx = 0; idx < ga.property.ranges.length; idx++) {
                    if (ga.property.ranges[idx].min <= val && ga.property.ranges[idx].max >= val) {
                        clr = ga.property.ranges[idx].color;
                    }
                }
                g.setAttribute('fill', clr);
            }
        }
    };
    GaugeSemaphoreComponent.getFillColor = function (ele) {
        if (ele.children && ele.children[0]) {
            return ele.children[0].getAttribute('fill');
        }
        return ele.getAttribute('fill');
    };
    GaugeSemaphoreComponent.getStrokeColor = function (ele) {
        if (ele.children && ele.children[0]) {
            return ele.children[0].getAttribute('stroke');
        }
        return ele.getAttribute('stroke');
    };
    GaugeSemaphoreComponent.TypeTag = 'svg-ext-gauge_semaphore';
    GaugeSemaphoreComponent.LabelTag = 'HtmlSemaphore';
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], GaugeSemaphoreComponent.prototype, "data", void 0);
    GaugeSemaphoreComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'gauge-semaphore',
            template: __webpack_require__("../../../../../src/app/gauges/controls/gauge-semaphore/gauge-semaphore.component.html"),
            styles: [__webpack_require__("../../../../../src/app/gauges/controls/gauge-semaphore/gauge-semaphore.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], GaugeSemaphoreComponent);
    return GaugeSemaphoreComponent;
}(__WEBPACK_IMPORTED_MODULE_1__gauge_base_gauge_base_component__["a" /* GaugeBaseComponent */]));



/***/ }),

/***/ "../../../../../src/app/gauges/controls/html-bag/html-bag.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/gauges/controls/html-bag/html-bag.component.html":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "../../../../../src/app/gauges/controls/html-bag/html-bag.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HtmlBagComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__gauge_base_gauge_base_component__ = __webpack_require__("../../../../../src/app/gauges/gauge-base/gauge-base.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__helpers_utils__ = __webpack_require__("../../../../../src/app/_helpers/utils.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__gauge_property_gauge_property_component__ = __webpack_require__("../../../../../src/app/gauges/gauge-property/gauge-property.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__gui_helpers_ngx_gauge_ngx_gauge_component__ = __webpack_require__("../../../../../src/app/gui-helpers/ngx-gauge/ngx-gauge.component.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HtmlBagComponent = (function (_super) {
    __extends(HtmlBagComponent, _super);
    function HtmlBagComponent(resolver) {
        var _this = _super.call(this) || this;
        _this.resolver = resolver;
        return _this;
    }
    HtmlBagComponent_1 = HtmlBagComponent;
    HtmlBagComponent.prototype.ngOnInit = function () { };
    HtmlBagComponent.getSignals = function (pro) {
        var res = [];
        if (pro.variableId) {
            res.push(pro.variableId);
        }
        return res;
    };
    HtmlBagComponent.getDialogType = function () {
        return __WEBPACK_IMPORTED_MODULE_3__gauge_property_gauge_property_component__["b" /* GaugeDialogType */].Gauge;
    };
    HtmlBagComponent.processValue = function (ga, svgele, sig, gaugeStatus, gauge) {
        gauge.setValue(sig.value);
    };
    HtmlBagComponent.initElement = function (gab, resolver, viewContainerRef, isview) {
        var ele = document.getElementById(gab.id);
        if (ele) {
            var htmlBag = __WEBPACK_IMPORTED_MODULE_2__helpers_utils__["b" /* Utils */].searchTreeStartWith(ele, this.prefixD);
            if (htmlBag) {
                var factory = resolver.resolveComponentFactory(__WEBPACK_IMPORTED_MODULE_4__gui_helpers_ngx_gauge_ngx_gauge_component__["a" /* NgxGaugeComponent */]);
                var componentRef = viewContainerRef.createComponent(factory);
                htmlBag.innerHTML = '';
                componentRef.changeDetectorRef.detectChanges();
                var loaderComponentElement = componentRef.location.nativeElement;
                htmlBag.appendChild(loaderComponentElement);
                componentRef.instance.resize(htmlBag.clientHeight, htmlBag.clientWidth);
                if (gab.property && gab.property.options) {
                    componentRef.instance.setOptions(gab.property.options);
                    componentRef.instance.init(gab.property.options.type);
                }
                return componentRef.instance;
            }
        }
    };
    HtmlBagComponent.resize = function (gab, resolver, viewContainerRef, options) {
        var ele = document.getElementById(gab.id);
        if (ele) {
            var htmlBag = __WEBPACK_IMPORTED_MODULE_2__helpers_utils__["b" /* Utils */].searchTreeStartWith(ele, this.prefixD);
            if (htmlBag) {
                var factory = resolver.resolveComponentFactory(__WEBPACK_IMPORTED_MODULE_4__gui_helpers_ngx_gauge_ngx_gauge_component__["a" /* NgxGaugeComponent */]);
                var componentRef = viewContainerRef.createComponent(factory);
                htmlBag.innerHTML = '';
                componentRef.changeDetectorRef.detectChanges();
                var loaderComponentElement = componentRef.location.nativeElement;
                htmlBag.appendChild(loaderComponentElement);
                componentRef.instance.resize(htmlBag.clientHeight, htmlBag.clientWidth);
                if (options) {
                    componentRef.instance.setOptions(options);
                    componentRef.instance.init(options.type);
                }
                return componentRef.instance;
            }
        }
    };
    HtmlBagComponent.detectChange = function (gab, res, ref) {
        var options;
        if (gab.property && gab.property.options) {
            options = gab.property.options;
        }
        return HtmlBagComponent_1.resize(gab, res, ref, options);
    };
    HtmlBagComponent.TypeTag = "svg-ext-html_bag";
    HtmlBagComponent.LabelTag = "HtmlBag";
    HtmlBagComponent.prefixD = "D-BAG_";
    HtmlBagComponent = HtmlBagComponent_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-html-bag',
            template: __webpack_require__("../../../../../src/app/gauges/controls/html-bag/html-bag.component.html"),
            styles: [__webpack_require__("../../../../../src/app/gauges/controls/html-bag/html-bag.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* ComponentFactoryResolver */]])
    ], HtmlBagComponent);
    return HtmlBagComponent;
    var HtmlBagComponent_1;
}(__WEBPACK_IMPORTED_MODULE_1__gauge_base_gauge_base_component__["a" /* GaugeBaseComponent */]));



/***/ }),

/***/ "../../../../../src/app/gauges/controls/html-button/html-button.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/gauges/controls/html-button/html-button.component.html":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "../../../../../src/app/gauges/controls/html-button/html-button.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HtmlButtonComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__gauge_base_gauge_base_component__ = __webpack_require__("../../../../../src/app/gauges/gauge-base/gauge-base.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__helpers_utils__ = __webpack_require__("../../../../../src/app/_helpers/utils.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__gauge_property_gauge_property_component__ = __webpack_require__("../../../../../src/app/gauges/gauge-property/gauge-property.component.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HtmlButtonComponent = (function (_super) {
    __extends(HtmlButtonComponent, _super);
    function HtmlButtonComponent() {
        return _super.call(this) || this;
    }
    HtmlButtonComponent.prototype.ngOnInit = function () {
    };
    HtmlButtonComponent.getSignals = function (pro) {
        var res = [];
        if (pro.variableId) {
            res.push(pro.variableId);
        }
        return res;
    };
    HtmlButtonComponent.getDialogType = function () {
        return __WEBPACK_IMPORTED_MODULE_3__gauge_property_gauge_property_component__["b" /* GaugeDialogType */].OnlyValue;
    };
    HtmlButtonComponent.initElement = function (gab) {
        var ele = document.getElementById(gab.id);
        if (ele && gab.property) {
            var htmlButton = __WEBPACK_IMPORTED_MODULE_2__helpers_utils__["b" /* Utils */].searchTreeStartWith(ele, this.prefixB);
            if (htmlButton) {
                htmlButton.innerHTML = (gab.name) ? gab.name : '<span>&nbsp;</span>';
                //   htmlLabel.style.display = (gap.style[0]) ? 'block' : 'none';
            }
        }
    };
    HtmlButtonComponent.initElementColor = function (bkcolor, color, ele) {
        var htmlButton = __WEBPACK_IMPORTED_MODULE_2__helpers_utils__["b" /* Utils */].searchTreeStartWith(ele, this.prefixB);
        if (htmlButton) {
            ele.setAttribute('fill', 'rgba(0, 0, 0, 0)');
            ele.setAttribute('stroke', 'rgba(0, 0, 0, 0)');
            for (var i = 0; i < ele.children.length; i++) {
                ele.children[i].removeAttribute('fill');
                ele.children[i].removeAttribute('stroke');
            }
            if (bkcolor) {
                htmlButton.style.backgroundColor = bkcolor;
            }
            if (color) {
                htmlButton.style.color = color;
            }
            // htmlButton.innerHTML = gab.name;
            //   htmlLabel.style.display = (gap.style[0]) ? 'block' : 'none';
        }
    };
    HtmlButtonComponent.processValue = function (ga, svgele, sig, gaugeStatus) {
        // if (svgele.node && svgele.node.children && svgele.node.children.length >= 1) {
        //   let input = Utils.searchTreeStartWith(svgele.node, this.prefix);
        //   if (input) {
        //     let val = parseInt(sig.value, 10);
        //     input.value = val;
        //   }
        // }
    };
    HtmlButtonComponent.getFillColor = function (ele) {
        if (ele.children && ele.children[0]) {
            var htmlButton = __WEBPACK_IMPORTED_MODULE_2__helpers_utils__["b" /* Utils */].searchTreeStartWith(ele, this.prefixRect);
            if (htmlButton) {
                return htmlButton.getAttribute('fill');
            }
        }
        return ele.getAttribute('fill');
    };
    HtmlButtonComponent.getStrokeColor = function (ele) {
        if (ele.children && ele.children[0]) {
            var htmlButton = __WEBPACK_IMPORTED_MODULE_2__helpers_utils__["b" /* Utils */].searchTreeStartWith(ele, this.prefixRect);
            if (htmlButton) {
                return htmlButton.getAttribute('stroke');
            }
        }
        return ele.getAttribute('stroke');
    };
    HtmlButtonComponent.TypeTag = 'svg-ext-html_button';
    HtmlButtonComponent.LabelTag = 'HtmlButton';
    HtmlButtonComponent.prefixB = 'B-HXB_';
    HtmlButtonComponent.prefixRect = 'svg_';
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], HtmlButtonComponent.prototype, "data", void 0);
    HtmlButtonComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'html-button',
            template: __webpack_require__("../../../../../src/app/gauges/controls/html-button/html-button.component.html"),
            styles: [__webpack_require__("../../../../../src/app/gauges/controls/html-button/html-button.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HtmlButtonComponent);
    return HtmlButtonComponent;
}(__WEBPACK_IMPORTED_MODULE_1__gauge_base_gauge_base_component__["a" /* GaugeBaseComponent */]));



/***/ }),

/***/ "../../../../../src/app/gauges/controls/html-chart/html-chart.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/gauges/controls/html-chart/html-chart.component.html":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "../../../../../src/app/gauges/controls/html-chart/html-chart.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HtmlChartComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__gauge_base_gauge_base_component__ = __webpack_require__("../../../../../src/app/gauges/gauge-base/gauge-base.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__helpers_utils__ = __webpack_require__("../../../../../src/app/_helpers/utils.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__gauge_property_gauge_property_component__ = __webpack_require__("../../../../../src/app/gauges/gauge-property/gauge-property.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__gui_helpers_ngx_dygraphs_ngx_dygraphs_component__ = __webpack_require__("../../../../../src/app/gui-helpers/ngx-dygraphs/ngx-dygraphs.component.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HtmlChartComponent = (function (_super) {
    __extends(HtmlChartComponent, _super);
    function HtmlChartComponent(resolver) {
        var _this = _super.call(this) || this;
        _this.resolver = resolver;
        return _this;
    }
    HtmlChartComponent.prototype.ngOnInit = function () { };
    HtmlChartComponent.getSignals = function (pro) {
        return pro.variableIds;
    };
    HtmlChartComponent.getDialogType = function () {
        return __WEBPACK_IMPORTED_MODULE_3__gauge_property_gauge_property_component__["b" /* GaugeDialogType */].Chart;
    };
    HtmlChartComponent.processValue = function (ga, svgele, sig, gaugeStatus, gauge) {
        gauge.addValue(sig.id, sig.value);
    };
    HtmlChartComponent.initElement = function (gab, resolver, viewContainerRef, isview, chartRange) {
        var ele = document.getElementById(gab.id);
        if (ele) {
            var htmlChart = __WEBPACK_IMPORTED_MODULE_2__helpers_utils__["b" /* Utils */].searchTreeStartWith(ele, this.prefixD);
            if (htmlChart) {
                var factory = resolver.resolveComponentFactory(__WEBPACK_IMPORTED_MODULE_4__gui_helpers_ngx_dygraphs_ngx_dygraphs_component__["a" /* NgxDygraphsComponent */]);
                var componentRef = viewContainerRef.createComponent(factory);
                if (gab.property) {
                    componentRef.instance.withToolbar = (gab.property.type === 'history') ? true : false;
                }
                htmlChart.innerHTML = '';
                var options = { interactionModel: {} }; // option to remove interaction in editor modus
                if (isview) {
                    options = null;
                }
                componentRef.instance.defOptions = Object.assign(componentRef.instance.defOptions, options);
                componentRef.instance.isEditor = !isview;
                componentRef.instance.rangeType = chartRange;
                componentRef.instance.id = gab.id;
                componentRef.changeDetectorRef.detectChanges();
                var loaderComponentElement = componentRef.location.nativeElement;
                htmlChart.appendChild(loaderComponentElement);
                componentRef.instance.resize(htmlChart.clientHeight - ((componentRef.instance.withToolbar) ? 34 : 0), htmlChart.clientWidth);
                return componentRef.instance;
            }
        }
    };
    HtmlChartComponent.resize = function (gab, resolver, viewContainerRef, options) {
        var ele = document.getElementById(gab.id);
        if (ele) {
            var htmlChart = __WEBPACK_IMPORTED_MODULE_2__helpers_utils__["b" /* Utils */].searchTreeStartWith(ele, this.prefixD);
            if (htmlChart) {
                var factory = resolver.resolveComponentFactory(__WEBPACK_IMPORTED_MODULE_4__gui_helpers_ngx_dygraphs_ngx_dygraphs_component__["a" /* NgxDygraphsComponent */]);
                var componentRef = viewContainerRef.createComponent(factory);
                htmlChart.innerHTML = '';
                var options_1 = { interactionModel: {} }; // option to remove interaction in editor modus
                if (gab.property) {
                    componentRef.instance.withToolbar = (gab.property.type === 'history') ? true : false;
                }
                componentRef.instance.defOptions = Object.assign(componentRef.instance.defOptions, options_1);
                componentRef.instance.isEditor = true;
                componentRef.changeDetectorRef.detectChanges();
                var loaderComponentElement = componentRef.location.nativeElement;
                htmlChart.appendChild(loaderComponentElement);
                componentRef.instance.resize();
                return componentRef.instance;
            }
        }
    };
    HtmlChartComponent.detectChange = function (gab) {
        var ele = document.getElementById(gab.id);
        if (ele) {
            var htmlChart = __WEBPACK_IMPORTED_MODULE_2__helpers_utils__["b" /* Utils */].searchTreeStartWith(ele, this.prefixD);
            var txt = htmlChart.namespaceURI;
        }
    };
    HtmlChartComponent.TypeTag = "svg-ext-html_chart";
    HtmlChartComponent.LabelTag = "HtmlChart";
    HtmlChartComponent.prefixD = "D-HXC_";
    HtmlChartComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "html-chart",
            template: __webpack_require__("../../../../../src/app/gauges/controls/html-chart/html-chart.component.html"),
            styles: [__webpack_require__("../../../../../src/app/gauges/controls/html-chart/html-chart.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* ComponentFactoryResolver */]])
    ], HtmlChartComponent);
    return HtmlChartComponent;
}(__WEBPACK_IMPORTED_MODULE_1__gauge_base_gauge_base_component__["a" /* GaugeBaseComponent */]));



/***/ }),

/***/ "../../../../../src/app/gauges/controls/html-input/html-input.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/gauges/controls/html-input/html-input.component.html":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "../../../../../src/app/gauges/controls/html-input/html-input.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HtmlInputComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__gauge_base_gauge_base_component__ = __webpack_require__("../../../../../src/app/gauges/gauge-base/gauge-base.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_hmi__ = __webpack_require__("../../../../../src/app/_models/hmi.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__helpers_utils__ = __webpack_require__("../../../../../src/app/_helpers/utils.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__gauge_property_gauge_property_component__ = __webpack_require__("../../../../../src/app/gauges/gauge-property/gauge-property.component.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HtmlInputComponent = (function (_super) {
    __extends(HtmlInputComponent, _super);
    function HtmlInputComponent() {
        return _super.call(this) || this;
    }
    HtmlInputComponent.prototype.ngOnInit = function () {
    };
    HtmlInputComponent.getSignals = function (pro) {
        var res = [];
        if (pro.variableId) {
            res.push(pro.variableId);
        }
        return res;
    };
    HtmlInputComponent.getDialogType = function () {
        return __WEBPACK_IMPORTED_MODULE_4__gauge_property_gauge_property_component__["b" /* GaugeDialogType */].OnlyValue;
    };
    HtmlInputComponent.getHtmlEvents = function (ga) {
        var ele = document.getElementById(ga.id);
        if (ele) {
            var input = __WEBPACK_IMPORTED_MODULE_3__helpers_utils__["b" /* Utils */].searchTreeStartWith(ele, this.prefix);
            if (input) {
                var event_1 = new __WEBPACK_IMPORTED_MODULE_2__models_hmi__["b" /* Event */]();
                event_1.dom = input;
                event_1.type = 'key-enter';
                event_1.ga = ga;
                return event_1;
            }
        }
        return null;
    };
    HtmlInputComponent.processValue = function (ga, svgele, sig, gaugeStatus) {
        if (svgele.node && svgele.node.children && svgele.node.children.length >= 1) {
            var input = __WEBPACK_IMPORTED_MODULE_3__helpers_utils__["b" /* Utils */].searchTreeStartWith(svgele.node, this.prefix);
            if (input) {
                var val = parseFloat(sig.value);
                if (Number.isNaN(val)) {
                    // maybe boolean
                    val = Number(sig.value);
                }
                else {
                    val = parseFloat(val.toFixed(5));
                }
                if (!input.value || input.value.length <= 0) {
                    input.value = val;
                }
            }
        }
    };
    HtmlInputComponent.initElementColor = function (bkcolor, color, ele) {
        var htmlInput = __WEBPACK_IMPORTED_MODULE_3__helpers_utils__["b" /* Utils */].searchTreeStartWith(ele, this.prefix);
        if (htmlInput) {
            if (bkcolor) {
                htmlInput.style.backgroundColor = bkcolor;
            }
            if (color) {
                htmlInput.style.color = color;
            }
        }
    };
    HtmlInputComponent.getFillColor = function (ele) {
        if (ele.children && ele.children[0]) {
            var htmlInput = __WEBPACK_IMPORTED_MODULE_3__helpers_utils__["b" /* Utils */].searchTreeStartWith(ele, this.prefix);
            if (htmlInput) {
                return htmlInput.style.backgroundColor;
            }
        }
        return ele.getAttribute('fill');
    };
    HtmlInputComponent.getStrokeColor = function (ele) {
        if (ele.children && ele.children[0]) {
            var htmlInput = __WEBPACK_IMPORTED_MODULE_3__helpers_utils__["b" /* Utils */].searchTreeStartWith(ele, this.prefix);
            if (htmlInput) {
                return htmlInput.style.color;
            }
        }
        return ele.getAttribute('stroke');
    };
    HtmlInputComponent.TypeTag = 'svg-ext-html_input';
    HtmlInputComponent.LabelTag = 'HtmlInput';
    HtmlInputComponent.prefix = 'I-HXI_';
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], HtmlInputComponent.prototype, "data", void 0);
    HtmlInputComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'html-input',
            template: __webpack_require__("../../../../../src/app/gauges/controls/html-input/html-input.component.html"),
            styles: [__webpack_require__("../../../../../src/app/gauges/controls/html-input/html-input.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HtmlInputComponent);
    return HtmlInputComponent;
}(__WEBPACK_IMPORTED_MODULE_1__gauge_base_gauge_base_component__["a" /* GaugeBaseComponent */]));



/***/ }),

/***/ "../../../../../src/app/gauges/controls/html-select/html-select.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/gauges/controls/html-select/html-select.component.html":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "../../../../../src/app/gauges/controls/html-select/html-select.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HtmlSelectComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__gauge_base_gauge_base_component__ = __webpack_require__("../../../../../src/app/gauges/gauge-base/gauge-base.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_hmi__ = __webpack_require__("../../../../../src/app/_models/hmi.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__helpers_utils__ = __webpack_require__("../../../../../src/app/_helpers/utils.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__gauge_property_gauge_property_component__ = __webpack_require__("../../../../../src/app/gauges/gauge-property/gauge-property.component.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HtmlSelectComponent = (function (_super) {
    __extends(HtmlSelectComponent, _super);
    function HtmlSelectComponent() {
        return _super.call(this) || this;
    }
    HtmlSelectComponent.prototype.ngOnInit = function () {
    };
    HtmlSelectComponent.getSignals = function (pro) {
        var res = [];
        if (pro.variableId) {
            res.push(pro.variableId);
        }
        return res;
    };
    HtmlSelectComponent.getDialogType = function () {
        return __WEBPACK_IMPORTED_MODULE_4__gauge_property_gauge_property_component__["b" /* GaugeDialogType */].Step;
    };
    HtmlSelectComponent.getHtmlEvents = function (ga) {
        var ele = document.getElementById(ga.id);
        if (ele) {
            var select = __WEBPACK_IMPORTED_MODULE_3__helpers_utils__["b" /* Utils */].searchTreeStartWith(ele, this.prefix);
            if (select) {
                var event_1 = new __WEBPACK_IMPORTED_MODULE_2__models_hmi__["b" /* Event */]();
                event_1.dom = select;
                event_1.type = 'change';
                event_1.ga = ga;
                return event_1;
            }
        }
        return null;
    };
    HtmlSelectComponent.processValue = function (ga, svgele, sig, gaugeStatus) {
        var select = __WEBPACK_IMPORTED_MODULE_3__helpers_utils__["b" /* Utils */].searchTreeStartWith(svgele.node, this.prefix);
        if (select) {
            var val = parseFloat(sig.value);
            if (Number.isNaN(val)) {
                // maybe boolean
                val = Number(sig.value);
            }
            else {
                val = parseFloat(val.toFixed(5));
            }
            select.value = val;
        }
    };
    HtmlSelectComponent.initElement = function (ga) {
        var ele = document.getElementById(ga.id);
        if (ele) {
            var select_1 = __WEBPACK_IMPORTED_MODULE_3__helpers_utils__["b" /* Utils */].searchTreeStartWith(ele, this.prefix);
            if (select_1) {
                select_1.innerHTML = "";
                ga.property.ranges.forEach(function (element) {
                    var option = document.createElement("option");
                    option.value = element.min;
                    if (element.text) {
                        option.text = element.text;
                    }
                    select_1.appendChild(option);
                });
            }
        }
    };
    HtmlSelectComponent.initElementColor = function (bkcolor, color, ele) {
        var select = __WEBPACK_IMPORTED_MODULE_3__helpers_utils__["b" /* Utils */].searchTreeStartWith(ele, this.prefix);
        if (select) {
            if (bkcolor) {
                select.style.backgroundColor = bkcolor;
            }
            if (color) {
                select.style.color = color;
            }
        }
    };
    HtmlSelectComponent.getFillColor = function (ele) {
        if (ele.children && ele.children[0]) {
            var select = __WEBPACK_IMPORTED_MODULE_3__helpers_utils__["b" /* Utils */].searchTreeStartWith(ele, this.prefix);
            if (select) {
                return select.style.backgroundColor;
            }
        }
        return ele.getAttribute('fill');
    };
    HtmlSelectComponent.getStrokeColor = function (ele) {
        if (ele.children && ele.children[0]) {
            var select = __WEBPACK_IMPORTED_MODULE_3__helpers_utils__["b" /* Utils */].searchTreeStartWith(ele, this.prefix);
            if (select) {
                return select.style.color;
            }
        }
        return ele.getAttribute('stroke');
    };
    HtmlSelectComponent.TypeTag = 'svg-ext-html_select';
    HtmlSelectComponent.LabelTag = 'HtmlSelect';
    HtmlSelectComponent.prefix = 'S-HXS_';
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], HtmlSelectComponent.prototype, "data", void 0);
    HtmlSelectComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'html-select',
            template: __webpack_require__("../../../../../src/app/gauges/controls/html-select/html-select.component.html"),
            styles: [__webpack_require__("../../../../../src/app/gauges/controls/html-select/html-select.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HtmlSelectComponent);
    return HtmlSelectComponent;
}(__WEBPACK_IMPORTED_MODULE_1__gauge_base_gauge_base_component__["a" /* GaugeBaseComponent */]));



/***/ }),

/***/ "../../../../../src/app/gauges/controls/value/value.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/gauges/controls/value/value.component.html":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "../../../../../src/app/gauges/controls/value/value.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValueComponent; });
/* unused harmony export ValueProperty */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__gauge_base_gauge_base_component__ = __webpack_require__("../../../../../src/app/gauges/gauge-base/gauge-base.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__gauge_property_gauge_property_component__ = __webpack_require__("../../../../../src/app/gauges/gauge-property/gauge-property.component.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ValueComponent = (function (_super) {
    __extends(ValueComponent, _super);
    function ValueComponent() {
        return _super.call(this) || this;
    }
    ValueComponent.prototype.ngOnInit = function () {
    };
    ValueComponent.getSignals = function (pro) {
        var res = [];
        if (pro.variableId) {
            res.push(pro.variableId);
        }
        return res;
    };
    ValueComponent.getDialogType = function () {
        return __WEBPACK_IMPORTED_MODULE_2__gauge_property_gauge_property_component__["b" /* GaugeDialogType */].ValueAndUnit;
    };
    ValueComponent.processValue = function (ga, svgele, sig, gaugeStatus) {
        if (svgele.node && svgele.node.children && svgele.node.children.length <= 1) {
            var g = svgele.node.children[0];
            var val = parseFloat(sig.value);
            if (Number.isNaN(val)) {
                // maybe boolean
                val = Number(sig.value);
                // maybe string
                if (Number.isNaN(val)) {
                    val = sig.value;
                }
            }
            else {
                val = parseFloat(val.toFixed(5));
            }
            var unit = __WEBPACK_IMPORTED_MODULE_1__gauge_base_gauge_base_component__["a" /* GaugeBaseComponent */].getUnit(ga.property);
            g.textContent = val;
            if (unit) {
                g.textContent += unit;
            }
        }
    };
    ValueComponent.TypeTag = 'svg-ext-value';
    ValueComponent.LabelTag = 'Value';
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], ValueComponent.prototype, "data", void 0);
    ValueComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'gauge-value',
            template: __webpack_require__("../../../../../src/app/gauges/controls/value/value.component.html"),
            styles: [__webpack_require__("../../../../../src/app/gauges/controls/value/value.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ValueComponent);
    return ValueComponent;
}(__WEBPACK_IMPORTED_MODULE_1__gauge_base_gauge_base_component__["a" /* GaugeBaseComponent */]));

var ValueProperty = (function () {
    function ValueProperty() {
        this.signalid = '';
        this.format = '##.##';
    }
    return ValueProperty;
}());



/***/ }),

/***/ "../../../../../src/app/gauges/gauge-base/gauge-base.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".svg-property-split2:after {\r\n  display: table;\r\n  clear: both;\r\n}\r\n\r\n.svg-property-split2 div {\r\n  /* float: left; */\r\n  /* width: 49%; */\r\n  display: inline-block;\r\n}\r\n\r\n.svg-property {\r\n  /* display: block; */\r\n  color: rgba(255,255,255,0.75);\r\n  /* position: relative; */\r\n  /* left: 5px; */\r\n  /* right: 5px; */\r\n  /* width: 100%; */\r\n}\r\n\r\n.svg-property span {\r\n  /* float: left; */\r\n  display: block;\r\n  font-size: 10px;\r\n  margin: 0px 5px 0px 10px;\r\n}\r\n\r\n.svg-property input {\r\n  /* float: right; */\r\n  /* position: relative; */\r\n  /* left: 0px; */\r\n  /* right: 0px; */\r\n  display: block;\r\n  margin: 0px 10px 12px 10px;\r\n  border: unset;\r\n  background-color: inherit;\r\n  color: inherit;\r\n  border-bottom: 1px solid rgba(255,255,255,0.75);\r\n}\r\n\r\n.mat-button {\r\n  min-width: 60px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/gauges/gauge-base/gauge-base.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"svg-property-split2\" *ngIf=\"settings\">\n  <div class=\"svg-property\" title=\"Gauge name\">\n    <span>name</span>\n    <input type=\"text\" id=\"gaugename\" [(ngModel)]=\"settings.name\"  type=\"text\" readonly />\n  </div>\n  <div class=\"svg-property\" style=\"display:block !important; padding: 0px 10px 5px 10px;\" title=\"Change rectangle height\">\n    <button mat-button color=\"primary\" style=\"background-color: dimgrey;color:white; display: inline-block\" (click)=\"onEdit()\">{{'gauges.property-title' | translate}}</button>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/gauges/gauge-base/gauge-base.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GaugeBaseComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_hmi__ = __webpack_require__("../../../../../src/app/_models/hmi.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// declare var SVG: any;
var GaugeBaseComponent = (function () {
    function GaugeBaseComponent() {
        this.edit = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
    }
    GaugeBaseComponent.prototype.ngOnInit = function () {
    };
    GaugeBaseComponent.prototype.onEdit = function () {
        this.edit.emit(this.settings);
    };
    GaugeBaseComponent.pathToAbsolute = function (relativePath) {
        var pattern = /([ml])\s*(-?\d*\.?\d+)\s*,\s*(-?\d*\.?\d+)/ig, coords = [];
        relativePath.replace(pattern, function (match, command, x, y) {
            var prev;
            x = parseFloat(x);
            y = parseFloat(y);
            if (coords.length === 0 || command.toUpperCase() === command) {
                coords.push([x, y]);
            }
            else {
                prev = coords[coords.length - 1];
                coords.push([x + prev[0], y + prev[1]]);
            }
        });
        return coords;
    };
    GaugeBaseComponent.getEvents = function (pro, type) {
        var res = [];
        if (!pro || !pro.events) {
            return null;
        }
        var idxtype = Object.values(__WEBPACK_IMPORTED_MODULE_1__models_hmi__["f" /* GaugeEventType */]).indexOf(type);
        pro.events.forEach(function (ev) {
            if (Object.keys(__WEBPACK_IMPORTED_MODULE_1__models_hmi__["f" /* GaugeEventType */]).indexOf(ev.type) === idxtype) {
                res.push(ev);
            }
        });
        return res;
    };
    GaugeBaseComponent.getUnit = function (pro) {
        if (pro) {
            if (pro.ranges && pro.ranges.length > 0 && pro.ranges[0].type === 'unit') {
                return pro.ranges[0].text;
            }
        }
        return '';
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], GaugeBaseComponent.prototype, "data", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__models_hmi__["i" /* GaugeSettings */])
    ], GaugeBaseComponent.prototype, "settings", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */])
    ], GaugeBaseComponent.prototype, "edit", void 0);
    GaugeBaseComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'gauge-base',
            template: __webpack_require__("../../../../../src/app/gauges/gauge-base/gauge-base.component.html"),
            styles: [__webpack_require__("../../../../../src/app/gauges/gauge-base/gauge-base.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], GaugeBaseComponent);
    return GaugeBaseComponent;
}());



/***/ }),

/***/ "../../../../../src/app/gauges/gauge-property/flex-action/flex-action.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".item {\r\n    display: block;\r\n    min-height: 100px;\r\n    width: 100%;\r\n    border-bottom: 1px solid rgba(0,0,0,0.1);\r\n    padding: 5px 0px 0px 0px;\r\n    margin-bottom: -1px;\r\n}\r\n\r\n.item-head {\r\n    display: block;\r\n}\r\n\r\n.remove {\r\n    position: relative;\r\n    top: 4px;\r\n    right: 0px;\r\n}\r\n\r\n.item-remove {\r\n    display: inline-block;\r\n    float: right;\r\n    /* padding-top: 6px; */\r\n    /* min-width: 140px; */\r\n}\r\n\r\n.item-content {\r\n    display: block;\r\n    padding-top: 7px;\r\n}\r\n\r\n.item-range {\r\n    display: inline-block;\r\n    min-width: 240px;\r\n    width: 240px;\r\n    margin-left: 30px;\r\n}\r\n\r\n::ng-deep .ng5-slider .ng5-slider-pointer { \r\n    width: 16px !important;\r\n    height: 16px !important;\r\n    border-radius: 8px !important; \r\n    top: -7px !important \r\n}\r\n::ng-deep .ng5-slider .ng5-slider-pointer:after { \r\n    top: 6px !important;\r\n    left: 6px !important;\r\n    width: 4px !important;\r\n    height: 4px !important; \r\n    border-radius: 2px !important \r\n}\r\n\r\n.input-slider {\r\n    display: inline;\r\n    /* max-width: 160px; */\r\n}\r\n::ng-deep .input-slider span {\r\n    font-size: 14px !important;\r\n}\r\n.input-slider ng5-slider {\r\n    /* display: block; */\r\n    max-width: 300px;\r\n    margin-top: 29px;\r\n    margin-right: 20px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/gauges/gauge-property/flex-action/flex-action.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngFor=\"let item of actions; index as i\" class=\"item\">\n    <flex-variable class=\"item-head\" [data]=\"data\" (onchange)=\"setVariable(i, $event)\" [variableSrc]=\"item.variableSrc\" [variableId]=\"item.variableId\" [variable]=\"item.variable\"></flex-variable>\n    <div class=\"item-content\">\n        <div *ngIf=\"slideView\" class=\"item-range\">\n            <div class=\"my-form-field\">\n                <span>{{'gauges.property-input-min' | translate}}</span>\n                <input numberOnly [(ngModel)]=\"item.range.min\" type=\"text\" style=\"width: 80px\">\n            </div>\n            <div class=\"my-form-field\" style=\"padding-left: 20px;\">\n                <span>{{'gauges.property-input-max' | translate}}</span>\n                <input numberOnly [(ngModel)]=\"item.range.max\" type=\"text\" style=\"width: 80px\">\n            </div>\n        </div>\n        <!-- <div class=\"item-range input-slider\" *ngIf=\"!slideView\">\n            <ng5-slider [(value)]=\"item.min\" [(highValue)]=\"item.max\" [options]=\"options\"></ng5-slider>\n        </div> -->\n        <div class=\"my-form-field\" style=\"width: 300px;\">\n            <span>{{'gauges.property-action-type' | translate}}</span>\n            <mat-select [(value)]=\"item.type\">\n                <mat-option *ngFor=\"let ev of actionType | enumToArray\" [value]=\"ev.key\">\n                    {{ ev.value }}\n                </mat-option>\n            </mat-select>\n        </div>\n        <div class=\"item-remove\">\n            <button mat-icon-button (click)=\"onRemoveAction(i)\" class=\"_remove\">\n                <mat-icon>clear</mat-icon>\n            </button>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/gauges/gauge-property/flex-action/flex-action.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlexActionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__("../../../../@ngx-translate/core/@ngx-translate/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_hmi__ = __webpack_require__("../../../../../src/app/_models/hmi.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FlexActionComponent = (function () {
    function FlexActionComponent(translateService) {
        this.translateService = translateService;
        this.slideView = true;
    }
    FlexActionComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.property) {
            this.actions = this.property.actions;
        }
        if (!this.actions || this.actions.length <= 0) {
            this.onAddAction();
        }
        // this.itemtype = this.data.withActions.clockwise;
        if (this.data.withActions) {
            this.actionType = this.data.withActions;
            Object.keys(this.actionType).forEach(function (key) {
                _this.translateService.get(_this.actionType[key]).subscribe(function (txt) { _this.actionType[key] = txt; });
            });
        }
    };
    FlexActionComponent.prototype.getActions = function () {
        var result = null;
        if (this.actions) {
            result = [];
            this.actions.forEach(function (act) {
                if (act.variableId) {
                    result.push(act);
                }
            });
        }
        return result;
    };
    FlexActionComponent.prototype.onAddAction = function () {
        var ga = new __WEBPACK_IMPORTED_MODULE_2__models_hmi__["c" /* GaugeAction */]();
        ga.range = new __WEBPACK_IMPORTED_MODULE_2__models_hmi__["h" /* GaugeRangeProperty */]();
        this.addAction(ga);
    };
    FlexActionComponent.prototype.onRemoveAction = function (index) {
        this.actions.splice(index, 1);
    };
    FlexActionComponent.prototype.onRangeViewToggle = function (slideView) {
        this.slideView = slideView;
        // this.flexInput.changeTag(this.currentTag);
    };
    FlexActionComponent.prototype.setVariable = function (index, event) {
        this.actions[index].variableSrc = event.variableSrc;
        this.actions[index].variableId = event.variableId;
        this.actions[index].variable = event.variable;
    };
    FlexActionComponent.prototype.addAction = function (ga) {
        if (!this.actions) {
            this.actions = [];
        }
        this.actions.push(ga);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], FlexActionComponent.prototype, "data", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__models_hmi__["g" /* GaugeProperty */])
    ], FlexActionComponent.prototype, "property", void 0);
    FlexActionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'flex-action',
            template: __webpack_require__("../../../../../src/app/gauges/gauge-property/flex-action/flex-action.component.html"),
            styles: [__webpack_require__("../../../../../src/app/gauges/gauge-property/flex-action/flex-action.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateService */]])
    ], FlexActionComponent);
    return FlexActionComponent;
}());



/***/ }),

/***/ "../../../../../src/app/gauges/gauge-property/flex-auth/flex-auth.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/gauges/gauge-property/flex-auth/flex-auth.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"my-form-field\">\n    <span>{{'gauges.property-name' | translate}}</span>\n    <input [(ngModel)]=\"name\" style=\"width: 220px\" type=\"text\">\n</div>\n<div class=\"my-form-field\" style=\"vertical-align: bottom; margin-left: 13px;\">\n    <span>{{'gauges.property-permission' | translate}}</span>\n    <div style=\"width:80px;height:30px;background-color:#f1f3f4;text-align:center;cursor:pointer;\" (click)=\"onEditPermission()\">\n        <mat-icon class=\"header-icon\" style=\"line-height: 30px;\" *ngIf=\"!permission\">lock_open</mat-icon>\n        <mat-icon class=\"header-icon\" style=\"line-height: 30px;\" *ngIf=\"permission\">lock</mat-icon>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/gauges/gauge-property/flex-auth/flex-auth.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlexAuthComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__gauge_property_gauge_property_component__ = __webpack_require__("../../../../../src/app/gauges/gauge-property/gauge-property.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FlexAuthComponent = (function () {
    function FlexAuthComponent(dialog) {
        this.dialog = dialog;
    }
    FlexAuthComponent.prototype.ngOnInit = function () {
        // this.property = JSON.parse(JSON.stringify(this.data.settings.property));
    };
    FlexAuthComponent.prototype.onEditPermission = function () {
        var _this = this;
        var permission = this.permission;
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_2__gauge_property_gauge_property_component__["a" /* DialogGaugePermission */], {
            minWidth: '350px',
            data: { permission: permission },
            position: { top: '90px' }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.permission = result.permission;
            }
        });
    };
    FlexAuthComponent.prototype.getResult = function () {
        return { name: this.name, pemission: this.permission };
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", String)
    ], FlexAuthComponent.prototype, "name", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Number)
    ], FlexAuthComponent.prototype, "permission", void 0);
    FlexAuthComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'flex-auth',
            template: __webpack_require__("../../../../../src/app/gauges/gauge-property/flex-auth/flex-auth.component.html"),
            styles: [__webpack_require__("../../../../../src/app/gauges/gauge-property/flex-auth/flex-auth.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["j" /* MatDialog */]])
    ], FlexAuthComponent);
    return FlexAuthComponent;
}());



/***/ }),

/***/ "../../../../../src/app/gauges/gauge-property/flex-event/flex-event.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".item {\r\n    display: block;\r\n    min-height: 54px;\r\n    width: 100%;\r\n    border-bottom: 1px solid rgba(0,0,0,0.1);\r\n    padding: 5px 0px 0px 0px;\r\n    margin-bottom: -1px;\r\n}\r\n\r\n.remove {\r\n    position: relative;\r\n    top: 4px;\r\n    right: 0px;\r\n}\r\n\r\n.item-remove {\r\n    display: inline-block;\r\n    float: right;\r\n    /* padding-top: 6px; */\r\n    /* min-width: 140px; */\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/gauges/gauge-property/flex-event/flex-event.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngFor=\"let item of events; index as i\" class=\"item\">\n  <div class=\"my-form-field\" style=\"width: 140px;\">\n    <span>{{'gauges.property-event-type' | translate}}</span>\n    <mat-select [(value)]=\"item.type\" >\n      <mat-option *ngFor=\"let ev of eventType | enumToArray\" [value]=\"ev.key\">\n        {{ ev.value }}\n      </mat-option>\n    </mat-select>\n  </div>\n  <div class=\"my-form-field\" style=\"width: 140px;padding-left: 20px\">\n    <span>{{'gauges.property-event-action' | translate}}</span>\n    <mat-select [(value)]=\"item.action\" (change)=\"item.actparam = '';\">\n      <mat-option *ngFor=\"let type of actionType | enumToArray\" [value]=\"type.key\">\n        {{ type.value }}\n      </mat-option>\n    </mat-select>\n  </div>\n  <div class=\"my-form-field\" style=\"width: 200px;padding-left: 20px\" *ngIf=\"withDestination(item.action)\">\n    <span>{{'gauges.property-event-destination' | translate}}</span>\n    <mat-select [(value)]=\"item.actparam\">\n      <mat-option *ngFor=\"let v of views; index as i\" [(value)]=\"v.id\">{{v.name}}</mat-option>\n    </mat-select>\n  </div>\n  <div class=\"my-form-field\" style=\"padding-left: 20px;\" *ngIf=\"withSetValue(item.action)\">\n    <span>{{'gauges.property-event-value' | translate}}</span>\n    <input numberOnly [(ngModel)]=\"item.actparam\" type=\"text\" style=\"width: 100px\">\n  </div>\n  <div class=\"item-remove\">\n    <button mat-icon-button (click)=\"onRemoveEvent(i)\" class=\"remove\">\n      <mat-icon>clear</mat-icon>\n    </button>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/gauges/gauge-property/flex-event/flex-event.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlexEventComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_hmi__ = __webpack_require__("../../../../../src/app/_models/hmi.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FlexEventComponent = (function () {
    function FlexEventComponent() {
    }
    FlexEventComponent.prototype.ngOnInit = function () {
        this.eventType = __WEBPACK_IMPORTED_MODULE_1__models_hmi__["f" /* GaugeEventType */];
        this.actionType = __WEBPACK_IMPORTED_MODULE_1__models_hmi__["e" /* GaugeEventActionType */];
        if (this.property) {
            this.events = this.property.events;
        }
        if (!this.events || this.events.length <= 0) {
            this.onAddEvent();
        }
    };
    FlexEventComponent.prototype.getEvents = function () {
        var result = [];
        if (this.events) {
            this.events.forEach(function (element) {
                if (element.type) {
                    result.push(element);
                }
            });
        }
        return result;
    };
    FlexEventComponent.prototype.onAddEvent = function () {
        var ga = new __WEBPACK_IMPORTED_MODULE_1__models_hmi__["d" /* GaugeEvent */]();
        this.addEvent(ga);
    };
    FlexEventComponent.prototype.onRemoveEvent = function (index) {
        this.events.splice(index, 1);
    };
    FlexEventComponent.prototype.withDestination = function (action) {
        var a = Object.keys(this.actionType).indexOf(action);
        var b = Object.values(this.actionType).indexOf(__WEBPACK_IMPORTED_MODULE_1__models_hmi__["e" /* GaugeEventActionType */].onSetValue);
        return (a >= 0 && a != b) ? true : false;
    };
    FlexEventComponent.prototype.withSetValue = function (action) {
        var a = Object.keys(this.actionType).indexOf(action);
        var b = Object.values(this.actionType).indexOf(__WEBPACK_IMPORTED_MODULE_1__models_hmi__["e" /* GaugeEventActionType */].onSetValue);
        return (a === b) ? true : false;
    };
    FlexEventComponent.prototype.addEvent = function (ge) {
        if (!this.events) {
            this.events = [];
        }
        this.events.push(ge);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__models_hmi__["g" /* GaugeProperty */])
    ], FlexEventComponent.prototype, "property", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Array)
    ], FlexEventComponent.prototype, "views", void 0);
    FlexEventComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'flex-event',
            template: __webpack_require__("../../../../../src/app/gauges/gauge-property/flex-event/flex-event.component.html"),
            styles: [__webpack_require__("../../../../../src/app/gauges/gauge-property/flex-event/flex-event.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FlexEventComponent);
    return FlexEventComponent;
}());



/***/ }),

/***/ "../../../../../src/app/gauges/gauge-property/flex-head/flex-head.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container {\r\n  /* border: 1px solid rgba(248,249,250, 1); */\r\n}\r\n.head {\r\n    /* background-color: rgba(243,243,243, 1); */\r\n    /* padding-left: 10px; */\r\n    /* padding-right: 10px; */\r\n    padding-top: 0px;\r\n}\r\n.selection {\r\n  margin-right: 20px;\r\n  margin-bottom: -10px;\r\n  margin-top: 2px;\r\n  width: 220px;\r\n}\r\n\r\n.selection .mat-form-field-wrapper {\r\n  padding-bottom: 15px !important;\r\n}\r\n.item-set {\r\n  display: inline-block;\r\n  float: right;\r\n  padding-top: 13px;\r\n  min-width: 140px;\r\n}\r\n.panel-color-class {\r\n  position: relative;\r\n  top: 30px;\r\n}\r\n.panel-color {\r\n  display: inline-block;\r\n  padding-top: 10px;\r\n  max-width: 60px;\r\n  /* border: 1px solid rgba(0,0,0,0.1); */\r\n  height: 20px;\r\n  line-height: 12px;\r\n  margin-right: 25px;\r\n}\r\n.option-color {\r\n  height: 32px !important;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/gauges/gauge-property/flex-head/flex-head.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"head\" style=\"padding-top: 10px;\">\n    <div class=\"my-form-field\" style=\"width: 220px;\">\n      <span>{{'gauges.property-head-device' | translate}}</span>\n      <mat-select [formControl]=\"deviceCtrl\" (selectionChange)=\"onDeviceChange($event.source)\">\n        <mat-select-search [formControl]=\"deviceFilterCtrl\"></mat-select-search>\n        <mat-option *ngFor=\"let device of filteredDevice | async\" [value]=\"device\">\n          {{ device.name }}\n        </mat-option>\n      </mat-select>\n    </div>\n    <div class=\"my-form-field\" style=\"width: 400px;float: right;margin-right: 10px;\">\n      <span>{{'gauges.property-head-variable' | translate}}</span>\n      <mat-select [formControl]=\"variableCtrl\" (selectionChange)=\"onVariableChange($event.source)\">\n        <mat-select-search [formControl]=\"variableFilterCtrl\"></mat-select-search>\n        <mat-option *ngFor=\"let vari of filteredVariable | async\" [value]=\"vari\">\n          {{ vari.name }}\n        </mat-option>\n      </mat-select>\n    </div>\n  </div>\n  <flex-input [ranges]=\"property.ranges\" [default]=\"defaultValue\" #flexinput *ngIf=\"withInput\" [inputType]=\"withInput\" style=\"padding-bottom: 5px\"></flex-input>\n  <div *ngIf=\"withAlarm\" class=\"head\" style=\"padding-top: 15px;\">\n    <div class=\"my-form-field\" style=\"width: 220px;\">\n      <span>{{'gauges.property-head-device' | translate}}</span>\n      <mat-select [formControl]=\"alarmDeviceCtrl\" (selectionChange)=\"onAlarmDeviceChange($event.source)\" class=\"select-item\">\n        <mat-select-search [formControl]=\"alarmDeviceFilterCtrl\"></mat-select-search>\n        <mat-option *ngFor=\"let device of filteredAlarmDevice | async\" [value]=\"device\">\n          {{ device.name }}\n        </mat-option>\n      </mat-select>\n    </div>\n    <div class=\"my-form-field\" style=\"width: 400px;float: right;margin-right: 10px;\">\n      <span>{{'gauges.property-head-alarm' | translate}}</span>\n      <mat-select [formControl]=\"alarmCtrl\" (selectionChange)=\"onAlarmChange($event.source)\">\n        <mat-select-search [formControl]=\"alarmFilterCtrl\"></mat-select-search>\n        <mat-option *ngFor=\"let vari of filteredAlarm | async\" [value]=\"vari\">\n          {{ vari.name }}\n        </mat-option>\n      </mat-select>\n    </div>\n    <div style=\"display: block; width:100%\">\n      <div class=\"my-form-field\" style=\"width: 60px;float: right;margin-right: 10px; top: 5px;\">\n        <span>{{'gauges.property-head-color' | translate}}</span>\n        <input [(colorPicker)]=\"property.alarmColor\" [style.background]=\"property.alarmColor\" [cpPresetColors]=\"defaultColor\" [cpOKButton]=\"true\" \n            [cpCancelButton]=\"true\" [cpCancelButtonClass]=\"'cpCancelButtonClass'\" [cpCancelButtonText]=\"'Cancel'\"\n            [cpOKButtonText]=\"'OK'\" [cpOKButtonClass]=\"'cpOKButtonClass'\" class=\"panel-color\" style=\"padding: 10px 0 0 0;\"\n            [cpPosition]=\"'left'\"/>        \n        <!-- <mat-select class=\"panel-color\" style=\"padding: 10px 0 0 0;\" disableOptionCentering panelClass=\"panel-color-class\" [(value)]=\"property.alarmColor\"\n          [style.background-color]=\"property.alarmColor\" (selectionChange)=\"onAlarmColorChange($event.source)\">\n          <mat-option class=\"option-color\" value=\"green\" style=\"background-color: green\"></mat-option>\n          <mat-option class=\"option-color\" value=\"yellow\" style=\"background-color: yellow\"></mat-option>\n          <mat-option class=\"option-color\" value=\"red\" style=\"background-color: red\"></mat-option>\n          <mat-option class=\"option-color\" value=\"blue\" style=\"background-color: blue\"></mat-option>\n          <mat-option class=\"option-color\" value=\"gray\" style=\"background-color: gray\"></mat-option>\n        </mat-select> -->\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/gauges/gauge-property/flex-head/flex-head.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlexHeadComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_ReplaySubject__ = __webpack_require__("../../../../rxjs/_esm5/ReplaySubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__("../../../../rxjs/_esm5/operators.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__flex_input_flex_input_component__ = __webpack_require__("../../../../../src/app/gauges/gauge-property/flex-input/flex-input.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__models_hmi__ = __webpack_require__("../../../../../src/app/_models/hmi.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_hmi_service__ = __webpack_require__("../../../../../src/app/_services/hmi.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__helpers_utils__ = __webpack_require__("../../../../../src/app/_helpers/utils.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var FlexHeadComponent = (function () {
    function FlexHeadComponent() {
        this.withAlarm = false;
        this.withInput = null;
        this.currentTag = null;
        this.defaultColor = __WEBPACK_IMPORTED_MODULE_8__helpers_utils__["b" /* Utils */].defaultColor;
        // alarm: string;
        this.deviceCtrl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]();
        this.deviceFilterCtrl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]();
        this.variableCtrl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]();
        this.variableFilterCtrl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]();
        this.alarmDeviceCtrl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]();
        this.alarmDeviceFilterCtrl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]();
        this.alarmCtrl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]();
        this.alarmFilterCtrl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]();
        /** list of variable filtered by search keyword */
        this.filteredDevice = new __WEBPACK_IMPORTED_MODULE_1_rxjs_ReplaySubject__["a" /* ReplaySubject */](1);
        this.filteredAlarmDevice = new __WEBPACK_IMPORTED_MODULE_1_rxjs_ReplaySubject__["a" /* ReplaySubject */](1);
        /** list of variable filtered by search keyword */
        this.filteredVariable = new __WEBPACK_IMPORTED_MODULE_1_rxjs_ReplaySubject__["a" /* ReplaySubject */](1);
        this.filteredAlarm = new __WEBPACK_IMPORTED_MODULE_1_rxjs_ReplaySubject__["a" /* ReplaySubject */](1);
        /** Subject that emits when the component has been destroyed. */
        this._onDestroy = new __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__["b" /* Subject */]();
    }
    FlexHeadComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (!this.property) {
            this.property = new __WEBPACK_IMPORTED_MODULE_6__models_hmi__["g" /* GaugeProperty */]();
        }
        var seldevice = null;
        var selalarmdevice = null;
        if (this.data.devices) {
            if (this.property.variableSrc || this.property.alarmSrc) {
                this.data.devices.forEach(function (dev) {
                    if (_this.property.variableSrc && dev.name === _this.property.variableSrc) {
                        seldevice = dev;
                    }
                    if (_this.property.alarmSrc && dev.name === _this.property.alarmSrc) {
                        selalarmdevice = dev;
                    }
                });
            }
            this.loadDevices();
            this.loadAlarmDevices();
        }
        // if (this.data.variable) {
        //   this.variable = this.data.variable;
        //   this.loadVariable();
        // }
        // set value
        if (seldevice) {
            this.deviceCtrl.setValue(seldevice);
            this.onDeviceChange(this.deviceCtrl);
            if (this.property.variable) {
                for (var i = 0; i < this.variable.length; i++) {
                    if (this.variable[i].id === this.property.variable) {
                        this.currentTag = this.variable[i];
                    }
                }
            }
        }
        if (selalarmdevice) {
            this.withAlarm = true;
            this.alarmDeviceCtrl.setValue(selalarmdevice);
            this.onAlarmDeviceChange(this.alarmDeviceCtrl);
        }
    };
    FlexHeadComponent.prototype.ngAfterViewInit = function () {
    };
    FlexHeadComponent.prototype.ngOnDestroy = function () {
        this._onDestroy.next();
        this._onDestroy.complete();
    };
    FlexHeadComponent.prototype.getProperty = function () {
        if (!this.withAlarm && this.property) {
            this.property.alarmId = '';
            this.property.alarmSrc = '';
            this.property.alarm = '';
            this.property.alarmColor = '';
        }
        if (this.withInput) {
            this.property.ranges = this.flexInput.getRanges();
        }
        return this.property;
    };
    FlexHeadComponent.prototype.onDeviceChange = function (event) {
        if (event.value) {
            if (this.property.variableSrc !== event.value.name) {
                this.property.variable = '';
                this.property.variableId = '';
            }
            this.property.variableSrc = event.value.name;
            this.variable = [];
            this.currentTag = null;
            if (event.value.tags) {
                this.variable = Object.values(event.value.tags);
                this.loadVariable(this.property.variable);
            }
        }
    };
    FlexHeadComponent.prototype.onVariableChange = function (event) {
        if (event.value) {
            this.property.variable = event.value.name;
            this.property.variableId = __WEBPACK_IMPORTED_MODULE_7__services_hmi_service__["a" /* HmiService */].toVariableId(this.property.variableSrc, this.property.variable);
        }
        this.currentTag = event.value;
        if (this.flexInput) {
            this.flexInput.changeTag(this.currentTag);
        }
    };
    FlexHeadComponent.prototype.onAlarmDeviceChange = function (event) {
        if (event.value) {
            if (this.property.alarmSrc !== event.value.name) {
                this.property.alarm = '';
                this.property.alarmId = '';
            }
            this.property.alarmSrc = event.value.name;
            this.alarme = [];
            if (event.value.tags) {
                this.alarme = Object.values(event.value.tags);
                this.loadAlarm(this.property.alarm);
            }
            if (this.property.alarmColor) {
            }
        }
    };
    FlexHeadComponent.prototype.onAlarmChange = function (event) {
        if (event.value) {
            this.property.alarm = (event.value.id) ? event.value.id : event.value.name;
            this.property.alarmId = __WEBPACK_IMPORTED_MODULE_7__services_hmi_service__["a" /* HmiService */].toVariableId(this.property.alarmSrc, this.property.alarm);
        }
    };
    FlexHeadComponent.prototype.onAlarmColorChange = function (event) {
        this.property.alarmColor = event.value;
    };
    FlexHeadComponent.prototype.onAddInput = function () {
        this.flexInput.onAddInput();
    };
    FlexHeadComponent.prototype.onRangeViewToggle = function (slideView) {
        this.flexInput.onRangeViewToggle(slideView);
        this.flexInput.changeTag(this.currentTag);
    };
    FlexHeadComponent.prototype.onAlarmEnabled = function (enabled) {
        this.withAlarm = enabled;
    };
    FlexHeadComponent.prototype.loadDevices = function () {
        var _this = this;
        // load the initial variable list
        this.filteredDevice.next(this.data.devices.slice());
        // listen for search field value changes
        this.deviceFilterCtrl.valueChanges
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["takeUntil"])(this._onDestroy))
            .subscribe(function () {
            _this.filterDevice();
        });
    };
    FlexHeadComponent.prototype.loadAlarmDevices = function () {
        var _this = this;
        // load the initial variable list
        this.filteredAlarmDevice.next(this.data.devices.slice());
        // listen for search field value changes
        this.alarmDeviceFilterCtrl.valueChanges
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["takeUntil"])(this._onDestroy))
            .subscribe(function () {
            _this.filterAlarmDevice();
        });
    };
    FlexHeadComponent.prototype.filterDevice = function () {
        if (!this.data.devices) {
            return;
        }
        // get the search keyword
        var search = this.deviceFilterCtrl.value;
        if (!search) {
            this.filteredDevice.next(this.data.devices.slice());
            return;
        }
        else {
            search = search.toLowerCase();
        }
        // filter the device
        this.filteredDevice.next(this.data.devices.filter(function (dev) { return dev.name.toLowerCase().indexOf(search) > -1; }));
    };
    FlexHeadComponent.prototype.filterAlarmDevice = function () {
        if (!this.data.device) {
            return;
        }
        // get the search keyword
        var search = this.alarmDeviceFilterCtrl.value;
        if (!search) {
            this.filteredAlarmDevice.next(this.data.device.slice());
            return;
        }
        else {
            search = search.toLowerCase();
        }
        // filter the device
        this.filteredAlarmDevice.next(this.data.device.filter(function (dev) { return dev.name.toLowerCase().indexOf(search) > -1; }));
    };
    FlexHeadComponent.prototype.loadVariable = function (toset) {
        var _this = this;
        // load the initial variable list
        this.filteredVariable.next(this.variable.slice());
        // listen for search field value changes
        this.variableFilterCtrl.valueChanges
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["takeUntil"])(this._onDestroy))
            .subscribe(function () {
            _this.filterVariable();
        });
        if (toset) {
            var idx_1 = -1;
            this.variable.every(function (value, index, _arr) {
                if (value.id === toset) {
                    idx_1 = index;
                    return false;
                }
                return true;
            });
            if (idx_1 >= 0) {
                this.variableCtrl.setValue(this.variable[idx_1]);
            }
        }
    };
    FlexHeadComponent.prototype.loadAlarm = function (toset) {
        var _this = this;
        // load the initial variable list
        this.filteredAlarm.next(this.alarme.slice());
        // listen for search field value changes
        this.alarmFilterCtrl.valueChanges
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["takeUntil"])(this._onDestroy))
            .subscribe(function () {
            _this.filterAlarm();
        });
        if (toset) {
            var idx_2 = -1;
            this.alarme.every(function (value, index, _arr) {
                if (value.id === toset) {
                    idx_2 = index;
                    return false;
                }
                return true;
            });
            if (idx_2 >= 0) {
                this.alarmCtrl.setValue(this.alarme[idx_2]);
            }
        }
    };
    FlexHeadComponent.prototype.filterVariable = function () {
        if (!this.variable) {
            return;
        }
        // get the search keyword
        var search = this.variableFilterCtrl.value;
        if (!search) {
            this.filteredVariable.next(this.variable.slice());
            return;
        }
        else {
            search = search.toLowerCase();
        }
        // filter the variable
        this.filteredVariable.next(this.variable.filter(function (vari) { return vari.name.toLowerCase().indexOf(search) > -1; }));
    };
    FlexHeadComponent.prototype.filterAlarm = function () {
        if (!this.alarme) {
            return;
        }
        // get the search keyword
        var search = this.alarmFilterCtrl.value;
        if (!search) {
            this.filteredAlarm.next(this.alarme.slice());
            return;
        }
        else {
            search = search.toLowerCase();
        }
        // filter the variable
        this.filteredAlarm.next(this.alarme.filter(function (vari) { return vari.name.toLowerCase().indexOf(search) > -1; }));
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], FlexHeadComponent.prototype, "data", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_6__models_hmi__["g" /* GaugeProperty */])
    ], FlexHeadComponent.prototype, "property", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewChild */])('flexinput'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_5__flex_input_flex_input_component__["a" /* FlexInputComponent */])
    ], FlexHeadComponent.prototype, "flexInput", void 0);
    FlexHeadComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'flex-head',
            template: __webpack_require__("../../../../../src/app/gauges/gauge-property/flex-head/flex-head.component.html"),
            styles: [__webpack_require__("../../../../../src/app/gauges/gauge-property/flex-head/flex-head.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* ViewEncapsulation */].None,
        }),
        __metadata("design:paramtypes", [])
    ], FlexHeadComponent);
    return FlexHeadComponent;
}());



/***/ }),

/***/ "../../../../../src/app/gauges/gauge-property/flex-input/flex-input.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".grid-conta {\r\n    margin-left: 30px;\r\n    max-height: 260px;\r\n    /* overflow: auto; */\r\n}\r\n\r\n.item {\r\n    display: block;\r\n    min-height: 54px;\r\n    width: 100%;\r\n    border-bottom: 1px solid rgba(0,0,0,0.1);\r\n    padding: 5px 0px 0px 0px;\r\n    margin-bottom: -1px;\r\n}\r\n.item-alarm {\r\n    margin-left: -30px;\r\n    width: calc(100% + 30px);\r\n}\r\n.remove {\r\n    position: relative;\r\n    top: 4px;\r\n    right: 0px;\r\n}\r\n.item-range {\r\n    display: inline-block;\r\n    min-width: 320px;\r\n    max-width: 320px;\r\n    width: 320px;\r\n}\r\n.item-minmax {\r\n    display: inline-block;\r\n    width: 100%;\r\n}\r\n.item-step {\r\n    display: inline-block;\r\n    width: 320px;\r\n}\r\n.item-remove {\r\n    display: inline-block;\r\n    float: right;\r\n    /* padding-top: 6px; */\r\n    /* min-width: 140px; */\r\n}\r\n.panel-color-class {\r\n    position: relative;\r\n    top: 30px;\r\n}\r\n.panel-color {\r\n    display: inline-block;\r\n    padding-top: 10px;\r\n    max-width: 60px;\r\n    /* border: 1px solid rgba(0,0,0,0.1); */\r\n    height: 21px;\r\n    line-height: 12px;\r\n    margin-right: 25px;\r\n}\r\n.option-color {\r\n    height: 32px !important;\r\n}\r\n.panel-color-class {\r\n    margin-top: 30px !important;\r\n}\r\n.input-range {\r\n    display: inline-block;\r\n    max-width: 80px;\r\n}\r\n.input-range input {\r\n    font-size: 15px;\r\n    text-align: center;\r\n}\r\n.input-minmax {\r\n    display: inline-block;\r\n    max-width: 80px;\r\n}\r\n.input-minmax input {\r\n    font-size: 15px;\r\n    text-align: center;\r\n}\r\n.input-step {\r\n    display: inline-block;\r\n    max-width: 80px;\r\n}\r\n.input-step input {\r\n    font-size: 15px;\r\n    text-align: center;\r\n}\r\n.input-minmax-cb {\r\n    font-size: 15px;\r\n}\r\n\r\n::ng-deep .ng5-slider .ng5-slider-pointer { \r\n    width: 16px !important;\r\n    height: 16px !important;\r\n    border-radius: 8px !important; \r\n    top: -7px !important \r\n}\r\n::ng-deep .ng5-slider .ng5-slider-pointer:after { \r\n    top: 6px !important;\r\n    left: 6px !important;\r\n    width: 4px !important;\r\n    height: 4px !important; \r\n    border-radius: 2px !important \r\n}\r\n\r\n::ng-deep .input-range .input-step .input-minmax .mat-form-field-wrapper {\r\n    margin-bottom: -15px !important;\r\n}\r\n::ng-deep .input-range .input-step .input-minmax .mat-form-field-infix {\r\n    padding-top: 1px;\r\n    padding-bottom: 5px;\r\n}\r\n.input-step input {\r\n    font-size: 15px;\r\n    text-align: center;\r\n}\r\n\r\n.input-slider {\r\n    display: inline;\r\n    /* max-width: 160px; */\r\n}\r\n::ng-deep .input-slider span {\r\n    font-size: 14px !important;\r\n}\r\n.input-slider ng5-slider {\r\n    /* display: block; */\r\n    max-width: 300px;\r\n    margin-top: 29px;\r\n    margin-right: 20px;\r\n}\r\n\r\n.toolbox {\r\n    margin-top: 3px;\r\n    margin-bottom: 3px;\r\n}\r\n.toolbox button {\r\n    margin-right: 8px;\r\n    margin-left: 8px;\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/gauges/gauge-property/flex-input/flex-input.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"grid-conta\">\n  <div *ngFor=\"let item of ranges; index as i\" class=\"item\">\n    <div *ngIf=\"isWithRange()\">\n      <div *ngIf=\"slideView\" class=\"item-range\">\n        <div class=\"my-form-field\">\n          <span>{{'gauges.property-input-min' | translate}}</span>\n          <input numberOnly [(ngModel)]=\"item.min\" type=\"text\" style=\"width: 80px\">\n        </div>\n        <div class=\"my-form-field\" style=\"padding-left: 20px;\">\n          <span>{{'gauges.property-input-max' | translate}}</span>\n          <input numberOnly [(ngModel)]=\"item.max\" type=\"text\" style=\"width: 80px\">\n        </div>\n      </div>\n      <div class=\"item-range input-slider\" *ngIf=\"!slideView\">\n        <ng5-slider [(value)]=\"item.min\" [(highValue)]=\"item.max\" [options]=\"options\"></ng5-slider>\n      </div>\n      <div class=\"my-form-field\" style=\"width: 60px; top: 6px;\" *ngIf=\"isWithRangeColor()\">\n        <span>{{'gauges.property-input-color' | translate}}</span>\n        <input [(colorPicker)]=\"item.color\" [style.background]=\"item.color\" [cpPresetColors]=\"defaultColor\" [cpOKButton]=\"true\" \n            [cpCancelButton]=\"true\" [cpCancelButtonClass]=\"'cpCancelButtonClass'\" [cpCancelButtonText]=\"'Cancel'\"\n            [cpOKButtonText]=\"'OK'\" [cpOKButtonClass]=\"'cpOKButtonClass'\" class=\"panel-color\" style=\"padding: 8px 0 0 0;\"\n            [cpPosition]=\"'left'\"/>\n        <!-- <mat-select class=\"panel-color\" style=\"padding: 8px 0 0 0;\" disableOptionCentering panelClass=\"panel-color-class\"\n          [(value)]=\"selected\" (change)=\"item.color = selected\" [style.background-color]=\"item.color\">\n          <mat-option class=\"option-color\" value=\"green\" style=\"background-color:limegreen\"></mat-option>\n          <mat-option class=\"option-color\" value=\"yellow\" style=\"background-color: yellow\"></mat-option>\n          <mat-option class=\"option-color\" value=\"red\" style=\"background-color: red\"></mat-option>\n          <mat-option class=\"option-color\" value=\"blue\" style=\"background-color: blue\"></mat-option>\n          <mat-option class=\"option-color\" value=\"gray\" style=\"background-color: gray\"></mat-option>\n        </mat-select> -->\n      </div>\n      <div class=\"item-remove\">\n        <button mat-icon-button (click)=\"onRemoveInput(i)\" class=\"remove\">\n          <mat-icon>clear</mat-icon>\n        </button>\n      </div>\n    </div>\n    <div *ngIf=\"isMinMax()\">\n      <div class=\"item-minmax\">\n        <div class=\"my-form-field\">\n          <span>{{'gauges.property-input-min' | translate}}</span>\n          <input numberOnly [(ngModel)]=\"item.min\" type=\"text\" style=\"width: 80px\">\n        </div>\n        <div class=\"my-form-field\" style=\"padding-left: 20px;\">\n          <span>{{'gauges.property-input-max' | translate}}</span>\n          <input numberOnly [(ngModel)]=\"item.max\" type=\"text\" style=\"width: 80px\">\n        </div>\n        <div class=\"my-form-field\" style=\"padding-left: 30px\">\n          <!-- <span>Unit</span>\n          <input [(ngModel)]=\"item.text\" type=\"text\" style=\"width: 60px;text-align: center !important\"> -->\n        </div>\n        <div class=\"my-form-field\" style=\"width: 60px;padding-left: 20px; top: 4px;\">\n          <span>{{'gauges.property-input-color' | translate}}</span>\n          <input [(colorPicker)]=\"item.color\" [style.background]=\"getColor(item)\" [cpPresetColors]=\"defaultColor\" [cpOKButton]=\"true\" \n          [cpCancelButton]=\"true\" [cpCancelButtonClass]=\"'cpCancelButtonClass'\" [cpCancelButtonText]=\"'Cancel'\"\n          [cpOKButtonText]=\"'OK'\" [cpOKButtonClass]=\"'cpOKButtonClass'\" class=\"panel-color\" style=\"padding: 8px 0 0 0;\"\n          [cpPosition]=\"'left'\"/>          \n        </div>\n        <!-- <mat-checkbox class=\"input-minmax-cb\" style=\"padding-left: 30px\" [(ngModel)]=\"withLabel\">Range</mat-checkbox> -->\n        <!-- <mat-checkbox class=\"input-minmax-cb\" style=\"padding-left: 20px\" [(ngModel)]=\"withValue\">Value</mat-checkbox> -->\n      </div>\n    </div>\n    <div *ngIf=\"isWithStep()\" class=\"item-step\">\n      <div class=\"my-form-field\">\n        <span>{{'gauges.property-input-value' | translate}}</span>\n        <input numberOnly [(ngModel)]=\"item.min\" type=\"text\" style=\"width: 80px\">\n      </div>\n      <div class=\"my-form-field\" style=\"padding-left: 20px;\">\n        <span>{{'gauges.property-input-label' | translate}}</span>\n        <input [(ngModel)]=\"item.text\" type=\"text\" style=\"width: 160px;text-align: left !important\">\n      </div>\n    </div>\n    <div *ngIf=\"isWithUnit()\" class=\"item-step\">\n      <div class=\"my-form-field\">\n          <span>{{'gauges.property-input-unit' | translate}}</span>\n          <input [(ngModel)]=\"item.text\" type=\"text\" style=\"width: 60px;text-align: center !important\">\n      </div>\n    </div>    \n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/gauges/gauge-property/flex-input/flex-input.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlexInputComponent; });
/* unused harmony export InputItemType */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_hmi__ = __webpack_require__("../../../../../src/app/_models/hmi.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__helpers_utils__ = __webpack_require__("../../../../../src/app/_helpers/utils.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FlexInputComponent = (function () {
    function FlexInputComponent() {
        this.tag = null;
        this.withLabel = true;
        this.withValue = true;
        this.slideView = true;
        this.defaultColor = __WEBPACK_IMPORTED_MODULE_2__helpers_utils__["b" /* Utils */].defaultColor;
        this.options = {
            floor: 0,
            ceil: 100
        };
    }
    FlexInputComponent.prototype.ngOnInit = function () {
        if (!this.ranges) {
            this.ranges = [];
            var ip = new __WEBPACK_IMPORTED_MODULE_1__models_hmi__["h" /* GaugeRangeProperty */]();
            if (this.isWithStep()) {
                ip.type = this.type;
                ip.min = 1;
                ip.max = 1;
            }
            else if (this.isMinMax()) {
                ip.type = this.type;
                ip.min = 0;
                ip.max = 100;
                ip.style = [true, true];
            }
            else {
                ip.type = this.type;
                ip.min = 20;
                ip.max = 80;
            }
            this.addInput(ip);
        }
        else if (this.isMinMax()) {
            if (this.ranges.length > 0 && this.ranges[0].style.length === 2) {
                this.withLabel = this.ranges[0].style[0];
                this.withValue = this.ranges[0].style[1];
            }
        }
        // this.ranges.forEach(element => {
        //   this.addInput(element.type, element.min, element.max, element.color);
        // });
    };
    FlexInputComponent.prototype.onAddInput = function () {
        var ip = new __WEBPACK_IMPORTED_MODULE_1__models_hmi__["h" /* GaugeRangeProperty */]();
        ip.type = this.type;
        this.addInput(ip);
    };
    FlexInputComponent.prototype.onRemoveInput = function (index) {
        this.ranges.splice(index, 1);
    };
    FlexInputComponent.prototype.onRangeViewToggle = function (slideView) {
        this.slideView = slideView;
    };
    FlexInputComponent.prototype.getRanges = function () {
        var _this = this;
        var result = [];
        this.ranges.forEach(function (element) {
            element.type = _this.inputType;
            if (_this.isWithStep()) {
                element.max = element.min;
                if (element.min !== null && element.max !== null) {
                    result.push(element);
                }
            }
            else if (_this.isMinMax()) {
                element.style = [_this.withLabel, _this.withValue];
                result.push(element);
            }
            else {
                if (!__WEBPACK_IMPORTED_MODULE_2__helpers_utils__["b" /* Utils */].isNullOrUndefined(element.min) && !__WEBPACK_IMPORTED_MODULE_2__helpers_utils__["b" /* Utils */].isNullOrUndefined(element.max)) {
                    result.push(element);
                }
            }
        });
        return result;
    };
    FlexInputComponent.prototype.getColor = function (item) {
        if (item && item.color) {
            return item.color;
        }
        else if (this.default && this.default.color) {
            return this.default.color;
        }
    };
    FlexInputComponent.prototype.changeTag = function (_tag) {
        this.tag = _tag;
        if (this.tag) {
            var newOptions = Object.assign({}, this.options);
            try {
                if (this.tag.min != null) {
                    newOptions.floor = parseInt(this.tag.min);
                }
                if (this.tag.max != null) {
                    newOptions.ceil = parseInt(this.tag.max);
                }
                this.options = newOptions;
            }
            catch (e) { }
            for (var i = 0; i < this.ranges.length; i++) {
                if (!this.ranges[i].min || this.ranges[i].min <= newOptions.floor) {
                    this.ranges[i].min = newOptions.floor;
                }
                if (!this.ranges[i].max || this.ranges[i].max >= newOptions.ceil) {
                    this.ranges[i].max = newOptions.ceil;
                }
            }
        }
    };
    FlexInputComponent.prototype.isWithRange = function () {
        if (this.inputType === 'range') {
            return true;
        }
        return false;
    };
    FlexInputComponent.prototype.isMinMax = function () {
        if (this.inputType === 'minmax') {
            return true;
        }
        return false;
    };
    FlexInputComponent.prototype.isWithRangeColor = function () {
        if (this.inputType === 'range') {
            return true;
        }
        return false;
    };
    FlexInputComponent.prototype.isWithStep = function () {
        if (this.inputType === 'step') {
            return true;
        }
        return false;
    };
    FlexInputComponent.prototype.isWithUnit = function () {
        if (this.inputType === 'unit') {
            return true;
        }
        return false;
    };
    FlexInputComponent.prototype.addInput = function (gap) {
        this.ranges.push(gap);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Array)
    ], FlexInputComponent.prototype, "ranges", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", String)
    ], FlexInputComponent.prototype, "type", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", String)
    ], FlexInputComponent.prototype, "inputType", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], FlexInputComponent.prototype, "default", void 0);
    FlexInputComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'flex-input',
            template: __webpack_require__("../../../../../src/app/gauges/gauge-property/flex-input/flex-input.component.html"),
            styles: [__webpack_require__("../../../../../src/app/gauges/gauge-property/flex-input/flex-input.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FlexInputComponent);
    return FlexInputComponent;
}());

var InputItemType;
(function (InputItemType) {
    InputItemType[InputItemType["Color"] = 0] = "Color";
})(InputItemType || (InputItemType = {}));


/***/ }),

/***/ "../../../../../src/app/gauges/gauge-property/flex-variable/flex-variable.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/gauges/gauge-property/flex-variable/flex-variable.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"display: block;\">\n    <div class=\"my-form-field\" style=\"width: 220px;\">\n        <span>{{'gauges.property-head-device' | translate}}</span>\n        <mat-select [formControl]=\"deviceCtrl\" (selectionChange)=\"onDeviceChange($event.source)\">\n            <mat-select-search [formControl]=\"deviceFilterCtrl\"></mat-select-search>\n            <mat-option *ngFor=\"let device of filteredDevice | async\" [value]=\"device\">\n                {{ device.name }}\n            </mat-option>\n        </mat-select>\n    </div>\n    <div class=\"my-form-field\" style=\"width: 400px;float: right;margin-right: 10px;\">\n        <span>{{'gauges.property-head-variable' | translate}}</span>\n        <mat-select [formControl]=\"variableCtrl\" (selectionChange)=\"onVariableChange($event.source)\">\n            <mat-select-search [formControl]=\"variableFilterCtrl\"></mat-select-search>\n            <mat-option *ngFor=\"let vari of filteredVariable | async\" [value]=\"vari\">\n                {{ vari.name }}\n            </mat-option>\n        </mat-select>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/gauges/gauge-property/flex-variable/flex-variable.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlexVariableComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_ReplaySubject__ = __webpack_require__("../../../../rxjs/_esm5/ReplaySubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__("../../../../rxjs/_esm5/operators.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_hmi_service__ = __webpack_require__("../../../../../src/app/_services/hmi.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var FlexVariableComponent = (function () {
    function FlexVariableComponent() {
        this.onchange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.variableList = [];
        this.currentVariable = null;
        this.deviceCtrl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]();
        this.deviceFilterCtrl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]();
        this.variableCtrl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]();
        this.variableFilterCtrl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]();
        /** list of variable filtered by search keyword */
        this.filteredDevice = new __WEBPACK_IMPORTED_MODULE_1_rxjs_ReplaySubject__["a" /* ReplaySubject */](1);
        /** list of variable filtered by search keyword */
        this.filteredVariable = new __WEBPACK_IMPORTED_MODULE_1_rxjs_ReplaySubject__["a" /* ReplaySubject */](1);
        /** Subject that emits when the component has been destroyed. */
        this._onDestroy = new __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__["b" /* Subject */]();
    }
    FlexVariableComponent.prototype.ngOnInit = function () {
        var _this = this;
        var seldevice = null;
        var selalarmdevice = null;
        if (this.data.devices) {
            if (this.variableSrc) {
                this.data.devices.forEach(function (dev) {
                    if (_this.variableSrc && dev.name === _this.variableSrc) {
                        seldevice = dev;
                    }
                });
            }
            this.loadDevices();
        }
        // set value
        if (seldevice) {
            this.deviceCtrl.setValue(seldevice);
            this.onDeviceChange(this.deviceCtrl);
            if (this.variableList) {
                for (var i = 0; i < this.variableList.length; i++) {
                    if (this.variableList[i].id === this.variable) {
                        this.currentVariable = this.variableList[i];
                    }
                }
            }
        }
    };
    FlexVariableComponent.prototype.onDeviceChange = function (event) {
        if (event.value) {
            if (this.variableSrc !== event.value.name) {
                this.variable = '';
                this.variableId = '';
            }
            this.variableSrc = event.value.name;
            this.variableList = [];
            this.currentVariable = null;
            if (event.value.tags) {
                this.variableList = Object.values(event.value.tags);
                this.loadVariable(this.variable);
            }
        }
        this.onChanged();
    };
    FlexVariableComponent.prototype.onVariableChange = function (event) {
        if (event.value) {
            this.variable = event.value.name;
            this.variableId = __WEBPACK_IMPORTED_MODULE_5__services_hmi_service__["a" /* HmiService */].toVariableId(this.variableSrc, this.variable);
        }
        this.currentVariable = event.value;
        this.onChanged();
    };
    FlexVariableComponent.prototype.onChanged = function () {
        this.onchange.emit({ variableSrc: this.variableSrc, variableId: this.variableId, variable: this.variable });
    };
    FlexVariableComponent.prototype.loadDevices = function () {
        var _this = this;
        // load the initial variable list
        this.filteredDevice.next(this.data.devices.slice());
        // listen for search field value changes
        this.deviceFilterCtrl.valueChanges
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["takeUntil"])(this._onDestroy))
            .subscribe(function () {
            _this.filterDevice();
        });
    };
    FlexVariableComponent.prototype.filterDevice = function () {
        if (!this.data.devices) {
            return;
        }
        // get the search keyword
        var search = this.deviceFilterCtrl.value;
        if (!search) {
            this.filteredDevice.next(this.data.devices.slice());
            return;
        }
        else {
            search = search.toLowerCase();
        }
        // filter the device
        this.filteredDevice.next(this.data.devices.filter(function (dev) { return dev.name.toLowerCase().indexOf(search) > -1; }));
    };
    FlexVariableComponent.prototype.loadVariable = function (toset) {
        var _this = this;
        // load the initial variable list
        this.filteredVariable.next(this.variableList.slice());
        // listen for search field value changes
        this.variableFilterCtrl.valueChanges
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["takeUntil"])(this._onDestroy))
            .subscribe(function () {
            _this.filterVariable();
        });
        if (toset) {
            var idx_1 = -1;
            this.variableList.every(function (value, index, _arr) {
                if (value.id === toset) {
                    idx_1 = index;
                    return false;
                }
                return true;
            });
            if (idx_1 >= 0) {
                this.variableCtrl.setValue(this.variableList[idx_1]);
            }
        }
    };
    FlexVariableComponent.prototype.filterVariable = function () {
        if (!this.variableList) {
            return;
        }
        // get the search keyword
        var search = this.variableFilterCtrl.value;
        if (!search) {
            this.filteredVariable.next(this.variableList.slice());
            return;
        }
        else {
            search = search.toLowerCase();
        }
        // filter the variable
        this.filteredVariable.next(this.variableList.filter(function (vari) { return vari.name.toLowerCase().indexOf(search) > -1; }));
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], FlexVariableComponent.prototype, "data", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", String)
    ], FlexVariableComponent.prototype, "variableSrc", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", String)
    ], FlexVariableComponent.prototype, "variableId", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", String)
    ], FlexVariableComponent.prototype, "variable", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */])
    ], FlexVariableComponent.prototype, "onchange", void 0);
    FlexVariableComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'flex-variable',
            template: __webpack_require__("../../../../../src/app/gauges/gauge-property/flex-variable/flex-variable.component.html"),
            styles: [__webpack_require__("../../../../../src/app/gauges/gauge-property/flex-variable/flex-variable.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FlexVariableComponent);
    return FlexVariableComponent;
}());



/***/ }),

/***/ "../../../../../src/app/gauges/gauge-property/gauge-permission.dialog.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <h1 mat-dialog-title style=\"display:inline-block\" mat-dialog-draggable>{{'dlg.gauge-permission-title' | translate}}</h1>\r\n    <div mat-dialog-content>\r\n        <div class=\"my-form-field\" style=\"display: block;margin-bottom: 10px;\">\r\n            <span style=\"display:inline-block; width: 45px; text-align: center;\">{{'dlg.gauge-permission-show' | translate}}</span>\r\n            <span style=\"display:inline-block; width: 70px;\">{{'dlg.gauge-permission-enabled' | translate}}</span>\r\n            <span style=\"display:inline-block\">{{'dlg.gauge-permission-label' | translate}}</span>\r\n            <sel-options style=\"display:block\" #seloptions [selected]=\"selectedGroups\" [options]=\"groups\" [extSelected]=\"extensionGroups\"></sel-options>\r\n        </div>\r\n    </div>\r\n    <div mat-dialog-actions style=\"float:right; margin-bottom:0px;padding-bottom:0px\">\r\n        <button mat-raised-button (click)=\"onNoClick()\">{{'dlg.cancel' | translate}}</button>\r\n        <button mat-raised-button color=\"primary\" (click)=\"onOkClick()\" cdkFocusInitial>{{'dlg.ok' | translate}}</button>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/gauges/gauge-property/gauge-property.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".toolbox {\r\n    display: inline-block;\r\n    float: right;\r\n    margin-top: 10px;\r\n    margin-bottom: 3px;\r\n}\r\n  \r\n.toolbox button {\r\n    margin-right: 8px;\r\n    margin-left: 8px;\r\n}\r\n\r\n::ng-deep .input-text .mat-form-field-wrapper {\r\n    /* margin-bottom: -15px !important; */\r\n}\r\n::ng-deep .input-text .mat-form-field-infix {\r\n    padding-top: 5px;\r\n    padding-bottom: 0px;\r\n}\r\n\r\n::ng-deep .mat-dialog-container {\r\n    display: inline-table !important;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/gauges/gauge-property/gauge-property.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"width: 100%;min-height: 400px;position: relative;padding-bottom: 40px\">\n\t<mat-icon (click)=\"onNoClick()\" style=\"float:right;cursor:pointer;color:gray;position: relative; top: 10px; right: 0px\">clear</mat-icon>\n\t<mat-tab-group style=\"width: 100%;\">\n\t\t<mat-tab label=\"{{'gauges.property-props' | translate}}\">\n\t\t\t<div style=\"max-height: 540px; overflow-y: auto; overflow-x: hidden; padding-top: 15px;\">\n\t\t\t\t<div style=\"display: block;\">\n\t\t\t\t\t<div class=\"my-form-field\">\n\t\t\t\t\t\t<span>{{'gauges.property-name' | translate}}</span>\n\t\t\t\t\t\t<input [(ngModel)]=\"data.settings.name\" style=\"width: 220px\" type=\"text\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"my-form-field\" style=\"vertical-align: bottom; margin-left: 13px;\">\n\t\t\t\t\t\t<span>{{'gauges.property-permission' | translate}}</span>\n\t\t\t\t\t\t<div style=\"width:80px;height:30px;background-color:#f1f3f4;text-align:center;cursor:pointer;\" (click)=\"onEditPermission()\">\n\t\t\t\t\t\t\t<mat-icon class=\"header-icon\" style=\"line-height: 30px;\" *ngIf=\"!property || !property.permission\">lock_open</mat-icon>\n\t\t\t\t\t\t\t<mat-icon class=\"header-icon\" style=\"line-height: 30px;\" *ngIf=\"property && property.permission\">lock</mat-icon>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"toolbox\" *ngIf=\"isToolboxToShow()\">\n\t\t\t\t\t\t<button mat-icon-button (click)=\"onAddInput()\">\n\t\t\t\t\t\t\t<mat-icon>add_circle_outline</mat-icon>\n\t\t\t\t\t\t</button>\n\t\t\t\t\t\t<button mat-icon-button (click)=\"slideView = !slideView;onRangeViewToggle()\" *ngIf=\"isRangeToShow()\">\n\t\t\t\t\t\t\t<mat-icon class=\"header-icon\" *ngIf=\"slideView\">toll</mat-icon>\n\t\t\t\t\t\t\t<mat-icon class=\"header-icon\" *ngIf=\"!slideView\">input</mat-icon>\n\t\t\t\t\t\t</button>\n\t\t\t\t\t\t<button mat-icon-button (click)=\"withAlarm = !withAlarm;onAlarmToggle();\" *ngIf=\"isAlarmToShow()\">\n\t\t\t\t\t\t\t<mat-icon class=\"header-icon\" *ngIf=\"!withAlarm\">notifications</mat-icon>\n\t\t\t\t\t\t\t<mat-icon class=\"header-icon\" *ngIf=\"withAlarm\">notifications_off</mat-icon>\n\t\t\t\t\t\t</button>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div mat-dialog-content style=\"overflow: hidden; width:100%\">\n\t\t\t\t\t<flex-head [data]=\"data\" [property]=\"property\" #flexhead></flex-head>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</mat-tab>\n\t\t<mat-tab label=\"{{'gauges.property-events' | translate}}\" *ngIf=\"eventsSupported\">\n\t\t\t<div style=\"max-height: 540px; overflow-y: auto; overflow-x: hidden; padding-top: 15px;\">\n\t\t\t\t<div style=\"display: block;\">\n\t\t\t\t\t<div class=\"toolbox\">\n\t\t\t\t\t\t<button mat-icon-button (click)=\"onAddEvent()\">\n\t\t\t\t\t\t\t<mat-icon>add_circle_outline</mat-icon>\n\t\t\t\t\t\t</button>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div mat-dialog-content style=\"overflow: hidden; width:100%\">\n\t\t\t\t\t<flex-event [property]=\"property\" [views]=\"views\" #flexevent *ngIf=\"eventsSupported\" style=\"padding-bottom: 5px\"></flex-event>\n\t\t\t\t</div>\n\t\t\t</div>\n        </mat-tab>\n\t\t<mat-tab label=\"{{'gauges.property-actions' | translate}}\" *ngIf=\"actionsSupported\">\n\t\t\t<div style=\"max-height: 540px; overflow-y: auto; overflow-x: hidden; padding-top: 15px;\">\n\t\t\t\t<div style=\"display: block;\">\n\t\t\t\t\t<div class=\"toolbox\">\n\t\t\t\t\t\t<button mat-icon-button (click)=\"onAddAction()\">\n\t\t\t\t\t\t\t<mat-icon>add_circle_outline</mat-icon>\n                        </button>\n\t\t\t\t\t\t<!-- <button mat-icon-button (click)=\"slideActionView = !slideActionView; onActionRangeViewToggle()\">\n\t\t\t\t\t\t\t<mat-icon class=\"header-icon\" *ngIf=\"slideActionView\">toll</mat-icon>\n\t\t\t\t\t\t\t<mat-icon class=\"header-icon\" *ngIf=\"!slideActionView\">input</mat-icon>\n\t\t\t\t\t\t</button>-->\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div mat-dialog-content style=\"overflow: hidden; width:100%\">\n\t\t\t\t\t<flex-action [data]=\"data\" [property]=\"property\" #flexaction *ngIf=\"actionsSupported\" style=\"padding-bottom: 5px\"></flex-action>\n\t\t\t\t</div>\n\t\t\t</div>\n        </mat-tab>        \n\t</mat-tab-group>\n\t<div mat-dialog-actions style=\"display: inline-block; position: absolute; bottom: 10px; right: 10px\">\n\t\t<button mat-raised-button (click)=\"onNoClick()\">{{'dlg.cancel' | translate}}</button>\n\t\t<button mat-raised-button color=\"primary\" (click)=\"onOkClick()\" [mat-dialog-close]=\"data\" cdkFocusInitial>{{'dlg.ok' | translate}}</button>\n\t</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/gauges/gauge-property/gauge-property.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return GaugePropertyComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return GaugeDialogType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DialogGaugePermission; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__gui_helpers_sel_options_sel_options_component__ = __webpack_require__("../../../../../src/app/gui-helpers/sel-options/sel-options.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__flex_head_flex_head_component__ = __webpack_require__("../../../../../src/app/gauges/gauge-property/flex-head/flex-head.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__flex_event_flex_event_component__ = __webpack_require__("../../../../../src/app/gauges/gauge-property/flex-event/flex-event.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__flex_action_flex_action_component__ = __webpack_require__("../../../../../src/app/gauges/gauge-property/flex-action/flex-action.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__models_hmi__ = __webpack_require__("../../../../../src/app/_models/hmi.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__models_user__ = __webpack_require__("../../../../../src/app/_models/user.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};








var GaugePropertyComponent = (function () {
    function GaugePropertyComponent(dialog, dialogRef, data) {
        this.dialog = dialog;
        this.dialogRef = dialogRef;
        this.data = data;
        this.withAlarm = false;
        this.slideView = true;
        this.slideActionView = true;
        this.dialogType = GaugeDialogType.RangeWithAlarm;
    }
    GaugePropertyComponent.prototype.ngOnInit = function () {
        this.dialogType = this.data.dlgType;
        this.eventsSupported = this.data.withEvents;
        this.actionsSupported = this.data.withActions;
        this.views = this.data.views;
        this.property = JSON.parse(JSON.stringify(this.data.settings.property));
        if (!this.property) {
            this.property = new __WEBPACK_IMPORTED_MODULE_6__models_hmi__["g" /* GaugeProperty */]();
        }
        this.defaultValue = this.data.default;
        if (this.dialogType === GaugeDialogType.OnlyValue) {
            this.flexHead.withInput = null;
        }
        else if (this.dialogType === GaugeDialogType.ValueAndUnit) {
            this.flexHead.withInput = 'unit';
        }
        else {
            this.flexHead.defaultValue = this.defaultValue;
            if (this.property && this.property.alarmSrc) {
                this.withAlarm = true;
            }
            this.flexHead.withInput = 'range';
            if (this.dialogType === GaugeDialogType.ValueWithRef) {
                this.flexHead.withInput = 'text';
                this.withAlarm = false;
            }
            else if (this.dialogType === GaugeDialogType.Step) {
                this.flexHead.withInput = 'step';
                this.withAlarm = false;
            }
            else if (this.dialogType === GaugeDialogType.MinMax) {
                this.flexHead.withInput = 'minmax';
                this.withAlarm = false;
            }
        }
    };
    GaugePropertyComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    GaugePropertyComponent.prototype.onOkClick = function () {
        // this.data.settings.property = this.flexHead.property;
        this.data.settings.property = this.flexHead.getProperty();
        if (this.flexEvent) {
            this.data.settings.property.events = this.flexEvent.getEvents();
        }
        if (this.flexAction) {
            this.data.settings.property.actions = this.flexAction.getActions();
        }
    };
    GaugePropertyComponent.prototype.onAddInput = function () {
        this.flexHead.onAddInput();
    };
    GaugePropertyComponent.prototype.onAddEvent = function () {
        this.flexEvent.onAddEvent();
    };
    GaugePropertyComponent.prototype.onAddAction = function () {
        this.flexAction.onAddAction();
    };
    GaugePropertyComponent.prototype.onRangeViewToggle = function () {
        this.flexHead.onRangeViewToggle(this.slideView);
    };
    GaugePropertyComponent.prototype.onActionRangeViewToggle = function () {
        this.flexAction.onRangeViewToggle(this.slideActionView);
    };
    GaugePropertyComponent.prototype.onAlarmToggle = function () {
        this.flexHead.onAlarmEnabled(this.withAlarm);
    };
    GaugePropertyComponent.prototype.isToolboxToShow = function () {
        if (this.dialogType === GaugeDialogType.RangeWithAlarm || this.dialogType === GaugeDialogType.Range || this.dialogType === GaugeDialogType.Step) {
            return true;
        }
        return false;
    };
    GaugePropertyComponent.prototype.isRangeToShow = function () {
        if (this.dialogType === GaugeDialogType.RangeWithAlarm || this.dialogType === GaugeDialogType.Range) {
            return true;
        }
        return false;
    };
    GaugePropertyComponent.prototype.isAlarmToShow = function () {
        if (this.dialogType === GaugeDialogType.RangeWithAlarm) {
            return true;
        }
        return false;
    };
    GaugePropertyComponent.prototype.onEditPermission = function () {
        var _this = this;
        var permission = this.property.permission;
        var dialogRef = this.dialog.open(DialogGaugePermission, {
            minWidth: '350px',
            data: { permission: permission },
            position: { top: '90px' }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.property.permission = result.permission;
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], GaugePropertyComponent.prototype, "name", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewChild */])('flexhead'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__flex_head_flex_head_component__["a" /* FlexHeadComponent */])
    ], GaugePropertyComponent.prototype, "flexHead", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewChild */])('flexevent'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4__flex_event_flex_event_component__["a" /* FlexEventComponent */])
    ], GaugePropertyComponent.prototype, "flexEvent", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewChild */])('flexaction'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_5__flex_action_flex_action_component__["a" /* FlexActionComponent */])
    ], GaugePropertyComponent.prototype, "flexAction", void 0);
    GaugePropertyComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'gauge-property',
            template: __webpack_require__("../../../../../src/app/gauges/gauge-property/gauge-property.component.html"),
            styles: [__webpack_require__("../../../../../src/app/gauges/gauge-property/gauge-property.component.css")]
        }),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["j" /* MatDialog */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["m" /* MatDialogRef */], Object])
    ], GaugePropertyComponent);
    return GaugePropertyComponent;
}());

var GaugeDialogType;
(function (GaugeDialogType) {
    GaugeDialogType[GaugeDialogType["Range"] = 0] = "Range";
    GaugeDialogType[GaugeDialogType["RangeWithAlarm"] = 1] = "RangeWithAlarm";
    GaugeDialogType[GaugeDialogType["OnlyValue"] = 2] = "OnlyValue";
    GaugeDialogType[GaugeDialogType["ValueAndUnit"] = 3] = "ValueAndUnit";
    GaugeDialogType[GaugeDialogType["ValueWithRef"] = 4] = "ValueWithRef";
    GaugeDialogType[GaugeDialogType["Step"] = 5] = "Step";
    GaugeDialogType[GaugeDialogType["MinMax"] = 6] = "MinMax";
    GaugeDialogType[GaugeDialogType["Chart"] = 7] = "Chart";
    GaugeDialogType[GaugeDialogType["Gauge"] = 8] = "Gauge";
    GaugeDialogType[GaugeDialogType["Pipe"] = 9] = "Pipe";
})(GaugeDialogType || (GaugeDialogType = {}));
var DialogGaugePermission = (function () {
    function DialogGaugePermission(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        // defaultColor = Utils.defaultColor;
        this.selectedGroups = [];
        this.extensionGroups = [];
        this.groups = __WEBPACK_IMPORTED_MODULE_7__models_user__["b" /* UserGroups */].Groups;
        this.selectedGroups = __WEBPACK_IMPORTED_MODULE_7__models_user__["b" /* UserGroups */].ValueToGroups(this.data.permission);
        this.extensionGroups = __WEBPACK_IMPORTED_MODULE_7__models_user__["b" /* UserGroups */].ValueToGroups(this.data.permission, true);
    }
    DialogGaugePermission.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    DialogGaugePermission.prototype.onOkClick = function () {
        this.data.permission = __WEBPACK_IMPORTED_MODULE_7__models_user__["b" /* UserGroups */].GroupsToValue(this.seloptions.selected);
        this.data.permission += __WEBPACK_IMPORTED_MODULE_7__models_user__["b" /* UserGroups */].GroupsToValue(this.seloptions.extSelected, true);
        this.dialogRef.close(this.data);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_2__gui_helpers_sel_options_sel_options_component__["a" /* SelOptionsComponent */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__gui_helpers_sel_options_sel_options_component__["a" /* SelOptionsComponent */])
    ], DialogGaugePermission.prototype, "seloptions", void 0);
    DialogGaugePermission = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'dialog-gaugepermission',
            template: __webpack_require__("../../../../../src/app/gauges/gauge-property/gauge-permission.dialog.html"),
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["m" /* MatDialogRef */], Object])
    ], DialogGaugePermission);
    return DialogGaugePermission;
}());



/***/ }),

/***/ "../../../../../src/app/gauges/gauges.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GaugesManager; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__("../../../../@ngx-translate/core/@ngx-translate/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_hmi_service__ = __webpack_require__("../../../../../src/app/_services/hmi.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_chart__ = __webpack_require__("../../../../../src/app/_models/chart.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_hmi__ = __webpack_require__("../../../../../src/app/_models/hmi.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__controls_value_value_component__ = __webpack_require__("../../../../../src/app/gauges/controls/value/value.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__controls_html_input_html_input_component__ = __webpack_require__("../../../../../src/app/gauges/controls/html-input/html-input.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__controls_html_button_html_button_component__ = __webpack_require__("../../../../../src/app/gauges/controls/html-button/html-button.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__controls_html_select_html_select_component__ = __webpack_require__("../../../../../src/app/gauges/controls/html-select/html-select.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__controls_html_chart_html_chart_component__ = __webpack_require__("../../../../../src/app/gauges/controls/html-chart/html-chart.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__controls_html_bag_html_bag_component__ = __webpack_require__("../../../../../src/app/gauges/controls/html-bag/html-bag.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__controls_gauge_progress_gauge_progress_component__ = __webpack_require__("../../../../../src/app/gauges/controls/gauge-progress/gauge-progress.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__controls_gauge_semaphore_gauge_semaphore_component__ = __webpack_require__("../../../../../src/app/gauges/controls/gauge-semaphore/gauge-semaphore.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__shapes_shapes_component__ = __webpack_require__("../../../../../src/app/gauges/shapes/shapes.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__shapes_proc_eng_proc_eng_component__ = __webpack_require__("../../../../../src/app/gauges/shapes/proc-eng/proc-eng.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__shapes_ape_shapes_ape_shapes_component__ = __webpack_require__("../../../../../src/app/gauges/shapes/ape-shapes/ape-shapes.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pipe_pipe_component__ = __webpack_require__("../../../../../src/app/gauges/pipe/pipe.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__helpers_windowref__ = __webpack_require__("../../../../../src/app/_helpers/windowref.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



















var GaugesManager = (function () {
    function GaugesManager(hmiService, winRef, translateService, dialog) {
        var _this = this;
        this.hmiService = hmiService;
        this.winRef = winRef;
        this.translateService = translateService;
        this.dialog = dialog;
        this.onchange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.onevent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        // signalGaugeMap = new ViewSignalGaugeMap();      // map of all gauges (GaugeSettings) pro signals
        // map of gauges that have a click/html event
        this.eventGauge = {};
        // map of gauges with views
        this.mapGaugeView = {};
        // map of all signals and binded gauges of current view
        this.memorySigGauges = {};
        this.mapChart = {};
        this.mapGauges = {};
        // list of gauges tags to speed up the check
        this.gaugesTags = [];
        // subscription to the change of variable value, then emit to the gauges of fuxa-view 
        this.hmiService.onVariableChanged.subscribe(function (sig) {
            try {
                _this.onchange.emit(sig);
            }
            catch (err) {
            }
        });
        // subscription to DAQ values, then emit to charts gauges of fuxa-view 
        this.hmiService.onDaqResult.subscribe(function (message) {
            try {
                if (_this.mapChart[message.gid]) {
                    var gauge = _this.mapChart[message.gid];
                    for (var i = 0; i < message.values.length; i++) {
                        message.values[i][0] = new Date(message.values[i][0]);
                    }
                    gauge.setValues(message.values);
                }
            }
            catch (err) {
            }
        });
        // make the list of gauges tags to speed up the check
        GaugesManager_1.Gauges.forEach(function (g) {
            _this.gaugesTags.push(g.TypeTag);
        });
    }
    GaugesManager_1 = GaugesManager;
    GaugesManager.prototype.ngOnDestroy = function () {
        console.log('GaugesManager destroy');
    };
    GaugesManager.prototype.createSettings = function (id, type) {
        var gs = null;
        if (type) {
            for (var i = 0; i < GaugesManager_1.Gauges.length; i++) {
                if (type.startsWith(GaugesManager_1.Gauges[i].TypeTag)) {
                    gs = new __WEBPACK_IMPORTED_MODULE_5__models_hmi__["i" /* GaugeSettings */](id, type);
                    gs.label = GaugesManager_1.Gauges[i].LabelTag;
                    return gs;
                }
            }
        }
        return gs;
    };
    GaugesManager.prototype.createGaugeStatus = function (ga) {
        var result = new __WEBPACK_IMPORTED_MODULE_5__models_hmi__["j" /* GaugeStatus */]();
        if (!ga.type.startsWith(__WEBPACK_IMPORTED_MODULE_10__controls_html_chart_html_chart_component__["a" /* HtmlChartComponent */].TypeTag)) {
            result.onlyChange = true;
        }
        return result;
    };
    GaugesManager.prototype.isWithEvents = function (type) {
        if (type) {
            for (var i = 0; i < GaugesManager_1.GaugeWithEvents.length; i++) {
                if (type.startsWith(GaugesManager_1.GaugeWithEvents[i])) {
                    return true;
                }
            }
        }
        return false;
    };
    GaugesManager.prototype.isWithActions = function (type) {
        if (type) {
            for (var i = 0; i < GaugesManager_1.GaugeWithActions.length; i++) {
                if (type.startsWith(GaugesManager_1.GaugeWithActions[i].TypeTag)) {
                    if (typeof GaugesManager_1.GaugeWithActions[i]['getActions'] === 'function') {
                        return GaugesManager_1.GaugeWithActions[i]['getActions']();
                    }
                }
            }
        }
        return false;
    };
    GaugesManager.prototype.isGauge = function (type) {
        return this.gaugesTags.indexOf(type) > -1;
    };
    /**
     * gauges to update in editor after changed property (GaugePropertyComponent, ChartPropertyComponent)
     * @param ga
     */
    GaugesManager.prototype.initInEditor = function (ga, res, ref) {
        if (ga.type.startsWith(__WEBPACK_IMPORTED_MODULE_12__controls_gauge_progress_gauge_progress_component__["a" /* GaugeProgressComponent */].TypeTag)) {
            __WEBPACK_IMPORTED_MODULE_12__controls_gauge_progress_gauge_progress_component__["a" /* GaugeProgressComponent */].initElement(ga);
        }
        else if (ga.type.startsWith(__WEBPACK_IMPORTED_MODULE_8__controls_html_button_html_button_component__["a" /* HtmlButtonComponent */].TypeTag)) {
            __WEBPACK_IMPORTED_MODULE_8__controls_html_button_html_button_component__["a" /* HtmlButtonComponent */].initElement(ga);
        }
        else if (ga.type.startsWith(__WEBPACK_IMPORTED_MODULE_10__controls_html_chart_html_chart_component__["a" /* HtmlChartComponent */].TypeTag)) {
            __WEBPACK_IMPORTED_MODULE_10__controls_html_chart_html_chart_component__["a" /* HtmlChartComponent */].detectChange(ga);
        }
        else if (ga.type.startsWith(__WEBPACK_IMPORTED_MODULE_11__controls_html_bag_html_bag_component__["a" /* HtmlBagComponent */].TypeTag)) {
            this.mapGauges[ga.id] = __WEBPACK_IMPORTED_MODULE_11__controls_html_bag_html_bag_component__["a" /* HtmlBagComponent */].detectChange(ga, res, ref);
        }
        else if (ga.type.startsWith(__WEBPACK_IMPORTED_MODULE_17__pipe_pipe_component__["a" /* PipeComponent */].TypeTag)) {
            return this.mapGauges[ga.id] = __WEBPACK_IMPORTED_MODULE_17__pipe_pipe_component__["a" /* PipeComponent */].detectChange(ga, res, this.winRef);
        }
        return false;
    };
    //! toremove
    GaugesManager.prototype.setSignalValue = function (sig) {
        this.onchange.emit(sig);
    };
    //! toremove
    GaugesManager.prototype.initGaugesMap = function () {
        this.eventGauge = {};
        this.mapGaugeView = {};
    };
    /**
     * called from fuxa-view, is used to emit message for a refresh of all signals values and the gauges of view
     * @param domViewId
     */
    GaugesManager.prototype.emitBindedSignals = function (domViewId) {
        this.hmiService.emitMappedSignalsGauge(domViewId);
    };
    /**
     * called from fuxa-view, bind dom view, gauge with signal (for animation) and event
     * @param gaugekey
     * @param gauge
     * @param domViewId
     * @param ga
     * @param bindclick
     * @param bindhtmlevent
     */
    GaugesManager.prototype.bindGauge = function (gauge, domViewId, ga, bindclick, bindhtmlevent) {
        var sigsid = this.getBindSignals(ga);
        if (sigsid) {
            for (var i = 0; i < sigsid.length; i++) {
                this.hmiService.addSignalGaugeToMap(domViewId, sigsid[i], ga);
                // check for special gauge to save in memory binded to sigid (chart-html)
                if (gauge) {
                    if (!this.memorySigGauges[sigsid[i]]) {
                        this.memorySigGauges[sigsid[i]] = {};
                        this.memorySigGauges[sigsid[i]][ga.id] = gauge;
                    }
                    else if (!this.memorySigGauges[sigsid[i]][ga.id]) {
                        this.memorySigGauges[sigsid[i]][ga.id] = gauge;
                    }
                }
            }
        }
        var clicks = this.getBindClick(ga);
        if (clicks && clicks.length > 0) {
            this.eventGauge[ga.id] = ga;
            if (!this.mapGaugeView[ga.id]) {
                this.mapGaugeView[ga.id] = {};
                this.mapGaugeView[ga.id][domViewId] = ga;
                bindclick(ga);
            }
            else if (!this.mapGaugeView[ga.id][domViewId]) {
                this.mapGaugeView[ga.id][domViewId] = ga;
                bindclick(ga);
            }
            // add pointer
            var ele = document.getElementById(ga.id);
            if (ele) {
                ele.style.cursor = "pointer";
            }
            // bindclick(ga);
        }
        var htmlEvents = this.getHtmlEvents(ga);
        if (htmlEvents) {
            this.eventGauge[htmlEvents.dom.id] = ga;
            bindhtmlevent(htmlEvents);
        }
        this.checkElementToInit(ga);
    };
    /**
     * @param domViewId
     * called from fuxa-view, remove bind of dom view gauge
     */
    GaugesManager.prototype.unbindGauge = function (domViewId) {
        var _this = this;
        // first remove special gauge like chart from memorySigGauges
        var sigGaugeSettingsIdremoved = this.hmiService.removeSignalGaugeFromMap(domViewId);
        Object.keys(sigGaugeSettingsIdremoved).forEach(function (sid) {
            if (_this.memorySigGauges[sid] && _this.memorySigGauges[sid][sigGaugeSettingsIdremoved[sid]]) {
                delete _this.memorySigGauges[sid][sigGaugeSettingsIdremoved[sid]];
            }
        });
        // remove mapped gauge for events of this view
        Object.values(this.mapGaugeView).forEach(function (val) {
            if (val[domViewId]) {
                delete val[domViewId];
            }
        });
    };
    /**
     * init element of fuxa-view,
     * @param ga
     */
    GaugesManager.prototype.checkElementToInit = function (ga) {
        if (ga.type.startsWith(__WEBPACK_IMPORTED_MODULE_9__controls_html_select_html_select_component__["a" /* HtmlSelectComponent */].TypeTag)) {
            return __WEBPACK_IMPORTED_MODULE_9__controls_html_select_html_select_component__["a" /* HtmlSelectComponent */].initElement(ga);
        }
        return null;
    };
    GaugesManager.prototype.checkElementToResize = function (ga, res, ref) {
        if (this.mapGauges[ga.id]) {
            for (var i = 0; i < GaugesManager_1.Gauges.length; i++) {
                if (ga.type.startsWith(GaugesManager_1.Gauges[i].TypeTag)) {
                    if (typeof GaugesManager_1.Gauges[i]['resize'] === 'function') {
                        var options = void 0;
                        if (this.mapGauges[ga.id].options) {
                            options = this.mapGauges[ga.id].options;
                        }
                        return GaugesManager_1.Gauges[i]['resize'](ga, res, ref, options);
                    }
                    return;
                }
            }
        }
    };
    /**
     * get all gauge settings binded to dom view with the signal
     * @param domViewId
     * @param sigid
     */
    GaugesManager.prototype.getGaugeSettings = function (domViewId, sigid) {
        var gslist = this.hmiService.getMappedSignalsGauges(domViewId, sigid);
        return gslist;
    };
    /**
     * get all signals mapped in all dom views, used from LabComponent
     * @param fulltext a copy with item name and source
     */
    GaugesManager.prototype.getMappedGaugesSignals = function (fulltext) {
        return this.hmiService.getMappedVariables(fulltext);
    };
    /**
     * return all signals binded to the gauge
     * @param ga
     */
    GaugesManager.prototype.getBindSignals = function (ga) {
        if (ga.property) {
            for (var i = 0; i < GaugesManager_1.Gauges.length; i++) {
                if (ga.type.startsWith(GaugesManager_1.Gauges[i].TypeTag)) {
                    if (ga.type.startsWith(__WEBPACK_IMPORTED_MODULE_10__controls_html_chart_html_chart_component__["a" /* HtmlChartComponent */].TypeTag)) {
                        var sigs = this.hmiService.getChartSignal(ga.property.id);
                        return sigs;
                    }
                    else if (typeof GaugesManager_1.Gauges[i]['getSignals'] === 'function') {
                        return GaugesManager_1.Gauges[i]['getSignals'](ga.property);
                    }
                    else {
                        return null;
                    }
                }
            }
        }
        return null;
    };
    /**
     * return all events binded to the gauge with click event
     * @param ga
     */
    GaugesManager.prototype.getBindClick = function (ga) {
        for (var i = 0; i < GaugesManager_1.Gauges.length; i++) {
            if (ga.type.startsWith(GaugesManager_1.Gauges[i].TypeTag)) {
                if (typeof GaugesManager_1.Gauges[i]['getEvents'] === 'function') {
                    return GaugesManager_1.Gauges[i]['getEvents'](ga.property, __WEBPACK_IMPORTED_MODULE_5__models_hmi__["f" /* GaugeEventType */].click);
                }
                else {
                    return null;
                }
            }
        }
        return null;
    };
    /**
     * return all events binded to the html gauge ('key-enter' of input, 'change' of select)
     * @param ga
     */
    GaugesManager.prototype.getHtmlEvents = function (ga) {
        if (ga.type.startsWith(__WEBPACK_IMPORTED_MODULE_7__controls_html_input_html_input_component__["a" /* HtmlInputComponent */].TypeTag)) {
            return __WEBPACK_IMPORTED_MODULE_7__controls_html_input_html_input_component__["a" /* HtmlInputComponent */].getHtmlEvents(ga);
        }
        else if (ga.type.startsWith(__WEBPACK_IMPORTED_MODULE_9__controls_html_select_html_select_component__["a" /* HtmlSelectComponent */].TypeTag)) {
            return __WEBPACK_IMPORTED_MODULE_9__controls_html_select_html_select_component__["a" /* HtmlSelectComponent */].getHtmlEvents(ga);
        }
        return null;
    };
    /**
     * manage to which gauge to forward the process function
     * @param ga
     * @param svgele
     * @param sig
     */
    GaugesManager.prototype.processValue = function (ga, svgele, sig, gaugeStatus) {
        var _this = this;
        for (var i = 0; i < GaugesManager_1.Gauges.length; i++) {
            if (ga.type.startsWith(GaugesManager_1.Gauges[i].TypeTag)) {
                if (ga.type.startsWith(__WEBPACK_IMPORTED_MODULE_10__controls_html_chart_html_chart_component__["a" /* HtmlChartComponent */].TypeTag)) {
                    if (ga.property.type !== 'history' && this.memorySigGauges[sig.id]) {
                        Object.keys(this.memorySigGauges[sig.id]).forEach(function (k) {
                            if (k === ga.id) {
                                __WEBPACK_IMPORTED_MODULE_10__controls_html_chart_html_chart_component__["a" /* HtmlChartComponent */].processValue(ga, svgele, sig, gaugeStatus, _this.memorySigGauges[sig.id][k]);
                            }
                        });
                    }
                    break;
                }
                else if (ga.type.startsWith(__WEBPACK_IMPORTED_MODULE_11__controls_html_bag_html_bag_component__["a" /* HtmlBagComponent */].TypeTag)) {
                    Object.keys(this.memorySigGauges[sig.id]).forEach(function (k) {
                        if (k === ga.id && _this.mapGauges[k]) {
                            __WEBPACK_IMPORTED_MODULE_11__controls_html_bag_html_bag_component__["a" /* HtmlBagComponent */].processValue(ga, svgele, sig, gaugeStatus, _this.mapGauges[k]); //this.memorySigGauges[sig.id][k]);
                        }
                    });
                    break;
                }
                else if (typeof GaugesManager_1.Gauges[i]['processValue'] === 'function') {
                    GaugesManager_1.Gauges[i]['processValue'](ga, svgele, sig, gaugeStatus);
                    break;
                }
                else {
                    break;
                }
            }
        }
    };
    /**
     * called from fuxa-view to emit and send signal value from a gauge event ('key-enter' of input, 'change' of select)
     * @param event
     */
    GaugesManager.prototype.putEvent = function (event) {
        if (event.ga.property && event.ga.property.variableId) {
            this.hmiService.putSignalValue(event.ga.property.variableId, event.value);
            event.dbg = 'put ' + event.ga.property.variableId + ' ' + event.value;
        }
        this.onevent.emit(event);
    };
    /**
     * called from fuxa-view to emit and send signal value from a gauge event (click)
     * @param sigid
     * @param val
     */
    GaugesManager.prototype.putSignalValue = function (sigid, val) {
        this.hmiService.putSignalValue(sigid, val);
    };
    GaugesManager.getEditDialogTypeToUse = function (type) {
        for (var i = 0; i < GaugesManager_1.Gauges.length; i++) {
            if (type.startsWith(GaugesManager_1.Gauges[i].TypeTag)) {
                if (typeof GaugesManager_1.Gauges[i]['getDialogType'] === 'function') {
                    return GaugesManager_1.Gauges[i]['getDialogType']();
                }
                else {
                    return null;
                }
            }
        }
    };
    /**
     * used from controls in editor to get default value of edit gauge property
     */
    GaugesManager.getDefaultValue = function (type) {
        if (type.startsWith(__WEBPACK_IMPORTED_MODULE_12__controls_gauge_progress_gauge_progress_component__["a" /* GaugeProgressComponent */].TypeTag)) {
            return __WEBPACK_IMPORTED_MODULE_12__controls_gauge_progress_gauge_progress_component__["a" /* GaugeProgressComponent */].getDefaultValue();
        }
        return null;
    };
    /**
     * used from controls in editor, to set the colorpicker of selected control
     */
    GaugesManager.checkGaugeColor = function (ele, eles, colors) {
        if (ele && ele.type && eles && (eles.length <= 1 || !eles[1]) && colors) {
            if (ele.type.startsWith(__WEBPACK_IMPORTED_MODULE_12__controls_gauge_progress_gauge_progress_component__["a" /* GaugeProgressComponent */].TypeTag)) {
                colors.fill = __WEBPACK_IMPORTED_MODULE_12__controls_gauge_progress_gauge_progress_component__["a" /* GaugeProgressComponent */].getFillColor(eles[0]);
                colors.stroke = __WEBPACK_IMPORTED_MODULE_12__controls_gauge_progress_gauge_progress_component__["a" /* GaugeProgressComponent */].getStrokeColor(eles[0]);
                return true;
            }
            else if (ele.type.startsWith(__WEBPACK_IMPORTED_MODULE_13__controls_gauge_semaphore_gauge_semaphore_component__["a" /* GaugeSemaphoreComponent */].TypeTag)) {
                colors.fill = __WEBPACK_IMPORTED_MODULE_13__controls_gauge_semaphore_gauge_semaphore_component__["a" /* GaugeSemaphoreComponent */].getFillColor(eles[0]);
                colors.stroke = __WEBPACK_IMPORTED_MODULE_13__controls_gauge_semaphore_gauge_semaphore_component__["a" /* GaugeSemaphoreComponent */].getStrokeColor(eles[0]);
                return true;
            }
            else if (ele.type.startsWith(__WEBPACK_IMPORTED_MODULE_8__controls_html_button_html_button_component__["a" /* HtmlButtonComponent */].TypeTag)) {
                colors.fill = __WEBPACK_IMPORTED_MODULE_8__controls_html_button_html_button_component__["a" /* HtmlButtonComponent */].getFillColor(eles[0]);
                colors.stroke = __WEBPACK_IMPORTED_MODULE_8__controls_html_button_html_button_component__["a" /* HtmlButtonComponent */].getStrokeColor(eles[0]);
                return true;
            }
            else if (ele.type.startsWith(__WEBPACK_IMPORTED_MODULE_7__controls_html_input_html_input_component__["a" /* HtmlInputComponent */].TypeTag)) {
                colors.fill = __WEBPACK_IMPORTED_MODULE_7__controls_html_input_html_input_component__["a" /* HtmlInputComponent */].getFillColor(eles[0]);
                colors.stroke = __WEBPACK_IMPORTED_MODULE_7__controls_html_input_html_input_component__["a" /* HtmlInputComponent */].getStrokeColor(eles[0]);
                return true;
            }
            else if (ele.type.startsWith(__WEBPACK_IMPORTED_MODULE_9__controls_html_select_html_select_component__["a" /* HtmlSelectComponent */].TypeTag)) {
                colors.fill = __WEBPACK_IMPORTED_MODULE_9__controls_html_select_html_select_component__["a" /* HtmlSelectComponent */].getFillColor(eles[0]);
                colors.stroke = __WEBPACK_IMPORTED_MODULE_9__controls_html_select_html_select_component__["a" /* HtmlSelectComponent */].getStrokeColor(eles[0]);
                return true;
            }
        }
        return false;
    };
    /**
     * used from controls in editor to change fill and stroke colors
     * @param bkcolor
     * @param color
     * @param elems
     */
    GaugesManager.initElementColor = function (bkcolor, color, elements) {
        var elems = elements.filter(function (el) { return el; });
        for (var i = 0; i < elems.length; i++) {
            var type = elems[i].getAttribute('type');
            if (type.startsWith(__WEBPACK_IMPORTED_MODULE_12__controls_gauge_progress_gauge_progress_component__["a" /* GaugeProgressComponent */].TypeTag)) {
                __WEBPACK_IMPORTED_MODULE_12__controls_gauge_progress_gauge_progress_component__["a" /* GaugeProgressComponent */].initElementColor(bkcolor, color, elems[i]);
            }
            else if (type.startsWith(__WEBPACK_IMPORTED_MODULE_8__controls_html_button_html_button_component__["a" /* HtmlButtonComponent */].TypeTag)) {
                __WEBPACK_IMPORTED_MODULE_8__controls_html_button_html_button_component__["a" /* HtmlButtonComponent */].initElementColor(bkcolor, color, elems[i]);
            }
            else if (type.startsWith(__WEBPACK_IMPORTED_MODULE_7__controls_html_input_html_input_component__["a" /* HtmlInputComponent */].TypeTag)) {
                __WEBPACK_IMPORTED_MODULE_7__controls_html_input_html_input_component__["a" /* HtmlInputComponent */].initElementColor(bkcolor, color, elems[i]);
            }
            else if (type.startsWith(__WEBPACK_IMPORTED_MODULE_9__controls_html_select_html_select_component__["a" /* HtmlSelectComponent */].TypeTag)) {
                __WEBPACK_IMPORTED_MODULE_9__controls_html_select_html_select_component__["a" /* HtmlSelectComponent */].initElementColor(bkcolor, color, elems[i]);
            }
        }
    };
    /**
     * initialize the gauge element found in svg,
     * in svg is only a 'div' that have to be dynamic build and render from angular
     * @param ga gauge settings
     * @param res reference to factory
     * @param ref reference to factory
     * @param isview in view or editor, in editor have to disable mouse activity
     */
    GaugesManager.prototype.initElementAdded = function (ga, res, ref, isview) {
        var _this = this;
        // add variable
        var sigsid = this.getBindSignals(ga);
        if (sigsid) {
            for (var i = 0; i < sigsid.length; i++) {
                this.hmiService.addSignal(sigsid[i], ga);
            }
        }
        if (ga.type.startsWith(__WEBPACK_IMPORTED_MODULE_10__controls_html_chart_html_chart_component__["a" /* HtmlChartComponent */].TypeTag)) {
            // prepare attribute
            var chartRange_1 = __WEBPACK_IMPORTED_MODULE_4__models_chart__["b" /* ChartRangeType */];
            Object.keys(chartRange_1).forEach(function (key) {
                _this.translateService.get(chartRange_1[key]).subscribe(function (txt) { chartRange_1[key] = txt; });
            });
            var gauge_1 = __WEBPACK_IMPORTED_MODULE_10__controls_html_chart_html_chart_component__["a" /* HtmlChartComponent */].initElement(ga, res, ref, isview, chartRange_1);
            gauge_1.init();
            if (ga.property) {
                var chart = this.hmiService.getChart(ga.property.id);
                chart.lines.forEach(function (line) {
                    var sigid = __WEBPACK_IMPORTED_MODULE_3__services_hmi_service__["a" /* HmiService */].toVariableId(line.device, line.id);
                    var sigProperty = _this.hmiService.getMappedVariable(sigid, true);
                    if (sigProperty) {
                        gauge_1.addLine(sigid, sigProperty.name, line.color);
                    }
                });
                gauge_1.setOptions({ title: chart.name });
            }
            this.mapChart[ga.id] = gauge_1;
            gauge_1.resize();
            gauge_1.onTimeRange.subscribe(function (data) {
                _this.hmiService.queryDaqValues(data);
            });
            gauge_1.setRange(Object.keys(chartRange_1)[0]);
            // gauge.onTimeRange = this.onTimeRange;
            this.mapGauges[ga.id] = gauge_1;
            return gauge_1;
        }
        else if (ga.type.startsWith(__WEBPACK_IMPORTED_MODULE_11__controls_html_bag_html_bag_component__["a" /* HtmlBagComponent */].TypeTag)) {
            var gauge = __WEBPACK_IMPORTED_MODULE_11__controls_html_bag_html_bag_component__["a" /* HtmlBagComponent */].initElement(ga, res, ref, isview);
            this.mapGauges[ga.id] = gauge;
            return gauge;
        }
    };
    /**
     * clear memory object used from view, some reset
     */
    GaugesManager.prototype.clearMemory = function () {
        this.memorySigGauges = {};
    };
    // list of gauges tags to check who as events like mouse click
    GaugesManager.GaugeWithEvents = [__WEBPACK_IMPORTED_MODULE_8__controls_html_button_html_button_component__["a" /* HtmlButtonComponent */].TypeTag, __WEBPACK_IMPORTED_MODULE_13__controls_gauge_semaphore_gauge_semaphore_component__["a" /* GaugeSemaphoreComponent */].TypeTag, __WEBPACK_IMPORTED_MODULE_14__shapes_shapes_component__["a" /* ShapesComponent */].TypeTag, __WEBPACK_IMPORTED_MODULE_15__shapes_proc_eng_proc_eng_component__["a" /* ProcEngComponent */].TypeTag,
        __WEBPACK_IMPORTED_MODULE_16__shapes_ape_shapes_ape_shapes_component__["a" /* ApeShapesComponent */].TypeTag];
    // list of gauges tags to check who as events like mouse click
    GaugesManager.GaugeWithActions = [__WEBPACK_IMPORTED_MODULE_16__shapes_ape_shapes_ape_shapes_component__["a" /* ApeShapesComponent */], __WEBPACK_IMPORTED_MODULE_17__pipe_pipe_component__["a" /* PipeComponent */]];
    // list of gauges components
    GaugesManager.Gauges = [__WEBPACK_IMPORTED_MODULE_6__controls_value_value_component__["a" /* ValueComponent */], __WEBPACK_IMPORTED_MODULE_7__controls_html_input_html_input_component__["a" /* HtmlInputComponent */], __WEBPACK_IMPORTED_MODULE_8__controls_html_button_html_button_component__["a" /* HtmlButtonComponent */], __WEBPACK_IMPORTED_MODULE_11__controls_html_bag_html_bag_component__["a" /* HtmlBagComponent */],
        __WEBPACK_IMPORTED_MODULE_9__controls_html_select_html_select_component__["a" /* HtmlSelectComponent */], __WEBPACK_IMPORTED_MODULE_10__controls_html_chart_html_chart_component__["a" /* HtmlChartComponent */], __WEBPACK_IMPORTED_MODULE_12__controls_gauge_progress_gauge_progress_component__["a" /* GaugeProgressComponent */], __WEBPACK_IMPORTED_MODULE_13__controls_gauge_semaphore_gauge_semaphore_component__["a" /* GaugeSemaphoreComponent */], __WEBPACK_IMPORTED_MODULE_14__shapes_shapes_component__["a" /* ShapesComponent */], __WEBPACK_IMPORTED_MODULE_15__shapes_proc_eng_proc_eng_component__["a" /* ProcEngComponent */], __WEBPACK_IMPORTED_MODULE_16__shapes_ape_shapes_ape_shapes_component__["a" /* ApeShapesComponent */],
        __WEBPACK_IMPORTED_MODULE_17__pipe_pipe_component__["a" /* PipeComponent */]];
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */])
    ], GaugesManager.prototype, "onchange", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */])
    ], GaugesManager.prototype, "onevent", void 0);
    GaugesManager = GaugesManager_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_hmi_service__["a" /* HmiService */],
            __WEBPACK_IMPORTED_MODULE_18__helpers_windowref__["a" /* WindowRef */],
            __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["j" /* MatDialog */]])
    ], GaugesManager);
    return GaugesManager;
    var GaugesManager_1;
}());



/***/ }),

/***/ "../../../../../src/app/gauges/pipe/pipe-property/pipe-property.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".toolbox {\r\n    display: inline-block;\r\n    float: right;\r\n    margin-top: 10px;\r\n    margin-bottom: 3px;\r\n}\r\n  \r\n.toolbox button {\r\n    margin-right: 8px;\r\n    margin-left: 8px;\r\n}\r\n\r\n.toolbox-right {\r\n    width: 300px;\r\n    position: absolute;\r\n    top: 85px;\r\n    right: 20px;\r\n    height: 200px;\r\n    overflow: hidden;\r\n}\r\n\r\n.slider-field span {\r\n    padding-left: 2px;\r\n    text-overflow: clip;\r\n    max-width: 125px;\r\n    white-space: nowrap;\r\n    overflow: hidden;\r\n}\r\n\r\n.slider-field mat-slider {\r\n    background-color: #f1f3f4;\r\n    height: 30px;\r\n}\r\n\r\n.field-row {\r\n    display: block;\r\n    margin-bottom: 5px;\r\n}\r\n\r\n.color-field input {\r\n    padding: 0 !important;\r\n    height: 29px;\r\n}\r\n\r\n::ng-deep .input-text .mat-form-field-wrapper {\r\n    /* margin-bottom: -15px !important; */\r\n}\r\n::ng-deep .input-text .mat-form-field-infix {\r\n    padding-top: 5px;\r\n    padding-bottom: 0px;\r\n}\r\n\r\n::ng-deep .mat-dialog-container {\r\n    display: inline-table !important;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/gauges/pipe/pipe-property/pipe-property.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"width: 100%;min-height: 400px;position: relative;padding-bottom: 40px\">\n    <mat-icon (click)=\"onNoClick()\" style=\"float:right;cursor:pointer;color:gray;position: relative; top: 10px; right: 0px\">clear</mat-icon>\n\t<mat-tab-group style=\"width: 100%;\">\n\t\t<mat-tab label=\"{{'gauges.property-props' | translate}}\">\n\t\t\t<div style=\"max-height: 540px; overflow-y: auto; overflow-x: hidden; padding-top: 15px;\">\n\t\t\t\t<div style=\"display: block;\">\n                    <flex-auth [name]=\"name\" [permission]=\"property.permission\" #flexauth></flex-auth>\n                </div>\n                <div mat-dialog-content style=\"overflow: hidden; width:100%;padding-top: 20px;\">\n                    <div id=\"pipe\" style=\"width: 200px; height: 240px;margin-left: 20px;\"></div>\n                    <!-- <flex-head [data]=\"data\" [property]=\"property\" #flexhead></flex-head> -->\n                    <div class=\"toolbox-right\">\n                        <div class=\"field-row\">\n                            <div class=\"my-form-field slider-field\" style=\"padding-left: 12px\">\n                                <span>{{'pipe.property-border-width' | translate}}</span>\n                                <mat-slider style=\"display:inline-block;\" [max]=\"100\" [min]=\"0\" [step]=\"1\" [thumb-label]=\"true\" [(ngModel)]=\"options.borderWidth\" (input)=\"onChangeValue('borderWidth', $event.value)\">\n                                </mat-slider>\n                            </div>\n                            <div class=\"my-form-field slider-field color-field\" style=\"padding-left: 12px\">\n                                <span>{{'pipe.property-border-color' | translate}}</span>\n                                <input [(colorPicker)]=\"options.border\" [style.background]=\"options.border\" [cpPresetColors]=\"defaultColor\" [cpOKButton]=\"true\" [cpCancelButton]=\"true\" [cpCancelButtonClass]=\"'cpCancelButtonClass'\" [cpCancelButtonText]=\"'Cancel'\" [cpOKButtonText]=\"'OK'\" [cpOKButtonClass]=\"'cpOKButtonClass'\" style=\"padding: 8px 0 0 0; width: 128px\" [cpPosition]=\"'bottom'\" (colorPickerChange)=\"onChangeValue('border', $event)\" />\n                            </div>\n                        </div>\n                        <div class=\"field-row\">\n                            <div class=\"my-form-field slider-field\" style=\"padding-left: 12px\">\n                                <span>{{'pipe.property-pipe-width' | translate}}</span>\n                                <mat-slider style=\"display:inline-block;\" [max]=\"100\" [min]=\"0\" [step]=\"1\" [thumb-label]=\"true\" [(ngModel)]=\"options.pipeWidth\" (input)=\"onChangeValue('pipeWidth', $event.value)\">\n                                </mat-slider>\n                            </div>\n                            <div class=\"my-form-field slider-field color-field\" style=\"padding-left: 12px\">\n                                <span>{{'pipe.property-pipe-color' | translate}}</span>\n                                <input [(colorPicker)]=\"options.pipe\" [style.background]=\"options.pipe\" [cpPresetColors]=\"defaultColor\" [cpOKButton]=\"true\" [cpCancelButton]=\"true\" [cpCancelButtonClass]=\"'cpCancelButtonClass'\" [cpCancelButtonText]=\"'Cancel'\" [cpOKButtonText]=\"'OK'\" [cpOKButtonClass]=\"'cpOKButtonClass'\" style=\"padding: 8px 0 0 0; width: 128px\" [cpPosition]=\"'bottom'\" (colorPickerChange)=\"onChangeValue('pipe', $event)\" />\n                            </div>\n                        </div>\n                        <div class=\"field-row\">\n                            <div class=\"my-form-field slider-field\" style=\"padding-left: 12px\">\n                                <span>{{'pipe.property-content-width' | translate}}</span>\n                                <mat-slider style=\"display:inline-block;\" [max]=\"100\" [min]=\"0\" [step]=\"1\" [thumb-label]=\"true\" [(ngModel)]=\"options.contentWidth\" (input)=\"onChangeValue('contentWidth', $event.value)\">\n                                </mat-slider>\n                            </div>\n                            <div class=\"my-form-field slider-field color-field\" style=\"padding-left: 12px\">\n                                <span>{{'pipe.property-content-color' | translate}}</span>\n                                <input [(colorPicker)]=\"options.content\" [style.background]=\"options.content\" [cpPresetColors]=\"defaultColor\" [cpOKButton]=\"true\" [cpCancelButton]=\"true\" [cpCancelButtonClass]=\"'cpCancelButtonClass'\" [cpCancelButtonText]=\"'Cancel'\" [cpOKButtonText]=\"'OK'\" [cpOKButtonClass]=\"'cpOKButtonClass'\" style=\"padding: 8px 0 0 0; width: 128px\" [cpPosition]=\"'bottom'\" (colorPickerChange)=\"onChangeValue('content', $event)\" />\n                            </div>\n                        </div>\n                        <div class=\"field-row\">\n                            <div class=\"my-form-field slider-field\" style=\"padding-left: 12px\">\n                                <span>{{'pipe.property-content-space' | translate}}</span>\n                                <mat-slider style=\"display:inline-block;\" [max]=\"100\" [min]=\"0\" [step]=\"1\" [thumb-label]=\"true\" [(ngModel)]=\"options.contentSpace\" (input)=\"onChangeValue('contentSpace', $event.value)\">\n                                </mat-slider>\n                            </div>\n                        </div>   \n                    </div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</mat-tab>\n\t\t<mat-tab label=\"{{'gauges.property-events' | translate}}\" *ngIf=\"eventsSupported\">\n\t\t\t<div style=\"max-height: 540px; overflow-y: auto; overflow-x: hidden; padding-top: 15px;\">\n\t\t\t\t<div style=\"display: block;\">\n\t\t\t\t\t<div class=\"toolbox\">\n\t\t\t\t\t\t<button mat-icon-button (click)=\"onAddEvent()\">\n\t\t\t\t\t\t\t<mat-icon>add_circle_outline</mat-icon>\n\t\t\t\t\t\t</button>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div mat-dialog-content style=\"overflow: hidden; width:100%\">\n\t\t\t\t\t<flex-event [property]=\"property\" [views]=\"views\" #flexevent *ngIf=\"eventsSupported\" style=\"padding-bottom: 5px\"></flex-event>\n\t\t\t\t</div>\n\t\t\t</div>\n        </mat-tab>\n\t\t<mat-tab label=\"{{'gauges.property-actions' | translate}}\" *ngIf=\"actionsSupported\">\n\t\t\t<div style=\"max-height: 540px; overflow-y: auto; overflow-x: hidden; padding-top: 15px;\">\n\t\t\t\t<div style=\"display: block;\">\n\t\t\t\t\t<div class=\"toolbox\">\n\t\t\t\t\t\t<button mat-icon-button (click)=\"onAddAction()\">\n\t\t\t\t\t\t\t<mat-icon>add_circle_outline</mat-icon>\n                        </button>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div mat-dialog-content style=\"overflow: hidden; width:100%\">\n\t\t\t\t\t<flex-action [data]=\"data\" [property]=\"property\" #flexaction *ngIf=\"actionsSupported\" style=\"padding-bottom: 5px\"></flex-action>\n\t\t\t\t</div>\n\t\t\t</div>\n        </mat-tab>        \n\t</mat-tab-group>\n<!-- \n    <div style=\"display: block; width: 660px;padding-top: 30px\">\n        <div style=\"display: block;\">\n            <flex-auth [name]=\"name\" [permission]=\"property.permission\" #flexauth></flex-auth>\n        </div>\n        <div mat-dialog-content style=\"overflow: hidden; width:100%\">\n            <flex-head [data]=\"data\" [property]=\"property\" #flexhead></flex-head>\n        </div>\n    </div> -->\n    <!-- <div style=\"width: 760px; height: 620px; position: relative\"> -->\n    <!-- </div> -->\n    <div mat-dialog-actions style=\"display: inline-block; position: absolute; bottom: 10px; right: 10px\">\n        <button mat-raised-button (click)=\"onNoClick()\">{{'dlg.cancel' | translate}}</button>\n        <button mat-raised-button color=\"primary\" (click)=\"onOkClick()\" [mat-dialog-close]=\"data\" cdkFocusInitial>{{'dlg.ok' | translate}}</button>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/gauges/pipe/pipe-property/pipe-property.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PipePropertyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_hmi__ = __webpack_require__("../../../../../src/app/_models/hmi.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__gauge_property_flex_head_flex_head_component__ = __webpack_require__("../../../../../src/app/gauges/gauge-property/flex-head/flex-head.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__gauge_property_flex_auth_flex_auth_component__ = __webpack_require__("../../../../../src/app/gauges/gauge-property/flex-auth/flex-auth.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__gauge_property_flex_event_flex_event_component__ = __webpack_require__("../../../../../src/app/gauges/gauge-property/flex-event/flex-event.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__gauge_property_flex_action_flex_action_component__ = __webpack_require__("../../../../../src/app/gauges/gauge-property/flex-action/flex-action.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pipe_component__ = __webpack_require__("../../../../../src/app/gauges/pipe/pipe.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};








var PipePropertyComponent = (function () {
    function PipePropertyComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.pipepath = { bk: null, fg: null, hp: null };
    }
    PipePropertyComponent.prototype.ngOnInit = function () {
        this.eventsSupported = this.data.withEvents;
        this.actionsSupported = this.data.withActions;
        this.property = JSON.parse(JSON.stringify(this.data.settings.property));
        if (!this.property) {
            this.property = new __WEBPACK_IMPORTED_MODULE_2__models_hmi__["g" /* GaugeProperty */]();
        }
        this.name = this.data.settings.name;
        this.options = this.property.options;
        if (!this.options) {
            this.options = new __WEBPACK_IMPORTED_MODULE_7__pipe_component__["b" /* PipeOptions */]();
            this.options.borderWidth = 40;
            this.options.border = '#000000';
            this.options.pipeWidth = 30;
            this.options.pipe = '#0000ff';
            this.options.contentWidth = 30;
            this.options.content = '#0044ff';
            this.options.contentSpace = 48;
        }
        // this.permission = this.property.permission;
    };
    PipePropertyComponent.prototype.ngAfterViewInit = function () {
        // var draw = SVG().addTo('#pipe').size('100%', '100%');
        var draw = SVG('pipe');
        this.pipepath.bk = draw.path('m 1,120 200,0');
        this.pipepath.fg = draw.path('m 1,120 200,0');
        this.pipepath.hp = draw.path('m 1,120 200,0');
        this.redrawPipe();
    };
    PipePropertyComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    PipePropertyComponent.prototype.onOkClick = function () {
        this.data.settings.property = this.property;
        this.data.settings.property.permission = this.flexAuth.permission;
        this.data.settings.property.options = this.options;
        this.data.settings.name = this.flexAuth.name;
        if (this.flexEvent) {
            this.data.settings.property.events = this.flexEvent.getEvents();
        }
        if (this.flexAction) {
            this.data.settings.property.actions = this.flexAction.getActions();
        }
    };
    PipePropertyComponent.prototype.redrawPipe = function () {
        this.pipepath.fg.stroke({ color: this.options.pipe, width: this.options.pipeWidth });
        this.pipepath.fg.fill('none');
        this.pipepath.bk.stroke({ color: this.options.border, width: this.options.borderWidth });
        this.pipepath.bk.fill('none');
        var space = '' + this.options.contentSpace + ' ' + this.options.contentSpace;
        this.pipepath.hp.stroke({ color: this.options.content, width: this.options.contentWidth, dasharray: space });
        this.pipepath.hp.fill('none');
    };
    PipePropertyComponent.prototype.onChangeValue = function (type, value) {
        if (type == 'borderWidth') {
            this.options.borderWidth = value;
        }
        else if (type == 'border') {
            this.options.border = value;
        }
        else if (type == 'pipeWidth') {
            this.options.pipeWidth = value;
        }
        else if (type == 'pipe') {
            this.options.pipe = value;
        }
        else if (type == 'contentWidth') {
            this.options.contentWidth = value;
        }
        else if (type == 'content') {
            this.options.content = value;
        }
        else if (type == 'contentSpace') {
            this.options.contentSpace = value;
        }
        this.redrawPipe();
    };
    PipePropertyComponent.prototype.onAddEvent = function () {
        this.flexEvent.onAddEvent();
    };
    PipePropertyComponent.prototype.onAddAction = function () {
        this.flexAction.onAddAction();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewChild */])('flexauth'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4__gauge_property_flex_auth_flex_auth_component__["a" /* FlexAuthComponent */])
    ], PipePropertyComponent.prototype, "flexAuth", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewChild */])('flexhead'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__gauge_property_flex_head_flex_head_component__["a" /* FlexHeadComponent */])
    ], PipePropertyComponent.prototype, "flexHead", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewChild */])('flexevent'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_5__gauge_property_flex_event_flex_event_component__["a" /* FlexEventComponent */])
    ], PipePropertyComponent.prototype, "flexEvent", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewChild */])('flexaction'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_6__gauge_property_flex_action_flex_action_component__["a" /* FlexActionComponent */])
    ], PipePropertyComponent.prototype, "flexAction", void 0);
    PipePropertyComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'pipe-property',
            template: __webpack_require__("../../../../../src/app/gauges/pipe/pipe-property/pipe-property.component.html"),
            styles: [__webpack_require__("../../../../../src/app/gauges/pipe/pipe-property/pipe-property.component.css")]
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["m" /* MatDialogRef */], Object])
    ], PipePropertyComponent);
    return PipePropertyComponent;
}());



/***/ }),

/***/ "../../../../../src/app/gauges/pipe/pipe.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PipeComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return PipeOptions; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__gauge_property_gauge_property_component__ = __webpack_require__("../../../../../src/app/gauges/gauge-property/gauge-property.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__helpers_utils__ = __webpack_require__("../../../../../src/app/_helpers/utils.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PipeComponent = (function () {
    function PipeComponent() {
    }
    PipeComponent_1 = PipeComponent;
    PipeComponent.getSignals = function (pro) {
        var res = [];
        if (pro.variableId) {
            res.push(pro.variableId);
        }
        if (pro.alarmId) {
            res.push(pro.alarmId);
        }
        if (pro.actions) {
            pro.actions.forEach(function (act) {
                res.push(act.variableId);
            });
        }
        return res;
    };
    PipeComponent.getActions = function () {
        return this.actionsType;
    };
    PipeComponent.getDialogType = function () {
        return __WEBPACK_IMPORTED_MODULE_1__gauge_property_gauge_property_component__["b" /* GaugeDialogType */].Pipe;
    };
    PipeComponent.processValue = function (ga, svgele, sig, gaugeStatus) {
        if (svgele.node) {
            var clr = '';
            var value_1 = parseFloat(sig.value);
            if (Number.isNaN(value_1)) {
                // maybe boolean
                value_1 = Number(sig.value);
            }
            else {
                value_1 = parseFloat(value_1.toFixed(5));
            }
            if (ga.property) {
                // check actions
                if (ga.property.actions) {
                    ga.property.actions.forEach(function (act) {
                        if (act.variableId === sig.id) {
                            PipeComponent_1.processAction(act, svgele, value_1, gaugeStatus);
                        }
                    });
                }
            }
        }
    };
    PipeComponent.processAction = function (act, svgele, value, gaugeStatus) {
        var element = SVG.adopt(svgele.node);
        if (act.range.min <= value && act.range.max >= value) {
            PipeComponent_1.runAction(element, act.type, gaugeStatus);
        }
    };
    PipeComponent.runAction = function (element, type, gaugeStatus) {
        if (PipeComponent_1.actionsType[type] === PipeComponent_1.actionsType.stop) {
            if (gaugeStatus.actionRef && gaugeStatus.actionRef.timer) {
                clearTimeout(gaugeStatus.actionRef.timer);
                gaugeStatus.actionRef = null;
            }
        }
        else {
            if (gaugeStatus.actionRef && gaugeStatus.actionRef.type === type) {
                return;
            }
            if (gaugeStatus.actionRef && gaugeStatus.actionRef.timer) {
                clearTimeout(gaugeStatus.actionRef.timer);
                gaugeStatus.actionRef = null;
            }
            var eletoanim = __WEBPACK_IMPORTED_MODULE_2__helpers_utils__["b" /* Utils */].searchTreeStartWith(element.node, 'c' + this.prefixB);
            if (eletoanim) {
                var len_1 = 1000;
                if (PipeComponent_1.actionsType[type] === PipeComponent_1.actionsType.clockwise) {
                    var timeout = setInterval(function () {
                        if (len_1 < 0)
                            len_1 = 1000;
                        eletoanim.style.strokeDashoffset = len_1;
                        len_1--;
                    }, 20);
                    gaugeStatus.actionRef = { type: type, timer: timeout };
                }
                else if (PipeComponent_1.actionsType[type] === PipeComponent_1.actionsType.anticlockwise) {
                    var timeout = setInterval(function () {
                        if (len_1 > 1000)
                            len_1 = 0;
                        eletoanim.style.strokeDashoffset = len_1;
                        len_1++;
                    }, 20);
                    gaugeStatus.actionRef = { type: type, timer: timeout };
                }
            }
        }
    };
    PipeComponent.detectChange = function (gab, res, ref) {
        var data = { id: gab.id, property: gab.property.options };
        var result = ref.nativeWindow.svgEditor.runExtension('pipe', 'initPipe', data);
        return result;
    };
    PipeComponent.TypeId = 'pipe';
    PipeComponent.TypeTag = 'svg-ext-' + PipeComponent_1.TypeId; // used to identify shapes type, binded with the library svgeditor
    PipeComponent.LabelTag = 'Pipe';
    PipeComponent.prefixB = 'PIE_';
    PipeComponent.actionsType = {
        stop: 'shapes.action-stop',
        clockwise: 'shapes.action-clockwise',
        anticlockwise: 'shapes.action-anticlockwise',
    };
    PipeComponent = PipeComponent_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])()
    ], PipeComponent);
    return PipeComponent;
    var PipeComponent_1;
}());

var PipeOptions = (function () {
    function PipeOptions() {
    }
    return PipeOptions;
}());



/***/ }),

/***/ "../../../../../src/app/gauges/shapes/ape-shapes/ape-shapes.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/gauges/shapes/ape-shapes/ape-shapes.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  ape-shapes works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/gauges/shapes/ape-shapes/ape-shapes.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApeShapesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__gauge_base_gauge_base_component__ = __webpack_require__("../../../../../src/app/gauges/gauge-base/gauge-base.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__gauge_property_gauge_property_component__ = __webpack_require__("../../../../../src/app/gauges/gauge-property/gauge-property.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__helpers_utils__ = __webpack_require__("../../../../../src/app/_helpers/utils.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ApeShapesComponent = (function (_super) {
    __extends(ApeShapesComponent, _super);
    function ApeShapesComponent() {
        return _super.call(this) || this;
    }
    ApeShapesComponent_1 = ApeShapesComponent;
    ApeShapesComponent.getSignals = function (pro) {
        var res = [];
        if (pro.variableId) {
            res.push(pro.variableId);
        }
        if (pro.alarmId) {
            res.push(pro.alarmId);
        }
        if (pro.actions) {
            pro.actions.forEach(function (act) {
                res.push(act.variableId);
            });
        }
        return res;
    };
    ApeShapesComponent.getActions = function () {
        return this.actionsType;
    };
    ApeShapesComponent.getDialogType = function () {
        return __WEBPACK_IMPORTED_MODULE_2__gauge_property_gauge_property_component__["b" /* GaugeDialogType */].RangeWithAlarm;
    };
    ApeShapesComponent.processValue = function (ga, svgele, sig, gaugeStatus) {
        if (svgele.node) {
            var clr = '';
            var value_1 = parseFloat(sig.value);
            if (Number.isNaN(value_1)) {
                // maybe boolean
                value_1 = Number(sig.value);
            }
            else {
                value_1 = parseFloat(value_1.toFixed(5));
            }
            if (ga.property) {
                if (ga.property.variableId === sig.id && ga.property.ranges) {
                    for (var idx = 0; idx < ga.property.ranges.length; idx++) {
                        if (ga.property.ranges[idx].min <= value_1 && ga.property.ranges[idx].max >= value_1) {
                            clr = ga.property.ranges[idx].color;
                        }
                    }
                    if (clr) {
                        svgele.node.setAttribute('fill', clr);
                    }
                }
                // check actions
                if (ga.property.actions) {
                    ga.property.actions.forEach(function (act) {
                        if (act.variableId === sig.id) {
                            ApeShapesComponent_1.processAction(act, svgele, value_1, gaugeStatus);
                        }
                    });
                }
            }
        }
    };
    ApeShapesComponent.processAction = function (act, svgele, value, gaugeStatus) {
        var element = SVG.adopt(svgele.node);
        if (act.range.min <= value && act.range.max >= value) {
            ApeShapesComponent_1.runAction(element, act.type, gaugeStatus);
        }
    };
    ApeShapesComponent.runAction = function (element, type, gaugeStatus) {
        element.stop(true);
        if (ApeShapesComponent_1.actionsType[type] === ApeShapesComponent_1.actionsType.clockwise) {
            gaugeStatus.actionRef = { type: type, animr: element.animate(3000).rotate(365).loop() };
        }
        else if (ApeShapesComponent_1.actionsType[type] === ApeShapesComponent_1.actionsType.anticlockwise) {
            gaugeStatus.actionRef = { type: type, animr: element.animate(3000).rotate(-365).loop() };
        }
        else if (ApeShapesComponent_1.actionsType[type] === ApeShapesComponent_1.actionsType.downup) {
            if (gaugeStatus.actionRef && gaugeStatus.actionRef.type === type) {
                return;
            }
            var eletoanim = __WEBPACK_IMPORTED_MODULE_3__helpers_utils__["b" /* Utils */].searchTreeStartWith(element.node, 'pm');
            if (eletoanim) {
                element = SVG.adopt(eletoanim);
                var elebox = eletoanim.getBBox();
                var movefrom = { x: elebox.x, y: elebox.y };
                var moveto = { x: elebox.x, y: elebox.y - 25 };
                var timeout = setInterval(function () {
                    element.animate(1000).move(moveto.x, moveto.y).animate(1000).move(movefrom.x, movefrom.y);
                }, 2000);
                gaugeStatus.actionRef = { type: type, timer: timeout };
            }
        }
        else if (ApeShapesComponent_1.actionsType[type] === ApeShapesComponent_1.actionsType.stop) {
            if (gaugeStatus.actionRef && gaugeStatus.actionRef.timer) {
                clearTimeout(gaugeStatus.actionRef.timer);
                gaugeStatus.actionRef = null;
            }
        }
    };
    ApeShapesComponent.firstAnimation = function (element, moveto, movefrom) {
        console.log('a');
        // element.animate(1000).move(moveto.x, moveto.y).animate(1000).move(movefrom.x, movefrom.y).after(function () {
        //     ApeShapesComponent.firstAnimation(element, moveto, movefrom);
        // });
        element.animate({ duration: 1000, delay: 6000, wait: 6000 }).move(moveto.x, moveto.y).after(function () {
            console.log('a');
            // element.animate(1000).move(movefrom.x, movefrom.y);
        }).loop(); //ApeShapesComponent.secondAnimation(element, moveto, movefrom));
    };
    ApeShapesComponent.secondAnimation = function (element, movefrom, moveto) {
        // element.animate(1000).move(moveto.x, moveto.y).after(ApeShapesComponent.firstAnimation(element, moveto, movefrom));
    };
    ApeShapesComponent.TypeId = 'ape';
    ApeShapesComponent.TypeTag = 'svg-ext-' + ApeShapesComponent_1.TypeId; // used to identify shapes type, binded with the library svgeditor
    ApeShapesComponent.LabelTag = 'AnimProcEng';
    ApeShapesComponent.actionsType = {
        stop: 'shapes.action-stop',
        clockwise: 'shapes.action-clockwise',
        anticlockwise: 'shapes.action-anticlockwise',
        downup: 'shapes.action-downup'
    };
    ApeShapesComponent = ApeShapesComponent_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'ape-shapes',
            template: __webpack_require__("../../../../../src/app/gauges/shapes/ape-shapes/ape-shapes.component.html"),
            styles: [__webpack_require__("../../../../../src/app/gauges/shapes/ape-shapes/ape-shapes.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ApeShapesComponent);
    return ApeShapesComponent;
    var ApeShapesComponent_1;
}(__WEBPACK_IMPORTED_MODULE_1__gauge_base_gauge_base_component__["a" /* GaugeBaseComponent */]));



/***/ }),

/***/ "../../../../../src/app/gauges/shapes/proc-eng/proc-eng.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/gauges/shapes/proc-eng/proc-eng.component.html":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "../../../../../src/app/gauges/shapes/proc-eng/proc-eng.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProcEngComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__gauge_base_gauge_base_component__ = __webpack_require__("../../../../../src/app/gauges/gauge-base/gauge-base.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__gauge_property_gauge_property_component__ = __webpack_require__("../../../../../src/app/gauges/gauge-property/gauge-property.component.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProcEngComponent = (function (_super) {
    __extends(ProcEngComponent, _super);
    function ProcEngComponent() {
        return _super.call(this) || this;
    }
    ProcEngComponent_1 = ProcEngComponent;
    ProcEngComponent.prototype.ngOnInit = function () {
    };
    ProcEngComponent.getSignals = function (pro) {
        var res = [];
        if (pro.variableId) {
            res.push(pro.variableId);
        }
        if (pro.alarmId) {
            res.push(pro.alarmId);
        }
        return res;
    };
    ProcEngComponent.getDialogType = function () {
        return __WEBPACK_IMPORTED_MODULE_2__gauge_property_gauge_property_component__["b" /* GaugeDialogType */].RangeWithAlarm;
    };
    ProcEngComponent.processValue = function (ga, svgele, sig, gaugeStatus) {
        if (svgele.node) {
            var clr = '';
            var value = parseFloat(sig.value);
            if (Number.isNaN(value)) {
                // maybe boolean
                value = Number(sig.value);
            }
            else {
                value = parseFloat(value.toFixed(5));
            }
            if (ga.property) {
                if (ga.property.variableId === sig.id && ga.property.ranges) {
                    for (var idx = 0; idx < ga.property.ranges.length; idx++) {
                        if (ga.property.ranges[idx].min <= value && ga.property.ranges[idx].max >= value) {
                            clr = ga.property.ranges[idx].color;
                        }
                    }
                    if (clr) {
                        svgele.node.setAttribute('fill', clr);
                    }
                }
            }
        }
    };
    ProcEngComponent.TypeId = 'proceng';
    ProcEngComponent.TypeTag = 'svg-ext-' + ProcEngComponent_1.TypeId;
    ProcEngComponent.LabelTag = 'Proc-Eng';
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], ProcEngComponent.prototype, "data", void 0);
    ProcEngComponent = ProcEngComponent_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'gauge-proc-eng',
            template: __webpack_require__("../../../../../src/app/gauges/shapes/proc-eng/proc-eng.component.html"),
            styles: [__webpack_require__("../../../../../src/app/gauges/shapes/proc-eng/proc-eng.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProcEngComponent);
    return ProcEngComponent;
    var ProcEngComponent_1;
}(__WEBPACK_IMPORTED_MODULE_1__gauge_base_gauge_base_component__["a" /* GaugeBaseComponent */]));



/***/ }),

/***/ "../../../../../src/app/gauges/shapes/shapes.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/gauges/shapes/shapes.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  shapes works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/gauges/shapes/shapes.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShapesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__gauge_base_gauge_base_component__ = __webpack_require__("../../../../../src/app/gauges/gauge-base/gauge-base.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__gauge_property_gauge_property_component__ = __webpack_require__("../../../../../src/app/gauges/gauge-property/gauge-property.component.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ShapesComponent = (function (_super) {
    __extends(ShapesComponent, _super);
    function ShapesComponent() {
        return _super.call(this) || this;
    }
    ShapesComponent_1 = ShapesComponent;
    ShapesComponent.prototype.ngOnInit = function () {
    };
    ShapesComponent.getSignals = function (pro) {
        var res = [];
        if (pro.variableId) {
            res.push(pro.variableId);
        }
        if (pro.alarmId) {
            res.push(pro.alarmId);
        }
        if (pro.actions && pro.actions.length) {
            pro.actions.forEach(function (act) {
                res.push(act.variableId);
            });
        }
        return res;
    };
    ShapesComponent.getDialogType = function () {
        return __WEBPACK_IMPORTED_MODULE_2__gauge_property_gauge_property_component__["b" /* GaugeDialogType */].RangeWithAlarm;
    };
    ShapesComponent.processValue = function (ga, svgele, sig, gaugeStatus) {
        if (svgele.node) {
            var clr = '';
            var value = parseFloat(sig.value);
            if (Number.isNaN(value)) {
                // maybe boolean
                value = Number(sig.value);
            }
            else {
                value = parseFloat(value.toFixed(5));
            }
            if (ga.property) {
                if (ga.property.variableId === sig.id && ga.property.ranges) {
                    for (var idx = 0; idx < ga.property.ranges.length; idx++) {
                        if (ga.property.ranges[idx].min <= value && ga.property.ranges[idx].max >= value) {
                            clr = ga.property.ranges[idx].color;
                        }
                    }
                    if (clr) {
                        svgele.node.setAttribute('fill', clr);
                    }
                }
            }
        }
    };
    ShapesComponent.TypeId = 'shapes';
    ShapesComponent.TypeTag = 'svg-ext-' + ShapesComponent_1.TypeId; // used to identify shapes type, binded with the library svgeditor
    ShapesComponent.LabelTag = 'Shapes';
    ShapesComponent = ShapesComponent_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'gauge-shapes',
            template: __webpack_require__("../../../../../src/app/gauges/shapes/shapes.component.html"),
            styles: [__webpack_require__("../../../../../src/app/gauges/shapes/shapes.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ShapesComponent);
    return ShapesComponent;
    var ShapesComponent_1;
}(__WEBPACK_IMPORTED_MODULE_1__gauge_base_gauge_base_component__["a" /* GaugeBaseComponent */]));



/***/ }),

/***/ "../../../../../src/app/gauges/switch/switch.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/gauges/switch/switch.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"display: block\">\r\n  <mat-form-field>\r\n    <input matInput [(ngModel)]=\"settings.name\" placeholder=\"Name\" type=\"text\">\r\n  </mat-form-field>\r\n</div>\r\n<div style=\"display: block\">\r\n  <mat-form-field>\r\n    <mat-select placeholder=\"Signal\" [(ngModel)]=\"settings.property.signalid\">\r\n      <mat-option *ngFor=\"let sig of signals\" [value]=\"sig.id\">\r\n        {{ sig.name }}\r\n      </mat-option>\r\n    </mat-select>\r\n  </mat-form-field>\r\n</div>\r\n<div style=\"display: block\">\r\n  <mat-form-field>\r\n    <input matInput [(ngModel)]=\"settings.property.onmin\" placeholder=\"On Min\" type=\"text\">\r\n  </mat-form-field>\r\n</div>\r\n<div style=\"display: block\">\r\n  <mat-form-field>\r\n    <input matInput [(ngModel)]=\"settings.property.onmax\" placeholder=\"On Max\" type=\"text\">\r\n  </mat-form-field>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/gauges/switch/switch.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SwitchComponent; });
/* unused harmony export SwitchProperty */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__gauge_base_gauge_base_component__ = __webpack_require__("../../../../../src/app/gauges/gauge-base/gauge-base.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_hmi__ = __webpack_require__("../../../../../src/app/_models/hmi.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__gauge_property_gauge_property_component__ = __webpack_require__("../../../../../src/app/gauges/gauge-property/gauge-property.component.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SwitchComponent = (function (_super) {
    __extends(SwitchComponent, _super);
    function SwitchComponent() {
        return _super.call(this) || this;
    }
    SwitchComponent.prototype.ngOnInit = function () {
        if (!this.settings.property) {
            this.settings.property = new SwitchProperty();
        }
        // let property = JSON.stringify(this.settings.property);
        // this.settings.id = '';
    };
    SwitchComponent.prototype.ngAfterViewInit = function () {
    };
    SwitchComponent.getSignals = function (pro) {
        var res = [];
        if (pro.signalid) {
            res.push(pro.signalid);
        }
        return res;
    };
    SwitchComponent.getDialogType = function () {
        return __WEBPACK_IMPORTED_MODULE_3__gauge_property_gauge_property_component__["b" /* GaugeDialogType */].OnlyValue;
    };
    SwitchComponent.processValue = function (ga, svgele, sig, gaugeStatus) {
        if (svgele.node && svgele.node.children) {
            var toanimate = void 0;
            for (var i = 0; i < svgele.node.children.length; i++) {
                var node = svgele.node.children[i];
                if (node.id.indexOf('X') >= 0) {
                    toanimate = node.id.substring(node.id.indexOf('X'));
                }
            }
            if (toanimate) {
                var svggsuge = svgele.select('#' + toanimate);
                var path = document.getElementById(toanimate);
                //var pos = path.getBoundingClientRect();
                var pathString = path.getAttribute('d');
                var dims = Raphael.pathBBox(pathString);
                // yourTriangle.animate({transform: "r60" + "," + centerX + "," + centerY}, 2000);
                var rotation = 34;
                if (parseInt(sig.value, 10) === 0) {
                    rotation = 0;
                }
                svggsuge.animate(500).rotate(rotation, dims.x2, dims.y2);
            }
        }
    };
    SwitchComponent.TypeTag = 'svg-ext-switch';
    SwitchComponent.LabelTag = 'Switch';
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__models_hmi__["i" /* GaugeSettings */])
    ], SwitchComponent.prototype, "settings", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], SwitchComponent.prototype, "signals", void 0);
    SwitchComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'gauge-switch',
            template: __webpack_require__("../../../../../src/app/gauges/switch/switch.component.html"),
            styles: [__webpack_require__("../../../../../src/app/gauges/switch/switch.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SwitchComponent);
    return SwitchComponent;
}(__WEBPACK_IMPORTED_MODULE_1__gauge_base_gauge_base_component__["a" /* GaugeBaseComponent */]));

var SwitchProperty = (function () {
    function SwitchProperty() {
        this.signalid = '';
        this.onmin = 1;
        this.onmax = 1;
    }
    return SwitchProperty;
}());



/***/ }),

/***/ "../../../../../src/app/gui-helpers/confirm-dialog/confirm-dialog.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/gui-helpers/confirm-dialog/confirm-dialog.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"width: 100%;position: relative;padding-bottom: 40px\">\r\n    <div style=\"margin-top: 20px;margin-bottom: 20px;\">\r\n        {{msgtoconfirm}}\r\n    </div>\r\n\r\n    <div mat-dialog-actions style=\"display: inline-block; position: absolute; bottom: 10px; right: 10px\">\r\n        <button mat-raised-button (click)=\"onNoClick()\">{{'dlg.cancel' | translate}}</button>\r\n        <button mat-raised-button color=\"primary\" (click)=\"onOkClick()\" [mat-dialog-close]=\"data\" cdkFocusInitial>{{'dlg.ok' | translate}}</button>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/gui-helpers/confirm-dialog/confirm-dialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfirmDialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var ConfirmDialogComponent = (function () {
    function ConfirmDialogComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.msgtoconfirm = '';
        this.msgtoconfirm = this.data.msg;
    }
    ConfirmDialogComponent.prototype.ngOnInit = function () {
    };
    ConfirmDialogComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    ConfirmDialogComponent.prototype.onOkClick = function () {
        this.dialogRef.close(true);
    };
    ConfirmDialogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-confirm-dialog',
            template: __webpack_require__("../../../../../src/app/gui-helpers/confirm-dialog/confirm-dialog.component.html"),
            styles: [__webpack_require__("../../../../../src/app/gui-helpers/confirm-dialog/confirm-dialog.component.css")]
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["m" /* MatDialogRef */], Object])
    ], ConfirmDialogComponent);
    return ConfirmDialogComponent;
}());



/***/ }),

/***/ "../../../../../src/app/gui-helpers/fab-button/ngx-fab-button.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgxFabButtonComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_fab_item_button_component__ = __webpack_require__("../../../../../src/app/gui-helpers/fab-button/ngx-fab-item-button.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NgxFabButtonComponent = (function () {
    function NgxFabButtonComponent(element, cd) {
        this.element = element;
        this.cd = cd;
        this.subs = [];
        this.spaceBetweenButtons = 45;
        this.color = '#dd0031';
        this.disabled = false;
        this.events = new __WEBPACK_IMPORTED_MODULE_0_rxjs__["Subject"]();
        this.opened = false;
        this.elementref = element.nativeElement;
        this.state = new __WEBPACK_IMPORTED_MODULE_0_rxjs__["BehaviorSubject"]({
            display: false,
            direction: 'top',
            event: 'start',
            spaceBetweenButtons: this.spaceBetweenButtons
        });
    }
    NgxFabButtonComponent.prototype.toggle = function () {
        if (this.disabled) {
            return this.disabled;
        }
        this.state.next(__assign({}, this.state.getValue(), { display: !this.state.getValue().display, event: !this.state.getValue().display ? 'open' : 'close' }));
        this.opened = this.state.getValue().display;
    };
    // only top and bottom support content element
    NgxFabButtonComponent.prototype.checkDirectionType = function () {
        if (this.buttons.toArray()) {
            var display_1 = 'block';
            if (this.direction === 'right' || this.direction === 'left') {
                display_1 = 'none';
            }
            this.buttons.toArray().forEach(function (element) {
                element.contentref.nativeElement.style.display = display_1;
            });
        }
    };
    // transition
    NgxFabButtonComponent.prototype.animateButtons = function (eventType) {
        var _this = this;
        this.buttons.toArray().forEach(function (btn, i) {
            i += 1;
            var style = btn.elementref.nativeElement.style;
            if (eventType !== 'directionChanged' && _this.state.getValue().display) {
                style['transform'] = 'scale(1)';
                style['transition-duration'] = '0s';
                if (btn.timeout) {
                    clearTimeout(btn.timeout);
                }
            }
            setTimeout(function () {
                style['transition-duration'] = _this.state.getValue().display ? 90 + (100 * i) + "ms" : '';
                style['transform'] = _this.state.getValue().display ? _this.getTranslate(i) : '';
            }, 50);
            if (eventType !== 'directionChanged' && !_this.state.getValue().display) {
                btn.timeout = setTimeout(function () {
                    style['transform'] = 'scale(0)';
                }, 90 + (100 * i));
            }
        });
    };
    // get transition direction
    NgxFabButtonComponent.prototype.getTranslate = function (i) {
        var animation;
        switch (this.direction) {
            case 'right':
                animation = "translate3d(" + this.state.getValue().spaceBetweenButtons * i + "px,0,0)";
                break;
            case 'bottom':
                animation = "translate3d(0," + this.state.getValue().spaceBetweenButtons * i + "px,0)";
                break;
            case 'left':
                animation = "translate3d(-" + this.state.getValue().spaceBetweenButtons * i + "px,0,0)";
                break;
            default:
                animation = "translate3d(0,-" + this.state.getValue().spaceBetweenButtons * i + "px,0)";
                break;
        }
        return animation;
    };
    /* some problems here */
    // @HostListener('document:click', ['$event.target']) private clickOutside(target) {
    //   if (this.state.getValue().display && !this.elementref.contains(target)) {
    //     this.state.next({
    //       ...this.state.getValue(),
    //       display: false,
    //       event: 'close'
    //     });
    //   }
    // }
    NgxFabButtonComponent.prototype.ngAfterContentInit = function () {
        var _this = this;
        if (this.direction) {
            // first time to check
            this.checkDirectionType();
        }
        this.buttons.toArray().map(function (v) {
            var sub = v.clicked.subscribe(function () {
                // this.state.next({
                //   ...this.state.getValue(),
                //   display: false,
                //   event: 'close'
                // });
            });
            _this.subs.push(sub);
        });
        var sub = this.state.subscribe(function (v) {
            _this.animateButtons(v.event);
            _this.events.next({
                display: v.display,
                event: v.event,
                direction: v.direction
            });
        });
        this.subs.push(sub);
    };
    // if @Input values changes, we need check the direction type
    NgxFabButtonComponent.prototype.ngOnChanges = function (changes) {
        var _this = this;
        if (changes.direction && !changes.direction.firstChange) {
            this.state.next(__assign({}, this.state.getValue(), { event: 'directionChanged', direction: changes.direction.currentValue }));
            // if changes happens
            this.checkDirectionType();
        }
        if (changes.open && changes.open.currentValue) {
            var sub = this.open.subscribe(function (v) {
                if (v !== _this.state.getValue().display) {
                    _this.state.next(__assign({}, _this.state.getValue(), { event: v ? 'open' : 'close', display: v }));
                    // make angular happy
                    _this.cd.markForCheck();
                }
            });
            this.subs.push(sub);
        }
        if (changes.spaceBetweenButtons && changes.spaceBetweenButtons.currentValue) {
            this.state.next(__assign({}, this.state.getValue(), { event: 'spaceBetweenButtonsChanged', spaceBetweenButtons: changes.spaceBetweenButtons.currentValue }));
        }
    };
    NgxFabButtonComponent.prototype.ngOnDestroy = function () {
        this.subs.forEach(function (v) {
            v.unsubscribe();
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["F" /* Input */])(),
        __metadata("design:type", String)
    ], NgxFabButtonComponent.prototype, "icon", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["F" /* Input */])(),
        __metadata("design:type", String)
    ], NgxFabButtonComponent.prototype, "iconOpen", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["F" /* Input */])(),
        __metadata("design:type", String)
    ], NgxFabButtonComponent.prototype, "direction", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], NgxFabButtonComponent.prototype, "spaceBetweenButtons", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["F" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0_rxjs__["Subject"])
    ], NgxFabButtonComponent.prototype, "open", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], NgxFabButtonComponent.prototype, "color", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], NgxFabButtonComponent.prototype, "disabled", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["R" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0_rxjs__["Subject"])
    ], NgxFabButtonComponent.prototype, "events", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["R" /* Output */])(),
        __metadata("design:type", Object)
    ], NgxFabButtonComponent.prototype, "opened", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["s" /* ContentChildren */])(__WEBPACK_IMPORTED_MODULE_1__ngx_fab_item_button_component__["a" /* NgxFabItemButtonComponent */]),
        __metadata("design:type", Object)
    ], NgxFabButtonComponent.prototype, "buttons", void 0);
    NgxFabButtonComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["n" /* Component */])({
            changeDetection: __WEBPACK_IMPORTED_MODULE_2__angular_core__["j" /* ChangeDetectionStrategy */].OnPush,
            selector: 'ngx-fab-button',
            styles: ["\n  :host {\n    position: absolute;\n  }\n  .fab-menu {\n      box-sizing: border-box;\n      font-size: 12px;\n      width:40px;\n      height: 40px;\n      text-align: left;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      cursor: pointer;\n      z-index: 9;\n  }\n  .fab-toggle {\n    border-radius: 100%;\n    width: 36px;\n    height: 36px;\n    color: white;\n    text-align: center;\n    line-height: 50px;\n    transform: translate3d(0, 0, 0);\n    transition: all ease-out 200ms;\n    z-index: 2;\n    transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);\n    transition-duration: 400ms;\n    transform: scale(1, 1) translate3d(0, 0, 0);\n    cursor: pointer;\n    box-shadow: 0 2px 5px 0 rgba(0,0,0,.26);\n  }\n  .fab-menu .fab-toggle:hover {\n    transform: scale(1.2, 1.2) translate3d(0, 0, 0);\n  }\n  .fab-menu /deep/ .item {\n     opacity: 0;\n  }\n  .fab-menu.active /deep/ .item {\n     opacity: 1;\n  }\n  .fab-menu.active /deep/ .content-wrapper {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n  .fab-menu.active /deep/ .content {\n    display: block;\n  }\n  .fab-menu.active .fab-toggle {\n    transition-timing-function: linear;\n    transition-duration: 200ms;\n    transform: scale(1, 1) translate3d(0, 0, 0);\n  }\n  "],
            template: "\n    <div class=\"fab-menu\" [class.active]=\"(state | async).display\">\n        <a class=\"fab-toggle\" (click)=\"toggle()\" (touchend)=\"toggle()\" [style.backgroundColor]=\"color\">\n          <i class=\"material-icons\" *ngIf=\"!opened\"> {{icon}} </i>\n          <i class=\"material-icons\" *ngIf=\"opened\"> {{iconOpen}} </i>\n        </a>\n        <ng-content></ng-content>\n    </div>\n  "
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_core__["u" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_2__angular_core__["k" /* ChangeDetectorRef */]])
    ], NgxFabButtonComponent);
    return NgxFabButtonComponent;
}());



/***/ }),

/***/ "../../../../../src/app/gui-helpers/fab-button/ngx-fab-item-button.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgxFabItemButtonComponent; });
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

var NgxFabItemButtonComponent = (function () {
    function NgxFabItemButtonComponent() {
        this.color = 'white';
        this.clicked = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.exclicked = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.disabled = false;
    }
    NgxFabItemButtonComponent.prototype.emitClickEvent = function ($event) {
        if (this.disabled) {
            return this.disabled;
        }
        this.clicked.emit($event);
    };
    NgxFabItemButtonComponent.prototype.emitClickExEvent = function ($event) {
        if (this.disabled) {
            return this.disabled;
        }
        this.exclicked.emit($event);
    };
    NgxFabItemButtonComponent.prototype.stopPropagation = function ($event) {
        $event.stopPropagation();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", String)
    ], NgxFabItemButtonComponent.prototype, "icon", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", String)
    ], NgxFabItemButtonComponent.prototype, "svgicon", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", String)
    ], NgxFabItemButtonComponent.prototype, "iconex", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", String)
    ], NgxFabItemButtonComponent.prototype, "svgiconex", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", String)
    ], NgxFabItemButtonComponent.prototype, "content", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], NgxFabItemButtonComponent.prototype, "color", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */])
    ], NgxFabItemButtonComponent.prototype, "clicked", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */])
    ], NgxFabItemButtonComponent.prototype, "exclicked", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], NgxFabItemButtonComponent.prototype, "disabled", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewChild */])('elementref'),
        __metadata("design:type", Object)
    ], NgxFabItemButtonComponent.prototype, "elementref", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewChild */])('contentref'),
        __metadata("design:type", Object)
    ], NgxFabItemButtonComponent.prototype, "contentref", void 0);
    NgxFabItemButtonComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'ngx-fab-item-button',
            styles: ["\n  .item {\n    /* width:40px; */\n    height: 36px;\n    left: 3px;\n    /* left: -3px; */\n    transform: translate3d(0, 0, 0);\n    transition: transform, opacity ease-out 200ms;\n    transition-timing-function: cubic-bezier(0.165, 0.84, 0.44, 1);\n    transition-duration: 180ms;\n    position: absolute;\n    cursor: pointer;\n    top:5px;\n    display: flex;\n    justify-content: flex-end;\n    align-items: center;\n    z-index: 9999;\n  }\n  .item.disabled {\n    pointer-events: none;\n  }\n  .item.disabled .fab-item {\n    background-color: lightgray;\n  }\n  .content {\n    z-index: 9999;\n    background: rgba(68,138,255, 1);\n    margin-left: 0px;\n    line-height: 25px;\n    color: white;\n    /* text-transform: lowercase; */\n    padding: 5px 20px 3px 20px;\n    border-top-right-radius: 18px;\n    border-bottom-right-radius: 18px;\n    border-bottom-left-radius: 18px;\n    border-top-left-radius: 18px;\n    display: none;\n    font-size: 13px;\n    height: 28px;\n    /* margin-top: 4px; */\n    box-shadow: 0 2px 5px 0 rgba(0,0,0,.26);\n    white-space:nowrap;\n  }\n  .fab-item {\n    left: 0;\n    background: rgba(68,138,255, 1);\n    border-radius: 100%;\n    width: 36px;\n    height: 36px;\n    position: absolute;\n    color: white;\n    text-align: center;\n    cursor: pointer;\n    line-height: 50px;\n    /* box-shadow: 0 2px 5px 0 rgba(0,0,0,.26); */\n  }\n  .fab-item-ex {\n    top: 0;\n    background: rgba(68,138,255, 1);\n    border-radius: 100%;\n    width: 36px;\n    height: 36px;\n    position: absolute;\n    color: white;\n    text-align: center;\n    cursor: pointer;\n    line-height: 45px;\n    /* box-shadow: 0 2px 5px 0 rgba(0,0,0,.26); */\n  }\n  .fab-item img {\n    padding-bottom: 2px;\n    padding-left: 5px;\n  }\n  "],
            template: "\n    <div #elementref class=\"item {{ disabled ? 'disabled' : ''}}\"\n    (click)=\"emitClickEvent($event)\">\n        <a class=\"fab-item\" [style.backgroundColor]=\"color\">\n          <img *ngIf=\"svgicon\" src=\"{{svgicon}}\"/>\n          <i class=\"material-icons\" *ngIf=\"!svgicon\"> {{ icon }} </i>\n        </a>\n        <div class=\"content-wrapper\" #contentref>\n          <div class=\"content\" [style.display]=\"content ? 'block' : 'none'\" [style.padding-right]=\"iconex ? '28px' : '20px'\">{{content}}\n            <a class=\"fab-item-ex\" [style.backgroundColor]=\"color\" *ngIf=\"iconex\" (click)=\"stopPropagation($event);emitClickExEvent($event)\">\n                <i class=\"material-icons\" style=\"font-size: 18px\"> {{ iconex }} </i>\n            </a>\n          </div>\n        </div>\n    </div>\n  ",
            changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ChangeDetectionStrategy */].OnPush
        })
    ], NgxFabItemButtonComponent);
    return NgxFabItemButtonComponent;
}());



/***/ }),

/***/ "../../../../../src/app/gui-helpers/mat-select-search/mat-select-search.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<input matInput class=\"mat-select-search-input mat-select-search-hidden\"/>\r\n\r\n<div class=\"mat-select-search-inner\"\r\n     [ngClass]=\"{'mat-select-search-inner-multiple': matSelect.multiple}\">\r\n  <input matInput\r\n         class=\"mat-select-search-input\"\r\n         #searchSelectInput\r\n         (keydown)=\"_handleKeydown($event)\"\r\n         (input)=\"onInputChange($event.target.value)\"\r\n         (blur)=\"onBlur($event.target.value)\"\r\n         [placeholder]=\"placeholderLabel\"\r\n  />\r\n  <button mat-button *ngIf=\"value\"\r\n          mat-icon-button\r\n          aria-label=\"Clear\"\r\n          (click)=\"_reset(true)\"\r\n          class=\"mat-select-search-clear\">\r\n    <mat-icon>close</mat-icon>\r\n  </button>\r\n</div>\r\n\r\n<div *ngIf=\"noEntriesFoundLabel && value && _options?.length === 0\"\r\n     class=\"mat-select-search-no-entries-found\">\r\n  {{noEntriesFoundLabel}}\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/gui-helpers/mat-select-search/mat-select-search.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".mat-select-search-hidden {\n  visibility: hidden; }\n\n.mat-select-search-inner {\n  position: absolute;\n  top: 0;\n  width: calc(100% + 22px);\n  border-bottom: 1px solid #cccccc;\n  background: white;\n  z-index: 100; }\n  .mat-select-search-inner.mat-select-search-inner-multiple {\n    width: calc(100% + 55px); }\n\n::ng-deep .mat-select-search-panel {\n  /* allow absolute positioning relative to outer options container */\n  transform: none !important;\n  max-height: 350px; }\n\n.mat-select-search-input {\n  padding: 16px;\n  padding-right: 36px;\n  box-sizing: border-box;\n  font-size: 15px;\n  border: none; }\n\n.mat-select-search-no-entries-found {\n  padding: 16px; }\n\n.mat-select-search-clear {\n  position: absolute;\n  right: 0;\n  top: 4px; }\n\n::ng-deep .cdk-overlay-pane-select-search {\n  /* correct offsetY so that the selected option is at the position of the select box when opening */\n  margin-top: 40px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/gui-helpers/mat-select-search/mat-select-search.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MatSelectSearchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operators__ = __webpack_require__("../../../../rxjs/_esm5/operators.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__ = __webpack_require__("../../../../@ngx-translate/core/@ngx-translate/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};






/* tslint:disable:member-ordering */
/**
 * Component providing an input field for searching MatSelect options.
 *
 * Example usage:
 *
 * interface Bank {
 *  id: string;
 *  name: string;
 * }
 *
 * @Component({
 *   selector: 'my-app-data-selection',
 *   template: `
 *     <mat-form-field>
 *       <mat-select [formControl]="bankCtrl" placeholder="Bank">
 *         <mat-select-search [formControl]="bankFilterCtrl"></mat-select-search>
 *         <mat-option *ngFor="let bank of filteredBanks | async" [value]="bank.id">
 *           {{bank.name}}
 *         </mat-option>
 *       </mat-select>
 *     </mat-form-field>
 *   `
 * })
 * export class DataSelectionComponent implements OnInit, OnDestroy {
 *
 *   // control for the selected bank
 *   public bankCtrl: FormControl = new FormControl();
 *   // control for the MatSelect filter keyword
 *   public bankFilterCtrl: FormControl = new FormControl();
 *
 *   // list of banks
 *   private banks: Bank[] = [{name: 'Bank A', id: 'A'}, {name: 'Bank B', id: 'B'}, {name: 'Bank C', id: 'C'}];
 *   // list of banks filtered by search keyword
 *   public filteredBanks: ReplaySubject<Bank[]> = new ReplaySubject<Bank[]>(1);
 *
 *   // Subject that emits when the component has been destroyed.
 *   private _onDestroy = new Subject<void>();
 *
 *
 *   ngOnInit() {
 *     // load the initial bank list
 *     this.filteredBanks.next(this.banks.slice());
 *     // listen for search field value changes
 *     this.bankFilterCtrl.valueChanges
 *       .pipe(takeUntil(this._onDestroy))
 *       .subscribe(() => {
 *         this.filterBanks();
 *       });
 *   }
 *
 *   ngOnDestroy() {
 *     this._onDestroy.next();
 *     this._onDestroy.complete();
 *   }
 *
 *   private filterBanks() {
 *     if (!this.banks) {
 *       return;
 *     }
 *
 *     // get the search keyword
 *     let search = this.bankFilterCtrl.value;
 *     if (!search) {
 *       this.filteredBanks.next(this.banks.slice());
 *       return;
 *     } else {
 *       search = search.toLowerCase();
 *     }
 *
 *     // filter the banks
 *     this.filteredBanks.next(
 *       this.banks.filter(bank => bank.name.toLowerCase().indexOf(search) > -1)
 *     );
 *   }
 * }
 */
var MatSelectSearchComponent = (function () {
    function MatSelectSearchComponent(matSelect, translateService, changeDetectorRef) {
        this.matSelect = matSelect;
        this.translateService = translateService;
        this.changeDetectorRef = changeDetectorRef;
        /** Label of the search placeholder */
        this.placeholderLabel = '';
        /** Label to be shown when no entries are found. Set to null if no message should be shown. */
        this.noEntriesFoundLabel = '';
        this.onChange = function (_) { };
        this.onTouched = function (_) { };
        /** Whether the backdrop class has been set */
        this.overlayClassSet = false;
        /** Event that emits when the current value changes */
        this.change = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        /** Subject that emits when the component has been destroyed. */
        this._onDestroy = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["b" /* Subject */]();
    }
    MatSelectSearchComponent_1 = MatSelectSearchComponent;
    Object.defineProperty(MatSelectSearchComponent.prototype, "value", {
        /** Current search value */
        get: function () {
            return this._value;
        },
        enumerable: true,
        configurable: true
    });
    MatSelectSearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        // set custom panel class
        var panelClass = 'mat-select-search-panel';
        if (this.matSelect.panelClass) {
            if (Array.isArray(this.matSelect.panelClass)) {
                this.matSelect.panelClass.push(panelClass);
            }
            else if (typeof this.matSelect.panelClass === 'string') {
                this.matSelect.panelClass = [this.matSelect.panelClass, panelClass];
            }
            else if (typeof this.matSelect.panelClass === 'object') {
                this.matSelect.panelClass[panelClass] = true;
            }
        }
        else {
            this.matSelect.panelClass = panelClass;
        }
        // when the select dropdown panel is opened or closed
        this.matSelect.openedChange
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["takeUntil"])(this._onDestroy))
            .subscribe(function (opened) {
            if (opened) {
                // focus the search field when opening
                _this._focus();
            }
            else {
                // clear it when closing
                _this._reset();
            }
        });
        // set the first item active after the options changed
        this.matSelect.openedChange
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["take"])(1))
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["takeUntil"])(this._onDestroy))
            .subscribe(function () {
            _this._options = _this.matSelect.options;
            _this._options.changes
                .pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["takeUntil"])(_this._onDestroy))
                .subscribe(function () {
                var keyManager = _this.matSelect._keyManager;
                if (keyManager && _this.matSelect.panelOpen) {
                    // avoid "expression has been changed" error
                    setTimeout(function () {
                        keyManager.setFirstItemActive();
                    });
                }
            });
        });
        // detect changes when the input changes
        this.change
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["takeUntil"])(this._onDestroy))
            .subscribe(function () {
            _this.changeDetectorRef.detectChanges();
        });
        this.initMultipleHandling();
    };
    MatSelectSearchComponent.prototype.ngOnDestroy = function () {
        this._onDestroy.next();
        this._onDestroy.complete();
    };
    MatSelectSearchComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.setOverlayClass();
        this.translateService.get('general.search').subscribe(function (txt) { _this.placeholderLabel = txt; });
        this.translateService.get('general.search-notfound').subscribe(function (txt) { _this.noEntriesFoundLabel = txt; });
    };
    /**
     * Handles the key down event with MatSelect.
     * Allows e.g. selecting with enter key, navigation with arrow keys, etc.
     * @param {KeyboardEvent} event
     * @private
     */
    MatSelectSearchComponent.prototype._handleKeydown = function (event) {
        if (event.keyCode === 32) {
            // do not propagate spaces to MatSelect, as this would select the currently active option
            event.stopPropagation();
        }
    };
    MatSelectSearchComponent.prototype.writeValue = function (value) {
        var valueChanged = value !== this._value;
        if (valueChanged) {
            this._value = value;
            this.change.emit(value);
        }
    };
    MatSelectSearchComponent.prototype.onInputChange = function (value) {
        var valueChanged = value !== this._value;
        if (valueChanged) {
            this._value = value;
            this.onChange(value);
            this.change.emit(value);
        }
    };
    MatSelectSearchComponent.prototype.onBlur = function (value) {
        this.writeValue(value);
        this.onTouched();
    };
    MatSelectSearchComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    MatSelectSearchComponent.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    /**
     * Focuses the search input field
     * @private
     */
    MatSelectSearchComponent.prototype._focus = function () {
        if (!this.searchSelectInput) {
            return;
        }
        // save and restore scrollTop of panel, since it will be reset by focus()
        // note: this is hacky
        var panel = this.matSelect.panel.nativeElement;
        var scrollTop = panel.scrollTop;
        // focus
        this.searchSelectInput.nativeElement.focus();
        panel.scrollTop = scrollTop;
    };
    /**
     * Resets the current search value
     * @param {boolean} focus whether to focus after resetting
     * @private
     */
    MatSelectSearchComponent.prototype._reset = function (focus) {
        if (!this.searchSelectInput) {
            return;
        }
        this.searchSelectInput.nativeElement.value = '';
        this.onInputChange('');
        if (focus) {
            this._focus();
        }
    };
    /**
     * Sets the overlay class  to correct offsetY
     * so that the selected option is at the position of the select box when opening
     */
    MatSelectSearchComponent.prototype.setOverlayClass = function () {
        var _this = this;
        if (this.overlayClassSet) {
            return;
        }
        var overlayClass = 'cdk-overlay-pane-select-search';
        this.matSelect.overlayDir.attach
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["takeUntil"])(this._onDestroy))
            .subscribe(function () {
            // note: this is hacky, but currently there is no better way to do this
            _this.searchSelectInput.nativeElement.parentElement.parentElement
                .parentElement.parentElement.parentElement.classList.add(overlayClass);
        });
        this.overlayClassSet = true;
    };
    /**
     * Initializes handling <mat-select [multiple]="true">
     * Note: to improve this code, mat-select should be extended to allow disabling resetting the selection while filtering.
     */
    MatSelectSearchComponent.prototype.initMultipleHandling = function () {
        var _this = this;
        // if <mat-select [multiple]="true">
        // store previously selected values and restore them when they are deselected
        // because the option is not available while we are currently filtering
        this.matSelect.valueChange
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["takeUntil"])(this._onDestroy))
            .subscribe(function (values) {
            if (_this.matSelect.multiple) {
                var restoreSelectedValues_1 = false;
                if (_this._value && _this._value.length
                    && _this.previousSelectedValues && Array.isArray(_this.previousSelectedValues)) {
                    if (!values || !Array.isArray(values)) {
                        values = [];
                    }
                    var optionValues_1 = _this.matSelect.options.map(function (option) { return option.value; });
                    _this.previousSelectedValues.forEach(function (previousValue) {
                        if (values.indexOf(previousValue) === -1 && optionValues_1.indexOf(previousValue) === -1) {
                            // if a value that was selected before is deselected and not found in the options, it was deselected
                            // due to the filtering, so we restore it.
                            values.push(previousValue);
                            restoreSelectedValues_1 = true;
                        }
                    });
                }
                if (restoreSelectedValues_1) {
                    _this.matSelect._onChange(values);
                }
                _this.previousSelectedValues = values;
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], MatSelectSearchComponent.prototype, "placeholderLabel", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], MatSelectSearchComponent.prototype, "noEntriesFoundLabel", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewChild */])('searchSelectInput', { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */] }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
    ], MatSelectSearchComponent.prototype, "searchSelectInput", void 0);
    MatSelectSearchComponent = MatSelectSearchComponent_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'mat-select-search',
            template: __webpack_require__("../../../../../src/app/gui-helpers/mat-select-search/mat-select-search.component.html"),
            styles: [__webpack_require__("../../../../../src/app/gui-helpers/mat-select-search/mat-select-search.component.scss")],
            providers: [
                {
                    provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* NG_VALUE_ACCESSOR */],
                    useExisting: Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_19" /* forwardRef */])(function () { return MatSelectSearchComponent_1; }),
                    multi: true
                }
            ],
            changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ChangeDetectionStrategy */].OnPush
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_2__angular_material__["C" /* MatSelect */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_material__["C" /* MatSelect */],
            __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* ChangeDetectorRef */]])
    ], MatSelectSearchComponent);
    return MatSelectSearchComponent;
    var MatSelectSearchComponent_1;
}());



/***/ }),

/***/ "../../../../../src/app/gui-helpers/mat-select-search/mat-select-search.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MatSelectSearchModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mat_select_search_component__ = __webpack_require__("../../../../../src/app/gui-helpers/mat-select-search/mat-select-search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var MatSelectSearchModule = (function () {
    function MatSelectSearchModule() {
    }
    MatSelectSearchModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["d" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["q" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["s" /* MatInputModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_1__mat_select_search_component__["a" /* MatSelectSearchComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["d" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["s" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_1__mat_select_search_component__["a" /* MatSelectSearchComponent */]
            ]
        })
    ], MatSelectSearchModule);
    return MatSelectSearchModule;
}());



/***/ }),

/***/ "../../../../../src/app/gui-helpers/ngx-dygraphs/ngx-dygraphs.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".mychart-panel {\n    display: block;\n    margin: 0 auto;\n    /*height: 600px;\n    width: 1000px;*/\n}\n\n.mychart-edit #bord {\n  display: block;\n  position: absolute;\n  top: 10px;\n  bottom: 30px;\n  left: 30px;\n  right: 30px;\n  border-left: 1px solid #000;\n  border-bottom: 1px solid #000;\n}\n.mychart-edit #grido {\n  position: absolute;\n  top: 30%;\n  bottom: 40%;\n  left: 30px;\n  right: 30px;\n  border-top: 1px solid rgba(0, 0, 0, 0.05);\n  border-bottom: 1px solid rgba(0, 0, 0, 0.05);\n}\n.mychart-edit #gridv {\n  position: absolute;\n  top: 10px;\n  bottom: 30px;\n  left: 30%;\n  right: 30%;\n  border-left: 1px solid rgba(0, 0, 0, 0.05);\n  border-right: 1px solid rgba(0, 0, 0, 0.05);\n}\n.mychart-edit #a {\n  position: absolute;\n  left: 15px;\n  bottom: 10px;\n}\n.mychart-edit #b {\n  position: absolute;\n  left: 5px;\n  bottom: 50%;\n}\n.mychart-edit #c {\n  position: absolute;\n  left: 5px;\n  top: 10px;\n}\n.mychart-edit #x1 {\n  position: absolute;\n  left: 45%;\n  bottom: 10px;\n}\n.mychart-edit #x2 {\n  position: absolute;\n  right: 30px;\n  bottom: 10px;\n}\n\n.mychart-edit {\n  display: block;\n  position: absolute;\n  top: 34px;\n  bottom: 0px;\n  left: 20px;\n  right: 20px;\n  /* height: calc(100% - 40px) !important; */\n  /* height: 550px; */\n  /* width: 100% !important; */\n  /* background-color: black; */\n}\n\n.mychart-graph {\n    display: block;\n    margin: 0 auto;\n    /*height: 600px;*/\n    height: 100% !important;\n    width: 100% !important;\n}\n\n.mychar-toolbar {\n  display: block;\n  height: 34px !important;\n  width: 100% !important;\n  background-color:transparent;\n}\n\n.mychar-toolbar-button {\n  /* width: 30px; */\n  height: 26px;\n  cursor: pointer;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  border: 0;\n  background-color: #fff;\n  border-radius: 2px;\n\n}\n.mychar-toolbar-space {\n  /* min-width: calc(100% - 250px); */\n  /* width: calc(100% - 250px); */\n  width:100%;\n  height: 26px;\n  background-color: rgba(0, 0, 0, 0.1);\n  line-height: 26px;\n}\n\n.mychart-toolbar-select {\n  width:160px;\n  padding: 4px 3px 5px 4px;\n  background-color: #fff;\n  position: relative;\n  top: -5px;\n}\n\n.toolbar-cmp {\n  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.1), 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 1px -2px rgba(0, 0, 0, 0.2);\n  transition: box-shadow 0.28s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.toolbar-cmp:active {\n  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.01), 0 1px 3px 0 rgba(0, 0, 0, 0.01), 0 1px 1px -2px rgba(0, 0, 0, 0.02);\n  /* background-color: rgba(0, 0, 0, 0.01); */\n}\n\n.ng-dygraphs {\n  position: relative; }\n  .ng-dygraphs .name-nodes-holder {\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-direction: row;\n        flex-direction: row;\n    padding-right: 30px;\n    padding-left: 30px; }\n  .ng-dygraphs .ng-dygraphs-chart-container {\n    background-color: #fff;\n    padding: 0;\n    margin: 0px;}\n    .ng-dygraphs .ng-dygraphs-chart-container .nodata {\n      display: -ms-flexbox;\n      display: flex;\n      -ms-flex-pack: center;\n    justify-content: center;\n     -ms-flex-align: center;\n        align-items: center;\n      color: #5c5c5c;\n      font-weight: bold;\n      font-size: 24px; \n      display: flex;\n      -ms-flex-line-pack: center;\n          align-content: center; }\n    .ng-dygraphs .ng-dygraphs-chart-container .hide {\n       display: none; }\n  .ng-dygraphs .loader-holder {\n    position: absolute;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-align: center;\n        align-items: center;\n    width: 100%;\n    height: 100%;\n    background-color: #fff;\n    z-index: 55;\n    opacity: 0.9; }\n  .ng-dygraphs .loader {\n    color: #0dc5c1;\n    font-size: 20px;\n    margin: 100px auto;\n    width: 1em;\n    height: 1em;\n    border-radius: 50%;\n    position: relative;\n    text-indent: -9999em;\n    animation: load4 1.3s infinite linear;\n    transform: translateZ(0); }\n\n@keyframes load4 {\n  0%,\n  100% {\n    box-shadow: 0 -3em 0 0.2em, 2em -2em 0 0em, 3em 0 0 -1em, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 0; }\n  12.5% {\n    box-shadow: 0 -3em 0 0, 2em -2em 0 0.2em, 3em 0 0 0, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 -1em; }\n  25% {\n    box-shadow: 0 -3em 0 -0.5em, 2em -2em 0 0, 3em 0 0 0.2em, 2em 2em 0 0, 0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 -1em; }\n  37.5% {\n    box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0em 0 0, 2em 2em 0 0.2em, 0 3em 0 0em, -2em 2em 0 -1em, -3em 0em 0 -1em, -2em -2em 0 -1em; }\n  50% {\n    box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 0em, 0 3em 0 0.2em, -2em 2em 0 0, -3em 0em 0 -1em, -2em -2em 0 -1em; }\n  62.5% {\n    box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 -1em, 0 3em 0 0, -2em 2em 0 0.2em, -3em 0 0 0, -2em -2em 0 -1em; }\n  75% {\n    box-shadow: 0em -3em 0 -1em, 2em -2em 0 -1em, 3em 0em 0 -1em, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 0, -3em 0em 0 0.2em, -2em -2em 0 0; }\n  87.5% {\n    box-shadow: 0em -3em 0 0, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 0, -3em 0em 0 0, -2em -2em 0 0.2em; } }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/gui-helpers/ngx-dygraphs/ngx-dygraphs.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"ng-dygraphs\">\n    <div *ngIf=\"loadingInProgress\" class=\"loader-holder\">\n        <div class=\"loader\"></div>\n    </div>\n    <div class=\"ng-dygraphs-chart-container\">\n        <div [ngClass]=\"{'hide': !data?.length}\" #chart [style.width.px]=\"chartWidth\" [style.height.px]=\"chartHeight\">\n        </div>\n        <div *ngIf=\"!data?.length\" class=\"nodata\" [style.width.px]=\"chartWidth\" [style.height.px]=\"chartHeight\">\n            {{noDataLabel}}\n        </div>\n    </div>\n</div> -->\n<div class=\"mychart-panel\">\n    <div class=\"mychar-toolbar\" *ngIf=\"withToolbar\">\n        <div class=\"mychar-toolbar-space\" *ngIf=\"isEditor\">Toolbar</div>\n        <div style=\"display: block; float:right; padding-right: 5px;\" class=\"my-form-field\" *ngIf=\"!isEditor\">\n            <mat-select [(value)]=\"rangeTypeValue\" class=\"mychart-toolbar-select toolbar-cmp\" (selectionChange)=\"onRangeChanged($event.source.value)\">\n                <mat-option *ngFor=\"let ev of rangeType | enumToArray\" [value]=\"ev.key\">\n                  {{ ev.value }}\n                </mat-option>\n            </mat-select>            \n            <!-- <button class=\"mychar-toolbar-button toolbar-cmp\" style=\"margin-top:1px\" (click)=\"onClick('T')\">T</button> -->\n            <button class=\"mychar-toolbar-button toolbar-cmp\" style=\"margin-top:1px\" (click)=\"onClick('B')\">\n                <i class=\"material-icons\" style=\"font-size: 22px; cursor: pointer;\">chevron_left</i>\n            </button>\n            <button class=\"mychar-toolbar-button toolbar-cmp\" style=\"margin-top:1px\" (click)=\"onClick('F')\">\n                <i class=\"material-icons\" style=\"font-size: 22px; cursor: pointer;\">chevron_right</i>\n            </button>\n        </div>\n    </div>\n    <div class=\"mychart-edit\" *ngIf=\"isEditor\">\n        <div id=\"grido\"></div>\n        <div id=\"gridv\"></div>\n        <div id=\"bord\"></div>\n        <span id=\"c\">1.0</span>\n        <span id=\"b\">0.5</span>\n        <span id=\"a\">0</span>      \n        <span id=\"x1\">12:30</span>\n        <span id=\"x2\">18.30</span>  \n    </div>\n    <!-- <div class=\"mychart-graph\" #chart [ngStyle]=\"(isEditor) ? 'mychart-hide' : 'mychart-show'\"> -->\n    <div class=\"mychart-graph\" #chart [ngStyle]=\"{'visibility': (isEditor) ? 'hidden' : 'visible', 'display': (isEditor) ? 'none' : 'block'}\">\n    <!-- <div class=\"mychart-graph\" #chart style=\"display: block\"> -->\n    </div>\n    <div *ngIf=\"!data?.length && !isEditor\" class=\"nodata\">\n        {{noDataLabel}}\n    </div>\n    <div *ngIf=\"loadingInProgress\" class=\"loader-holder\">\n        <div class=\"loader\"></div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/gui-helpers/ngx-dygraphs/ngx-dygraphs.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgxDygraphsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_chart__ = __webpack_require__("../../../../../src/app/_models/chart.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_hmi__ = __webpack_require__("../../../../../src/app/_models/hmi.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_util__ = __webpack_require__("../../../../util/util.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_util___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_util__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NgxDygraphsComponent = (function () {
    function NgxDygraphsComponent(changeDetector) {
        this.changeDetector = changeDetector;
        this.onTimeRange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.withToolbar = false;
        this.isEditor = false;
        this.rangeTypeValue = Object.keys(__WEBPACK_IMPORTED_MODULE_1__models_chart__["b" /* ChartRangeType */])[0];
        this.range = { from: Date.now(), to: Date.now() };
        //   public chartWidth: number;
        //   public chartHeight: number;
        this.mapData = {};
        this.defOptions = {
            // width: "auto",
            // height: "auto",
            labels: ['Date', 'Temperature'],
            colors: [],
            // xlabel: "X label text",
            // ylabel: "Y label text",
            title: 'My Title',
            animatedZooms: true,
            connectSeparatedPoints: true,
            legend: 'always',
            labelsSeparateLines: true,
            // pointSize: 2,
            titleHeight: 20,
            axisLabelFontSize: 12
        };
        this.sampleData = [[new Date('1967/09/14'), 0], [new Date('1968/09/14'), 1]];
    }
    NgxDygraphsComponent.prototype.ngOnInit = function () {
        this.options = Object.assign(this.defOptions, this.options);
        this.noDataLabel = this.noDataLabel || 'NO DATA AVAILABLE';
        // this.chartWidth = (this.options && this.options.width) || 380;
        // this.chartHeight = (this.options && this.options.height) || 240;
    };
    NgxDygraphsComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.data = this.sampleData;
        if (this.isEditor) {
            return;
        }
        this.dygraph = new Dygraph(this.chart.nativeElement, this.data, this.options);
        this.loadingInProgress = false;
        this.dygraph.ready(function (graph) {
            var sc = {};
            _this.ngOnChanges(sc);
            // test to change css legend
            var cols = document.getElementsByClassName('dygraph-legend');
            for (var i = 0; i < cols.length; i++) {
                cols[i].style.fontSize = '12px';
            }
        });
        if (this.withToolbar && !this.isEditor) {
            this.onRangeChanged(this.rangeTypeValue);
        }
        this.changeDetector.detectChanges();
    };
    /**
     * ngOnChanges
     * @method ngOnChanges
     * @return {void}
     */
    NgxDygraphsComponent.prototype.ngOnChanges = function (changes) {
        if (!changes) {
            return;
        }
        if (!this.data || !this.data.length) {
            this.loadingInProgress = false;
            return;
        }
        this.loadingInProgress = true;
        var options = Object.assign({}, this.options);
        // if (!options.width) {
        //   options.width = this.chartWidth;
        // }
        // if (!options.height) {
        //   options.height = this.chartHeight;
        // }
        if (!options.legend) {
            options.legend = 'always';
        }
        // this.resize();
        // setTimeout(() => {
        //   this.dygraph = new Dygraph(this.chart.nativeElement, this.data, options);
        //   this.loadingInProgress = false;
        //   this.dygraph.ready(graph => {
        //     this.watchRangeSelector(graph);
        //   });
        // }, 500);
    };
    NgxDygraphsComponent.prototype.onClick = function (ev) {
        var msg = new __WEBPACK_IMPORTED_MODULE_2__models_hmi__["a" /* DaqQuery */]();
        msg.gid = this.id;
        msg.event = ev;
        if (ev === 'B') {
            this.range.to = new Date(this.range.from).getTime();
            this.range.from = new Date(this.range.from).setTime(new Date(this.range.from).getTime() - (__WEBPACK_IMPORTED_MODULE_1__models_chart__["a" /* ChartRangeConverter */].ChartRangeToHours(this.rangeTypeValue) * 60 * 60 * 1000));
        }
        else if (ev === 'F') {
            this.range.from = new Date(this.range.to).getTime();
            this.range.to = new Date(this.range.from).setTime(new Date(this.range.from).getTime() + (__WEBPACK_IMPORTED_MODULE_1__models_chart__["a" /* ChartRangeConverter */].ChartRangeToHours(this.rangeTypeValue) * 60 * 60 * 1000));
        }
        msg.sids = Object.keys(this.mapData);
        msg.from = this.range.from;
        msg.to = this.range.to;
        this.onTimeRange.emit(msg);
    };
    NgxDygraphsComponent.prototype.onRangeChanged = function (ev) {
        if (ev) {
            this.range.from = Date.now();
            this.range.to = Date.now();
            this.range.from = new Date(this.range.from).setTime(new Date(this.range.from).getTime() - (__WEBPACK_IMPORTED_MODULE_1__models_chart__["a" /* ChartRangeConverter */].ChartRangeToHours(ev) * 60 * 60 * 1000));
            var msg = new __WEBPACK_IMPORTED_MODULE_2__models_hmi__["a" /* DaqQuery */]();
            msg.event = ev;
            msg.gid = this.id;
            msg.sids = Object.keys(this.mapData);
            msg.from = this.range.from;
            msg.to = this.range.to;
            this.onTimeRange.emit(msg);
        }
    };
    NgxDygraphsComponent.prototype.resize = function (height, width) {
        var chart = this.chart.nativeElement;
        var w = chart.parentNode.clientWidth;
        var h = chart.parentNode.clientHeight;
        if (height) {
            h = height;
        }
        if (width) {
            w = width;
        }
        chart.style.height = h + 'px';
        chart.style.width = w + 'px';
        if (this.dygraph) {
            this.dygraph.updateOptions({ height: h, width: w });
            this.dygraph.resize(width, height);
        }
    };
    NgxDygraphsComponent.prototype.changeVisibility = function (index, value) {
        if (this.dygraph) {
            this.dygraph.setVisibility(index, value);
        }
    };
    NgxDygraphsComponent.prototype.init = function () {
        this.options.labels = ['DateTime'];
        this.mapData = {};
        this.data = [];
    };
    NgxDygraphsComponent.prototype.setRange = function (startRange) {
        if (this.withToolbar && !this.isEditor) {
            this.rangeTypeValue = startRange;
            this.onRangeChanged(this.rangeTypeValue);
        }
    };
    NgxDygraphsComponent.prototype.setOptions = function (options) {
        try {
            this.options = Object.assign(this.options, options);
            if (this.dygraph) {
                this.dygraph.updateOptions(this.options);
            }
        }
        catch (e) {
        }
    };
    NgxDygraphsComponent.prototype.addLine = function (id, name, color) {
        if (!this.mapData[id]) {
            this.mapData[id] = this.options.labels.length;
            this.options.labels.push(name);
            this.options.colors.push(color);
            if (this.dygraph) {
                this.dygraph.updateOptions({ labels: this.options.labels, colors: this.options.colors });
            }
        }
    };
    NgxDygraphsComponent.prototype.addValue = function (id, value) {
        if (this.mapData[id] && !Object(__WEBPACK_IMPORTED_MODULE_3_util__["isUndefined"])(value)) {
            var row = Array(this.options.labels.length).fill(null);
            row[0] = new Date();
            row[this.mapData[id]] = parseFloat(value);
            this.data.push(row);
            // check to remove old value
            if (this.data.length > 1000) {
                this.data.shift();
            }
            if (this.dygraph) {
                this.dygraph.updateOptions({ file: this.data });
            }
        }
    };
    NgxDygraphsComponent.prototype.setValues = function (values) {
        this.data = values;
        if (this.dygraph) {
            this.dygraph.updateOptions({ file: this.data, dateWindow: [this.range.from, this.range.to] });
        }
    };
    NgxDygraphsComponent.prototype.clear = function () {
        this.data = [];
        if (this.dygraph) {
            this.dygraph.updateOptions({ file: this.data });
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", String)
    ], NgxDygraphsComponent.prototype, "id", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], NgxDygraphsComponent.prototype, "options", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], NgxDygraphsComponent.prototype, "data", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", String)
    ], NgxDygraphsComponent.prototype, "noDataLabel", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */])
    ], NgxDygraphsComponent.prototype, "onTimeRange", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewChild */])('chart'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
    ], NgxDygraphsComponent.prototype, "chart", void 0);
    NgxDygraphsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'ngx-dygraphs',
            template: __webpack_require__("../../../../../src/app/gui-helpers/ngx-dygraphs/ngx-dygraphs.component.html"),
            styles: [__webpack_require__("../../../../../src/app/gui-helpers/ngx-dygraphs/ngx-dygraphs.component.css")]
        })
        /**
         * Wrapper arround Dygraphs
         *
         * @class NgDygraphsComponent
         */
        ,
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* ChangeDetectorRef */]])
    ], NgxDygraphsComponent);
    return NgxDygraphsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/gui-helpers/ngx-gauge/gaugeOptions.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return GaugeType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GaugeOptions; });
var GaugeType;
(function (GaugeType) {
    GaugeType[GaugeType["Gauge"] = 0] = "Gauge";
    GaugeType[GaugeType["Donut"] = 1] = "Donut";
    GaugeType[GaugeType["Zones"] = 2] = "Zones";
})(GaugeType || (GaugeType = {}));
var GaugeOptions = (function () {
    function GaugeOptions() {
        this.minValue = 0;
        this.maxValue = 3000;
        this.animationSpeed = 40;
        this.colorStart = '#6fadcf';
        this.colorStop = '#6fadcf';
        this.gradientType = '';
        this.strokeColor = '#e0e0e0';
        this.pointer = {
            length: 0.8,
            strokeWidth: 0.035,
            iconScale: 1.0,
            color: '#000000'
        };
        this.angle = 0.15;
        this.lineWidth = 0.44;
        this.radiusScale = 1.0;
        this.fontSize = 18;
        this.textFilePosition = 5;
        this.limitMax = false;
        this.limitMin = false;
        this.highDpiSupport = true;
        this.shadowColor = '#d5d5d5';
        this.fractionDigits = 0;
        this.ticksEnabled = true;
        this.renderTicks = {
            divisions: 5,
            divWidth: 1.1,
            divLength: 0.7,
            divColor: '#333333',
            subDivisions: 3,
            subLength: 0.5,
            subWidth: 0.6,
            subColor: '#666666'
        };
        this.staticLabelsText = '200;500;2100;2800';
        this.staticFontSize = 10;
        this.staticFontColor = '#000000';
        this.staticLabels = {
            font: '10px sans-serif',
            labels: [200, 500, 2100, 2800],
            fractionDigits: 0,
            color: '#000000'
        };
        this.staticZones = [
            { strokeStyle: "#F03E3E", min: 0, max: 200 },
            { strokeStyle: "#FFDD00", min: 200, max: 500 },
            { strokeStyle: "#30B32D", min: 500, max: 2100 },
            { strokeStyle: "#FFDD00", min: 2100, max: 2800 },
            { strokeStyle: "#F03E3E", min: 2800, max: 3000 }
        ];
    }
    return GaugeOptions;
}());



/***/ }),

/***/ "../../../../../src/app/gui-helpers/ngx-gauge/ngx-gauge.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n.container {\r\n    position: relative;\r\n    width: 100%; \r\n    height:100%;\r\n    padding: 20;\r\n}\r\n\r\n.canvas {\r\n    margin: 0;\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%);\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/gui-helpers/ngx-gauge/ngx-gauge.component.html":
/***/ (function(module, exports) {

module.exports = "<div (window:resize)=\"onResize($event)\" class=\"container\">\n    <div #gaugetext style=\"text-align: center; font-size: 18px; font-weight: bold;color: black; font-family: 'Amaranth', sans-serif;position: absolute; top: 5px; left: 0; right: 0;\"></div>\n    <canvas #gauge id=\"myGauge\" width=\"180\" height=\"50\" class=\"canvas\"></canvas>\n</div>"

/***/ }),

/***/ "../../../../../src/app/gui-helpers/ngx-gauge/ngx-gauge.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgxGaugeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__gaugeOptions__ = __webpack_require__("../../../../../src/app/gui-helpers/ngx-gauge/gaugeOptions.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NgxGaugeComponent = (function () {
    function NgxGaugeComponent() {
        this.type = __WEBPACK_IMPORTED_MODULE_1__gaugeOptions__["b" /* GaugeType */].Gauge;
        this.defOptions = new __WEBPACK_IMPORTED_MODULE_1__gaugeOptions__["a" /* GaugeOptions */]();
    }
    NgxGaugeComponent.prototype.ngOnInit = function () {
        this.options = Object.assign(this.defOptions, this.options);
    };
    NgxGaugeComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.onResize(null);
        }, 500);
    };
    NgxGaugeComponent.prototype.ngOnChanges = function (changes) {
        if (this.gauge) {
            if (changes) {
                if (changes.value) {
                    this.gauge.set(changes.value.currentValue);
                }
            }
        }
    };
    NgxGaugeComponent.prototype.onResize = function (event) {
        var canvas = this.canvas.nativeElement;
        var w = canvas.parentNode.clientWidth;
        var h = canvas.parentNode.clientHeight; // - (canvas.parentNode.clientHeight / 4);
        if (w < h)
            h = w;
        this.canvas.nativeElement.height = h;
        this.canvas.nativeElement.width = w;
        this.init(this.type);
    };
    NgxGaugeComponent.prototype.resize = function (height, width) {
        this.onResize(null);
    };
    NgxGaugeComponent.prototype.setValue = function (value) {
        var val = parseFloat(value);
        if (Number.isNaN(val)) {
            // maybe boolean
            val = Number(value);
        }
        else {
            val = parseFloat(val.toFixed(5));
        }
        this.gauge.set(val);
    };
    NgxGaugeComponent.prototype.setOptions = function (options) {
        this.options = options;
        this.gauge.animationSpeed = options.animationSpeed;
        this.gauge.minValue = options.minValue;
        this.gauge.maxValue = options.maxValue;
        this.gaugetext.nativeElement.style.fontSize = options.fontSize + 'px';
        if (options.pointer && options.pointer.color) {
            this.gaugetext.nativeElement.style.color = options.pointer.color;
        }
        this.gaugetext.nativeElement.style.top = options.textFilePosition + '%';
        this.gauge.setOptions(options);
        this.gauge.ctx.clearRect(0, 0, this.gauge.ctx.canvas.width, this.gauge.ctx.canvas.height);
        this.gauge.render();
    };
    NgxGaugeComponent.prototype.getOptions = function () {
        return this.options;
    };
    NgxGaugeComponent.prototype.init = function (type) {
        this.type = type;
        if (type === __WEBPACK_IMPORTED_MODULE_1__gaugeOptions__["b" /* GaugeType */].Gauge) {
            this.gauge = new Gauge(this.canvas.nativeElement);
            this.gauge.setTextField(this.gaugetext.nativeElement);
        }
        else if (type === __WEBPACK_IMPORTED_MODULE_1__gaugeOptions__["b" /* GaugeType */].Zones) {
            this.gauge = new Gauge(this.canvas.nativeElement);
            this.gauge.setTextField(this.gaugetext.nativeElement);
        }
        else if (type === __WEBPACK_IMPORTED_MODULE_1__gaugeOptions__["b" /* GaugeType */].Donut) {
            this.gauge = new Donut(this.canvas.nativeElement);
            this.gauge.setTextField(this.gaugetext.nativeElement);
        }
        this.setOptions(this.options);
        this.gauge.set(this.value);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", String)
    ], NgxGaugeComponent.prototype, "id", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__gaugeOptions__["a" /* GaugeOptions */])
    ], NgxGaugeComponent.prototype, "options", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], NgxGaugeComponent.prototype, "value", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewChild */])('gauge'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
    ], NgxGaugeComponent.prototype, "canvas", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewChild */])('gaugetext'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
    ], NgxGaugeComponent.prototype, "gaugetext", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* HostListener */])('window:resize', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], NgxGaugeComponent.prototype, "onResize", null);
    NgxGaugeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'ngx-gauge',
            template: __webpack_require__("../../../../../src/app/gui-helpers/ngx-gauge/ngx-gauge.component.html"),
            styles: [__webpack_require__("../../../../../src/app/gui-helpers/ngx-gauge/ngx-gauge.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NgxGaugeComponent);
    return NgxGaugeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/gui-helpers/sel-options/sel-options.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/gui-helpers/sel-options/sel-options.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-selection-list *ngIf=\"extSelected\" #extGroups [(ngModel)]=\"extSelected\" style=\"display: inline-block; width: 40px;padding-top: 0px; padding-bottom: 10px;\" [disabled]=\"disabled\">\n\t<mat-list-option *ngFor=\"let opt of options\" [selected]=\"opt.selected\" [value]=\"opt\" style=\"height: 26px;cursor: pointer;\" checkboxPosition=\"before\">\n\t</mat-list-option>\t\n</mat-selection-list>\n<mat-selection-list #selGroups [(ngModel)]=\"selected\" style=\"display: inline-block; padding-top: 0px; padding-bottom: 10px;\" [disabled]=\"disabled\">\n\t<mat-list-option *ngFor=\"let opt of options\" [selected]=\"opt.selected\" [value]=\"opt\" style=\"font-size: 14px;height: 26px !important;cursor: pointer;\" checkboxPosition=\"before\">\n\t\t{{opt.label}}\n\t</mat-list-option>\n</mat-selection-list>"

/***/ }),

/***/ "../../../../../src/app/gui-helpers/sel-options/sel-options.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelOptionsComponent; });
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

var SelOptionsComponent = (function () {
    function SelOptionsComponent() {
        this.selected = [];
        this.options = [];
    }
    SelOptionsComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], SelOptionsComponent.prototype, "disabled", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], SelOptionsComponent.prototype, "selected", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], SelOptionsComponent.prototype, "options", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], SelOptionsComponent.prototype, "extSelected", void 0);
    SelOptionsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'sel-options',
            template: __webpack_require__("../../../../../src/app/gui-helpers/sel-options/sel-options.component.html"),
            styles: [__webpack_require__("../../../../../src/app/gui-helpers/sel-options/sel-options.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SelOptionsComponent);
    return SelOptionsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/gui-helpers/treetable/treetable.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container {\r\n    overflow: auto;\r\n}\r\n\r\n.item {\r\n    width: 100%;\r\n    height: 40px;\r\n}\r\n.item:hover {\r\n    background-color: rgba(0,0,0,0.1);\r\n}\r\n\r\n.item-text {\r\n    width: 500px;\r\n    position: relative;\r\n    display: inline-block;\r\n    overflow: hidden; \r\n    text-overflow: ellipsis;\r\n    white-space: nowrap;\r\n}\r\n\r\n.item-text div {\r\n    display: inline-block;\r\n    overflow-wrap: break-word;\r\n    text-overflow: ellipsis;\r\n    /* word-wrap: break-word; */\r\n    white-space: nowrap;\r\n}\r\n\r\n.item-property {\r\n    position: relative;\r\n    /* left: 400px; */\r\n    width: 400px;\r\n    display: inline-block;\r\n    overflow: hidden; \r\n    text-overflow: ellipsis;\r\n    white-space: nowrap;\r\n    line-height: 40px;\r\n}\r\n\r\n.item-check {\r\n    float: right;\r\n    margin-right: 20px;\r\n    line-height: 32px;\r\n    /* display: inline-block; */\r\n}\r\n\r\n.item-waiting {\r\n    /* -moz-transition: height .5s;\r\n    -ms-transition: height .5s;\r\n    -o-transition: height .5s;\r\n    -webkit-transition: height .5s;\r\n    transition: height .5s; */\r\n    display:inline-block;\r\n    height: 40;\r\n    vertical-align: middle;\r\n    /* width: 80%; */\r\n    overflow: hidden;\r\n}\r\n   ", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/gui-helpers/treetable/treetable.component.html":
/***/ (function(module, exports) {

module.exports = "<div #treetable class=\"container\" [style.height]=\"containerProperty.height\" [style.width]=\"containerProperty.width\">\n\t<div *lazyFor=\"let node of list; index as i\" class=\"item\">\n\t\t<div *ngIf=\"node.visible\">\n\t\t\t<div class=\"item-text\" [style.left.px]=\"node.childPos * 15\" [style.width.px]=\"500 - node.childPos * 15\">\n\t\t\t\t<button mat-icon-button (click)=\"onExpandToggle(node)\" enabled=\"node.childs\">\n\t\t\t\t\t<mat-icon *ngIf=\"node.expanded\">expand_more</mat-icon>\n\t\t\t\t\t<mat-icon *ngIf=\"!node.expanded\">chevron_right</mat-icon>\n\t\t\t\t</button>\n\t\t\t\t<div *ngIf=\"!node.childs.length\" class=\"item-waiting\" style=\"width:40px\" [ngStyle]=\"{'display': (node.expanded) ? 'inline-block' : 'none'}\">\n\t\t\t\t\t<mat-spinner diameter=\"20\"></mat-spinner>\n\t\t\t\t</div>\n\t\t\t\t<button mat-icon-button enabled=\"false\" *ngIf=\"node.class === nodeType.Variable\">\n\t\t\t\t\t<mat-icon>label</mat-icon>\n\t\t\t\t</button>\n\t\t\t\t{{node.text}}\n\t\t\t</div>\n\t\t\t<div class=\"item-property\" [style.left.px]=\"node.childPos * 15\">\n\t\t\t\t{{node.property}}\n\t\t\t</div>\n\t\t\t<div class=\"item-check\">\n\t\t\t\t<mat-checkbox [(ngModel)]=\"node.checked\" [disabled]=\"!node.enabled\" (change)=\"changeStatus(node,$event)\" *ngIf=\"node.class === nodeType.Variable\"></mat-checkbox>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/gui-helpers/treetable/treetable.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return TreetableComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Node; });
/* unused harmony export NodeType */
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

var TreetableComponent = (function () {
    function TreetableComponent() {
        this.expand = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.nodeType = NodeType;
        this.nodes = {};
        this.list = [];
        this.containerProperty = { width: '100%', height: '100%' };
    }
    TreetableComponent.prototype.ngOnInit = function () {
        if (this.config) {
            if (this.config.width) {
                this.containerProperty.width = this.config.width;
            }
            if (this.config.height) {
                this.containerProperty.height = this.config.height;
            }
        }
    };
    TreetableComponent.prototype.onExpandToggle = function (node, event) {
        var _this = this;
        var currentPosition = this.treetable.nativeElement.scrollTop;
        node.expanded = (node.expanded) ? false : true;
        if (node.expanded) {
            if (!node.childs.length) {
                this.expand.emit(node);
            }
            this.hideNode(node, true);
        }
        else {
            this.hideNode(node, false);
        }
        this.list = this.nodeToItems();
        setTimeout(function () { _this.treetable.nativeElement.scrollTop = currentPosition; }, 1);
    };
    TreetableComponent.prototype.hideNode = function (node, visible) {
        var _this = this;
        Object.values(node.childs).forEach(function (n) {
            n.visible = visible;
            _this.hideNode(n, (visible) ? n.expanded : visible);
        });
    };
    TreetableComponent.prototype.addNode = function (node, parent, enabled) {
        if (parent) {
            var refp = this.nodes[parent.id];
            node.setParent(refp);
            node.parent.waiting = false;
            node.enabled = enabled;
            if (!enabled) {
                node.checked = true;
            }
        }
        if (Object.keys(this.nodes).indexOf(node.id) < 0) {
            this.nodes[node.id] = node;
        }
    };
    TreetableComponent.prototype.update = function () {
        this.list = this.nodeToItems();
    };
    TreetableComponent.prototype.setNodeProperty = function (node, pro) {
        if (this.nodes[node.id]) {
            this.nodes[node.id].property = pro;
            this.nodes[node.id].type = node.type;
        }
    };
    TreetableComponent.prototype.nodeToItems = function () {
        if (this.nodes && Object.values(this.nodes).length) {
            var result_1 = [];
            Object.values(this.nodes).forEach(function (value) {
                if (value.visible) {
                    result_1.push(value);
                }
            });
            return result_1.sort(function (a, b) { return (a.path > b.path) ? 1 : -1; });
        }
        else {
            return [];
        }
    };
    TreetableComponent.prototype.changeStatus = function (node, $event) {
    };
    TreetableComponent.prototype.expandable = function (type) {
        if (type === NodeType.Object) {
            return true;
        }
        else {
            return false;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], TreetableComponent.prototype, "config", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", Object)
    ], TreetableComponent.prototype, "expand", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewChild */])('treetable'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
    ], TreetableComponent.prototype, "treetable", void 0);
    TreetableComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'ngx-treetable',
            template: __webpack_require__("../../../../../src/app/gui-helpers/treetable/treetable.component.html"),
            styles: [__webpack_require__("../../../../../src/app/gui-helpers/treetable/treetable.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TreetableComponent);
    return TreetableComponent;
}());

var Node = (function () {
    function Node(id, text) {
        this.id = '';
        this.path = '';
        this.text = '';
        this.childPos = 0;
        this.expanded = false;
        this.visible = true;
        this.parent = null;
        this.property = '';
        this.type = ''; // boolean, int ...
        this.checked = false;
        this.childs = [];
        this.waiting = true;
        this.enabled = true;
        this.id = id;
        this.text = text;
        this.path = this.text;
    }
    Node.prototype.setParent = function (parent) {
        if (parent) {
            this.parent = parent;
            this.path = parent.path + Node.SEPARATOR + this.text;
            this.childPos = parent.childPos + 1;
            this.parent.childs.push(this);
        }
    };
    Node.SEPARATOR = '>';
    return Node;
}());

var NodeType;
(function (NodeType) {
    NodeType["Object"] = "Object";
    NodeType["Variable"] = "Variable";
    NodeType["Methode"] = "Methode";
})(NodeType || (NodeType = {}));


/***/ }),

/***/ "../../../../../src/app/header/header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n.header-panel {\r\n    z-index: 9999 !important;\r\n    position: fixed;\r\n    top: 0px;\r\n    left: 0px;\r\n    background-color: rgba(33,33,33,0.92);\r\n    color: rgba(255,255,255,1);\r\n    height: 40px;\r\n    width: 200px;\r\n}\r\n\r\n.header-help {\r\n    z-index: 9999 !important;\r\n    position: fixed;\r\n    top: 0px;\r\n    right: 25px;\r\n    /* background-color: rgba(33,33,33,0.92); */\r\n    color: rgba(255,255,255,1);\r\n    height: 36px;\r\n    width: 36px;\r\n\r\n}\r\n\r\n.main-btn {\r\n    height: 34px;\r\n    width: 34px;\r\n    min-width: unset !important;\r\n    padding:unset !important;\r\n    line-height: 34px;\r\n    margin-left: 5px;\r\n    margin-right: 5px;\r\n  }\r\n  \r\n  .main-btn mat-icon {\r\n    font-size: 24px;\r\n    height: unset;\r\n    width: unset;\r\n  }\r\n\r\n.header-menu {\r\n    box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12), 0 1px 5px 0 rgba(0,0,0,0.2); \r\n}\r\n\r\n.header-icon {\r\n    padding: 0 14px;\r\n}\r\n\r\n.menu-separator {\r\n    border-top-color: rgba(0,0,0,1);\r\n}\r\n\r\n::ng-deep .leftbar-item-menu {\r\n    background-color: rgba(47,47,47,1);\r\n}\r\n::ng-deep .mat-menu-item {\r\n    font-size: 11px;\r\n    color: rgba(255,255,255,1);\r\n    height: 30px !important;\r\n    line-height: unset !important;\r\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"header-panel\" *ngIf=\"ineditor\">\r\n  <button mat-button title=\"{{'header.save-project' | translate}}\" [matMenuTriggerFor]=\"prjview\" #prjviewtrigger=\"matMenuTrigger\" class=\"main-btn\"\r\n   (click)=\"prjedittrigger.closeMenu()\">\r\n    <mat-icon aria-label=\"Save Project\">save</mat-icon>\r\n  </button>\r\n  <mat-menu #prjview=\"matMenu\" class=\"leftbar-item-menu header-menu\" yPosition=\"below\" [overlapTrigger]=\"false\">\r\n    <button mat-menu-item (click)=\"onNewProject()\">{{'header.new-project' | translate}}</button>\r\n    <mat-divider class=\"menu-separator\"></mat-divider>\r\n    <button mat-menu-item (click)=\"onSaveProject()\">{{'header.save-project' | translate}}</button>\r\n    <button mat-menu-item (click)=\"onSaveProjectAs()\">{{'header.saveas-project' | translate}}</button>\r\n    <mat-divider class=\"menu-separator\"></mat-divider>\r\n    <button mat-menu-item (click)=\"onOpenProject();$event.stopPropagation()\">{{'header.open-project' | translate}}</button>\r\n    <!-- <button mat-menu-item (click)=\"onImportVariable();$event.stopPropagation()\">Import Variable</button> -->\r\n    <input type=\"file\" #fileImportInput style=\"display: none\" id=\"projectFileUpload\" (change)=\"onFileChangeListener($event)\"\r\n      accept=\".fuxap\" />\r\n  </mat-menu>\r\n  <button mat-button title=\"{{'header.edit-project' | translate}}\" [matMenuTriggerFor]=\"prjedit\" #prjedittrigger=\"matMenuTrigger\" class=\"main-btn\"\r\n   (click)=\"prjviewtrigger.closeMenu()\">\r\n      <mat-icon aria-label=\"Edit Views\">widgets</mat-icon>\r\n  </button>\r\n  <mat-menu #prjedit=\"matMenu\" class=\"leftbar-item-menu header-menu\" yPosition=\"below\" [overlapTrigger]=\"false\">\r\n    <button mat-menu-item (click)=\"goTo('/editor')\">{{'header.edit-views' | translate}}</button>\r\n    <button mat-menu-item (click)=\"goTo('/device')\">{{'header.edit-devices' | translate}}</button>\r\n    <button mat-menu-item (click)=\"onChartConfig()\">{{'header.edit-charts' | translate}}</button>\r\n    <button mat-menu-item (click)=\"goTo('/users')\">{{'header.edit-users' | translate}}</button>\r\n  </mat-menu>\r\n\r\n</div>\r\n<div class=\"header-help\" *ngIf=\"ineditor && !winele\">\r\n    <button mat-button title=\"{{'header.help' | translate}}\" [matMenuTriggerFor]=\"helpmenu\" class=\"main-btn\" style=\"padding-top: 3px !important;\">\r\n        <mat-icon aria-label=\"HELP\">help_outline</mat-icon>\r\n    </button>\r\n    <mat-menu #helpmenu=\"matMenu\" class=\"leftbar-item-menu header-menu\" yPosition=\"below\" [overlapTrigger]=\"false\">\r\n        <button mat-menu-item (click)=\"onShowHelp('help')\">{{'header.help-tutorial' | translate}}</button>\r\n        <mat-divider class=\"menu-separator\"></mat-divider>\r\n        <button mat-menu-item (click)=\"onShowHelp('info')\">{{'header.help-info' | translate}}</button>\r\n    </mat-menu>\r\n</div>\r\n<app-tutorial #tutorial></app-tutorial>\r\n"

/***/ }),

/***/ "../../../../../src/app/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return HeaderComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DialogInfo; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__editor_chart_config_chart_config_component__ = __webpack_require__("../../../../../src/app/editor/chart-config/chart-config.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_project_service__ = __webpack_require__("../../../../../src/app/_services/project.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__models_hmi__ = __webpack_require__("../../../../../src/app/_models/hmi.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__help_tutorial_tutorial_component__ = __webpack_require__("../../../../../src/app/help/tutorial/tutorial.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ngx_translate_core__ = __webpack_require__("../../../../@ngx-translate/core/@ngx-translate/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};









var HeaderComponent = (function () {
    function HeaderComponent(router, dialog, translateService, projectService) {
        var _this = this;
        this.router = router;
        this.dialog = dialog;
        this.translateService = translateService;
        this.projectService = projectService;
        this.ineditor = false;
        this.winele = false;
        this.router.events.subscribe(function () {
            _this.ineditor = (_this.router.url.indexOf('editor') >= 0 || _this.router.url.indexOf('device') >= 0 ||
                _this.router.url.indexOf('users') >= 0) ? true : false;
        });
    }
    HeaderComponent.prototype.ngOnInit = function () {
        if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].type === 'winele') {
            this.winele = true;
        }
    };
    HeaderComponent.prototype.ngOnDestroy = function () {
        try {
            if (this.subscriptionShowHelp) {
                this.subscriptionShowHelp.unsubscribe();
            }
        }
        catch (e) {
        }
    };
    HeaderComponent.prototype.onClick = function (targetElement) {
        this.sidenav.close();
    };
    HeaderComponent.prototype.onChartConfig = function () {
        var _this = this;
        var chartscopy = JSON.parse(JSON.stringify(this.projectService.getCharts()));
        var devices = this.projectService.getDevices();
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_4__editor_chart_config_chart_config_component__["a" /* ChartConfigComponent */], {
            minWidth: '900px',
            data: { charts: chartscopy, devices: devices }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.projectService.setCharts(result.charts);
            }
        });
    };
    HeaderComponent.prototype.onShowHelp = function (page) {
        var data = new __WEBPACK_IMPORTED_MODULE_6__models_hmi__["k" /* HelpData */]();
        data.page = page;
        data.tag = 'device';
        this.showHelp(data);
    };
    HeaderComponent.prototype.showHelp = function (data) {
        if (data.page === 'help') {
            this.tutorial.show = true;
        }
        else if (data.page === 'info') {
            this.showInfo();
        }
    };
    HeaderComponent.prototype.showInfo = function () {
        var dialogRef = this.dialog.open(DialogInfo, {
            minWidth: '250px',
            data: { name: 'Info', version: __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].version }
        });
        dialogRef.afterClosed().subscribe(function (result) {
        });
    };
    HeaderComponent.prototype.goTo = function (destination) {
        this.router.navigate([destination]); //, this.ID]);
    };
    //#region Project Events
    HeaderComponent.prototype.onNewProject = function () {
        try {
            var msg_1 = '';
            this.translateService.get('msg.project-save-ask').subscribe(function (txt) { msg_1 = txt; });
            if (window.confirm(msg_1)) {
                this.projectService.saveProject();
                this.projectService.setNewProject();
            }
        }
        catch (e) {
        }
    };
    /**
     * Aave Project as JSON file and Download in Browser
     */
    HeaderComponent.prototype.onSaveProjectAs = function () {
        try {
            this.projectService.saveProject(true);
        }
        catch (e) {
        }
    };
    HeaderComponent.prototype.onOpenProject = function () {
        var ele = document.getElementById('projectFileUpload');
        ele.click();
    };
    /**
     * open Project event file loaded
     * @param event file resource
     */
    HeaderComponent.prototype.onFileChangeListener = function (event) {
        var _this = this;
        var text = [];
        var files = event.srcElement.files;
        var input = event.target;
        var reader = new FileReader();
        reader.onload = function (data) {
            var prj = JSON.parse(reader.result.toString());
            _this.projectService.setProject(prj, true);
        };
        reader.onerror = function () {
            var msg = 'Unable to read ' + input.files[0];
            // this.translateService.get('msg.project-load-error', {value: input.files[0]}).subscribe((txt: string) => { msg = txt });
            alert(msg);
        };
        reader.readAsText(input.files[0]);
        this.fileImportInput.nativeElement.value = null;
    };
    /**
     * save Project and Download in Browser
     */
    HeaderComponent.prototype.onSaveProject = function () {
        try {
            this.projectService.saveProject();
        }
        catch (e) {
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewChild */])('sidenav'),
        __metadata("design:type", Object)
    ], HeaderComponent.prototype, "sidenav", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewChild */])('tutorial'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_7__help_tutorial_tutorial_component__["a" /* TutorialComponent */])
    ], HeaderComponent.prototype, "tutorial", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewChild */])('fileImportInput'),
        __metadata("design:type", Object)
    ], HeaderComponent.prototype, "fileImportInput", void 0);
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            moduleId: module.i,
            selector: 'app-header',
            template: __webpack_require__("../../../../../src/app/header/header.component.html"),
            styles: [__webpack_require__("../../../../../src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["j" /* MatDialog */],
            __WEBPACK_IMPORTED_MODULE_8__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_5__services_project_service__["a" /* ProjectService */]])
    ], HeaderComponent);
    return HeaderComponent;
}());

var DialogInfo = (function () {
    function DialogInfo(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    DialogInfo.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    DialogInfo = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'dialog-info',
            template: __webpack_require__("../../../../../src/app/header/info.dialog.html"),
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_2__angular_material__["b" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_material__["m" /* MatDialogRef */], Object])
    ], DialogInfo);
    return DialogInfo;
}());



/***/ }),

/***/ "../../../../../src/app/header/info.dialog.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <div mat-dialog-title style=\"display:inline-block\">\r\n      <div class=\"logo\" style=\"display: inline-block\"></div>\r\n      <div style=\"font-size: 18px;display: inline-block;vertical-align: super;padding-left: 5px;\">{{'dlg.info-title' | translate}}</div>\r\n  </div>\r\n  <mat-icon (click)=\"onNoClick()\" style=\"float:right;margin-right:-10px;margin-top:-10px;cursor:pointer;color:gray;\">clear</mat-icon>\r\n  <div mat-dialog-content style=\"margin-bottom: 10px;\">\r\n    <div style=\"display: block\">\r\n        {{'header.info-version' | translate}} {{data.version}}\r\n    </div>\r\n    <div style=\"display: block; font-size: 13px;margin-top: 10px;\">\r\n        developed by <span><b>frango</b>team</span>\r\n      </div>\r\n  </div>\r\n  <div mat-dialog-actions style=\"float:right; margin-bottom:0px;padding-bottom:0px\">\r\n    <button mat-raised-button [mat-dialog-close]=\"data\">{{'dlg.ok' | translate}}</button>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/help/tutorial/tutorial.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".tutorial-panel {\r\n   width: 460px;\r\n   height: 720px;\r\n   z-index: 99999 !important;\r\n   position: absolute;\r\n   right: 10px;\r\n   top: 50px;\r\n   background-color: rgb(240, 240, 240);\r\n   /* background-color: rgb(250,250,250); */\r\n   box-shadow: 0 2px 6px 0 rgba(0,0,0,0.2),0 2px 6px 0 rgba(0,0,0,0.188235);/*1px 2px 5px 1px rgba(0,0,0,.26);*/\r\n   border: 0px !important;\r\n }\r\n \r\n .tutorial-header {\r\n   height: 36px;\r\n   background-color: #212121;\r\n   color: #ffffff;\r\n   padding-left: 5px;\r\n   cursor: move;\r\n   line-height: 30px;\r\n }\r\n\r\n.tutorial-title {\r\n    padding: 5px 10px 5px 20px;\r\n    font-size: 16px;\r\n }\r\n \r\n .tutorial-close {\r\n   font-size: 28px;\r\n   /* float: right; */\r\n   cursor: pointer;\r\n   /* padding-right: 5px; */\r\n   right: 5px;\r\n     position: absolute;\r\n     top: 0px;\r\n }\r\n\r\n .my-expansion-panel {\r\n    margin: 0px;\r\n }\r\n \r\n .header {\r\n }\r\n .header mat-panel-title {\r\n    font-size: 20px;\r\n    font-weight: 100;\r\n }\r\n ", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/help/tutorial/tutorial.component.html":
/***/ (function(module, exports) {

module.exports = "<div draggable [draggableHeight]=\"30\" class=\"tutorial-panel\" *ngIf=\"show\">\n    <style>\n        pre {\n            white-space: pre-line;\n        }\n    </style>\n    <div class=\"tutorial-header\">\n        <div class=\"tutorial-title\">\n            {{'tutorial.title' | translate}}\n        </div>\n        <div class=\"tutorial-close\" (click)=\"close()\">\n            &times;\n        </div>\n    </div>\n    <div class=\"tutorial-body\">\n        <mat-accordion multi=\"true\">\n            <mat-expansion-panel class=\"my-expansion-panel\">\n                <mat-expansion-panel-header class=\"header\" [collapsedHeight]=\"'40px'\" [expandedHeight]=\"'40px'\">\n                    <mat-panel-title>\n                        Basic Layout\n                    </mat-panel-title>\n                    <mat-panel-description>\n\n                    </mat-panel-description>\n                </mat-expansion-panel-header>\n                Basic content\n\n            </mat-expansion-panel>\n            <mat-expansion-panel class=\"my-expansion-panel\">\n                <mat-expansion-panel-header class=\"header\" [collapsedHeight]=\"'40px'\" [expandedHeight]=\"'40px'\">\n                    <mat-panel-title>\n                        Page editor\n                    </mat-panel-title>\n                    <mat-panel-description>\n\n                    </mat-panel-description>\n                </mat-expansion-panel-header>\n                Page editor content\n            </mat-expansion-panel>\n            <mat-expansion-panel class=\"my-expansion-panel\">\n                <mat-expansion-panel-header class=\"header\" [collapsedHeight]=\"'40px'\" [expandedHeight]=\"'40px'\">\n                    <mat-panel-title>\n                        Device\n                    </mat-panel-title>\n                    <mat-panel-description>\n\n                    </mat-panel-description>\n                </mat-expansion-panel-header>\n                Device content\n            </mat-expansion-panel>\n        </mat-accordion>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/help/tutorial/tutorial.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TutorialComponent; });
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

var TutorialComponent = (function () {
    function TutorialComponent() {
        this.show = false;
    }
    TutorialComponent.prototype.ngOnInit = function () {
    };
    TutorialComponent.prototype.close = function () {
        this.show = false;
    };
    TutorialComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-tutorial',
            template: __webpack_require__("../../../../../src/app/help/tutorial/tutorial.component.html"),
            styles: [__webpack_require__("../../../../../src/app/help/tutorial/tutorial.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TutorialComponent);
    return TutorialComponent;
}());



/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".home-body {\r\n    display: table;\r\n    margin: 0 auto;\r\n}\r\n\r\n.header {\r\n    display: block;\r\n    z-index: 9999 !important;\r\n    box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12), 0 1px 5px 0 rgba(0,0,0,0.2) !important; \r\n    /* min-height: 46px !important; */\r\n    /* max-height: 46px !important; */\r\n    height: 46px !important;\r\n    padding-left: 4px;\r\n    padding-right: 10px;\r\n    background-color: rgba(255, 255, 255, 1);\r\n}\r\n\r\n.sidenav {\r\n    padding: 0px 0px 0px 0px;\r\n    background-color: rgba(44, 44, 44, 1) !important;\r\n    color: rgba(255, 255, 255, 1) !important;\r\n    /* max-width: 100px; */\r\n    display: inline-block !important;\r\n    top:0px;\r\n    box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12), 0 1px 5px 0 rgba(0,0,0,0.2) !important; \r\n}\r\n\r\n.sidenav-container {\r\n    width: 100%;\r\n    height: 100% !important;\r\n    background-color:#FFFFFF;\r\n}\r\n\r\n::ng-deep .mat-drawer-backdrop.mat-drawer-shown {\r\n    background-color: transparent;\r\n} \r\n\r\n::ng-deep #myuserinfo {\r\n    padding: unset !important;\r\n    box-shadow: 0 2px 6px 0 rgba(0,0,0,0.2),0 2px 6px 0 rgba(0,0,0,0.18);\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"isLoading\" style=\"position:absolute;top:0px;left:0px;right:0px;bottom:0px;background-color:rgba(0,0,0,0.2); z-index: 99999;\">\r\n\t<mat-progress-bar mode=\"indeterminate\" color=\"warn\" style=\"position: absolute; top: 0px; left: 0px; right: 0px; z-index: 99999;\">\r\n\t</mat-progress-bar>\r\n</div>\r\n<mat-sidenav-container class=\"sidenav-container\">\r\n\t<mat-sidenav #matsidenav *ngIf=\"showSidenav\" class=\"sidenav\" [mode]=\"showSidenav\">\r\n\t\t<app-sidenav #sidenav [sidenav]=\"matsidenav\" (goToPage)=\"onGoToPage($event)\" (goToLink)=\"onGoToLink($event)\"></app-sidenav>\r\n\t</mat-sidenav>\r\n\t<mat-sidenav-content [style.background-color]=\"backgroudColor\">\r\n\t\t<div class=\"header\">\r\n\t\t\t<button mat-icon-button *ngIf=\"showSidenav && showSidenav !== 'side'\" (click)=\"(matsidenav.opened) ? matsidenav.close() : matsidenav.open()\" class=\"sidenav-toogle\">\r\n\t\t\t\t<mat-icon aria-label=\"Menu\">menu</mat-icon>\r\n\t\t\t</button>\r\n\t\t\t<div *ngIf=\"securityEnabled\" style=\"float: right;\">\r\n\t\t\t\t<button mat-icon-button  (click)=\"onLogin()\">\r\n\t\t\t\t\t<mat-icon aria-label=\"Login\" [style.color]=\"isLoggedIn() ? 'rgb(59, 144, 255)' : 'black'\">account_circle</mat-icon>\r\n\t\t\t\t</button>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div style=\"padding-top: 5px;\">\r\n\t\t\t<app-fuxa-view *ngIf=\"showHomeView\" #fuxaview class=\"home-body\" id=\"home\" [view]=\"homeView\" [hmi]=\"hmi\" [gaugesManager]=\"gaugesManager\"></app-fuxa-view>\r\n\t\t\t<!-- <app-fuxa-view [hidden]=\"!showHomeView\" #fuxaview class=\"home-body\" id=\"home\" [view]=\"homeView\" [hmi]=\"hmi\" [gaugesManager]=\"gaugesManager\"></app-fuxa-view> -->\r\n\t\t\t<!-- <app-iframe [hidden]=\"isLoading && !showHomeLink\" #iframeview [link]=\"homeLink\" class=\"home-body\"></app-iframe> -->\r\n\t\t\t<div [style.visibility]=\"(showHomeView) ? 'hidden' : 'visible' \" class=\"home-body home-info\">\r\n\t\t\t\t<p>\r\n\t\t\t\t\t{{'msg.home-welcome' | translate}}.\r\n\t\t\t\t</p>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</mat-sidenav-content>\r\n\r\n</mat-sidenav-container>"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return HomeComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DialogUserInfo; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sidenav_sidenav_component__ = __webpack_require__("../../../../../src/app/sidenav/sidenav.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__fuxa_view_fuxa_view_component__ = __webpack_require__("../../../../../src/app/fuxa-view/fuxa-view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_hmi_service__ = __webpack_require__("../../../../../src/app/_services/hmi.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_project_service__ = __webpack_require__("../../../../../src/app/_services/project.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_auth_service__ = __webpack_require__("../../../../../src/app/_services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__gauges_gauges_component__ = __webpack_require__("../../../../../src/app/gauges/gauges.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__models_hmi__ = __webpack_require__("../../../../../src/app/_models/hmi.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};












var HomeComponent = (function () {
    function HomeComponent(projectService, changeDetector, dialog, router, hmiService, authService, gaugesManager) {
        this.projectService = projectService;
        this.changeDetector = changeDetector;
        this.dialog = dialog;
        this.router = router;
        this.hmiService = hmiService;
        this.authService = authService;
        this.gaugesManager = gaugesManager;
        // @ViewChild('iframeview') iframeview: IframeComponent;
        this.isLoading = true;
        this.homeView = new __WEBPACK_IMPORTED_MODULE_9__models_hmi__["s" /* View */]();
        this.hmi = new __WEBPACK_IMPORTED_MODULE_9__models_hmi__["l" /* Hmi */]();
        this.showSidenav = 'over';
        this.showHomeView = false;
        this.homeLink = '';
        this.showHomeLink = false;
        this.securityEnabled = false;
        this.backgroudColor = 'unset';
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        try {
            var hmi = this.projectService.getHmi();
            if (hmi) {
                this.loadHmi();
            }
            this.subscriptionLoad = this.projectService.onLoadHmi.subscribe(function (load) {
                _this.loadHmi();
            }, function (error) {
                console.log('Error loadHMI');
            });
            this.changeDetector.detectChanges();
        }
        catch (err) {
            console.log(err);
        }
    };
    HomeComponent.prototype.ngOnDestroy = function () {
        try {
            if (this.subscriptionLoad) {
                this.subscriptionLoad.unsubscribe();
            }
        }
        catch (e) {
        }
    };
    HomeComponent.prototype.onGoToPage = function (event) {
        var view = this.hmi.views.find(function (x) { return x.id === event; });
        if (view) {
            this.homeView = view;
            this.setBackground();
            this.fuxaview.loadHmi(this.homeView);
        }
        this.showHomeLink = false;
        this.showHomeView = (this.homeView) ? true : false;
    };
    HomeComponent.prototype.onGoToLink = function (event) {
        if (event.indexOf('://') >= 0) {
            // this.showHomeView = false;
            // this.showHomeLink = true;
            // this.iframeview.loadLink(event);
        }
        else {
            this.router.navigate([event]).then(function (data) {
                console.log('Route ' + event + ' exists, redirection is done');
            }).catch(function (err) {
                console.log('Route ' + event + '  not found, redirection stopped with no error raised');
                // try iframe link
            });
        }
    };
    HomeComponent.prototype.onLogin = function () {
        var _this = this;
        var cuser = this.authService.getUser();
        if (cuser) {
            var dialogRef = this.dialog.open(DialogUserInfo, {
                id: 'myuserinfo',
                minWidth: '250px',
                position: { top: '50px', right: '15px' },
                backdropClass: 'user-info',
                data: cuser
            });
            dialogRef.afterClosed().subscribe(function (result) {
                if (result) {
                    _this.authService.signOut();
                    _this.projectService.reload();
                }
            });
        }
        else {
            var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_10__login_login_component__["a" /* LoginComponent */], {
                minWidth: '250px',
                data: {}
            });
            dialogRef.afterClosed().subscribe(function (result) {
            });
        }
    };
    HomeComponent.prototype.askValue = function () {
        this.hmiService.askDeviceValues();
    };
    HomeComponent.prototype.askStatus = function () {
        this.hmiService.askDeviceStatus();
    };
    HomeComponent.prototype.isLoggedIn = function () {
        return (this.authService.getUser()) ? true : false;
    };
    HomeComponent.prototype.goTo = function (destination) {
        this.router.navigate([destination]); //, this.ID]);
    };
    HomeComponent.prototype.loadHmi = function () {
        var _this = this;
        var hmi = this.projectService.getHmi();
        if (hmi) {
            this.hmi = hmi;
        }
        if (this.hmi && this.hmi.views && this.hmi.views.length > 0) {
            if (this.hmi.layout && this.hmi.layout.start) {
                var startView = this.hmi.views.find(function (x) { return x.id === _this.hmi.layout.start; });
                if (startView) {
                    this.homeView = startView;
                }
            }
            else {
                this.homeView = this.hmi.views[0];
            }
            this.setBackground();
            // check sidenav
            this.showSidenav = null;
            if (this.hmi.layout) {
                var nvoid = __WEBPACK_IMPORTED_MODULE_9__models_hmi__["p" /* NaviModeType */][this.hmi.layout.navigation.mode];
                if (this.hmi.layout && nvoid !== __WEBPACK_IMPORTED_MODULE_9__models_hmi__["p" /* NaviModeType */].void) {
                    if (nvoid === __WEBPACK_IMPORTED_MODULE_9__models_hmi__["p" /* NaviModeType */].over) {
                        this.showSidenav = 'over';
                    }
                    else if (nvoid === __WEBPACK_IMPORTED_MODULE_9__models_hmi__["p" /* NaviModeType */].fix) {
                        this.showSidenav = 'side';
                        this.matsidenav.open();
                    }
                    else if (nvoid === __WEBPACK_IMPORTED_MODULE_9__models_hmi__["p" /* NaviModeType */].push) {
                        this.showSidenav = 'push';
                    }
                    this.sidenav.setLayout(this.hmi.layout);
                }
            }
            this.showHomeView = (this.homeView) ? true : false;
        }
        if (this.homeView && this.fuxaview) {
            this.fuxaview.loadHmi(this.homeView);
        }
        this.isLoading = false;
        this.securityEnabled = this.projectService.isSecurityEnabled();
    };
    HomeComponent.prototype.setBackground = function () {
        if (this.homeView && this.homeView.profile) {
            this.backgroudColor = this.homeView.profile.bkcolor;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewChild */])('sidenav'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__sidenav_sidenav_component__["a" /* SidenavComponent */])
    ], HomeComponent.prototype, "sidenav", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewChild */])('matsidenav'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_material__["F" /* MatSidenav */])
    ], HomeComponent.prototype, "matsidenav", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewChild */])('fuxaview'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4__fuxa_view_fuxa_view_component__["a" /* FuxaViewComponent */])
    ], HomeComponent.prototype, "fuxaview", void 0);
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__services_project_service__["a" /* ProjectService */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* ChangeDetectorRef */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["j" /* MatDialog */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_5__services_hmi_service__["a" /* HmiService */],
            __WEBPACK_IMPORTED_MODULE_7__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_8__gauges_gauges_component__["a" /* GaugesManager */]])
    ], HomeComponent);
    return HomeComponent;
}());

var DialogUserInfo = (function () {
    function DialogUserInfo(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    DialogUserInfo.prototype.onOkClick = function () {
        this.dialogRef.close(true);
    };
    DialogUserInfo = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'user-info',
            template: __webpack_require__("../../../../../src/app/home/userinfo.dialog.html"),
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["m" /* MatDialogRef */], Object])
    ], DialogUserInfo);
    return DialogUserInfo;
}());



/***/ }),

/***/ "../../../../../src/app/home/userinfo.dialog.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"display:block; text-align: center;padding-top: 20px; padding-bottom: 10px;\">\r\n\t<div style=\"display: block; margin: auto\">\r\n\t\t<mat-icon [style.color]=\"'rgb(59, 144, 255)'\">account_circle</mat-icon>\r\n\t</div>\r\n\t<div style=\"font-size: 18px;display: block;padding-top: 10px;padding-bottom: 10px;\">\r\n\t\t{{data.username}}\r\n\t</div>\r\n\t<div style=\"display: block; padding-bottom:20px; padding-top: 20px; border-top: 1px solid rgba(0,0,0,0.1);\">\r\n\t\t<button mat-raised-button [mat-dialog-close]=\"true\">{{'dlg.logout-btn' | translate}}</button>\r\n\t</div>\r\n\t<div style=\"display: block; font-size: 10px; padding-top: 10px; border-top: 1px solid rgba(0,0,0,0.1);\">\r\n\t\tFUXA developed by <span><b>frango</b>team</span>\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/iframe/iframe.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/iframe/iframe.component.html":
/***/ (function(module, exports) {

module.exports = "<iframe width=\"100%\" height=\"100%\" frameBorder=\"0\" [src]=\"urlSafe\"></iframe>\n"

/***/ }),

/***/ "../../../../../src/app/iframe/iframe.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IframeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
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



var IframeComponent = (function () {
    function IframeComponent(activeroute, sanitizer) {
        this.activeroute = activeroute;
        this.sanitizer = sanitizer;
    }
    IframeComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.link) {
            // input
            this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(this.link);
        }
        else {
            this.subscription = this.activeroute.params.subscribe(function (params) {
                // routing
                _this.link = params['url'];
                _this.urlSafe = _this.sanitizer.bypassSecurityTrustResourceUrl(_this.link);
            });
        }
    };
    IframeComponent.prototype.ngOnDestroy = function () {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    };
    IframeComponent.prototype.loadLink = function (link) {
        this.link = link;
        if (this.link) {
            this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(this.link);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", String)
    ], IframeComponent.prototype, "link", void 0);
    IframeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-iframe',
            template: __webpack_require__("../../../../../src/app/iframe/iframe.component.html"),
            styles: [__webpack_require__("../../../../../src/app/iframe/iframe.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */]])
    ], IframeComponent);
    return IframeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/lab/lab.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n.lab-body {\r\n    display: table;\r\n    margin: 0 auto;\r\n}\r\n.box_shadow {\r\n    box-shadow: 0px 2px 6px -1px #888888;\r\n    filter: \r\n    drop-shadow( 3px 3px 2px rgba(0,0,0,.7) );\r\n}\r\n\r\n.fab-btn {\r\n    position: absolute;\r\n    right: 10px;\r\n    bottom: 10px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/lab/lab.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"isLoading\" style=\"position:absolute;top:0px;left:0px;right:0px;bottom:0px;background-color:rgba(0,0,0,0.2); z-index: 99999;\">\r\n    <mat-progress-bar mode=\"indeterminate\" color=\"warn\"\r\n        style=\"position: absolute; top: 0px; left: 0px; right: 0px; z-index: 99999;\">\r\n    </mat-progress-bar>\r\n</div>\r\n<div [style.background-color]=\"backgroudColor\" style=\"height: 100%\">\r\n  <app-fuxa-view *ngIf=\"labView\" class=\"lab-body\" id=\"lab\" [view]=\"currentView\" [hmi]=\"hmi\" [gaugesManager]=\"gaugesManager\"></app-fuxa-view>\r\n  <div *ngIf=\"!labView\">\r\n      Loading...\r\n  </div>\r\n  <template #messagecontainer>\r\n  </template>    \r\n  <button mat-mini-fab color=\"warn\" class=\"fab-btn\" (click)=\"onTest()\">Test</button>\r\n  <app-tester #tester></app-tester>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/lab/lab.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LabComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_project_service__ = __webpack_require__("../../../../../src/app/_services/project.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_hmi__ = __webpack_require__("../../../../../src/app/_models/hmi.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__gauges_gauges_component__ = __webpack_require__("../../../../../src/app/gauges/gauges.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tester_tester_service__ = __webpack_require__("../../../../../src/app/tester/tester.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__tester_tester_component__ = __webpack_require__("../../../../../src/app/tester/tester.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LabComponent = (function () {
    function LabComponent(projectService, gaugesManager, changeDetector, testerService) {
        this.projectService = projectService;
        this.gaugesManager = gaugesManager;
        this.changeDetector = changeDetector;
        this.testerService = testerService;
        this.isLoading = true;
        this.currentView = new __WEBPACK_IMPORTED_MODULE_2__models_hmi__["s" /* View */]();
        this.hmi = new __WEBPACK_IMPORTED_MODULE_2__models_hmi__["l" /* Hmi */]();
        this.labView = null;
        this.backgroudColor = 'unset';
    }
    LabComponent.prototype.ngOnInit = function () {
    };
    LabComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        try {
            var hmi = this.projectService.getHmi();
            if (!hmi) {
                this.subscriptionLoad = this.projectService.onLoadHmi.subscribe(function (load) {
                    _this.loadHmi();
                }, function (error) {
                    console.log('Error loadHMI');
                });
            }
            else {
                this.loadHmi();
            }
            this.changeDetector.detectChanges();
        }
        catch (err) {
            console.log(err);
        }
    };
    LabComponent.prototype.ngOnDestroy = function () {
        try {
            if (this.subscriptionLoad) {
                this.subscriptionLoad.unsubscribe();
            }
        }
        catch (e) {
        }
    };
    LabComponent.prototype.onTest = function () {
        this.tester.setSignals(this.gaugesManager.getMappedGaugesSignals(true));
        this.testerService.toggle(true);
    };
    LabComponent.prototype.loadHmi = function () {
        this.hmi = this.projectService.getHmi();
        if (this.hmi && this.hmi.views && this.hmi.views.length > 0) {
            this.currentView = this.hmi.views[0];
            this.labView = this.hmi.views[0];
            var oldsel = localStorage.getItem("@frango.webeditor.currentview");
            if (oldsel) {
                for (var i = 0; i < this.hmi.views.length; i++) {
                    if (this.hmi.views[i].name === oldsel) {
                        this.currentView = this.hmi.views[i];
                        this.setBackground();
                        break;
                    }
                }
            }
        }
        this.isLoading = false;
    };
    LabComponent.prototype.setBackground = function () {
        if (this.currentView && this.currentView.profile) {
            this.backgroudColor = this.currentView.profile.bkcolor;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewChild */])('messagecontainer', { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewContainerRef */] }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewContainerRef */])
    ], LabComponent.prototype, "entry", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewChild */])('tester'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_5__tester_tester_component__["a" /* TesterComponent */])
    ], LabComponent.prototype, "tester", void 0);
    LabComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            moduleId: module.i,
            template: __webpack_require__("../../../../../src/app/lab/lab.component.html"),
            styles: [__webpack_require__("../../../../../src/app/lab/lab.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_project_service__["a" /* ProjectService */],
            __WEBPACK_IMPORTED_MODULE_3__gauges_gauges_component__["a" /* GaugesManager */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* ChangeDetectorRef */],
            __WEBPACK_IMPORTED_MODULE_4__tester_tester_service__["a" /* TesterService */]])
    ], LabComponent);
    return LabComponent;
}());



/***/ }),

/***/ "../../../../../src/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".error {\r\n    display: block;\r\n    font-size: 12px;\r\n}\r\n\r\n.message-error {\r\n    width: 100%;\r\n    /* background-color: red;; */\r\n    color:red;\r\n    padding-bottom: 20px;\r\n    font-size: 13px;\r\n  }\r\n\r\n  .show-password {\r\n    bottom: 2px;\r\n    right: 0px;\r\n    position: absolute;\r\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"width: 100%;position: relative;padding-bottom: 40px\">\n\t<form [formGroup]=\"loginForm\" novalidate>\n\t\t<h1 mat-dialog-title style=\"display:inline-block;margin-bottom: 14px !important;\">{{'dlg.login-title' | translate}}</h1>\n\t\t<div mat-dialog-content>\n\t\t\t<div class=\"my-form-field\" style=\"display: block;margin-bottom: 10px;margin-right: 5px;\">\n\t\t\t\t<span>{{'general.username' | translate}}</span>\n\t\t\t\t<input cdkFocusInitial autocomplete=\"off\" [type]=\"'text'\" [formControl]=\"username\" style=\"width:100%;\">\n\t\t\t\t<mat-error class=\"error\" *ngIf=\"errorEnabled && username.errors && username.errors.required\">{{'msg.login-username-required' | translate}}</mat-error>\n\t\t\t</div>\n\t\t\t<div class=\"my-form-field\" style=\"display: block;margin-bottom: 10px;margin-right: 5px;\">\n\t\t\t\t<span>{{'general.password' | translate}}</span>\n\t\t\t\t<input autocomplete=\"off\" [type]=\"showPassword ? 'text' : 'password'\" [formControl]=\"password\" style=\"width:100%;\">\n\t\t\t\t<mat-icon matSuffix (click)=\"showPassword = !showPassword\" class=\"show-password\">{{showPassword ? 'visibility' : 'visibility_off'}}</mat-icon>\n\t\t\t\t<mat-error class=\"error\" *ngIf=\"errorEnabled && password.errors && password.errors.required\">{{'msg.login-password-required' | translate}}</mat-error>\n\t\t\t</div>\n\t\t</div>\n\t\t<div mat-dialog-actions style=\"display: inline-block; position: absolute; bottom: 10px; right: 10px\">\n\t\t\t<button mat-raised-button [mat-dialog-close]=\"\">{{'dlg.cancel' | translate}}</button>\n\t\t\t<button mat-raised-button color=\"primary\" (click)=\"onOkClick()\" cdkFocusInitial>{{'dlg.ok' | translate}}</button>\n\t\t</div>\n\t\t<div *ngIf=\"messageError\" class=\"message-error\">\n\t\t\t{{messageError}}\n\t\t</div>\n\t\t<div *ngIf=\"submitLoading\">\n\t\t\t<mat-spinner style=\"margin: auto\" diameter=\"20\"></mat-spinner>\n\t\t</div>\t\t\n\t</form>\n</div>"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__("../../../../../src/app/_services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_project_service__ = __webpack_require__("../../../../../src/app/_services/project.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__ = __webpack_require__("../../../../@ngx-translate/core/@ngx-translate/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};






var LoginComponent = (function () {
    function LoginComponent(authService, projectService, translateService, dialogRef, data) {
        this.authService = authService;
        this.projectService = projectService;
        this.translateService = translateService;
        this.dialogRef = dialogRef;
        this.data = data;
        this.loading = false;
        this.showPassword = false;
        this.submitLoading = false;
        this.errorEnabled = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.username = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required]);
        this.password = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required]);
        this.loginForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormGroup */]({
            username: this.username,
            password: this.password
        });
    };
    LoginComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    LoginComponent.prototype.onOkClick = function () {
        this.errorEnabled = true;
        this.messageError = '';
        if (this.loginForm.valid) {
            this.signIn();
        }
    };
    LoginComponent.prototype.signIn = function () {
        var _this = this;
        if (this.loginForm.valid) {
            this.submitLoading = true;
            this.authService.signIn(this.loginForm.value.username, this.loginForm.value.password).subscribe(function (result) {
                // 		this.router.navigate([this.returnUrl]);
                _this.submitLoading = false;
                _this.dialogRef.close(_this.data.user);
                _this.projectService.reload();
            }, function (error) {
                _this.submitLoading = false;
                _this.translateService.get('msg.signin-failed').subscribe(function (txt) { return _this.messageError = txt; });
            });
        }
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/login/login.component.css")]
        }),
        __param(4, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_2__angular_material__["b" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_4__services_project_service__["a" /* ProjectService */],
            __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["m" /* MatDialogRef */], Object])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/material.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaterialModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_cdk_table__ = __webpack_require__("../../../cdk/esm5/table.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MaterialModule = (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_cdk_table__["m" /* CdkTableModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MatAutocompleteModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MatButtonToggleModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["f" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["h" /* MatChipsModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["M" /* MatStepperModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["i" /* MatDatepickerModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["l" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["n" /* MatExpansionModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["p" /* MatGridListModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["q" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["s" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["t" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["u" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["w" /* MatNativeDateModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["x" /* MatPaginatorModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["y" /* MatProgressBarModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["z" /* MatProgressSpinnerModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["A" /* MatRadioModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["B" /* MatRippleModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["D" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["G" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["I" /* MatSliderModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["H" /* MatSlideToggleModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["J" /* MatSnackBarModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["L" /* MatSortModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["P" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["Q" /* MatTabsModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["R" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["S" /* MatTooltipModule */],
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_cdk_table__["m" /* CdkTableModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MatAutocompleteModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MatButtonToggleModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["f" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["h" /* MatChipsModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["M" /* MatStepperModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["i" /* MatDatepickerModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["l" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["n" /* MatExpansionModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["p" /* MatGridListModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["q" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["s" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["t" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["u" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["w" /* MatNativeDateModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["x" /* MatPaginatorModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["y" /* MatProgressBarModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["z" /* MatProgressSpinnerModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["A" /* MatRadioModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["B" /* MatRippleModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["D" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["G" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["I" /* MatSliderModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["H" /* MatSlideToggleModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["J" /* MatSnackBarModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["L" /* MatSortModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["P" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["Q" /* MatTabsModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["R" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["S" /* MatTooltipModule */],
            ]
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "../../../../../src/app/sidenav/sidenav.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, " ", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/sidenav/sidenav.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"sidenav-menu\" *ngIf=\"showSidenav\" style=\"height: 100%\" [ngClass]=\"'sidenav-menu-' + layout.navigation.type\">\r\n    <mat-list >\r\n        <mat-list-item style=\"height: 35px; font-weight: bold; padding-left: 10px;padding-bottom: 10px;margin-bottom: 10px\">\r\n            {{'sidenav.title' | translate}}\r\n        </mat-list-item>\r\n        <mat-list-item *ngFor=\"let item of layout.navigation.items; let i = index\" [ngClass]=\"'menu-item-' + layout.navigation.type\">\r\n            <button type=\"button\" mat-button class=\"sidenav-btn\" (click)=\"onGoTo(item)\" [ngSwitch]=\"layout.navigation.type\">\r\n                <div *ngSwitchCase=\"'icon'\" class=\"menu-item-content-icon\">\r\n                    <mat-icon>{{item.icon}}</mat-icon>\r\n                </div>\r\n                <div *ngSwitchCase=\"'text'\" class=\"menu-item-content-text\">\r\n                    <span>{{item.text}}</span>\r\n                </div>\r\n                <div *ngSwitchCase=\"'block'\" class=\"menu-item-content-block\">\r\n                    <mat-icon style=\"display: block;\">{{item.icon}}</mat-icon>\r\n                    <span>{{item.text}}</span>\r\n                </div>\r\n                <div *ngSwitchCase=\"'inline'\" class=\"menu-item-content-inline\">\r\n                    <mat-icon style=\"display: inline-block\">{{item.icon}}</mat-icon>\r\n                    <span style=\"display: inline-block\">{{item.text}}</span>\r\n                </div>\r\n            </button>\r\n        </mat-list-item>\r\n    </mat-list>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/sidenav/sidenav.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidenavComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SidenavComponent = (function () {
    function SidenavComponent(router, changeDetector) {
        this.router = router;
        this.changeDetector = changeDetector;
        this.goToPage = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.goToLink = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.layout = null;
        this.showSidenav = false;
    }
    SidenavComponent.prototype.ngAfterViewInit = function () {
    };
    SidenavComponent.prototype.ngAfterContentChecked = function () {
        this.showSidenav = (this.layout) ? true : false;
        this.changeDetector.detectChanges();
    };
    SidenavComponent.prototype.onGoTo = function (item) {
        if (item.view) {
            this.goToPage.emit(item.view);
        }
        else if (item.link) {
            this.goToLink.emit(item.link);
        }
    };
    SidenavComponent.prototype.setLayout = function (ly) {
        this.layout = ly;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_material__["F" /* MatSidenav */])
    ], SidenavComponent.prototype, "sidenav", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */])
    ], SidenavComponent.prototype, "goToPage", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */])
    ], SidenavComponent.prototype, "goToLink", void 0);
    SidenavComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-sidenav',
            template: __webpack_require__("../../../../../src/app/sidenav/sidenav.component.html"),
            styles: [__webpack_require__("../../../../../src/app/sidenav/sidenav.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* ChangeDetectorRef */]])
    ], SidenavComponent);
    return SidenavComponent;
}());



/***/ }),

/***/ "../../../../../src/app/tester/tester.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n.tester-panel {\r\n  width: 300px;\r\n  height: 563px;\r\n  z-index: 99999 !important;\r\n  position: absolute;\r\n  right: 10px;\r\n  top: 50px;\r\n  background-color: rgb(240, 240, 240);\r\n  /* background-color: rgb(250,250,250); */\r\n  box-shadow: 0 2px 6px 0 rgba(0,0,0,0.2),0 2px 6px 0 rgba(0,0,0,0.18);/*1px 2px 5px 1px rgba(0,0,0,.26);*/\r\n  border: 0px !important;\r\n}\r\n\r\n.tester-header {\r\n  height: 30px;\r\n  background-color: rgb(230, 230, 230);\r\n  padding-left: 10px;\r\n  cursor: move;\r\n  line-height: 30px;\r\n}\r\n\r\n.tester-close {\r\n  font-size: 28px;\r\n  /* float: right; */\r\n  cursor: pointer;\r\n  /* padding-right: 5px; */\r\n  right: 5px;\r\n    position: absolute;\r\n    top: 0px;\r\n}\r\n\r\n.tester-body {\r\n  overflow-y: auto;\r\n  height: 350px;\r\n}\r\n\r\n.tester-output {\r\n  /* position: absolute; */\r\n  /* bottom: 0px; */\r\n  /* left: 0px; */\r\n  /* right: 0px; */\r\n  overflow-y: auto;\r\n  height: 180px;\r\n  border-top: 1px solid gray;\r\n  padding: 2px 2px 0px 2px;\r\n}\r\n\r\n.output-item {\r\n  display: block;\r\n  font-size: 12px;\r\n}\r\n\r\n.svg-property {\r\n  color: rgba(0,0,0,0.75);\r\n}\r\n\r\n.svg-property span {\r\n  display: block;\r\n  font-size: 12px;\r\n  margin: 0px 5px 0px 10px;\r\n}\r\n\r\n.svg-property input {\r\n  width: 50%;\r\n  display: inline-block;\r\n  margin: 0px 10px 12px 10px;\r\n  border: unset;\r\n  background-color: inherit;\r\n  color: inherit;\r\n  /* border: 1px solid rgba(255,255,255,0.75); */\r\n  background-color: rgb(230, 230, 230);\r\n\r\n  /* border-bottom: 1px solid rgba(255,255,255,0.75); */\r\n}\r\n\r\n.svg-property button {\r\n  /* float: right; */\r\n  color: inherit;\r\n  border: none;\r\n  max-width: 50px;\r\n  min-width: 50px;\r\n  max-height: 20px;\r\n  min-height: 20px;\r\n  /* background-color: rgb(77, 74, 74); */\r\n  font-weight: bold;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/tester/tester.component.html":
/***/ (function(module, exports) {

module.exports = "<div draggable  [draggableHeight]=\"30\" class=\"tester-panel\" *ngIf=\"show\">\r\n  <style>\r\n    pre {\r\n      white-space: pre-line;\r\n    }\r\n  </style>\r\n  <div name=\"dlgTesterForm\">\r\n    <div class=\"tester-header\">\r\n      <div class=\"tester-title\">\r\n        {{'tester.title' | translate}}\r\n      </div>\r\n      <div class=\"tester-close\" (click)=\"close()\">\r\n        &times;\r\n      </div>\r\n    </div>\r\n    <div class=\"tester-body\">\r\n      <div class=\"_svg-property\" mat-dialog-actions>\r\n        <!-- <button mat-button color=\"warn\" type=\"button\" class=\"\" (click)=\"setDemo(true)\">\r\n          Start\r\n        </button>\r\n        <button mat-button color=\"warn\" type=\"button\" class=\"\" (click)=\"setDemo(false)\">\r\n          End\r\n        </button> -->\r\n      </div>\r\n      <br>\r\n      <div *ngFor=\"let item of items\">\r\n        <div class=\"svg-property\">\r\n          <span>{{item.source}} - {{item.name}} :</span>\r\n          <input id=\"item.name\" [(ngModel)]=\"item.value\" type=\"text\" class=\"no-spinners\" />\r\n          <button type=\"button\" class=\"\" (click)=\"setSignal(item)\">\r\n            >>\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"tester-output\">\r\n      <span *ngFor=\"let item of output; index as i\" class=\"output-item\">\r\n        {{item}}\r\n      </span>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/tester/tester.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TesterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__gauges_gauges_component__ = __webpack_require__("../../../../../src/app/gauges/gauges.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_hmi_service__ = __webpack_require__("../../../../../src/app/_services/hmi.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tester_tester_service__ = __webpack_require__("../../../../../src/app/tester/tester.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TesterComponent = (function () {
    // items: Map<string, GaugeSettings> = new Map<string, GaugeSettings>();
    function TesterComponent(hmiService, gaugesManager, testerService) {
        this.hmiService = hmiService;
        this.gaugesManager = gaugesManager;
        this.testerService = testerService;
        this.show = false;
        this.items = [];
        this.output = [];
        this.demoSwitch = true;
    }
    TesterComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.testerService.change.subscribe(function (isOpen) {
            _this.show = isOpen;
        });
        this.gaugesManager.onevent.subscribe(function (event) {
            if (event.dbg) {
                _this.addOutput(event.dbg);
            }
        });
    };
    TesterComponent.prototype.ngOnDestroy = function () {
        this.stopDemo();
    };
    TesterComponent.prototype.setSignal = function (sig) {
        this.hmiService.setSignalValue(sig);
        this.addOutput('set ' + sig.source + ' - ' + sig.name + ' = ' + sig.value);
    };
    TesterComponent.prototype.setSignals = function (items) {
        this.items = items;
    };
    TesterComponent.prototype.setDemo = function (flag) {
        if (flag) {
            // this.gaugesManager.startDemo();
        }
        else {
            // this.gaugesManager.stopDemo();
        }
    };
    TesterComponent.prototype.addOutput = function (item) {
        this.output.unshift(item);
    };
    TesterComponent.prototype.close = function () {
        this.testerService.toggle(false);
    };
    TesterComponent.prototype.startDemo = function () {
        var _this = this;
        this.stopDemo();
        var timer = __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["a" /* Observable */].timer(2000, 1500);
        this.subscription = timer.subscribe(function (t) {
            _this.demoValue();
        });
    };
    TesterComponent.prototype.stopDemo = function () {
        try {
            if (this.subscription) {
                this.subscription.unsubscribe();
            }
        }
        catch (e) {
        }
    };
    TesterComponent.prototype.demoValue = function () {
    };
    TesterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-tester',
            template: __webpack_require__("../../../../../src/app/tester/tester.component.html"),
            styles: [__webpack_require__("../../../../../src/app/tester/tester.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_hmi_service__["a" /* HmiService */], __WEBPACK_IMPORTED_MODULE_1__gauges_gauges_component__["a" /* GaugesManager */],
            __WEBPACK_IMPORTED_MODULE_4__tester_tester_service__["a" /* TesterService */]])
    ], TesterComponent);
    return TesterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/tester/tester.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TesterService; });
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

var TesterService = (function () {
    function TesterService() {
        // isOpen = false;
        this.change = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
    }
    TesterService.prototype.toggle = function (flag) {
        //   this.isOpen = !this.isOpen;
        this.change.emit(flag); //this.isOpen);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */])
    ], TesterService.prototype, "change", void 0);
    TesterService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])()
    ], TesterService);
    return TesterService;
}());



/***/ }),

/***/ "../../../../../src/app/users/user.dialog.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <h1 mat-dialog-title style=\"display:inline-block\" mat-dialog-draggable>{{'dlg.userproperty-title' | translate}}</h1>\r\n    <mat-icon (click)=\"onNoClick()\" style=\"float:right;margin-right:-10px;margin-top:-10px;cursor:pointer;color:gray;\">clear</mat-icon>\r\n    <div mat-dialog-content *ngIf=\"data.editmode < 0\">\r\n\t\t{{'msg.user-remove' | translate}} '{{data.user.username}}' ?\r\n\t</div>\r\n    <div mat-dialog-content *ngIf=\"data.editmode >= 0\">\r\n        <div class=\"my-form-field\" style=\"display: block;margin-bottom: 10px;\">\r\n            <span>{{'general.username' | translate}}</span>\r\n            <input [(ngModel)]=\"data.user.username\" type=\"text\" width=\"100%\" [readonly]=\"data.editmode == 0\">\r\n        </div>\r\n        <div class=\"my-form-field\" style=\"display: block;margin-bottom: 10px;\">\r\n            <span>{{'general.password' | translate}}</span>\r\n            <input [(ngModel)]=\"data.user.password\" type=\"text\" width=\"100%\" *ngIf=\"data.editmode >= 1\">\r\n            <input [(ngModel)]=\"data.user.password\" type=\"text\" width=\"100%\" placeholder=\"******\" *ngIf=\"data.editmode == 0\">\r\n        </div>\r\n        <div class=\"my-form-field\" style=\"display: block;margin-bottom: 10px;\">\r\n            <span>{{'dlg.userproperty-groups' | translate}}</span>\r\n            <sel-options #seloptions [selected]=\"selectedGroups\" [disabled]=\"isAdmin()\" [options]=\"groups\"></sel-options>\r\n        </div>        \r\n    </div>\r\n    <div mat-dialog-actions style=\"float:right; margin-bottom:0px;padding-bottom:0px\">\r\n        <button mat-raised-button (click)=\"onNoClick()\">{{'dlg.cancel' | translate}}</button>\r\n        <button mat-raised-button [disabled]=\"!isValid(data.user.username)\" color=\"primary\" (click)=\"onOkClick()\" cdkFocusInitial>{{'dlg.ok' | translate}}</button>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/users/users.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".header-panel {\r\n    /* z-index: 9999 !important; */\r\n    position: fixed;\r\n    top: 0px;\r\n    left: 0px;\r\n    background-color: rgba(33,33,33,1);\r\n    /* background-color: rgba(33,33,33,0.92); */\r\n    color: rgba(255,255,255,1);\r\n    height: 40px;\r\n    width: 100%;\r\n}\r\n\r\n.work-panel {\r\n    position: absolute;\r\n    top: 40px;\r\n    left: 0px;\r\n    right: 0px;\r\n    bottom: 0px;\r\n}\r\n\r\n.mat-table {\r\n    overflow: auto;\r\n    /* margin: 5px; */\r\n    /* max-height: 500px; */\r\n}\r\n  \r\n.mat-header-cell.mat-sort-header-sorted {\r\n    color: black;\r\n}\r\n\r\n.mat-header-row {\r\n    top: 0;\r\n    position: -webkit-sticky;\r\n    position: sticky;\r\n    z-index: 1;\r\n    background-color: rgba(0,0,0,0.7);\r\n    color: white;\r\n}\r\n.mat-header-cell {\r\n    color: white;\r\n    font-size: 14px;\r\n}\r\n\r\n.mat-column-select {\r\n    overflow: visible;\r\n    -ms-flex: 0 0 100px;\r\n        flex: 0 0 100px;\r\n}\r\n\r\n.mat-column-username {\r\n    -ms-flex: 0 0 400px;\r\n        flex: 0 0 400px;\r\n}\r\n\r\n\r\n.mat-column-groups {\r\n    -ms-flex: 0 0 860px;\r\n        flex: 0 0 860px;\r\n}\r\n\r\n.mat-column-remove {\r\n    -ms-flex: 0 0 160px;\r\n        flex: 0 0 160px;\r\n}\r\n\r\n.selectidthClass{\r\n    -ms-flex: 0 0 50px;\r\n        flex: 0 0 50px;\r\n }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/users/users.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"header-panel\">\n</div>\n<diV class=\"work-panel\">\n\t<mat-table #table [dataSource]=\"dataSource\" matSort>\n\t\t<!-- Edit Column -->\n\t\t<ng-container matColumnDef=\"select\">\n\t\t\t<mat-header-cell *matHeaderCellDef [ngClass]=\"'selectidthClass'\">\n\t\t\t\t<button mat-icon-button (click)=\"onAddUser()\" class=\"remove\">\n\t\t\t\t\t<mat-icon>add</mat-icon>\n\t\t\t\t</button>\n\t\t\t</mat-header-cell>\n\t\t\t<mat-cell *matCellDef=\"let element\" [ngClass]=\"'selectidthClass'\">\n\t\t\t\t<button mat-icon-button (click)=\"onEditUser(element)\" class=\"remove\">\n\t\t\t\t\t<mat-icon>edit</mat-icon>\n\t\t\t\t</button>\n\t\t\t</mat-cell>\n\t\t</ng-container>\n\n\t\t<!-- Username Column -->\n\t\t<ng-container matColumnDef=\"username\">\n\t\t\t<mat-header-cell *matHeaderCellDef mat-sort-header> {{'users.list-name' | translate}} </mat-header-cell>\n\t\t\t<mat-cell *matCellDef=\"let element\"> {{element.username}} </mat-cell>\n\t\t</ng-container>\n\n\t\t<!-- Access Column -->\n\t\t<ng-container matColumnDef=\"groups\">\n\t\t\t<mat-header-cell *matHeaderCellDef mat-sort-header> {{'users.list-groups' | translate}} </mat-header-cell>\n\t\t\t<mat-cell *matCellDef=\"let element\"> {{groupValueToLabel(element.groups)}} </mat-cell>\n\t\t</ng-container>\n\n\t\t<!-- Button remove Column -->\n\t\t<ng-container matColumnDef=\"remove\">\n\t\t\t<mat-header-cell *matHeaderCellDef> </mat-header-cell>\n\t\t\t<mat-cell *matCellDef=\"let element\">\n\t\t\t\t<button mat-icon-button (click)=\"$event.stopPropagation();onRemoveUser(element)\" class=\"remove\" *ngIf=\"!isAdmin(element)\">\n\t\t\t\t\t<mat-icon>clear</mat-icon>\n\t\t\t\t</button>\n\t\t\t</mat-cell>\n\t\t</ng-container>\n\n\t\t<mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n\t\t<mat-row *matRowDef=\"let row; columns: displayedColumns;\" class=\"my-mat-row\"></mat-row>\n\t</mat-table>\n</diV>\n\n<button mat-fab color=\"primary\" (click)=\"onAddUser()\"\n    style=\"position: absolute; right: 20px; bottom: 30px; z-index: 9999;\">\n    <mat-icon class=\"\">add</mat-icon>\n</button>"

/***/ }),

/***/ "../../../../../src/app/users/users.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return UsersComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DialogUser; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__gui_helpers_sel_options_sel_options_component__ = __webpack_require__("../../../../../src/app/gui-helpers/sel-options/sel-options.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service__ = __webpack_require__("../../../../../src/app/_services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_user__ = __webpack_require__("../../../../../src/app/_models/user.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};






var UsersComponent = (function () {
    function UsersComponent(dialog, userService) {
        this.dialog = dialog;
        this.userService = userService;
        this.displayedColumns = ['select', 'username', 'groups', 'remove'];
        this.dataSource = new __WEBPACK_IMPORTED_MODULE_1__angular_material__["O" /* MatTableDataSource */]([]);
    }
    UsersComponent.prototype.ngOnInit = function () {
        this.loadUsers();
    };
    UsersComponent.prototype.ngAfterViewInit = function () {
        this.dataSource.sort = this.sort;
    };
    UsersComponent.prototype.onAddUser = function () {
        var user = new __WEBPACK_IMPORTED_MODULE_4__models_user__["a" /* User */]();
        this.editUser(user, 1);
    };
    UsersComponent.prototype.onEditUser = function (user) {
        this.editUser(user, 0);
    };
    UsersComponent.prototype.onRemoveUser = function (user) {
        this.editUser(user, -1);
    };
    UsersComponent.prototype.isAdmin = function (user) {
        if (user && user.username === 'admin') {
            return true;
        }
        else {
            return false;
        }
    };
    UsersComponent.prototype.groupValueToLabel = function (grp) {
        return __WEBPACK_IMPORTED_MODULE_4__models_user__["b" /* UserGroups */].GroupToLabel(grp);
    };
    UsersComponent.prototype.loadUsers = function () {
        var _this = this;
        this.users = [];
        this.userService.getUsers(null).subscribe(function (result) {
            Object.values(result).forEach(function (u) {
                _this.users.push(u);
            });
            _this.bindToTable(_this.users);
        }, function (err) {
            console.log('get Users err: ' + err);
        });
    };
    UsersComponent.prototype.editUser = function (user, toAdd) {
        var _this = this;
        var muser = JSON.parse(JSON.stringify(user));
        muser.password = '';
        var dialogRef = this.dialog.open(DialogUser, {
            // minWidth: '700px',
            // minHeight: '700px',
            // panelClass: 'dialog-property',
            data: { user: muser, editmode: toAdd, users: this.users.map(function (u) { return u.username; }) },
            position: { top: '80px' }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                if (toAdd < 0) {
                    _this.userService.removeUser(result).subscribe(function (result) {
                        _this.users = _this.users.filter(function (el) { return el.username !== muser.username; });
                        _this.bindToTable(_this.users);
                    }, function (err) {
                    });
                }
                else {
                    _this.userService.setUser(result).subscribe(function (result) {
                        if (toAdd < 0) {
                            _this.users.push(muser);
                        }
                        else if (toAdd > 0) {
                            _this.users.push(muser);
                        }
                        else {
                            user.groups = muser.groups;
                            if (muser.password) {
                                user.password = muser.password;
                            }
                        }
                        _this.bindToTable(_this.users);
                    }, function (err) {
                    });
                }
            }
        }, function (err) {
        });
    };
    UsersComponent.prototype.bindToTable = function (users) {
        this.dataSource.data = users;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["N" /* MatTable */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_material__["N" /* MatTable */])
    ], UsersComponent.prototype, "table", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["K" /* MatSort */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_material__["K" /* MatSort */])
    ], UsersComponent.prototype, "sort", void 0);
    UsersComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-users',
            template: __webpack_require__("../../../../../src/app/users/users.component.html"),
            styles: [__webpack_require__("../../../../../src/app/users/users.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["j" /* MatDialog */],
            __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */]])
    ], UsersComponent);
    return UsersComponent;
}());

var DialogUser = (function () {
    function DialogUser(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.selectedGroups = [];
        this.groups = __WEBPACK_IMPORTED_MODULE_4__models_user__["b" /* UserGroups */].Groups;
        this.selectedGroups = __WEBPACK_IMPORTED_MODULE_4__models_user__["b" /* UserGroups */].ValueToGroups(this.data.user.groups);
    }
    DialogUser.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    DialogUser.prototype.onOkClick = function () {
        this.data.user.groups = __WEBPACK_IMPORTED_MODULE_4__models_user__["b" /* UserGroups */].GroupsToValue(this.seloptions.selected);
        this.dialogRef.close(this.data.user);
    };
    DialogUser.prototype.isValid = function (name) {
        if (this.data.editmode <= 0) {
            return true;
        }
        else {
            return (this.data.users.find(function (n) { return n === name; })) ? false : true;
        }
    };
    DialogUser.prototype.isAdmin = function () {
        if (this.data.user && this.data.user.username === 'admin') {
            return true;
        }
        else {
            return false;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_2__gui_helpers_sel_options_sel_options_component__["a" /* SelOptionsComponent */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__gui_helpers_sel_options_sel_options_component__["a" /* SelOptionsComponent */])
    ], DialogUser.prototype, "seloptions", void 0);
    DialogUser = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'dialog-user',
            template: __webpack_require__("../../../../../src/app/users/user.dialog.html"),
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["m" /* MatDialogRef */], Object])
    ], DialogUser);
    return DialogUser;
}());



/***/ }),

/***/ "../../../../../src/app/view/view.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".view-body {\r\n    display: table;\r\n    margin: 0 auto;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/view/view.component.html":
/***/ (function(module, exports) {

module.exports = "<app-fuxa-view #fuxaview class=\"view-body\" id=\"view\" [view]=\"startView\" [hmi]=\"hmi\" [gaugesManager]=\"gaugesManager\"></app-fuxa-view>\n"

/***/ }),

/***/ "../../../../../src/app/view/view.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_project_service__ = __webpack_require__("../../../../../src/app/_services/project.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_hmi__ = __webpack_require__("../../../../../src/app/_models/hmi.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__gauges_gauges_component__ = __webpack_require__("../../../../../src/app/gauges/gauges.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__fuxa_view_fuxa_view_component__ = __webpack_require__("../../../../../src/app/fuxa-view/fuxa-view.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ViewComponent = (function () {
    function ViewComponent(projectService, route, changeDetector, gaugesManager) {
        this.projectService = projectService;
        this.route = route;
        this.changeDetector = changeDetector;
        this.gaugesManager = gaugesManager;
        this.startView = new __WEBPACK_IMPORTED_MODULE_3__models_hmi__["s" /* View */]();
        this.hmi = new __WEBPACK_IMPORTED_MODULE_3__models_hmi__["l" /* Hmi */]();
    }
    ViewComponent.prototype.ngOnInit = function () {
        this.viewName = this.route.snapshot.queryParamMap.get('name');
    };
    ViewComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        try {
            var hmi = this.projectService.getHmi();
            if (hmi) {
                this.loadHmi();
            }
            this.subscriptionLoad = this.projectService.onLoadHmi.subscribe(function (load) {
                _this.loadHmi();
            }, function (error) {
                console.log('Error loadHMI');
            });
            this.changeDetector.detectChanges();
        }
        catch (err) {
            console.log(err);
        }
    };
    ViewComponent.prototype.ngOnDestroy = function () {
        try {
            if (this.subscriptionLoad) {
                this.subscriptionLoad.unsubscribe();
            }
        }
        catch (e) {
        }
    };
    ViewComponent.prototype.loadHmi = function () {
        var _this = this;
        var hmi = this.projectService.getHmi();
        if (hmi) {
            this.hmi = hmi;
        }
        if (this.hmi && this.hmi.views && this.hmi.views.length > 0) {
            this.startView = this.hmi.views.find(function (x) { return x.name === _this.viewName; });
            this.setBackground();
            if (this.startView && this.fuxaview) {
                this.fuxaview.loadHmi(this.startView);
            }
        }
    };
    ViewComponent.prototype.setBackground = function () {
        if (this.startView && this.startView.profile) {
            document.getElementById("main-container").style.backgroundColor = this.startView.profile.bkcolor;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewChild */])('fuxaview'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_5__fuxa_view_fuxa_view_component__["a" /* FuxaViewComponent */])
    ], ViewComponent.prototype, "fuxaview", void 0);
    ViewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-view',
            template: __webpack_require__("../../../../../src/app/view/view.component.html"),
            styles: [__webpack_require__("../../../../../src/app/view/view.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_project_service__["a" /* ProjectService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* ChangeDetectorRef */],
            __WEBPACK_IMPORTED_MODULE_4__gauges_gauges_component__["a" /* GaugesManager */]])
    ], ViewComponent);
    return ViewComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    version: __webpack_require__("../../../../../package.json").version,
    production: false,
    apiEndpoint: null,
    apiPort: 1881,
    serverEnabled: false,
    type: 'demo'
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ }),

/***/ 1:
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map