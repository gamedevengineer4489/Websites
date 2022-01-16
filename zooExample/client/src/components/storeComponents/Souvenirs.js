import { Grid } from '@material-ui/core';
import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class Souvenirs extends React.Component {
    componentDidMount() {
        this.props.obtainSouvenirInventory();
    }

    renderInventory() {
        if(this.props.souvenirs && this.props.souvenirs.length > 0)
        {
            return this.props.souvenirs.map(souvenir => {
                return(
                    <Grid className='card' style = {{ marginTop: '70px', padding: '10px', maxWidth: '450px', position: 'static', marginLeft: '10px' }}>
                        <h5>{souvenir.productName}</h5>
                        <img src = {souvenir.imageURL} style = {{ maxWidth: '400px'}}/>
                        <p><b>Price: ${souvenir.productPrice}</b></p>
                        <button onClick = {() => this.props.addItemToCart(souvenir)} className = "waves-effect wave-light btn">Add To Cart</button>
                    </Grid>
                )
            })
        }
        
    }

    render() {
        return(
            <Grid style = {{ marginLeft: '10px'}} container>
                {this.renderInventory()}
               
            </Grid>
        )
    }
}

const mapStateToProps = (state) => {
    return { souvenirs: state.souvenirs }
}

export default connect(mapStateToProps, actions)(Souvenirs);