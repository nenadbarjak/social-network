import { useParams } from 'react-router-dom';
import users from '../data/data.json';
import { getFriends, getFriendsOfFriends, getSuggestedFriends } from '../utils/users';

const User = () => {
    const {id} = useParams()
    const selectedUser = users.filter(user => user.id === Number(id))[0]

    const friends = getFriends(users, selectedUser)
    const friendsOfFriends = getFriendsOfFriends(users, selectedUser)
    const suggestedFriends = getSuggestedFriends(friendsOfFriends, selectedUser)
    console.log(suggestedFriends)

    return (  
        <div>
            <h1>{selectedUser.firstName} {selectedUser.surname}</h1>
        </div>
    );
}
 
export default User;