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
/* harmony import */ var _nested_data_crud_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nested-data-crud.css */ "./src/lib/components/nested-data-crud/nested-data-crud.css");
/* harmony import */ var _nested_data_crud_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nested_data_crud_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
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
    _this.toolbarOptions = ['ExpandAll', 'CollapseAll', 'Update', 'Cancel', 'Search'];
    _this.fieldRequired = {
      required: true
    };
    return _this;
  }

  _createClass(NestedDataCRUD, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_syncfusion_ej2_react_treegrid__WEBPACK_IMPORTED_MODULE_0__["TreeGridComponent"], {
        dataSource: this.props.dataSource,
        treeColumnIndex: 1,
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
        toolbar: this.toolbarOptions,
        cellSave: function cellSave(e) {
          return _this2.props.onEditingData(e);
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_syncfusion_ej2_react_treegrid__WEBPACK_IMPORTED_MODULE_0__["ColumnsDirective"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_syncfusion_ej2_react_treegrid__WEBPACK_IMPORTED_MODULE_0__["ColumnDirective"], {
        field: "_id",
        isPrimaryKey: true,
        visible: false
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_syncfusion_ej2_react_treegrid__WEBPACK_IMPORTED_MODULE_0__["ColumnDirective"], {
        field: "key",
        headerText: "Key",
        width: "200",
        validationRules: this.fieldRequired
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
  id: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string
};

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kYXNoX3RvX3JlYWN0Ly4vc3JjL2xpYi9jb21wb25lbnRzL25lc3RlZC1kYXRhLWNydWQvTmVzdGVkRGF0YUNSVUQucmVhY3QuanMiXSwibmFtZXMiOlsiTmVzdGVkRGF0YUNSVUQiLCJwcm9wcyIsImVkaXRPcHRpb25zIiwiYWxsb3dBZGRpbmciLCJhbGxvd0RlbGV0aW5nIiwiYWxsb3dFZGl0aW5nIiwibW9kZSIsImNvbnRleHRNZW51SXRlbXMiLCJ0b29sYmFyT3B0aW9ucyIsImZpZWxkUmVxdWlyZWQiLCJyZXF1aXJlZCIsImRhdGFTb3VyY2UiLCJ0eXBlIiwiaGllcmFyY2h5TW9kZSIsImUiLCJvbkVkaXRpbmdEYXRhIiwiRmlsdGVyIiwiU29ydCIsIlJlb3JkZXIiLCJFZGl0IiwiQ29udGV4dE1lbnUiLCJSZXNpemUiLCJUb29sYmFyIiwiUmVhY3QiLCJkZWZhdWx0UHJvcHMiLCJwcm9wVHlwZXMiLCJpZCIsIlByb3BUeXBlcyIsInN0cmluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7SUFFcUJBLGM7Ozs7O0FBQ2pCLDBCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2YsOEJBQU1BLEtBQU47QUFDQSxVQUFLQyxXQUFMLEdBQW1CO0FBQ2ZDLGlCQUFXLEVBQUUsSUFERTtBQUVmQyxtQkFBYSxFQUFFLElBRkE7QUFHZkMsa0JBQVksRUFBRSxJQUhDO0FBSWZDLFVBQUksRUFBRTtBQUpTLEtBQW5CO0FBTUEsVUFBS0MsZ0JBQUwsR0FBd0IsQ0FDcEIsU0FEb0IsRUFFcEIsWUFGb0IsRUFHcEIsZUFIb0IsRUFJcEIsZ0JBSm9CLEVBS3BCLE1BTG9CLEVBS1osUUFMWSxFQU1wQixRQU5vQixDQUF4QjtBQVFBLFVBQUtDLGNBQUwsR0FBc0IsQ0FDbEIsV0FEa0IsRUFFbEIsYUFGa0IsRUFHbEIsUUFIa0IsRUFJbEIsUUFKa0IsRUFLbEIsUUFMa0IsQ0FBdEI7QUFPQSxVQUFLQyxhQUFMLEdBQXFCO0FBQUVDLGNBQVEsRUFBRTtBQUFaLEtBQXJCO0FBdkJlO0FBd0JsQjs7Ozs2QkFFUTtBQUFBOztBQUNMLDBCQUFPLDhFQUNILG9EQUFDLGdGQUFEO0FBQW9CLGtCQUFVLEVBQUUsS0FBS1QsS0FBTCxDQUFXVSxVQUEzQztBQUF1RCx1QkFBZSxFQUFFLENBQXhFO0FBQTJFLG9CQUFZLEVBQUUsU0FBekY7QUFBbUcseUJBQWlCLEVBQUUsSUFBdEg7QUFDb0IsdUJBQWUsRUFBQyxNQURwQztBQUMyQyxzQkFBYyxFQUFDLE1BRDFEO0FBQ2lFLG9CQUFZLEVBQUMsTUFEOUU7QUFDcUYsc0JBQWMsRUFBRTtBQUFFQyxjQUFJLEVBQUUsTUFBUjtBQUFnQkMsdUJBQWEsRUFBRTtBQUEvQixTQURyRztBQUVvQixvQkFBWSxFQUFFLEtBQUtYLFdBRnZDO0FBRW9ELHdCQUFnQixFQUFFLEtBQUtLLGdCQUYzRTtBQUU2RixlQUFPLEVBQUUsS0FBS0MsY0FGM0c7QUFHb0IsZ0JBQVEsRUFBRSxrQkFBQ00sQ0FBRDtBQUFBLGlCQUFPLE1BQUksQ0FBQ2IsS0FBTCxDQUFXYyxhQUFYLENBQXlCRCxDQUF6QixDQUFQO0FBQUE7QUFIOUIsc0JBSUksb0RBQUMsK0VBQUQscUJBQ0ksb0RBQUMsOEVBQUQ7QUFBaUIsYUFBSyxFQUFDLEtBQXZCO0FBQTZCLG9CQUFZLEVBQUUsSUFBM0M7QUFBaUQsZUFBTyxFQUFFO0FBQTFELFFBREosZUFFSSxvREFBQyw4RUFBRDtBQUFpQixhQUFLLEVBQUMsS0FBdkI7QUFBNkIsa0JBQVUsRUFBQyxLQUF4QztBQUE4QyxhQUFLLEVBQUMsS0FBcEQ7QUFBMEQsdUJBQWUsRUFBRSxLQUFLTDtBQUFoRixRQUZKLGVBR0ksb0RBQUMsOEVBQUQ7QUFBaUIsYUFBSyxFQUFDLE9BQXZCO0FBQStCLGtCQUFVLEVBQUMsT0FBMUM7QUFBa0QsYUFBSyxFQUFDO0FBQXhELFFBSEosQ0FKSixlQVNJLG9EQUFDLHFFQUFEO0FBQVEsZ0JBQVEsRUFBRSxDQUFDTyxxRUFBRCxFQUFTQyxtRUFBVCxFQUFlQyxzRUFBZixFQUF3QkMsbUVBQXhCLEVBQThCQywwRUFBOUIsRUFBMkNDLHFFQUEzQyxFQUFtREMsc0VBQW5EO0FBQWxCLFFBVEosQ0FERyxDQUFQO0FBYUg7Ozs7RUF6Q3VDQywrQzs7O0FBNEM1Q3ZCLGNBQWMsQ0FBQ3dCLFlBQWYsR0FBOEIsRUFBOUI7QUFFQXhCLGNBQWMsQ0FBQ3lCLFNBQWYsR0FBMkI7QUFDdkI7OztBQUdBQyxJQUFFLEVBQUVDLGlEQUFTLENBQUNDO0FBSlMsQ0FBM0IsQyIsImZpbGUiOiI4NTMxOThlLW1haW4td3BzLWhtci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRyZWVHcmlkQ29tcG9uZW50LCBDb2x1bW5zRGlyZWN0aXZlLCBDb2x1bW5EaXJlY3RpdmUsIEZpbHRlciwgU29ydCwgUmVvcmRlciwgRWRpdCwgQ29udGV4dE1lbnUsIFJlc2l6ZSwgVG9vbGJhciwgSW5qZWN0IH0gZnJvbSAnQHN5bmNmdXNpb24vZWoyLXJlYWN0LXRyZWVncmlkJztcclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgJy4vbmVzdGVkLWRhdGEtY3J1ZC5jc3MnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmVzdGVkRGF0YUNSVUQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5lZGl0T3B0aW9ucyA9IHtcclxuICAgICAgICAgICAgYWxsb3dBZGRpbmc6IHRydWUsXHJcbiAgICAgICAgICAgIGFsbG93RGVsZXRpbmc6IHRydWUsXHJcbiAgICAgICAgICAgIGFsbG93RWRpdGluZzogdHJ1ZSxcclxuICAgICAgICAgICAgbW9kZTogJ0NlbGwnXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLmNvbnRleHRNZW51SXRlbXMgPSBbXHJcbiAgICAgICAgICAgICdBdXRvRml0JywgXHJcbiAgICAgICAgICAgICdBdXRvRml0QWxsJyxcclxuICAgICAgICAgICAgJ1NvcnRBc2NlbmRpbmcnLCBcclxuICAgICAgICAgICAgJ1NvcnREZXNjZW5kaW5nJywgXHJcbiAgICAgICAgICAgICdFZGl0JywgJ0RlbGV0ZScsIFxyXG4gICAgICAgICAgICAnQWRkUm93J1xyXG4gICAgICAgIF07XHJcbiAgICAgICAgdGhpcy50b29sYmFyT3B0aW9ucyA9IFtcclxuICAgICAgICAgICAgJ0V4cGFuZEFsbCcsIFxyXG4gICAgICAgICAgICAnQ29sbGFwc2VBbGwnLCBcclxuICAgICAgICAgICAgJ1VwZGF0ZScsXHJcbiAgICAgICAgICAgICdDYW5jZWwnLFxyXG4gICAgICAgICAgICAnU2VhcmNoJ1xyXG4gICAgICAgIF07XHJcbiAgICAgICAgdGhpcy5maWVsZFJlcXVpcmVkID0geyByZXF1aXJlZDogdHJ1ZSB9O1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gPGRpdj5cclxuICAgICAgICAgICAgPFRyZWVHcmlkQ29tcG9uZW50ICBkYXRhU291cmNlPXt0aGlzLnByb3BzLmRhdGFTb3VyY2V9IHRyZWVDb2x1bW5JbmRleD17MX0gY2hpbGRNYXBwaW5nPSAnc3Via2V5cycgZW5hYmxlQ29sbGFwc2VBbGw9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxsb3dSZW9yZGVyaW5nPSd0cnVlJyBhbGxvd0ZpbHRlcmluZz0ndHJ1ZScgYWxsb3dTb3J0aW5nPSd0cnVlJyBmaWx0ZXJTZXR0aW5ncz17eyB0eXBlOiAnTWVudScsIGhpZXJhcmNoeU1vZGU6ICdQYXJlbnQnIH19IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVkaXRTZXR0aW5ncz17dGhpcy5lZGl0T3B0aW9uc30gY29udGV4dE1lbnVJdGVtcz17dGhpcy5jb250ZXh0TWVudUl0ZW1zfSB0b29sYmFyPXt0aGlzLnRvb2xiYXJPcHRpb25zfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNlbGxTYXZlPXsoZSkgPT4gdGhpcy5wcm9wcy5vbkVkaXRpbmdEYXRhKGUpfT5cclxuICAgICAgICAgICAgICAgIDxDb2x1bW5zRGlyZWN0aXZlPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDb2x1bW5EaXJlY3RpdmUgZmllbGQ9J19pZCcgaXNQcmltYXJ5S2V5PXt0cnVlfSB2aXNpYmxlPXtmYWxzZX0vPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDb2x1bW5EaXJlY3RpdmUgZmllbGQ9J2tleScgaGVhZGVyVGV4dD0nS2V5JyB3aWR0aD0nMjAwJyB2YWxpZGF0aW9uUnVsZXM9e3RoaXMuZmllbGRSZXF1aXJlZH0vPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDb2x1bW5EaXJlY3RpdmUgZmllbGQ9J3ZhbHVlJyBoZWFkZXJUZXh0PSdWYWx1ZScgd2lkdGg9JyonLz5cclxuICAgICAgICAgICAgICAgIDwvQ29sdW1uc0RpcmVjdGl2ZT5cclxuICAgICAgICAgICAgICAgIDxJbmplY3Qgc2VydmljZXM9e1tGaWx0ZXIsIFNvcnQsIFJlb3JkZXIsIEVkaXQsIENvbnRleHRNZW51LCBSZXNpemUsIFRvb2xiYXJdfS8+XHJcbiAgICAgICAgICAgIDwvVHJlZUdyaWRDb21wb25lbnQ+XHJcbiAgICAgICAgPC9kaXY+IFxyXG4gICAgfVxyXG59XHJcblxyXG5OZXN0ZWREYXRhQ1JVRC5kZWZhdWx0UHJvcHMgPSB7fTtcclxuXHJcbk5lc3RlZERhdGFDUlVELnByb3BUeXBlcyA9IHtcclxuICAgIC8qKlxyXG4gICAgICogVGhlIElEIHVzZWQgdG8gaWRlbnRpZnkgdGhpcyBjb21wb25lbnQgaW4gRGFzaCBjYWxsYmFja3MuXHJcbiAgICAgKi9cclxuICAgIGlkOiBQcm9wVHlwZXMuc3RyaW5nXHJcbn07Il0sInNvdXJjZVJvb3QiOiIifQ==