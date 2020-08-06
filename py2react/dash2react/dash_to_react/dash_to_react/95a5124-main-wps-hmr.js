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

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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

    _this.setDisplayProperties();

    _this.initTreeGrid();

    _this.initDataSource();

    _this.initNewMenu();

    return _this;
  }

  _createClass(NestedDataCRUD, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_syncfusion_ej2_react_treegrid__WEBPACK_IMPORTED_MODULE_0__["TreeGridComponent"], {
        ref: function ref(c) {
          return _this2.treeGrid = c;
        },
        height: this.height,
        dataSource: this.state.dataSource,
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
          return _this2.onOpeningContextMenu(e);
        },
        contextMenuClick: function contextMenuClick(e) {
          return _this2.onSelectingMenuItem(e);
        },
        toolbarClick: function toolbarClick(e) {
          return _this2.onClickingOnToolbar(e);
        },
        dataBound: function dataBound(e) {
          return _this2.onBindingData(e);
        },
        rowSelected: function rowSelected(e) {
          return _this2.onSelectingRow(e);
        },
        cellEdit: function cellEdit(e) {
          return _this2.onEditingCell(e);
        },
        cellSave: function cellSave(e) {
          return _this2.afterEditingCell(e);
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
          return _this2.newMenu = c;
        },
        items: this.newMenuItems,
        select: function select(e) {
          return _this2.onSelectingMenuItem(e, true);
        }
      }));
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
    key: "afterEditingCell",
    value: function afterEditingCell(e) {
      this.updateDataSource(this.state.dataSource);
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
        root[this.childrenField] = this.state.dataSource.map(function (e) {
          return e;
        });
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
        this.updateDataSource(root[this.childrenField]);
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
    key: "initTreeGrid",
    value: function initTreeGrid() {
      this.setEditSettings();
      this.setContextMenuItems();
      this.setToolbarSettings();
      this.setSearchSettings();
      this.mapDataFields();
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
      }, 'Cancel', {
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
    value: function mapDataFields() {
      this.keyField = this.props.keyField || 'key';
      this.valueField = this.props.valueField || 'value';
      this.childrenField = this.props.childrenField || 'children';
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
      var dataSource = this.props.dataSource || [];
      dataSource = this.addIds(dataSource);
      dataSource = dataSource.map(function (e) {
        return _objectSpread({
          _id: Object(uuid__WEBPACK_IMPORTED_MODULE_5__["v4"])()
        }, e);
      });
      this.state = {
        dataSource: dataSource
      };
    }
  }, {
    key: "setDisplayProperties",
    value: function setDisplayProperties() {
      this.keyHeader = this.props.keyHeader || 'Key';
      this.valueHeader = this.props.valueHeader || 'Value';
      this.nodeLabel = this.props.nodeLabel || 'Node';
      this.leafLabel = this.props.leafLabel || 'Leaf';
    }
  }, {
    key: "addIds",
    value: function addIds(items) {
      var _this4 = this;

      items.forEach(function (e) {
        if (!!e[_this4.childrenField]) {
          e[_this4.childrenField] = _this4.addIds(e[_this4.childrenField]);
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
    key: "updateDataSource",
    value: function updateDataSource(dataSource) {
      this.setState({
        dataSource: dataSource
      });

      if (!!this.props.setProps) {
        this.props.setProps({
          dataSource: dataSource
        });
      }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kYXNoX3RvX3JlYWN0Ly4vc3JjL2xpYi9jb21wb25lbnRzL25lc3RlZC1kYXRhLWNydWQvTmVzdGVkRGF0YUNSVUQucmVhY3QuanMiXSwibmFtZXMiOlsiTmVzdGVkRGF0YUNSVUQiLCJwcm9wcyIsInNldFZhbGlkYXRpb25SdWxlcyIsInNldERpc3BsYXlQcm9wZXJ0aWVzIiwiaW5pdFRyZWVHcmlkIiwiaW5pdERhdGFTb3VyY2UiLCJpbml0TmV3TWVudSIsImMiLCJ0cmVlR3JpZCIsImhlaWdodCIsInN0YXRlIiwiZGF0YVNvdXJjZSIsImNoaWxkcmVuRmllbGQiLCJ0eXBlIiwiaGllcmFyY2h5TW9kZSIsImVkaXRTZXR0aW5ncyIsImNvbnRleHRNZW51SXRlbXMiLCJ0b29sYmFyU2V0dGluZ3MiLCJzZWFyY2hTZXR0aW5ncyIsImUiLCJvbk9wZW5pbmdDb250ZXh0TWVudSIsIm9uU2VsZWN0aW5nTWVudUl0ZW0iLCJvbkNsaWNraW5nT25Ub29sYmFyIiwib25CaW5kaW5nRGF0YSIsIm9uU2VsZWN0aW5nUm93Iiwib25FZGl0aW5nQ2VsbCIsImFmdGVyRWRpdGluZ0NlbGwiLCJrZXlGaWVsZCIsImtleUhlYWRlciIsImZpZWxkUmVxdWlyZWQiLCJ2YWx1ZUZpZWxkIiwidmFsdWVIZWFkZXIiLCJTb3J0IiwiUmVvcmRlciIsIkVkaXQiLCJDb250ZXh0TWVudSIsIlJlc2l6ZSIsIlRvb2xiYXIiLCJGaWx0ZXIiLCJuZXdNZW51IiwibmV3TWVudUl0ZW1zIiwibmV3TWVudUl0ZW1FbCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJkaXNwbGF5TmV3SXRlbSIsInJvd0luZm8iLCJyb3dEYXRhIiwiY29udGFpbnMiLCJ0YXJnZXQiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJhZGQiLCJjb250ZXh0TWVudUVsIiwiY2hpbGROb2RlcyIsImV2ZXJ5IiwiY2FuY2VsIiwiY29sdW1uTmFtZSIsInVwZGF0ZURhdGFTb3VyY2UiLCJmcm9tVG9vbGJhciIsIml0ZW0iLCJpZCIsImFkZGluZ1JvdyIsIm5vZGVJbmRleCIsImdldFNlbGVjdGVkUm93SW5kZXhlcyIsInJvb3QiLCJfaWQiLCJtYXAiLCJub2RlSWQiLCJnZXRTZWxlY3RlZFJlY29yZHMiLCJub2RlIiwiZ2V0SXRlbUJ5SWQiLCJuZXdSZWNvcmQiLCJ1dWlkIiwibGVhZkxhYmVsIiwibm9kZUxhYmVsIiwidW5zaGlmdCIsImV4cGFuZGVkTm9kZUlkcyIsImdldFJvd3MiLCJmaWx0ZXIiLCJhcmlhRXhwYW5kZWQiLCJjZWxscyIsImlubmVyVGV4dCIsInNlbGVjdFJvdyIsInJvd3MiLCJkYXRhIiwicGFyZW50SXRlbSIsInBhcmVudFJvdyIsImZpbmQiLCJyIiwiZXhwYW5kUm93IiwiZm9yRWFjaCIsImluY2x1ZGVzIiwibmV3VG9vbGJhckJ1dHRvbiIsInJlY3QiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJvcGVuIiwieCIsInkiLCJzZXRFZGl0U2V0dGluZ3MiLCJzZXRDb250ZXh0TWVudUl0ZW1zIiwic2V0VG9vbGJhclNldHRpbmdzIiwic2V0U2VhcmNoU2V0dGluZ3MiLCJtYXBEYXRhRmllbGRzIiwiYWxsb3dBZGRpbmciLCJhbGxvd0RlbGV0aW5nIiwiYWxsb3dFZGl0aW5nIiwibW9kZSIsIm5ld1Jvd1Bvc2l0aW9uIiwidGV4dCIsImljb25Dc3MiLCJpdGVtcyIsInByZWZpeEljb24iLCJyZXF1aXJlZCIsImFkZElkcyIsImkiLCJsZW5ndGgiLCJzZXRTdGF0ZSIsInNldFByb3BzIiwiUmVhY3QiLCJkZWZhdWx0UHJvcHMiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJhcnJheU9mIiwib2JqZWN0IiwibnVtYmVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztJQUVxQkEsYzs7Ozs7QUFDakIsMEJBQVlDLEtBQVos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QUtwSCxLQUFMLENBQVdvSCxRQUFYLENBQW9CO0FBQUUxRyxvQkFBVSxFQUFWQTtBQUFGLFNBQXBCO0FBQ0g7QUFDSjs7OztFQW5PdUMyRywrQzs7O0FBc081Q3RILGNBQWMsQ0FBQ3VILFlBQWYsR0FBOEIsRUFBOUI7QUFFQXZILGNBQWMsQ0FBQ3dILFNBQWYsR0FBMkI7QUFDdkI7OztBQUdBNUQsSUFBRSxFQUFFNkQsaURBQVMsQ0FBQ0MsTUFKUztBQUt2Qi9HLFlBQVUsRUFBRThHLGlEQUFTLENBQUNFLE9BQVYsQ0FBa0JGLGlEQUFTLENBQUNHLE1BQTVCLENBTFc7QUFNdkJqRyxVQUFRLEVBQUU4RixpREFBUyxDQUFDQyxNQU5HO0FBT3ZCOUYsV0FBUyxFQUFFNkYsaURBQVMsQ0FBQ0MsTUFQRTtBQVF2QjVGLFlBQVUsRUFBRTJGLGlEQUFTLENBQUNDLE1BUkM7QUFTdkIzRixhQUFXLEVBQUUwRixpREFBUyxDQUFDQyxNQVRBO0FBVXZCOUcsZUFBYSxFQUFFNkcsaURBQVMsQ0FBQ0MsTUFWRjtBQVd2QmhELFdBQVMsRUFBRStDLGlEQUFTLENBQUNDLE1BWEU7QUFZdkJqRCxXQUFTLEVBQUVnRCxpREFBUyxDQUFDQyxNQVpFO0FBYXZCakgsUUFBTSxFQUFFZ0gsaURBQVMsQ0FBQ0k7QUFiSyxDQUEzQixDIiwiZmlsZSI6Ijk1YTUxMjQtbWFpbi13cHMtaG1yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVHJlZUdyaWRDb21wb25lbnQsIENvbHVtbnNEaXJlY3RpdmUsIENvbHVtbkRpcmVjdGl2ZSwgU29ydCwgUmVvcmRlciwgRWRpdCwgQ29udGV4dE1lbnUsIFJlc2l6ZSwgVG9vbGJhciwgSW5qZWN0LCBGaWx0ZXIgfSBmcm9tICdAc3luY2Z1c2lvbi9lajItcmVhY3QtdHJlZWdyaWQnO1xyXG5pbXBvcnQgeyBDb250ZXh0TWVudUNvbXBvbmVudCB9IGZyb20gJ0BzeW5jZnVzaW9uL2VqMi1yZWFjdC1uYXZpZ2F0aW9ucyc7XHJcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0ICcuL25lc3RlZC1kYXRhLWNydWQuY3NzJztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IHsgdjQgYXMgdXVpZCB9IGZyb20gJ3V1aWQnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmVzdGVkRGF0YUNSVUQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5zZXRWYWxpZGF0aW9uUnVsZXMoKTtcclxuICAgICAgICB0aGlzLnNldERpc3BsYXlQcm9wZXJ0aWVzKCk7XHJcbiAgICAgICAgdGhpcy5pbml0VHJlZUdyaWQoKTtcclxuICAgICAgICB0aGlzLmluaXREYXRhU291cmNlKCk7XHJcbiAgICAgICAgdGhpcy5pbml0TmV3TWVudSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gPGRpdj5cclxuICAgICAgICAgICAgPFRyZWVHcmlkQ29tcG9uZW50IHJlZj17YyA9PiB0aGlzLnRyZWVHcmlkID0gY30gaGVpZ2h0PXt0aGlzLmhlaWdodH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhU291cmNlPXt0aGlzLnN0YXRlLmRhdGFTb3VyY2V9IHRyZWVDb2x1bW5JbmRleD17MX0gY2hpbGRNYXBwaW5nPXt0aGlzLmNoaWxkcmVuRmllbGR9IGVuYWJsZUNvbGxhcHNlQWxsPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsbG93UmVvcmRlcmluZz0ndHJ1ZScgYWxsb3dTb3J0aW5nPSd0cnVlJyBmaWx0ZXJTZXR0aW5ncz17eyB0eXBlOiAnTWVudScsIGhpZXJhcmNoeU1vZGU6ICdQYXJlbnQnIH19IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVkaXRTZXR0aW5ncz17dGhpcy5lZGl0U2V0dGluZ3N9IGNvbnRleHRNZW51SXRlbXM9e3RoaXMuY29udGV4dE1lbnVJdGVtc30gdG9vbGJhcj17dGhpcy50b29sYmFyU2V0dGluZ3N9IHNlYXJjaFNldHRpbmdzPXt0aGlzLnNlYXJjaFNldHRpbmdzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRleHRNZW51T3Blbj17ZSA9PiB0aGlzLm9uT3BlbmluZ0NvbnRleHRNZW51KGUpfSBjb250ZXh0TWVudUNsaWNrPXtlID0+IHRoaXMub25TZWxlY3RpbmdNZW51SXRlbShlKX0gdG9vbGJhckNsaWNrPXtlID0+IHRoaXMub25DbGlja2luZ09uVG9vbGJhcihlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhQm91bmQ9e2UgPT4gdGhpcy5vbkJpbmRpbmdEYXRhKGUpfSByb3dTZWxlY3RlZD17ZSA9PiB0aGlzLm9uU2VsZWN0aW5nUm93KGUpfSBjZWxsRWRpdD17ZSA9PiB0aGlzLm9uRWRpdGluZ0NlbGwoZSl9IGNlbGxTYXZlPXtlID0+IHRoaXMuYWZ0ZXJFZGl0aW5nQ2VsbChlKX0gPlxyXG4gICAgICAgICAgICAgICAgPENvbHVtbnNEaXJlY3RpdmU+XHJcbiAgICAgICAgICAgICAgICAgICAgPENvbHVtbkRpcmVjdGl2ZSBmaWVsZD0nX2lkJyBpc1ByaW1hcnlLZXk9e3RydWV9IHZpc2libGU9e2ZhbHNlfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgPENvbHVtbkRpcmVjdGl2ZSBmaWVsZD17dGhpcy5rZXlGaWVsZH0gaGVhZGVyVGV4dD17dGhpcy5rZXlIZWFkZXJ9IHdpZHRoPSczMDAnIHZhbGlkYXRpb25SdWxlcz17dGhpcy5maWVsZFJlcXVpcmVkfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgPENvbHVtbkRpcmVjdGl2ZSBmaWVsZD17dGhpcy52YWx1ZUZpZWxkfSBoZWFkZXJUZXh0PXt0aGlzLnZhbHVlSGVhZGVyfSB3aWR0aD0nKicvPlxyXG4gICAgICAgICAgICAgICAgPC9Db2x1bW5zRGlyZWN0aXZlPlxyXG4gICAgICAgICAgICAgICAgPEluamVjdCBzZXJ2aWNlcz17W1NvcnQsIFJlb3JkZXIsIEVkaXQsIENvbnRleHRNZW51LCBSZXNpemUsIFRvb2xiYXIsIEZpbHRlcl19Lz5cclxuICAgICAgICAgICAgPC9UcmVlR3JpZENvbXBvbmVudD5cclxuICAgICAgICAgICAgPENvbnRleHRNZW51Q29tcG9uZW50IHJlZj17YyA9PiB0aGlzLm5ld01lbnUgPSBjfSBpdGVtcz17dGhpcy5uZXdNZW51SXRlbXN9IHNlbGVjdD17ZSA9PiB0aGlzLm9uU2VsZWN0aW5nTWVudUl0ZW0oZSwgdHJ1ZSl9IC8+XHJcbiAgICAgICAgPC9kaXY+IFxyXG4gICAgfVxyXG5cclxuICAgIG9uT3BlbmluZ0NvbnRleHRNZW51KGUpIHtcclxuICAgICAgICBjb25zdCBuZXdNZW51SXRlbUVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25ld01lbnVJdGVtJylcclxuICAgICAgICBjb25zdCBkaXNwbGF5TmV3SXRlbSA9IFxyXG4gICAgICAgICAgICAoISFlLnJvd0luZm8ucm93RGF0YSAmJiAhIWUucm93SW5mby5yb3dEYXRhW3RoaXMuY2hpbGRyZW5GaWVsZF0pIHx8XHJcbiAgICAgICAgICAgIG5ld01lbnVJdGVtRWwuY29udGFpbnMoZS5yb3dJbmZvLnRhcmdldClcclxuICAgICAgICBpZiAoZGlzcGxheU5ld0l0ZW0pIHtcclxuICAgICAgICAgICAgbmV3TWVudUl0ZW1FbC5jbGFzc0xpc3QucmVtb3ZlKFwiZS1tZW51LWhpZGVcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBuZXdNZW51SXRlbUVsLmNsYXNzTGlzdC5hZGQoXCJlLW1lbnUtaGlkZVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgY29udGV4dE1lbnVFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdfZ3JpZGNvbnRyb2xfY21lbnUnKTtcclxuICAgICAgICBpZiAoISFjb250ZXh0TWVudUVsICYmICEhY29udGV4dE1lbnVFbC5jaGlsZE5vZGVzICYmIFsuLi4oY29udGV4dE1lbnVFbC5jaGlsZE5vZGVzKV0uZXZlcnkoZSA9PiBlLmNsYXNzTGlzdC5jb250YWlucygnZS1tZW51LWhpZGUnKSkpIHtcclxuICAgICAgICAgICAgZS5jYW5jZWwgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvbkVkaXRpbmdDZWxsKGUpIHtcclxuICAgICAgICBpZiAoZS5jb2x1bW5OYW1lID09PSB0aGlzLnZhbHVlRmllbGQgJiYgISFlLnJvd0RhdGFbdGhpcy5jaGlsZHJlbkZpZWxkXSkge1xyXG4gICAgICAgICAgICBlLmNhbmNlbCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGFmdGVyRWRpdGluZ0NlbGwoZSkge1xyXG4gICAgICAgIHRoaXMudXBkYXRlRGF0YVNvdXJjZSh0aGlzLnN0YXRlLmRhdGFTb3VyY2UpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uU2VsZWN0aW5nTWVudUl0ZW0oZSwgZnJvbVRvb2xiYXIgPSBmYWxzZSkge1xyXG4gICAgICAgIGlmIChlLml0ZW0uaWQgPT09ICdhZGROb2RlJyB8fCBlLml0ZW0uaWQgPT09ICdhZGRMZWFmJykge1xyXG4gICAgICAgICAgICB0aGlzLmFkZGluZ1JvdyA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZUluZGV4ID0gZnJvbVRvb2xiYXIgPyAtMSA6IHRoaXMudHJlZUdyaWQuZ2V0U2VsZWN0ZWRSb3dJbmRleGVzKClbMF1cclxuICAgICAgICAgICAgY29uc3Qgcm9vdCA9IHsgX2lkOiAncm9vdCcgfVxyXG4gICAgICAgICAgICByb290W3RoaXMuY2hpbGRyZW5GaWVsZF0gPSB0aGlzLnN0YXRlLmRhdGFTb3VyY2UubWFwKGUgPT4gZSk7XHJcbiAgICAgICAgICAgIGNvbnN0IG5vZGVJZCA9IGZyb21Ub29sYmFyID8gJ3Jvb3QnIDogdGhpcy50cmVlR3JpZC5nZXRTZWxlY3RlZFJlY29yZHMoKVswXS5faWQ7XHJcbiAgICAgICAgICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldEl0ZW1CeUlkKG5vZGVJZCwgcm9vdClcclxuICAgICAgICAgICAgY29uc3QgbmV3UmVjb3JkID0geyBfaWQ6IHV1aWQoKSB9O1xyXG4gICAgICAgICAgICBpZiAoZS5pdGVtLmlkID09PSAnYWRkTGVhZicpIHtcclxuICAgICAgICAgICAgICAgIG5ld1JlY29yZFt0aGlzLmtleUZpZWxkXSA9IGBOZXcgJHt0aGlzLmxlYWZMYWJlbH1gO1xyXG4gICAgICAgICAgICAgICAgbmV3UmVjb3JkW3RoaXMudmFsdWVGaWVsZF0gPSBgTmV3ICR7dGhpcy52YWx1ZUhlYWRlcn1gO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbmV3UmVjb3JkW3RoaXMua2V5RmllbGRdID0gYE5ldyAke3RoaXMubm9kZUxhYmVsfWA7XHJcbiAgICAgICAgICAgICAgICBuZXdSZWNvcmRbdGhpcy5jaGlsZHJlbkZpZWxkXSA9IFtdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG5vZGVbdGhpcy5jaGlsZHJlbkZpZWxkXS51bnNoaWZ0KG5ld1JlY29yZCk7XHJcbiAgICAgICAgICAgIHRoaXMuZXhwYW5kZWROb2RlSWRzID0gdGhpcy50cmVlR3JpZC5nZXRSb3dzKCkuZmlsdGVyKGUgPT4gZS5hcmlhRXhwYW5kZWQgPT09ICd0cnVlJykubWFwKGUgPT4gZS5jZWxsc1swXS5pbm5lclRleHQpO1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZURhdGFTb3VyY2Uocm9vdFt0aGlzLmNoaWxkcmVuRmllbGRdKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25CaW5kaW5nRGF0YShlKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuYWRkaW5nUm93KSB7XHJcbiAgICAgICAgICAgIHRoaXMudHJlZUdyaWQuc2VsZWN0Um93KHRoaXMubm9kZUluZGV4ICsgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uU2VsZWN0aW5nUm93KGUpIHtcclxuICAgICAgICBpZiAodGhpcy5hZGRpbmdSb3cpIHtcclxuICAgICAgICAgICAgY29uc3Qgcm93cyA9IHRoaXMudHJlZUdyaWQuZ2V0Um93cygpO1xyXG4gICAgICAgICAgICBpZiAoISFlLmRhdGEucGFyZW50SXRlbSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcGFyZW50Um93ID0gcm93cy5maW5kKHIgPT4gci5jZWxsc1swXS5pbm5lclRleHQgPT0gZS5kYXRhLnBhcmVudEl0ZW0uX2lkKTtcclxuICAgICAgICAgICAgICAgIHRoaXMudHJlZUdyaWQuZXhwYW5kUm93KHBhcmVudFJvdyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcm93cy5mb3JFYWNoKHIgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZXhwYW5kZWROb2RlSWRzLmluY2x1ZGVzKHIuY2VsbHNbMF0uaW5uZXJUZXh0KSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudHJlZUdyaWQuZXhwYW5kUm93KHIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdGhpcy5leHBhbmRlZE5vZGVJZHMgPSBudWxsO1xyXG4gICAgICAgICAgICB0aGlzLmFkZGluZ1JvdyA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgb25DbGlja2luZ09uVG9vbGJhcihlKSB7XHJcbiAgICAgICAgaWYgKGUuaXRlbS5pZCA9PT0gJ25ld1Rvb2xiYXJCdXR0b24nKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG5ld1Rvb2xiYXJCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChlLml0ZW0uaWQpO1xyXG4gICAgICAgICAgICBjb25zdCByZWN0ID0gbmV3VG9vbGJhckJ1dHRvbi5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxyXG4gICAgICAgICAgICB0aGlzLm5ld01lbnUub3BlbihyZWN0LngsIHJlY3QueSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGluaXRUcmVlR3JpZCgpIHtcclxuICAgICAgICB0aGlzLnNldEVkaXRTZXR0aW5ncygpO1xyXG4gICAgICAgIHRoaXMuc2V0Q29udGV4dE1lbnVJdGVtcygpO1xyXG4gICAgICAgIHRoaXMuc2V0VG9vbGJhclNldHRpbmdzKCk7XHJcbiAgICAgICAgdGhpcy5zZXRTZWFyY2hTZXR0aW5ncygpXHJcbiAgICAgICAgdGhpcy5tYXBEYXRhRmllbGRzKCk7XHJcbiAgICAgICAgdGhpcy5oZWlnaHQgPSB0aGlzLnByb3BzLmhlaWdodCB8fCA1MDA7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0RWRpdFNldHRpbmdzKCkge1xyXG4gICAgICAgIHRoaXMuZWRpdFNldHRpbmdzID0ge1xyXG4gICAgICAgICAgICBhbGxvd0FkZGluZzogdHJ1ZSxcclxuICAgICAgICAgICAgYWxsb3dEZWxldGluZzogdHJ1ZSxcclxuICAgICAgICAgICAgYWxsb3dFZGl0aW5nOiB0cnVlLFxyXG4gICAgICAgICAgICBtb2RlOiAnQ2VsbCcsXHJcbiAgICAgICAgICAgIG5ld1Jvd1Bvc2l0aW9uOiAnQmVsb3cnLFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgc2V0Q29udGV4dE1lbnVJdGVtcygpIHtcclxuICAgICAgICB0aGlzLmNvbnRleHRNZW51SXRlbXMgPSBbXHJcbiAgICAgICAgICAgICdBdXRvRml0JyxcclxuICAgICAgICAgICAgJ0F1dG9GaXRBbGwnLFxyXG4gICAgICAgICAgICAnU29ydEFzY2VuZGluZycsXHJcbiAgICAgICAgICAgICdTb3J0RGVzY2VuZGluZycsXHJcbiAgICAgICAgICAgICdEZWxldGUnLFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZDogJ25ld01lbnVJdGVtJyxcclxuICAgICAgICAgICAgICAgIHRleHQ6ICdOZXcnLFxyXG4gICAgICAgICAgICAgICAgaWNvbkNzczogJ2UtaWNvbnMgZS1hZGQnLFxyXG4gICAgICAgICAgICAgICAgaXRlbXM6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IGlkOiAnYWRkTm9kZScsIHRleHQ6IHRoaXMubm9kZUxhYmVsIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBpZDogJ2FkZExlYWYnLCB0ZXh0OiB0aGlzLmxlYWZMYWJlbCB9XHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgXTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRUb29sYmFyU2V0dGluZ3MoKSB7XHJcbiAgICAgICAgdGhpcy50b29sYmFyU2V0dGluZ3MgPSBbXHJcbiAgICAgICAgICAgIHsgaWQ6ICduZXdUb29sYmFyQnV0dG9uJywgdGV4dDogJ05ldycsIHByZWZpeEljb246ICdlLWFkZCcgfSxcclxuICAgICAgICAgICAgJ0NhbmNlbCcsXHJcbiAgICAgICAgICAgIHsgdHlwZTogJ1NlcGFyYXRvcicgfSxcclxuICAgICAgICAgICAgJ1NlYXJjaCcsXHJcbiAgICAgICAgICAgICdFeHBhbmRBbGwnLFxyXG4gICAgICAgICAgICAnQ29sbGFwc2VBbGwnLFxyXG4gICAgICAgIF07XHJcbiAgICB9XHJcblxyXG4gICAgc2V0U2VhcmNoU2V0dGluZ3MoKSB7XHJcbiAgICAgICAgdGhpcy5zZWFyY2hTZXR0aW5ncyA9IHtcclxuICAgICAgICAgICAgaGllcmFyY2h5TW9kZTogJ0JvdGgnXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG1hcERhdGFGaWVsZHMoKSB7XHJcbiAgICAgICAgdGhpcy5rZXlGaWVsZCA9IHRoaXMucHJvcHMua2V5RmllbGQgfHwgJ2tleSc7XHJcbiAgICAgICAgdGhpcy52YWx1ZUZpZWxkID0gdGhpcy5wcm9wcy52YWx1ZUZpZWxkIHx8ICd2YWx1ZSc7XHJcbiAgICAgICAgdGhpcy5jaGlsZHJlbkZpZWxkID0gdGhpcy5wcm9wcy5jaGlsZHJlbkZpZWxkIHx8ICdjaGlsZHJlbic7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdE5ld01lbnUoKSB7XHJcbiAgICAgICAgdGhpcy5uZXdNZW51SXRlbXMgPSBbXHJcbiAgICAgICAgICAgIHsgaWQ6ICdhZGROb2RlJywgdGV4dDogdGhpcy5ub2RlTGFiZWwgfSxcclxuICAgICAgICAgICAgeyBpZDogJ2FkZExlYWYnLCB0ZXh0OiB0aGlzLmxlYWZMYWJlbCB9LFxyXG4gICAgICAgIF07XHJcbiAgICB9XHJcblxyXG4gICAgc2V0VmFsaWRhdGlvblJ1bGVzKCkge1xyXG4gICAgICAgIHRoaXMuZmllbGRSZXF1aXJlZCA9IHsgcmVxdWlyZWQ6IHRydWUgfTtcclxuICAgIH1cclxuXHJcbiAgICBpbml0RGF0YVNvdXJjZSgpIHtcclxuICAgICAgICBsZXQgZGF0YVNvdXJjZSA9IHRoaXMucHJvcHMuZGF0YVNvdXJjZSB8fCBbXTtcclxuICAgICAgICBkYXRhU291cmNlID0gdGhpcy5hZGRJZHMoZGF0YVNvdXJjZSk7XHJcbiAgICAgICAgZGF0YVNvdXJjZSA9IGRhdGFTb3VyY2UubWFwKGUgPT4geyByZXR1cm4geyBfaWQ6IHV1aWQoKSwgLi4uZSB9OyB9KTtcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBkYXRhU291cmNlXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNldERpc3BsYXlQcm9wZXJ0aWVzKCkge1xyXG4gICAgICAgIHRoaXMua2V5SGVhZGVyID0gdGhpcy5wcm9wcy5rZXlIZWFkZXIgfHwgJ0tleSc7XHJcbiAgICAgICAgdGhpcy52YWx1ZUhlYWRlciA9IHRoaXMucHJvcHMudmFsdWVIZWFkZXIgfHwgJ1ZhbHVlJztcclxuICAgICAgICB0aGlzLm5vZGVMYWJlbCA9IHRoaXMucHJvcHMubm9kZUxhYmVsIHx8ICdOb2RlJztcclxuICAgICAgICB0aGlzLmxlYWZMYWJlbCA9IHRoaXMucHJvcHMubGVhZkxhYmVsIHx8ICdMZWFmJztcclxuICAgIH1cclxuXHJcbiAgICBhZGRJZHMoaXRlbXMpIHtcclxuICAgICAgICBpdGVtcy5mb3JFYWNoKGUgPT4ge1xyXG4gICAgICAgICAgICBpZiAoISFlW3RoaXMuY2hpbGRyZW5GaWVsZF0pIHtcclxuICAgICAgICAgICAgICAgIGVbdGhpcy5jaGlsZHJlbkZpZWxkXSA9IHRoaXMuYWRkSWRzKGVbdGhpcy5jaGlsZHJlbkZpZWxkXSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiBpdGVtcy5tYXAoZSA9PiB7IHJldHVybiB7IF9pZDogdXVpZCgpLCAuLi5lIH07IH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEl0ZW1CeUlkKGlkLCByb290KSB7XHJcbiAgICAgICAgaWYgKHJvb3QuX2lkID09IGlkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiByb290O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoISFyb290W3RoaXMuY2hpbGRyZW5GaWVsZF0pIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByb290W3RoaXMuY2hpbGRyZW5GaWVsZF0ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSB0aGlzLmdldEl0ZW1CeUlkKGlkLCByb290W3RoaXMuY2hpbGRyZW5GaWVsZF1baV0pO1xyXG4gICAgICAgICAgICAgICAgaWYgKCEhaXRlbSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBpdGVtO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZURhdGFTb3VyY2UoZGF0YVNvdXJjZSkge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBkYXRhU291cmNlIH0pO1xyXG4gICAgICAgIGlmICghIXRoaXMucHJvcHMuc2V0UHJvcHMpIHtcclxuICAgICAgICAgICAgdGhpcy5wcm9wcy5zZXRQcm9wcyh7IGRhdGFTb3VyY2UgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5OZXN0ZWREYXRhQ1JVRC5kZWZhdWx0UHJvcHMgPSB7fTtcclxuXHJcbk5lc3RlZERhdGFDUlVELnByb3BUeXBlcyA9IHtcclxuICAgIC8qKlxyXG4gICAgICogVGhlIElEIHVzZWQgdG8gaWRlbnRpZnkgdGhpcyBjb21wb25lbnQgaW4gRGFzaCBjYWxsYmFja3MuXHJcbiAgICAgKi9cclxuICAgIGlkOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgZGF0YVNvdXJjZTogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm9iamVjdCksXHJcbiAgICBrZXlGaWVsZDogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIGtleUhlYWRlcjogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIHZhbHVlRmllbGQ6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICB2YWx1ZUhlYWRlcjogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIGNoaWxkcmVuRmllbGQ6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICBub2RlTGFiZWw6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICBsZWFmTGFiZWw6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICBoZWlnaHQ6IFByb3BUeXBlcy5udW1iZXJcclxufTsiXSwic291cmNlUm9vdCI6IiJ9