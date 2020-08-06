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
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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

    _this.setTreeGridOptions();

    _this.mapDataFields(props);

    _this.fieldRequired = {
      required: true
    };
    _this.dataSource = _this.props.dataSource.map(function (e) {
      return _objectSpread({
        _id: Object(uuid__WEBPACK_IMPORTED_MODULE_4__["v4"])()
      }, e);
    });
    return _this;
  }

  _createClass(NestedDataCRUD, [{
    key: "setTreeGridOptions",
    value: function setTreeGridOptions() {
      this.editOptions = {
        allowAdding: true,
        allowDeleting: true,
        allowEditing: true,
        mode: 'Cell'
      };
      this.contextMenuItems = ['AutoFit', 'AutoFitAll', 'SortAscending', 'SortDescending', 'Edit', 'Delete', 'AddRow'];
      this.toolbarOptions = ['ExpandAll', 'CollapseAll', 'Update', 'Cancel', 'Search'];
    }
  }, {
    key: "mapDataFields",
    value: function mapDataFields(props) {
      this.keyField = props.keyField || 'key';
      this.keyHeader = props.keyHeader || 'Key';
      this.valueField = props.valueField || 'value';
      this.valueHeader = props.valueHeader || 'Value';
      this.childrenField = props.childrenField || 'children';
    }
  }, {
    key: "onBeginningAction",
    value: function onBeginningAction(e) {
      if (e.requestType === 'add') e.data._id = Object(uuid__WEBPACK_IMPORTED_MODULE_4__["v4"])(); // e.data.subkeys = [
      //     {
      //         _id: uuid(),
      //         key: 'new_key',
      //         value: 'new_value'
      //     }
      // ]
    }
  }, {
    key: "onEditingCell",
    value: function onEditingCell(e) {
      if (e.columnName === this.valueField && !!e.rowData[this.childrenField]) {
        e.cancel = true;
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_syncfusion_ej2_react_treegrid__WEBPACK_IMPORTED_MODULE_0__["TreeGridComponent"], {
        dataSource: this.dataSource,
        treeColumnIndex: 1,
        childMapping: this.childrenField,
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
        actionBegin: function actionBegin(e) {
          return _this2.onBeginningAction(e);
        },
        cellEdit: function cellEdit(e) {
          return _this2.onEditingCell(e);
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_syncfusion_ej2_react_treegrid__WEBPACK_IMPORTED_MODULE_0__["ColumnsDirective"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_syncfusion_ej2_react_treegrid__WEBPACK_IMPORTED_MODULE_0__["ColumnDirective"], {
        field: "_id",
        isPrimaryKey: true,
        visible: false
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_syncfusion_ej2_react_treegrid__WEBPACK_IMPORTED_MODULE_0__["ColumnDirective"], {
        field: this.keyField,
        headerText: this.keyHeader,
        width: "200",
        validationRules: this.fieldRequired
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_syncfusion_ej2_react_treegrid__WEBPACK_IMPORTED_MODULE_0__["ColumnDirective"], {
        field: this.valueField,
        headerText: this.keyValue,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kYXNoX3RvX3JlYWN0Ly4vc3JjL2xpYi9jb21wb25lbnRzL25lc3RlZC1kYXRhLWNydWQvTmVzdGVkRGF0YUNSVUQucmVhY3QuanMiXSwibmFtZXMiOlsiTmVzdGVkRGF0YUNSVUQiLCJwcm9wcyIsInNldFRyZWVHcmlkT3B0aW9ucyIsIm1hcERhdGFGaWVsZHMiLCJmaWVsZFJlcXVpcmVkIiwicmVxdWlyZWQiLCJkYXRhU291cmNlIiwibWFwIiwiZSIsIl9pZCIsInV1aWQiLCJlZGl0T3B0aW9ucyIsImFsbG93QWRkaW5nIiwiYWxsb3dEZWxldGluZyIsImFsbG93RWRpdGluZyIsIm1vZGUiLCJjb250ZXh0TWVudUl0ZW1zIiwidG9vbGJhck9wdGlvbnMiLCJrZXlGaWVsZCIsImtleUhlYWRlciIsInZhbHVlRmllbGQiLCJ2YWx1ZUhlYWRlciIsImNoaWxkcmVuRmllbGQiLCJyZXF1ZXN0VHlwZSIsImRhdGEiLCJjb2x1bW5OYW1lIiwicm93RGF0YSIsImNhbmNlbCIsInR5cGUiLCJoaWVyYXJjaHlNb2RlIiwib25CZWdpbm5pbmdBY3Rpb24iLCJvbkVkaXRpbmdDZWxsIiwia2V5VmFsdWUiLCJGaWx0ZXIiLCJTb3J0IiwiUmVvcmRlciIsIkVkaXQiLCJDb250ZXh0TWVudSIsIlJlc2l6ZSIsIlRvb2xiYXIiLCJSZWFjdCIsImRlZmF1bHRQcm9wcyIsInByb3BUeXBlcyIsImlkIiwiUHJvcFR5cGVzIiwic3RyaW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztJQUVxQkEsYzs7Ozs7QUFDakIsMEJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDZiw4QkFBTUEsS0FBTjs7QUFFQSxVQUFLQyxrQkFBTDs7QUFDQSxVQUFLQyxhQUFMLENBQW1CRixLQUFuQjs7QUFDQSxVQUFLRyxhQUFMLEdBQXFCO0FBQUVDLGNBQVEs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RUFBRSxLQUFLVSxRQUE3QjtBQUF1QyxrQkFBVSxFQUFFLEtBQUtDLFNBQXhEO0FBQW1FLGFBQUssRUFBQyxLQUF6RTtBQUErRSx1QkFBZSxFQUFFLEtBQUtmO0FBQXJHLFFBRkosZUFHSSxvREFBQyw4RUFBRDtBQUFpQixhQUFLLEVBQUUsS0FBS2dCLFVBQTdCO0FBQXlDLGtCQUFVLEVBQUUsS0FBS1ksUUFBMUQ7QUFBb0UsYUFBSyxFQUFDO0FBQTFFLFFBSEosQ0FKSixlQVNJLG9EQUFDLHFFQUFEO0FBQVEsZ0JBQVEsRUFBRSxDQUFDQyxxRUFBRCxFQUFTQyxtRUFBVCxFQUFlQyxzRUFBZixFQUF3QkMsbUVBQXhCLEVBQThCQywwRUFBOUIsRUFBMkNDLHFFQUEzQyxFQUFtREMsc0VBQW5EO0FBQWxCLFFBVEosQ0FERyxDQUFQO0FBYUg7Ozs7RUExRXVDQywrQzs7O0FBNkU1Q3hDLGNBQWMsQ0FBQ3lDLFlBQWYsR0FBOEIsRUFBOUI7QUFFQXpDLGNBQWMsQ0FBQzBDLFNBQWYsR0FBMkI7QUFDdkI7OztBQUdBQyxJQUFFLEVBQUVDLGlEQUFTLENBQUNDO0FBSlMsQ0FBM0IsQyIsImZpbGUiOiJhOGFkYTBjLW1haW4td3BzLWhtci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRyZWVHcmlkQ29tcG9uZW50LCBDb2x1bW5zRGlyZWN0aXZlLCBDb2x1bW5EaXJlY3RpdmUsIEZpbHRlciwgU29ydCwgUmVvcmRlciwgRWRpdCwgQ29udGV4dE1lbnUsIFJlc2l6ZSwgVG9vbGJhciwgSW5qZWN0IH0gZnJvbSAnQHN5bmNmdXNpb24vZWoyLXJlYWN0LXRyZWVncmlkJztcclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgJy4vbmVzdGVkLWRhdGEtY3J1ZC5jc3MnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgeyB2NCBhcyB1dWlkIH0gZnJvbSAndXVpZCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXN0ZWREYXRhQ1JVRCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuXHJcbiAgICAgICAgdGhpcy5zZXRUcmVlR3JpZE9wdGlvbnMoKTtcclxuICAgICAgICB0aGlzLm1hcERhdGFGaWVsZHMocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuZmllbGRSZXF1aXJlZCA9IHsgcmVxdWlyZWQ6IHRydWUgfTtcclxuICAgICAgICB0aGlzLmRhdGFTb3VyY2UgPSB0aGlzLnByb3BzLmRhdGFTb3VyY2UubWFwKGUgPT4ge3JldHVybiB7X2lkOiB1dWlkKCksIC4uLmV9fSlcclxuICAgIH1cclxuXHJcbiAgICBzZXRUcmVlR3JpZE9wdGlvbnMoKSB7XHJcbiAgICAgICAgdGhpcy5lZGl0T3B0aW9ucyA9IHtcclxuICAgICAgICAgICAgYWxsb3dBZGRpbmc6IHRydWUsXHJcbiAgICAgICAgICAgIGFsbG93RGVsZXRpbmc6IHRydWUsXHJcbiAgICAgICAgICAgIGFsbG93RWRpdGluZzogdHJ1ZSxcclxuICAgICAgICAgICAgbW9kZTogJ0NlbGwnXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLmNvbnRleHRNZW51SXRlbXMgPSBbXHJcbiAgICAgICAgICAgICdBdXRvRml0JyxcclxuICAgICAgICAgICAgJ0F1dG9GaXRBbGwnLFxyXG4gICAgICAgICAgICAnU29ydEFzY2VuZGluZycsXHJcbiAgICAgICAgICAgICdTb3J0RGVzY2VuZGluZycsXHJcbiAgICAgICAgICAgICdFZGl0JywgJ0RlbGV0ZScsXHJcbiAgICAgICAgICAgICdBZGRSb3cnXHJcbiAgICAgICAgXTtcclxuICAgICAgICB0aGlzLnRvb2xiYXJPcHRpb25zID0gW1xyXG4gICAgICAgICAgICAnRXhwYW5kQWxsJyxcclxuICAgICAgICAgICAgJ0NvbGxhcHNlQWxsJyxcclxuICAgICAgICAgICAgJ1VwZGF0ZScsXHJcbiAgICAgICAgICAgICdDYW5jZWwnLFxyXG4gICAgICAgICAgICAnU2VhcmNoJ1xyXG4gICAgICAgIF07XHJcbiAgICB9XHJcblxyXG4gICAgbWFwRGF0YUZpZWxkcyhwcm9wcykge1xyXG4gICAgICAgIHRoaXMua2V5RmllbGQgPSBwcm9wcy5rZXlGaWVsZCB8fCAna2V5JztcclxuICAgICAgICB0aGlzLmtleUhlYWRlciA9IHByb3BzLmtleUhlYWRlciB8fCAnS2V5JztcclxuICAgICAgICB0aGlzLnZhbHVlRmllbGQgPSBwcm9wcy52YWx1ZUZpZWxkIHx8ICd2YWx1ZSc7XHJcbiAgICAgICAgdGhpcy52YWx1ZUhlYWRlciA9IHByb3BzLnZhbHVlSGVhZGVyIHx8ICdWYWx1ZSc7XHJcbiAgICAgICAgdGhpcy5jaGlsZHJlbkZpZWxkID0gcHJvcHMuY2hpbGRyZW5GaWVsZCB8fCAnY2hpbGRyZW4nO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQmVnaW5uaW5nQWN0aW9uKGUpIHtcclxuICAgICAgICBpZiAoZS5yZXF1ZXN0VHlwZSA9PT0gJ2FkZCcpXHJcbiAgICAgICAgICAgIGUuZGF0YS5faWQgPSB1dWlkKCk7XHJcbiAgICAgICAgICAgIC8vIGUuZGF0YS5zdWJrZXlzID0gW1xyXG4gICAgICAgICAgICAvLyAgICAge1xyXG4gICAgICAgICAgICAvLyAgICAgICAgIF9pZDogdXVpZCgpLFxyXG4gICAgICAgICAgICAvLyAgICAgICAgIGtleTogJ25ld19rZXknLFxyXG4gICAgICAgICAgICAvLyAgICAgICAgIHZhbHVlOiAnbmV3X3ZhbHVlJ1xyXG4gICAgICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgICAgICAvLyBdXHJcbiAgICB9XHJcblxyXG4gICAgb25FZGl0aW5nQ2VsbChlKSB7XHJcbiAgICAgICAgaWYgKGUuY29sdW1uTmFtZSA9PT0gdGhpcy52YWx1ZUZpZWxkICYmICEhZS5yb3dEYXRhW3RoaXMuY2hpbGRyZW5GaWVsZF0pIHtcclxuICAgICAgICAgICAgZS5jYW5jZWwgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIDxkaXY+XHJcbiAgICAgICAgICAgIDxUcmVlR3JpZENvbXBvbmVudCAgZGF0YVNvdXJjZT17dGhpcy5kYXRhU291cmNlfSB0cmVlQ29sdW1uSW5kZXg9ezF9IGNoaWxkTWFwcGluZz17dGhpcy5jaGlsZHJlbkZpZWxkfSBlbmFibGVDb2xsYXBzZUFsbD17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGxvd1Jlb3JkZXJpbmc9J3RydWUnIGFsbG93RmlsdGVyaW5nPSd0cnVlJyBhbGxvd1NvcnRpbmc9J3RydWUnIGZpbHRlclNldHRpbmdzPXt7IHR5cGU6ICdNZW51JywgaGllcmFyY2h5TW9kZTogJ1BhcmVudCcgfX0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWRpdFNldHRpbmdzPXt0aGlzLmVkaXRPcHRpb25zfSBjb250ZXh0TWVudUl0ZW1zPXt0aGlzLmNvbnRleHRNZW51SXRlbXN9IHRvb2xiYXI9e3RoaXMudG9vbGJhck9wdGlvbnN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uQmVnaW49e2UgPT4gdGhpcy5vbkJlZ2lubmluZ0FjdGlvbihlKX0gY2VsbEVkaXQ9e2UgPT4gdGhpcy5vbkVkaXRpbmdDZWxsKGUpfT5cclxuICAgICAgICAgICAgICAgIDxDb2x1bW5zRGlyZWN0aXZlPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDb2x1bW5EaXJlY3RpdmUgZmllbGQ9J19pZCcgaXNQcmltYXJ5S2V5PXt0cnVlfSB2aXNpYmxlPXtmYWxzZX0vPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDb2x1bW5EaXJlY3RpdmUgZmllbGQ9e3RoaXMua2V5RmllbGR9IGhlYWRlclRleHQ9e3RoaXMua2V5SGVhZGVyfSB3aWR0aD0nMjAwJyB2YWxpZGF0aW9uUnVsZXM9e3RoaXMuZmllbGRSZXF1aXJlZH0vPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDb2x1bW5EaXJlY3RpdmUgZmllbGQ9e3RoaXMudmFsdWVGaWVsZH0gaGVhZGVyVGV4dD17dGhpcy5rZXlWYWx1ZX0gd2lkdGg9JyonLz5cclxuICAgICAgICAgICAgICAgIDwvQ29sdW1uc0RpcmVjdGl2ZT5cclxuICAgICAgICAgICAgICAgIDxJbmplY3Qgc2VydmljZXM9e1tGaWx0ZXIsIFNvcnQsIFJlb3JkZXIsIEVkaXQsIENvbnRleHRNZW51LCBSZXNpemUsIFRvb2xiYXJdfS8+XHJcbiAgICAgICAgICAgIDwvVHJlZUdyaWRDb21wb25lbnQ+XHJcbiAgICAgICAgPC9kaXY+IFxyXG4gICAgfVxyXG59XHJcblxyXG5OZXN0ZWREYXRhQ1JVRC5kZWZhdWx0UHJvcHMgPSB7fTtcclxuXHJcbk5lc3RlZERhdGFDUlVELnByb3BUeXBlcyA9IHtcclxuICAgIC8qKlxyXG4gICAgICogVGhlIElEIHVzZWQgdG8gaWRlbnRpZnkgdGhpcyBjb21wb25lbnQgaW4gRGFzaCBjYWxsYmFja3MuXHJcbiAgICAgKi9cclxuICAgIGlkOiBQcm9wVHlwZXMuc3RyaW5nXHJcbn07Il0sInNvdXJjZVJvb3QiOiIifQ==