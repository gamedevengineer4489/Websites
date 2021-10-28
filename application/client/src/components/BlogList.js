import React from 'react';
import { fetchPostsAndUsersBlog, removeUndefinedValues, addNewPost, fetchUserLocal, postUserLocal, deleteBlog, fetchUserGoogle, fetchUserSpotify, likePost, dislikePost } from '../actions';
import { connect } from 'react-redux';





class BlogList extends React.Component {
    l
   state  = { title: null, body: null, userId: null, displayName: null, email: null, image: null }


    componentDidMount() {
        this.props.fetchPostsAndUsersBlog();
    }

    newTitle = (event) => {
        this.setState({
            title: event.target.value,
            userId: this.props.auth.spotifyID || this.props.auth.googleID || this.props.auth.userID,
            displayName: this.props.auth.spotifyUserName || this.props.auth.googleUserName || this.props.auth.username || this.props.steamUserName,
            email: this.props.auth.email,
            image: this.props.auth.avatar
        })
        console.log(this.state.title);
    }

    newMessage = (event) => {
        this.setState({
            body: event.target.value,
            userId: this.props.auth.spotifyID || this.props.auth.googleID || this.props.auth.userID,
            displayName: this.props.auth.spotifyUserName || this.props.auth.googleUserName || this.props.auth.username || this.props.steamUserName,
            email: this.props.auth.email,
            image: this.props.auth.avatar
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
            this.props.addNewPost(this.state.title, this.state.body, this.state.userId, this.state.email, this.state.displayName, Date(Date.now()).toString(), Math.random().toString(32).substring(2), this.state.image );
            this.setState({
                title: null,
                body: null,
                userId: null,
                displayName: null,
                email: null,
                image: null
            });
            document.blogForm.reset();
        } else {
            alert("You must enter a title and message before submitting a blog post.");
            this.setState({
                title: null,
                body: null,
                userId: null,
                displayName: null,
                email: null,
                image: null
            })
            document.blogForm.reset();
        }
        
    }
    

    

    renderList() {
            return this.props.blogs.map(blog => {
                {console.log(blog)}
                return(
                    
                    <div className = "item" key = {Math.random() * 10}>
                        <span>
                        
                        <img  alt = "i" style = {{ width: '60px', height: '60px', borderRadius: '40px' }} src={this.props.auth ? this.props.auth.imageURLGoogle || this.props.auth.imageURLSpotify || this.props.auth.imageURLSteam || this.props.auth.avatar || this.props.auth.imageURL || 'https://th.bing.com/th/id/OIP.aZmeezB0ccZ_TZsi6odQ0wAAAA?pid=ImgDet&rs=1' : 'https://th.bing.com/th/id/OIP.aZmeezB0ccZ_TZsi6odQ0wAAAA?pid=ImgDet&rs=1'} /><b style = {{ fontSize: 'x-large', margin: '8px'}}>{this.props.auth ? this.props.auth.googleUserName || this.props.auth.spotifyUserName || this.props.auth.username || "" : ""}</b>
                        </span>
                        <div className = "content">
                            <div className = "description">
                                {/* //blog.Id */}
                                <h5>{blog.title}</h5>
                                <p style = {{ wordBreak: 'break-all'}}>{blog.body} </p>
                                <p>{blog.date_created}</p>
                            </div>
                        </div>

                            <a href = "/list" style = {{ cursor: 'pointer'}}  onClick = {() => this.deleteThisBlog(blog.Id)} >Delete Post</a>
                            <a style = {{ cursor: 'pointer'}}  href = {`/list/${blog.Id}`}> Edit Post</a>
                            {/* <div className = "inline-icon right">
                                {blog.likes} <a href = "/list" onClick = {() => this.props.likePost(blog.Id)} className = "button primary"><i className = "inline-icon from-bottom material-icons">thumb_up_alt</i></a> {blog.dislikes} <a href = "/list" onClick = {() =>  this.props.dislikePost(blog.Id)} className = "button primary"><i className = "from-bottom inline-icon material-icons">thumb_down_alt</i></a>
                            </div> */}

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
                <form method = "post" name = "blogForm">
                    Title: <input onChange = {(event) => {this.newTitle(event)}} minLength="1" maxLength="120"required/>
                    Message: <textarea onChange = {(event) => {this.newMessage(event)}} required/>

                    <button className = "btn" type = "button" onClick = {() => this.newPosts()} value = "Submit" > Submit <i className = "inline-icon material-icons">send</i></button>
                        
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

export default connect(mapStateToProps, { fetchPostsAndUsersBlog, removeUndefinedValues, addNewPost, fetchUserLocal, postUserLocal, deleteBlog, fetchUserGoogle, fetchUserSpotify, likePost, dislikePost })(BlogList);