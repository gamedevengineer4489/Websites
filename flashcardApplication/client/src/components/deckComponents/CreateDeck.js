import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { compose } from 'redux';
import reactDOM from 'react-dom';
import * as actions from '../../actions';


class CreateDeck extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: 0 };
    }

    componentDidMount() {
        this.setState({ value: 0 })
    }

    formSubmit = (formProps) => {
        if(formProps.deckname && formProps.firstword && formProps.firstworddefinition)
        {
            this.props.createDeck(formProps.deckname.split(' ').join('_'), formProps.firstword.split(' ').join('_'), formProps.firstworddefinition.split(' ').join('_'), this.props.auth.googleid, this.props.auth.emailaddress);
            window.location.pathname = '/decks';
        }
    }

    

    render() {
        const {handleSubmit} = this.props;

        

        return(
            <div style={{ padding: '5px'}}>
                <center>Create a deck or add a new card to an existing deck</center>
                <form onSubmit={handleSubmit(this.formSubmit)}  >
                    <fieldset style={{ padding: '5px'}} id = "createCardForm">
                        <label>Deck Name</label>
                        <Field 
                            name = "deckname"
                            type = "text"
                            component="input"
                            autoComplete="none"
                        />
                        <br />
                        <label>Word</label>
                        <Field 
                            name = "firstword"
                            type = "text"
                            component="input"
                            autoComplete="none"
                        />
                        <br />
                        <label>Word Definition</label>
                        <Field 
                            name = "firstworddefinition"
                            type = "text"
                            component="input"
                            autoComplete="none"
                        />
                        
                    </fieldset>
                    
                    <button className='button is-primary'>Create Deck</button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { decks: state.decks, auth: state.auth, form: state.form }
}

export default compose(
    reduxForm({ form: 'createDeck'}),
    connect(mapStateToProps,actions)
)(CreateDeck)