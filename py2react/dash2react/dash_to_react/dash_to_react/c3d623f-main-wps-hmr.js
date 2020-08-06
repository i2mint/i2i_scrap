webpackHotUpdatedash_to_react("main",{

/***/ "./src/lib/components/nested-data-crud/NestedDataCRUD.react.js":
/*!*********************************************************************!*\
  !*** ./src/lib/components/nested-data-crud/NestedDataCRUD.react.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return NestedDataCRUD; });
/* harmony import */ var _syncfusion_ej2_react_treegrid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @syncfusion/ej2-react-treegrid */ "./node_modules/@syncfusion/ej2-react-treegrid/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data */ "./src/lib/components/nested-data-crud/data.js");
/* harmony import */ var _nested_data_crud_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nested-data-crud.css */ "./src/lib/components/nested-data-crud/nested-data-crud.css");
/* harmony import */ var _nested_data_crud_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_nested_data_crud_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }







var NestedDataCRUD = /*#__PURE__*/function (_React$Component) {
  _inherits(NestedDataCRUD, _React$Component);

  var _super = _createSuper(NestedDataCRUD);

  function NestedDataCRUD(props) {
    var _this;

    _classCallCheck(this, NestedDataCRUD);

    _this = _super.call(this, props);
    _this.editOptions = {
      allowAdding: true,
      allowDeleting: true,
      allowEditing: true,
      mode: 'Cell'
    };
    _this.contextMenuItems = ['AutoFit', 'AutoFitAll', 'SortAscending', 'SortDescending', 'Edit', 'Delete', 'AddRow'];
    _this.toolbarOptions = ['ExpandAll', 'CollapseAll', 'Search'];
    return _this;
  }

  _createClass(NestedDataCRUD, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_syncfusion_ej2_react_treegrid__WEBPACK_IMPORTED_MODULE_0__["TreeGridComponent"], {
        dataSource: _data__WEBPACK_IMPORTED_MODULE_2__["configData"],
        childMapping: "subkeys",
        enableCollapseAll: true,
        allowReordering: "true",
        allowFiltering: "true",
        allowSorting: "true",
        filterSettings: {
          type: 'Menu',
          hierarchyMode: 'Parent'
        },
        editSettings: this.editOptions,
        contextMenuItems: this.contextMenuItems,
        toolbar: this.toolbarOptions
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_syncfusion_ej2_react_treegrid__WEBPACK_IMPORTED_MODULE_0__["ColumnsDirective"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_syncfusion_ej2_react_treegrid__WEBPACK_IMPORTED_MODULE_0__["ColumnDirective"], {
        field: "key",
        headerText: "Key",
        width: "200"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_syncfusion_ej2_react_treegrid__WEBPACK_IMPORTED_MODULE_0__["ColumnDirective"], {
        field: "value",
        headerText: "Value",
        width: "*"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_syncfusion_ej2_react_treegrid__WEBPACK_IMPORTED_MODULE_0__["Inject"], {
        services: [_syncfusion_ej2_react_treegrid__WEBPACK_IMPORTED_MODULE_0__["Filter"], _syncfusion_ej2_react_treegrid__WEBPACK_IMPORTED_MODULE_0__["Sort"], _syncfusion_ej2_react_treegrid__WEBPACK_IMPORTED_MODULE_0__["Reorder"], _syncfusion_ej2_react_treegrid__WEBPACK_IMPORTED_MODULE_0__["Edit"], _syncfusion_ej2_react_treegrid__WEBPACK_IMPORTED_MODULE_0__["ContextMenu"], _syncfusion_ej2_react_treegrid__WEBPACK_IMPORTED_MODULE_0__["Resize"], _syncfusion_ej2_react_treegrid__WEBPACK_IMPORTED_MODULE_0__["Toolbar"]]
      })));
    }
  }]);

  return NestedDataCRUD;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);


