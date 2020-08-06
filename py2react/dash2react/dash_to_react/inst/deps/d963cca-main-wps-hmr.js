webpackHotUpdatedash_to_react("main",{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/lib/components/nested-data-crud/nested-data-crud.css":
false,

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
/* harmony import */ var _nested_data_crud_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nested-data-crud.scss */ "./src/lib/components/nested-data-crud/nested-data-crud.scss");
/* harmony import */ var _nested_data_crud_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_nested_data_crud_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/index.js");
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

    _this.initTreeGrid(props);

    _this.initAddMenu();

    _this.fieldRequired = {
      required: true
    };
    _this.dataSource = _this.props.dataSource.map(function (e) {
      return _objectSpread({
        _id: Object(uuid__WEBPACK_IMPORTED_MODULE_5__["v4"])()
      }, e);
    });
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
      this.contextMenuItems = ['AutoFit', 'AutoFitAll', 'SortAscending', 'SortDescending', // 'Edit', 
      'Delete', // 'AddRow',
      {
        id: 'new',
        text: 'New',
        items: [{
          id: 'leaf',
          text: 'Leaf' // items: [
          //     {
          //         id: 'Above', 
          //         text: 'Above',
          //     }
          // ]

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
      this.keyHeader = props.keyHeader || 'Key';
      this.valueField = props.valueField || 'value';
      this.valueHeader = props.valueHeader || 'Value';
      this.childrenField = props.childrenField || 'children';
    }
  }, {
    key: "initAddMenu",
    value: function initAddMenu() {
      this.addMenuItems = [{
        id: 'addNewItem',
        text: 'New Item'
      }, {
        id: 'addNewSection',
        text: 'New Section'
      }];
    }
  }, {
    key: "bindTreeGridRef",
    value: function bindTreeGridRef(cmp) {
      this.treeGrid = cmp;
      console.log(this.treeGrid);
    }
  }, {
    key: "onBeginningAction",
    value: function onBeginningAction(e) {
      if (e.requestType === 'add') e.data._id = Object(uuid__WEBPACK_IMPORTED_MODULE_5__["v4"])(); // e.data.subkeys = [
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
    value: function onClickingOnToolbar(e) {
      if (e.item.id === 'add') {
        this.addMenu.open();
      }
    }
  }, {
    key: "onSelectingAddOption",
    value: function onSelectingAddOption(e) {
      var _this2 = this;

      var newRow = {
        _id: Object(uuid__WEBPACK_IMPORTED_MODULE_5__["v4"])()
      };

      if (e.item.id === 'addNewSection') {
        var child = {
          _id: Object(uuid__WEBPACK_IMPORTED_MODULE_5__["v4"])()
        };
        child[this.keyField] = "New ".concat(this.keyHeader);
        child[this.valueField] = "New ".concat(this.valueHeader);
        newRow[this.childrenField] = [child];
      }

      this.treeGrid.addRecord(newRow);
      setTimeout(function () {
        console.log('newRow._id', newRow._id);
        var i = 0;

        while (true) {
          var row = _this2.treeGrid.getRowByIndex(i);

          console.log(row.cells[0].innerText);

          if (row.cells[0].innerText == newRow._id) {
            break;
          }

          i++;
        }

        _this2.treeGrid.editCell(i, _this2.keyField);
      }, 1000);
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_syncfusion_ej2_react_treegrid__WEBPACK_IMPORTED_MODULE_0__["TreeGridComponent"], {
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
        toolbarClick: function toolbarClick(e) {
          return _this3.onClickingOnToolbar(e);
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
        services: [_syncfusion_ej2_react_treegrid__WEBPACK_IMPORTED_MODULE_0__["Filter"], _syncfusion_ej2_react_treegrid__WEBPACK_IMPORTED_MODULE_0__["Sort"], _syncfusion_ej2_react_treegrid__WEBPACK_IMPORTED_MODULE_0__["Reorder"], _syncfusion_ej2_react_treegrid__WEBPACK_IMPORTED_MODULE_0__["Edit"], _syncfusion_ej2_react_treegrid__WEBPACK_IMPORTED_MODULE_0__["ContextMenu"], _syncfusion_ej2_react_treegrid__WEBPACK_IMPORTED_MODULE_0__["Resize"], _syncfusion_ej2_react_treegrid__WEBPACK_IMPORTED_MODULE_0__["Toolbar"]]
      })));
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

/***/ }),

/***/ "./src/lib/components/nested-data-crud/nested-data-crud.css":
false,

/***/ "./src/lib/components/nested-data-crud/nested-data-crud.scss":
/*!*******************************************************************!*\
  !*** ./src/lib/components/nested-data-crud/nested-data-crud.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected character '@' (1:0)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n> @import url(\"https://cdn.syncfusion.com/ej2/material.css\");\n| @import url(\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css\");\n| ");

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kYXNoX3RvX3JlYWN0Ly4vc3JjL2xpYi9jb21wb25lbnRzL25lc3RlZC1kYXRhLWNydWQvTmVzdGVkRGF0YUNSVUQucmVhY3QuanMiXSwibmFtZXMiOlsiTmVzdGVkRGF0YUNSVUQiLCJwcm9wcyIsImluaXRUcmVlR3JpZCIsImluaXRBZGRNZW51IiwiZmllbGRSZXF1aXJlZCIsInJlcXVpcmVkIiwiZGF0YVNvdXJjZSIsIm1hcCIsImUiLCJfaWQiLCJ1dWlkIiwic2V0VHJlZUdyaWRPcHRpb25zIiwibWFwRGF0YUZpZWxkcyIsImVkaXRPcHRpb25zIiwiYWxsb3dBZGRpbmciLCJhbGxvd0RlbGV0aW5nIiwiYWxsb3dFZGl0aW5nIiwibW9kZSIsIm5ld1Jvd1Bvc2l0aW9uIiwiY29udGV4dE1lbnVJdGVtcyIsImlkIiwidGV4dCIsIml0ZW1zIiwidG9vbGJhck9wdGlvbnMiLCJrZXlGaWVsZCIsImtleUhlYWRlciIsInZhbHVlRmllbGQiLCJ2YWx1ZUhlYWRlciIsImNoaWxkcmVuRmllbGQiLCJhZGRNZW51SXRlbXMiLCJjbXAiLCJ0cmVlR3JpZCIsImNvbnNvbGUiLCJsb2ciLCJyZXF1ZXN0VHlwZSIsImRhdGEiLCJjb2x1bW5OYW1lIiwicm93RGF0YSIsImNhbmNlbCIsIml0ZW0iLCJhZGRNZW51Iiwib3BlbiIsIm5ld1JvdyIsImNoaWxkIiwiYWRkUmVjb3JkIiwic2V0VGltZW91dCIsImkiLCJyb3ciLCJnZXRSb3dCeUluZGV4IiwiY2VsbHMiLCJpbm5lclRleHQiLCJlZGl0Q2VsbCIsImMiLCJ0eXBlIiwiaGllcmFyY2h5TW9kZSIsIm9uQmVnaW5uaW5nQWN0aW9uIiwib25FZGl0aW5nQ2VsbCIsIm9uQ2xpY2tpbmdPblRvb2xiYXIiLCJGaWx0ZXIiLCJTb3J0IiwiUmVvcmRlciIsIkVkaXQiLCJDb250ZXh0TWVudSIsIlJlc2l6ZSIsIlRvb2xiYXIiLCJSZWFjdCIsImRlZmF1bHRQcm9wcyIsInByb3BUeXBlcyIsIlByb3BUeXBl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LG9EQUFDLDhFQUFEO0FBQWlCLGFBQUssRUFBQyxLQUF2QjtBQUE2QixvQkFBWSxFQUFFLElBQTNDO0FBQWlELGVBQU8sRUFBRTtBQUExRCxRQURKLGVBRUksb0RBQUMsOEVBQUQ7QUFBaUIsYUFBSyxFQUFFLEtBQUtnQixRQUE3QjtBQUF1QyxrQkFBVSxFQUFFLEtBQUtDLFNBQXhEO0FBQW1FLGFBQUssRUFBQyxLQUF6RTtBQUErRSx1QkFBZSxFQUFFLEtBQUtyQjtBQUFyRyxRQUZKLGVBR0ksb0RBQUMsOEVBQUQ7QUFBaUIsYUFBSyxFQUFFLEtBQUtzQixVQUE3QjtBQUF5QyxrQkFBVSxFQUFFLEtBQUtDLFdBQTFEO0FBQXVFLGFBQUssRUFBQztBQUE3RSxRQUhKLENBTEosZUFVSSxvREFBQyxxRUFBRDtBQUFRLGdCQUFRLEVBQUUsQ0FBQytCLHFFQUFELEVBQVNDLG1FQUFULEVBQWVDLHNFQUFmLEVBQXdCQyxtRUFBeEIsRUFBOEJDLDBFQUE5QixFQUEyQ0MscUVBQTNDLEVBQW1EQyxzRUFBbkQ7QUFBbEIsUUFWSixDQURHLENBQVA7QUFlSDs7OztFQWhKdUNDLCtDOzs7QUFtSjVDakUsY0FBYyxDQUFDa0UsWUFBZixHQUE4QixFQUE5QjtBQUVBbEUsY0FBYyxDQUFDbUUsU0FBZixHQUEyQjtBQUN2Qjs7O0FBR0EvQyxJQUFFLEVBQUVnRCxpREFBUyxDQUFDQztBQUpTLENBQTNCLEMiLCJmaWxlIjoiZDk2M2NjYS1tYWluLXdwcy1obXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUcmVlR3JpZENvbXBvbmVudCwgQ29sdW1uc0RpcmVjdGl2ZSwgQ29sdW1uRGlyZWN0aXZlLCBGaWx0ZXIsIFNvcnQsIFJlb3JkZXIsIEVkaXQsIENvbnRleHRNZW51LCBSZXNpemUsIFRvb2xiYXIsIEluamVjdCB9IGZyb20gJ0BzeW5jZnVzaW9uL2VqMi1yZWFjdC10cmVlZ3JpZCc7XHJcbmltcG9ydCB7IENvbnRleHRNZW51Q29tcG9uZW50IH0gZnJvbSAnQHN5bmNmdXNpb24vZWoyLXJlYWN0LW5hdmlnYXRpb25zJztcclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgJy4vbmVzdGVkLWRhdGEtY3J1ZC5zY3NzJztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IHsgdjQgYXMgdXVpZCB9IGZyb20gJ3V1aWQnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmVzdGVkRGF0YUNSVUQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5pbml0VHJlZUdyaWQocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuaW5pdEFkZE1lbnUoKTtcclxuICAgICAgICB0aGlzLmZpZWxkUmVxdWlyZWQgPSB7IHJlcXVpcmVkOiB0cnVlIH07XHJcbiAgICAgICAgdGhpcy5kYXRhU291cmNlID0gdGhpcy5wcm9wcy5kYXRhU291cmNlLm1hcChlID0+IHtyZXR1cm4ge19pZDogdXVpZCgpLCAuLi5lfX0pXHJcbiAgICB9XHJcblxyXG4gICAgaW5pdFRyZWVHcmlkKHByb3BzKSB7XHJcbiAgICAgICAgdGhpcy5zZXRUcmVlR3JpZE9wdGlvbnMoKTtcclxuICAgICAgICB0aGlzLm1hcERhdGFGaWVsZHMocHJvcHMpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFRyZWVHcmlkT3B0aW9ucygpIHtcclxuICAgICAgICB0aGlzLmVkaXRPcHRpb25zID0ge1xyXG4gICAgICAgICAgICBhbGxvd0FkZGluZzogdHJ1ZSxcclxuICAgICAgICAgICAgYWxsb3dEZWxldGluZzogdHJ1ZSxcclxuICAgICAgICAgICAgYWxsb3dFZGl0aW5nOiB0cnVlLFxyXG4gICAgICAgICAgICBtb2RlOiAnQ2VsbCcsXHJcbiAgICAgICAgICAgIG5ld1Jvd1Bvc2l0aW9uOiAnQmVsb3cnLFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5jb250ZXh0TWVudUl0ZW1zID0gW1xyXG4gICAgICAgICAgICAnQXV0b0ZpdCcsXHJcbiAgICAgICAgICAgICdBdXRvRml0QWxsJyxcclxuICAgICAgICAgICAgJ1NvcnRBc2NlbmRpbmcnLFxyXG4gICAgICAgICAgICAnU29ydERlc2NlbmRpbmcnLFxyXG4gICAgICAgICAgICAvLyAnRWRpdCcsIFxyXG4gICAgICAgICAgICAnRGVsZXRlJyxcclxuICAgICAgICAgICAgLy8gJ0FkZFJvdycsXHJcbiAgICAgICAgICAgIHsgXHJcbiAgICAgICAgICAgICAgICBpZDogJ25ldycsIFxyXG4gICAgICAgICAgICAgICAgdGV4dDogJ05ldycsXHJcbiAgICAgICAgICAgICAgICBpdGVtczogW1xyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6ICdsZWFmJywgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6ICdMZWFmJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gaXRlbXM6IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICBpZDogJ0Fib3ZlJywgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgdGV4dDogJ0Fib3ZlJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gXVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICBdO1xyXG4gICAgICAgIHRoaXMudG9vbGJhck9wdGlvbnMgPSBbXHJcbiAgICAgICAgICAgIC8vIHtpZDonX2dyaWRjb250cm9sX2FkZCcgLHRleHQ6ICdBZGQgTGVhZicsIHByZWZpeEljb246J2UtYWRkJ30sXHJcbiAgICAgICAgICAgIC8vIHtpZDonYWRkJyAsdGV4dDogJ0FkZC4uLicsIHByZWZpeEljb246J2UtYWRkJ30sXHJcbiAgICAgICAgICAgIC8vICdEZWxldGUnLFxyXG4gICAgICAgICAgICAvLyAnVXBkYXRlJyxcclxuICAgICAgICAgICAgLy8gJ0NhbmNlbCcsXHJcbiAgICAgICAgICAgIC8vIHt0eXBlOiAnU2VwYXJhdG9yJ30sXHJcbiAgICAgICAgICAgICdTZWFyY2gnLFxyXG4gICAgICAgICAgICAnRXhwYW5kQWxsJyxcclxuICAgICAgICAgICAgJ0NvbGxhcHNlQWxsJyxcclxuICAgICAgICBdO1xyXG4gICAgfVxyXG5cclxuICAgIG1hcERhdGFGaWVsZHMocHJvcHMpIHtcclxuICAgICAgICB0aGlzLmtleUZpZWxkID0gcHJvcHMua2V5RmllbGQgfHwgJ2tleSc7XHJcbiAgICAgICAgdGhpcy5rZXlIZWFkZXIgPSBwcm9wcy5rZXlIZWFkZXIgfHwgJ0tleSc7XHJcbiAgICAgICAgdGhpcy52YWx1ZUZpZWxkID0gcHJvcHMudmFsdWVGaWVsZCB8fCAndmFsdWUnO1xyXG4gICAgICAgIHRoaXMudmFsdWVIZWFkZXIgPSBwcm9wcy52YWx1ZUhlYWRlciB8fCAnVmFsdWUnO1xyXG4gICAgICAgIHRoaXMuY2hpbGRyZW5GaWVsZCA9IHByb3BzLmNoaWxkcmVuRmllbGQgfHwgJ2NoaWxkcmVuJztcclxuICAgIH1cclxuXHJcbiAgICBpbml0QWRkTWVudSgpIHtcclxuICAgICAgICB0aGlzLmFkZE1lbnVJdGVtcyA9IFtcclxuICAgICAgICAgICAgeyBpZDogJ2FkZE5ld0l0ZW0nLCB0ZXh0OiAnTmV3IEl0ZW0nIH0sXHJcbiAgICAgICAgICAgIHsgaWQ6ICdhZGROZXdTZWN0aW9uJywgdGV4dDogJ05ldyBTZWN0aW9uJyB9LFxyXG4gICAgICAgIF07XHJcbiAgICB9XHJcblxyXG4gICAgYmluZFRyZWVHcmlkUmVmKGNtcCkge1xyXG4gICAgICAgIHRoaXMudHJlZUdyaWQgPSBjbXA7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy50cmVlR3JpZCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25CZWdpbm5pbmdBY3Rpb24oZSkge1xyXG4gICAgICAgIGlmIChlLnJlcXVlc3RUeXBlID09PSAnYWRkJylcclxuICAgICAgICAgICAgZS5kYXRhLl9pZCA9IHV1aWQoKTtcclxuICAgICAgICAgICAgLy8gZS5kYXRhLnN1YmtleXMgPSBbXHJcbiAgICAgICAgICAgIC8vICAgICB7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgX2lkOiB1dWlkKCksXHJcbiAgICAgICAgICAgIC8vICAgICAgICAga2V5OiAnbmV3X2tleScsXHJcbiAgICAgICAgICAgIC8vICAgICAgICAgdmFsdWU6ICduZXdfdmFsdWUnXHJcbiAgICAgICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgICAgIC8vIF1cclxuICAgIH1cclxuXHJcbiAgICBvbkVkaXRpbmdDZWxsKGUpIHtcclxuICAgICAgICBpZiAoZS5jb2x1bW5OYW1lID09PSB0aGlzLnZhbHVlRmllbGQgJiYgISFlLnJvd0RhdGFbdGhpcy5jaGlsZHJlbkZpZWxkXSkge1xyXG4gICAgICAgICAgICBlLmNhbmNlbCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBvbkNsaWNraW5nT25Ub29sYmFyKGUpIHtcclxuICAgICAgICBpZiAoZS5pdGVtLmlkID09PSAnYWRkJykge1xyXG4gICAgICAgICAgICB0aGlzLmFkZE1lbnUub3BlbigpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvblNlbGVjdGluZ0FkZE9wdGlvbihlKSB7XHJcbiAgICAgICAgY29uc3QgbmV3Um93ID0ge19pZDogdXVpZCgpfTtcclxuICAgICAgICBpZiAoZS5pdGVtLmlkID09PSAnYWRkTmV3U2VjdGlvbicpIHtcclxuICAgICAgICAgICAgY29uc3QgY2hpbGQgPSB7X2lkOiB1dWlkKCl9O1xyXG4gICAgICAgICAgICBjaGlsZFt0aGlzLmtleUZpZWxkXSA9IGBOZXcgJHt0aGlzLmtleUhlYWRlcn1gO1xyXG4gICAgICAgICAgICBjaGlsZFt0aGlzLnZhbHVlRmllbGRdID0gYE5ldyAke3RoaXMudmFsdWVIZWFkZXJ9YDtcclxuICAgICAgICAgICAgbmV3Um93W3RoaXMuY2hpbGRyZW5GaWVsZF0gPSBbY2hpbGRdO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnRyZWVHcmlkLmFkZFJlY29yZChuZXdSb3cpO1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnbmV3Um93Ll9pZCcsIG5ld1Jvdy5faWQpO1xyXG4gICAgICAgICAgICBsZXQgaSA9IDA7XHJcbiAgICAgICAgICAgIHdoaWxlICh0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByb3cgPSB0aGlzLnRyZWVHcmlkLmdldFJvd0J5SW5kZXgoaSk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyb3cuY2VsbHNbMF0uaW5uZXJUZXh0KVxyXG4gICAgICAgICAgICAgICAgaWYgKHJvdy5jZWxsc1swXS5pbm5lclRleHQgPT0gbmV3Um93Ll9pZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaSsrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMudHJlZUdyaWQuZWRpdENlbGwoaSwgdGhpcy5rZXlGaWVsZClcclxuICAgICAgICB9LCAxMDAwKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIDxkaXY+XHJcbiAgICAgICAgICAgIDxUcmVlR3JpZENvbXBvbmVudCByZWY9e2MgPT4gdGhpcy50cmVlR3JpZCA9IGN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVNvdXJjZT17dGhpcy5kYXRhU291cmNlfSB0cmVlQ29sdW1uSW5kZXg9ezF9IGNoaWxkTWFwcGluZz17dGhpcy5jaGlsZHJlbkZpZWxkfSBlbmFibGVDb2xsYXBzZUFsbD17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGxvd1Jlb3JkZXJpbmc9J3RydWUnIGFsbG93RmlsdGVyaW5nPSd0cnVlJyBhbGxvd1NvcnRpbmc9J3RydWUnIGZpbHRlclNldHRpbmdzPXt7IHR5cGU6ICdNZW51JywgaGllcmFyY2h5TW9kZTogJ1BhcmVudCcgfX0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWRpdFNldHRpbmdzPXt0aGlzLmVkaXRPcHRpb25zfSBjb250ZXh0TWVudUl0ZW1zPXt0aGlzLmNvbnRleHRNZW51SXRlbXN9IHRvb2xiYXI9e3RoaXMudG9vbGJhck9wdGlvbnN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uQmVnaW49e2UgPT4gdGhpcy5vbkJlZ2lubmluZ0FjdGlvbihlKX0gY2VsbEVkaXQ9e2UgPT4gdGhpcy5vbkVkaXRpbmdDZWxsKGUpfSB0b29sYmFyQ2xpY2s9e2UgPT4gdGhpcy5vbkNsaWNraW5nT25Ub29sYmFyKGUpfT5cclxuICAgICAgICAgICAgICAgIDxDb2x1bW5zRGlyZWN0aXZlPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDb2x1bW5EaXJlY3RpdmUgZmllbGQ9J19pZCcgaXNQcmltYXJ5S2V5PXt0cnVlfSB2aXNpYmxlPXtmYWxzZX0vPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDb2x1bW5EaXJlY3RpdmUgZmllbGQ9e3RoaXMua2V5RmllbGR9IGhlYWRlclRleHQ9e3RoaXMua2V5SGVhZGVyfSB3aWR0aD0nMjAwJyB2YWxpZGF0aW9uUnVsZXM9e3RoaXMuZmllbGRSZXF1aXJlZH0vPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDb2x1bW5EaXJlY3RpdmUgZmllbGQ9e3RoaXMudmFsdWVGaWVsZH0gaGVhZGVyVGV4dD17dGhpcy52YWx1ZUhlYWRlcn0gd2lkdGg9JyonLz5cclxuICAgICAgICAgICAgICAgIDwvQ29sdW1uc0RpcmVjdGl2ZT5cclxuICAgICAgICAgICAgICAgIDxJbmplY3Qgc2VydmljZXM9e1tGaWx0ZXIsIFNvcnQsIFJlb3JkZXIsIEVkaXQsIENvbnRleHRNZW51LCBSZXNpemUsIFRvb2xiYXJdfS8+XHJcbiAgICAgICAgICAgIDwvVHJlZUdyaWRDb21wb25lbnQ+XHJcbiAgICAgICAgICAgIHsvKiA8Q29udGV4dE1lbnVDb21wb25lbnQgcmVmPXtjID0+IHRoaXMuYWRkTWVudSA9IGN9IHRhcmdldD0nI2FkZCcgaXRlbXM9e3RoaXMuYWRkTWVudUl0ZW1zfSBzZWxlY3Q9e2UgPT4gdGhpcy5vblNlbGVjdGluZ0FkZE9wdGlvbihlKX0gLz4gKi99XHJcbiAgICAgICAgPC9kaXY+IFxyXG4gICAgfVxyXG59XHJcblxyXG5OZXN0ZWREYXRhQ1JVRC5kZWZhdWx0UHJvcHMgPSB7fTtcclxuXHJcbk5lc3RlZERhdGFDUlVELnByb3BUeXBlcyA9IHtcclxuICAgIC8qKlxyXG4gICAgICogVGhlIElEIHVzZWQgdG8gaWRlbnRpZnkgdGhpcyBjb21wb25lbnQgaW4gRGFzaCBjYWxsYmFja3MuXHJcbiAgICAgKi9cclxuICAgIGlkOiBQcm9wVHlwZXMuc3RyaW5nXHJcbn07Il0sInNvdXJjZVJvb3QiOiIifQ==