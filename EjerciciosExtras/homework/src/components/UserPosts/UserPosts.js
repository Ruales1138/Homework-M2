import React from 'react';
import { connect } from 'react-redux';
import { getAllUserPosts } from '../../actions';
import './UserPosts.css';


export class UserPosts extends React.Component {
  constructor(props){
    super(props)
  }
  
  componentDidMount(){
    const userid = this.props.match.params.id;
    this.props.getAllUserPosts(userid);
  }

  render() {
   
    return (
      <div className="details">
        <h4 className="title">Posts del usuario {this.props.userPosts.map((post) => {
          return (
            <tr>
              <td>{post.id}</td>
              <td>{post.title}</td>
              <td>{post.body}</td>
            </tr> 
          )
        })}</h4>
        
      </div>
    )
  }
}

export function mapStateToProps(state) {
  return {
    userPosts: state.userPosts
  }
};

export function mapDispatchToProps(dispatch) {
  return {
    getAllUserPosts: (id) => dispatch(getAllUserPosts(id))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(UserPosts);