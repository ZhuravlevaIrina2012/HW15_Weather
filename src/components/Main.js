import React, {Component} from 'react';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: ''
        }
    }

    handleChangeInput = (event) => {
        this.setState({name: event.currentTarget.value});
    }

    handleClickButton = (props) => {
        this.props.page('game', this.state.name);
    }

    render() {
        return (
            <div className='container'>
                <h1>Ready for WAR</h1>
                <input
                    value={this.state.name}
                    onChange={this.handleChangeInput}
                    className='name'
                    type='text'
                    placeholder='Enter your name'/>
                <button onClick={this.handleClickButton} className='start'>Start</button>
            </div>
        );
    }
}

export default Main;