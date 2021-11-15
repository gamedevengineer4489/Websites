import React from 'react';

class Footer extends React.Component {
    render() {
        return(
            <footer className = "page-footer" style = {{ backgroundColor: 'cornflowerblue', padding: '10px', color: 'black'}}>
                <div className = "row">
                    <div className = "col">
                        <span style = {{ fontSize: 'x-large'}}>OC Websites</span><wbr />
                        <p>Website Created By Alexander Dalessi</p>
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