import React from 'react';

class Websites extends React.Component {
    render() {
        return(
            <div style = {{height: '840px'}}>
                <center>
                    <h1><mark>Website Examples</mark></h1>
                    <a onClick = {() => {window.open("https://protected-ocean-66873.herokuapp.com/")}} style = {{ cursor: 'pointer'}}><code style = {{ fontSize: 'x-large'}}>Example Email Sender Service</code></a>
                    <br />
                    <a onClick = {() => {window.open("https://warm-hollows-19701.herokuapp.com/")} } style = {{ cursor: 'pointer'}}><code style = {{ fontSize: 'x-large'}}>Example Blog</code></a>
                </center>
            </div>
        )
    }
}

export default Websites;
////////////////