/* eslint no-magic-numbers: 0 */
import React, {Component} from 'react';

import { ExampleComponent, TicTacToe, NestedDataCRUD } from '../lib';
import { configData } from '../../../../data/data';

class App extends Component {

    constructor() {
        super();
        this.state = {
            value: ''
        };
        this.setProps = this.setProps.bind(this);
    }

    setProps(newProps) {
        this.setState(newProps);
    }

    render() {
        return (
            <NestedDataCRUD dataSource={configData} childrenField='subkeys' nodeLabel='Section' leafLabel='Item' height={800} dataChanged={() => console.log('dataChanged fired')}/>
        )
        // return (
        //     <div>
        //         <ExampleComponent
        //             setProps={this.setProps}
        //             {...this.state}
        //         />
        //         <TicTacToe />
        //     </div>
        // )
    }
}

export default App;
