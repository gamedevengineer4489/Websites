import React from 'react';
import { editPost, fetchPostsAndUsersBlog } from '../actions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class BlogEdit extends React.Component {

    state = { title: null, body: null }

    componentDidMount() {
        this.props.fetchPostsAndUsersBlog();
       
    }

    

    render() {
        return(
            
            <form method = "post" name = "blogEditForm">
                    <h1>Edit Blog Post</h1>
                    Title: <input onChange = {(event) => {this.setState({ title: event.target.value})}} minlength="1" maxlength="120" required/>
                    Message: <textarea onChange = {(event) => {this.setState({ body: event.target.value})}}  minlength="1" required/>

                    <a href = "/list"><button className = "btn" type = "button" onClick = {() => this.props.editPost(this.props.blog[0].Id, this.state.title, this.state.body )}  > Submit Edit <i className = "inline-icon material-icons">send</i></button></a> 
            </form>
        )
    }
}

const mapStateToProps = function(state) {
    
    return { blog: state.blogs.filter(function(blog) {return blog.Id === window.location.pathname.substring(6)} ) }
}

export default connect(mapStateToProps, { editPost, fetchPostsAndUsersBlog })(BlogEdit);