import { ColumnDirective, ColumnsDirective, TreeGridComponent, Filter, Sort, Reorder, Edit, ContextMenu, Resize, Toolbar, Inject } from '@syncfusion/ej2-react-treegrid';
import * as React from 'react';
import { configData } from './data';
import './nested-data-crud.css';

export default class NestedDataCRUD extends React.Component {
    constructor() {
        super(...arguments);
        this.editOptions = {
            allowAdding: true,
            allowDeleting: true,
            allowEditing: true,
            mode: 'Cell'
        };
        this.contextMenuItems = ['AutoFit', 'AutoFitAll',
        'SortAscending', 'SortDescending', 'Edit', 'Delete', 'AddRow'];
        this.toolbarOptions = ['ExpandAll', 'CollapseAll', 'Search']
    }

    render() {
        return <TreeGridComponent 
        dataSource={configData} childMapping= 'subkeys' enableCollapseAll={true}
        allowReordering='true' allowFiltering='true' allowSorting='true' filterSettings={{ type: 'Menu', hierarchyMode: 'Parent' }} 
        editSettings={this.editOptions} contextMenuItems={this.contextMenuItems} toolbar={this.toolbarOptions}>
            <ColumnsDirective>
              <ColumnDirective field='key' headerText='Key' width='200'/>
              <ColumnDirective field='value' headerText='Value' width='*'/>
            </ColumnsDirective>
            <Inject services={[Filter, Sort, Reorder, Edit, ContextMenu, Resize, Toolbar]}/>
        </TreeGridComponent>
    }
}