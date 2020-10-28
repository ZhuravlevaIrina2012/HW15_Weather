import React, {Component} from 'react';
import {cards} from "./utils/Constants";
import Card from "./Card";

class Game extends Component {
    constructor(props) {
        super(props);
        const newDeck = this.makeDeck();
        this.state = {
            compCard: newDeck.slice(0, 26),
            playerCard: newDeck.slice(26, 52),
            countComp: 0,
            countPlayer: 0,
            isEnd: false
        }
    }

    makeDeck = () => {
        const deck = [...cards];
        for (let i = 0; i < deck.length; i++) {
            let j = Math.floor(Math.random() * (i + 1));
            [deck[i], deck[j]] = [deck[j], deck[i]];
        }
        console.log(deck);
        return deck;
    }

    handleClickButton = () => {
        let newCompCard = this.state.compCard;
        let newPlayerCard = this.state.playerCard;
        let card1 = newCompCard.splice(0, 1)[0];
        console.log(card1.number);
        let card2 = newPlayerCard.splice(0, 1)[0];
        console.log(card2.number);
        let countComp = this.state.countComp;
        let countPlayer = this.state.countPlayer;
        if (card1.number > card2.number) {
            ++countComp;
        } else if (card1.number < card2.number) {
            ++countPlayer;
        }
        console.log(countComp, countPlayer);
        console.log('===============');
        if (newCompCard.length) {
            this.setState({
                compCard: newCompCard,
                playerCard: newPlayerCard,
                countComp: countComp,
                countPlayer: countPlayer,
                isEnd: false
            })
        } else {
            this.setState({
                countComp: countComp,
                countPlayer: countPlayer,
                isEnd: true
            })
        }
    }

    handleClickButtonAgain = (props) => {
        console.log(this.props.page);
        console.log(this.props.name);
        this.props.page('main', this.props.name);
    }

    renderGame = () => {
        return (
            <div className='container'>
                <h2>Computer</h2>
                <Card card={this.state.compCard[0]}/>
                <h2>{this.props.name}</h2>
                <Card card={this.state.playerCard[0]}/>
                <button onClick={this.handleClickButton} className='next'>Next</button>
                <h1>{this.state.countComp} : {this.state.countPlayer}</h1>
            </div>
        );
    }

    renderResult = () => {
        let res = '';
        let countComp = this.state.countComp;
        let countPlayer = this.state.countPlayer;
        if (countComp > countPlayer) {
            res = 'Lose';
        }else if (countComp < countPlayer){
            res = 'Win';
        }else {
            res = 'Drow';
        }
        return (
            <div className='container'>
                <h1 className='result'>{res}</h1>
                <h2>{countComp} : {countPlayer}</h2>
                <button onClick={this.handleClickButtonAgain} className='again'>Again?</button>
            </div>
        );
    }

    render() {
        if (!this.state.isEnd) {
            return this.renderGame();
        } else {
            return this.renderResult();
        }
    }
}

export default Game;