import React from 'react';
import Survey_Example from '../images/Survey_Example.png';
import Survey_Example_2 from '../images/Survey_Example_2.PNG';
import BLOG_EXAMPLE_1 from '../images/BLOG_EXAMPLE_1.PNG';
import BLOG_EXAMPLE_2 from '../images/BLOG_EXAMPLE_2.PNG';
import ANOTHERBLOG_IMAGE from '../images/ANOTHERBLOG_IMAGE.PNG';
import Grocery1 from '../images/grocery.PNG';
import Grocery2 from '../images/grocery1.PNG';
import Grocery3 from '../images/grocery2.PNG';

class Websites extends React.Component {
    render() {
        return(
            <div style = {{height: '5100px'}}>
                <center>
                    <h1><mark>Website Examples</mark></h1>
                    <a onClick = {() => {window.open("https://protected-ocean-66873.herokuapp.com/")}} style = {{ cursor: 'pointer'}}><code style = {{ fontSize: 'x-large'}}>Example Email Sender Service</code></a>
                    <br />
                    <img src = {Survey_Example} style = {{ height: '600px', width: '1100px'}} />
                    <br />
                    <img src = {Survey_Example_2} style = {{ height: '600px', width: '1100px'}} />
                    <br />
                    <a onClick = {() => {window.open("https://warm-hollows-19701.herokuapp.com/")} } style = {{ cursor: 'pointer'}}><code style = {{ fontSize: 'x-large'}}>Example Blog</code></a>
                    <br />
                    <img src = {BLOG_EXAMPLE_1} style = {{ height: '600px', width: '1100px'}} />
                    <br />
                    <img src = {BLOG_EXAMPLE_2} style = {{ height: '600px', width: '1100px'}} />
                    <br />
                    <a onClick = {() => {window.open("https://mighty-coast-45192.herokuapp.com/")} } style = {{ cursor: 'pointer'}}><code style = {{ fontSize: 'x-large'}}>Example Social Media Website</code></a>
                    <br />
                    <img src = {ANOTHERBLOG_IMAGE} style = {{ height: '600px', width: '1100px'}} />
                    <br />
                    <a onClick = {() => {window.open("https://protected-mesa-63333.herokuapp.com/")} } style = {{ cursor: 'pointer'}}><code style = {{ fontSize: 'x-large'}}>Example Grocery Store Website</code></a>
                    <br />
                    <img src = {Grocery1} style = {{ height: '600px', width: '1100px'}} />
                    <br />
                    <img src = {Grocery2} style = {{ height: '600px', width: '1100px'}} />
                    <br />
                    <img src = {Grocery3} style = {{ height: '600px', width: '1100px'}} />
                </center>
            </div>
        )
    }
}

export default Websites;
