(self["webpackChunkgravity_global_recruitment_task"] = self["webpackChunkgravity_global_recruitment_task"] || []).push([["all"],{

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ (() => {

//--------------------//
// Global Variables   //
//--------------------//
const modules = document.querySelectorAll('.module');
const modalClose = document.querySelector('#modal-nav-close');
const moduleButtons = document.querySelectorAll('.module-button');
const modalOverlay = document.querySelector('#modal-overlay');
const clickedCounterElement = document.querySelector('#clicked-counter');
let clickedCounter = null;

//--------------------//
//      Functions     //
//--------------------//

// creates item in session storage for each module
const createModuleSession = () => {
  let i = 0;
  modules.forEach(module => {
    let moduleName = `module${i++}`;
    // if module item is not not in session storage yer, we set it to 0
    if (sessionStorage.getItem(moduleName) == null) sessionStorage.setItem(moduleName, 0);
  });
};

// ? we may need to find another way to name module if we'd like to use CMS, for example by setting before button id rather than looping from 0 to X.
// Here we set new value for each module click and load it from into modal body
// also we show modal
const updateModuleSession = () => {
  let i = 0;
  moduleButtons.forEach(moduleButton => {
    let moduleName = `module${i++}`;
    moduleButton.addEventListener('click', () => {
      clickedCounter = parseInt(sessionStorage.getItem(moduleName));
      sessionStorage.setItem(moduleName, clickedCounter + 1);
      clickedCounterElement.innerHTML = sessionStorage.getItem(moduleName);
      modalOverlay.classList.remove('is-hidden');
      modalOverlay.classList.add('is-active');
      console.log(sessionStorage.getItem(moduleName));
    });
  });
};

// make evenents to close modal
modalClose.addEventListener('click', () => {
  modalOverlay.classList.remove('is-active');
  modalOverlay.classList.add('is-hidden');
});
modalOverlay.addEventListener('click', () => {
  modalOverlay.classList.remove('is-active');
  modalOverlay.classList.add('is-hidden');
});

//--------------------//
// Main Function Call //
//-------------------- //

createModuleSession();
updateModuleSession();
console.log('Hello from main.js');

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/js/main.js"));
/******/ }
]);
//# sourceMappingURL=all.js.map