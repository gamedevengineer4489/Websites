import React from 'react';
import { fetchPostsAndUsersBlog, removeUndefinedValues, addNewPost, fetchUserLocal, postUserLocal } from '../actions';
import { connect } from 'react-redux';
import UserHeader from './UserHeader';
import Header from './Header';

class BlogList extends React.Component {
    l
   state  = { title: null, body: null, userId: null, displayName: null, email: null, imageFile: null }


    componentDidMount() {
        //this.props.fetchUserLocal(this.props.auth);
       
        this.props.fetchPostsAndUsersBlog();
        
        
        console.log(this.props.blogs);
        console.log(this.props.auth);
        this.props.removeUndefinedValues();
        this.props.postUserLocal(this.props.auth);
        //this.props.fetchUserLocal(this.props.auth);
    }

    newTitle = (event) => {
        this.setState({
            title: event.target.value,
            userId: this.props.auth.spotifyID || this.props.auth.googleID || this.props.auth.userID,
            displayName: this.props.auth.spotifyUserName || this.props.auth.googleUserName || this.props.auth.username,
            email: this.props.auth.email
        })
        console.log(this.state.title);
    }

    newMessage = (event) => {
        this.setState({
            body: event.target.value,
            userId: this.props.auth.spotifyID || this.props.auth.googleID || this.props.auth.userID,
            displayName: this.props.auth.spotifyUserName || this.props.auth.googleUserName || this.props.auth.username,
            email: this.props.auth.email
        })
        console.log(this.state.body);
    }


    newPosts = () => {
        this.props.addNewPost(this.state.title, this.state.body, this.state.userId, this.state.email, this.state.displayName, Date(Date.now()).toString() );
        //this.props.addNewUser(this.state.title, this.state.body, this.state.userId, this.state.email, this.state.displayName, Date(Date.now()).toString() );
        this.setState({
            title: null,
            userId: null,
            displayName: null,
            email: null,
            imageFile: null
        })
    }
    

    

    renderList() {
            return this.props.blogs.map(blog => {
                return(
                    
                    <div className = "item" key = {Math.random() * 10}>
                        <span>
                        {console.log(blog)}
                        {console.log(this.props.blogs)}
                        {console.log(this.props.auth)}
                        {console.log(this.state.userId)}
                        {console.log(this.state.displayName)}
                        {console.log(this.state.email)}
                        <UserHeader userId = {this.props.auth.googleUserName || this.props.auth.spotifyUserName || this.props.auth.username} />
                        </span>
                        <div className = "content">
                            <div className = "description">
                                <h5>{blog.title}</h5>
                                <p style = {{ wordBreak: 'break-all'}}>{blog.body} </p>
                                <p>{blog.date_created}</p>
                            </div>
                        </div>
                        <br />
                    </div>

            )
        })
    }

    render() {
        return(
            <div>
                
               
                <h1 className = "center">Blog Posts</h1>
                {this.renderList()}
                <h4>Create a new blog post</h4>

                Title: <input onChange = {(event) => {this.newTitle(event)}} value = {this.state.title} required/>
                Message: <textarea onChange = {(event) => {this.newMessage(event)}} value = {this.state.body} required/>
                <button className = "btn waves-effect-light" name = "action" onClick = {() => this.newPosts()}>
                    Submit
                    
                </button>


<br />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    return { blogs: state.blogs, auth: state.auth }
}

export default connect(mapStateToProps, { fetchPostsAndUsersBlog, removeUndefinedValues, addNewPost, fetchUserLocal, postUserLocal })(BlogList);