import { Link } from 'react-router-dom';
import users from '../data/data.json';

const UsersList = () => {
    return (  
        <div className='users-list'>
            {users.map(user => (
                <Link to={`/user/${user.id}`} key={user.id} className='user-link'>
                    <div className='user-card'>
                        <h2>{user.firstName} {user.surname}</h2>
                        <h3>Age: {user.age}</h3>
                    </div>
                </Link>
                
            ))}
        </div>
    );
}
 
export default UsersList;