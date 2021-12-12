import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { Field, reduxForm } from 'redux-form';
import { compose } from 'redux';



class Profile extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.obtainAllUsers();
    }

    

    onButtonClick = (name) => {
        if(document.getElementById(name).className === "show")
        {
            document.getElementById(name).className = "hide";
        } else {
            document.getElementById(name).className = "show";
        }
        
    }
    
    onFormSubmit = async (formProps) => {
        if(formProps.biography)
        {
            // Add a function to submit the data using the backend server.
            await this.props.addUserData(formProps);
            let currentURL = window.location.href;
            window.location.href = currentURL;
        }
    }

    onCommentSubmit = async (formProps) => {
        if(formProps.comment)
        {
            await this.props.addComment(this.props.user[0].username, this.props.auth.username, this.props.auth.email, this.props.auth.profileImage, formProps.comment)
            let currentURL = window.location.href;
            window.location.href = currentURL;
        } 
    }

    onImageSubmit = (formProps) => {
        if(formProps.profileImage)
        {
            this.obtainEncodedURLString(formProps.profileImage[0]).then(profileImage => this.props.addImageData({profileImage}));
            let currentURL = window.location.href;
            window.location.href = currentURL;
        }
    }

    obtainEncodedURLString = (file) => {
        return new Promise((resolve, reject) => {
            var reader = new FileReader();

            reader.onload = () => {
                resolve(reader.result);
            };

            reader.onerror = reject;

            reader.readAsDataURL(file);
        })
    }

    customFileInput = (field) => {
        delete field.input.value; // <-- deleting the value property
        return <input type = "file" id = "file"  {...field.input }/>;
    }

    renderComments() {
        if(this.props.auth && this.props.user && this.props.user.length)
        {
            return this.props.user[0].comments.map(comment => {
                return(
                    <div className='card' key={Math.random() * 10} style = {{ marginLeft: '100px', marginRight: '100px', position: 'static'}}>
                        <div className='card-content'>
                            <span style = {{ fontFamily: 'sans-serif', fontSize: 'xx-large', fontWeight: 'bold', position: 'static'}}>
                                    {comment.username}
                            </span>
                           <br />
                            <img src = {comment.profileImage} style = {{ borderRadius: '50%', height: '120px', width: '120px', position: 'static'}} />
                            
                            <p style = {{ fontSize: '24px' }}>{comment.comment}</p>
                            <br />
                            <p>{comment.submissionDate}</p>
                        </div>
                    </div>
                )
            })
        }
    } 


    render() {
        const {handleSubmit} = this.props;

        return(
            <div style = {{ marginTop: '80px'}}>
                <center>
                    <h1>{this.props.auth && this.props.user.length ? this.props.user[0].username : "Profile not found"}</h1>
                    {this.props.user && this.props.user.length ?<img className = "flex-fit-gallery" src = {this.props.user[0].profileImage} /> : ''}
                    <p style = {{ paddingLeft: '10px', paddingRight: '10px'}}>{this.props.auth && this.props.user.length ? this.props.user[0].bio : "This user has not added a biograhy. But whatever they are doing, they are being awesome."}</p>
                    <br />
                   {this.props.auth && this.props.auth.username && this.props.auth.username === window.location.pathname.split('/')[2] && this.props.user.length ? <div><button className = "btn" onClick = {() => this.onButtonClick('imageField')}>{this.props.auth && this.props.auth.image ? "Change Profile Image" : "Add Profile Image"}</button>
                    <br />
                    <br />
                    <button className = "btn" onClick = {() => this.onButtonClick('biographyField')}>{this.props.auth && this.props.auth.bio ? "Change Bio" : "Add Biography"}</button></div> : <p>{this.props.user.bio}</p>}
                    
                    <form id = "biographyField" onSubmit = {handleSubmit(this.onFormSubmit)} className = "hide">
                        <br />
                        
                        <fieldset style = {{ marginLeft: '180px', marginRight: '165px'}} >
                            <label>Biography</label>
                            <br />
                            <Field  name = "biography" type = "text" component = "textarea" autoComplete = "none" />
                        </fieldset>
                        <br />
                        <button className = "btn">{this.props.auth && this.props.auth.bio ? "Change Bio" : "Submit"}</button>
                    </form>
                    <form id = "imageField" onSubmit = {handleSubmit(this.onImageSubmit)} className = "hide">
                        <br />
                        <fieldset  style = {{ marginLeft: '700px', marginRight: '650px'}}>
                            <label style = {{ marginLeft: '-50px'}}>Profile Image</label>
                            <br />
                            <Field  name = "profileImage" type = "file" component = {this.customFileInput} autoComplete = "none" multiple = {false} accept='.jpg, .png, .jpeg' />
                        </fieldset>
                        <br />
                        <button className = "btn">{this.props.auth && this.props.auth.image ? "Change Profile Image" : "Submit"}</button>
                    </form>
                    <h3>Comments and Replies</h3>
                    
                    {this.renderComments()}
                    <form id = "commentField" className=' = "hide' onSubmit={handleSubmit(this.onCommentSubmit)}>
                        <fieldset style = {{ marginLeft: '100px', marginRight: '100px'}}>
                            <label >Leave A Comment</label>
                            <Field name = "comment" type = "text" component = "textarea" autoComplete = "none" />
                        </fieldset>
                        <br />
                        <button className = "btn">Submit Comment</button>
                    </form>
                    </center>
                    {console.log(this.props)}
                

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { auth: state.auth, users: state.users, user: state.users.filter(user => user.username === window.location.pathname.split('/')[2].replaceAll("%20",  " ")) };
}

export default compose(connect(mapStateToProps, actions), reduxForm({ form: 'addUserData' }))(Profile);