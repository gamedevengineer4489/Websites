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
import Lemonade1 from '../images/lemonade1.PNG';
import Lemonade2 from '../images/lemonade2.PNG';
import Lemonade3 from '../images/lemonade3.PNG';
import Lemonade4 from '../images/lemonade4.PNG';
import FlashCardImage from '../images/flashCard1.PNG';
import FlashCardImage2 from '../images/flashCardImage2.PNG';
import FlashCardImage3 from '../images/flashCardImage3.PNG';
import FlashCardImage4 from '../images/flashCardImage4.PNG';



class Websites extends React.Component {
    constructor(props) {
        super(props);
        this.state = { show: false, back: null, x: 0, y: 0 };
    }

    showModal(element, backTo, websiteToOpen) {
        
        document.getElementById("img01").src = element;
        document.getElementById("modal01").style.display = "block";
        
        this.setState({
            show: true,
            back: backTo,
            x: window.scrollX,
            y: window.scrollY
        });

        window.open(websiteToOpen);
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
            <div style = {{maxHeight: '16000px'}} >
                <div style = {{ overflow: this.state.show ? 'hidden' : 'auto', position: this.state.show ? 'fixed' : 'static'}}>
                    <center>
                        <h2>Website Examples</h2>
                        <hr style={{ width: '80vw' }}/>
                        <a onClick = {() => {window.open("https://protected-ocean-66873.herokuapp.com/")}} style = {{ cursor: 'pointer'}}><code style = {{ fontSize: 'x-large'}}>Email Sender Service</code></a>
                        <br />
                        
                        <img id = "pic1" src = {Survey_Example} style = {{ maxWidth: '60%', maxHeight: '100%', width: 'auto', height: 'auto', cursor: 'pointer'}} onClick={() => this.showModal(Survey_Example, "pic1", "https://protected-ocean-66873.herokuapp.com/")}/>
                        <br />
                        <img id = "pic2" src = {Survey_Example_2} style = {{ maxWidth: '60%', maxHeight: '100%', width: 'auto', height: 'auto', cursor: 'pointer'}} onClick={() => this.showModal(Survey_Example_2, "pic2", "https://protected-ocean-66873.herokuapp.com/")}/>
                        <br />
                        <a onClick = {() => {window.open("https://warm-hollows-19701.herokuapp.com/")} } style = {{ cursor: 'pointer'}}><code style = {{ fontSize: 'x-large'}}>Blog</code></a>
                        <br />
                        <img id = "pic3" src = {BLOG_EXAMPLE_1} style = {{ maxWidth: '60%', maxHeight: '100%', width: 'auto', height: 'auto', cursor: 'pointer'}} onClick={() => this.showModal(BLOG_EXAMPLE_1, "pic3", "https://warm-hollows-19701.herokuapp.com/")}/>
                        <br />
                        <img id = "pic4" src = {BLOG_EXAMPLE_2} style = {{ maxWidth: '60%', maxHeight: '100%', width: 'auto', height: 'auto', cursor: 'pointer'}} onClick={() => this.showModal(BLOG_EXAMPLE_2, "pic4", "https://warm-hollows-19701.herokuapp.com/")}/>
                        <br />
                        <a onClick = {() => {window.open("https://mighty-coast-45192.herokuapp.com/")} } style = {{ cursor: 'pointer'}}><code style = {{ fontSize: 'x-large'}}>Example Social Media Website</code></a>
                        <br />
                        <img id = "pic5" src = {ANOTHERBLOG_IMAGE} style = {{ maxWidth: '60%', maxHeight: '100%', width: 'auto', height: 'auto', cursor: 'pointer'}} onClick={() => this.showModal(ANOTHERBLOG_IMAGE, "pic5", "https://mighty-coast-45192.herokuapp.com/")}/>
                        <br />
                        <a onClick = {() => {window.open("https://protected-mesa-63333.herokuapp.com/")} } style = {{ cursor: 'pointer'}}><code style = {{ fontSize: 'x-large'}}>Grocery Store Website</code></a>
                        <br />
                        <img id = "pic6" src = {Grocery1} style = {{ maxWidth: '60%', maxHeight: '100%', width: 'auto', height: 'auto', cursor: 'pointer'}} onClick={() => this.showModal(Grocery1, "pic6", "https://protected-mesa-63333.herokuapp.com/")}/>
                        <br />
                        <img id = "pic7" src = {Grocery2} style = {{ maxWidth: '60%', maxHeight: '100%', width: 'auto', height: 'auto', cursor: 'pointer'}} onClick={() => this.showModal(Grocery2, "pic7", "https://protected-mesa-63333.herokuapp.com/")}/>
                        <br />
                        <img id = "pic8" src = {Grocery3} style = {{ maxWidth: '60%', maxHeight: '100%', width: 'auto', height: 'auto', cursor: 'pointer'}} onClick={() => this.showModal(Grocery3, "pic8", "https://protected-mesa-63333.herokuapp.com/")}/>
                        <br />
                        <a onClick = {() => {window.open("https://shielded-mountain-59586.herokuapp.com/")} } style = {{ cursor: 'pointer'}}><code style = {{ fontSize: 'x-large'}}>Zoo Website</code></a>
                        <br />
                        <img id = "pic9" src = {Zoo1} style = {{ maxWidth: '60%', maxHeight: '100%', width: 'auto', height: 'auto', cursor: 'pointer'}} onClick={() => this.showModal(Zoo1, "pic9", "https://shielded-mountain-59586.herokuapp.com/")}/>
                        <br />
                        <img id = "pic10" src = {Zoo4} style = {{ maxWidth: '60%', maxHeight: '100%', width: 'auto', height: 'auto', cursor: 'pointer'}} onClick={() => this.showModal(Zoo4, "pic10", "https://shielded-mountain-59586.herokuapp.com/")}/>
                        <br />
                        <img id = "pic11" src = {Zoo3} style = {{ maxWidth: '60%', maxHeight: '100%', width: 'auto', height: 'auto', cursor: 'pointer'}} onClick={() => this.showModal(Zoo3, "pic11", "https://shielded-mountain-59586.herokuapp.com/")}/>
                        <br />
                        <img id = "pic12" src = {Zoo2} style = {{ maxWidth: '60%', maxHeight: '100%', width: 'auto', height: 'auto', cursor: 'pointer'}} onClick={() => this.showModal(Zoo2, "pic12", "https://shielded-mountain-59586.herokuapp.com/")}/>
                        <br />
                        <a onClick = {() => {window.open("https://quiet-oasis-20080.herokuapp.com/")} } style = {{ cursor: 'pointer'}}><code style = {{ fontSize: 'x-large'}}>Business Simulation Game Example Website</code></a>
                        <br />
                        <img id = "pic13" src = {Lemonade1} style = {{ maxWidth: '60%', maxHeight: '100%', width: 'auto', height: 'auto', cursor: 'pointer'}} onClick={() => this.showModal(Lemonade1, "pic13", "https://quiet-oasis-20080.herokuapp.com/")}/>
                        <br />
                        <img id = "pic14" src = {Lemonade2} style = {{ maxWidth: '60%', maxHeight: '100%', width: 'auto', height: 'auto', cursor: 'pointer'}} onClick={() => this.showModal(Lemonade2, "pic14", "https://quiet-oasis-20080.herokuapp.com/")}/>
                        <br />
                        <img id = "pic15" src = {Lemonade3} style = {{ maxWidth: '60%', maxHeight: '100%', width: 'auto', height: 'auto', cursor: 'pointer'}} onClick={() => this.showModal(Lemonade3, "pic15", "https://quiet-oasis-20080.herokuapp.com/")}/>
                        <br />
                        <img id = "pic16" src = {Lemonade4} style = {{ maxWidth: '60%', maxHeight: '100%', width: 'auto', height: 'auto', cursor: 'pointer'}} onClick={() => this.showModal(Lemonade4, "pic16", "https://quiet-oasis-20080.herokuapp.com/")}/>
                        <a onClick = {() => {window.open("https://intense-gorge-02557.herokuapp.com/")} } style = {{ cursor: 'pointer'}}><code style = {{ fontSize: 'x-large', display: 'flex', justifyContent: 'center'}}>Flashcard application</code></a>
                        <br />
                        <img id = "pic17" src = {FlashCardImage} style = {{ maxWidth: '60%', maxHeight: '100%', width: 'auto', height: 'auto', cursor: 'pointer'}} onClick={() => this.showModal(FlashCardImage, "pic17", "https://intense-gorge-02557.herokuapp.com/")}/>
                        <br />
                        <img id = "pic18" src = {FlashCardImage2} style = {{ maxWidth: '60%', maxHeight: '100%', width: 'auto', height: 'auto', cursor: 'pointer'}} onClick={() => this.showModal(FlashCardImage2, "pic18", "https://intense-gorge-02557.herokuapp.com/")}/>
                        <br />
                        <img id = "pic19" src = {FlashCardImage3} style = {{ maxWidth: '60%', maxHeight: '100%', width: 'auto', height: 'auto', cursor: 'pointer'}} onClick={() => this.showModal(FlashCardImage3, "pic19", "https://intense-gorge-02557.herokuapp.com/")}/>
                        <br />
                        <img id = "pic20" src = {FlashCardImage4} style = {{ maxWidth: '60%', maxHeight: '100%', width: 'auto', height: 'auto', cursor: 'pointer'}} onClick={() => this.showModal(FlashCardImage4, "pic20", "https://intense-gorge-02557.herokuapp.com/")}/>
                    </center>

                </div>

                        <a id="modal01" onClick = {() => this.closeModal()} style = {{ display: this.state.show ? "block" : "none"}} >
                            <div className='modal-content' style={{ top: '25%', left: '15%', position: 'absolute'  }}>
                                    <img className = 'modalImage' id='img01' alt = "A website example."  style = {{  height: '50vh', width: 'auto', top: '25%', left: '25%', position: 'absolute' }} />
                            </div>
                        </a>

                </div>
        )
    }
}

export default Websites;
