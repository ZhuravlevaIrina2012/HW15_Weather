import React, {Component} from 'react';

class Card extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='card'>
                <p>{this.props.card.number} {this.props.card.suit}</p>
            </div>
        );
    }
}

export default Card;