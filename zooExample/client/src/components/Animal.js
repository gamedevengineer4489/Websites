import React from 'react';
import { connect } from 'react-redux';

class Animal extends React.Component {

    constructor(props) {
        super(props);
        // component level state. redux makes state accessible to the whole program
        this.state = { animal: {} };
    }

    componentDidMount() {
        this.props.animals.map(animal => animal.animalName === this.props.title ? this.setState({ animal: animal}) : null)
    }
    

    render() {
        return(
            <div style = {{ marginTop: '70px'}}>
                <center>
                    <h2>
                        {this.props.title}
                    </h2>
                    <h3><b>Most common location:</b> {this.state.animal.countryOrigin}</h3>
                    <h3><b>Biography: </b>{this.state.animal.bio}</h3>
                    <video controls style={{ width: '60vw'}}>
                        <source src = {this.props.videoSRC} type = "video/mp4" />
                    </video>
                    <figcaption>{this.props.title === 'Zebra' ? "This video was obtained on Pexels.com and was made by Taryn Elliot" : "This video was obtained on Pexels.com and was made by Nick Pe"}</figcaption>
                </center>
                {console.log(this.state)}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { animals: state.animals }
}

export default connect(mapStateToProps, null)(Animal);