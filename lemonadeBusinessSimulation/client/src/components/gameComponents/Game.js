import React from 'react';
import {connect} from 'react-redux';


import * as actions from '../../actions';

class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isPlaying: false }
    }

    componentDidMount() {
        

        this.setState({
            isPlaying: false
        });
    }

    componentDidUpdate() {
         if(this.props.user === null && this.props.auth && this.props.auth.GoogleID)
         {
             this.props.obtainUserData(this.props.auth.GoogleID);
         }

         if(this.props.user === '' && this.state.isPlaying === false && this.props.auth && this.props.auth.GoogleID)
         {
            this.props.obtainUserData(this.props.auth.GoogleID);
         }
    }



    calculateProfit() {
        var profit = ((this.props.user.RecipeAmountOfLemons * 2 * (1 / 12 ))  + (0.08 * this.props.user.RecipeAmountOfSugar) + (0.03 * this.props.user.RecipeAmountOfIce));
        return this.props.user.LemonadePrice.toFixed(2) - profit.toFixed(2);
    }

    doneForTheDay(sugarUsed, iceUsed, lemonsUsed, cupsUsed, profitMade) {
        this.setState({ isPlaying: false });
        if(this.props.user.HasIceMachine === true) {
            this.props.changeUserData(this.props.user.GoogleID, "AmountOfSugar", parseInt(this.props.user.AmountOfSugar) - sugarUsed, "AmountOfIce", parseInt(this.props.user.AmountOfIce) - iceUsed);
        } else {
            // If the user has not purchased an ice machine. 
            this.props.changeUserData(this.props.user.GoogleID, "AmountOfSugar", parseInt(this.props.user.AmountOfSugar) - sugarUsed, "AmountOfIce", 0);
        }
        
        if(this.props.user.HasRefrigerator === true) {
            this.props.changeUserData(this.props.user.GoogleID, "AmountOfLemons", parseInt(this.props.user.AmountOfLemons) - lemonsUsed, "AmountOfCups", parseInt(this.props.user.AmountOfCups) - cupsUsed);

        } else {
            this.props.changeUserData(this.props.user.GoogleID, "AmountOfLemons", 0, "AmountOfCups", parseInt(this.props.user.AmountOfCups) - cupsUsed);
        }
        this.props.changeUserData(this.props.user.GoogleID, "AmountOfLemons", parseInt(this.props.user.AmountOfLemons) - lemonsUsed, "AmountOfCups", parseInt(this.props.user.AmountOfCups) - cupsUsed);
        this.props.changeUserData(this.props.user.GoogleID, "CashAmount", parseInt(this.props.user.CashAmount) + profitMade);
    }
    
    renderContent = () => {
        if(this.state.isPlaying === false) {
            return(
                <div>
                    <div className='row'>
                        <>
                            <button className='btn' style={{ display: this.props.user.LemonadePrice && this.props.user.LemonadePrice > 0.50 ? 'inline' : 'none'}} onClick = {() => this.props.changeUserData(this.props.user.GoogleID, "LemonadePrice", this.props.user.LemonadePrice - 0.50)}><i className='material-icons'>arrow_downward</i></button>
                            <span style={{ padding: '5px'}}>${this.props.user.LemonadePrice.toFixed(2)}</span>
                            <button className='btn' style={{ display: this.props.user ? 'inline' : 'none'}} onClick = {() => this.props.changeUserData(this.props.user.GoogleID, "LemonadePrice", this.props.user.LemonadePrice + 0.50)}><i className='material-icons'>arrow_upward</i></button>
                        </>
                    </div>
                    <>
                        <strong>Profit Per Cup</strong>: ${this.props.user ? (this.props.user.LemonadePrice - this.calculateProfit()).toFixed(2) : '0.00'}
                        <br />
                        <button className='btn' onClick={() => this.setState({ isPlaying: true })}>Play</button>
                    </>
                </div>
                
            )
        } else if(this.state.isPlaying === true) {
            // Max of 20 customers. Weather will be choosen as a result. 
            var numberOfCustomers = Math.floor((Math.random() * 20) + 1); // Customers can range between 1 and 20.
            var numberOfPitchers = numberOfCustomers < 12 ? 1 : (numberOfCustomers / 12);
            
            // Find the amount of cups that can be made.
            var cupsSugar = Math.floor(this.props.user.AmountOfSugar / this.props.user.RecipeAmountOfSugar);
            var cupsIce = Math.floor(this.props.user.AmountOfIce / this.props.user.RecipeAmountOfIce);
            var cupsLemon = Math.floor(this.props.user.AmountOfLemons / this.props.user.RecipeAmountOfLemons);
            var cupsMin = Math.min(cupsIce, cupsLemon, cupsSugar, this.props.user.AmountOfCups, numberOfCustomers);
            // Amount of supplies used.
            var cupsUsed = cupsMin;
            var sugarUsed = cupsUsed * this.props.user.RecipeAmountOfSugar;
            var iceUsed = cupsUsed * this.props.user.RecipeAmountOfIce;
            var lemonsUsed = this.props.user.RecipeAmountOfLemons * numberOfPitchers;
            var profitMade = cupsUsed * this.calculateProfit();
            var profitMissed = ((numberOfCustomers - cupsUsed) * (this.calculateProfit()).toFixed(2)).toFixed(2);
            if(profitMissed <= 0)
            {
                profitMissed = 0;
            }
            // Subtract the supplies needed to make the cups that could be made and subtract the amount from the values in the database and save those values in the database. 
            // Also change the year, month and day values in the database also. 
            
            // Add or subtract(adding a negative) the profit made from CashAmount
            // Subtract cups from AmountOfCups
            // Subtract sugar from AmountOfSugar
            // Subtract ice from AmountOfIce
            // Subtract lemons from AmountOfLemons
            return(
                <>
                    <h3>Number Of Customers: {numberOfCustomers}</h3>
                    <h3>Number Of Cups Sold: {cupsUsed}</h3>
                    <h3>Profit Made: ${profitMade}</h3>
                    <h3>Profit Missed: ${profitMissed}</h3>
                    <h4><strong>{cupsUsed < numberOfCustomers ? "You ran out of supplies. Make sure you are well stocked." : ""}</strong></h4>
                    <button className='btn' onClick={() => this.doneForTheDay(sugarUsed, iceUsed, lemonsUsed, cupsUsed, profitMade)}>Next</button>
                </>
            )
        }
    }
    render() {
        return(
            <div style={{ marginTop: '70px', marginLeft: '10px'}}>
                <center>
                    <h2>Lemonade Game</h2>
                    <h4>Cash Available: ${this.props.user && this.props.user.CashAmount ? this.props.user.CashAmount : '0.00'}</h4>
                    {this.props.user ? this.renderContent() : ''}
                </center>
                
            </div>
        );
    };
}

const mapStateToProps = (state) => {
    return { user: state.user, auth: state.auth }
}

export default connect(mapStateToProps, actions)(Game);