import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Blog extends React.Component {
    
    state = { comment: null, username: null, email: null }
    

    componentDidMount() {
        console.log(window.location.pathname.split("/"));
        this.props.fetchUserOther(window.location.pathname.split("/")[2]);
        this.props.fetchBlogsOther(window.location.pathname.split("/")[2]);
    }

    addANewComment(comment, username, email) {
        // People can only post comments if logged in
        this.setState({
            comment: comment,
            username: this.props.auth ? (this.props.auth.googleUserName || this.props.auth.spotifyUserName || this.props.auth.username) : "Anonymous User",
            email: this.props.auth ? this.props.auth.email : "anonymous@yahoo.com"
        })

        
        // submit comment
        this.props.submitComment(comment, username, email, this.props.auth.userID, window.location.pathname.split("/")[4],  window.location.pathname.split("/")[2])
        document.location.replace(document.location.href);
        
    }

    renderComments() {
        if(this.props.blog[0].comments.length != 0)
        {
            return this.props.blog[0].comments.map(comment => {
            
                return(
                    <div className = "card" key = {Math.random() * 10}>
                        <div className = "card-content">
                            <div className = "card-title">
                                <strong>{comment.username}</strong>
                            </div>

                            <p>{comment.comment}</p>
                            <br />
                            <p>{comment.submissionDate}</p>
                        </div>
                        <div className = "card-action">
                            {this.props.auth && this.props.auth.userID === comment.userID ? <a onClick = {() => this.props.deleteComment(comment._id, this.props.blog[0]._id, this.props.other.userID)} style = {{ cursor: 'pointer', textDecoration: 'none', color: 'red' }}><code>Delete Comment</code></a> : ""}
                            {this.props.auth && this.props.auth.userID === comment.userID ? <a href = {`/edit/${this.props.blog[0].Id}/${comment._id}/${this.props.blog[0].userId}`} style = {{ cursor: 'pointer', textDecoration: 'none', color: 'red' }}><code>Edit Comment</code></a> : ""}
                        </div>
                    </div>
                )
            
            })
        }
        
        return <div><strong>No comments posted. Be the first to comment on this blog post.</strong></div>
    }



    render() {
        return (
            <div>
                <center>
                    {console.log(this.props)}
                    {console.log(this.state)}
                    <h1>{this.props.other ? (this.props.other.spotifyUserName || this.props.other.googleUserName || this.props.other.username) : "User not found"}</h1>
                    <img src = {this.props.other ? (this.props.other.imageURLSpotify || this.props.other.imageURLGoogle || this.props.other.avatar ) : ""}/>
                    <div className = "card">
                        <div className = "card-content">
                            <div className = "card-title">
                                <strong>{this.props.blog[0] ? this.props.blog[0].title : ""}</strong>
                                <br />
                                Posted by {this.props.other ? (this.props.other.spotifyUserName || this.props.other.googleUserName || this.props.other.username) : "Unknown User"}
                            </div>
                            
                            <br />
                            <p>
                                {this.props.blog[0] ? this.props.blog[0].body : ""}
                            </p>
                           
                        </div>
                    </div>
                    <h5>Comments</h5>
                    <hr style = {{ height: '1px', backgroundColor: 'green'}}/>
                </center>
                    {this.props.blog[0] ? this.renderComments() : 'No comments.'}
                    <br />
                    <br />
                    <div id = "commentForm">
                        <strong>Comment:</strong> <textarea onChange = {(event) => this.setState({ comment: event.target.value })} />
                        <button className = "btn" type = "button" onClick = {() => this.addANewComment(this.state.comment, this.props.auth ? (this.props.auth.googleUserName || this.props.auth.spotifyUserName || this.props.auth.username) : "Anonymous User", this.props.auth ? this.props.auth.email : "anonymous@yahoo.com")} value = "Submit" > Submit <i className = "inline-icon material-icons">send</i></button>
                    </div>

                
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    {console.log(state)}
    return { auth: state.auth, other: state.other, otherBlogs: state.otherBlogs, blog: state.otherBlogs.filter(blog => blog.Id === window.location.pathname.split("/")[4]) }
}

export default connect(mapStateToProps, actions)(Blog);