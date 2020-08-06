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
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_syncfusion_ej2_react_treegrid__WEBPACK_IMPORTED_MODULE_0__["TreeGridComponent"], {
        height: "300",
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
      }));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kYXNoX3RvX3JlYWN0Ly4vc3JjL2xpYi9jb21wb25lbnRzL25lc3RlZC1kYXRhLWNydWQvTmVzdGVkRGF0YUNSVUQucmVhY3QuanMiXSwibmFtZXMiOlsiTmVzdGVkRGF0YUNSVUQiLCJwcm9wcyIsImVkaXRPcHRpb25zIiwiYWxsb3dBZGRpbmciLCJhbGxvd0RlbGV0aW5nIiwiYWxsb3dFZGl0aW5nIiwibW9kZSIsImNvbnRleHRNZW51SXRlbXMiLCJ0b29sYmFyT3B0aW9ucyIsImNvbmZpZ0RhdGEiLCJ0eXBlIiwiaGllcmFyY2h5TW9kZSIsIkZpbHRlciIsIlNvcnQiLCJSZW9yZGVyIiwiRWRpdCIsIkNvbnRleHRNZW51IiwiUmVzaXplIiwiVG9vbGJhciIsIlJlYWN0IiwiZGVmYXVsdFByb3BzIiwicHJvcFR5cGVzIiwiaWQiLCJQcm9wVHlwZXMiLCJzdHJpbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0lBRXFCQSxjOzs7OztBQUNqQiwwQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNmLDhCQUFNQSxLQUFOO0FBQ0EsVUFBS0MsV0FBTCxHQUFtQjtBQUNmQyxpQkFBVyxFQUFFLElBREU7QUFFZkMsbUJBQWEsRUFBRSxJQUZBO0FBR2ZDLGtCQUFZLEVBQUUsSUFIQztBQUlmQyxVQUFJLEVBQUU7QUFKUyxLQUFuQjtBQU1BLFVBQUtDLGdCQUFMLEdBQXdCLENBQUMsU0FBRCxFQUFZLFlBQVosRUFDeEIsZUFEd0IsRUFDUCxnQkFETyxFQUNXLE1BRFgsRUFDbUIsUUFEbkIsRUFDNkIsUUFEN0IsQ0FBeEI7QUFFQSxVQUFLQyxjQUFMLEdBQXNCLENBQUMsV0FBRCxFQUFjLGFBQWQsRUFBNkIsUUFBN0IsQ0FBdEI7QUFWZTtBQVdsQjs7Ozs2QkFFUTtBQUNMLDBCQUFPLG9EQUFDLGdGQUFEO0FBQW1CLGNBQU0sRUFBQyxLQUExQjtBQUNQLGtCQUFVLEVBQUVDLGdEQURMO0FBQ2lCLG9CQUFZLEVBQUUsU0FEL0I7QUFDeUMseUJBQWlCLEVBQUUsSUFENUQ7QUFFUCx1QkFBZSxFQUFDLE1BRlQ7QUFFZ0Isc0JBQWMsRUFBQyxNQUYvQjtBQUVzQyxvQkFBWSxFQUFDLE1BRm5EO0FBRTBELHNCQUFjLEVBQUU7QUFBRUMsY0FBSSxFQUFFLE1BQVI7QUFBZ0JDLHVCQUFhLEVBQUU7QUFBL0IsU0FGMUU7QUFHUCxvQkFBWSxFQUFFLEtBQUtULFdBSFo7QUFHeUIsd0JBQWdCLEVBQUUsS0FBS0ssZ0JBSGhEO0FBR2tFLGVBQU8sRUFBRSxLQUFLQztBQUhoRixzQkFJSCxvREFBQywrRUFBRCxxQkFDRSxvREFBQyw4RUFBRDtBQUFpQixhQUFLLEVBQUMsS0FBdkI7QUFBNkIsa0JBQVUsRUFBQyxLQUF4QztBQUE4QyxhQUFLLEVBQUM7QUFBcEQsUUFERixlQUVFLG9EQUFDLDhFQUFEO0FBQWlCLGFBQUssRUFBQyxPQUF2QjtBQUErQixrQkFBVSxFQUFDLE9BQTFDO0FBQWtELGFBQUssRUFBQztBQUF4RCxRQUZGLENBSkcsZUFRSCxvREFBQyxxRUFBRDtBQUFRLGdCQUFRLEVBQUUsQ0FBQ0kscUVBQUQsRUFBU0MsbUVBQVQsRUFBZUMsc0VBQWYsRUFBd0JDLG1FQUF4QixFQUE4QkMsMEVBQTlCLEVBQTJDQyxxRUFBM0MsRUFBbURDLHNFQUFuRDtBQUFsQixRQVJHLENBQVA7QUFVSDs7OztFQXpCdUNDLCtDOzs7QUE0QjVDbkIsY0FBYyxDQUFDb0IsWUFBZixHQUE4QixFQUE5QjtBQUVBcEIsY0FBYyxDQUFDcUIsU0FBZixHQUEyQjtBQUN2Qjs7O0FBR0FDLElBQUUsRUFBRUMsaURBQVMsQ0FBQ0M7QUFKUyxDQUEzQixDIiwiZmlsZSI6IjkxZTI5YjUtbWFpbi13cHMtaG1yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29sdW1uRGlyZWN0aXZlLCBDb2x1bW5zRGlyZWN0aXZlLCBUcmVlR3JpZENvbXBvbmVudCwgRmlsdGVyLCBTb3J0LCBSZW9yZGVyLCBFZGl0LCBDb250ZXh0TWVudSwgUmVzaXplLCBUb29sYmFyLCBJbmplY3QgfSBmcm9tICdAc3luY2Z1c2lvbi9lajItcmVhY3QtdHJlZWdyaWQnO1xyXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IGNvbmZpZ0RhdGEgfSBmcm9tICcuL2RhdGEnO1xyXG5pbXBvcnQgJy4vbmVzdGVkLWRhdGEtY3J1ZC5jc3MnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmVzdGVkRGF0YUNSVUQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5lZGl0T3B0aW9ucyA9IHtcclxuICAgICAgICAgICAgYWxsb3dBZGRpbmc6IHRydWUsXHJcbiAgICAgICAgICAgIGFsbG93RGVsZXRpbmc6IHRydWUsXHJcbiAgICAgICAgICAgIGFsbG93RWRpdGluZzogdHJ1ZSxcclxuICAgICAgICAgICAgbW9kZTogJ0NlbGwnXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLmNvbnRleHRNZW51SXRlbXMgPSBbJ0F1dG9GaXQnLCAnQXV0b0ZpdEFsbCcsXHJcbiAgICAgICAgJ1NvcnRBc2NlbmRpbmcnLCAnU29ydERlc2NlbmRpbmcnLCAnRWRpdCcsICdEZWxldGUnLCAnQWRkUm93J107XHJcbiAgICAgICAgdGhpcy50b29sYmFyT3B0aW9ucyA9IFsnRXhwYW5kQWxsJywgJ0NvbGxhcHNlQWxsJywgJ1NlYXJjaCddXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiA8VHJlZUdyaWRDb21wb25lbnQgaGVpZ2h0PSczMDAnXHJcbiAgICAgICAgZGF0YVNvdXJjZT17Y29uZmlnRGF0YX0gY2hpbGRNYXBwaW5nPSAnc3Via2V5cycgZW5hYmxlQ29sbGFwc2VBbGw9e3RydWV9XHJcbiAgICAgICAgYWxsb3dSZW9yZGVyaW5nPSd0cnVlJyBhbGxvd0ZpbHRlcmluZz0ndHJ1ZScgYWxsb3dTb3J0aW5nPSd0cnVlJyBmaWx0ZXJTZXR0aW5ncz17eyB0eXBlOiAnTWVudScsIGhpZXJhcmNoeU1vZGU6ICdQYXJlbnQnIH19IFxyXG4gICAgICAgIGVkaXRTZXR0aW5ncz17dGhpcy5lZGl0T3B0aW9uc30gY29udGV4dE1lbnVJdGVtcz17dGhpcy5jb250ZXh0TWVudUl0ZW1zfSB0b29sYmFyPXt0aGlzLnRvb2xiYXJPcHRpb25zfT5cclxuICAgICAgICAgICAgPENvbHVtbnNEaXJlY3RpdmU+XHJcbiAgICAgICAgICAgICAgPENvbHVtbkRpcmVjdGl2ZSBmaWVsZD0na2V5JyBoZWFkZXJUZXh0PSdLZXknIHdpZHRoPScyMDAnLz5cclxuICAgICAgICAgICAgICA8Q29sdW1uRGlyZWN0aXZlIGZpZWxkPSd2YWx1ZScgaGVhZGVyVGV4dD0nVmFsdWUnIHdpZHRoPScqJy8+XHJcbiAgICAgICAgICAgIDwvQ29sdW1uc0RpcmVjdGl2ZT5cclxuICAgICAgICAgICAgPEluamVjdCBzZXJ2aWNlcz17W0ZpbHRlciwgU29ydCwgUmVvcmRlciwgRWRpdCwgQ29udGV4dE1lbnUsIFJlc2l6ZSwgVG9vbGJhcl19Lz5cclxuICAgICAgICA8L1RyZWVHcmlkQ29tcG9uZW50PlxyXG4gICAgfVxyXG59XHJcblxyXG5OZXN0ZWREYXRhQ1JVRC5kZWZhdWx0UHJvcHMgPSB7fTtcclxuXHJcbk5lc3RlZERhdGFDUlVELnByb3BUeXBlcyA9IHtcclxuICAgIC8qKlxyXG4gICAgICogVGhlIElEIHVzZWQgdG8gaWRlbnRpZnkgdGhpcyBjb21wb25lbnQgaW4gRGFzaCBjYWxsYmFja3MuXHJcbiAgICAgKi9cclxuICAgIGlkOiBQcm9wVHlwZXMuc3RyaW5nXHJcbn07Il0sInNvdXJjZVJvb3QiOiIifQ==