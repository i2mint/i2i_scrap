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
        mode: 'Cell',
        newRowPosition: 'Below'
      };
      this.contextMenuItems = ['AutoFit', 'AutoFitAll', 'SortAscending', 'SortDescending', 'Edit', 'Delete', 'AddRow'];
      this.toolbarOptions = [{
        id: 'add',
        text: 'Add...',
        prefixIcon: 'e-add'
      }, {
        id: 'addSection',
        text: 'Add Section',
        prefixIcon: 'e-add'
      }, 'Delete', 'Update', 'Cancel', {
        type: 'Separator'
      }, 'Search', 'ExpandAll', 'CollapseAll'];
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
    key: "onClickingOnToolbar",
    value: function onClickingOnToolbar(e) {}
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
        },
        toolbarClick: function toolbarClick(e) {
          return _this2.onClickingOnToolbar(e);
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
        headerText: this.valueHeader,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kYXNoX3RvX3JlYWN0Ly4vc3JjL2xpYi9jb21wb25lbnRzL25lc3RlZC1kYXRhLWNydWQvTmVzdGVkRGF0YUNSVUQucmVhY3QuanMiXSwibmFtZXMiOlsiTmVzdGVkRGF0YUNSVUQiLCJwcm9wcyIsInNldFRyZWVHcmlkT3B0aW9ucyIsIm1hcERhdGFGaWVsZHMiLCJmaWVsZFJlcXVpcmVkIiwicmVxdWlyZWQiLCJkYXRhU291cmNlIiwibWFwIiwiZSIsIl9pZCIsInV1aWQiLCJlZGl0T3B0aW9ucyIsImFsbG93QWRkaW5nIiwiYWxsb3dEZWxldGluZyIsImFsbG93RWRpdGluZyIsIm1vZGUiLCJuZXdSb3dQb3NpdGlvbiIsImNvbnRleHRNZW51SXRlbXMiLCJ0b29sYmFyT3B0aW9ucyIsImlkIiwidGV4dCIsInByZWZpeEljb24iLCJ0eXBlIiwia2V5RmllbGQiLCJrZXlIZWFkZXIiLCJ2YWx1ZUZpZWxkIiwidmFsdWVIZWFkZXIiLCJjaGlsZHJlbkZpZWxkIiwicmVxdWVzdFR5cGUiLCJkYXRhIiwiY29sdW1uTmFtZSIsInJvd0RhdGEiLCJjYW5jZWwiLCJoaWVyYXJjaHlNb2RlIiwib25CZWdpbm5pbmdBY3Rpb24iLCJvbkVkaXRpbmdDZWxsIiwib25DbGlja2luZ09uVG9vbGJhciIsIkZpbHRlciIsIlNvcnQiLCJSZW9yZGVyIiwiRWRpdCIsIkNvbnRleHRNZW51IiwiUmVzaXplIiwiVG9vbGJhciIsIlJlYWN0IiwiZGVmYXVsdFByb3BzIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic3RyaW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztJQUVxQkEsYzs7Ozs7QUFDakIsMEJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDZiw4QkFBTUEsS0FBTjs7QUFDQSxVQUFLQyxrQkFBTDs7QUFDQSxVQUFLQyxhQUFM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YWQ3NTMwLW1haW4td3BzLWhtci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRyZWVHcmlkQ29tcG9uZW50LCBDb2x1bW5zRGlyZWN0aXZlLCBDb2x1bW5EaXJlY3RpdmUsIEZpbHRlciwgU29ydCwgUmVvcmRlciwgRWRpdCwgQ29udGV4dE1lbnUsIFJlc2l6ZSwgVG9vbGJhciwgSW5qZWN0IH0gZnJvbSAnQHN5bmNmdXNpb24vZWoyLXJlYWN0LXRyZWVncmlkJztcclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgJy4vbmVzdGVkLWRhdGEtY3J1ZC5jc3MnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgeyB2NCBhcyB1dWlkIH0gZnJvbSAndXVpZCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXN0ZWREYXRhQ1JVRCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLnNldFRyZWVHcmlkT3B0aW9ucygpO1xyXG4gICAgICAgIHRoaXMubWFwRGF0YUZpZWxkcyhwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5maWVsZFJlcXVpcmVkID0geyByZXF1aXJlZDogdHJ1ZSB9O1xyXG4gICAgICAgIHRoaXMuZGF0YVNvdXJjZSA9IHRoaXMucHJvcHMuZGF0YVNvdXJjZS5tYXAoZSA9PiB7cmV0dXJuIHtfaWQ6IHV1aWQoKSwgLi4uZX19KVxyXG4gICAgfVxyXG5cclxuICAgIHNldFRyZWVHcmlkT3B0aW9ucygpIHtcclxuICAgICAgICB0aGlzLmVkaXRPcHRpb25zID0ge1xyXG4gICAgICAgICAgICBhbGxvd0FkZGluZzogdHJ1ZSxcclxuICAgICAgICAgICAgYWxsb3dEZWxldGluZzogdHJ1ZSxcclxuICAgICAgICAgICAgYWxsb3dFZGl0aW5nOiB0cnVlLFxyXG4gICAgICAgICAgICBtb2RlOiAnQ2VsbCcsXHJcbiAgICAgICAgICAgIG5ld1Jvd1Bvc2l0aW9uOiAnQmVsb3cnLFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5jb250ZXh0TWVudUl0ZW1zID0gW1xyXG4gICAgICAgICAgICAnQXV0b0ZpdCcsXHJcbiAgICAgICAgICAgICdBdXRvRml0QWxsJyxcclxuICAgICAgICAgICAgJ1NvcnRBc2NlbmRpbmcnLFxyXG4gICAgICAgICAgICAnU29ydERlc2NlbmRpbmcnLFxyXG4gICAgICAgICAgICAnRWRpdCcsIFxyXG4gICAgICAgICAgICAnRGVsZXRlJyxcclxuICAgICAgICAgICAgJ0FkZFJvdycsXHJcbiAgICAgICAgXTtcclxuICAgICAgICB0aGlzLnRvb2xiYXJPcHRpb25zID0gW1xyXG4gICAgICAgICAgICB7aWQ6J2FkZCcgLHRleHQ6ICdBZGQuLi4nLCBwcmVmaXhJY29uOidlLWFkZCd9LFxyXG4gICAgICAgICAgICB7aWQ6J2FkZFNlY3Rpb24nICx0ZXh0OiAnQWRkIFNlY3Rpb24nLCBwcmVmaXhJY29uOidlLWFkZCd9LFxyXG4gICAgICAgICAgICAnRGVsZXRlJyxcclxuICAgICAgICAgICAgJ1VwZGF0ZScsXHJcbiAgICAgICAgICAgICdDYW5jZWwnLFxyXG4gICAgICAgICAgICB7dHlwZTogJ1NlcGFyYXRvcid9LFxyXG4gICAgICAgICAgICAnU2VhcmNoJyxcclxuICAgICAgICAgICAgJ0V4cGFuZEFsbCcsXHJcbiAgICAgICAgICAgICdDb2xsYXBzZUFsbCcsXHJcbiAgICAgICAgXTtcclxuICAgIH1cclxuXHJcbiAgICBtYXBEYXRhRmllbGRzKHByb3BzKSB7XHJcbiAgICAgICAgdGhpcy5rZXlGaWVsZCA9IHByb3BzLmtleUZpZWxkIHx8ICdrZXknO1xyXG4gICAgICAgIHRoaXMua2V5SGVhZGVyID0gcHJvcHMua2V5SGVhZGVyIHx8ICdLZXknO1xyXG4gICAgICAgIHRoaXMudmFsdWVGaWVsZCA9IHByb3BzLnZhbHVlRmllbGQgfHwgJ3ZhbHVlJztcclxuICAgICAgICB0aGlzLnZhbHVlSGVhZGVyID0gcHJvcHMudmFsdWVIZWFkZXIgfHwgJ1ZhbHVlJztcclxuICAgICAgICB0aGlzLmNoaWxkcmVuRmllbGQgPSBwcm9wcy5jaGlsZHJlbkZpZWxkIHx8ICdjaGlsZHJlbic7XHJcbiAgICB9XHJcblxyXG4gICAgb25CZWdpbm5pbmdBY3Rpb24oZSkge1xyXG4gICAgICAgIGlmIChlLnJlcXVlc3RUeXBlID09PSAnYWRkJylcclxuICAgICAgICAgICAgZS5kYXRhLl9pZCA9IHV1aWQoKTtcclxuICAgICAgICAgICAgLy8gZS5kYXRhLnN1YmtleXMgPSBbXHJcbiAgICAgICAgICAgIC8vICAgICB7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgX2lkOiB1dWlkKCksXHJcbiAgICAgICAgICAgIC8vICAgICAgICAga2V5OiAnbmV3X2tleScsXHJcbiAgICAgICAgICAgIC8vICAgICAgICAgdmFsdWU6ICduZXdfdmFsdWUnXHJcbiAgICAgICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgICAgIC8vIF1cclxuICAgIH1cclxuXHJcbiAgICBvbkVkaXRpbmdDZWxsKGUpIHtcclxuICAgICAgICBpZiAoZS5jb2x1bW5OYW1lID09PSB0aGlzLnZhbHVlRmllbGQgJiYgISFlLnJvd0RhdGFbdGhpcy5jaGlsZHJlbkZpZWxkXSkge1xyXG4gICAgICAgICAgICBlLmNhbmNlbCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBvbkNsaWNraW5nT25Ub29sYmFyKGUpIHtcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIDxkaXY+XHJcbiAgICAgICAgICAgIDxUcmVlR3JpZENvbXBvbmVudCAgZGF0YVNvdXJjZT17dGhpcy5kYXRhU291cmNlfSB0cmVlQ29sdW1uSW5kZXg9ezF9IGNoaWxkTWFwcGluZz17dGhpcy5jaGlsZHJlbkZpZWxkfSBlbmFibGVDb2xsYXBzZUFsbD17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGxvd1Jlb3JkZXJpbmc9J3RydWUnIGFsbG93RmlsdGVyaW5nPSd0cnVlJyBhbGxvd1NvcnRpbmc9J3RydWUnIGZpbHRlclNldHRpbmdzPXt7IHR5cGU6ICdNZW51JywgaGllcmFyY2h5TW9kZTogJ1BhcmVudCcgfX0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWRpdFNldHRpbmdzPXt0aGlzLmVkaXRPcHRpb25zfSBjb250ZXh0TWVudUl0ZW1zPXt0aGlzLmNvbnRleHRNZW51SXRlbXN9IHRvb2xiYXI9e3RoaXMudG9vbGJhck9wdGlvbnN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uQmVnaW49e2UgPT4gdGhpcy5vbkJlZ2lubmluZ0FjdGlvbihlKX0gY2VsbEVkaXQ9e2UgPT4gdGhpcy5vbkVkaXRpbmdDZWxsKGUpfSB0b29sYmFyQ2xpY2s9e2UgPT4gdGhpcy5vbkNsaWNraW5nT25Ub29sYmFyKGUpfT5cclxuICAgICAgICAgICAgICAgIDxDb2x1bW5zRGlyZWN0aXZlPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDb2x1bW5EaXJlY3RpdmUgZmllbGQ9J19pZCcgaXNQcmltYXJ5S2V5PXt0cnVlfSB2aXNpYmxlPXtmYWxzZX0vPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDb2x1bW5EaXJlY3RpdmUgZmllbGQ9e3RoaXMua2V5RmllbGR9IGhlYWRlclRleHQ9e3RoaXMua2V5SGVhZGVyfSB3aWR0aD0nMjAwJyB2YWxpZGF0aW9uUnVsZXM9e3RoaXMuZmllbGRSZXF1aXJlZH0vPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDb2x1bW5EaXJlY3RpdmUgZmllbGQ9e3RoaXMudmFsdWVGaWVsZH0gaGVhZGVyVGV4dD17dGhpcy52YWx1ZUhlYWRlcn0gd2lkdGg9JyonLz5cclxuICAgICAgICAgICAgICAgIDwvQ29sdW1uc0RpcmVjdGl2ZT5cclxuICAgICAgICAgICAgICAgIDxJbmplY3Qgc2VydmljZXM9e1tGaWx0ZXIsIFNvcnQsIFJlb3JkZXIsIEVkaXQsIENvbnRleHRNZW51LCBSZXNpemUsIFRvb2xiYXJdfS8+XHJcbiAgICAgICAgICAgIDwvVHJlZUdyaWRDb21wb25lbnQ+XHJcbiAgICAgICAgPC9kaXY+IFxyXG4gICAgfVxyXG59XHJcblxyXG5OZXN0ZWREYXRhQ1JVRC5kZWZhdWx0UHJvcHMgPSB7fTtcclxuXHJcbk5lc3RlZERhdGFDUlVELnByb3BUeXBlcyA9IHtcclxuICAgIC8qKlxyXG4gICAgICogVGhlIElEIHVzZWQgdG8gaWRlbnRpZnkgdGhpcyBjb21wb25lbnQgaW4gRGFzaCBjYWxsYmFja3MuXHJcbiAgICAgKi9cclxuICAgIGlkOiBQcm9wVHlwZXMuc3RyaW5nXHJcbn07Il0sInNvdXJjZVJvb3QiOiIifQ==