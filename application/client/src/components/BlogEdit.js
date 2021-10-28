import React from 'react';
import { editPost, fetchPostsAndUsersBlog } from '../actions';
import { connect } from 'react-redux';


class BlogEdit extends React.Component {

    state = { title: null, body: null }

    componentDidMount() {
        this.props.fetchPostsAndUsersBlog();
       
    }

    

    render() {
        return(
            
            <form method = "post" name = "blogEditForm">
                    <h1>Edit Blog Post</h1>
                    
                    Title: <input defaultValue = {this.props.blog[0] ? this.props.blog[0].title : "" } onChange = {(event) => {this.setState({ title: event.target.value})}} minLength="1" maxLength="120" required/>
                    Message: <textarea defaultValue = {this.props.blog[0] ? this.props.blog[0].body : "" } onChange = {(event) => {this.setState({ body: event.target.value})}}  minLength="1" required/>

                    <a href = "/list"><button className = "btn" type = "button" onClick = {() => { this.props.editPost(this.props.blog[0].Id, this.state.title ? this.state.title : this.props.blog[0].title, this.state.body ? this.state.body : this.props.blog[0].body)}}  > Submit Edit <i className = "inline-icon material-icons">send</i></button></a> 
            </form>
        )
    }
}

const mapStateToProps = function(state) {
    console.log(state.blogs);
    return { blog: state.blogs.filter(function(blog) {return blog.Id === window.location.pathname.substring(6)} ) }
}

export default connect(mapStateToProps, { editPost, fetchPostsAndUsersBlog })(BlogEdit);