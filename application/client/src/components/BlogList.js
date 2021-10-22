import React from 'react';
import { fetchPostsAndUsersBlog, removeUndefinedValues, addNewPost, fetchUserLocal, postUserLocal, deleteBlog, fetchUserGoogle, fetchUserSpotify } from '../actions';
import { connect } from 'react-redux';
import UserHeader from './UserHeader';



class BlogList extends React.Component {
    l
   state  = { title: null, body: null, userId: null, displayName: null, email: null, imageFile: null }


    componentDidMount() {

       
            
                this.props.fetchPostsAndUsersBlog();
            
        
        
       
        

        
    }

    newTitle = (event) => {
        this.setState({
            title: event.target.value,
            userId: this.props.auth.spotifyID || this.props.auth.googleID || this.props.auth.userID,
            displayName: this.props.auth.spotifyUserName || this.props.auth.googleUserName || this.props.auth.username || this.props.steamUserName,
            email: this.props.auth.email
        })
        console.log(this.state.title);
    }

    newMessage = (event) => {
        this.setState({
            body: event.target.value,
            userId: this.props.auth.spotifyID || this.props.auth.googleID || this.props.auth.userID,
            displayName: this.props.auth.spotifyUserName || this.props.auth.googleUserName || this.props.auth.username || this.props.steamUserName,
            email: this.props.auth.email
        })
        console.log(this.state.body);
    }

    deleteThisBlog = (id) => {
        this.props.deleteBlog(id);
        if(this.props.auth.userID)
        {
            this.props.fetchPostsAndUsersBlog(this.props.auth.userID);
        } else if(this.props.auth.googleID)
        {
            this.props.fetchPostsAndUsersBlog(this.props.auth.googleID);
        } else if(this.props.auth.spotifyID)
        {
            this.props.fetchPostsAndUsersBlog(this.props.auth.spotifyID);
        }
    }


    newPosts = () => {
        if(this.state.title != null && this.state.body != null)
        {
            this.props.addNewPost(this.state.title, this.state.body, this.state.userId, this.state.email, this.state.displayName, Date(Date.now()).toString(), Math.random().toString(32).substring(2) );
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

export default connect(mapStateToProps, { fetchPostsAndUsersBlog, removeUndefinedValues, addNewPost, fetchUserLocal, postUserLocal, deleteBlog, fetchUserGoogle, fetchUserSpotify })(BlogList);