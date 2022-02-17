import React from 'react';
import { connect } from 'react-redux';

import * as actions from '../../actions';

class Store extends React.Component {
    
    state = { amountOfLemons: 0, amountOfSugar: 0, amountOfIce: 0, amountOfWater: 0, costPerLemon:  2, costPerBox: 0.08, costPerAmountOfIce: 0.50, costPerAmountOfWater: 0.03, amountOfCups: 0, costPerPackOfCups: 1}
    
    componentDidUpdate() {
        console.log(this.props.user);
        if(this.props.user === "" || this.props.user === null || this.props.user === undefined)
        {
            this.props.obtainUserData(this.props.user.GoogleID);
        }
        
    }

    render() {
        return(
            <div style={{ marginTop: '70px'}}>
                <center><h1>Lemonade Store</h1></center>
                <center><h4>Cash Available: ${this.props.user && this.props.user.CashAmount ? this.props.user.CashAmount : '0.00'}</h4></center>
                <div className='row' >
                    
                    <center>
                        <div className='col s6' style={{ paddingBottom: '10px'}}>
                            <img src = {'https://cdn.pixabay.com/photo/2017/02/05/12/31/lemons-2039830_960_720.jpg'} style = {{ height: '15vh', width: 'auto'}} alt = "Lemons"/>
                            <br />
                            <span><strong>Lemons</strong></span>
                            <br />
                            <button className='btn' style={{ display: this.state.amountOfLemons > 0 && this.props.user !== null && this.props.user !== '' ? 'inline' : 'none' }} onClick = {() => this.setState({ amountOfLemons: this.state.amountOfLemons - 1})}><i className='material-icons'>arrow_downward</i></button><span style={{ paddingLeft: '5px', paddingRight: '5px', paddingLeft: '5px'}}>{this.state.amountOfLemons}</span><button className='btn' style={{ display: 'inline' }} onClick = {() => this.setState({ amountOfLemons: this.state.amountOfLemons + 1})}><i className='material-icons'>arrow_upward</i></button>
                            <br />
                            <br />
                            <button className='btn' style={{ display: this.state.amountOfLemons > 0 && this.props.user !== null && this.props.user !== '' ? 'inline' : 'none' }} onClick = {() => this.props.changeUserData(this.props.user.GoogleID, "AmountOfLemons", parseInt(this.props.user.AmountOfLemons) + this.state.amountOfLemons, "CashAmount" , parseInt(this.props.user.CashAmount) - (this.state.costPerLemon * this.state.amountOfLemons))}>Buy Lemons</button>
                        </div>
                        <div className='col s6' style={{ paddingBottom: '10px'}}>
                            <img src = {'https://cdn.pixabay.com/photo/2020/04/13/22/55/sugar-5040276_960_720.jpg'} style = {{ height: '15vh', width: 'auto'}} alt = "Sugar"/>
                            <br />
                            <span><strong>Sugar</strong></span>
                            <br />
                            <button className='btn' style={{ display: this.state.amountOfSugar > 0 && this.props.user !== null && this.props.user !== '' ? 'inline' : 'none' }} onClick = {() => this.setState({ amountOfSugar: this.state.amountOfSugar - 1})}><i className='material-icons'>arrow_downward</i></button><span style={{ paddingLeft: '5px', paddingRight: '5px', paddingLeft: '5px'}}>{this.state.amountOfSugar}</span><button className='btn' style={{ display: 'inline' }} onClick = {() => this.setState({ amountOfSugar: this.state.amountOfSugar + 1})}><i className='material-icons'>arrow_upward</i></button>
                            <br />
                            <br />
                            <button className='btn' style={{ display: this.state.amountOfSugar > 0 && this.props.user !== null && this.props.user !== '' ? 'inline' : 'none' }} onClick = {() => this.props.changeUserData(this.props.user.GoogleID, "AmountOfSugar", parseInt(this.props.user.AmountOfSugar) + this.state.amountOfSugar, "CashAmount", parseInt(this.props.user.CashAmount) - (this.state.costPerBox * this.state.amountOfSugar))}>Buy Sugar</button>
                        </div>
                        <div className='col s6' style={{ paddingBottom: '10px'}}>
                            <img src = {'https://cdn.pixabay.com/photo/2021/04/28/23/58/ice-6215207_960_720.jpg'} style = {{ height: '15vh', width: 'auto'}} alt = "Ice" />
                            <br />
                            <span><strong>Ice</strong></span>
                            <br />
                            <button className='btn' style={{ display: this.state.amountOfIce > 0 && this.props.user !== null && this.props.user !== '' ? 'inline' : 'none' }} onClick = {() => this.setState({ amountOfIce: this.state.amountOfIce - 1})}><i className='material-icons'>arrow_downward</i></button><span style={{ paddingLeft: '5px', paddingRight: '5px', paddingLeft: '5px'}}>{this.state.amountOfIce}</span><button className='btn' style={{ display:  'inline' }} onClick = {() => this.setState({ amountOfIce: this.state.amountOfIce + 1})}><i className='material-icons'>arrow_upward</i></button>
                            <br />
                            <br />
                            <button className='btn' style={{ display: this.state.amountOfIce > 0 && this.props.user !== null && this.props.user !== '' ? 'inline' : 'none' }} onClick = {() => this.props.changeUserData(this.props.user.GoogleID, "AmountOfIce", parseInt(this.props.user.AmountOfIce) + this.state.amountOfIce, "CashAmount", parseInt(this.props.user.CashAmount) - (this.state.costPerAmountOfIce * this.state.amountOfIce))}>Buy Ice</button>
                        </div>
                        <div className='col s6' style={{ paddingBottom: '10px'}}>
                            <img src = {'https://cdn.pixabay.com/photo/2021/08/26/17/34/yellow-cups-6576738_960_720.jpg'} style = {{ height: '15vh', width: 'auto'}} alt = "Cups" />
                            <br />
                            <span><strong>Cups</strong></span>
                            <br />
                            <button className='btn' style={{ display: this.state.amountOfCups > 0 ? 'inline' : 'none' }} onClick = {() => this.setState({ amountOfCups: this.state.amountOfCups - 1})}><i className='material-icons'>arrow_downward</i></button><span style={{ paddingLeft: '5px', paddingRight: '5px', paddingLeft: '5px'}}>{this.state.amountOfCups}</span><button className='btn' style={{ display:  'inline' }} onClick = {() => this.setState({ amountOfCups: this.state.amountOfCups + 1})}><i className='material-icons'>arrow_upward</i></button>
                            <br />
                            <br />
                            <button className='btn' style={{ display: this.state.amountOfCups > 0 ? 'inline' : 'none' }} onClick = {() => this.props.changeUserData(this.props.user.GoogleID, "AmountOfCups", parseInt(this.props.user.AmountOfCups) + this.state.amountOfCups, "CashAmount", parseInt(this.props.user.CashAmount) - (this.state.costPerPackOfCups * this.state.amountOfCups))}>Buy Cups</button>
                        </div>
                    </center>
                </div>
            </div>
            
        );
    };
}

const mapStateToProps = (state) => {
    return { user: state.user }
}

export default connect(mapStateToProps, actions)(Store);