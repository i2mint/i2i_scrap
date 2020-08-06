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
      this.setEditOptions();
      this.setContextMenuItems();
      this.setToolbarOptions();
      this.mapDataFields(props);
    }
  }, {
    key: "setEditOptions",
    value: function setEditOptions() {
      this.editOptions = {
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
    key: "setToolbarOptions",
    value: function setToolbarOptions() {
      this.toolbarOptions = [{
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
      this.dataSource = this.props.dataSource;
      this.dataSource = this.addIds(this.dataSource);
      this.dataSource = this.props.dataSource.map(function (e) {
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
      var newMenuItemEl = document.querySelectorAll('#newMenuItem')[0];
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
      console.log(this.treeGrid);

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
        this.newMenu.open();
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
        height: 800,
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
        editSettings: this.editOptions,
        contextMenuItems: this.contextMenuItems,
        toolbar: this.toolbarOptions,
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
        width: "200",
        validationRules: this.fieldRequired
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_syncfusion_ej2_react_treegrid__WEBPACK_IMPORTED_MODULE_0__["ColumnDirective"], {
        field: this.valueField,
        headerText: this.valueHeader,
        width: "*"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_syncfusion_ej2_react_treegrid__WEBPACK_IMPORTED_MODULE_0__["Inject"], {
        services: [_syncfusion_ej2_react_treegrid__WEBPACK_IMPORTED_MODULE_0__["Sort"], _syncfusion_ej2_react_treegrid__WEBPACK_IMPORTED_MODULE_0__["Reorder"], _syncfusion_ej2_react_treegrid__WEBPACK_IMPORTED_MODULE_0__["Edit"], _syncfusion_ej2_react_treegrid__WEBPACK_IMPORTED_MODULE_0__["ContextMenu"], _syncfusion_ej2_react_treegrid__WEBPACK_IMPORTED_MODULE_0__["Resize"], _syncfusion_ej2_react_treegrid__WEBPACK_IMPORTED_MODULE_0__["Toolbar"]]
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_syncfusion_ej2_react_navigations__WEBPACK_IMPORTED_MODULE_1__["ContextMenuComponent"], {
        ref: function ref(c) {
          return _this4.newMenu = c;
        },
        target: "#newToolbarButton",
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
  id: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string
};

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kYXNoX3RvX3JlYWN0Ly4vc3JjL2xpYi9jb21wb25lbnRzL25lc3RlZC1kYXRhLWNydWQvTmVzdGVkRGF0YUNSVUQucmVhY3QuanMiXSwibmFtZXMiOlsiTmVzdGVkRGF0YUNSVUQiLCJwcm9wcyIsInNldFZhbGlkYXRpb25SdWxlcyIsInNldERpc3BsYXlQcm9wZXJ0aWVzIiwiaW5pdFRyZWVHcmlkIiwiaW5pdERhdGFTb3VyY2UiLCJpbml0TmV3TWVudSIsInNldEVkaXRPcHRpb25zIiwic2V0Q29udGV4dE1lbnVJdGVtcyIsInNldFRvb2xiYXJPcHRpb25zIiwibWFwRGF0YUZpZWxkcyIsImVkaXRPcHRpb25zIiwiYWxsb3dBZGRpbmciLCJhbGxvd0RlbGV0aW5nIiwiYWxsb3dFZGl0aW5nIiwibW9kZSIsIm5ld1Jvd1Bvc2l0aW9uIiwiY29udGV4dE1lbnVJdGVtcyIsImlkIiwidGV4dCIsImljb25Dc3MiLCJpdGVtcyIsIm5vZGVMYWJlbCIsImxlYWZMYWJlbCIsInRvb2xiYXJPcHRpb25zIiwicHJlZml4SWNvbiIsInR5cGUiLCJrZXlGaWVsZCIsInZhbHVlRmllbGQiLCJjaGlsZHJlbkZpZWxkIiwibmV3TWVudUl0ZW1zIiwiZmllbGRSZXF1aXJlZCIsInJlcXVpcmVkIiwiZGF0YVNvdXJjZSIsImFkZElkcyIsIm1hcCIsImUiLCJfaWQiLCJ1dWlkIiwia2V5SGVhZGVyIiwidmFsdWVIZWFkZXIiLCJmb3JFYWNoIiwicm9vdCIsImkiLCJsZW5ndGgiLCJpdGVtIiwiZ2V0SXRlbUJ5SWQiLCJuZXdNZW51SXRlbUVsIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZGlzcGxheU5ld0l0ZW0iLCJyb3dJbmZvIiwicm93RGF0YSIsImNvbnRhaW5zIiwidGFyZ2V0IiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiYWRkIiwiY29udGV4dE1lbnVFbCIsImdldEVsZW1lbnRCeUlkIiwiY2hpbGROb2RlcyIsImV2ZXJ5IiwiY2FuY2VsIiwiY29uc29sZSIsImxvZyIsInRyZWVHcmlkIiwiY29sdW1uTmFtZSIsImZyb21Ub29sYmFyIiwiYWRkaW5nUm93Iiwibm9kZUluZGV4IiwiZ2V0U2VsZWN0ZWRSb3dJbmRleGVzIiwibm9kZUlkIiwiZ2V0U2VsZWN0ZWRSZWNvcmRzIiwibm9kZSIsIm5ld1JlY29yZCIsInVuc2hpZnQiLCJleHBhbmRlZE5vZGVJZHMiLCJnZXRSb3dzIiwiZmlsdGVyIiwiYXJpYUV4cGFuZGVkIiwiY2VsbHMiLCJpbm5lclRleHQiLCJzZWxlY3RSb3ciLCJyb3dzIiwiZGF0YSIsInBhcmVudEl0ZW0iLCJwYXJlbnRSb3ciLCJmaW5kIiwiciIsImV4cGFuZFJvdyIsImluY2x1ZGVzIiwibmV3TWVudSIsIm9wZW4iLCJjIiwiaGllcmFyY2h5TW9kZSIsIm9uT3BlbmluZ0NvbnRleHRNZW51Iiwib25TZWxlY3RpbmdNZW51SXRlbSIsIm9uQ2xpY2tpbmdPblRvb2xiYXIiLCJvbkJpbmRpbmdEYXRhIiwib25TZWxlY3RpbmdSb3ciLCJvbkVkaXRpbmdDZWxsIiwiU29ydCIsIlJlb3JkZXIiLCJFZGl0IiwiQ29udGV4dE1lbnUiLCJSZXNpemUiLCJUb29sYmFyIiwiUmVhY3QiLCJkZWZhdWx0UHJvcHMiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJzdHJpbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0lBRXFCQSxjOzs7OztBQUNqQiwwQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNmLDhCQUFNQSxLQUFOOztBQUNBLFVBQUtDLGtCQUFMOztBQUNBLFVBQUtDLG9CQUFMLENBQTBCRixLQUExQjs7QUFDQSxVQUFLRyxZQUFMLENBQWtCSCxLQUFsQjs7QUFDQSxVQUFLSSxjQUFMOztBQUNBLFVBQUtDLFdBQUw7O0FBTmU7QUFPbEI7Ozs7aUNBRVlMLEssRUFBTztB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LEVBQUUsZ0JBQUFNLENBQUM7QUFBQSxpQkFBSSxNQUFJLENBQUM0RCxtQkFBTCxDQUF5QjVELENBQXpCLEVBQTRCLElBQTVCLENBQUo7QUFBQTtBQUFoSCxRQWRHLENBQVA7QUFnQkg7Ozs7RUE5TXVDdUUsK0M7OztBQWlONUMzRyxjQUFjLENBQUM0RyxZQUFmLEdBQThCLEVBQTlCO0FBRUE1RyxjQUFjLENBQUM2RyxTQUFmLEdBQTJCO0FBQ3ZCOzs7QUFHQTNGLElBQUUsRUFBRTRGLGlEQUFTLENBQUNDO0FBSlMsQ0FBM0IsQyIsImZpbGUiOiI5NzQ3YmM5LW1haW4td3BzLWhtci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRyZWVHcmlkQ29tcG9uZW50LCBDb2x1bW5zRGlyZWN0aXZlLCBDb2x1bW5EaXJlY3RpdmUsIFNvcnQsIFJlb3JkZXIsIEVkaXQsIENvbnRleHRNZW51LCBSZXNpemUsIFRvb2xiYXIsIEluamVjdCB9IGZyb20gJ0BzeW5jZnVzaW9uL2VqMi1yZWFjdC10cmVlZ3JpZCc7XHJcbmltcG9ydCB7IENvbnRleHRNZW51Q29tcG9uZW50IH0gZnJvbSAnQHN5bmNmdXNpb24vZWoyLXJlYWN0LW5hdmlnYXRpb25zJztcclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgJy4vbmVzdGVkLWRhdGEtY3J1ZC5jc3MnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgeyB2NCBhcyB1dWlkIH0gZnJvbSAndXVpZCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXN0ZWREYXRhQ1JVRCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLnNldFZhbGlkYXRpb25SdWxlcygpO1xyXG4gICAgICAgIHRoaXMuc2V0RGlzcGxheVByb3BlcnRpZXMocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuaW5pdFRyZWVHcmlkKHByb3BzKTtcclxuICAgICAgICB0aGlzLmluaXREYXRhU291cmNlKCk7XHJcbiAgICAgICAgdGhpcy5pbml0TmV3TWVudSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGluaXRUcmVlR3JpZChwcm9wcykge1xyXG4gICAgICAgIHRoaXMuc2V0RWRpdE9wdGlvbnMoKTtcclxuICAgICAgICB0aGlzLnNldENvbnRleHRNZW51SXRlbXMoKTtcclxuICAgICAgICB0aGlzLnNldFRvb2xiYXJPcHRpb25zKCk7XHJcbiAgICAgICAgdGhpcy5tYXBEYXRhRmllbGRzKHByb3BzKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRFZGl0T3B0aW9ucygpIHtcclxuICAgICAgICB0aGlzLmVkaXRPcHRpb25zID0ge1xyXG4gICAgICAgICAgICBhbGxvd0FkZGluZzogdHJ1ZSxcclxuICAgICAgICAgICAgYWxsb3dEZWxldGluZzogdHJ1ZSxcclxuICAgICAgICAgICAgYWxsb3dFZGl0aW5nOiB0cnVlLFxyXG4gICAgICAgICAgICBtb2RlOiAnQ2VsbCcsXHJcbiAgICAgICAgICAgIG5ld1Jvd1Bvc2l0aW9uOiAnQmVsb3cnLFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgc2V0Q29udGV4dE1lbnVJdGVtcygpIHtcclxuICAgICAgICB0aGlzLmNvbnRleHRNZW51SXRlbXMgPSBbXHJcbiAgICAgICAgICAgICdBdXRvRml0JyxcclxuICAgICAgICAgICAgJ0F1dG9GaXRBbGwnLFxyXG4gICAgICAgICAgICAnU29ydEFzY2VuZGluZycsXHJcbiAgICAgICAgICAgICdTb3J0RGVzY2VuZGluZycsXHJcbiAgICAgICAgICAgICdEZWxldGUnLFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZDogJ25ld01lbnVJdGVtJyxcclxuICAgICAgICAgICAgICAgIHRleHQ6ICdOZXcnLFxyXG4gICAgICAgICAgICAgICAgaWNvbkNzczogJ2UtaWNvbnMgZS1hZGQnLFxyXG4gICAgICAgICAgICAgICAgaXRlbXM6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IGlkOiAnYWRkTm9kZScsIHRleHQ6IHRoaXMubm9kZUxhYmVsIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBpZDogJ2FkZExlYWYnLCB0ZXh0OiB0aGlzLmxlYWZMYWJlbCB9XHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgXTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRUb29sYmFyT3B0aW9ucygpIHtcclxuICAgICAgICB0aGlzLnRvb2xiYXJPcHRpb25zID0gW1xyXG4gICAgICAgICAgICB7IGlkOiAnbmV3VG9vbGJhckJ1dHRvbicsIHRleHQ6ICdOZXcnLCBwcmVmaXhJY29uOiAnZS1hZGQnIH0sXHJcbiAgICAgICAgICAgIC8vICdEZWxldGUnLFxyXG4gICAgICAgICAgICAvLyAnVXBkYXRlJyxcclxuICAgICAgICAgICAgJ0NhbmNlbCcsXHJcbiAgICAgICAgICAgIHsgdHlwZTogJ1NlcGFyYXRvcicgfSxcclxuICAgICAgICAgICAgJ1NlYXJjaCcsXHJcbiAgICAgICAgICAgICdFeHBhbmRBbGwnLFxyXG4gICAgICAgICAgICAnQ29sbGFwc2VBbGwnLFxyXG4gICAgICAgIF07XHJcbiAgICB9XHJcblxyXG4gICAgbWFwRGF0YUZpZWxkcyhwcm9wcykge1xyXG4gICAgICAgIHRoaXMua2V5RmllbGQgPSBwcm9wcy5rZXlGaWVsZCB8fCAna2V5JztcclxuICAgICAgICB0aGlzLnZhbHVlRmllbGQgPSBwcm9wcy52YWx1ZUZpZWxkIHx8ICd2YWx1ZSc7XHJcbiAgICAgICAgdGhpcy5jaGlsZHJlbkZpZWxkID0gcHJvcHMuY2hpbGRyZW5GaWVsZCB8fCAnY2hpbGRyZW4nO1xyXG4gICAgfVxyXG5cclxuICAgIGluaXROZXdNZW51KCkge1xyXG4gICAgICAgIHRoaXMubmV3TWVudUl0ZW1zID0gW1xyXG4gICAgICAgICAgICB7IGlkOiAnYWRkTm9kZScsIHRleHQ6IHRoaXMubm9kZUxhYmVsIH0sXHJcbiAgICAgICAgICAgIHsgaWQ6ICdhZGRMZWFmJywgdGV4dDogdGhpcy5sZWFmTGFiZWwgfSxcclxuICAgICAgICBdO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFZhbGlkYXRpb25SdWxlcygpIHtcclxuICAgICAgICB0aGlzLmZpZWxkUmVxdWlyZWQgPSB7IHJlcXVpcmVkOiB0cnVlIH07XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdERhdGFTb3VyY2UoKSB7XHJcbiAgICAgICAgdGhpcy5kYXRhU291cmNlID0gdGhpcy5wcm9wcy5kYXRhU291cmNlO1xyXG4gICAgICAgIHRoaXMuZGF0YVNvdXJjZSA9IHRoaXMuYWRkSWRzKHRoaXMuZGF0YVNvdXJjZSk7XHJcbiAgICAgICAgdGhpcy5kYXRhU291cmNlID0gdGhpcy5wcm9wcy5kYXRhU291cmNlLm1hcChlID0+IHsgcmV0dXJuIHsgX2lkOiB1dWlkKCksIC4uLmUgfTsgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0RGlzcGxheVByb3BlcnRpZXMocHJvcHMpIHtcclxuICAgICAgICB0aGlzLmtleUhlYWRlciA9IHByb3BzLmtleUhlYWRlciB8fCAnS2V5JztcclxuICAgICAgICB0aGlzLnZhbHVlSGVhZGVyID0gcHJvcHMudmFsdWVIZWFkZXIgfHwgJ1ZhbHVlJztcclxuICAgICAgICB0aGlzLm5vZGVMYWJlbCA9IHByb3BzLm5vZGVMYWJlbCB8fCAnTm9kZSc7XHJcbiAgICAgICAgdGhpcy5sZWFmTGFiZWwgPSBwcm9wcy5sZWFmTGFiZWwgfHwgJ0xlYWYnO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZElkcyhpdGVtcykge1xyXG4gICAgICAgIGl0ZW1zLmZvckVhY2goZSA9PiB7XHJcbiAgICAgICAgICAgIGlmICghIWVbdGhpcy5jaGlsZHJlbkZpZWxkXSkge1xyXG4gICAgICAgICAgICAgICAgZVt0aGlzLmNoaWxkcmVuRmllbGRdID0gdGhpcy5hZGRJZHMoZVt0aGlzLmNoaWxkcmVuRmllbGRdKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIGl0ZW1zLm1hcChlID0+IHsgcmV0dXJuIHsgX2lkOiB1dWlkKCksIC4uLmUgfTsgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0SXRlbUJ5SWQoaWQsIHJvb3QpIHtcclxuICAgICAgICBpZiAocm9vdC5faWQgPT0gaWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHJvb3Q7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghIXJvb3RbdGhpcy5jaGlsZHJlbkZpZWxkXSkge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJvb3RbdGhpcy5jaGlsZHJlbkZpZWxkXS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaXRlbSA9IHRoaXMuZ2V0SXRlbUJ5SWQoaWQsIHJvb3RbdGhpcy5jaGlsZHJlbkZpZWxkXVtpXSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoISFpdGVtKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgb25PcGVuaW5nQ29udGV4dE1lbnUoZSkge1xyXG4gICAgICAgIGNvbnN0IG5ld01lbnVJdGVtRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjbmV3TWVudUl0ZW0nKVswXVxyXG4gICAgICAgIGNvbnN0IGRpc3BsYXlOZXdJdGVtID0gXHJcbiAgICAgICAgICAgICghIWUucm93SW5mby5yb3dEYXRhICYmICEhZS5yb3dJbmZvLnJvd0RhdGFbdGhpcy5jaGlsZHJlbkZpZWxkXSkgfHxcclxuICAgICAgICAgICAgbmV3TWVudUl0ZW1FbC5jb250YWlucyhlLnJvd0luZm8udGFyZ2V0KVxyXG4gICAgICAgIGlmIChkaXNwbGF5TmV3SXRlbSkge1xyXG4gICAgICAgICAgICBuZXdNZW51SXRlbUVsLmNsYXNzTGlzdC5yZW1vdmUoXCJlLW1lbnUtaGlkZVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIG5ld01lbnVJdGVtRWwuY2xhc3NMaXN0LmFkZChcImUtbWVudS1oaWRlXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBjb250ZXh0TWVudUVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ19ncmlkY29udHJvbF9jbWVudScpO1xyXG4gICAgICAgIGlmICghIWNvbnRleHRNZW51RWwgJiYgISFjb250ZXh0TWVudUVsLmNoaWxkTm9kZXMgJiYgWy4uLihjb250ZXh0TWVudUVsLmNoaWxkTm9kZXMpXS5ldmVyeShlID0+IGUuY2xhc3NMaXN0LmNvbnRhaW5zKCdlLW1lbnUtaGlkZScpKSkge1xyXG4gICAgICAgICAgICBlLmNhbmNlbCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uRWRpdGluZ0NlbGwoZSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMudHJlZUdyaWQpO1xyXG4gICAgICAgIGlmIChlLmNvbHVtbk5hbWUgPT09IHRoaXMudmFsdWVGaWVsZCAmJiAhIWUucm93RGF0YVt0aGlzLmNoaWxkcmVuRmllbGRdKSB7XHJcbiAgICAgICAgICAgIGUuY2FuY2VsID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25TZWxlY3RpbmdNZW51SXRlbShlLCBmcm9tVG9vbGJhciA9IGZhbHNlKSB7XHJcbiAgICAgICAgaWYgKGUuaXRlbS5pZCA9PT0gJ2FkZE5vZGUnIHx8IGUuaXRlbS5pZCA9PT0gJ2FkZExlYWYnKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYWRkaW5nUm93ID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlSW5kZXggPSBmcm9tVG9vbGJhciA/IC0xIDogdGhpcy50cmVlR3JpZC5nZXRTZWxlY3RlZFJvd0luZGV4ZXMoKVswXVxyXG4gICAgICAgICAgICBjb25zdCByb290ID0geyBfaWQ6ICdyb290JyB9XHJcbiAgICAgICAgICAgIHJvb3RbdGhpcy5jaGlsZHJlbkZpZWxkXSA9IHRoaXMuZGF0YVNvdXJjZVxyXG4gICAgICAgICAgICBjb25zdCBub2RlSWQgPSBmcm9tVG9vbGJhciA/ICdyb290JyA6IHRoaXMudHJlZUdyaWQuZ2V0U2VsZWN0ZWRSZWNvcmRzKClbMF0uX2lkO1xyXG4gICAgICAgICAgICBjb25zdCBub2RlID0gdGhpcy5nZXRJdGVtQnlJZChub2RlSWQsIHJvb3QpXHJcbiAgICAgICAgICAgIGNvbnN0IG5ld1JlY29yZCA9IHsgX2lkOiB1dWlkKCkgfTtcclxuICAgICAgICAgICAgaWYgKGUuaXRlbS5pZCA9PT0gJ2FkZExlYWYnKSB7XHJcbiAgICAgICAgICAgICAgICBuZXdSZWNvcmRbdGhpcy5rZXlGaWVsZF0gPSBgTmV3ICR7dGhpcy5sZWFmTGFiZWx9YDtcclxuICAgICAgICAgICAgICAgIG5ld1JlY29yZFt0aGlzLnZhbHVlRmllbGRdID0gYE5ldyAke3RoaXMudmFsdWVIZWFkZXJ9YDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIG5ld1JlY29yZFt0aGlzLmtleUZpZWxkXSA9IGBOZXcgJHt0aGlzLm5vZGVMYWJlbH1gO1xyXG4gICAgICAgICAgICAgICAgbmV3UmVjb3JkW3RoaXMuY2hpbGRyZW5GaWVsZF0gPSBbXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBub2RlW3RoaXMuY2hpbGRyZW5GaWVsZF0udW5zaGlmdChuZXdSZWNvcmQpO1xyXG4gICAgICAgICAgICB0aGlzLmV4cGFuZGVkTm9kZUlkcyA9IHRoaXMudHJlZUdyaWQuZ2V0Um93cygpLmZpbHRlcihlID0+IGUuYXJpYUV4cGFuZGVkID09PSAndHJ1ZScpLm1hcChlID0+IGUuY2VsbHNbMF0uaW5uZXJUZXh0KTtcclxuICAgICAgICAgICAgdGhpcy50cmVlR3JpZC5kYXRhU291cmNlID0gdGhpcy5kYXRhU291cmNlLm1hcChlID0+IGUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvbkJpbmRpbmdEYXRhKGUpIHtcclxuICAgICAgICBpZiAodGhpcy5hZGRpbmdSb3cpIHtcclxuICAgICAgICAgICAgdGhpcy50cmVlR3JpZC5zZWxlY3RSb3codGhpcy5ub2RlSW5kZXggKyAxKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25TZWxlY3RpbmdSb3coZSkge1xyXG4gICAgICAgIGlmICh0aGlzLmFkZGluZ1Jvdykge1xyXG4gICAgICAgICAgICBjb25zdCByb3dzID0gdGhpcy50cmVlR3JpZC5nZXRSb3dzKCk7XHJcbiAgICAgICAgICAgIGlmICghIWUuZGF0YS5wYXJlbnRJdGVtKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwYXJlbnRSb3cgPSByb3dzLmZpbmQociA9PiByLmNlbGxzWzBdLmlubmVyVGV4dCA9PSBlLmRhdGEucGFyZW50SXRlbS5faWQpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy50cmVlR3JpZC5leHBhbmRSb3cocGFyZW50Um93KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByb3dzLmZvckVhY2gociA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5leHBhbmRlZE5vZGVJZHMuaW5jbHVkZXMoci5jZWxsc1swXS5pbm5lclRleHQpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50cmVlR3JpZC5leHBhbmRSb3cocik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB0aGlzLmV4cGFuZGVkTm9kZUlkcyA9IG51bGw7XHJcbiAgICAgICAgICAgIHRoaXMuYWRkaW5nUm93ID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBvbkNsaWNraW5nT25Ub29sYmFyKGUpIHtcclxuICAgICAgICBpZiAoZS5pdGVtLmlkID09PSAnbmV3VG9vbGJhckJ1dHRvbicpIHtcclxuICAgICAgICAgICAgdGhpcy5uZXdNZW51Lm9wZW4oKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiA8ZGl2PlxyXG4gICAgICAgICAgICA8VHJlZUdyaWRDb21wb25lbnQgcmVmPXtjID0+IHRoaXMudHJlZUdyaWQgPSBjfSBoZWlnaHQ9ezgwMH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhU291cmNlPXt0aGlzLmRhdGFTb3VyY2V9IHRyZWVDb2x1bW5JbmRleD17MX0gY2hpbGRNYXBwaW5nPXt0aGlzLmNoaWxkcmVuRmllbGR9IGVuYWJsZUNvbGxhcHNlQWxsPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsbG93UmVvcmRlcmluZz0ndHJ1ZScgYWxsb3dTb3J0aW5nPSd0cnVlJyBmaWx0ZXJTZXR0aW5ncz17eyB0eXBlOiAnTWVudScsIGhpZXJhcmNoeU1vZGU6ICdQYXJlbnQnIH19IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVkaXRTZXR0aW5ncz17dGhpcy5lZGl0T3B0aW9uc30gY29udGV4dE1lbnVJdGVtcz17dGhpcy5jb250ZXh0TWVudUl0ZW1zfSB0b29sYmFyPXt0aGlzLnRvb2xiYXJPcHRpb25zfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRleHRNZW51T3Blbj17ZSA9PiB0aGlzLm9uT3BlbmluZ0NvbnRleHRNZW51KGUpfSBjb250ZXh0TWVudUNsaWNrPXtlID0+IHRoaXMub25TZWxlY3RpbmdNZW51SXRlbShlKX0gdG9vbGJhckNsaWNrPXtlID0+IHRoaXMub25DbGlja2luZ09uVG9vbGJhcihlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhQm91bmQ9e2UgPT4gdGhpcy5vbkJpbmRpbmdEYXRhKGUpfSByb3dTZWxlY3RlZD17ZSA9PiB0aGlzLm9uU2VsZWN0aW5nUm93KGUpfSBjZWxsRWRpdD17ZSA9PiB0aGlzLm9uRWRpdGluZ0NlbGwoZSl9ID5cclxuICAgICAgICAgICAgICAgIDxDb2x1bW5zRGlyZWN0aXZlPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDb2x1bW5EaXJlY3RpdmUgZmllbGQ9J19pZCcgaXNQcmltYXJ5S2V5PXt0cnVlfSB2aXNpYmxlPXtmYWxzZX0vPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDb2x1bW5EaXJlY3RpdmUgZmllbGQ9e3RoaXMua2V5RmllbGR9IGhlYWRlclRleHQ9e3RoaXMua2V5SGVhZGVyfSB3aWR0aD0nMjAwJyB2YWxpZGF0aW9uUnVsZXM9e3RoaXMuZmllbGRSZXF1aXJlZH0vPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDb2x1bW5EaXJlY3RpdmUgZmllbGQ9e3RoaXMudmFsdWVGaWVsZH0gaGVhZGVyVGV4dD17dGhpcy52YWx1ZUhlYWRlcn0gd2lkdGg9JyonLz5cclxuICAgICAgICAgICAgICAgIDwvQ29sdW1uc0RpcmVjdGl2ZT5cclxuICAgICAgICAgICAgICAgIDxJbmplY3Qgc2VydmljZXM9e1tTb3J0LCBSZW9yZGVyLCBFZGl0LCBDb250ZXh0TWVudSwgUmVzaXplLCBUb29sYmFyXX0vPlxyXG4gICAgICAgICAgICA8L1RyZWVHcmlkQ29tcG9uZW50PlxyXG4gICAgICAgICAgICA8Q29udGV4dE1lbnVDb21wb25lbnQgcmVmPXtjID0+IHRoaXMubmV3TWVudSA9IGN9IHRhcmdldD0nI25ld1Rvb2xiYXJCdXR0b24nIGl0ZW1zPXt0aGlzLm5ld01lbnVJdGVtc30gc2VsZWN0PXtlID0+IHRoaXMub25TZWxlY3RpbmdNZW51SXRlbShlLCB0cnVlKX0gLz5cclxuICAgICAgICA8L2Rpdj4gXHJcbiAgICB9XHJcbn1cclxuXHJcbk5lc3RlZERhdGFDUlVELmRlZmF1bHRQcm9wcyA9IHt9O1xyXG5cclxuTmVzdGVkRGF0YUNSVUQucHJvcFR5cGVzID0ge1xyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgSUQgdXNlZCB0byBpZGVudGlmeSB0aGlzIGNvbXBvbmVudCBpbiBEYXNoIGNhbGxiYWNrcy5cclxuICAgICAqL1xyXG4gICAgaWQ6IFByb3BUeXBlcy5zdHJpbmdcclxufTsiXSwic291cmNlUm9vdCI6IiJ9