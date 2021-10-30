import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Blog extends React.Component {
    componentDidMount() {
        console.log(window.location.pathname.split("/"));
        this.props.fetchUserOther(window.location.pathname.split("/")[2]);
        this.props.fetchBlogsOther(window.location.pathname.split("/")[2]);
    }



    render() {
        return (
            <div>
                <center>
                    {console.log(this.props)}
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