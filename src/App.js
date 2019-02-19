import React, {Component} from 'react';

import logo from './logo.svg';
import './App.css';
import Home from "./components/Home/Home";

class App extends Component {

    renderHome() {
        return <Home/>;
    }

    render() {
        return (
            <div className="App">
                {/*<header className="App-header">*/}

                {/*</header>*/}

                <div>
                    {this.renderHome()}
                </div>


            </div>
        );
    }
}

export default App;
