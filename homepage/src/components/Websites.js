import React from 'react';
import Survey_Example from '../images/Survey_Example.png';
import Survey_Example_2 from '../images/Survey_Example_2.PNG';
import BLOG_EXAMPLE_1 from '../images/BLOG_EXAMPLE_1.PNG';
import BLOG_EXAMPLE_2 from '../images/BLOG_EXAMPLE_2.PNG';
import ANOTHERBLOG_IMAGE from '../images/ANOTHERBLOG_IMAGE.PNG';
import Grocery1 from '../images/grocery.PNG';
import Grocery2 from '../images/grocery1.PNG';
import Grocery3 from '../images/grocery2.PNG';
import Zoo1 from '../images/zooFrontPage.PNG';
import Zoo2 from '../images/Zoo2.PNG';
import Zoo3 from '../images/zooSelection.PNG';
import Zoo4 from '../images/zooCheckout.PNG';
import { Link } from 'react-router-dom';





class Websites extends React.Component {
    constructor(props) {
        super(props);
        this.state = { show: false, back: null, x: 0, y: 0 };
    }

    showModal(element, backTo) {
        
        document.getElementById("img01").src = element;
        document.getElementById("modal01").style.display = "block";
        
        this.setState({
            show: true,
            back: backTo,
            x: window.scrollX,
            y: window.scrollY
        });

    }

    componentDidUpdate() {
        window.scrollTo(0, this.state.y);
        this.state.show ? document.getElementById("footer").style.display = "none" : document.getElementById("footer").style.removeProperty("display");
    }

    closeModal() {
        this.setState({ show: false });
        
    }

    render() {
        return(
            <div style = {{maxHeight: '7500px'}} >
                <div style = {{ overflow: this.state.show ? 'hidden' : 'auto', position: this.state.show ? 'fixed' : 'static'}}>
                    <center>
                        <h2><mark>Website Examples</mark></h2>
                        <a onClick = {() => {window.open("https://protected-ocean-66873.herokuapp.com/")}} style = {{ cursor: 'pointer'}}><code style = {{ fontSize: 'x-large'}}>Example Email Sender Service</code></a>
                        <br />
                        
                        <img id = "pic1" src = {Survey_Example} style = {{ maxWidth: '60%', maxHeight: '100%', width: 'auto', height: 'auto', cursor: 'pointer'}} onClick={() => this.showModal(Survey_Example, "pic1")}/>
                        <br />
                        <img id = "pic2" src = {Survey_Example_2} style = {{ maxWidth: '60%', maxHeight: '100%', width: 'auto', height: 'auto', cursor: 'pointer'}} onClick={() => this.showModal(Survey_Example_2, "pic2")}/>
                        <br />
                        <a onClick = {() => {window.open("https://warm-hollows-19701.herokuapp.com/")} } style = {{ cursor: 'pointer'}}><code style = {{ fontSize: 'x-large'}}>Example Blog</code></a>
                        <br />
                        <img id = "pic3" src = {BLOG_EXAMPLE_1} style = {{ maxWidth: '60%', maxHeight: '100%', width: 'auto', height: 'auto', cursor: 'pointer'}} onClick={() => this.showModal(BLOG_EXAMPLE_1, "pic3")}/>
                        <br />
                        <img id = "pic4" src = {BLOG_EXAMPLE_2} style = {{ maxWidth: '60%', maxHeight: '100%', width: 'auto', height: 'auto', cursor: 'pointer'}} onClick={() => this.showModal(BLOG_EXAMPLE_2, "pic4")}/>
                        <br />
                        <a onClick = {() => {window.open("https://mighty-coast-45192.herokuapp.com/")} } style = {{ cursor: 'pointer'}}><code style = {{ fontSize: 'x-large'}}>Example Social Media Website</code></a>
                        <br />
                        <img id = "pic5" src = {ANOTHERBLOG_IMAGE} style = {{ maxWidth: '60%', maxHeight: '100%', width: 'auto', height: 'auto', cursor: 'pointer'}} onClick={() => this.showModal(ANOTHERBLOG_IMAGE, "pic5")}/>
                        <br />
                        <a onClick = {() => {window.open("https://protected-mesa-63333.herokuapp.com/")} } style = {{ cursor: 'pointer'}}><code style = {{ fontSize: 'x-large'}}>Example Grocery Store Website</code></a>
                        <br />
                        <img id = "pic6" src = {Grocery1} style = {{ maxWidth: '60%', maxHeight: '100%', width: 'auto', height: 'auto', cursor: 'pointer'}} onClick={() => this.showModal(Grocery1, "pic6")}/>
                        <br />
                        <img id = "pic7" src = {Grocery2} style = {{ maxWidth: '60%', maxHeight: '100%', width: 'auto', height: 'auto', cursor: 'pointer'}} onClick={() => this.showModal(Grocery2, "pic7")}/>
                        <br />
                        <img id = "pic8" src = {Grocery3} style = {{ maxWidth: '60%', maxHeight: '100%', width: 'auto', height: 'auto', cursor: 'pointer'}} onClick={() => this.showModal(Grocery3, "pic8")}/>
                        <br />
                        <a onClick = {() => {window.open("https://shielded-mountain-59586.herokuapp.com/")} } style = {{ cursor: 'pointer'}}><code style = {{ fontSize: 'x-large'}}>Example Zoo Website</code></a>
                        <br />
                        <img id = "pic9" src = {Zoo1} style = {{ maxWidth: '60%', maxHeight: '100%', width: 'auto', height: 'auto', cursor: 'pointer'}} onClick={() => this.showModal(Zoo1, "pic9")}/>
                        <br />
                        <img id = "pic10" src = {Zoo4} style = {{ maxWidth: '60%', maxHeight: '100%', width: 'auto', height: 'auto', cursor: 'pointer'}} onClick={() => this.showModal(Zoo4, "pic10")}/>
                        <br />
                        <img id = "pic11" src = {Zoo3} style = {{ maxWidth: '60%', maxHeight: '100%', width: 'auto', height: 'auto', cursor: 'pointer'}} onClick={() => this.showModal(Zoo3, "pic11")}/>
                        <br />
                        <img id = "pic12" src = {Zoo2} style = {{ maxWidth: '60%', maxHeight: '100%', width: 'auto', height: 'auto', cursor: 'pointer'}} onClick={() => this.showModal(Zoo2, "pic12")}/>
                    </center>

                </div>

                <a id="modal01" onClick = {() => this.closeModal()} style = {{ display: this.state.show ? "block" : "none"}} >
                
                    <div className='modal-content'>
                        <img className='image' id='img01' alt = "A website example." style = {{ width: '75vw', height: 'auto'}} />
                    </div>
                </a>
                
                

            </div>
        )
    }
}

export default Websites;
