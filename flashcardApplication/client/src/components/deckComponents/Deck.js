import React from 'react';
import { connect } from 'react-redux';

import * as actions from '../../actions';

class Deck extends React.Component {
    
    state = {word: 0, definition: 0, isShowingDefinition: false, wordShown: null}
    

    componentDidMount() {
        let siteURL = window.location.pathname.split('/');
        // Fetched Words and Definitions
        this.props.fetchDeckWords(siteURL[siteURL.length - 1]);
        this.props.fetchDeckDefinitions(siteURL[siteURL.length - 1]);
    }

    
   
    showWordOrDefinition() {
        
            if(this.state.isShowingDefinition) {
                
                this.setState({ wordShown: this.props.words[this.state.word], isShowingDefinition: false});
            } else {
                
                this.setState({ wordShown: this.props.definitions[this.state.definition], isShowingDefinition: true});
            }
        
    }

    nextWord() {
        this.setState({ word: (this.state.word + 1) % this.props.words.length, definition: (this.state.definition + 1) % this.props.definitions.length, wordShown: this.props.words[this.state.word], isShowingDefinition: false });
    }

    render() {
        return(
            <div>
                    <center>
                        <div className='card' style={{ marginTop: '20vh', maxWidth: '800px' }}>
                                <div className='card-content' style={{ minHeight: '30vh'}}>
                                    <div className='content' style={{ wordWrap: 'break-word', fontSize: '50px'}}>
                                        <center>{this.state.isShowingDefinition ? this.props.definitions[this.state.definition] : this.props.words[this.state.word]}</center>
                                    </div>
                                </div>
                                <footer className="card-footer">
                                    <a className ="card-footer-item" onClick={() => this.showWordOrDefinition()}>{this.state.isShowingDefinition === true ? 'Show Word' : 'Show Definition'}</a>
                                    {this.props.words && this.props.words.length > 1 ? <a className ="card-footer-item" onClick={() => this.nextWord()}>Next card</a> : ''}
                                </footer>
                        </div>
                    </center>
                    

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {words: state.words, definitions: state.definitions, decks: state.decks };
}

export default connect(mapStateToProps, actions)(Deck);