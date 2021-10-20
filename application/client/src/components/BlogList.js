import React from 'react';
import { fetchPostsAndUsersBlog, removeUndefinedValues, addNewPost, fetchUserLocal, postUserLocal, deleteBlog } from '../actions';
import { connect } from 'react-redux';
import UserHeader from './UserHeader';
import { Link } from 'react-router-dom';
import blogReducer from '../reducers/blogReducer';


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

    deleteThisBlog = (id) => {
        this.props.deleteBlog(id);
        this.props.fetchPostsAndUsersBlog();
    }


    newPosts = () => {
        if(this.state.title != null && this.state.body != null)
        {
            this.props.addNewPost(this.state.title, this.state.body, this.state.userId, this.state.email, this.state.displayName, Date(Date.now()).toString(), Math.random().toString(32).substring(2) );
        //this.props.addNewUser(this.state.title, this.state.body, this.state.userId, this.state.email, this.state.displayName, Date(Date.now()).toString() );
            this.setState({
                title: null,
                body: null,
                userId: null,
                displayName: null,
                email: null,
                imageFile: null
            })
        } else {
            alert("You must enter a title and message before submitting a blog post.");
            this.setState({
                title: null,
                body: null,
                userId: null,
                displayName: null,
                email: null,
                imageFile: null
            })
        }
        
    }
    

    

    renderList() {
            return this.props.blogs.map(blog => {
                {console.log(blog.Id)}
                return(
                    
                    <div className = "item" key = {Math.random() * 10}>
                        <span>
                        {console.log(blog.Id)}
                        <UserHeader userId = {this.props.auth.googleUserName || this.props.auth.spotifyUserName || this.props.auth.username} />
                        </span>
                        <div className = "content">
                            <div className = "description">
                                {/* //blog.Id */}
                                <h5>{blog.title}</h5>
                                <p style = {{ wordBreak: 'break-all'}}>{blog.body} </p>
                                <p>{blog.date_created}</p>
                            </div>
                        </div>
                        <form>
                            <a className = "btn"  onClick = {() => this.deleteThisBlog(blog.Id)} >Delete</a>
                        </form>
                        <br />
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
                <h4 className = "center">Create a new blog post</h4>
                <form>
                    Title: <input onChange = {(event) => {this.newTitle(event)}} value = {this.state.value} required/>
                    Message: <textarea onChange = {(event) => {this.newMessage(event)}} required/>

                    <a className = "btn-large waves-effect waves-light green" name = "action" onClick = {() => this.newPosts()}>  
                        Submit{/* <span><strong>Submit        </strong><i className = "material-icons small" >send</i></span> */}
                    </a>  
                </form>

               

                <br />
                <br />
                <br />
                <br />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    
    return { blogs: state.blogs, auth: state.auth }
}

export default connect(mapStateToProps, { fetchPostsAndUsersBlog, removeUndefinedValues, addNewPost, fetchUserLocal, postUserLocal, deleteBlog })(BlogList);