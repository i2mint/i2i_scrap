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

 // import { ContextMenuComponent } from '@syncfusion/ej2-react-navigations';






var NestedDataCRUD = /*#__PURE__*/function (_React$Component) {
  _inherits(NestedDataCRUD, _React$Component);

  var _super = _createSuper(NestedDataCRUD);

  function NestedDataCRUD(props) {
    var _this;

    _classCallCheck(this, NestedDataCRUD);

    _this = _super.call(this, props);

    _this.setValidationRules();

    _this.setDisplayProperties(props);

    _this.initTreeGrid(props);

    _this.initDataSource(); // this.initAddMenu();


    return _this;
  }

  _createClass(NestedDataCRUD, [{
    key: "initTreeGrid",
    value: function initTreeGrid(props) {
      this.setTreeGridOptions();
      this.mapDataFields(props);
    }
  }, {
    key: "setTreeGridOptions",
    value: function setTreeGridOptions() {
      this.editOptions = {
        allowAdding: true,
        allowDeleting: true,
        allowEditing: true,
        mode: 'Cell',
        newRowPosition: 'Below'
      };
      this.contextMenuItems = ['AutoFit', 'AutoFitAll', 'SortAscending', 'SortDescending', 'Delete', {
        id: 'new',
        text: 'New',
        items: [{
          id: 'addNode',
          text: this.nodeLabel
        }, {
          id: 'addLeaf',
          text: this.leafLabel
        }]
      }];
      this.toolbarOptions = [// {id:'_gridcontrol_add' ,text: 'Add Leaf', prefixIcon:'e-add'},
      // {id:'add' ,text: 'Add...', prefixIcon:'e-add'},
      // 'Delete',
      // 'Update',
      // 'Cancel',
      // {type: 'Separator'},
      'Search', 'ExpandAll', 'CollapseAll'];
    }
  }, {
    key: "mapDataFields",
    value: function mapDataFields(props) {
      this.keyField = props.keyField || 'key';
      this.valueField = props.valueField || 'value';
      this.childrenField = props.childrenField || 'children';
    } // initAddMenu() {
    //     this.addMenuItems = [
    //         { id: 'addNewItem', text: 'New Item' },
    //         { id: 'addNewSection', text: 'New Section' },
    //     ];
    // }

  }, {
    key: "setValidationRules",
    value: function setValidationRules() {
      this.fieldRequired = {
        required: true
      };
    }
  }, {
    key: "initDataSource",
    value: function initDataSource() {
      this.dataSource = this.props.dataSource;
      this.dataSource = this.addIds(this.dataSource);
      this.dataSource = this.props.dataSource.map(function (e) {
        return _objectSpread({
          _id: Object(uuid__WEBPACK_IMPORTED_MODULE_4__["v4"])()
        }, e);
      });
    }
  }, {
    key: "setDisplayProperties",
    value: function setDisplayProperties(props) {
      this.keyHeader = props.keyHeader || 'Key';
      this.valueHeader = props.valueHeader || 'Value';
      this.nodeLabel = props.nodeLabel || 'Node';
      this.leafLabel = props.leafLabel || 'Leaf';
    }
  }, {
    key: "addIds",
    value: function addIds(items) {
      var _this2 = this;

      items.forEach(function (e) {
        if (!!e[_this2.childrenField]) {
          e[_this2.childrenField] = _this2.addIds(e[_this2.childrenField]);
        }
      });
      return items.map(function (e) {
        return _objectSpread({
          _id: Object(uuid__WEBPACK_IMPORTED_MODULE_4__["v4"])()
        }, e);
      });
    }
  }, {
    key: "onOpeningContextMenu",
    value: function onOpeningContextMenu(e) {
      var display = !!e.rowInfo.rowData && !e.rowInfo.rowData[this.childrenField] ? 'none' : 'block';
      document.querySelectorAll('li#new')[0].setAttribute('style', "display: ".concat(display, ";"));
    }
  }, {
    key: "onBeginningAction",
    value: function onBeginningAction(e) {// if (e.requestType === 'add')
      //     e.data._id = uuid();
    }
  }, {
    key: "onEditingCell",
    value: function onEditingCell(e) {
      if (e.columnName === this.valueField && !!e.rowData[this.childrenField]) {
        e.cancel = true;
      }
    }
  }, {
    key: "onSelectingMenuItem",
    value: function onSelectingMenuItem(e) {
      if (e.item.id === 'addNode' || e.item.id === 'addLeaf') {
        this.addingRow = true;
        this.selectedIndex = this.treeGrid.getSelectedRowIndexes()[0];
        var selectedItem = this.treeGrid.getSelectedRecords()[0];
        var newRecord = {
          _id: Object(uuid__WEBPACK_IMPORTED_MODULE_4__["v4"])()
        };

        if (e.item.id === 'addLeaf') {
          newRecord[this.keyField] = "New ".concat(this.leafLabel);
          newRecord[this.valueField] = "New ".concat(this.valueHeader);
        } else {
          newRecord[this.keyField] = "New ".concat(this.nodeLabel);
          newRecord[this.childrenField] = [];
        }

        selectedItem[this.childrenField].unshift(newRecord);
        this.treeGrid.dataSource = this.dataSource.map(function (e) {
          return e;
        });
      }
    }
  }, {
    key: "onBindingData",
    value: function onBindingData(e) {
      if (this.addingRow) {
        this.treeGrid.selectRow(this.selectedIndex);
      }
    }
  }, {
    key: "onSelectingRow",
    value: function onSelectingRow(e) {
      if (this.addingRow) {
        console.log(e.row);
        this.treeGrid.expandRow(e.row);
        this.addingRow = false; // this.treeGrid.editCell(this.selectedIndex + 1, this.keyField)
        // this.treeGrid.refresh();
      }
    } // onClickingOnToolbar(e) {
    //     if (e.item.id === 'add') {
    //         this.addMenu.open();
    //     }
    // }
    // onSelectingAddOption(e) {
    //     const newRow = {_id: uuid()};
    //     if (e.item.id === 'addNewSection') {
    //         const child = {_id: uuid()};
    //         child[this.keyField] = `New ${this.keyHeader}`;
    //         child[this.valueField] = `New ${this.valueHeader}`;
    //         newRow[this.childrenField] = [child];
    //     }
    //     this.treeGrid.addRecord(newRow);
    //     setTimeout(() => {
    //         console.log('newRow._id', newRow._id);
    //         let i = 0;
    //         while (true) {
    //             const row = this.treeGrid.getRowByIndex(i);
    //             console.log(row.cells[0].innerText)
    //             if (row.cells[0].innerText == newRow._id) {
    //                 break;
    //             }
    //             i++;
    //         }
    //         this.treeGrid.editCell(i, this.keyField)
    //     }, 1000);
    // }

  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_syncfusion_ej2_react_treegrid__WEBPACK_IMPORTED_MODULE_0__["TreeGridComponent"], {
        ref: function ref(c) {
          return _this3.treeGrid = c;
        },
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
          return _this3.onBeginningAction(e);
        },
        cellEdit: function cellEdit(e) {
          return _this3.onEditingCell(e);
        },
        contextMenuOpen: function contextMenuOpen(e) {
          return _this3.onOpeningContextMenu(e);
        },
        contextMenuClick: function contextMenuClick(e) {
          return _this3.onSelectingMenuItem(e);
        },
        dataBound: function dataBound(e) {
          return _this3.onBindingData(e);
        },
        rowSelected: function rowSelected(e) {
          return _this3.onSelectingRow(e);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kYXNoX3RvX3JlYWN0Ly4vc3JjL2xpYi9jb21wb25lbnRzL25lc3RlZC1kYXRhLWNydWQvTmVzdGVkRGF0YUNSVUQucmVhY3QuanMiXSwibmFtZXMiOlsiTmVzdGVkRGF0YUNSVUQiLCJwcm9wcyIsInNldFZhbGlkYXRpb25SdWxlcyIsInNldERpc3BsYXlQcm9wZXJ0aWVzIiwiaW5pdFRyZWVHcmlkIiwiaW5pdERhdGFTb3VyY2UiLCJzZXRUcmVlR3JpZE9wdGlvbnMiLCJtYXBEYXRhRmllbGRzIiwiZWRpdE9wdGlvbnMiLCJhbGxvd0FkZGluZyIsImFsbG93RGVsZXRpbmciLCJhbGxvd0VkaXRpbmciLCJtb2RlIiwibmV3Um93UG9zaXRpb24iLCJjb250ZXh0TWVudUl0ZW1zIiwiaWQiLCJ0ZXh0IiwiaXRlbXMiLCJub2RlTGFiZWwiLCJsZWFmTGFiZWwiLCJ0b29sYmFyT3B0aW9ucyIsImtleUZpZWxkIiwidmFsdWVGaWVsZCIsImNoaWxkcmVuRmllbGQiLCJmaWVsZFJlcXVpcmVkIiwicmVxdWlyZWQiLCJkYXRhU291cmNlIiwiYWRkSWRzIiwibWFwIiwiZSIsIl9pZCIsInV1aWQiLCJrZXlIZWFkZXIiLCJ2YWx1ZUhlYWRlciIsImZvckVhY2giLCJkaXNwbGF5Iiwicm93SW5mbyIsInJvd0RhdGEiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJzZXRBdHRyaWJ1dGUiLCJjb2x1bW5OYW1lIiwiY2FuY2VsIiwiaXRlbSIsImFkZGluZ1JvdyIsInNlbGVjdGVkSW5kZXgiLCJ0cmVlR3JpZCIsImdldFNlbGVjdGVkUm93SW5kZXhlcyIsInNlbGVjdGVkSXRlbSIsImdldFNlbGVjdGVkUmVjb3JkcyIsIm5ld1JlY29yZCIsInVuc2hpZnQiLCJzZWxlY3RSb3ciLCJjb25zb2xlIiwibG9nIiwicm93IiwiZXhwYW5kUm93IiwiYyIsInR5cGUiLCJoaWVyYXJjaHlNb2RlIiwib25CZWdpbm5pbmdBY3Rpb24iLCJvbkVkaXRpbmdDZWxsIiwib25PcGVuaW5nQ29udGV4dE1lbnUiLCJvblNlbGVjdGluZ01lbnVJdGVtIiwib25CaW5kaW5nRGF0YSIsIm9uU2VsZWN0aW5nUm93IiwiRmlsdGVyIiwiU29ydCIsIlJlb3JkZXIiLCJFZGl0IiwiQ29udGV4dE1lbnUiLCJSZXNpemUiLCJUb29sYmFyIiwiUmVhY3QiLCJkZWZhdWx0UHJvcHMiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJzdHJpbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBOztJQUVxQkEsYzs7Ozs7QUFDakIsMEJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDZiw4QkFBTUEsS0FBTjs7QUFDQSxVQUFLQyxrQkFBTDs7QUFDQSxVQUFLQyxvQkFBTCxDQUEwQkYsS0FBMUI7O0FBQ0EsVUFBS0csWUFBTCxDQUFrQkgsS0FBbEI7O0FBQ0EsVUFBS0ksY0FBTCxHQUxlLENBTWY7OztBQU5lO0FBT2xCOzs7O2lDQUVZSixLLEVBQU87QUFDaEIsV0FBS0ssa0JBQUw7QUFDQSxXQUFLQyxhQUFMLENBQW1CTixLQUFuQjtBQUNIOzs7eUNBRW9CO0FBQ2pCLFdBQUtPLFdBQUwsR0FBbUI7QUFDZkMsbUJBQVcsRUFBRSxJQURFO0FBRWZDLHFCQUFhLEVBQUUsSUFGQTtBQUdmQyxvQkFBWSxFQUFFLElBSEM7QUFJZkMsWUFBSSxFQUFFLE1BSlM7QUFLZkMsc0JBQWMsRUFBRTtBQUxELE9BQW5CO0FBT0EsV0FBS0MsZ0JBQUwsR0FBd0IsQ0FDcEIsU0FEb0IsRUFFcEIsWUFGb0IsRUFHcEIsZUFIb0IsRUFJcEIsZ0JBSm9CLEVBS3BCLFFBTG9CLEVBTXBCO0FBQ0lDLFVBQUUsRUFBRSxLQURSO0FBRUlDLFlBQUksRUFBRSxLQUZWO0FBR0lDLGFBQUssRUFBRSxDQUNIO0FBQUVGLFlBQUUsRUFBRSxTQUFOO0FBQWlCQyxjQUFJLEVBQUUsS0FBS0U7QUFBNUIsU0FERyxFQUVIO0FBQUVILFlBQUUsRUFBRSxTQUFOO0FBQWlCQyxjQUFJLEVBQUUsS0FBS0c7QUFBNUIsU0FGRztBQUhYLE9BTm9CLENBQXhCO0FBZUEsV0FBS0MsY0FBTCxHQUFzQixDQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQVBrQixFQVFsQixXQVJrQixFQVNsQixhQVRrQixDQUF0QjtBQVdIOzs7a0NBRWFuQixLLEVBQU87QUFDakIsV0FBS29CLFFBQUwsR0FBZ0JwQixLQUFLLENBQUNvQixRQUFOLElBQWtCLEtBQWxDO0FBQ0EsV0FBS0MsVUFBTCxHQUFrQnJCLEtBQUssQ0FBQ3FCLFVBQU4sSUFBb0IsT0FBdEM7QUFDQSxXQUFLQyxhQUFMLEdBQXFCdEIsS0FBSyxDQUFDc0IsYUFBTixJQUF1QixVQUE1QztBQUNILEssQ0FFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7eUNBRXFCO0FBQ2pCLFdBQUtDLGFBQUwsR0FBcUI7QUFBRUMsZ0JBQVEsRUFBRTtBQUFaLE9BQXJCO0FBQ0g7OztxQ0FFZ0I7QUFDYixXQUFLQyxVQUFMLEdBQWtCLEtBQUt6QixLQUFMLENBQVd5QixVQUE3QjtBQUNBLFdBQUtBLFVBQUwsR0FBa0IsS0FBS0MsTUFBTCxDQUFZLEtBQUtELFVBQWpCLENBQWxCO0FBQ0EsV0FBS0EsVUFBTCxHQUFrQixLQUFLekIsS0FBTCxDQUFXeUIsVUFBWCxDQUFzQkUsR0FBdEIsQ0FBMEIsVUFBQUMsQ0FBQyxFQUFJO0FBQUU7QUFBU0MsYUFBRyxFQUFFQywrQ0FBSTtBQUFsQixXQUF5QkYsQ0FBekI7QUFBK0IsT0FBaEUsQ0FBbEI7QUFDSDs7O3lDQUVvQjVCLEssRUFBTztBQUN4QixXQUFLK0IsU0FBTCxHQUFpQi9CLEtBQUssQ0FBQytCLFNBQU4sSUFBbUIsS0FBcEM7QUFDQSxXQUFLQyxXQUFMLEdBQW1CaEMsS0FBSyxDQUFDZ0MsV0FBTixJQUFxQixPQUF4QztBQUNBLFdBQUtmLFNBQUwsR0FBaUJqQixLQUFLLENBQUNpQixTQUFOLElBQW1CLE1BQXBDO0FBQ0EsV0FBS0MsU0FBTCxHQUFpQmxCLEtBQUssQ0FBQ2tCLFNBQU4sSUFBbUIsTUFBcEM7QUFDSDs7OzJCQUVNRixLLEVBQU87QUFBQTs7QUFDVkEsV0FBSyxDQUFDaUIsT0FBTixDQUFjLFVBQUFMLENBQUMsRUFBSTtBQUNmLFlBQUksQ0FBQyxDQUFDQSxDQUFDLENBQUMsTUFBSSxDQUFDTixhQUFOLENBQVAsRUFBNkI7QUFDekJNLFdBQUMsQ0FBQyxNQUFJLENBQUNOLGFBQU4sQ0FBRCxHQUF3QixNQUFJLENBQUNJLE1BQUwsQ0FBWUUsQ0FBQyxDQUFDLE1BQUksQ0FBQ04sYUFBTixDQUFiLENBQXhCO0FBQ0g7QUFDSixPQUpEO0FBS0EsYUFBT04sS0FBSyxDQUFDVyxHQUFOLENBQVUsVUFBQUMsQ0FBQyxFQUFJO0FBQUU7QUFBU0MsYUFBRyxFQUFFQywrQ0FBSTtBQUFsQixXQUF5QkYsQ0FBekI7QUFBK0IsT0FBaEQsQ0FBUDtBQUNIOzs7eUNBRW9CQSxDLEVBQUc7QUFDcEIsVUFBSU0sT0FBTyxHQUFHLENBQUMsQ0FBQ04sQ0FBQyxDQUFDTyxPQUFGLENBQVVDLE9BQVosSUFBdUIsQ0FBQ1IsQ0FBQyxDQUFDTyxPQUFGLENBQVVDLE9BQVYsQ0FBa0IsS0FBS2QsYUFBdkIsQ0FBeEIsR0FBZ0UsTUFBaEUsR0FBeUUsT0FBdkY7QUFDQWUsY0FBUSxDQUFDQyxnQkFBVCxDQUEwQixRQUExQixFQUFvQyxDQUFwQyxFQUF1Q0MsWUFBdkMsQ0FBb0QsT0FBcEQscUJBQXlFTCxPQUF6RTtBQUNIOzs7c0NBRWlCTixDLEVBQUcsQ0FDakI7QUFDQTtBQUNIOzs7a0NBRWFBLEMsRUFBRztBQUNiLFVBQUlBLENBQUMsQ0FBQ1ksVUFBRixLQUFpQixLQUFLbkIsVUFBdEIsSUFBb0MsQ0FBQyxDQUFDTyxDQUFDLENBQUNRLE9BQUYsQ0FBVSxLQUFLZCxhQUFmLENBQTFDLEVBQXlFO0FBQ3JFTSxTQUFDLENBQUNhLE1BQUYsR0FBVyxJQUFYO0FBQ0g7QUFDSjs7O3dDQUVtQmIsQyxFQUFHO0FBQ25CLFVBQUlBLENBQUMsQ0FBQ2MsSUFBRixDQUFPNUIsRUFBUCxLQUFjLFNBQWQsSUFBMkJjLENBQUMsQ0FBQ2MsSUFBRixDQUFPNUIsRUFBUCxLQUFjLFNBQTdDLEVBQXdEO0FBQ3BELGFBQUs2QixTQUFMLEdBQWlCLElBQWpCO0FBQ0EsYUFBS0MsYUFBTCxHQUFxQixLQUFLQyxRQUFMLENBQWNDLHFCQUFkLEdBQXNDLENBQXRDLENBQXJCO0FBQ0EsWUFBTUMsWUFBWSxHQUFHLEtBQUtGLFFBQUwsQ0FBY0csa0JBQWQsR0FBbUMsQ0FBbkMsQ0FBckI7QUFDQSxZQUFNQyxTQUFTLEdBQUc7QUFBRXBCLGFBQUcsRUFBRUMsK0NBQUk7QUFBWCxTQUFsQjs7QUFDQSxZQUFJRixDQUFDLENBQUNjLElBQUYsQ0FBTzVCLEVBQVAsS0FBYyxTQUFsQixFQUE2QjtBQUN6Qm1DLG1CQUFTLENBQUMsS0FBSzdCLFFBQU4sQ0FBVCxpQkFBa0MsS0FBS0YsU0FBdkM7QUFDQStCLG1CQUFTLENBQUMsS0FBSzVCLFVBQU4sQ0FBVCxpQkFBb0MsS0FBS1csV0FBekM7QUFDSCxTQUhELE1BSUs7QUFDRGlCLG1CQUFTLENBQUMsS0FBSzdCLFFBQU4sQ0FBVCxpQkFBa0MsS0FBS0gsU0FBdkM7QUFDQWdDLG1CQUFTLENBQUMsS0FBSzNCLGFBQU4sQ0FBVCxHQUFnQyxFQUFoQztBQUNIOztBQUNEeUIsb0JBQVksQ0FBQyxLQUFLekIsYUFBTixDQUFaLENBQWlDNEIsT0FBakMsQ0FBeUNELFNBQXpDO0FBQ0EsYUFBS0osUUFBTCxDQUFjcEIsVUFBZCxHQUEyQixLQUFLQSxVQUFMLENBQWdCRSxHQUFoQixDQUFvQixVQUFBQyxDQUFDO0FBQUEsaUJBQUlBLENBQUo7QUFBQSxTQUFyQixDQUEzQjtBQUNIO0FBQ0o7OztrQ0FFYUEsQyxFQUFHO0FBQ2IsVUFBSSxLQUFLZSxTQUFULEVBQW9CO0FBQ2hCLGFBQUtFLFFBQUwsQ0FBY00sU0FBZCxDQUF3QixLQUFLUCxhQUE3QjtBQUNIO0FBQ0o7OzttQ0FFY2hCLEMsRUFBRztBQUNkLFVBQUksS0FBS2UsU0FBVCxFQUFvQjtBQUNoQlMsZUFBTyxDQUFDQyxHQUFSLENBQVl6QixDQUFDLENBQUMwQixHQUFkO0FBQ0MsYUFBS1QsUUFBTCxDQUFjVSxTQUFkLENBQXdCM0IsQ0FBQyxDQUFDMEIsR0FBMUI7QUFDRCxhQUFLWCxTQUFMLEdBQWlCLEtBQWpCLENBSGdCLENBSWhCO0FBQ0E7QUFDSDtBQUNKLEssQ0FFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs2QkFFUztBQUFBOztBQUNMLDBCQUFPLDhFQUNILG9EQUFDLGdGQUFEO0FBQW1CLFdBQUcsRUFBRSxhQUFBYSxDQUFDO0FBQUEsaUJBQUksTUFBSSxDQUFDWCxRQUFMLEdBQWdCVyxDQUFwQjtBQUFBLFNBQXpCO0FBQ29CLGtCQUFVLEVBQUUsS0FBSy9CLFVBRHJDO0FBQ2lELHVCQUFlLEVBQUUsQ0FEbEU7QUFDcUUsb0JBQVksRUFBRSxLQUFLSCxhQUR4RjtBQUN1Ryx5QkFBaUIsRUFBRSxJQUQxSDtBQUVvQix1QkFBZSxFQUFDLE1BRnBDO0FBRTJDLHNCQUFjLEVBQUMsTUFGMUQ7QUFFaUUsb0JBQVksRUFBQyxNQUY5RTtBQUVxRixzQkFBYyxFQUFFO0FBQUVtQyxjQUFJLEVBQUUsTUFBUjtBQUFnQkMsdUJBQWEsRUFBRTtBQUEvQixTQUZyRztBQUdvQixvQkFBWSxFQUFFLEtBQUtuRCxXQUh2QztBQUdvRCx3QkFBZ0IsRUFBRSxLQUFLTSxnQkFIM0U7QUFHNkYsZUFBTyxFQUFFLEtBQUtNLGNBSDNHO0FBSW9CLG1CQUFXLEVBQUUscUJBQUFTLENBQUM7QUFBQSxpQkFBSSxNQUFJLENBQUMrQixpQkFBTCxDQUF1Qi9CLENBQXZCLENBQUo7QUFBQSxTQUpsQztBQUlpRSxnQkFBUSxFQUFFLGtCQUFBQSxDQUFDO0FBQUEsaUJBQUksTUFBSSxDQUFDZ0MsYUFBTCxDQUFtQmhDLENBQW5CLENBQUo7QUFBQSxTQUo1RTtBQUtvQix1QkFBZSxFQUFFLHlCQUFBQSxDQUFDO0FBQUEsaUJBQUksTUFBSSxDQUFDaUMsb0JBQUwsQ0FBMEJqQyxDQUExQixDQUFKO0FBQUEsU0FMdEM7QUFLd0Usd0JBQWdCLEVBQUUsMEJBQUFBLENBQUM7QUFBQSxpQkFBSSxNQUFJLENBQUNrQyxtQkFBTCxDQUF5QmxDLENBQXpCLENBQUo7QUFBQSxTQUwzRjtBQU1vQixpQkFBUyxFQUFFLG1CQUFBQSxDQUFDO0FBQUEsaUJBQUksTUFBSSxDQUFDbUMsYUFBTCxDQUFtQm5DLENBQW5CLENBQUo7QUFBQSxTQU5oQztBQU0yRCxtQkFBVyxFQUFFLHFCQUFBQSxDQUFDO0FBQUEsaUJBQUksTUFBSSxDQUFDb0MsY0FBTCxDQUFvQnBDLENBQXBCLENBQUo7QUFBQTtBQU56RSxzQkFPSSxvREFBQywrRUFBRCxxQkFDSSxvREFBQyw4RUFBRDtBQUFpQixhQUFLLEVBQUMsS0FBdkI7QUFBNkIsb0JBQVksRUFBRSxJQUEzQztBQUFpRCxlQUFPLEVBQUU7QUFBMUQsUUFESixlQUVJLG9EQUFDLDhFQUFEO0FBQWlCLGFBQUssRUFBRSxLQUFLUixRQUE3QjtBQUF1QyxrQkFBVSxFQUFFLEtBQUtXLFNBQXhEO0FBQW1FLGFBQUssRUFBQyxLQUF6RTtBQUErRSx1QkFBZSxFQUFFLEtBQUtSO0FBQXJHLFFBRkosZUFHSSxvREFBQyw4RUFBRDtBQUFpQixhQUFLLEVBQUUsS0FBS0YsVUFBN0I7QUFBeUMsa0JBQVUsRUFBRSxLQUFLVyxXQUExRDtBQUF1RSxhQUFLLEVBQUM7QUFBN0UsUUFISixDQVBKLGVBWUksb0RBQUMscUVBQUQ7QUFBUSxnQkFBUSxFQUFFLENBQUNpQyxxRUFBRCxFQUFTQyxtRUFBVCxFQUFlQyxzRUFBZixFQUF3QkMsbUVBQXhCLEVBQThCQywwRUFBOUIsRUFBMkNDLHFFQUEzQyxFQUFtREMsc0VBQW5EO0FBQWxCLFFBWkosQ0FERyxDQUFQO0FBaUJIOzs7O0VBN0x1Q0MsK0M7OztBQWdNNUN6RSxjQUFjLENBQUMwRSxZQUFmLEdBQThCLEVBQTlCO0FBRUExRSxjQUFjLENBQUMyRSxTQUFmLEdBQTJCO0FBQ3ZCOzs7QUFHQTVELElBQUUsRUFBRTZELGlEQUFTLENBQUNDO0FBSlMsQ0FBM0IsQyIsImZpbGUiOiIyYjY3MTM0LW1haW4td3BzLWhtci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRyZWVHcmlkQ29tcG9uZW50LCBDb2x1bW5zRGlyZWN0aXZlLCBDb2x1bW5EaXJlY3RpdmUsIEZpbHRlciwgU29ydCwgUmVvcmRlciwgRWRpdCwgQ29udGV4dE1lbnUsIFJlc2l6ZSwgVG9vbGJhciwgSW5qZWN0IH0gZnJvbSAnQHN5bmNmdXNpb24vZWoyLXJlYWN0LXRyZWVncmlkJztcclxuLy8gaW1wb3J0IHsgQ29udGV4dE1lbnVDb21wb25lbnQgfSBmcm9tICdAc3luY2Z1c2lvbi9lajItcmVhY3QtbmF2aWdhdGlvbnMnO1xyXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCAnLi9uZXN0ZWQtZGF0YS1jcnVkLmNzcyc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCB7IHY0IGFzIHV1aWQgfSBmcm9tICd1dWlkJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5lc3RlZERhdGFDUlVEIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuc2V0VmFsaWRhdGlvblJ1bGVzKCk7XHJcbiAgICAgICAgdGhpcy5zZXREaXNwbGF5UHJvcGVydGllcyhwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5pbml0VHJlZUdyaWQocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuaW5pdERhdGFTb3VyY2UoKTtcclxuICAgICAgICAvLyB0aGlzLmluaXRBZGRNZW51KCk7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdFRyZWVHcmlkKHByb3BzKSB7XHJcbiAgICAgICAgdGhpcy5zZXRUcmVlR3JpZE9wdGlvbnMoKTtcclxuICAgICAgICB0aGlzLm1hcERhdGFGaWVsZHMocHJvcHMpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFRyZWVHcmlkT3B0aW9ucygpIHtcclxuICAgICAgICB0aGlzLmVkaXRPcHRpb25zID0ge1xyXG4gICAgICAgICAgICBhbGxvd0FkZGluZzogdHJ1ZSxcclxuICAgICAgICAgICAgYWxsb3dEZWxldGluZzogdHJ1ZSxcclxuICAgICAgICAgICAgYWxsb3dFZGl0aW5nOiB0cnVlLFxyXG4gICAgICAgICAgICBtb2RlOiAnQ2VsbCcsXHJcbiAgICAgICAgICAgIG5ld1Jvd1Bvc2l0aW9uOiAnQmVsb3cnLFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5jb250ZXh0TWVudUl0ZW1zID0gW1xyXG4gICAgICAgICAgICAnQXV0b0ZpdCcsXHJcbiAgICAgICAgICAgICdBdXRvRml0QWxsJyxcclxuICAgICAgICAgICAgJ1NvcnRBc2NlbmRpbmcnLFxyXG4gICAgICAgICAgICAnU29ydERlc2NlbmRpbmcnLFxyXG4gICAgICAgICAgICAnRGVsZXRlJyxcclxuICAgICAgICAgICAgeyBcclxuICAgICAgICAgICAgICAgIGlkOiAnbmV3JywgXHJcbiAgICAgICAgICAgICAgICB0ZXh0OiAnTmV3JyxcclxuICAgICAgICAgICAgICAgIGl0ZW1zOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBpZDogJ2FkZE5vZGUnLCB0ZXh0OiB0aGlzLm5vZGVMYWJlbCB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgaWQ6ICdhZGRMZWFmJywgdGV4dDogdGhpcy5sZWFmTGFiZWwgfVxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIF07XHJcbiAgICAgICAgdGhpcy50b29sYmFyT3B0aW9ucyA9IFtcclxuICAgICAgICAgICAgLy8ge2lkOidfZ3JpZGNvbnRyb2xfYWRkJyAsdGV4dDogJ0FkZCBMZWFmJywgcHJlZml4SWNvbjonZS1hZGQnfSxcclxuICAgICAgICAgICAgLy8ge2lkOidhZGQnICx0ZXh0OiAnQWRkLi4uJywgcHJlZml4SWNvbjonZS1hZGQnfSxcclxuICAgICAgICAgICAgLy8gJ0RlbGV0ZScsXHJcbiAgICAgICAgICAgIC8vICdVcGRhdGUnLFxyXG4gICAgICAgICAgICAvLyAnQ2FuY2VsJyxcclxuICAgICAgICAgICAgLy8ge3R5cGU6ICdTZXBhcmF0b3InfSxcclxuICAgICAgICAgICAgJ1NlYXJjaCcsXHJcbiAgICAgICAgICAgICdFeHBhbmRBbGwnLFxyXG4gICAgICAgICAgICAnQ29sbGFwc2VBbGwnLFxyXG4gICAgICAgIF07XHJcbiAgICB9XHJcblxyXG4gICAgbWFwRGF0YUZpZWxkcyhwcm9wcykge1xyXG4gICAgICAgIHRoaXMua2V5RmllbGQgPSBwcm9wcy5rZXlGaWVsZCB8fCAna2V5JztcclxuICAgICAgICB0aGlzLnZhbHVlRmllbGQgPSBwcm9wcy52YWx1ZUZpZWxkIHx8ICd2YWx1ZSc7XHJcbiAgICAgICAgdGhpcy5jaGlsZHJlbkZpZWxkID0gcHJvcHMuY2hpbGRyZW5GaWVsZCB8fCAnY2hpbGRyZW4nO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGluaXRBZGRNZW51KCkge1xyXG4gICAgLy8gICAgIHRoaXMuYWRkTWVudUl0ZW1zID0gW1xyXG4gICAgLy8gICAgICAgICB7IGlkOiAnYWRkTmV3SXRlbScsIHRleHQ6ICdOZXcgSXRlbScgfSxcclxuICAgIC8vICAgICAgICAgeyBpZDogJ2FkZE5ld1NlY3Rpb24nLCB0ZXh0OiAnTmV3IFNlY3Rpb24nIH0sXHJcbiAgICAvLyAgICAgXTtcclxuICAgIC8vIH1cclxuXHJcbiAgICBzZXRWYWxpZGF0aW9uUnVsZXMoKSB7XHJcbiAgICAgICAgdGhpcy5maWVsZFJlcXVpcmVkID0geyByZXF1aXJlZDogdHJ1ZSB9O1xyXG4gICAgfVxyXG5cclxuICAgIGluaXREYXRhU291cmNlKCkge1xyXG4gICAgICAgIHRoaXMuZGF0YVNvdXJjZSA9IHRoaXMucHJvcHMuZGF0YVNvdXJjZTtcclxuICAgICAgICB0aGlzLmRhdGFTb3VyY2UgPSB0aGlzLmFkZElkcyh0aGlzLmRhdGFTb3VyY2UpO1xyXG4gICAgICAgIHRoaXMuZGF0YVNvdXJjZSA9IHRoaXMucHJvcHMuZGF0YVNvdXJjZS5tYXAoZSA9PiB7IHJldHVybiB7IF9pZDogdXVpZCgpLCAuLi5lIH07IH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHNldERpc3BsYXlQcm9wZXJ0aWVzKHByb3BzKSB7XHJcbiAgICAgICAgdGhpcy5rZXlIZWFkZXIgPSBwcm9wcy5rZXlIZWFkZXIgfHwgJ0tleSc7XHJcbiAgICAgICAgdGhpcy52YWx1ZUhlYWRlciA9IHByb3BzLnZhbHVlSGVhZGVyIHx8ICdWYWx1ZSc7XHJcbiAgICAgICAgdGhpcy5ub2RlTGFiZWwgPSBwcm9wcy5ub2RlTGFiZWwgfHwgJ05vZGUnO1xyXG4gICAgICAgIHRoaXMubGVhZkxhYmVsID0gcHJvcHMubGVhZkxhYmVsIHx8ICdMZWFmJztcclxuICAgIH1cclxuXHJcbiAgICBhZGRJZHMoaXRlbXMpIHtcclxuICAgICAgICBpdGVtcy5mb3JFYWNoKGUgPT4ge1xyXG4gICAgICAgICAgICBpZiAoISFlW3RoaXMuY2hpbGRyZW5GaWVsZF0pIHtcclxuICAgICAgICAgICAgICAgIGVbdGhpcy5jaGlsZHJlbkZpZWxkXSA9IHRoaXMuYWRkSWRzKGVbdGhpcy5jaGlsZHJlbkZpZWxkXSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiBpdGVtcy5tYXAoZSA9PiB7IHJldHVybiB7IF9pZDogdXVpZCgpLCAuLi5lIH07IH0pO1xyXG4gICAgfVxyXG5cclxuICAgIG9uT3BlbmluZ0NvbnRleHRNZW51KGUpIHtcclxuICAgICAgICBsZXQgZGlzcGxheSA9ICEhZS5yb3dJbmZvLnJvd0RhdGEgJiYgIWUucm93SW5mby5yb3dEYXRhW3RoaXMuY2hpbGRyZW5GaWVsZF0gPyAnbm9uZScgOiAnYmxvY2snO1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2xpI25ldycpWzBdLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCBgZGlzcGxheTogJHtkaXNwbGF5fTtgKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkJlZ2lubmluZ0FjdGlvbihlKSB7XHJcbiAgICAgICAgLy8gaWYgKGUucmVxdWVzdFR5cGUgPT09ICdhZGQnKVxyXG4gICAgICAgIC8vICAgICBlLmRhdGEuX2lkID0gdXVpZCgpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uRWRpdGluZ0NlbGwoZSkge1xyXG4gICAgICAgIGlmIChlLmNvbHVtbk5hbWUgPT09IHRoaXMudmFsdWVGaWVsZCAmJiAhIWUucm93RGF0YVt0aGlzLmNoaWxkcmVuRmllbGRdKSB7XHJcbiAgICAgICAgICAgIGUuY2FuY2VsID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25TZWxlY3RpbmdNZW51SXRlbShlKSB7XHJcbiAgICAgICAgaWYgKGUuaXRlbS5pZCA9PT0gJ2FkZE5vZGUnIHx8IGUuaXRlbS5pZCA9PT0gJ2FkZExlYWYnKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYWRkaW5nUm93ID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZEluZGV4ID0gdGhpcy50cmVlR3JpZC5nZXRTZWxlY3RlZFJvd0luZGV4ZXMoKVswXVxyXG4gICAgICAgICAgICBjb25zdCBzZWxlY3RlZEl0ZW0gPSB0aGlzLnRyZWVHcmlkLmdldFNlbGVjdGVkUmVjb3JkcygpWzBdO1xyXG4gICAgICAgICAgICBjb25zdCBuZXdSZWNvcmQgPSB7IF9pZDogdXVpZCgpIH07XHJcbiAgICAgICAgICAgIGlmIChlLml0ZW0uaWQgPT09ICdhZGRMZWFmJykge1xyXG4gICAgICAgICAgICAgICAgbmV3UmVjb3JkW3RoaXMua2V5RmllbGRdID0gYE5ldyAke3RoaXMubGVhZkxhYmVsfWA7XHJcbiAgICAgICAgICAgICAgICBuZXdSZWNvcmRbdGhpcy52YWx1ZUZpZWxkXSA9IGBOZXcgJHt0aGlzLnZhbHVlSGVhZGVyfWA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBuZXdSZWNvcmRbdGhpcy5rZXlGaWVsZF0gPSBgTmV3ICR7dGhpcy5ub2RlTGFiZWx9YDtcclxuICAgICAgICAgICAgICAgIG5ld1JlY29yZFt0aGlzLmNoaWxkcmVuRmllbGRdID0gW107XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2VsZWN0ZWRJdGVtW3RoaXMuY2hpbGRyZW5GaWVsZF0udW5zaGlmdChuZXdSZWNvcmQpO1xyXG4gICAgICAgICAgICB0aGlzLnRyZWVHcmlkLmRhdGFTb3VyY2UgPSB0aGlzLmRhdGFTb3VyY2UubWFwKGUgPT4gZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uQmluZGluZ0RhdGEoZSkge1xyXG4gICAgICAgIGlmICh0aGlzLmFkZGluZ1Jvdykge1xyXG4gICAgICAgICAgICB0aGlzLnRyZWVHcmlkLnNlbGVjdFJvdyh0aGlzLnNlbGVjdGVkSW5kZXgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvblNlbGVjdGluZ1JvdyhlKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuYWRkaW5nUm93KSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGUucm93KVxyXG47ICAgICAgICAgICAgdGhpcy50cmVlR3JpZC5leHBhbmRSb3coZS5yb3cpO1xyXG4gICAgICAgICAgICB0aGlzLmFkZGluZ1JvdyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAvLyB0aGlzLnRyZWVHcmlkLmVkaXRDZWxsKHRoaXMuc2VsZWN0ZWRJbmRleCArIDEsIHRoaXMua2V5RmllbGQpXHJcbiAgICAgICAgICAgIC8vIHRoaXMudHJlZUdyaWQucmVmcmVzaCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgLy8gb25DbGlja2luZ09uVG9vbGJhcihlKSB7XHJcbiAgICAvLyAgICAgaWYgKGUuaXRlbS5pZCA9PT0gJ2FkZCcpIHtcclxuICAgIC8vICAgICAgICAgdGhpcy5hZGRNZW51Lm9wZW4oKTtcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyB9XHJcblxyXG4gICAgLy8gb25TZWxlY3RpbmdBZGRPcHRpb24oZSkge1xyXG4gICAgLy8gICAgIGNvbnN0IG5ld1JvdyA9IHtfaWQ6IHV1aWQoKX07XHJcbiAgICAvLyAgICAgaWYgKGUuaXRlbS5pZCA9PT0gJ2FkZE5ld1NlY3Rpb24nKSB7XHJcbiAgICAvLyAgICAgICAgIGNvbnN0IGNoaWxkID0ge19pZDogdXVpZCgpfTtcclxuICAgIC8vICAgICAgICAgY2hpbGRbdGhpcy5rZXlGaWVsZF0gPSBgTmV3ICR7dGhpcy5rZXlIZWFkZXJ9YDtcclxuICAgIC8vICAgICAgICAgY2hpbGRbdGhpcy52YWx1ZUZpZWxkXSA9IGBOZXcgJHt0aGlzLnZhbHVlSGVhZGVyfWA7XHJcbiAgICAvLyAgICAgICAgIG5ld1Jvd1t0aGlzLmNoaWxkcmVuRmllbGRdID0gW2NoaWxkXTtcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyAgICAgdGhpcy50cmVlR3JpZC5hZGRSZWNvcmQobmV3Um93KTtcclxuICAgIC8vICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgIC8vICAgICAgICAgY29uc29sZS5sb2coJ25ld1Jvdy5faWQnLCBuZXdSb3cuX2lkKTtcclxuICAgIC8vICAgICAgICAgbGV0IGkgPSAwO1xyXG4gICAgLy8gICAgICAgICB3aGlsZSAodHJ1ZSkge1xyXG4gICAgLy8gICAgICAgICAgICAgY29uc3Qgcm93ID0gdGhpcy50cmVlR3JpZC5nZXRSb3dCeUluZGV4KGkpO1xyXG4gICAgLy8gICAgICAgICAgICAgY29uc29sZS5sb2cocm93LmNlbGxzWzBdLmlubmVyVGV4dClcclxuICAgIC8vICAgICAgICAgICAgIGlmIChyb3cuY2VsbHNbMF0uaW5uZXJUZXh0ID09IG5ld1Jvdy5faWQpIHtcclxuICAgIC8vICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgIC8vICAgICAgICAgICAgIH1cclxuICAgIC8vICAgICAgICAgICAgIGkrKztcclxuICAgIC8vICAgICAgICAgfVxyXG4gICAgLy8gICAgICAgICB0aGlzLnRyZWVHcmlkLmVkaXRDZWxsKGksIHRoaXMua2V5RmllbGQpXHJcbiAgICAvLyAgICAgfSwgMTAwMCk7XHJcbiAgICAvLyB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiA8ZGl2PlxyXG4gICAgICAgICAgICA8VHJlZUdyaWRDb21wb25lbnQgcmVmPXtjID0+IHRoaXMudHJlZUdyaWQgPSBjfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFTb3VyY2U9e3RoaXMuZGF0YVNvdXJjZX0gdHJlZUNvbHVtbkluZGV4PXsxfSBjaGlsZE1hcHBpbmc9e3RoaXMuY2hpbGRyZW5GaWVsZH0gZW5hYmxlQ29sbGFwc2VBbGw9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxsb3dSZW9yZGVyaW5nPSd0cnVlJyBhbGxvd0ZpbHRlcmluZz0ndHJ1ZScgYWxsb3dTb3J0aW5nPSd0cnVlJyBmaWx0ZXJTZXR0aW5ncz17eyB0eXBlOiAnTWVudScsIGhpZXJhcmNoeU1vZGU6ICdQYXJlbnQnIH19IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVkaXRTZXR0aW5ncz17dGhpcy5lZGl0T3B0aW9uc30gY29udGV4dE1lbnVJdGVtcz17dGhpcy5jb250ZXh0TWVudUl0ZW1zfSB0b29sYmFyPXt0aGlzLnRvb2xiYXJPcHRpb25zfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbkJlZ2luPXtlID0+IHRoaXMub25CZWdpbm5pbmdBY3Rpb24oZSl9IGNlbGxFZGl0PXtlID0+IHRoaXMub25FZGl0aW5nQ2VsbChlKX0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGV4dE1lbnVPcGVuPXtlID0+IHRoaXMub25PcGVuaW5nQ29udGV4dE1lbnUoZSl9IGNvbnRleHRNZW51Q2xpY2s9e2UgPT4gdGhpcy5vblNlbGVjdGluZ01lbnVJdGVtKGUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFCb3VuZD17ZSA9PiB0aGlzLm9uQmluZGluZ0RhdGEoZSl9IHJvd1NlbGVjdGVkPXtlID0+IHRoaXMub25TZWxlY3RpbmdSb3coZSl9PlxyXG4gICAgICAgICAgICAgICAgPENvbHVtbnNEaXJlY3RpdmU+XHJcbiAgICAgICAgICAgICAgICAgICAgPENvbHVtbkRpcmVjdGl2ZSBmaWVsZD0nX2lkJyBpc1ByaW1hcnlLZXk9e3RydWV9IHZpc2libGU9e2ZhbHNlfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgPENvbHVtbkRpcmVjdGl2ZSBmaWVsZD17dGhpcy5rZXlGaWVsZH0gaGVhZGVyVGV4dD17dGhpcy5rZXlIZWFkZXJ9IHdpZHRoPScyMDAnIHZhbGlkYXRpb25SdWxlcz17dGhpcy5maWVsZFJlcXVpcmVkfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgPENvbHVtbkRpcmVjdGl2ZSBmaWVsZD17dGhpcy52YWx1ZUZpZWxkfSBoZWFkZXJUZXh0PXt0aGlzLnZhbHVlSGVhZGVyfSB3aWR0aD0nKicvPlxyXG4gICAgICAgICAgICAgICAgPC9Db2x1bW5zRGlyZWN0aXZlPlxyXG4gICAgICAgICAgICAgICAgPEluamVjdCBzZXJ2aWNlcz17W0ZpbHRlciwgU29ydCwgUmVvcmRlciwgRWRpdCwgQ29udGV4dE1lbnUsIFJlc2l6ZSwgVG9vbGJhcl19Lz5cclxuICAgICAgICAgICAgPC9UcmVlR3JpZENvbXBvbmVudD5cclxuICAgICAgICAgICAgey8qIDxDb250ZXh0TWVudUNvbXBvbmVudCByZWY9e2MgPT4gdGhpcy5hZGRNZW51ID0gY30gdGFyZ2V0PScjYWRkJyBpdGVtcz17dGhpcy5hZGRNZW51SXRlbXN9IHNlbGVjdD17ZSA9PiB0aGlzLm9uU2VsZWN0aW5nQWRkT3B0aW9uKGUpfSAvPiAqL31cclxuICAgICAgICA8L2Rpdj4gXHJcbiAgICB9XHJcbn1cclxuXHJcbk5lc3RlZERhdGFDUlVELmRlZmF1bHRQcm9wcyA9IHt9O1xyXG5cclxuTmVzdGVkRGF0YUNSVUQucHJvcFR5cGVzID0ge1xyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgSUQgdXNlZCB0byBpZGVudGlmeSB0aGlzIGNvbXBvbmVudCBpbiBEYXNoIGNhbGxiYWNrcy5cclxuICAgICAqL1xyXG4gICAgaWQ6IFByb3BUeXBlcy5zdHJpbmdcclxufTsiXSwic291cmNlUm9vdCI6IiJ9