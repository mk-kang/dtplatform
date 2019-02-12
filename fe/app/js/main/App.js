import React, {Component} from 'react';

import Header from './../common/Header';
import Gnb from './../common/Gnb';

class App extends Component {

    render() {
        return (
            <div>
                <Gnb/>
                <Header/>
                {this.props.children}
            </div>
        );
    }

}

export default App;