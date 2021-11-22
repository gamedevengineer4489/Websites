import React from 'react';
import Survey_Example from '../images/Survey_Example.png';
import Survey_Example_2 from '../images/Survey_Example_2.PNG';
import BLOG_EXAMPLE_1 from '../images/BLOG_EXAMPLE_1.PNG';
import BLOG_EXAMPLE_2 from '../images/BLOG_EXAMPLE_2.PNG';

class Websites extends React.Component {
    render() {
        return(
            <div style = {{height: '2170px'}}>
                <center>
                    <h1><mark>Website Examples</mark></h1>
                    <a onClick = {() => {window.open("https://protected-ocean-66873.herokuapp.com/")}} style = {{ cursor: 'pointer'}}><code style = {{ fontSize: 'x-large'}}>Example Email Sender Service</code></a>
                    <br />
                    <img src = {Survey_Example} style = {{ height: '500px', width: '1000px'}} />
                    <br />
                    <img src = {Survey_Example_2} style = {{ height: '500px', width: '1000px'}} />
                    <br />
                    <a onClick = {() => {window.open("https://warm-hollows-19701.herokuapp.com/")} } style = {{ cursor: 'pointer'}}><code style = {{ fontSize: 'x-large'}}>Example Blog</code></a>
                    <br />
                    <img src = {BLOG_EXAMPLE_1} style = {{ height: '500px', width: '1000px'}} />
                    <br />
                    <img src = {BLOG_EXAMPLE_2} style = {{ height: '500px', width: '1000px'}} />
                </center>
            </div>
        )
    }
}

export default Websites;
