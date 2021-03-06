import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

// So each users blog can be accessed easily
class AllUsers extends React.Component {
    componentDidMount() {
        this.props.obtainAllUsers();
    }

    renderUsers() {
        return this.props.users.map(user => {
            return(
                <div>
                    <a href = {`/list/${user.userID}/${user.googleUserName || user.spotifyUserName || user.username}`} style = {{ textDecoration: 'none', fontFamily: 'fantasy', fontSize: 'large' }}><code style = {{ color: 'blue'}}>{user.googleUserName || user.spotifyUserName || user.username}</code></a>
                    <br />
                </div>
                
                
            )
        })
    }

    render() {
        return(
            <div>
                <center>
                    <h3 >All Users Blogs</h3>
                    <br />
                    {this.props.users.length > 0 ? this.renderUsers() : "No Users have accessed this website yet."}
                </center>

            </div>
        )
    }
}

const mapStateToProps = function(state) {
    console.log(state);
    return {users: state.users}
}

export default connect(mapStateToProps, actions)(AllUsers);