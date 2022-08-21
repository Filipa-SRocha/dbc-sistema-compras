import { listAllUsers } from "../../store/actions/adminActions";
import { useEffect } from "react";
import { connect } from 'react-redux';
import UserBeingListed from "./userBeingListed";
import { UsersListContainer } from './listUsers.styled'

const ListUsers = ({ usersList, dispatch }) => {

  useEffect(() => {
    listAllUsers(dispatch);
    // eslint-disable-next-line
  }, [])

  return (
    <UsersListContainer>
      {usersList.map((user) => (
        <UserBeingListed key={user.idUser} user={user} />
      ))}
    </UsersListContainer>
  )
}

const mapStateToProps = (state) => ({
  usersList: state.adminReducer.usersList,
});

export default connect(mapStateToProps)(ListUsers);