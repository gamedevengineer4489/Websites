import React from 'react';
import { connect } from 'react-redux';



import * as actions from '../../actions';

class Upgrades extends React.Component {
    
    componentDidUpdate() {
        console.log(this.props.user);
        if(this.props.user === "" || this.props.user === null || this.props.user === undefined)
        {
            this.props.obtainUserData(this.props.user.GoogleID);
        }
        
    }

    displayButtons(name, cost) {
        if(name === 'AW Ice Maker' && this.props.user.HasIceMachine === 0 && this.props.user.CashAmount >= cost)
        {
            return(
                <a href='/lemonade/upgrades'>
                    <button className='btn' onClick={() => this.props.changeUserData(this.props.user.GoogleID, "HasIceMachine",  1, "CashAmount", this.props.user.CashAmount - cost)}>
                        Buy Upgrade
                    </button>
                </a>
                    
                
            )
        } else if(name === 'AW Refrigerator' && this.props.user.HasRefrigerator === 0 && this.props.user.CashAmount >= cost) {
            return(
                <a href='/lemonade/upgrades'>
                    <button className='btn' onClick={() => this.props.changeUserData(this.props.user.GoogleID, "HasRefrigerator",  1,"CashAmount", this.props.user.CashAmount - cost)}>
                        Buy Upgrade
                    </button>
                </a>
                    
            )
        } else if(name === 'AW Refrigerator' && this.props.user.HasRefrigerator === 1) {
            
                return(
                    
                    <button className='btn' disabled>
                        Upgrade Already Owned
                    </button>
                )
                
            
        } else if(name === 'AW Ice Maker' && this.props.user.HasIceMachine === 1){
            return(
                <button className='btn' disabled>
                    Upgrade Already Owned
                </button>
            )
            
        
        } else {
            return(
                <button className='btn' disabled>
                    Not enough funds
                </button>
            )
        }
    }

    mappingUpgrades = () => {
        return this.props.upgrades.map((upgrade) => 
            <div className='col s7' key = {`${upgrade.Name}`}>
                <h3>
                    {upgrade.Name}
                </h3>
                <br/>
                <img src={`${upgrade.Image}`} style = {{ height: '20vh', width: 'auto'}} />
                <br />
                <h5>
                    {upgrade.Description}
                </h5>
                <br />
                <h5>
                    ${upgrade.Cost}
                </h5>
                <br />

                {this.displayButtons(upgrade.Name, upgrade.Cost)}
            </div>
        )
    }

    render() {
        return(
            <div className='row' style={{ marginTop: '70px'}}>
                {this.props.upgrades && this.props.user  && this.props.user != null && this.props.user != '' && this.props.user.GoogleID ? this.mappingUpgrades() : ''}
            </div>
        );
    };
}

const mapStateToProps = (state) => {
    return { upgrades: state.upgrades, user: state.user }
}

export default connect(mapStateToProps, actions)(Upgrades);