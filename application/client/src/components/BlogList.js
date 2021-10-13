import React from 'react';
import { fetchPostsAndUsersBlog } from '../actions';
import { connect } from 'react-redux';
import UserHeader from './UserHeader';

class BlogList extends React.Component {
    componentDidMount() {
        this.props.fetchPostsAndUsersBlog();
        console.log(this.props.blogs);
    }

    renderList() {
            return this.props.blogs.map(blog => {
                return(
                    <div className = "item" key = {blog.id}>
                        <span>
                        
                        <UserHeader userId = {blog.userId} />
                        </span>
                        <div className = "content">
                            <div className = "description">
                                <h5>{blog.title}</h5>
                                <p>{blog.body}</p>
                            </div>
                        </div>
                        <br />
                    </div>
            )
        })
    }

    render() {
        return(
            <div>
                {this.renderList()}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    return { blogs: state.blogs }
}

export default connect(mapStateToProps, { fetchPostsAndUsersBlog })(BlogList);