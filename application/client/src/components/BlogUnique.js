import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import {Link} from 'react-router-dom';

class BlogUnique extends React.Component {
    componentDidMount() {
        console.log(window.location.pathname.split("/")[2]);
        this.props.fetchUserOther(window.location.pathname.split("/")[2]);
        this.props.fetchBlogsOther(window.location.pathname.split("/")[2]);
    }

    renderList() {
        return this.props.otherBlogs.map(blog => {
            return(
                
                    <div className = "card" key = {Math.random() * 10}>
                        <div className = "card-content">
                            <div className = "description">
                                <Link style = {{ cursor: 'pointer', textDecoration: 'none'}} href = {`/list/${this.props.other.userID}/${this.props.other.googleUserName || this.props.other.spotifyUserName || this.props.other.username}/${blog.Id}`}>
                                    <h5>{blog.title}</h5>
                                </Link>
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
                    {this.props.otherBlogs[0] ? this.renderList() : <center><strong>This user has not posted any Blogs.</strong></center>}
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