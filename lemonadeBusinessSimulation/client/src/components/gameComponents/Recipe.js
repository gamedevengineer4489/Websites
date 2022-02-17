import React from 'react';
import { connect } from 'react-redux';

import * as actions from '../../actions';

class Recipe extends React.Component {
    
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
                <center><h1>Lemonade Recipe</h1></center>
                <div className='row' >
                    <center>
                        <div className='col s6' style={{ paddingBottom: '10px'}}>
                            <img src = {'https://cdn.pixabay.com/photo/2017/02/05/12/31/lemons-2039830_960_720.jpg'} style = {{ height: '15vh', width: 'auto'}} alt = "Lemons"/>
                            <br />
                            <span><strong>Lemons</strong></span>
                            <br />
                            <a href = "/lemonade/recipe"><button className='btn' style={{ display: this.props.user && this.props.user.RecipeAmountOfLemons > 0 ? 'inline' : 'none'}} onClick = {() => this.props.changeUserData(this.props.user.GoogleID, "RecipeAmountOfLemons",parseInt(this.props.user.RecipeAmountOfLemons) - 1, null, null)}><i className='material-icons'>arrow_downward</i></button></a><span style={{ paddingLeft: '5px', paddingRight: '5px', paddingLeft: '5px'}}>{this.props.user && this.props.user.RecipeAmountOfLemons ? this.props.user.RecipeAmountOfLemons : 0}</span><a href='/lemonade/recipe'><button className='btn' style={{ display: this.props.user && this.props.user.RecipeAmountOfLemons >= 0 && this.props.user.RecipeAmountOfLemons < 9  ? 'inline' : 'none'}} onClick = {() => this.props.changeUserData(this.props.user.GoogleID, "RecipeAmountOfLemons", parseInt(this.props.user.RecipeAmountOfLemons) + 1)}><i className='material-icons'>arrow_upward</i></button></a>
                        </div>
                        <div className='col s6' style={{ paddingBottom: '10px'}}>
                            <img src = {'https://cdn.pixabay.com/photo/2020/04/13/22/55/sugar-5040276_960_720.jpg'} style = {{ height: '15vh', width: 'auto'}} alt = "Sugar"/>
                            <br />
                            <span><strong>Sugar</strong></span>
                            <br />
                            <a href = "/lemonade/recipe"><button className='btn' style={{ display: this.props.user && this.props.user.RecipeAmountOfSugar > 0 ? 'inline' : 'none'}} onClick = {() => this.props.changeUserData(this.props.user.GoogleID, "RecipeAmountOfSugar",parseInt(this.props.user.RecipeAmountOfSugar) - 1, null, null)}><i className='material-icons'>arrow_downward</i></button></a><span style={{ paddingLeft: '5px', paddingRight: '5px', paddingLeft: '5px'}}>{this.props.user && this.props.user.RecipeAmountOfSugar ? this.props.user.RecipeAmountOfSugar : 0}</span><a href='/lemonade/recipe'> <button className='btn' style={{ display: this.props.user && this.props.user.RecipeAmountOfSugar >= 0 && this.props.user.RecipeAmountOfSugar < 9  ? 'inline' : 'none'}} onClick = {() => this.props.changeUserData(this.props.user.GoogleID, "RecipeAmountOfSugar", parseInt(this.props.user.RecipeAmountOfSugar) + 1)}><i className='material-icons'>arrow_upward</i></button></a>
                        </div>
                        <div className='col s6' style={{ paddingBottom: '10px'}}>
                            <img src = {'https://cdn.pixabay.com/photo/2021/04/28/23/58/ice-6215207_960_720.jpg'} style = {{ height: '15vh', width: 'auto'}} alt = "Ice" />
                            <br />
                            <span><strong>Ice</strong></span>
                            <br />
                            <a href = "/lemonade/recipe"><button className='btn' style={{ display: this.props.user && this.props.user.RecipeAmountOfIce > 0 ? 'inline' : 'none'}} onClick = {() => this.props.changeUserData(this.props.user.GoogleID, "RecipeAmountOfIce",parseInt(this.props.user.RecipeAmountOfIce) - 1, null, null)}><i className='material-icons'>arrow_downward</i></button></a><span style={{ paddingLeft: '5px', paddingRight: '5px', paddingLeft: '5px'}}>{this.props.user && this.props.user.RecipeAmountOfIce ? this.props.user.RecipeAmountOfIce : 0}</span><a href='/lemonade/recipe'> <button className='btn' style={{ display: this.props.user && this.props.user.RecipeAmountOfIce >= 0 && this.props.user.RecipeAmountOfIce < 9  ? 'inline' : 'none'}} onClick = {() => this.props.changeUserData(this.props.user.GoogleID, "RecipeAmountOfIce", parseInt(this.props.user.RecipeAmountOfIce) + 1)}><i className='material-icons'>arrow_upward</i></button></a>

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

export default connect(mapStateToProps, actions)(Recipe);