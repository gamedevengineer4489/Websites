import React from 'react';
import { editComment, fetchPostsAndUsersBlog, fetchUserOther, fetchBlogsOther } from '../actions';
import { connect } from 'react-redux';


class CommentEdit extends React.Component {

    state = { comment: null }

    componentDidMount() {
        this.props.fetchPostsAndUsersBlog();

        
    }

    

    render() {
        return(
            <div>
                 <form method = "post" name = "blogEditForm">
                    <h1>Edit Comment</h1>
                    {console.log(this.props)}
                    {this.props.blog[0] ? console.log(this.props.blog[0].comments.filter(comment => comment._id === window.location.href.split('/')[5])[0]) : "null"}
                    {console.log(window.location.href.split('/'))}
                    <textarea defaultValue = {this.props.blog[0] ? this.props.blog[0].comments.filter(comment => comment._id === window.location.href.split('/')[5])[0].comment : "" } onChange = {(event) => {this.setState({ comment: event.target.value})}} minLength="1" required/>
            
                    {this.props.blog[0] ? <a href = {`/list/${this.props.blog[0].userId}/${this.props.blog[0].username}/${this.props.blog[0].Id}`}><button className = "btn" type = "button" onClick = {() => { this.props.editComment(this.props.blog[0].comments.filter(comment => comment._id === window.location.href.split('/')[5])[0]._id, this.props.blog[0].Id, this.props.other.userID, this.state.comment, this.props.blog[0].comments.filter(comment => comment._id === window.location.href.split('/')[5])[0].username)}}> Submit Edit <i className = "inline-icon material-icons">send</i></button></a> : null}
                </form>
            </div>
           
            
        )
    }
}

const mapStateToProps = function(state) {
    console.log(state.blogs);
    // return { blog: state.blogs.filter(function(blog) {return blog.Id === window.location.pathname.substring(6)} ), comment: state.blogs.filter(function(blog) {return blog.Id === window.location.pathname.substring(6)} ).comments.filter(function(comment) { return comment._id === window.location.pathname.substring(7)}) }
    return { blog: state.blogs.filter(function(blog) {return blog.Id === window.location.href.split('/')[4]} ), other: state.other }
}

export default connect(mapStateToProps, { editComment, fetchPostsAndUsersBlog, fetchBlogsOther, fetchUserOther })(CommentEdit);