NestedDataCRUD.defaultProps = {};
NestedDataCRUD.propTypes = {
  /**
   * The ID used to identify this component in Dash callbacks.
   */
  id: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string
};

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kYXNoX3RvX3JlYWN0Ly4vc3JjL2xpYi9jb21wb25lbnRzL25lc3RlZC1kYXRhLWNydWQvTmVzdGVkRGF0YUNSVUQucmVhY3QuanMiXSwibmFtZXMiOlsiTmVzdGVkRGF0YUNSVUQiLCJwcm9wcyIsImVkaXRPcHRpb25zIiwiYWxsb3dBZGRpbmciLCJhbGxvd0RlbGV0aW5nIiwiYWxsb3dFZGl0aW5nIiwibW9kZSIsImNvbnRleHRNZW51SXRlbXMiLCJ0b29sYmFyT3B0aW9ucyIsImNvbmZpZ0RhdGEiLCJ0eXBlIiwiaGllcmFyY2h5TW9kZSIsIkZpbHRlciIsIlNvcnQiLCJSZW9yZGVyIiwiRWRpdCIsIkNvbnRleHRNZW51IiwiUmVzaXplIiwiVG9vbGJhciIsIlJlYWN0IiwiZGVmYXVsdFByb3BzIiwicHJvcFR5cGVzIiwiaWQiLCJQcm9wVHlwZXMiLCJzdHJpbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0lBRXFCQSxjOzs7OztBQUNqQiwwQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNmLDhCQUFNQSxLQUFOO0FBQ0EsVUFBS0MsV0FBTCxHQUFtQjtBQUNmQyxpQkFBVyxFQUFFLElBREU7QUFFZkMsbUJBQWEsRUFBRSxJQUZBO0FBR2ZDLGtCQUFZLEVBQUUsSUFIQztBQUlmQyxVQUFJLEVBQUU7QUFKUyxLQUFuQjtBQU1BLFVBQUtDLGdCQUFMLEdBQXdCLENBQUMsU0FBRCxFQUFZLFlBQVosRUFDeEIsZUFEd0IsRUFDUCxnQkFETyxFQUNXLE1BRFgsRUFDbUIsUUFEbkIsRUFDNkIsUUFEN0IsQ0FBeEI7QUFFQSxVQUFLQyxjQUFMLEdBQXNCLENBQUMsV0FBRCxFQUFjLGFBQWQsRUFBNkIsUUFBN0IsQ0FBdEI7QUFWZTtBQVdsQjs7Ozs2QkFFUTtBQUNMLDBCQUFPLDhFQUNILG9EQUFDLGdGQUFEO0FBQ0Esa0JBQVUsRUFBRUMsZ0RBRFo7QUFDd0Isb0JBQVksRUFBRSxTQUR0QztBQUNnRCx5QkFBaUIsRUFBRSxJQURuRTtBQUVBLHVCQUFlLEVBQUMsTUFGaEI7QUFFdUIsc0JBQWMsRUFBQyxNQUZ0QztBQUU2QyxvQkFBWSxFQUFDLE1BRjFEO0FBRWlFLHNCQUFjLEVBQUU7QUFBRUMsY0FBSSxFQUFFLE1BQVI7QUFBZ0JDLHVCQUFhLEVBQUU7QUFBL0IsU0FGakY7QUFHQSxvQkFBWSxFQUFFLEtBQUtULFdBSG5CO0FBR2dDLHdCQUFnQixFQUFFLEtBQUtLLGdCQUh2RDtBQUd5RSxlQUFPLEVBQUUsS0FBS0M7QUFIdkYsc0JBSUksb0RBQUMsK0VBQUQscUJBQ0Esb0RBQUMsOEVBQUQ7QUFBaUIsYUFBSyxFQUFDLEtBQXZCO0FBQTZCLGtCQUFVLEVBQUMsS0FBeEM7QUFBOEMsYUFBSyxFQUFDO0FBQXBELFFBREEsZUFFQSxvREFBQyw4RUFBRDtBQUFpQixhQUFLLEVBQUMsT0FBdkI7QUFBK0Isa0JBQVUsRUFBQyxPQUExQztBQUFrRCxhQUFLLEVBQUM7QUFBeEQsUUFGQSxDQUpKLGVBUUksb0RBQUMscUVBQUQ7QUFBUSxnQkFBUSxFQUFFLENBQUNJLHFFQUFELEVBQVNDLG1FQUFULEVBQWVDLHNFQUFmLEVBQXdCQyxtRUFBeEIsRUFBOEJDLDBFQUE5QixFQUEyQ0MscUVBQTNDLEVBQW1EQyxzRUFBbkQ7QUFBbEIsUUFSSixDQURHLENBQVA7QUFZSDs7OztFQTNCdUNDLCtDOzs7QUE4QjVDbkIsY0FBYyxDQUFDb0IsWUFBZixHQUE4QixFQUE5QjtBQUVBcEIsY0FBYyxDQUFDcUIsU0FBZixHQUEyQjtBQUN2Qjs7O0FBR0FDLElBQUUsRUFBRUMsaURBQVMsQ0FBQ0M7QUFKUyxDQUEzQixDIiwiZmlsZSI6ImMzZDYyM2YtbWFpbi13cHMtaG1yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29sdW1uRGlyZWN0aXZlLCBDb2x1bW5zRGlyZWN0aXZlLCBUcmVlR3JpZENvbXBvbmVudCwgRmlsdGVyLCBTb3J0LCBSZW9yZGVyLCBFZGl0LCBDb250ZXh0TWVudSwgUmVzaXplLCBUb29sYmFyLCBJbmplY3QgfSBmcm9tICdAc3luY2Z1c2lvbi9lajItcmVhY3QtdHJlZWdyaWQnO1xyXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IGNvbmZpZ0RhdGEgfSBmcm9tICcuL2RhdGEnO1xyXG5pbXBvcnQgJy4vbmVzdGVkLWRhdGEtY3J1ZC5jc3MnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmVzdGVkRGF0YUNSVUQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5lZGl0T3B0aW9ucyA9IHtcclxuICAgICAgICAgICAgYWxsb3dBZGRpbmc6IHRydWUsXHJcbiAgICAgICAgICAgIGFsbG93RGVsZXRpbmc6IHRydWUsXHJcbiAgICAgICAgICAgIGFsbG93RWRpdGluZzogdHJ1ZSxcclxuICAgICAgICAgICAgbW9kZTogJ0NlbGwnXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLmNvbnRleHRNZW51SXRlbXMgPSBbJ0F1dG9GaXQnLCAnQXV0b0ZpdEFsbCcsXHJcbiAgICAgICAgJ1NvcnRBc2NlbmRpbmcnLCAnU29ydERlc2NlbmRpbmcnLCAnRWRpdCcsICdEZWxldGUnLCAnQWRkUm93J107XHJcbiAgICAgICAgdGhpcy50b29sYmFyT3B0aW9ucyA9IFsnRXhwYW5kQWxsJywgJ0NvbGxhcHNlQWxsJywgJ1NlYXJjaCddXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiA8ZGl2PlxyXG4gICAgICAgICAgICA8VHJlZUdyaWRDb21wb25lbnRcclxuICAgICAgICAgICAgZGF0YVNvdXJjZT17Y29uZmlnRGF0YX0gY2hpbGRNYXBwaW5nPSAnc3Via2V5cycgZW5hYmxlQ29sbGFwc2VBbGw9e3RydWV9XHJcbiAgICAgICAgICAgIGFsbG93UmVvcmRlcmluZz0ndHJ1ZScgYWxsb3dGaWx0ZXJpbmc9J3RydWUnIGFsbG93U29ydGluZz0ndHJ1ZScgZmlsdGVyU2V0dGluZ3M9e3sgdHlwZTogJ01lbnUnLCBoaWVyYXJjaHlNb2RlOiAnUGFyZW50JyB9fSBcclxuICAgICAgICAgICAgZWRpdFNldHRpbmdzPXt0aGlzLmVkaXRPcHRpb25zfSBjb250ZXh0TWVudUl0ZW1zPXt0aGlzLmNvbnRleHRNZW51SXRlbXN9IHRvb2xiYXI9e3RoaXMudG9vbGJhck9wdGlvbnN9PlxyXG4gICAgICAgICAgICAgICAgPENvbHVtbnNEaXJlY3RpdmU+XHJcbiAgICAgICAgICAgICAgICA8Q29sdW1uRGlyZWN0aXZlIGZpZWxkPSdrZXknIGhlYWRlclRleHQ9J0tleScgd2lkdGg9JzIwMCcvPlxyXG4gICAgICAgICAgICAgICAgPENvbHVtbkRpcmVjdGl2ZSBmaWVsZD0ndmFsdWUnIGhlYWRlclRleHQ9J1ZhbHVlJyB3aWR0aD0nKicvPlxyXG4gICAgICAgICAgICAgICAgPC9Db2x1bW5zRGlyZWN0aXZlPlxyXG4gICAgICAgICAgICAgICAgPEluamVjdCBzZXJ2aWNlcz17W0ZpbHRlciwgU29ydCwgUmVvcmRlciwgRWRpdCwgQ29udGV4dE1lbnUsIFJlc2l6ZSwgVG9vbGJhcl19Lz5cclxuICAgICAgICAgICAgPC9UcmVlR3JpZENvbXBvbmVudD5cclxuICAgICAgICA8L2Rpdj4gXHJcbiAgICB9XHJcbn1cclxuXHJcbk5lc3RlZERhdGFDUlVELmRlZmF1bHRQcm9wcyA9IHt9O1xyXG5cclxuTmVzdGVkRGF0YUNSVUQucHJvcFR5cGVzID0ge1xyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgSUQgdXNlZCB0byBpZGVudGlmeSB0aGlzIGNvbXBvbmVudCBpbiBEYXNoIGNhbGxiYWNrcy5cclxuICAgICAqL1xyXG4gICAgaWQ6IFByb3BUeXBlcy5zdHJpbmdcclxufTsiXSwic291cmNlUm9vdCI6IiJ9