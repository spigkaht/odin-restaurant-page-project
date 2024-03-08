/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createMenuPage: () => (/* binding */ createMenuPage)
/* harmony export */ });
const createMenuPage = () => {
  const divContent = document.querySelector('#content');
  
  const divTitle = document.createElement('div');
  const divPara1 = document.createElement('div');
  const divPara2 = document.createElement('div');
  const divPara3 = document.createElement('div');

  divTitle.className = 'title';
  divPara1.className = 'para';
  divPara2.className = 'para';
  divPara3.className = 'para';

  divTitle.textContent = "Sausage Fest";
  divPara1.textContent = "Really good sausage";
  divPara2.textContent = "We pride in sourcing local ingredients";
  divPara3.textContent = "Even your mother would love our sausage!";

  divContent.appendChild(divTitle);
  divContent.appendChild(divPara1);
  divContent.appendChild(divPara2);
  divContent.appendChild(divPara3);
};



/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7VUFBQTtVQUNBOzs7OztXQ0RBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUUwQiIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlLXByb2plY3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2UtcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2UtcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlLXByb2plY3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS1wcm9qZWN0Ly4vc3JjL21lbnUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJjb25zdCBjcmVhdGVNZW51UGFnZSA9ICgpID0+IHtcbiAgY29uc3QgZGl2Q29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XG4gIFxuICBjb25zdCBkaXZUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBkaXZQYXJhMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBkaXZQYXJhMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBkaXZQYXJhMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gIGRpdlRpdGxlLmNsYXNzTmFtZSA9ICd0aXRsZSc7XG4gIGRpdlBhcmExLmNsYXNzTmFtZSA9ICdwYXJhJztcbiAgZGl2UGFyYTIuY2xhc3NOYW1lID0gJ3BhcmEnO1xuICBkaXZQYXJhMy5jbGFzc05hbWUgPSAncGFyYSc7XG5cbiAgZGl2VGl0bGUudGV4dENvbnRlbnQgPSBcIlNhdXNhZ2UgRmVzdFwiO1xuICBkaXZQYXJhMS50ZXh0Q29udGVudCA9IFwiUmVhbGx5IGdvb2Qgc2F1c2FnZVwiO1xuICBkaXZQYXJhMi50ZXh0Q29udGVudCA9IFwiV2UgcHJpZGUgaW4gc291cmNpbmcgbG9jYWwgaW5ncmVkaWVudHNcIjtcbiAgZGl2UGFyYTMudGV4dENvbnRlbnQgPSBcIkV2ZW4geW91ciBtb3RoZXIgd291bGQgbG92ZSBvdXIgc2F1c2FnZSFcIjtcblxuICBkaXZDb250ZW50LmFwcGVuZENoaWxkKGRpdlRpdGxlKTtcbiAgZGl2Q29udGVudC5hcHBlbmRDaGlsZChkaXZQYXJhMSk7XG4gIGRpdkNvbnRlbnQuYXBwZW5kQ2hpbGQoZGl2UGFyYTIpO1xuICBkaXZDb250ZW50LmFwcGVuZENoaWxkKGRpdlBhcmEzKTtcbn07XG5cbmV4cG9ydCB7IGNyZWF0ZU1lbnVQYWdlIH07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=