import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import maleAvatar from '../img/male.png';
import femaleAvatar from '../img/female.png';

const UserCard = ({ user, cardIsLink }) => {
    const imgSrc = user.gender === 'male' ? maleAvatar : femaleAvatar;


    return (  
        <Card as={cardIsLink ? Link : 'div'} to={`/user/${user.id}`} className='user-card m-3'>
            <Card.Img variant="top" src={imgSrc} className='card__img' />
            <Card.Body>
                <Card.Title>{user.firstName} {user.surname}</Card.Title>
                {user.age &&
                    <Card.Text>Age: {user.age}</Card.Text>
                }
            </Card.Body>
        </Card>
    );
}
 
export default UserCard;