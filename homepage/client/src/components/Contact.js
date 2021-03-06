import React from 'react';

class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = { body: "", subject: "" }
    }

    form_id_js = "javascript_form";

    data_js = {
        "access_token": 's2mcm5zxebzwqs7jiax1noyo'
    };

    js_send() {
        let sendButton = document.getElementById("js_send");
        sendButton.value='Sending…';
        sendButton.disabled=true;
        var request = new XMLHttpRequest();
        request.onreadystatechange = function() {
            if (request.readyState === 4 && request.status === 200) {
                window.location = window.location.pathname;
            } else
            if(request.readyState === 4) {
                window.location = window.location.pathname + "?message=Email+Failed+Sent%21&isError=1";
            }
        };

        var subject = document.querySelector("#" + this.form_id_js + " [name='subject']").value;
        var message = document.querySelector("#" + this.form_id_js + " [name='text']").value;
        this.data_js['subject'] = subject;
        this.data_js['text'] = message;
        var params = this.toParams(this.data_js);

        request.open("POST", "https://postmail.invotes.com/send", true);
        request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

        request.send(params);

        return false;
    }

    toParams(data_js) {
        var form_data = [];
        for ( var key in data_js ) {
            form_data.push(encodeURIComponent(key) + "=" + encodeURIComponent(data_js[key]));
        }

        return form_data.join("&");
    }

    componentDidMount() {
        window.scroll(0,0);
    }

    render() {
        return(
            <div style = {{ height: '882px'}}>
                <form className='contactForm' id="javascript_form" style = {{ padding: '30px'}}>
                    <fieldset>
                        <h2><center>Contact Form</center></h2>
                        <label >Subject</label>
                        <input type="text" name="subject" placeholder="Subject" maxLength = "250" autoComplete = "none" required/>
                        <label >Message</label>
                        <textarea name="text" placeholder="Message" autoComplete = "none" required></textarea>
                        <input type="submit" id="js_send" value="Send" onClick = {() => this.js_send()} className = "btn"/>
                    </fieldset>
                    <p>Powered by <a href="https://postmail.invotes.com" target="_blank" rel="noreferrer">PostMail</a></p>
                </form>
            </div>
        )
    }
}

// This is a comment.

export default Contact;