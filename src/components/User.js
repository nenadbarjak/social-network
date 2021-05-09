import { useParams } from 'react-router-dom';
import users from '../data/data.json';
import { getFriends, getFriendsOfFriends, getSuggestedFriends } from '../utils/users';
import maleAvatar from '../img/male.png';
import femaleAvatar from '../img/female.png';
import UsersList from './UsersList';

const User = () => {
    const {id} = useParams()
    const selectedUser = users.filter(user => user.id === Number(id))[0]

    const friends = getFriends(users, selectedUser)
    const friendsOfFriends = getFriendsOfFriends(users, selectedUser)
    const suggestedFriends = getSuggestedFriends(friendsOfFriends, selectedUser)

    const imgSrc = selectedUser.gender === 'male' ? maleAvatar : femaleAvatar;

    return (
        <div>  
            <div className='d-flex flex-column align-items-center my-3'>
                <h1>{selectedUser.firstName} {selectedUser.surname}</h1>
                <img src={imgSrc} alt="avatar" style={{width: '250px'}} />
            </div>
            <UsersList 
                users={friends} 
                title='Your friends'    
            />
            <UsersList 
                users={friendsOfFriends} 
                title="Friends of your friends"    
            />
            {suggestedFriends.length > 0 &&
                <UsersList 
                    users={suggestedFriends} 
                    title='Suggested friends'    
                />
            }           
        </div>
    );
}
 
export default User;