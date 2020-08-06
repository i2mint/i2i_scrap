import * as React from 'react';
import './App.css';
import NestedDataCRUD from './components/nested-data-crud/nested-data-crud';

export default class App extends React.Component {
    render() {
        return (
        // specifies the tag for render the TreeView component
        <NestedDataCRUD />);
    }
}