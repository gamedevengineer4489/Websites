import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class BlogUnique extends React.Component {
    componentDidMount() {
        console.log(window.location.pathname.split("/")[2]);
        this.props.fetchUserOther(window.location.pathname.split("/")[2]);
        this.props.fetchBlogsOther(window.location.pathname.split("/")[2]);
    }

    renderList() {
        return this.props.otherBlogs.map(blog => {
            return(
                
                    <div className = "container" key = {Math.random() * 10}>
                        <div className = "card-content">
                            <div className = "description">
                                <a style = {{ cursor: 'pointer', textDecoration: 'none'}} href = {`/list/${this.props.other.userID}/${this.props.other.googleUserName || this.props.other.spotifyUserName || this.props.other.username}/${blog.Id}`}>
                                    <h5>{blog.title}</h5>
                                </a>
                                    <p style = {{ wordBreak: 'break-all'}}>{blog.body} </p>
                                    <p>{blog.date_created}</p>
                            </div>
                        </div>
                        <br />
                        <br />
                    </div>
                
            )
        })
    }

    render() {
        return (
            <div>
                <center>
                    <h1>{this.props.other ? (this.props.other.spotifyUserName || this.props.other.googleUserName || this.props.other.username) : "User not found"}</h1>
                    <img src = {this.props.other ? (this.props.other.imageURLSpotify || this.props.other.imageURLGoogle || this.props.other.avatar ) : ""}/>
                    <hr />
                    <br />
                    {this.renderList()}
                </center>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    {console.log(state)}
    return { auth: state.auth, other: state.other, otherBlogs: state.otherBlogs }
}


export default connect(mapStateToProps, actions)(BlogUnique);