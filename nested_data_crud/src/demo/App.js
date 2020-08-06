/* eslint no-magic-numbers: 0 */
import React, {Component} from 'react';

import { NestedDataCRUD } from '../lib';

class App extends Component {

    render() {
        return (
            <NestedDataCRUD id='nested-data-crud' dataSource={[]} />
        )
    }
}

export default App;
