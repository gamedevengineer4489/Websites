import React from 'react';

class Footer extends React.Component {
    render() {
        return(
            <footer className = "page-footer" style = {{ backgroundColor: 'cornflowerblue', padding: '10px', color: 'black'}} >
                <div className = "row">
                    <div className = "col s2">
                        <a style = {{ color: 'chocolate', fontFamily: 'fantasy', fontStyle: 'italic', fontSize: 'xx-large', textDecoration: 'none', cursor: 'pointer'}} onClick = {() => window.open("https://ancient-reaches-75615.herokuapp.com/")}>OC Websites</a><wbr />
                        <p style = {{ fontFamily: 'sans-serif', fontSize: 'medium', fontStyle: 'italic'}}>Website Created By Alexander Dalessi</p>
                    </div>
                    
                </div>
                <div className = "footer-copyright" style = {{ color: 'black'}}>
                    © 2021 Copyright OC Websites
                </div>
            </footer>
        )
    }
}

export default Footer;