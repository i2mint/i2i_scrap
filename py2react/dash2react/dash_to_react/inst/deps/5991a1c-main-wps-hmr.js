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
/* harmony import */ var _syncfusion_ej2_react_navigations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @syncfusion/ej2-react-navigations */ "./node_modules/@syncfusion/ej2-react-navigations/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _nested_data_crud_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nested-data-crud.css */ "./src/lib/components/nested-data-crud/nested-data-crud.css");
/* harmony import */ var _nested_data_crud_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_nested_data_crud_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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

    _this.setValidationRules();

    _this.setDisplayProperties(props);

    _this.initTreeGrid(props);

    _this.initDataSource();

    _this.initNewMenu();

    return _this;
  }

  _createClass(NestedDataCRUD, [{
    key: "initTreeGrid",
    value: function initTreeGrid(props) {
      this.setEditSettings();
      this.setContextMenuItems();
      this.setToolbarSettings();
      this.setSearchSettings();
      this.mapDataFields(props);
      this.height = this.props.height || 500;
    }
  }, {
    key: "setEditSettings",
    value: function setEditSettings() {
      this.editSettings = {
        allowAdding: true,
        allowDeleting: true,
        allowEditing: true,
        mode: 'Cell',
        newRowPosition: 'Below'
      };
    }
  }, {
    key: "setContextMenuItems",
    value: function setContextMenuItems() {
      this.contextMenuItems = ['AutoFit', 'AutoFitAll', 'SortAscending', 'SortDescending', 'Delete', {
        id: 'newMenuItem',
        text: 'New',
        iconCss: 'e-icons e-add',
        items: [{
          id: 'addNode',
          text: this.nodeLabel
        }, {
          id: 'addLeaf',
          text: this.leafLabel
        }]
      }];
    }
  }, {
    key: "setToolbarSettings",
    value: function setToolbarSettings() {
      this.toolbarSettings = [{
        id: 'newToolbarButton',
        text: 'New',
        prefixIcon: 'e-add'
      }, // 'Delete',
      // 'Update',
      'Cancel', {
        type: 'Separator'
      }, 'Search', 'ExpandAll', 'CollapseAll'];
    }
  }, {
    key: "setSearchSettings",
    value: function setSearchSettings() {
      this.searchSettings = {
        hierarchyMode: 'Both'
      };
    }
  }, {
    key: "mapDataFields",
    value: function mapDataFields(props) {
      this.keyField = props.keyField || 'key';
      this.valueField = props.valueField || 'value';
      this.childrenField = props.childrenField || 'children';
    }
  }, {
    key: "initNewMenu",
    value: function initNewMenu() {
      this.newMenuItems = [{
        id: 'addNode',
        text: this.nodeLabel
      }, {
        id: 'addLeaf',
        text: this.leafLabel
      }];
    }
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
      this.dataSource = this.props.dataSource || [];
      this.dataSource = this.addIds(this.dataSource);
      this.dataSource = this.dataSource.map(function (e) {
        return _objectSpread({
          _id: Object(uuid__WEBPACK_IMPORTED_MODULE_5__["v4"])()
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
          _id: Object(uuid__WEBPACK_IMPORTED_MODULE_5__["v4"])()
        }, e);
      });
    }
  }, {
    key: "getItemById",
    value: function getItemById(id, root) {
      if (root._id == id) {
        return root;
      }

      if (!!root[this.childrenField]) {
        for (var i = 0; i < root[this.childrenField].length; i++) {
          var item = this.getItemById(id, root[this.childrenField][i]);

          if (!!item) {
            return item;
          }
        }
      }

      return null;
    }
  }, {
    key: "onOpeningContextMenu",
    value: function onOpeningContextMenu(e) {
      var newMenuItemEl = document.getElementById('newMenuItem');
      var displayNewItem = !!e.rowInfo.rowData && !!e.rowInfo.rowData[this.childrenField] || newMenuItemEl.contains(e.rowInfo.target);

      if (displayNewItem) {
        newMenuItemEl.classList.remove("e-menu-hide");
      } else {
        newMenuItemEl.classList.add("e-menu-hide");
      }

      var contextMenuEl = document.getElementById('_gridcontrol_cmenu');

      if (!!contextMenuEl && !!contextMenuEl.childNodes && _toConsumableArray(contextMenuEl.childNodes).every(function (e) {
        return e.classList.contains('e-menu-hide');
      })) {
        e.cancel = true;
      }
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
      var fromToolbar = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      if (e.item.id === 'addNode' || e.item.id === 'addLeaf') {
        this.addingRow = true;
        this.nodeIndex = fromToolbar ? -1 : this.treeGrid.getSelectedRowIndexes()[0];
        var root = {
          _id: 'root'
        };
        root[this.childrenField] = this.dataSource;
        var nodeId = fromToolbar ? 'root' : this.treeGrid.getSelectedRecords()[0]._id;
        var node = this.getItemById(nodeId, root);
        var newRecord = {
          _id: Object(uuid__WEBPACK_IMPORTED_MODULE_5__["v4"])()
        };

        if (e.item.id === 'addLeaf') {
          newRecord[this.keyField] = "New ".concat(this.leafLabel);
          newRecord[this.valueField] = "New ".concat(this.valueHeader);
        } else {
          newRecord[this.keyField] = "New ".concat(this.nodeLabel);
          newRecord[this.childrenField] = [];
        }

        node[this.childrenField].unshift(newRecord);
        this.expandedNodeIds = this.treeGrid.getRows().filter(function (e) {
          return e.ariaExpanded === 'true';
        }).map(function (e) {
          return e.cells[0].innerText;
        });
        this.treeGrid.dataSource = this.dataSource.map(function (e) {
          return e;
        });
      }
    }
  }, {
    key: "onBindingData",
    value: function onBindingData(e) {
      if (this.addingRow) {
        this.treeGrid.selectRow(this.nodeIndex + 1);
      }
    }
  }, {
    key: "onSelectingRow",
    value: function onSelectingRow(e) {
      var _this3 = this;

      if (this.addingRow) {
        var rows = this.treeGrid.getRows();

        if (!!e.data.parentItem) {
          var parentRow = rows.find(function (r) {
            return r.cells[0].innerText == e.data.parentItem._id;
          });
          this.treeGrid.expandRow(parentRow);
        }

        rows.forEach(function (r) {
          if (_this3.expandedNodeIds.includes(r.cells[0].innerText)) {
            _this3.treeGrid.expandRow(r);
          }
        });
        this.expandedNodeIds = null;
        this.addingRow = false;
      }
    }
  }, {
    key: "onClickingOnToolbar",
    value: function onClickingOnToolbar(e) {
      if (e.item.id === 'newToolbarButton') {
        var newToolbarButton = document.getElementById(e.item.id);
        var rect = newToolbarButton.getBoundingClientRect();
        this.newMenu.open(rect.x, rect.y);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_syncfusion_ej2_react_treegrid__WEBPACK_IMPORTED_MODULE_0__["TreeGridComponent"], {
        ref: function ref(c) {
          return _this4.treeGrid = c;
        },
        height: this.height,
        dataSource: this.dataSource,
        treeColumnIndex: 1,
        childMapping: this.childrenField,
        enableCollapseAll: true,
        allowReordering: "true",
        allowSorting: "true",
        filterSettings: {
          type: 'Menu',
          hierarchyMode: 'Parent'
        },
        editSettings: this.editSettings,
        contextMenuItems: this.contextMenuItems,
        toolbar: this.toolbarSettings,
        searchSettings: this.searchSettings,
        contextMenuOpen: function contextMenuOpen(e) {
          return _this4.onOpeningContextMenu(e);
        },
        contextMenuClick: function contextMenuClick(e) {
          return _this4.onSelectingMenuItem(e);
        },
        toolbarClick: function toolbarClick(e) {
          return _this4.onClickingOnToolbar(e);
        },
        dataBound: function dataBound(e) {
          return _this4.onBindingData(e);
        },
        rowSelected: function rowSelected(e) {
          return _this4.onSelectingRow(e);
        },
        cellEdit: function cellEdit(e) {
          return _this4.onEditingCell(e);
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_syncfusion_ej2_react_treegrid__WEBPACK_IMPORTED_MODULE_0__["ColumnsDirective"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_syncfusion_ej2_react_treegrid__WEBPACK_IMPORTED_MODULE_0__["ColumnDirective"], {
        field: "_id",
        isPrimaryKey: true,
        visible: false
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_syncfusion_ej2_react_treegrid__WEBPACK_IMPORTED_MODULE_0__["ColumnDirective"], {
        field: this.keyField,
        headerText: this.keyHeader,
        width: "300",
        validationRules: this.fieldRequired
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_syncfusion_ej2_react_treegrid__WEBPACK_IMPORTED_MODULE_0__["ColumnDirective"], {
        field: this.valueField,
        headerText: this.valueHeader,
        width: "*"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_syncfusion_ej2_react_treegrid__WEBPACK_IMPORTED_MODULE_0__["Inject"], {
        services: [_syncfusion_ej2_react_treegrid__WEBPACK_IMPORTED_MODULE_0__["Sort"], _syncfusion_ej2_react_treegrid__WEBPACK_IMPORTED_MODULE_0__["Reorder"], _syncfusion_ej2_react_treegrid__WEBPACK_IMPORTED_MODULE_0__["Edit"], _syncfusion_ej2_react_treegrid__WEBPACK_IMPORTED_MODULE_0__["ContextMenu"], _syncfusion_ej2_react_treegrid__WEBPACK_IMPORTED_MODULE_0__["Resize"], _syncfusion_ej2_react_treegrid__WEBPACK_IMPORTED_MODULE_0__["Toolbar"], _syncfusion_ej2_react_treegrid__WEBPACK_IMPORTED_MODULE_0__["Filter"]]
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_syncfusion_ej2_react_navigations__WEBPACK_IMPORTED_MODULE_1__["ContextMenuComponent"], {
        ref: function ref(c) {
          return _this4.newMenu = c;
        },
        items: this.newMenuItems,
        select: function select(e) {
          return _this4.onSelectingMenuItem(e, true);
        }
      }));
    }
  }]);

  return NestedDataCRUD;
}(react__WEBPACK_IMPORTED_MODULE_2__["Component"]);


NestedDataCRUD.defaultProps = {};
NestedDataCRUD.propTypes = {
  /**
   * The ID used to identify this component in Dash callbacks.
   */
  id: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
  dataSource: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object),
  keyField: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
  keyHeader: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
  valueField: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
  valueHeader: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
  childrenField: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
  nodeLabel: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
  leafLabel: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
  height: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number
};

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kYXNoX3RvX3JlYWN0Ly4vc3JjL2xpYi9jb21wb25lbnRzL25lc3RlZC1kYXRhLWNydWQvTmVzdGVkRGF0YUNSVUQucmVhY3QuanMiXSwibmFtZXMiOlsiTmVzdGVkRGF0YUNSVUQiLCJwcm9wcyIsInNldFZhbGlkYXRpb25SdWxlcyIsInNldERpc3BsYXlQcm9wZXJ0aWVzIiwiaW5pdFRyZWVHcmlkIiwiaW5pdERhdGFTb3VyY2UiLCJpbml0TmV3TWVudSIsInNldEVkaXRTZXR0aW5ncyIsInNldENvbnRleHRNZW51SXRlbXMiLCJzZXRUb29sYmFyU2V0dGluZ3MiLCJzZXRTZWFyY2hTZXR0aW5ncyIsIm1hcERhdGFGaWVsZHMiLCJoZWlnaHQiLCJlZGl0U2V0dGluZ3MiLCJhbGxvd0FkZGluZyIsImFsbG93RGVsZXRpbmciLCJhbGxvd0VkaXRpbmciLCJtb2RlIiwibmV3Um93UG9zaXRpb24iLCJjb250ZXh0TWVudUl0ZW1zIiwiaWQiLCJ0ZXh0IiwiaWNvbkNzcyIsIml0ZW1zIiwibm9kZUxhYmVsIiwibGVhZkxhYmVsIiwidG9vbGJhclNldHRpbmdzIiwicHJlZml4SWNvbiIsInR5cGUiLCJzZWFyY2hTZXR0aW5ncyIsImhpZXJhcmNoeU1vZGUiLCJrZXlGaWVsZCIsInZhbHVlRmllbGQiLCJjaGlsZHJlbkZpZWxkIiwibmV3TWVudUl0ZW1zIiwiZmllbGRSZXF1aXJlZCIsInJlcXVpcmVkIiwiZGF0YVNvdXJjZSIsImFkZElkcyIsIm1hcCIsImUiLCJfaWQiLCJ1dWlkIiwia2V5SGVhZGVyIiwidmFsdWVIZWFkZXIiLCJmb3JFYWNoIiwicm9vdCIsImkiLCJsZW5ndGgiLCJpdGVtIiwiZ2V0SXRlbUJ5SWQiLCJuZXdNZW51SXRlbUVsIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImRpc3BsYXlOZXdJdGVtIiwicm93SW5mbyIsInJvd0RhdGEiLCJjb250YWlucyIsInRhcmdldCIsImNsYXNzTGlzdCIsInJlbW92ZSIsImFkZCIsImNvbnRleHRNZW51RWwiLCJjaGlsZE5vZGVzIiwiZXZlcnkiLCJjYW5jZWwiLCJjb2x1bW5OYW1lIiwiZnJvbVRvb2xiYXIiLCJhZGRpbmdSb3ciLCJub2RlSW5kZXgiLCJ0cmVlR3JpZCIsImdldFNlbGVjdGVkUm93SW5kZXhlcyIsIm5vZGVJZCIsImdldFNlbGVjdGVkUmVjb3JkcyIsIm5vZGUiLCJuZXdSZWNvcmQiLCJ1bnNoaWZ0IiwiZXhwYW5kZWROb2RlSWRzIiwiZ2V0Um93cyIsImZpbHRlciIsImFyaWFFeHBhbmRlZCIsImNlbGxzIiwiaW5uZXJUZXh0Iiwic2VsZWN0Um93Iiwicm93cyIsImRhdGEiLCJwYXJlbnRJdGVtIiwicGFyZW50Um93IiwiZmluZCIsInIiLCJleHBhbmRSb3ciLCJpbmNsdWRlcyIsIm5ld1Rvb2xiYXJCdXR0b24iLCJyZWN0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwibmV3TWVudSIsIm9wZW4iLCJ4IiwieSIsImMiLCJvbk9wZW5pbmdDb250ZXh0TWVudSIsIm9uU2VsZWN0aW5nTWVudUl0ZW0iLCJvbkNsaWNraW5nT25Ub29sYmFyIiwib25CaW5kaW5nRGF0YSIsIm9uU2VsZWN0aW5nUm93Iiwib25FZGl0aW5nQ2VsbCIsIlNvcnQiLCJSZW9yZGVyIiwiRWRpdCIsIkNvbnRleHRNZW51IiwiUmVzaXplIiwiVG9vbGJhciIsIkZpbHRlciIsIlJlYWN0IiwiZGVmYXVsdFByb3BzIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwiYXJyYXlPZiIsIm9iamVjdCIsIm51bWJlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7SUFFcUJBLGM7Ozs7O0FBQ2pCLDBCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2YsOEJBQU1BLEtBQU47O0FBQ0EsVUFBS0Msa0JBQUw7O0FBQ0EsVUFBS0Msb0JB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QUU0RixpREFBUyxDQUFDQyxNQVhFO0FBWXZCNUYsV0FBUyxFQUFFMkYsaURBQVMsQ0FBQ0MsTUFaRTtBQWF2QnpHLFFBQU0sRUFBRXdHLGlEQUFTLENBQUNJO0FBYkssQ0FBM0IsQyIsImZpbGUiOiI1OTkxYTFjLW1haW4td3BzLWhtci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRyZWVHcmlkQ29tcG9uZW50LCBDb2x1bW5zRGlyZWN0aXZlLCBDb2x1bW5EaXJlY3RpdmUsIFNvcnQsIFJlb3JkZXIsIEVkaXQsIENvbnRleHRNZW51LCBSZXNpemUsIFRvb2xiYXIsIEluamVjdCwgRmlsdGVyIH0gZnJvbSAnQHN5bmNmdXNpb24vZWoyLXJlYWN0LXRyZWVncmlkJztcclxuaW1wb3J0IHsgQ29udGV4dE1lbnVDb21wb25lbnQgfSBmcm9tICdAc3luY2Z1c2lvbi9lajItcmVhY3QtbmF2aWdhdGlvbnMnO1xyXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCAnLi9uZXN0ZWQtZGF0YS1jcnVkLmNzcyc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCB7IHY0IGFzIHV1aWQgfSBmcm9tICd1dWlkJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5lc3RlZERhdGFDUlVEIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuc2V0VmFsaWRhdGlvblJ1bGVzKCk7XHJcbiAgICAgICAgdGhpcy5zZXREaXNwbGF5UHJvcGVydGllcyhwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5pbml0VHJlZUdyaWQocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuaW5pdERhdGFTb3VyY2UoKTtcclxuICAgICAgICB0aGlzLmluaXROZXdNZW51KCk7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdFRyZWVHcmlkKHByb3BzKSB7XHJcbiAgICAgICAgdGhpcy5zZXRFZGl0U2V0dGluZ3MoKTtcclxuICAgICAgICB0aGlzLnNldENvbnRleHRNZW51SXRlbXMoKTtcclxuICAgICAgICB0aGlzLnNldFRvb2xiYXJTZXR0aW5ncygpO1xyXG4gICAgICAgIHRoaXMuc2V0U2VhcmNoU2V0dGluZ3MoKVxyXG4gICAgICAgIHRoaXMubWFwRGF0YUZpZWxkcyhwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5oZWlnaHQgPSB0aGlzLnByb3BzLmhlaWdodCB8fCA1MDA7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0RWRpdFNldHRpbmdzKCkge1xyXG4gICAgICAgIHRoaXMuZWRpdFNldHRpbmdzID0ge1xyXG4gICAgICAgICAgICBhbGxvd0FkZGluZzogdHJ1ZSxcclxuICAgICAgICAgICAgYWxsb3dEZWxldGluZzogdHJ1ZSxcclxuICAgICAgICAgICAgYWxsb3dFZGl0aW5nOiB0cnVlLFxyXG4gICAgICAgICAgICBtb2RlOiAnQ2VsbCcsXHJcbiAgICAgICAgICAgIG5ld1Jvd1Bvc2l0aW9uOiAnQmVsb3cnLFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgc2V0Q29udGV4dE1lbnVJdGVtcygpIHtcclxuICAgICAgICB0aGlzLmNvbnRleHRNZW51SXRlbXMgPSBbXHJcbiAgICAgICAgICAgICdBdXRvRml0JyxcclxuICAgICAgICAgICAgJ0F1dG9GaXRBbGwnLFxyXG4gICAgICAgICAgICAnU29ydEFzY2VuZGluZycsXHJcbiAgICAgICAgICAgICdTb3J0RGVzY2VuZGluZycsXHJcbiAgICAgICAgICAgICdEZWxldGUnLFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZDogJ25ld01lbnVJdGVtJyxcclxuICAgICAgICAgICAgICAgIHRleHQ6ICdOZXcnLFxyXG4gICAgICAgICAgICAgICAgaWNvbkNzczogJ2UtaWNvbnMgZS1hZGQnLFxyXG4gICAgICAgICAgICAgICAgaXRlbXM6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IGlkOiAnYWRkTm9kZScsIHRleHQ6IHRoaXMubm9kZUxhYmVsIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBpZDogJ2FkZExlYWYnLCB0ZXh0OiB0aGlzLmxlYWZMYWJlbCB9XHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgXTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRUb29sYmFyU2V0dGluZ3MoKSB7XHJcbiAgICAgICAgdGhpcy50b29sYmFyU2V0dGluZ3MgPSBbXHJcbiAgICAgICAgICAgIHsgaWQ6ICduZXdUb29sYmFyQnV0dG9uJywgdGV4dDogJ05ldycsIHByZWZpeEljb246ICdlLWFkZCcgfSxcclxuICAgICAgICAgICAgLy8gJ0RlbGV0ZScsXHJcbiAgICAgICAgICAgIC8vICdVcGRhdGUnLFxyXG4gICAgICAgICAgICAnQ2FuY2VsJyxcclxuICAgICAgICAgICAgeyB0eXBlOiAnU2VwYXJhdG9yJyB9LFxyXG4gICAgICAgICAgICAnU2VhcmNoJyxcclxuICAgICAgICAgICAgJ0V4cGFuZEFsbCcsXHJcbiAgICAgICAgICAgICdDb2xsYXBzZUFsbCcsXHJcbiAgICAgICAgXTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRTZWFyY2hTZXR0aW5ncygpIHtcclxuICAgICAgICB0aGlzLnNlYXJjaFNldHRpbmdzID0ge1xyXG4gICAgICAgICAgICBoaWVyYXJjaHlNb2RlOiAnQm90aCdcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbWFwRGF0YUZpZWxkcyhwcm9wcykge1xyXG4gICAgICAgIHRoaXMua2V5RmllbGQgPSBwcm9wcy5rZXlGaWVsZCB8fCAna2V5JztcclxuICAgICAgICB0aGlzLnZhbHVlRmllbGQgPSBwcm9wcy52YWx1ZUZpZWxkIHx8ICd2YWx1ZSc7XHJcbiAgICAgICAgdGhpcy5jaGlsZHJlbkZpZWxkID0gcHJvcHMuY2hpbGRyZW5GaWVsZCB8fCAnY2hpbGRyZW4nO1xyXG4gICAgfVxyXG5cclxuICAgIGluaXROZXdNZW51KCkge1xyXG4gICAgICAgIHRoaXMubmV3TWVudUl0ZW1zID0gW1xyXG4gICAgICAgICAgICB7IGlkOiAnYWRkTm9kZScsIHRleHQ6IHRoaXMubm9kZUxhYmVsIH0sXHJcbiAgICAgICAgICAgIHsgaWQ6ICdhZGRMZWFmJywgdGV4dDogdGhpcy5sZWFmTGFiZWwgfSxcclxuICAgICAgICBdO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFZhbGlkYXRpb25SdWxlcygpIHtcclxuICAgICAgICB0aGlzLmZpZWxkUmVxdWlyZWQgPSB7IHJlcXVpcmVkOiB0cnVlIH07XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdERhdGFTb3VyY2UoKSB7XHJcbiAgICAgICAgdGhpcy5kYXRhU291cmNlID0gdGhpcy5wcm9wcy5kYXRhU291cmNlIHx8IFtdO1xyXG4gICAgICAgIHRoaXMuZGF0YVNvdXJjZSA9IHRoaXMuYWRkSWRzKHRoaXMuZGF0YVNvdXJjZSk7XHJcbiAgICAgICAgdGhpcy5kYXRhU291cmNlID0gdGhpcy5kYXRhU291cmNlLm1hcChlID0+IHsgcmV0dXJuIHsgX2lkOiB1dWlkKCksIC4uLmUgfTsgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0RGlzcGxheVByb3BlcnRpZXMocHJvcHMpIHtcclxuICAgICAgICB0aGlzLmtleUhlYWRlciA9IHByb3BzLmtleUhlYWRlciB8fCAnS2V5JztcclxuICAgICAgICB0aGlzLnZhbHVlSGVhZGVyID0gcHJvcHMudmFsdWVIZWFkZXIgfHwgJ1ZhbHVlJztcclxuICAgICAgICB0aGlzLm5vZGVMYWJlbCA9IHByb3BzLm5vZGVMYWJlbCB8fCAnTm9kZSc7XHJcbiAgICAgICAgdGhpcy5sZWFmTGFiZWwgPSBwcm9wcy5sZWFmTGFiZWwgfHwgJ0xlYWYnO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZElkcyhpdGVtcykge1xyXG4gICAgICAgIGl0ZW1zLmZvckVhY2goZSA9PiB7XHJcbiAgICAgICAgICAgIGlmICghIWVbdGhpcy5jaGlsZHJlbkZpZWxkXSkge1xyXG4gICAgICAgICAgICAgICAgZVt0aGlzLmNoaWxkcmVuRmllbGRdID0gdGhpcy5hZGRJZHMoZVt0aGlzLmNoaWxkcmVuRmllbGRdKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIGl0ZW1zLm1hcChlID0+IHsgcmV0dXJuIHsgX2lkOiB1dWlkKCksIC4uLmUgfTsgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0SXRlbUJ5SWQoaWQsIHJvb3QpIHtcclxuICAgICAgICBpZiAocm9vdC5faWQgPT0gaWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHJvb3Q7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghIXJvb3RbdGhpcy5jaGlsZHJlbkZpZWxkXSkge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJvb3RbdGhpcy5jaGlsZHJlbkZpZWxkXS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaXRlbSA9IHRoaXMuZ2V0SXRlbUJ5SWQoaWQsIHJvb3RbdGhpcy5jaGlsZHJlbkZpZWxkXVtpXSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoISFpdGVtKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgb25PcGVuaW5nQ29udGV4dE1lbnUoZSkge1xyXG4gICAgICAgIGNvbnN0IG5ld01lbnVJdGVtRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3TWVudUl0ZW0nKVxyXG4gICAgICAgIGNvbnN0IGRpc3BsYXlOZXdJdGVtID0gXHJcbiAgICAgICAgICAgICghIWUucm93SW5mby5yb3dEYXRhICYmICEhZS5yb3dJbmZvLnJvd0RhdGFbdGhpcy5jaGlsZHJlbkZpZWxkXSkgfHxcclxuICAgICAgICAgICAgbmV3TWVudUl0ZW1FbC5jb250YWlucyhlLnJvd0luZm8udGFyZ2V0KVxyXG4gICAgICAgIGlmIChkaXNwbGF5TmV3SXRlbSkge1xyXG4gICAgICAgICAgICBuZXdNZW51SXRlbUVsLmNsYXNzTGlzdC5yZW1vdmUoXCJlLW1lbnUtaGlkZVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIG5ld01lbnVJdGVtRWwuY2xhc3NMaXN0LmFkZChcImUtbWVudS1oaWRlXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBjb250ZXh0TWVudUVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ19ncmlkY29udHJvbF9jbWVudScpO1xyXG4gICAgICAgIGlmICghIWNvbnRleHRNZW51RWwgJiYgISFjb250ZXh0TWVudUVsLmNoaWxkTm9kZXMgJiYgWy4uLihjb250ZXh0TWVudUVsLmNoaWxkTm9kZXMpXS5ldmVyeShlID0+IGUuY2xhc3NMaXN0LmNvbnRhaW5zKCdlLW1lbnUtaGlkZScpKSkge1xyXG4gICAgICAgICAgICBlLmNhbmNlbCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uRWRpdGluZ0NlbGwoZSkge1xyXG4gICAgICAgIGlmIChlLmNvbHVtbk5hbWUgPT09IHRoaXMudmFsdWVGaWVsZCAmJiAhIWUucm93RGF0YVt0aGlzLmNoaWxkcmVuRmllbGRdKSB7XHJcbiAgICAgICAgICAgIGUuY2FuY2VsID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25TZWxlY3RpbmdNZW51SXRlbShlLCBmcm9tVG9vbGJhciA9IGZhbHNlKSB7XHJcbiAgICAgICAgaWYgKGUuaXRlbS5pZCA9PT0gJ2FkZE5vZGUnIHx8IGUuaXRlbS5pZCA9PT0gJ2FkZExlYWYnKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYWRkaW5nUm93ID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlSW5kZXggPSBmcm9tVG9vbGJhciA/IC0xIDogdGhpcy50cmVlR3JpZC5nZXRTZWxlY3RlZFJvd0luZGV4ZXMoKVswXVxyXG4gICAgICAgICAgICBjb25zdCByb290ID0geyBfaWQ6ICdyb290JyB9XHJcbiAgICAgICAgICAgIHJvb3RbdGhpcy5jaGlsZHJlbkZpZWxkXSA9IHRoaXMuZGF0YVNvdXJjZVxyXG4gICAgICAgICAgICBjb25zdCBub2RlSWQgPSBmcm9tVG9vbGJhciA/ICdyb290JyA6IHRoaXMudHJlZUdyaWQuZ2V0U2VsZWN0ZWRSZWNvcmRzKClbMF0uX2lkO1xyXG4gICAgICAgICAgICBjb25zdCBub2RlID0gdGhpcy5nZXRJdGVtQnlJZChub2RlSWQsIHJvb3QpXHJcbiAgICAgICAgICAgIGNvbnN0IG5ld1JlY29yZCA9IHsgX2lkOiB1dWlkKCkgfTtcclxuICAgICAgICAgICAgaWYgKGUuaXRlbS5pZCA9PT0gJ2FkZExlYWYnKSB7XHJcbiAgICAgICAgICAgICAgICBuZXdSZWNvcmRbdGhpcy5rZXlGaWVsZF0gPSBgTmV3ICR7dGhpcy5sZWFmTGFiZWx9YDtcclxuICAgICAgICAgICAgICAgIG5ld1JlY29yZFt0aGlzLnZhbHVlRmllbGRdID0gYE5ldyAke3RoaXMudmFsdWVIZWFkZXJ9YDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIG5ld1JlY29yZFt0aGlzLmtleUZpZWxkXSA9IGBOZXcgJHt0aGlzLm5vZGVMYWJlbH1gO1xyXG4gICAgICAgICAgICAgICAgbmV3UmVjb3JkW3RoaXMuY2hpbGRyZW5GaWVsZF0gPSBbXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBub2RlW3RoaXMuY2hpbGRyZW5GaWVsZF0udW5zaGlmdChuZXdSZWNvcmQpO1xyXG4gICAgICAgICAgICB0aGlzLmV4cGFuZGVkTm9kZUlkcyA9IHRoaXMudHJlZUdyaWQuZ2V0Um93cygpLmZpbHRlcihlID0+IGUuYXJpYUV4cGFuZGVkID09PSAndHJ1ZScpLm1hcChlID0+IGUuY2VsbHNbMF0uaW5uZXJUZXh0KTtcclxuICAgICAgICAgICAgdGhpcy50cmVlR3JpZC5kYXRhU291cmNlID0gdGhpcy5kYXRhU291cmNlLm1hcChlID0+IGUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvbkJpbmRpbmdEYXRhKGUpIHtcclxuICAgICAgICBpZiAodGhpcy5hZGRpbmdSb3cpIHtcclxuICAgICAgICAgICAgdGhpcy50cmVlR3JpZC5zZWxlY3RSb3codGhpcy5ub2RlSW5kZXggKyAxKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25TZWxlY3RpbmdSb3coZSkge1xyXG4gICAgICAgIGlmICh0aGlzLmFkZGluZ1Jvdykge1xyXG4gICAgICAgICAgICBjb25zdCByb3dzID0gdGhpcy50cmVlR3JpZC5nZXRSb3dzKCk7XHJcbiAgICAgICAgICAgIGlmICghIWUuZGF0YS5wYXJlbnRJdGVtKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwYXJlbnRSb3cgPSByb3dzLmZpbmQociA9PiByLmNlbGxzWzBdLmlubmVyVGV4dCA9PSBlLmRhdGEucGFyZW50SXRlbS5faWQpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy50cmVlR3JpZC5leHBhbmRSb3cocGFyZW50Um93KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByb3dzLmZvckVhY2gociA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5leHBhbmRlZE5vZGVJZHMuaW5jbHVkZXMoci5jZWxsc1swXS5pbm5lclRleHQpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50cmVlR3JpZC5leHBhbmRSb3cocik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB0aGlzLmV4cGFuZGVkTm9kZUlkcyA9IG51bGw7XHJcbiAgICAgICAgICAgIHRoaXMuYWRkaW5nUm93ID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBvbkNsaWNraW5nT25Ub29sYmFyKGUpIHtcclxuICAgICAgICBpZiAoZS5pdGVtLmlkID09PSAnbmV3VG9vbGJhckJ1dHRvbicpIHtcclxuICAgICAgICAgICAgY29uc3QgbmV3VG9vbGJhckJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGUuaXRlbS5pZCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlY3QgPSBuZXdUb29sYmFyQnV0dG9uLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXHJcbiAgICAgICAgICAgIHRoaXMubmV3TWVudS5vcGVuKHJlY3QueCwgcmVjdC55KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiA8ZGl2PlxyXG4gICAgICAgICAgICA8VHJlZUdyaWRDb21wb25lbnQgcmVmPXtjID0+IHRoaXMudHJlZUdyaWQgPSBjfSBoZWlnaHQ9e3RoaXMuaGVpZ2h0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFTb3VyY2U9e3RoaXMuZGF0YVNvdXJjZX0gdHJlZUNvbHVtbkluZGV4PXsxfSBjaGlsZE1hcHBpbmc9e3RoaXMuY2hpbGRyZW5GaWVsZH0gZW5hYmxlQ29sbGFwc2VBbGw9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxsb3dSZW9yZGVyaW5nPSd0cnVlJyBhbGxvd1NvcnRpbmc9J3RydWUnIGZpbHRlclNldHRpbmdzPXt7IHR5cGU6ICdNZW51JywgaGllcmFyY2h5TW9kZTogJ1BhcmVudCcgfX0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWRpdFNldHRpbmdzPXt0aGlzLmVkaXRTZXR0aW5nc30gY29udGV4dE1lbnVJdGVtcz17dGhpcy5jb250ZXh0TWVudUl0ZW1zfSB0b29sYmFyPXt0aGlzLnRvb2xiYXJTZXR0aW5nc30gc2VhcmNoU2V0dGluZ3M9e3RoaXMuc2VhcmNoU2V0dGluZ3N9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGV4dE1lbnVPcGVuPXtlID0+IHRoaXMub25PcGVuaW5nQ29udGV4dE1lbnUoZSl9IGNvbnRleHRNZW51Q2xpY2s9e2UgPT4gdGhpcy5vblNlbGVjdGluZ01lbnVJdGVtKGUpfSB0b29sYmFyQ2xpY2s9e2UgPT4gdGhpcy5vbkNsaWNraW5nT25Ub29sYmFyKGUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFCb3VuZD17ZSA9PiB0aGlzLm9uQmluZGluZ0RhdGEoZSl9IHJvd1NlbGVjdGVkPXtlID0+IHRoaXMub25TZWxlY3RpbmdSb3coZSl9IGNlbGxFZGl0PXtlID0+IHRoaXMub25FZGl0aW5nQ2VsbChlKX0gPlxyXG4gICAgICAgICAgICAgICAgPENvbHVtbnNEaXJlY3RpdmU+XHJcbiAgICAgICAgICAgICAgICAgICAgPENvbHVtbkRpcmVjdGl2ZSBmaWVsZD0nX2lkJyBpc1ByaW1hcnlLZXk9e3RydWV9IHZpc2libGU9e2ZhbHNlfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgPENvbHVtbkRpcmVjdGl2ZSBmaWVsZD17dGhpcy5rZXlGaWVsZH0gaGVhZGVyVGV4dD17dGhpcy5rZXlIZWFkZXJ9IHdpZHRoPSczMDAnIHZhbGlkYXRpb25SdWxlcz17dGhpcy5maWVsZFJlcXVpcmVkfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgPENvbHVtbkRpcmVjdGl2ZSBmaWVsZD17dGhpcy52YWx1ZUZpZWxkfSBoZWFkZXJUZXh0PXt0aGlzLnZhbHVlSGVhZGVyfSB3aWR0aD0nKicvPlxyXG4gICAgICAgICAgICAgICAgPC9Db2x1bW5zRGlyZWN0aXZlPlxyXG4gICAgICAgICAgICAgICAgPEluamVjdCBzZXJ2aWNlcz17W1NvcnQsIFJlb3JkZXIsIEVkaXQsIENvbnRleHRNZW51LCBSZXNpemUsIFRvb2xiYXIsIEZpbHRlcl19Lz5cclxuICAgICAgICAgICAgPC9UcmVlR3JpZENvbXBvbmVudD5cclxuICAgICAgICAgICAgPENvbnRleHRNZW51Q29tcG9uZW50IHJlZj17YyA9PiB0aGlzLm5ld01lbnUgPSBjfSBpdGVtcz17dGhpcy5uZXdNZW51SXRlbXN9IHNlbGVjdD17ZSA9PiB0aGlzLm9uU2VsZWN0aW5nTWVudUl0ZW0oZSwgdHJ1ZSl9IC8+XHJcbiAgICAgICAgPC9kaXY+IFxyXG4gICAgfVxyXG59XHJcblxyXG5OZXN0ZWREYXRhQ1JVRC5kZWZhdWx0UHJvcHMgPSB7fTtcclxuXHJcbk5lc3RlZERhdGFDUlVELnByb3BUeXBlcyA9IHtcclxuICAgIC8qKlxyXG4gICAgICogVGhlIElEIHVzZWQgdG8gaWRlbnRpZnkgdGhpcyBjb21wb25lbnQgaW4gRGFzaCBjYWxsYmFja3MuXHJcbiAgICAgKi9cclxuICAgIGlkOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgZGF0YVNvdXJjZTogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm9iamVjdCksXHJcbiAgICBrZXlGaWVsZDogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIGtleUhlYWRlcjogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIHZhbHVlRmllbGQ6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICB2YWx1ZUhlYWRlcjogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIGNoaWxkcmVuRmllbGQ6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICBub2RlTGFiZWw6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICBsZWFmTGFiZWw6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICBoZWlnaHQ6IFByb3BUeXBlcy5udW1iZXJcclxufTsiXSwic291cmNlUm9vdCI6IiJ9