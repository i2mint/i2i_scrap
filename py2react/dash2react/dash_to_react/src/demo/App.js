/* eslint no-magic-numbers: 0 */
import React, {Component} from 'react';

import { DashToReact, TicTacToe } from '../lib';

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
            <div>
                <DashToReact
                    setProps={this.setProps}
                    {...this.state}
                />
                <TicTacToe />
            </div>
        )
    }
}

export default App;
