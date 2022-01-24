import React from 'react';

class Animal extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div style = {{ marginTop: '70px'}}>
                <center>
                    <h2>
                        {this.props.title}
                    </h2>
                    <video controls style={{ width: '60vw'}}>
                        <source src = {this.props.videoSRC} type = "video/mp4" />

                    </video>
                    <figcaption>{this.props.title === 'Zebra' ? "This video was obtained on Pexels.com and was made by Taryn Elliot" : "This video was obtained on Pexels.com and was made by Nick Pe"}</figcaption>
                </center>
                
            </div>
        )
    }
}

export default Animal;