import React from 'react';
import { Link } from 'react-router-dom';

class Discover extends React.Component {
  constructor(props) {
    super(props);
    this.allUsers = this.allUsers.bind(this);
  }

  componentDidMount() {
    this.props.fetchNotFollowedUsers();
  }

  allUsers() {
    const { discover, createFollow, fetchNotFollowedUsers } = this.props;
    if(!discover) {
      return(
       <div className="rainbow-progress-bar"></div>
     );
    }

    let allUsers = discover.map( (user, idx) => {
      return (
        <li key={idx} className='user-list-item'>
          <section>
            <img src={user.avatar_url}></img>
            &nbsp; &nbsp;
            <div>
              <p><Link to={`/users/${user.userId}`}>{user.username}</Link></p>
              <span>{user.name}</span>
            </div>
          </section>
          <button className='follow-btn' onClick={ () => createFollow(user.userId)
            .then( () => fetchNotFollowedUsers()) }>Follow</button>
        </li>
      );
    });
    return allUsers;
  }

  render() {
    const allUsers = this.allUsers();

    return (
      <section className='discover-user-body'>
        <ul className='user-list'>
          { allUsers }
        </ul>
      </section>
    );
  }
}

export default Discover;
