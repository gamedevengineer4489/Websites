import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Blog extends React.Component {
    constructor(props) {
        super(props);
        this.state = { comment: null, username: null, email: null }
    }

    componentDidMount() {
        console.log(window.location.pathname.split("/"));
        this.props.fetchUserOther(window.location.pathname.split("/")[2]);
        this.props.fetchBlogsOther(window.location.pathname.split("/")[2]);
    }

    addANewComment(comment) {
        // People can only post comments if logged in
        this.setState({
            comment: comment,
            username: this.props.auth ? (this.props.auth.googleUserName || this.props.auth.spotifyUserName || this.props.auth.username) : "Anonymous User",
            email: this.props.auth ? this.props.auth.email : "anonymous@yahoo.com"
        })

        if(this.state.comment && this.state.username && this.state.email)
        {
            // submit comment
            this.props.submitComment(this.state.comment, this.state.username, this.state.email, window.location.pathname.split("/")[4])
        }
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
                            <br />
                        </div>
                    </div>
                    List of Comments
                    <br />
                    <br />
                    <div id = "commentForm">
                        <strong>Comment:</strong> <textarea onChange = {(event) => this.setState({ comment: event.target.value })} />
                        <button className = "btn" type = "button" onClick = {() => this.addANewComment(this.state.comment)} value = "Submit" > Submit <i className = "inline-icon material-icons">send</i></button>
                    </div>
                </center>
                
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    {console.log(state)}
    return { auth: state.auth, other: state.other, otherBlogs: state.otherBlogs, blog: state.otherBlogs.filter(blog => blog.Id === window.location.pathname.split("/")[4]) }
}

export default connect(mapStateToProps, actions)(Blog);