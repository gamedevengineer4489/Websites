import React from 'react';
import { fetchPostsAndUsersBlog } from '../actions';
import { connect } from 'react-redux';

class BlogList extends React.Component {
    componentDidMount() {
        this.props.fetchPostsAndUsersBlog();
        console.log(this.props.blogs);
    }

    render() {
        return(
            <div>
                List of blog posts
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    return { blogs: state.blogs }
}

export default connect(mapStateToProps, { fetchPostsAndUsersBlog })(BlogList);