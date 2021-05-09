import UserCard from './UserCard';

const UsersList = ({ users, title, cardIsLink }) => {
    return (
        <div className='d-flex flex-column'>
            <h2 className='align-self-center my-3'>{title}</h2>  
            <div className='d-flex flex-wrap justify-content-center px-sm-2'> 
                {users.map(user => (
                    <UserCard 
                        user={user} 
                        key={user.id} 
                        cardIsLink={cardIsLink}    
                    />   
                ))}
            </div>
        </div>
    );
}
 
export default UsersList;