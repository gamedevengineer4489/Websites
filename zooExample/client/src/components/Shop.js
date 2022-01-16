import React from 'react';
import '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import {
    Grid,
    Card,
    CardContent,
    Typography,
    CardHeader
} from '@material-ui/core/'
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import ClothesImage from '../images/clothesImage.png';
import FilmImage from '../images/filmImage.jpg';
import GameImage from '../images/gameImage.png';
import SouvenirImage from '../images/souvenirImage.png';

class Shop extends React.Component {
    render() {
        return(
            <div style={{ marginTop: '70px'}}>
                <Grid style={{ marginTop: '70px'}} container>
                    
                        <Grid item className = "card" style={{ marginLeft: '20px', padding: '10px', position: 'static', width: '300px', minHeight: '300px' }} key = {Math.random() * 10}>
                            <a href = "/shop/clothes">
                                <h5 >Clothes</h5>
                            </a>
                            <img src = {ClothesImage}  style={{ height: '200px', width: '250px' }} />
                            <a href="https://www.vecteezy.com/free-vector/clothes">Clothes Vectors by Vecteezy</a>
                        </Grid>
                   
                    
                    
                        <Grid item className = "card" style={{ marginLeft: '20px', padding: '10px', position: 'static', width: '300px', minHeight: '300px' }} key = {Math.random() * 10}>
                            <a href = "/shop/films">
                                <h5 >Documentary Films and Movies</h5>
                            </a>
                            <img  src = {FilmImage} style={{ height: '200px', width: '250px' }} />
                        </Grid>
                    
                    
                    
                        <Grid item className = "card" style={{ marginLeft: '20px', padding: '10px', position: 'static', width: '300px', minHeight: '300px' }} key = {Math.random() * 10}>
                            <a href = "/shop/games">
                                <h5 >Games</h5>
                            </a>
                            <img src = {GameImage} style={{ height: '200px', width: '250px' }} />
                        </Grid>
                    
                    
                        <Grid item className = "card" style={{ marginLeft: '20px', padding: '10px', position: 'static', width: '300px', minHeight: '300px' }} key = {Math.random() * 10}>
                            <a href = "/shop/souvenirs">
                                <h5 >Souvenirs</h5>
                            </a>
                            <img src = {SouvenirImage} style={{ height: '200px', width: '250px' }} />
                            
                        </Grid>
                    
                    
                </Grid>
            </div>
        )
    }
}

export default Shop;