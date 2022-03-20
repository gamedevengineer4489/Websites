import React from 'react';

export default class Footer extends React.Component {
    render() {
        return(
            <footer className = "page-footer" style={{ backgroundColor: 'black'}}>
                <div className = "row">
                    <div className = "col s2">
                        <a className = "footerColumn" href = "/"  onClick = {() => window.open("https://ancient-reaches-75615.herokuapp.com/")}>OC Websites</a><wbr />
                        <p style = {{ fontFamily: 'sans-serif', fontSize: 'medium', fontStyle: 'italic'}}>Website Created By Alexander Dalessi</p>
                    </div>
                </div>
                <div className = "footer-copyright" style = {{ marginLeft: '10px' }}>
                    © 2021 Copyright OC Websites
                </div>
            </footer>
        )
    }
}