import users from '../data/data.json';
import UserCard from './UserCard';

const UsersList = () => {
    return (  
        <div className='d-flex flex-wrap justify-content-center px-sm-2'> 
            {users.map(user => (
                <UserCard user={user} key={user.id} />   
            ))}
        </div>
    );
}
 
export default UsersList;