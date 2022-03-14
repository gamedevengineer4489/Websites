import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';

import * as actions from '../actions';

class Decks extends React.Component {
    componentDidMount() {
        this.props.fetchDecks();
        
    }

    renderDecks = () => {
       return this.props.decks.map((result) => {     
            console.log(result);
            
            return(
                [
                    <li key={Math.random()} style = {{ padding: '5px'}}>
                        <a href={`/decks/${result}`} style = {{ paddingRight: '3px'}}>{result.replace('_', ' ')}</a>
                        <a className='button is-danger' href={`/decks`} onClick = {() => this.props.deleteDeck(result)}>Delete Deck</a>
                    </li>
                ]
            )
       })
    }
   
    render() {
        return(
            <div style = {{ padding: '5px'}}>
                <center>
                    <h1 className='title is-1'>Your Decks</h1>
                    <ul>
                        {this.props.decks && this.props.decks.length ? this.renderDecks() : 'You currently have no decks.'}
                    </ul>
                    <a className='button is-success' href='/createDeck' style={{ color: 'black'}}>Create A New Deck Or Add A New Word To Existing Deck</a>
                    <br />
                    <b>Note:</b> Do not add decks whose names contain the _ underscore symbol. Also don't add words that contain that symbol. These will be interpreted as spaces and the underscore character will be removed.
                </center>
                
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { decks: state.decks };
}

export default connect(mapStateToProps, actions)(Decks);