import React, {Component} from 'react';
import './App.css';
import Main from "./components/Main";
import Game from "./components/Game";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pageName: 'main',
            userName: '',
        }
    }

    changePage = (pageName, name) => {
        this.setState({pageName: pageName, userName: name});
    }

    render() {
        if (this.state.pageName === 'main') {
            return (
                <div className='App'>
                    <Main page={this.changePage}/>
                </div>
            );
        }
        if (this.state.pageName === 'game') {
            return (
                <div className='App'>
                    <Game name={this.state.userName} page={this.changePage}/>
                </div>
            );
        }
    }
}

export default App;