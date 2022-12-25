(self["webpackChunkgravity_global_recruitment_task"] = self["webpackChunkgravity_global_recruitment_task"] || []).push([["all"],{

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _img_sean_o_KMn4VEeEPR8_unsplash_1_s6zmfh_ar_1_1_c_fill_g_auto_c_scale_w_450_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../img/sean-o-KMn4VEeEPR8-unsplash_1_s6zmfh_ar_1_1,c_fill,g_auto__c_scale,w_450.jpg */ "./src/img/sean-o-KMn4VEeEPR8-unsplash_1_s6zmfh_ar_1_1,c_fill,g_auto__c_scale,w_450.jpg");
/* harmony import */ var _img_sean_o_KMn4VEeEPR8_unsplash_1_s6zmfh_ar_1_1_c_fill_g_auto_c_scale_w_450_jpg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_img_sean_o_KMn4VEeEPR8_unsplash_1_s6zmfh_ar_1_1_c_fill_g_auto_c_scale_w_450_jpg__WEBPACK_IMPORTED_MODULE_0__);

const modalClose = document.querySelector('#modal-nav-close');
const moduleButtons = document.querySelectorAll('.module-button');
const modalOverlay = document.querySelector('#modal-overlay');
const clickedCounterElement = document.querySelector('#clicked-counter');
let clickedCounter = 0;
modalClose.addEventListener('click', () => {
  modalOverlay.classList.remove('is-active');
  modalOverlay.classList.add('is-hidden');
});
modalOverlay.addEventListener('click', () => {
  modalOverlay.classList.remove('is-active');
  modalOverlay.classList.add('is-hidden');
});
moduleButtons.forEach(button => {
  button.addEventListener('click', () => {
    clickedCounter++;
    clickedCounterElement.innerHTML = clickedCounter;
    modalOverlay.classList.remove('is-hidden');
    modalOverlay.classList.add('is-active');
  });
});
console.log('Hello from main.js');

/***/ }),

/***/ "./src/img/sean-o-KMn4VEeEPR8-unsplash_1_s6zmfh_ar_1_1,c_fill,g_auto__c_scale,w_450.jpg":
/*!**********************************************************************************************!*\
  !*** ./src/img/sean-o-KMn4VEeEPR8-unsplash_1_s6zmfh_ar_1_1,c_fill,g_auto__c_scale,w_450.jpg ***!
  \**********************************************************************************************/
/***/ ((module) => {

module.exports = "./images/sean-o-KMn4VEeEPR8-unsplash_1_s6zmfh_ar_1_1,c_fill,g_auto__c_scale,w_450.jpg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/js/main.js"));
/******/ }
]);
//# sourceMappingURL=all.js.map