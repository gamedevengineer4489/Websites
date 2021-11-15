import React from 'react';



const Landing = () => {
    return (
        <div style = {{ textAlign: 'center' }}>
            <h1>
                Welcome to our website. 
                <br />
                <b>Instructions: </b>
                <br />
                Please log-in to access our websites features. In order to utilize this website fully, you will have to create a sendgrid account and obtain a Sendgrid API key. <b>Warning</b> this is a different key than the Stripe Publishable Key and Stripe Secret Key. Once on the website, verify a single sender under Sender Authentication under Settings. The from email is the one that has to be specified for each new survey created. Under Mail Settings, enable Event Webhook with an HTTP Post URL of https://limitless-citadel-63953.herokuapp.com/api/surveys/webhooks and then leave everything else blank except Engagement Data. Under Engagement Data make sure <b>Clicked</b> is selected.
                Visit https://app.sendgrid.com/ for more information.
            </h1>
            
        </div>
    )
}

export default Landing;